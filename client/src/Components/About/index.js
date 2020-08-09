import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import "./About.css";


class About extends Component {
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
        <Container className="AboutContainer">
          <h3>More Than Just A Restaurant</h3>
          <p>Gaglianos is about family. We honor this value by bringing people together with great food, great atmosphere, and great prices.</p>
          
          <p>We carry on the traditions and values that were brought over to America in the 1930's by our ancestors.</p>
          <h3>That's our guarantee.</h3>
        </Container>
      </>
    );
  }
}

export default About;
