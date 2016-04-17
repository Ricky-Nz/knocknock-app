import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reducers from './reducers';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { OrderDetailPage, AddressEditPage, AddressManagePage,
	LoginPage, OrderCreatePage, OrderManagePage, WalletPage,
	ProfilePage, RegisterPage, SettingPage, ResetPasswordPage,
	VoucherManagePage } from './containers';
import App from './components/App';
import HomePage from './components/HomePage';
import ProductPage from './components/ProductPage';

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

const store = createStore(
	combineReducers({
		...reducers,
		routing: routerReducer
	}),
	applyMiddleware(thunk, createLogger())
);

const history = syncHistoryWithStore(hashHistory, store);

function checkSession({location}, replace) {
	if (!localStorage['LOCAL_SESSION']) {
		replace('/login');
	}
}

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Route path='/' component={App}>
				<IndexRoute component={LoginPage}/>
				<Route path='login' component={LoginPage}/>
				<Route path='register' component={RegisterPage}/>
				<Route path='home' component={HomePage}
					onEnter={checkSession}>
					<IndexRoute component={OrderManagePage}/>
					<Route path='history' component={OrderManagePage}/>
					<Route path='addresses' component={AddressManagePage}/>
					<Route path='pricing' component={ProductPage}/>
					<Route path='profile' component={ProfilePage}/>
					<Route path='wallet' component={WalletPage}/>
					<Route path='setting' component={SettingPage}/>
					<Route path='voucher' component={VoucherManagePage}/>
				</Route>
				<Route path='address' component={AddressEditPage} onEnter={checkSession}/>
				<Route path='address/:addressId' component={AddressEditPage} onEnter={checkSession}/>
				<Route path='order' component={OrderCreatePage} onEnter={checkSession}/>
				<Route path='order/:orderId' component={OrderDetailPage} onEnter={checkSession}/>
				<Route path='resetpassword' component={ResetPasswordPage} onEnter={checkSession}/>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
);
