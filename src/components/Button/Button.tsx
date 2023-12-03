import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text?: string;
  type: "submit" | "button";
  actionOnClick?: () => void;
  classModifier: "--disabled" | "";
  className?: string;
}

const Button = ({
  text,
  type,
  actionOnClick,
  classModifier,
}: ButtonProps): React.ReactElement => {
  let className = "button";

  if (classModifier) {
    className += ` ${classModifier}`;
  }

  return text ? (
    <ButtonStyled className={className} type={type} onClick={actionOnClick}>
      {text}
    </ButtonStyled>
  ) : (
    <ButtonStyled className={className} type={type} onClick={actionOnClick} />
  );
};

export default Button;
