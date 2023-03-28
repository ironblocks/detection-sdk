// Original file: src/rpc/proto/detection.proto

import type { TransactionTrace as _ironblocks_TransactionTrace, TransactionTrace__Output as _ironblocks_TransactionTrace__Output } from '../ironblocks/TransactionTrace';

export interface TransactionTrace {
    'type'?: (string);
    'from'?: (string);
    'to'?: (string);
    'value'?: (string);
    'input'?: (string);
    'output'?: (string);
    'error'?: (string);
    'gas'?: (string);
    'gasprice'?: (string);
    'calls'?: (_ironblocks_TransactionTrace)[];
}

export interface TransactionTrace__Output {
    'type': (string);
    'from': (string);
    'to': (string);
    'value': (string);
    'input': (string);
    'output': (string);
    'error': (string);
    'gas': (string);
    'gasprice': (string);
    'calls': (_ironblocks_TransactionTrace__Output)[];
}
