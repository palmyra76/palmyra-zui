var s = Object.defineProperty;
var a = (t, r, o) => r in t ? s(t, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[r] = o;
var e = (t, r, o) => (a(t, typeof r != "symbol" ? r + "" : r, o), o);
import { NOOPDecorator as i } from "palmyra-rui";
class m {
  constructor(r, o) {
    e(this, "options");
    e(this, "authProvider", i);
    this.options = r, this.authProvider = o || i;
  }
  query(r) {
    throw new Error("Method not implemented.");
  }
}
export {
  m as PalmyraChartStore
};
