import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routers/router";
import { ThemeProvider } from "styled-components";
import { theme } from "./global/theme";
import GlobalStyle from "./global/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
