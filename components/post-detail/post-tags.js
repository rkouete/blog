import classes from './post-tags.module.css';
import ThemeContext from '../../store/theme-context';
import { useContext } from 'react';

function PostTags(props) {
    const themeCtx = useContext(ThemeContext);
  
    const { tags } =props;

    let items = [];

    tags.map((item, i) => {
        items.push(<span key={i} className={classes.tag}>{item}</span>)
    })
    
    return (
        <section className={themeCtx.theme === 'DARK' ? classes.darkTagSection : classes.lightTagSection}>
            <div className={classes.tags}>
            {items}
        </div>
        </section>
    )

}

export default PostTags
