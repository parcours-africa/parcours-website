import React from 'react'
import ButtonSecondary from './ButtonSecondary'
import FeatureCard from './FeatureCard'

function FaqSection() {
    return (
        <section className='flex flex-col md:flex-row gap-5 md:mt-16 p-5 md:p-0 md:mx-[5%]'>
            <div className="flex flex-col gap-5">
                <h1 className="font-semibold text-[30px] md:text-[40px]">
                    Trouvez des répnses à vos questions
                </h1>
                <p className="opacity-80 text-md/relaxed w-96">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="flex items-center gap-5">
                    <ButtonSecondary text="Télécharger l'application" />
                </div>
            </div>
            <div className="grid grid-cols-1 items-center justify-center gap-5 md:w-[600px]">
                <FeatureCard isFeature2 className='min-h-[150px] bg-primary/10 rounded-[42px]' icon='/info-icon.svg' title='Ut enim ad minim veniam' description='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. ' />
                <FeatureCard isFeature2 className='min-h-[150px] bg-primary/10 rounded-[42px]' icon='/info-icon.svg' title='Ut enim ad minim veniam' description='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. ' />
                <FeatureCard isFeature2 className='min-h-[150px] bg-primary/10 rounded-[42px]' icon='/info-icon.svg' title='Ut enim ad minim veniam' description='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. ' />
            </div>
        </section>
    )
}

export default FaqSection
