import { Avatar, Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardProps, Typography } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import React from "react";
import { CharacterEntity } from "./api/api.model";
import "./detail.styles.scss";

interface Props {
  character: CharacterEntity;
}

const CardStyled = styled(Card)<CardProps>(({ theme }) => ({
  width: '20rem',
  height: '14rem',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'pink',
  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
}));

export const DetailComponent: React.FC<Props> = props => {
  const { character } = props;

  return (
    <>
      <CardStyled sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar alt={character.name} src={character.image} />
          }
          title={character.name}
          subheader={character.status ? character.status : character.created}
        >
        </CardHeader>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {character.location.name ? character.location.name : "No location defined"}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            <a href={character.url}>Learn More</a>
          </Button>
        </CardActions>
      </CardStyled>
    </>
  );
}