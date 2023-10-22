import {FaFacebookF,FaGithub,FaLinkedin,FaTwitter} from 'react-icons/fa'
export default function Footer() {
  return (
    <div className=' bg-gray-900 text-white  '>
         <hr className='w-full border border-green-700 '/>
      <div className='justify-center flex flex-row  pt-12 pb-4 
      sm:items-center justify-between  mx-auto px-10'>
      <p>@copyright 2023. Tewodros Desta</p>
      <div className='flex flex-row   gap-10  pb-4 pr-4'>
      <a href="https://www.facebook.com/Tedydesta2000">
        <FaFacebookF className="stroke-2"></FaFacebookF>
        </a>
        <a href="https://github.com/Teddydesta">
          <FaGithub></FaGithub>
          </a>
        <a href="linkedin.com/in/tewodros-desta-581ba1215">
          <FaLinkedin></FaLinkedin>
          </a>
        <a href="https://twitter.com/tdy_2000">
          <FaTwitter></FaTwitter>
          </a>
      </div>
      </div>

    </div>
    
  )
}

