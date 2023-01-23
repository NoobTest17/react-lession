import React, {useRef, useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: "JavaScript", body: "язык прораммироваия"},
    {id: 2, title: "JavaScript 2", body: "язык прораммироваия"},
    {id: 3, title: "JavaScript 3", body: "язык прораммироваия"},
    {id: 4, title: "JavaScript 4", body: "язык прораммироваия"},
  ])
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


  return (
    <div className="App">
      <PostForm create={createPost}/>
      <PostList remove={removePost} posts={posts} title={"Посты про JS"}/>
    </div>
  );
}

export default App;
