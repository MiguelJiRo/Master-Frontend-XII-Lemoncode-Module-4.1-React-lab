import React from "react";
import { useParams } from "react-router";
import { getCharacterData } from "./api";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from "@mui/material";
import { DetailComponent } from "./detail.component";
import { Link } from "react-router-dom";
import { routes } from '../../core/router/routes';

export const DetailContainer = () => {
  const { id } = useParams();
  const [character, setCharacter] = React.useState(null);

  const onFetchCharacter = () => {
    getCharacterData(id)
      .then((character) => {
        setCharacter(character);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  React.useEffect(() => {
    onFetchCharacter();
  }, []);

  return (
    <>
      <Button color="secondary" startIcon={<ArrowBackIcon />}>
        <Link to={routes.rickAndMortyList}>Back to list</Link>
      </Button>
      <div className="detailContainer">
        {character && <DetailComponent character={character} />}
      </div>
    </>
  );
}