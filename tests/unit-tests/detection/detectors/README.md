# Detector Unit Test


## Guide
To add a test for a new detector just follow the following steps:

1. Create a new file `test`-`%yourDetectorName%` in the `detectors` folder, following the format:
   ```js
   // Import your detector here
   import ExampleDetector from "../../../../src/detection/detectors/example-detector";

   export default function suite() {
      describe('Detect', () => {
         it('should detect for ...', async () => {
         });

         it('should not detect for ...', async () => {
         });
         
         ...
      });
   }
   ```

2. Add the detector to the [index.ts](./index.ts) file:
   ```js
   // Import your detector test here
   import testExampleDetector from './test-contract-sender';

   describe('Detectors', () => {
      ...
      // Insert code (start)
      describe('Example', testExampleDetector.bind(this));
      // Insert code (start)
      ...
   });
   ```
