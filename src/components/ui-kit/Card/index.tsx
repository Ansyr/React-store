import React from 'react';
import styles from './styles.module.scss'
import clsx from "clsx";

type CardSize = 'small' | 'medium' | 'large'
type CardVariant = 'primary' | 'secondary'

interface CardProps{
    variant?:CardVariant;
    size?:CardSize;
    className?:string;
    children?:React.ReactNode;
}
const Card = (props: CardProps) => {
    const {children,className} = props
    return (
        <div className={clsx(styles.card,className)}>
            {children}
        </div>
    );
};

export default Card;