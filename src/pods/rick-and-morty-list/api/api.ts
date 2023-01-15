import { FetchCharacterListResponse } from "./api.model";

export const getCharacters = async (id: string, page: number): Promise<FetchCharacterListResponse> => {
  try {
    const characterFetch = id ? `&name=${id}` : '';
    const pageFetch = id ? '' : (page ? `&page=${page}` : '');
    const url = `https://rickandmortyapi.com/api/character/?`;
    const urlFetch = id ? `${url}${characterFetch}` : `${url}${pageFetch}`;
    return await fetch(urlFetch).then(
      response => response.json()
    ).catch((error) => {
      console.error("Error fetching members: ", error);
    });
  } catch (error) {
    console.error("Error fetching character/s: ", error);
  }
}