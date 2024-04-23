const s = (e, n) => {
  const t = e[n];
  return t ? typeof t == "function" ? t() : Promise.resolve(t) : new Promise((r, i) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(i.bind(null, new Error("Unknown variable dynamic import: " + n)));
  });
};
function o(e) {
  return () => s(/* @__PURE__ */ Object.assign({ "./lib/DownloadIcon.svelte": () => import("./DownloadIcon.b41702da.js"), "./lib/Installer.svelte": () => import("./Installer.2103788b.js"), "./lib/LegacyVersion.svelte": () => import("./LegacyVersion.d31f6683.js"), "./lib/MCUpdater.svelte": () => import("./MCUpdater.d8cb5621.js"), "./lib/Technic.svelte": () => import("./Technic.5cae91ca.js"), "./lib/Template.svelte": () => import("./Template.c36125c6.js"), "./lib/Versions.svelte": () => import("./Versions.027a6b93.js") }), `./lib/${e}.svelte`);
}
const c = o("Installer"), l = o("MCUpdater"), a = o("Technic"), m = o("Server"), p = o("Versions"), u = o("Template");
let d = {
  Installer: c,
  MCUpdater: l,
  Technic: a,
  Server: m,
  Versions: p,
  Template: u
};
function f() {
  for (const e of document.getElementsByClassName("fabric-component")) {
    if (!(e instanceof HTMLElement))
      continue;
    const n = e.dataset.component;
    if (!n)
      throw new Error("Missing data-component attribute");
    const t = d[n];
    if (!t)
      throw new Error("Unknown component: " + n);
    t().then((r) => {
      new r.default({
        target: e
      });
    });
  }
}
document.addEventListener("DOMContentLoaded", f);
