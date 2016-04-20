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
// components
import { Application, HomePage } from './app_common';
import { LoginPage, RegisterPage, ResetPasswordPage } from './auth';
import { ProfilePage, SettingPage } from './user';
import { OrderManagePage, OrderDetailPage, OrderCreatePage } from './order';
import { AddressManagePage, AddressCreateEditPage } from './address';
import { ProductManagePage } from './product';
import { WalletPage } from './payment';
import { VoucherManagePage } from './voucher';

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
			<Route path='/' component={Application}>
				<IndexRoute component={LoginPage}/>
				<Route path='login' component={LoginPage}/>
				<Route path='register' component={RegisterPage}/>
				<Route path='home' component={HomePage}
					onEnter={checkSession}>
					<IndexRoute component={OrderManagePage}/>
					<Route path='history' component={OrderManagePage}/>
					<Route path='addresses' component={AddressManagePage}/>
					<Route path='pricing' component={ProductManagePage}/>
					<Route path='profile' component={ProfilePage}/>
					<Route path='wallet' component={WalletPage}/>
					<Route path='setting' component={SettingPage}/>
					<Route path='voucher' component={VoucherManagePage}/>
				</Route>
				<Route path='address' component={AddressCreateEditPage} onEnter={checkSession}/>
				<Route path='address/:addressId' component={AddressCreateEditPage} onEnter={checkSession}/>
				<Route path='order' component={OrderCreatePage} onEnter={checkSession}/>
				<Route path='order/:orderId' component={OrderDetailPage} onEnter={checkSession}/>
				<Route path='resetpassword' component={ResetPasswordPage} onEnter={checkSession}/>
				<Route path='setup' component={ProfilePage}/>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
);
