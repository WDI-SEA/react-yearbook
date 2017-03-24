const React = require('react');
const Link = require('react-router').Link;

const Person = React.createClass({
  capitalize: function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  },
  personName: function() {
    let name = this.props.person.user.name;
    return `${this.capitalize(name.first)} ${this.capitalize(name.last)}`
  },
  render: function() {
    let picture = this.props.person.user.picture;
    return (
      <div className="col-sm-4 center-block">
        <img src={picture.medium} />
        <Link to={`/people/${this.props.idx}`}><h3>{this.personName()}</h3></Link>
      </div>
    );
  }
});

module.exports = Person;
