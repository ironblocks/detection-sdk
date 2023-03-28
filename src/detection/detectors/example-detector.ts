// Internal.
import Detector, { DetectionStatus } from './detector';

export default class ExampleDetector extends Detector {
    detect(): void {
        this.status = DetectionStatus.DETECTED;
    }

    formatDetectionMessage(): string {
        // Optional.
        return '';
    }
}
