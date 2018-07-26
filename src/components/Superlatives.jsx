const React = require('react');
const Super = require('./Super');

const Superlatives = React.createClass({
  getInitialState: function(){
    return {people: null};
  },
  componentDidMount(){
    fetch('/api/superlatives')
    .then(response => {
      response.json().then(data => {
        this.setState({people: data});
      });
    }).catch(error => {
      this.setState({people: null});
    });
  },
  render: function() {
      if(!this.state.people) return(
        <div>
          <h1>Superlatives</h1>
          <h2>Loading...</h2>
        </div>
      );

      let people = this.state.people.map((person, idx) => {
        return <Super key={idx} idx={idx} person={person} />;
      });
      return (
        <div>
          <h1>Superlatives</h1>
          <div className="row">{people}</div>
        </div>
      );
  }
});

module.exports = Superlatives;
