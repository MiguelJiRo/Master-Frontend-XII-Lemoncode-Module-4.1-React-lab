import { MemberEntity } from "./api.model";

export const getMembers = (org: string): Promise<MemberEntity[]> => {
  return fetch(`https://api.github.com/orgs/${org}/members`)
    .then(
      response => response.json()
    ).catch((error) => {
      console.log("Error fetching members: ", error);
    });
}