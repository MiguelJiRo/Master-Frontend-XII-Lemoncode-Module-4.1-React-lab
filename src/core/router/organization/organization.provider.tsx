import React, { useState } from 'react';
import { OrganizationContext } from './organization.context';

interface Props {
  children: React.ReactNode;
}

export const OrganizationProvider: React.FC<Props> = props => {
  const { children } = props;
  const [searchValue, setSearchValue] = useState<string>('lemoncode');

  const value = {
    searchValue,
    setSearchValue,
  };

  return (
    <OrganizationContext.Provider value={{
      ...value,
    }}>
      {children}
    </OrganizationContext.Provider>
  );
};