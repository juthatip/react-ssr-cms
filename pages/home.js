import React, { Component, Fragment } from 'react';
import getRoutes from '@app/helper/routeHandler';
import { connect } from 'react-redux';
import * as actions from '@app/store/actions';

class Home extends Component {
  componentDidMount() {
    console.log('process.env componentDidMount--', process.env.OH_URL);
  }
  render() {
    const { homeData, oh } = this.props;
    // console.log('process.env--', process.env.OH_URL);
    return (
      <Fragment>
        <div>
          {/* home {process.env.TEST} */}
          OH_URL:{oh}
          <div className="test">
            {homeData &&
              homeData.map(data => {
                return (
                  <p className={data.id} key={data.id}>
                    {data.id}: {data.title}
                  </p>
                );
              })}
            {/* {homeData.id} */}
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapstateToProps = state => {
  // console.log('map state--', state);
  return {
    homeData: state.home.result
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     initialHome: () => dispatch(actions.fetchData())
//   };
// };

Home.getInitialProps = ({ store, ...props }) => {
  const query = getRoutes(props);
  console.log('---process.env---', process.env.OH_URL);
  const oh = process.env.OH_URL;
  store.dispatch(actions.fetchData());
  // console.log('prosp', props);
  return { query, oh };
};

export default connect(
  mapstateToProps,
  null
)(Home);
