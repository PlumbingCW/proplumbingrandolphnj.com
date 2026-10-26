(function () {
  "use strict";
  var t = document.getElementById("mob-toggle");
  var d = document.getElementById("mob-drawer");
  var o = document.getElementById("mob-overlay");
  var c = document.getElementById("drawer-close");
  function openMenu() {
    d.removeAttribute("hidden");
    o.classList.add("visible");
    t.setAttribute("aria-expanded", "true");
    t.setAttribute("aria-label", "Close navigation menu");
    document.documentElement.style.overflow = "hidden";
  }
  function closeMenu() {
    d.setAttribute("hidden", "");
    o.classList.remove("visible");
    t.setAttribute("aria-expanded", "false");
    t.setAttribute("aria-label", "Open navigation menu");
    document.documentElement.style.overflow = "";
  }
  if (t && d && o) {
    t.addEventListener("click", function () {
      if (t.getAttribute("aria-expanded") === "true") { closeMenu(); } else { openMenu(); }
    });
    if (c) { c.addEventListener("click", closeMenu); }
    o.addEventListener("click", closeMenu);
    var links = d.querySelectorAll("a");
    for (var i = 0; i < links.length; i++) { links[i].addEventListener("click", closeMenu); }
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") { closeMenu(); } });
    window.addEventListener("resize", function () { if (window.innerWidth > 768) { closeMenu(); } });
  }
  var heads = document.querySelectorAll(".acc-head");
  function setItem(item, open) {
    var head = item.querySelector(".acc-head");
    var plus = item.querySelector(".plus");
    item.classList.toggle("open", open);
    head.setAttribute("aria-expanded", open ? "true" : "false");
    if (plus) { plus.textContent = open ? "−" : "+"; }
  }
  for (var j = 0; j < heads.length; j++) {
    heads[j].addEventListener("click", function () {
      var item = this.closest(".acc-item");
      setItem(item, !item.classList.contains("open"));
    });
  }
})();
