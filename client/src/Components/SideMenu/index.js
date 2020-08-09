import React, {Component} from 'react';
import { NavLink as RouterLink } from "react-router-dom";
import './SideMenu.css';
import { SwipeableDrawer, List, ListItem, Divider, Container, ListItemIcon, Grid, Link } from '@material-ui/core';
import { MdHome, MdPeople, MdLocationOn, MdPhotoCamera, MdRestaurantMenu } from "react-icons/md";
import { TiSocialTwitterCircular, TiSocialInstagramCircular, TiSocialFacebookCircular } from "react-icons/ti";


class SideMenu extends Component {
  constructor(){
    super();
    //Add state variables and bindings here
    this.state = {
        
    }
    
  }

  render () {
    const AdapterLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);
    
    return (
        <SwipeableDrawer
            open={this.props.drawerOpen}
            onClose={this.props.toggleDrawer()}
            onOpen={this.props.toggleDrawer()}
        >
            <div
                className="SideMenu"
                role="presentation"
                onClick={this.props.toggleDrawer()}
                onKeyDown={this.props.toggleDrawer()}
            >
                <List className="List">
                    <Link exact component={AdapterLink} className="Link" to="/">
                        <ListItem className="ListItem" button key="Home">
                            <ListItemIcon><MdHome/></ListItemIcon>
                            Home
                        </ListItem>
                    </Link>
                    <Link component={AdapterLink} className="Link" to="/menu">
                        <ListItem className="ListItem" button key="Menu">
                            <ListItemIcon><MdRestaurantMenu/></ListItemIcon>
                            Menu
                        </ListItem>
                    </Link>
                    <Link component={AdapterLink} className="Link" to="/about">
                        <ListItem className="ListItem" button key="AboutUs">
                            <ListItemIcon><MdPeople/></ListItemIcon>
                            About Us
                        </ListItem>
                    </Link>
                    <Link exact component={AdapterLink} className="Link" to="/hours">
                        <ListItem className="ListItem" button key="Location">
                            <ListItemIcon><MdLocationOn/></ListItemIcon>
                            Hours/Location
                        </ListItem>
                    </Link>
                    <Link component={AdapterLink} className="Link" to="/gallery">
                        <ListItem className="ListItem" button key="Gallery">
                            <ListItemIcon><MdPhotoCamera/></ListItemIcon>
                            Photo Gallery
                        </ListItem>
                    </Link>
                </List>

                <Divider className="Divider"/>
                <Container className="Footer">
                    
                    <Grid container className="GridSocial">
                        <Grid item xs={4}>
                            <a href="https://www.facebook.com" target="_BLANK" rel="noopener noreferrer">
                                <span>
                                    <TiSocialFacebookCircular className="Facebook"/>
                                </span>    
                            </a>
                        </Grid>
                        <Grid item xs={4}>
                            <a href="https://www.twitter.com" target="_BLANK" rel="noopener noreferrer">
                                <span>
                                    <TiSocialTwitterCircular className="Twitter"/>
                                </span>    
                            </a>
                        </Grid>
                        <Grid item xs={4}>
                            <a href="https://www.instagram.com" target="_BLANK" rel="noopener noreferrer">
                                <span>
                                    <TiSocialInstagramCircular className="Instagram"/>
                                </span>
                            </a>
                        </Grid>
                    </Grid>

                    <Grid container className="GridSiteMap">
                        <Grid item xs={6}>
                            <Link component={AdapterLink} className="Link" to="/terms-of-service">Terms of Service</Link>
                        </Grid>
                        <Grid item xs={6}>
                            <Link component={AdapterLink} className="Link" to="/privacy-policy">Privacy<br/> Policy</Link>
                        </Grid>
                    </Grid>
                    
                </Container>
            </div>
        </SwipeableDrawer>
    );
  }
}

export default SideMenu;