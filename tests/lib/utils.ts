// Internal.
import type { Protocol } from '../../src/@types/models';
import type { TransactionTrace } from '../../src/@types/web3';
import type { DetectorClass, DetectorConfig } from '../../src/detection/detectors/detector';
import TransactionInspectionContext from '../../src/lib/transaction-context';

type Overrides = { [key: string]: any };

export function wrapTxContext(
    trace?: TransactionTrace,
    protocol?: Protocol,
    overrides?: Overrides,
): TransactionInspectionContext {
    return new TransactionInspectionContext({
        chainId: 1,
        hash: trace?.hash ?? '0x0',
        timestamp: new Date().toISOString(),
        trace,
        assets: protocol?.assets ?? [],
        protocol,
        ...overrides,
    });
}

export async function runDetection(
    Class: DetectorClass,
    trace: TransactionTrace,
    protocol?: Protocol,
    config?: DetectorConfig,
) {
    const detector = new Class(
        wrapTxContext(trace, protocol),
        protocol,
        config,
    );
    await detector.runDetection();
    return detector;
}
