<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import TableBook from "./components/TableBook.vue";
import ListBooks from "./components/ListBooks.vue";

export default defineComponent({
  name: "App",
  components: {
    TableBook,
    ListBooks,
  },

  setup() {
    const yearSelect = ref("");
    const book = {
      id: 1,
      title: "O Corretor",
      startDate: "2025-08-25",
      totalPage: 0,
    };

    const books: IBook[] = [];

    books.push({
      id: 1,
      title: "O Corretor",
      startDate: "2025-08-25",
      totalPage: 0,
    });

    books.push({
      id: 2,
      title: "A Empregada esta de olho",
      startDate: "2025-08-25",
      totalPage: 0,
    });

    books.push({
      id: 3,
      title: "O Rio Que Passou Em Minha Vida",
      startDate: "2025-08-25",
      totalPage: 0,
    });
    return {
      book,
      books,
      yearSelect,
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
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
      </select>
    </div>
    <TableBook :book="book" />
    <ListBooks :books="books" />
  </div>
</template>

<style scoped></style>
