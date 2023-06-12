import Main from "./Pages/MainPage";
import React from "react";
import './styles/index.scss'
import {useTheme} from "@/hooks/useTheme";
import clsx from "clsx";
import Navbar from "@/components/Navbar";
import Product from "@/Pages/product";
function App() {
    const {theme} = useTheme()
  return (
    <div className={clsx('app',theme)}>
        <div className={"appPage"}>
            <Navbar/>
            <Main/>
            {/*<Product/>*/}
        </div>

    </div>
  )
}

export default App
