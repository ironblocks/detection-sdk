// Original file: src/rpc/proto/detection.proto

import type { Asset as _ironblocks_Asset, Asset__Output as _ironblocks_Asset__Output } from '../ironblocks/Asset';

export interface Protocol {
    'name'?: (string);
    'assets'?: (_ironblocks_Asset)[];
}

export interface Protocol__Output {
    'name': (string);
    'assets': (_ironblocks_Asset__Output)[];
}
