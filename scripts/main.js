const s = (e, n) => {
  const t = e[n];
  return t ? typeof t == "function" ? t() : Promise.resolve(t) : new Promise((r, i) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(i.bind(null, new Error("Unknown variable dynamic import: " + n)));
  });
};
function o(e) {
  return () => s(/* @__PURE__ */ Object.assign({ "./lib/DownloadIcon.svelte": () => import("./DownloadIcon.c969a232.js"), "./lib/Installer.svelte": () => import("./Installer.b8b5aeb7.js"), "./lib/LegacyVersion.svelte": () => import("./LegacyVersion.a632ca26.js"), "./lib/MCUpdater.svelte": () => import("./MCUpdater.6dce4782.js"), "./lib/Server.svelte": () => import("./Server.86df3122.js"), "./lib/Technic.svelte": () => import("./Technic.2d1651fd.js"), "./lib/Template.svelte": () => import("./Template.6496a65e.js"), "./lib/Versions.svelte": () => import("./Versions.03760faa.js") }), `./lib/${e}.svelte`);
}
const c = o("Installer"), l = o("MCUpdater"), a = o("Technic"), m = o("Server"), p = o("Versions"), u = o("Template");
let v = {
  Installer: c,
  MCUpdater: l,
  Technic: a,
  Server: m,
  Versions: p,
  Template: u
};
function d() {
  for (const e of document.getElementsByClassName("fabric-component")) {
    if (!(e instanceof HTMLElement))
      continue;
    const n = e.dataset.component;
    if (!n)
      throw new Error("Missing data-component attribute");
    const t = v[n];
    if (!t)
      throw new Error("Unknown component: " + n);
    t().then((r) => {
      new r.default({
        target: e
      });
    });
  }
}
document.addEventListener("DOMContentLoaded", d);
