import * as S from "Components/Select/style.Select";
import * as C from "Constants/index";

import Option from "Components/Option/index.Option";

interface SelectProps {
  optionKey: string;
  handleSender: (diff: string) => void;
  handleReceiver: (diff: string) => void;
}

const Select = ({
  optionKey,
  handleSender,
  handleReceiver,
}: SelectProps): JSX.Element => {
  return (
    <S.Container
      onChange={(e) => {
        optionKey === C.ROLE.SENDER
          ? handleSender(e.target.value)
          : handleReceiver(e.target.value);
      }}
    >
      {Object.keys(C.OPTIONS[optionKey]).map((country, index) => {
        return (
          <Option
            key={index}
            option={C.OPTIONS[optionKey][country].content}
            country={country}
          />
        );
      })}
    </S.Container>
  );
};

export default Select;
