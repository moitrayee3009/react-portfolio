import React, { Component, Fragment } from 'react'
import { Grid, Cell } from 'react-mdl'
import A from './styledComponents/A'
// import styled from 'styled-components';

// const Wrapper = styled.section`
//     margin-left: auto;
//     margin-right: auto;
//     // display: flex;
//      flex: 1;
//     background-Color: rgb(248, 248, 248);
//     border: .5px solid rgba(189, 186, 186, 0.425);
//     width: 350px;
//     box-shadow: 3px 3px 10px lightgrey;
//     `;

class Experience extends Component {
  state = {
    experiences: [
      {
        jobStartYear: 'November 23, 2021',
        jobEndYear: 'Present',
        jobName: 'ReactJs Developer Intern',
        company: 'Minimumque.com'
      },
      {
        jobStartYear: 'March 30, 2020',
        jobEndYear: 'May 15, 2020',
        jobName: 'ExamensArbete (Final project)',
        company: 'Accomplice.se'
      },
      {
        jobStartYear: 'November 11, 2019',
        jobEndYear: 'March 27, 2020',
        jobName: 'Front End Developer Intern',
        company: 'Accomplice.se'
      },
      {
        jobStartYear: 'June 2010',
        jobEndYear: 'December 2011',
        jobName: 'Statistical programmer(SAS)',
        company: 'shaficonsultancy.com'
      }
    ]
  }

  render() {
    return (
      <Fragment>
        {this.state.experiences.map((experience, i) => (
          <Grid style={{ marginTop: '0' }} key={i}>
            {/* <Wrapper> */}
            <Cell col={4}>
              <p style={{ fontSize: '1.2em' }}>
                {experience.jobStartYear} - {experience.jobEndYear}
              </p>
            </Cell>
            <Cell col={8}>
              <h4 style={{ marginTop: '0px' }}>{experience.jobName}</h4>
              <p className='company'>
                <A href={`https://${experience.company}/`} target='_blank'>
                  {experience.company.split('.')[0]}
                </A>
              </p>
            </Cell>
            {/* </Wrapper> */}
          </Grid>
        ))}
      </Fragment>
    )
  }
}

export default Experience
