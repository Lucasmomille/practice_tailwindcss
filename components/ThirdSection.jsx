import Image from "next/image";

export default function ThirdSection(){
    return (
    <section className="min-h-section95 rounded-tl-section items-center bg-orange-bg pt-12">
        <h2 className="text-center text-2xl">A propos de <br/> <span className="font-bold text-3xl">nous</span> </h2>
        <article className="flex flex-row justify-between mx-20 mt-16">
          <div className="flex flex-col w-1/3 transform scale-95 space-y-4">
            <div className="flex flex-row items-center">
              <h3 className="text-xl font-bold mr-6">Lewys</h3>
              <Image src="/logo_lewys_png.png" alt="logo Lewys" width="70" height="59"></Image>
            </div>
            
            <p>
            Lewys est une agence spécialisée dans les domaines du numérique.
            </p>
            <p>
            Nous créons pour vous une solution web complète et sur-mesure pour que votre
            site vous apporte visibilité et valeur ajouté.
            </p>
            <p>
            Notre équipe est composée d’experts indépendants pour vous accompagner et
            développer votre site web, valoriser votre 
            image de marque, améliorer votre
            référencement sur Google et augmenter
            vos opportunités commerciales.
            </p>
            <p>Lewys est un ouistiti, c’est le plus petit des singes, il est très agile, jovial, 
            il vit en communauté et n'arrête jamais de parler.
            </p>
          </div>

          <div className="flex flex-col w-1/3 transform scale-95 justify-center items-center">
            <Image src="/section_1_2x.png" alt="illustration" width="300" height="250"></Image>
          </div>

          <div className="flex flex-col w-1/3 transform scale-95 space-y-4">
            <div className="flex flex-row items-center">
              <h3 className="text-xl font-bold mr-6">Swiblu</h3>
              <Image src="/logo_SWIBLU_2x.png" alt="logo Lewys" width="70" height="59"></Image>
            </div>
            
            <p>
            Lewys est une agence spécialisée dans les domaines du numérique.
            </p>
            <p>
            Nous créons pour vous une solution web complète et sur-mesure pour que votre
            site vous apporte visibilité et valeur ajouté.
            </p>
            <p>
            Notre équipe est composée d’experts indépendants pour vous accompagner et
            développer votre site web, valoriser votre 
            image de marque, améliorer votre
            référencement sur Google et augmenter
            vos opportunités commerciales.
            </p>
            <p>Lewys est un ouistiti, c’est le plus petit des singes, il est très agile, jovial, 
            il vit en communauté et n'arrête jamais de parler.
            </p>
          </div>

        </article>
      </section>
      )
}