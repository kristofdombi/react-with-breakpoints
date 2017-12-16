import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => (
  <div className="card">
    { props.title && <div className="card-header">
      { props.title }
    </div> }
    <div className="card-body">
      { props.children }
    </div>
  </div>
);

Card.displayName = 'Card';

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

export default Card;
