
function Home() {
  return (
    <section id="home">
      <div className=" w-full items-center justify-center text-center
       pb-40 pt-20 shadow-md  bg-gray-800 text-white">
      <h1 className="font-medium text-4xl mb-10">Hi, There I am Tewodros</h1>
      <h1 className="text-4xl mb-12">Junior  Developer</h1>

      <div className=" justify-center  sm:flex-col md:flex-col sm:p-4 ">
        <a href="#Contact" className="inline-flex text-white py-2 px-6 border-2 text-center
        border-green-400  px-6 focus:outline-none hover:bg-purple-900 rounded text-lg">
                    Work With Me
        </a>
        <a href="#projects" 
        className="inline-flex text-white py-2 px-6 border-2 text-center
        border-green-400  px-6 focus:outline-none hover:bg-purple-900 rounded text-lg">
                    Se My Projects

        </a>

      </div>

    </div>
    </section>
  )
}

export default Home;
