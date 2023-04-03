// Internal.
import Detector, { DetectionStatus } from './detector';

export default class ContractSenderDetector extends Detector {
    detect(): void {
        this.status = this.isInvokedByContract()
            ? DetectionStatus.DETECTED
            : DetectionStatus.NOT_DETECTED;
    }

    /**
     * @returns true iff the protocol was invoked by a contract address.
     */
    isInvokedByContract(): boolean {
        const { trace } = this.txContext;
        return !this.isCallToProtocol(trace);
    }

    // eslint-disable-next-line class-methods-use-this
    formatDetectionMessage(): string {
        // Optional.
        return '';
    }
}
