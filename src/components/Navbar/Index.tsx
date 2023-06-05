import React from 'react';
import styles from './styles.module.scss'
import clsx from "clsx";
import {Typography} from "../ui-kit/Typography";
import Button from "../ui-kit/Button/Index";
import {useTheme} from "@/hooks/useTheme";
import {Link} from "react-router-dom"

const NavbarLinks = [{name:'Main', path:'/main'},{name:'Store', path:'/store'},{name:'Cart', path:'/cart'}];

interface NavbarProps {
    className?: string;
}

const Navbar = ({className}: NavbarProps) => {
    const {switchTheme} = useTheme()
    return (
        <header className={clsx(styles.navbar,className)}>
            <Typography as={'h1'} color={'secondary'} size={"big"}>Logo</Typography>
            <nav>

                {NavbarLinks.map((navBarLink,id) => <Link to={navBarLink.path} className={styles.LinkNav} key={id}>{navBarLink.name}</Link>)}

            </nav>
            <Button as={'button'} variant={'secondary'} theme={'contained'} size={'small'}>Login</Button>
            <Button as={'button'} theme={'circle'} size={'medium'} onClick={switchTheme} classNames={styles.themeBtn}/>
        </header>
    );
};

export default Navbar;