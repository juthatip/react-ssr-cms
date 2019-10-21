import React, { Component } from 'react';
import getRoutes from '@app/helper/routeHandler';

class Home extends Component {
  render() {
    return <div>home {process.env.TEST}</div>;
  }
}

Home.getInitialProps = ({ store, ...props }) => {
  const query = getRoutes(props);

  return { query };
};

export default Home;
