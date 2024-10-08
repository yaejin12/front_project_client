// 글로벌 스타일을 넣기 위한 파일
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

${reset}

*{
box-sizing: border-box;
text-shadow: 0px 0px 2px rgba(0,0,0,0.1);
line-height: 1.3;
letter-spacing: -0.5px;
text-decoration: none;
}
`;
export default GlobalStyle;
