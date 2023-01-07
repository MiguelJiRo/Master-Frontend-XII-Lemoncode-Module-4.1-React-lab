export interface CharactersContextModel {
  page: number;
  count: number;
  setPage: (newPage: number) => void;
  setCount: (newCount: number) => void;
}