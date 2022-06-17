import PropTypes from "prop-types";
import { useCallback, useEffect, useState } from "react";
import { debounce } from "lodash";
import { getApiResource } from "@utils/network";
import { withErrorApi } from "@hok-helpers/withErrorApi";
import { getPeopleId, getPeopleImage } from "@services/getPeopleData";
import styles from "./SearchPage.module.css";
import { API_SEARCH } from "@constans/api";

import SearchPageInfo from "@components/SearchPage/SearchPageInfo";
import UiInput from "@components/UI/UiInput/UiInput";

const SearchPage = ({ setErrorApi }) => {
  const [inputSearchValue, setInputSearchValue] = useState("");
  const [people, setPeople] = useState([]);

  const getResponse = async (param) => {
  
    const res = await getApiResource(API_SEARCH + param);
    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);
        return {
          id,
          name,
          img,
        };
      });

      setPeople(peopleList)

      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

useEffect(() => {
  getResponse('')
}, [])

const debouncedGetResponse = useCallback(debounce(value => getResponse(value),
 300),[]);


  const handleInputChange = value => {
    // const value = event.target.value;
    setInputSearchValue(value);
    debouncedGetResponse(value);
  };
  return (
    <>
      <h1 className="heder__text">Поиск персонажей</h1>

      <UiInput
        value={inputSearchValue}
        handleInputChange={handleInputChange}
        placeholder="Введите имя персонажа"
        classes={styles.input__search}
      />

      <SearchPageInfo people={people}/>
    </>
  );
};

SearchPage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(SearchPage);
