import { createStore as reduxCreateStore, applyMiddleware } from "redux"
import thunk from "redux-thunk";

import reducer from "./reducer"

const createStore = () => reduxCreateStore(reducer, applyMiddleware(thunk))

export default createStore