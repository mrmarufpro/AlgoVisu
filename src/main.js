import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import Wrapper from 'components/Wrapper';

const container = document.getElementById('root');
if (!container) {
  throw new Error("Root container with id 'root' not found");
}
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Wrapper>
      <App />
    </Wrapper>
  </React.StrictMode>
);
