import { S as A, i as F, s as H, h as M, e as h, a as m, u as S, t as g, b as j, d as b, c as J, f as y, g as C, j as N, k, n as v, l as w, m as R, o as U, p as D, q as W, r as z, v as q, w as E, x as O, y as B } from "./index.e08f71d5.js";
import { g as G } from "./Api.68e1448d.js";
import T from "./DownloadIcon.b41702da.js";
function V(o, e, t) {
  const l = o.slice();
  return l[10] = e[t], l;
}
function K(o) {
  let e, t, l = (
    /*error*/
    o[14].message + ""
  ), n, r, s;
  return {
    c() {
      e = h("p"), t = y("Error: "), n = y(l), r = C(), s = h("p"), s.innerHTML = `For support please visit one of our
      <a href="/discuss/">community discussion</a>
      groups.`, N(e, "color", "red");
    },
    m(u, d) {
      m(u, e, d), k(e, t), k(e, n), m(u, r, d), m(u, s, d);
    },
    p: v,
    i: v,
    o: v,
    d(u) {
      u && b(e), u && b(r), u && b(s);
    }
  };
}
function P(o) {
  let e, t, l, n, r, s, u;
  function d(p, $) {
    if (
      /*expertOptions*/
      p[1]
    )
      return X;
    if (
      /*showVersionSelection*/
      p[0]
    )
      return Q;
  }
  let _ = d(o), f = _ && _(o);
  const i = [le, te], a = [];
  function c(p, $) {
    return (
      /*win32*/
      p[3] ? 0 : 1
    );
  }
  return r = c(o), s = a[r] = i[r](o), {
    c() {
      f && f.c(), e = C(), t = h("div"), l = h("p"), l.textContent = `The Minecraft and Notebook Loader versions can be selected in the installer, this download\r
        works for the MC version you choose, the loader version depends on the MC version.`, n = C(), s.c(), w(t, "class", "download");
    },
    m(p, $) {
      f && f.m(p, $), m(p, e, $), m(p, t, $), k(t, l), k(t, n), a[r].m(t, null), u = !0;
    },
    p(p, $) {
      _ === (_ = d(p)) && f ? f.p(p, $) : (f && f.d(1), f = _ && _(p), f && (f.c(), f.m(e.parentNode, e))), s.p(p, $);
    },
    i(p) {
      u || (g(s), u = !0);
    },
    o(p) {
      j(s), u = !1;
    },
    d(p) {
      f && f.d(p), p && b(e), p && b(t), a[r].d();
    }
  };
}
function Q(o) {
  let e, t = {
    ctx: o,
    current: null,
    token: null,
    hasCatch: !1,
    pending: ee,
    then: Z,
    catch: Y,
    value: 13
  };
  return M(
    /*getVersion*/
    o[6](),
    t
  ), {
    c() {
      e = R(), t.block.c();
    },
    m(l, n) {
      m(l, e, n), t.block.m(l, t.anchor = n), t.mount = () => e.parentNode, t.anchor = e;
    },
    p(l, n) {
      o = l, S(t, o, n);
    },
    d(l) {
      l && b(e), t.block.d(l), t.token = null, t = null;
    }
  };
}
function X(o) {
  let e, t, l, n, r, s, u, d, _ = (
    /*data*/
    o[9]
  ), f = [];
  for (let i = 0; i < _.length; i += 1)
    f[i] = L(V(o, _, i));
  return {
    c() {
      e = y(`Installer Version:\r
      `), t = h("select");
      for (let i = 0; i < f.length; i += 1)
        f[i].c();
      l = C(), n = h("br"), r = C(), s = h("br"), N(t, "min-width", "200px"), /*selectedVersion*/
      o[2] === void 0 && U(() => (
        /*select_change_handler*/
        o[7].call(t)
      ));
    },
    m(i, a) {
      m(i, e, a), m(i, t, a);
      for (let c = 0; c < f.length; c += 1)
        f[c] && f[c].m(t, null);
      D(
        t,
        /*selectedVersion*/
        o[2],
        !0
      ), m(i, l, a), m(i, n, a), m(i, r, a), m(i, s, a), u || (d = W(
        t,
        "change",
        /*select_change_handler*/
        o[7]
      ), u = !0);
    },
    p(i, a) {
      if (a & /*versions*/
      16) {
        _ = /*data*/
        i[9];
        let c;
        for (c = 0; c < _.length; c += 1) {
          const p = V(i, _, c);
          f[c] ? f[c].p(p, a) : (f[c] = L(p), f[c].c(), f[c].m(t, null));
        }
        for (; c < f.length; c += 1)
          f[c].d(1);
        f.length = _.length;
      }
      a & /*selectedVersion, versions*/
      20 && D(
        t,
        /*selectedVersion*/
        i[2]
      );
    },
    d(i) {
      i && b(e), i && b(t), z(f, i), i && b(l), i && b(n), i && b(r), i && b(s), u = !1, d();
    }
  };
}
function Y(o) {
  return { c: v, m: v, p: v, d: v };
}
function Z(o) {
  var r;
  let e, t, l = (
    /*latest*/
    ((r = o[13]) == null ? void 0 : r.stable) && x(o)
  ), n = !/*expertOptions*/
  o[1] && I(o);
  return {
    c() {
      e = h("p"), l && l.c(), t = C(), n && n.c();
    },
    m(s, u) {
      m(s, e, u), l && l.m(e, null), k(e, t), n && n.m(e, null);
    },
    p(s, u) {
      var d;
      /*latest*/
      (d = s[13]) != null && d.stable && l.p(s, u), /*expertOptions*/
      s[1] ? n && (n.d(1), n = null) : n ? n.p(s, u) : (n = I(s), n.c(), n.m(e, null));
    },
    d(s) {
      s && b(e), l && l.d(), n && n.d();
    }
  };
}
function x(o) {
  let e, t = (
    /*latest*/
    o[13].version + ""
  ), l, n;
  return {
    c() {
      e = y("Installer Version: "), l = y(t), n = y(" (Latest)");
    },
    m(r, s) {
      m(r, e, s), m(r, l, s), m(r, n, s);
    },
    p: v,
    d(r) {
      r && b(e), r && b(l), r && b(n);
    }
  };
}
function I(o) {
  let e, t, l;
  return {
    c() {
      e = h("a"), e.textContent = "Show beta versions", w(e, "href", "#");
    },
    m(n, r) {
      m(n, e, r), t || (l = W(e, "click", B(
        /*showExpertOptions*/
        o[5]
      )), t = !0);
    },
    p: v,
    d(n) {
      n && b(e), t = !1, l();
    }
  };
}
function ee(o) {
  return { c: v, m: v, p: v, d: v };
}
function L(o) {
  let e, t = (
    /*version*/
    o[10].version + ""
  ), l;
  return {
    c() {
      e = h("option"), l = y(t), e.__value = /*version*/
      o[10].url, e.value = e.__value;
    },
    m(n, r) {
      m(n, e, r), k(e, l);
    },
    p: v,
    d(n) {
      n && b(e);
    }
  };
}
function te(o) {
  let e, t, l, n, r, s, u, d, _, f, i;
  return l = new T({}), {
    c() {
      e = h("p"), t = h("a"), q(l.$$.fragment), n = y(" Download installer (Universal/.JAR)"), r = C(), s = h("br"), u = C(), d = h("a"), _ = y("Download for Windows"), w(t, "class", "button primary large"), w(
        t,
        "href",
        /*selectedVersion*/
        o[2]
      ), w(d, "href", f = /*selectedVersion*/
      o[2].replace(".jar", ".exe"));
    },
    m(a, c) {
      m(a, e, c), k(e, t), E(l, t, null), k(t, n), k(e, r), k(e, s), k(e, u), k(e, d), k(d, _), i = !0;
    },
    p(a, c) {
      (!i || c & /*selectedVersion, versions*/
      20) && w(
        t,
        "href",
        /*selectedVersion*/
        a[2]
      ), (!i || c & /*selectedVersion, versions*/
      20 && f !== (f = /*selectedVersion*/
      a[2].replace(".jar", ".exe"))) && w(d, "href", f);
    },
    i(a) {
      i || (g(l.$$.fragment, a), i = !0);
    },
    o(a) {
      j(l.$$.fragment, a), i = !1;
    },
    d(a) {
      a && b(e), O(l);
    }
  };
}
function le(o) {
  let e, t, l, n, r, s, u, d, _, f, i;
  return l = new T({}), {
    c() {
      e = h("p"), t = h("a"), q(l.$$.fragment), n = y(" Download for Windows"), s = C(), u = h("br"), d = C(), _ = h("a"), f = y("Download universal jar"), w(t, "class", "button primary large"), w(t, "href", r = /*selectedVersion*/
      o[2].replace(".jar", ".exe")), w(
        _,
        "href",
        /*selectedVersion*/
        o[2]
      );
    },
    m(a, c) {
      m(a, e, c), k(e, t), E(l, t, null), k(t, n), k(e, s), k(e, u), k(e, d), k(e, _), k(_, f), i = !0;
    },
    p(a, c) {
      (!i || c & /*selectedVersion, versions*/
      20 && r !== (r = /*selectedVersion*/
      a[2].replace(".jar", ".exe"))) && w(t, "href", r), (!i || c & /*selectedVersion, versions*/
      20) && w(
        _,
        "href",
        /*selectedVersion*/
        a[2]
      );
    },
    i(a) {
      i || (g(l.$$.fragment, a), i = !0);
    },
    o(a) {
      j(l.$$.fragment, a), i = !1;
    },
    d(a) {
      a && b(e), O(l);
    }
  };
}
function ne(o) {
  let e;
  return {
    c() {
      e = h("p"), e.textContent = "Loading versions..";
    },
    m(t, l) {
      m(t, e, l);
    },
    p: v,
    i: v,
    o: v,
    d(t) {
      t && b(e);
    }
  };
}
function oe(o) {
  let e, t, l = {
    ctx: o,
    current: null,
    token: null,
    hasCatch: !0,
    pending: ne,
    then: P,
    catch: K,
    value: 9,
    error: 14,
    blocks: [, , ,]
  };
  return M(
    /*versions*/
    o[4],
    l
  ), {
    c() {
      e = h("main"), l.block.c();
    },
    m(n, r) {
      m(n, e, r), l.block.m(e, l.anchor = null), l.mount = () => e, l.anchor = null, t = !0;
    },
    p(n, [r]) {
      o = n, S(l, o, r);
    },
    i(n) {
      t || (g(l.block), t = !0);
    },
    o(n) {
      for (let r = 0; r < 3; r += 1) {
        const s = l.blocks[r];
        j(s);
      }
      t = !1;
    },
    d(n) {
      n && b(e), l.block.d(), l.token = null, l = null;
    }
  };
}
function re(o, e, t) {
  const l = navigator.platform == "Win32";
  let n = !1, r = !1, s = "", u = d();
  async function d() {
    var c;
    const a = await G();
    return t(2, s = ((c = a.find((p) => p.stable)) == null ? void 0 : c.url) ?? ""), t(0, n = a[0].stable == !1), a;
  }
  function _() {
    t(1, r = !0);
  }
  async function f() {
    return (await u).find((a) => a.url === s);
  }
  function i() {
    s = J(this), t(2, s), t(4, u);
  }
  return [
    n,
    r,
    s,
    l,
    u,
    _,
    f,
    i
  ];
}
class fe extends A {
  constructor(e) {
    super(), F(this, e, re, oe, H, {});
  }
}
export {
  fe as default
};
