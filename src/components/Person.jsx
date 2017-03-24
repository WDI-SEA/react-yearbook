const React = require('react');
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
    // console.log("person.jsx render:", this.props.person)
    let picture = this.props.person.picture;
    return (
      <div className="col-md-3">
        <img src={picture.medium} />
        <Link to={'/people/wdi/' + this.props.idx}>
          {this.personName()}
        </Link>
      </div>
    );
  }
});

module.exports = Person;
