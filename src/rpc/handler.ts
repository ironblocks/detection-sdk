// Internal.
import type { DetectionRequest__Output } from '../@types/proto/ironblocks/DetectionRequest';
import type { DetectionResponse } from '../@types/proto/ironblocks/DetectionResponse';
import { getDetectorClass } from '../detection/factory';
import TransactionInspectionContext from '../lib/transaction-context';

export async function detectionHandler(req, callback) {
    const { detectorId, txContext: rawTxContext } = req.request as DetectionRequest__Output;

    try {
        const txContext = new TransactionInspectionContext(rawTxContext);

        const detector = new (getDetectorClass(detectorId))(
            txContext,
            txContext.protocol,
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
