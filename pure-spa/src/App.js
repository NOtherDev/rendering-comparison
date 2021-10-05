import React, {useState, useEffect} from 'react'
import Card from './Card';
import './App.css';

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/NOtherDev/rendering-comparison/main/_shared/data.json')
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    return (
        <>
            <div className="text-center">
                <h1>Rendered client-side by SPA at {new Date().toISOString()}</h1>
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
