import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      paragraph: string;
      primary: string;
      secondary: string;
      input: string;
      happeningDiv: string;
      border: string;
      background: string;
      text: string;
    };
  }
}
