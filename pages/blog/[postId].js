import { getPostData, getPostFiles } from '../../lib/post-utils';
import PostContent from '../../components/post-detail/post-content';
import PostTags from '../../components/post-detail/post-tags';
import { Fragment } from 'react';
import Comments from '../../components/input/comments';

import Head from 'next/head';

function postDetails(props) {
  const { post } = props;

  return (
    <Fragment>
      <Head>
        <title>{post.title}</title>
        <meta name='description' content={post.excerpt} />
      </Head>
      <article>
        <PostContent post={post}/>
      </article>
      
      <Comments/>
    </Fragment>
  )
}

export function getStaticProps(context) {
  const { params } = context;
  const { postId } = params;
  const postData = getPostData(postId);

  return {
    props: {
      post: postData
    },
    revalidate: 600
  }
}

export function getStaticPaths() {
  const postFilenames = getPostFiles();

  const postId = postFilenames.map((fileName) => fileName.replace(/\.md$/, ''))

  return {
    paths: postId.map(id => ({ params: { postId: id }})),
    fallback: false
  };
}

export default postDetails
