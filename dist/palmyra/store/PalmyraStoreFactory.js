import { StringFormat as n } from "palmyra-rui";
import { PalmyraDataStore as e } from "./PalmyraDataStore.js";
import { PalmyraChartStore as m } from "./PalmyraChartStore.js";
class f {
  getMenuStore() {
    throw new Error("not implemented");
  }
  getPageLayout(r, t) {
    var o = n("/api/webconfig/{pageName}/{action}.json", { ...r, action: t });
    return fetch(o).then((a) => a.json());
  }
  getGridStore(r, t) {
    return new e(t, r);
  }
  getLookupStore(r, t) {
    throw new Error("Not yet implemented");
  }
  getFormStore(r, t) {
    return new e(t, r);
  }
  getChartStore(r) {
    return new m(r);
  }
}
export {
  f as default
};
