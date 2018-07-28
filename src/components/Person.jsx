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
    let picture = this.props.person.picture;
    return (
      <div className="col-md-3">
        <img src={picture.medium} />
        <h3>
          <Link to={'/people/wdi/' + this.props.idx}>
            {this.personName()}
          </Link>
        </h3>
      </div>
    );
  }
});

module.exports = Person;
