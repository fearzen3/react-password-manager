import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './Store/Store.js'
import {Provider} from 'react-redux'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
