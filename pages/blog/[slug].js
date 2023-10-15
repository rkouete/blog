import { getPostData, getPostFiles } from '../../lib/post-utils';
import PostContent from '../../components/post-detail/post-content';
import PostTags from '../../components/post-detail/post-tags';

function postDetails(props) {
  const { post } = props;

  return (
    <article>
        <PostContent post={post}/>
    </article>
  )
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const postData = getPostData(slug);

  return {
    props: {
      post: postData
    },
    revalidate: 600
  }
}

export function getStaticPaths() {
  const postFilenames = getPostFiles();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ''))

  return {
    paths: slugs.map(slug => ({ params: { slug: slug }})),
    fallback: false
  };
}

export default postDetails
