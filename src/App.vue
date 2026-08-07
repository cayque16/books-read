<script lang="ts">
import { defineComponent, ref, computed, watchEffect } from "vue";
import { useDarkMode } from "./utils/use-dark-mode";
import TableBook from "./components/TableBook.vue";
import ListBooks from "./components/ListBooks.vue";
import Footer from "./components/Footer.vue";
import { GET_FULL_HISTORY, useStore } from "./store";

export default defineComponent({
  name: "App",
  components: {
    TableBook,
    ListBooks,
    Footer,
  },
  setup() {
    const yearSelect = ref(new Date().getFullYear());

    const store = useStore();

    const { isDark, toggle } = useDarkMode();

    watchEffect(() => {
      store.dispatch(GET_FULL_HISTORY, yearSelect.value);
    });

    return {
      yearSelect,
      history: computed(() => store.state.history),
      books: computed(() => store.state.booksOfYear),
      book: computed(() => store.state.currentBook),
      isDark,
      toggle,
    };
  },
});
</script>

<template>
  <div
    class="bg-slate-50 dark:bg-zinc-950 text-slate-900 dark:text-slate-100 p-4 sm:p-6 font-ubuntu"
  >
    <div class="w-full flex justify-end px-4 pt-4">
      <button
        @click="toggle"
        :title="isDark ? 'Ativar modo claro' : 'Ativar modo escuro'"
        class="flex items-center justify-center w-9 h-9 rounded-full bg-white/80 dark:bg-gray-800/80 shadow hover:bg-white dark:hover:bg-gray-700 transition"
      >
        <span class="text-base leading-none">{{ isDark ? "☀️" : "🌙" }}</span>
      </button>
    </div>
    <div class="relative text-center">
      <select
        v-model="yearSelect"
        class="bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-100 font-bold text-center py-2 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500"
      >
        <option v-for="value in history" :value="value.year" :key="value.year">
          {{ value.year }}
        </option>
      </select>
    </div>
    <TableBook :book="book" />
    <ListBooks :books="books" />
    <Footer />
  </div>
</template>

<style scoped></style>
