import React, { Component } from 'react';
import './App.css';
import { Header, Layout, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/Main';
import { NavLink } from 'react-router-dom'; 
import { Key } from './Key';


const API = Key;

const headerTextStyle = {
    textDecoration: 'none', 
    color: 'purple', 
    letterSpacing: '0', 
    fontWeight: '700',
    fontSize: '18px'
    }

 const navLink = { 
    color: 'purple',
   fontSize: '16px',
   fontWeight: '600'
}   



class App extends Component {
    constructor(){
        super()
        this.state = {
            city: '',
            temperature: '',
            showMenu: false,
            js:true
        }

        this.menuShowToggle = this.menuShowToggle.bind(this);
    }

    menuShowToggle = () => {
        this.setState((prevState, props) => { 
            var drawer = document.getElementsByClassName('mdl-layout__drawer')[0];
            var drawer_obfuscator = document.getElementsByClassName('mdl-layout__obfuscator')[0];
            drawer.classList.toggle("is-visible");
            drawer_obfuscator.classList.toggle("is-visible");
            return {showMenu: !prevState.showMenu}
        })
        
    }

   
    componentDidMount() {
        fetch(API)
        .then((res) => res.json())
        .then((json) => {
            this.setState({city: (json.name),temperature: (json.main.temp-273.15).toFixed(1)})
        })
        this.handleResize();
        this.handleResizeTemp();
        window.addEventListener('resize', this.handleResize);
        window.addEventListener('resize', this.handleResizeTemp);
        
    }

    componentWillMount() {
        window.removeEventListener('resize', this.handleResize);
        window.removeEventListener('resize', this.handleResizeTemp);
    }

    handleResize = () => {
        const windowWidth = window.innerWidth;
        return windowWidth <= 1024 ? <h3 className="heading-mobile">Moitrayee Choudhury</h3> : null;
       
    }

    handleResizeTemp = () => {
        const windowWidth = window.innerWidth;
        return windowWidth <= 1024 ? <p className="temp-mobile">{`${this.state.city}, ${this.state.temperature}°C` }</p> : null;
    }

   
      
  render() {
        return (
        
            <div style={{height: '100vh', position: 'relative'}} className="demo-big-content">
            {this.handleResize()}
            {this.handleResizeTemp()}
                <Layout>
                    <Header 
                         
                        title={<NavLink 
                        style={headerTextStyle} 
                    to="/">Moitrayee Choudhury<p style={{color: 'teal',fontSize: '14px'}}>{this.state.city}, <span style={{color:'purple',fontSize: '14px'}}> {this.state.temperature ? this.state.temperature : null}°C </span> .</p></NavLink>}scroll>
                        
                        <Navigation>
                            <NavLink exact activeClassName="current" to='/' style={navLink}>Home</NavLink>
                            <NavLink activeClassName="current" to="/About" style={navLink}>About Me</NavLink>
                            <NavLink activeClassName="current" to="/Projects" style={navLink}>Projects</NavLink>
                            <NavLink activeClassName="current" to="/Resume" style={navLink}>Resume</NavLink>  
                        </Navigation>
                    </Header>

                    <Drawer className={this.state.showMenu ? 'showMenu': 'hideMenu'} 
                            title ={<NavLink onClick={this.menuShowToggle} 
                                            style={headerTextStyle} to="/">MyPortfolio
                                    </NavLink>}>
                        <Navigation>
                            <NavLink to="/About" style={navLink} onClick={this.menuShowToggle}>About Me</NavLink>
                            <NavLink to="/Projects" style={navLink} onClick={this.menuShowToggle}>Projects</NavLink>
                            <NavLink to="/Resume" style={navLink} onClick={this.menuShowToggle}>Resume</NavLink>
                        </Navigation>
                    </Drawer>
                    
                    <Content>
                        <div className="page-content" />
                        <Main />
                    </Content>
                    
                </Layout>
            </div> 
        );
    }
}

export default App;
        

