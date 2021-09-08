import { createStore, PayloadAction } from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

interface PlayerState {
  name: string;
  lastName: string;
  position: string;
  observer: boolean;
}

interface PlayerAction {
  type: string;
  payload: PlayerState; 
}

const defaultPlayerState: PlayerState = {
  name: '',
  lastName: '',
  position: '',
  observer: false,
}

const playerReducer = (state = defaultPlayerState, action: PlayerAction): PlayerState => {
  switch (action.type) {
    case 'CHANGE_PLAYER':
      return action.payload;
    default:
      return state;
  }
}


const store = createStore(playerReducer);




ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
