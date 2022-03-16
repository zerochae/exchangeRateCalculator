import * as S from "Components/ItemContainer/style.ItemContainer";
import * as C from "Constants/index";

import Item from "Components/Item/index.Item";
import Button from "Components/Button/index.Button";

const ItemContainer = (): JSX.Element => {
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
            />
          );
        })}
        <Button />
      </S.Container>
    </>
  );
};

export default ItemContainer;
