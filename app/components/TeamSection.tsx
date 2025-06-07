import React from 'react'
import TeamItem from './TeamItem'
import HeadingTitle from './HeadingTitle'

function TeamSection() {
    return (
        <section id='team' className='flex justify-center flex-col md:flex-row gap-5 md:pt-16 p-5 text-secondary bg-primary md:h-[500p]'>
            <div className='flex items-center flex-col gap-10 text-center'>
                <h1 className='font-semibold text-[30px] md:text-[40px] flex items-center gap-5'>Une équipe<span className='flex gap-3'><HeadingTitle imageUrl='/heading-2.png' title='soudée' /></span></h1>
                <p className='md:w-[80%] text-center'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-between gap-5 md:gap-20 mt-5 w-full'>
                    <TeamItem name='John Doe' position='CEO' imageUrl='/member-image.png' />
                    <TeamItem name='John Doe' position='CEO' imageUrl='/member-image.png' />
                    <TeamItem name='John Doe' position='CEO' imageUrl='/member-image.png' />
                    <TeamItem name='John Doe' position='CEO' imageUrl='/member-image.png' />
                </div>
            </div>
        </section>
    )
}

export default TeamSection
