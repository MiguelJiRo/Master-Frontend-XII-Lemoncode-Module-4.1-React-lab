import { CharacterEntity } from "./api.model";

export const getCharacterData = (id: string): Promise<CharacterEntity[]> => {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(
      response => response.json()
    ).catch((error) => {
      console.log("Error fetching character: ", error);
    });
}