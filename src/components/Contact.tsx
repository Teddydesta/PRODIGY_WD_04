import React from 'react'

const Contact=()=> {
  return (
    <section id='contact ' className='shadow-md bg-gray-100 h-full w-full dark:text-gray-400 py-10 '>
      <div className='container mx-auto flex flex-wrap flex-col pl-10'>
       <center>
       <h1 className='font-medium font-title font-bold text-4xl'>
          Hire Me
        </h1>
        <p className='leading-relaxed items-center justify-center w-1/2' >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
                Laborum, voluptas natus?
        </p>
       </center>
        <div className='flex flex-row justify-between shadow-md ml-20 mr-20 mt-10 mb-10'>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img src="src/assets/hero.png" alt="Hero" className="object-cover object-center rounded-full w-30  h-30 transition-all duration-300 cursor-pointer    "/>

            </div>
          <form action="" 
          className='flex flex-wrap flex-col pt-4 pb-4  mx-auto w-full ml-40 mr-10'
          >
           
            <label htmlFor="" className='font-bold'>FULL NAME</label>
            <input type="name" className='border rounded border-gray-500 h-10'/>
            <label htmlFor="" className='font-bold'>EMAIL</label>
            <input type="Email" className='border rounded border-gray-500 h-10'/>
            <label htmlFor="" className='font-bold'>MESSAGE</label>
            <textarea name="" id="" className='border rounded border-gray-500 h-24'></textarea>
            <button className='border rounded-lg h-10 mt-4 bg-green-500 text-gray-900 font-bold font-title'>Send Message</button>


          </form>
         

        </div>
      
     
      </div>

    </section>
  )
}

export default Contact
