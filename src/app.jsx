const React = require('react');
const ReactDOM = require('react-dom');
const YearBook = require('./components/YearBook');
const PersonShow = require('./components/PersonShow');
const Superlatives = require('./components/Superlatives');
const About = require('./components/About');

const Router = require('react-router').Router;
const Route = require('react-router').Route;
const browserHistory = require('react-router').browserHistory;

const App = React.createClass({
  render: function() {
    return (
    	<Router history={browserHistory}>
    		<Router path="/" component={YearBook} />
    		<Router path="/people/:id" component={PersonShow} />
    		<Router path="/superlatives" component={Superlatives} />
    		<Router path="/about" component={About} />
    	</Router>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('container'));
