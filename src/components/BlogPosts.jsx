import BlogPost from "./BlogPost.jsx";
import '../assets/BlogPosts.css';
function BlogPosts ({posts}) {
    const renderedPosts = posts.map((post) => {
        return <BlogPost post={post} key={post.id} />
    });
    return(
        <div className="blog-posts">
            {renderedPosts}
        </div>
    );
}

export default BlogPosts;