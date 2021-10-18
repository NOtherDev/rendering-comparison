import React from 'react'
import Head from 'next/head'

import Card from '../src/Card';

export default function Home({data}) {
    return (
        <>
            <Head>
                <title>Products listing</title>
            </Head>

            <div className="text-center">
                <h1>Rendered {typeof window === 'undefined' ? 'server-side (SSR)' : 'client-side'} at {new Date().toISOString()}</h1>
            </div>

            <div className="container-fluid d-flex justify-content-center flex-wrap">
                {data.map((r, idx) => (
                    <Card key={r.id} offer={r} onClick={() => alert(`Clicked on element #${idx + 1}`)}/>
                ))}
            </div>
        </>
    )
}

export async function getServerSideProps(context) {
    const res = await fetch('https://raw.githubusercontent.com/NOtherDev/rendering-comparison/main/_shared/data.json');
    const data = await res.json();

    return {
        props: {
            data,
        }
    }
}
