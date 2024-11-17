import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useSearchParams } from "react-router-dom";
function MyPage() {
  const [searchParams] = useSearchParams();
  const login = searchParams.get("login");

  const previousUrl = useSelector((state) => state.user.previousUrl);
  const isLogin = useSelector((state) => state.user.isLogin);

  if (login) {
    <div>관리자 페이지</div>;
  }
 
  //Navigate to={보낼 경로} replace={} 왔던 기록을 업애게 만든다
  return <Navigate to={previousUrl} replace={true} />;
}

export default MyPage;
