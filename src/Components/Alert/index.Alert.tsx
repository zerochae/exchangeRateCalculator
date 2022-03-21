import * as S from "Components/Alert/style.Alert";
import * as C from "Constants/index";
import * as T from "Types/index";

import { RootState } from "Modules/index";
import { useSelector } from "react-redux";

import useCalculate from "Utils/useCalculate";
import { useEffect, useState } from "react";

interface AlertProps {
  sendData: T.Selects;
  receiveData: T.Selects;
}

const Alert = ({ sendData, receiveData }: AlertProps): JSX.Element => {
  const input = useSelector((state: RootState) => state.input.price);
  const sender = useSelector((state: RootState) => state.select.sender);
  const receiver = useSelector((state: RootState) => state.select.receiver);
  const isClick = useSelector((state: RootState) => state.button.isClick);
  const isFirst = useSelector((state: RootState) => state.button.isFirst);

  const [result, setResult] = useState<string>("");

  const calResult: string = useCalculate(
    parseInt(input),
    receiveData[receiver].price,
    sendData[sender].price
  );

  useEffect(() => {
    calResult !== C.OUTPUT.NAN
      ? setResult(
          `${C.OUTPUT.START} ${calResult} ${
            receiveData && receiveData[receiver].currency
          } ${C.OUTPUT.END}`
        )
      : setResult(C.OUTPUT.ERR);
  }, [isClick]);

  return <S.Container>{isFirst && <p>{result}</p>}</S.Container>;
};

export default Alert;
