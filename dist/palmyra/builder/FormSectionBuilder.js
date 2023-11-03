var u = Object.defineProperty;
var n = (s, e, t) => e in s ? u(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var r = (s, e, t) => (n(s, typeof e != "symbol" ? e + "" : e, t), t);
class a {
  constructor(e) {
    r(this, "section");
    this.section = e, this.section.formLayout = {
      fields: []
    };
  }
  _getLayout() {
    return this.section.formLayout;
  }
  getField(e) {
    return this._getLayout().fields.find((t) => t.name = e);
  }
  field(e, t, o, i) {
    i || (i = e);
    var d = {
      name: e,
      title: o,
      type: t,
      attribute: i,
      errorMessage: {
        default: "Invalid"
      }
    };
    return this._getLayout().fields.push(d), this;
  }
  addFields(e) {
    return e.map((t) => {
      this._getLayout().fields.push(t);
    }), this;
  }
}
export {
  a as FormSectionBuilder
};
