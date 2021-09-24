import React from 'react';
import Head from 'next/head';


const App = ({Component}) => (
    <>
        <Head>
            <title>Todo</title>
        </Head>
        <Component />
    </>
);

//
// const App = ({Component, pageProps}) => (
//     <Component {...pageProps}/>
// );
//
export default App;


// export default function App({ Component, pageProps }) {
//     return <Component {...pageProps} />
// }