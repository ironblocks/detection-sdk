// Internal.
import Detector, { DetectionStatus } from './detector';

export default class ContractSenderDetector extends Detector {
    detect(): void {
        this.status = this.isInvokedByContract()
            ? DetectionStatus.DETECTED
            : DetectionStatus.NOT_DETECTED;
    }

    /**
     * @returns true iff the protocol was invoked by a contract address.
     */
    isInvokedByContract() {
        const { trace } = this.txContext;
        return !this.isCallToProtocol(trace);
    }

    formatDetectionMessage(): string {
        // Optional.
        return '';
    }
}
