import { combineReducers } from "redux";

import input from "Reducers/input";
import select from "Reducers/select";

const rootReducer = combineReducers({
  input,
  select,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
