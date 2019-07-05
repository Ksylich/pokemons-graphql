import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import RenderInDom from './render-components-in-dom';

ReactDOM.render(
  RenderInDom.RenderComponents(),
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
