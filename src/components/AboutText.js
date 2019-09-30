import React, { Component } from 'react';
import P from './styledComponents/P.js';



class AboutText extends Component {
  render() {
    return (
      <div>
        <h3 style={{ fontsize: '1em', fontweight: '500', color: 'teal', marginbottom: '0' }}>I'm a Stockholm based front-end developer</h3>
        <hr style={{ marginRight: '10px' }} />
        <P>I have serious passion for UI effects, animations and creating dynamic user experiences.</P>
        <P> My goal is to become a successful front-end developer and work in a company
            that can offer me different projects so that I can deepen my knowledge within the programming area.</P>
        <div className="social-links">
          <a href="mailto:moitrayee3009@gmail.com" className="button button-icon" title="mail: moitrayee3009@gmail.com">
            <i className="fa fa-envelope" />
          </a>
          <a aria-label="Navigate to Linkedin " href="https://www.linkedin.com/in/moitrayee-choudhury-54a70518/" rel="noopener noreferrer" target="_blank" className="button button-icon" title="linkedin">
            <i className="fab fa-linkedin " />
          </a>
          <a aria-label="Navigate to Github" href="https://github.com/moitrayee3009/" rel="noopener noreferrer" target="_blank" className="button button-icon" title="github">
            <i className="fab fa-github-square" />
          </a>
        </div>
      </div>
    );
  }
};

export default AboutText;