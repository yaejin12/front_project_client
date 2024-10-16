// 테마 스차일을 적용하는 파일

const COLORS = {
  main: "#1A73E8",

  Gray: {
    1: "#EEEEEE",
    2: "#737373",
  },
};

const FONT_SIZE = {
  small: "14px",
  medium: "18px",
  large: "20px",
};

export const theme = {
  colors: COLORS,
  fontSize: FONT_SIZE,
};

export const getColor = (color) => (props) => {
  const keys = color.split(".");
  return keys.reduce((color, key) => color[key], props.theme.colors);
};
