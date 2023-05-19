import { useState, useEffect } from "react";
import axios from "axios";
import { PostsNew } from './PostsNew';
import { PostsIndex } from "./PostsIndex";
import { PostsShow } from "./PostsShow";
import { Signup } from "./Signup"
import { Login } from "./Login";
import { LogoutLink } from "./Logout";
import { Modal } from "./Modal";
import { Routes, Route } from "react-router-dom";
import { About } from "./About";

export function Content() {
  const [posts, setPosts] = useState([])
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState({});

  const handleIndexPosts = () => {
    //console.log('in handle index posts')
    // make my web request to api
    axios.get('http://localhost:3000/posts.json').then(response => {
      //console.log(response.data);
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
        // take everything that's in posts and add response.data
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
    const handleDestroyPost = (postId) => {
      console.log('handling destroy post')
      axios.delete(`http://localhost:3000/posts/${postId}.json`).then(response => {
        console.log(response.data);
        // posts.select {|post| post.id != post_id}
        setPosts(posts.filter(post => post.id != postId))
      })
    }
  return (
    <div className="container">
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/posts/new" element={<PostsNew onCreatePost={handleCreatePost} />} />

      <Route path="/" element={<PostsIndex posts={posts} onShowPost={handleShowPost}/>} />
    </Routes>

    <LogoutLink/>
    <br />
    {/* <button onClick={handleIndexPosts}>Get data</button> */}
    <PostsIndex posts={posts} onShowPost={handleShowPost}/>
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <PostsShow post ={currentPost}onUpdatePost={handleUpdatePost} onDestroyPost={handleDestroyPost} />
      </Modal>
  
  </div>

  )
}