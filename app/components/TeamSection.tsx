import React from 'react'
import TeamItem from './TeamItem'

function TeamSection() {
    return (
        <section className='flex justify-center flex-col md:flex-row gap-5 md:mt-16 p-5 text-secondary bg-primary md:h-[500p]'>
            <div className='flex items-center flex-col gap-3 text-center'>
                <h1 className="font-semibold text-[30px] md:text-[40px]">Une équipe  soudée</h1>
                <p className='md:w-[80%] text-center'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                </p>
                <div className='grid grid-cols-1 md:grid-cols-4 items-center justify-between gap-5 md:gap-20 mt-5 w-full'>
                    <TeamItem name='John Doe' position='CEO' imageUrl='/member-image.png'/>
                    <TeamItem name='John Doe' position='CEO' imageUrl='/member-image.png'/>
                    <TeamItem name='John Doe' position='CEO' imageUrl='/member-image.png'/>
                    <TeamItem name='John Doe' position='CEO' imageUrl='/member-image.png'/>
                </div>
            </div>
        </section>
    )
}

export default TeamSection
