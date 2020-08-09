import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import "./Home.css";


class Home extends Component {
  constructor(){
    super();

    this.state = {
      
    }
    
  }

  componentDidMount(){
    
  }

  render () {
    return (
      <>
        <Container className="HomeContainer">
          <p>
            <q>Un Assaggio Di Passione...</q><br/>
            (A Taste Of Passion)
          </p>
        </Container>
      </>
    );
  }
}

export default Home;
