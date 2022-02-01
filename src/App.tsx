import React from "react";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import Routes from "./routes";
import theme from "./themes";
import config from "./config";
import { ThemeProvider } from "@mui/material/styles";

const customization = {
  isOpen: [],
  fontFamily: config.fontFamily,
  borderRadius: config.borderRadius,
  opened: true,
};

function App() {
  return <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme(customization)}>
        <CssBaseline />
            <Routes />
      </ThemeProvider>
  </StyledEngineProvider>;
}

export default App;
