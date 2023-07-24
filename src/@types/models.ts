export interface Asset {
    chainId: number,
    address: string,
    admins: Array<string>,
}

export interface Protocol {
    name: string,
    assets: Array<Asset>,
}

export interface AddressToAssetMap {
    [key: string]: Asset,
}
