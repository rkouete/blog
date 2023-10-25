import { useContext } from "react";
import Button from "../ui/button";
import { useRouter } from "next/router";
import ArrowIcon from "../icon/arrow-right-icon";
import classes from './post-item.module.css';
import ThemeContext from "../../store/theme-context";

import CalendarIcon from "../icon/calendar-icon";

function PostItem(props) {
  const themeCtx = useContext(ThemeContext);
  const { id, title, excerpt, topics, tags, image, date, slug } = props;

  const router = useRouter()

  /* const humainReadableDate = new Date(date).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }); */

  const showTopicHandle = () => {
    router.push(`/blog/topics/${topics}`)
  }

  {/* <li className={classes.item}>
        <Button onClick={showTopicHandle}>{topics}</Button>
        <h2><Link className={classes.title} href={`/blog/${slug}`}>{title}</Link></h2>
        <p className={classes.content}>{excerpt.substr(0, 100)+`...`}</p>
        <div className={classes.footer}>
            <Button link={`/blog/${slug}`}>
              <span>Learn More</span> 
              <ArrowIcon />
            </Button>
            <time className={classes.date}><CalendarIcon/> {date}</time>
        </div>
    </li> */}

  return (
    <li className={themeCtx.theme === 'DARK' ? classes.darkItem : classes.lightItem}>
      <div className={classes.itemIn}>
        <h3 className={classes.title}>{title}</h3>
        <div className={classes.separator}></div>
        <p>{excerpt.substr(0, 100)+`...`}</p>
        <div className={classes.tags}>
          {tags.slice(0, 3).map((tag, i) => (<span key={i} className={classes.tag}>{tag}</span>))}
        </div>
        <div className={classes.footer}>
          <Button link={`/blog/${slug}`}>
            <span>Learn More</span>
            <ArrowIcon />
          </Button>
          <time className={classes.date}><CalendarIcon /> {date}</time>
        </div>
      </div>
    </li>
  )
}

export default PostItem
