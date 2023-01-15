import { Button } from "@mui/material";
import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getUserData } from "./api";
import { DetailComponent } from "./detail.component";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { routes } from '../../core/router/routes';

export const DetailContainer = () => {
  const { id } = useParams();
  const [user, setUser] = React.useState(null);

  const onFetchUser = () => {
    getUserData(id)
      .then((user) => {
        setUser(user);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  React.useEffect(() => {
    onFetchUser();
  }, []);

  return (
    <>
      <Button color="secondary" startIcon={<ArrowBackIcon />}>
        <Link to={routes.memberList}>Back to list</Link>
      </Button>
      <div className="detailContainer">
        {user && <DetailComponent user={user} />}
      </div>
    </>
  );
}