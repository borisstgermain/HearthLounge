import React from 'react';
import PropTypes from 'prop-types';

const ExtensionBlock = ({page, title, element, blockWidth}) =>{
  return (
      <li className={`container__blocks--block ${page} block-width-${blockWidth || 1}`}>
        <h4 className="container__blocks--block-header">{title}</h4>
        {element}
      </li>
  )
};

export default ExtensionBlock;

ExtensionBlock.propTypes = {
  page: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  element: PropTypes.element.isRequired
};