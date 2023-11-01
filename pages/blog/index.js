import { Fragment } from "react";
import PostGrid from "../../components/blog/post-grid";
import PostHead from "../../components/blog/post-head";
import { getAllPosts } from "../../lib/post-utils";

import Head from "next/head";
import TopicList from "../../components/blog/topic-list";
import { useRouter } from "next/router";

function blogPage(props) {
  const router = useRouter();
  const findTopicHandle = (e, topic) => {
    e.preventDefault();
    const topicPath = `/blog/topic/${topic}`;
    router.push(topicPath)
  }
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta name='description' content='A list of all programming-related tutorials.' />
      </Head>
      <PostHead />
      <TopicList onSearch={findTopicHandle}/>
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
