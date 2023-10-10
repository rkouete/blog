import React from 'react'
import PostItem from './post-item';

function PostGrid(props) {
    const { items } = props;
  return (
    <div>
      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-x-8 md:gap-y-3'>
        {items.map(post => (
            <PostItem 
                key={post.id}
                id={post.id}
                title={post.title}
                description={post.description}
                topics={post.topics}
                image={post.image}
                date={post.createdAt}
                slug={post.slug}
            />
        ))}
      </ul>
    </div>
  )
}

export default PostGrid
