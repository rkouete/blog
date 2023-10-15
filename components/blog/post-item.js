import Link from "next/link";
import Button from "../ui/button";
import { useRouter } from "next/router";
import ArrowIcon from "../icon/arrow-right-icon";
import classes from './post-item.module.css';

import CalendarIcon from "../icon/calendar-icon";

function PostItem(props) {
    const { id, title, excerpt, topics, image, date, slug } = props;
    const router = useRouter()

    /* const humainReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }); */

      const showTopicHandle = () => {
        router.push(`/blog/topics/${topics}`)
      }

  return (
    <li className={classes.item}>
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
    </li>
  )
}

export default PostItem
