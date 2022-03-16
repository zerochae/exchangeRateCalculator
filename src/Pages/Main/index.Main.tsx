import * as S from "Pages/Main/style.Main";
import * as C from "Constants/index";
import * as T from "Types/index";

import GlobalStyle from "Styles/GlobalStyle";

import useFetch from "Utils/useFetch";
import useSetData from "Utils/useSetData";

import ItemContainer from "Components/ItemContainer/index.ItemContainer";

const Main = () => {
  const fetchData: T.ExchangeData = useFetch(C.URL);

  const exChange = {
    sender: useSetData(fetchData, C.SENDERKEYS, C.SENDER),
    receiver: useSetData(fetchData, C.RECEIVERKEYS, C.RECEIVER),
  };

  console.log(exChange);

  return (
    <>
      <GlobalStyle />
      <S.Container>
        <ItemContainer />
      </S.Container>
    </>
  );
};

export default Main;
