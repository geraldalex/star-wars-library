import PropTypes, { element } from "prop-types";
import cn from 'classnames'
import {
  useTheme,
  THEME_LIGHT,
  THEME_DARK,
  THEME_NEITRAL,
} from "@context/ThemeProvider";
import imgLightSide from "./img/light-side.jpg";
import imgDarkSide from "./img/dark-side.jpg";
import imgNeitralSide from "./img/neitral-side.jpg";
import styles from "./ChooseSide.module.css";

const ChooseSideItem = ({ theme, text, img, classes }) => {
  const isTheme = useTheme();

  return (
    <div className={cn(styles.item, classes)} onClick={() => isTheme.change(theme)}>
      <div className={styles.item__header}>{text}</div>
      <img className={styles.item__img} src={img} alt={text} />
    </div>
  );
};

ChooseSideItem.propTypes = {
  text: PropTypes.string,
  theme: PropTypes.string,
  img: PropTypes.string,
  classes: PropTypes.string,
};

const ChooseSide = () => {
const elements = [
  {
    theme: THEME_LIGHT,
    text: "Светлая сторона",
    img:imgLightSide,
    classes: styles.item__light
  },
  {
    theme: THEME_DARK,
    text: "Темная сторона",
    img:imgDarkSide,
    classes: styles.item__dark
  },
  {
    theme: THEME_NEITRAL,
    text: "Нейтральная сторона",
    img:imgNeitralSide,
    classes: styles.item__neitral
  }
  

]


  return(
  <>
 <div className={styles.container}>
  {elements.map(({theme,text,img,classes }) => (
   
  <ChooseSideItem
  key={theme}
  text={text}
  theme={theme}
  img={img}
  classes={classes}
/>

  ))}
  </div>


  </>
  )
  };

ChooseSide.propTypes = {
  // text: PropTypes.string
};

export default ChooseSide;
