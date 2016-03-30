const React = require('react');

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
      <div key="idx" className="col-md-3">
        <img src={picture.medium} />
        <h3>{this.personName()}</h3>
        <p>{this.props.person.idx}</p>
      </div>
    );
  }
});

module.exports = Person;
