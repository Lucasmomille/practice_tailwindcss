import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Layout({ children, page }) {
    return (
        <div className="pt-5 text-center">
            <Head>
                <title>{page}</title>
            </Head>
            <main className="pt-4 mx-20">
                {children}
            </main>
        </div>
    )
}