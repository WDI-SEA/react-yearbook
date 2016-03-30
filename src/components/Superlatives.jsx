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

    let awardsArray = [
  		"Most Likely to Forget Breathing",
  		"Most Likely To Pee Pants",
  		"Most likely to Drink Bleach",
  		"Most Likely to Marry Cousin",
  		"Most Likely to Eat Their Boogers",
  		"Most Likely to Poop Their Pants",
  		"Most Likely to Sniff Their Fart",
  		"Most Likely to Be A Virgin",
  		"Most Likely to Vote for Trump",
  		"Most Likely to Vote for Hillary",
  		"Most Likely to Get Fat",
  		"Most Likely to Watch American Idol",
  		"Most Likely to Never Get Laid"
  	];

  	let theseAwards = []
  	for(var i = 0; i < 3; i++){
  		theseAwards.push(awardsArray.splice(Math.floor(Math.random() * awardsArray.length - 1), 1));
  	};

    let people = this.state.people.map((person, idx) => {
      return <Person key={idx} idx={idx} person={person} />;
    });

    let randomNumArr = [];
  	for(i = 0; i < 3; i++){
  		randomNum = Math.floor(Math.random() * people.length - 1);
  		if(randomNumArr.indexOf(randomNum) == -1){
  			randomNumArr.push(randomNum);
  		}
    }
    return (
      <div className="text-center">
        <h1>Superlatives</h1>
        <div className="row">	
        	{people[randomNumArr[0]]}
      		{people[randomNumArr[1]]}
      		{people[randomNumArr[2]]}
				</div>
        <div className="row">
        	<div className="col-sm-4">
	        	<h2>{theseAwards[0]}</h2>
        	</div>
        	<div className="col-sm-4">
        		<h2>{theseAwards[1]}</h2>
        	</div>
        	<div className="col-sm-4">
        		<h2>{theseAwards[2]}</h2>
        	</div>
        </div>
        <Link to={'/'}>Back</Link>
      </div>
    );
  }
});

module.exports = Superlatives;
