import {useState} from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import getPosts from './api.js';
import BlogPosts from './components/BlogPosts';
import {useEffect} from "react";

function App() {
    const [posts, setPosts] = useState([]);
    const loadPosts = async () => {
       const result = await getPosts();
        setPosts(result)
    }
    useEffect(()=> {
        loadPosts();
    } ,[])

    return (
       <div>
           <BlogPosts posts={posts} />
       </div>
    );
}

export default App
