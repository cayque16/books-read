import type { InjectionKey } from "vue";
import type IHistory from "../interfaces/IHistory";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import type { ActionContext } from "vuex";

export const SET_HISTORY = "SET_HISTORY";
export const GET_HISTORY = "GET_HISTORY";

export interface State {
  history: IHistory[];
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    history: [],
  },
  mutations: {
    [SET_HISTORY](state: State, history: IHistory[]) {
      state.history = history;
    },
  },
  actions: {
    async [GET_HISTORY]({ commit }: ActionContext<State, State>) {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/cayque16/Projetos-em-Python/refs/heads/master/datas-de-leitura/livros/historico-geral.json"
        );
        if (!response.ok) throw new Error("Error when searching history");
        const data = await response.json();
        commit(SET_HISTORY, data["data"]);
      } catch (error) {
        console.error(error);
      }
    },
  },
});

export function useStore(): Store<State> {
  return vuexUseStore(key);
}
