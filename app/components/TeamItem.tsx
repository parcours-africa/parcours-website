import React from 'react'

interface TeamCardProps {
  name: string,
  position: string,
  imageUrl: string
}

const TeamItem: React.FC<TeamCardProps> = ({name, imageUrl, position})=> {
  return (
    <div className={`relative border-[1px] border-secondary h-[400px] bg-accent w-full lg:h-[300px] lg:w-[230px] rounded-3xl bg-no-repeat bg-center bg-cover`} style={{ backgroundImage: `url('${imageUrl}')`}}>
        <div className="h-[70px] flex flex-col p-5 cursor-pointer hover:border-b-2 justify-center items-start w-full absolute bottom-0  rounded-2xl border-2 border-b-6 border-secondary ">
            <h1 className='font-semibold'>{name}</h1>
            <h3 className='font-semibol'>{position}</h3>
        </div>
    </div>
  )
}

export default TeamItem
