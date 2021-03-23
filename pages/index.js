

import Layout from '../components/Layout'
import Image from 'next/image'
import SecondSection from '../components/Section_2'
import ThirdSection from '../components/Section_3'
import Form from '../components/Form'

export default function Home() {
  return (
    <Layout page="Lewys x Swiblu">
      <section className="md:min-h-section bg-orange-bg md:px-20 px-4 text-center md:text-left md:rounded-br-section relative z-30 w-full">
        <h1 className="md:text-5xl text-lg font-bold uppercase pt-10">Vous voulez créer <br/> votre boutique en ligne&nbsp;?</h1>
        <p className="my-6 md:w-3/6 w-5/6 inline-block">On est spécialiste là dedans, ça ne vous coûtera pas un bras et en plus on est sympa&nbsp;!</p>
        <div className="flex flex-col mx-auto md:flex-row w-5/6 md:w-auto justify-between md:justify-start font-bold space-y-6 md:space-y-0 md:space-y-0 mt-12 md:mt-0">
          <a href="#section4" className="bg-brown-btn py-2 px-8 text-white rounded-xl"> Ça m'interesse !</a>
          <a href="#section2" className="text-brown-btn py-2 px-8">Découvrir les avantages &rsaquo;</a>
        </div>
        <div className="md:absolute md:top-8 md:right-36 p-6 md:p-0">
          <Image src="/section_1_2x.png" alt="illustration écran" width="562" height="340"></Image>
        </div>
        {/* <div className="absolute top-6 right-56 w-1/3">
          <img src="/section_1_2x.png" alt="illustration écran" className="w-full"/>
        </div> */}
      </section>
      <SecondSection></SecondSection>
      <ThirdSection></ThirdSection>
      
      <section className="md:min-h-section w-full flex flex-col items-center justify-center" id="section4">
      <div className="relative bg-transparent my-12 rounded-3xl flex flex-col items-center text-center md:w-border">
        <h2 className="md:text-4xl text-xl font-bold bg-transparent z-30">
          Commencez à vendre en ligne !
        </h2>
        <div className=" w-full bg-orange-bg h-test rounded-2xl -mt-4 z-10"></div>
      </div>
       
        <div className="mb-16">
          <Image src="/graphic_2x.png" alt="illustration écran" width="308" height="280"></Image>
        </div>
        <Form></Form>

      </section>
      
    </Layout>
  )
}
