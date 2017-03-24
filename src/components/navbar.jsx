const React = require('react');
const Link = require('react-router').Link;

const NavBar = React.createClass({
  render: function() {
    return (
      
    <p className="lead"><Link to='/' className="btn btn-info">Back to the Randoms</Link> | <Link to='/about' className="btn btn-primary">About the Randoms</Link></p>
      
    )
  }
})

module.exports = NavBar;