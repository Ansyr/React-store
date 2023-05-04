import React, {ComponentProps, ElementType, InputHTMLAttributes, Key} from 'react';
import styles from './styles.module.scss'
import clsx from "clsx";

export type InputSize = 'small' | 'medium' | 'large'
export type InputTheme = 'fullWidth' | 'disabled'

export type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'size' | 'theme'
>

interface InputOwnProps<E extends ElementType> extends HTMLInputProps {
    size?: InputSize;
    theme?: InputTheme
    value?: string;
    disabled?: boolean;
    onChange?: (value: string) => void;
    fullWidth?: boolean;
    as?: E;
}

type InputProps<E extends ElementType> = InputOwnProps<E> & Omit<ComponentProps<E>, keyof InputOwnProps<ElementType>>

const defaultElement = 'input'
export const Input = <E extends ElementType = typeof defaultElement>(props: InputProps<E>) => {
    const {value, onChange, fullWidth = false, disabled = false, size = 'medium', as, ...rest} = props
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    }
    const TagName = as || defaultElement;

    const classNames = clsx(
        styles.input,
        styles[size],
        {[styles.fullWidth]: fullWidth},
        {[styles.disabled]: disabled},
    )


    return (
        <TagName className={classNames} value={value} onChange={onChangeHandler} {...rest}>

        </TagName>
    );
};
