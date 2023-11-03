var o = Object.defineProperty;
var u = (e, i, t) => i in e ? o(e, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[i] = t;
var r = (e, i, t) => (u(e, typeof i != "symbol" ? i + "" : i, t), t);
import { TabBuilder as a } from "./TabBuilder.js";
class p {
  constructor(i) {
    r(this, "pageDefinition");
    this.pageDefinition = {
      tabs: [],
      type: i
    };
  }
  build() {
    return this.pageDefinition;
  }
  tab(i, t) {
    var n = this.pageDefinition.tabs.find((s) => s.name == i);
    if (n)
      return new a(n);
    var n = {
      sections: [],
      title: t,
      name: i
    };
    return this.pageDefinition.tabs.push(n), new a(n);
  }
}
export {
  p as PageBuilder
};
