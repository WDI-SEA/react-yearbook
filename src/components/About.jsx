const React = require('react');
const NavBar = require('./NavBar');

const About = React.createClass({
  render: function() {
    return (
      <div>
        <NavBar />
        <h1>Adventure School!</h1>
        <h2>Welcome newcomers, this is Adventure School!</h2>
        <h2>A place where students are encouraged to explore the world around them.</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/cUYSGojUuAU" frameBorder="0" allowFullScreen></iframe>
      </div>
    );
  }
});

module.exports = About;