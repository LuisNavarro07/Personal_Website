// Small enhancements; every page works without this script.
(function () {
  "use strict";

  var VIEWER = "/view/";
  var PDF_PATH = /^\/(?!\/)[^?#\\]*\.pdf$/i;

  function viewerUrl(path, title) {
    return VIEWER + "?file=" + encodeURIComponent(path) + "&title=" + encodeURIComponent(title);
  }

  // 1. PDF links inside page text open in the on-site viewer, with a download link beside them.
  function enhancePdfLinks() {
    var pageTitle = document.body.getAttribute("data-title") || "";
    var links = document.querySelectorAll(".prose a[href]");
    Array.prototype.forEach.call(links, function (a) {
      if (a.hasAttribute("download") || a.closest(".pdf-actions")) return;
      var url;
      try { url = new URL(a.getAttribute("href"), window.location.href); } catch (e) { return; }
      if (url.origin !== window.location.origin || !PDF_PATH.test(url.pathname)) return;

      var text = a.textContent.trim();
      var title = text && pageTitle && text.indexOf(pageTitle) === -1 ? pageTitle + ": " + text : (text || pageTitle);
      a.href = viewerUrl(url.pathname, title);
      a.removeAttribute("target");

      // Skip the extra download link if the text already offers one for the same file.
      var parent = a.parentNode;
      var hasDownload = parent && Array.prototype.some.call(parent.querySelectorAll("a[download]"), function (d) {
        try { return new URL(d.getAttribute("href"), window.location.href).pathname === url.pathname; } catch (e) { return false; }
      });
      if (hasDownload) return;

      var dl = document.createElement("a");
      dl.href = url.pathname;
      dl.setAttribute("download", "");
      dl.className = "pdf-dl";
      dl.setAttribute("aria-label", "Download " + (text || "PDF"));
      dl.title = "Download PDF";
      dl.textContent = "Download";
      a.insertAdjacentText("afterend", " ");
      a.parentNode.insertBefore(dl, a.nextSibling.nextSibling);
    });
  }

  // 2. The /view/ page: show a same-site PDF in a frame.
  function setupViewer() {
    var root = document.querySelector("[data-viewer]");
    if (!root) return;
    var params = new URLSearchParams(window.location.search);
    var file = params.get("file") || "";
    var title = (params.get("title") || "").slice(0, 200);

    var back = root.querySelector("[data-back]");
    if (back && document.referrer) {
      try {
        var ref = new URL(document.referrer);
        if (ref.origin === window.location.origin) back.href = ref.pathname + ref.hash;
      } catch (e) { /* keep default */ }
    }

    if (!PDF_PATH.test(file)) {
      root.querySelector("[data-viewer-error]").hidden = false;
      root.querySelector(".pdf-frame").hidden = true;
      root.querySelector(".pdf-hint").hidden = true;
      root.querySelector(".actions").hidden = true;
      return;
    }
    var name = title || decodeURIComponent(file.split("/").pop());
    root.querySelector("[data-viewer-title]").textContent = name;
    document.title = name + " | Luis Navarro";
    root.querySelector("[data-viewer-frame]").src = file + "#view=FitH";
    root.querySelector("[data-viewer-frame]").title = name + " (PDF)";
    root.querySelector("[data-viewer-download]").href = file;
    root.querySelector("[data-viewer-open]").href = file;
  }

  // 3. "Copy BibTeX" buttons.
  function setupCopy() {
    document.querySelectorAll("[data-copy]").forEach(function (btn) {
      if (!navigator.clipboard) { btn.hidden = true; return; }
      btn.addEventListener("click", function () {
        var code = btn.parentNode.querySelector("pre");
        navigator.clipboard.writeText(code.textContent).then(function () {
          btn.textContent = "Copied";
          setTimeout(function () { btn.textContent = "Copy BibTeX"; }, 2000);
        });
      });
    });
  }

  enhancePdfLinks();
  setupViewer();
  setupCopy();
})();
