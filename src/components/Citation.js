import React, { Component } from 'react'

class Citation extends Component{

  render(){
    return(

      <div>
        <img src={this.props.details.picture} alt='' className='picture'/>
        <p className='pCitation'>
          {this.props.details.citation}
          <span className='spanCitation'>- {this.props.details.auteur} - <button onClick={e => window.open(`https://www.wikipedia.org/wiki/${this.props.details.auteur}`)} className="btn1">W</button></span>
        </p>
      </div>

    )
  }
}

export default Citation
