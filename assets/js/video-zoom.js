// Click-to-zoom lightbox for <video> previews.
// medium-zoom only supports <img>, so videos (former GIFs) get this lightweight
// equivalent: click to enlarge, click anywhere or press Esc to close.
(function () {
  function injectStyles() {
    if (document.getElementById("video-zoom-styles")) return;
    var css =
      ".video-zoom-overlay{position:fixed;inset:0;z-index:10000;display:flex;" +
      "align-items:center;justify-content:center;padding:2.5vmin;opacity:0;" +
      "transition:opacity .25s ease;cursor:zoom-out;}" +
      ".video-zoom-overlay.is-open{opacity:1;}" +
      ".video-zoom-content{max-width:95vw;max-height:80vh;width:auto;height:auto;" +
      "border-radius:4px;box-shadow:0 10px 40px rgba(0,0,0,.5);transform:scale(.97);" +
      "transition:transform .25s ease;}" +
      ".video-zoom-overlay.is-open .video-zoom-content{transform:scale(1);}" +
      "video.zoomable-video{cursor:zoom-in;}";
    var style = document.createElement("style");
    style.id = "video-zoom-styles";
    style.textContent = css;
    document.head.appendChild(style);
  }

  function sourceUrl(video) {
    var s = video.querySelector("source");
    return (s && s.src) || video.currentSrc || video.src;
  }

  function close(overlay) {
    overlay.classList.remove("is-open");
    if (overlay._onKey) document.removeEventListener("keydown", overlay._onKey);
    setTimeout(function () {
      if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
    }, 250);
  }

  function open(video) {
    var overlay = document.createElement("div");
    overlay.className = "video-zoom-overlay";
    var bg = getComputedStyle(document.documentElement)
      .getPropertyValue("--global-bg-color")
      .trim();
    overlay.style.backgroundColor = bg ? bg + "ee" : "rgba(0,0,0,.9)";

    var big = document.createElement("video");
    big.className = "video-zoom-content";
    big.src = sourceUrl(video);
    big.autoplay = true;
    big.loop = true;
    big.muted = true;
    big.setAttribute("playsinline", "");

    overlay.appendChild(big);
    document.body.appendChild(overlay);
    requestAnimationFrame(function () {
      overlay.classList.add("is-open");
    });
    if (big.play) {
      var p = big.play();
      if (p && p.catch) p.catch(function () {});
    }

    overlay.addEventListener("click", function () {
      close(overlay);
    });
    overlay._onKey = function (e) {
      if (e.key === "Escape") close(overlay);
    };
    document.addEventListener("keydown", overlay._onKey);
  }

  document.addEventListener("DOMContentLoaded", function () {
    injectStyles();
    document.querySelectorAll("video.zoomable-video").forEach(function (video) {
      video.addEventListener("click", function () {
        open(video);
      });
    });
  });
})();
