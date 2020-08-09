import React, {Component} from 'react';
import './Navbar.css';
import { AppBar, Toolbar, IconButton, Link } from '@material-ui/core';
import { NavLink as RouterLink } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import BrandLogo from '../../Images/Logo'


class Navbar extends Component {
  constructor(){
    super();
    //Add state variables and bindings here
    this.state = {
        anchorEl: null
    }
    this.handleMenu = this.handleMenu.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleMenu(e){
    this.setState({
      anchorEl: e.currentTarget
    });
  }

  handleClose(e){
    this.setState({
      anchorEl: null
    });
  }

  //Do API calls here
  componentDidMount(){
    
  }

  render () {
    const AdapterLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);
    return (
      <AppBar position="static" color="default">
          <Toolbar className="Toolbar">
            <Link exact component={AdapterLink} className="Link" to="/">
              <BrandLogo className="Logo"/>
            </Link>
            <span className="FlexSpacer"></span>
            <IconButton onClick={this.props.toggleDrawer()} edge="start" className="IconButtonMenu" color="inherit" aria-label="Menu">
              <MdMenu />
            </IconButton>
          </Toolbar>
      </AppBar>
    );
  }
}

export default Navbar;