import { combineReducers } from "redux";
import select from "Reducers/select";

const rootReducer = combineReducers({
  select,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
