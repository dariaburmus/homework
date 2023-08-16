// src/store/index.js
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import contactsReducer from "./contactsReducer";

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
