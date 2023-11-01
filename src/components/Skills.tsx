import {skills} from '../data'
//import { BadgeCheckIcon } from "@heroicons/react/solid";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import { CheckBadgeIcon } from '@heroicons/react/20/solid';


const Skills=()=> {
  return (
    <section id='skills'>
      <div className='bg-gray-900 text-white shadow-md  '>
        <div className='mb-10 text-center'>
          <CodeBracketIcon className="inline-block w-10 mb-4"/>
          <h1 className='sm:text-4xl text-3xlfont-medium title-font  mb-4'>
            Skills &amp; Technologies

          </h1>
          {/* <p className='text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
            ipsa delectus eum quo voluptas aspernatur accusantium distinctio
            possimus est.
          </p> */}

        </div>
        <div className='grid lg:grid-cols-4 col-start-2 gap-4 pb-10
       px-10 justify-center md:w-full sm:w-full'>
          {skills.map((skill)=>(
            <div className=' border-2 border-indigo-900 rounded-lg '>
              <div className='bg-gray-900 rounded-md flex flex-row  py-14 justify-center  items-center hover:bg-gray-500 cursor-pointer'>
              <CheckBadgeIcon className="inline-block w-10 fill-white  pr-4   rounded-full flex-shrink-0 " />
              <span className='title-font font-bold text-white'>
              {skill}

              </span>

              </div>

            </div>

          ))}

        </div>
        
      </div>

    </section>
  )
}


export default Skills










