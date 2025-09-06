<script lang="ts">
import { defineComponent, type PropType } from "vue";
import type IBook from "../interfaces/IBook";

export default defineComponent({
  name: "TableBook",
  props: {
    book: {
      type: Object as PropType<IBook>,
      required: true,
    },
  },
  setup(props) {
    const DAYS_TO_READ = 20;
    const returnDateFormat = (daysToAdd: number): string => {
      const date = new Date(props.book.startDate);
      date.setDate(date.getDate() + daysToAdd);

      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();

      return `${day}/${month}/${year}`;
    };

    const returnProgress = (index: number): string => {
      let percent = 5;
      let result = String(percent * index) + "%";

      if (props.book.totalPage > 0) {
        percent = Math.floor(props.book.totalPage / DAYS_TO_READ);
        const rest = props.book.totalPage % DAYS_TO_READ;
        const addOne = index <= rest ? 1 : rest;
        result = String(percent * index + addOne);
      }

      return result;
    };

    return {
      DAYS_TO_READ,
      returnDateFormat,
      returnProgress,
    };
  },
});
</script>

<template>
  <h3 class="font-semibold text-center mb-3">{{ book.title }}</h3>
  <div class="overflow-auto max-h-80">
    <table class="min-w-full text-left text-xs sm:text-sm">
      <thead class="sticky top-0 bg-slate-100 text-slate-600">
        <tr>
          <th class="px-2 py-2 font-medium">Data</th>
          <th class="px-2 py-2 font-medium">Progresso</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-200">
        <tr v-for="i in DAYS_TO_READ" :key="i">
          <td class="px-2 py-2">{{ returnDateFormat(i) }}</td>
          <td class="px-2 py-2">{{ returnProgress(i) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
