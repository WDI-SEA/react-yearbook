const React = require("react");
const Link = require("react-router").Link;

const NavBar = React.createClass({
	render: function(){
		return (
			<ul>
				<li><Link to='/'>Home</Link><Link to='/about'>About</Link></li>
				
			</ul>
		);
	}
});

module.exports = NavBar;