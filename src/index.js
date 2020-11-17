//TODO 3: tạo 1 store lưu trử live state. project wrap by Provider
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import { createStore } from  'redux';

import App from './components/App';
import reducers from  './reducers/index';

ReactDOM.render(
    // Tạo 1 store sử dụng createStore(reducer function songs: songListReducer ) songs: store;  songListReducer: reducer 
    <Provider store={createStore(reducers)}>
         <App />
    </Provider>,
    document.querySelector("#root")
);