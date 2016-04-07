import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reducers from './reducers';

const store = createStore(
	combineReducers({
		...reducers,
		routing: routerReducer
	}),
	applyMiddleware(thunk, createLogger())
);

const history = syncHistoryWithStore(hashHistory, store);

const Application = ({children}) => (
	<div>
		TESTssss
	</div>
);

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Route path='/' component={Application}>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
);
