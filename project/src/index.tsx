import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';

const title = window.document.title;
window.addEventListener('offline', () => {
  window.document.title = title.concat(' [OFFLINE]');
});
window.addEventListener('online', () => {
  window.document.title = title.concat('');
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// window.addEventListener('load', () => {
//   navigator.serviceWorker.register('./sw.js')
// })
