// Internal.
import type { AddressToAssetMap, Asset } from '../@types/models';

// eslint-disable-next-line import/prefer-default-export
export function createAddressToAssetMap(
    assets: Array<Asset>,
): AddressToAssetMap {
    return Object.fromEntries(
        assets.map(
            (asset: Asset) => [asset.address.toLowerCase(), asset],
        ),
    );
}
