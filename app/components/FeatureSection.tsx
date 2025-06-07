import React from 'react'
import ButtonSecondary from './ButtonSecondary'
import FeatureCard from './FeatureCard'
import Link from 'next/link'

function FeatureSection() {
    return (
        <section id='features' className='flex flex-col md:flex-row gap-5 md:mt-16 p-5 md:p-0 mx-[5%] md:h-[500px]'>
            <div className="flex flex-col gap-5">
                <h1 className="font-semibold text-[30px] md:text-[40px]">
                    Lorem ipsum dolor sitame
                </h1>
                <p className="opacity-80 text-md/relaxed w-96">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="flex items-center gap-5">
                    <Link href="/"><ButtonSecondary text='Playstore' icon={"/playstore-icon.png"} /></Link>
                    <Link href="/"><ButtonSecondary text='AppStore' icon={"/appstore-icon.png"} /></Link>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-5 lg:h-[400px]">
                <FeatureCard isFeature2 className='min-h-[200px] bg-primary/10 rounded-[42px]' icon='/book-open.svg' title='Ut enim ad minim veniam' description='Lorem ipsum dolor sit amet, consectetur  adipiscing elit' />
                <FeatureCard isFeature2 className='min-h-[200px] bg-primary/10 rounded-[42px]' icon='/book-open.svg' title='Ut enim ad minim veniam' description='Lorem ipsum dolor sit amet, consectetur  adipiscing elit' />
                <FeatureCard isFeature2 className='min-h-[200px] bg-primary/10 rounded-[42px]' icon='/book-open.svg' title='Ut enim ad minim veniam' description='Lorem ipsum dolor sit amet, consectetur  adipiscing elit' />
                <FeatureCard isFeature2 className='min-h-[200px] bg-primary/10 rounded-[42px]' icon='/book-open.svg' title='Ut enim ad minim veniam' description='Lorem ipsum dolor sit amet, consectetur  adipiscing elit' />
            </div>
        </section>
    )
}

export default FeatureSection
