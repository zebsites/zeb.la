import {useState} from 'react';
import Sidebar from "./components/Sidebar.jsx";
import Index from "./components/Index.jsx";
import Contact from "./components/Contact.jsx";
import Writings from "./components/Writings.jsx";
import Resume from "./components/Resume.jsx";
import Photos from "./components/Photos.jsx";
import './fonts.css';
import './App.css';

/*import callApi from "./api.js";
import ModeToggle from "./components/ModeToggle.jsx";
import {useEffect} from "react";
import BlogPosts from './components/BlogPosts';
import axios from "axios";*/

function App() {
    /* const [posts, setPosts] = useState([]);
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

     }, [])*/

    const [content, setContent] = useState(<Index/>);

    const handleNavClick = () => {
        function fade() {
            document.getElementById('main').classList.add('fade');
            setTimeout(() => {
                document.getElementById('main').classList.remove('fade');
            }, 1000)
        }

        if (event.target.dataset.href === 'index') {
            fade()
            setTimeout(() => {
                setContent(<Index/>);
            }, 500)
        }
        if (event.target.dataset.href === 'contact') {
            fade()
            setTimeout(() => {
                setContent(<Contact/>);
            }, 500)
        }
        if (event.target.dataset.href === 'writings') {
            fade()
            setTimeout(() => {
                setContent(<Writings/>);
            }, 500)
        }
        if (event.target.dataset.href === 'photos') {
            fade()
            setTimeout(() => {
                setContent(<Photos/>);
            }, 500)
        }
        if (event.target.dataset.href === 'resume') {
            fade()
            setTimeout(() => {
                setContent(<Resume/>);
            }, 500)
        }
    }


    return (
        <>
            <div id="leftDecoration"></div>
            <div id="rightDecoration"></div>
            <div id="topDecoration"></div>
            <div id="bottomDecoration"></div>
            {/*<ModeToggle/>*/}
            <Sidebar handleNavClick={handleNavClick}/>
            <main id="main" className="main">
                {/*<BlogPosts posts={posts}/>*/}
                <section className="content">
                    {content}
                </section>

            </main>
        </>
    );
}

export default App
