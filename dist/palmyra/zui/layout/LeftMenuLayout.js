import { Sidebar as n } from "./Sidebar.js";
import { jsxs as r, jsx as e } from "react/jsx-runtime";
import { Outlet as a } from "react-router-dom";
import { Box as o, CssBaseline as l, Toolbar as m } from "@mui/material";
const x = (t) => {
  var i = t.sideBarWidth;
  return i || (i = "250px"), /* @__PURE__ */ r(o, { sx: { display: "flex" }, children: [
    /* @__PURE__ */ e(l, {}),
    /* @__PURE__ */ e("div", { children: " TopBar " }),
    /* @__PURE__ */ e(
      n,
      {
        LeftMenu: t.LeftMenu,
        appTitle: t.appTitle,
        width: i
      }
    ),
    /* @__PURE__ */ r(
      o,
      {
        component: "main",
        sx: {
          flexGrow: 1,
          p: 3,
          width: `calc(100% - ${i})`,
          minHeight: "100vh"
        },
        children: [
          /* @__PURE__ */ e(m, {}),
          /* @__PURE__ */ e(a, {})
        ]
      }
    )
  ] });
};
export {
  x as LeftMenuLayout
};
