import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ButtonPrimary from './ButtonPrimary'

function Header() {
  return (
    <header className='flex items-center justify-between max-w-screen bg-primary h-[65px] px-5 rounded-xl mx-[5%]'>

        <Link href="/">
            <Image
            src={"/logo.png"}
            alt='Logo Parcours'
            width={40}
            height={40}
            />
        </Link>
        
        <nav>
            <ul className='flex items-center  justify-between gap-5'>
                <li className='hover:font-bold duration-200 transi'>
                    <Link href="#Home">Accueil</Link>
                </li>
                <li className='hover:font-bold duration-200 transition-all'>
                    <Link href="#Home">Fonctionalités</Link>
                </li>
                <li className='hover:font-bold duration-200 transition-all'>
                    <Link href="#Home">Equipe</Link>
                </li>
                <li className='hover:font-bold duration-200 transition-all'>
                    <Link href="#Home">FAQ</Link>
                </li>
            </ul>
        </nav>
        
        <ButtonPrimary text='Télécharger' icon={"/logo.png"}/>
    </header>
  )
}

export default Header
