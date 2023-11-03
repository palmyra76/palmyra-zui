import { jsxs as c, Fragment as P, jsx as i } from "react/jsx-runtime";
import { useContext as x, useState as d, useEffect as E } from "react";
import { useParams as C } from "react-router-dom";
import { StoreFactoryContext as L } from "../PalmyraContext.js";
import { FlexiLayoutRenderer as S } from "palmyra-rui";
const V = (g) => {
  const r = x(L), [m, u] = d(null), t = C(), [a, l] = d(null), y = (e) => {
    try {
      r.getPageLayout(t, e).then((o) => l(o)).catch(() => {
        l(null);
      });
    } catch (o) {
      console.log(o), console.log("Error while getting pageLayout");
    }
  }, p = () => {
    try {
      const o = t.id, F = r.getFormStore(t, f());
      var e = {
        key: o
      };
      F.get(e).then((s) => {
        console.log(s), u(s);
      });
    } catch (o) {
      console.log(o), console.log("Error while loading data");
    }
  }, n = a, f = () => (n == null ? void 0 : n.idProperty) || g.idProperty || "id";
  E(() => {
    y("edit"), p();
  }, [t]);
  const h = (e) => {
    console.log(e);
  };
  return /* @__PURE__ */ c(P, { children: [
    /* @__PURE__ */ c("div", { children: [
      " ",
      t.pageName,
      " Edit Form"
    ] }),
    a ? /* @__PURE__ */ i(
      S,
      {
        layout: a,
        storeFactory: r,
        layoutParams: t,
        mode: "formEdit",
        data: m,
        callbacks: { onFormValidChange: h }
      }
    ) : /* @__PURE__ */ i("div", {})
  ] });
};
export {
  V as default
};
