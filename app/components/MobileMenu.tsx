'use client'
import Link from 'next/link'
import React, { useContext } from 'react'
import ButtonPrimary from './ButtonPrimary'
import Seperator from './Seperator'
import { MenuContext } from './MenuContext'
import { X } from 'lucide-react'

function MobileMenu() {
  const { toogleMenu, setToogleMenu } = useContext(MenuContext)

  return (
    <div className={`transition-all duration-300 ease-in-out transform ${toogleMenu ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0" } md:hidden flex flex-col gap-5 fixed top-0 left-0 min-w-screen min-h-screen bg-primary z-50`}>
      <div onClick={() => setToogleMenu(false)} className='flex items-center justify-center cursor-pointer border-[2px] border-secondary w-10 h-10 rounded-xl mt-10 ml-[85%]'>
        <X />
      </div>

      <nav>
        <ul className='flex flex-col gap-5 items-center justify-between text-secondary'>
          <li><Link href="/">Accueil</Link></li>
          <Seperator />
          <li><Link href="#features">Fonctionalités</Link></li>
          <Seperator />
          <li><Link href="#team">Equipe</Link></li>
          <Seperator />
          <li><Link href="#faq">FAQ</Link></li>
          <Seperator />
        </ul>
      </nav>

      <Link href="/"><ButtonPrimary text='Télécharger' className='w-[300px] mx-auto' /></Link>
    </div>
  )
}

export default MobileMenu
