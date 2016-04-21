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
// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

// components
import { Application, HomePage } from './app_common';
import { AddressManagePage, AddressCreateEditPage } from './address';
import { LoginPage, RegisterPage, ResetPasswordPage } from './auth';
import { OrderManagePage, OrderDetailPage, OrderCreatePage } from './order';
import { WalletPage } from './payment';
import { ProductManagePage } from './product';
import { ProfilePage, SettingPage } from './user';
import { VoucherManagePage } from './voucher';

// reducers
import { reducers as commonReducers } from './app_common';
import { reducers as addressReducers } from './address';
import { reducers as authReducers } from './auth';
import { reducers as orderReducers } from './order';
import { reducers as paymentReducers } from './payment';
import { reducers as productReducers } from './product';
import { reducers as userReducers } from './user';
import { reducers as voucherReducers } from './voucher';

// create store
const store = createStore(
	combineReducers({
		...commonReducers,
		...addressReducers,
		...authReducers,
		...orderReducers,
		...paymentReducers,
		...productReducers,
		...userReducers,
		...voucherReducers,
		routing: routerReducer
	}),
	applyMiddleware(thunk, createLogger())
);

// sync history
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
