import * as S from "Components/Button/style.Button";

interface ButtonProps {
  handleClick: () => void;
}

const Button = ({ handleClick }: ButtonProps): JSX.Element => {
  return <S.Container onClick={handleClick}>Submit</S.Container>;
};

export default Button;
