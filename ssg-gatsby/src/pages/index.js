import React from 'react'
import Card from '../components/Card';
import data from '../../../_shared/data.json'
import '../components/Card.css';

function App() {
    return (
        <div className="container-fluid d-flex justify-content-center flex-wrap">
            {data.map((r) => (
                <Card key={r.id} offer={r}/>
            ))}
        </div>
    );
}

export default App;
