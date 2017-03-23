import Backbone from 'backbone'
import {ACTIONS} from './actions.js'

export const AppRouter = Backbone.Router.extend({
	initialize: function(){
		Backbone.history.start()
	},

  routes: {
    "" : "showHomePage",
    "events" : "showEventsPage",
		"events/new": "showNewEventForm",
    "events/:id" : "showSingleEvent",
		"events/search" : "showSearchEvent",
    "accounts/login": "showLoginPage",
    "accounts/register": "showRegisterPage",
    "accounts/:id": "showAccountPage",
    "accounts/:id/edit": "showEditaccountsPage"
  },

  showHomePage: function(){
		console.log('changing view!')
		ACTIONS.setView("HOME") },
	showEventsPage: function(){ ACTIONS.setView("EVENTS") },
	showSingleEvent: function(){ ACTIONS.setView("SINGLE") },
	showSearchEvent: function(){ACTIONS.setView("SEARCH") },
	showRegisterPage: function(){ ACTIONS.setView("REGISTER") },
	showLoginPage: function(){
		console.log('AppRouter setting login view....')
		ACTIONS.setView("LOGIN") },
	showNewEventForm: function(){ ACTIONS.setView("NEW") },
	showAccountPage: function(){ ACTIONS.setView("ACCOUNTS") },

})
