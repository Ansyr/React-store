import React from 'react';
import Container from "@/Layouts/Container";
import styles from "./styles.module.scss"
import {Typography} from "@/components/ui-kit/Typography";
const ProductBlock = () => {
    return (
       <Container>
           <div>
               <img className={styles.productCardImage} src="https://images.asos-media.com/products/only-sons-oversized-t-shirt-with-japanese-print-in-black/204647625-1-black?$n_320w$&wid=317&fit=constrain" alt=""/>
           </div>
           <div className={styles.productInfoText}>
               <Typography className={styles.productnfo}>

               </Typography>
           </div>
       </Container>
    );
};

export default ProductBlock;