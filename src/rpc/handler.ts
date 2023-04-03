// Internal.
import type { DetectionRequest__Output } from '../@types/proto/ironblocks/DetectionRequest';
import type { DetectionResponse } from '../@types/proto/ironblocks/DetectionResponse';
import type { DetectorClass } from '../detection/detectors/detector';
import detectorFactory from '../detection/factory';
import TransactionInspectionContext from '../lib/transaction-context';

export default async function detectionHandler(req, callback): Promise<void> {
    const {
        detectorId,
        detectorConfig,
        txContext: rawTxContext,
    } = req.request as DetectionRequest__Output;

    try {
        const txContext = new TransactionInspectionContext(rawTxContext);

        const Class: DetectorClass = detectorFactory(detectorId);
        const detector = new Class(
            txContext,
            txContext.protocol,
            detectorConfig,
        );
        detector.runDetection();

        const response: DetectionResponse = {
            detected: detector.isDetected,
            message: detector.formatDetectionMessage(),
        };
        callback(null, response);
    } catch (err) {
        callback(err, null);
    }
}
