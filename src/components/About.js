import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import AboutText from './AboutText';
import Education from './Education';
import Experience from './Experience';
import Chart from './chart';
import Hr from './Hr';

const grid = {
  padding: '50px 15px'
};

class About extends Component {
 
  render() {
    return(
      <div style={grid}>
        <Grid>
          <Cell col={4}>
            <AboutText />
            <Hr />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h3>Skills</h3>
            <Chart />
            <Hr />
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
