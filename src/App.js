import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import "./App.css";

// Sample data for crypto assets
const sampleData = [
    {
      id: 1,
      logo: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
      name: "Bitcoin",
      symbol: "BTC",
      price: 30000,
      change1h: 0.2,
      change24h: -0.5,
      change7d: 3.5,
      marketCap: "580B",
      volume24h: "30B",
      circulating: "19M",
      maxSupply: "21M",
      chart: "https://quickchart.io/chart?c={type:'line',data:{labels:[1,2,3,4,5,6,7],datasets:[{label:'Price',data:[100,110,105,115,120,125,130]}]}}"
    },
    {
      id: 2,
      logo: "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
      name: "Ethereum",
      symbol: "ETH",
      price: 2000,
      change1h: -0.1,
      change24h: 0.4,
      change7d: -2.1,
      marketCap: "240B",
      volume24h: "15B",
      circulating: "120M",
      maxSupply: "--",
      chart: "https://quickchart.io/chart?c={type:'line',data:{labels:[1,2,3,4,5,6,7],datasets:[{label:'Price',data:[100,110,105,115,120,125,130]}]}}"

    },
    {
      id: 3,
      logo: "https://assets.coingecko.com/coins/images/325/large/Tether.png",
      name: "Tether",
      symbol: "USDT",
      price: 1,
      change1h: 0.0,
      change24h: 0.0,
      change7d: 0.1,
      marketCap: "83B",
      volume24h: "50B",
      circulating: "83B",
      maxSupply: "--",
      chart: "https://quickchart.io/chart?c={type:'line',data:{labels:[1,2,3,4,5,6,7],datasets:[{label:'Price',data:[100,110,105,115,120,125,130]}]}}"

    },
    {
      id: 4,
      logo: "https://assets.coingecko.com/coins/images/825/large/binance-coin-logo.png",
      name: "BNB",
      symbol: "BNB",
      price: 320,
      change1h: 0.3,
      change24h: -1.2,
      change7d: 2.7,
      marketCap: "50B",
      volume24h: "1B",
      circulating: "155M",
      maxSupply: "200M",
      chart: "https://quickchart.io/chart?c={type:'line',data:{labels:[1,2,3,4,5,6,7],datasets:[{label:'Price',data:[100,110,105,115,120,125,130]}]}}"

    },
    {
      id: 5,
      logo: "https://assets.coingecko.com/coins/images/4128/large/solana.png",
      name: "Solana",
      symbol: "SOL",
      price: 100,
      change1h: -0.3,
      change24h: -0.9,
      change7d: 5.0,
      marketCap: "42B",
      volume24h: "2B",
      circulating: "420M",
      maxSupply: "--",
      chart: "https://quickchart.io/chart?c={type:'line',data:{labels:[1,2,3,4,5,6,7],datasets:[{label:'Price',data:[100,110,105,115,120,125,130]}]}}"

    },

    {
      id: 6,
      logo: "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png",
      name: "XRP",
      symbol: "XRP",
      price: 0.65,
      change1h: 0.1,
      change24h: -0.3,
      change7d: 2.8,
      marketCap: "34B",
      volume24h: "2.5B",
      circulating: "52B",
      maxSupply: "100B",
      chart: "https://quickchart.io/chart?c={type:'line',data:{labels:[1,2,3,4,5,6,7],datasets:[{label:'Price',data:[0.61,0.62,0.63,0.64,0.65,0.66,0.65]}]}}"
    }
    
];

// Redux slice to handle the state and update prices
const cryptoSlice = createSlice({
  name: "crypto",
  initialState: sampleData,
  reducers: {
    updatePrices: (state) => {
      return state.map((coin) => {
        const randomFactor = (Math.random() - 0.5) * 2;
        return {
          ...coin,
          price: +(coin.price * (1 + randomFactor * 0.005)).toFixed(2),
          change1h: +(coin.change1h + randomFactor).toFixed(2),
          change24h: +(coin.change24h + randomFactor).toFixed(2),
          change7d: +(coin.change7d + randomFactor).toFixed(2),
          volume24h: `${+(parseFloat(coin.volume24h) * (1 + randomFactor * 0.01)).toFixed(1)}B`
        };
      });
    }
  }
});

// Configure the Redux store
const store = configureStore({
  reducer: {
    crypto: cryptoSlice.reducer
  }
});

// Crypto table component to display crypto data
const CryptoTable = () => {
  const data = useSelector((state) => state.crypto);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(cryptoSlice.actions.updatePrices());
    }, 1500); // Update prices every 1.5 seconds
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Logo</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price ($)</th>
            <th>1h %</th>
            <th>24h %</th>
            <th>7d %</th>
            <th>Market Cap</th>
            <th>24h Volume</th>
            <th>Circulating Supply</th>
            <th>Max Supply</th>
            <th>7D Chart</th>
          </tr>
        </thead>
        <tbody>
          {data.map((coin) => (
            <tr key={coin.id}>
              <td>{coin.id}</td>
              <td><img src={coin.logo} alt={coin.name} width="30" height="30" /></td>
              <td>{coin.name}</td>
              <td>{coin.symbol}</td>
              <td>${coin.price.toLocaleString()}</td>
              <td className={coin.change1h >= 0 ? "green" : "red"}>{coin.change1h}%</td>
              <td className={coin.change24h >= 0 ? "green" : "red"}>{coin.change24h}%</td>
              <td className={coin.change7d >= 0 ? "green" : "red"}>{coin.change7d}%</td>
              <td>{coin.marketCap}</td>
              <td>{coin.volume24h}</td>
              <td>{coin.circulating}</td>
              <td>{coin.maxSupply}</td>
              <td>
             <img src={coin.chart} alt="7D chart" width="80" referrerPolicy="no-referrer" />
            </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Main App component
const App = () => (
  <Provider store={store}>
    <div className="App">
      <h1>Crypto Price Tracker</h1>
      <CryptoTable />
    </div>
  </Provider>
);

export default App;

