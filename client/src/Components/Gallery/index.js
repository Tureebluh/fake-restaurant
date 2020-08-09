import React, { Component } from 'react';
import { Container, Grid } from '@material-ui/core';
import "./Gallery.css";


class Gallery extends Component {
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
        <Container className="GalleryContainer">
          <h3>Photo Gallery</h3>
          <Grid container spacing={2}>
            <Grid item xs={6}><img alt="Plate of food" src="plate.png"/></Grid>
            <Grid item xs={6}><img alt="Spaghetti fork" src="spaghetti.png"/></Grid>
            <Grid item xs={6}><img alt="Spaghetti fork" src="spaghetti.png"/></Grid>
            <Grid item xs={6}><img alt="Plate of food" src="plate.png"/></Grid>
            <Grid item xs={6}><img alt="Plate of food" src="plate.png"/></Grid>
            <Grid item xs={6}><img alt="Spaghetti fork" src="spaghetti.png"/></Grid>
            <Grid item xs={6}><img alt="Spaghetti fork" src="spaghetti.png"/></Grid>
            <Grid item xs={6}><img alt="Plate of food" src="plate.png"/></Grid>
          </Grid>
        </Container>
      </>
    );
  }
}

export default Gallery;
