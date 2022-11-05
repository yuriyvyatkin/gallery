import { useState } from 'react';
import customFetch from './customFetch';

export default function useCustomFetch() {
  const [itemsLoading, setItemsLoading] = useState(true);
  const [itemLoading, setItemLoading] = useState(true);

  function getAssets() {
    setItemsLoading(true);

    return customFetch('assets', () => setItemsLoading(false));
  }

  getAssets.loading = itemsLoading;

  function getAsset(contractAddress, tokenID) {
    setItemLoading(true);

    return customFetch(`asset/${contractAddress}/${tokenID}`, () => setItemLoading(false));
  }

  getAsset.loading = itemLoading;

  return { getAssets, getAsset };
}
