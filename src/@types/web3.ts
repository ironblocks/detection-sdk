// Internal.
import type { Asset, Protocol } from './models';

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
}

export interface FetchedTransaction {
    chainId: number,
    hash: string,
    timestamp: string,
    trace: TransactionTrace,
}

export interface TransactionInspectionContext extends FetchedTransaction {
    assets: Array<Asset>,
    protocol: Protocol,
    asset: (address: string) => Asset | null,
    isAsset: (address: string) => boolean,
}
