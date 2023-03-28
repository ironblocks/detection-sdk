// Internal.
import type { DetectorClass } from "./detectors/detector";
import ExampleDetector from "./detectors/example-detector";

export function getDetectorClass(id: string): DetectorClass {
    switch (id) {
    default:
        return ExampleDetector;
    }
}