import logo from "../assets/Logo.png";
import { useState, useEffect } from 'react';


function NavigationBar() {
    const [isOpen, setIsOpen] = useState(false);

    const paginas = [
      { nombre: "Sobre Nosotros", link: "/about-us" },
      { nombre: "Misarege", link: "/misarege" },
      { nombre: "Chistes", link: "/chistes" },
      { nombre: "Blog", link: "/blog"},
    ];
  
    const [query, setQuery] = useState("");
    const [touched, setTouched] = useState(false);
    const [ac_index, set_AcIndex] = useState(0);
    const relu = (x : number) => x < 0 ? 0 : x;

    const paginasFiltradas = paginas.filter((pagina) =>
      pagina.nombre.toLowerCase().includes(query.toLowerCase())
    );
    useEffect(() => {
      const keyHandler = (event: KeyboardEvent) => {
        if (!touched) return;
    
        if (event.key === "ArrowDown") {
          set_AcIndex((prevIndex) => {
            // Evita exceder el límite de páginas
            if (prevIndex >= paginas.length - 1) return prevIndex;
            return relu(prevIndex + 1);
          });
        } else if (event.key === "ArrowUp") {
          set_AcIndex((prevIndex) => relu(prevIndex - 1));
        } else if (event.key === "Enter") {
          set_AcIndex((currentIndex) => {
            // Redirige solo si la página filtrada existe
            if (paginasFiltradas[currentIndex]) {
              window.location.href = paginasFiltradas[currentIndex].link;
            }
            return currentIndex;
          });
        }
        else if (event.key === "Escape") {
          setTouched(false);
          set_AcIndex(0);
        }
      };
    
      const clickHandler = () => {
        if (touched) {
          setTouched(false);
          set_AcIndex(0);
        }
      };
    
      document.addEventListener("click", clickHandler);
      document.addEventListener("keydown", keyHandler);
    
      // Cleanup: elimina los event listeners al desmontar o cambiar dependencias
      return () => {
        document.removeEventListener("click", clickHandler);
        document.removeEventListener("keydown", keyHandler);
      };
    }, [touched, paginas, paginasFiltradas]);
    

    
    return (
      <nav className="bg-gray-900 text-white min-h-[38px]  w-full mx-auto shadow-lg ">
        <div className="flex items-center gap-2 pr-1 justify-between">
          
          {/* Logo */}
          <a href="/" className="hover:bg-gray-800 rounded-lg h-1/1 pl-3">
            <img src={logo}  className="w-[12vh] h-auto"/>
          </a>

          <div className="hidden md:flex min-w-[28vw] max-w-[40vw] ">
            <a href="/about-us" className="flex-1 hover:bg-gray-800 transition text-center hover:text-gray-400 cursor-pointer font-bold text-[18px] text-white p-2 rounded-lg" style={{ textDecoration: 'none' }}>
              Sobre nosotros
            </a>
            <a href="/misarege" className="flex-1 hover:bg-gray-800 transition text-center hover:text-gray-400 cursor-pointer font-bold text-[18px] text-white p-2 rounded-lg" style={{ textDecoration: 'none' }}>
              Misarege
            </a>
            <a href="/chistes" className="flex-1 hover:bg-gray-800 transition text-center hover:text-gray-400 cursor-pointer font-bold text-[18px] text-white p-2 rounded-lg" style={{ textDecoration: 'none' }}>
              Chistes
            </a>
            <a href="/blog" className="flex-1 hover:bg-gray-800 transition text-center hover:text-gray-400 cursor-pointer font-bold text-[18px] text-white p-2 rounded-lg" style={{ textDecoration: 'none' }}>
              Blog
            </a>
          </div>
            
          
          {/* Search */}
          <div className="flex gap-2 justify-end static ">

            <input
              type="text"
              placeholder="Search"
              className="bg-gray-800 text-white px-1 py-1 rounded-lg border border-gray-700 focus:outline-none hover:bg-gray-600 hover:text-white transition max-w-3/4"
              value={query}
              onChange={(e) => {setQuery(e.target.value);
                setTouched(true);
              }}
              onClick={() => {setTimeout(() => {
                setTouched(true);
              }, 1);}}
            />

            {touched && (
              <div className="absolute w-full mt-5 rounded-lg shadow-lg max-w-60 bg-white">
                {paginasFiltradas.length > 0 ? (
                  paginasFiltradas.map((pagina, index) => (
                    <div key={index} onMouseEnter={() => ac_index !== index && set_AcIndex(index)}>
                      <a href={pagina.link}   className={`block w-full  font-bold p-2 ${index === ac_index ? 'text-gray-500 bg-amber-200 rounded-lg' : 'text-black'}`} style={{ textDecoration: 'none' }}>
                        {pagina.nombre} 
                      </a>
                    </div>
                  ))
                ) : (
                  <div className=" text-gray-500">No se encontraron resultados</div>
                )}
              </div>
            )}

            <button className=" rounded border bg-gray-800 ">
              Search
            </button>
            
          </div>
  
          {/* Mobile Menu */}
          <button
            className="md:hidden text-gray-400"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
  
        {/* Dropdown en móviles */}
            {isOpen && (
            <ul className="md:hidden mt-1 space-y-1 flex flex-col list-disc">
                <li><a href="/about-us" className=" hover:bg-gray-800 transition  hover:text-gray-400 cursor-pointer font-bold text-[18px] text-white p-1 rounded-lg" style={{ textDecoration: 'none' }}>Sobre nosotros </a></li>
                <li><a href="/misarege" className=" hover:bg-gray-800 transition  hover:text-gray-400 cursor-pointer font-bold text-[18px] text-white p-1 rounded-lg" style={{ textDecoration: 'none' }}>Misarege</a></li>
                <li><a href="/chistes" className=" hover:bg-gray-800 transition hover:text-gray-400 cursor-pointer font-bold text-[18px] text-white p-1 rounded-lg" style={{ textDecoration: 'none' }}>Chistes </a></li>
                <li className="pb-1"><a href="/blog" className=" hover:bg-gray-800 transition hover:text-gray-400 cursor-pointer font-bold text-[18px] text-white p-1 rounded-lg" style={{ textDecoration: 'none' }}>Blog </a></li>
            </ul>
            )}
      </nav>
    );
  }

export default NavigationBar;