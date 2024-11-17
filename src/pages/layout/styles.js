import styled from "styled-components";
import { flexCenter } from "../../global/common";
import { getColor } from "../../global/theme";

const S = {};

S.Background = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
  ${flexCenter}
`;

S.Wrapper = styled.div`
  width: 430px;
  height: 700px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 0 30px;
`;

S.Header = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  font-weight: 600;
  /* font-size: 14px; */
  color: ${getColor("main")};
`;

S.Nav = styled.nav`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${getColor("Gray.1")};

  .icon {
    color: #786e85;
    font-size: 18px;
  }
  a {
    text-align: center;
    &.active {
      .icon {
        color: ${getColor("main")};
      }
      p {
        color: ${getColor("main")};
      }
    }
  }
  p {
    color: ${getColor("Gray.2")};
    font-style: 10px;
    margin-top: 7px;
    font-size: 10px;
    font-weight: 500;
  }
`;

S.Main = styled.main`
  flex: 1;
`;

export default S;
