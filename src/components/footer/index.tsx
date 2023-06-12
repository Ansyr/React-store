import React from 'react';
import {Link} from "react-router-dom";
import styles from "./styles.module.scss";
import Container from "@/Layouts/Container";
import {Typography} from "@/components/ui-kit/Typography";
import clsx from "clsx";

const FooterLinks = [{name: 'Help', path: '/help'}, {
    name: 'Track order',
    path: '/track order'
}, {name: 'Delivery & returns', path: '/deleviry'}];

const Footer = () => {
    return (
        <div className={styles.footer}>

            <Container>

                <ul className={styles.listItems}>

                    <li className={styles.listItemText}>
                        <Typography as={"h3"} size={"small"} color={"secondary"} classNames={styles.text}>
                            © 2023 ASOS
                        </Typography>
                    </li>
                    <div className={styles.wrapper}>
                        {FooterLinks.map((item, id) => <li className={styles.listItem}><Link to={item.path}
                                                                                                              className={styles.LinkNav}
                                                                                                              key={id}>{item.name}</Link>
                        </li>)}
                    </div>

                </ul>
            </Container>
        </div>

    );
};

export default Footer;