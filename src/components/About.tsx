
export default function About() {
  return (
    <section id='About' className="bg-gray-900 text-white sm:flex-col shadow-md justify-between ">
        <div className='container mx-auto flex px-10 py-20  flex-row items-center  '>
           <center>
           <h1 className="sm:text-4xl text-3xlfont-medium title-font  mb-4">About Me</h1>
                   
                   <hr className="bg-green-900 md:w-14 h-1 w-8  rounded-full"/>
                     <h1>
                      <h1 className="font-bold text-3xl mb-4">Tewodros Desta</h1>
                    
                  </h1>
                  <p className="mb-8 leading-relaxed text-justify	 ">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
           </center>
            <div className="container w-full   ">
              <img src="src/assets/man.png" alt="Hero" className="object-cover object-center    transition-all  cursor-pointer  overflow-hidden  sm:hidden  hiden lg:block "/>

            </div>
        </div>
      
    </section>
  )
}
