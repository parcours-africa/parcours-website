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
                        <Link href="https://www.facebook.com/profile.php?id=61568105789200" target='_blankk'><Image src={"/facebook.png"} alt='Logo Facebook' width={30} height={40} /></Link>
                        <Link href="https://x.com/ParcoursBj" target='_blank'><Image src={"/twitter.png"} alt='Logo Twitter' width={30} height={40} /></Link>
                        <Link href="https://www.whatsapp.com/channel/0029VayBSC8F1YlYeqSnn63O" target='_blank'><Image src={"/whatsapp.png"} alt='Logo WhatsApp' width={30} height={40} /></Link>
                        <Link href="https://www.linkedin.com/company/my-parcours/" target='_blank'><Image src={"/linkedin.png"} alt='Logo Linkedin' width={30} height={40} /></Link>
                    </div>
                </div>

                <div className='flex items-center gap-5'>
                    <Link href="https://play.google.com/store/apps/details?id=com.phitec.parcours&pcampaignid=web_share" target='_blank' rel="noopener noreferrer"><ButtonPrimary text='Playstore' icon={"/playstore-2.png"} /></Link>
                    <Link href="https://play.google.com/store/apps/details?id=com.phitec.parcours&pcampaignid=web_share" target='_blank' rel="noopener noreferrer"><ButtonPrimary text='AppStore' icon={"/appstore-2.png"} /></Link>
                </div>
            </div>
            <p className='text-primary'> Copyright {new Date().getUTCFullYear()} Parcours - Tous droits réservés.</p>
        </footer>
    )
}

export default Footer
