import styled from "styled-components";
import { getColor } from "../../global/theme";

const S = {};

S.Input = styled.input`
  border: 1px solid ${getColor("Gray.1")};
  width: 13px;
  height: 13px;
  border-radius: 3px;

  &:checked {
    background-color: ${getColor("main")};
    border: none;
    background-size: 100% 100%;
    background-image: url("data:image/svg+xml,%3csvg viewBox='2.5 2.5 11 11' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-position: 50%;
    background-repeat: no-repeat;
  }
`;

export default S;
