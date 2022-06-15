import { SET_PERSON_TO_FAVORITE, REMOVE_PERSON_FROM_FAVORITE } from "../constans/actionTypes"

export const setPersonToFavorite = (person) => ({
type:SET_PERSON_TO_FAVORITE,
payload: person
})


export const removePersonFromFavorite = (id) => ({
    type:REMOVE_PERSON_FROM_FAVORITE,
    payload: id
})