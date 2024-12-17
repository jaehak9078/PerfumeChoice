import React from 'react';
import PropTypes from 'prop-types';

const NextButton = ({ color, onPress, children }) => {
  return (
    <button
      className="next-button"
      style={{ backgroundColor: color }}
      onClick={onPress}
    >
      {children}
    </button>
  );
};

NextButton.propTypes = {
  color: PropTypes.string,
  onPress: PropTypes.func,
  children: PropTypes.node,
};

NextButton.defaultProps = {
  color: '#007BFF', // 기본 색상
  onPress: () => {},
};

export default NextButton;
