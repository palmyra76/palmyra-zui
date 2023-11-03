var u = Object.defineProperty;
var l = (i, t, e) => t in i ? u(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var o = (i, t, e) => (l(i, typeof t != "symbol" ? t + "" : t, e), e);
class a {
  constructor(t) {
    o(this, "section");
    this.section = t, this.section.tableLayout = {
      fields: []
    };
  }
  _getLayout() {
    return this.section.tableLayout;
  }
  getField(t) {
    return this._getLayout().fields.find((e) => e.name = t);
  }
  field(t, e, r, s) {
    s || (s = t);
    var d = {
      title: r,
      type: e,
      name: t,
      attribute: s
    };
    return this._getLayout().fields.push(d), this;
  }
  addFields(t) {
    return t.map((e) => {
      this._getLayout().fields.push(e);
    }), this;
  }
}
export {
  a as GridSectionBuilder
};
