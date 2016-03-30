const React = require('react');
const Link = require("react-router").Link;


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
    let idx = this.props.idx;
    console.log(idx);
    return (
      <div className="col-md-3">
        <img src={picture.medium} />
        <Link to={`/person/${idx}`}><h3>{this.personName()}</h3></Link>
      </div>
    );
  }
});

module.exports = Person;
