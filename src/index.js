import { Orve, createApp } from "orve";

import App from "./app";
import Plugin from "./plugin";


Orve.use(Plugin);
createApp(App).mount("#app");