import React from 'react';
import styles from './styles.module.scss'
import clsx from "clsx";
import {Typography} from "../ui-kit/Typography";
import Button from "../ui-kit/Button/Index";

const NavbarLinks = ['Main', 'Store', 'Cart'];

interface NavbarProps {
    className?: string;
}

const Navbar = ({className}: NavbarProps) => {
    return (
        <header className={clsx(styles.navbar,className)}>
            <Typography as={'h1'} color={'secondary'}>Logo</Typography>
            <nav>

                {NavbarLinks.map(navBarLink => <Button as={'a'} size={'small'}>{navBarLink}</Button>)}

            </nav>
            <Button as={'button'} variant={'secondary'} theme={'contained'} size={'small'}>Login</Button>
        </header>
    );
};

export default Navbar;