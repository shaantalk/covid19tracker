import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, MenuItem, Select, InputBase } from '@material-ui/core';

import { fetchCountries } from '../../api';

import styles from './CountryPicker.module.css';
import { withStyles } from '@material-ui/core/styles';

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const Countries = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchAPI();
  }, []);

  return (
    <FormControl className={styles.formControl}>
      <InputLabel id="countries-select-label"> Select Country</InputLabel>
      <Select
      labelId="countries-select-label"
      defaultValue=""
      onChange={(e) => handleCountryChange(e.target.value)} input={<BootstrapInput/>}
      displayEmpty
      renderValue={(selected) => {
        if (selected.length === 0) {
          return <em>All Countries</em>;
        }
        return selected;
      }}
      >
        <MenuItem value="">All Countries</MenuItem >
        {countries.map((country, i) => <MenuItem key={i} value={country}>{country}</MenuItem>)}
      </Select>
    </FormControl>
  );
};

export default Countries;