import React, { Component } from 'react'

class Citation extends Component{

  render(){
    return(

      <div>
        <img href={this.props.details.picture} alt='' className='picture'/>
        <p>
          {this.props.details.citation}
          <span>- {this.props.details.auteur} - <button onClick={e => window.open(`https://www.wikipedia.org/wiki/${this.props.details.auteur}`)} className="btn1">W</button></span>
        </p>
      </div>

    )
  }
}

export default Citation

//onClick={e => href:'https://www.wikipedia.org/${this.props.details.auteur}'
