import { useState, useEffect } from 'react';
import { fetchData } from './api';
import styles from './App.module.scss';
import { Cards, Chart, CountryPicker } from './components';
import coronaImage from './images/covid.png';

const App = () => {
    const [data, setData] = useState({});
    const [country, setCountry] = useState('');

    useEffect(() => {
        const fetchApi = async () => {
            const fetchedData = await fetchData();
            setData(fetchedData);
        };
        fetchApi();
    }, []);

    const handleCountryChange = async (countryName) => {
        const fetchedCountry = await fetchData(countryName);
        setData(fetchedCountry);
        setCountry(countryName);
    };

    return (
        <div className={styles.container}>
            <img src={coronaImage} alt="Covid" className={styles.image}/>
            <Cards data={data} country={country} />
            <CountryPicker handleCountryChange={handleCountryChange} />
            <Chart country={country} data={data} />
        </div>
    );
};

export default App;
