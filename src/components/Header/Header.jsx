import {NavLink} from "react-router-dom";
import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEITRAL } from "@context/ThemeProvider";
import Favorite from "../Favorite";

import imgDroid from './img/droid.svg'
import imgLightsaber from './img/lightsaber.svg'
import imgSpaceStation from './img/space-station.svg'
import styles from './Header.module.css'
import { useEffect, useState } from "react";

const  Header = () =>  {
const [icon, setIcon] =  useState(imgLightsaber)
  const isTheme = useTheme()

  useEffect(() => {
switch (isTheme.theme){
  case THEME_LIGHT: setIcon(imgLightsaber); break;
  case THEME_DARK: setIcon(imgSpaceStation); break;
  case THEME_NEITRAL: setIcon(imgDroid); break;

  default:setIcon(imgLightsaber)
   

}
  }, [isTheme])
  return(
    <div className={styles.container}>
      <img
      className={styles.logo}
      src={icon}
      alt='icon'
      />
        <ul className={styles.list__container}>
            <li><NavLink to="/">Главная</NavLink></li>
            <li><NavLink to="/people/?page=1" >Люди</NavLink></li>
            <li><NavLink to="/not-found">Не найдено</NavLink></li>
           
        </ul>

        <Favorite/>
    </div>
  )
}




export default Header;