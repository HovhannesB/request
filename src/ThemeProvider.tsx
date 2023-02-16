import { ThemeProvider as Provider } from "styled-components";

export enum ButtonVariants {
  POSITIVE = "positive",
  NEGATIVE = "negative",
  TRANSPARENT = "transparent",
}

interface Props {
  children: JSX.Element;
}

const theme = {
  negativeColor: "#ed4337",
  grey: "grey",
  borderColors: {
    grey: "grey",
  },
  buttonVariants: {
    [ButtonVariants.POSITIVE]: "#28a745",
    [ButtonVariants.NEGATIVE]: "#ed4337",
    [ButtonVariants.TRANSPARENT]: "transparent",
  },
};

const ThemeProvider = ({ children }: Props) => (
  <Provider theme={theme}>{children}</Provider>
);

export default ThemeProvider;
