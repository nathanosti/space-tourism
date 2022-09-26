// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      gray: string;
      blue: {
        50: string;
      };
      white: string;
    };
  }
}
