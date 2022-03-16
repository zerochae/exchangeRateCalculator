import * as S from "Pages/style";
import * as C from "Constants/index";
import * as T from "Types/index";

import useFetch from "Utils/useFetch";
import useSetData from "Utils/useSetData";

import ItemContainer from "Components/ItemContainer/index.ItemContainer";


const Index = (): JSX.Element => {
  const fetchData: T.ExchangeData = useFetch(C.URL);


  const exChange: { [key: string]: T.Selects | null } = {
    sender: useSetData(fetchData, C.SENDERKEYS, C.SENDER),
    receiver: useSetData(fetchData, C.RECEIVERKEYS, C.RECEIVER),
  };

  console.log(exChange);

  return (
    <>
      <S.Container>
        <ItemContainer />
      </S.Container>
    </>
  );
};

export default Index;
