# Detection System

## Guide
To add a new detector just follow the following steps:

1. Create a new file in the `detectors` folder and extend the base `Detector` [class](./detectors/detector.ts):
   ```js
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
   ```

2. The `Ironblocks` team will provide you with a `unique-id` for the new detector, e.g.:
   ```bash
   "external-detector-1-12345"
   ```

3. Add the detector to the [detectors factory](./factory.ts):
   ```js
   // Import your detector here
   import ExampleDetector from "./detectors/example-detector";

   export function getDetectorClass(id: string): DetectorClass {
      switch (id) {
      ...
      // Insert code (start)
      case 'external-detector-1-12345':
         return ExampleDetector;
      // Insert code (end)
      ...
      default:
         return ExampleDetector;
      }
   }
   ```

4. Build and restart:
   ```bash
   docker-compose build
   docker-compose up
   ```

<br>

## You completed the guide, now what?

Once we detect a transaction related to your protocol we will invoke your registered detectors.
<br>
You are all set now, we will take care of the rest :)