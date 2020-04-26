import React from 'react';
import { Cards, Charts, CountryPicker, DonutChart , DatePicker, MyTable} from './components';
import styles from './App.module.css';
import { fetchData, fetchDateData } from './api';

import { CssBaseline, AppBar, Toolbar, Typography} from '@material-ui/core';

class App extends React.Component {

  state = {
    data: {},
    country: '',
    date: new Date('2020-02-14T21:11:54'),
    dateData: [],
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  handleDateChange = async (date) => {
    let dateData = await fetchDateData(date);

    this.setState({ date, dateData: dateData });
  };

  render() {
    const { data, country, date, dateData } = this.state; 

    // console.log(dateData)

    return (
      <div>
        <CssBaseline />
        <AppBar>
          <Toolbar>
            <Typography variant="h6" noWrap>
              Covid-19 Tracker
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          <div className={styles.container}>
            <Cards data={data} />
            {/* <DonutChart data={data} /> */}
            <CountryPicker handleCountryChange={this.handleCountryChange} />
            <Charts data={data} country={country} />
            <DatePicker date={date} handleDateChange={this.handleDateChange}/>
            <MyTable date={date} dateData={dateData}/>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
