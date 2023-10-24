import {links} from '../data'

const Navbar=()=> {
  return (
    <nav className="bg-gray-900 text-white border-gray-200 dark:bg-gray-900
     shadow-md justify-between sticky top-0 fixed h-20 pb-4">
  <div className="max-w-screen-xl flex flex-row items-center justify-between mx-auto ">
    <a href="#home" className="flex items-center justify-center">
        <img src="src/assets/logo.png" className=" rounded-full h-20 p-4 " alt="Logo" />
       
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  
   
      <div className="hidden w-full sm:block md:w-auto" id="navbar-default">

      {links.map((link)=>(
        <a href={link.url}
        data-te-smooth-scroll-init

        className="justify-between pr-4 pl-4 scroll-smooth   hover:text-blue-600 font-bold ">{link.title}</a>
      ))}
      </div>
      
    </div>

</nav>
      
  
  )
}
export default Navbar
