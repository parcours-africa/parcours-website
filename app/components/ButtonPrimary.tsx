import Image from 'next/image'
import React from 'react'

interface ButtonPrimaryProps{
    text: string,
    icon?: string,
    className?: string
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({text, icon, className})=>{
  return (
    <button className={`bg-primary flex items-center justify-center gap-3 cursor-pointer duration-200 hover:scale-90 transition-all p-4 border border-b-8 border-t-2 min-w-[120px] max-h-[45px] border-secondary rounded-full ${className}`}>
         {icon ? <Image
            width={20}
            height={20}
            src={icon}
            alt='Button Icone'
        /> : null}
        {text}
    </button>
  )
}

export default ButtonPrimary
