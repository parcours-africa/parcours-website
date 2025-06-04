import Image from 'next/image'
import React from 'react'
import ButtonSecondary from './ButtonSecondary'

function HeroSection() {
  return (
    <section className='relative flex flex-col md:flex-row md:items-center gap-10 mt-10 p-5 md:mx-[5%]'>

        <div className="flex flex-col gap-5 justify-center md:w-1/2">
            <h1 className="font-semibold text-[30px] md:text-[40px]">
                {"Etudier n'a jamais été aussi facile"}
            </h1>
            <p className="opacity-80 text-md/relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
            <div className="flex flex-col justify-center gap-4 p-3 rounded-xl bg-primary/10 md:w-[480px]">
                <p className='font-semibold'>
                    “Ut enim ad minim veniam, quis nostrud 
                    ullamco laboris nisi ut aliquip”
                </p>
                <h2 className='text-white/80'>Duis aute irure dolor in reprehenderit</h2>
            </div>
            <div className="flex items-center gap-5">
                <ButtonSecondary text='PlayStore' icon='/playstore-icon.png'/>
                <ButtonSecondary text='AppStore' icon='/appstore-icon.png'/>
            </div>
        </div>

        <div className='relative hidden md:block'>
            <Image
                className='border-2 border-primary rounded-4xl'
                src={"/hero-woman.png"}
                width={500}
                height={400}
                alt='Hero Woman Illustration'
            />

            <Image
                className='absolute -top-5 left-1/3 border-[2px] bg-white border-primary rounded-full'
                src={"/book.png"}
                width={40}
                height={40}
                alt='Hero Woman Illustration'
            />
            <Image
                className='absolute top-60 left-120 border-[2px] bg-white border-primary rounded-full'
                src={"/idea.png"}
                width={40}
                height={40}
                alt='Hero Woman Illustration'
            />
            <Image
                className='absolute top-157 left-1/3 border-[2px] bg-white border-primary rounded-full'
                src={"/audio.png"}
                width={40}
                height={40}
                alt='Hero Woman Illustration'
            />
        </div>

        <Image
            className='absolute top-40 md:left-50 lg:left-140 -z-10 hidden lg:block'
            src={"/image-decoration.png"}
            width={700}
            height={30}
            alt='BackGround Decoration'
        />
    </section>
  )
}

export default HeroSection
