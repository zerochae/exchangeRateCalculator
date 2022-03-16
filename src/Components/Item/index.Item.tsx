import * as S from "Components/Item/style.Item";

import Select from "Components/Select/index.Select";

interface ItemProps {
  menu: string;
  index: number;
  optionKey: string;
}

const Item = ({ optionKey, menu, index }: ItemProps): JSX.Element => {
  return (
    <S.Container>
      {menu}
      {index < 2 && <Select optionKey={optionKey} />}
    </S.Container>
  );
};

export default Item;
