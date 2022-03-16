import * as S from "Components/Select/style.Select";
import * as C from "Constants/index";

import Option from "Components/Option/index.Option";

interface SelectProps {
  optionKey: string;
}

const Select = ({ optionKey }: SelectProps): JSX.Element => {
  return (
    <S.Container>
      {Object.keys(C.OPTIONS[optionKey]).map((country, index) => {
        return (
          <Option key={index} option={C.OPTIONS[optionKey][country].content} />
        );
      })}
    </S.Container>
  );
};

export default Select;
