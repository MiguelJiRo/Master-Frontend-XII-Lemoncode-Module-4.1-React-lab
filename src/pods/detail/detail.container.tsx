import { Button } from "@mui/material";
import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getUserData } from "./api";
import { DetailComponent } from "./detail.component";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const DetailContainer = () => {
  const { id } = useParams();
  const [user, setUser] = React.useState(null);

  const onFetchUser = () => {
    console.log(id);
    getUserData(id)
      .then((user) => {
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  React.useEffect(() => {
    onFetchUser();
  }, []);

  return (
    <>
      <Button color="secondary" startIcon={<ArrowBackIcon />}>
        <Link to="/list">Back to list</Link>
      </Button>
      <div className="detailContainer">
        {user && <DetailComponent user={user} />}
      </div>
    </>
  );
}