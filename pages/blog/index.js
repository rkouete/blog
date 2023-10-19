import { Fragment } from "react";
import PostGrid from "../../components/blog/post-grid";
import PostHead from "../../components/blog/post-head";
import { getAllPosts } from "../../lib/post-utils";

import Head from "next/head";

function blogPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta name='description' content='A list of all programming-related tutorials.' />
      </Head>
      <PostHead />
      <PostGrid items={props.posts}/>
    </Fragment>
  )
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts
    },
  }
}

export default blogPage
