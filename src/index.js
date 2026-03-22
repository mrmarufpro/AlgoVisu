import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import Wrapper from 'components/Wrapper';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Wrapper>
      <App />
    </Wrapper>
  </React.StrictMode>
);
