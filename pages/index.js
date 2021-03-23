

import Layout from '../components/Layout'
import Image from 'next/image'
import SecondSection from '../components/Section_2'
import ThirdSection from '../components/Section_3'
import Form from '../components/Form'

export default function Home() {
  return (
    <Layout page="Lewys x Swiblu">
      <section className="min-h-section bg-orange-bg px-20 rounded-br-section relative z-30">
        <h1 className="text-5xl font-bold uppercase pt-10">Vous voulez créer <br/> votre boutique en ligne&nbsp;?</h1>
        <p className="my-6 w-3/6">On est spécialiste là dedans, ça ne vous coûtera pas un bras et en plus on est sympa&nbsp;!</p>
        <div className="flex flex-row w-1/3 justify-between font-bold">
          <a href="#section2" className="bg-brown-btn py-2 px-8 text-white rounded-xl"> Ça m'interesse !</a>
          <a href="" className="text-brown-btn py-2 px-8">Découvrir les avantages &rsaquo;</a>
        </div>
        <div className="absolute top-8 right-36">
          <Image src="/section_1_2x.png" alt="illustration écran" width="562" height="340"></Image>
        </div>
        {/* <div className="absolute top-6 right-56 w-1/3">
          <img src="/section_1_2x.png" alt="illustration écran" className="w-full"/>
        </div> */}
      </section>
      <SecondSection></SecondSection>
      <ThirdSection></ThirdSection>
      
      <section className="min-h-section flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold">
          Commencez à vendre en ligne !
        </h2>
        <div>
          <Image src="/graphic_2x.png" alt="illustration écran" width="458" height="430"></Image>
        </div>
        <Form></Form>

      </section>
      
    </Layout>
  )
}
