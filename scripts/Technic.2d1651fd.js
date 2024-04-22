import { S as g, i as $, s as h, e as p, v as b, g as y, l as v, a as w, w as C, k as m, q as k, t as x, b as T, d as P, x as S, z as V } from "./index.cec40c11.js";
import { c as A } from "./Api.69808ac2.js";
import D from "./LegacyVersion.a632ca26.js";
function J(i) {
  let t, e, o, c, u, r, n, l, s, d = {};
  return e = new D({ props: d }), i[2](e), {
    c() {
      t = p("main"), b(e.$$.fragment), o = y(), c = p("br"), u = y(), r = p("button"), r.textContent = "Download bin/version.json file", v(r, "class", "button primary large");
    },
    m(a, f) {
      w(a, t, f), C(e, t, null), m(t, o), m(t, c), m(t, u), m(t, r), n = !0, l || (s = k(
        r,
        "click",
        /*downloadJson*/
        i[1]
      ), l = !0);
    },
    p(a, [f]) {
      const _ = {};
      e.$set(_);
    },
    i(a) {
      n || (x(e.$$.fragment, a), n = !0);
    },
    o(a) {
      T(e.$$.fragment, a), n = !1;
    },
    d(a) {
      a && P(t), i[2](null), S(e), l = !1, s();
    }
  };
}
function j(i, t) {
  var e = document.createElement("a");
  e.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(t)), e.setAttribute("download", i), e.style.display = "none", document.body.appendChild(e), e.click(), document.body.removeChild(e);
}
function q(i, t, e) {
  let o;
  async function c() {
    const { selectedGameVersion: n, loaderVersion: l } = await o.getSelectedVersions();
    j("version.json", await u(n, l));
  }
  async function u(n, l) {
    const s = await A(n, l), d = {
      id: n,
      inheritsFrom: s.inheritsFrom,
      releaseTime: s.releaseTime,
      time: s.time,
      type: s.type,
      minecraftArguments: "--username ${auth_player_name} --version ${version_name} --gameDir ${game_directory} --assetsDir ${assets_root} --assetIndex ${assets_index_name} --uuid ${auth_uuid} --accessToken ${auth_access_token} --userType ${user_type} --versionType ${version_type}",
      libraries: s.libraries,
      mainClass: s.mainClass
    };
    return JSON.stringify(d, null, 2);
  }
  function r(n) {
    V[n ? "unshift" : "push"](() => {
      o = n, e(0, o);
    });
  }
  return [o, c, r];
}
class z extends g {
  constructor(t) {
    super(), $(this, t, q, J, h, {});
  }
}
export {
  z as default
};
