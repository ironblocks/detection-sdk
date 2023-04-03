// Original file: src/rpc/proto/detection.proto

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
    'calls'?: (TransactionTrace)[];
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
    'calls': (TransactionTrace__Output)[];
}
