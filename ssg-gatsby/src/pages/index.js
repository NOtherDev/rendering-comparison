import React from 'react'
import Card from '../components/Card';
import data from '../../../_shared/data.json'
import '../components/Card.css';

function App() {
    return (
        <>
            <div className="text-center">
                <h1>Rendered {typeof window === 'undefined' ? 'server-side (SSG)' : 'client-side'} at {new Date().toISOString()}</h1>
            </div>
            <div className="container-fluid d-flex justify-content-center flex-wrap">
                {data.map((r) => (
                    <Card key={r.id} offer={r}/>
                ))}
            </div>
        </>
    );
}

export default App;
