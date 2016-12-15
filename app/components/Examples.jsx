var React = require('react')
var {Link} = require('react-router')
// var Examples = React.createClass({
// 	render: function () {
// 		return (
// 				<h3> Examples Component </h3>
// 			)
// 	}
// })

// new stateless rendering function, found in docs React 0.1.14 

var Examples = (props) => {
	return (
		<div>
			<h1 className="text-center page-title"> Examples </h1>
			<p> Here are a few example locations to try out: </p>
			<ol>
				<li>
					<Link to='/?location=Monnickendam'>Monnickendam, Netherlands</Link>
				</li>
				<li> 
					<Link to='/?location=Rio'>Rio, Brazil</Link>
				</li>
			</ol>
		</div>
	)
}

module.exports = Examples