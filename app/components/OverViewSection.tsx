import Image from 'next/image'
import React from 'react'
import FeatureCard from './FeatureCard'

function OverViewSection() {
    return (
        <section className='flex items-center flex-col md:flex-row gap-5 md:mt-16 p-5 pb-0 md:mx-[5%] md:border-2 border-primary rounded-xl md:h-[500px]'>
            <Image
                className='h-full'
                src={"/app-mockup.png"}
                width={500}
                height={500}
                alt='App Mockup Illustration'
            />

            <div className='flex flex-col gap-5'>
                <h1 className="font-semibold text-[30px] md:text-[40px]">Parcours  transforme l’apprentissage</h1>
                <div className="flex flex-col md:flex-row items-center justify-center md:w-[600px]">
                    <FeatureCard icon='/book-open.svg' title='Ut enim ad minim veniam' description='Lorem ipsum dolor sit amet, consectetur  adipiscing elit' />
                    <FeatureCard icon='/book-open.svg' title='Ut enim ad minim veniam' description='Lorem ipsum dolor sit amet, consectetur  adipiscing elit' />
                </div>
            </div>
        </section>
    )
}

export default OverViewSection
