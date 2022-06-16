
import styles from './FavofitePage.module.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import PeopleList from '@components/PeoplePage/PeopleList/PeopleList';
import { useEffect } from 'react';

const  FavofitePage = () =>  {

  const [people, setPeople] = useState([]);
    const storeData = useSelector(state=> state.favoriteReducer)

    useEffect(() => {
     const arr = Object.entries(storeData)
     if(arr.length){
      const res = arr.map(item => {
        return {
          id: item[0],
          ...item[1]
        }
      })
   
      setPeople(res)
     }
    },[])
   
  return(
    <>
   <h1 className='heder__text'>Избранные персонажи</h1>
    {
      people.length ?  <PeopleList people={people}/> : <h2 className={styles.coment}>Нет данных</h2>
                    
    }
   
    </>
  )
}



export default FavofitePage;