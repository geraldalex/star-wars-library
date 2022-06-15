import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removePersonFromFavorite, setPersonToFavorite } from '@store/actions';
import iconFavorite from "./img/favorite.svg"
import iconFavoriteFill from "./img/favorite-fill.svg"
import styles from './PersonPhoto.module.css';

const  PersonPhoto = ({personPhoto,personName, id, personFavorite, setPersonFavorite }) =>  {
  const dispatch = useDispatch();


 const dispatchFavoritePeople = () => {
if(personFavorite){
  dispatch(removePersonFromFavorite(id))
  setPersonFavorite(false)
}else {
  dispatch(setPersonToFavorite({
    [id]:{
      name:personName,
      img:personPhoto
    }
  }))

  setPersonFavorite(true)
}
}

  return(
    <>
    <div className={styles.container}>

     <img className={styles.photo} src={personPhoto} alt={personName}/>
     <img
    className={styles.favorite}
    src= {personFavorite ? iconFavoriteFill : iconFavorite}
    alt='Add to favorite'
    onClick={dispatchFavoritePeople}
    />
     </div>






     
     
     </>
  )
}

PersonPhoto.propTypes = {
  personPhoto: PropTypes.string,
  personName:PropTypes.string,
  id:PropTypes.string,
  personFavorite:PropTypes.bool,
  setPersonFavorite: PropTypes.func

}


export default PersonPhoto;