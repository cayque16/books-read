import type { InjectionKey } from "vue";
import type IHistory from "../interfaces/IHistory";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import type { ActionContext } from "vuex";
import type IBook from "../interfaces/IBook";

export const SET_FULL_HISTORY = "SET_HISTORY";
export const GET_FULL_HISTORY = "GET_FULL_HISTORY";
export const GET_BOOKS_OF_YEAR = "GET_BOOKS_OF_YEAR";
export const SET_BOOKS_OF_YEAR = "SET_BOOKS_OF_YEAR";

const url =
  "https://raw.githubusercontent.com/cayque16/Projetos-em-Python/refs/heads/master/datas-de-leitura/livros/historico-geral.json";

export interface State {
  history: IHistory[];
  booksOfYear: IBook[];
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
  },
  actions: {
    async [GET_FULL_HISTORY]({ commit }: ActionContext<State, State>) {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Error when searching history");
        const data = await response.json();
        commit(SET_FULL_HISTORY, data["data"]);
      } catch (error) {
        console.error(error);
      }
    },
    async [GET_BOOKS_OF_YEAR](
      { commit }: ActionContext<State, State>,
      year: number
    ) {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Error when searching history");
        const data = await response.json();
        commit(
          SET_BOOKS_OF_YEAR,
          data["data"].filter((t: IHistory) => t.year == year)[0].books
        );
      } catch (error) {
        console.error(error);
      }
    },
  },
});

export function useStore(): Store<State> {
  return vuexUseStore(key);
}
