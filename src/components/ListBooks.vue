<script lang="ts">
import { defineComponent, type PropType } from "vue";
import type IBook from "../interfaces/IBook";

export default defineComponent({
  name: "ListBooks",
  props: {
    books: {
      type: Object as PropType<IBook[]>,
      required: true,
    },
  },
});
</script>

<template>
  <ol reversed class="p-8 list-decimal pl-6 space-y-1">
    <li v-for="book in books.slice().reverse()">{{ book.title }}</li>
  </ol>
</template>
