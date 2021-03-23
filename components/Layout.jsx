import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Layout({ children, page }) {
    return (
        <div className="font-comfortaa">
            <Head>
                <title>{page}</title>
               
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;700&display=swap" rel="stylesheet"/> 
            </Head>
            <header className="px-10 flex bg-orange-bg pt-6 min-h-header">
                <div className="mr-4">
                    <a href="https://lewys.io/">
                        <Image src="/logo_lewys_png.png" alt="logo Lewys" width="70" height="59"></Image>
                    </a>
                </div>
                <div>
                    <a href="https://swiblu.app/">
                        <Image src="/logo_SWIBLU_2x.png" alt="logo Lewys" width="70" height="59"></Image>
                    </a>
                </div>
                
            </header>
            <main>
                {children}
            </main>
            <footer className="min-h-header flex flex-col items-center">
                <div className="flex flex-row">
                    <div className="mr-4">
                        <a href="https://lewys.io/">
                            <Image src="/logo_lewys_png.png" alt="logo Lewys" width="70" height="59"></Image>
                        </a>
                    </div>
                    <div>
                        <Image src="/logo_SWIBLU_2x.png" alt="logo Lewys" width="70" height="59"></Image>
                    </div>
                </div>
                
                <p>© Lewys.io & Swiblu | 2021</p>

            </footer>
        </div>
    )
}