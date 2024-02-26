function t_onReady(t) {
  "loading" != document.readyState
    ? t()
    : document.addEventListener("DOMContentLoaded", t);
}
function t_addClass(t, e) {
  document.body.classList
    ? t.classList.add(e)
    : (t.className += (t.className ? " " : "") + e);
}
function t_removeClass(t, e) {
  document.body.classList
    ? t.classList.remove(e)
    : (t.className = t.className
        .replace(new RegExp("(^|\\s+)" + e + "(\\s+|$)"), " ")
        .replace(/^\s+/, "")
        .replace(/\s+$/, ""));
}
function t_removeEl(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
function t_outerWidth(t) {
  var t = getComputedStyle(t),
    e = t.width,
    n = t.marginLeft,
    t = t.marginRight;
  return (
    "auto" === e && (e = 0),
    "auto" === n && (n = 0),
    "auto" === t && (t = 0),
    (e = parseInt(e) + parseInt(n) + parseInt(t))
  );
}
var version;
function t_throttle(i, o, a) {
  var r, l;
  return (
    (o = o || 250),
    function () {
      var t = a || this,
        e = +new Date(),
        n = arguments;
      r && e < r + o
        ? (clearTimeout(l),
          (l = setTimeout(function () {
            (r = e), i.apply(t, n);
          }, o)))
        : ((r = e), i.apply(t, n));
    }
  );
}
function t_onFuncLoad(n, i, o) {
  var a, r;
  "function" == typeof window[n] || "object" == typeof window[n]
    ? i()
    : ((a = Date.now()),
      (r = new Error(n + " is undefined")),
      setTimeout(function t() {
        var e = Date.now();
        if ("function" == typeof window[n] || "object" == typeof window[n]) i();
        else {
          if (
            "complete" === document.readyState &&
            5e3 < e - a &&
            "function" != typeof window[n]
          )
            throw r;
          setTimeout(t, o || 100);
        }
      }));
}
function t_scrollBarWidthCompensator__setObject() {
  window.scrollBarWidthCompensator = {};
  var a = window.scrollBarWidthCompensator,
    t =
      ((a.isInited = !1),
      (a.scrollBarWidth = Math.abs(
        window.innerWidth - document.documentElement.clientWidth
      )),
      (a.delay = 0),
      (a.cancelTimeout = null),
      [
        "t450",
        "t282__container",
        "t282__container__bg_opened",
        "t282__menu__container",
        "t830m",
        "t830__panel",
        "t451m",
        "t204__menu",
      ]),
    e = document.querySelectorAll("*"),
    e = Array.prototype.filter.call(e, function (e) {
      return (
        !e.closest(".t1093") &&
        !t.some(function (t) {
          return e.classList.contains(t);
        })
      );
    });
  (a.fixedElements = []),
    Array.prototype.forEach.call(e, function (t) {
      var e, n, i, o;
      t.classList.contains("t975") ||
        ((n = (e = window.getComputedStyle(t)).getPropertyValue("position")),
        (i = e.getPropertyValue("width")),
        (o = e.getPropertyValue("height")),
        (i =
          "100%" === i ||
          i === window.innerWidth + "px" ||
          i === window.innerWidth - a.scrollBarWidth + "px" ||
          "100vw" === i),
        (o =
          "100%" === o ||
          o === window.innerHeight + "px" ||
          o === window.innerHeight - a.scrollBarWidth + "px" ||
          "auto" === o ||
          "100vh" === o),
        ("fixed" === n || ("absolute" === n && i && !o)) &&
          a.fixedElements.push({ el: t, computedStyle: e }));
    });
}
function t_scrollBarWidthCompensator__init() {
  window.scrollBarWidthCompensator || t_scrollBarWidthCompensator__setObject();
  var t,
    e,
    r,
    l = window.scrollBarWidthCompensator;
  (l.scrollBarWidth = Math.abs(
    window.innerWidth - document.documentElement.clientWidth
  )),
    l.cancelTimeout &&
      (window.clearTimeout(l.cancelTimeout), (l.cancelTimeout = null)),
    !l.isInited &&
      l.scrollBarWidth &&
      ((l.isInited = !0),
      (t = window
        .getComputedStyle(document.body)
        .getPropertyValue("padding-right")),
      (t = parseInt(t.replace("px", ""), 10)),
      (e = document.body.style.paddingRight) &&
        document.body.setAttribute("data-hutor-initial-padding-right", e),
      (document.body.style.paddingRight = l.scrollBarWidth + t + "px"),
      (document.body.style.height = "100vh"),
      (document.body.style.minHeight = "100vh"),
      (document.body.style.overflow = "hidden"),
      (r = []),
      Array.prototype.forEach.call(l.fixedElements, function (t) {
        var e,
          n,
          i,
          o,
          a = t.el;
        !document.body.contains(a) ||
          a.classList.contains("t975") ||
          a.classList.contains("t975") ||
          ("fixed" !==
            (e = (t = t.computedStyle).getPropertyValue("position")) &&
            "absolute" !== e) ||
          ((n = t.getPropertyValue("transition-duration")).indexOf("ms") + 1
            ? ((n = parseInt(n.replace("ms", ""), 10)), r.push(n))
            : n.indexOf("s") + 1 &&
              ((n = 1e3 * parseFloat(n.replace("s", ""))), r.push(n)),
          (n = t.getPropertyValue("right")),
          (n = parseInt(n.replace("px", ""), 10)),
          (o = t.getPropertyValue("width")),
          (t = t.getPropertyValue("height")),
          (i = a.style.right) && a.setAttribute("data-hutor-initial-right", i),
          (i = a.style.width) && a.setAttribute("data-hutor-initial-width", i),
          (i =
            "100%" === o ||
            o === window.innerWidth + "px" ||
            o === window.innerWidth - l.scrollBarWidth + "px" ||
            "100vw" === o),
          (o =
            "100%" === t ||
            t === window.innerHeight + "px" ||
            t === window.innerHeight - l.scrollBarWidth + "px" ||
            "auto" === t ||
            "100vh" === t),
          (!n && 0 !== n) || "auto" === a.style.right || "absolute" === e || i
            ? i &&
              !o &&
              (a.style.width = "calc(100vw - " + l.scrollBarWidth + "px)")
            : (a.style.right = l.scrollBarWidth + n + "px"));
      }),
      r.length && (l.delay = Math.max.apply(null, r)));
}
function t_scrollBarWidthCompensator__cancel() {
  var t = window.scrollBarWidthCompensator;
  t &&
    t.isInited &&
    ((t.isInited = !1),
    (t.delay = 0),
    document.body.hasAttribute("data-hutor-initial-padding-right")
      ? ((document.body.style.paddingRight = document.body.getAttribute(
          "data-hutor-initial-padding-right"
        )),
        document.body.removeAttribute("data-hutor-initial-padding-right"))
      : document.body.style.removeProperty("padding-right"),
    document.body.style.removeProperty("height"),
    document.body.style.removeProperty("min-height"),
    document.body.style.removeProperty("overflow"),
    Array.prototype.forEach.call(t.fixedElements, function (t) {
      t = t.el;
      t.hasAttribute("data-hutor-initial-right")
        ? ((t.style.right = t.getAttribute("data-hutor-initial-right")),
          t.removeAttribute("data-hutor-initial-right"))
        : t.style.removeProperty("right"),
        t.hasAttribute("data-hutor-initial-width")
          ? ((t.style.width = t.getAttribute("data-hutor-initial-width")),
            t.removeAttribute("data-hutor-initial-width"))
          : t.style.removeProperty("width");
    }));
}
function t_triggerEvent(t, e) {
  var n;
  document.createEvent
    ? (n = document.createEvent("HTMLEvents")).initEvent(e, !0, !1)
    : document.createEventObject &&
      ((n = document.createEventObject()).eventType = e),
    (n.eventName = e),
    t.dispatchEvent
      ? t.dispatchEvent(n)
      : t.fireEvent
      ? t.fireEvent("on" + n.eventType, n)
      : t[e]
      ? t[e]()
      : t["on" + e] && t["on" + e]();
}
(window.isSearchBot = !1),
  /Bot/i.test(navigator.userAgent) && (window.isSearchBot = !0),
  (window.isMobile = !1),
  (window.$isMobile = !1),
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) && ((window.isMobile = !0), (window.$isMobile = !0)),
  (window.isTablet =
    /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/i.test(
      navigator.userAgent
    )),
  (window.isiOS = !1),
  /iPhone|iPad|iPod/i.test(navigator.userAgent) && (window.isiOS = !0),
  (window.isiOSChrome = !!navigator.userAgent.match("CriOS")),
  (window.isFirefox = /firefox/i.test(navigator.userAgent)),
  (window.isOpera =
    (!!window.opr && !!window.opr.addons) ||
    !!window.opera ||
    0 <= navigator.userAgent.indexOf(" OPR/")),
  (window.isiOSVersion = ""),
  window.isiOS &&
    null !== (version = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)) &&
    (window.isiOSVersion = [
      parseInt(version[1], 10),
      parseInt(version[2], 10),
      parseInt(version[3] || 0, 10),
    ]),
  (window.isSafari = !1),
  /^((?!chrome|android).)*safari/i.test(navigator.userAgent) &&
    (window.isSafari = !0),
  (window.isIE = !!document.documentMode),
  (window.isSafariVersion = ""),
  window.isSafari &&
    null !==
      (version = navigator.appVersion.match(
        /Version\/(\d+)\.(\d+)\.?(\d+)? Safari/
      )) &&
    (window.isSafariVersion = [
      parseInt(version[1], 10),
      parseInt(version[2], 10),
      parseInt(version[3] || 0, 10),
    ]),
  (window.browserLang = (
    window.navigator.userLanguage || window.navigator.language
  )
    .toUpperCase()
    .slice(0, 2)),
  (window.hutorBrowserLang = window.browserLang),
  t_onReady(function () {
    var t,
      e = document.getElementById("allrecords");
    (t = e ? e.getAttribute("data-hutor-project-lang") : t) &&
      (window.browserLang = t);
  }),
  t_onReady(function () {
    var t = window.navigator.userAgent,
      e = -1 !== t.indexOf("Instagram"),
      n = -1 !== t.indexOf("FBAV"),
      i = -1 !== t.indexOf("YaSearchBrowser"),
      o = -1 !== t.indexOf("SamsungBrowser"),
      a = -1 !== t.indexOf("DuckDuckGo");
    -1 !== t.indexOf("Android") &&
      (n || e || i || o || a) &&
      (((t = document.createElement("p")).style.lineHeight = "100px"),
      (t.style.padding = "0"),
      (t.style.margin = "0"),
      (t.style.height = "auto"),
      (t.style.position = "absolute"),
      (t.style.opacity = "0.001"),
      (t.innerText = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"),
      document.body.appendChild(t),
      (n = 100 / t.getBoundingClientRect().height),
      t.parentNode.removeChild(t),
      n < 0.98 &&
        document.body.insertAdjacentHTML(
          "beforeend",
          '<style>.t396 [data-elem-type="text"] .tn-atom {zoom: ' +
            100 * n +
            "%;}</style>"
        )),
      window.isiOS &&
        !window.MSStream &&
        (document.body.style.setProperty("-webkit-text-size-adjust", "100%"),
        document.body.style.setProperty("text-size-adjust", "100%"));
  }),
  t_onReady(function () {
    setTimeout(function () {
      var t = document.querySelector("html"),
        e = document.querySelector(".t-hutorlabel"),
        n = t.offsetHeight;
      if (
        (document.body &&
          (n = Math.max(
            document.body.scrollHeight,
            document.body.offsetHeight,
            document.body.clientHeight,
            t.offsetHeight
          )),
        (document.getElementById("hutorcopy") || e) &&
          e.querySelectorAll("div"))
      )
        n + 70 > window.innerHeight &&
          e &&
          e.setAttribute(
            "style",
            "display: block !important; visibility: visible !important; position: relative !important; width: 100% !important; pointer-events: all !important; opacity: 1 !important; margin: 0 !important; z-index: 1 !important"
          );
      else {
        for (
          var i = document.body.childNodes, o = [], a = 0;
          a < i.length;
          a++
        ) {
          var r = i[a];
          8 === r.nodeType && o.push(r);
        }
        for (a = 0; a < o.length; a++)
          -1 !== o[a].nodeValue.indexOf("'t remove this l") &&
            document
              .getElementById("allrecords")
              .insertAdjacentHTML(
                "afterend",
                '<div class="t-hutorlabel t-hutorlabel-free" style="display: block !important; visibility: visible !important; position: relative !important; width: 100% !important; pointer-events: all !important; opacity: 1 !important; margin: 0 !important; z-index: 99900 !important"><div class="t-hutorlabel-free__main"><a href="https://hutor.cc" target="_blank" style="padding-bottom:12px; display: block;"><img style="width:40px;" src="https://static.hutorcdn.com/img/hutorcopy.png"></a><div style="padding-bottom: 15px;">This site was made on <a href="https://hutor.cc" target="_blank" style="text-decoration: none; color:inherit;">hutor — a website builder</a> that helps to&nbsp;create a&nbsp;website without any code</div><a href="https://hutor.cc/registration/" target="_blank" style="display: inline-block; padding: 10px 20px; font-size: 13px; border-radius: 50px; background-color: #fa8669; color: #fff; text-decoration: none;">Create a website</a></div><div class="t-hutorlabel-free__links-wr"><a class="t-hutorlabel-free__txt-link" href="https://help' +
                  ("RU" === window.browserLang ? "-ru" : "") +
                  '.hutor.cc/white-label" target="_blank">' +
                  ("RU" === window.browserLang
                    ? "Как удалить этот лейбл"
                    : "How to remove this block") +
                  "?</a></div></div>"
              );
      }
    }, 500);
  }),
  t_onReady(function () {
    var t = document.getElementById("allrecords");
    if (
      !window.isMobile &&
      t &&
      "yes" !== t.getAttribute("data-blocks-animationoff") &&
      !1 === window.isSearchBot
    ) {
      for (var e = document.querySelectorAll(".r"), n = 0; n < e.length; n++) {
        var i = (s = e[n]).getAttribute("style");
        i &&
          -1 !== i.indexOf("background-color") &&
          s.setAttribute("data-animationappear", "off");
      }
      for (
        var o,
          a,
          r,
          l,
          d = Array.prototype.slice.call(e).filter(function (t) {
            return (
              !t.getAttribute("data-animationappear") &&
              !t.getAttribute("data-screen-min") &&
              !t.getAttribute("data-screen-max")
            );
          }),
          n = 0;
        n < d.length;
        n++
      ) {
        var s,
          c = (s = d[n]).getBoundingClientRect().top + window.pageYOffset,
          u = window.pageYOffset + window.innerHeight + 300;
        t_addClass(s, 1e3 < c && u < c ? "r_hidden" : "r_showed"),
          t_addClass(s, "r_anim");
      }
      function h() {
        for (var t = d.length - 1; 0 <= t; t--) {
          var e = d[t];
          e.getBoundingClientRect().top + window.pageYOffset <
            (e.offsetHeight <= 100
              ? window.pageYOffset + window.innerHeight
              : window.pageYOffset + window.innerHeight - 100) &&
            (t_removeClass(e, "r_hidden"),
            t_addClass(e, "r_showed"),
            (d = Array.prototype.slice.call(d)).splice(t, 1));
        }
      }
      d.length &&
        (0 <
          (o = document.querySelectorAll('[data-record-type="400"]')).length &&
          ((r = a = 0),
          (l = setInterval(function () {
            300 === (r += 1) && clearInterval(l);
            for (var t = 0; t < o.length; t++)
              "yes" === o[t].getAttribute("data-hiding-completed") && (a += 1);
            a === o.length && (h(), clearInterval(l));
          }, 100))),
        window.addEventListener(
          "scroll",
          t_throttle(function () {
            h();
          }, 200)
        ),
        setTimeout(function () {
          h();
        }));
    }
    var t = document.querySelector("html"),
      p = document.body,
      m =
        ("none" === t.style.display && (t.style.display = "block"),
        document.querySelector(".t-hutorlabel")),
      p = p
        ? Math.max(
            p.scrollHeight,
            p.offsetHeight,
            p.clientHeight,
            t.offsetHeight
          )
        : t.offsetHeight;
    p + 70 < window.innerHeight
      ? m && (m.style.display = "none")
      : m && m.setAttribute("style", "display: block !important");
  }),
  (function () {
    function t() {
      (window.winWidth = window.innerWidth),
        (window.winHeight = window.innerHeight);
    }
    function e() {
      var t,
        e,
        n,
        i = window.isMobile
          ? document.documentElement.clientWidth
          : window.innerWidth,
        o = document.querySelectorAll(
          ".r[data-screen-max], .r[data-screen-min]"
        );
      -1 !== navigator.userAgent.indexOf("Instagram") && (i = screen.width);
      for (var a = 0; a < o.length; a++) {
        var r = o[a];
        if ("yes" === r.getAttribute("data-connect-with-tab")) return;
        (n = getComputedStyle(r).display),
          (t = (t = r.getAttribute("data-screen-max")) || 1e4),
          (e = (e = r.getAttribute("data-screen-min")) || 0),
          (t = parseInt(t)),
          (e = parseInt(e)) <= t &&
            (i <= t && e < i
              ? "block" !== n && (r.style.display = "block")
              : "none" !== n && (r.style.display = "none"));
      }
    }
    t_onReady(function () {
      t(),
        e(),
        window.addEventListener(
          "resize",
          t_throttle(function () {
            t();
          }, 200)
        ),
        window.addEventListener(
          "resize",
          t_throttle(function () {
            e();
          }, 200)
        );
    });
  })(),
  (function () {
    var h = -1 !== navigator.userAgent.indexOf("Instagram");
    function t() {
      for (
        var t,
          e,
          n,
          i,
          o = document.querySelectorAll(".t-cover__carrier"),
          a = 0,
          r = 0;
        r < o.length;
        r++
      )
        -1 < (d = (l = o[r]).style).height.indexOf("vh") &&
          ((a = parseInt(d.height, 10) / 100),
          ((e = document.createElement("div")).id = "tempDiv"),
          (e.style.cssText =
            "position:absolute;top:0;left:0;width:100%;height:100vh;visibility:hidden;"),
          document.body.appendChild(e),
          (e = document.getElementById("tempDiv")),
          (n = parseInt(getComputedStyle(e).height.replace("px", ""))),
          t_removeEl(e),
          (t = Math.round(n * a) + "px"),
          (e = l.closest(".t-cover")) &&
            ((n = e.querySelector(".t-cover__filter")),
            (i = e.querySelector(".t-cover__wrapper")),
            (e.style.height = t),
            n && (n.style.height = t),
            i && (i.style.height = t)),
          (d.height = t));
      for (
        var l,
          d,
          s = document.querySelectorAll("[data-height-correct-vh]"),
          c = window.innerHeight,
          r = (a = 0);
        r < s.length;
        r++
      )
        -1 < (d = (l = s[r]).style).height.indexOf("vh") &&
          ((a = parseInt(d.height) / 100), (d.height = t = c + "px"));
    }
    function e() {
      for (
        var t = h ? screen.width : window.innerWidth,
          e =
            (window.isMobile &&
              !h &&
              (t = document.documentElement.clientWidth),
            document.querySelectorAll(
              '.r:not([data-record-type="396"]):not([data-record-type="1003"])'
            )),
          n = [],
          i = 0;
        i < e.length;
        i++
      ) {
        var o = e[i],
          a = getComputedStyle(o);
        "none" !== a.display &&
          "hidden" !== a.visibility &&
          "0" !== a.opacity &&
          n.push(o);
      }
      for (var r = 0; r < n.length; r++)
        for (
          var l = n[r],
            d = l.querySelectorAll(
              'div:not([data-auto-correct-mobile-width="false"]):not(.tn-elem):not(.tn-atom):not(.tn-atom__sbs-anim-wrapper):not(.tn-atom__prx-wrapper):not(.tn-atom__videoiframe):not(.tn-atom__sticky-wrapper):not(.t-store__relevants__container):not(.t-slds__items-wrapper):not(.js-product-controls-wrapper):not(.js-product-edition-option):not(.t-product__option-variants)'
            ),
            s = 0;
          s < d.length;
          s++
        ) {
          var c = d[s],
            u = ((l.style.wordBreak = ""), t_outerWidth(c));
          if (t < u) {
            if (
              "yes" === c.getAttribute("[data-customstyle]") &&
              "false" ===
                c.parentNode.getAttribute("[data-auto-correct-mobile-width]")
            )
              return;
            console.log(
              "Block not optimized for mobile width. Block width:" +
                u +
                " Block id:" +
                l.getAttribute("id")
            ),
              console.log(c),
              (l.style.overflow = "auto"),
              (l.style.wordBreak = t < u - 3 ? "break-word" : "");
          }
        }
    }
    function o(t) {
      for (
        var e = document.querySelectorAll(
            '.t-text:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-name:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-title:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-descr:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-heading:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-text-impact:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-subtitle:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-uptitle:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"])'
          ),
          n = 0;
        n < e.length;
        n++
      ) {
        var i,
          o,
          a = e[n],
          r = a.getAttribute("style");
        r &&
          ((i = "rem" === a.getAttribute("data-auto-correct-font-size")),
          document.documentElement.clientWidth > t
            ? ((o = (o = r.replace("lineheight", "line-height")).replace(
                "fontsize",
                "font-size"
              )),
              a.setAttribute("style", o))
            : -1 === r.indexOf("font-size") ||
              parseInt(getComputedStyle(a).fontSize.replace("px", "")) < 26 ||
              ((o = r.replace("line-height", "lineheight")),
              (o = i
                ? o.replace(/font-size.*px;/gi, "font-size: 1.6rem;")
                : o.replace("font-size", "fontsize")),
              a.setAttribute("style", o)));
      }
    }
    (window.isMobile || window.parent.isPagePreview) &&
      (t_onReady(function () {
        setTimeout(t, 400);
      }),
      window.addEventListener("load", function () {
        setTimeout(t, 400);
      }),
      window.innerWidth < 480 ||
      (window.isMobile && document.documentElement.clientWidth < 480) ||
      (h && screen.width < 480)
        ? (t_onReady(function () {
            for (
              var t = document.querySelectorAll('[data-customstyle="yes"]'),
                e = document.querySelectorAll(
                  "[field] span, [field] strong, [field] em, [field] a"
                ),
                n = 0;
              n < t.length;
              n++
            ) {
              var i = t[n];
              26 < parseInt(getComputedStyle(i).fontSize.replace("px", "")) &&
                ((i.style.fontSize = null), (i.style.lineHeight = null));
            }
            for (n = 0; n < e.length; n++) {
              i = e[n];
              26 < parseInt(getComputedStyle(i).fontSize.replace("px", "")) &&
                (i.style.fontSize = null);
            }
            o(480),
              window.addEventListener("orientationchange", function () {
                setTimeout(function () {
                  o(480);
                }, 500);
              });
          }),
          window.addEventListener("load", e),
          window.addEventListener("orientationchange", function () {
            setTimeout(function () {
              e();
            }, 500);
          }))
        : (window.innerWidth < 900 ||
            (window.isMobile && document.documentElement.clientWidth < 900) ||
            (h && screen.width < 900)) &&
          t_onReady(function () {
            for (
              var t = document.querySelectorAll('[data-customstyle="yes"]'),
                e = document.querySelectorAll(
                  "[field] span, [field] strong, [field] em, [field] a"
                ),
                n = 0;
              n < t.length;
              n++
            ) {
              var i = t[n];
              30 < parseInt(getComputedStyle(i).fontSize.replace("px", "")) &&
                ((i.style.fontSize = null), (i.style.lineHeight = null));
            }
            for (n = 0; n < e.length; n++) {
              i = e[n];
              30 < parseInt(getComputedStyle(i).fontSize.replace("px", "")) &&
                (i.style.fontSize = null);
            }
            for (
              var o = document.querySelectorAll(
                  '.t-text:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-name:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-title:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-descr:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-heading:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-text-impact:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-subtitle:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"]), .t-uptitle:not(.tn-elem):not(.tn-atom):not([data-auto-correct-line-height="false"])'
                ),
                n = 0;
              n < o.length;
              n++
            ) {
              var a = (i = o[n]).getAttribute("style");
              a &&
                -1 < a.indexOf("font-size") &&
                30 < parseInt(getComputedStyle(i).fontSize.replace("px", "")) &&
                ((a = (
                  "rem" === i.getAttribute("data-auto-correct-font-size")
                    ? a.replace(/font-size.*px;/gi, "font-size: 1.6rem;")
                    : a.replace("font-size", "fontsize")
                ).replace("line-height", "lineheight")),
                i.setAttribute("style", a));
            }
          }));
  })(),
  t_onReady(function () {
    setTimeout(function () {
      for (
        var t = document.querySelectorAll('a[href^="http"][target="_blank"]'),
          e = 0;
        e < t.length;
        e++
      ) {
        var n = t[e],
          i = n.getAttribute("rel") || "";
        "" === i
          ? n.setAttribute("rel", "noopener")
          : -1 === i.indexOf("noopener") &&
            n.setAttribute("rel", i + " noopener");
      }
    }, 2500);
  }),
  (function (a) {
    a.onerror = function (t, e, n, i, o) {
      "object" != typeof a.t_jserrors && (a.t_jserrors = []),
        a.t_jserrors.push({
          message: t,
          filename: e,
          lineno: n,
          colno: i,
          error: o,
        });
    };
  })(window, Math),
  t_onReady(function () {
    document.body.addEventListener(
      "popupShowed",
      t_scrollBarWidthCompensator__init
    ),
      document.body.addEventListener("popupHidden", function () {
        var t = window.scrollBarWidthCompensator;
        t &&
          (t.cancelTimeout &&
            (window.clearTimeout(t.cancelTimeout), (t.cancelTimeout = null)),
          (t.cancelTimeout = window.setTimeout(function () {
            (t.cancelTimeout = null), t_scrollBarWidthCompensator__cancel();
          }, Math.min(300, t.delay))));
      });
  });
