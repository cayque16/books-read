import type { InjectionKey } from "vue";
import type IHistory from "../interfaces/IHistory";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import type { ActionContext } from "vuex";
import type IBook from "../interfaces/IBook";

export const GET_FULL_HISTORY = "GET_FULL_HISTORY";
export const SET_FULL_HISTORY = "SET_HISTORY";
export const SET_BOOKS_OF_YEAR = "SET_BOOKS_OF_YEAR";
export const SET_CURRENT_BOOK = "SET_CURRENT_BOOK";

const url =
  "https://raw.githubusercontent.com/cayque16/Projetos-em-Python/refs/heads/master/datas-de-leitura/livros/historico-geral.json";

export interface State {
  history: IHistory[];
  booksOfYear: IBook[];
  currentBook: IBook;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    history: [],
    booksOfYear: [],
  },
  mutations: {
    [SET_FULL_HISTORY](state: State, history: IHistory[]) {
      state.history = history;
    },
    [SET_BOOKS_OF_YEAR](state: State, books: IBook[]) {
      state.booksOfYear = books;
    },
    [SET_CURRENT_BOOK](state: State, book: IBook) {
      state.currentBook = book;
    },
  },
  actions: {
    async [GET_FULL_HISTORY](
      { commit }: ActionContext<State, State>,
      payload: { year: number; index: number }
    ) {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Error when searching history");
        const data = await response.json();
        const booksOfYear = data["data"].filter(
          (t: IHistory) => t.year == payload.year
        )[0].books;
        const index = payload.index || booksOfYear.length - 1;
        commit(SET_FULL_HISTORY, data["data"]);
        commit(SET_BOOKS_OF_YEAR, booksOfYear);
        commit(SET_CURRENT_BOOK, booksOfYear[index]);
      } catch (error) {
        console.error(error);
      }
    },
  },
});

export function useStore(): Store<State> {
  return vuexUseStore(key);
}
