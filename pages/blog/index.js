import PostGrid from "../../components/blog/post-grid";
import MOCK_DATA from "../../mock-data.json";

function blogPage() {
  return (
    <div className="p-4 md:p-10">
      <h1 className="text-4xl md:text-5xl mb-10 text-center font-bold">Learn more with this blog.</h1>
      <PostGrid items={MOCK_DATA}/>
    </div>
  )
}

export default blogPage
