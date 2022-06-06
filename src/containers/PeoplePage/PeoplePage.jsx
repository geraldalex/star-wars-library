import { useEffect, useState } from "react";
import PropTypes from 'prop-types'

import { withErrorApi } from "@hok-helpers/withErrorApi";
import PeopleList from "@components/PeoplePage/PeopleList";
import PeopleNavigation from "@components/PeoplePage/PeopleNavigation";
import { getApiResource, changeHttp} from "@utils/network";
import { getPeopleId, getPeopleImage, getPeoplePage } from "@services/getPeopleData";
import { API_PEOPLE } from "@constans/api";
import { useQueryParams } from "@hooks/useQueryParams";

import styles from "./PeoplePage.module.css";

const PeoplePage = ({setErrorApi}) => {
    
  const [people, setPeople] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [counterPage, setCounterPage] = useState(1);
   
const query = useQueryParams()
const queryPage = query.get('page')
console.log( prevPage, nextPage);

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
    setNextPage(changeHttp(res.next))
    setPrevPage(changeHttp(res.previous))
    setCounterPage(getPeoplePage(url))
    setErrorApi(false)
} else {
  setErrorApi(true)
}


  };

  useEffect(() => {
   getResource(API_PEOPLE + queryPage);
   
  }, []);

  return (
    <>
    
      <>
      
      <PeopleNavigation getResource={getResource} prevPage={prevPage} nextPage={nextPage} counterPage={counterPage} />
      {people && <PeopleList people= {people}/>}
      </>
  

    </>
  );
};

PeoplePage.propTypes = {
  setErrorApi: PropTypes.func
}
export default withErrorApi(PeoplePage) ;
