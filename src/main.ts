// Internal.
import { serverConfig } from './config';
import DetectionServer from './rpc/server';

async function main() {
    const server = new DetectionServer(serverConfig.HOST, serverConfig.PORT);
    await server.start();
}

main();
