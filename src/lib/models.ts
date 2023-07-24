// Internal.
import type { AddressToAssetMap, Asset } from '../@types/models';

export function createAddressToAssetMap(assets: Array<Asset>): AddressToAssetMap {
    return Object.fromEntries(
        assets.map(
            (asset: Asset) => [asset.address.toLowerCase(), asset],
        ),
    );
}
