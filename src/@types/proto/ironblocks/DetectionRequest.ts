// Original file: src/detection/proto/detection.proto

import type { TransactionInspectionContext as _ironblocks_TransactionInspectionContext, TransactionInspectionContext__Output as _ironblocks_TransactionInspectionContext__Output } from '../ironblocks/TransactionInspectionContext';

export interface DetectionRequest {
    'txContext'?: (_ironblocks_TransactionInspectionContext | null);
    'detectorId'?: (string);
}

export interface DetectionRequest__Output {
    'txContext': (_ironblocks_TransactionInspectionContext__Output | null);
    'detectorId': (string);
}
