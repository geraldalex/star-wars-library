import {NavLink} from "react-router-dom";
import styles from './Header.module.css';

const  Header = () =>  {
  return(
    <div className={styles.container}>
        <ul className={styles.list__container}>
            <li><NavLink to="/">Главная</NavLink></li>
            <li><NavLink to="/people">Люди</NavLink></li>
        </ul>
    </div>
  )
}




export default Header;