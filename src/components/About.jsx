const React = require("react");
const Link = require("react-router").Link;
const About = React.createClass({
  render: function() {
    return (
      <div>
        <Link to={"/"}>Home</Link>
        <h1>Changing the world since 1908</h1>
        <img src={'http://www.jmu.edu/about/_images/index-slideshow/pic3.jpg'} />
        <p>It's not just a slogan. It is Madison — a living, evolving university where <strong>change is the status quo.</strong> Equipped with the power that knowledge gives, JMU students, faculty and alumni work toward <strong>a brighter future</strong> in nearly every sector of global society. We expand the world's knowledge through innovative and cutting-edge research, widely available to our undergraduates. We explore new worlds through global-centric perspectives and <strong>study abroad programs.</strong> We devise new ways to generate prosperity. We help those struggling with disease, poverty, handicaps or lack of opportunity through science, education and service.</p>
        <p>With the mentoring of faculty whose first love is teaching, we help students fulfill their destinies. JMU offers each student a future of significance — not an education of mere prestige, but an extraordinary education of <strong>exceptional scholarship, inventive thinking, unparalleled attention to the world</strong> community, a <strong>university-wide enthusiasm for teaching,</strong> and a <strong>commitment to student success.</strong></p>
        <p>And our alumni continue to demonstrate the <strong>unrestrained liberty of individuals</strong> to use their acquired knowledge to transform the world.</p>
      </div>
    );
  }
});

module.exports = About;