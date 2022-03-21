import * as S from "Pages/style";
import * as C from "Constants/index";
import * as T from "Types/index";

import useFetch from "Utils/useFetch";
import useSetData from "Utils/useSetData";

import ItemContainer from "Components/ItemContainer/index.ItemContainer";

const Index = (): JSX.Element => {
  const fetchData: T.ExchangeData = useFetch(C.URL);

  const sendData = useSetData(fetchData, C.SENDERKEYS, C.SENDER);
  const receiveData = useSetData(fetchData, C.RECEIVERKEYS, C.RECEIVER);

  return (
    <>
      <S.Container>
        {sendData && receiveData && (
          <ItemContainer sendData={sendData} receiveData={receiveData} />
        )}
      </S.Container>
    </>
  );
};

export default Index;
