
export default function About() {
  return (
    <section id='About text-gray-900 shadow-md'>
        <div className='container mx-auto flex px-10 py-20 mid:flex-col flex-row items-center font-sans'>
            <div className='lg:flex-grow md:m-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md-16 md:mb-0 justify-center-center text-center'>
                <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-bold'>
                    <p>About Me</p>
                   </h1>
                   <center className="pb-4 pt-4"> <hr className="bg-green-900 md:w-14 h-1 w-8 justify-center"/></center>
                   <h1>
                    <h1 className="font-bold text-3xl">Tewodros Desta</h1>
                  
                </h1>
                <p className="mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
                Laborum, voluptas natus?
                </p>
                <div className="flex justify-center">
                  <a href="#contact" className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                    Work With Me

                  </a>

                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img src="src/assets/teddy.jpg" alt="Hero" className="object-cover object-center rounded-full w-30  h-30 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0  "/>

            </div>
        </div>
      
    </section>
  )
}
