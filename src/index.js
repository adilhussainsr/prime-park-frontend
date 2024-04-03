import 'react-app-polyfill/ie11'; // For IE 11 support
import 'react-app-polyfill/stable';
import 'core-js';
import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


import { icons } from './assets/icons'
import reportWebVitals from "./reportWebVitals";

import {createStore} from 'redux';


import reducer from './redux/reducers';
import { Provider } from 'react-redux';
const store = createStore(reducer);
React.icons = icons;
var modalMsg = '';
const Modal = ({ handleClose, show, me }) => {

  return (
    <div class="bs-example">
    <button type="button" class="btn btn-lg btn-primary">Show Modal</button>
 
    <div id="myModal" class="modal fade" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Modal Title</h5>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                <div class="modal-body">
                    <p>This is a simple Bootstrap modal. Click the "Cancel button", "cross icon" or "dark gray area" to close or hide the modal.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary">Save</button>
                </div>
            </div>
        </div>
    </div>
</div>
  );
};

ReactDOM.render(
  
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();