import * as A from "Actions/index";

type InputState = {
  price: string;
};

type InputAction = ReturnType<typeof A.setInput>;

const initialState: InputState = {
  price: "",
};

const input = (state: InputState = initialState, action: InputAction) => {
  switch (action.type) {
    case A.SETINPUT:
      return { ...state, price: action.payload };
    default:
      return state;
  }
};

export default input;
