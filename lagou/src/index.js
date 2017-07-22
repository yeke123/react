import React from 'react';
import ReactDOM from 'react-dom';
import { Router,Route,hashHistory,IndexRoute } from 'react-router';
import './index.css';
import App from './App';
import Login from './pages/Login';
import Register from './pages/Register';
import Details from './pages/Details';
import User from './pages/User';
import Job from './pages/Job';
import Search from './pages/Search';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Job}/>
			<Route path="/search" component={Search}></Route>	
			<Route path="/user" component={User}></Route>							
		</Route>
		<Route path="/login" component={Login}></Route>
		<Route path="/register" component={Register}></Route>
		<Route path="/details" component={Details}></Route>
		
	</Router>
)
	, document.getElementById('root'));
registerServiceWorker();
