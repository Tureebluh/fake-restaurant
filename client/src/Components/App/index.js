import React, {Component} from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from '../Navbar';
import SideMenu from '../SideMenu';
import Home from '../Home';
import Menu from '../Menu';
import About from '../About';
import Hours from '../Hours';
import Gallery from '../Gallery';
import "./App.css";


class App extends Component {
  constructor(){
    super();
    //Add state variables and bindings here
    //Add state variables and bindings here
    this.state = {
      drawerOpen: false
    }
    this.sideMenuRef = React.createRef();
    this.toggleDrawer = this.toggleDrawer.bind(this);

  }

  //Do API calls here
  componentDidMount(){
    
  }

  toggleDrawer(){
    this.setState({
      drawerOpen: !this.state.drawerOpen
    });
  }

  //Add sub components of App here
  render () {
    return (
      <Router>
        <>
          <Navbar toggleDrawer={()=>this.toggleDrawer}/>
          <SideMenu drawerOpen={this.state.drawerOpen} toggleDrawer={()=>this.toggleDrawer}/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/menu" component={Menu}/>
            <Route path="/about" component={About}/>
            <Route path="/hours" component={Hours}/>
            <Route path="/gallery" component={Gallery}/>
          </Switch>
        </>
      </Router>
    );
  }
}

export default App;

