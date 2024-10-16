import styled, { css } from "styled-components";
import { getColor } from "../../global/theme";
const S = {};
S.Button = styled.button`
  width: 100%;
  height: 45px;
  color: #fff;
  background-color: ${getColor("main")};
  font-weight: 600;
  border-radius: 8px;
`;
export default S;
