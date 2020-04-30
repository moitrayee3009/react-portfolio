import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import AboutText from './AboutText'
import Education from './Education'
import Experience from './Experience'
import Chart from './chart'
import Hr from './styledComponents/Hr'
import H3 from './styledComponents/H3'

const grid = {
  padding: '50px 15px'
}

const rightColum = {
  background: 'white',
  color: 'black',
  padding: '2em'
}

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
            <H3 style={{ marginTop: '0' }}>Experience</H3>
            <Experience />
            <Hr style={{ marginTop: '51px' }} />
            <H3>Skills</H3>
            <Chart />
            <Hr style={{ marginTop: '50px' }} />
            <H3>Education</H3>
            <Education />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default About
