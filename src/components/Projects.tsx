import { DiTerminal } from "react-icons/Di";
import { projects } from "../data";
const Projects=()=> {
  return (
    <section id='projects' className='text-gray-900 bg-gray-100 body-font shadow-md'>
      <div className='container px-5 py-10 mx-auto text-center lg:px-40'>
        <div className='flex flex-col w-full mb-20'>
          <DiTerminal className='mx-auto inline-block w-10 mb-4'>
          </DiTerminal>
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 ">
            App,I Have Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.

          </p>
        </div>
        <div className="flex flex-wrap -m-2">
          {
            projects.map((project)=>(
              <a href={project.url}
                 key={project.image}
                 className="sm:w-1/2 w-50 p-4">
                  <div className="flex relative flex flex-row">
                    <img src={project.image} alt="Gallery" className=" justify-center absolute inset-0 w-full h-full object-cover object-center" /> 
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900  hover:bg-gray-700 rounded-lg text-white">

                      
                  <h2 className="tracking-widest text-sm title-font font-medium  mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium  mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
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