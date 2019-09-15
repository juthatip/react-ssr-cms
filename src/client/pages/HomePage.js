import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { fetchArticles } from '../actions';

const Homepage = props => {
  const [currentArticle, setCurrentArticle] = useState({});

  const readArticle = article => {
    setCurrentArticle(article);
  };

  const renderArticles = () => {
    return props.articles.map(article => (
      <div className="col s12 m6 l6 xl4" key={article.title}>
        <div className="card large">
          <div className="card-image">
            <LazyLoadImage alt={article.title} src={article.urlToImage} />
          </div>
          <div className="card-content">
            <span className="card-title">{article.title}</span>
          </div>
          <div className="card-action">
            {/* <a href="javascript:void(0)" onClick={() => readArticle(article)}>
              Read More
            </a> */}
          </div>
        </div>
      </div>
    ));
  };

  const { fetchArticles: loadArticles } = props;
  console.log('props', props);
  useEffect(() => {
    window.scrollTo(0, 0);
    loadArticles();
  }, [loadArticles]);

  return (
    <div>
      <div className="row">
        <div className="section">
          <h3>Popular Articles</h3>
        </div>
        <div className="divider" />
        <div className="section">
          <div className="row">{renderArticles()}</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    articles: state.articles
  };
};

const loadData = store => {
  // For the connect tag we need Provider component but on the server at this moment app is not rendered yet
  // So we need to use store itself to load data
  console.log(' -- loadData --', loadData);
  return store.dispatch(fetchArticles()); // Manually dispatch a network request
};

// export default connect(
//   mapStateToProps,
//   { fetchArticles }
// )(Homepage, loadData);

export default {
  component: connect(
    mapStateToProps,
    { fetchArticles }
  )(HomePage),
  loadData
};
