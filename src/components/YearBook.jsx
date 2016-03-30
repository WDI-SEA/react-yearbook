const React = require('react');
const Person = require('./Person');
const Link = require('react-router').Link;

const Yearbook = React.createClass({
  getInitialState: function() {
    return {people: null};
  },
  componentDidMount() {
    fetch('/api/people/')
      .then(response => {
        response.json().then(data => {
          this.setState({people: data});
        });
      }).catch(error => {
        this.setState({people: null});
      });
  },
  render: function() {
    if (!this.state.people) return (
      <div>
        <h1>Yearbook</h1>
        <h2>Loading...</h2>
      </div>
    );

    let people = this.state.people.map((person, idx) => {
      return <Person key={idx} idx={idx} person={person} />;
    });
    return (
      <div>
        <h1 className="text-center">The Random Yearbook</h1>
        <h3 className="text-center">
          Celebrate the memories you did not have, with people you do not know.
        </h3>
        <div className="row">{people}</div>
      </div>
    );
  }
});

module.exports = Yearbook;
