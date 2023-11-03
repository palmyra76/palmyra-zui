import { jsxs as s, Fragment as i, jsx as l } from "react/jsx-runtime";
import { useContext as g, useState as u, useEffect as d } from "react";
import { useParams as p } from "react-router-dom";
import { StoreFactoryContext as f } from "../PalmyraContext.js";
import { FlexiLayoutRenderer as y } from "palmyra-rui";
const L = (h) => {
  const a = g(f), o = p(), [r, n] = u(null), c = (e) => {
    try {
      a.getPageLayout(o, e).then((t) => n(t)).catch(() => {
        n(null);
      });
    } catch (t) {
      console.log(t), console.log("Error while getting pageLayout");
    }
  };
  d(() => {
    c("new");
  }, [o]);
  const m = (e) => {
    console.log(e);
  };
  return /* @__PURE__ */ s(i, { children: [
    /* @__PURE__ */ s("div", { children: [
      " ",
      o.pageName,
      " View Form"
    ] }),
    r ? /* @__PURE__ */ l(
      y,
      {
        layout: r,
        storeFactory: a,
        layoutParams: o,
        mode: "formEdit",
        callbacks: { onFormValidChange: m }
      }
    ) : /* @__PURE__ */ l("div", {})
  ] });
};
export {
  L as default
};
