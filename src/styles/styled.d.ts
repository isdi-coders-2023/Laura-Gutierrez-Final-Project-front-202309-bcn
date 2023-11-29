import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      main: string;
      accent: string;
      lightest: string;
      lighter: string;
      light: string;
      medium: string;
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
