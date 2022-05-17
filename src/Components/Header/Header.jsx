import { useEffect, useState } from "react";
import NavigationLink from "../NavigationLink/NavigationLink";
import Logo from "../Logo/Logo";
import presentation from '../../Assets/Documents/pict_pres.pdf';
import HeaderButton from "./HeaderButton";

const Header = () => {

  const [activeHeader, setActiveHeader] = useState(false);

  function setHeader() {
    setActiveHeader(!activeHeader);
  }

  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      if (event.code === 'Escape') {
        setActiveHeader(false);
      }
    });
    return () => document.removeEventListener('keydown', setHeader);
  }, []);

  return (
    <>
      <HeaderButton isActive={activeHeader} setIsActive={setHeader}/>
      <div className={`header__button-overlay ${activeHeader ? "header__button-overlay_active" : ""}`} />
      <header className={`header ${activeHeader ? "header_opened" : ""}`}>
        <nav className="navigation">
          <Logo />
          <ul className="navigation__list">
            <li className="navigation__item">
              <NavigationLink title="О нас" link="/about">
                О нас
              </NavigationLink>
            </li>
            <a className="navigation__icon navigation__icon-data" data="скачать презентацию" href={presentation} download="">
              <svg x="0px" y="0px" viewBox="0 0 20 20" title="Скачать презентацию">
                  <path d="M10.42 8.818c0-.472-.35-.74-.823-.74H8.166v1.471h1.431c.473 0 .823-.268.823-.731m-4.024 4.579V6.535h3.437c1.543 0 2.386 1.04 2.386 2.284 0 1.235-.843 2.274-2.386 2.274H8.166v2.305h-1.77zM11.67 12.498c0-.525.441-.968.965-.968a.98.98 0 01.968.968.979.979 0 01-.968.967.978.978 0 01-.965-.967"></path>
                  <path d="M14.133 0H5a5 5 0 00-5 5v10a5 5 0 005 5h10a5 5 0 005-5V5.868L14.133 0zm.1 1.656l3.778 3.779h-3.778V1.656zM15 18.9H5c-2.15 0-3.9-1.75-3.9-3.9V5c0-2.15 1.75-3.9 3.9-3.9h8.133v4.435a1 1 0 001 1H18.9V15c0 2.15-1.75 3.9-3.9 3.9z"></path>
              </svg>
            </a>
            <li className="navigation__item">
              <NavigationLink title="Все проекты" link="/">
                Все проекты
              </NavigationLink>
            </li>
            <li className="navigation__item">
              <NavigationLink title="Фирменный стиль" link="/style">
                Фирменный стиль
              </NavigationLink>
            </li>
            <li className="navigation__item">
              <NavigationLink title="Презентации" link="/presentation">
                Презентации
              </NavigationLink>
            </li>
            <li className="navigation__item">
              <NavigationLink title="Полиграфия" link="/polygraphy">
                Полиграфия
              </NavigationLink>
            </li>
            <li className="navigation__item"> 
              <NavigationLink title="Веб-дизайн" link="/web">
                Веб-дизайн
              </NavigationLink>
            </li>
            <li className="navigation__item">
              <NavigationLink title="Графика" link="/graphics">
                Графика
              </NavigationLink>
            </li>
          </ul>
        </nav>
        
        <ul className="navigation__list navigation__list_company">
          <li className="navigation__item navigation__item-info">
            <p>ИП Вохмянина М.А.</p>
            <p>ИНН 501006590538</p>
            <p>ОГРНИП&nbsp;316435000087993</p>
          </li>
          <li className="navigation__contact">
            <a href="mailto:ask@pict.website">
              ask@pict.website
            </a>
            <a href="tel:+79953175025">
              +7 995 317 50 25
            </a>
          </li>
          <li className="navigation__item">
            
          </li>
        </ul>
      </header>
    </>
  )
}

export default Header;