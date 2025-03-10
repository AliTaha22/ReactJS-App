import { useState } from "react";


const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: "My new Website", body: "lorem ipsum . . . .", author: "Pudge", id: 1 },
        {title: "Patch 7.3d", body: "lorem ipsum . . . .", author: "Mirana", id: 2 }, 
        {title: "Web dev tips", body: "lorem ipsum . . . .", author: "mario", id: 3 },  ]);

    return ( 
        <div className="home">

            {blogs.map( (blog) => (

                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written By: {blog.author}</p>

                </div>

            ))}

        </div>
     );
}
 
export default Home;