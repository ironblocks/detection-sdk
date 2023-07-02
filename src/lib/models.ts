// Internal.
import type { AssetMap, Asset } from '../@types/models';

export function createAssetMap(assets: Array<Asset>): AssetMap {
    return Object.fromEntries(
        assets.map(
            (asset: Asset) => [asset.address.toLowerCase(), asset],
        ),
    );
}
