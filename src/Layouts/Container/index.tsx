import React from 'react';
import styles from './styles.module.scss'
import clsx from "clsx";

interface ContainerProps{
    className?:string,
    children?:React.ReactNode,
}
const Container = ({children,className}: ContainerProps) => {
    return (
        <div className={clsx(styles.container,styles.props)}>
            {children}
        </div>
    );
};

export default Container;