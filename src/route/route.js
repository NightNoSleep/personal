import React from 'react'
import { Router,Route, IndexRoute, browserHistory } from "react-router"

import Login from '../components/login'
function isLogin(nextState,replaceState){
	// const token = sessionStorage.getItem('token')
 //    if(!token){
 //        replaceState("/login")

 //    }
}
export default () => (
	<Router history={browserHistory}>
		<Route path='/' component={Login} ></Route>
		{/*<Route path='/' component={Login} onEnter={isLogin}></Route>*/}
	</Router>
)