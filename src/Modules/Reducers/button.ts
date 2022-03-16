import * as A from "Actions/index";

type ButtonState = {
  isClick: boolean;
  isFirst: boolean;
};

type ButtonAction = ReturnType<typeof A.setIsClick>;

const initialState: ButtonState = {
  isClick: false,
  isFirst: false,
};

const button = (state: ButtonState = initialState, action: ButtonAction) => {
  switch (action.type) {
    case A.SETISCLICK:
      return { ...state, isClick: !state.isClick, isFirst: true };
    default:
      return state;
  }
};

export default button;
