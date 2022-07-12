import "styled-components";

// creating declaration for typed styled-component theme

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      violetDark: string;
      violetLight: string;
      violetSoft: string;
      gray: string;
      grayLight: string;
      purpleLight: string;
      purpleLine: string;
    };
    breakPoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
  }
}
