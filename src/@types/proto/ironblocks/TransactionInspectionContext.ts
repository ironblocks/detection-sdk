// Original file: src/rpc/proto/detection.proto

import type { TransactionTrace as _ironblocks_TransactionTrace, TransactionTrace__Output as _ironblocks_TransactionTrace__Output } from './TransactionTrace';
import type { Asset as _ironblocks_Asset, Asset__Output as _ironblocks_Asset__Output } from './Asset';
import type { Protocol as _ironblocks_Protocol, Protocol__Output as _ironblocks_Protocol__Output } from './Protocol';

export interface TransactionInspectionContext {
    'chainId'?: (number);
    'hash'?: (string);
    'timestamp'?: (string);
    'trace'?: (_ironblocks_TransactionTrace | null);
    'assets'?: (_ironblocks_Asset)[];
    'protocol'?: (_ironblocks_Protocol | null);
}

export interface TransactionInspectionContext__Output {
    'chainId': (number);
    'hash': (string);
    'timestamp': (string);
    'trace': (_ironblocks_TransactionTrace__Output | null);
    'assets': (_ironblocks_Asset__Output)[];
    'protocol': (_ironblocks_Protocol__Output | null);
}
