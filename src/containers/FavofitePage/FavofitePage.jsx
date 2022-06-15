
import styles from './FavofitePage.module.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import PeopleList from '@components/PeoplePage/PeopleList/PeopleList';
import { useEffect } from 'react';

const  FavofitePage = () =>  {

  const [people, setPeople] = useState([]);
    const storeData = useSelector(state=> state.favoriteReducer)

    useEffect(() => {

    },[])
   
  return(
    <>
    <h1>FavofitePage</h1>
    </>
  )
}



export default FavofitePage;