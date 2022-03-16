import { combineReducers } from "redux";

import { input, select } from "Reducers/index";

const rootReducer = combineReducers({
  input,
  select,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
