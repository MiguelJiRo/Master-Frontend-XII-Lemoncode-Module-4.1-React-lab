import { UserEntity } from "./api.model";

export const getUserData = (user: string): Promise<UserEntity[]> => {
  return fetch(`https://api.github.com/users/${user}`)
    .then(
      response => response.json()
    ).catch((error) => {
      console.log("Error fetching user: ", error);
    });
}