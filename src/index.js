import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducer';

import './supports/css/bootstrap.min.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const store = createStore( reducers );

    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>, 
    document.getElementById('root'));

registerServiceWorker();
