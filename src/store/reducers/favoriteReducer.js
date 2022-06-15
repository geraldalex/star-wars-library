import { omit } from "lodash"
import { SET_PERSON_TO_FAVORITE, REMOVE_PERSON_FROM_FAVORITE } from "../constans/actionTypes"

const initialState = {}

const favoriteReducer = (state = initialState, action) => {
switch(action.type){
    case SET_PERSON_TO_FAVORITE:
        return {
            ...state,    
            ...action.payload
        }
       
    
    case REMOVE_PERSON_FROM_FAVORITE:
        return omit(state,action.payload)

    default:
            return state;
        

}
}

export default favoriteReducer;