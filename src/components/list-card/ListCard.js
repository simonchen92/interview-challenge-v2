import React, { Component } from 'react';
import { Card as Base } from '@material-ui/core';
import PropTypes from 'prop-types';

class ListCard extends Component {

  render() {

    const { header, items } = this.props

    return (
      <Base className="card">
      <h1 className="card-header">{header}</h1>
      <div className="card-item-container">
      <ul>{items.map(item => <li>{item}</li>)}</ul>
      </div>
      </Base>
    );
  }
}

ListCard.propTypes = {
  /**
   * PropTypes go here.
   */
};

ListCard.defaultProps = {
};

export default ListCard;
