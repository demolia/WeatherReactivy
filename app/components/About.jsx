var React = require('react')

// var About = React.createClass({
// 	render: function () {
// 		return (
// 				<h3> About Component </h3>
// 			)
// 	}
// })

// new stateless rendering function 

var About = (props) => {
	
	return (
				<div>
					<h1 className="text-center page-title"> About</h1>
					    <p>
							This is my first (real) React project ever. This app will give you
							the current Weather all around the world (over 200.000+ cities)
						</p>
						<p>
							Here are some of the tools I used:
						</p>
					<ul>
						<li>
							<a href="https://facebook.github.io/react">React</a> - This was the
								JavaScript framework used. (Duhh.. else it is not a React App)
						</li>
						<li>
							<a href="http://openweathermap.org">Open Weather Map</a> - This is the
							API I used but I would not recommand it to other people. Way, for reasons ;)
						</li>
					</ul>

					<div className="flex-video">
						<iframe width="420" height="315" src="https://www.youtube.com/embed/u87Fmr8su8I" allowFullScreen></iframe>
					</div>		
				</div>	
			)
}


module.exports = About