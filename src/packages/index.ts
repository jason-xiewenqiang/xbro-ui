import XButton from "./button/index";
import { App } from "vue";
const install = (app: App) => {
  app.use(XButton);
};

const XbroUI = {
  install,
};

export { XButton };
export default XbroUI;
