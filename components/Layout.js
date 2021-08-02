import Head from 'next/head';


//Header
export default function Layout({ children, title = "Default title" }) {
    return (
        <div className="flex justify-center items-center flex-col min-h-screen text-white font-mono bg-gray-800">
            <Head>
                <title>{title}</title>
            </Head>

            <main className="flex flex-1 justify-center items-center w-screen flex-col">
                {children}
            </main>


            {/* h-6:24px */}
            {/* 1rem : 16px */}
            {/* text-sm : font-size:14px line-height: 20px */}
            <footer className="w-full h-6 flex justify-center items-center text-gray-500 text-sm">
                @FOOTER
            </footer>


        </div>


    );
}