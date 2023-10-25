import { useContext } from 'react';
import Image from 'next/image'
import classes from './post-header.module.css';
import PostTags from './post-tags';
import ThemeContext from '../../store/theme-context';

function PostHeader(props) {
  const themeCtx = useContext(ThemeContext);
  return (
    <div>
      {/* <Image className={classes.image} src={props.image} alt={props.title} width={900} height={500} layout='responsive' priority/> */}
      <div className={themeCtx.theme === 'DARK' ? classes.darkBody : classes.lightBody}>
        <div className={classes.head}>
          <div>
            <h4 className={classes.title}>{props.title}</h4>
            <p className={classes.date}>{props.date}</p>
          </div>
          <span className={classes.topics}>{props.topics}</span>
        </div>

        <PostTags tags={props.tags} />
      </div>
    </div>
  )
}

export default PostHeader
