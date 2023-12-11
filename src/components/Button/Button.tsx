import { PropsWithChildren } from "react";
import ButtonStyled from "./ButtonStyled";

interface ButtonProps extends PropsWithChildren {
  type: "submit" | "button";
  actionOnClick?: () => void;
  className?: string;
}

const Button = ({
  children,
  type,
  actionOnClick,
}: ButtonProps): React.ReactElement => {
  const className = "button";

  return (
    <ButtonStyled className={className} type={type} onClick={actionOnClick}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
