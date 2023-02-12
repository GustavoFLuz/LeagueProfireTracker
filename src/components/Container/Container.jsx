import { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components"
import { Outlet, useLocation } from "react-router-dom"
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer";
import { globalTheme, defaultTheme } from "../../themes"
import Version from "../../globalVariables/version";
const Page = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    overflow-x: hidden;
    box-sizing: border-box;
    background-color: #000;
    display: flex;
    justify-content: center;
`

const ContainerComponent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${props => props.theme.colors.dark};
    background: ${props => props.theme.colors.containerBg};
    width: min(100%, 1024px);
    min-height: ${props=>props.theme.sizes.minContainerHeight};
    height: max-content;
    @media (max-width: 992px) {   
        background-size: cover;
    }
`

export default function Container() {
    Version.preload();

    const [currTheme, setCurrTheme] = useState(defaultTheme)
    const location = useLocation();

    return (
        <ThemeProvider theme={globalTheme}>
            <ThemeProvider theme={currTheme}>
                <Page>
                    <ContainerComponent>
                        <Navbar changeTheme={setCurrTheme} path={location.pathname} />
                        <Outlet/>
                        <Footer />
                    </ContainerComponent>
                </Page>
            </ThemeProvider>
        </ThemeProvider>
    );
}