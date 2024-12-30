import '../../assets/index.css';import { jsxs as s, jsx as e } from "react/jsx-runtime";
import { useState as t, useMemo as j, useEffect as E } from "react";
const i = "data:image/svg+xml,%3c?xml%20version='1.0'%20?%3e%3csvg%20viewBox='0%200%2032%2032'%20xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:none;}%3c/style%3e%3c/defs%3e%3ctitle/%3e%3cg%20data-name='Layer%202'%20id='Layer_2'%3e%3cpath%20d='M16,21a1,1,0,0,1-.71-.29l-8-8a1,1,0,1,1,1.42-1.42L16,18.59l7.29-7.3a1,1,0,0,1,1.42,1.42l-8,8A1,1,0,0,1,16,21Z'/%3e%3c/g%3e%3cg%20id='frame'%3e%3crect%20class='cls-1'%20height='32'%20width='32'/%3e%3c/g%3e%3c/svg%3e", m = "data:image/svg+xml,%3c?xml%20version='1.0'%20?%3e%3csvg%20viewBox='0%200%2032%2032'%20xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:none;stroke:%23000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}%3c/style%3e%3c/defs%3e%3ctitle/%3e%3cg%20id='chevron-top'%3e%3cline%20class='cls-1'%20x1='16'%20x2='25'%20y1='11.5'%20y2='20.5'/%3e%3cline%20class='cls-1'%20x1='7'%20x2='16'%20y1='20.5'%20y2='11.5'/%3e%3c/g%3e%3c/svg%3e", O = "data:image/svg+xml,%3c?xml%20version='1.0'%20?%3e%3csvg%20viewBox='0%200%2032%2032'%20xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23101820;}%3c/style%3e%3c/defs%3e%3ctitle/%3e%3cg%20data-name='Layer%2039'%20id='Layer_39'%3e%3cpath%20class='cls-1'%20d='M4,28a3,3,0,0,1-3-3V7A3,3,0,0,1,4,4h7a1,1,0,0,1,.77.36L14.8,8H27a1,1,0,0,1,0,2H14.33a1,1,0,0,1-.76-.36L10.53,6H4A1,1,0,0,0,3,7V25a1,1,0,0,0,1,1,1,1,0,0,1,0,2Z'/%3e%3cpath%20class='cls-1'%20d='M25.38,28H4a1,1,0,0,1-1-1.21l3-14A1,1,0,0,1,7,12H30a1,1,0,0,1,1,1.21L28.32,25.63A3,3,0,0,1,25.38,28ZM5.24,26H25.38a1,1,0,0,0,1-.79L28.76,14h-21Z'/%3e%3c/g%3e%3c/svg%3e", v = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIGhlaWdodD0iNTEycHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik00NjMuNTE4LDk0LjkwOUgxOTMuODg1di0xMC4zN2MwLTIyLjkwOC0xOC41NzQtNDEuNDgyLTQxLjQ4Mi00MS40ODJINDguNjk5ICBjLTIyLjkwOCwwLTQxLjQ4MiwxOC41NzQtNDEuNDgyLDQxLjQ4MnY1MS44NTJ2NzIuNTkzdjIxNy43OGMwLDIyLjkwNywxOC41NzQsNDEuNDgyLDQxLjQ4Miw0MS40ODJoNDE0LjgxOSAgYzIyLjkwOCwwLDQxLjQ4Mi0xOC41NzUsNDEuNDgyLTQxLjQ4MlYxMzYuMzkxQzUwNSwxMTMuNDgzLDQ4Ni40MjYsOTQuOTA5LDQ2My41MTgsOTQuOTA5eiBNMjcuOTU4LDg0LjUzOSAgYzAtMTEuNDM1LDkuMzA4LTIwLjc0MSwyMC43NDEtMjAuNzQxaDEwMy43MDVjMTEuNDMzLDAsMjAuNzQxLDkuMzA2LDIwLjc0MSwyMC43NDF2MTAuMzd2MjAuNzQxaDIwLjc0MWgyNjkuNjMzICBjMTEuNDMzLDAsMjAuNzQxLDkuMzA2LDIwLjc0MSwyMC43NDF2MjAuNzQxSDI3Ljk1OHYtMjAuNzQxVjg0LjUzOXogTTQ2My41MTgsNDQ3LjUwNkg0OC42OTljLTExLjQzMywwLTIwLjc0MS05LjMwNy0yMC43NDEtMjAuNzQxICB2LTIxNy43OHYtMzEuMTExaDQ1Ni4zMDF2MjQ4Ljg5MkM0ODQuMjU5LDQzOC4xOTgsNDc0Ljk1Miw0NDcuNTA2LDQ2My41MTgsNDQ3LjUwNnoiIGZpbGw9IiMzNzQwNEQiLz48L3N2Zz4K", p = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDQ4IDQ4IiBoZWlnaHQ9IjQ4cHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA0OCA0OCIgd2lkdGg9IjQ4cHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTM3LDQ3SDExYy0yLjIwOSwwLTQtMS43OTEtNC00VjVjMC0yLjIwOSwxLjc5MS00LDQtNGgxOC45NzMgIGMwLjAwMiwwLDAuMDA1LDAsMC4wMDcsMGgwLjAySDMwYzAuMzIsMCwwLjU5MywwLjE2MSwwLjc3NiwwLjM5NWw5LjgyOSw5LjgyOUM0MC44NCwxMS40MDcsNDEsMTEuNjgsNDEsMTJsMCwwdjAuMDIxICBjMCwwLjAwMiwwLDAuMDAzLDAsMC4wMDVWNDNDNDEsNDUuMjA5LDM5LjIwOSw0NywzNyw0N3ogTTMxLDQuMzgxVjExaDYuNjE5TDMxLDQuMzgxeiBNMzksMTNoLTljLTAuNTUzLDAtMS0wLjQ0OC0xLTFWM0gxMSAgQzkuODk2LDMsOSwzLjg5Niw5LDV2MzhjMCwxLjEwNCwwLjg5NiwyLDIsMmgyNmMxLjEwNCwwLDItMC44OTYsMi0yVjEzeiBNMzMsMzlIMTVjLTAuNTUzLDAtMS0wLjQ0Ny0xLTFjMC0wLjU1MiwwLjQ0Ny0xLDEtMWgxOCAgYzAuNTUzLDAsMSwwLjQ0OCwxLDFDMzQsMzguNTUzLDMzLjU1MywzOSwzMywzOXogTTMzLDMxSDE1Yy0wLjU1MywwLTEtMC40NDctMS0xYzAtMC41NTIsMC40NDctMSwxLTFoMThjMC41NTMsMCwxLDAuNDQ4LDEsMSAgQzM0LDMwLjU1MywzMy41NTMsMzEsMzMsMzF6IE0zMywyM0gxNWMtMC41NTMsMC0xLTAuNDQ3LTEtMWMwLTAuNTUyLDAuNDQ3LTEsMS0xaDE4YzAuNTUzLDAsMSwwLjQ0OCwxLDFDMzQsMjIuNTUzLDMzLjU1MywyMywzMywyMyAgeiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+Cg==", h = 14, x = ({ space: L }) => /* @__PURE__ */ e(
  "span",
  {
    className: "vertical-line",
    style: {
      left: `${L * 4}px`
    }
  }
), Z = ({
  fileStructure: L,
  icons: M,
  level: D = 0,
  onItemClick: c,
  isRootExpanded: g = !1
}) => {
  const [N, l] = t(!1), d = (w, Q, C) => w ?? Q ?? C, I = j(() => d(L.icon, M == null ? void 0 : M.fileIcon, p), [L.icon, M == null ? void 0 : M.fileIcon]), y = j(
    () => d(
      L == null ? void 0 : L.icon,
      M == null ? void 0 : M.folderOpenIcon,
      O
    ),
    [L == null ? void 0 : L.icon, M == null ? void 0 : M.folderOpenIcon]
  ), n = j(
    () => d(
      L == null ? void 0 : L.icon,
      M == null ? void 0 : M.folderClosedIcon,
      v
    ),
    [L == null ? void 0 : L.icon, M == null ? void 0 : M.folderClosedIcon]
  ), T = (M == null ? void 0 : M.chevronUpIcon) ?? m, o = (M == null ? void 0 : M.chevronDownIcon) ?? i, a = (M == null ? void 0 : M.size) ?? h, z = () => {
    c && c(L.id);
  }, A = (w) => {
    w.preventDefault(), w.stopPropagation(), l(!N);
  };
  return E(() => {
    l(g);
  }, [g]), L.isFolder ? /* @__PURE__ */ s("div", { className: "explorer-folder", children: [
    D > 0 && /* @__PURE__ */ e(x, { space: D }),
    /* @__PURE__ */ s("div", { className: "folder-header", onClick: z, children: [
      /* @__PURE__ */ s(
        "span",
        {
          className: "folder-name",
          style: { paddingLeft: `${D * 4}px` },
          children: [
            /* @__PURE__ */ e(
              "img",
              {
                src: N ? y : n,
                width: a
              }
            ),
            L.name
          ]
        }
      ),
      /* @__PURE__ */ e("button", { className: "folder-chevron", onClick: A, children: /* @__PURE__ */ e(
        "img",
        {
          src: N ? T : o,
          width: a
        }
      ) })
    ] }),
    /* @__PURE__ */ e("div", { className: `folder-contents ${N ? "expanded" : "collapsed"}`, children: L.items.map((w) => /* @__PURE__ */ e(
      Z,
      {
        fileStructure: w,
        icons: M,
        level: D + 4,
        onItemClick: c
      },
      w.id
    )) })
  ] }) : /* @__PURE__ */ s("div", { className: "explorer-file", style: { paddingLeft: `${D * 4}px` }, children: [
    /* @__PURE__ */ e(x, { space: D }),
    /* @__PURE__ */ s("div", { className: "file-item", onClick: z, children: [
      /* @__PURE__ */ e("img", { src: I, width: a }),
      /* @__PURE__ */ e("span", { children: L.name })
    ] })
  ] });
};
export {
  Z as Explorer
};
