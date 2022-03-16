import * as S from "Components/Alert/style.Alert";
import * as C from "Constants/index";

import { RootState } from "Modules/index";
import { useSelector } from "react-redux";

import useCalculate from "Utils/useCalculate";
import { useEffect, useState } from "react";

const Alert = (): JSX.Element => {
  const input = useSelector((state: RootState) => state.input.price);
  const sender = useSelector((state: RootState) => state.select.sender);
  const receiver = useSelector((state: RootState) => state.select.receiver);
  const isClick = useSelector((state: RootState) => state.button.isClick);
  const isFirst = useSelector((state: RootState) => state.button.isFirst);

  const [result, setResult] = useState<string>("");

  const calResult: string = useCalculate(
    parseInt(input),
    C.RECEIVER[receiver].price,
    C.SENDER[sender].price
  );

  useEffect(() => {
    calResult !== C.OUTPUT.NAN
      ? setResult(
          `${C.OUTPUT.START} ${calResult} ${C.RECEIVER[receiver].currency} ${C.OUTPUT.END}`
        )
      : setResult(C.OUTPUT.ERR);
  }, [isClick]);

  return <S.Container>{isFirst && <p>{result}</p>}</S.Container>;
};

export default Alert;
