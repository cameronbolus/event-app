import Backbone from 'backbone';
import ReactDOM from 'react-dom'
import React from 'react'
import {RegularNavComponent} from '../components/unauthenticated-nav.js'
import {SearchBarComponent} from '../components/searchbar.js'
import {STORE} from '../store.js'
import {ACTIONS} from '../actions.js'
import {FooterComponent} from '../components/footerComp.js'

// import {SimpleSlider} from '../components/home-carousel.js'

export const HomePageView = React.createClass({

	getInitialState: function(){
		return STORE.getStoreData()
	},

	componentDidMount: function(){
		let component = this;
		console.log('ACTIONS.fetch()...')
		ACTIONS.fetchAllEvents()

	},

	render: function(){
		return (
      <div>
           <SearchBarComponent eventsList={this.state.eventsList}/>
           <img className="home-page-img" src="./images/event.jpg" alt=""></img>
					 <FooterComponent/>

				 	{/* <SimpleSlider/> */}
      </div>
		)
	}
})
