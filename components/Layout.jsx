import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Layout({ children, page }) {
    return (
        <div className="">
            <Head>
                <title>{page}</title>
            </Head>
            <header className="px-10 flex bg-orange-bg pt-6 min-h-header">
                <div className="mr-4">
                <a href="https://lewys.io/">
                    <Image src="/logo_lewys_png.png" alt="logo Lewys" width="70" height="59"></Image>
                </a>
                </div>
                <div>
                    <Image src="/logo_SWIBLU_2x.png" alt="logo Lewys" width="70" height="59"></Image>
                </div>
                
            </header>
            <main className="text-center">
                {children}
            </main>
        </div>
    )
}