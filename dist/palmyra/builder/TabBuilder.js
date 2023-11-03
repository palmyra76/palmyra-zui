var u = Object.defineProperty;
var h = (r, t, i) => t in r ? u(r, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : r[t] = i;
var n = (r, t, i) => (h(r, typeof t != "symbol" ? t + "" : t, i), i);
import { FormSectionBuilder as o } from "./FormSectionBuilder.js";
import { GridSectionBuilder as a } from "./GridSectionBuilder.js";
class b {
  constructor(t) {
    n(this, "tab");
    this.tab = t;
  }
  viewFormSection(t, i) {
    return new o(this._section("view", t, i));
  }
  editFormSection(t, i) {
    return new o(this._section("form", t, i));
  }
  gridSection(t, i) {
    return new a(this._section("grid", t, i));
  }
  chartSection(t, i) {
    return this._section("chart", t, i);
  }
  _section(t, i, s) {
    var e = this.tab.sections.find((c) => c.name == i);
    return e || (e = {
      type: t,
      name: i,
      title: s
    }, this.tab.sections.push(e)), e;
  }
}
export {
  b as TabBuilder
};
