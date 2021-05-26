import React, { Component } from 'react'
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button
} from 'react-mdl'
import CardBackground from './images/landingspage.png'
import Background from './images/quire.png'
import Circle from './images/circle.png'
import PerfectMatch from './images/perfectmatch.png'
import Wordpress from './images/wordpress.JPG'
import Tensity from './images/tensity.png'
import BotanistHouse from './images/botanisthouse.png'

import { FacebookShareButton, LinkedinShareButton } from 'react-share'
import { FacebookIcon, LinkedinIcon } from 'react-share'

const styles = {
  color: '#fff',
  height: '176px',
  background: `url(${CardBackground})`,
  backgroundPosition: 'right',
  backgroundSize: 'cover'
}

const styles2 = {
  color: '#fff',
  height: '176px',
  background: `url(${Background})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover'
}

const styles3 = {
  color: '#fff',
  height: '176px',
  background: `url(${Circle})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover'
}

const styles4 = {
  color: '#fff',
  height: '176px',
  background: `url(${PerfectMatch})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover'
}

const styles5 = {
  color: '#fff',
  height: '176px',
  background: `url(${Wordpress})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover'
}

const styles6 = {
  color: '#fff',
  height: '176px',
  background: `url(${BotanistHouse})`,
  backgroundPosition: 'top',
  backgroundSize: 'cover'
}

const styles7 = {
  color: '#fff',
  height: '176px',
  background: `url(${Tensity})`,
  backgroundPosition: 'top',
  backgroundSize: 'cover'
}

const button = {
  color: 'purple'
}

const textArea = {
  height: '40px',
  color: 'rgba(0,0,0, 0.54)',
  fontSize: '1rem',
  lineHeight: '18px',
  overflow: 'hidden',
  padding: '8px 16px 20px 16px',
  width: '90%'
}

const ShareStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  width: '100px',
  paddingLeft: '50px'
}

const shareUrlFacebook = 'https://www.facebook.com/'
const titleFacebook = 'Facebook'

const shareUrlLinkedIn = 'https://www.linkedin.com/'
const titleLinkedin = 'LinkedIn'

class Projects extends Component {
  state = { activeTab: 0 }

  clickToLandingpage(e) {
    e.preventDefault()
    window.open('http://first_project.surge.sh/', '_blank')
  }

  clickToQuire(e) {
    e.preventDefault()
    window.open('http://quire-pisces.surge.sh/index.html', '_blank')
  }

  clickToCircle(e) {
    e.preventDefault()
    window.open('http://tip-tap.surge.sh/', '_blank')
  }

  clickToPerfectMatch(e) {
    e.preventDefault()
    window.open('http://purfect-match.surge.sh/', '_blank')
  }

  // GitHub Links

  handleClickGithubLandingpage(e) {
    e.preventDefault()
    window.open('https://github.com/moitrayee3009/LandingPage', '_blank')
  }

  handleClickGithuQuire(e) {
    e.preventDefault()
    window.open('https://github.com/moitrayee3009/Quire', '_blank')
  }

  handleClickGithuCircle(e) {
    e.preventDefault()
    window.open('https://github.com/moitrayee3009/music-funProject', '_blank')
  }

  handleClickGithubPerfectMatch(e) {
    e.preventDefault()
    window.open(
      'https://github.com/moitrayee3009/BootStrap-PerfectMatch',
      '_blank'
    )
  }

  handleClickGithubSwedishSummer(e) {
    e.preventDefault()
    window.open('https://github.com/moitrayee3009/swedishsummer', '_blank')
  }

  handleClickGithubBotanistHouse(e) {
    e.preventDefault()
    window.open('https://github.com/moitrayee3009/botanist-house', '_blank')
  }

