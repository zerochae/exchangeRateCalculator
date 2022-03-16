import { combineReducers } from "redux";
import select from "Reducers/select";

const rootReducers = combineReducers({
  select,
});

export default rootReducers;

export type RootState = ReturnType<typeof rootReducers>;
