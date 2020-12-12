import { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api';
import styles from './CountryPicker.module.scss';

export const CountryPicker = ({ handleCountryChange }) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const getCountries = async () => {
            const data = await fetchCountries();
            setCountries(data);
        };
        getCountries();
    }, []);
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect
                defaultValue={'Kenya'}
                onChange={(e) => handleCountryChange(e.target.value)}
            >
                <option value="">Global</option>
                {countries.map((country) => (
                    <option key={country.name} value={country.name}>
                        {country.name}
                    </option>
                ))}
            </NativeSelect>
        </FormControl>
    );
};
