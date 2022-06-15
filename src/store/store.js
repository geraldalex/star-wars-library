import { createStore , applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import roorReducer from './reducers/index'

const store = createStore(
    roorReducer,
    composeWithDevTools(applyMiddleware(thunk)));
export default store;