// Original file: src/rpc/proto/detection.proto

import type { TransactionInspectionContext as _ironblocks_TransactionInspectionContext, TransactionInspectionContext__Output as _ironblocks_TransactionInspectionContext__Output } from '../ironblocks/TransactionInspectionContext';
import type { Struct as _google_protobuf_Struct, Struct__Output as _google_protobuf_Struct__Output } from '../google/protobuf/Struct';

export interface DetectionRequest {
    'txContext'?: (_ironblocks_TransactionInspectionContext | null);
    'detectorId'?: (string);
    'detectorConfig'?: (_google_protobuf_Struct | null);
}

export interface DetectionRequest__Output {
    'txContext': (_ironblocks_TransactionInspectionContext__Output | null);
    'detectorId': (string);
    'detectorConfig': (_google_protobuf_Struct__Output | null);
}
