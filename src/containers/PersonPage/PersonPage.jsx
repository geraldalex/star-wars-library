import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import React, { useEffect, useState, Suspense } from 'react';
import { useParams } from 'react-router';
import { getApiResource } from '@utils/network';
import {getPeopleImage} from '@services/getPeopleData'
import PersonPhoto from '@components/PersonPage/PersonPhoto';
import PersonInfo from '@components/PersonPage/PersonInfo';

import PersonLinkBack from '@components/PersonPage/PersonLinkBack';
import { API_PERSON } from '@constans/api';
import styles from './PersonPage.module.css';
import { withErrorApi } from '@hok-helpers/withErrorApi';

// import PersonFilms from '@components/PersonPage/PersonFilms';
import UiLoading from '@components/UI/UiLoading';
const PersonFilms = React.lazy(() => import('@components/PersonPage/PersonFilms'))



const  PersonPage = ({match, setErrorApi}) =>  {
   
    const {id} = useParams()  
    const [personInfo, setPersonInfo] = useState(null)
    const [personName, setPersonName] = useState(null)
    const [personPhoto, setPersonPhoto] = useState(null)
    const [personFilms, setPersonFilms] = useState(null)
    const [personFavorite, setPersonFavorite] = useState(false)

    const storeData = useSelector(state=> state.favoriteReducer)


    useEffect(() => {
           
(async () => {
    
   const res = await getApiResource(`${API_PERSON}/${id}/`)

   storeData[id] ? setPersonFavorite(true): setPersonFavorite(false)


   if(res) {
       setPersonInfo([
        {title: 'День Рождения', data: res.birth_year},
        {title: 'Пол', data: res.gender},
           {title: 'Высота', data: res.height},
           {title: 'Масса', data: res.mass},
           {title: 'Цвет кожи', data: res.skin_color},
           {title: 'Цвет волос', data: res.hair_color},
           {title: 'Цвет глаз', data: res.eye_color},
          
           
       ])

       setPersonName(res.name)
       setPersonPhoto(getPeopleImage(id))

    
       res.films.length && setPersonFilms(res.films)

       setErrorApi(false)
   } else {
       setErrorApi(true)
   }
})()
    },[])
  return(
    <>
   
    <PersonLinkBack/>
    <div className={styles.wrapper}>
    <span className={styles.person__name}>{personName}</span>
    <div className={styles.container}>
    <PersonPhoto personPhoto={personPhoto} personName={personName} id={id} personFavorite={personFavorite} setPersonFavorite={setPersonFavorite}/>
   
    {personInfo && (
<PersonInfo personInfo={personInfo}/>
    )
    }

    {personFilms && (
   
        <Suspense fallback={<UiLoading />}>
<PersonFilms personFilms={personFilms}/>
        </Suspense>
       
        
    )}
    </div>
    </div>
    </>
  )
}

PersonPage.propTypes = {
    match: PropTypes.object,
    setErrorApi: PropTypes.func
   
}


export default withErrorApi(PersonPage);