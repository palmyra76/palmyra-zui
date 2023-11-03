import { jsxs as c, Fragment as w, jsx as i } from "react/jsx-runtime";
import { useContext as x, useState as g, useEffect as V } from "react";
import { useParams as v } from "react-router-dom";
import { StoreFactoryContext as C } from "../PalmyraContext.js";
import { FlexiLayoutRenderer as D } from "palmyra-rui";
import { getMergedDefaults as L } from "./HandlerUtil.js";
const I = (m) => {
  const d = L(m), r = x(C), t = v(), [a, s] = g(null), [u, p] = g(null), y = (e) => {
    try {
      r.getPageLayout(t, e).then((o) => s(o)).catch(() => {
        s(null);
      });
    } catch (o) {
      console.log(o), console.log("Error while getting pageLayout");
    }
  }, f = () => {
    try {
      const o = t.id, P = r.getFormStore(t, F());
      var e = {
        key: o
      };
      P.get(e).then((l) => {
        console.log(l), p(l);
      });
    } catch (o) {
      console.log(o), console.log("Error while loading data");
    }
  };
  V(() => {
    y("view"), f();
  }, [t]);
  const h = (e) => {
    console.log(e);
  }, n = a, F = () => (n == null ? void 0 : n.idProperty) || d.idProperty || "id";
  return /* @__PURE__ */ c(w, { children: [
    /* @__PURE__ */ c("div", { children: [
      " ",
      t.pageName,
      " View Form"
    ] }),
    a ? /* @__PURE__ */ i(
      D,
      {
        layout: a,
        storeFactory: r,
        layoutParams: t,
        mode: "formView",
        data: u,
        callbacks: { onFormValidChange: h }
      }
    ) : /* @__PURE__ */ i("div", {})
  ] });
};
export {
  I as default
};
