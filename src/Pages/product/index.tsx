import React from 'react';
import styles from "./styles.module.scss"
import Card from "@/components/ui-kit/Card";
import ProductBlock from "@/components/clothes/product-block";

const Product = () => {
    return (
        <div className={styles.productPage}>

               <ProductBlock></ProductBlock>

        </div>
    );
};

export default Product;