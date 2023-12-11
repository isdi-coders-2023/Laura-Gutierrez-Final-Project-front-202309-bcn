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
  return (
    (
      <ButtonStyled className="" type={type} onClick={actionOnClick}>
        {children}
      </ButtonStyled>
    ) || (
      <ButtonStyled type={type} onClick={actionOnClick}>
        {children}
      </ButtonStyled>
    )
  );
};

export default Button;
