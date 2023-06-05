import {ButtonHTMLAttributes, ComponentProps, ElementType} from "react";
import clsx from "clsx";
import styles from './styles.module.scss'

type TextSize = 'small' | 'medium' | 'big';
type TextColor = 'primary' | 'secondary';
interface TextOwnProps<E extends ElementType>{
    size?:TextSize;
    color?:TextColor;
    classNames?: string;
    as?: E
}

type TextProps<E extends ElementType> = TextOwnProps<E> & Omit<ComponentProps<E>, keyof TextOwnProps<ElementType>>;

const defaultElement = 'div';

export const Typography = <E extends ElementType = typeof defaultElement>(props: TextProps<E>) => {
    const {children,size = 'small',color = 'primary', as,classNames, ...rest} = props
    const TagName = as || defaultElement;
    const className = clsx(styles.text,styles[size],styles[color],classNames)
    return <TagName className={className} {...rest}>{children}</TagName>
}