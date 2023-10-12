import PostGrid from "../../components/blog/post-grid";
import { getAllPosts } from "../../lib/post-utils";

function blogPage(props) {
  return (
    <div className="p-4 md:p-10">
      <h1 className="text-4xl md:text-5xl mb-10 text-center font-bold">Learn more with this blog.</h1>
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
