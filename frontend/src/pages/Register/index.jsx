import React from 'react';
import Page from '../../components/Page';
import Header from '../../components/Header';
import Logo from '../../components/Logo';
import Main from '../../components/Main';
import Form from '../../components/Form';
import TextFormInput from '../../components/TextFormInput';
import SubmitBtn from '../../components/FormSubmitBtn';
import AuthFormRedirect from '../../components/AuthFormRedirect';

const Register = () => {
  return (
    <Page>
      <Header>
        <Logo />
      </Header>
      <Main>
          <Form
            formTitle="Create your account"
            inputControls={[
              <TextFormInput
                key="1"
                type="email"
                name="Email"
                placeholder="Enter your email..."
                errorMsg="Email must be provided"
                idForLabel="register-email"
              />,
              <TextFormInput
                key="2"
                type="password"
                name="Password"
                placeholder="Enter your password..."
                errorMsg="Password must be provided"
                idForLabel="register-password"
              />,
              <TextFormInput
                key="3"
                type="password"
                name="Confirm Password"
                placeholder="Retype Password here..."
                errorMsg="Passwords did not match!"
                idForLabel="confirm-password"
              />,
            ]}
            submitBtn={<SubmitBtn btnText={'Continue'} />}
            extras={
              <AuthFormRedirect
                path="/login"
                text={'Already have an account?'}
                linkText={'Just Login'}
              />
            }
          />
      </Main>
    </Page>
  );
};

export default Register;
