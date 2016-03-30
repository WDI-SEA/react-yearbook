const React = require('react');
const Person = require('./Person');
const Link = require('react-router').Link;

const Superlatives = React.createClass({
  getInitialState: function() {
    return {people: null};
  },
  componentDidMount() {
    fetch('/api/people')
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
      <div className="text-center">
        <h1>Superlatives</h1>
        <h2>Loading...</h2>
      </div>
    );


    let people = this.state.people.map((person, idx) => {
      return <Person key={idx} idx={idx} person={person} />;
    });

    let randomNumArr = [];
  	for(i = 0; i < 3; i++){
  		randomNumArr.push(Math.floor(Math.random() * people.length));
    }
    return (
      <div className="text-center">
        <h1>Superlatives</h1>
        <div className="row">	
        	<p>{people[randomNumArr[0]]}</p>
      		<p>{people[randomNumArr[1]]}</p>
      		<p>{people[randomNumArr[2]]}</p>
				</div>
        <div className="row">
        	<div className="col-sm-4">
	        	<h2>Most Likely to Forget Breathing</h2>
        	</div>
        	<div className="col-sm-4">
        		<h2>Most Likely To Pee Pants</h2>
        	</div>
        	<div className="col-sm-4">
        		<h2>Most likely to Drink Bleach</h2>
        	</div>
        </div>
        <Link to={'/'}>Back</Link>
      </div>
    );
  }
});

module.exports = Superlatives;
