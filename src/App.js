import React, { Component } from 'react';
import classes from './App.scss';
import Header from './components/Header/Header';
import Home from './containers/Home/Home';
import SideMenu from './components/SideMenu/SideMenu';

class App extends Component {
  state = {
    showMobileNav: false
  }
  
  sideMenuClosedHandler = () => {
    this.setState({showMobileNav: false});
  }

  mobileNavToggleHandler = prevState => {
    console.log('mobileNavToggle');
    this.setState({ showMobileNav: !prevState.showMobileNav });
  }
  render() {
    return (
      <div className={classes.App}>
        <Header mobileNavToggle={this.mobileNavToggleHandler}/>
        <Home />
        <SideMenu open={this.state.showMobileNav} closed={this.sideMenuClosedHandler}/>
      </div>
    );
  }
}

export default App;
