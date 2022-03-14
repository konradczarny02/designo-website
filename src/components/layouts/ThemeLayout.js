import React from "react";
import {ThemeProvider} from "styled-components";
import {GlobalStyle} from "src/styles/GlobalStyle";
import {theme} from "src/styles/theme";

const ThemeLayout = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            {children}
        </ThemeProvider>
    )
}

export default ThemeLayout;