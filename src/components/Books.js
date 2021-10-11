import React from 'react';
import PropTypes from 'prop-types';

const Books = ({ id, name, author }) => (
  <li key={id}>
    <p>{name}</p>
    <p>{author}</p>
    <button type="button">Remove</button>
  </li>
);

Books.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Books;
