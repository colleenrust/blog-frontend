export function PostsNew() {
  const handleSubmit=(event) =>{
    event.preventDefault();
    console.log('handling submit');
    const params = new FormData(event.target);
    props .onCreatePost(params)
    console.log('handling boink');
    window.location.href = "/";

    
  }
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form onSubmit={handleSubmit}>          
        <div>
          Title: <input name= "title" type="text" />
        </div>
        <div>
          Body: <input name= "body"type="text" />
        </div>
        <div>
          Image: <input name= "image" type="text" />
        </div>
        <button type="submit">Create post</button>
      </form>
    </div>
  )
}