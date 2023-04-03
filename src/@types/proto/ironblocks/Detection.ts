/* eslint-disable max-len */
// Original file: src/rpc/proto/detection.proto

import type * as grpc from '@grpc/grpc-js';
import type { MethodDefinition } from '@grpc/proto-loader';
import type { DetectionRequest as _ironblocks_DetectionRequest, DetectionRequest__Output as _ironblocks_DetectionRequest__Output } from './DetectionRequest';
import type { DetectionResponse as _ironblocks_DetectionResponse, DetectionResponse__Output as _ironblocks_DetectionResponse__Output } from './DetectionResponse';

export interface DetectionClient extends grpc.Client {
    runDetection(argument: _ironblocks_DetectionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ironblocks_DetectionResponse__Output>): grpc.ClientUnaryCall;
    runDetection(argument: _ironblocks_DetectionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_ironblocks_DetectionResponse__Output>): grpc.ClientUnaryCall;
    runDetection(argument: _ironblocks_DetectionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_ironblocks_DetectionResponse__Output>): grpc.ClientUnaryCall;
    runDetection(argument: _ironblocks_DetectionRequest, callback: grpc.requestCallback<_ironblocks_DetectionResponse__Output>): grpc.ClientUnaryCall;
    runDetection(argument: _ironblocks_DetectionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ironblocks_DetectionResponse__Output>): grpc.ClientUnaryCall;
    runDetection(argument: _ironblocks_DetectionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_ironblocks_DetectionResponse__Output>): grpc.ClientUnaryCall;
    runDetection(argument: _ironblocks_DetectionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_ironblocks_DetectionResponse__Output>): grpc.ClientUnaryCall;
    runDetection(argument: _ironblocks_DetectionRequest, callback: grpc.requestCallback<_ironblocks_DetectionResponse__Output>): grpc.ClientUnaryCall;

}

export interface DetectionHandlers extends grpc.UntypedServiceImplementation {
    runDetection: grpc.handleUnaryCall<_ironblocks_DetectionRequest__Output, _ironblocks_DetectionResponse>;

}

export interface DetectionDefinition extends grpc.ServiceDefinition {
    runDetection: MethodDefinition<_ironblocks_DetectionRequest, _ironblocks_DetectionResponse, _ironblocks_DetectionRequest__Output, _ironblocks_DetectionResponse__Output>
}
