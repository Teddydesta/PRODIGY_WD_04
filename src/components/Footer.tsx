
export default function Footer() {
  return (
    <div className=' bg-gray-900 text-white md:flex-col '>
         <hr className='w-full  bg-green-900'/>
      <div className='justify-center flex flex-row mr-0 pt-12'>
      <p>@copyright 2023. Tewodros Desta</p>
      <div className='flex flex-row justify-between pl-80 pb-4 pr-4'>
        <a href="https://www.facebook.com/login/" className='pr-4'><img src="src/assets/1.png" alt="facebook" className='h-8 rounded-lg' /></a>
        <a href="https://www.instagram.com/accounts/login/" className='pr-4'><img src="src/assets/insta.jpg" alt="instagram" className='h-8 rounded-lg'/></a>
        <a href="https://twitter.com/tdy_2000" className='pr-4'><img src="src/assets/x.jpg" alt="twitter" className='h-8 rounded-lg' /></a>
        <a href="https://github.com/Teddydesta" className='pr-4'><img src="src/assets/github.png" alt="github" className='h-8 rounded-lg' /></a>
       
      </div>
      </div>
   
      
    </div>
  )
}
