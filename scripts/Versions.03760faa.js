import { S as F, i as N, s as E, h as G, g as T, e as b, a as d, u as O, n as L, d as m, c as P, f as v, j as A, k as _, o as Y, p as w, q as z, A as H, r as B } from "./index.cec40c11.js";
import { a as D, b as I, i as J, j as K, k as Q } from "./Api.69808ac2.js";
function j(n, e, r) {
  const t = n.slice();
  return t[9] = e[r], t;
}
function R(n) {
  let e, r, t = (
    /*error*/
    n[12].message + ""
  ), a, l, s;
  return {
    c() {
      e = b("p"), r = v("Error: "), a = v(t), l = T(), s = b("p"), s.innerHTML = `For support please visit one of our
        <a href="/discuss/">community discussion</a>
        groups.`, A(e, "color", "red");
    },
    m(o, V) {
      d(o, e, V), _(e, r), _(e, a), d(o, l, V), d(o, s, V);
    },
    p: L,
    d(o) {
      o && m(e), o && m(l), o && m(s);
    }
  };
}
function U(n) {
  let e, r, t, a, l, s, o, V, p, h, c, C, y, M, g = (
    /*gameVersions*/
    n[2]
  ), f = [];
  for (let i = 0; i < g.length; i += 1)
    f[i] = q(j(n, g, i));
  return {
    c() {
      e = b("p"), r = v(`Minecraft Version:\r
        `), t = b("select");
      for (let i = 0; i < f.length; i += 1)
        f[i].c();
      a = T(), l = b("div"), s = b("pre"), o = b("code"), V = v(`\r
minecraft_version=`), p = v(
        /*minecraftVersion*/
        n[0]
      ), h = v(`\r
loader_version=`), c = v(
        /*loaderVersion*/
        n[1]
      ), C = v(`\r
\r
        `), A(t, "min-width", "200px"), /*minecraftVersion*/
      n[0] === void 0 && Y(() => (
        /*select_change_handler*/
        n[3].call(t)
      )), A(l, "margin-bottom", "15px");
    },
    m(i, k) {
      d(i, e, k), _(e, r), _(e, t);
      for (let u = 0; u < f.length; u += 1)
        f[u] && f[u].m(t, null);
      w(
        t,
        /*minecraftVersion*/
        n[0],
        !0
      ), d(i, a, k), d(i, l, k), _(l, s), _(s, o), _(o, V), _(o, p), _(o, h), _(o, c), _(o, C), y || (M = z(
        t,
        "change",
        /*select_change_handler*/
        n[3]
      ), y = !0);
    },
    p(i, k) {
      if (k & /*gameVersions*/
      4) {
        g = /*gameVersions*/
        i[2];
        let u;
        for (u = 0; u < g.length; u += 1) {
          const S = j(i, g, u);
          f[u] ? f[u].p(S, k) : (f[u] = q(S), f[u].c(), f[u].m(t, null));
        }
        for (; u < f.length; u += 1)
          f[u].d(1);
        f.length = g.length;
      }
      k & /*minecraftVersion, gameVersions*/
      5 && w(
        t,
        /*minecraftVersion*/
        i[0]
      ), k & /*minecraftVersion*/
      1 && H(
        p,
        /*minecraftVersion*/
        i[0]
      ), k & /*loaderVersion*/
      2 && H(
        c,
        /*loaderVersion*/
        i[1]
      );
    },
    d(i) {
      i && m(e), B(f, i), i && m(a), i && m(l), y = !1, M();
    }
  };
}
function q(n) {
  let e, r = (
    /*version*/
    n[9] + ""
  ), t;
  return {
    c() {
      e = b("option"), t = v(r), e.__value = /*version*/
      n[9], e.value = e.__value;
    },
    m(a, l) {
      d(a, e, l), _(e, t);
    },
    p: L,
    d(a) {
      a && m(e);
    }
  };
}
function W(n) {
  let e;
  return {
    c() {
      e = b("p"), e.textContent = "Loading versions..";
    },
    m(r, t) {
      d(r, e, t);
    },
    p: L,
    d(r) {
      r && m(e);
    }
  };
}
function X(n) {
  let e, r, t, a, l = {
    ctx: n,
    current: null,
    token: null,
    hasCatch: !0,
    pending: W,
    then: U,
    catch: R,
    value: 2,
    error: 12
  };
  return G(
    /*gameVersions*/
    n[2],
    l
  ), {
    c() {
      l.block.c(), e = T(), r = b("h4"), r.textContent = "Loom", t = T(), a = b("p"), a.innerHTML = "The recommended loom version is <strong>1.0-SNAPSHOT</strong>. This is usually defined near the top of your build.gradle file.";
    },
    m(s, o) {
      l.block.m(s, l.anchor = o), l.mount = () => e.parentNode, l.anchor = e, d(s, e, o), d(s, r, o), d(s, t, o), d(s, a, o);
    },
    p(s, [o]) {
      n = s, O(l, n, o);
    },
    i: L,
    o: L,
    d(s) {
      l.block.d(s), l.token = null, l = null, s && m(e), s && m(r), s && m(t), s && m(a);
    }
  };
}
function Z(n, e, r) {
  let t, a, l = D().then((p) => {
    r(0, t = p.find((c) => c.stable).version);
    const h = p[0];
    return p.filter((c) => c.stable || c == h).map((c) => c.version);
  });
  I().then((p) => (r(1, a = p.find((h) => h.stable).version), p));
  const s = J(), o = K();
  function V() {
    t = P(this), r(0, t), r(2, l);
  }
  return n.$$.update = () => {
    n.$$.dirty & /*minecraftVersion*/
    1 && s.then((p) => {
      var h;
      return ((h = p.find((c) => c.gameVersion == t)) == null ? void 0 : h.version) || "unknown";
    }), n.$$.dirty & /*minecraftVersion*/
    1 && o.then((p) => p.filter((h) => Q(h, t)).pop());
  }, [t, a, l, V];
}
class ee extends F {
  constructor(e) {
    super(), N(this, e, Z, X, E, {});
  }
}
export {
  ee as default
};
