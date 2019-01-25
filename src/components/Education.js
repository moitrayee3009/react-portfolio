import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Education extends Component {
  
  state = {
    startYearKYH: '2018',
    endYearKYH: '2020',
    schoolNameKYH: 'KYH Yrkeshögskola, Stockholm, Sweden',
    schoolDescriptionKYH: 'Front-End Development.',

    startYear: '2002',
    endYear: '2009',
    schoolName: 'Shahjalal University of Science and Technology, Bangladesh',
    schoolDescription: 'Masters in Statistics & Bachelor(hons) in Statistics.'
  }
  render() {
    return(
        <Grid className="section" style={{marginTop: '30px'}}>
        
          <Cell col={4}>
            <p>{this.state.startYearKYH} - {this.state.endYearKYH}</p>
          </Cell>
          <Cell col={8}>
            <h4 style={{marginTop:'0px'}}>{this.state.schoolNameKYH}</h4>
            <p>{this.state.schoolDescriptionKYH}</p>
          </Cell>
        

          {/*Bangladesh  */}
          
          <Cell col={4}>
            <p>{this.state.startYear} - {this.state.endYear}</p>
          </Cell>
          <Cell col={8}>
            <h4 style={{marginTop:'0px'}}>{this.state.schoolName}</h4>
            <p>{this.state.schoolDescription}</p>
          </Cell>
          
        </Grid>
      )
    }
}

export default Education;
