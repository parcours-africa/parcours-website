import React from 'react'
import ButtonSecondary from './ButtonSecondary'
import FeatureCard from './FeatureCard'
import Link from 'next/link'

const faqData = [
  {
    title: "Comment fonctionne Parcours ?",
    description:
      "Parcours est une plateforme éducative qui vous permet de découvrir des filières, accéder à des cours et trouver les établissements qui correspondent à vos aspirations. Notre algorithme personnalisé vous guide vers les meilleures opportunités en fonction de vos intérêts et objectifs.",
  },
  {
    title: "Est-ce que Parcours est gratuit ?",
    description:
      "Parcours propose une version gratuite donnant accès aux fonctionnalités de base. Une version premium sera disponible pour accéder à des fonctionnalités avancées comme le mentorat personnalisé et les cours approfondis.",
  },
  {
    title: "Quels types de contenus sont disponibles sur Parcours ?",
    description:
      "Vous trouverez des cours en ligne, des guides d'orientation, des témoignages d'étudiants et de professionnels, des fiches métiers détaillées, et des informations sur les établissements d'enseignement.",
  },
]

function FaqSection() {
  return (
    <section id='faq' className='flex flex-col md:flex-row gap-5 md:mt-16 p-5 md:p-0 md:mx-[5%]'>
      <div className="flex flex-col gap-5">
        <h1 className="font-semibold text-[30px] lg:text-[40px]">
          Trouvez des réponses à vos questions
        </h1>
        <p className="opacity-80 text-md/relaxed w-96">
          Consultez nos questions fréquentes pour obtenir rapidement des réponses sur l’utilisation de Parcours, l’accès aux cours et l’orientation.
        </p>
        <div className="flex items-center gap-5">
          <Link href="https://play.google.com/store/apps/details?id=com.phitec.parcours&pcampaignid=web_share" target='_blank' rel='nooper'><ButtonSecondary text="Télécharger l'application" /></Link>
        </div>
      </div>
      <div className="grid grid-cols-1 items-center justify-center gap-5 md:w-[600px]">
        {faqData.map((faq, index) => (
          <FeatureCard
            key={index}
            isFeature2
            className='min-h-[150px] bg-primary/10 rounded-[42px]'
            icon='/info-icon.svg'
            title={faq.title}
            description={faq.description}
          />
        ))}
      </div>
    </section>
  )
}

export default FaqSection
