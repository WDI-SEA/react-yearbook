const React = require('react');
const ReactDOM = require('react-dom');
const YearBook = require('./components/YearBook');
const PersonShow = require('./components/PersonShow');
const About = require('./components/About');

const Router = require('react-router').Router;
const Route = require('react-router').Router;
const browserHistory = require('react-router').browserHistory;
const Link = require("react-router").Link;


const App = React.createClass({
    render: function() {
    return (
       <Router history={browserHistory}>
          <Route path="/" component={YearBook} />
          <Route path="/person/:idx" component={PersonShow} />
          <Route path="/About" component={About} />

       </Router>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('container'));
