// Builtin.
import path from 'path';
// 3rd party.
import { loadSync } from '@grpc/proto-loader';
import { loadPackageDefinition, Server, ServerCredentials } from '@grpc/grpc-js';
// Internal.
import type { ProtoGrpcType } from '../@types/proto/detection';
import { Logger, getLogger } from '../logger';
import detectionHandler from './handler';

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

    private logger: Logger;

    constructor(host: string, port: number) {
        this.listeningAddress = `${host}:${port}`;
        this.server = new Server();
        this.logger = getLogger(this.constructor.name);
    }

    async start(): Promise<void> {
        this.setup();
        this.bind();
    }

    private async setup(): Promise<void> {
        const { service } = packageObject.Detection;
        this.server.addService(service, {
            runDetection: detectionHandler,
        });
    }

    private bind(): void {
        this.server.bindAsync(
            this.listeningAddress,
            ServerCredentials.createInsecure(),
            (err, port) => {
                if (err) {
                    this.logger.error('Failed to bind address', err);
                    throw err;
                }

                this.logger.info('Server listenning', { port });
                this.server.start();
            },
        );
    }
}
