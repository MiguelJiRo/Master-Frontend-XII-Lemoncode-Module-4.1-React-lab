import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import { CharacterEntity } from "./api/api.model";
import { Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableFooter } from "@mui/material";
import { routes } from '../../core/router/routes';
import { CharactersContext } from '../../core/router/characters/characters.context'

interface Props {
  characterList: CharacterEntity[];
  handleChangePage: (newPage: number) => void;
}

const columns = [
  {
    id: 'image',
    label: 'Image',
    minWidth: 120,
  },
  {
    id: 'name',
    label: 'Name',
    minWidth: 100,
  },
  {
    id: 'status',
    label: 'Status',
    minWidth: 100,
  },
  {
    id: 'species',
    label: 'Species',
    minWidth: 100,
  },
  {
    id: 'type',
    label: 'Type',
    minWidth: 100,
  },
  {
    id: 'gender',
    label: 'Gender',
    minWidth: 100,
  },
];

export const RickAndMortyListComponent: React.FC<Props> = props => {
  const { characterList, handleChangePage } = props;
  const { page, count } = useContext(CharactersContext);

  const handleChangeNextPage = (event: unknown, newPage: number) => {
    handleChangePage(newPage);
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
            {characterList.map((character) => (
              <TableRow key={character.id}>
                <TableCell align="left">
                  <Avatar alt={character.name} src={character.image} />
                </TableCell>
                <TableCell align="left">
                  <Link to={routes.rickAndMortyDetail(character.id)}>{character.name}</Link>
                </TableCell>
                <TableCell align="left">{character.status}</TableCell>
                <TableCell align="left">{character.species}</TableCell>
                <TableCell align="left">{character.type}</TableCell>
                <TableCell align="left">{character.gender}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination count={count}
        page={page}
        onChange={handleChangeNextPage} />
    </>
  );
}