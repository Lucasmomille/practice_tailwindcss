
import Layout from '../components/Layout'
import Image from 'next/image'

export default function Home() {
  return (
    <Layout page="Lewys x Swiblu">
      <section className="h-section bg-orange-bg px-20 rounded-br-section relative z-30">
        <h1 className="text-5xl font-bold uppercase pt-10">Vous voulez créer <br/> votre boutique en ligne&nbsp;?</h1>
        <p className="my-6 w-3/6">On est spécialiste là dedans, ça ne vous coûtera pas un bras et en plus on est sympa&nbsp;!</p>
        <div className="flex flex-row w-1/3 justify-between font-bold">
          <a href="#section2" className="bg-brown-btn py-2 px-8 text-white rounded-xl"> Ça m'interesse !</a>
          <a href="" className="text-brown-btn py-2 px-8">Découvrir les avantages &rsaquo; </a>
        </div>
        <div className="absolute top-8 right-36">
          <Image src="/section_1_2x.png" alt="illustration écran" width="562" height="340"></Image>
        </div>
        {/* <div className="absolute top-6 right-56 w-1/3">
          <img src="/section_1_2x.png" alt="illustration écran" className="w-full"/>
        </div> */}
      </section>
      <section className="h-section95 text-center flex flex-col" id="section2">
        <h2 className="text-5xl font-bold mb-12 pt-20">Pourquoi nous faire confiance&nbsp;?</h2>
        <article className="flex md:flex-row flex-col items-center justify-between mx-6 mt-28">
          <figure className="flex flex-col items-center w-1/3 transform scale-95">
            <div>
              <Image src="/section_1_2x.png" alt="illustration" width="200" height="150"></Image>
            </div>
            <figcaption className="space-y-4 mt-4">
              <h3 className="text-xl">Sites e-commerce compatible mobile</h3>
              <p>Pour vendre sur le web avec une flexibilité sur tous les supports</p>
            </figcaption>
          </figure>
          <figure className="flex flex-col items-center w-1/3 transform scale-95">
            <div>
              <Image src="/section_1_2x.png" alt="illustration" width="200" height="150"></Image>
            </div>
            <figcaption className="space-y-4 mt-4">
              <h3 className="text-xl">Mise en avant et référencement</h3>
              <p>Pour transformez vos visiteurs en clients et être visible sur Google</p>
            </figcaption>
          </figure>
          <figure className="flex flex-col items-center w-1/3 transform scale-95">
            <div>
              <Image src="/section_1_2x.png" alt="illustration" width="200" height="150"></Image>
            </div>
            <figcaption className="space-y-4 mt-4">
              <h3 className="text-xl">Suivi et analyse</h3>
              <p> Parce que vous méritez qu’on soit dévoué à votre projet</p>
            </figcaption>
          </figure>
        </article>
      </section>
      <section className="h-section95 rounded-tl-section items-center bg-orange-bg pt-12">
        <h2 className="text-center text-2xl">A propos de <br/> <span className="font-bold text-3xl">nous</span> </h2>
        <article className="flex flex-row justify-between"></article>
      </section>
      <section className="h-section">

      </section>
      
    </Layout>
  )
}
