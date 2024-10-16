import styled from "styled-components";
import { Title } from "../../global/common";

const S = {};

S.Title = styled.div`
  ${Title}
`;

S.InputWrapper = styled.div`
  margin-bottom: 20px;
`;

S.Label = styled.label`
  p {
    color: #786e85;
    font-weight: 600;
    margin: 10px 0 0 15px;
    font-size: 12px;
  }
`;

S.ButtonWrapper = styled.div`
  margin-top: 40px;
`;

export default S;
