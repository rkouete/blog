import Link from 'next/link'
import React, { Fragment } from 'react'
import HomeIcon from '../icon/home-icon'
import BlogIcon from '../icon/blog-icon'
import classes from './main-header.module.css'

function MainHeader() {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1><Link className={classes.logo} href='/'>Blog website</Link></h1>
                <nav className={classes.nav}>
                    <ul className={classes.navItems}>
                        <li>
                            <Link href="/" className={classes.navItem}>
                                <span><HomeIcon /></span>
                                <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog" className={classes.navItem}>
                                <span><BlogIcon /></span>
                                <span>Blog</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className={classes.navItem}>
                                <span><BlogIcon /></span>
                                <span>Contact</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </Fragment>
    )
}

export default MainHeader
