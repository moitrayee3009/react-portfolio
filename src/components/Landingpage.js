import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Hr from './styledComponents/Hr';
import H1 from './styledComponents/H1';
import BannerTextP from './styledComponents/BannerTextP';
import BannerText from './styledComponents/BannerText';



const landingGrid = {
  background: 'white',
  textAlign: 'center',
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%'
}

class Landing extends Component {
  render() {
    return(
      <div>
        <Grid style={landingGrid}>
          
            <Cell col={12}>
                <img
                  src={require('./images/avatar_r.png')} 
                  alt="avatar"
                  className="avatar-img"
                  />

                <BannerText>
                  <H1>Full Stack Web Developer</H1>

                  <Hr primary/>

                  <BannerTextP>HTML5/CSS3 | Bootstrap | JavaScript | React | NodeJS </BannerTextP>

                  <div className="social-links">
                      <a href="mailto:moitrayee3009@gmail.com" className="button button-icon" title="mail: moitrayee3009@gmail.com">
                          <i className="fa fa-envelope"></i>
                      </a>

                      <a aria-label="Navigate to Linkedin " href="https://www.linkedin.com/in/moitrayee-choudhury-54a70518/"rel="noopener noreferrer"  target="_blank" className="button button-icon" title="linkedin">
                          <i className="fab fa-linkedin "></i>
                      </a>

                      <a aria-label="Navigate to Github" href="https://github.com/moitrayee3009/" rel="noopener noreferrer"  target="_blank" className="button button-icon" title="github">
                          <i className="fab fa-github-square"></i>
                      </a>
                  </div>
            
                </BannerText>
            
            </Cell>
          
        </Grid>
      </div>
    )
  }
}

export default Landing;
