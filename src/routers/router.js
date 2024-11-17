import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import Main from "../pages/main/Main";
import PageNotFound from "../pages/error/PageNotFound";
import Todo from "../pages/todo/Todo";
import MyPage from "../pages/myPage/MyPage";
import SignIn from "../pages/signIn/SignIn";
import SignUp from "../pages/signUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "signIn",
        element: <SignIn />,
      },
      {
        path: "signUp",
        element: <SignUp />,
      },
      {
        path: "todo",
        element: <Todo />,
      },
    ],
  },
  {
    path: "my", 
    element: <MyPage />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default router;
