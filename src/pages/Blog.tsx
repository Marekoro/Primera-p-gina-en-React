import { useEffect} from "react";

function Blog() {

    const blogs = [
        { titulo: "Primer blog", contenido: "Blog de prueba",link: "/about-us" },
        { titulo: "Primer blog", contenido: "Blog de prueba",link: "/about-us" },
        ];

    useEffect(() => {
    document.title = "Liwen - Blog"; // Nuevo título
    },[])


    return (
    <div className="pl-6 pt-6 whitespace-pre-line">
        <p className="text-black">Blog:</p>

        {blogs.map((blog, index) => (

        <div className="grid grid-flow-col grid-rows-3 p-8" key={index}>
          <div className="row-span-3 bg-amber-200">{blog.titulo}</div>
          <div className="col-span-2 bg-blue-800">{blog.contenido}</div>
          <div className="col-span-2 bg-teal-400">{blog.link}</div>
        </div>
      ))}
    </div>
  );
}

export default Blog;
