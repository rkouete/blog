import Link from 'next/link'
import React, { Fragment, useContext } from 'react'
import classes from './main-header.module.css';
import ThemeContext from '../../store/theme-context';
import MoonIcon from '../icon/moon-icon';
import SunIcon from '../icon/sun-icon';


function MainHeader() {

    const themCtx = useContext(ThemeContext);

    return (
        <Fragment>
            <header className={themCtx.theme === 'DARK' ? classes.darkHeader : classes.lightHeader}>
                <h1><Link className={classes.logo} href='/'>Tech Articles</Link></h1>
                <nav className={classes.nav}>
                    <ul className={classes.navItems}>
                        <li>
                            <Link href="https://rodriguekouete.com/" className={classes.navItem}>
                                <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog" className={classes.navItem}>
                                <span>Blog</span>
                            </Link>
                        </li>
                        <li>
                            { 
                                themCtx.theme === 'LIGHT' 
                                ? 
                                <span onClick={themCtx.darkTheme}><MoonIcon/></span>
                                : 
                                <span onClick={themCtx.lightTheme}><SunIcon/></span>
                            }
                        </li>
                    </ul>
                </nav>
            </header>
        </Fragment>
    )
}

export default MainHeader
