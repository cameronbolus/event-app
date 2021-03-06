import Backbone from 'backbone';
import {EventsModel, EventsCollection} from './models/model-events.js'
import {STORE} from './store.js'
import {UserModel} from './models/model-user.js'


export const ACTIONS = {
  setView: function(viewName, routeParams){
    // console.log('ACTION updating view:', viewName)
    if(typeof routeParams === 'object'){
      STORE.setStore('routeParams', routeParams)
    } else {
      STORE.setStore('routeParams', {})
    }

    STORE.setStore('currentView', viewName)
	},

  loginUser: function(credsObj){
    console.log('ACTIONS logging in with  creds:', credsObj)
    UserModel.logIn( credsObj.email , credsObj.password ).then(function(serverRes){
      console.log('User Logged in in!', serverRes)
      //temporary --- need server res to show user data

      STORE.setStore('currentUser', credsObj)

      ACTIONS.routeTo('')
  })
},

  registerNewUser: function(regObj){
    console.log('ACTIONS registering new creds', regObj)
    UserModel.register(regObj)
      .then(function(serverRes){
        console.log('registered!', serverRes)
        STORE.setStore('currentUser', regObj)

        ACTIONS.routeTo('')

      }).fail(function(err){
       console.log(err)

    })
  },

  fetchCurrentUser: function(){
    // console.log('Checking for current user...')
    UserModel.getCurrentUser().then(function(serverRes){
      let newStore = serverRes || {}
      STORE.setStore('currentUser',newStore)
  })
},

  logUserOut: function(){
    console.log('logging out..')
    UserModel.logOut().then(function(){
      STORE.setStore('currentUser', {})
      ACTIONS.routeTo('')

  })
},

  saveNewEvent: function(savedEvent){
    let newEventInstance= new EventsModel()
    newEventInstance.set(savedEvent)
    console.log('new events saving', savedEvent)

    newEventInstance.save().then(function(serverRes){
      // ACTIONS.fetchAllEvents()
      ACTIONS.routeTo('events')
    })
  },

  fetchSingleEventToSave: function(id){
    let newModelInstance = new EventsModel()
    newModelInstance.set({id: id})
      // ACTIONS.routeTo('accounts/:id')

    // newModelInstance.save().then(function(se){
    //   console.log(se)
    // })
    // console.log('fetching model', newModelInstance.attributes)
    // // STORE.setStore('favoriteList', newModelInstance.attributes)
    // let objAttributes = newModelInstance.attributes
    // console.log('attributes?', objAttributes)
    // newModelInstance.fetch().then(function(serverRes){
    //   console.log('FROM Server', serverRes);
    //   STORE.setStore('favoriteList', serverRes)
    // })
  },

  // fetchSavedEvent: function(evtId){
  //   console.log('ACTION fetchSingleEvent')
  //   let newModelInstance = new EventsModel()
  //   newModelInstance.set({id: id})
  //   console.log('fetching model', newModelInstance)
  //   newModelInstance.fetch().then(function(serverRes){
  //     console.log('FROM Server', serverRes);
  //     STORE.setStore('favoriteList', serverRes)
  //   })
  // },


  fetchAllEvents: function(){
    console.log('new collection instance, and .fetch()')
    let eventsCollInstance = new EventsCollection()
    eventsCollInstance.fetch().then(function(serverRes){
      console.log('events', serverRes)
      STORE.setStore('eventsList', serverRes)
    })
  },


  fetchSingleEvent: function(id){
    let newModelInstance = new EventsModel()
    newModelInstance.set({id: id})
    // console.log('fetching model', newModelInstance)
    newModelInstance.fetch().then(function(serverRes){
      // console.log('FROM Server', serverRes);
      STORE.setStore('singleEvent', serverRes)
    })
  },

  // let mod = new EventsModel()
  // mod.set({id: :evtId})
  // mod.fetch().then(...)

  routeTo: function(path){
    window.location.hash = path
  }
}
