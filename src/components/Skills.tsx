import React from 'react'
import {skills} from '../data'
//import { BadgeCheckIcon } from "@heroicons/react/solid";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import { CheckBadgeIcon } from '@heroicons/react/20/solid';


const Skills=()=> {
  return (
    <section id='skills 	'>
      <div className='container px-5 py-10 mx-auto bg-gray-900 text-white '>
        <div className='mb-20 text-center'>
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
        <div className='flex flex-wrap lg:w-2/3 sm:mx-auto sm:mb-2 -mx-4 justify-center'>
          {skills.map((skill)=>(
            <div className='p-2 sm:w-1/2 w-full'>
              <div className='bg-gray-800 rounded-md flex flex-row p-4 h-full items-center hover:bg-gray-500 cursor-pointer'>
              <CheckBadgeIcon className="inline-block w-10 fill-white mb-0 pr-4  justify-center rounded-full flex-shrink-0 " />
              <span className='title-font font-medium text-white'>
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










