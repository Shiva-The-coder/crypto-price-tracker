import React from 'react';
import { useSelector } from 'react-redux';
import './CryptoTable.css';

const CryptoTable = () => {
  const assets = useSelector(state => state.crypto.assets);

  return (
    <table className="crypto-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Logo</th>
          <th>Name</th>
          <th>Symbol</th>
          <th>Price</th>
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
        {assets.map((asset, index) => (
          <tr key={asset.id}>
            <td>{index + 1}</td>
            <td><img src={asset.logo} alt={asset.name} className="logo" /></td>
            <td>{asset.name}</td>
            <td>{asset.symbol}</td>
            <td>${asset.price.toFixed(2)}</td>
            <td style={{ color: asset.percentChange1h > 0 ? 'green' : 'red' }}>
              {asset.percentChange1h}%
            </td>
            <td style={{ color: asset.percentChange24h > 0 ? 'green' : 'red' }}>
              {asset.percentChange24h}%
            </td>
            <td style={{ color: asset.percentChange7d > 0 ? 'green' : 'red' }}>
              {asset.percentChange7d}%
            </td>
            <td>${asset.marketCap.toLocaleString()}</td>
            <td>${asset.volume24h.toLocaleString()}</td>
            <td>{asset.circulatingSupply.toLocaleString()}</td>
            <td><img src={asset.chart7d} alt="7d chart" className="chart" /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CryptoTable;
