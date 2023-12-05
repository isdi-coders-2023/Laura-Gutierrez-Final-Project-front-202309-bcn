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
}: ButtonProps): React.ReactElement => {
  const className = "button";

  return text ? (
    <ButtonStyled className={className} type={type} onClick={actionOnClick}>
      {text}
    </ButtonStyled>
  ) : (
    <ButtonStyled
      className={"plant-card__pantry"}
      type={type}
      onClick={actionOnClick}
    />
  );
};

export default Button;
