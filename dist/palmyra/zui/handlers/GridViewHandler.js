import { jsxs as l, Fragment as f, jsx as d } from "react/jsx-runtime";
import { useContext as P, useState as h, useEffect as m } from "react";
import { useParams as v, useNavigate as b } from "react-router-dom";
import { StoreFactoryContext as L } from "../PalmyraContext.js";
import { topic as g, StringFormat as w, FlexiLayoutRenderer as x } from "palmyra-rui";
import { getMergedDefaults as F } from "./HandlerUtil.js";
const H = (e) => {
  const n = F(e), r = P(L), t = v(), [o, u] = h(null), p = b(), y = (s) => {
    try {
      r.getPageLayout(t, s).then((i) => u(i)).catch(() => {
        u(null);
      });
    } catch (i) {
      console.log(i), console.log("Error while getting pageLayout");
    }
  };
  m(() => {
    y("grid");
  }, [t]);
  const a = C(o);
  return m(() => {
    const s = (o == null ? void 0 : o.idProperty) || n.idProperty || "id";
    var i = g.subscribe("viewPage", (G, c) => {
      c.id = c[s], p(w("view/{id}", c));
    });
    return () => {
      g.unsubscribe(i);
    };
  }, [t.pageName, a == null ? void 0 : a.idProperty]), /* @__PURE__ */ l(f, { children: [
    /* @__PURE__ */ l("div", { children: [
      " ",
      t.pageName,
      " Grid View"
    ] }),
    o ? /* @__PURE__ */ d(
      x,
      {
        layout: a,
        mode: "grid",
        storeFactory: r,
        layoutParams: t
      }
    ) : /* @__PURE__ */ d("div", { children: " Grid Layout Definition not found" })
  ] });
};
function C(e) {
  var n, r;
  if (e) {
    const t = e, o = (r = (n = t.tabs[0]) == null ? void 0 : n.sections[0]) == null ? void 0 : r.tableLayout;
    return o && (o.actionOptions = {
      onClick: {
        topic: "viewPage"
      }
    }), t;
  }
  return e;
}
export {
  H as default
};
