# Detector Internals

## What is a detector?
An object responsible for identifying certain behavior in a transaction.

<br>

## Class members
1. `txContext` - A transaction inspection [object](#transaction-context).

2. `inspectedProtocol` - A protocol `[object](#protocol).

3. `config` - Either `null` or a `json` config for your detector.
<br>
In case you wish to configure your detector differently depending on the inspected protocol, contact the `Ironblocks` and we will make sure to invoke your detector with the appropriate configuration. 

4. `status` - The actual detection result:
   ```js
   enum DetectionStatus {
      DETECTED = 'detected',
      NOT_DETECTED = 'notDetected',
      PENDING = 'pending',
      FAILED = 'failed'
   }
   ```

<br>

## Class methods
1. `detect()` - The entry point to a detector, must be implemented.
   ```js
   protected abstract detect(): void | Promise<void>;
   ```

2. `getAsset(address: string)` - The corresponding asset [object](#asset) if exists and appearing in the `trace`, or `null` otherwise.

3. `isCallFromProtocol(tx: Transaction)` - Whether the given subcall is a call `from` the inspected protocol.

4. `isCallToProtocol(tx: Transaction)` - Whether the given subcall is a call `to` the inspected protocol.

<br>

## Data Structures

### Transaction Context
An object wrapping essential transaction metadata, including:

1. `hash` - Transaction hash string.

2. `timestamp` - Transaction timestamp ISO string.

3. `trace` - Transaction execution trace, of the following recursive structure:
   ```js
   interface TransactionTrace extends Transaction {
      calls: Array<TransactionTrace>,
   }

   interface Transaction {
      type: string,
      from: string,
      to: string,
      value: string,
      input: string,
      output: string,
      gas: string,
      gasprice: string,
      error: string,
      hash: string,
      nonce: string,
   }
   ```

4. `assets` - An array of [assets](#asset) that appear in the `trace` and belong to the `protocol`.

5. `protocol` - The inspected [protocol](#protocol).

<br>

### Asset
An object representation of a monitored `web3` address:
   ```js
   interface Asset {
      address: string,
      admins: Array<string>,
   }
   ```

### Protocol
Defined by a set of assets working together towards a common goal:
   ```js
   interface Protocol {
      name: string,
      assets: Array<Asset>,
   }
   ```
