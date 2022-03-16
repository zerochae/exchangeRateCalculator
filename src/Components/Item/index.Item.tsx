import * as S from "Components/Item/style.Item";
import * as A from "Actions/select";
import * as C from "Constants/index";

import Select from "Components/Select/index.Select";

import useCalculate from "Utils/useCalculate";

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

  console.log(sender, receiver);

  const handleSender = (diff: string) => {
    dispatch(A.selectSender(diff));
  };

  const handleReceiver = (diff: string) => {
    dispatch(A.selectReceiver(diff));
  };

  return (
    <S.Container>
      {menu}:
      {index < 2 && (
        <Select
          optionKey={optionKey}
          handleSender={handleSender}
          handleReceiver={handleReceiver}
        />
      )}
      {index === 2 && C.RECEIVER[receiver].price.toFixed(2)}
    </S.Container>
  );
};

export default Item;
