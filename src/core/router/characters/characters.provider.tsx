import React, { useState } from 'react';
import { CharactersContext } from './characters.context';

export const CharactersProvider: React.FC = props => {
  const { children } = props;
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(0);

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