import "../../../assets/Sidebar.css";
import { jsx as e, jsxs as t } from "react/jsx-runtime";
import { List as o, Toolbar as n, Stack as s, Typography as l, Drawer as c } from "@mui/material";
const f = (r) => {
  const a = r.LeftMenu, i = r.width;
  let d = /* @__PURE__ */ e(o, { disablePadding: !0, children: /* @__PURE__ */ t("div", { className: "sidebar", children: [
    /* @__PURE__ */ e("div", { className: "sidebar-header", children: /* @__PURE__ */ e(n, { sx: { marginBottom: "20px" }, children: /* @__PURE__ */ e(
      s,
      {
        sx: { width: "100%" },
        direction: "row",
        position: "relative",
        justifyContent: "center",
        children: /* @__PURE__ */ e(l, { variant: "h6", children: r.appTitle })
      }
    ) }) }),
    /* @__PURE__ */ e("div", { className: "sidebar-middle", children: /* @__PURE__ */ e(a, {}) }),
    /* @__PURE__ */ e("div", { className: "sidebar-footer", children: /* @__PURE__ */ e("p", { className: "sidebar-footer-text", children: "Powered by Palmyra" }) })
  ] }) });
  return /* @__PURE__ */ e(
    c,
    {
      variant: "permanent",
      sx: {
        width: i,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: i,
          boxSizing: "border-box",
          borderRight: "0px",
          backgroundColor: "#2A3F54",
          color: "#ffffffef"
        }
      },
      children: d
    }
  );
};
export {
  f as Sidebar
};
