const React = require('react');
const YearBook = require('./YearBook')
const PersonShow = require('./PersonShow')
const Link = require('react-router').Link;

const Person = React.createClass({
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
        <Link to={"/people/456/" + this.props.idx}><h3>{this.personName()}</h3></Link>
      </div>
    );
  }
});

module.exports = Person;
