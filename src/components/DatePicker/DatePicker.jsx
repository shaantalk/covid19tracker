import 'date-fns';
import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import styles from './DatePicker.module.css';

const DatePicker = ({ date, handleDateChange }) => {
  // const [selectedDate, setSelectedDate] = React.useState(new Date('2020-02-14T21:11:54'));
  let someDaysAgo = new Date()
  someDaysAgo = someDaysAgo.setDate(someDaysAgo.getDate() - 2)
  return (
    <div className={styles.datePickerContainer}>
      <Typography align='center'>Select Date For Viewing Historical Data</Typography>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label=""
            format="MM-dd-yyyy"
            value={date}
            onChange={handleDateChange}
            minDate={new Date('2020-01-22T21:11:54')}
            maxDate={someDaysAgo}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
    </div>
  );
}

export default DatePicker;
