import Image from "next/image";

export default function ThirdSection() {
  return (
    <section className="md:min-h-section95 w-full md:rounded-tl-section items-center bg-orange-bg pt-12">
      <h2 className="text-center md:text-2xl text-xl">A propos de <br /> <span className="font-bold text-3xl">nous</span> </h2>
      <article className="flex flex-col md:flex-row justify-between md:mx-20 mx-4 mt-16">
        <div className="flex flex-col md:w-1/3 w-full transform scale-95 space-y-4">
          <div className="flex flex-row items-center justify-center md:mb-0 mb-4">
            <h3 className="md:text-xl text-lg font-bold mr-6">Logo</h3>
            <Image src="/logo.png" alt="logo" width="70" height="59"></Image>
          </div>

          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, similique ad vel obcaecati omnis asperiores. Veniam blanditiis architecto tempora. Laudantium recusandae officiis, voluptatibus perferendis autem itaque fugit asperiores esse vitae!</p>
        </div>

        <div className="flex flex-col md:w-1/3 w-full transform md:scale-95 scale-75 justify-center items-center md:my-0 my-6">
          <Image src="/logo.png" alt="illustration" width="300" height="250"></Image>
        </div>

        <div className="flex flex-col md:w-1/3 w-full transform scale-95 space-y-4 mb-12 md:mb-0">
          <div className="flex flex-row items-center justify-center md:justify-start md:my-0 my-4">
            <h3 className="text-xl font-bold mr-6">Logo</h3>
            <Image src="/logo.png" alt="logo" width="70" height="59"></Image>
          </div>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima recusandae, hic molestias fuga illo, quo iusto omnis quos quaerat voluptatem iste laboriosam! Nihil officiis esse magni dolore. Laudantium, ullam quis.
          </p>
        </div>

      </article>
    </section>
  )
}