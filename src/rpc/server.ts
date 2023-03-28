// Builtin.
import path from 'path';
// 3rd party.
import { loadSync } from '@grpc/proto-loader';
import { loadPackageDefinition, Server, ServerCredentials } from '@grpc/grpc-js';
// Internal.
import type { ProtoGrpcType } from '../@types/proto/detection';
import type { DetectionDefinition } from '../@types/proto/ironblocks/Detection';
import type { DetectionRequest } from '../@types/proto/ironblocks/DetectionRequest';
import type { DetectionResponse } from '../@types/proto/ironblocks/DetectionResponse';

const PROTO_FILE_NAME = 'detection.proto';
const PROTO_FILE_PATH = path.join(__dirname, 'proto', PROTO_FILE_NAME);

const packageDefinition = loadSync(
    PROTO_FILE_PATH,
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true,
    },
);
const packageObject = (
    loadPackageDefinition(packageDefinition).ironblocks as unknown
) as ProtoGrpcType['ironblocks'];

export default class DetectionServer {
    private listeningAddress: string;

    private server: Server;

    constructor(host: string, port: number) {
        this.listeningAddress = `${host}:${port}`;
        this.server = new Server();
    }

    async start() {
        this.setup();

        this.server.bindAsync(
            this.listeningAddress,
            ServerCredentials.createInsecure(),
            (err, port) => {
                if (err) {
                    console.error('Failed to bind address');
                    throw err;
                }

                console.log('Server listenning', port);
                this.server.start();
            }
        );
    }

    private async setup() {
        this.server.addService(packageObject.Detection.service as DetectionDefinition, {
            runDetection: (req, callback) => {
                console.log(req);
                const response: DetectionResponse = {
                    detected: true,
                }
                callback(null, response);
            }
        });
    }
}

