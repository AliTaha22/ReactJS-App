const BlogsList = ({blogs , blogTitle}) => {

    // const blogs = props.sendBlogs;


    return (

        <div className="blog-list">
            <h2>{blogTitle}</h2>

            {blogs.map( (blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written By: {blog.author}</p>
                </div>
            ))}


        </div>


    );
}

export default BlogsList;