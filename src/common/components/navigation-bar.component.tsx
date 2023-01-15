import React from "react";
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Link } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';
import GroupIcon from '@mui/icons-material/Group';
import { routes } from '../../core/router/routes'

interface Props {
  rickandmortyPage?: boolean;
  githubsearchPage?: boolean;
}

export const NavigationBar: React.FC<Props> = props => {
  const { rickandmortyPage, githubsearchPage } = props;

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className="NavigationBar">
          <Toolbar>
            <Link to={routes.memberList}>
              <IconButton color="primary" aria-label="github search page" component="label" title="Github members page">
                <GitHubIcon />
              </IconButton>
            </Link>
            <Link to={routes.rickAndMortyList}>
              <IconButton color="primary" aria-label="rick and morty page" component="label" title="Rick and Morty page">
                <GroupIcon />
              </IconButton>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}