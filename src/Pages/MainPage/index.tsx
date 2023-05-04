import React from 'react';
import Navbar from "../../components/Navbar/Index";
import styles from "./styles.module.scss"


const MainPage = () => {
    return (
        <div className={styles.mainPage}>
            <Navbar></Navbar>
        </div>
    );
};

export default MainPage;