import "../styles/globals.css";
import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

export default function App({ Component, pageProps }) {
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode: prefersDarkMode ? "light" : "light",
                    primary: {
                        main: "#112f45",
                    },
                },
                typography: {
                    fontFamily: "Open Sans",
                    h1: {
                        fontSize: "40px",
                        lineHeight: "50px",
                        fontWeight: "700",
                        "@media (max-width:600px)": {
                            fontSize: "24px",
                            lineHeight: "30px",
                        },
                    },
                    h2: {
                        fontSize: "32px",
                        fontWeight: "700",
                        "@media (max-width:600px)": {
                            fontSize: "24px",
                        },
                    },
                    h3: {
                        fontSize: "24px",
                        fontWeight: "500",
                        "@media (max-width:600px)": {
                            fontSize: "16px",
                        },
                    },
                },
            }),
        [prefersDarkMode]
    );
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
