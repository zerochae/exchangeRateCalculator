import { combineReducers } from "redux";

import select from "Reducers/select";
import input from "Reducers/input";

const rootReducer = combineReducers({
  select,
  input,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
