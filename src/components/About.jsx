const React = require('react');
const NavBar = require('./NavBar');

const About = React.createClass ({
  render: function () {
    return (
      <div className="text-center">
       <NavBar />
        <h1 className="school">Midvale School for the Gifted</h1>
        <img src="http://americanthings.files.wordpress.com/2009/07/the-far-side-by-ejblog-files-wordpressdotcom.jpg"></img>

        <h3>Educating your little geniuses since 1993.</h3>
        <p className="text-left">Gifted children have an exceptional ability to learn or reason beyond their same-age peers. Their minds are often ahead of their physical growth, and specific cognitive and social-emotional functions can develop unevenly. Often, high achievement and giftedness are perceived similarly. However, gifted children exhibit a high ability to make meaning out of complex concepts or problems, while high achieving students show exemplary ability to utilize and apply the skills and procedures they have learned.</p>
        <p className="text-left">In online elementary gifted programs, high-ability students benefit from an accelerated learning pace, specially trained teachers, and an enriched curriculum with choices for studying subjects in greater depth. They also enjoy opportunities to take part in special projects and develop higher-level thinking skills. Gifted and talented courses are available for elementary and middle school students in grades 3–8.</p>
    
      </div>

    );
  }
});

module.exports = About;