import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'animate.css/animate.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from '../store';
import ScrollToTop from './components/ScrollToTop';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
          <ScrollToTop />
          <App />
        </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
