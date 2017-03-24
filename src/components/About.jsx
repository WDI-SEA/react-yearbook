const React = require('react');

const About = React.createClass({
    render: function() {
      return (
        <div id="aboutBackground">
          <div>
            <h1>About</h1>
            <h2>Wats the fox say?</h2>
            <h4>It's a question many have asked. Those who know, know well, those who don't....</h4>
            <iframe width="854" height="480" src="https://www.youtube.com/embed/jofNR_WkoCE" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
      );
  }
});

module.exports = About;