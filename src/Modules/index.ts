import { combineReducers } from "redux";

import { input, select, button } from "Reducers/index";

const rootReducer = combineReducers({
  input,
  select,
  button,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
