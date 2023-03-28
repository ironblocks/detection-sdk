// Original file: src/detection/proto/detection.proto

import type { TransactionTrace as _ironblocks_TransactionTrace, TransactionTrace__Output as _ironblocks_TransactionTrace__Output } from '../ironblocks/TransactionTrace';

export interface TransactionTrace {
    'type'?: (string);
    'from'?: (string);
    'to'?: (string);
    'gas'?: (Buffer | Uint8Array | string);
    'gasprice'?: (Buffer | Uint8Array | string);
    'hash'?: (Buffer | Uint8Array | string);
    'value'?: (Buffer | Uint8Array | string);
    'data'?: (string);
    'input'?: (Buffer | Uint8Array | string);
    'nonce'?: (Buffer | Uint8Array | string);
    'error'?: (string);
    'calls'?: (_ironblocks_TransactionTrace)[];
    'detected'?: (string)[];
}

export interface TransactionTrace__Output {
    'type': (string);
    'from': (string);
    'to': (string);
    'gas': (Buffer);
    'gasprice': (Buffer);
    'hash': (Buffer);
    'value': (Buffer);
    'data': (string);
    'input': (Buffer);
    'nonce': (Buffer);
    'error': (string);
    'calls': (_ironblocks_TransactionTrace__Output)[];
    'detected': (string)[];
}
