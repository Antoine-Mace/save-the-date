import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
    return (
        <Html>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=League+Script&display=swap"
                ></link>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Courier+New&display=swap"
                ></link>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default Document;