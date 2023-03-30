// Internal.
import type {
    AddressToAssetMap, Asset,
    Protocol,
} from '../@types/models';
import type {
    FetchedTransaction,
    TransactionInspectionContext as ITransactionInspectionContext,
} from '../@types/web3';
import { createAddressToAssetMap } from './models';

interface ContextParams extends FetchedTransaction {
    assets: Array<Asset>,
    protocol: Protocol,
}

export default class TransactionInspectionContext implements ITransactionInspectionContext {
    private _hash: ContextParams['hash'];

    private _timestamp: ContextParams['timestamp'];

    private _trace: ContextParams['trace'];

    private _assets: ContextParams['assets'];

    private _protocol: ContextParams['protocol'];

    private _addressToAssetMap: AddressToAssetMap;

    constructor({
        hash,
        timestamp,
        trace,
        assets,
        protocol,
    }: ContextParams) {
        this._hash = hash;
        this._timestamp = timestamp;
        this._trace = trace;
        this._assets = assets;
        this._protocol = protocol;
        this._addressToAssetMap = createAddressToAssetMap(this._assets);
    }

    get hash(): ContextParams['hash'] {
        return this._hash;
    }

    get timestamp(): ContextParams['timestamp'] {
        return this._timestamp;
    }

    get trace(): ContextParams['trace'] {
        return this._trace;
    }

    get assets(): ContextParams['assets'] {
        return this._assets;
    }

    get protocol(): ContextParams['protocol'] {
        return this._protocol;
    }

    asset(address: string): Asset | null {
        return this._addressToAssetMap[address] ?? null;
    }

    isAsset(address: string) {
        return !!this.asset(address);
    }
}
