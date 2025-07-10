import React, { Component } from 'react'
import P from './styledComponents/P.js'

class AboutText extends Component {
  render() {
    return (
      <div>
        <h3
          style={{
            fontsize: '1em',
            fontweight: '500',
            color: 'teal',
            marginbottom: '0'
          }}
        >
          I'm a Stockholm based front-end developer
        </h3>
        <hr style={{ marginRight: '10px' }} />
        <p style={{ paddingBottom: '5px', fontWeight: '600' }}>
          I'm passionate about UI effects and crafting dynamic, engaging user
          experiences.
        </p>
        <P>
          {' '}
          My goal is to grow as a front-end developer by working with a team
          that offers diverse and challenging projects, helping me continually
          expand my skills and expertise in modern web development.
        </P>
        <div className='social-links'>
          <a
            href='mailto:moitrayee3009@gmail.com'
            className='button button-icon'
            title='mail: moitrayee3009@gmail.com'
          >
            <i className='fa fa-envelope' />
          </a>
          <a
            aria-label='Navigate to Linkedin '
            href='https://www.linkedin.com/in/moitrayee-choudhury-54a70518/'
            rel='noopener noreferrer'
            target='_blank'
            className='button button-icon'
            title='linkedin'
          >
            <i className='fab fa-linkedin ' />
          </a>
          <a
            aria-label='Navigate to Github'
            href='https://github.com/moitrayee3009/'
            rel='noopener noreferrer'
            target='_blank'
            className='button button-icon'
            title='github'
          >
            <i className='fab fa-github-square' />
          </a>
        </div>
      </div>
    )
  }
}

export default AboutText
