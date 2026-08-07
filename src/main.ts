import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { key, store } from "./store";
import { useDarkMode } from "./utils/use-dark-mode.ts";

useDarkMode().init();

createApp(App).use(store, key).mount("#app");
