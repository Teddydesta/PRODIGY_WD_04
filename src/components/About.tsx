
export default function About() {
  return (
    <section id='About'>
        <div className=' w-full py-20 bg-gray-900 text-white flex justify-center  text-center mx-auto '>
           <center>
           <h1 className="sm:text-4xl text-3xl font-medium title-font  mb-4">About Me</h1>
                   
                   <hr className="bg-indigo-500 md:w-14 h-1 w-8  rounded-full"/>
                     <h1>
                      <h1 className="font-bold text-3xl mb-4">Tewodros Desta</h1>
                    
                  </h1>
                  <p className="mb-8 leading-relaxed text-justify	ml-10 ">
                 
                  I'm a junior full-stack developer with a passion for creating web applications.
                   Proficient in HTML, CSS, and JavaScript, I design and build user-friendly front-end interfaces. 
                   My expertise extends to React.js for dynamic web development and Node.js
                    with Express.js for back-end functionalities, including APIs. 
                    Additionally, I'm well-versed in MongoDB, a NoSQL database, for efficient data management.
                     As a junior developer, I'm eager to continue learning and growing in these technologies, 
                     collaborating on full-stack projects and contributing to the development of responsive and 
                     data-driven web applications. My goal is to become a well-rounded, 
                     capable developer in the ever-evolving tech landscape.
                  </p>
           </center>
            <div className="w-full   ">
              <img src="/static/images/man.png" alt="Hero"
               className="flex sm:hidden md:hidden object-cover object-center 
               transition-all  cursor-pointer  overflow-hidden lg:block"/>

            </div>
        </div>
      
    </section>
  )
}
