import { useEffect} from "react";

function Blog() {

    const blogs = [
        { titulo: "Primer blog", contenido: "Blog de prueba",link: "/about-us" },
        { titulo: "Primer blog", contenido: "Blog de prueba",link: "/about-us" },
        { titulo: "Dante", contenido: "Lorem Ipsum",link: "/" },
        ];

    useEffect(() => {
    document.title = "Liwen - Blog"; // Nuevo título
    },[])


    return (
    <div className="pl-6 pt-6 whitespace-pre-line">
        <p className="text-black">Blog:</p>

        {blogs.map((blog, index) => (

        <div className="grid grid-cols-3 p-8" key={index}>
          <div className="row-span-3 rounded-l-lg h-[10vh] border-y-4 border-l-4 border-indigo-500 border-double flex items-center justify-center bg-[url(/src/assets/logo.png)] bg-center outline-3">{blog.titulo}</div> 
          <div className="col-span-2 bg-blue-800 rounded-tr-lg h-[5vh] border-t-4 border-r-4 border-indigo-500 border-double flex items-center justify-center outline-3">{blog.contenido}</div>
          <div className="col-span-2 bg-teal-400 rounded-br-lg h-[5vh] border-r-4 border-b-4 border-indigo-500 border-double flex items-center justify-center outline-3 ">{blog.link}</div>
        </div>

        
      ))}
    </div>
  );
}

export default Blog;
