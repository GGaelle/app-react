import React, { Component } from 'react';
import BaseCitations from './BaseCitations'
import Citation from './Citation'
import generateurCitation from './generateurCitation.css'
import '../App.css';



class GenerateurCitation extends Component {

  state = {};

  componentWillMount(){
    this.genererCitation()
  }

  genererCitation = event => {
    const keyArray = Object.keys(BaseCitations)

    const randomKey = keyArray[Math.floor(Math.random() * keyArray.length)]

    if (this.state.citation === BaseCitations[randomKey].citation) {
      this.genererCitation();
      return
    }

    this.setState(BaseCitations[randomKey])

  };


  render() {
    return(
      <div className='container'>
        <div className='generateur col-4'>
          <Citation details={this.state}/>
          <button className='btnCit' onClick={e => this.genererCitation(e)}>-- Une autre citation ! --</button>
        </div>
      </div>
    )
  };

};

export default GenerateurCitation
