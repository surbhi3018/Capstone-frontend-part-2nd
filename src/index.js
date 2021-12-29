import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import Product from './components/product';
import Order from './components/createOrder';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(<Order/>,document.getElementById('root')
);
