import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text?: string;
  className?: string;
}

const Button = ({ text, className }: ButtonProps): React.ReactElement => {
  return text ? (
    <ButtonStyled className={`${className}`}>{text}</ButtonStyled>
  ) : (
    <ButtonStyled className="pantry" />
  );
};

export default Button;
