import classes from './post-tags.module.css';
import Link from 'next/link';

function PostTags(props) {
  
    const { tags } =props;

    let items = [];

    tags.map((item, i) => {
        items.push(<span key={i} className={classes.tag}>{item}</span>)
    })
    
    return (
        <section className={classes.tagSection}>
            <h4 className={classes.title}>Tags</h4>
            <div className={classes.tags}>
            {items}
        </div>
        </section>
    )

}

export default PostTags
