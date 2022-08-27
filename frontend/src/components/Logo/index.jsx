import './styles.css';
import LogoImage from '../LogoImage';

const Logo = () => {
  return (
    <div className="logo-wrapper">
      <div className="logo">
        <LogoImage />
        <p className="logo-text">ousecord</p>
      </div>
    </div>
  );
};

export default Logo;
