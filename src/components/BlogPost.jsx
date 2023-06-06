function BlogPost ({post}) {
    return(
      <div className="blog-post">
          <h3>{post.attributes.Title}</h3>
          <p>{post.attributes.PostContent}</p>
      </div>
    );
}

export default BlogPost;