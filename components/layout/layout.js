import MainHeader from './main-header';
import classes from './layout.module.css';
import { Fragment } from 'react';
import MainFooter from './main-footer';

function Layout(props) {
  return (
    <Fragment>
        <MainHeader />
        <main className={classes.layout}>{props.children}</main>
        <MainFooter />
    </Fragment>
  )
}

export default Layout
