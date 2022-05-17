import { NavLink } from "react-router-dom";

const NavigationLink = ({link, title}) => {
  return(
    <NavLink title={title} to={link} className={({isActive}) => 'navigation__link ' + (isActive ? ' navigation__link_active' : '')}>
      {title}
    </NavLink>
  )
}

export default NavigationLink;