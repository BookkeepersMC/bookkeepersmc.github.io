import { S as A, i as F, s as H, h as M, e as d, a as b, u as S, t as $, b as D, d as m, c as J, f as y, g as v, j as N, k as h, n as w, l as g, m as R, o as U, p as V, q as W, r as z, v as q, w as E, x as O, y as B } from "./index.e08f71d5.js";
import { g as G } from "./Api.5e65932a.js";
import T from "./DownloadIcon.b41702da.js";
function I(i, e, t) {
  const l = i.slice();
  return l[10] = e[t], l;
}
function K(i) {
  let e, t, l = (
    /*error*/
    i[14].message + ""
  ), o, r, s;
  return {
    c() {
      e = d("p"), t = y("Error: "), o = y(l), r = v(), s = d("p"), s.innerHTML = `For support please visit one of our
      <a href="/discuss/">community discussion</a>
      groups.`, N(e, "color", "red");
    },
    m(c, u) {
      b(c, e, u), h(e, t), h(e, o), b(c, r, u), b(c, s, u);
    },
    p: w,
    i: w,
    o: w,
    d(c) {
      c && m(e), c && m(r), c && m(s);
    }
  };
}
function P(i) {
  let e, t, l, o, r, s, c;
  function u(p, C) {
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
  let f = u(i), n = f && f(i);
  const a = [le, te], k = [];
  function _(p, C) {
    return (
      /*win32*/
      p[3] ? 0 : 1
    );
  }
  return r = _(i), s = k[r] = a[r](i), {
    c() {
      n && n.c(), e = v(), t = d("div"), l = d("p"), l.textContent = `The Minecraft and Notebook Loader versions can be selected in the installer, this download\r
        works for the MC version you choose, the loader version depends on the MC version.`, o = v(), s.c(), g(t, "class", "download");
    },
    m(p, C) {
      n && n.m(p, C), b(p, e, C), b(p, t, C), h(t, l), h(t, o), k[r].m(t, null), c = !0;
    },
    p(p, C) {
      f === (f = u(p)) && n ? n.p(p, C) : (n && n.d(1), n = f && f(p), n && (n.c(), n.m(e.parentNode, e)));
    },
    i(p) {
      c || ($(s), c = !0);
    },
    o(p) {
      D(s), c = !1;
    },
    d(p) {
      n && n.d(p), p && m(e), p && m(t), k[r].d();
    }
  };
}
function Q(i) {
  let e, t = {
    ctx: i,
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
    i[6](),
    t
  ), {
    c() {
      e = R(), t.block.c();
    },
    m(l, o) {
      b(l, e, o), t.block.m(l, t.anchor = o), t.mount = () => e.parentNode, t.anchor = e;
    },
    p(l, o) {
      i = l, S(t, i, o);
    },
    d(l) {
      l && m(e), t.block.d(l), t.token = null, t = null;
    }
  };
}
function X(i) {
  let e, t, l, o, r, s, c, u, f = (
    /*data*/
    i[9]
  ), n = [];
  for (let a = 0; a < f.length; a += 1)
    n[a] = L(I(i, f, a));
  return {
    c() {
      e = y(`Installer Version:\r
      `), t = d("select");
      for (let a = 0; a < n.length; a += 1)
        n[a].c();
      l = v(), o = d("br"), r = v(), s = d("br"), N(t, "min-width", "200px"), /*selectedVersion*/
      i[2] === void 0 && U(() => (
        /*select_change_handler*/
        i[7].call(t)
      ));
    },
    m(a, k) {
      b(a, e, k), b(a, t, k);
      for (let _ = 0; _ < n.length; _ += 1)
        n[_] && n[_].m(t, null);
      V(
        t,
        /*selectedVersion*/
        i[2],
        !0
      ), b(a, l, k), b(a, o, k), b(a, r, k), b(a, s, k), c || (u = W(
        t,
        "change",
        /*select_change_handler*/
        i[7]
      ), c = !0);
    },
    p(a, k) {
      if (k & /*versions*/
      16) {
        f = /*data*/
        a[9];
        let _;
        for (_ = 0; _ < f.length; _ += 1) {
          const p = I(a, f, _);
          n[_] ? n[_].p(p, k) : (n[_] = L(p), n[_].c(), n[_].m(t, null));
        }
        for (; _ < n.length; _ += 1)
          n[_].d(1);
        n.length = f.length;
      }
      k & /*selectedVersion, versions*/
      20 && V(
        t,
        /*selectedVersion*/
        a[2]
      );
    },
    d(a) {
      a && m(e), a && m(t), z(n, a), a && m(l), a && m(o), a && m(r), a && m(s), c = !1, u();
    }
  };
}
function Y(i) {
  return { c: w, m: w, p: w, d: w };
}
function Z(i) {
  var r;
  let e, t, l = (
    /*latest*/
    ((r = i[13]) == null ? void 0 : r.stable) && x(i)
  ), o = !/*expertOptions*/
  i[1] && j(i);
  return {
    c() {
      e = d("p"), l && l.c(), t = v(), o && o.c();
    },
    m(s, c) {
      b(s, e, c), l && l.m(e, null), h(e, t), o && o.m(e, null);
    },
    p(s, c) {
      var u;
      /*latest*/
      (u = s[13]) != null && u.stable && l.p(s, c), /*expertOptions*/
      s[1] ? o && (o.d(1), o = null) : o ? o.p(s, c) : (o = j(s), o.c(), o.m(e, null));
    },
    d(s) {
      s && m(e), l && l.d(), o && o.d();
    }
  };
}
function x(i) {
  let e, t = (
    /*latest*/
    i[13].version + ""
  ), l, o;
  return {
    c() {
      e = y("Installer Version: "), l = y(t), o = y(" (Latest)");
    },
    m(r, s) {
      b(r, e, s), b(r, l, s), b(r, o, s);
    },
    p: w,
    d(r) {
      r && m(e), r && m(l), r && m(o);
    }
  };
}
function j(i) {
  let e, t, l;
  return {
    c() {
      e = d("a"), e.textContent = "Show beta versions", g(e, "href", "#");
    },
    m(o, r) {
      b(o, e, r), t || (l = W(e, "click", B(
        /*showExpertOptions*/
        i[5]
      )), t = !0);
    },
    p: w,
    d(o) {
      o && m(e), t = !1, l();
    }
  };
}
function ee(i) {
  return { c: w, m: w, p: w, d: w };
}
function L(i) {
  let e, t = (
    /*version*/
    i[10].version + ""
  ), l;
  return {
    c() {
      e = d("option"), l = y(t), e.__value = /*version*/
      i[10].url, e.value = e.__value;
    },
    m(o, r) {
      b(o, e, r), h(e, l);
    },
    p: w,
    d(o) {
      o && m(e);
    }
  };
}
function te(i) {
  let e, t, l, o, r, s, c, u, f;
  return l = new T({}), {
    c() {
      e = d("p"), t = d("a"), q(l.$$.fragment), o = y(" Download installer (Universal/.JAR)"), r = v(), s = d("br"), c = v(), u = d("a"), u.textContent = "Download for Windows", g(t, "class", "button primary large"), g(t, "href", "https://bookkeepersmc.github.io/m2/com/bookkeepersmc/notebook-installer/1.0.0/notebook-installer-1.0.0.jar"), g(u, "href", "https://bookkeepersmc.github.io/m2/com/bookkeepersmc/notebook-installer/1.0.0/notebook-installer-1.0.0.exe");
    },
    m(n, a) {
      b(n, e, a), h(e, t), E(l, t, null), h(t, o), h(e, r), h(e, s), h(e, c), h(e, u), f = !0;
    },
    i(n) {
      f || ($(l.$$.fragment, n), f = !0);
    },
    o(n) {
      D(l.$$.fragment, n), f = !1;
    },
    d(n) {
      n && m(e), O(l);
    }
  };
}
function le(i) {
  let e, t, l, o, r, s, c, u, f;
  return l = new T({}), {
    c() {
      e = d("p"), t = d("a"), q(l.$$.fragment), o = y(" Download for Windows"), r = v(), s = d("br"), c = v(), u = d("a"), u.textContent = "Download universal jar", g(t, "class", "button primary large"), g(t, "href", "https://bookkeepersmc.github.io/m2/com/bookkeepersmc/notebook-installer/1.0.0/notebook-installer-1.0.0.exe"), g(u, "href", "https://bookkeepersmc.github.io/m2/com/bookkeepersmc/notebook-installer/1.0.0/notebook-installer-1.0.0.jar");
    },
    m(n, a) {
      b(n, e, a), h(e, t), E(l, t, null), h(t, o), h(e, r), h(e, s), h(e, c), h(e, u), f = !0;
    },
    i(n) {
      f || ($(l.$$.fragment, n), f = !0);
    },
    o(n) {
      D(l.$$.fragment, n), f = !1;
    },
    d(n) {
      n && m(e), O(l);
    }
  };
}
function oe(i) {
  let e;
  return {
    c() {
      e = d("p"), e.textContent = "Loading versions..";
    },
    m(t, l) {
      b(t, e, l);
    },
    p: w,
    i: w,
    o: w,
    d(t) {
      t && m(e);
    }
  };
}
function ne(i) {
  let e, t, l = {
    ctx: i,
    current: null,
    token: null,
    hasCatch: !0,
    pending: oe,
    then: P,
    catch: K,
    value: 9,
    error: 14,
    blocks: [, , ,]
  };
  return M(
    /*versions*/
    i[4],
    l
  ), {
    c() {
      e = d("main"), l.block.c();
    },
    m(o, r) {
      b(o, e, r), l.block.m(e, l.anchor = null), l.mount = () => e, l.anchor = null, t = !0;
    },
    p(o, [r]) {
      i = o, S(l, i, r);
    },
    i(o) {
      t || ($(l.block), t = !0);
    },
    o(o) {
      for (let r = 0; r < 3; r += 1) {
        const s = l.blocks[r];
        D(s);
      }
      t = !1;
    },
    d(o) {
      o && m(e), l.block.d(), l.token = null, l = null;
    }
  };
}
function re(i, e, t) {
  const l = navigator.platform == "Win32";
  let o = !1, r = !1, s = "", c = u();
  async function u() {
    var _;
    const k = await G();
    return t(2, s = ((_ = k.find((p) => p.stable)) == null ? void 0 : _.url) ?? ""), t(0, o = k[0].stable == !1), k;
  }
  function f() {
    t(1, r = !0);
  }
  async function n() {
    return (await c).find((k) => k.url === s);
  }
  function a() {
    s = J(this), t(2, s), t(4, c);
  }
  return [
    o,
    r,
    s,
    l,
    c,
    f,
    n,
    a
  ];
}
class ce extends A {
  constructor(e) {
    super(), F(this, e, re, ne, H, {});
  }
}
export {
  ce as default
};
