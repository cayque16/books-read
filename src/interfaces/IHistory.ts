import type IBook from "./IBook";

export default interface IHistory {
  year: number;
  books: IBook[];
}
