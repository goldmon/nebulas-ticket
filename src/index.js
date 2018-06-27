import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import './base.less';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();