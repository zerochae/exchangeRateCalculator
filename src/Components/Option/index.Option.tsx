import * as S from "Components/Option/style.Option";

interface OptionProps {
  option: string;
}

const Option = ({ option }: OptionProps) => {
  return <S.Container>{option}</S.Container>;
};

export default Option;
