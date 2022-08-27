import React from 'react';
import './styles.css';

const TextFormInput = (props) => {
  const { type, name, placeholder, errorMsg, idForLabel } = props;
  return (
    <div className="text-input">
      <div className="text-input__input-field-wrapper">
        <label htmlFor={idForLabel} className="input-field-wrapper__input-label">{name}</label>
        <input type={type} className="input-field-wrapper__input-field" placeholder={placeholder}/>
      </div>
      <div className='text-input__error-msg-wrapper'>
        <p className='error-msg-wrapper__error-msg'> {errorMsg} </p>
      </div>
    </div>
  );
};

export default TextFormInput;
