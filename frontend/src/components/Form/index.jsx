import React from 'react';
import LogoImage from '../LogoImage';
import './styles.css';

const Form = (props) => {
  const { submitBtn, inputControls, formTitle, extras } = props;
  return (
    <form className="form">
      <section className="form__section form__section--header">
        <LogoImage />
        <h1 className="section--header__title">{formTitle}</h1>
      </section>
      <section className="form__section form__section--column">
        {inputControls}
      </section>
      <section className="form__section">{submitBtn}</section>
      <section className="form__section">{extras}</section>
    </form>
  );
};

export default Form;
