export function PostsIndex(props) {
  // console.log(props.posts);
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      {props.posts.map(post => (
        <div key={post.id} className="posts">
          <h2>{post.title}</h2>
          <img src={post.image} alt="" />
          <p>Body: {post.body}</p>
          <button onClick={()=>{props.onShowPost(post)}}>More info</button>      
            </div>  
      ))}
      
    </div>
  )
}