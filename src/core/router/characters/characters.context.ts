import React from 'react';
import { CharactersContextModel } from './characters.model';

export const CharactersContext = React.createContext<CharactersContextModel>(null);

export const useCharactersContext = () => React.useContext(CharactersContext);