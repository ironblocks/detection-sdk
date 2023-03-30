// Internal.
import type { Asset, Protocol } from '../../@types/models';
import type { Transaction, TransactionInspectionContext } from '../../@types/web3';
import { Logger, getLogger } from '../../logger';

type DetectorConfig = any;

export enum DetectionStatus {
    DETECTED = 'detected',
    NOT_DETECTED = 'notDetected',
    PENDING = 'pending',
    FAILED = 'failed'
}

export default abstract class Detector {
    protected txContext: TransactionInspectionContext;

    protected inspectedProtocol: Protocol;

    protected config: DetectorConfig;

    protected status: DetectionStatus;

    private isInvoked: boolean;

    private logger: Logger;

    constructor(
        txContext?: TransactionInspectionContext,
        protocol?: Protocol,
        config?: DetectorConfig,
    ) {
        this.txContext = txContext;
        this.inspectedProtocol = protocol;
        this.config = config;
        this.status = DetectionStatus.PENDING;
        this.isInvoked = false;
        this.logger = getLogger(this.constructor.name);
    }

    public get isDetected(): boolean {
        return this.status === DetectionStatus.DETECTED;
    }

    public getStatus(): DetectionStatus {
        return this.status;
    }

    public abstract formatDetectionMessage(): string;

    public async runDetection(): Promise<void> {
        if (this.isInvoked) {
            this.status = DetectionStatus.FAILED;
            this.logger.error('Detection should run only once');
            return;
        }

        this.isInvoked = true;

        try {
            this.logger.info('Starting detection');
            await this.detect();
        } catch (err) {
            this.logger.error('Detection failed', err);
            this.status = DetectionStatus.FAILED;
        } finally {
            this.logger.info('Finished detection');
        }
    }

    /**
     * Detecting suspicious behavior, and if so, setting "isDetected" flag.
     */
    protected abstract detect(): void | Promise<void>;

    protected getAsset(address: string): Asset | null {
        return this.txContext.asset(address);
    }

    protected isCallFromProtocol(tx: Transaction): boolean {
        return this.txContext.isAsset(tx.from);
    }

    protected isCallToProtocol(tx: Transaction): boolean {
        return this.txContext.isAsset(tx.to);
    }
}

export interface DetectorClass {
    new (
        txContext: TransactionInspectionContext,
        protocol?: Protocol,
        config?: DetectorConfig
    ): Detector;
}
