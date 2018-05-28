import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({ label, text, type, id, value, handleChange, rows }) => (
  <div className="form-group">
    <label htmlFor={label}>{text}</label>
    <textarea
      type={type}
      id={id}
      value={value}
      className="form-control"
      onChange={handleChange}
      rows={rows}
      required
    />
  </div>
);

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  rows: PropTypes.string
}

export default TextArea;