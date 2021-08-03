

import Layout from '../components/Layout'
import Image from 'next/image'
import SecondSection from '../components/Section_2'
import ThirdSection from '../components/Section_3'
import Form from '../components/Form'

export default function Home() {
  return (
    <Layout page="Presentation">
      <section className="md:min-h-section bg-orange-bg md:px-20 px-4 text-center md:text-left md:rounded-br-section relative z-30 w-full">
        <h1 className="md:text-4xl text-lg font-bold uppercase pt-10">Présentation <br /> avec un formulaire mailgun</h1>
        <p className="my-6 md:w-3/6 w-5/6 inline-block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque laboriosam quia nihil&nbsp;!</p>
        <div className="flex flex-col mx-auto md:flex-row w-5/6 md:w-auto justify-between md:justify-start font-bold space-y-6 md:space-y-0 md:space-y-0 mt-12 md:mt-0">
          <a href="#section4" className="bg-brown-btn py-2 px-8 text-white rounded-xl"> Ça m'interesse !</a>
          <a href="#section2" className="text-brown-btn py-2 px-8">Découvrir les avantages &rsaquo;</a>
        </div>
        <div className="md:absolute md:top-8 md:right-36 p-6 md:p-0">
          <Image src="/logo.png" alt="illustration écran" width="562" height="340"></Image>
        </div>
      </section>
      <SecondSection></SecondSection>
      <ThirdSection></ThirdSection>

      <section className="md:min-h-section w-full flex flex-col items-center justify-center" id="section4">
        <div className="relative bg-transparent my-12 rounded-3xl flex flex-col items-center text-center md:w-border">
          <h2 className="md:text-4xl text-xl font-bold bg-transparent z-30">
            Simple mais efficace
          </h2>
          <div className=" w-full bg-orange-bg h-test rounded-2xl -mt-4 z-10"></div>
        </div>
        <p>
          Allez voir sur mon <a href="" className="font-bold">github</a> pour visualiser le code. <br />
          Par contre le formulaire ne peut fonctionner qu'avec un compte mailgun et un nom de domaine !
        </p>

        <div className="mb-16">
          <Image src="/logo.png" alt="illustration écran" width="308" height="280"></Image>
        </div>
        <Form></Form>

      </section>

    </Layout>
  )
}
