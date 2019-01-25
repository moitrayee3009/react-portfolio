import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
// import Div from './Div';


class Contact extends Component {
  render() {
    return(
      
      <div className="contact-body section">
        <Grid className="contact-grid">
          {/* <Cell col={6}>
            <h2>Moitrayee Choudhury</h2>
            <img
              src="/images/avatar-rounded.png"
              alt="avatar"
              style={{height: '250px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>

          </Cell> */}
          
            <Cell col={6}>
              <h2>Contact Me</h2>
              <hr/>

              <div className="contact-list">
                <List>
                  <ListItem>
                    <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton', color: 'purple'}}>
                    <span style={{width: '35px'}}><i className="fa fa-phone-square" aria-hidden="true"/></span>
                    <span style={{width: '200px',paddingLeft: '20px'}}>0046 735 xxx xxx</span>
                    </ListItemContent>
                  </ListItem>

                  <ListItem>
                    <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton', color: 'purple'}}>
                      <span style={{width: '30px'}}><i className="fa fa-envelope" aria-hidden="true"/></span>
                      <span style={{width: '200px',paddingLeft: '15px'}}>moitrayee3009@gmail.com</span>
                    </ListItemContent>
                  </ListItem>

                </List>
              </div>
            </Cell>
            
        </Grid>
      </div>
      
    )
  }
}

export default Contact;
