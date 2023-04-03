// Internal.
import type { DetectorClass } from './detectors/detector';
import ContractSenderDetector from './detectors/contract-sender';

export default function detectorFactory(id: string): DetectorClass {
    switch (id) {
    case 'ib-1-1':
        return ContractSenderDetector;
    default:
        throw new Error('No matching detector found');
    }
}
