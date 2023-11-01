import React from 'react'
import { useRouter } from 'next/router';
import { getAllPosts, getTopicPosts } from '../../../lib/post-utils';
import TopicList from '../../../components/blog/topic-list';
import PostGrid from '../../../components/blog/post-grid';
import { Fragment } from 'react';
import Head from 'next/head';
import PostHead from '../../../components/blog/post-head';

function PostsCategory(props) {

    const router = useRouter();
    const findTopicHandle = (e, topic) => {
        e.preventDefault();
        const topicPath = `/blog/topic/${topic}`;
        router.push(topicPath)
    }

    return (
        <Fragment>
            <Head>
                <title>All Posts Category</title>
                <meta name='description' content='A list of all programming-related tutorials by topics.' />
            </Head>
            <PostHead />
            <TopicList active={router.query.slug} onSearch={findTopicHandle} />
            <PostGrid items={props.posts} />
        </Fragment>
    )
}

export function getStaticProps(context) {
    const { params } = context;
    const { slug } = params;

    const topicPosts = getTopicPosts(slug);

    return {
        props: {
            posts: topicPosts
        },
    }
}

export function getStaticPaths() {
    const allPosts = getAllPosts();

    const paths = allPosts.map(post => ({
        params: {
            slug: post.topics
        }
    }));

    return {
        paths,
        fallback: false,
    };
}

export default PostsCategory

