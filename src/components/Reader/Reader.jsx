import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Reader.module.css';
import Controls from '../Controls/Controls';
import Counter from '../Counter/Counter';
import Publication from '../Publication/Publication';

class Reader extends Component {
  handleClick = ({ target }) => {
    const { dataset } = target;
    const { item } = this.props;

    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `?item=${dataset.name === 'next' ? item + 1 : item - 1}`,
    });
  };

  render() {
    const { items, item } = this.props;
    const { reader } = styles;
    const articleIndex = item - 1;
    const targetArticle = items[articleIndex];

    return (
      <div className={reader}>
        <Controls
          disabledPrev={!articleIndex}
          disabledNext={articleIndex === items.length - 1}
          handleClick={this.handleClick}
        />
        <Counter article={item} allArticles={items.length} />
        <Publication pageNumber={item} article={targetArticle} />
      </div>
    );
  }
}

Reader.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Reader;
