import React from "react";
import {ThemeProvider} from "styled-components";
import {GlobalStyle} from "src/assets/styles/GlobalStyle";
import {theme} from "src/assets/styles/theme";

const MainLayout = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            {children}
        </ThemeProvider>
    )
}

export default MainLayout;