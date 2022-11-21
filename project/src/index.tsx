import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app';
import { store } from './redux/store';

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
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// window.addEventListener('load', () => {
//   navigator.serviceWorker.register('./sw.js')
// })
