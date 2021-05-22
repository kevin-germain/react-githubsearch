import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import App from 'src/components/App';

const rootReactElement = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

const target = document.getElementById('root');

render(rootReactElement, target);
