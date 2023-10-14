import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getPostFiles () {
    return fs.readdirSync(postsDirectory);
}

export function getPostData(postIdentify) {
    const postSlug = postIdentify.replace(/\.md$/, '');
    const filePath = path.join(postsDirectory, `${postSlug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    const postData = {
        slug: postSlug,
        ...data,
        content: content,
    }

    return postData;
}

export function getAllPosts () {
    const postFiles = getPostFiles();

    const allPosts = postFiles.map(postFile => {
        return getPostData(postFile)
    });

    const sortedPost = allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1);

    return sortedPost;
}

export function getTopicPosts (topic) {
    const allposts = getAllPosts();

    const topicPosts = allposts.filter((post) => post.topics === topic ? post : '');

    return topicPosts
}

export function getFeaturedPosts () {
    const allPosts = getAllPosts();

    const featuredPosts = allPosts.filter(post => post.isFeatured);

    return featuredPosts;
}