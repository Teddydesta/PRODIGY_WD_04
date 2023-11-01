import { projects } from "../data";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
const Projects=()=> {
  return (
    <section id='projects'>
      <div className='bg-gray-800 text-white sm:flex-col   '>
        <div className='flex flex-col  mb-20 text-center items-center'>
        <CodeBracketIcon className="inline-block w-10 mb-4"/>
          <h1 className="sm:text-4xl text-3xl font-medium title-font  ">
            App,I Have Built
          </h1>
         
        </div>
        <div className="flex flex-wrap lg:w-2/3 md:mx-auto  md:justify-center 
      justify-center">
          {
            projects.map((project)=>(
              <div 
                 key={project.image}
                 className="sm:w-1/2 p-4 md:justify-center m:w-1/2">
                  <div className="bg-gray-900 flex  flex flex-col rounded-md shadow-md
                   border-2 border-indigo-900 hover:bg-gray-800">
                    <img src={project.image} alt="Image" className="h-40 p-2  rounded-md w-full" />
               
                    <div className="px-4 py-4   w-full bg-gray-900 text-justify
                    	  rounded-lg text-white hover:bg-gray-800">

                      
                  <h2 className=" text-sm title-font font-medium  mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium  mb-3 text-justify	">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                  <div className="flex justify-center p-8 gap-5 ">
        
                    <a href={project.url} className="inline-flex text-white  border-2 border-green-400
                         focus:outline-none  rounded text-lg hover:bg-purple-900 h-12 w-36 pl-5 ">
                    {project.btn1}

                   </a>
                     <a href={project.github} className="inline-flex text-white  border-2 border-green-400
                   focus:outline-none  rounded text-lg hover:bg-purple-900 w-36 px-5">
                    {project.btn2}

        </a>

      </div>
                </div>

                  </div>

              </div>
            ))
          }

        </div>

      </div>
      
    </section>
  )
}
export default Projects