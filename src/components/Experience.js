import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
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
    jobStartYear : 'June 2010',
    jobEndYear: 'December 2011',
    jobName: 'Statistical programmer(SAS)',
    company: 'Shafi Consultancy Ltd. Bangladesh.'
  }
  


  render() {
    return(
      <Grid style={{marginTop: '30px'}}>
      {/* <Wrapper> */}
        <Cell col={4}>
            <p>{this.state.jobStartYear} - {this.state.jobEndYear}</p>
        </Cell>
        <Cell col={8}>
          <h4 style={{marginTop:'0px'}}>{this.state.jobName}</h4>
          <p className="company">{this.state.company}</p>
        </Cell>
        
      {/* </Wrapper> */}
       
      </Grid>
      )
  }
}

export default Experience;
