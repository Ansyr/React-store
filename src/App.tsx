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
        <div className={"appPage"}>
            <Main/>
        </div>

    </div>
  )
}

export default App
