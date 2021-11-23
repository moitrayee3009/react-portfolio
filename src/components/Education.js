import React, { Component, Fragment } from 'react'
import { Grid, Cell } from 'react-mdl'

class Education extends Component {
  state = {
    educations: [
      {
        startYear: '2018',
        endYear: '2020',
        schoolName: 'KYH Yrkeshögskola, Stockholm, Sweden',
        schoolDescription: 'Front-End Development.'
      },
      {
        startYear: '2013',
        endYear: 'incomplete',
        schoolName: 'Karolinska Institutet, Stockholm, Sweden',
        schoolDescription: 'Health Informatics.'
      },
      {
        startYear: '2008',
        endYear: '2009',
        schoolName:
          'Shahjalal University of Science and Technology, Bangladesh',
        schoolDescription: 'Masters in Statistics.'
      },
      {
        startYear: '2002',
        endYear: '2007',
        schoolName:
          'Shahjalal University of Science and Technology, Bangladesh',
        schoolDescription: 'Bachelor(hons) in Statistics.'
      }
    ]
  }
  render() {
    return (
      <Fragment>
        {this.state.educations.map((education, i) => (
          <Grid className='section' style={{ marginTop: '30px' }} key={i}>
            <Cell col={4}>
              <p style={{ fontSize: '1.3em' }}>
                {education.startYear} - {education.endYear}
              </p>
            </Cell>
            <Cell col={8}>
              <h4 style={{ marginTop: '0px' }}>{education.schoolName}</h4>
              <p style={{ fontSize: '1.5em', color: 'purple' }}>
                {education.schoolDescription}
              </p>
            </Cell>
          </Grid>
        ))}
      </Fragment>
    )
  }
}

export default Education
