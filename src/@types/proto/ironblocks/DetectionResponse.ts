// Original file: src/rpc/proto/detection.proto

import type { DetectionSubject as _ironblocks_DetectionSubject, DetectionSubject__Output as _ironblocks_DetectionSubject__Output } from './DetectionSubject';
import type { Struct as _google_protobuf_Struct, Struct__Output as _google_protobuf_Struct__Output } from '../google/protobuf/Struct';

export interface DetectionResponse {
    'detected'?: (boolean);
    'message'?: (string);
    'transferredUSD'?: (number | string);
    'subject'?: (_ironblocks_DetectionSubject | null);
    'extra'?: (_google_protobuf_Struct | null);
}

export interface DetectionResponse__Output {
    'detected': (boolean);
    'message': (string);
    'transferredUSD': (number);
    'subject': (_ironblocks_DetectionSubject__Output | null);
    'extra': (_google_protobuf_Struct__Output | null);
}
