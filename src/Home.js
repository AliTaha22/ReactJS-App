import { useState } from "react";
import BlogsList from "./BlogsList";


const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: "My new Website", body: "lorem ipsum . . . .", author: "Pudge", id: 1 },
        {title: "Patch 7.3d", body: "lorem ipsum . . . .", author: "Mirana", id: 2 }, 
        {title: "Web dev tips", body: "lorem ipsum . . . .", author: "mario", id: 3 },  ]);

    return ( 
        <div className="home">
            <BlogsList sendBlogs = {blogs}/>
        </div>
     );
}
 
export default Home;