import React, {useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import axios from 'axios';
import moment from 'moment';

const columns = [
  { id: 'eventOwner', label: 'Owner', minWidth: 50 },
  { id: 'eventName', label: 'Event', minWidth: 150 },
  {
    id: 'eventDesc',
    label: 'Event Description',
    minWidth: 200,
    align: 'left',
    format: (value) => value.toLocaleString(),
  },
  {
    id: 'eventDate',
    label: 'DATE',
    minWidth: 100,
    // align: 'right',
    format: (value) => moment(value).format('MMMM Do YYYY, h:mm:ss a'),
  },
  {
    id: 'eventId',
    label: 'DataBase ID',
    minWidth: 200,
    // align: 'right',
    // format: (value) => value.toFixed(2),
  },
  {
    id: 'socketId',
    label: 'SOCKET ID',
    minWidth: 200,
    // align: 'right',
    // format: (value) => value.toFixed(2),
  },
];

const useStyles = makeStyles({
  root: {
    width: '95%',
    marginLeft: '2%'
  },
  container: {
    maxHeight: 500,
  },
});

export default function TableEvents() {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows,setRows] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3030/logs/events')
    .then(res =>{
        const rows = res.data;
        setRows(rows);
        });
    },[]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25,100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
