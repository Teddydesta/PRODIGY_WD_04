import { projects } from "../data";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
const Projects=()=> {
  return (
    <section id='projects' className=' body-font '>
      <div className='container bg-gray-800 text-white px-5 py-10 mx-auto text-center lg:px-40'>
        <div className='flex flex-col w-full mb-20 text-center items-center'>
        <CodeBracketIcon className="inline-block w-10 mb-4"/>
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 ">
            App,I Have Built
          </h1>
         
        </div>
        <div className="flex flex-wrap lg:w-2/3 sm:mx-auto sm:mb-2 -mx-4 justify-center  ">
          {
            projects.map((project)=>(
              <a href={project.url}
                 key={project.image}
                 className="sm:w-1/2  w-50 p-4 ">
                  <div className="bg-gray-900 flex  flex flex-col rounded-md shadow-md
                   border-2 border-green-400 hover:bg-gray-700">
                    <img src={project.image} alt="Image" className="hover:bg-gray-700 h-full p-4" />
               
                    <div className="px-8 py-10 hover:bg-gray-700  w-full bg-gray-900 text-justify
                    	  rounded-lg text-white">

                      
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
        <a href="#" className="inline-flex text-white  border-2 border-green-400
         focus:outline-none  rounded text-lg hover:bg-purple-900 w-36 px-5">
                    {project.btn2}

        </a>

      </div>
                </div>

                  </div>

              </a>
            ))
          }

        </div>

      </div>
      
    </section>
  )
}
export default Projects