import classes from './post-grid.module.css'
import PostItem from './post-item';

function PostGrid(props) {
    const { items } = props;
  return (
    <div>
      <ul className={classes.postItems}>
        {items.map((post, i) => (
            <PostItem 
                key={i}
                id={post.id}
                title={post.title}
                excerpt={post.excerpt}
                topics={post.topics}
                image={post.image}
                date={post.date}
                slug={post.slug}
                tags={post.tags}
            />
        ))}
      </ul>
    </div>
  )
}

export default PostGrid
