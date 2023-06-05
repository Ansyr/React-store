import React from 'react';
import {Link} from "react-router-dom";
import styles from "./styles.module.scss";

const FooterLinks = [{name:'Help', path:'/help'},{name:'Track order', path:'/track order'},{name:'Delivery & returns', path:'/deleviry'}];

const Footer = () => {
    return (
        <div className={styles.footer}>
            {FooterLinks.map((item,id) => <Link  to={item.path} className={styles.LinkNav} key={id}>{item.name}</Link>)}
        </div>
    );
};

export default Footer;