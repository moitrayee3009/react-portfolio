import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import AboutText from './AboutText';
import Education from './Education';
import Experience from './Experience';
import Chart from './chart';
import Hr from './styledComponents/Hr';

const grid = {
  padding: '50px 15px'
};

const rightColum = {
  background: 'white',
  color: 'black',
  padding: '2em'
};

class About extends Component {

  render() {
    return (
      <div style={grid}>
        <Grid>
          <Cell col={4} tablet={12}>
            <AboutText />
            <Hr />
          </Cell>
          <Cell style={rightColum} col={8}>
            <h3>Skills</h3>
            <Chart />
            <Hr style={{ marginTop: '50px' }} />
            <h3>Experience</h3>
            <Experience />
            <Hr />
            <h3>Education</h3>
            <Education />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default About;
