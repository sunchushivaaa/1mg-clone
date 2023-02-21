import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { reducer as UserCartReducer } from "./User side/Cart redux/reducer.cart";
import { reducer as UserConsultReducer } from "./User side/Consult redux/reducer.consult";
import { reducer as AminReducer } from "./Admin side/reducer.admin";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  UserCartReducer,
  UserConsultReducer,
  AminReducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export { store };
