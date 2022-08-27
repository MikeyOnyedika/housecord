import React from 'react';
import './styles.css';

const FormSubmitBtn = (props) => {
  const { btnText } = props;
  return (
    <button type="submit" className="submit-btn">
      {btnText}
    </button>
  );
};

export default FormSubmitBtn;
