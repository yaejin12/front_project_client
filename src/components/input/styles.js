import styled from "styled-components";
import { getColor } from "../../global/theme";

const S = {};

S.Input = styled.input`
  width: 100%;
  padding: 10px 15px;
  border-radius: 8px;
  font-weight: 500;
  font-style: 16px;
  background-color: ${getColor("Gray.1")};
  /* height: 50px; */
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  &::placeholder {
    font-weight: 600;
    color: #786e85;
  }

  &.wBG {
    background-color: #fff;
    color: #000000;
  }
`;

export default S;
