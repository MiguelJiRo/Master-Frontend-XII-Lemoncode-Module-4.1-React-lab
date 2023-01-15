import { CharacterEntity } from "./api.model";

export const getCharacterData = (id: string): Promise<CharacterEntity[]> => {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(
      response => response.json()
    ).catch((error) => {
      console.error("Error fetching character: ", error);
    });
}