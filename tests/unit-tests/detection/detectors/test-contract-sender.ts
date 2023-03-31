// Builtin.
import assert from 'assert';
// Internal.
import type { Asset } from '../../../../src/@types/models';
import ContractSenderDetector from '../../../../src/detection/detectors/contract-sender';
import { runDetection } from '../../../lib/utils';
import contractProtocolInvocationTrace from '../../trace-files/contract-sender/contract-protocol-invocation.json';
import eoaProtocolInvocationTrace from '../../trace-files/contract-sender/eoa-protocol-invocation.json';

export default function suite() {
    const asset = {
        chainId: 1,
        address: '0xe85a08cf316f695ebe7c13736c8cc38a7cc3e944',
        admins: [],
    } as Asset;

    const protocol = {
        name: 'testProtocol',
        assets: [asset],
    };

    describe('Detect', () => {
        it('should detect for a protocol invocation from a contract address', async () => {
            const detector = await runDetection(
                ContractSenderDetector,
                contractProtocolInvocationTrace,
                protocol,
            );
            assert(detector.isDetected);
        });

        it('should not detect for a protocol invocation from an externally owned address', async () => {
            const detector = await runDetection(
                ContractSenderDetector,
                eoaProtocolInvocationTrace,
                protocol,
            );
            assert(!detector.isDetected);
        });
    });
}
