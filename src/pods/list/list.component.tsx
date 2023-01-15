import React from "react";
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import { MemberEntity } from "./api/api.model";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableFooter } from "@mui/material";
import { routes } from '../../core/router/routes';

interface Props {
  memberList: MemberEntity[];
}

const columns = [
  {
    id: 'avatar',
    label: 'Avatar',
    minWidth: 120,
  },
  {
    id: 'user',
    label: 'User',
    minWidth: 170,
  },
  {
    id: 'id',
    label: 'Id',
    minWidth: 170,
  },
];

export const ListComponent: React.FC<Props> = props => {
  const { memberList } = props;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table
          aria-labelledby="tableTitle"
          size='small'
        >
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align="left"
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {memberList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((member) => (
              <TableRow key={member.id}>
                <TableCell align="left">
                  <Avatar alt={member.login} src={member.avatar_url} />
                </TableCell>
                <TableCell align="left">
                  <Link to={routes.memberDetail(member.login)}>{member.login}</Link>
                </TableCell>
                <TableCell align="left">{member.id}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                colSpan={3}
                count={memberList.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    'aria-label': 'rows per page',
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                showFirstButton
                showLastButton
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  );
}