import classes from './post-tags.module.css';
import Link from 'next/link';

function PostTags(props) {
  
    const { tags } =props;

    let items = [];

    tags.map(item => {
        items.push(<Link href={`/blog/${item}`} className={classes.item}>{item}</Link>)
    })
    
    return (
        <section className={classes.tagSection}>
            <h2 className={classes.title}>Tags</h2>
            <div className={classes.tags}>
            {items}
        </div>
        </section>
    )

}

export default PostTags
