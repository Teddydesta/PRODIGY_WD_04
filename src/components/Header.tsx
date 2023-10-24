import { useState } from "react";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
   
    <div className="flex items-center  
     justify-between text-white bg-gray-900 border-b border-green-800  py-6 sticky top-0 fixed">
      
      <a href="#home">
        <img src="src/assets/logo.png" alt="logo"
        className="rounded-full h-12 ml-10" />
      </a>

      
      <nav>
        <section className="MOBILE-MENU flex lg:hidden bg-gray-900 cursor-pointer">
          <div
            className="HAMBURGER-ICON space-y-2 "
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-100"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-100"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-100"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav" }>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-100 cursor-pointer"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col  items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8  hover:text-green-400">
                <a href="/About">About</a>
              </li>
              <li className="border-b border-gray-400 my-8  hover:text-green-400">
                <a href="/projects">Projects</a>
              </li>
              <li className="border-b border-gray-400 my-8  hover:text-green-400">
                <a href="/Contact">Contact</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden  space-x-8 lg:flex mr-10 ">
          <li className="hover:text-green-400 hover:text-green-400 
          border-2 border-green-500 rounded-md w-24 p-2 text-center">
            <a href="#About">About</a>
          </li>
          <li className="hover:text-green-400 hover:text-green-400
           border-2 border-green-500 rounded-md w-24 p-2 text-center">
            <a href="#projects">projects</a>
          </li>
          <li className="hover:text-green-400 hover:text-green-400 
          border-2 border-green-500 rounded-md w-24 p-2 text-center">
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background-color: rgb(17 24 39);
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
 
  );
}
