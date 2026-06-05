// Initialize medium zoom.
$(document).ready(function () {
  // 10% margin top + bottom => zoomed image caps at 80% of viewport height.
  function vmargin() {
    return Math.round(window.innerHeight * 0.1);
  }
  medium_zoom = mediumZoom("[data-zoomable]", {
    margin: vmargin(),
    background: getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color") + "ee", // + 'ee' for trasparency.
  });
  window.addEventListener("resize", function () {
    if (medium_zoom) medium_zoom.update({ margin: vmargin() });
  });
});
