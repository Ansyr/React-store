import React from 'react';
import Card from "@/components/ui-kit/Card";
import {Typography} from "@/components/ui-kit/Typography";
import styles from "./styles.module.scss"
import Button from "@/components/ui-kit/Button";
import Heart from "@/components/svg/heart";
import {Link} from "react-router-dom";

const ProductCard = () => {
    return (
            <Link to={"*"}>
            <Card classNames={styles.productCard}>

                <div className={styles.imgCard}>
                    <img src="https://images.asos-media.com/products/only-sons-oversized-t-shirt-with-japanese-print-in-black/204647625-1-black?$n_320w$&wid=317&fit=constrain" alt=""/>
                    <span className={styles.icon}>
                        <Heart></Heart>
                    </span>
                </div>

                <Typography as={"h3"} size={"small"} classNames={styles.cardText} color={"secondary"}>
                    ASOS DESIGN relaxed cargos in black
                </Typography>


            <Typography as={"h2"} size={"medium"} color={"secondary"} classNames={styles.priceText}>
                40.00$
            </Typography>
            </Card>
            </Link>

    );
};

export default ProductCard;