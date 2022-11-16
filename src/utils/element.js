import Vue from "vue";
import "element-ui/lib/theme-chalk/index.css";
import {
  Container,
  Header,
  Main,
  Footer,
  Divider,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Icon,
  Button,
  Message,
  Empty,
  Popover,
} from "element-ui";

Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Divider);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Icon);
Vue.use(Button);
Vue.use(Empty);
Vue.use(Popover);

Vue.prototype.$message = Message;
