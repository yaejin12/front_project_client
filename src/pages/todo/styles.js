import styled from "styled-components";
import { flexCenter, Title } from "../../global/common";
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
  width: 100%;
  padding: 30px 0;
  border-bottom: 1px solid ${getColor("Gray.1")};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

S.Memo = styled.div`
  margin-left: 10px;
  width: 100%;

  &.checkClickBox {
    color: ${getColor("Gray.2")};
    text-decoration: line-through;
  }
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
  align-items: center;
  width: 100%;
`;

export default S;
