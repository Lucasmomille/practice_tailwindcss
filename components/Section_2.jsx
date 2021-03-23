

export default function SecondSection(){
    return (
        <section className="min-h-section95 text-center flex flex-col" id="section2">
        <h2 className="text-5xl font-bold mb-12 pt-20">Pourquoi nous faire confiance&nbsp;?</h2>
        <article className="flex md:flex-row flex-col items-center justify-between mx-6 mt-28 mb-6">
          <figure className="flex flex-col items-center px-12 w-1/3 self-start">
            <div>
              <Image src="/illu_one2x.png" alt="illustration" width="391" height="217"></Image>
            </div>
            <figcaption className="space-y-4 mt-4">
              <h3 className="text-2xl font-bold">Sites e-commerce <br/> compatible mobile</h3>
              <p>Pour vendre sur le web avec une flexibilité sur tous les supports</p>
            </figcaption>
          </figure>
          <figure className="flex flex-col items-center px-12 w-1/3 self-start">
            <div>
              <Image src="/illu_two2x.png" alt="illustration" width="281" height="217"></Image>
            </div>
            <figcaption className="space-y-4 mt-4">
              <h3 className="text-2xl font-bold">Mise en avant <br/> et référencement</h3>
              <p>Pour transformez vos visiteurs en clients et être visible sur Google</p>
            </figcaption>
          </figure>
          <figure className="flex flex-col items-center px-12 w-1/3 self-end">
            <div>
              <Image src="/illu_three2x.png" alt="illustration" width="219" height="217"></Image>
            </div>
            <figcaption className="space-y-4 mt-4">
              <h3 className="text-2xl font-bold">Suivi et analyse</h3>
              <p> Parce que vous méritez qu’on soit dévoué à votre projet</p>
            </figcaption>
          </figure>
        </article>
      </section>
    )
}