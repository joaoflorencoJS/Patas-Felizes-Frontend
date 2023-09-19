import React from 'react';
import PropTypes from 'prop-types';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';

export default function HandlePasswordEye({
  idActiveEye,
  idSlashedEye,
  typeButton,
  setTypeButton,
}) {
  const handleEye = () => {
    if (typeButton === 'password') {
      setTypeButton('text');
      document.getElementById(`${idActiveEye}`).setAttribute('display', 'none');
      document
        .getElementById(`${idSlashedEye}`)
        .setAttribute('display', 'initial');
    } else {
      setTypeButton('password');
      document
        .getElementById(`${idActiveEye}`)
        .setAttribute('display', 'initial');
      document
        .getElementById(`${idSlashedEye}`)
        .setAttribute('display', 'none');
    }
  };
  return (
    <button type="button" className="btn btn-link" onClick={handleEye}>
      <FaEye size={20} id={idActiveEye} />
      <FaEyeSlash size={20} id={idSlashedEye} display="none" />
    </button>
  );
}

HandlePasswordEye.propTypes = {
  idActiveEye: PropTypes.string.isRequired,
  idSlashedEye: PropTypes.string.isRequired,
  typeButton: PropTypes.string.isRequired,
  setTypeButton: PropTypes.func.isRequired,
};
