import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { reducer as UserCartReducer } from "./UserSide/Cart redux/reducer.cart";
import { reducer as UserConsultReducer } from "./UserSide/Consult redux/reducer.consult";
import { reducer as AdminReducer } from "./AdminSide/reducer.admin";
import {reducer as AuthReducer} from "./UserSide/Auth Redux/reducer";
import{reducer as ProductReducer} from "./UserSide/product Redux/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  UserCartReducer,
  UserConsultReducer,
  AdminReducer,
  AuthReducer,
  ProductReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

