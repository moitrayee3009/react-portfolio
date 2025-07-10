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
        jobStartYear: 'October, 2023',
        jobEndYear: 'February, 2025',
        jobName: 'FullStack Developer ',
        company: 'QBank DAM'
      },
      {
        jobStartYear: 'April, 2022',
        jobEndYear: 'September, 2023',
        jobName: 'Frontend Developer',
        company: 'Atrai Lab'
      },
      {
        jobStartYear: 'November, 2021',
        jobEndYear: 'March, 2022',
        jobName: 'Frontend Developer Intern',
        company: 'Minimumque.com'
      },
      {
        jobStartYear: 'March, 2020',
        jobEndYear: 'May, 2020',
        jobName: 'ExamensArbete (Final project)',
        company: 'Accomplice.se'
      },
      {
        jobStartYear: 'November, 2019',
        jobEndYear: 'March, 2020',
        jobName: 'Front End Developer Intern',
        company: 'Accomplice.se'
      },
      {
        jobStartYear: 'June 2011',
        jobEndYear: 'December 2011',
        jobName: 'Statistical programmer(SAS)',
        company: 'shaficonsultancy.com'
      },
      {
        jobStartYear: 'December 2010',
        jobEndYear: 'May 2011',
        jobName: 'Customer Relation Officer',
        company: 'The Dhaka Mercantile Co-Operative Bank Ltd, Bangladesh'
      }
    ]
  }

  render() {
    return (
      <Fragment>
        {this.state.experiences.map((experience, i) => (
          <Grid style={{ marginTop: '0' }} key={i}>
            <Cell col={4} phone={12} tablet={12}>
              <p className='experience-year'>
                {experience.jobStartYear} - {experience.jobEndYear}
              </p>
            </Cell>
            <Cell col={8} phone={12} tablet={12}>
              <h4 className='experience-job'>{experience.jobName}</h4>
              <p className='company'>
                <A
                  href={`https://${experience.company}/`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {experience.company.split('.')[0]}
                </A>
              </p>
            </Cell>
          </Grid>
        ))}
      </Fragment>
    )
  }
}

export default Experience
