import React from 'react'
import { Router,Route, IndexRoute, browserHistory } from "react-router"

import Login from '../components/login'
import Index from '../page/index'
function isLogin(nextState,replaceState){
	const she = sessionStorage.getItem('she')
    if(!she){
        replaceState("/login")
    }
}
export default () => (
	<Router history={browserHistory}>
		<Route path='/' component={Index} onEnter={isLogin}>
		</Route>
		<Route path='/login' component={Login} />
	</Router>
)