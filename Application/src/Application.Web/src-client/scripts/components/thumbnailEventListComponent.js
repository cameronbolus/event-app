import Backbone from 'backbone';
import ReactDOM from 'react-dom'
import React from 'react'



export const ThumbnailEventListComponent = React.createClass({

	_handleDetailedViewClick: function(evt){
		let clickedIconEl=evt.currentTarget
		console.log(clickedIconEl.dataset.itemid)
	window.location.hash = `events/${clickedIconEl.dataset.itemid}`
	},

	getInitialState: function(){
    return {
      showAlert: false
    }
  },


  _removeModal: function(){
    this.setState({showAlert: false})

  },

	_renderAlert: function(){
	if(this.state.showAlert===true){
		return(
			<div className="modal-wrapper">
				<div className="modal">
					<h1>Please Register or Sign In</h1>
					<p>Must have an account to save events.</p>
				</div>
			</div>
		)
	}
},

_makeOneEvent: function(eventsList){
	console.log(eventsList)
	let arrayOfEventsComponents= eventsList.map(function(smod, i){
		return (
			<h1>hey</h1>
		)
	})
},

_handleButtonClick: function(evt){
	console.log("CLICKKK")
	this.setState({showAlert: true})
	console.log(this.state)
		this._renderAlert


},

	render: function(){
		let component= this
		console.log(this.props)
		let allEvents= this.props.eventsList
		console.log(allEvents)

		return (
			<div className="row">
			  <div className="col-sm-6 col-md-4">
			    <div className="thumbnail" data-itemid="hey" onClick={this._handleDetailedViewClick}>
			      <img src="http://www.shockmansion.com/wp-content/myimages/2016/03/rr231.jpg" alt="..."/>
			      <div className="caption">
			        <h3>Event Name</h3>
			        <p>Event Date</p>
							<p>Event Location</p>
							</div>
						</div>
			        <p><a className="btn btn-primary" role="button" onClick={this._handleButtonClick}>Save to my Favorites</a></p>
			  </div>

				<div className="col-sm-6 col-md-4">
			    <div className="thumbnail" data-itemid="snoopdogg" onClick={this._handleDetailedViewClick}>
			      <img src="http://www.shockmansion.com/wp-content/myimages/2016/03/rr231.jpg" alt="..."/>
			      <div className="caption">
			        <h3>Event Name</h3>
			        <p>Event Date</p>
							<p>Event Location</p>
			        <p><a href="#" className="btn btn-primary" role="button" onClick={this._renderAlert}>Save to my Favorites</a></p>
			      </div>
			    </div>
			  </div>

				<div className="col-sm-6 col-md-4">
			    <div className="thumbnail" data-itemid="snooooooopdoggy" onClick={this._handleDetailedViewClick}>
			      <img src="http://www.shockmansion.com/wp-content/myimages/2016/03/rr231.jpg" alt="..."/>
			      <div className="caption">
			        <h3>Event Name</h3>
			        <p>Event Date</p>
							<p>Event Location</p>
			        <p><a href="#" className="btn btn-primary" role="button" onClick={this._renderAlert}>Save to my Favorites</a></p>
			      </div>
			    </div>
			  </div>
			</div>
		)
	}
})
