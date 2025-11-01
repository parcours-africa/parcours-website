import Image from 'next/image'
import React from 'react'
import FeatureCard from './FeatureCard'
import HeadingTitle from './HeadingTitle'

function OverViewSection() {
    return (
        <section className='flex items-center flex-col lg:flex-row gap-5 md:mt-16 p-5 pb-0 mx-[5%] lg:border-2 border-primary rounded-xl lg:h-[500px]'>
            <Image
                className='h-full'
                src={"/app-mockup.png"}
                width={500}
                height={500}
                alt='App Mockup Illustration'
            />

            <div className='flex flex-col gap-5'>
                <h1 className="font-semibold text-[30px] lg:text-[40px]">
                    <h1 className='flex items-center gap-5'>Parcours<span className='flex gap-3'><HeadingTitle imageUrl='/heading.png' title='transforme' /></span></h1>
                    <h1>votre apprentissage</h1>
                </h1>
                <div className="flex flex-col md:flex-row items-center justify-center md:w-[600px]">
                    <FeatureCard icon='/book-open.svg' title='Apprenez à votre rythme' description='Accédez à des cours audio et texte, avec des quiz interactifs pour progresser selon votre vitesse.' />
                    <FeatureCard icon='/book-open.svg' title='Apprentissage hors ligne' description='Téléchargez vos cours et documents pour continuer à apprendre même sans connexion Internet.' />
                </div>
            </div>
        </section>
    )
}

export default OverViewSection
