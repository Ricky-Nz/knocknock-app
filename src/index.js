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
import LoginPageContainer from './containers/LoginPageContainer';
import RegisterPageContainer from './containers/RegisterPageContainer';
import DashboardPage from './components/DashboardPage';
import OrderListPage from './components/OrderListPage';
import OrderCreatePageContainer from './containers/OrderCreatePageContainer';
import AddressListPage from './components/AddressListPage';
import AddressEditPageContainer from './containers/AddressEditPageContainer';
import ProfilePageContainer from './containers/ProfilePageContainer';
import WalletPageContainer from './containers/WalletPageContainer';
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

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Route path='/' component={App}>
				<IndexRoute component={LoginPageContainer}/>
				<Route path='login' component={LoginPageContainer}/>
				<Route path='register' component={RegisterPageContainer}/>
				<Route path='dashboard' component={DashboardPage}>
					<IndexRoute component={OrderListPage}/>
					<Route path='orders' component={OrderListPage}/>
					<Route path='addresses' component={AddressListPage}/>
					<Route path='pricing' component={ProductPage}/>
					<Route path='profile' component={ProfilePageContainer}/>
					<Route path='wallet' component={WalletPageContainer}/>
				</Route>
				<Route path='neworder' component={OrderCreatePageContainer}/>
				<Route path='address' component={AddressEditPageContainer}/>
				<Route path='address/:addressId' component={AddressEditPageContainer}/>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
);
