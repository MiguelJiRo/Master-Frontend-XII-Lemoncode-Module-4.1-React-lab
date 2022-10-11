import { Avatar, Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardProps, Typography } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import React from "react";
import { UserEntity } from "./api/api.model";
import "./detail.styles.scss";

interface Props {
  user: UserEntity;
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
  const { user } = props;

  return (
    <>
      <CardStyled sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar alt={user.login} src={user.avatar_url} />
          }
          title={user.login}
          subheader={user.location ? user.location : user.id}
        >
        </CardHeader>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {user.bio ? user.bio : "No bio"}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            <a href={user.html_url}>Learn More</a>
          </Button>
        </CardActions>
      </CardStyled>
    </>
  );
}