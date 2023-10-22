
function Home() {
  return (
    <section id="home">
      <div className=" h-full w-full items-center justify-center text-center
      p-8 pb-40 pt-20 shadow-md  bg-pack-train bg-gray-800 text-white">
      <h1 className="font-medium text-4xl mb-10">Hi, There I am Tewodros</h1>
      <h1 className="text-4xl mb-12">Junior  Developer</h1>
      <div className="flex justify-center p-8 gap-10">
        <a href="#Contact" className="inline-flex text-white  border-2
         border-green-400 py-2 px-6 focus:outline-none hover:bg-purple-900 rounded text-lg">
                    Work With Me

        </a>
        <a href="#projects" 
        className="inline-flex text-white  border-none hover:bg-sky-700
         py-2 px-6 focus:outline-none bg-sky-500 rounded text-lg">
                    Se My Projects

        </a>

      </div>

    </div>
    </section>
  )
}

export default Home;
