(() => {
  const robotsMeta = document.querySelector('meta[name="robots"]') || document.createElement("meta");
  robotsMeta.name = "robots";
  robotsMeta.content = "noindex, nofollow, noarchive, nosnippet, noimageindex";
  if (!robotsMeta.parentNode) document.head.appendChild(robotsMeta);

  const config = window.LINYE_CONFIG || {};
  const ready = (url) => Boolean(url && url !== "#" && url !== "#service-pending");

  document.querySelectorAll("[data-line-link]").forEach((link) => {
    if (ready(config.lineUrl)) {
      link.href = config.lineUrl;
      link.target = "_blank";
      link.rel = "noopener";
      link.classList.remove("is-pending");
    } else {
      link.href = "#service-pending";
      link.setAttribute("aria-disabled", "true");
      link.addEventListener("click", (event) => event.preventDefault());
    }
  });

  document.querySelectorAll("[data-community-link]").forEach((link) => {
    if (ready(config.communityUrl)) {
      link.href = config.communityUrl;
      link.target = "_blank";
      link.rel = "noopener";
      link.classList.remove("is-pending");
    } else {
      link.href = "#service-pending";
      link.removeAttribute("target");
    }
  });

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  toggle?.addEventListener("click", () => {
    const open = nav?.classList.toggle("is-open") ?? false;
    toggle.setAttribute("aria-expanded", String(open));
  });

  nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    toggle?.setAttribute("aria-expanded", "false");
  }));
})();
