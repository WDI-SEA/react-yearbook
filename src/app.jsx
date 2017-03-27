const React = require('react');
const ReactDOM = require('react-dom');
const Router = require('react-router');
const Route = require('react-route');
const browserHistory = require('react-router').browserHistory;

const YearBook = require('./components/YearBook');
const PersonShow = require('./components/PersonShow');

const App = React.createClass({
  render: function() {
    return (
      <div>
        <Router history={browserHistory}>
          <Route path='/' component={YearBook} />
          <Route path='/people/wdi/:idx' compenent={PersonShow} />
        </Router>
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('container'));
