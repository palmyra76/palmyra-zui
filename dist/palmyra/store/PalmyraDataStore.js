var i = Object.defineProperty;
var h = (r, t, e) => t in r ? i(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var o = (r, t, e) => (h(r, typeof t != "symbol" ? t + "" : t, e), e);
import { NOOPDecorator as n } from "palmyra-rui";
class s {
  constructor(t, e, d) {
    o(this, "options");
    o(this, "authProvider", n);
    o(this, "idProperty");
    this.idProperty = t || "id", this.options = e, this.authProvider = d || n;
  }
  query(t) {
    throw new Error("Method not implemented.");
  }
  get(t) {
    throw new Error("Method not implemented.");
  }
  remove(t) {
    throw new Error("Method not implemented.");
  }
  getIdentity(t) {
    throw new Error("Method not implemented.");
  }
  getIdProperty() {
    return this.idProperty;
  }
  post(t, e) {
    throw new Error("Method not implemented.");
  }
  put(t, e) {
    throw new Error("Method not implemented.");
  }
}
export {
  s as PalmyraDataStore
};
