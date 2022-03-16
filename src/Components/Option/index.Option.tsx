import * as S from "Components/Option/style.Option";
import * as C from "Constants/index";

interface OptionProps {
  option: string;
  country: string;
}

const Option = ({ option, country }: OptionProps): JSX.Element => {
  return <S.Container value={country}>{option}</S.Container>;
};

export default Option;
