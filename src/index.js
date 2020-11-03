import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './routers/AppRouters'
import configureStore from './store/configureStore'

const store = configureStore()

ReactDOM.render(<AppRouter /> , document.getElementById('root'));

