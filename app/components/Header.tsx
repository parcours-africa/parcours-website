'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { MenuContext } from './MenuContext'
import MobileMenu from './MobileMenu'
import ButtonPrimary from './ButtonPrimary'
import { AlignJustify } from 'lucide-react'

function Header() {
  const [toogleMenu, setToogleMenu] = useState(false)

  return (
    <MenuContext.Provider value={{ toogleMenu, setToogleMenu }}>
      <header className='flex items-center justify-between max-w-screen relative bg-primary h-[60px]  px-5 rounded-xl mx-[5%] md:sticky top-5 z-20'>
        <Link href="/">
          <Image src={"/logo.png"} alt='Logo Parcours' width={40} height={40} />
        </Link>

        <nav className='hidden md:flex'>
          <ul className='flex items-center justify-between gap-5'>
            <li><Link href="#Home">Accueil</Link></li>
            <li><Link href="#Home">Fonctionalités</Link></li>
            <li><Link href="#Home">Equipe</Link></li>
            <li><Link href="#Home">FAQ</Link></li>
          </ul>
        </nav>

        <ButtonPrimary className='hidden md:flex' text='Télécharger' icon={"/logo.png"} />

        <div onClick={() => setToogleMenu(true)} className='flex md:hidden items-center justify-center cursor-pointer border-[2px] border-secondary w-10 h-10 rounded-xl'>
          <AlignJustify />
        </div>

        <MobileMenu />
      </header>
    </MenuContext.Provider>
  )
}

export default Header
