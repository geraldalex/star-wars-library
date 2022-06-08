import PropTypes from 'prop-types';
import styles from './UiLoading.module.css';
import cn from 'classnames'
import loaderWhite from './img/loader-white.svg'
import loaderBlack from './img/loader-black.svg'
import loaderBlue from './img/loader-blue.svg'
import { useEffect, useState } from 'react';

const  UiLoading = ({theme='white', isShadow=true, classes}) =>  {
  const [loaderIcon, setloaderIcon] = useState(null)

  useEffect(() => {
switch (theme) {
  case 'black': setloaderIcon(loaderBlack);break;
  case 'white': setloaderIcon(loaderWhite);break;
  case 'blue': setloaderIcon(loaderBlue);break;

  default:setloaderIcon(loaderWhite);
}
  }, [])
  return(
   <img className={cn(styles.loader,isShadow && styles.shadow)} src={loaderIcon} alt='Loader'/>
  )
}

UiLoading.propTypes = {
  theme: PropTypes.string,
  isShadow:PropTypes.bool,
  classes:PropTypes.string,

}


export default UiLoading;