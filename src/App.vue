<script lang="ts">
import { defineComponent, ref, onMounted, computed, watchEffect } from "vue";
import TableBook from "./components/TableBook.vue";
import ListBooks from "./components/ListBooks.vue";
import { key } from "@/store";
import { GET_FULL_HISTORY, GET_BOOKS_OF_YEAR, useStore } from "@/store";

export default defineComponent({
  name: "App",
  components: {
    TableBook,
    ListBooks,
  },
  setup() {
    const yearSelect = ref(new Date().getFullYear());

    const store = useStore();
    store.dispatch(GET_FULL_HISTORY);

    watchEffect(() => {
      store.dispatch(GET_BOOKS_OF_YEAR, yearSelect.value);
    });

    return {
      yearSelect,
      history: computed(() => store.state.history),
      books: computed(() => store.state.booksOfYear),
    };
  },
});
</script>

<template>
  <div
    class="rounded-2xl bg-white/70 backdrop-blur shadow-sm border border-slate-200 p-4 sm:p-6 font-ubuntu"
  >
    <div class="relative text-center">
      <select
        v-model="yearSelect"
        class="bg-slate-100 text-gray-800 font-bold text-center py-2 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500"
      >
        <option v-for="value in history" :value="value.year" :key="value.year">
          {{ value.year }}
        </option>
      </select>
    </div>
    <!-- <TableBook :book="history[0].books[19]" /> -->
    <ListBooks :books="books" />
  </div>
</template>

<style scoped></style>
