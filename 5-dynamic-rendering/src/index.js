import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyApp from './pages/_app';
import Home, {getServerSideProps} from './pages';

const HomeWrapper = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getServerSideProps()
            .then(({props}) => setData(props.data));
    }, []);

    return (
        <Home data={data}/>
    )
};

ReactDOM.render(
    <React.StrictMode>
        <MyApp Component={HomeWrapper}/>
    </React.StrictMode>,
    document.getElementById('root')
);
