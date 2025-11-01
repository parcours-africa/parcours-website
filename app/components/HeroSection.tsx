import Image from 'next/image'
import React from 'react'
import ButtonSecondary from './ButtonSecondary'
import Link from 'next/link'
import HeadingTitle from './HeadingTitle'

function HeroSection() {
    return (
        <section id='hero' className='relative flex flex-col md:flex-row md:items-center gap-10 mt-10 p-5 mx-[5%]'>

            <div className="flex flex-col gap-5 justify-center md:w-1/2">
                <h1 className="font-semibold text-[30px] lg:text-[50px]">
                    <h1>{"Etudier n'a jamais "}</h1>
                    <span className='flex gap-3'>été aussi <HeadingTitle imageUrl='/heading.png' title='facile'/> </span>
                </h1>
                <p className="opacity-80 text-md/relaxed">
                    Accédez à des cours, explorez les filières et trouvez des établissements en quelques clics.
                </p>
                <div className="flex flex-col justify-center gap-4 p-3 rounded-xl bg-primary/10 lg:w-[480px]">
                    <p className='font-semibold'>
                        Des contenus interactifs et accessibles, même hors ligne, pour avancer selon mes besoins.
                    </p>
                    <h2 className='text-white/80'>“Apprendre n’a jamais été aussi simple.”</h2>
                </div>
                <div className="flex items-center gap-5">
                    <Link href="https://play.google.com/store/apps/details?id=com.phitec.parcours&pcampaignid=web_share" target='_blank' rel="noopener noreferrer"><ButtonSecondary text='Playstore' icon={"/playstore-icon.png"} /></Link>
                    <Link href="https://play.google.com/store/apps/details?id=com.phitec.parcours&pcampaignid=web_share" target='_blank' rel="noopener noreferrer"><ButtonSecondary text='AppStore' icon={"/appstore-icon.png"} /></Link>
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
                    className='absolute md:-bottom-5 lg:top-157 left-1/3 border-[2px] bg-white border-primary rounded-full'
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
