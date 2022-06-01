import { useEffect, useState } from "react";
import PropTypes from 'prop-types'

import { withErrorApi } from "@hok-helpers/withErrorApi";
import PeopleList from "@components/PeoplePage/PeopleList";
import { getApiResource } from "@utils/network";
import { getPeopleId, getPeopleImage } from "../../services/getPeopleData";
import { API_PEOPLE } from "@constans/api";

import styles from "./PeoplePage.module.css";

const PeoplePage = ({setErrorApi}) => {
    
  const [people, setPeople] = useState(null);
   

  const getResource = async (url) => {
    const res = await getApiResource(url);

if(res){
  const peopleList = res.results.map(({ name, url }) => {
    const id = getPeopleId(url)
    const img =getPeopleImage(id)

      return {
        id,
        name,
        img,
      };
    });
    setPeople(peopleList);
    setErrorApi(false)
} else {
  setErrorApi(true)
}


  };

  useEffect(() => {
    getResource(API_PEOPLE);
  }, []);

  return (
    <>
    
      <>
      <h1 className='heder__text'>Navigation</h1>
      {people && <PeopleList people= {people}/>}
      </>
  

    </>
  );
};

PeoplePage.propTypes = {
  setErrorApi: PropTypes.func
}
export default withErrorApi(PeoplePage) ;
