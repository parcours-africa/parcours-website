import Image from 'next/image'
import React from 'react'

function HeadingTitle({title, imageUrl, className}: {title: string, imageUrl: string, className?:string}) {
  return (
    <h1 className='relative w-[200px] lg:min-w-[250px] flex items-center justify-center'>
      <Image className={`${className} absolute -lg:top-5`} src={imageUrl} alt='Heading Illustration' width={300} height={100} />
      {title}
    </h1>
  )
}

export default HeadingTitle
