import Image from "next/image";

export default function SecondSection(){
    return (
        <section className="md:min-h-section95 w-full text-center flex flex-col items-center" id="section2">
        <div className="relative bg-transparent my-12 rounded-3xl flex flex-col items-center md:7/12">  
          <h2 className="text-xl md:text-5xl font-bold mb-12 pt-20 z-30">Pourquoi nous faire confiance&nbsp;?</h2>
          <div className=" w-full bg-orange-bg h-test rounded-2xl -mt-16 z-10"></div>
        </div>
        <article className="flex md:flex-row flex-col items-center justify-between md:mx-6 mx-2 md:mt-12 mt-6 mb-6">
          <figure className="flex flex-col items-center md:px-12 px-0 md:w-1/3 w-11/12 md:self-start">
            <div className="w-2/3 md:w-auto">
              <Image src="/illu_one2x.png" alt="illustration" width="341" height="167"></Image>
            </div>
            <figcaption className="space-y-4 mt-4">
              <h3 className="md:text-2xl text-lg font-bold">Sites e-commerce <br/> compatible mobile</h3>
              <p>Pour vendre sur le web avec une flexibilité sur tous les supports</p>
            </figcaption>
          </figure>
          <figure className="flex flex-col items-center md:px-12 px-0 md:w-1/3 w-11/12 md:self-start my-10 md:my-0">
            <div className="w-2/3 md:w-auto">
              <Image src="/illu_two2x.png" alt="illustration" width="231" height="167"></Image>
            </div>
            <figcaption className="space-y-4 mt-4">
              <h3 className="md:text-2xl text-lg font-bold">Mise en avant <br/> et référencement</h3>
              <p>Pour transformez vos visiteurs en clients et être visible sur Google</p>
            </figcaption>
          </figure>
          <figure className="flex flex-col items-center md:px-12 px-0 md:w-1/3 w-11/12 md:self-end">
            <div className="w-2/3 md:w-auto">
              <Image src="/illu_three2x.png" alt="illustration" width="169" height="167"></Image>
            </div>
            <figcaption className="space-y-4 mt-4">
              <h3 className="md:text-2xl text-lg font-bold">Suivi et analyse</h3>
              <p> Parce que vous méritez qu’on soit dévoué à votre projet</p>
            </figcaption>
          </figure>
        </article>
      </section>
    )
}