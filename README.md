# crypto-price-tracker

Welcome to the Real-Time Crypto Price Tracker project! This app tracks cryptocurrency prices in real-time, simulating WebSocket updates and using Redux Toolkit for state management.

Here's a live pic of the website
![My Output](https://github.com/user-attachments/assets/b5afc1cf-4fc9-402e-b25d-1fecd54f637a)


📝 Features Crypto Price Table: Displays the prices, market data, and 7-day chart of 5 major cryptocurrencies like Bitcoin (BTC), Ethereum (ETH), and Tether (USDT).

Real-Time Price Updates: The app updates the crypto data every 1-2 seconds to simulate live market behavior using mock WebSocket-like functionality.

Redux for State Management: We use Redux Toolkit to manage all the crypto data across the app, without relying on local state in components.

Color-Coded Price Changes: The table highlights price percentage changes in green for gains and red for losses, making it easy to track the latest market movements.

⚙️ Technologies Used Frontend: React.js, Redux Toolkit, HTML, CSS

State Management: Redux Toolkit with createSlice and configureStore

WebSocket Simulation: Real-time updates via setInterval

Charts: Static 7-day price chart (SVG or Image)

-> How to run the Project ? Make sure you have Node.js (v14 or above) and npm installed.

Clone the repository to your local machine:

git clone https://github.com/your-username/crypto-price-tracker.git cd crypto-price-tracker

npm install

npm start

The app will open in your browser at http://localhost:3000.

If you want to take the app further, here are a few extra features you can implement:

->Real WebSocket Integration: Instead of simulating the updates, you can integrate an actual WebSocket API (like Binance) to get live updates from the market.

->Filtering and Sorting: Add sorting options to filter the top gainers, or show coins sorted by volume or market cap.

->LocalStorage Support: Save user preferences or the last viewed state in the browser’s local storage.

->Unit Tests: Write unit tests for Redux actions, reducers, and the components.

->TypeScript: Convert the code to TypeScript for better type safety.

🎥 Demo Video Here's a quick demo of the app in action:
