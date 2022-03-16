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

  const receiver = useSelector((state: RootState) => state.select.receiver);

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
      {index === 2 && <span>{C.RECEIVER[receiver].price.toFixed(2)}</span>}
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
