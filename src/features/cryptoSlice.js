import { createSlice } from '@reduxjs/toolkit';

export const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: {
    assets: [
      {
        id: 'bitcoin',
        logo: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
        name: 'Bitcoin',
        symbol: 'BTC',
        price: 45000,
        percentChange1h: 0.5,
        percentChange24h: -2.3,
        percentChange7d: 5.1,
        marketCap: 850000000000,
        volume24h: 35000000000,
        circulatingSupply: 19000000,
        maxSupply: 21000000,
        chart7d: 'path_to_chart_image',
      },
      // Add other assets here (ETH, USDT, etc.)
    ],
  },
  reducers: {
    setPriceUpdate: (state) => {
      state.assets = state.assets.map(asset => ({
        ...asset,
        price: (Math.random() * 1000 + asset.price).toFixed(2),  // Mock price update
      }));
    },
    setPercentChange: (state) => {
      state.assets = state.assets.map(asset => ({
        ...asset,
        percentChange1h: (Math.random() * 5 - 2.5).toFixed(2),
        percentChange24h: (Math.random() * 10 - 5).toFixed(2),
        percentChange7d: (Math.random() * 20 - 10).toFixed(2),
      }));
    },
  },
});

export const { setPriceUpdate, setPercentChange } = cryptoSlice.actions;

export default cryptoSlice.reducer;
