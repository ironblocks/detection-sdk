// Original file: src/detection/proto/detection.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../google/protobuf/Timestamp';
import type { TransactionTrace as _ironblocks_TransactionTrace, TransactionTrace__Output as _ironblocks_TransactionTrace__Output } from '../ironblocks/TransactionTrace';

export interface TransactionInspectionContext {
    'hash'?: (string);
    'timestamp'?: (_google_protobuf_Timestamp | null);
    'trace'?: (_ironblocks_TransactionTrace | null);
}

export interface TransactionInspectionContext__Output {
    'hash': (string);
    'timestamp': (_google_protobuf_Timestamp__Output | null);
    'trace': (_ironblocks_TransactionTrace__Output | null);
}
