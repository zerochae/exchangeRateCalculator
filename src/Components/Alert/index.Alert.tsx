import * as S from "Components/Alert/style.Alert";
import * as C from "Constants/index";

import { RootState } from "Modules/index";
import { useSelector } from "react-redux";

import useCalculate from "Utils/useCalculate";

const Alert = () => {
  const input = useSelector((state: RootState) => state.input.price);
  const sender = useSelector((state: RootState) => state.select.sender);
  const receiver = useSelector((state: RootState) => state.select.receiver);

  const result = useCalculate(
    parseInt(input),
    C.RECEIVER[receiver].price,
    C.SENDER[sender].price
  );

  return (
    <S.Container>
      <span>
        수취금액은 {result} {C.RECEIVER[receiver].currency} 입니다.
      </span>
    </S.Container>
  );
};

export default Alert;
