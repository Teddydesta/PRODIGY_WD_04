import {links} from '../data'


const Navbar=()=> {
  return (
    <nav className="bg-gray-900 border-white dark:bg-gray-900 shadow-md">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="/" className="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
       
    </a>
  
   
      <div className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

      {links.map((link)=>(
        <a href={link.url} className="flex py-2 pl-3 pr-4  bg-blue-700 rounded text-white font-bold md:bg-transparent md:text-white-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">{link.title}</a>

      ))}
      </div>
      
    </div>

</nav>
      
  
  )
}
export default Navbar
