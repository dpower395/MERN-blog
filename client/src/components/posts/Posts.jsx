import "./posts.css";
import Post from "../post/Post"

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map(function(p) {
        return (
          <Post post={p} key={`${p._id}`}/>
        )
      })}
    </div>
  )
}
