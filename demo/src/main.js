import { createApp } from "vue";
import "./style.css";
import Test from "../../dist/bundle-b2.mjs";

import { ElButton } from "element-plus";

import "element-plus/dist/index.css";
import App from "./App.vue";
console.log('Test: ', Test);
console.log('ElButton: ', ElButton);
const app = createApp(App);
app.use(ElButton);
app.use(Test);
app.mount("#app");
