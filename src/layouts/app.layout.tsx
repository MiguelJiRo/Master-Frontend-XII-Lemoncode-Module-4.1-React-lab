import React from 'react';
import { NavigationBar } from "../common/components/navigation-bar.component";

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = ({ children }) => {

  return (
    <>
      <NavigationBar />
      {children}
    </>
  );
}