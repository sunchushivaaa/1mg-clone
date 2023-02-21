import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { reducer as UserCartReducer } from "./UserSide/Cart redux/reducer.cart";
import { reducer as UserConsultReducer } from "./UserSide/Consult redux/reducer.consult";
import { reducer as AdminReducer } from "./AdminSide/reducer.admin";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  UserCartReducer,
  UserConsultReducer,
  AdminReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

