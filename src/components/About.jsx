const React = require('react');
const NavBar = require('./navbar');

const About = React.createClass({
  render: function() {
    return (
      <div>
        <h1 className="text-center">About The Random Yearbook</h1><br />
        <img src="http://www.rwu.edu/sites/default/files/hero-imgs/campus-life_yearbook_headers.jpg?1315938838" className="ybheader"/>
      <div className="well">
        <p className="lead">
        The Random Yearbook was a project built using ReactJS and the <a href="https://randomuser.me/">Random User Generator API</a>. It was a fun project undertaken to develop my skills in React. Please feel free to browse and share any comments, bugs, or suggestions for improvement. I can be reached at <a href="mailto:michaelscotthurley@gmail.com">michaelscotthurley@gmail.com</a>. Unfortunately, there is no way for me to awkwardly ask you to sign it...yet.
        </p>
      </div>
      </div>
    );
  }
});

module.exports = About;