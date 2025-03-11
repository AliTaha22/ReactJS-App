const BlogsList = (props) => {

    const blogs = props.sendBlogs;


    return ( 
            blogs.map( (blog) => (

                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written By: {blog.author}</p>

                </div>

            ))

     );
}
 
export default BlogsList;