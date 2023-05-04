import React from 'react';
import styles from './styles.module.scss'
import clsx from "clsx";
import {Typography} from "../ui-kit/Typography";
import Button from "../ui-kit/Button/Index";
import {useTheme} from "@/hooks/useTheme";

const NavbarLinks = ['Main', 'Store', 'Cart'];

interface NavbarProps {
    className?: string;
}

const Navbar = ({className}: NavbarProps) => {
    const {theme,switchTheme} = useTheme()
    return (
        <header className={clsx(styles.navbar,className,theme)}>
            <Typography as={'h1'} color={'secondary'}>Logo</Typography>
            <nav>

                {NavbarLinks.map((navBarLink,id) => <Button as={'a'} size={'small'} key={id}>{navBarLink}</Button>)}

            </nav>
            <Button as={'button'} theme={'circle'} size={'medium'} onClick={switchTheme}/>
            <Button as={'button'} variant={'secondary'} theme={'contained'} size={'small'}>Login</Button>
        </header>
    );
};

export default Navbar;