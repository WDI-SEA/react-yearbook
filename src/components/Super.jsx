const React = require('react');
const Link = require('react-router').Link;

const Super = React.createClass({
  getInitialState: function() {
    return{superlatives: ['Best dressed', 'Weirdest Smile', 'Top competitive eater']};
  },
  getRandSuperlative: function(){
    var index = Math.floor(Math.random() * this.state.superlatives.length-1)+1;
    var s = this.state.superlatives[index];
    return s;
  },
  capitalize: function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  },
  personName: function() {
    let name = this.props.person.name;
    return `${this.capitalize(name.first)} ${this.capitalize(name.last)}`
  },
  render: function() {
    let picture = this.props.person.picture;
    return (
      <div className="col-md-3">
        <img src={picture.medium} />
        <h3>{this.personName()}</h3>
        <p>{this.getRandSuperlative()}</p>
      </div>
    );
  }
});

module.exports = Super;
