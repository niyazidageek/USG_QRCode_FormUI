import React from "react";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import Routes from "./routes";
import { positions, Provider } from "react-alert";
import theme from "./themes";
import config from "./config";
import { ThemeProvider } from "@mui/material/styles";
import AlertTemplate from "./components/alert/AlertTemplate";

const customization = {
  isOpen: [],
  fontFamily: config.fontFamily,
  borderRadius: config.borderRadius,
  opened: true,
};
const options = {
  timeout: 5000,
  position: positions.TOP_CENTER,
};

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme(customization)}>
        {/* <Provider template={AlertTemplate} {...options}> */}
          <CssBaseline />
          <Routes />
        {/* </Provider> */}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
