import React from "react";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from "@mui/material";

interface Props {
  defaultValue: string;
  searchValue: string;
  onSearch: () => void;
  onChange: (value: string) => void;
}

export const SearchBar: React.FC<Props> = props => {
  const { defaultValue, searchValue, onSearch, onChange } = props;

  const [org, setOrg] = React.useState(defaultValue);
  const [lastSearch, setLastSearch] = React.useState(defaultValue);

  const onClicked = (e: React.MouseEvent) => {
    e.preventDefault();
    setLastSearch(org);
    onSearch();
  }

  return (
    <>
      <div className="list-user-list-container">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" className="appBarHeader">
            <Toolbar>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              >
                Users: {lastSearch}
              </Typography>
              <TextField
                id="outlined-textarea"
                label="Search"
                placeholder={lastSearch}
                multiline
                onChange={(e) => {
                  onChange(e.target.value);
                  setOrg(e.target.value)
                }}
                value={searchValue}
              />
              <IconButton onClick={onClicked}>
                <SearchIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
    </>
  );
}