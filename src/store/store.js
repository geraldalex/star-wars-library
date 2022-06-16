import { createStore , applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { setLokalStorage } from "@utils/localStorage";

import roorReducer from './reducers/index'

const store = createStore(
    roorReducer,
    composeWithDevTools(applyMiddleware(thunk)));

    store.subscribe(() => {
     setLokalStorage('store', store.getState().favoriteReducer) 
        
    })
export default store;

