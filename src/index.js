import React from 'react';
import ReactDOM from 'react-dom';
import { init } from '@sentry/browser';

// Your top level component
import App from './App';

init({
  dsn: 'https://020ed36db0db45279f5de4762f97698d@sentry.io/1374977'
});

// Export your top level component as JSX (for static rendering)
export default App;

// Render your app
if (typeof document !== 'undefined') {
  const renderMethod = module.hot
    ? ReactDOM.render
    : ReactDOM.hydrate || ReactDOM.render;

  const render = Comp => {
    renderMethod(<Comp />, document.getElementById('root'));
  };

  // Render!
  render(App);

  // Hot Module Replacement
  if (module.hot) {
    module.hot.accept('./App', () => render(require('./App').default));
  }
}
