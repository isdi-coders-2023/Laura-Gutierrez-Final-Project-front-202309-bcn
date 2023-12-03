import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text?: string;
  type: "submit" | "button";
  actionOnClick?: () => void;
  classModifier: "--disabled" | "";
}

const Button = ({
  text,
  type,
  actionOnClick,
  classModifier,
}: ButtonProps): React.ReactElement => {
  return text ? (
    <ButtonStyled
      className={`button ${classModifier ? `button${classModifier}` : ""}`}
      type={type}
      onClick={actionOnClick}
    >
      {text}
    </ButtonStyled>
  ) : (
    <ButtonStyled
      className={`button ${classModifier ? `button${classModifier}` : ""}`}
      type={type}
      onClick={actionOnClick}
    />
  );
};

export default Button;
