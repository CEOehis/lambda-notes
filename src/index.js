import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouting from 'AppRouting';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppRouting />, document.getElementById('root'));
registerServiceWorker();
if(module.hot) module.hot.accept();