  handleCheck(e) {
    alert(e.target)
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div>
          <div className='projects-grid '>
            {/* Project 1 */}
            <Card shadow={5} style={{ minWidth: '450', margin: '10px 40px' }}>
              <CardTitle style={styles}> LandingPage </CardTitle>
              <CardText style={textArea}>
                After started to study Frontend Development in KYH
                yrkeshögskola, this was my first project with JavaScript and
                Google map's API.
              </CardText>
              <CardActions border style={{ display: 'flex' }}>
                <Button
                  style={button}
                  onClick={this.handleClickGithubLandingpage}
                  colored
                >
                  GitHub
                </Button>
                <Button
                  style={button}
                  onClick={this.clickToLandingpage}
                  colored
                >
                  Demo
                </Button>

                <span style={ShareStyle}>
                  <div className='Demo__some-network'>
                    <FacebookShareButton
                      url={shareUrlFacebook}
                      quote={titleFacebook}
                      className='Demo__some-network__share-button'
                    >
                      <FacebookIcon size={32} round />
                    </FacebookShareButton>
                  </div>

                  <div className='Demo__some-network'>
                    <LinkedinShareButton
                      url={shareUrlLinkedIn}
                      title={titleLinkedin}
                      windowWidth={750}
                      windowHeight={600}
                      className='Demo__some-network__share-button'
                    >
                      <LinkedinIcon size={32} round />
                    </LinkedinShareButton>
                  </div>
                </span>
              </CardActions>
            </Card>

            {/* Project 2 */}
            <Card shadow={5} style={{ minWidth: '450', margin: '10px 40px' }}>
              <CardTitle style={styles2}> Quire </CardTitle>
              <CardText style={textArea}>
                As first team-project, we've created a browser-based notebook
                Quire, Where you can save your notes with tags and favorite
                marking.
              </CardText>
              <CardActions border style={{ display: 'flex' }}>
                <Button
                  style={button}
                  onClick={this.handleClickGithuQuire}
                  colored
                >
                  GitHub
                </Button>
                <Button style={button} onClick={this.clickToQuire} colored>
                  Demo
                </Button>
                <span style={ShareStyle}>
                  <div className='Demo__some-network'>
                    <FacebookShareButton
                      url={shareUrlFacebook}
                      quote={titleFacebook}
                      className='Demo__some-network__share-button'
                    >
                      <FacebookIcon size={32} round />
                    </FacebookShareButton>
                  </div>

                  <div className='Demo__some-network'>
                    <LinkedinShareButton
                      url={shareUrlLinkedIn}
                      title={titleLinkedin}
                      windowWidth={750}
                      windowHeight={600}
                      className='Demo__some-network__share-button'
                    >
                      <LinkedinIcon size={32} round />
                    </LinkedinShareButton>
                  </div>
                </span>
              </CardActions>
            </Card>

            {/* Project 3 */}
            <Card shadow={5} style={{ minWidth: '450', margin: '10px 40px' }}>
              <CardTitle style={styles3}> music-funProject </CardTitle>
              <CardText style={textArea}>
                This is a key-board based fun music project. I did this when I
                started to learn JavaScript with udemy.
              </CardText>
              <CardActions border style={{ display: 'flex' }}>
                <Button
                  style={button}
                  onClick={this.handleClickGithuCircle}
                  colored
                >
                  GitHub
                </Button>
                <Button style={button} onClick={this.clickToCircle} colored>
                  Demo
                </Button>
                <span style={ShareStyle}>
                  <div className='Demo__some-network'>
                    <FacebookShareButton
                      url={shareUrlFacebook}
                      quote={titleFacebook}
                      className='Demo__some-network__share-button'
                    >
                      <FacebookIcon size={32} round />
                    </FacebookShareButton>
                  </div>

                  <div className='Demo__some-network'>
                    <LinkedinShareButton
                      url={shareUrlLinkedIn}
                      title={titleLinkedin}
                      windowWidth={750}
                      windowHeight={600}
                      className='Demo__some-network__share-button'
                    >
                      <LinkedinIcon size={32} round />
                    </LinkedinShareButton>
                  </div>
                </span>
              </CardActions>
            </Card>
          </div>
        </div>
      )
    } else if (this.state.activeTab === 1) {
      return (
        <div className='projects-grid'>
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: '450', margin: '10px 40px' }}>
            <CardTitle style={styles4}> </CardTitle>
            <CardText style={textArea}>
              This is a project which I did when I started to learn BootStrap
              with udemy.
            </CardText>
            <CardActions border style={{ display: 'flex' }}>
              <Button
                style={button}
                onClick={this.handleClickGithubPerfectMatch}
                colored
              >
                GitHub
              </Button>
              <Button style={button} onClick={this.clickToPerfectMatch} colored>
                Demo
              </Button>
              <span style={ShareStyle}>
                <div className='Demo__some-network'>
                  <FacebookShareButton
                    url={shareUrlFacebook}
                    quote={titleFacebook}
                    className='Demo__some-network__share-button'
                  >
                    <FacebookIcon size={32} round />
                  </FacebookShareButton>
                </div>

                <div className='Demo__some-network'>
                  <LinkedinShareButton
                    url={shareUrlLinkedIn}
                    title={titleLinkedin}
                    windowWidth={750}
                    windowHeight={600}
                    className='Demo__some-network__share-button'
                  >
                    <LinkedinIcon size={32} round />
                  </LinkedinShareButton>
                </div>
              </span>
            </CardActions>
          </Card>
        </div>
      )
    } else if (this.state.activeTab === 2) {
      return (
        <div className='projects-grid'>
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: '450', margin: '10px 40px' }}>
            <CardTitle style={styles5}> SwedishSummer </CardTitle>
            <CardText style={textArea}>
              I did this project as my 3rd individual project during the course
              WordPress.
            </CardText>
            <CardActions border style={{ display: 'flex' }}>
              <Button
                style={button}
                onClick={this.handleClickGithubSwedishSummer}
                colored
              >
                GitHub
              </Button>
              <Button style={button}> </Button>
              <span style={ShareStyle}>
                <div className='Demo__some-network'>
                  <FacebookShareButton
                    url={shareUrlFacebook}
                    quote={titleFacebook}
                    className='Demo__some-network__share-button'
                  >
                    <FacebookIcon size={32} round />
                  </FacebookShareButton>
                </div>

                <div className='Demo__some-network'>
                  <LinkedinShareButton
                    url={shareUrlLinkedIn}
                    title={titleLinkedin}
                    windowWidth={750}
                    windowHeight={600}
                    className='Demo__some-network__share-button'
                  >
                    <LinkedinIcon size={32} round />
                  </LinkedinShareButton>
                </div>
              </span>
            </CardActions>
          </Card>

          {/* project 2 */}
          <Card shadow={5} style={{ minWidth: '450', margin: '10px 40px' }}>
            <CardTitle style={styles6}> Botanist House </CardTitle>
            <CardText style={textArea}>
              I have done this as my thesis project.
            </CardText>
            <CardActions border style={{ display: 'flex' }}>
              <Button
                style={button}
                onClick={this.handleClickGithubBotanistHouse}
                colored
              >
                GitHub
              </Button>
              <Button style={button}> </Button>
              <span style={ShareStyle}>
                <div className='Demo__some-network'>
                  <FacebookShareButton
                    url={shareUrlFacebook}
                    quote={titleFacebook}
                    className='Demo__some-network__share-button'
                  >
                    <FacebookIcon size={32} round />
                  </FacebookShareButton>
                </div>

                <div className='Demo__some-network'>
                  <LinkedinShareButton
                    url={shareUrlLinkedIn}
                    title={titleLinkedin}
                    windowWidth={750}
                    windowHeight={600}
                    className='Demo__some-network__share-button'
                  >
                    <LinkedinIcon size={32} round />
                  </LinkedinShareButton>
                </div>
              </span>
            </CardActions>
          </Card>
        </div>
      )
    } else if (this.state.activeTab === 3) {
      return (
        <div className='projects-grid'>
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: '450', margin: '10px 40px' }}>
            <CardTitle style={styles7}> </CardTitle>
            <CardText style={textArea}>
              This project-management website was done during my internship with
              Accomplice.se. Tech stack was Gatsby and Firebase.
            </CardText>
            <CardActions border style={{ display: 'flex' }}>
              <span style={ShareStyle}>
                <div className='Demo__some-network'>
                  <FacebookShareButton
                    url={shareUrlFacebook}
                    quote={titleFacebook}
                    className='Demo__some-network__share-button'
                  >
                    <FacebookIcon size={32} round />
                  </FacebookShareButton>
                </div>

                <div className='Demo__some-network'>
                  <LinkedinShareButton
                    url={shareUrlLinkedIn}
                    title={titleLinkedin}
                    windowWidth={750}
                    windowHeight={600}
                    className='Demo__some-network__share-button'
                  >
                    <LinkedinIcon size={32} round />
                  </LinkedinShareButton>
                </div>
              </span>
            </CardActions>
          </Card>
        </div>
      )
    } else if (this.state.activeTab === 4) {
      return (
        <div className='projects-grid'>
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: '450', margin: '10px 40px' }}>
            <CardTitle style={styles6}> Botanist House </CardTitle>
            <CardText style={textArea}>
              I have done this as my thesis project.
            </CardText>
            <CardActions border style={{ display: 'flex' }}>
              <Button
                style={button}
                onClick={this.handleClickGithubBotanistHouse}
                colored
              >
                GitHub
              </Button>
              <Button style={button}> </Button>
              <span style={ShareStyle}>
                <div className='Demo__some-network'>
                  <FacebookShareButton
                    url={shareUrlFacebook}
                    quote={titleFacebook}
                    className='Demo__some-network__share-button'
                  >
                    <FacebookIcon size={32} round />
                  </FacebookShareButton>
                </div>

                <div className='Demo__some-network'>
                  <LinkedinShareButton
                    url={shareUrlLinkedIn}
                    title={titleLinkedin}
                    windowWidth={750}
                    windowHeight={600}
                    className='Demo__some-network__share-button'
                  >
                    <LinkedinIcon size={32} round />
                  </LinkedinShareButton>
                </div>
              </span>
            </CardActions>
          </Card>
        </div>
      )
    }
  }
  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>JavaScript</Tab>
          <Tab>BootStrap</Tab>
          <Tab>WordPress</Tab>
          <Tab>React</Tab>
          <Tab>Vue</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className='content'>{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Projects
