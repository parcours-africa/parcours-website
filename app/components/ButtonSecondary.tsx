import Image from 'next/image'
import React from 'react'

interface ButtonSecondaryProps{
    text: string,
    icon?: string,
    className?: string
}

const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({text, icon, className})=>{
  return (
    <button className={`bg-secondary text-primary flex items-center justify-center gap-3 cursor-pointer duration-200 hover:scale-90 transition-all p-4 border-2 border-primary min-w-[120px] max-h-[40px] rounded-full ${className}`}>
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

export default ButtonSecondary
