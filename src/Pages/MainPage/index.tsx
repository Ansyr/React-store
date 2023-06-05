import React from 'react';
import Navbar from "../../components/Navbar/Index";
import styles from "./styles.module.scss"
import Container from "@/Layouts/Container";
import {Typography} from "@/components/ui-kit/Typography";
import ProductCard from "@/components/product-card";
import Footer from "@/components/footer";


const MainPage = () => {
    return (
        <div className={styles.mainPage}>
            <Navbar/>
            <Container>


                <div className={styles.mainContent}>


                    <img className={styles.imgBanner} src="https://content.asos-media.com/-/media/homepages/mw/2023/may/22-prime/uk/dt_mw_hp_pp_uk_1258x600.jpg" alt=""/>

                    <ul className={styles.listItems}>
                        <ProductCard></ProductCard>
                        <ProductCard></ProductCard>
                        <ProductCard></ProductCard>
                        <ProductCard></ProductCard>
                    </ul>

                </div>



            </Container>
           <Footer></Footer>
        </div>
    );
};

export default MainPage;