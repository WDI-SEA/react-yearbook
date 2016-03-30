const React = require('react');
const ReactDOM = require('react-dom');
const YearBook = require('./components/YearBook');
const PersonShow = require('./components/PersonShow');

const Router = require('react-router').Router;
const Route = require('react-router').Route;
const browserHistory = require('react-router').browserHistory;


const App = React.createClass({
  render: function() {
    return (
      <div>
      <Router history={browserHistory}>
        <Route path="/" component={YearBook} />
        <Route path="/people/:id" component={PersonShow} />
      </Router>
      
        <h1>Yearbook Component</h1>
        <YearBook />
        <h1>PersonShow Component (Hardcoded to Person 0)</h1>
        <PersonShow />
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('container'));
