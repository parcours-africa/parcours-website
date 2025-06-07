import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ButtonPrimary from './ButtonPrimary'

function Footer() {
    return (
        <footer className='flex items-center flex-col gap-5 md:mt-16'>
            <div className="bg-primary flex flex-col items-center justify-center gap-5 w-full px-[5%] min-h-[150px]">
                <div className='flex w-full items-center justify-between'>
                    <Link href="/" className='flex gap-3 h-[40px]'>
                        <Image src={"/logo.png"} alt='Logo Parcours' width={40} height={40} />
                        <h1 className='font-semibold md:text-[30px] content-end '>Parcours</h1>
                    </Link>

                    <nav className='hidden md:flex'>
                        <ul className='flex items-center justify-between gap-5'>
                            <li><Link href="/">Accueil</Link></li>
                            <li><Link href="#features">Fonctionalités</Link></li>
                            <li><Link href="#team">Equipe</Link></li>
                            <li><Link href="#faq">FAQ</Link></li>
                        </ul>
                    </nav>

                    <div className="flex items-center gap-5">
                        <Link href="/"><Image src={"/facebook.png"} alt='Logo Facebook' width={30} height={40} /></Link>
                        <Link href="/"><Image src={"/twitter.png"} alt='Logo Twitter' width={30} height={40} /></Link>
                        <Link href="/"><Image src={"/whatsapp.png"} alt='Logo WhatsApp' width={30} height={40} /></Link>
                        <Link href="/"><Image src={"/linkedin.png"} alt='Logo Linkedin' width={30} height={40} /></Link>
                    </div>
                </div>

                <div className='flex items-center gap-5'>
                    <Link href="/"><ButtonPrimary text='Playstore' icon={"/playstore-icon.png"} /></Link>
                    <Link href="/"><ButtonPrimary text='AppStore' icon={"/appstore-icon.png"} /></Link>
                </div>
            </div>
            <p className='text-primary'>C Copyrights {new Date().getUTCFullYear()} Parcours  All rights reserved.</p>
        </footer>
    )
}

export default Footer
