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
import App from './components/App';
import DashboardPage from './components/DashboardPage';
import ProductPage from './components/ProductPage';
import RegisterPageContainer from './containers/RegisterPageContainer';
import OrderManagePageContainer from './containers/OrderManagePageContainer';
import OrderCreatePageContainer from './containers/OrderCreatePageContainer';
import ProfilePageContainer from './containers/ProfilePageContainer';
import WalletPageContainer from './containers/WalletPageContainer';
import { OrderDetailPage, AddressEditPage, AddressManagePage,
	LoginPage } from './containers';

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

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Route path='/' component={App}>
				<IndexRoute component={LoginPage}/>
				<Route path='login' component={LoginPage}/>
				<Route path='register' component={RegisterPageContainer}/>
				<Route path='dashboard' component={DashboardPage}>
					<IndexRoute component={OrderManagePageContainer}/>
					<Route path='activeorders' component={OrderManagePageContainer}/>
					<Route path='historyorders' component={OrderManagePageContainer}/>
					<Route path='addresses' component={AddressManagePage}/>
					<Route path='pricing' component={ProductPage}/>
					<Route path='profile' component={ProfilePageContainer}/>
					<Route path='wallet' component={WalletPageContainer}/>
				</Route>
				<Route path='neworder' component={OrderCreatePageContainer}/>
				<Route path='address' component={AddressEditPage}/>
				<Route path='address/:addressId' component={AddressEditPage}/>
				<Route path='order/:orderId' component={OrderDetailPage}/>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
);
