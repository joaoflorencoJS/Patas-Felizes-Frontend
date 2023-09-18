import React from 'react';
import PropTypes from 'prop-types';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';

export default function HandlePasswordEye({
  idActiveEye,
  idSlashedEye,
  typeButton,
  setTypeButton,
}) {
  const activeEye = document.getElementById(`${idActiveEye}`);
  const slashedEye = document.getElementById(`${idSlashedEye}`);

  console.log(activeEye, slashedEye);

  const handleEye = () => {
    if (typeButton === 'password') {
      setTypeButton('text');
      activeEye.setAttribute('display', 'none');
      slashedEye.setAttribute('display', 'initial');
    } else {
      setTypeButton('password');
      activeEye.setAttribute('display', 'initial');
      slashedEye.setAttribute('display', 'none');
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
