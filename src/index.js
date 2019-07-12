import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import 'semantic-ui-css/semantic.min.css'
import App from './App';
import { Provider } from 'react-redux'
import ReduxToastr from 'react-redux-toastr'
import {configureStore}from './store/configureStore'
import * as serviceWorker from './serviceWorker';
import ScrolltoTop from './common/util/ScrolltoTop'
// import {loadEvent} from './components/EventList/eventActions'

const store = configureStore()
// store.dispatch(loadEvent())

ReactDOM.render(
<Provider store ={store}>
<BrowserRouter>
<ScrolltoTop>
<ReduxToastr
position='bottom-right'
transitionIn='fadeIn'
transitionOut='fadeOut'
/>
<div>
<App />
</div>
</ScrolltoTop>
</BrowserRouter>
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
