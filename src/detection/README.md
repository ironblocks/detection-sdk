# Detection System

## Detector
[Read about detector internals](./detectors/README.md)

<br>

## Guide
To add a new detector just follow the following steps:

1. Create a new file in the `detectors` folder and extend the base `Detector` [class](./detectors/detector.ts):
   ```js
   // Internal.
   export default class ContractSenderDetector extends Detector {
      detect(): void {
         this.status = this.isInvokedByContract()
            ? DetectionStatus.DETECTED
            : DetectionStatus.NOT_DETECTED;
      }

      /**
       * @returns true iff the protocol was invoked by a contract address.
      */
      isInvokedByContract(): boolean {
         const { trace } = this.txContext;
         return !this.isCallToProtocol(trace);
      }

      formatDetectionMessage(): string {
         // Optional.
         return '';
      }
   }
   ```

2. Test your detector following the [guide](../../tests/unit-tests/detection/detectors/README.md).

3. The `Ironblocks` team will provide you with a `unique-id` for the new detector, e.g.:
   ```bash
   "ib-1-12345"
   ```

4. Add the detector to the [detectors factory](./factory.ts):
   ```js
   // Import your detector here
   import ContractSenderDetector from "./detectors/contract-sender";

   export default function detectorFactory(id: string): DetectorClass {
      switch (id) {
      ...
      // Insert code (start)
      case 'ib-1-12345':
         return ContractSenderDetector;
      // Insert code (end)
      ...
      default:
         ...
      }
   }
   ```

5. Build and restart:
   ```bash
   docker-compose build
   docker-compose up
   ```

<br>

## You completed the guide, now what?

Once we detect a transaction related to your protocol we will invoke your registered detectors.
<br>
You are all set now, we will take care of the rest :)
