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
  { id: 'chatUsername', label: 'User name', minWidth: 50 },
  {
    id: 'chatMessage',
    label: 'Message',
    minWidth: 200,
    align: 'left',
  },
  {
    id: 'chatDate',
    label: 'DATE',
    minWidth: 100,
    format: (value) => moment(value).format('MMMM Do YYYY, h:mm:ss a'),
  },
  {
    id: 'chatId',
    label: 'DataBase ID',
    minWidth: 200,
  },
  {
    id: 'socketId',
    label: 'SOCKET ID',
    minWidth: 200,
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

export default function TableChats({match}) {
  const {roomname} = match.params;
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows,setRows] = useState([]);

  useEffect(()=>{
    if(roomname===undefined){
      axios.get('http://localhost:3030/logs/chats')
      .then(res =>{
          const rows = res.data;
          setRows(rows);
          });
    }else{
      axios.get(`http://localhost:3030/logs/chats?roomname=${roomname}`)
      .then(res =>{
          const rows = res.data;
          setRows(rows);
      });
    }

    },[match.params]);

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
