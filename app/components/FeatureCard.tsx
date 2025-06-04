import Image from 'next/image'
import React from 'react'

interface FeatureCardProps {
    icon: string,
    title: string,
    description: string,
    className?: string,
    isFeature2?: boolean,
}

const FeatureCard: React.FC<FeatureCardProps> = ({icon, title, description, isFeature2, className})=> {
    return (
        <div className={`flex items-center justify-center flex-col p-5 min-h-[100px] ${className}`}>
            <div className="flex items-cente gap-5">
                <Image
                    className={`${isFeature2 === true ? "" : "bg-primary/10"} rounded-md h-[40px] w-[40px]`}
                    src={icon}
                    width={40}
                    height={40}
                    alt='Open-Book-Icon'
                />
                <div className='flex flex-col gap-3'>
                    <h1 className="font-semibold text-[18px]">{title}</h1>
                    <p className='text-white/80'>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FeatureCard
