import styled from "styled-components";
import { Title } from "../../global/common";
import { getColor } from "../../global/theme";

const S = {};

S.Title = styled.div`
  ${Title}
`;

S.ContainerWrapper = styled.ul`
  margin-top: 30px;
  height: 340px;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

S.LiWrapper = styled.li`
  padding: 30px 0;
  border-bottom: 1px solid ${getColor("Gray.1")};
  display: flex;
  justify-content: space-between;
`;

S.Memo = styled.div`
  margin-left: 10px;
`;

S.RightWrapper = styled.div`
  display: flex;

  .icon {
    margin-left: 20px;
    color: ${getColor("Gray.2")};
  }
`;

S.LeftWrapper = styled.div`
  display: flex;
`;

export default S;
