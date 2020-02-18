import React, { Component, Fragment } from "react";
import { Grid, Cell } from "react-mdl";
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
        jobStartYear: "November 2019",
        jobEndYear: "March 2020",
        jobName: "Front End Developer Intern",
        company: "Accomplice.se"
      },
      {
        jobStartYear: "June 2010",
        jobEndYear: "December 2011",
        jobName: "Statistical programmer(SAS)",
        company: "Shafi Consultancy Ltd. Bangladesh."
      }
    ]
  };

  render() {
    return (
      <Fragment>
        {this.state.experiences.map((experience, i) => (
          <Grid style={{ marginTop: "0" }} key={i}>
            {/* <Wrapper> */}
            <Cell col={4}>
              <p>
                {experience.jobStartYear} - {experience.jobEndYear}
              </p>
            </Cell>
            <Cell col={8}>
              <h4 style={{ marginTop: "0px" }}>{experience.jobName}</h4>
              <p className="company">{experience.company}</p>
            </Cell>
            {/* </Wrapper> */}
          </Grid>
        ))}
      </Fragment>
    );
  }
}

export default Experience;
