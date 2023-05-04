import React, {ButtonHTMLAttributes, ComponentProps, ElementType} from 'react';
import clsx from "clsx";
import styles from './styles.module.scss'

type ButtonVariant = 'primary' | 'secondary' | 'link';
type ButtonSize = 'small' | 'medium' | 'large' ;
type ButtonTheme = 'outline' | 'contained' | 'disabled'|'circle';

interface ButtonOwnProps<E extends ElementType> extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    theme?: ButtonTheme
    fullWidth?: boolean;
    disabled?: boolean;
    classNames?:string;
    as?: E
};

type ButtonProps<E extends ElementType> =
    ButtonOwnProps<E>
    & Omit<ComponentProps<E>, keyof ButtonOwnProps<ElementType>>;

const defaultElement = 'button'
export const Button = <E extends ElementType = typeof defaultElement>(props: ButtonProps<E>) => {
    const {
        children,
        variant = 'primary',
        size = 'medium',
        theme = 'outline',
        fullWidth = false,
        disabled,
        as,
        ...rest
    } = props;
    const className = clsx(styles.btn,
        styles[variant],
        styles[size],
        styles[theme],
        {[styles.fullWidth]: fullWidth},
        {[styles.disabled]: disabled})
    const TagName = as || defaultElement
    return (
        <TagName className={clsx(className,props.classNames)} {...rest} disabled={disabled}>
            {children}
        </TagName>
    );
};

export default Button;