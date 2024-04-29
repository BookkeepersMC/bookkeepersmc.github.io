import { S as b, i as _, s as $, e as u, v as C, g as f, l as I, a as h, w as v, k as p, q as w, t as U, b as V, d as x, x as k, z as R } from "./index.e08f71d5.js";
import S from "./LegacyVersion.d31f6683.js";
import "./Api.5e65932a.js";
function q(o) {
  let t, e, a, c, l, n, s, i, m, g = {};
  return e = new S({ props: g }), o[2](e), {
    c() {
      t = u("main"), C(e.$$.fragment), a = f(), c = u("br"), l = f(), n = u("button"), n.textContent = "Copy MCUpdater Import entry", I(n, "class", "button primary large");
    },
    m(r, d) {
      h(r, t, d), v(e, t, null), p(t, a), p(t, c), p(t, l), p(t, n), s = !0, i || (m = w(
        n,
        "click",
        /*copyImportEntry*/
        o[1]
      ), i = !0);
    },
    p(r, [d]) {
      const y = {};
      e.$set(y);
    },
    i(r) {
      s || (U(e.$$.fragment, r), s = !0);
    },
    o(r) {
      V(e.$$.fragment, r), s = !1;
    },
    d(r) {
      r && x(t), o[2](null), k(e), i = !1, m();
    }
  };
}
function L(o, t) {
  return `<Import url="${`https://fabricmc.net/download/mcupdater?yarn=${encodeURIComponent(o)}&amp;loader=${encodeURIComponent(t)}`}">fabric</Import>`;
}
function M(o, t, e) {
  let a;
  async function c() {
    const { yarnVersion: n, loaderVersion: s } = await a.getSelectedVersions(), i = L(n, s);
    return navigator.clipboard.writeText(i);
  }
  function l(n) {
    R[n ? "unshift" : "push"](() => {
      a = n, e(0, a);
    });
  }
  return [a, c, l];
}
class j extends b {
  constructor(t) {
    super(), _(this, t, M, q, $, {});
  }
}
export {
  j as default
};
