const React = require('react');

const Navbar = React.createClass({
  render: function() {
    return (
      <div>
        <a href="/">Home</a>
        <br/>
        <a href="/about">About</a>
        <br/>
        <a href="/superlatives">Superlatives</a>
      </div>
    );
  }
});

module.exports = Navbar;
