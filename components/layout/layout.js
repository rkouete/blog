import MainHeader from './main-header';
import classes from './layout.module.css';
import { Fragment, useContext } from 'react';
import MainFooter from './main-footer';
import ThemeContext from '../../store/theme-context';

function Layout(props) {

  const themeCtx = useContext(ThemeContext);
  const theme = themeCtx.theme; 

  return (
    <Fragment>
        <MainHeader />
        <main className={theme === 'DARK' ? classes.darkLayout : classes.lightLayout}>{props.children}</main>
        <MainFooter />
    </Fragment>
  )
}

export default Layout
