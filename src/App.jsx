import { useState } from "react";

function Header() {
  return (
    <header>
      <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
    </header>
  )
}
function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form>          
        <div>
          Title: <input type="text" />
        </div>
        <div>
          Body: <input type="text" />
        </div>
        <div>
          Image: <input type="text" />
        </div>
        <button type="submit">Create post</button>
      </form>
    </div>
  )
}

function PostsIndex(props) {
  console.log(props.posts);
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      {props.posts.map(post => (
        <div key={post.id} className="posts">
          <h2>{post.title}</h2>
          <img src={post.image_url} alt="" />
          <p>Body: {post.body}</p>
          <button>More info</button>
        </div>  
      ))}
      
    </div>
  )
}

function Footer() {
  return (
    <footer>
      <p>Copyright 2022</p>
    </footer>
  )
}

function Content() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "I love my dog",
      body: "he is the best dog ever",
      image_url: "https://freesvg.org/img/lemmling_Cartoon_dog.png",
    },
    {
      id: 2,
      title: "Bad Weather",
      body: "The weather is so bad where I live and trees keep falling down",
      image_url:
        "https://www.arborcare.com/wp-content/uploads/2020/10/fallen_tree.jpeg",
    },
    {
      id: 3,
      title: "Power Outage",
      body: "Last night I played trivia with my pals in the dark because the power went out.",
      image_url:
        "https://c8.alamy.com/comp/E93N0M/finnegans-wake-irish-pub-restaurant-305-south-avenue-springfield-missouri-E93N0M.jpg",
    },
  ])
  return (
    <div>
      <PostsNew />
      <PostsIndex posts={posts}/>
    </div>

  )
}
function App() {
  return (
    <div>      
      <Header />
      <Content />   
      <Footer />   
    </div>
  );
}
export default App;
