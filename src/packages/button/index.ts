import XButton from "./index.vue";
import { App } from "vue";
XButton.install = (app: App) => {
  app.component(XButton.name, XButton);
};

export default XButton as any;
