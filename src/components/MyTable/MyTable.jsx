import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styles from './MyTable.module.css';

const MyTable = ({ date, dateData }) => {

  if (dateData.length === 0) {
    return (
      <TableContainer component={Paper} className={styles.tableContainer}>
        <Table className={styles.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Country</TableCell>
              <TableCell align="center">Province/State</TableCell>
              <TableCell align="center">Confirmed</TableCell>
              <TableCell align="center">Recovered</TableCell>
              <TableCell align="center">Deaths</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              <TableRow>
                <TableCell align="center">No Data</TableCell>
                <TableCell align="center">No Data</TableCell>
                <TableCell align="center">No Data</TableCell>
                <TableCell align="center">No Data</TableCell>
                <TableCell align="center">No Data</TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  return (
    <TableContainer component={Paper} className={styles.tableContainer}>
      <Table className={styles.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Country</TableCell>
            <TableCell align="center">Province/State</TableCell>
            <TableCell align="center">Confirmed</TableCell>
            <TableCell align="center">Recovered</TableCell>
            <TableCell align="center">Deaths</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dateData.map((row, i) => (
            <TableRow key={i}>
              <TableCell align="center">{row.countryRegion}</TableCell>
              <TableCell align="center">{row.provinceState}</TableCell>
              <TableCell align="center">{row.confirmed}</TableCell>
              <TableCell align="center">{row.recovered}</TableCell>
              <TableCell align="center">{row.deaths}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MyTable;