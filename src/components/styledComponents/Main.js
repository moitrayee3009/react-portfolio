import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './Landingpage';
import Projects from './Projects';
import About from './About';
import Resume from './Resume';




const Main = (props) => (
  <Switch>
      <Route exact path='/'
      render={(routeProps) => (
      <LandingPage {...routeProps}  />
    )}
    />
    <Route exact path='/About'
      render={(routeProps) => (
        <About {...routeProps}  />
      )} 
    />
    <Route exact path='/Projects' 
      render={(routeProps) => (
        <Projects {...routeProps} />
      )} 
    />

    <Route exact path='/Resume' 
      render={(routeProps) => (
        <Resume {...routeProps} />
      )} 
    />
      
  </Switch>
)


export default Main;
