import { Fragment, useContext } from 'react';
import classes from './topic-list.module.css';
import Link from 'next/link';
import ThemeContext from '../../store/theme-context';

const topics = ['java', 'python', 'kotlin'];

function TopicList(props) {
  const themeCtx = useContext(ThemeContext);

  return (
    <Fragment>
        <ul className={themeCtx.theme === 'DARK' ? classes.darkItems : classes.lightItems}>
            { topics.map((topic, i) => (
                props.active === topic ? 
                <li key={i} className={`${classes.item} ${classes.active}`}><span onClick={(e) => props.onSearch(e, topic)} className={classes.link} >{topic}</span></li> :
                <li key={i} className={classes.item}><span onClick={(e) => props.onSearch(e, topic)} className={classes.link} >{topic}</span></li>
            ))}
        </ul>
    </Fragment>
  )
}

export default TopicList
