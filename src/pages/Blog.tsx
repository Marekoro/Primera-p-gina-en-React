import { useEffect,useState } from "react";
import axios from "axios";

interface Blog {
  title: string;
  content: string;
  date: string;
}

function Blog() {

    const [blogs, setBlogs] = useState<Blog[]>([]);

    

    useEffect(() => {
    document.title = "Liwen - Blog"; // Nuevo título
    axios
      .get("http://localhost:3000/blog")
      .then((res) => {setBlogs(Array.isArray(res.data) ? res.data : []);
})
      .catch((err) => console.log(err));
    },[])


    return (
    <div className="pl-6 pt-6 whitespace-pre-line">
        <p>Blog: {blogs.length === 0 ? "La base de datos no tiene datos o no esta activada, para activarla ejecute ./src/pages/leven.js y/o reinicie la pagina": ""}</p>

        {blogs.map((blog, index) => (

        <div className="grid grid-cols-3 p-8" key={index}>
          <div className="row-span-3 rounded-l-lg h-[10vh] border-y-4 border-l-4 border-indigo-500 border-double flex items-center justify-center bg-[url(/src/assets/logo.png)] bg-center outline-3 break-words">{blog.title}</div> 
          <div className="col-span-2 bg-blue-800 rounded-tr-lg h-[5vh] border-t-4 border-r-4 border-indigo-500 border-double flex items-center justify-center outline-3 break-words">{blog.content}</div>
          <div className="col-span-2 bg-teal-400 rounded-br-lg h-[5vh] border-r-4 border-b-4 border-indigo-500 border-double flex items-center justify-center outline-3 break-words">{blog.date}</div>
        </div>

        
      ))}
    </div>
  );
}

export default Blog;
