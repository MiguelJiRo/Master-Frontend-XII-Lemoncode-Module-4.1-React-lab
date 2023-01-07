import React from "react";
import { useParams } from "react-router";
import { getCharacterData } from "./api";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from "@mui/material";
import { DetailComponent } from "./detail.component";
import { Link } from "react-router-dom";

export const DetailContainer = () => {
  const { id } = useParams();
  const [character, setCharacter] = React.useState(null);

  const onFetchCharacter = () => {
    getCharacterData(id)
      .then((character) => {
        setCharacter(character);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  React.useEffect(() => {
    onFetchCharacter();
  }, []);

  return (
    <>
      <Button color="secondary" startIcon={<ArrowBackIcon />}>
        <Link to="/rickandmorty/list">Back to list</Link>
      </Button>
      <div className="detailContainer">
        {character && <DetailComponent character={character} />}
      </div>
    </>
  );
}