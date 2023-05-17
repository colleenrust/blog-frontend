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
      setCurrentPost(myPost)
    };
  
    const handleClose = () => {
      console.log('close modal')
      setIsPostsShowVisible(false);
    };
    const handleCreatePost = (params) => {
      axios.post('http://localhost:3000/posts.json', params).then(response => {
        console.log(response.data);
        // take everything that's in recipes and add response.data
        setPosts([...posts, response.data])
      })
      console.log('handling create post')
    }
    const handleUpdatePost = (postId, params) => {
      console.log('handling update post...');
      axios.patch(`http://localhost:3000/posts/${postId}.json`, params).then(response => {
        console.log(response.data);
        setPosts(
          posts.map(post => {
            if (post.id === response.data.id) {
              return response.data;
            } else {
              return post;
            }
          })
        )
        setIsPostsShowVisible(false);
  
      })
    }
  return (
    <div className="container">
    <Login/>
    <Signup/>
    <PostsNew />
    <LogoutLink/>
    <br />
    {/* <button onClick={handleIndexPosts}>Get data</button> */}
    <PostsIndex posts={posts} onShowPost={handleShowPost}/>
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <PostsShow post ={currentPost}onUpdatePost={handleUpdatePost} />
      </Modal>
  </div>

  )
}