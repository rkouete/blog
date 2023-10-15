import React from 'react'
import { getTopicPosts } from '../../lib/post-utils';
import PostGrid from '../../components/blog/post-grid';
import { useRouter } from 'next/router';

function PostTopicsBlog(props) {
  const router = useRouter();
  console.log(router.query.slug[1])
  const { posts } = props;
  console.log(posts)
  return (
    <article>
        <PostGrid items={props.posts}/>
    </article>
  )
}

export function getStaticProps() {
  const router = useRouter();
  const topic = router.query.slug[1];
  const topicPosts = getTopicPosts(topic);

  return {
    props: {
      posts: topicPosts
    },
  }
}

export default PostTopicsBlog
