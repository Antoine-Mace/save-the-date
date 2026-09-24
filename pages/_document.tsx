import { Html, Head, Main, NextScript } from 'next/document'
import type { DocumentProps } from 'next/document'

const Document = (props: DocumentProps) => {
    return (
        <Html lang={props.__NEXT_DATA__.locale ?? 'en'}>
            <Head>
                {/* CUSTOMIZE: replace public/favicon.ico with your own icon. */}
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default Document;
