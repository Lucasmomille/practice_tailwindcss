import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Layout({ children, page }) {
    return (
        <div className="font-comfortaa">
            <Head>
                <title>{page}</title>

                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;700&display=swap" rel="stylesheet" />
            </Head>
            <header className="px-10 flex bg-orange-bg pt-6 md:min-h-header w-full justify-center md:justify-start">
                <div className="mr-4">
                    <a href="https://portfolio-lucas-moquet.vercel.app/">
                        <Image src="/logo.png" alt="logo" width="70" height="59"></Image>
                    </a>
                </div>

            </header>
            <main>
                {children}
            </main>
            <footer className="min-h-footer flex flex-col items-center justify-between w-full">
                <div className="flex flex-row">
                    <div className="mr-4">
                        <a href="https://portfolio-lucas-moquet.vercel.app/">
                            <Image src="/logo.png" alt="logo" width="60" height="49"></Image>
                        </a>
                    </div>
                </div>

                <p className="mb-4">© Lucas Moquet | 2021</p>

            </footer>
        </div>
    )
}