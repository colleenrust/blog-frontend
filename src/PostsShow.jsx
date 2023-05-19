import axios from "axios"
export function PostsShow(props){
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePost(props.post.id, params);

    console.log('handling submit');
  }
  const handleClick = () =>{
    console.log('handling click')
    props.onDestroyPost(props.post.id)

  }
  return(
    <div>
     <p><b>user_id:</b>{props.user_id}</p>
        <p><b>title:</b>{props.title}</p>
        <p><b>body:</b>{props.body}</p>
        <img src={props.image} alt=""/>
        <p><b>created_at:</b>{props.created_at}
      </p>
    
      <form onSubmit={handleSubmit}>
      <p> Title: <input name= "title" type="text" defaultValue={props.post.title}/></p>
        <p>Body: <input name= "body"type="text" defaultValue={props.post.body}/></p>
        <p>Image: <input name= "image" type="text" defaultValue={props.post.image}/>
        </p>
        <button type="input">Update post</button>
      </form>
      <br />
      <br />
      <button onClick={handleClick}>Delete post</button>
    
    </div>


  )

}