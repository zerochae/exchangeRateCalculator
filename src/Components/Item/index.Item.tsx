import * as S from "Components/Item/style.Item";
import * as A from "Actions/index";
import * as C from "Constants/index";

import Select from "Components/Select/index.Select";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "Modules/index";

interface ItemProps {
  menu: string;
  index: number;
  optionKey: string;
}

const Item = ({ optionKey, menu, index }: ItemProps): JSX.Element => {
  const dispatch = useDispatch();

  const sender = useSelector((state: RootState) => state.select.sender);
  const receiver = useSelector((state: RootState) => state.select.receiver);

  const setRate = (sender: number, receiver: number) => {
    return (sender / receiver).toFixed(2);
  };

  const handleSender = (diff: string) => {
    dispatch(A.setSender(diff));
  };

  const handleReceiver = (diff: string) => {
    dispatch(A.setReceiver(diff));
  };

  const handleInput = (diff: string) => {
    dispatch(A.setInput(diff));
  };

  return (
    <S.Container>
      <span>{menu}:</span>
      {index < 2 && (
        <Select
          optionKey={optionKey}
          handleSender={handleSender}
          handleReceiver={handleReceiver}
        />
      )}
      {index === 2 && (
        <span>
          {setRate(C.RECEIVER[receiver].price, C.SENDER[sender].price)}
        </span>
      )}
      {index === 3 && (
        <input
          onChange={(e) => {
            handleInput(e.target.value);
          }}
        ></input>
      )}
    </S.Container>
  );
};

export default Item;
