import Main from "./Pages/MainPage";
import React from "react";
import Container from "./Layouts/Container";
import './styles/index.scss'
import {useTheme} from "@/hooks/useTheme";
import clsx from "clsx";
function App() {
    const {theme} = useTheme()
  return (
    <div className={clsx('app',theme)}>
        <Container >
            <Main/>
        </Container>
    </div>
  )
}

export default App
