import { useContext } from 'react';
import classes from './post-head.module.css';
import ThemeContext from '../../store/theme-context';

function PostHead() {
  const themeCtx = useContext(ThemeContext);
  return (
    <h1 className={themeCtx.theme === 'DARK' ? classes.darkHeader : classes.lightHeader}>Learn more with this blog.</h1>
  )
}

export default PostHead
