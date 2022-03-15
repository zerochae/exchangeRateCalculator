import * as S from "Pages/Main/style.Main";
import * as C from "Constants/index";
import GlobalStyle from "Styles/GlobalStyle";
import useFetch from "Utils/useFetch";

const Main = () => {
  const data = useFetch(C.URL);

  console.log(data);

  return (
    <>
      <GlobalStyle />
      <S.Container></S.Container>
    </>
  );
};

export default Main;
