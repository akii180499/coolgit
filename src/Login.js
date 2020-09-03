import React from 'react';

import {Button} from "@material-ui/core";

import "./Login.css";

import {auth,provider} from "./firebase";

import{StateProvider} from "./StateProvider";

import reducer,{initialState} from "./reducer";

import {actionTypes} from "./reducer";

import {useStateValue} from "./StateProvider";


function Login()
{

	const[{user},dispatch] =useStateValue();
	const signIn =() =>{
	auth
	.signInWithPopup(provider)
	.then(result=>{
		dispatch(
			{
				type: actionTypes.SET_USER,
				user:result.user,
			});
	})
	.catch((error)=>alert(error.message));
	};
									;
	return(
	<div className="login">
	<div className="login_container">
	<img src={"akii.jpg"}  alt= "whatsapp "/>

		<div className ="login_text">
		<h1>Sign in to whatsapp</h1>
		</div>

		<Button onClick={signIn}>
		Bhai Sign in karle
		</Button>

		</div>
		</div>
		);
		}

		export default Login;

