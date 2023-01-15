import React, { useEffect, useContext } from "react";
import { RickAndMortyListComponent } from "./rick-and-morty-list.component";
import { SearchBar } from '../../common/components/search-bar.component';
import { getCharacters } from './api/api';
import { CharacterEntity } from "./api/api.model";
import { useDebounce } from 'use-debounce';
import { CharactersContext } from '../../core/router/characters/characters.context'

export const RickAndMortyListContainer = () => {
  const [characterList, setCharacterList] = React.useState<CharacterEntity[]>([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [debouncedFilter] = useDebounce(searchValue, 500);
  const { page, setPage, setCount } = useContext(CharactersContext);

  const onFetchUsers = () => {
    getCharacters(searchValue, page)
      .then((characterApiList) => {
        const { info, results } = characterApiList;
        info.count && setCount(info.pages);
        setCharacterList(results);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    onFetchUsers();
  }, [debouncedFilter, page]);

  const onSearch = () => {
    onFetchUsers();
  }

  return (
    <>
      <SearchBar
        defaultValue="rick and morty"
        searchValue={searchValue}
        onSearch={onSearch}
        onChange={setSearchValue}
      />
      <RickAndMortyListComponent characterList={characterList} handleChangePage={setPage} />
    </>
  );
}