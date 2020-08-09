import React, { Component } from 'react';
import { Container, Divider } from '@material-ui/core';
import "./Hours.css";


class Hours extends Component {
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
        <Container className="HoursContainer">
          <h2>Business Hours</h2>
          <Divider />
          <h4>Monday - Friday</h4>
          <h5>11:00 A.M - 9:00 P.M</h5>
          <Divider />
          <h4>Saturday - Sunday</h4>
          <h5>8:00 A.M - 10:00 P.M</h5>
          <h2 className="StoreLocation">Store Location</h2>
          <div className="GoogleMaps">Fake Google Maps Template. Google Maps API requires API key.</div>

        </Container>
      </>
    );
  }
}

export default Hours;
