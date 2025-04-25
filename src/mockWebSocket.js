import { setPriceUpdate, setPercentChange } from '../features/cryptoSlice';

const mockWebSocket = (dispatch) => {
  setInterval(() => {
    dispatch(setPriceUpdate());
    dispatch(setPercentChange());
  }, Math.random() * 1000 + 1000); // Random interval between 1-2 seconds
};

export default mockWebSocket;
