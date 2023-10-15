import React from 'react'
import { getPostFiles, getTagPosts } from '../../../lib/post-utils';
import PostHead from '../../../components/blog/post-head';
import PostGrid from '../../../components/blog/post-grid';

function BlogTag(props) {
  return (
    <div>
      <PostHead />
      <PostGrid items={props.posts}/>
    </div>
  )
}

export async function getStaticProps (context) {
    const { params } = context;
  const { tags } = params;

  const posts = getTagPosts(tags);

  return {
    props: {
        posts: posts
      },
      revalidate: 600
  }

}

export async function getStaticPaths() {
    const postFilenames = getPostFiles();

    const tags = postFilenames.map((fileName) => fileName.replace(/\.md$/, ''));

    return {
        paths: tags.map((tag) => ({params: { tag: tag }})),
        fallback: false
      };
  }

export default BlogTag
