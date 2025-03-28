import GitHub from "../assets/github-white.svg";
import X from "../assets/x.svg";
import Instagram from "../assets/instagram.svg";

export default function Landing() {
  return (
      <div className="relative h-full flex flex-col justify-center items-center text-[#cdcdcd] bg-[#4e4e4e] pt-6 pb-6">

        <p>© Marekoro. Todos los derechos reservados. </p>

        <div className="flex gap-6">
          <a href="https://github.com/Marekoro" target="_blank" rel="noopener noreferrer">
            <img src={X} alt="Logo de X (Twitter)" className="w-[35px] h-auto filter invert" />
          </a>
          <a href="https://github.com/Marekoro" target="_blank" rel="noopener noreferrer">
            <img src={Instagram} alt="Logo de Instagram" className="w-[35px] h-auto filter invert" />
          </a>
          <a href="https://github.com/Marekoro" target="_blank" rel="noopener noreferrer">
            <img src={GitHub} alt="Logo de GitHub" className="w-[35px] h-auto" />
          </a>
        </div>
        

      </div>
  );
}
