import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';

const app = (
    <Router>
        <Suspense>
            <App />
        </Suspense>
    </Router>
);

ReactDOM.render(app, document.getElementById('root'));

