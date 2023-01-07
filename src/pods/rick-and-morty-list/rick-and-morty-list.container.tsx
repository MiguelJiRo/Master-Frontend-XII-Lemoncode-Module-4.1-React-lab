import React, { useEffect, useContext } from "react";
import { RickAndMortyListComponent } from "./rick-and-morty-list.component";
import { SearchBar } from '../../common/components/search-bar.component';
import { getCharacters, getNewPage } from './api/api';
import { CharacterEntity } from "./api/api.model";
import { NavigationBar } from "../../common/components/navigation-bar.component";
import { useDebounce } from 'use-debounce';

export const RickAndMortyListContainer = () => {
  const [characterList, setCharacterList] = React.useState<CharacterEntity[]>([]);
  const [searchValue, setSearchValue] = React.useState('rick and morty');
  const [debouncedFilter] = useDebounce(searchValue, 500);
  const { setPage, setCount } = useContext<any>(null);

  const onFetchUsers = (searchValue: string) => {
    getCharacters(searchValue)
      .then((characterApiList) => {
        const { info, results } = characterApiList;
        console.log(characterApiList);
        info.pages && setPage(info.pages);
        info.count && setCount(info.count);
        setCharacterList(results);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const onFetchNewPage = (page: number) => {
    getNewPage(page)
      .then((characterApiList) => {
        console.log(characterApiList);
        setCharacterList(characterApiList.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    onFetchUsers(searchValue);
  }, [debouncedFilter]);

  const onSearch = () => {
    onFetchUsers(searchValue);
  }

  return (
    <>
      <SearchBar
        defaultValue="rick and morty"
        searchValue={searchValue}
        onSearch={onSearch}
        onChange={setSearchValue}
      />
      <NavigationBar />
      <RickAndMortyListComponent characterList={characterList} handleChangePage={onFetchNewPage} />
    </>
  );
}