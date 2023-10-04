import React from 'react'

export default function Footer() {
  return (
    <div className='justify-center flex flex-row mr-0 pt-12'>
      <p>Tewodros Desta @copyright 2023.</p>
      <div className='flex flex-row justify-between pl-80 pb-4 pr-4'>
        <a href="src/assets/1.png" className='pr-4'><img src="src/assets/1.png" alt="facebook" className='h-8 rounded-lg' /></a>
        <a href="src/assets/1" className='pr-4'><img src="src/assets/2.png" alt="instagram" className='h-8 rounded-lg'/></a>
        <a href="src/assets/1" className='pr-4'><img src="src/assets/3.png" alt="twitter" className='h-8 rounded-lg' /></a>
        <a href="https://github.com/Teddydesta" className='pr-4'><img src="src/assets/4.png" alt="github" className='h-8 rounded-lg' /></a>
      </div>
    </div>
  )
}
