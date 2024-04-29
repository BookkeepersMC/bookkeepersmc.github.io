const r = ["https://meta.fabricmc.net", "https://meta2.fabricmc.net"], l = ["https://maven.fabricmc.net", "https://maven2.fabricmc.net"];
async function v() {
  return n(r, "/v2/versions/installer");
}
async function w() {
  return n(r, "/v2/versions/game");
}
async function W() {
  return n(r, "/v2/versions/loader");
}
async function g() {
  return n(r, "/v2/versions/yarn");
}
async function y(s) {
  return n(r, "/v2/versions/yarn/" + s);
}
async function d(s, t) {
  return n(r, `/v2/versions/loader/${s}/${t}/profile/json`);
}
async function b(s) {
  return (await n(
    r,
    `/v2/versions/yarn/${s}?limit=1`
  ))[0];
}
function c() {
  return o("/net/fabricmc/fabric-api/fabric-api/maven-metadata.xml");
}
function x() {
  return o("/net/fabricmc/fabric-language-kotlin/maven-metadata.xml");
}
async function m(s) {
  return (await c()).filter((e) => u(e, s)).pop();
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
let h = (s) => {
  let e = new DOMParser().parseFromString(s, "text/xml");
  return Array.from(e.getElementsByTagName("version")).map((a) => a.childNodes[0].nodeValue);
};
async function o(s) {
  let t = await p(l, s);
  return h(t);
}
async function n(s, t) {
  return await (await f(s, t)).json();
}
async function p(s, t) {
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
  d as a,
  w as b,
  W as c,
  b as d,
  m as e,
  y as f,
  v as g,
  x as h,
  g as i,
  c as j,
  u as k
};
