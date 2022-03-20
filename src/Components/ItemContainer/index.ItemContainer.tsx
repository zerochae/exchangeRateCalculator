import * as S from "Components/ItemContainer/style.ItemContainer";
import * as C from "Constants/index";
import * as A from "Actions/index";
import * as T from "Types/index";

import Item from "Components/Item/index.Item";
import Button from "Components/Button/index.Button";
import Alert from "Components/Alert/index.Alert";

import { useDispatch } from "react-redux";

interface ItemContainerProps {
  sendData: T.Selects | null;
  receiveData: T.Selects | null;
}

const ItemContainer = ({
  sendData,
  receiveData,
}: ItemContainerProps): JSX.Element => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(A.setIsClick());
  };

  return (
    <>
      <S.Container>
        <h1>{C.TITLE}</h1>
        {Object.keys(C.MENU).map((key, index) => {
          return (
            <Item
              optionKey={Object.keys(C.OPTIONS)[index]}
              key={C.MENU[key].id}
              index={index}
              menu={C.MENU[key].title}
              sendData={sendData}
              receiveData={receiveData}
            />
          );
        })}
        <Button handleClick={handleClick} />
        <Alert />
      </S.Container>
    </>
  );
};

export default ItemContainer;
