const n = ["https://meta.fabricmc.net", "https://meta2.fabricmc.net"], l = ["https://localhost:4000/meta"], c = ["https://maven.fabricmc.net", "https://maven2.fabricmc.net"];
async function w() {
  return r(l, "/versions/installer");
}
async function W() {
  return r(n, "/v2/versions/game");
}
async function g() {
  return r(n, "/v2/versions/loader");
}
async function y() {
  return r(n, "/v2/versions/yarn");
}
async function d(s) {
  return r(n, "/v2/versions/yarn/" + s);
}
async function b(s, t) {
  return r(n, `/v2/versions/loader/${s}/${t}/profile/json`);
}
async function x(s) {
  return (await r(
    n,
    `/v2/versions/yarn/${s}?limit=1`
  ))[0];
}
function h() {
  return o("/net/fabricmc/fabric-api/fabric-api/maven-metadata.xml");
}
function m() {
  return o("/net/fabricmc/fabric-language-kotlin/maven-metadata.xml");
}
async function A(s) {
  return (await h()).filter((e) => u(e, s)).pop();
}
function u(s, t) {
  if (!t)
    return !1;
  if (t == "1.18")
    return s == "0.44.0+1.18";
  let e = t;
  return ["1.14", "1.15", "1.16", "1.17", "1.18", "1.19", "1.20", "20w14infinite", "1.18_experimental"].forEach((i) => {
    t.startsWith(i) && (e = i);
  }), t.startsWith("22w13oneblockatatime") ? e = "22w13oneblockatatime" : t.startsWith("24w") || t.startsWith("23w") ? e = "1.20.5" : t.startsWith("22w") ? e = "1.19.3" : t.startsWith("1.18.2") ? e = "1.18.2" : t.startsWith("1.19.1") ? e = "1.19.1" : t.startsWith("1.19.2") ? e = "1.19.2" : t.startsWith("1.19.3") ? e = "1.19.3" : t.startsWith("1.19.4") ? e = "1.19.4" : t.startsWith("1.20.1") ? e = "1.20.1" : t.startsWith("1.20.2") ? e = "1.20.2" : t.startsWith("1.20.3") ? e = "1.20.3" : t.startsWith("1.20.4") ? e = "1.20.4" : t.startsWith("1.20.5") ? e = "1.20.5" : t.startsWith("21w") ? e = "1.18" : t.startsWith("20w") ? e = "1.17" : (t.startsWith("19w") || t.startsWith("18w")) && (e = "1.14"), s.endsWith("-" + e) || s.endsWith("+" + e);
}
let p = (s) => {
  let e = new DOMParser().parseFromString(s, "text/xml");
  return Array.from(e.getElementsByTagName("version")).map((a) => a.childNodes[0].nodeValue);
};
async function o(s) {
  let t = await v(c, s);
  return p(t);
}
async function r(s, t) {
  return await (await f(s, t)).json();
}
async function v(s, t) {
  return await (await f(s, t)).text();
}
async function f(s, t) {
  for (var e of s)
    try {
      const a = await fetch(e + t);
      if (a.ok)
        return a;
      console.error(await a.text());
    } catch (a) {
      console.error(a);
    }
  throw new Error(`Failed to fetch: ${s[0] + t}`);
}
export {
  b as a,
  W as b,
  g as c,
  x as d,
  A as e,
  d as f,
  w as g,
  m as h,
  y as i,
  h as j,
  u as k
};
