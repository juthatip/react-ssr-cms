import React, { Component } from 'react';
// import Navbar from './components/NavBar/NavBar';

class MainLayout extends Component {
  render() {
    return (
      <>
        {/* <Navbar /> */}
        {this.props.children}
      </>
    );
  }
}

export default MainLayout;
