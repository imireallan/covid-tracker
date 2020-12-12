import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let newUrl = url;
    if (country) {
        newUrl = `${url}/countries/${country}`;
    }
    try {
        const {
            data: { confirmed, recovered, deaths, lastUpdate },
        } = await axios.get(newUrl);
        return {
            confirmed,
            recovered,
            deaths,
            lastUpdate,
        };
    } catch (e) {
        console.error(e);
    }
};
export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        return data.map((data) => ({
            confirmed: data.confirmed.total,
            deaths: data.deaths.total,
            date: data.reportDate,
        }));
    } catch (e) {
        console.error(e);
    }
};
export const fetchCountries = async () => {
    try {
        const { data } = await axios.get(`${url}/countries`);
        return data.countries.map((country) => ({
            name: country.name,
        }));
    } catch (e) {
        console.error(e);
    }
};
