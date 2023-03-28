import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { DetectionClient as _ironblocks_DetectionClient, DetectionDefinition as _ironblocks_DetectionDefinition } from './ironblocks/Detection';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
    new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
    google: {
        protobuf: {
            ListValue: MessageTypeDefinition
            NullValue: EnumTypeDefinition
            Struct: MessageTypeDefinition
            Timestamp: MessageTypeDefinition
            Value: MessageTypeDefinition
        }
    }
    ironblocks: {
        Asset: MessageTypeDefinition
        Detection: SubtypeConstructor<typeof grpc.Client, _ironblocks_DetectionClient> & { service: _ironblocks_DetectionDefinition }
        DetectionRequest: MessageTypeDefinition
        DetectionResponse: MessageTypeDefinition
        DetectionSubject: MessageTypeDefinition
        Protocol: MessageTypeDefinition
        TransactionInspectionContext: MessageTypeDefinition
        TransactionTrace: MessageTypeDefinition
    }
}

