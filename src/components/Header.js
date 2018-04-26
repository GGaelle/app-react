import React, { Component } from 'react'
import logo from '../img/1280px-React-icon.svg.png';
import header from './header.css'


class Header extends Component {
  render() {
    return(
      <header className="header">
        <div className='col-2'>
          <img src={logo} className="header-logo" alt="logo" />
        </div>
        <div className='col-4'>
          <h1 className="header-title">Applications en React</h1>
        </div>
        <div className='col-2'>
          <img src={logo} className="header-logo2" alt="logo" />
        </div>
      </header>
    )
  }
}

export default Header
