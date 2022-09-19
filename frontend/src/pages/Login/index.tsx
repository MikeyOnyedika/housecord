import LogoImage from '../../components/LogoImage/';
import './styles.css';
import Header from '../../components/Header/';
import {Link} from 'react-router-dom'

const Login = () => {
  
  function handleSubmit(e: any){
    e.preventDefault();


  }


  return (
    <div className="flex flex--column container">
      <Header />
      <main className="flex flex--center-center">
        <form className="form" onSubmit={handleSubmit}>
          <section className="form-group">
            <div className="form-group__logo">
              <LogoImage
                width={'calc(var(--gap) * 4)'}
                height={'calc(var(--gap) * 4)'}
                color={'var(--primary-clr)'}
                bgColor={'var(--white-clr)'}
                borderRadius={'50%'}
                padding={'var(--padding-inline)'}
                borderWidth={'1px'}
                borderColor={"var(--primary-clr)"}
              />
              <h1>Glad to see you too!</h1>
            </div>
          </section>

          <section className="form-group">
            <label htmlFor="email" className="form-group__label">
              Email
            </label>
            <input type="text" id="email" className="form-group__text-input" />
            <p className="form-group__error-msg">Email is required!</p>
          </section>
          <section className="form-group">
            <label htmlFor="password" className="form-group__label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-group__text-input"
            />
            <p className="form-group__error-msg">Password is required!</p>
          </section>

          <section className="form-group">
            <button type="submit" className="form-group__submit">
              Login
            </button>
          </section>

          <section className="form-group">
            <span>
              Don't have an account? <Link to="/register">Register</Link>
            </span>
          </section>
        </form>
      </main>
    </div>
  );
};

export default Login;
