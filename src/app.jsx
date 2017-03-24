const React = require('react');
const Router = require('react-router').Router;
const Route = require('react-router').Route;
const browserHistory = require('react-router').browserHistory;

const ReactDOM = require('react-dom');
const YearBook = require('./components/YearBook');
const PersonShow = require('./components/PersonShow');
const About = require('./components/About');
const Navbar = require('./components/Navbar');
const Superlatives = require('./components/Superlatives');

const App = React.createClass({
  render() {
    return (
      <div>
        <Navbar />
        <Router history={browserHistory}>
          <Route path="/" component={YearBook}/>
          <Route path="about" component={About}/>
          <Route path="superlatives" component={Superlatives}/>
          <Route path="people/:seed/:id" component={PersonShow}/>
        </Router>
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('container'));
