import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStorage } from './Context/GlobalContext';

import './services/firebase';

ReactDOM.render(
    <GlobalStorage>
      <App />
    </GlobalStorage>,
  document.getElementById('root')
);