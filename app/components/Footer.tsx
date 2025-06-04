import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <footer className='flex flex-col md:flex-row gap-5 md:mt-16'>
            <div className="bg-primary flex items-center justify-between w-full px-[5%] min-h-[150px]">
                <Link href="/" className='flex gap-3 items-end'>
                    <Image src={"/logo.png"} alt='Logo Parcours' width={40} height={40} />
                    <h1 className='font-semibold text-[30px] justify-start items-end hidden md:block'>Parcours</h1>
                </Link>

                <nav className='hidden md:flex'>
                    <ul className='flex items-center justify-between gap-5'>
                        <li><Link href="#Home">Accueil</Link></li>
                        <li><Link href="#Home">Fonctionalités</Link></li>
                        <li><Link href="#Home">Equipe</Link></li>
                        <li><Link href="#Home">FAQ</Link></li>
                    </ul>
                </nav>

                <div className="flex items-center gap-5">
                    <Image src={"/logo.png"} alt='Logo Parcours' width={30} height={40} />
                    <Image src={"/logo.png"} alt='Logo Parcours' width={30} height={30} />
                    <Image src={"/logo.png"} alt='Logo Parcours' width={30} height={30} />
                    <Image src={"/logo.png"} alt='Logo Parcours' width={30} height={30} />
                </div>
            </div>
        </footer>
    )
}

export default Footer
