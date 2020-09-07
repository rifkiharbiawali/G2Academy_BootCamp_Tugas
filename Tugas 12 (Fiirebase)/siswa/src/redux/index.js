import { combineReducers } from "redux";
// import LoginReducer from "./LoginReducer";
// import studentsDataReducer from "./studentsData";
import * as Redusers from "./reducer";

// const allReducers = combineReducers({
//   login: LoginReducer,
// });

const AllReducers = combineReducers(Redusers);

export default AllReducers;
