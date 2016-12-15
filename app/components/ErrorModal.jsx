//loading in req modules
var React = require('react')

//creating a modal-box when user types something, idea of similair app that was build. 
var ErrorModal = React.createClass({
		getDefaultProps: function() {
			return {
				title: "Error 418, \n please alt + f4 to solve"
			}
		},
		propTypes: {
			title: React.PropTypes.string,
			message: React.PropTypes.string.isRequired
		},

		componentDidMount: function () {
			var modal = new Foundation.Reveal($('#error-modal'))
			modal.open()
		},
		render: function () {
		  var {title, message} = this.props
		  
		  return(
			<div id="error-modal" className="reveal tiny text-center" data-reveal="">
				<h4> {title} </h4>
				<p>  {message} </p>
				<p>
					<button className="button hollow" data-close="">
					I know I am a theepot
					</button>
				</p>
			</div>
		  )
	}
})

module.exports = ErrorModal

