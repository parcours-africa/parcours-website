import Image from 'next/image'
import React from 'react'
import ButtonSecondary from './ButtonSecondary'

function HeroSection() {
  return (
    <section className='relative flex items-center gap-10 mt-10 p-5 mx-[5%]'>

        <div className="flex flex-col gap-5 justify-center w-1/2">
            <h1 className="font-semibold text-2xl md:text-[50px]">
                {"Etudier n'a jamais été aussi facile"}
            </h1>
            <p className="opacity-80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
            <div className="flex flex-col justify-center gap-4 p-5 rounded-xl bg-primary/10">
                <p className='font-semibold opacity-100'>
                    “Ut enim ad minim veniam, quis nostrud 
                    ullamco laboris nisi ut aliquip”
                </p>
                <h2>Duis aute irure dolor in reprehenderit</h2>
            </div>
            <div className="flex items-center gap-5">
                <ButtonSecondary text='PlayStore' icon='/playstore-icon.png'/>
                <ButtonSecondary text='AppStore' icon='/appstore-icon.png'/>
            </div>
        </div>

        <div className='relative'>
            <Image
                className='border-2 border-primary rounded-4xl'
                src={"/hero-woman.png"}
                width={500}
                height={400}
                alt='Hero Woman Illustration'
            />
        </div>

        <Image
            className='absolute top-40 left-140 -z-10'
            src={"/image-decoration.png"}
            width={700}
            height={320}
            alt='BackGround Decoration'
         />
    </section>
  )
}

export default HeroSection
