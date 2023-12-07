import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      lighter: string;
      light: string;
      medium: string;
      main: string;
      dark: string;
      darker: string;
      darkest: string;
    };
    typography: {
      mainFont: string;
      secondaryFont: string;
      thirdFont: string;
    };
  }
}
