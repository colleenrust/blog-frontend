import { useState, useEffect } from "react";
import axios from "axios";
import { PostsNew } from './PostsNew';
import { PostsIndex } from "./PostsIndex";
import { PostsShow } from "./PostsShow";
import { Signup } from "./Signup"
import { Login } from "./Login";
import { LogoutLink } from "./Logout";
import { Modal } from "./Modal";

export function Content() {
  const [posts, setPosts] = useState([])
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState({});

  const handleIndexPosts = () => {
    console.log('in handle index posts')
    // make my web request to api
    axios.get('http://localhost:3000/posts.json').then(response => {
      console.log(response.data);
      // post = response.data
      setPosts(response.data);

    })
  }
    useEffect(handleIndexPosts,[]);
    const handleShowPost = (myPost) => {
      console.log(myPost)
      setIsPostsShowVisible(true);
    };
  
    const handleClose = () => {
      setIsPostsShowVisible(false);
    };
  return (
    <div className="container">
    <Login/>
    <Signup/>
    <PostsNew />
    <LogoutLink/>
    <br />
    <button onClick={handleIndexPosts}>Get data</button>
    <PostsIndex posts={posts} onShowPost={handleShowPost}/>
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <PostsShow post ={currentPost}/>
      </Modal>
  </div>

  )
}