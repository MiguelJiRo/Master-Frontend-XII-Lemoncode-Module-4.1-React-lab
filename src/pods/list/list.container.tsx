import React, { useEffect } from "react";
import { ListComponent } from "./list.component";
import { SearchBar } from '../../common/components/search-bar.component';
import { getMembers } from './api/api';
import { MemberEntity } from "./api/api.model";

export const ListContainer = () => {
  const [memberList, setMemberList] = React.useState<MemberEntity[]>([]);
  const [searchValue, setSearchValue] = React.useState('lemoncode');

  const onFetchUsers = (searchValue: string) => {
    getMembers(searchValue)
      .then((memberList) => {
        console.log(memberList);
        setMemberList(memberList);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    onFetchUsers(searchValue);
  }, []);

  const onSearch = () => {
    onFetchUsers(searchValue);
  }

  return (
    <>
      <SearchBar
        defaultValue="lemoncode"
        searchValue={searchValue}
        onSearch={onSearch}
        onChange={setSearchValue}
      />
      <ListComponent memberList={memberList} />
    </>
  );
}