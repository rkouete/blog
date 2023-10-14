import PostGrid from "../../components/blog/post-grid";
import PostHead from "../../components/blog/post-head";
import { getAllPosts } from "../../lib/post-utils";

function blogPage(props) {
  return (
    <div className="p-4 md:p-10">
      <PostHead />
      <PostGrid items={props.posts}/>
    </div>
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