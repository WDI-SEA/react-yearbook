const React = require('react');
const Link = require('react-router').Link;

const NavBar = React.createClass({
  render: function() {
    return (
      <ul className='yrbook-navbar'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/About'>About</Link></li>
      </ul>
    );
  }
});

module.exports = NavBar;