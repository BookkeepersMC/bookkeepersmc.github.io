import { S as F, i as H, s as W, h as N, e as b, a as _, u as q, t as C, b as $, d as p, c as z, f as w, g as I, j as D, k as v, n as m, l as g, m as A, o as G, p as V, q as E, r as J, v as O, w as T, x as j, y as K } from "./index.e08f71d5.js";
import { g as P } from "./Api.5e65932a.js";
import B from "./DownloadIcon.b41702da.js";
function M(i, e, t) {
  const l = i.slice();
  return l[10] = e[t], l;
}
function Q(i) {
  let e, t, l = (
    /*error*/
    i[14].message + ""
  ), n, r, o;
  return {
    c() {
      e = b("p"), t = w("Error: "), n = w(l), r = I(), o = b("p"), o.innerHTML = `For support please visit one of our
      <a href="/discuss/">community discussion</a>
      groups.`, D(e, "color", "red");
    },
    m(a, h) {
      _(a, e, h), v(e, t), v(e, n), _(a, r, h), _(a, o, h);
    },
    p: m,
    i: m,
    o: m,
    d(a) {
      a && p(e), a && p(r), a && p(o);
    }
  };
}
function R(i) {
  let e, t, l, n, r, o, a;
  function h(f, y) {
    if (
      /*expertOptions*/
      f[1]
    )
      return X;
    if (
      /*showVersionSelection*/
      f[0]
    )
      return U;
  }
  let k = h(i), s = k && k(i);
  const c = [le, te], d = [];
  function u(f, y) {
    return (
      /*win32*/
      f[3] ? 0 : 1
    );
  }
  return r = u(i), o = d[r] = c[r](i), {
    c() {
      s && s.c(), e = I(), t = b("div"), l = b("p"), l.textContent = `The Minecraft and Notebook Loader versions can be selected in the installer, this download\r
        works for the MC version you choose, the loader version depends on the MC version.`, n = I(), o.c(), g(t, "class", "download");
    },
    m(f, y) {
      s && s.m(f, y), _(f, e, y), _(f, t, y), v(t, l), v(t, n), d[r].m(t, null), a = !0;
    },
    p(f, y) {
      k === (k = h(f)) && s ? s.p(f, y) : (s && s.d(1), s = k && k(f), s && (s.c(), s.m(e.parentNode, e)));
    },
    i(f) {
      a || (C(o), a = !0);
    },
    o(f) {
      $(o), a = !1;
    },
    d(f) {
      s && s.d(f), f && p(e), f && p(t), d[r].d();
    }
  };
}
function U(i) {
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
  return N(
    /*getVersion*/
    i[6](),
    t
  ), {
    c() {
      e = A(), t.block.c();
    },
    m(l, n) {
      _(l, e, n), t.block.m(l, t.anchor = n), t.mount = () => e.parentNode, t.anchor = e;
    },
    p(l, n) {
      i = l, q(t, i, n);
    },
    d(l) {
      l && p(e), t.block.d(l), t.token = null, t = null;
    }
  };
}
function X(i) {
  let e, t, l, n, r, o, a, h, k = (
    /*data*/
    i[9]
  ), s = [];
  for (let c = 0; c < k.length; c += 1)
    s[c] = S(M(i, k, c));
  return {
    c() {
      e = w(`Installer Version:\r
      `), t = b("select");
      for (let c = 0; c < s.length; c += 1)
        s[c].c();
      l = I(), n = b("br"), r = I(), o = b("br"), D(t, "min-width", "200px"), /*selectedVersion*/
      i[2] === void 0 && G(() => (
        /*select_change_handler*/
        i[7].call(t)
      ));
    },
    m(c, d) {
      _(c, e, d), _(c, t, d);
      for (let u = 0; u < s.length; u += 1)
        s[u] && s[u].m(t, null);
      V(
        t,
        /*selectedVersion*/
        i[2],
        !0
      ), _(c, l, d), _(c, n, d), _(c, r, d), _(c, o, d), a || (h = E(
        t,
        "change",
        /*select_change_handler*/
        i[7]
      ), a = !0);
    },
    p(c, d) {
      if (d & /*versions*/
      16) {
        k = /*data*/
        c[9];
        let u;
        for (u = 0; u < k.length; u += 1) {
          const f = M(c, k, u);
          s[u] ? s[u].p(f, d) : (s[u] = S(f), s[u].c(), s[u].m(t, null));
        }
        for (; u < s.length; u += 1)
          s[u].d(1);
        s.length = k.length;
      }
      d & /*selectedVersion, versions*/
      20 && V(
        t,
        /*selectedVersion*/
        c[2]
      );
    },
    d(c) {
      c && p(e), c && p(t), J(s, c), c && p(l), c && p(n), c && p(r), c && p(o), a = !1, h();
    }
  };
}
function Y(i) {
  return { c: m, m, p: m, d: m };
}
function Z(i) {
  var r;
  let e, t, l = (
    /*latest*/
    ((r = i[13]) == null ? void 0 : r.stable) && x(i)
  ), n = !/*expertOptions*/
  i[1] && L(i);
  return {
    c() {
      e = b("p"), l && l.c(), t = I(), n && n.c();
    },
    m(o, a) {
      _(o, e, a), l && l.m(e, null), v(e, t), n && n.m(e, null);
    },
    p(o, a) {
      var h;
      /*latest*/
      (h = o[13]) != null && h.stable && l.p(o, a), /*expertOptions*/
      o[1] ? n && (n.d(1), n = null) : n ? n.p(o, a) : (n = L(o), n.c(), n.m(e, null));
    },
    d(o) {
      o && p(e), l && l.d(), n && n.d();
    }
  };
}
function x(i) {
  let e, t = (
    /*latest*/
    i[13].version + ""
  ), l, n;
  return {
    c() {
      e = w("Installer Version: "), l = w(t), n = w(" (Latest)");
    },
    m(r, o) {
      _(r, e, o), _(r, l, o), _(r, n, o);
    },
    p: m,
    d(r) {
      r && p(e), r && p(l), r && p(n);
    }
  };
}
function L(i) {
  let e, t, l;
  return {
    c() {
      e = b("a"), e.textContent = "Show beta versions", g(e, "href", "#");
    },
    m(n, r) {
      _(n, e, r), t || (l = E(e, "click", K(
        /*showExpertOptions*/
        i[5]
      )), t = !0);
    },
    p: m,
    d(n) {
      n && p(e), t = !1, l();
    }
  };
}
function ee(i) {
  return { c: m, m, p: m, d: m };
}
function S(i) {
  let e, t = (
    /*version*/
    i[10].version + ""
  ), l;
  return {
    c() {
      e = b("option"), l = w(t), e.__value = /*version*/
      i[10].url, e.value = e.__value;
    },
    m(n, r) {
      _(n, e, r), v(e, l);
    },
    p: m,
    d(n) {
      n && p(e);
    }
  };
}
function te(i) {
  let e, t, l, n, r;
  return l = new B({}), {
    c() {
      e = b("p"), t = b("a"), O(l.$$.fragment), n = w(" Install Instructions");
    },
    m(o, a) {
      _(o, e, a), v(e, t), T(l, t, null), v(t, n), r = !0;
    },
    i(o) {
      r || (C(l.$$.fragment, o), r = !0);
    },
    o(o) {
      $(l.$$.fragment, o), r = !1;
    },
    d(o) {
      o && p(e), j(l);
    }
  };
}
function le(i) {
  let e, t, l, n, r;
  return l = new B({}), {
    c() {
      e = b("p"), t = b("a"), O(l.$$.fragment), n = w(" Install Instructions"), g(t, "href", "https://github.com/BookkeepersMC/notebook-loader/wiki/Installation-Instructions");
    },
    m(o, a) {
      _(o, e, a), v(e, t), T(l, t, null), v(t, n), r = !0;
    },
    i(o) {
      r || (C(l.$$.fragment, o), r = !0);
    },
    o(o) {
      $(l.$$.fragment, o), r = !1;
    },
    d(o) {
      o && p(e), j(l);
    }
  };
}
function ne(i) {
  let e;
  return {
    c() {
      e = b("p"), e.textContent = "Loading versions..";
    },
    m(t, l) {
      _(t, e, l);
    },
    p: m,
    i: m,
    o: m,
    d(t) {
      t && p(e);
    }
  };
}
function oe(i) {
  let e, t, l = {
    ctx: i,
    current: null,
    token: null,
    hasCatch: !0,
    pending: ne,
    then: R,
    catch: Q,
    value: 9,
    error: 14,
    blocks: [, , ,]
  };
  return N(
    /*versions*/
    i[4],
    l
  ), {
    c() {
      e = b("main"), l.block.c();
    },
    m(n, r) {
      _(n, e, r), l.block.m(e, l.anchor = null), l.mount = () => e, l.anchor = null, t = !0;
    },
    p(n, [r]) {
      i = n, q(l, i, r);
    },
    i(n) {
      t || (C(l.block), t = !0);
    },
    o(n) {
      for (let r = 0; r < 3; r += 1) {
        const o = l.blocks[r];
        $(o);
      }
      t = !1;
    },
    d(n) {
      n && p(e), l.block.d(), l.token = null, l = null;
    }
  };
}
function re(i, e, t) {
  const l = navigator.platform == "Win32";
  let n = !1, r = !1, o = "", a = h();
  async function h() {
    var u;
    const d = await P();
    return t(2, o = ((u = d.find((f) => f.stable)) == null ? void 0 : u.url) ?? ""), t(0, n = d[0].stable == !1), d;
  }
  function k() {
    t(1, r = !0);
  }
  async function s() {
    return (await a).find((d) => d.url === o);
  }
  function c() {
    o = z(this), t(2, o), t(4, a);
  }
  return [
    n,
    r,
    o,
    l,
    a,
    k,
    s,
    c
  ];
}
class ae extends F {
  constructor(e) {
    super(), H(this, e, re, oe, W, {});
  }
}
export {
  ae as default
};
