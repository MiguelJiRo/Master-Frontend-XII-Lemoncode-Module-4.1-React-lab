import { FetchCharacterListResponse } from "./api.model";

export const getCharacters = async (id: string): Promise<FetchCharacterListResponse> => {
  try {
    console.log('getCharacters: ', id);
    const response = await fetch(id === 'rick and morty' ? `https://rickandmortyapi.com/api/character/` : `https://rickandmortyapi.com/api/character/?name=${id}`);
    return await response.json();
  } catch (error) {
    console.log("Error fetching character/s: ", error);
  }
}

export const getNewPage = async (page: number): Promise<FetchCharacterListResponse> => {
  try {
    console.log('getNewPage: ', page);
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
    return await response.json();
  } catch (error) {
    console.log("Error fetching character/s: ", error);
  }
}