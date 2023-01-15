import React, { useState } from 'react';
import { CharactersContext } from './characters.context';

interface Props {
  children: React.ReactNode;
}

export const CharactersProvider: React.FC<Props> = props => {
  const { children } = props;
  const [page, setPage] = useState<number>(1);
  const [count, setCount] = useState<number>(0);

  const value = {
    page,
    count,
    setPage,
    setCount,
  };

  return (
    <CharactersContext.Provider value={{
      ...value,
    }}>
      {children}
    </CharactersContext.Provider>
  );
};