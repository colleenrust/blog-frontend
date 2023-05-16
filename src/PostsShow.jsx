export function PostsShow(props){
  console.log(props.post)
  return(
    <div>
     <p><b>user_id:</b>{currentPost.user_id}</p>
        <p><b>title:</b>{currentPost.title}</p>
        <p><b>body:</b>{currentPost.body}</p>
        <p><b>image:</b>{currentPost.image}</p>
        <p><b>created_at:</b>{currentPost.created_at}</p>
    </div>


  )


}