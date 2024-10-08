import styled from "styled-components";
import { flexCenter } from "../../global/common";

const S = {};

S.Background = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
  ${flexCenter}
`;

S.Wrapper = styled.div`
  width: 430px;
  height: 800px;
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
`;

S.Nav = styled.nav`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

S.Main = styled.main`
  flex: 1;
`;

export default S;
