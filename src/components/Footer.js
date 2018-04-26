import React from 'react'
import footer from './footer.css'
import Iosocial from 'react-icons/lib/io/social-github'
import IosocialLink from 'react-icons/lib/io/social-linkedin'


class Footer extends React.Component {
  render(){
    return(
      <footer className="footer container">


          <div class="col-2">
            <div class="github">
              <a href="https://github.com/GGaelle"><Iosocial /></a>
            </div>
          </div>

          <div className='col-4'>
            <h1 className="footer-title">Copyright Gaëlle Gibier <sup>©</sup> - Formation Arinfo 04/2018</h1>
          </div>

          <div class="col-2">
            <div class="linkedin">
              <a href="https://www.linkedin.com/in/ga%C3%ABlle-gibier-a1b1bb159/"><IosocialLink /></a>
            </div>
          </div>

      </footer>
    )
  }
}

export default Footer



//import TiIconPack from 'react-icons/lib/ti'

//react-icons/lib/ti/social-linkedin
//react-icons/lib/ti/social-github


//import IoIconPack from 'react-icons/lib/io'

//react-icons/lib/io/social-github
//react-icons/lib/io/social-linkedin


//
