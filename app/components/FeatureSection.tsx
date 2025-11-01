import React from "react";
import ButtonSecondary from "./ButtonSecondary";
import FeatureCard from "./FeatureCard";
import Link from "next/link";

function FeatureSection() {
  return (
    <section
      id="features"
      className="flex flex-col md:flex-row gap-5 md:mt-16 p-5 md:p-0 mx-[5%] md:h-[500px]"
    >
      <div className="flex flex-col gap-5">
        <h1 className="font-semibold text-[30px] md:text-[40px]">
          Des outils essentiels pour réussir votre parcours.
        </h1>
        <p className="opacity-80 text-md/relaxed w-96">
          Découvrez toutes les fonctionnalités pour apprendre efficacement,
          choisir votre filière et trouver l’établissement qui vous correspond.
        </p>
        <div className="flex items-center gap-5">
          <Link
            href="https://play.google.com/store/apps/details?id=com.phitec.parcours&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ButtonSecondary text="Playstore" icon={"/playstore-icon.png"} />
          </Link>
          <Link
            href="https://play.google.com/store/apps/details?id=com.phitec.parcours&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ButtonSecondary text="AppStore" icon={"/appstore-icon.png"} />
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-5 lg:h-[400px]">
        <FeatureCard
          isFeature2
          className="min-h-[200px] bg-primary/10 rounded-[42px]"
          icon="/book-open.svg"
          title="Apprenez à votre rythme"
          description="Accédez à des leçons audio et texte avec des quiz interactifs. Progressez efficacement selon votre propre rythme."
        />
        <FeatureCard
          isFeature2
          className="min-h-[200px] bg-primary/10 rounded-[42px]"
          icon="/book-open.svg"
          title="Toutes les filières au bout des doigts"
          description="Consultez toutes les filières d’enseignement supérieur en un seul endroit. Trouvez facilement la voie qui vous correspond."
        />
        <FeatureCard
          isFeature2
          className="min-h-[200px] bg-primary/10 rounded-[42px]"
          icon="/book-open.svg"
          title="Trouvez votre établissement"
          description="Repérez rapidement les écoles et universités proches de chez vous grâce à la géolocalisation. Gagnez du temps dans vos recherches."
        />
        <FeatureCard
          isFeature2
          className="min-h-[200px] bg-primary/10 rounded-[42px]"
          icon="/book-open.svg"
          title="Apprentissage hors ligne"
          description="Téléchargez vos cours et documents pour apprendre sans connexion Internet. L’éducation reste accessible partout."
        />
      </div>
    </section>
  );
}

export default FeatureSection;
