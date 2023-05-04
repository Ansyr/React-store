import React from 'react';
import styles from './styles.module.scss'
import clsx from "clsx";

type CardSize = 'small' | 'medium' | 'large'
type CardVariant = 'primary' | 'secondary'
type CardTheme = 'outline'

interface CardProps {
    variant?: CardVariant;
    size?: CardSize;
    classNames?: string;
    theme?: CardTheme;
    children?: React.ReactNode;
}

const Card = (props: CardProps) => {
    const {children, classNames, size = 'medium', variant = 'primary', theme = 'outline', ...rest} = props
    const className = clsx(styles.card, styles[size], styles[variant],styles[theme])
    return (
        <div className={clsx(styles.card, classNames, className)} {...rest}>
            {children}
        </div>
    );
};

export default Card;