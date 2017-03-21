import Backbone from 'backbone'
import $ from 'jquery'

export const UserModel = Backbone.Model.extend({
	initialize: function(){

	},
	urlRoot: '/accounts/register',
	idAttribute: '_id'
})

UserModel.logIn =  function(email, password){
	if(typeof email !== 'string' || typeof password !== 'string'  ){ throw new Error(`UserModel.login() must receive string 2 string paramaters for username and password`) }

	return $.ajax({
		method: 'POST',
		data: JSON.stringify({ email: email, password: password}),
		headers: {
			'Content-Type': 'application/json'
		},
		url: '/accounts/login'
	})
}

UserModel.register =  function(dataObj){
	if(typeof dataObj !== 'object' ){ throw new Error(`UserModel.register() must receive an object`) }
	if(typeof dataObj.email === 'undefined' || typeof dataObj.password === 'undefined'  ){ throw new Error(`UserModel.register() must receive an object w/ username + password`) }

	return $.ajax({
		method: 'POST',
		data: JSON.stringify(dataObj),
		headers: {
			'Content-Type': 'application/json'
		},
		url: '/accounts/register'
	})
}

UserModel.getCurrentUser =  function(){
	return $.ajax({
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		},
		url: '/accounts/:id'
	})
}

UserModel.logOut =  function(){
	console.log('logging out!')
	return $.ajax({
		method: 'GET',
		url: '/accounts/logout'
	})
}
