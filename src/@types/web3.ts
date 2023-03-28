// Internal.
import type { Asset, Protocol } from "./models";

export interface Transaction {
    type: string,
    from: string,
    to: string,
    value?: string,
    input?: string,
    output?: string,
    gas?: string,
    gasprice?: string,
    error?: string,
    hash?: string,
    nonce?: string,
}

export interface TransactionTrace extends Transaction {
    calls?: Array<TransactionTrace>,
    detected?: Array<string>
}

export interface FetchedTransaction {
    hash: string,
    timestamp: string,
    trace: TransactionTrace,
}

export interface TransactionInspectionContext extends FetchedTransaction {
    assets: Array<Asset>,
    protocol: Protocol,
    asset: (address: string) => Asset,
    isAsset: (address: string) => boolean,
}
