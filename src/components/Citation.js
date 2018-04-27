import React, { Component } from 'react'
import plume from '../img/plume.png'

class Citation extends Component{

  render(){
    return(

      <div>
        <h1 className='generateur-title'>Générateur de citations</h1> <img src={plume} className='plume'></img>
        <p className='pCitation'>
          {this.props.details.citation}
          <span className='spanCitation'>- {this.props.details.auteur} - <button onClick={e => window.open(`https://www.wikipedia.org/wiki/${this.props.details.auteur}`)} className="btn1">W</button></span>
        </p>
      </div>

    )
  }
}

export default Citation


//<img src={this.props.details.picture} alt='' className='picture'/>
