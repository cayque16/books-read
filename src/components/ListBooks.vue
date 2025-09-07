<script lang="ts">
import { defineComponent, type PropType } from "vue";
import type IBook from "../interfaces/IBook";
import { SET_CURRENT_BOOK, useStore } from "../store";

export default defineComponent({
  name: "ListBooks",
  props: {
    books: {
      type: Object as PropType<IBook[]>,
      required: true,
    },
  },
  setup() {
    const store = useStore();

    return {
      store,
    };
  },
  methods: {
    handleClickedBook(book: IBook) {
      this.store.commit(SET_CURRENT_BOOK, book);
    },
  },
});
</script>

<template>
  <ol reversed class="p-8 list-decimal pl-6 space-y-1">
    <li
      class="cursor-pointer hover:bg-slate-100 active:bg-slate-300 p-1 rounded"
      v-for="book in books.slice().reverse()"
      @click="handleClickedBook(book)"
    >
      {{ book.title }}
    </li>
  </ol>
</template>
