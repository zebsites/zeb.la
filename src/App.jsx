import {useState} from 'react';
import {useEffect} from "react";
import BlogPosts from './components/BlogPosts';
import Header from "./components/Header.jsx";
import callApi from "./api.js";
import axios from "axios";
import './fonts.css';
import './App.css';

function App() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const options = {
            method: 'GET',
            url: './api/posts'
        }
        axios.request(options).then((response) => {
            console.log(response.data)
            setPosts(response.data.data);
        }).catch((error) => {
            console.error(error);
        })

    }, [])

    return (
        <>
            <Header/>
            <main id="main" className="main">
                <BlogPosts posts={posts}/>
            </main>
        </>
    );
}

export default App
