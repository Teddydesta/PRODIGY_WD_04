
function Home() {
  return (
    <section id="home">
      <div className=" h-full w-full items-center justify-center text-center
      p-8 pb-40 pt-20 shadow-md  bg-pack-train bg-gray-800 text-white">
      <h1 className="font-medium text-4xl mb-10">Hi, There I am Tewodros</h1>
      <h1 className="text-4xl mb-12">Junior  Developer</h1>
      <div className="flex sm:flex-col justify-center gap-12 p-8 ">
        <a href="#Contact" className="inline-flex text-white  border-2 text-center
         border-green-400  px-6 focus:outline-none hover:bg-purple-900 rounded text-lg">
                    Work With Me

        </a>
        <a href="#projects" 
        className="inline-flex text-white  border-none  text-center 
         py-2 px-6 focus:outline-none bg-blue-500  hover:bg-blue-700 rounded text-lg">
                    Se My Projects

        </a>

      </div>

    </div>
    </section>
  )
}

export default Home;
