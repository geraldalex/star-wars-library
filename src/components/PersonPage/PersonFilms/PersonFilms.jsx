import PropTypes from 'prop-types';
import { makeConcurrentRequest,changeHttp } from '@utils/network';
import styles from './PersonFilms.module.css';
import { useEffect, useState } from 'react';


const  PersonFilms = ({personFilms}) =>  {
    const [filmsName, setFilmsName] = useState([])

    useEffect(() => {
(async() => {
const filmsHTTPS = personFilms.map(url => changeHttp(url))
const response = await makeConcurrentRequest(filmsHTTPS)

 setFilmsName(response);

})()
    }, [])
  return(
   <div className={styles.wrapper}>
       <ul className={styles.list__container}>
 
           {filmsName
           .sort((a,b) => a.episode_id - b.episode_id)
           .map(({title, episode_id}) => 
               <li className={styles.list__item} key={episode_id}>
                   <span className={styles.item__episode}>Эпизод {episode_id}</span>
                   <span className={styles.item__colon}>:</span>
                   <span className={styles.item__title}>{title}</span>
                
               </li>
           )}
       </ul>
    
   </div>
  )
}

PersonFilms.propTypes = {
    personFilms: PropTypes.array
}


export default PersonFilms;