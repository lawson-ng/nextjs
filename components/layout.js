import Head from 'next/head'

export default function Layout({children}) {
    return (
        <div className={'container bg-light min-vh-100 mr-auto'}>
            <Head>
                <link rel='icon' href="/favicon.ico" />
                <meta
                    name="description"
                    content="Coder Light"
                />
                <meta name="twitter:card" content='summary_large_image' />
            </Head>
            {children}
        </div>
    )
}
