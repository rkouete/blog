import React from 'react'
import PostItem from './post-item';

function PostList(props) {
    const { items } = props;
  return (
    <div>
      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-x-8 md:gap-y-3 divide-y-2'>
        {items.map(post => (
            <PostItem 
                key={post.id}
                id={post.id}
                title={post.title}
                description={post.description}
                topics={post.topics}
                image={post.image}
                date={post.createdAt}
            />
        ))}
      </ul>
    </div>
  )
}

export default PostList
