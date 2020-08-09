import React, { Component } from 'react';
import { Container, Grid } from '@material-ui/core';
import "./Menu.css";


class Menu extends Component {
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
        <Container className="MenuContainer">
          
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <h1>Lunch</h1>
            </Grid>
            <Grid item xs={6}>
              Italian Herb Bread<br/>
              Homemade Ravioli<br/>
              Herb Crusted Zucchini<br/>
              Stuffed Mushrooms<br/>
            </Grid>
            <Grid item xs={6}>
              Chef Salad<br/>
              Pizza Margherita<br/>
              Signature Spaghetti<br/>
              Chicken Marsala<br/>
            </Grid>

            <Grid item xs={12}>
              <h1>Dinner</h1>
            </Grid>
            <Grid item xs={6}>
              Seafood Stew<br/>
              Slow-roasted Salmon<br/>
              Pan-Seared Scallops<br/>
            </Grid>
            <Grid item xs={6}>
              Poached Red Snapper<br/>
              Clams in Red Sauce<br/>
              Linguine with Clams<br/>
              
            </Grid>
          </Grid>
        </Container>
      </>
    );
  }
}

export default Menu;
