import React from 'react';
import Logo from '../../components/Logo';
import Form from '../../components/Form';
import Main from '../../components/Main';
import Header from '../../components/Header';
import Page from '../../components/Page';
import SubmitBtn from '../../components/FormSubmitBtn';
import TextFormInput from '../../components/TextFormInput';
import AuthFormRedirect from '../../components/AuthFormRedirect';

const Login = () => {
  return (
    <Page>
      <Header>
        <Logo />
      </Header>
      <Main>
        <Form
          formTitle="Glad to see you too!"
          inputControls={[
            <TextFormInput
              key="1"
              type="email"
              name="Email"
              placeholder="Enter your email..."
              errorMsg="Email must be provided"
              idForLabel="login-email"
            />,
            <TextFormInput
              key="2"
              type="password"
              name="Password"
              placeholder="Enter your password..."
              errorMsg="Password must be provided"
              idForLabel="login-password"
            />,
          ]}
          submitBtn={<SubmitBtn btnText={'Login'} />}
          extras={
            <AuthFormRedirect
              path="/register"
              text={"Don't have an account yet?"}
              linkText={'Register'}
            />
          }
        />
      </Main>
    </Page>
  );
};

export default Login;
