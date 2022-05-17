import logo from '../../Assets/logo.svg';
import { Link } from 'react-router-dom';

const Logo = () => {
  return(
    <Link className="logo" to="/">
      <img className='logo' src={logo} alt="Логотип Pict.design" /> 
    </Link>
  )
};

export default Logo;