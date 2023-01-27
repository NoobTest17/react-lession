import React, {useMemo, useRef, useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: "1JavaScript", body: "4язык прораммироваия"},
    {id: 2, title: "2JavaScript 2", body: "3язык прораммироваия"},
    {id: 3, title: "3JavaScript 3", body: "2язык прораммироваия"},
    {id: 4, title: "4JavaScript 4", body: "1язык прораммироваия"},
  ])
  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts
  }, [selectedSort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [searchQuery, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <div>
        <MyInput
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Поиск..."
        />
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка по"
          option={[
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По описанию'},
          ]}
        />
      </div>
      {sortedAndSearchedPosts.length !== 0
        ? <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Посты про JS"}/>
        :
        <h1 style={{textAlign: 'center'}}>
          Посты не были найдены
        </h1>
      }
    </div>
  );
}

export default App;
