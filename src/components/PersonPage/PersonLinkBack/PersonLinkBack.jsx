
import { useNavigate } from 'react-router';
import styles from './PersonLinkBack.module.css';
import iconBack from './img/back.png'
const  PersonLinkBack = () =>  {


const history = useNavigate()

const handleCoBack = e => {
    e.preventDefault()
    history(-1);
    
}

  return(
   
    <a href='#'
    onClick={handleCoBack}
    className={styles.link}
    >
        <img className={styles.link__img} src={iconBack} alt='Go back' />
        <span>Назад</span>
        </a>
    
  )
}



export default PersonLinkBack;