(function (config) {
  var ba = navigator.userAgent.toLowerCase(), ca = window, fa = document, ga = fa.documentElement;

  function ma(a) {
    return -1 !== ba.indexOf(a)
  }

  var na = /([a-z0-9]*\d+[a-z0-9]*)/;

  function pa() {
    var a = qa;
    if (!a) return null;
    var a = a.toLowerCase(), b = null;
    if (b = a.match(/angle \((.*)\)/)) a = b[1], a = a.replace(/\s*direct3d.*$/, "");
    a = a.replace(/\s*\([^\)]*wddm[^\)]*\)/, "");
    if (0 <= a.indexOf("intel")) {
      b = ["Intel"];
      0 <= a.indexOf("mobile") && b.push("Mobile");
      (0 <= a.indexOf("gma") || 0 <= a.indexOf("graphics media accelerator")) && b.push("GMA");
      if (0 <= a.indexOf("haswell")) b.push("Haswell"); else if (0 <= a.indexOf("ivy")) b.push("HD 4000"); else if (0 <= a.indexOf("sandy")) b.push("HD 3000"); else if (0 <= a.indexOf("ironlake")) b.push("HD");
      else {
        0 <= a.indexOf("hd") && b.push("HD");
        var c = a.match(na);
        c && c[1] && b.push(c[1].toUpperCase())
      }
      return b = b.join(" ")
    }
    return 0 <= a.indexOf("nvidia") || 0 <= a.indexOf("quadro") || 0 <= a.indexOf("geforce") || 0 <= a.indexOf("nvs") ? (b = ["nVidia"], 0 <= a.indexOf("geforce") && b.push("geForce"), 0 <= a.indexOf("quadro") && b.push("Quadro"), 0 <= a.indexOf("nvs") && b.push("NVS"), a.match(/\bion\b/) && b.push("ION"), a.match(/gtx\b/) ? b.push("GTX") : a.match(/gts\b/) ? b.push("GTS") : a.match(/gt\b/) ? b.push("GT") : a.match(/gs\b/) ? b.push("GS") : a.match(/ge\b/) ?
      b.push("GE") : a.match(/fx\b/) && b.push("FX"), (c = a.match(na)) && c[1] && b.push(c[1].toUpperCase().replace("GS", "")), 0 <= a.indexOf("titan") ? b.push("TITAN") : 0 <= a.indexOf("ti") && b.push("Ti"), b = b.join(" ")) : 0 <= a.indexOf("amd") || 0 <= a.indexOf("ati") || 0 <= a.indexOf("radeon") || 0 <= a.indexOf("firegl") || 0 <= a.indexOf("firepro") ? (b = ["AMD"], 0 <= a.indexOf("mobil") && b.push("Mobility"), c = a.indexOf("radeon"), 0 <= c && b.push("Radeon"), 0 <= a.indexOf("firepro") ? b.push("FirePro") : 0 <= a.indexOf("firegl") && b.push("FireGL"), 0 <= a.indexOf("hd") &&
    b.push("HD"), 0 <= c && (a = a.substring(c)), (c = a.match(na)) && c[1] && b.push(c[1].toUpperCase().replace("HD", "")), b = b.join(" ")) : a.substring(0, 100)
  }

  var ra = "microsoft basic render driver;vmware svga 3d;Intel 965GM;Intel B43;Intel G41;Intel G45;Intel G965;Intel GMA 3600;Intel Mobile 4;Intel Mobile 45;Intel Mobile 965".split(";"),
    sa = "ActiveXObject" in ca,
    va = "devicePixelRatio" in ca && 1 < ca.devicePixelRatio || sa && "matchMedia" in ca && ca.matchMedia("(min-resolution:144dpi)") && ca.matchMedia("(min-resolution:144dpi)").matches,
    wa = ma("windows nt"), xa = -1 !== ba.search(/windows nt [1-5]\./), ya = -1 !== ba.search(/windows nt 5\.[12]/),
    za = xa && !ya;
  ma("windows nt 10");
  var Da = ma("windows phone"), Ea = ma("macintosh"), Fa = ma("Mb2345Browser"), Ga = ma("ipad;") || ma("ipad "),
    Ja = Ga && va, Ka = ma("ipod touch;"), La = ma("iphone;") || ma("iphone "), Ma = La || Ga || Ka,
    Na = Ma && -1 !== ba.search(/ os [456]_/);
  Ma && ba.search(/ os [4-8]_/);
  Ma && ba.search(/ os [78]_/);
  Ma && ma("os 8_");
  var Qa = Ma && ma("os 10_"), Ra = ma("android"), Sa = 0;
  Ra && (Sa = parseInt(ba.split("android ")[1]) || 0);
  var Ta = Ra && 4 > Sa;
  Ra && 5 <= Sa || ba.search(/android 4.4/);
  var Ua = Ra ? "android" : Ma ? "ios" : wa ? "windows" : Ea ? "mac" : "other", Va = sa && !ca.XMLHttpRequest,
    Wa = sa && !fa.querySelector, Xa = sa && !fa.addEventListener, Ya = sa && ma("msie 9"), Za = sa && ma("msie 10"),
    $a = sa && ma("rv:11"), ab = Xa || Ya, bb = ma("edge"), cb = ma("qtweb"), db = ma("ucbrowser"),
    eb = ma("alipay") || Ra && db, fb = ma("miuibrowser"), gb = ma("micromessenger"), hb = ma("mqqbrowser"),
    ib = ma("baidubrowser"), chrome = (ma("chrome") || ma("crios")) && !gb && !ib && !hb && !bb && !fb,
    jb = chrome && ma("chromium"), kb = chrome && !jb && (30 < parseInt(ba.split("chrome/")[1]) ||
    30 < parseInt(ba.split("crios/")[1])), lb = ma("firefox"), mb = lb && 27 < parseInt(ba.split("firefox/")[1]),
    nb = (Ea || Ma) && ma("safari") && ma("version/"), ob = Ea && nb && 7 < parseInt(ba.split("version/")[1]),
    pb = Ma && ma("aliapp"), qb = Ma && (!hb && !db && !gb && !chrome && !lb && !nb || pb && !db),
    rb = Ra || Ma || Da || ma("mobile"), sb = "ontouchstart" in fa,
    tb = ca.navigator && ca.navigator.msPointerEnabled && !!ca.navigator.msMaxTouchPoints,
    ub = ca.navigator && !!ca.navigator.maxTouchPoints, vb = !sb && (ub || tb), wb = sb || vb, xb = function () {
      if (!rb) return ca.devicePixelRatio ||
        1;
      var a = document.getElementsByTagName("meta");
      if (window.parent && window.parent !== window) try {
        if (window.parent.location.origin === window.location.origin) a = window.parent.document.getElementsByTagName("meta"); else return 1
      } catch (b) {
        return 1
      }
      for (var c = a.length - 1; 0 <= c; c -= 1) if ("viewport" === a[c].name) {
        var c = a[c].content, d;
        -1 !== c.indexOf("initial-scale") && (d = parseFloat(c.split("initial-scale=")[1]));
        a = -1 !== c.indexOf("minimum-scale") ? parseFloat(c.split("minimum-scale=")[1]) : 0;
        c = -1 !== c.indexOf("maximum-scale") ?
          parseFloat(c.split("maximum-scale=")[1]) : Infinity;
        if (d) {
          if (c >= a) return d > c ? c : d < a ? a : d
        } else if (c >= a) return 1 <= a ? 1 : Math.min(c, 1);
        console && console.log && console.log("viewport\u53c2\u6570\u4e0d\u5408\u6cd5");
        return null
      }
    }(), yb = va && (!rb || !!xb && 1 <= xb), zb = sa && "transition" in ga.style,
    Ab = !!fa.createElementNS && !!fa.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
    Bb = fa.createElement("canvas"), Cb = !(!Bb || !Bb.getContext), Db = window.URL || window.webkitURL,
    Eb = !0 !== window.disableWorker && !sa && !bb && !(db &&
      Ra) && window.Worker && Db && Db.createObjectURL && window.Blob, Fb = "", qa = "", Gb = 0,
    Jb = window.forceWebGL ? {alpha: !0, antialias: !0, depth: !0} : {
      alpha: !0,
      antialias: !0,
      depth: !0,
      failIfMajorPerformanceCaveat: !0,
      preserveDrawingBuffer: !0,
      stencil: !0
    }, Kb = function () {
      if (!window.forceWebGL && (!Cb || !Eb || qb && pb && !db)) return !1;
      for (var a = ["webgl", "experimental-webgl", "moz-webgl"], b = null, c = 0; c < a.length; c += 1) {
        try {
          b = Bb.getContext(a[c], Jb)
        } catch (d) {
        }
        if (b) {
          if (b.drawingBufferWidth !== Bb.width || b.drawingBufferHeight !== Bb.height) break;
          if (window.forceWebGL) return Fb =
            a[c], Gb = Infinity, !0;
          if (!b.getShaderPrecisionFormat || !b.getParameter || !b.getExtension) break;
          Gb = b.getParameter(b.MAX_RENDERBUFFER_SIZE);
          var e = b.getParameter(b.MAX_VIEWPORT_DIMS);
          if (!e) break;
          Gb = Math.min(Gb, e[0], e[1]);
          nb && "mac" === Ua && (Gb = Math.min(Gb, 4096));
          e = Math.max(screen.width, screen.height);
          yb && (e *= Math.min(2, window.devicePixelRatio || 1));
          if (e > Gb) break;
          if (23 > b.getShaderPrecisionFormat(35632, 36338).precision || 23 > b.getShaderPrecisionFormat(35633, 36338).precision) break;
          qa = b.getExtension("WEBGL_debug_renderer_info") ?
            b.getParameter(37446) : null;
          if ((b = pa()) && -1 !== ra.indexOf(b)) break;
          Fb = a[c];
          return !0
        }
      }
      return !1
    }(), Lb = Kb && (kb || mb || ob) && ("mac" === Ua || "windows" === Ua) && !rb,
    Mb = !window.Uint8Array || !Cb || cb || Da || rb && lb || Ya || Na || Ja || Ka || Ta || ma("gt-n710") || za,
    Nb = !Mb && !Lb, Ob = Lb ? "vw" : Mb ? "d" : Nb ? "dv" : "v", Pb = ma("webkit"),
    Qb = "WebKitCSSMatrix" in ca && "m11" in new window.WebKitCSSMatrix, Rb = "MozPerspective" in ga.style,
    Sb = "OTransition" in ga.style, Tb = zb || Qb || Rb || Sb, Ub = void 0 !== config[8] ? config[8] : !0,
    Vb = void 0 !== config[9] ? config[9] : !0, Wb =
      void 0 !== config[10] ? config[10] : !0, Xb = void 0 !== config[11] ? config[11] : !0,
    Yb = void 0 !== config[12] ? config[12] : null, Zb = !Ab && rb && Cb, $b = !0;
  try {
    if ("undefined" === typeof ca.localStorage) $b = !1; else {
      var ac = (new Date).getTime() + "";
      ca.localStorage.setItem("_test", ac);
      ca.localStorage.getItem("_test") !== ac && ($b = !1);
      ca.localStorage.removeItem("_test")
    }
  } catch (bc) {
    $b = !1
  }
  var cc = parseInt(ba.split("chrome/")[1]), dc = Ub && Cb;
  config.l = {
    Pra: Ga,
    Qra: La,
    size: La ? 100 : Ra ? 200 : 500,
    oz: Ea,
    Xza: wa,
    ED: Ma,
    aFa: Qa,
    Yl: Ra,
    ama: Ta,
    J3: eb,
    Ez: Ua,
    YH: ib,
    awa: hb,
    zE: nb,
    B$: gb,
    Es: sa,
    Ci: Va,
    sv: Wa,
    h5: Ya,
    g5: Za,
    Ie: Xa,
    j5: ab,
    Tra: $a,
    opa: bb,
    Wra: sa && !$a,
    Sta: Fa,
    Gv: $b,
    Pi: dc && $b && Xb && !rb && chrome,
    mf: Yb,
    geolocation: rb || sa && !Xa || bb,
    lza: db,
    vL: db && !chrome,
    chrome: chrome,
    h3: !0,
    fR: lb,
    ba: rb,
    eua: rb && Pb,
    E6: rb && Qb,
    dua: rb && ca.opera,
    Kc: va,
    DL: xb,
    ja: yb,
    Yf: wb,
    G6: tb,
    GT: ub,
    O7: vb,
    pna: chrome && 57 <= cc,
    qna: !rb && chrome && 64 <= cc,
    A$: Pb,
    Ura: zb,
    HL: Qb,
    fqa: Rb,
    Xua: Sb,
    UH: Tb,
    Gn: Ab,
    kl: Cb,
    JS: Eb,
    jA: Wb,
    Sf: Lb,
    x$: Fb,
    y$: Jb,
    WR: qa,
    Qta: Gb,
    yAa: !1,
    Xp: Ub && !Mb,
    P1: Ub ? Ob : "d",
    l2: Ub ? Kb : !1,
    gL: dc,
    qp: Ub && Kb,
    mFa: Ub && (!Mb || Kb),
    xq: Vb && !!ca.WebSocket && !ib,
    YFa: Zb,
    fva: Cb || Zb ? "c" : "d"
  };
  var ec = config;
  config = void 0;
  var fc = {
    overlay: ["style"],
    "AMap.IndoorMap": ["AMap.CustomLayer", "cvector"],
    "AMap.IndoorMap3D": ["Map3D"],
    "AMap.MarkerList": ["AMap.TplUtils"],
    Map3D: ["vectorlayer", "wgl", "AMap.CustomLayer", "rbush"],
    "AMap.Heatmap": ["AMap.CustomLayer"],
    "AMap.DistrictLayer": ["MVT"],
    vectorForeign: ["gridmap", "MVT"],
    "AMap.GltfLoader": ["AMap.CustomLayer", "Map3D"],
    "AMap.LabelsLayer": ["rbush", "promise"]
  };
  window.AMap ? (window.AMap.version = "1606397679220", window.AMap.zL = {
    zM: function (a) {
      a(ec)
    }
  }) : window.AMap = {
    version: "1606397679220", zL: {
      zM: function (a) {
        a(ec)
      }
    }
  };
  ec.Hk = "1606397679220";
  ec.Ru = fc;
  for (var gc = document.head || document.getElementsByTagName("head")[0], hc = '.vml{behavior:url(#default#VML);display:inline-block;position:absolute}.amap-custom{top:0;left:0;position:absolute}.amap-container img{max-width:none!important;max-height:none!important}.amap-container{touch-action:none;position:relative;overflow:hidden;background:#fcf9f2 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0AgMAAAC2uDcZAAAADFBMVEX////////////////1pQ5zAAAABHRSTlMAgP/AWuZC2AAAAVhJREFUeAFiYGAQYGDEQjAB2rcDC4BiGIqiU7abdKlO2QkeIClyPsDHweMKtOPHIJ1Op6/w7Y4fdqfT6VpndzqdrnV2p9PpWmd3Oj3qWndSoKp+2J1Op7vr7E6n07XO7nQ6XevsTqfTtc7udPo4/f787E6n0911dqfT6VpndzqdrnV2p9PpWmd3Ot27Ce8m6HS6u85dR6fTtU7r6HS61mkdnU7XOrvT6XTvJuxOp9PddXan0+laZ3c6na51dDpd67SOTqd7N+HdBJ1Od9e56+h0utZpHZ1O1zq70+l0rbM7nU73bsLudDrdXWd3Ol3rtI5Op2ud1tHpdK3TOjqd7t2EdxN0Ot1dZ3c6na51dqfT6VpndzqdrnV2p9Pp3k3Q6XR3nbuOTqdrndbR6XSt0zo6na51Wken072bsDudTnfX2Z1Op2ud3el0utbZnU7XOq2j0+t0uncTD1gO4zoT5doZAAAAAElFTkSuQmCC);-ms-touch-action:none}.amap-drags,.amap-layers{width:100%;height:100%;position:absolute;overflow:hidden}.amap-layers canvas{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.amap-layer img{pointer-events:none}.amap-e,.amap-maps{width:100%;height:100%}.amap-maps,.amap-e,.amap-layers,.amap-tile,.amap-tile-container{position:absolute;left:0;top:0;overflow:hidden}.amap-context{position:absolute;left:0;top:0}.amap-overlays,.amap-markers,.amap-marker{position:absolute;left:0;top:0}.amap-layers{z-index:0}.amap-overlays{z-index:110;cursor:default}.amap-markers{z-index:120}.amap-controls{z-index:150}.amap-copyright{position:absolute;display:block!important;left:77px;height:16px;bottom:0;padding-bottom:3px;font-size:11px;font-family:Arial,sans-serif;z-index:160}.amap-logo{position:absolute;bottom:1px;left:1px;z-index:160;height:20px}.amap-logo img{width:73px!important;height:20px!important;border:0;vertical-align:baseline!important}.amap-icon{position:relative;z-index:1}.amap-icon img{position:absolute;z-index:-1}.amap-marker-label{position:absolute;z-index:2;border:1px solid blue;background-color:white;white-space:nowrap;cursor:default;padding:3px;font-size:12px;line-height:14px}.amap-info{position:absolute;left:0;z-index:140;width:320px}.amap-menu{position:absolute;z-index:140;_width:100px}.amap-info-close{position:absolute;right:5px;_right:12px;+right:11px;top:5px;_top:2px;+top:2px;color:#c3c3c3;text-decoration:none;font:bold 16px/14px Tahoma,Verdana,sans-serif;width:14px;height:14px}.amap-info-outer,.amap-menu-outer{box-shadow:0 1px 2px rgba(0,0,0,0.1);background:none repeat scroll 0 0 white;border-radius:2px;padding:1px;text-align:left}.amap-menu-outer:hover{box-shadow:0 1px 2px rgba(0,0,0,0.3)}.amap-info-contentContainer:hover .amap-info-outer{box-shadow:0 1px 2px rgba(0,0,0,0.3)}.amap-info-content{position:relative;background:#fff;padding:10px 18px 10px 10px;line-height:1.4;overflow:auto}.amap-marker-content{position:relative}.amap-info{_width:320px}.amap-menu{_width:100px}.amap-info-sharp-old{overflow:hidden;position:absolute;background-image:url(/amap/images/arrows.png)}.bottom-center .amap-info-sharp-old{height:12px;margin:0 auto;width:20px;background-position:center 12px;top:100%;margin-top:-9px;left:50%;margin-left:-10px}.bottom-left .amap-info-sharp-old{height:12px;width:13px;background-position:-16px -46px;top:100%;margin-top:-9px}.bottom-right .amap-info-sharp-old{height:12px;width:13px;top:-1px;background-position:-56px -46px;left:100%;margin-left:-13px;top:100%;margin-top:-9px}.middle-left .amap-info-sharp-old{height:20px;width:12px;background-position:left;top:50%;margin-top:-10px;margin-left:-11px}.center .amap-info-sharp-old{display:none}.middle-right .amap-info-sharp-old{height:20px;margin-right:0;width:12px;background-position:right;left:100%;margin-left:-9px;top:50%;margin-top:-10px}.top-center .amap-info-sharp-old{height:12px;margin:0 auto;width:20px;background-position:top;top:0;margin-top:-3px;left:50%;margin-left:-10px}.top-left .amap-info-sharp-old{height:12px;width:13px;background-position:-16px -3px;top:0;margin-top:-3px}.top-right .amap-info-sharp-old{height:12px;width:13px;background-position:-56px -3px;left:100%;margin-left:-13px;top:0;margin-top:-3px}.amap-info-sharp{position:absolute}.bottom-center .amap-info-sharp{bottom:0;left:50%;margin-left:-8px;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #fff}.bottom-center .amap-info-sharp:after{position:absolute;content:"";margin-left:-8px;margin-top:-7px;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid rgba(0,0,0,0.3);filter:blur(2px);z-index:-1}.amap-info-contentContainer:hover.bottom-center .amap-info-sharp:after{border-top:8px solid rgba(0,0,0,0.5)}.bottom-left .amap-info-sharp{border-color:transparent #fff;border-width:0 0 10px 10px;border-style:solid}.bottom-left .amap-info-sharp:after{position:absolute;content:"";margin-left:-10px;border-color:transparent rgba(0,0,0,0.3);border-width:0 0 10px 10px;border-style:solid;filter:blur(1px);z-index:-1}.amap-info-contentContainer:hover.bottom-left .amap-info-sharp:after{border-color:transparent rgba(0,0,0,0.5)}.bottom-left .amap-info-content{border-radius:2px 2px 2px 0}.bottom-right .amap-info-sharp{right:0;border-top:10px solid #fff;border-left:10px solid transparent}.bottom-right .amap-info-sharp:after{position:absolute;margin-top:-9px;margin-left:-10px;content:"";border-top:10px solid rgba(0,0,0,0.3);border-left:10px solid transparent;filter:blur(1px);z-index:-1}.amap-info-contentContainer:hover.bottom-right .amap-info-sharp:after{border-top:10px solid rgba(0,0,0,0.5)}.bottom-right .amap-info-content{border-radius:2px 2px 0 2px}.top-center .amap-info-sharp{top:0;left:50%;margin-left:-8px;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #fff}.top-center .amap-info-sharp:after{position:absolute;content:"";margin-top:0;margin-left:-8px;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid rgba(0,0,0,0.3);filter:blur(1px);z-index:-1}.top-left .amap-info-sharp{left:0;top:0;border-bottom:10px solid #fff;border-right:10px solid transparent}.top-left .amap-info-sharp:after{position:absolute;content:"";margin-top:0;margin-left:0;border-bottom:10px solid rgba(0,0,0,0.3);border-right:10px solid transparent;filter:blur(1px);z-index:-1}.top-right .amap-info-sharp{right:0;top:0;border-bottom:10px solid #fff;border-left:10px solid transparent}.top-right .amap-info-sharp:after{position:absolute;content:"";margin-top:0;margin-left:-10px;border-bottom:10px solid rgba(0,0,0,0.3);border-left:10px solid transparent;filter:blur(1px);z-index:-1}.middle-right .amap-info-sharp{right:0;top:50%;margin-top:-8px;border-top:8px solid transparent;border-left:8px solid #fff;border-bottom:8px solid transparent}.middle-right .amap-info-sharp:after{position:absolute;content:"";margin-top:-8px;margin-left:-8px;border-top:8px solid transparent;border-left:8px solid rgba(0,0,0,0.3);border-bottom:8px solid transparent;filter:blur(1px);z-index:-1}.amap-info-contentContainer:hover.middle-right .amap-info-sharp:after{border-left:8px solid rgba(0,0,0,0.5)}.middle-left .amap-info-sharp{left:0;top:50%;margin-top:-8px;border-top:8px solid transparent;border-right:8px solid #fff;border-bottom:8px solid transparent}.middle-left .amap-info-sharp:after{position:absolute;content:"";margin-top:-8px;margin-left:0;border-top:8px solid transparent;border-right:8px solid rgba(0,0,0,0.3);border-bottom:8px solid transparent;filter:blur(1px);z-index:-1}.amap-info-contentContainer:hover.middle-left .amap-info-sharp:after{border-right:8px solid rgba(0,0,0,0.5)}.amap-info-contentContainer.top-left,.amap-info-contentContainer.top-center,.amap-info-contentContainer.top-right{padding-top:8px}.amap-info-contentContainer.bottom-left,.amap-info-contentContainer.bottom-center,.amap-info-contentContainer.bottom-right{padding-bottom:8px}.amap-info-contentContainer.middle-right{padding-right:8px}.amap-info-contentContainer.middle-left{padding-left:8px}.amap-menu-outer{margin:0;padding:0;list-style-type:none}ul.amap-menu-outer li{cursor:pointer;height:35px;line-height:35px;word-break:break-all;padding:0 10px;font-size:12px;white-space:nowrap}ul.amap-menu-outer li a{text-decoration:none;font-size:13px;margin:0 5px;color:#000;padding:5px 5px}ul.amap-menu-outer li:hover{background-color:#f3f3ee}.amap-overlay-text-container{display:block;width:auto;word-break:keep-all;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;background:#fff;padding:2px 3px;border:1px solid #ccc;border-radius:3px}.amap-overlay-text-container.amap-overlay-text-empty{display:none}.amap-info-content-ie8{border:1px solid #9c9c9c}'.replace(/url\((['"]?)(?:\.\.\/)+/g, "url($1" +
    ec[2].split(",")[0] + "/"), ic = null, jc = 0, kc = gc.childNodes.length; jc < kc; jc++) if (1 === gc.childNodes[jc].nodeType) {
    ic = gc.childNodes[jc];
    break
  }
  if (hc) if (gc) {
    var lc = document.createElement("style");
    lc.setAttribute("type", "text/css");
    lc.setAttribute("class", "AMap.style");
    lc.styleSheet ? lc.styleSheet.cssText = hc : lc.innerHTML = hc;
    ic ? gc.insertBefore(lc, ic) : gc.appendChild(lc)
  } else document.write("<style type='text/css'>" + hc + "</style>");
  var g = g || {Da: {Le: 0, lr: [], Ij: {}}}, B = {o: {}, control: {}, C: {}};
  g.KDa = function (a) {
    var b = Function;
    return function () {
      return (new b("return " + a))()
    }
  }();
  g.CLASS_NAME = "AMap";
  g.c = g.BuryPoint = {};
  g.c.add = g.BuryPoint.add = function (a, b, c) {
    a.u5 || a.D || !(a = a.CLASS_NAME) || (a = a.replace("AMap.", ""), g.AA.mp(a, b, c))
  };
  var mc = {lang: 1, baseRender: 1, overlayRender: 1, viewMode: 1};
  g.c.ya = g.BuryPoint.addOptions = function (a, b) {
    if (!a.Zua) if (b && (b.innerLayer || b.innerOverlay)) a.u5 = !0; else {
      a.Zua = !0;
      var c = a.CLASS_NAME;
      if (c) {
        c = c.replace("AMap.", "");
        g.AA.mp(c);
        b = b || {};
        for (var d in b) b.hasOwnProperty(d) && ("Map" === c && d in mc ? g.AA.mp(c, d, b[d]) : g.AA.mp(c, d))
      }
    }
  };
  g.da = function () {
  };
  g.da.extend = g.da.extend = function (a) {
    function b() {
    }

    function c() {
      var a = this.initialize || this.A;
      a && a.apply(this, arguments);
      if (!d && this.Oi) {
        a = document.createElement("style");
        a.setAttribute("type", "text/css");
        this.CLASS_NAME && a.setAttribute("class", this.CLASS_NAME);
        this.Oi = this.Oi.replace(/url\((['"]?)(?:\.\.\/)*/g, "url($1" + g.r.Fb + "/");
        a.styleSheet ? a.styleSheet.cssText = this.Oi : a.innerHTML = this.Oi;
        for (var b = document.head || document.getElementsByTagName("head")[0], c = null, e = 0, f = b.childNodes.length; e < f; e++) if (1 ===
          b.childNodes[e].nodeType) {
          c = b.childNodes[e];
          break
        }
        c ? b.insertBefore(a, c) : b.appendChild(a)
      }
      d = !0
    }

    var d = !1;
    b.prototype = this.prototype;
    var e = new b;
    e.constructor = c;
    c.prototype = e;
    c.prototype.Fh = c.prototype["super"] = function (a) {
      return a.callee.ma.apply(this, a)
    };
    for (var f in this) this.hasOwnProperty(f) && "prototype" !== f && (c[f] = this[f]);
    a.s9 && (g.extend(c, a.s9), a.s9 = null);
    a.ka && (g.extend.apply(null, [e].concat(a.ka)), a.ka = null);
    a.w && e.w && (a.w = g.extend({}, e.w, a.w));
    var h = e.constructor.ssa, k = {};
    if (void 0 !== h) for (f in h) h.hasOwnProperty(f) &&
    (k[h[f]] = f);
    for (f in a) if (Object.prototype.hasOwnProperty.call(a, f)) {
      var l = f, m = f;
      h && k[f] && (m = k[f]);
      "function" === typeof a[l] && "function" === typeof e[m] && (a[l].ma = e[m])
    }
    g.extend(e, a);
    a.toString && (e.toString = a.toString);
    c.bd = this.prototype;
    return c
  };
  g.da.Gb = g.da.include = function (a) {
    g.extend(this.prototype, a)
  };
  g.extend = function (a) {
    var b = Array.prototype.slice.call(arguments, 1), c, d, e, f;
    d = 0;
    for (e = b.length; d < e; d += 1) if (f = b[d] || {}, Object.assign) Object.assign(a, f); else for (c in f) Object.prototype.hasOwnProperty.call(f, c) && (a[c] = f[c]);
    return a
  };
  g.da.Xb = function (a) {
    for (var b in a) if (a.hasOwnProperty(b)) {
      var c = a[b];
      if ("string" === typeof c) this.prototype[b] && (this.prototype[c] = this.prototype[b]); else for (var d = 0, e = c.length; d < e; d++) this.prototype[b] && (this.prototype[c[d]] = this.prototype[b])
    }
  };
  g.AA = {
    Ij: {}, getKey: function (a, b) {
      a = a || "";
      return void 0 !== b && a ? a + "@" + b : a
    }, mp: function (a, b, c) {
      this.Ij[a] || (this.Ij[a] = {});
      b = this.getKey(b, c);
      void 0 == this.Ij[a][b] && (this.Ij[a][b] = 0)
    }, send: function () {
      var a = [], b;
      for (b in this.Ij) if (this.Ij.hasOwnProperty(b)) {
        var c = this.Ij[b], d = [], e;
        for (e in c) c.hasOwnProperty(e) && 0 == c[e] && (d.push(e), c[e] = 1);
        d.length && a.push(b + "~" + d.join(","))
      }
      a.length && (a = ["type=nfl", "k=" + g.r.key, "m=" + (g.l.ba ? 1 : 0), "pf=" + g.l.Ez, "v=" + g.r.nn, "branch=JSAPI", "log=" + a.join("!")], a = "/amap/webapi/count?" +
        a.join("&"), new g.jb.yb(a))
    }
  };
  setInterval(function () {
    g.AA.send()
  }, 1E4);
  g.va = {
    h: function (a, b, c, d, e) {
      if (this.ue(a, b, c || this)) return this;
      var f = this.of = this.of || {};
      f[a] = f[a] || [];
      e ? f[a].unshift({wb: b, cf: c || this, Fj: d}) : f[a].push({wb: b, cf: c || this, Fj: d});
      return this
    }, ue: function (a, b, c) {
      var d = this.of;
      if (b && c) {
        if (d && a in d && d[a]) for (var e = 0; e < d[a].length; e += 1) if (d[a][e].wb === b && d[a][e].cf === c) return !0;
        return !1
      }
      return d && a in d && d[a] && 0 < d[a].length
    }, G: function (a, b, c) {
      if (!this.ue(a)) return this;
      var d = this.of;
      if (d && d[a]) for (var e = 0; e < d[a].length; e += 1) if (!(d[a][e].wb !== b && "mv" !==
        b || c && d[a][e].cf !== c)) {
        d[a].splice(e, 1);
        d[a].length || (d[a] = null);
        break
      }
      return this
    }, gK: function (a, b) {
      if (!this.ue(a)) return this;
      var c = this.of;
      if (c && c[a]) for (var d = 0; d < c[a].length; d += 1) if (!b || c[a][d].cf === b) {
        c[a].splice(d, 1);
        c[a].length || (c[a] = null);
        break
      }
      return this
    }, q: function (a, b) {
      if (!this.ue(a)) return this;
      var c = {type: a};
      void 0 !== b && (b instanceof Array ? (c = b.slice(0), c.type = a) : "string" === typeof b || "number" === typeof b || "boolean" === typeof b ? c.value = b : g.a.HJ(b) ? c.value = b : c = g.extend(c, b));
      for (var d =
        [].concat(this.of[a]), e = 0; e < d.length; e += 1) d[e].wb && (d[e].wb.call(d[e].cf || this, c), d[e] && d[e].Fj && this.of[a] && this.of[a].splice(e, 1));
      return this
    }, wi: function (a) {
      a ? this.of && this.of[a] && (this.of[a] = null) : this.of = null;
      return this
    }
  };
  g.va.on || (g.va.on = g.va.h);
  g.va.off || (g.va.off = g.va.G);
  g.va.emit || (g.va.emit = g.va.q);
  g.$e = {
    set: function (a, b, c) {
      var d = this.Jl;
      if (d && d[a]) {
        var d = d[a], e = "set" + this.G4(a);
        if (d[e]) {
          var f = !1;
          !0 == d.D ? f = !0 : d.D = !0;
          d[e](b, c);
          f || (d.D = !1);
          c || this.FK(a, b)
        } else d.set(a, b, c)
      } else (this.Ce = this.Ce || {})[a] = b, c || this.FK(a, b)
    }, G4: function () {
      var a = {};
      return function (b) {
        a[b] || (a[b] = b.charAt(0).toUpperCase() + b.substr(1));
        return a[b]
      }
    }(), get: function (a, b, c) {
      var d, e = this.Jl;
      d = "get" + this.G4(a);
      if (e && e[a]) return c = e[a], c[d] ? (a = !1, !0 == c.D ? a = !0 : c.D = !0, b = c[d](b), a || (c.D = !1), b) : c.get(a, b);
      if (!c && this[d]) return a =
        !1, !0 == this.D ? a = !0 : this.D = !0, b = this[d](b), a || (this.D = !1), b;
      if (this.Ce && this.Ce.hasOwnProperty(a)) return this.Ce[a]
    }, X: function (a, b, c) {
      this.Jl || (this.Jl = {});
      this.Jl[a] !== b && (b.h(a, function (b) {
        this.FK(a, b)
      }, this), this.Jl[a] = b, c || this.FK(a))
    }, bf: function (a, b, c) {
      for (var d = 0; d < a.length; d += 1) this.X(a[d], b, !c)
    }, zl: function (a) {
      this.Jl && this.Jl[a] && (this.Jl[a].G(a, "mv", this), this.Jl[a] = void 0)
    }, Al: function () {
      if (this.Jl) for (var a in this.Jl) this.Jl.hasOwnProperty(a) && this.zl(a)
    }, FK: function (a, b) {
      var c = a + "Changed";
      if (this[c]) this[c](b);
      this.q(a, b)
    }, qFa: function (a, b, c) {
      var d = new (g.da.extend({ka: [g.va, g.$e]}));
      d.gQ = function () {
        for (var b = !0, e = 0; e < a.length; e += 1) d.get(a[e]) || (b = !1);
        b && (d.Al(), c())
      };
      for (var e = 0; e < a.length; e += 1) d.X(a[e], b)
    }, kf: function (a, b) {
      var c, d;
      for (c in a) a.hasOwnProperty(c) && (d = a[c], this.set(c, d, b))
    }
  };
  g.r = {
    localStorage: !0,
    TH: 500,
    ze: !0,
    De: {
      dark: "#202020",
      blue_night: "#090d20",
      test: "#033447",
      mapv: "#000001",
      techblue: "#000b11",
      insight: "#19212a",
      "default": "#fcf9f2"
    },
    hK: {
      normal: "normal",
      dark: "dark",
      light: "light",
      fresh: "fresh",
      test: "blue",
      blue_night: "blue",
      mapv: "darkblue",
      insight: "grey"
    },
    key: "e38726e1590bc325faae7bb39767c31d",
    vc: "",
    Rd: [115.423412, 39.442759, 117.514625, 41.060816, 116.405285, 39.904989],
    Zd: "/amap/restapi",
    Fb: "http://webapi.amap.com",
    sK: "http://gaode.com",
    Iv: "http://m.amap.com",
    OD: "/amap/webrd0{1,2,3,4}/appmaptile?lang=[lang]&size=1&scale=1&style=8&x=[x]&y=[y]&z=[z]",
    WJ: "/amap/wprd0{1,2,3,4}/appmaptile?lang=zh_cn&size=1&style=7&x=[x]&y=[y]&z=[z]&scl=1&ltype=3",
    wU: "/amap/webst0{1,2,3,4}/appmaptile?style=6&x=[x]&y=[y]&z=[z]",
    SK: "/amap/webst0{1,2,3,4}/appmaptile?x=[x]&y=[y]&z=[z]&lang=zh_cn&size=1&scale=1&style=8",
    TK: "/amap/wprd0{1,2,3,4}/appmaptile?x=[x]&y=[y]&z=[z]&lang=zh_cn&size=1&scl=1&style=8&ltype=11",
    TE: "/amap/wprd0{1,2,3,4}/appmaptile?lang=[lang]&size=1&style=7&x=[x]&y=[y]&z=[z]",
    BL: "http://vector.amap.com",
    AL: "172.16.0.27:8090/amap/vdata",
    cAa: "ws",
    VI: "http://a.amap.com/jsapi/static/image/",
    Xn: 0
  };

  function nc(a) {
    g.da.Ru = a.Ru;
    g.l = a.l;
    g.Lva = a[7];
    a.l = null;
    g.r.Fb = a[2].split(",")[0];
    g.r.Hk = a.Hk;
    g.r.PJ = a.PJ;
    var b = g.r.vc = g.r.Fb.split(":")[0];
    "https" === b && (g.r.cAa = "wss", g.r.Zd = g.r.Zd, g.r.OD = g.r.OD.replace("http", "https"), g.r.WJ = g.r.WJ.replace("http", "https"), g.r.wU = g.r.wU.replace("http", "https"), g.r.SK = g.r.SK.replace("http", "https"), g.r.TK = g.r.TK.replace("http", "https"), g.r.TE = g.r.TE.replace("http", "https"), g.r.BL = g.r.BL.replace("http", "https"), g.r.VI = g.r.VI.replace("http",
      "https"));
    var c = window.location.href;
    0 !== c.indexOf("http") && window.parent && window.parent !== window && (c = window.parent.location.href);
    g.r.Zpa = c;
    c = encodeURIComponent(c);
    g.r.Up = c;
    g.r.Ji = g.r.Fb + "/theme/v1.3/markers/" + (g.l.Kc ? "b" : "n");
    var d = document.createElement("style");
    d.type = "text/css";
    g.r.xoa = "url(/amap/theme/v1.3/openhand.cur),default";
    var e = ".amap-container{cursor:" + g.r.xoa + ";}.amap-drag{cursor:url(/amap/theme/v1.3/closedhand.cur),default;}";
    d.styleSheet ? (b = function () {
      try {
        d.styleSheet.cssText =
          e
      } catch (a) {
      }
    }, d.styleSheet.disabled ? setTimeout(b, 10) : b()) : d.appendChild(document.createTextNode(e));
    (document.head || document.getElementsByTagName("head")[0]).appendChild(d);
    g.r.mode = Number(a[3]);
    g.r.Rd = a[1];
    g.r.key = a[0];
    g.r.nn = a[4];
    g.r.Nc = a[5];
    g.r.Lla = a[6];
    g.r.VQ = a[13];
    oc()
  }

  function oc() {
    try {
      if (window.localStorage) for (var a = window.localStorage.length; 0 <= a; a -= 1) {
        var b = window.localStorage.key(a);
        if (b && "_AMap_" === b.slice(0, 6)) {
          var c = window.localStorage.getItem(b), c = JSON.parse(c || {});
          "_AMap_anole" === b ? c.version !== g.l.mf && window.localStorage.removeItem(b) : "_AMap_data.tileKeys" === b ? c.vdataVer === g.l.mf && c.apiVer === g.r.Hk || window.localStorage.removeItem(b) : c.version !== g.r.Hk && window.localStorage.removeItem(b)
        }
      }
    } catch (d) {
    }
  }

  window.AMap && window.AMap.zL && window.AMap.zL.zM && window.AMap.zL.zM(nc);
  g.Nm = {Pu: Math.PI / 180, ewa: 180 / Math.PI, TQ: 6378137};
  (function () {
    function a(a) {
      return "undefined" === typeof a ? "" : a
    }

    g.ci = {
      ara: function (b) {
        b.name = a(b.name);
        var c = [b.y, b.x, b.name];
        if (g.l.ba) {
          var d = [g.r.Iv + "/callAPP?", "src=jsapi_q"];
          d.push("&ios=" + encodeURIComponent("viewMap?sourceApplication=jsapi_q&dev=0&poiname=" + b.name + "&lat=" + b.y + "&lon=" + b.x));
          d.push("&android=" + encodeURIComponent("androidamap?action=shorturl&q=" + c.join(",") + "&sourceApplication=jsapi_q"));
          d.push("&wp=" + encodeURIComponent("viewMap?sourceApplication=jsapi_q&dev=0&poiname=" + b.name + "&lat=" +
            b.y + "&lon=" + b.x));
          d.push("&mo=" + encodeURIComponent(g.r.Iv + "?q=" + c.join(",") + "&callapp=0&sourceApplication=jsapi_q"));
          return d.join("")
        }
        return g.r.sK + "?q=" + c.join(",") + "&src=jsapi_q"
      }, s4: function (b) {
        b.name = a(b.name);
        b.address = a(b.address);
        b.x = a(b.x);
        b.y = a(b.y);
        var c = [b.id, b.y, b.x, b.name, b.address];
        if (g.l.ba) {
          var d = [g.r.Iv + "/callAPP?", "src=jsapi_p"];
          d.push("&ios=" + encodeURIComponent("multiPointShow?sourceApplication=jsapi_p&dev=0&q=" + [b.y, b.x, b.name, b.address, b.id].join() + "&title=" + b.name));
          d.push("&android=" +
            encodeURIComponent("androidamap?action=shorturl&p=" + c.join(",") + "&sourceApplication=jsapi_p"));
          d.push("&wp=" + encodeURIComponent("multiPointShow?sourceApplication=jsapi_p&dev=0&q=" + [b.y, b.x, b.name, b.address, b.id].join() + "&title=" + b.name));
          return d.join("")
        }
        return g.r.sK + "?p=" + c.join(",") + "&src=jsapi_p"
      }, q4: function (b) {
        if (g.l.ba) {
          var c = [g.r.Iv + "/callAPP?", "src=jsapi_detail"];
          c.push("&ios=" + encodeURIComponent("viewPOIDetail?sourceApplication=jsapi_detail&poiid=" + b.id));
          b.name = a(b.name);
          b.x = a(b.x);
          b.y =
            a(b.y);
          c.push("&android=" + encodeURIComponent("androidamap?action=openFeature&featureName=PoiDetail&poiid=" + b.id + "&poiname=" + b.name + "&x=" + b.x + "&y=" + b.y + "&sourceApplication=jsapi_detail"));
          c.push("&wp=" + encodeURIComponent("viewPOIDetail?sourceApplication=jsapi_detail&poiid=" + b.id));
          c.push("&mo=" + encodeURIComponent(g.r.Iv + "/detail/index/poiid=" + b.id + "&sourceApplication=jsapi_detail"));
          return c.join("")
        }
        return g.r.sK + "/detail/" + b.id + "?src=jsapi_detail"
      }, NR: function (b) {
        b.sname = a(b.sname);
        "" === b.sname &&
        (b.sname = "\u8d77\u70b9");
        b.dname = a(b.dname);
        "" === b.dname && (b.dname = "\u7ec8\u70b9");
        b.mcount = a(b.mcount);
        b.my = a(b.my);
        b.mx = a(b.mx);
        b.mname = a(b.mname);
        var c = [b.sy, b.sx, b.sname, b.dy, b.dx, b.dname, b.m, b.t, b.mcount, b.my, b.mx, b.mname];
        if (g.l.ba) {
          var d = [g.r.Iv + "/callAPP?", "src=jsapi_r_" + b.t];
          d.push("&ios=" + encodeURIComponent("path?sourceApplication=jsapi_r_" + b.t + "&dev=0&slat=" + b.sy + "&slon=" + b.sx + "&sname=" + b.sname + "&dlat=" + b.dy + "&dlon=" + b.dx + "&dname=" + b.dname + "&m=" + b.m + "&t=" + b.t + "&vian=0&vialons=&vialats=&vianames="));
          var e = b.t;
          0 === b.t ? e = 2 : 2 === b.t && (e = 4);
          d.push("&android=" + encodeURIComponent("androidamap://route?sourceApplication=jsapi_r_" + b.t + "&slat=" + b.sy + "&slon=" + b.sx + "&sname=" + b.sname + "&dlat=" + b.dy + "&dlon=" + b.dx + "&dname=" + b.dname + "&dev=0&" + b.m + "&t=" + e));
          d.push("&wp=" + encodeURIComponent("path?sourceApplication=jsapi_r_" + b.t + "&dev=0&slat=" + b.sy + "&slon=" + b.sx + "&sname=" + b.sname + "&dlat=" + b.dy + "&dlon=" + b.dx + "&dname=" + b.dname + "&m=" + b.m + "&t=" + b.t + "&vian=0&vialons=&vialats=&vianames="));
          d.push("&mo=" + encodeURIComponent(g.r.Iv +
            "/?r=" + c.join(",") + "&callapp=0&sourceApplication=jsapi_r_" + b.t));
          return d.join("")
        }
        return g.r.sK + "?r=" + c.join(",") + "src=jsapi_r_" + b.t
      }, nt: function (a) {
        g.l.ba ? window.location.href = a : window.open(a)
      }
    }
  })();
  "function" !== typeof Object.keys && (Object.keys = function (a) {
    var b = [], c;
    for (c in a) a.hasOwnProperty(c) && b.push(c);
    return b
  });
  g.a = {
    CLASS_NAME: "AMap.Util", hL: [], Fa: 268435456, dp: [215440491, 106744817], fF: function () {
      var a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
      return function (b, c) {
        var d = [], e;
        c = c || a.length;
        if (b) for (e = 0; e < b; e++) d[e] = a[0 | Math.random() * c]; else {
          var f;
          d[8] = d[13] = d[18] = d[23] = "-";
          d[14] = "4";
          for (e = 0; 36 > e; e++) d[e] || (f = 0 | 16 * Math.random(), d[e] = a[19 === e ? f & 3 | 8 : f])
        }
        return d.join("")
      }
    }(), jD: {
      start: function (a) {
        a.startTime = new Date;
        a.lt = [];
        var b = (new Date).getTime();
        a.id = requestAnimationFrame(function d() {
          var e =
            (new Date).getTime();
          a.lt.push(e - b);
          b = e;
          a.id = requestAnimationFrame(d)
        })
      }, cancel: function (a) {
        a.id && cancelAnimationFrame(a.id)
      }, stop: function (a) {
        a.doa = new Date - a.startTime;
        this.cancel(a);
        a.jD = Math.round(1E3 / (a.doa / (a.lt.length + 1)))
      }
    }, D4: function (a, b, c) {
      var d = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : !1;
      if (a === b) return b;
      switch (3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "linear") {
        case "ease":
          c = g.Kw.HI(0.25, 0.1, 0.25, 1)(c);
          break;
        case "ease-in":
          c = g.Kw.HI(0.42, 0, 1, 1)(c);
          break;
        case "ease-out":
          c =
            g.Kw.HI(0, 0, 0.58, 1)(c);
          break;
        case "ease-in-out":
          c = g.Kw.HI(0.42, 0, 0.58, 1)(c)
      }
      var e = a + (b - a) * c;
      d && (e >>= 0);
      return e
    }, createObjectURL: function (a) {
      var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "text/javascript; charset=utf-8",
        c = null;
      try {
        c = (window.URL || window.webkitURL).createObjectURL(new Blob([a], {type: b}))
      } catch (d) {
        c = null
      }
      return c
    }, revokeObjectURL: function (a) {
      (window.URL || window.webkitURL).revokeObjectURL(a)
    }, HCa: function (a) {
      for (var b = {}, c = 0, d = a.length; c < d; c++) b[a[c]] = c;
      return b
    }, oD: function (a) {
      var b =
        {};
      if (g.a.lk(a, "object")) for (var c in a) a.hasOwnProperty(c) && (b[a[c]] = c);
      return b
    }, Af: function (a, b) {
      for (var c = 0, d = b.length; c < d; c += 1) a.push(b[c])
    }, create: "function" === typeof Object.create ? Object.create : function (a, b) {
      function c() {
      }

      c.prototype = a;
      var d = new c, e;
      for (e in b) b.hasOwnProperty(e) && (d[e] = b[e]);
      return d
    }, cb: function (a) {
      if ("object" === typeof a && null !== a) {
        if (a.T6 || this.lk(a, "Float32Array") || this.lk(a, "Uint16Array")) return a;
        var b = this.isArray(a) ? [] : {}, c;
        for (c in a) a.hasOwnProperty(c) && (b[c] = g.a.cb(a[c]));
        return b
      }
      return a
    }, H5: function (a) {
      return (a | 0) === a
    }, Bxa: "function" === typeof Object.setPrototypeOf ? Object.setPrototypeOf : function (a, b) {
      for (var c in b) a[c] = b[c]
    }, Sh: function (a) {
      return "function" === typeof a
    }, ema: function (a) {
      var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "webgl";
      if (!a) return a;
      for (var c = [], d = 0, e = a.length; d < e; d += 2) {
        var f = parseInt(a.substr(d, 2), 16);
        if ("webgl" === b || "rgba" === b && 0 === d) f = this.vb(f / 255, 3);
        c.push(f)
      }
      c.push(c.shift());
      return c
    }, Rs: function () {
    }, keys: "function" === typeof Object.keys ?
      Object.keys : function (a) {
        var b = [], c;
        for (c in a) a.hasOwnProperty(c) && b.push(c);
        return b
      }, map: function (a, b) {
      var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null, d = [];
      if (a && a.length) g.a.Tb(a, function () {
        for (var e = arguments.length, f = Array(e), h = 0; h < e; h++) f[h] = arguments[h];
        d[f[1]] = b.apply(c || a, f)
      }); else return a;
      return d
    }, forEach: function (a, b) {
      if (a && a.length) {
        var c = a.length;
        if (0 < c && (b(a[0], 0), 1 < c)) {
          b(a[1], 1);
          for (var d = 2; d < c; d++) b(a[d], d)
        }
      }
    }, Tb: function (a, b) {
      var c = 2 < arguments.length && void 0 !==
      arguments[2] ? arguments[2] : null;
      if (a && a.length) for (var d = 0, e = a.length; d < e && !1 !== b.call(c, a[d], d, a); d++) ;
    }, find: function (a, b) {
      for (var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null, d = 0, e = a.length; d < e; d++) if ("function" === typeof b) {
        if (b.call(c, a[d], d, a)) return a[d]
      } else if (a[d] === b) return a[d];
      return null
    }, HJ: function (a) {
      return "object" === typeof HTMLElement ? a instanceof HTMLElement : a && "object" === typeof a && 1 === a.nodeType && "string" === typeof a.nodeName
    }, xw: function (a, b) {
      var c = "ASDFGHJKLQWERTYUIO!sdfghjkleiu3~yr5-P&mq9`%zCN*b=8@^xpVM",
        d, e;
      "v5" < (b || "v5") ? (d = c.length, e = 512) : (d = 27, c = c.substr(0, 27), e = 333);
      var f, h, k, l, m;
      h = [];
      k = NaN;
      l = 0;
      for (m = a.length; l < m; l++) f = a[l], f = c.indexOf(f), isNaN(k) ? k = f * d : (h.push(k + f - e), k = NaN);
      return h
    }, kxa: function (a, b) {
      for (var c = 1, c = 512 < b.length ? Math.round(Math.pow(b.length, 0.5)) : b.length, d = Math.ceil(b.length / c), e = 0; e < d; e += 1) {
        var f = c * e, h = f + c;
        h > b.length && (h = b.length);
        for (; f < h; f += 1) a(b[f])
      }
    }, fDa: function (a) {
      if (/^rgba\(/.test(a)) return this.Xv(a);
      var b = a = this.oI(a);
      "#" === a[0] && (a = a.substring(1), 3 === a.length && (a =
        a.replace(/./g, function (a) {
          return a + a
        })), b = this.Rr(8 === a.length ? a : "ff" + a));
      return this.Xv(b)
    }, oI: function () {
      var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "", a = a.toLowerCase(), b = {
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategray: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        gold: "#ffd700",
        goldenrod: "#daa520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        lavender: "#e6e6fa",
        lavenderblush: "#fff0f5",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrodyellow: "#fafad2",
        lightgrey: "#d3d3d3",
        lightgreen: "#90ee90",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370d8",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#d87093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        steelblue: "#4682b4",
        tan: "#d2b48c",
        teal: "#008080",
        thistle: "#d8bfd8",
        tomato: "#ff6347",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32"
      };
      return "string" === typeof a ? b[a.toLowerCase()] ?
        b[a.toLowerCase()] : a : a
    }, II: function (a, b, c) {
      var d, e;
      d = Math.floor(c / 2);
      e = c - d;
      d = (1 << d) - 1 << e;
      e = (1 << e) - 1;
      return [c, a & d | b & e, b & d | a & e]
    }, JI: function (a) {
      return a ? encodeURIComponent(a) : ""
    }, Vc: function (a, b, c, d) {
      c = a[b].i[c];
      if ("undefined" === typeof c) return null;
      a = a[b].s;
      if ("number" === typeof c) return a[c];
      for (; "undefined" === typeof c[d.toString()] && !(d -= 1, 3 > d);) ;
      d = c[d.toString()];
      return "number" === typeof d ? a[d] : null
    }, Xv: function (a) {
      a = a.split(",");
      a[0] = parseFloat(a[0].split("rgba(")[1]) / 255;
      a[1] = parseFloat(a[1]) / 255;
      a[2] = parseFloat(a[2]) / 255;
      a[3] = parseFloat(a[3]);
      return a
    }, Ywa: function (a) {
      a = a.split(",");
      a[0] = parseFloat(a[0].split("rgb(")[1]) / 255;
      a[1] = parseFloat(a[1]) / 255;
      a[2] = parseFloat(a[2]) / 255;
      return a
    }, rU: function (a) {
      return "rgba(" + 255 * a[0] + "," + 255 * a[1] + "," + 255 * a[2] + "," + a[3] + ")"
    }, Lna: function (a) {
      return this.rU(this.$l(a))
    }, $l: function (a) {
      if (a instanceof Array) return 3 == a.length && a.push(1), a;
      a = this.oI(a);
      if (0 == a.indexOf("#")) {
        if (4 === a.length) return a = a.substr(1).replace(/./g, function (a) {
          return a + a
        }), this.dt(a);
        if (7 == a.length) return this.dt(a.substr(1));
        if (9 == a.length) return a = a.substr(1), this.bl(a.substr(6) + a.substr(0, 6))
      } else {
        if (0 == a.indexOf("rgb(")) return a = this.Ywa(a), a.push(1), a;
        if (0 == a.indexOf("rgba(")) return this.Xv(a)
      }
    }, A8: function (a) {
      return g.a.Rr("ff" + a)
    }, Rr: function (a) {
      for (var b = [], c = 0, d = a.length; c < d; c += 2) b.push(parseInt(a.substr(c, 2), 16));
      b.push((b.shift() / 255).toFixed(2));
      return "rgba(" + b.join(",") + ")"
    }, dt: function (a) {
      return g.a.bl("ff" + a)
    }, bl: function (a) {
      for (var b = [], c = 0, d = a.length; c < d; c += 2) b.push(parseInt(a.substr(c,
        2), 16) / 255);
      b.push(b.shift());
      return b
    }, xh: function (a) {
      for (var b in a) if (a.hasOwnProperty(b)) return !1;
      return !0
    }, Ho: function (a, b) {
      0 <= b && a.splice(b, 1);
      return a
    }, Yxa: function (a, b) {
      return a.startsWith ? a.startsWith(b) : a.substr(0, b.length) === b
    }, zy: function (a, b) {
      var c = g.a.indexOf(a, b);
      return g.a.Ho(a, c)
    }, filter: function (a, b, c) {
      var d = [];
      g.a.Tb(a, function (a, f) {
        b.call(c, a, f) && d.push(a)
      });
      return d
    }, indexOf: function (a, b) {
      if (!a || !a.length) return -1;
      if (a.indexOf) return a.indexOf(b);
      for (var c = 0; c < a.length; c += 1) if (a[c] ===
        b) return c;
      return -1
    }, dD: function (a, b) {
      return a.endsWith ? a.endsWith(b) : a.length < b.length ? !1 : a.substr(a.length - b.length) == b ? !0 : !1
    }, bind: function () {
      var a = !1;
      Function.prototype.bind && (a = !0);
      return function (b, c) {
        var d = 2 < arguments.length ? Array.prototype.slice.call(arguments, 2) : null;
        return a ? d ? (d.unshift(c), b.bind.apply(b, d)) : b.bind(c) : function () {
          return b.apply(c, d || arguments)
        }
      }
    }(), tb: function (a, b) {
      b = b || {};
      a.w = g.extend({}, a.w, b);
      return a.w
    }, Cna: function (a, b, c) {
      return "function" == typeof b ? this.PP(a, !0, this.yma(b,
        c, 1)) : this.PP(a, !0)
    }, PP: function (a, b, c, d, e, f, h) {
      var k;
      c && (k = e ? c(a, d, e) : c(a));
      if (void 0 !== k) return k;
      if (!this.M5(a)) return a;
      if (d = this.isArray(a)) {
        if (k = this.jsa(a), !b) return this.gma(a, k)
      } else {
        var l = Object.prototype.toString.call(a), m = "[object Function]" == l;
        if ("[object Object]" == l || "[object Arguments]" == l || m && !e) {
          if (k = this.ksa(m ? {} : a), !b) return this.pma(k, a)
        } else return e ? a : {}
      }
      f || (f = []);
      h || (h = []);
      for (e = f.length; e--;) if (f[e] == a) return h[e];
      f.push(a);
      h.push(k);
      (d ? this.hma : this.uma)(a, function (d, e) {
        k[e] =
          g.a.PP(d, b, c, e, a, f, h)
      });
      return k
    }, pma: function (a, b) {
      return null == b ? a : this.sma(b, Object.keys(b), a)
    }, M5: function (a) {
      var b = typeof a;
      return !!a && ("object" == b || "function" == b)
    }, jFa: function (a) {
      return !!a && "object" == typeof a
    }, hFa: function (a) {
      return "number" == typeof a && -1 < a && 0 == a % 1 && 9007199254740991 >= a
    }, jsa: function (a) {
      var b = a.length, c = new a.constructor(b);
      b && "string" == typeof a[0] && Object.hasOwnProperty.call(a, "index") && (c.index = a.index, c.input = a.input);
      return c
    }, gma: function (a, b) {
      var c = -1, d = a.length;
      for (b ||
           (b = Array(d)); ++c < d;) b[c] = a[c];
      return b
    }, ksa: function (a) {
      a = a.constructor;
      "function" == typeof a && a instanceof a || (a = Object);
      return new a
    }, yma: function (a, b, c) {
      if ("function" != typeof a) return this.rv;
      if (void 0 === b) return a;
      switch (c) {
        case 1:
          return function (c) {
            return a.call(b, c)
          };
        case 3:
          return function (c, e, f) {
            return a.call(b, c, e, f)
          };
        case 4:
          return function (c, e, f, h) {
            return a.call(b, c, e, f, h)
          };
        case 5:
          return function (c, e, f, h, k) {
            return a.call(b, c, e, f, h, k)
          }
      }
      return function () {
        return a.apply(b, arguments)
      }
    }, hma: function (a,
                      b) {
      for (var c = -1, d = a.length; ++c < d && !1 !== b(a[c], c, a);) ;
      return a
    }, rv: function (a) {
      return a
    }, eoa: function (a) {
      return function (b, c, d) {
        var e = g.a.yya(b);
        d = d(b);
        for (var f = d.length, h = a ? f : -1; a ? h-- : ++h < f;) {
          var k = d[h];
          if (!1 === c(e[k], k, e)) break
        }
        return b
      }
    }, uma: function (a, b) {
      return g.a.eoa()(a, b, Object.keys)
    }, yya: function (a) {
      return g.a.M5(a) ? a : Object(a)
    }, sma: function (a, b, c) {
      c || (c = {});
      for (var d = -1, e = b.length; ++d < e;) {
        var f = b[d];
        c[f] = a[f]
      }
      return c
    }, v3: function () {
      return !1
    }, join: function (a, b) {
      if (a.join) return a.join(b);
      var c = [], d;
      for (d in a) a.hasOwnProperty(d) && c.push(d + "=" + (a[d] || ""));
      return c.join(b)
    }, d4: function (a, b) {
      return (a || "") + Math.round(Math.random() * Math.pow(10, b || 6))
    }, xb: function () {
      var a = 0;
      return function (b) {
        b._amap_id || (a += 1, b._amap_id = a);
        return b._amap_id
      }
    }(), spa: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=", hg: Date.now ? function () {
      return Date.now()
    } : function () {
      return (new Date).getTime()
    }, MD: function (a, b, c, d) {
      var e;
      if (d) {
        var f = 0, h, k = this.hg;
        e = function () {
          h = k();
          if (h - f < b) return !1;
          f = h;
          a.apply(c,
            arguments)
        }
      } else {
        var l, m, n;
        n = function () {
          l = !1;
          m && (e.apply(c, m), m = !1)
        };
        e = function () {
          l ? m = arguments : (l = !0, a.apply(c, arguments), setTimeout(n, b))
        }
      }
      return e
    }, vb: function (a, b) {
      if (a === a << 0) return a;
      var c = Math.pow(10, b || 0);
      return Math.round(parseFloat(a) * c) / c
    }, isArray: Array.isArray ? Array.isArray : function (a) {
      return this.lk(a, "array")
    }, lk: function (a, b) {
      return Object.prototype.toString.call(a).split(" ")[1].slice(0, -1).toLowerCase() === b.toLowerCase()
    }, ka: "function" === typeof Array.prototype.ka ? function (a, b) {
        return a.ka(b)
      } :
      function (a, b) {
        return -1 !== this.indexOf(a, b)
      }, w9: function (a) {
      var b = 0;
      if (0 === a.length) return b;
      for (var c, d = 0, e = a.length; d < e; d += 1) c = a.charCodeAt(d), b = (b << 5) - b + c, b &= b;
      return b
    }, sDa: function (a, b) {
      b = b ? Math.ceil(parseInt(b.substr(6)) / 24) : 1;
      for (var c = "", d = 0, e = a.length; d < e; d++) c += String.fromCharCode((a.charCodeAt(d) - 256 - b + 65535) % 65535);
      return c
    }, Aoa: function (a, b) {
      var c = (a + "").slice(-2), d = (b + "").slice(-2);
      a = a.slice(0, -2);
      b = b.slice(0, -2);
      var e = parseInt((d + c).slice(1)), f = Math.ceil(e / 250) % 2 ? 1 : -1, d = parseInt("1" +
        d) / 3E3;
      a -= parseInt("1" + c) / 3E3 * f;
      b -= d * (1 < e / 500 ? 1 : -1);
      return new g.U(parseFloat(a).toFixed(5), parseFloat(b).toFixed(5))
    }, Y6: function (a) {
      return "undefined" !== typeof JSON && JSON.stringify ? g.a.w9(JSON.stringify(a)) : null
    }, yHa: function (a, b) {
      if (b || !a.hasOwnProperty("_amap_hash")) {
        var c = g.a.Y6(a);
        c && (a._amap_hash = c)
      }
      return a._amap_hash
    }, iepngFix: function (a) {
      function b() {
        for (var a; c.length;) a = c.shift(), window.DD_belatedPNG.fixPng(a);
        d.HS = !0
      }

      this.L7 || (this.L7 = [], this.HS = !1);
      var c = this.L7, d = this;
      if ("img" === a.tagName.toLowerCase()) c.push(a);
      else {
        a = a.getElementsByTagName("*");
        for (var e = 0; e < a.length; e += 1) c.push(a[e])
      }
      window.DD_belatedPNG && this.HS ? setTimeout(function () {
        b()
      }, 100) : this.HS || g.sb.load("AMap.FixPng", b)
    }, Ja: function (a) {
      if (g.a.isArray(a)) if (g.a.isArray(a[0])) for (var b = 0; b < a.length; b += 1) a[b] = g.a.Ja(a[b]); else if (b = typeof a[0], "string" === b || "number" === b) return new g.U(a[0], a[1]);
      return a
    }, eAa: function (a) {
      for (var b = [], c = 0, d = a.length; c < d; c += 1) b[c] = [a[c].x, a[c].y];
      return b
    }, Mq: function (a) {
      return g.a.isArray(a) ? new g.xd(a[0], a[1]) :
        a
    }, IP: function (a) {
      var b = a.type, c = a.TU, d = a.error;
      a = new g.jb.XMLHttpRequest(a.url, {Ed: void 0 === b ? "GET" : b, L2: a.data, oU: "text/plain"});
      a.h("complete", function (a) {
        a = JSON.parse(a.data);
        c && c(a)
      }, this);
      a.h("error", function () {
        var a = {errmsg: "REQUEST_FAILED"};
        d && d(a)
      }, this)
    }
  };
  (function () {
    function a(a) {
      window.clearTimeout(a)
    }

    function b(a) {
      var b, c, d = ["webkit", "moz", "o", "ms"];
      for (b = 0; b < d.length && !c; b += 1) c = window[d[b] + a];
      return c
    }

    function c(a) {
      var b = +new Date, c = Math.max(0, (g.l.Yl ? 50 : 20) - (b - d));
      d = b + c;
      return window.setTimeout(a, c)
    }

    var d = 0, e = window.requestAnimationFrame || b("RequestAnimationFrame") || c,
      f = window.cancelAnimationFrame || b("CancelAnimationFrame") || b("CancelRequestAnimationFrame") || a;
    g.a.Yc = function (a, b, c, d) {
      if (c) b ? g.a.bind(a, b).call(b, d) : a(); else return e(function () {
        b ?
          g.a.bind(a, b).call(b, d) : a()
      })
    };
    g.a.ui = function (a) {
      a && f.call(window, a)
    }
  })();
  g.a.pU = window.requestIdleCallback ? function (a, b) {
    return window.requestIdleCallback(a, b)
  } : function (a) {
    var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, c = g.a.hg();
    return setTimeout(function () {
      a({
        didTimeout: !1, timeRemaining: function () {
          return Math.max(0, 70 - (g.a.hg() - c))
        }
      })
    }, b.timeout || 0)
  };
  g.a.eQ = window.cancelIdleCallback ? function (a) {
    return window.cancelIdleCallback(a)
  } : function (a) {
    clearTimeout(a)
  };
  (function (a) {
    var b = 1, c = {};
    a.a.zxa = function (a, b) {
      if (c[a]) {
        var f = c[a];
        f.FE = 1;
        f.result = b;
        if (f.qn) {
          for (var h = f.qn, k = 0, l = h.length; k < l; k++) h[k].call(null, b);
          f.qn = null
        }
      }
    };
    a.a.yna = function (a) {
      c[a] = null
    };
    a.a.Nza = function (a, b) {
      if (c[a]) {
        var f = c[a];
        0 < f.FE ? b(null, f.result) : (f.qn || (f.qn = []), f.qn.push(b))
      } else b(null, a)
    };
    a.a.HR = function (d, e) {
      var f = navigator.geolocation;
      if (!a.l.ED || "https:" === document.location.protocol) return d(null, f);
      var h;
      e && e.Oza && (h = "f" + b++, c[h] = {FE: 0});
      var k = null, l = !1;
      e && e.timeout && (k = setTimeout(function () {
        k =
          void 0;
        d({code: 3, info: "TIME_OUT", message: "Get geolocation time out."});
        l = !0
      }, e.timeout));
      f.getCurrentPosition(function () {
        l || (clearTimeout(k), k = void 0, d(null, f))
      }, function (b) {
        l || (clearTimeout(k), k = void 0, 2 === b.code && 0 < b.message.indexOf("permission") ? a.sb.load("AMap.GeoRemoteLoc", function () {
          d(null, a.paa, h)
        }) : d(null, f))
      }, {timeout: 1E3});
      return h
    }
  })(g);
  (function (a) {
    var b = a.da.extend({
      ka: [a.va], A: function () {
      }
    });
    a.Oj = new b
  })(g);
  (function (a) {
    var b = a.da.extend({
      ka: [a.va], A: function () {
        this.kga()
      }, kga: function () {
        a.Oj && a.Oj.h("vecTileParsed.buildings", this.Rfa, this)
      }, F5: function (a) {
        return a.map.BZ
      }, Nqa: function (a) {
        return this.F5(a) ? a.map.UN : null
      }, wxa: function (a, b) {
        if (b) {
          var e = b.map;
          e && (e.UN ? e.UN.toString() : "") !== (a ? a.toString() : "") && (e.UN = a || [], e.set("display", 0))
        }
      }, V8: function (a, b) {
        if (b) {
          var e = b.map;
          e && e.BZ !== a && (e.BZ = a, e.set("display", 0))
        }
      }, NBa: function () {
      }, xZ: function (a, b) {
        if (a) for (var e = 0, f = a.length; e < f; e++) a[e] && 0 > b.indexOf(a[e]) &&
        b.push(a[e])
      }, z3: function (b) {
        if (!b) return null;
        b = b.map.la;
        for (var d = 0, e = b.length; d < e; d++) if (a.o.hi && b[d] instanceof a.o.hi && b[d].ga && b[d].ga.length && (-1 !== b[d].ga.indexOf("building") || -1 !== b[d].ga.indexOf("poilabel")) && b[d].La) {
          var f = b[d].S.get("tiles", null, !0);
          if (f && f.length) return b[d]
        }
        return null
      }, kqa: function (a) {
        if (a = this.z3(a)) {
          if (a = a.S.get("tiles", null, !0)) a = a[0]; else return null;
          if (!a || !a.length) return null;
          for (var b = [], e = 0, f = a.length; e < f; e++) {
            var h = a[e];
            h.oe && h.oe.vf && this.xZ(h.oe.vf, b)
          }
          return b
        }
      },
      Rfa: function (a) {
        if (a.rp && a.rp.oe) {
          var b = a.rp.oe.vf;
          if (b) {
            var e = [];
            this.xZ(b, e);
            this.q("vecTileParsed.builds.found", {i2: e, rp: a.rp})
          }
        }
      }
    });
    a.Pj = new b
  })(g);
  (function (a) {
    function b() {
      return {
        checkup: function () {
          var a = Array.prototype.slice.call(arguments, 0);
          a.pop()(null, a)
        }
      }
    }

    function c(a) {
      return {
        injectCode: function (b, c) {
          var d = null, e = null;
          try {
            d = (new Function("self", b))(a)
          } catch (f) {
            console.error("error", e), e = f.toString()
          }
          c(e, d)
        }
      }
    }

    function d(a) {
      function b(c, d) {
        function e(a, b, c) {
          a = {aA: Date.now(), Pz: h, error: a, result: b, Iq: !1, hl: !1};
          if (c) for (var f in c) c.hasOwnProperty(f) && (a[f] = c[f]);
          d(a)
        }

        var f = c.jS, h = c.Pz, l = c.qQ, m = c.CC, n = c.fma || [], p = a._wkHandlers[f];
        p ? p[l] ? m ?
          p[l].apply(p, n.concat(e)) : e(null, p[l].apply(p, n)) : e("Unknown cmd: " + l) : e("Can not find handler for: " + f)
      }

      var c = [], d = null, e = null;
      for (d in this._wkHandlers) -1 !== d.indexOf("_def_") && (e = this._wkHandlers.TFa = d);
      "function" === typeof this._wkHandlers[e].A && this._wkHandlers[e].A.call(this._wkHandlers[e]);
      a.yu = function (a) {
        c.push.apply(c, a)
      };
      a.addEventListener("message", function (d) {
        function e(b) {
          if (t) {
            t.push(b);
            var d = !!b.Iq;
            d || n++;
            b = n >= h || b.hl;
            if (d || b) {
              d = 1 < t.length ? {Swa: t} : t[0];
              d.aA = Date.now();
              d.gHa = p;
              if (c.length) {
                try {
                  a.postMessage(d,
                    c)
                } catch (f) {
                  a.postMessage(d), console.error(f)
                }
                c.length = 0
              } else a.postMessage(d);
              t.length = 0;
              b && (e = t = null)
            }
          } else console.error("Seemed callback already sent!!", b, b.result.mc)
        }

        var f = d.data;
        d = f.Pwa || [f];
        for (var h = d.length, n = 0, p = Date.now() - f.aA, t = [], f = 0; f < h; f++) b(d[f], e)
      }, !1)
    }

    function e(d, h) {
      this.w = a.extend({batchSend: !0, lazy: !1, libPolyfills: null}, h);
      this.Qp = [];
      this.XA = this.w.clientId || "w" + f++;
      this.w.onReady && this.nT(this.w.onReady);
      this.nG = this.Tea();
      if ("function" === typeof d) {
        var m = {};
        m[this.nG] = d;
        d = m
      }
      d[e.VR] =
        c;
      d[this.FY()] = b;
      this.EG = d;
      this.PB(null);
      this.w.lazy || this.ky();
      a.Dra || !1 === this.w.hostWorker || (a.Dra = this);
      this.no && this.no.A && this.no.A.call(this.no)
    }

    var f = 1, h = 1;
    a.extend(e, {
      VR: "_g_", Kxa: function (a) {
        if (!a.aca) {
          var b = [];
          a.addEventListener("message", function (a) {
            a = a.data;
            a = a.Swa || [a];
            for (var c = 0, d = a.length; c < d; c++) {
              var e = a[c], f;
              a:{
                f = e.Pz;
                for (var h = !e.hl, k = 0, v = b.length; k < v; k++) {
                  var w = b[k];
                  if (f === w.Pz) {
                    h || b.splice(k, 1);
                    f = w;
                    break a
                  }
                }
                f = void 0
              }
              f && f.CC(e.error, e.result, !0)
            }
          }, !1);
          a.Pba = b;
          a.aca = !0
        }
      }
    });
    a.extend(e.prototype,
      {
        Tea: function () {
          return "_def_" + this.XA
        }, FY: function () {
          return "_cln_" + this.XA
        }, hka: function () {
          var a = Array.prototype.slice.call(arguments, 0);
          this.v0 = a;
          if (this.Qx) {
            for (var b = 0, c = this.Qx.length; b < c; b++) this.Qx[b].apply(null, a);
            this.Qx.length = 0
          }
        }, yu: function (a) {
          this.Zja && this.Qp.push.apply(this.Qp, a)
        }, nT: function (a) {
          this.v0 ? a.apply(null, this.v0) : (this.Qx || (this.Qx = []), this.Qx.push(a))
        }, ky: function (b) {
          var c = this;
          if (!c.EX) {
            c.EX = !0;
            var d = function (d, e) {
              d && a.l.JS && console.warn(d);
              c.hka.call(c, d, e);
              b && b(d, e)
            };
            a.l.JS ? this.Vja(function (a, b) {
              b ? this.rga(b, function (a, c) {
                a ? d(a) : (this.PB(c), this.EP = c, this.Qp.length = 0, this.no = null, d(null, {wma: b, $za: c}))
              }) : d("Worker start failed!")
            }) : d("Worker not supported!")
          }
        }, yf: function (b, c) {
          var d = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : a.a.Rs, f = this;
          b = b || f.nG;
          var h = {};
          if (a.a.lk(c, "object")) {
            var q = "return {", r;
            for (r in c) if (c.hasOwnProperty(r)) var s = c[r],
              q = "function" === typeof s ? q + ("\n\t" + r + ": " + s.toString() + ",") : "object" === typeof s ? q + ("\n\t" + r + ": " + JSON.stringify(s) +
                ",") : q + ("\n\t" + r + ': "' + s + '",');
            c = new Function(q + "\n}")
          }
          f.jX(b, c, h);
          f.PB(null, h);
          f.nT(function (a) {
            a ? d(a) : f.EP ? (a = f.MY(c, f.GN(f.XA, b), !0), f.EP.sendMessage(e.VR + ":injectCode", a, function (a, b) {
              a || f.PB(f.EP, h);
              d(a, b)
            })) : d("Worker msger missing!!")
          })
        }, GN: function (a, b) {
          if (!a || !b) throw Error("clientId or ns missing!!");
          return a + "_" + b
        }, qfa: function (a, b, c) {
          function d() {
            var b = Array.prototype.slice.call(arguments, 0);
            c.sendMessage.apply(c, [a].concat(b))
          }

          var e = this;
          if (!c) return function () {
            var a = b.apply(e.no, arguments);
            e.EX || "untilCall" === e.w.lazy && e.ky();
            return a
          };
          d._proxy2Worker = !0;
          return d
        }, Sca: function (a) {
          var b = {}, c;
          for (c in a) a.hasOwnProperty(c) && this.jX(c, a[c], b);
          return b
        }, jX: function (a, b, c) {
          b = b.call(null, !1);
          for (var d in b) b.hasOwnProperty(d) && (c[a + ":" + d] = b[d], a === this.nG && (c[d] = b[d]))
        }, PB: function (a, b) {
          if (!b) this.no || (this.no = this.Sca(this.EG)), b = this.no; else if (this.no) for (var c in b) b.hasOwnProperty(c) && (this.no[c] = b[c]);
          for (c in b) if (b.hasOwnProperty(c)) {
            var d = b[c];
            "function" === typeof d && (this[c] = this.qfa(c,
              d, a))
          }
          this.Zja = !!a
        }, MY: function (a, b) {
          var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : !1, d = a.toString(), e,
            d = d.replace(/^function([^\(]*)\(/, function () {
              e = "_prep_h" + h++;
              return "function " + e + "("
            });
          return e ? "\n\t\t\t\t" + d + "\n\t\t\t\tif (self._wkHandlers['" + b + "'] && " + !c + ") {\n\t\t\t\t\tthrow new Error('" + b + " already exists!')\n\t\t\t\t} else {\n\t\t\t\t\tif (" + c + " && self._wkHandlers['" + b + "']) {\n\t\t\t\t\t\tvar handlerFunObj = " + e + ".call(null, self) || {}\n\n\t\t\t\t\t\tif (typeof Object.assign === 'function') {\n\t\t\t\t\t\t\tObject.assign(self._wkHandlers['" +
            b + "'], handlerFunObj)\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tfor (var key in handlerFunObj) {\n\t\t\t\t\t\t\t\tif (handlerFunObj.hasOwnProperty(key)) {\n\t\t\t\t\t\t\t\t\tself._wkHandlers['" + b + "'][key] = handlerFunObj[key]\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t} else {\n\t\t\t\t\t\tself._wkHandlers['" + b + "'] = " + e + ".call(null, self) || {}\t\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t" + e + " = null;\n\t\t\t" : (console.error("No function match!!"), !1)
        }, Vja: function (a) {
          var b = this.XA, c = [], d;
          for (d in this.EG) if (this.EG.hasOwnProperty(d)) {
            var f = this.MY(this.EG[d], this.GN(b, d));
            f && c.push(f)
          }
          b = this.w.libPolyfills || [];
          d = 0;
          for (f = b.length; d < f; d++) b[d] = "(" + b[d].toString() + ")(self);";
          var h = b.join(";\n") + ";\n" + c.join(";\n"), c = this.w.hostWorker, r = this;
          c && c !== r ? c.nT(function (b, c) {
            b ? a.call(r, b) : c.$za.sendMessage(e.VR + ":injectCode", h, function (b) {
              b ? a.call(r, b) : a.call(r, null, c.wma)
            })
          }) : a.call(r, null, r.lla(h))
        }, lla: function (b) {
          b = ["self._wkHandlers={};", b, "(" + d.toString() + ")(self)"].join("");
          var c;
          try {
            var e =
              a.a.createObjectURL(b);
            c = new Worker(e);
            setTimeout(function () {
              a.a.revokeObjectURL(e);
              e = null
            }, 5E3)
          } catch (f) {
            return
          }
          return c
        }, Lda: function (b) {
          var c = 1, d = b.Pba, e = this, f = !!e.w.batchSend;
          return function (h) {
            var r = Array.prototype.slice.call(arguments, 1),
              s = "function" === typeof r[r.length - 1] ? r.pop() : null, u = e.XA, v = h.split(":"), w = e.nG;
            1 < v.length && (h = v[1], w = v[0]);
            r = {aA: a.a.hg(), jS: e.GN(u, w), CC: !!s, Pz: u + "_" + c++, qQ: h, fma: r};
            s && d.push({qQ: r.qQ, jS: r.jS, aA: r.aA, Pz: r.Pz, CC: s});
            f ? e.uca(b, r) : e.Ox(b, r)
          }
        }, Ox: function (a, b) {
          if (this.Qp.length) {
            try {
              a.postMessage(b,
                this.Qp)
            } catch (c) {
              a.postMessage(b), console.error(c)
            }
            this.Qp.length = 0
          } else a.postMessage(b)
        }, uca: function (b, c) {
          b.AO || (b.AO = []);
          b.AO.push(c);
          if (!b.m0) {
            var d = this;
            b.m0 = setTimeout(function () {
              b.m0 = null;
              var c = b.AO;
              c.length && (d.Ox(b, 1 === c.length ? c[0] : {aA: a.a.hg(), Pwa: c}), c.length = 0)
            }, 0)
          }
        }, cla: function (a) {
          var b = this;
          a.addEventListener("error", function (a) {
            console.error(a);
            b.PB(null)
          }, !1);
          e.Kxa(a)
        }, rga: function (a, b) {
          var c = this;
          c.cla(a);
          var d = this.Lda(a);
          if (e.qda) b.call(c, null, {sendMessage: d}); else {
            e.qda = !0;
            var f = [c.FY() + ":checkup", Math.random().toFixed(5) + "", Math.round(1E3 * Math.random()), !1, function (a, e) {
              var h = !0;
              if (a || !e || e.length !== f.length - 2) h = !1; else for (var k = 0, v = e.length; k < v; k++) if (e[k] !== f[k + 1]) {
                h = !1;
                break
              }
              h ? b.call(c, null, {sendMessage: d}) : (console.error(a), b.call(c, "Self checkup failed!!"))
            }];
            d.apply(c, f)
          }
        }
      });
    a.JA = e
  })(g);
  (function () {
    if (!g.Be) {
      g.Be = {nf: {}, az: {}};
      var a = g.Be, b = g.Be.nf, c = g.a, d = g.r;
      b.start = function (b) {
        a.az[b.id] = {
          K: b.K, time: {s5: c.hg()}, Vma: function () {
            return c.hg() - this.time.s5
          }
        }
      };
      b.end = function (b) {
        var d = a.az[b.id], e = d.time, d = c.bind(d.Vma, d), l = b.index, m = b.key;
        "function" !== typeof b.Nc && (b.Nc = function () {
        });
        if (void 0 === e[m]) void 0 === l ? e[m] = d() : (e[m] = [], e[m][l] = d()); else if (void 0 !== l && void 0 === e[m][l]) e[m][l] = d(); else return b.Nc(Error("Duplicate Invoke"));
        b.Nc(null)
      };
      b.push = function (b) {
        var c = a.az[b.id].time,
          d = b.key, e = b.If;
        "function" !== typeof b.Nc && (b.Nc = function () {
        });
        if (void 0 === c[d]) c[d] = e; else return b.Nc(Error("Duplicate Invoke"));
        b.Nc(null)
      };
      b.send = function (b) {
        var c ="/amap/webapi/count?", k = g.extend(e({K: a.az[b.id].K}), b.params || {}), l = g.a;
        b.params && b.params.rs && !b.params.type && (b = a.az[b.id].time, delete b.s5, k = g.extend(k, b));
        b = [];
        for (var m in k) l.isArray(k[m]) ? b.push([m, k[m].join("-")].join("=")) : b.push([m, k[m]].join("="));
        b.push("jl=" + (d.PJ ? 1 : 0));
        if (l.lk(window.performance, "performance") &&
          l.lk(window.performance.getEntriesByType, "function")) {
          var n = 0, p = ["webapi.amap.com", "jsapi-test.amap.test", "localhost"], q = ["/maps", "/css"];
          l.Tb(window.performance.getEntriesByType("resource"), function (a) {
            var b = void 0, c = void 0;
            a.name.match(/:\/\/([^:?#/]+)/) && (b = RegExp.$1);
            a.name.match(/[^\/](\/[^/?#:]+)/) && (c = RegExp.$1);
            b && c && l.ka(p, b) && l.ka(q, c) && (n += parseInt(a.responseEnd - a.startTime))
          });
          0 !== n && b.push("sd=" + n)
        }
        new g.jb.yb(c + b.join("&"))
      };
      var e = function (a) {
        var b = g.l;
        a = g.g.Q3(a.K);
        return {
          type: "q",
          resolution: a.width + "*" + a.height,
          k: d.key,
          u: d.Up,
          iw: b.Sf ? 1 : 0,
          cw: b.l2 ? 1 : 0,
          gc: b.WR,
          m: b.ba ? 1 : 0,
          cv: b.Xp ? 1 : 0,
          pf: b.Ez,
          dpr: window.devicePixelRatio,
          screenwidth: screen.width,
          scale: b.DL || 0,
          detect: b.ja ? 1 : 0,
          v: d.nn
        }
      }
    }
  })();
  (function () {
    if (!g.ML) {
      var a = g.a.oD({r: "Conf", extend: "extend", l: "Browser", xw: "uncodeCoords"});
      g.ML = function () {
        var b = new g.JA(function () {
          return {
            A: function () {
              this.px = {rk: 0, Rv: 0};
              this.Wk = {};
              this.so = [];
              this.Pp = {};
              this.Yj = {};
              this.Rt = 0;
              this.$Z = 500
            }, Ah: function (a, b) {
              var e = a.Md, f = a.Ke, h = "building" === a.ga[0];
              (f && e !== this.px.Rv && this.px.Rv || !f && !h && e !== this.px.rk && this.px.rk) && this.Jla(!!f);
              f ? this.px.Rv = e : h || (this.px.rk = e);
              this.mta(a, b)
            }, Jla: function (a) {
              if (a) this.eX(); else if (!a && Object.keys(this.Wk).length) for (var b in this.Wk) this.Wk.hasOwnProperty(b) &&
              (a = this.Wk[b], a.Mt || a.abort())
            }, Hya: function () {
              this.Rt > this.$Z && this.bU(Object.keys(this.Yj).slice(0, Math.floor(this.$Z / 2)))
            }, bU: function (a) {
              for (var b = 0, e = a.length; b < e; b++) delete this.Yj[a[b]];
              this.Rt -= a.length
            }, BQ: function (a) {
              var b = a.ga;
              a = a.Ke;
              var e = new XMLHttpRequest;
              e.Oq = "";
              e.xE = [(new Date).getTime() + "_" + Math.random(), a ? 1 : 0, b.join("|")].join("-");
              return e
            }, X4: function (a, b, e) {
              var f = this, h = a.Hb, k = a.Ke, l = [], m = h.filter(function (a) {
                var b = f.Yj[a.key];
                if (b) {
                  if (b.SZ) return !0;
                  l.push(a.key)
                }
                return !1
              }), n =
                !1;
              if (m.length && ((n = m.length === h.length) || "function" !== typeof b || b(a, m), !k)) {
                var p = [];
                m.forEach(function (a) {
                  a = a.key;
                  p.push.apply(p, f.Yj[a]);
                  delete f.Yj[a]
                });
                this.Rt -= m.length;
                this.Us(this.extend({}, a, {dF: p, Md: a.Md, ll: n}), e)
              }
              !k && l.length && this.bU(l);
              this.Hya();
              return n
            }, mta: function (a, b) {
              function e(e, f) {
                var m = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : !1;
                if (p.Wk[q.xE] || p.gga(q)) {
                  var n = e.split("|");
                  f && (n[0] = f + n[0]);
                  var t = n, x = "";
                  n[n.length - 1] && (x = n[n.length - 1], t = n.splice(0, n.length - 1));
                  if (k) for (var n =
                    0, y = t.length; n < y; n++) {
                    if (t[n]) {
                      var F = JSON.parse(t[n]);
                      if (F.length) {
                        var C = F[0].split("-").slice(0, -1).join("/");
                        p.Yj[C] ? p.Yj[C].push(F) : (p.Yj[C] = [F], p.Rt++);
                        m && (p.Yj[C].SZ = !0)
                      }
                    }
                  } else p.Us(p.extend({}, a, {dF: t, Md: h, ll: m, BS: !0}), b);
                  return x
                }
                r || (p.Ml(l, b), r = !0)
              }

              var f = this, h = a.Md, k = a.Ke, l = a.Hb, m = a.url;
              if (!this.X4(a, function (a, b) {
                var c = a.Hb, d = a.url, e = d.match(/&t=([^&]+)/)[1].split(";");
                b.reverse().forEach(function (a) {
                  a = c.indexOf(a);
                  -1 !== a && e.splice(a, 1)
                });
                a.url = d.replace(/&t=[^&]+/, "&t=" + e.join(";"))
              }, b)) {
                if (this.bC() &&
                  (this.eX(), k)) {
                  this.Ml(l, b);
                  return
                }
                var n = 0, p = this, q = this.BQ(a);
                k ? this.so.push(q) : (this.Wk[q.xE] = q, q.Hb = l, q.Nc = b);
                var r = !1;
                q.onreadystatechange = function () {
                  if (4 === q.readyState && 0 === q.status) q.Mt || (q.Mt = !0, f.Ml(l, b), q.onreadystatechange = null, k ? f.A0(q) : delete f.Wk[q.xE]), q = null; else if (!q.Mt) if (3 === q.readyState) {
                    var h = q.responseText.substring(n);
                    q.Oq = e(h, q.Oq);
                    n = q.responseText.length
                  } else 4 === q.readyState && (h = q.responseText.substring(n), a.bh && (h += "|"), e(h, q.Oq, !0), q.Oq = "", k ? f.A0(q) : delete f.Wk[q.xE],
                    q = null)
                };
                q.onerror = function () {
                };
                q.open("GET", m, !0);
                q.send();
                k && (q.S9 = l.map(function (a) {
                  return a.key
                }))
              }
            }, $D: function (a) {
              function b(d, p, r) {
                var s = [r, d, p].join("/");
                d = e.filter(function (a) {
                  return a.key === s
                })[0];
                18 < k && !n && (s += "/" + k);
                if (d && "loaded" !== d.status && -1 !== m.indexOf(t)) if ("limg" === t) p = h[1], d.qd = p, "string" === typeof p.b && (p.b = w.bB(p.b)), r = "", (r = "object" === typeof p.u ? p.u.url : p.u) && (p.u = {
                  url: r,
                  Fk: "limg-" + d.key + "-" + f
                }); else {
                  p = {
                    Lg: d.ta,
                    Qi: s,
                    Oa: h,
                    Ed: t,
                    iy: a.Du,
                    FD: "building" === t,
                    Ei: "poilabel" === t || "roadlabel" ===
                      t || "building" === t && q
                  };
                  if ("poilabel" === t || "roadlabel" === t) p.qd = d.qd;
                  t === m[m.length - 1] && (d.status = "loaded");
                  l.push(p)
                }
              }

              var e = a.Hb, f = a.OS, h = a.PC, k = a.Md, l = a.Pc, m = a.ga, n = a.Sf, p = a.ZR, q = a.ze,
                r = h[0].split("-"), s = parseInt(r[1]), u = parseInt(r[2]), v = parseInt(r[0]), w = this, t = r[3],
                r = Math.pow(2, v);
              10 > v && (s <= p && b(s + r, u, v), s >= r - p && b(s - r, u, v));
              b(s, u, v)
            }, A0: function (a) {
              for (var b = this.so.length - 1; 0 <= b; b--) this.so[b] === a && this.so.splice(b, 1)
            }, gga: function (a) {
              for (var b = 0, e = this.so.length; b < e; b++) if (this.so[b] === a) return !0;
              return !1
            }, bC: function () {
              return Object.keys(this.Wk).length ? !0 : !1
            }, eX: function () {
              if (this.so.length) {
                for (var a = this.so.length - 1; 0 <= a; a--) {
                  var b = this.so[a];
                  b.Mt || b.abort();
                  b.S9 && this.bU(b.S9)
                }
                this.so.length = 0
              }
            }, Ml: function (a, b) {
              b(null, {Hb: a, N5: !0, disabled: this.disabled}, {hl: !0})
            }
          }
        }, {batchSend: !1});
        b.yf(null, new Function("\n     return {\n      " + a.Conf + ": " + JSON.stringify(g.r) + ",\n      " + a.extend + ": " + g.extend.toString() + ",\n      " + a.Browser + ": " + JSON.stringify(g.l) + ",\n      " + a.uncodeCoords + ": " +
          g.a.xw.toString() + "\n     }"));
        return b
      }
    }
  })();
  g.g = {
    CLASS_NAME: "DomUtil", get: function (a) {
      return "string" === typeof a ? document.getElementById(a) : a
    }, HD: function (a, b, c) {
      return a.parentNode == b ? !0 : a.parentNode && a.parentNode !== document.body && !g.g.Cn(a.parentNode, c) ? g.g.HD(a.parentNode, b) : !1
    }, Mo: function (a) {
      if (!a) return [0, 0];
      var b = a.offsetWidth, c = a.offsetHeight;
      b && c || !a.childNodes[0] || (b = b || a.childNodes[0].offsetWidth, c = c || a.childNodes[0].offsetHeight);
      window.opera && (b = Math.max(b, a.childNodes[0].scrollWidth), c = Math.max(c, a.childNodes[0].scrollHeight));
      return [b, c]
    }, EFa: function (a, b) {
      var c = document.head || document.getElementsByTagName("head")[0];
      if (c) {
        var d = document.createElement("link");
        d.setAttribute("rel", "stylesheet");
        d.setAttribute("type", "text/css");
        d.setAttribute("href", a);
        b ? c.appendChild(d) : c.insertBefore(d, c.firstChild)
      } else document.write("<link rel='stylesheet' href='" + a + "'/>")
    }, Vc: function (a, b) {
      var c = a.style[b];
      !c && a.currentStyle && (c = a.currentStyle[b]);
      c && "auto" !== c || !document.defaultView || (c = (c = document.defaultView.getComputedStyle(a,
        null)) ? c[b] : null);
      c && "auto" !== c || "height" !== b || (c = a.clientHeight + "px");
      c && "auto" !== c || "width" !== b || (c = a.clientWidth + "px");
      return "auto" === c ? null : c
    }, pJ: function (a) {
      if (a) return new g.xd(a.clientWidth || document.body.clientWidth, a.clientHeight || (g.l.Es ? "CSS1Compat" === document.compatMode ? document.documentElement.clientHeight : document.body.clientHeight : document.body.clientHeight), !0)
    }, Q3: function (a) {
      return new g.xd(a.clientWidth, a.clientHeight)
    }, UR: function (a) {
      var b = 0, c = 0, d = a, e = document.body, f = document.documentElement,
        h, k = g.l.sv;
      do {
        b += d.offsetTop || 0;
        c += d.offsetLeft || 0;
        b += parseInt(g.g.Vc(d, "borderTopWidth"), 10) || 0;
        c += parseInt(g.g.Vc(d, "borderLeftWidth"), 10) || 0;
        h = g.g.Vc(d, "position");
        if (d.offsetParent === e && "absolute" === h) break;
        if ("fixed" === h) {
          b += e.scrollTop || f.scrollTop || 0;
          c += e.scrollLeft || f.scrollLeft || 0;
          break
        }
        d = d.offsetParent
      } while (d);
      d = a;
      do {
        if (d === e) break;
        b -= d.scrollTop || 0;
        c -= d.scrollLeft || 0;
        g.g.Toa() || !g.l.A$ && !k || (c += d.scrollWidth - d.clientWidth, k && "hidden" !== g.g.Vc(d, "overflow-y") && "hidden" !== g.g.Vc(d, "overflow") &&
        (c += 17));
        d = d.parentNode
      } while (d);
      return new g.H(c, b)
    }, Toa: function () {
      g.g.eea || (g.g.eea = !0, g.g.dea = "ltr" === g.g.Vc(document.body, "direction"));
      return g.g.dea
    }, create: function (a, b, c, d) {
      a = document.createElement(a);
      c && (a.className = c);
      b && (d && "before" === d ? b.insertBefore(a, b.firstChild) : b.appendChild(a));
      return a
    }, Z2: function () {
      document.selection && document.selection.empty && document.selection.empty();
      this.bja || (this.bja = document.onselectstart, document.onselectstart = g.a.v3)
    }, m3: function () {
    }, Aya: function (a,
                      b, c) {
      c ? this.Wa(a, b) : this.eb(a, b)
    }, Cn: function (a, b) {
      if (a && b) return 0 < a.className.length && RegExp("(^|\\s)" + b + "(\\s|$)").test(a.className)
    }, Wa: function (a, b) {
      a && b && (a.classList && a.classList.add ? a.classList.add(b) : g.g.Cn(a, b) || (a.className += (a.className ? " " : "") + b))
    }, pxa: function (a, b) {
      a && (a.className = b || "")
    }, eb: function (a, b) {
      function c(a, c) {
        return c === b ? "" : a
      }

      a && b && (a.classList && a.classList.remove ? a.classList.remove(b) : a.className = a.className.replace(/(\S+)\s*/g, c).replace(/(^\s+|\s+$)/, ""))
    }, n4: function (a,
                     b) {
      return 1 === b ? "" : "opacity" in a.style ? "opacity:" + b : 8 <= document.documentMode ? "-ms-filter:'progid:DXImageTransform.Microsoft.Alpha(opacity=" + Math.ceil(100 * b) + ")'" : "filter:alpha(opacity=" + Math.ceil(100 * b) + ")"
    }, Yq: function (a, b) {
      if (a.style) if ("opacity" in a.style) a.style.opacity = b; else if ("filter" in a.style) {
        var c = Math.round(100 * b);
        a.style.filter = "";
        100 !== c && (a.style.filter = " progid:DXImageTransform.Microsoft.Alpha(opacity=" + c + ")")
      }
    }, XU: function (a) {
      for (var b = document.documentElement.style, c = 0; c < a.length; c +=
        1) if (a[c] in b) return a[c];
      return !1
    }, E4: function (a) {
      var b = g.l.HL;
      return "translate" + (b ? "3d" : "") + "(" + a.x + "px," + a.y + "px" + ((b ? ",0" : "") + ")")
    }, DEa: function (a, b) {
      return g.g.E4(b.add(b.Nd(-1 * a))) + (" scale(" + a + ") ")
    }, Z8: function (a, b, c) {
      a.cj = b;
      !c && g.l.UH ? (b = g.g.E4(b), c = a.style[g.g.tg].split("rotate"), 1 < c.length ? (c[0] = b, a.style[g.g.tg] = c.join("rotate")) : a.style[g.g.tg] = b, g.l.E6 && (a.style.WebkitBackfaceVisibility = "hidden")) : (a.style.left = b.x + "px", a.style.top = b.y + "px")
    }, Ud: function (a) {
      a.cj || (a.cj = a.style.left ?
        new g.H(parseInt(a.style.left), parseInt(a.style.top)) : new g.H(0, 0));
      return a.cj
    }, pHa: function (a, b) {
      a = a instanceof Array ? a : [a];
      for (var c = 0; c < a.length; c += 1) a[c].style.cssText = b
    }, S8: function (a, b) {
      ";" !== b[b.length - 1] && (b += ";");
      return b.toLowerCase() !== a.style.cssText.replace(/ /g, "").toLowerCase() ? (a.style.cssText = b, !0) : !1
    }, $a: function (a, b) {
      a = a instanceof Array ? a : [a];
      for (var c = 0; c < a.length; c += 1) for (var d in b) b.hasOwnProperty(d) && (a[c].style[d] = b[d]);
      return this
    }, Jz: function (a) {
      for (; a.childNodes.length;) a.removeChild(a.childNodes[0])
    },
    remove: function (a) {
      a && a.parentNode && a.parentNode.removeChild(a)
    }, rotate: function (a, b, c) {
      var d = g.g.tg;
      c = c || {x: a.clientWidth / 2, y: a.clientHeight / 2};
      d ? (a.style[d] = "" + (" rotate(" + b + "deg)"), a.style[g.g.pt[d] + "-origin"] = c.x + "px " + c.y + "px") : (d = Math.cos(b * Math.PI / 180), b = Math.sin(b * Math.PI / 180), a.style.filter = "progid:DXImageTransform.Microsoft.Matrix()", 0 < a.filters.length && (a = a.filters.item(0), a.Dx = -c.x * d + c.y * b + c.x, a.Dy = -c.x * b - c.y * d + c.y, a.M11 = a.M22 = d, a.M12 = -(a.M21 = b)))
    }, A4: function (a, b, c) {
      var d = g.g.tg;
      c = c ||
        {x: a.clientWidth / 2, y: a.clientHeight / 2};
      return d ? g.g.pt[d] + ":" + ("" + (" rotate(" + b + "deg)")) + ";" + (g.g.pt[d] + "-origin:" + c.x + "px " + c.y + "px") : ""
    }, Am: function (a, b, c) {
      a.width = b;
      a.height = c
    }, getElementsByClassName: function (a, b, c) {
      b = b || "*";
      c = c || document;
      if (c.getElementsByClassName) return c.getElementsByClassName(a);
      b = c.getElementsByTagName(b);
      a = RegExp("(^|\\s)" + a + "(\\s|$)");
      c = [];
      for (var d = 0, e; d < b.length; d++) e = b[d], a.test(e.className) && c.push(e);
      return c
    }, fillText: function (a, b) {
      if (a) return void 0 !== a.textContent ?
        a.textContent = b : void 0 !== a.innerText ? a.innerText = b : a.innerHTML = b, a
    }
  };
  (function () {
    var a = g.g.XU(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]), b;
    g.extend(g.g, {
      Z2: function () {
        g.F.h(window, "selectstart", g.F.preventDefault);
        if (a) {
          var c = document.documentElement.style;
          "none" !== c[a] && (b = c[a], c[a] = "none")
        }
      }, m3: function () {
        g.F.G(window, "selectstart", g.F.preventDefault);
        a && "none" !== b && (document.documentElement.style[a] = b, b = "none")
      }, Loa: function () {
        g.F.h(window, "dragstart", g.F.preventDefault)
      }, upa: function () {
        g.F.G(window, "dragstart", g.F.preventDefault)
      }
    })
  })();
  g.g.tg = g.g.XU(["WebkitTransform", "OTransform", "MozTransform", "msTransform", "transform"]);
  g.g.pt = {
    transform: "transform",
    WebkitTransform: "-webkit-transform",
    OTransform: "-o-transform",
    MozTransform: "-moz-transform",
    msTransform: "-ms-transform"
  };
  g.g.KF = g.g.XU(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]);
  g.g.$Aa = "webkitTransition" === g.g.KF || "OTransition" === g.g.KF ? g.g.KF + "End" : "transitionend";
  g.F = {
    h: function (a, b, c, d) {
      function e(b) {
        b = b || window.event;
        b.target = b.target || b.srcElement;
        return c.call(d || a, b, k)
      }

      var f = g.a.xb(a) + "_" + g.a.xb(c) + "_" + g.a.xb(d || a), h = b + f;
      if (a[h]) return this;
      var k = b;
      g.l.fR && "mousewheel" === b && (b = "DOMMouseScroll");
      if (g.l.Es && ("mouseover" === b || "mouseout" === b)) {
        var l = e;
        b = "mouseover" === b ? "mouseenter" : "mouseleave";
        e = function (a) {
          l(a)
        }
      }
      if (g.l.O7 && 0 === b.indexOf("touch")) return a[h] = e, this.Rla(a, b, e, f);
      g.l.Yf && "dblclick" === b && this.Pla && this.Pla(a, e, f);
      "addEventListener" in a ? a.addEventListener(b,
        e, !1) : "attachEvent" in a ? a.attachEvent("on" + b, e) : a["on" + b] = e;
      a[h] = e;
      return this
    }, Fj: function (a, b, c, d) {
      var e = this;
      this.h(a, b, function h(k) {
        e.G(a, b, h, d);
        return c.call(d || a, k || window.event, b)
      }, d)
    }, G: function (a, b, c, d) {
      c = g.a.xb(a) + "_" + g.a.xb(c) + "_" + g.a.xb(d || a);
      d = b + c;
      var e = a[d];
      g.l.fR && "mousewheel" === b && (b = "DOMMouseScroll");
      !g.l.Es || "mouseover" !== b && "mouseout" !== b || (b = "mouseover" === b ? "mouseenter" : "mouseleave");
      g.l.O7 && -1 < b.indexOf("touch") ? this.vwa(a, b, c) : g.l.Yf && "dblclick" === b && this.rwa ? this.rwa(a, c) :
        "removeEventListener" in a ? a.removeEventListener(b, e, !1) : "detachEvent" in a && -1 === b.indexOf("touch") ? e && a.detachEvent("on" + b, e) : a["on" + b] = null;
      a[d] = void 0;
      return this
    }, vHa: function (a, b) {
      var c = document.createEvent("MouseEvents");
      c.initMouseEvent(a, !0, !0, window, 1, b.screenX, b.screenY, b.clientX, b.clientY, !1, !1, !1, !1, 0, null);
      b.target.dispatchEvent(c)
    }, Wla: function (a) {
      a.af = "info";
      g.l.Ie && g.F.stopPropagation(a)
    }, stopPropagation: function (a) {
      a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0;
      return this
    },
    Zxa: function (a) {
      var b = g.F.Wla;
      g.l.Yf && (g.F.h(a, "touchstart", b, this), g.F.h(a, "touchmove", b, this), g.F.h(a, "touchend", b, this));
      g.l.ba || (g.F.h(a, "mousedown", b, this), g.F.h(a, "mouseup", b, this), g.F.h(a, "mousemove", b, this), g.F.h(a, "mousewheel", b, this));
      g.l.GT && (g.F.h(a, "pointerdown", b, this), g.F.h(a, "pointerup", b, this), g.F.h(a, "pointermove", b, this));
      g.l.G6 && (g.F.h(a, "MSPointerDown", b, this), g.F.h(a, "MSPointerUp", b, this), g.F.h(a, "MSPointerMove", b, this))
    }, preventDefault: function (a) {
      a.preventDefault ? a.preventDefault() :
        a.returnValue = !1;
      return this
    }, stop: function (a) {
      return g.F.preventDefault(a).stopPropagation(a)
    }, oxa: function (a) {
      return a && a.getBoundingClientRect ? (a.vM = a.getBoundingClientRect(), a.QW = [a.clientLeft, a.clientTop], !0) : !1
    }, pza: function (a) {
      a.vM && (a.vM = null, a.QW = null)
    }, Jpa: function (a, b) {
      var c = b.vM || b.getBoundingClientRect(), d = b.QW || [b.clientLeft, b.clientTop];
      return new g.H(a.clientX - c.left - d[0], a.clientY - c.top - d[1])
    }, nm: function (a, b) {
      if (b && b.getBoundingClientRect) return this.Jpa(a, b);
      var c = document.body,
        d = document.documentElement,
        c = new g.H(g.l.Yf ? a.pageX : a.clientX + (c.scrollLeft || d.scrollLeft), g.l.Yf ? a.pageY : a.clientY + (c.scrollTop || d.scrollTop));
      return b ? c.ab(g.g.UR(b)) : c
    }, K5: function (a) {
      return 1 === a.which || 0 === a.button || 1 === a.button
    }
  };
  g.extend(g.F, {
    zO: [], d_: !1, Rla: function (a, b, c, d) {
      switch (b) {
        case "touchstart":
          return this.Ula(a, b, c, d);
        case "touchend":
          return this.Sla(a, b, c, d);
        case "touchmove":
          return this.Tla(a, b, c, d)
      }
    }, Oo: function (a) {
      if (g.l.GT) return a;
      switch (a) {
        case "pointerdown":
          return "MSPointerDown";
        case "pointerup":
          return "MSPointerUp";
        case "pointercancel":
          return "MSPointerCancel";
        case "pointermove":
          return "MSPointerMove"
      }
    }, Ula: function (a, b, c, d) {
      function e(a) {
        for (var b = !1, d = 0; d < f.length; d += 1) if (f[d].pointerId === a.pointerId) {
          b = !0;
          break
        }
        b || f.push(a);
        a.touches = f.slice();
        a.changedTouches = [a];
        c(a)
      }

      var f = this.zO;
      a["_amap_touchstart" + d] = e;
      a.addEventListener(this.Oo("pointerdown"), e, !1);
      this.d_ || (a = function (a) {
        for (var b = 0; b < f.length; b += 1) if (f[b].pointerId === a.pointerId) {
          f.splice(b, 1);
          break
        }
      }, document.documentElement.addEventListener(this.Oo("pointerup"), a, !1), document.documentElement.addEventListener(this.Oo("pointercancel"), a, !1), this.d_ = !0);
      return this
    }, Tla: function (a, b, c, d) {
      function e(a) {
        if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE ||
          0 !== a.buttons) {
          for (var b = 0; b < f.length; b += 1) if (f[b].pointerId === a.pointerId) {
            f[b] = a;
            break
          }
          a.touches = f.slice();
          a.changedTouches = [a];
          c(a)
        }
      }

      var f = this.zO;
      a["_amap_touchmove" + d] = e;
      a.addEventListener(this.Oo("pointermove"), e, !1);
      return this
    }, Sla: function (a, b, c, d) {
      function e(a) {
        for (var b = 0; b < f.length; b += 1) if (f[b].pointerId === a.pointerId) {
          f.splice(b, 1);
          break
        }
        a.touches = f.slice();
        a.changedTouches = [a];
        c(a)
      }

      var f = this.zO;
      a["_amap_touchend" + d] = e;
      a.addEventListener(this.Oo("pointerup"), e, !1);
      a.addEventListener(this.Oo("pointercancel"),
        e, !1);
      return this
    }, vwa: function (a, b, c) {
      c = a["_amap_" + b + c];
      switch (b) {
        case "touchstart":
          a.removeEventListener(this.Oo("pointerdown"), c, !1);
          break;
        case "touchmove":
          a.removeEventListener(this.Oo("pointermove"), c, !1);
          break;
        case "touchend":
          a.removeEventListener(this.Oo("pointerup"), c, !1), a.removeEventListener(this.Oo("pointercancel"), c, !1)
      }
      return this
    }
  });
  (function () {
    function a(a) {
      var b = a.target || a.srcElement;
      b.aX && f(b.aX);
      b.aX = e(function () {
        var c = b.Bp;
        if (c && c.Ap) for (var d = 0; d < c.Ap.length; d += 1) c.Ap[d].call(c, a)
      })
    }

    function b() {
      var b = this.contentDocument.defaultView;
      b.Bp = this.Zba;
      b.addEventListener("resize", a);
      a.call(b, {target: b})
    }

    var c = document.attachEvent, d = navigator.userAgent.match(/(Trident|Edge)/), e = g.a.Yc, f = g.a.ui;
    g.extend(g.F, {
      Vla: function (e, f) {
        if (!e.Ap) if (e.Ap = [], c) e.Bp = e, e.attachEvent("onresize", a); else {
          "static" === window.getComputedStyle(e).position &&
          (e.style.position = "relative");
          var l = e.Bp = document.createElement("object");
          l.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;");
          l.Zba = e;
          l.onload = b;
          l.type = "text/html";
          d && e.appendChild(l);
          l.data = "about:blank";
          d || e.appendChild(l)
        }
        e.Ap.push(f)
      }, LGa: function (b, d) {
        b.Ap.splice(b.Ap.indexOf(d), 1);
        b.Ap.length || (c ? b.detachEvent("onresize", a) : (b.Bp.contentDocument.defaultView.removeEventListener("resize",
          a), b.Bp = !b.removeChild(b.Bp)))
      }, zna: function (a) {
        a.Ap = null;
        if (a.Bp) {
          var b = a.Bp;
          b.parentNode === a && b.parentNode.removeChild(b);
          a.Bp = null
        }
      }
    })
  })();
  g.sb = {
    fua: g.r.Fb + "/maps", Ru: g.da.Ru, ZS: 0, Dz: [], Mu: {}, Jg: function (a, b) {
      function c() {
        d += 1;
        d === e.length && b && b()
      }

      a.length || b();
      for (var d = 0, e = [], f = 0; f < a.length; f += 1) {
        var h = this.Ru[a[f]];
        if (h) for (var k = 0; k < h.length; k += 1) e.push(h[k]);
        e.push(a[f])
      }
      for (f = 0; f < e.length; f += 1) this.bR(e[f], c)
    }, ID: function (a) {
      for (var b = 0; b < a.length; b += 1) if (1 !== this.QC(a[b]).status) return !1;
      return !0
    }, bR: function (a, b) {
      var c = this.QC(a);
      if (1 === c.status) b && b(); else {
        b && c.ly.push(b);
        try {
          if (g.l.Gv && window.localStorage) {
            var d = window.localStorage["_AMap_" +
            a];
            d && (d = JSON.parse(d), d.version === g.r.Hk ? (window._jsload_(a, d.script, !0), d.css && window._cssload_(a, d.css, !0)) : window.localStorage.removeItem("_AMap_" + a))
          }
        } catch (e) {
        }
        if (0 === c.status) {
          this.Zva(a);
          var f = this;
          f.ZS || (f.ZS = 1, window.setTimeout(function () {
            f.ZS = 0;
            var a = "/amap/webapi/maps/modules?v=" + g.r.nn + "&key=" + g.r.key + "&m=" + f.Dz.join(",") + "&vrs=1617959106697";
            g.sb.Pt(f.Dz.join(","));
            f.Dz = [];
            c.XK = f.xta(a)
          }, 1));
          c.status = -1
        }
      }
    }, Pt: function (a) {
      a = g.r.Zd + "/v3/log/init?" + ["s=rsv3&product=JsModule&key=" + g.r.key, "m=" + a].join("&");
      new g.jb.yb(a, {callback: "callback"})
    }, load: function (a, b) {
      var c = this.Ru[a];
      if (c) {
        for (var d = [], e = 0; e < c.length; e += 1) d.push(c[e]);
        d.push(a);
        for (var f = 0, c = function () {
          f += 1;
          f === d.length && b && b()
        }, e = 0; e < d.length; e += 1) this.bR(d[e], c)
      } else this.bR(a, b)
    }, Zva: function (a) {
      for (var b = 0; b < this.Dz.length; b += 1) if (this.Dz[b] === a) return;
      this.Dz.push(a)
    }, Pn: function (a, b) {
      var c = this.QC(a);
      try {
        eval(b)
      } catch (d) {
        return
      }
      c.status = 1;
      for (var e = 0, f = c.ly.length; e < f; e += 1) c.ly[e]();
      c.ly = []
    }, pd: function (a, b) {
      var c = this;
      c.timeout = setTimeout(function () {
        1 !==
        c.Mu[a].status ? (c.remove(a), c.load(a, b)) : clearTimeout(c.timeout)
      }, 5E3)
    }, QC: function (a) {
      this.Mu[a] || (this.Mu[a] = {}, this.Mu[a].status = 0, this.Mu[a].ly = []);
      return this.Mu[a]
    }, remove: function (a) {
      this.Mu[a] = null
    }, xta: function (a) {
      g.r.mode && (a += "&mode=" + g.r.mode);
      var b = document.createElement("script");
      b.charset = "utf-8";
      a && 0 === a.indexOf(g.r.Fb) && (b.crossOrigin = "Anonymous");
      b.src = a;
      document.body.appendChild(b);
      return b
    }
  };
  window._jsload_ = function (a, b, c) {
    var d = g.sb.QC(a);
    d.XK && 0 <= g.a.indexOf(document.body.childNodes, d.XK) && document.body.removeChild(d.XK);
    d.XK = null;
    try {
      if (!c && window.localStorage && b && "" !== b && g.l.Gv) {
        var e = window.localStorage["_AMap_" + a], e = e || "{}", e = JSON.parse(e);
        e.version !== g.r.Hk || e.script ? window.localStorage.setItem("_AMap_" + a, JSON.stringify({
          version: g.r.Hk,
          script: b
        })) : window.localStorage.setItem("_AMap_" + a, JSON.stringify({version: g.r.Hk, script: b, css: e.css}))
      }
    } catch (f) {
    }
    g.sb.Pn(a, b)
  };
  window._cssload_ = function (a, b, c) {
    try {
      !c && window.localStorage && b && "" !== b && g.l.Gv && window.localStorage.setItem("_AMap_" + a, JSON.stringify({
        css: b,
        version: g.r.Hk
      }))
    } catch (d) {
    }
    var e = document.createElement("style");
    e.type = "text/css";
    -1 === g.r.Fb.indexOf("webapi.amap.com") && (b = b.replace(/webapi.amap.com/gi, g.r.Fb.split("://")[1]));
    "https" === g.r.vc && (b = b.replace(/http:/gi, "https:"));
    e.styleSheet ? (a = function () {
      try {
        e.styleSheet.cssText = b
      } catch (a) {
      }
    }, e.styleSheet.disabled ? setTimeout(a, 10) : a()) : e.appendChild(document.createTextNode(b));
    a = document.head || document.getElementsByTagName("head")[0];
    2 > a.childNodes.length ? a.appendChild(e) : a.insertBefore(e, a.childNodes[1])
  };
  (function (a) {
    var b = g.l;
    if (!g.indexedDB && b.Pi) {
      var c = a.indexedDB || a.webkitIndexedDB || a.msIndexedDB || a.mozIndexedDB,
        d = a.IDBKeyRange || a.hIa || a.RFa || a.QFa;
      if (c) {
        var e = g.a, f = null;
        a = "amap-jsapi" + (a.AAa ? "-debug" : "");
        var h = g.extend({}, g.va), k;
        try {
          k = c.open(a), k.onsuccess = function () {
            f = this.result;
            h.q("dbReady", {status: "success"})
          }, k.onerror = function () {
            h.q("dbReady", {status: "error"})
          }, k.onblocked = function () {
            h.q("dbReady", {status: "blocked"})
          }, k.onupgradeneeded = function (a) {
            a.currentTarget.result.createObjectStore("tile",
              {keyPath: "tileKey"})
          }
        } catch (l) {
          b.Pi = !1
        } finally {
          if (!b.Pi) return
        }
        var b = function (a) {
          return function () {
            try {
              return a.apply(this, arguments)
            } catch (b) {
              var c = arguments[arguments.length - 1];
              "function" === typeof c && setTimeout(function () {
                c({code: 4, KI: b})
              }, 1)
            }
          }
        }, m = b(function (a, b) {
          return null === f ? (setTimeout(function () {
            b && b({code: 3})
          }, 1), null) : f.transaction("tile", a).objectStore("tile")
        });
        g.indexedDB = {
          lC: function (a, b) {
            f ? "function" === typeof a && a() : h.h("dbReady", function (c) {
              "success" === c.status ? "function" === typeof a &&
                a() : "function" === typeof b && b({code: 3, status: status})
            })
          }, count: b(function (a) {
            var b = this, c = arguments;
            this.lC(function () {
              b.Pt.apply(b, c)
            }, a)
          }), Pt: b(function (a) {
            var b = m("readonly", a).count();
            b.onsuccess = function () {
              a(null, b.result)
            };
            b.onerror = function () {
              a({code: 7})
            }
          }), get: b(function (a, b, c) {
            var d = this, e = setTimeout(function () {
              e && (e = null, c && c({code: 7}))
            }, b.timeout || 1E3);
            this.lC(function () {
              d.Gea.call(d, a, function (a, b) {
                e && (clearTimeout(e), e = null, c(a, b))
              })
            }, c)
          }), Gea: b(function (a, b) {
            var c = m("readonly", b);
            if (e.isArray(a)) {
              var d,
                f;
              (function () {
                function e(b) {
                  var f = c.get(a[b]);
                  f.onsuccess = function (a) {
                    a.target.result && (d[b] = a.target.result);
                    h()
                  };
                  f.onerror = h
                }

                function h() {
                  f++;
                  f === a.length && b(null, d)
                }

                d = [];
                for (var k = f = 0, l = a.length; k < l; k++) e(k)
              })()
            } else {
              var h = c.get(a);
              h.onsuccess = function (a) {
                b && b(null, a.target.result)
              };
              h.onerror = function () {
                b && b({code: 1})
              }
            }
          }), add: b(function (a, b) {
            var c = this, d = arguments;
            this.lC(function () {
              c.cca.apply(c, d)
            }, b)
          }), cca: b(function (a, b) {
            function c() {
              0 === --f && b(null)
            }

            e.isArray(a) || (a = [a]);
            var d = a.length, f =
              d, h = 0, k = Math.ceil(d / 5), l = setInterval(function () {
              if (h++ < k) {
                var e = 5 * h;
                e > d && (e = d);
                for (var f = m("readwrite", b), s = 5 * (h - 1); s < e; s++) {
                  var F = f.put(a[s]);
                  F.onsuccess = F.onerror = c
                }
              } else clearInterval(l)
            }, 32)
          }), remove: b(function (a, b) {
            var c = this, d = arguments;
            this.lC(function () {
              c.oka.apply(c, d)
            }, b)
          }), oka: b(function (a, b) {
            var c = m("readwrite", b);
            e.isArray(a) || (a = [a]);
            a = a.sort();
            c.openCursor(d.bound(a[0], a[a.length - 1])).onsuccess = function (c) {
              if (c = c.target.result) {
                if (e.ka(c.value.tileKey, a)) c["delete"]();
                for (var d = -1,
                       f = 0, h = a.length; f < h; f++) if (a[f] > c.value.tileKey) {
                  d = f;
                  break
                }
                c["continue"](a[d])
              } else b && b(null)
            }
          }), clear: b(function (a) {
            var b = this, c = arguments;
            this.lC(function () {
              b.cG.apply(b, c)
            }, a)
          }), cG: b(function (a) {
            var b = m("readwrite", a).clear();
            b.onsuccess = function () {
              a && a(null)
            };
            b.onerror = function () {
              a && a({code: 2})
            }
          })
        }
      } else b.Pi = !1
    }
  })(window);
  (function () {
    function a(a) {
      u.data.keys = u.data.keys.filter(function (b) {
        return !r.ka(a, b)
      }).concat(a)
    }

    function b(a) {
      var b = g.r.Hk + "|" + a.Qi.replace(/\//g, ",") + "|" + (a.Sf ? "w" : "v") + "|", c;
      c = a.ja;
      var d = a.ze;
      c = [c ? 1 : 0, q.ba ? 1 : 0, d ? 1 : 0].join();
      return b + c + "|" + m(a.url)
    }

    function c() {
      u.data.keys.length >= u.ZL && d()
    }

    function d() {
      var a = u.data.keys.length, b = Math.floor(a / 2);
      a > u.ZL && (b = Math.floor(a - u.ZL / 2));
      a = u.data.keys.slice(0, b);
      u.data.keys = u.data.keys.slice(b + 1);
      s.remove(a, function (a) {
        a && 3 === a.code && (q.Pi = !1)
      })
    }

    function e() {
      var a =
        0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : r.Rs;
      k();
      w.setItem(u.key, u.data, !0);
      f(a)
    }

    function f(a) {
      q.Pi && s && s.clear(function (b) {
        b && 3 === b.code && (q.Pi = !1);
        a()
      })
    }

    function h() {
      k();
      var a = w.getItem(u.key, !0);
      a && (a.vdataVer === u.data.vdataVer && a.apiVer === u.data.apiVer ? u.data = a : e())
    }

    function k() {
      u.data = {vdataVer: q.mf, apiVer: g.r.Hk, keys: [], config: {}, fsTiles: {}};
      u.qt = {}
    }

    function l(a) {
      a && (u.data.vdataVer = a, q.mf = a)
    }

    function m(a) {
      var b = "limg";
      /flds=([^&]+)/.test(a) && (b = RegExp.$1);
      return b
    }

    function n(a) {
      if ("object" ===
        typeof a && null !== a) {
        var b = [];
        if (r.isArray(a)) if (Object.keys(a).length == a.length) b = a.map(function (a) {
          return n(a)
        }); else {
          b.push("__arrayObject");
          var c = {}, d;
          for (d in a) (0 > parseInt(d) || isNaN(parseInt(d))) && a.hasOwnProperty(d) && (c[d] = n(a[d]));
          b.push(c);
          b.push(a.map(function (a) {
            return n(a)
          }))
        } else if (r.lk(a, "Float32Array")) b.push("__Float32Array"), b.push(Array.prototype.slice.call(a)); else if (r.lk(a, "Uint16Array")) b.push("__Uint16Array"), b.push(Array.prototype.slice.call(a)); else for (d in b = {}, a) a.hasOwnProperty(d) &&
        (b[d] = n(a[d]));
        return b
      }
      return a
    }

    function p(a) {
      if ("object" === typeof a && null !== a) {
        var b = {};
        if (r.isArray(a)) if ("__Float32Array" === a[0]) b = new Float32Array(a[1]); else if ("__Uint16Array" === a[0]) b = new Uint16Array(a[1]); else if ("__arrayObject" === a[0]) {
          b = p(a[2]);
          a = a[1];
          for (var c in a) a.hasOwnProperty(c) && (b[c] = a[c])
        } else b = a.map(function (a) {
          return p(a)
        }); else for (c in a) a.hasOwnProperty(c) && (b[c] = p(a[c]));
        return b
      }
      return a
    }

    var q = g.l, r = g.a;
    if (!g.Qj && q.Pi) {
      var s = g.indexedDB, u = {ZL: 1E3, key: "_AMap_data.tileKeys"},
        v = [], w = {
          getItem: function (a, b) {
            var c = localStorage.getItem(a);
            if (c && b) {
              var d;
              try {
                d = JSON.parse(c)
              } catch (e) {
                d = null
              }
              c = d
            }
            return c
          }, setItem: function (a, b, c) {
            var d = b;
            c && (d = JSON.stringify(b), 1.5 < d.length / 1024 / 1024 && Object.keys(b.cqa).length && (b.cqa = {}, d = JSON.stringify(b)));
            try {
              localStorage.setItem(a, d)
            } catch (f) {
              e()
            }
          }
        };
      g.Qj = {
        clear: e, get: function (c, d) {
          function f(a) {
            var b = {lS: l, D6: G, NFa: w, Vg: u.data.config};
            a && z.length && (/\|limg/.test(z[0]) ? b.j6 = a.map(function (a) {
              return JSON.parse(a.data)
            }).filter(function (a) {
              return a &&
                a.key
            }) : b.Pc = h(a));
            d && d(null, b);
            w.length && (l = [], G = [])
          }

          function h(a) {
            var b = [];
            m(c.url).split(",").forEach(function (c) {
              a.forEach(function (a) {
                if (a = JSON.parse(a.data[c])) {
                  var d = a.Lg;
                  a.Lg = new g.pr(d.z, d.x, d.y);
                  a.Lg.T = d.T;
                  b.push(a)
                }
              })
            });
            return b
          }

          var k = "FS" === c.type;
          if (!q.Gv || !(k || q.Pi && 0 !== u.data.keys.length)) return d({code: 1});
          var l = [], w = [], z = [], G = [], H = [];
          c.sya.forEach(function (a) {
            var d = !1, e = b({Qi: a.key, url: c.url, Sf: c.Sf, ja: c.o.ja, ze: c.ze});
            k && (v.push(e), u.data.fsTiles[e] && (l.push(a), z.push(e), H.push({
              data: p(u.data.fsTiles[e]),
              tileKey: e
            }), d = !0));
            d || (q.Pi && r.ka(u.data.keys, e) ? (z.push(e), w.push(a)) : G.push(a))
          });
          if (k && 0 === w.length || 0 === z.length) return f(H);
          k && H.length && H.forEach(function (a) {
            a = r.indexOf(z, a.tileKey);
            z.splice(a, 1)
          });
          s.get(z, {timeout: c.timeout || 1E3}, function (b, c) {
            if (b || c.length !== z.length) b && 3 === b.code ? q.Pi = !1 : e(), G = w, w = [], f(null); else {
              if (k) for (var d = c.length - 1; 0 <= d; d--) {
                var h = c[d];
                h && h.data ? u.data.fsTiles[h.tileKey] = n(h.data) : G.push(w.splice(d, 1)[0])
              }
              l = w;
              w = [];
              f(c);
              a(z)
            }
          });
          (G.length || w.length) && f(H)
        }, yw: function (a) {
          a.Hb.forEach(function (c) {
            c =
              b({Qi: c.key, url: a.url, Sf: a.Sf, ja: a.o.ja, ze: a.ze});
            u.qt[c] && delete u.qt[c]
          })
        }, set: function (a, c) {
          a.mf && a.mf !== u.data.vdataVer && (l(a.mf), e(), c && c({code: 2}));
          !a.qd && a.Pc ? a.Pc.forEach(function (c) {
            var d = b({Qi: c.Qi, url: a.url, Sf: a.Sf, ja: a.o.ja, ze: a.ze});
            if (q.Pi || r.ka(v, d)) {
              var e = u.qt[d] || {};
              e[c.Ed] = c.Oa;
              u.qt[d] = e
            }
          }) : a.data && a.data.forEach(function (c) {
            var d = b({Qi: c.key, url: a.url, Sf: a.Sf, ja: a.o.ja, ze: a.ze});
            if (q.Pi || r.ka(v, d)) u.qt[d] = c.data
          });
          u.data.config = {"x-vd-v": a["x-vd-v"], tv: a.tv, bgc: a.bgc}
        }, flush: function () {
          var a =
            !0;
          return function () {
            var b = this;
            if (a) {
              if (Object.keys(u.data.fsTiles).length) for (var c in u.data.fsTiles) u.data.fsTiles.hasOwnProperty(c) && !r.ka(v, c) && delete u.data.fsTiles[c];
              q.Pi ? s.count(function (a, c) {
                a || (c !== u.data.keys.length ? (u.data.keys.length && (u.data.keys = []), f(function () {
                  b.sG(!0)
                })) : b.sG(!0))
              }) : b.sG(!0);
              a = !1
            } else b.sG()
          }
        }(), sG: function () {
          var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : !1, b = {}, d = [],
            f = Object.keys(u.qt), h = [];
          f.length ? (f.forEach(function (a) {
            var c = u.qt[a];
            a.split("|").pop().split(",").every(function (a) {
              return "limg" ===
              a ? !0 : c && void 0 !== c[a]
            }) ? (r.ka(u.data.keys, a) || (h.push(a), d.push({
              tileKey: a,
              data: c
            })), r.ka(v, a) && void 0 === u.data.fsTiles[a] && (u.data.fsTiles[a] = c)) : b[a] = c
          }), d.length && (q.Pi ? s.add(d, function (a) {
            a ? 3 !== a.code ? e() : q.Pi = !1 : (u.data.keys = u.data.keys.concat(h), w.setItem(u.key, u.data, !0), c())
          }) : w.setItem(u.key, u.data, !0)), u.qt = b) : (a && w.setItem(u.key, u.data, !0), c())
        }
      };
      h()
    }
  })();
  g.U = g.da.extend({
    A: function (a, b, c) {
      var d = parseFloat(b), e = parseFloat(a);
      if (isNaN(a) || isNaN(b)) throw"Invalid Object: LngLat(" + e + ", " + d + ")";
      !0 !== c && (d = Math.max(Math.min(d, 90), -90), e = (e + 180) % 360 + (-180 > e || 180 === e ? 180 : -180));
      this.Q = d;
      this.R = e;
      this.lng = Math.round(1E6 * e) / 1E6;
      this.lat = Math.round(1E6 * d) / 1E6
    }, DR: function () {
      return g.a.vb(this.R, 6)
    }, AR: function () {
      return g.a.vb(this.Q, 6)
    }, add: function (a, b) {
      return new g.U(this.R + a.R, this.Q + a.Q, b)
    }, ab: function (a, b) {
      return new g.U(this.R - a.R, this.Q - a.Q, b)
    }, kd: function (a,
                     b) {
      return new g.U(this.R / a, this.Q / a, b)
    }, Nd: function (a, b) {
      return new g.U(this.R * a, this.Q * a, b)
    }, He: function (a) {
      return g.Ft.distance(this, a)
    }, offset: function (a, b) {
      if (isNaN(a) || isNaN(b)) return !1;
      var c = 2 * Math.asin(Math.sin(Math.round(a) / 12756274) / Math.cos(this.Q * Math.PI / 180)),
        c = this.R + 180 * c / Math.PI, d = 2 * Math.asin(Math.round(b) / 12756274);
      return new g.U(c, this.Q + 180 * d / Math.PI)
    }, gb: function (a) {
      a = g.a.Ja(a);
      return a instanceof g.U ? 1E-9 >= Math.max(Math.abs(this.Q - a.Q), Math.abs(this.R - a.R)) : !1
    }, toString: function () {
      return g.a.vb(this.R,
        6) + "," + g.a.vb(this.Q, 6)
    }, yl: function () {
      return [this.R, this.Q]
    }, cb: function () {
      var a = this.controlPoints, b = new g.U(this.R, this.Q);
      a && (b.controlPoints = [].concat(a));
      return b
    }
  });
  g.U.Jqa = function (a, b, c) {
    c = c + 1 || Math.round(Math.abs(a.R - b.R));
    if (!c || 0.001 > Math.abs(a.R - b.R)) return [];
    var d = [], e = Math.PI, f = g.Nm.Pu, h = g.Nm.ewa, k = Math.asin, l = Math.sqrt, m = Math.sin, n = Math.pow,
      p = Math.cos, q = Math.atan2, r = a.Q * f;
    a = a.R * f;
    var s = b.Q * f;
    b = b.R * f;
    for (var k = 2 * k(l(n(m((r - s) / 2), 2) + p(r) * p(s) * n(m((a - b) / 2), 2))), u, v, w, t, f = 1; f < c; f += 1) u = 1 / c * f, v = m((1 - u) * k) / m(k), w = m(u * k) / m(k), u = v * p(r) * p(a) + w * p(s) * p(b), t = v * p(r) * m(a) + w * p(s) * m(b), v = v * m(r) + w * m(s), v = q(v, l(n(u, 2) + n(t, 2))), u = q(t, u), b > a ? (u < a && (u += 2 * e), u > b && (u -= 2 * e)) :
      (u > a && (u -= 2 * e), u < b && (u += 2 * e)), d.push(new g.U(u * h, v * h, !0));
    return d
  };
  g.U.Xb({
    DR: "getLng",
    AR: "getLat",
    add: "add",
    ab: "subtract",
    kd: "divideBy",
    Nd: "multiplyBy",
    He: "distance",
    offset: "offset",
    gb: "equals",
    toString: "toString"
  });
  g.ne = g.da.extend({
    A: function () {
      this.CLASS_NAME = "AMap.Bounds";
      var a = null, b = null;
      if (1 === arguments.length && arguments[0] instanceof Array) a = new g.U(arguments[0][0], arguments[0][1], !0), b = new g.U(arguments[0][2], arguments[0][3], !0); else if (2 === arguments.length) a = g.a.Ja(arguments[0]), b = g.a.Ja(arguments[1]); else if (4 === arguments.length) a = new g.U(arguments[0], arguments[1]), b = new g.U(arguments[2], arguments[3]); else if (0 === arguments.length) a = new g.U(-180, -90), b = new g.U(180, 90); else throw"Invalid Object: Bounds(" +
      arguments.join(",") + ")";
      this.xc = a;
      this.oc = b
    }, iv: function () {
      return this.xc
    }, Py: function () {
      return this.oc
    }, fk: function () {
      return new g.U(this.xc.R, this.oc.Q, !0)
    }, Po: function () {
      return new g.U(this.oc.R, this.xc.Q, !0)
    }, contains: function (a) {
      var b = this.xc, c = this.oc, d;
      if (a instanceof g.tp) return this.cV().contains(a);
      a instanceof g.ne ? (d = a.xc, a = a.oc) : d = a = g.a.Ja(a);
      var e = d.R, f = b.R, h = a.R, k = c.R;
      f > k && (k += 360, 0 > e && (e += 360), 0 > h && (h += 360));
      return d.Q >= b.Q && a.Q <= c.Q && e >= f && h <= k
    }, ah: function (a) {
      var b = this.xc, c = this.oc,
        d = a.xc;
      a = a.oc;
      var e = a.R >= b.R && d.R <= c.R;
      return a.Q >= b.Q && d.Q <= c.Q && e
    }, Ai: function () {
      return new g.U(this.xc.R > this.oc.R ? (this.xc.R + this.oc.R + 360) / 2 % 360 : (this.xc.R + this.oc.R) / 2, (this.xc.Q + this.oc.Q) / 2)
    }, extend: function (a) {
      this.xc.R = Math.min(this.xc.R, a.R);
      this.xc.Q = Math.min(this.xc.Q, a.Q);
      this.oc.R = Math.max(this.oc.R, a.R);
      this.oc.Q = Math.max(this.oc.Q, a.Q);
      return this
    }, oza: function (a) {
      return this.extend(a.xc).extend(a.oc)
    }, toString: function () {
      return this.xc.toString() + ";" + this.oc.toString()
    }, cb: function () {
      return new g.ne(this.xc.cb(),
        this.oc.cb())
    }, gb: function (a) {
      return a instanceof g.ne ? this.xc.gb(a.xc) && this.oc.gb(a.oc) : !1
    }, zj: function () {
      return Math.abs(this.oc.R - this.xc.R)
    }, wj: function () {
      return Math.abs(this.xc.Q - this.oc.Q)
    }, cV: function (a) {
      var b = [this.iv(), this.Po(), this.Py(), this.fk()];
      a && b.push(this.iv());
      return new g.tp(b)
    }, wya: function (a) {
      return new g.$f(a.lc(this.fk(), 20), a.lc(this.Po(), 20))
    }, vR: function (a, b) {
      return this.cV(b).vR(a)
    }, sR: function (a) {
      return this.wya(a).Ai()
    }
  });
  g.ne.Xb({
    iv: "getSouthWest",
    Py: "getNorthEast",
    fk: "getNorthWest",
    Po: "getSouthEast",
    contains: "contains",
    ah: "intersects",
    Ai: "getCenter",
    extend: "extend"
  });
  g.H = g.da.extend({
    A: function (a, b, c) {
      if (isNaN(a) || isNaN(b)) throw"Invalid Object: Pixel(" + a + ", " + b + ")";
      this.x = c ? Math.round(a) : Number(a);
      this.y = c ? Math.round(b) : Number(b)
    }, xf: function () {
      return this.x
    }, te: function () {
      return this.y
    }, add: function (a, b) {
      return new g.H(this.x + a.x, this.y + a.y, b)
    }, ab: function (a, b) {
      return new g.H(this.x - a.x, this.y - a.y, b)
    }, kd: function (a, b) {
      return new g.H(this.x / a, this.y / a, b)
    }, Nd: function (a, b) {
      return new g.H(this.x * a, this.y * a, b)
    }, He: function (a) {
      var b = a.x - this.x;
      a = a.y - this.y;
      return Math.sqrt(b *
        b + a * a)
    }, floor: function () {
      return new g.H(Math.floor(this.x), Math.floor(this.y))
    }, round: function () {
      return new g.H(this.x, this.y, !0)
    }, gb: function (a) {
      return a instanceof g.H && this.x === a.x && this.y === a.y
    }, cb: function (a) {
      return new g.H(this.x, this.y, a)
    }, toString: function () {
      return this.x + "," + this.y
    }, yl: function () {
      return [this.x, this.y]
    }, length: function () {
      return Math.sqrt(this.x * this.x + this.y * this.y)
    }, direction: function () {
      var a = this.x, b = this.y;
      if (0 === a && 0 === b) return null;
      if (0 === a) return 0 < b ? 90 : 270;
      var c = 180 *
        Math.atan(b / a) / Math.PI;
      return 0 > a && 0 < b ? c + 180 : 0 > a && 0 > b ? c + 180 : 0 < a && 0 > b ? c + 360 : c
    }, Lu: function (a) {
      var b = this.length(), c = a.length();
      return b && c ? 180 * Math.acos((this.x * a.x + this.y * a.y) / c / b) / Math.PI : null
    }, qoa: function (a) {
      var b = this.length(), c = a.length();
      return b && c ? (this.x * a.x + this.y * a.y) / c / b : null
    }, toFixed: function (a) {
      this.x = g.a.vb(this.x, a);
      this.y = g.a.vb(this.y, a);
      return this
    }
  });
  g.H.Xb({
    xf: "getX",
    te: "getY",
    add: "add",
    ab: "subtract",
    kd: "divideBy",
    Nd: "multiplyBy",
    He: "distance",
    gb: "equals",
    toString: "toString"
  });
  g.xd = g.da.extend({
    A: function (a, b, c) {
      if (isNaN(a) || isNaN(b)) throw"Invalid Object: Size(" + a + ", " + b + ")";
      this.width = c ? Math.round(a) : Number(a);
      this.height = c ? Math.round(b) : Number(b)
    }, cb: function () {
      return new g.xd(this.width, this.height)
    }, zj: function () {
      return this.width
    }, wj: function () {
      return this.height
    }, PE: function () {
      return new g.H(this.zj(), this.wj())
    }, contains: function (a) {
      return Math.abs(a.x) <= Math.abs(this.width) && Math.abs(a.y) <= Math.abs(this.height)
    }, gb: function (a) {
      return a instanceof g.xd && this.width ===
        a.width && this.height === a.height
    }, toString: function () {
      return this.zj() + "," + this.wj()
    }
  });
  g.xd.Xb({zj: "getWidth", wj: "getHeight", toString: "toString"});
  g.tp = g.da.extend({
    A: function (a) {
      this.CLASS_NAME = "AMap.ArrayBounds";
      a = g.a.Ja(a);
      this.path = [];
      for (var b = 0; b < a.length; b += 1) this.path.push([a[b].R, a[b].Q]);
      this.bounds = this.Rd = a
    }, contains: function (a, b) {
      if (a instanceof g.tp) return g.Ft.isRingInRing(a.path, this.path);
      a instanceof g.H ? a = [a.x, a.y] : a instanceof g.U && (a = [a.R, a.Q]);
      return g.wd.Sd(a, this.path, b)
    }, toBounds: function () {
      for (var a = new g.ne(180, 90, -180, -90), b = this.Rd.length - 1; 0 <= b; b -= 1) a.extend(this.Rd[b]);
      return a
    }, vR: function (a) {
      for (var b = [], c = 0; c <
      this.path.length; c += 1) b[c] = a.lc(this.path[c], 20);
      return b
    }, sR: function (a) {
      return this.toBounds().sR(a)
    }, Ai: function () {
      return this.toBounds().Ai()
    }, toString: function () {
      return this.path.join(";")
    }
  });
  g.tp.Xb({contains: "contains", Ai: "getCenter"});
  g.caa = g.tp.extend({
    A: function (a) {
      this.CLASS_NAME = "AMap.CoordsBounds";
      this.path = a;
      if (a[0] instanceof g.H) {
        this.path = [];
        for (var b = 0; b < a.length; b += 1) this.path.push([a[b].x, a[b].y])
      }
      this.bounds = this.Rd = a
    }, toString: function () {
      return this.path.join(";")
    }
  });
  g.$f = g.da.extend({
    A: function () {
      if (2 === arguments.length) this.kc = arguments[0], this.Vd = arguments[1]; else if (1 === arguments.length && arguments[0] instanceof Array || 4 === arguments.length) {
        var a = arguments[0] instanceof Array ? arguments[0] : arguments;
        this.kc = new g.H(a[0], a[1]);
        this.Vd = new g.H(a[2], a[3])
      } else throw"Invalid Object: PixelBounds(" + arguments.join(",") + ")";
    }, Ai: function (a) {
      return new g.H((this.kc.x + this.Vd.x) / 2, (this.kc.y + this.Vd.y) / 2, a)
    }, contains: function (a) {
      var b;
      a instanceof g.$f ? (b = a.kc, a = a.Vd) :
        b = a;
      return b.x > this.kc.x && a.x < this.Vd.x && b.y > this.kc.y && a.y < this.Vd.y
    }, zj: function () {
      return this.Vd.x - this.kc.x
    }, wj: function () {
      return this.Vd.y - this.kc.y
    }, ah: function (a, b) {
      b || 0 === b || (b = 20);
      var c = this.kc, d = this.Vd, e = a.kc, f = a.Vd, h = f.y >= c.y - b && e.y <= d.y + b;
      return f.x >= c.x - b && e.x <= d.x + b && h
    }, toString: function () {
      return this.kc + ";" + this.Vd
    }, cb: function () {
      return new g.$f(this.kc.cb(), this.Vd.cb())
    }
  });
  g.I = {};
  g.I.VP = function (a) {
    for (var b = [Infinity, Infinity, -Infinity, -Infinity], c = 0, d = a.length; c < d; c += 1) g.I.LI(b, a[c]);
    return b
  };
  g.I.W1 = function (a, b, c) {
    var d = Math.min.apply(null, a);
    a = Math.max.apply(null, a);
    var e = Math.min.apply(null, b);
    b = Math.max.apply(null, b);
    return g.I.moa(d, a, e, b, c)
  };
  g.I.buffer = function (a, b) {
    a[0] -= b;
    a[1] -= b;
    a[2] += b;
    a[3] += b
  };
  g.I.cb = function (a) {
    return a.slice()
  };
  g.I.Sd = function (a, b) {
    return a[0] <= b[0] && b[0] <= a[2] && a[1] <= b[1] && b[1] <= a[3]
  };
  g.I.K2 = function (a, b) {
    return a[0] <= b[0] && b[2] <= a[2] && a[1] <= b[1] && b[3] <= a[3]
  };
  g.I.kDa = function () {
    return [Infinity, Infinity, -Infinity, -Infinity]
  };
  g.I.moa = function (a, b, c, d, e) {
    return "undefined" !== typeof e ? (e[0] = a, e[2] = b, e[1] = c, e[3] = d, e) : [a, c, b, d]
  };
  g.I.empty = function (a) {
    a[0] = a[1] = Infinity;
    a[2] = a[3] = -Infinity;
    return a
  };
  g.I.gb = function (a, b) {
    return a[0] === b[0] && a[2] === b[2] && a[1] === b[1] && a[3] === b[3]
  };
  g.I.extend = function (a, b) {
    b[0] < a[0] && (a[0] = b[0]);
    b[2] > a[2] && (a[2] = b[2]);
    b[1] < a[1] && (a[1] = b[1]);
    b[3] > a[3] && (a[3] = b[3])
  };
  g.I.LI = function (a, b) {
    b[0] < a[0] && (a[0] = b[0]);
    b[0] > a[2] && (a[2] = b[0]);
    b[1] < a[1] && (a[1] = b[1]);
    b[1] > a[3] && (a[3] = b[1])
  };
  g.I.dEa = function (a) {
    return [a[0], a[1]]
  };
  g.I.eEa = function (a) {
    return [a[2], a[1]]
  };
  g.I.Ai = function (a) {
    return [(a[0] + a[2]) / 2, (a[1] + a[3]) / 2]
  };
  g.I.qEa = function (a, b, c, d, e) {
    var f = b * d[0] / 2;
    d = b * d[1] / 2;
    b = Math.cos(c);
    c = Math.sin(c);
    f = [-f, -f, f, f];
    d = [-d, d, -d, d];
    var h, k, l;
    for (h = 0; 4 > h; h += 1) k = f[h], l = d[h], f[h] = a[0] + k * b - l * c, d[h] = a[1] + k * c + l * b;
    return g.I.W1(f, d, e)
  };
  g.I.wj = function (a) {
    return a[3] - a[1]
  };
  g.I.EEa = function (a) {
    return [a[2] - a[0], a[3] - a[1]]
  };
  g.I.IEa = function (a) {
    return [a[0], a[3]]
  };
  g.I.JEa = function (a) {
    return [a[2], a[3]]
  };
  g.I.zj = function (a) {
    return a[2] - a[0]
  };
  g.I.ah = function (a, b) {
    return a[0] <= b[2] && a[2] >= b[0] && a[1] <= b[3] && a[3] >= b[1]
  };
  g.I.xh = function (a) {
    return a[2] < a[0] || a[3] < a[1]
  };
  g.I.normalize = function (a, b) {
    return [(b[0] - a[0]) / (a[2] - a[0]), (b[1] - a[1]) / (a[3] - a[1])]
  };
  g.I.jHa = function (a, b) {
    var c = (a[2] - a[0]) / 2 * (b - 1), d = (a[3] - a[1]) / 2 * (b - 1);
    a[0] -= c;
    a[2] += c;
    a[1] -= d;
    a[3] += d
  };
  g.I.touches = function (a, b) {
    return g.I.ah(a, b) && (a[0] === b[2] || a[2] === b[0] || a[1] === b[3] || a[3] === b[1])
  };
  g.I.transform = function (a, b, c) {
    a = [a[0], a[1], a[0], a[3], a[2], a[1], a[2], a[3]];
    b(a, a, 2);
    return g.I.W1([a[0], a[2], a[4], a[6]], [a[1], a[3], a[5], a[7]], c)
  };
  g.ne.Gb({
    A: function () {
      var a = g.ne.prototype.A;
      return function () {
        a.apply(this, arguments);
        this.southwest = this.xc;
        this.northeast = this.oc
      }
    }(), extend: function () {
      var a = g.ne.prototype.extend;
      return function () {
        a.apply(this, arguments);
        this.xc.lng = this.xc.R;
        this.xc.lat = this.xc.Q;
        this.oc.lng = this.oc.R;
        this.oc.lat = this.oc.Q;
        return this
      }
    }()
  });
  g.LF = g.da.extend({
    A: function (a, b, c, d) {
      this.cX = a;
      this.sX = b;
      this.GX = c;
      this.bY = d
    }, transform: function (a, b) {
      return this.o1(a.cb(), b)
    }, o1: function (a, b) {
      b = b || 1;
      a.x = b * (this.cX * a.x + this.sX);
      a.y = b * (this.GX * a.y + this.bY);
      return a
    }, qza: function (a, b) {
      b = b || 1;
      return new g.H((a.x / b - this.sX) / this.cX, (a.y / b - this.bY) / this.GX)
    }
  });
  g.zp = g.da.extend({
    A: function (a) {
      this.YL = a.MAX_LATITUDE || 85.0511287798;
      a.project && a.unproject && (this.lc = a.project, this.Zh = a.unproject)
    }
  });
  g.zp.nW = {
    lc: function (a) {
      return new g.H(a.R, a.Q)
    }, Zh: function (a, b) {
      return new g.U(a.x, a.y, b)
    }
  };
  g.zp.nba = new g.zp({
    MAX_LATITUDE: 85.0511287798, project: function (a) {
      var b = Math.PI / 180, c = this.YL, c = Math.max(Math.min(c, a.Q), -c);
      a = a.R * b;
      b = Math.log(Math.tan(Math.PI / 4 + c * b / 2));
      return new g.H(a, b, !1)
    }, unproject: function (a, b) {
      var c = 180 / Math.PI;
      return new g.U(a.x * c, (2 * Math.atan(Math.exp(a.y)) - Math.PI / 2) * c, b)
    }
  });
  g.zp.rW = {
    YL: 85.0840591556, kM: 6356752.3142, jM: 6378137, lc: function (a) {
      var b = Math.PI / 180, c = this.YL, d = Math.max(Math.min(c, a.Q), -c), e = this.jM, c = this.kM;
      a = a.R * b * e;
      b *= d;
      e = c / e;
      e = Math.sqrt(1 - e * e);
      d = e * Math.sin(b);
      d = Math.pow((1 - d) / (1 + d), 0.5 * e);
      b = Math.tan(0.5 * (0.5 * Math.PI - b)) / d;
      b = -c * Math.log(b);
      return new g.H(a, b)
    }, Zh: function (a, b) {
      for (var c = 180 / Math.PI, d = this.jM, e = this.kM, f = a.x * c / d, d = e / d, d = Math.sqrt(1 - d * d), e = Math.exp(-a.y / e), h = Math.PI / 2 - 2 * Math.atan(e), k = 15, l = 0.1; 1E-7 < Math.abs(l) && (k -= 1, 0 < k);) l = d * Math.sin(h),
        l = Math.PI / 2 - 2 * Math.atan(e * Math.pow((1 - l) / (1 + l), 0.5 * d)) - h, h += l;
      return new g.U(f, h * c, b)
    }
  };
  g.bi = {};
  g.bi.qF = {
    ND: function (a, b) {
      var c = this.Uf.lc(a), d = this.scale(b);
      return this.UE.o1(c, d)
    }, lE: function (a, b, c) {
      b = this.scale(b);
      a = this.UE.qza(a, b);
      return this.Uf.Zh(a, c)
    }, lc: function (a) {
      return this.Uf.lc(a)
    }, scale: function (a) {
      return 256 << a
    }, oq: function (a) {
      return 12756274 * Math.PI / (256 * Math.pow(2, a))
    }
  };
  g.bi.NL = g.extend({}, g.bi.qF, {
    code: "EPSG:3857",
    Uf: g.zp.nba,
    UE: new g.LF(0.5 / Math.PI, 0.5, -0.5 / Math.PI, 0.5),
    lc: function (a) {
      return this.Uf.lc(a).Nd(6378137)
    }
  });
  g.bi.YV = g.extend({}, g.bi.qF, {
    code: "EPSG:3395", Uf: g.zp.rW, UE: function () {
      var a = g.zp.rW;
      return new g.LF(0.5 / (Math.PI * a.jM), 0.5, -0.5 / (Math.PI * a.kM), 0.5)
    }()
  });
  g.bi.ZV = g.extend({}, g.bi.qF, {code: "EPSG:4326", Uf: g.zp.nW, UE: new g.LF(1 / 360, 0.5, -1 / 360, 0.25)});
  g.bi.WAa = g.extend({}, g.bi.qF, {Uf: g.zp.nW, UE: new g.LF(1, 0, 1, 0)});
  g.VJ = {
    lc: function (a, b) {
      a = g.a.Ja(a);
      return this.pj.ND(a, b || this.get("zoom"))
    }, Zh: function (a, b, c) {
      return this.pj.lE(a, b || this.get("zoom"), c)
    }, kta: function (a, b) {
      return this.lc(a, b)
    }, aEa: function (a, b) {
      return this.Zh(a, b)
    }, $p: function (a, b, c) {
      g.c.add(this, "containerToLngLat");
      var d = this.get("size").PE().kd(2);
      if (a.gb(d) && !c) return this.get("center");
      a = this.Cg(a, b, c);
      return this.Od(a)
    }, Ls: function (a, b) {
      g.c.add(this, "lngLatToContainer");
      var c = 0;
      b && (c = "string" === typeof b ? Math.round(parseFloat(b) / 0.14929107086948487) :
        b);
      var d = this.Ab(a);
      return this.Xd(d, null, c)
    }, Ab: function (a) {
      a = g.a.Ja(a);
      return this.lc(a, 20)
    }, Od: function (a) {
      return a ? this.Zh(a, 20) : a
    }, OJ: function (a) {
      a = g.a.Ja(a);
      return this.lc(a, 20).ab(g.a.dc)
    }, k6: function (a, b) {
      b || (a = g.a.Ja(a));
      var c = [], d = !1;
      void 0 === a[0].length && (d = !0);
      for (var c = [], e = 0, f = a.length; e < f; e += 1) if (d) {
        var h = this.lc(a[e], 20).ab(g.a.dc);
        c[e] = [h.x, h.y]
      } else c[e] = this.k6(a[e], !0);
      return c
    }, gqa: function (a) {
      return this.Zh(a.add(g.a.dc), 20)
    }, bEa: function (a) {
      return this.Xd(a.add(g.a.dc))
    }, jEa: function (a) {
      return a ?
        this.lc(this.get("center"), a) : this.get("centerPixel")
    }, EBa: function (a) {
      return (new g.H(a.x + 2.0037508342789244E7, 2.0037508342789244E7 - a.y)).kd(0.14929107086948487)
    }, s7: function (a) {
      return new g.H(0.14929107086948487 * a.x - 2.0037508342789244E7, 2.0037508342789244E7 - 0.14929107086948487 * a.y)
    }
  };
  B.OF = g.da.extend({
    ka: [g.va, g.$e],
    w: {center: new g.U(116.397128, 39.916527), zoom: 13, rotation: 0, crs: "EPSG3857"},
    A: function (a) {
      this.CLASS_NAME = "AMap.View2D";
      g.c.ya(this, a);
      a = a || {};
      a.center && (a.center = g.a.Ja(a.center));
      this.w = a
    }
  });
  B.Rb = g.da.extend({
    ka: [g.va, g.$e, g.VJ], w: {
      features: "all",
      showLabel: !0,
      dragEnable: !0,
      showIndoorMap: g.l.ba ? !1 : !0,
      lang: "zh_cn",
      keyboardEnable: !0,
      doubleClickZoom: !0,
      scrollWheel: !0,
      zoomEnable: !0,
      jogEnable: !0,
      continuousZoomEnable: !0,
      resizeEnable: !1,
      animateEnable: !0,
      rotateEnable: !1,
      labelzIndex: 99,
      showFog: !0,
      touchZoom: !0,
      zooms: [3, g.l.ba ? g.l.Kc ? 19 : 20 : 18],
      defaultCursor: "",
      limitBounds: null,
      logoUrl: "/amap/theme/v1.3/logo@1x.png",
      logoUrlRetina: "/amap/theme/v1.3/logo@2x.png",
      copyright: "\x3c!--v1.4.15--\x3e &copy " +
        (new Date).getFullYear() + " AutoNavi ",
      isHotspot: !g.l.ba,
      baseRender: g.l.P1,
      overlayRender: g.l.fva,
      mapStyle: "amap://styles/normal",
      showBuildingBlock: g.l.Sf,
      crs: "EPSG3857",
      rotation: 0,
      pitch: 0,
      yaw: 0,
      scale: 1,
      center: new g.U(116.397128, 39.916527),
      zoom: 13,
      detectRetina: !0,
      pitchEnable: !1,
      buildingAnimation: !1,
      maxPitch: 83,
      turboMode: !0,
      preloadMode: !1,
      workerMode: !0
    }, poiOnAMAP: function (a) {
      g.c.add(this, "poiOnAMAP");
      var b = {}, c = g.a.Ja(a.location);
      b.id = a.id;
      c && (b.y = c.Q, b.x = c.R);
      b.name = a.name;
      b.address = a.address;
      g.ci.nt(g.ci.s4(b))
    },
    detailOnAMAP: function (a) {
      g.c.add(this, "detailOnAMAP");
      var b = {}, c = g.a.Ja(a.location);
      b.id = a.id;
      c && (b.y = c.Q, b.x = c.R);
      b.name = a.name;
      g.ci.nt(g.ci.q4(b))
    }, setLabelzIndex: function (a) {
      g.c.add(this, "setLabelzIndex");
      return this.set("labelzIndex", a)
    }, getLabelzIndex: function () {
      return this.get("labelzIndex", null, !0)
    }, setVectorMapForeign: function (a) {
      if (g.l.Xp) {
        var b = this.X6(a);
        a = b[0];
        var c = b[1];
        this.set("name_field", c, !0);
        this.set("vectorMapForeign", a, !0);
        var d = this, b = [];
        a && (b.push("gridmap"), b.push("MVT", "vectorForeign"),
          b.push("labelcanvas"));
        g.sb.Jg(b, function () {
          d.o6(function () {
            d.map && (d.map.Hi = !0, d.map.GG && d.map.GG(), d.map.Te && d.map.Te instanceof g.Rb.DF && d.map.Te.ge && d.map.Te.ge.S && (d.map.Te.ge.S.gI(), d.map.Te.ge.S.I6 = c, d.map.Te.ge.S.reload()), d.set("display"))
          })
        })
      }
    }, setMapStyle: function (a) {
      g.c.add(this, "setMapStyle");
      a = a || "normal";
      -1 === a.indexOf("amap://styles/") ? g.r.hK[a] ? this.set("styleUrl", "amap://styles/" + g.r.hK[a]) : this.set("styleUrl", "") : this.set("styleUrl", a);
      this.aT()
    }, getMapStyle: function () {
      return this.get("styleUrl") ||
        this.get("mapStyle", null, !0)
    }, getFeatures: function () {
      return this.get("features", null, !0)
    }, setFeatures: function (a) {
      g.c.add(this, "setFeatures");
      this.set("features", a)
    }, setLang: function (a) {
      g.c.add(this, "setLang", a);
      "en" !== a && "zh_cn" !== a && "zh_en" !== a || a === this.get("lang", null, !0) || (this.set("lang", a), this.jk && this.jk.y8(this))
    }, getLang: function () {
      return this.get("lang", null, !0)
    }, setCity: function (a, b) {
      g.c.add(this, "setCity");
      var c = this;
      (new g.jb.yb(g.r.Zd + "/v3/config/district?subdistrict=0&extensions=all&key=" +
        g.r.key + "&s=rsv3&output=json&keywords=" + a, {callback: "callback"})).h("complete", function (d) {
        var e = d.districts;
        if (e && e.length) {
          d = e[0];
          /[^\w]+/.test(a) && (e = g.a.find(e, function (b) {
            return b.name === a
          })) && e !== d && (d = e);
          try {
            var f = d.center.split(","), h;
            switch (d.level) {
              case "city":
                h = 10;
                break;
              case "province":
                h = 7;
                break;
              case "district":
                h = 12;
                break;
              case "country":
                h = 4;
                break;
              default:
                h = 12
            }
            -1 !== d.name.indexOf("\u5e02") && (h = 10);
            c.D = !0;
            c.setZoomAndCenter(h, new g.U(f[0], f[1]), !0);
            c.D = !1;
            b && b.call(c, f, h)
          } catch (k) {
          }
        }
      }, this)
    },
    getScreenShot: function (a, b) {
      g.c.add(this, "getScreenShot");
      return this.map && g.l.kl ? this.map.C4(a, b) : ""
    }, getCity: function (a, b) {
      g.c.add(this, "getCity");
      var c = g.r.Zd + "/v3/geocode/regeo?&extensions=&&key=" + g.r.key + "&s=rsv3&output=json&location=" + (b || this.get("center", null, !0));
      (new g.jb.yb(c, {callback: "callback", gy: !0, Ed: "REGEO"})).h("complete", function (b) {
        b = b.regeocode.addressComponent;
        a({
          province: b.province,
          city: b.city instanceof Array ? "" : b.city,
          citycode: b.citycode instanceof Array ? "" : b.citycode,
          district: b.district instanceof
          Array ? "" : b.district
        })
      }, this)
    }, A: function (a, b) {
      b = g.extend({}, b);
      this.id = g.a.xb(this);
      this.CLASS_NAME = "AMap.Map";
      g.c.ya(this, b);
      this.D = !0;
      b = b || {};
      b.mapStyle && g.r.hK[b.mapStyle] && (b.mapStyle = "amap://styles/" + g.r.hK[b.mapStyle]);
      b.mapStyle && -1 !== b.mapStyle.indexOf("amap://styles/") ? (b.styleUrl = b.mapStyle, delete b.mapStyle) : b.styleUrl = "amap://styles/normal";
      b.bgColor && g.extend(g.r.De, b.bgColor);
      b.maxPitch && (b.maxPitch = Math.min(this.w.maxPitch, Math.max(b.maxPitch, 0)));
      b.pitch && (b.pitch = Math.min(b.maxPitch ||
        this.w.maxPitch, Math.max(b.pitch, 0)));
      "3D" !== b.viewMode && (b.pitch = 0);
      g.r.Vr = b.buildingColor || null;
      b.mobile && (g.l.ba = !0);
      b.noPoi && (g.r.rua = !0);
      b.editEnable = g.r.VQ ? b.editEnable : !1;
      b.editEnable && (b.nolimg = !0, b.showIndoorMap = !1);
      void 0 !== b.nolimg && (b.nolimg_param = b.nolimg);
      "3D" === b.viewMode && g.l.qp && void 0 === b.showBuildingBlock && !0 === b.showBuildingBlock;
      this.xq = !!b.enableSocket;
      b.server && (g.r.Zd = b.server);
      b.vdataUrl && (g.r.AL = b.vdataUrl);
      if ("string" === typeof a) {
        if (a = this.K = document.getElementById(a), !a) return
      } else "DIV" ===
      a.tagName && (this.K = a);
      if (this.K.___amap___) {
        var c = this.K.___amap___;
        c.D = !0;
        c.destroy();
        c.D = !1
      }
      g.Be.nf.start({id: this.id, K: this.K});
      this.K.___amap___ = this;
      var c = this.w.zooms[1], d = this.w.zooms[0];
      b.zooms ? (b.zooms[0] = Math.max(d, b.zooms[0]), !0 === b.expandZoomRange && (c = g.l.ba ? g.l.Kc ? 19 : 20 : 20), b.zooms[1] = Math.min(c, b.zooms[1])) : b.zooms = [d, c];
      b.forceZooms && (b.zooms = b.forceZooms);
      b = this.fna(b);
      c = this.getSize(!0);
      b.center && (b.center = g.a.Ja(b.center));
      this.pj = this.noa(b.crs || this.w.crs, b.center || this.w.center);
      this.lma(c, b);
      d = b.lang;
      "en" !== d && "zh_cn" !== d && "zh_en" !== d && (b.lang = "zh_cn");
      g.g.tg || (b.rotation = 0, b.pitch = 0, b.rotateEnable = !1);
      b.preloadMode = !1;
      g.l.JS ? !1 !== b.workerMode && (B.Rb.Pt ? (b.workerMode = !1, B.Rb.Pt++) : B.Rb.Pt = 1) : b.workerMode = !1;
      b.layers && (d = b.layers, delete b.layers, b.layers = d);
      b.baseRender = b.baseRender || g.l.P1;
      b.forceVector && (b.baseRender = g.l.Sf ? "vw" : "v");
      b.disableVector && (b.baseRender = "d");
      "dom" === b.renderer && (b.baseRender = "d", b.overlayRender = "d");
      c = Math.max(c.width, c.height);
      g.l.ja && (c *= Math.min(2,
        window.devicePixelRatio || 1));
      "vw" === b.baseRender && c > g.l.Qta && (b.baseRender = "dv");
      c = b.vectorMapForeign;
      "d" == b.baseRender && c && (b.vectorMapForeign = !1);
      c && !g.l.Xp && (b.vectorMapForeign = !1);
      c = this.X6(b.vectorMapForeign);
      b.vectorMapForeign = c[0];
      b.name_field = c[1];
      b.turboMode = !1;
      g.a.tb(this, b);
      this.kf(this.w);
      "rotateEnable" in b || "3D" !== b.viewMode || !g.l.qp || this.set("rotateEnable", !0);
      "pitchEnable" in b || "3D" !== b.viewMode || !g.l.qp || this.set("pitchEnable", !0);
      c = this.get("zoom", null, !0);
      "3D" === this.get("viewMode") &&
      g.l.qp || (c = Math.round(c));
      d = this.get("zooms");
      c > d[1] ? c = d[1] : c < d[0] && (c = d[0]);
      this.set("zoom", c);
      this.w.zoom = c;
      this.poa(this.w);
      this.hQ();
      var e = this;
      this.kf({overlays: [], infos: {}, controls: {}});
      var f = [];
      b.vectorMapForeign && f.push("gridmap");
      b.vectorMapForeign && g.l.Xp && f.push("MVT", "vectorForeign");
      b.forceVector && (f.push("vectorlayer"), f.push("overlay"));
      "3D" === b.viewMode && g.l.qp && f.push("Map3D");
      g.l.kl && (b.vectorMapForeign || b.mapStyle || b.nolimg) && f.push("labelcanvas");
      b.editEnable && f.push("edit");
      g.l.kl &&
      (f.push("AMap.IndoorMap"), -1 !== f.indexOf("Map3D") && f.push("AMap.IndoorMap3D"));
      this.ja = g.l.ja && this.get("detectRetina");
      this.s$(b);
      this.D = !1;
      e = this;
      this.Bta(function () {
        e.o6(function () {
          g.sb.Jg(f, function () {
            if (!e.get("destroy")) {
              var b = new g.Rb(a, e);
              if (g.Ve) {
                var c = (g.Ve[0] || g.Ve).stylemaps["50001:1"].browserStyle[0].split("&");
                b.WF = [c[0], c[4]]
              }
              b.bf("zoom center centerCoords rotation yaw pitch resolution".split(" "), e.view, !0);
              b.h("complete", function () {
                var a = {};
                b.J && "3D" == b.J.type && (a.canvas = b.J.xa, a.gl =
                  b.J.ca);
                this.q("complete", a)
              }, e, !0);
              b.pj = e.pj;
              e.bf(["zoomSlow", "panTo", "targetLevel", "render"], b);
              b.bf(["size", "bounds"], e);
              e.loaded = !0;
              e.q("coreMapCreated");
              g.l.kl && e.Nla();
              e.D = !0;
              "3D" === e.view.type && (e.AmbientLight || (e.AmbientLight = new g.Sw.NV([1, 1, 1], 0.9)), e.DirectionLight || (e.DirectionLight = new g.Sw.XV([0, -1, 1], [1, 1, 1], 0.1)));
              e.D = !1
            }
          })
        })
      })
    }, X6: function (a) {
      if (a) {
        if ("string" == typeof a && "style_" === a.substr(0, 6)) return [a];
        switch (a) {
          case !0:
          case "Chinese_Simplified":
            return ["style_zh_cn"];
          case "English":
            return ["style_en"];
          case "Local":
            return ["style_local"];
          case "Chinese_Traditional":
            return ["style_en", ["coalesce", "{name_zh-Hant}", "{name}"]];
          default:
            return ["style_zh_cn"]
        }
      } else return [!1]
    }, o6: function (a) {
      try {
        var b = this.get("vectorMapForeign");
        if (b) if (g.TJ = 0, g.SJ = 0, "string" == typeof b && "style_" == b.substr(0, 6)) {
          var c = this, d, e = b.slice(6);
          32 == e.length ? (c.js = !0, g.r.Xpa = g.r.VI + "style_local/", d = "/amap/restapi/v4/sdk/map/styles?styleid=" + e + "&key=" + g.r.key + "&sdkType=abroad_js_json&s=rsv3", d += "&platform=JS&logversion=2.0",
            d += "&appname=" + g.r.Up, d += "&csid=" + g.a.fF(), d += "&sdkversion=" + g.r.nn) : (c.js = !1, g.r.Xpa = g.r.VI + b + "/", d = g.r.Fb + "/styles/foreign/web_v8_" + b + ".json");
          var f = new g.jb.XMLHttpRequest(d, {oU: "application/json", responseType: "json"});
          f.h("complete", function (b) {
            if (b && b.data && !b.data.IDa) {
              if (b.data.style) b = b.data; else if ("string" === typeof b.data) b = JSON.parse(b.data); else {
                c.set("vectorMapForeign", !1);
                c.js = !1;
                a();
                return
              }
              var d = b.hole;
              if (d) {
                g.oy = [];
                for (var e = 0, f = d.length; e < f - 1; e += 2) {
                  var h = c.lc([d[e + 1], d[e]], 16);
                  g.oy.push([h.x >>
                  0, h.y >> 0])
                }
              }
              (d = b.style) && d.layers && (g.Jta = d.layers, b.zoomlevel && (g.TJ = b.zoomlevel[0], g.SJ = b.zoomlevel[1]))
            } else c.js = !1, c.set("vectorMapForeign", !1);
            a()
          }, this);
          f.h("error", function () {
            c.js = !1;
            c.set("vectorMapForeign", !1);
            a()
          }, this)
        } else this.js = !1, this.set("vectorMapForeign", !1), a(); else this.js = !1, this.set("vectorMapForeign", !1), a()
      } catch (h) {
        this.js = !1, this.set("vectorMapForeign", !1), a()
      }
    }, Bta: function (a) {
      function b() {
        var a = AMap.anole, b = {}, c = [], d = 0, e = void 0;
        if (a) {
          for (var a = a.replace(/\?/g, ":").replace(/\//g,
            "&"), e = a.split(""), a = 0, f = e.length; a < f; a++) void 0 === b[e[a]] && (b[e[a]] = d++, c.push(e[a]));
          c.reverse();
          d = 0;
          for (a = e.length; d < a; d++) e[d] = c[b[e[d]]];
          a = e.join("");
          g.Ve = eval(a);
          delete AMap.anole
        }
      }

      if (g.l.Ie || g.Ve) a(); else {
        var c = !0;
        if (window.__AMapStyleSource) c = !1; else try {
          var d = JSON.parse(localStorage.getItem("_AMap_anole"));
          d && d.version === g.l.mf && d.script && 100 < d.script.length ? eval(d.script) : c = !1
        } catch (e) {
          c = !1
        }
        if (c) b(), a(); else {
          var f = document.createElement("script");
          f.mDa = "anonymous";
          f.id = "amap_anole_js";
          f.src =
            window.__AMapStyleSource || "/amap/vdata/style?v=" + g.r.nn + "&key=" + g.r.key + "&mapstyle=normal";
          c = document;
          (c.head || c.getElementsByTagName("head")[0] || c.body).appendChild(f);
          f.onload = function () {
            if (!g.Ve) {
              if (AMap.anole && !window.__AMapStyleSource && g.l.Gv) try {
                var c = {version: g.l.mf, script: "AMap['anole']=" + JSON.stringify(AMap.anole)};
                localStorage.setItem("_AMap_anole", JSON.stringify(c))
              } catch (d) {
              }
              b()
            }
            a();
            f.parentNode.removeChild(f)
          }
        }
      }
    }, getViewMode_: function () {
      return this.view.type
    }, mqa: function (a,
                      b, c) {
      var d = new g.U(a[4], a[5]);
      if ((a = new g.ne(a[0], a[1], a[2], a[3])) && b && d) {
        for (var e = c[1]; e > c[0]; e -= 1) {
          var f = this.lc(a.xc, e), h = this.lc(a.oc, e);
          if (Math.abs(h.x - f.x) < b.width && Math.abs(f.y - h.y) < b.height) break
        }
        return [d, Math.min(e + 1, c[1])]
      }
      return null
    }, lma: function (a, b) {
      if (!(b && b.center && b.zoom)) {
        var c = this.mqa(g.r.Rd, a, b.zooms);
        b.center = b.center || c && c[0];
        "number" !== typeof b.zoom && (b.zoom = c && c[1])
      }
    }, noa: function (a, b) {
      if (b instanceof g.U) {
        if ("string" === typeof a) {
          switch (a) {
            case "EPSG3395":
              return g.bi.YV;
            case "EPSG4326":
              return g.bi.ZV
          }
          return g.bi.NL
        }
        if (a.pointToLngLat && a.lngLatToPoint) return {lE: a.pointToLngLat, ND: a.lngLatToPoint, oq: a.getResolution};
        throw"illegal projection";
      }
      var c = this.get("zoom", null, !0);
      return {
        oq: function (a) {
          return Math.pow(2, c - a)
        }, ND: function () {
        }, lE: function () {
        }
      }
    }, Ixa: function (a, b) {
      this.ax && this.ax.stop();
      var c = ["pitch", "rotation", "zoom", "center"], d = {}, e = !1, f;
      for (f in a) if (a.hasOwnProperty(f) && -1 !== g.a.indexOf(c, f)) {
        var h = this.get(f);
        void 0 === h || h === a[f] || h.gb && h.gb(a[f]) || (d[f] =
          this.get(f), e = !0)
      }
      e && (this.ax = new g.Nj(d, a, null, 0), this.ax.transition = function (a, c, e) {
        e /= b || 300;
        if (1 <= e) return c;
        var f = {}, h;
        for (h in d) d.hasOwnProperty(h) && (f[h] = "center" === h ? a[h].add(c[h].ab(a[h]).Nd(e)) : a[h] + (c[h] - a[h]) * e);
        return f
      }, this.ax.Kq = function (b) {
        b === a && (this.ax.stop(), this.Fd = null);
        for (var c in b) b.hasOwnProperty(c) && ("center" === c ? (this.D = !0, this.setCenter(b[c], !0), this.D = !1) : this.set(c, b[c]))
      }, this.ax.Pn(this))
    }, poa: function (a) {
      "3D" === this.get("viewMode") && g.l.qp ? (this.set("baseRender",
        "vw"), this.view = new g.uM(this, a)) : this.view = new g.OF(this, a);
      this.m5()
    }, m5: function () {
      this.Ei = "d" < this.get("baseRender") || "3D" === this.view.type
    }, featuresChanged: function () {
      this.hQ()
    }, aT: function () {
      this.hQ();
      this.JU()
    }, JU: function () {
      if (this.tm) {
        var a = !0;
        this.D = !0;
        var b = this.getMapStyle();
        if (!1 === this.get("showIndoorMap") || "normal" !== b && "amap://styles/normal" !== b) a = !1;
        for (var b = this.getLayers(), c = this.D = !1, d = 0, e = b.length; d < e; d += 1) {
          if (b.hasOwnProperty(d) && "AMap.IndoorMap" === b[d].CLASS_NAME && b[d] !== this.tm) {
            a =
              !1;
            break
          }
          b[d].wq && b[d].wq() && b[d].get("visible") && (c = !0)
        }
        (a = c && a) && this.tm.getMap() !== this && this.tm.setMap(this);
        this.tm.set("visible", a)
      }
    }, hQ: function () {
      this.s$();
      if (this.view && "3D" !== this.view.type) {
        var a = this.get("baseRender");
        if (a && !("dv" < a)) {
          var b = this.get("features", null, !0);
          this.D = !0;
          var c = this.getMapStyle();
          this.D = !1;
          var d = this.get("editEnable");
          b && c && (g.l.Xp && (d || "all" !== b || "normal" !== c && "amap://styles/normal" !== c) ? (this.set("baseRender", "v"), this.vT = a) : this.vT && (this.set("baseRender", this.vT),
            this.vT = null));
          this.m5()
        }
      }
    }, Nla: function () {
      var a = this;
      !a.tm && a.K && (a.indoorMap = a.tm = new AMap.IndoorMap({innerLayer: !0}), a.JU(), g.a.Yc(function () {
        a.q("indoor_create", {target: a});
        a.set("display")
      }))
    }, layersChanged: function () {
      this.D = !0;
      var a = this.getLayers();
      this.bK = this.D = !1;
      for (var b = 0; b < a.length; b += 1) a[b].D = !0, a[b].getMap() !== this && a[b].setMap(this), a[b].D = !1, a[b].bK && (this.bK = !0);
      this.JU()
    }, getMapNumber: function () {
      if (this.map) return this.map.sE()
    }, getAdcode: function () {
      g.c.add(this, "getAdcode");
      return g.r.Lla
    },
    s$: function () {
      function a() {
        var a = !1;
        g.a.Tb(b.w.layers, function (b) {
          if (b.HG && b.constructor === B.o.qb) return a = !0, !1
        }, b);
        if (g.a.ka(["d", "dv"], b.get("baseRender")) || !g.a.ka(["normal", "amap://styles/normal"], b.get("mapStyle")) || "3D" === b.get("viewMode") && 0 < b.get("pitch") || "all" !== b.get("features") || b.get("editEnable") || !b.get("turboMode")) a = !1;
        return a
      }

      if (!this.c8) {
        var b = this, c = a(), d = this.get("rasterLayer");
        if (d && !c) this.wk(d), this.set("rasterLayer", void 0); else if (!d && c && this.get("layers")) {
          d = new B.o.qb({
            innerLayer: !0,
            map: this, vk: !0, zIndex: 0
          });
          d.Dsa = !0;
          if (this.w.layers) {
            var e = null;
            g.a.Tb(this.w.layers, function (a) {
              a instanceof B.o.qb && a.HG && (null === e || a.get("zIndex") > e.get("zIndex")) && (e = a)
            });
            e && d.bf(["zIndex", "opacity", "zooms", "visible"], e)
          }
          this.set("rasterLayer", d, !0)
        }
      }
    }, fna: function (a) {
      a || (a = {});
      if (a.hasOwnProperty("defaultLayer")) {
        a.layers = [a.defaultLayer];
        var b = a.defaultLayer;
        b.LP = !0;
        this.set("defaultLayer", b, !0)
      }
      a.layers && 0 !== a.layers.length ? this.set("defaultLayer", a.layers[0], !0) : (b = new B.o.qb({innerLayer: !0}),
        a.layers = [b], b.LP = !0, this.set("defaultLayer", b, !0));
      if (b = a.view) b.w.rotation && (a.rotation = b.w.rotation), b.w.center && (a.center = b.w.center), b.w.zoom && (a.zoom = Math.max(a.zooms[0], Math.min(a.zooms[1], b.w.zoom))), b.w.crs && (a.crs = b.w.crs);
      a.level && !a.zoom && (a.zoom = a.level);
      return a
    }, setLimitBounds: function (a) {
      g.c.add(this, "setLimitBounds");
      a instanceof g.tp && (a.D = !0, a = a.toBounds(), a.D = !1);
      a instanceof g.ne || (a = null);
      this.set("limitBounds", a)
    }, clearLimitBounds: function () {
      g.c.add(this, "clearLimitBounds");
      this.set("limitBounds", null)
    }, getLimitBounds: function () {
      g.c.add(this, "getLimitBounds");
      return this.get("limitBounds", null, !0)
    }, SH: function (a) {
      var b = this.get("layers");
      if (!(0 <= g.a.indexOf(b, a)) && (b.push(a), this.set("layers", b), a.xB)) {
        a = a.getLayers();
        for (var b = -1, c = a.length; ++b < c;) {
          var d = a[b];
          d instanceof B.o.Yb || !d.setMap || d.setMap(this)
        }
      }
    }, tC: function (a) {
      var b = this.get("overlays");
      0 <= g.a.indexOf(b, a) || (a instanceof B.C.Vn ? (this.get("overlays").push(a), this.ry instanceof B.C.Vn && (this.ry.D = !0, this.ry.close(),
        this.ry.D = !1), this.ry = a, this.set("contextmenu", a, !0)) : (a instanceof B.C.Ze && (this.um instanceof B.C.Ze && this.Kz(this.um), this.um = a), this.get("overlays").push(a)), this.q("overlays"))
    }, wk: function (a) {
      var b = this.get("layers"), c = g.a.indexOf(b, a);
      if (-1 !== c) {
        if (a.xB) for (c = b.length; -1 < --c;) {
          var d = b[c];
          d.ZA !== a && d !== a || b.splice(c, 1)
        } else a.ZA && a.ZA.Rka(a), b = g.a.Ho(b, c);
        this.set("layers", b);
        if (a.xB) for (a = a.getLayers(), b = -1, c = a.length; ++b < c;) d = a[b], d instanceof B.o.Yb || !d.setMap || d.setMap()
      }
    }, getZooms: function () {
      return this.get("zooms",
        null, !0)
    }, setZooms: function (a) {
      return this.set("zooms", a, !0)
    }, Kz: function (a) {
      var b = this.get("overlays");
      this.set("overlays", g.a.Ho(b, g.a.indexOf(b, a)))
    }, getTileCoordByLngLat: function (a, b, c) {
      b = b || 256;
      this.D = !0;
      c = c || Math.round(this.getZoom());
      this.D = !1;
      a = this.lc(a, c);
      c = new g.pr(c, Math.floor(a.x / b), Math.floor(a.y / b));
      c.bD = a.x % b;
      c.cD = a.y % b;
      return c
    }, setZoom: function (a, b) {
      g.c.add(this, "setZoom");
      a = this.hD(a);
      var c = this.get("zooms");
      a > c[1] && (a = c[1]);
      a < c[0] && (a = c[0]);
      this.get("zoomEnable") && (b || !this.loaded ?
        (this.set("zoom", a), this.q("zoomstart"), this.q("zoomchange"), this.q("zoomend")) : this.set("zoomSlow", a))
    }, getZoom: function (a) {
      g.c.add(this, "getZoom");
      return a ? this.get("zoom", null, !0) : this.hD(this.get("targetLevel") || this.get("zoom", null, !0))
    }, getCenter: function () {
      g.c.add(this, "getCenter");
      return this.get("center", null, !0)
    }, setCenter: function (a, b) {
      g.c.add(this, "setCenter");
      a = g.a.Ja(a);
      b || !this.loaded ? (this.q("movestart"), this.set("center", a), this.q("mapmove"), this.map ? this.map.q("moveend") : this.q("moveend")) :
        (this.D = !0, this.panTo(a), this.D = !1)
    }, getCoordsBound: function () {
      return this.view.lm()
    }, getCoordsBoundByZoom: function (a) {
      return this.view.jqa(a)
    }, setRotation: function () {
      var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
      g.c.add(this, "setRotation");
      !g.l.Ie && this.get("rotateEnable") && this.set("rotation", a)
    }, getRotation: function () {
      g.c.add(this, "getRotation");
      return this.get("rotation")
    }, setPitch: function (a) {
      g.c.add(this, "setPitch");
      a = Math.min(this.get("maxPitch"), Math.max(a, 0));
      "3D" === this.view.type &&
      this.get("pitchEnable") && this.set("pitch", a)
    }, getPitch: function () {
      g.c.add(this, "getRotation");
      return "3D" === this.view.type ? this.get("pitch") : 0
    }, getStatus: function () {
      g.c.add(this, "getStatus");
      for (var a = "isHotspot pitchEnable dragEnable zoomEnable keyboardEnable jogEnable doubleClickZoom scrollWheel resizeEnable touchZoom rotateEnable animateEnable".split(" "), b = {}, c = 0; c < a.length; c += 1) b[a[c]] = this.get(a[c], null, !0);
      return b
    }, setStatus: function (a) {
      g.c.add(this, "setStatus");
      for (var b in a) a.hasOwnProperty(b) &&
      -1 !== "isHotspot,pitchEnable,dragEnable,keyboardEnable,doubleClickZoom,scrollWheel,zoomEnable,jogEnable,continuousZoomEnable,resizeEnable,animateEnable,rotateEnable,touchZoom".indexOf(b) && this.set(b, a[b])
    }, getResolution: function (a, b) {
      g.c.add(this, "getResolution");
      var c = (a = g.a.Ja(a)) ? a.Q : this.get("center", null, !0).Q;
      return this.pj.oq(b || this.get("zoom")) * Math.cos(c * Math.PI / 180)
    }, getScale: function (a) {
      g.c.add(this, "getScale");
      this.D = !0;
      a = this.getResolution() * (a || 96) / 0.0254;
      this.D = !1;
      return a
    }, getDefaultCursor: function () {
      g.c.add(this,
        "getDefaultCursor");
      return this.get("defaultCursor", null, !0) || "url(" + g.r.Fb + "/theme/v1.3/openhand.cur),default"
    }, setDefaultCursor: function (a) {
      g.c.add(this, "setDefaultCursor");
      return this.set("defaultCursor", a, !0)
    }, zoomIn: function (a) {
      g.c.add(this, "zoomIn");
      this.D = !0;
      this.setZoom(this.getZoom() + 1, a);
      this.D = !1
    }, zoomOut: function (a) {
      g.c.add(this, "zoomOut");
      this.D = !0;
      this.setZoom(this.getZoom() - 1, a);
      this.D = !1
    }, hD: function (a) {
      return this.view && "3D" === this.view.type ? g.a.vb(a, 4) : Math.round(a)
    }, setZoomAndCenter: function (a,
                                   b, c) {
      g.c.add(this, "setZoomAndCenter");
      b = g.a.Ja(b);
      a = this.hD(a);
      var d = this.get("zooms");
      a > d[1] && (a = d[1]);
      a < d[0] && (a = d[0]);
      this.D = !0;
      this.loaded ? this.set("zoomAndCenter", [a, b, c]) : (this.setZoom(a, !0), this.setCenter(b, !0));
      this.D = !1
    }, clearMap: function () {
      g.c.add(this, "clearMap");
      for (var a = this.get("overlays"), b = 0; b < a.length; b += 1) a[b].set("map", null, !0);
      this.set("overlays", []);
      if (this.map && this.map.la) for (a = this.map.la, b = a.length - 1; 0 <= b; b -= 1) if (a[b].S instanceof B.o.RL) {
        var c = a[b].S;
        c.D = !0;
        c.setMap(null);
        c.D = !1
      }
    }, destroy: function () {
      g.c.add(this, "destroy");
      this.tm && (this.tm.setMap(), this.indoorMap = this.tm = null);
      this.set("overlays", []);
      this.set("defaultLayer", null);
      this.set("layers", []);
      var a = this.get("controls");
      a.remove = [];
      for (var b in a.Ld) a.Ld.hasOwnProperty(b) && a.remove.push(a.Ld[b]);
      a.Ld = [];
      a.add = [];
      this.set("controls", a);
      this.set("destroy", !0);
      this.La = !1;
      this.Al();
      this.w = this.K = null;
      this.Hc && this.Hc.Al();
      this.Hc = null;
      this.view && this.view.Al();
      this.view = null;
      this.wi();
      B.Rb.Pt--
    }, addControl: function (a) {
      g.c.add(this,
        "addControl");
      var b = g.a.xb(a), c = this.get("controls") || {};
      c.Ld = c.Ld || {};
      c.Ld[b] || (c.Ld[b] = a);
      c.add = c.add || [];
      c.add.push(a);
      this.set("controls", c)
    }, removeControl: function (a) {
      g.c.add(this, "removeControl");
      var b = g.a.xb(a), c = this.get("controls") || {};
      c.Ld = c.Ld || {};
      c.Ld[b] && delete c.Ld[b];
      c.remove = c.remove || [];
      c.remove.push(a);
      this.set("controls", c)
    }, clearControl: function () {
      g.c.add(this, "clearControl");
      var a = this.get("controls") || {};
      a.remove = a.remove || [];
      a.Ld = a.Ld || {};
      for (var b in a.Ld) a.Ld.hasOwnProperty(b) &&
      (a.remove.push(a.Ld[b]), delete a.Ld[b]);
      this.set("controls", a)
    }, plugin: function (a, b) {
      g.c.add(this, "plugin");
      "string" === typeof a && (a = [a]);
      for (var c = [], d = 0; d < a.length; d += 1) {
        var e = a[d].split(".");
        2 < e.length || (2 == e.length ? "AMap" === e[0] && (window.AMap[e[1]] || c.push(a[d])) : c.push(a[d]))
      }
      if (0 === c.length) return b(), this;
      g.sb.Jg(c, b);
      return this
    }, clearInfoWindow: function () {
      g.c.add(this, "clearInfoWindow");
      var a = this.get("overlays");
      a && 0 !== a.length && this.um && (this.um.D = !0, this.um.close(), this.um.D = !1)
    }, remove: function (a) {
      g.c.add(this,
        "remove");
      a instanceof Array || (a = [a]);
      for (var b = 0; b < a.length; b += 1) {
        var c = a[b];
        c.D = !0;
        c.getMap && c.getMap() === this && (c.close ? c.close() : c.setMap && c.setMap(null));
        c.D = !1
      }
    }, add: function (a) {
      g.c.add(this, "add");
      a instanceof Array || (a = [a]);
      for (var b = 0; b < a.length; b += 1) {
        var c = a[b];
        c.D = !0;
        if (c.getMap && c.getMap() !== this) if (c.open) continue; else c.setMap && c.setMap(this);
        c.D = !1
      }
    }, getAllOverlays: function (a, b) {
      g.c.add(this, "getAllOverlays");
      var c = this.get("overlays");
      if (a) {
        for (var d = "amap." + a.toLowerCase(), e = [], f =
          0; f < c.length; f += 1) d !== c[f].CLASS_NAME.toLowerCase() || !b && (c[f].Ca || c[f].isOfficial) || e.push(c[f]);
        return e
      }
      if (!b) {
        e = [];
        for (f = 0; f < c.length; f += 1) c[f].Ca || c[f].isOfficial || e.push(c[f]);
        c = e
      }
      d = this.get("layers");
      e = [];
      if (d) for (var f = 0, h = d.length; f < h; f += 1) d[f] instanceof B.o.RL && e.push(d[f]), d[f].kb && (e = e.concat(d[f].kb));
      return c.concat(e)
    }, triggerResize: function () {
      this.map && this.map.aP()
    }, refreshSize: function () {
      this.fG = this.U3()
    }, U3: function () {
      return g.g.Q3(this.K)
    }, getSize: function () {
      g.c.add(this, "getSize");
      (!this.fG || 10 > this.fG.width * this.fG.height) && this.refreshSize();
      return this.fG
    }, getContainer: function () {
      g.c.add(this, "getContainer");
      return this.K
    }, panTo: function (a) {
      g.c.add(this, "panTo");
      a = g.a.Ja(a);
      this.loaded ? this.set("panTo", a) : (this.D = !0, this.setCenter(a), this.D = !1)
    }, panBy: function (a, b, c) {
      g.c.add(this, "panBy");
      this.D = !0;
      var d = this.get("rotation") * Math.PI / 180, e = a * Math.cos(d) + Math.sin(d) * b;
      a = -Math.sin(d) * a + Math.cos(d) * b;
      b = this.loaded && this.map && this.map.Fd ? this.map.Fd.D9 : this.get("centerCoords");
      d = Math.pow(2, 20 - this.getZoom());
      e = b.add(new g.H(-e * d, -a * d));
      e = this.Od(e);
      !this.loaded || c ? this.setCenter(e, c) : this.set("panTo", e);
      this.D = !1
    }, setFitView: function (a, b, c, d) {
      g.c.add(this, "setFitView");
      this.D = !0;
      var e = this.get("size"), f = e.height;
      if (!e.width || !f) return !0;
      if (a = this.o4(a)) {
        if (c = this.eJ(a, 0, new g.H(40, 40), c, d)) b = b || !this.getBounds().contains(a.Ai()) || g.l.ba && 1 < Math.abs(c[0] + this.get("zoom", null, !0)), this.setZoomAndCenter(c[0], c[1], b);
        this.D = !1;
        return a
      }
    }, o4: function (a) {
      if (a) if (a instanceof
        B.C.Hh) a = [a]; else {
        if (!(a instanceof Array)) return null
      } else this.D = !0, a = this.getAllOverlays(), this.D = !1;
      if (a) {
        for (var b, c = 0; c < a.length; c += 1) {
          var d = a[c];
          if (d.get("visible") && !(d instanceof B.C.Ze || d instanceof B.C.Vn)) {
            d.D = !0;
            var e = d.getBounds();
            d.D = !1;
            e && (b = b ? b.oza(e) : e.cb())
          }
        }
        return b
      }
    }, getBounds: function (a) {
      g.c.add(this, "getBounds");
      var b = this.view.Kd();
      return a && b.toBounds ? (b.D = !0, a = b.toBounds(), b.D = !1, a) : b
    }, setBounds: function (a, b, c, d, e, f) {
      g.c.add(this, "setBounds");
      c = this.eJ(a, b, c, e, f);
      d = d || g.l.ba &&
        1 < Math.abs(c[0] + b - this.get("zoom", null, !0));
      this.D = !0;
      this.setZoomAndCenter(c[0], c[1], d);
      this.D = !1;
      return a
    }, a4: function (a, b, c, d, e) {
      a = this.o4(a);
      return this.eJ(a, b, c, d, e)
    }, getCoordsBoundByZoomIn3D: function (a) {
      this.XH || (this.XH = new g.uM);
      this.D = !0;
      var b = this.getRotation(), c = this.getPitch(), d = this.getSize(!0).cb();
      this.D = !1;
      a = {size: d, zoom: a, rotation: b, pitch: c, centerCoords: this.get("centerCoords")};
      this.XH.kf(a, !0);
      this.XH.jr();
      return this.XH.lm()
    }, eJ: function (a, b, c, d, e) {
      b = b ? Number(b) : 0;
      this.D = !0;
      var f =
        this.getRotation(), h = this.getPitch(), k = this.getSize(!0).cb(), l = this.view.type;
      this.D = !1;
      var m = a.sR(this);
      a = a.vR(this);
      this.xC || (this.xC = "3D" === l ? new g.uM : new g.OF);
      this.xC.kf({size: k, zoom: 3, rotation: f, pitch: h, centerCoords: m}, !0);
      var n = h = 0;
      d ? (n = d[0], c = d[1], h = d[2], d = d[3], k.width -= h + d, k.height -= n + c, h = (h - d) / 2, n = (n - c) / 2) : c && (k.width -= 2 * c.x, k.height -= 2 * c.y);
      e = e || (g.l.ba ? 17 : 18);
      c = this.get("zooms");
      d = c[0];
      var p = Infinity, q = Infinity;
      do {
        this.xC.kf({zoom: d}, !0);
        "3D" === l && this.xC.jr();
        for (var q = p = Infinity, r = -Infinity,
               s = -Infinity, u = 0; u < a.length; u += 1) var v = this.xC.Xd(a[u]), p = Math.min(p, v.x), r = Math.max(r, v.x), q = Math.min(q, v.y), s = Math.max(s, v.y);
        p = r - p;
        q = s - q;
        if (p > k.width || q > k.height) {
          d -= 1;
          break
        }
        d += 1
      } while (d <= c[1]);
      d = Math.min(c[1], e, Math.max(c[0], d + b));
      d = Math.floor(d);
      b = Math.pow(2, 20 - d);
      e = f * Math.PI / 180;
      f = h * Math.cos(e) + Math.sin(e) * n;
      e = -Math.sin(e) * h + Math.cos(e) * n;
      m = m.ab(new g.H(f * b, e * b));
      m = this.Zh(m, 20);
      return [d, m]
    }, setLayers: function (a) {
      g.c.add(this, "setLayers");
      for (var b = 0; b < a.length; b += 1) a[b].set("map", this, !0);
      this.set("layers",
        a)
    }, getLayers: function () {
      g.c.add(this, "getLayers");
      var a = this.get("layers", null, !0), a = a.slice();
      if (this.D) {
        for (var b = [], c = -1, d = a.length; ++c < d;) {
          var e = a[c];
          if (e.xB) for (var e = e.getLayers(), f = -1, h = e.length; ++f < h;) {
            var k = e[f];
            k instanceof B.o.Yb && -1 === g.a.indexOf(a, k) && b.push(k)
          }
        }
        a = a.concat(b)
      } else for (b = a.length; -1 < --b;) a[b].ZA && a.splice(b, 1);
      return a
    }, getDefaultLayer: function () {
      g.c.add(this, "getDefaultLayer");
      return this.get("defaultLayer", null, !0)
    }, setDefaultLayer: function (a) {
      if (a) {
        g.c.add(this, "setDefaultLayer");
        this.D = !0;
        a.LP = !0;
        var b = this.get("defaultLayer"), c = this.get("layers");
        if (b) {
          if (a === b) {
            a.setMap(this);
            return
          }
          b.LP = !1;
          c = g.a.Ho(c, g.a.indexOf(c, b))
        }
        this.set("defaultLayer", a, !0);
        a.D = !0;
        -1 === g.a.indexOf(c, a) && c.push(a);
        a.D = !1;
        this.setLayers(c);
        this.D = !1
      }
    }, pixelToLngLat: function (a, b) {
      g.c.add(this, "pixelToLngLat");
      return this.Zh(a, b)
    }, lnglatToPixel: function (a, b) {
      g.c.add(this, "lnglatToPixel");
      return this.lc(a, b)
    }, drawPolyline: function (a) {
      g.c.add(this, "drawPolyline");
      this.set("draw", "polyline");
      this.set("drawStyle",
        a || {strokeColor: "#006600", ob: 0.9})
    }, render: function (a) {
      g.c.add(this, "render");
      this.map && this.map.set("display", a ? 1 : 0)
    }, setMask: function (a) {
      g.c.add(this, "setMask");
      this.set("mask", a);
      this.map && (this.map.YJ = !0, this.map.set("display"))
    }, drawPolygon: function (a) {
      g.c.add(this, "drawPolygon");
      this.set("draw", "polygon");
      this.set("drawStyle", a || {strokeColor: "#006600", ob: 0.9, fillColor: "#FFAA00", ke: 0.9})
    }, drawCircle: function (a) {
      g.c.add(this, "drawCircle");
      this.set("draw", "circle");
      this.set("drawStyle", a || {
        strokeColor: "#006600",
        ob: 0.9, fillColor: "#006600", ke: 0.9
      })
    }, sD: function () {
      return this.view.sD()
    }, getCameraState: function () {
      g.c.add(this, "getCameraState");
      if (this.view && "3D" == this.view.type) return this.view.P3()
    }, endDraw: function () {
      this.set("draw", null)
    }, isGoogleTileVisible: function () {
      return this.map.isForeignMapVisible()
    }, isForeignMapVisible: function () {
      if (this.get("gridForeignMap") || this.get("vectorForeignMap")) return this.map && this.map.vga()
    }, Xd: function (a, b, c) {
      g.c.add(this, "p20ToContainer");
      return this.view.Xd(a, b, c)
    },
    Cg: function (a, b, c) {
      g.c.add(this, "containerToP20");
      return this.view.Cg(a, b, c)
    }, getObject3DByContainerPos: function (a, b, c) {
      g.c.add(this, "getObject3DByContainerPos");
      if ("2D" === this.view.type || !this.map || !this.map.J) return null;
      this.D = !0;
      this.view.Cg(a);
      var d = this.view.T3(a), e = this.map.J.OT, f = this.view.cc, h = this.get("zoom", null, !0),
        h = Math.pow(2, 20 - h);
      b = b || this.getLayers();
      this.D = !1;
      for (var k = [], l = 0; l < b.length; l += 1) {
        var m = b[l];
        m instanceof B.o.Pm && (m = m.lp(e, d, f, h, a)) && k.push(m)
      }
      return c ? k : k.length ? (k.sort(function (a,
                                                  b) {
        return a.Td - b.Td
      }), {index: k[0].index, point: k[0].kE, distance: k[0].Td, object: k[0].object}) : null
    }, hJ: function (a) {
      var b = this.get("layers", null, !0), b = b.slice();
      if (this.D) {
        for (var c = [], d = -1, e = b.length; ++d < e;) {
          var f = b[d];
          if (f.xB) for (var f = f.uEa(), h = -1, k = f.length; ++h < k;) {
            var l = f[h];
            -1 === g.a.indexOf(b, l) && c.push(l)
          }
        }
        b = b.concat(c)
      }
      return b.filter(function (b) {
        return b instanceof B.o.Pm && (a ? -1 < a.indexOf(b) : !0)
      })
    }, queryObjectIndexFromFboByContainerPos: function (a, b) {
      g.c.add(this, "queryObjectIndexFromFboByContainerPos");
      if ("2D" === this.view.type || !this.map || !this.map.J) return null;
      var c = this.diffFilterLayers(b), d = this.hJ(b), e = this.getSize();
      if (c) this.$G = this.view.Ne.cb(), this.ZG = this.view.cc.cb(); else if (this.$G && this.ZG) {
        if (c = this.ZG.Yu(this.view.cc), c = !(this.$G.Yu(this.view.Ne) && c)) this.$G = this.view.Ne.cb(), this.ZG = this.view.cc.cb()
      } else this.$G = this.view.Ne.cb(), this.ZG = this.view.cc.cb();
      if (c) this.map.Qq(d); else {
        for (var f = 0; f < d.length; f += 1) {
          var h = d[f];
          if (h instanceof B.o.Pm && h.Kra()) {
            c = !0;
            break
          }
        }
        c && this.map.Qq(d)
      }
      return this.map.Oy().cwa(a,
        e)
    }, diffFilterLayers: function (a) {
      a = a || [];
      if (!this.ku || this.ku.length !== a.length) return this.ku = a ? a.slice(0) : [], !0;
      for (var b = 0; b < this.ku.length;) {
        if (this.ku[b] !== a[b]) return this.ku = a ? a.slice(0) : [], !0;
        b++
      }
      this.ku = a ? a.slice(0) : []
    }
  });
  B.Rb.Xb({
    OJ: "lngLatToGeodeticCoord",
    gqa: "geodeticCoordToLngLat",
    eJ: "getFitZoomAndCenterByBounds",
    a4: "getFitZoomAndCenterByOverlays",
    Ls: "lnglatTocontainer",
    lnglatTocontainer: "lngLatToContainer",
    $p: "containTolnglat",
    containTolnglat: "containerToLngLat",
    Ab: "lngLatToP20",
    Od: "p20ToLngLat",
    Xd: "p20ToContainer",
    Cg: "containerToP20",
    lc: "project",
    Zh: "unproject",
    queryObjectIndexFromFboByContainerPos: "pickObject3DByContainerPos"
  });
  B.Rb.Gb({
    isHotspotChanged: function () {
      if ("undefined" !== typeof this.vD && (this.Fna(), this.get("isHotspot"))) {
        var a = this.get("layers", null, !0);
        a && a.length && !this.vD && this.bK && this.Sua()
      }
    }, Sua: function () {
      if (this.jk) this.a5(); else {
        var a = this;
        this.D = !0;
        this.plugin("AMap.HotSpot", function () {
          if (!a.vD) {
            if (!a.jk) {
              var b = new g.ei;
              new B.C.Ze({innerOverlay: !0});
              a.jk = b
            }
            a.a5()
          }
        });
        this.D = !1
      }
    }, Fna: function () {
      this.jk && this.Ora()
    }, k7: function (a) {
      a.type = "hotspotover";
      a.isIndoorPOI = !1;
      this.q("hotspotover", a)
    }, i7: function (a) {
      a.type =
        "hotspotclick";
      a.isIndoorPOI = !1;
      this.q("hotspotclick", a)
    }, j7: function (a) {
      a.type = "hotspotout";
      a.isIndoorPOI = !1;
      this.q("hotspotout", a)
    }, a5: function () {
      var a = this.jk;
      this.jk.D = !0;
      this.jk.setMap(this);
      this.jk.D = !1;
      a.h("mouseover", this.k7, this);
      a.h("click", this.i7, this);
      a.h("mouseout", this.j7, this)
    }, Ora: function () {
      var a = this.jk;
      a.G("mouseover", this.k7, this);
      a.G("click", this.i7, this);
      a.G("mouseout", this.j7, this);
      this.jk.D = !0;
      this.jk.setMap(null);
      this.jk.D = !1;
      this.jk = null
    }
  });
  B.event = {
    Y: function (a, b, c, d) {
      g.F.h(a, b, c, d);
      return new g.tF(0, a, b, c, d)
    }, Ola: function () {
    }, addListener: function (a, b, c, d) {
      g.a.Sh(a.addListener) ? a.addListener(b, c, d) : (a.ue || (a.ue = g.va.ue), g.va.h.call(a, b, c, d));
      return new g.tF(1, a, b, c, d)
    }, by: function (a, b, c, d) {
      g.a.Sh(a.by) ? a.by(b, c, d) : (a.ue || (a.ue = g.va.ue), g.va.h.call(a, b, c, d, !0));
      return new g.tF(1, a, b, c, d)
    }, nI: function (a) {
      g.a.Sh(a.nI) ? a.nI() : g.va.wi.call(a)
    }, Hu: function (a, b) {
      g.a.Sh(a.Hu) ? a.Hu(b) : g.va.wi.call(a, b)
    }, removeListener: function (a) {
      a instanceof
      g.tF && (g.a.Sh(a.Di.removeListener) ? a.Di.removeListener(a) : 0 === a.type ? g.F.G(a.Di, a.ZQ, a.fS, a.cf) : 1 === a.type && (a.Di.ue || (a.Di.ue = g.va.ue), g.va.G.call(a.Di, a.ZQ, a.fS, a.cf)))
    }, O: function (a, b) {
      var c = Array.prototype.slice.call(arguments, 1);
      g.a.Sh(a.O) ? a.O.apply(a, c) : (a.ue || (a.ue = g.va.ue), g.va.q.apply(a, c))
    }
  };
  g.tF = g.da.extend({
    A: function (a, b, c, d, e) {
      this.type = a;
      this.Di = b;
      this.ZQ = c;
      this.fS = d;
      this.cf = e
    }
  });
  var pc = {
    Y: "addDomListener",
    Ola: "addDomListenerOnce",
    addListener: "addListener",
    by: "addListenerOnce",
    nI: "clearInstanceListeners",
    Hu: "clearListeners",
    removeListener: "removeListener",
    O: "trigger"
  }, qc;
  for (qc in pc) pc.hasOwnProperty(qc) && (B.event[pc[qc]] = B.event[qc]);
  g.event = B.event;
  B.o.Yb = g.da.extend({
    ka: [g.va, g.$e], A: function (a) {
      (new Date).getTime();
      this.CLASS_NAME = this.CLASS_NAME || "AMap.Layer";
      g.a.tb(this, a);
      this.w.map && (a = this.w.map, delete this.w.map, this.w.map = a);
      this.kf(this.w)
    }, getContainer: function () {
      g.c.add(this, "getContainer");
      if (this.o && this.o.M) return this.o.M.yj()
    }, getZooms: function () {
      return this.get("zooms", null, !0)
    }, setOpacity: function (a) {
      g.c.add(this, "setOpacity");
      a !== this.get("opacity", null, !0) && this.set("opacity", a)
    }, getOpacity: function () {
      return this.get("opacity",
        null, !0)
    }, show: function () {
      g.c.add(this, "show");
      this.set("visible", !0);
      if (this.Hq) {
        var a = this.get("map", null, !0);
        a && a.set("layers", a.get("layers", null, !0))
      }
    }, hide: function () {
      g.c.add(this, "hide");
      this.set("visible", !1);
      if (this.Hq) {
        var a = this.get("map", null, !0);
        a && a.set("layers", a.get("layers", null, !0))
      }
    }, setMap: function (a) {
      g.c.add(this, "setMap");
      var b = this.get("map");
      if (a) b && a !== b && b.wk(this), this.set("map", a); else if (b && (b.wk(this), this.set("map", null, !0), this.ti = !1, this.kg && this.kg(), this.onRemove)) this.onRemove()
    },
    getMap: function () {
      g.c.add(this, "getMap");
      return this.get("map", null, !0)
    }, mapChanged: function () {
      var a = this.get("map");
      a && a.SH(this)
    }, setzIndex: function (a) {
      g.c.add(this, "setzIndex");
      this.set("zIndex", a)
    }, getzIndex: function () {
      return this.get("zIndex", null, !0)
    }
  });
  B.o.qb = B.o.Yb.extend({
    w: {
      tileSize: 256,
      visible: !0,
      opacity: 1,
      zIndex: 0,
      noLimg: 1,
      zooms: [3, 20],
      getTileUrl: g.l.ba ? g.r.TE : g.r.OD,
      errorUrl: g.a.spa,
      detectRetina: !0,
      className: "amap-layer",
      mapNumber: "",
      merge: !1,
      sort: !1,
      cacheSize: g.l.size
    }, A: function (a) {
      this.CLASS_NAME = this.CLASS_NAME || "AMap.TileLayer";
      g.c.ya(this, a);
      (a = a || {}) && a.tileUrl && (a.getTileUrl = a.tileUrl);
      this.mna(a);
      var b = a.zooms;
      b && b[1] >= this.ql[0] ? (b[0] < this.ql[0] && (b[0] = this.ql[0]), b[1] > this.ql[1] && (b[1] = this.ql[1])) : a.zooms = [this.ql[0], this.ql[1]];
      arguments.callee.ma.call(this, a);
      a.vk && (this.vk = !0);
      this.HG = this.wq()
    }, setTextIndex: function (a) {
      g.c.add(this, "setTextIndex");
      this.set("textIndex", a)
    }, wq: function () {
      if (this.get("createTile")) return !1;
      var a = this.get("getTileUrl");
      return a && a !== g.r.OD && a !== g.r.TE ? !1 : !0
    }, s2: function () {
      if (!this.wq()) return !1;
      var a = this.get("map");
      return a && a.Ei && "zh_cn" === a.get("lang") && !this.noVector ? !0 : !1
    }, w4: function (a) {
      var b = g.r.WJ;
      g.l.ja && this.get("detectRetina") && (b = g.r.WJ.replace("scl=1", "scl=2"));
      a && (b = b.replace("ltype=3",
        "ltype=11"));
      return b
    }, fg: function (a) {
      var b = this.s2(), c = this.get("map");
      this.wq() && this.set("mapNumber", "GS(2019)6379");
      if (this.vk) return new g.o.qb(this, a, this.yr(this.w4(!0)), this.w.maxDataZoom, !0);
      if (b) if (this.Hq = !0, g.o.hi) {
        if ("dv" === c.get("baseRender") && !this.get("watermark")) {
          var b = c.get("showBuildingBlock"), d = new g.o.qb(this, a, this.yr(this.w4(!b)), void 0, !0);
          b && (d.Kj = new g.o.od(new B.o.qb({
            zooms: [16, 20],
            innerLayer: !0
          }), a, ["building"]), d.Kj.type = "\u697c\u5757\u56fe\u5c42", d.Kj.bf(["visible",
            "opacity", "zIndex"], d, !0), d.Kj.BC(c.get("mapStyle") || "normal"));
          d.type = "\u6805\u683c\u5e95\u56fe";
          return d
        }
        if ("v" <= c.get("baseRender") || this.get("watermark")) return "3D" == a.B.view.type ? (c = new g.o.od(this, a, ["region", "road"]), c.type = "\u77e2\u91cf\u5e95\u56fe", b = new B.o.qb({
          zooms: [17, 20],
          zIndex: 50,
          innerLayer: !0
        }), c.Kj = new g.o.od(b, a, ["building"]), c.Kj.gf = 17, c.Kj.type = "\u697c\u5757\u56fe\u5c42", c.Kj.Yy = 1, c.Kj.bf(["visible", "merge", "sort", "opacity"], c, !0), b.X("rejectMapMask", this, !0)) : (c = new g.o.od(this,
          a, ["region", "building", "road"]), c.type = "\u77e2\u91cf\u5e95\u56fe"), a.vma = c
      } else return ["vectorlayer", "overlay"]; else return this.Hq = !1, new g.o.qb(this, a, null, this.w.maxDataZoom)
    }, getTileUrlChanged: function () {
      var a = this.get("getTileUrl");
      if (a === g.r.OD || a === g.r.TE || a === g.r.SK) this.bK = !0;
      "string" === typeof a && (a = this.yr(a));
      this.set("tileFun", a)
    }, mna: function (a) {
      this.ql || (this.ql = [this.w.zooms[0], this.w.zooms[1]]);
      var b;
      a.hasOwnProperty("detectRetina") && !1 === a.detectRetina && (b = !0);
      g.l.ba && g.l.ja && this.w.detectRetina &&
      !b && (this.ql[1] -= 1)
    }, getTiles: function () {
      g.c.add(this, "getTiles");
      var a = this.get("tiles", null, !0);
      if (a && a.length) a = a[0]; else return [];
      for (var b = [], c, d = 0; d < a.length; d += 1) a[d].key && (c = a[d].key.split("/"), b.push("" + c[1] + "," + c[2]));
      return b
    }, reload: function () {
      g.c.add(this, "reload");
      this.set("reload", 1)
    }, $s: function () {
      this.D = !0;
      var a = this.get("map", null, !0);
      this.setMap(null);
      this.ti = !1;
      this.setMap(a);
      this.D = !1
    }, setTileUrl: function (a) {
      g.c.add(this, "setTileUrl");
      this.s2() ? (this.set("getTileUrl", a), this.$s()) :
        this.set("getTileUrl", a)
    }, yr: function (a) {
      var b = this, c, d, e;
      return function (f, h, k) {
        f = (f + Math.pow(2, k)) % Math.pow(2, k);
        if ("number" !== typeof (f + h + k)) return null;
        var l = b.get("map"), m = "zh_cn";
        l && (m = l.get("lang") || "zh_cn");
        k = a.replace("[x]", f).replace("[y]", h).replace("[z]", k).replace("[lang]", m);
        if (!c) {
          if (d = a.match(/\{.*\}/)) e = d.toString().replace("{", "").replace("}", ""), e = e.split(",");
          c = !0
        }
        e && e.length && (k = k.replace(d, e[Math.abs(f + h) % e.length]));
        return k
      }
    }, getTileUrl: function (a, b, c) {
      g.c.add(this, "getTileUrl");
      return this.get("tileFun", null, !0)(a, b, c)
    }, getZooms: function (a) {
      a || g.c.add(this, "getZooms");
      return this.get("zooms", null, !0)
    }
  });
  B.o.qb.BW = B.o.qb.extend({
    w: {
      getTileUrl: g.r.wU,
      zooms: [3, 20],
      zIndex: 2,
      maxDataZoom: 18,
      detectRetina: !1,
      mapNumber: "GS(2020)617",
      className: "amap-layer amap-satellite",
      cacheSize: g.l.size
    }, A: function (a) {
      this.CLASS_NAME = "AMap.TileLayer.Satellite";
      g.c.ya(this, a);
      this.ql = [3, 20];
      arguments.callee.ma.apply(this, arguments)
    }
  });
  B.o.qb.yW = B.o.qb.extend({
    w: {
      getTileUrl: g.r.SK,
      zooms: [3, 20],
      zIndex: 3,
      type: "overlayer",
      maxDataZoom: 18,
      className: "amap-layer amap-roadnet",
      cacheSize: g.l.size
    }, A: function (a) {
      this.CLASS_NAME = "AMap.TileLayer.RoadNet";
      g.c.ya(this, a);
      this.ql = [3, 20];
      arguments.callee.ma.apply(this, arguments)
    }, fg: function (a) {
      if (this.get("map").Ei) {
        this.Hq = !0;
        var b = g.r.TK;
        g.l.ja && this.get("detectRetina") && (b = g.r.TK.replace("scl=1", "scl=2"));
        a = new g.o.qb(this, a, this.yr(b), this.w.maxDataZoom)
      } else this.Hq = !1, a = new g.o.qb(this,
        a);
      return a
    }
  });
  B.o.qb.KW = B.o.qb.extend({
    w: {
      getTileUrl: function (a, b, c) {
        return g.r.vc + "://tm.amap.com/trafficengine/mapabc/traffictile?v=1.0&t=1&zoom=" + (17 - c) + "&x=" + a + "&y=" + b
      },
      zooms: [6, 20],
      zIndex: 4,
      type: "overlayer",
      autoRefresh: !1,
      interval: 180,
      maxDataZoom: 17,
      alwaysRender: !g.l.h3,
      className: "amap-layer amap-traffic",
      cacheSize: g.l.size
    }, A: function (a) {
      this.CLASS_NAME = "AMap.TileLayer.Traffic";
      g.c.ya(this, a);
      this.ql = [6, 20];
      arguments.callee.ma.apply(this, arguments);
      this.D = !0;
      this.startRefresh();
      this.D = !1
    }, stopRefresh: function () {
      g.c.add(this,
        "stopRefresh");
      this.GK && (clearInterval(this.GK), this.GK = null)
    }, startRefresh: function () {
      g.c.add(this, "startRefresh");
      if (this.get("autoRefresh") && !this.GK) {
        var a = this;
        this.GK = setInterval(function () {
          a.D = !0;
          a.reload();
          a.D = !1;
          a.q("refresh")
        }, Math.max(1E3 * (this.get("interval") || 180), 1E4))
      }
    }, reload: function () {
      g.c.add(this, "reload");
      g.a.Yc(function () {
        this.set("reload")
      }, this)
    }, kg: function () {
      this.D = !0;
      this.stopRefresh();
      this.get("map") && this.get("map").G("zoomstart", this.reload, this);
      this.D = !1
    }, fg: function (a) {
      var b =
        this.get("map"), b = a.B;
      b.h("zoomstart", this.reload, this);
      return "d" !== b.get("baseRender") ? g.o.$w ? a = new g.o.$w(this, a) : ["vt"] : a = new g.o.qb(this, a, null, this.w.maxDataZoom)
    }
  });
  B.o.qb.zA = B.o.qb.extend({
    w: {
      zooms: [3, 20],
      zIndex: 12,
      detectRetina: !1,
      className: "amap-layer amap-flexible",
      cacheSize: g.l.size
    }, A: function (a) {
      this.CLASS_NAME = this.CLASS_NAME || "AMap.TileLayer.Flexible";
      g.c.ya(this, a);
      this.Esa = !0;
      arguments.callee.ma.call(this, a)
    }, setCreateTile: function (a) {
      g.c.add(this, "setCreateTile");
      "function" === typeof a && a !== this.get("createTile") && this.set("createTile", a)
    }, getCreateTile: function () {
      return this.get("createTile", null, !0)
    }
  });
  B.o.qb.Fba = B.o.qb.zA.extend({
    w: {
      zooms: [3, 20],
      zIndex: 12,
      tileSize: 512,
      detectRetina: !1,
      className: "amap-layer amap-wms",
      cacheSize: g.l.size,
      url: "",
      params: ""
    }, A: function (a) {
      this.CLASS_NAME = "AMap.TileLayer.WMS";
      g.c.ya(this, a);
      arguments.callee.ma.call(this, a);
      this.zw();
      var b = this, c = this.get("tileSize");
      this.set("createTile", function (a, e, f, h, k) {
        var l = Math.pow(2, 20 - f) * c;
        f = new g.H(l * a, l * (e + 1));
        a = new g.H(l * (a + 1), l * e);
        e = g.VJ.s7(f);
        a = g.VJ.s7(a);
        var m = document.createElement("img");
        "3D" === b.Kf && (m.crossOrigin = "anonymous");
        g.F.h(m, "load", function () {
          h(m)
        });
        g.F.h(m, "error", function () {
          k(m)
        });
        m.src = this.url + "&BBOX=" + e + "," + a
      })
    }, zw: function () {
      var a = this.get("url", null, !0), b = this.get("params", null, !0), c = this.get("tileSize");
      b.WIDTH = c;
      b.HEIGHT = c;
      b.CRS = b.CRS || "EPSG:3857";
      b.REQUEST = "GetMap";
      b.SERVICE = "WMS";
      b.FORMAT = b.FORMAT || "image/png";
      b.TRANSPARENT = void 0 === b.TRANSPARENT ? "true" : b.TRANSPARENT;
      delete b.BBOX;
      this.url = a + "?" + g.a.join(b, "&");
      this.D = !0;
      this.reload();
      this.D = !1
    }, setUrl: function (a) {
      g.c.add(this, "setUrl");
      this.set("url",
        a, !0);
      this.zw()
    }, getUrl: function () {
      g.c.add(this, "getUrl");
      return this.get("url", null, !0)
    }, setParams: function (a) {
      g.c.add(this, "setParams");
      g.extend(this.get("params", null, !0), a || {});
      this.zw()
    }, getParams: function () {
      g.c.add(this, "getParams");
      return this.get("params", null, !0)
    }
  });
  B.o.qb.Gba = B.o.qb.zA.extend({
    w: {
      zooms: [3, 20],
      tileSize: 256,
      zIndex: 12,
      detectRetina: !1,
      className: "amap-layer amap-wmts",
      cacheSize: g.l.size
    }, A: function (a) {
      this.CLASS_NAME = "AMap.TileLayer.WMTS";
      g.c.ya(this, a);
      arguments.callee.ma.call(this, a);
      this.zw();
      var b = this;
      this.get("tileSize");
      this.set("createTile", function (a, d, e, f, h) {
        var k = document.createElement("img");
        "3D" === b.Kf && (k.crossOrigin = "anonymous");
        g.F.h(k, "load", function () {
          f(k)
        });
        g.F.h(k, "error", function () {
          h(k)
        });
        k.src = this.url + "&TileMatrix=" + e + "&TileRow=" +
          d + "&TileCol=" + a
      })
    }, zw: function () {
      var a = this.get("url", null, !0), b = this.get("params", null, !0);
      b.TileMatrixSet = b.TileMatrixSet || "EPSG:3857";
      b.Request = "GetTile";
      b.Service = "WMTS";
      b.Format = b.Format || "image/png";
      this.url = a + "?" + g.a.join(b, "&");
      this.D = !0;
      this.reload();
      this.D = !1
    }, setUrl: function (a) {
      g.c.add(this, "setUrl");
      this.set("url", a, !0);
      this.zw()
    }, getUrl: function () {
      g.c.add(this, "getUrl");
      return this.get("url", null, !0)
    }, setParams: function (a) {
      g.c.add(this, "setParams");
      g.extend(this.get("params", null, !0),
        a || {});
      this.zw()
    }, getParams: function () {
      g.c.add(this, "getParams");
      return this.get("params", null, !0)
    }
  });
  B.o.qb.QL = B.o.qb.zA.extend({
    w: {detectRetina: !0, zooms: [10, 18], zIndex: 2}, A: function (a) {
      arguments.callee.ma.apply(this, arguments);
      var b = this;
      this.set("createTile", function (a, d, e, f, h) {
        var k = b.Ce.map.map;
        k.Te.ME(a, d, e, function (l) {
          if (l) h(); else {
            var m = document.createElement("img");
            "3D" === b.Kf && (m.crossOrigin = "anonymous");
            g.F.h(m, "load", function () {
              f(m)
            });
            g.F.h(m, "error", function () {
              h(m)
            });
            m.src = function (a, c, d) {
              var e = "zh_cn";
              b && b.get && k && (e = k.get("lang") || "zh_cn");
              return g.r.vc + "://grid.amap.com/grid/" + d + "/" +
                a + "/" + c + "?src=jsapi&key=" + g.r.key + "&lang=" + e + "&dpiType=" + (g.l.Kc ? "wprd" : "webrd")
            }(a, d, e)
          }
        })
      })
    }
  });
  B.o.ed = B.o.Yb.extend({
    w: {visible: !0, zooms: [3, 25], type: "overlay", zIndex: 5, alwaysRender: !0},
    A: function (a) {
      this.u5 = !0;
      arguments.callee.ma.apply(this, arguments)
    },
    fg: function (a) {
      return new g.o.ed(this, a)
    }
  });
  B.o.V$ = B.o.Yb.extend({
    w: {zooms: [14, 20], zIndex: 8, visible: !0, merge: !0, sort: !1}, A: function (a) {
      this.CLASS_NAME = "AMap.Buildings";
      g.c.ya(this, a);
      a = a || {};
      a.zooms && (a.zooms[0] = Math.max(14, a.zooms[0]));
      arguments.callee.ma.apply(this, arguments)
    }, wq: function () {
      return !1
    }, fg: function (a) {
      if (g.l.Xp) return a = new g.o.Cba(this, a), a.Yy = this.get("heightFactor") || 1, a
    }, setStyle: function (a) {
      this.set("customStyle", a);
      g.c.add(this, "setStyle")
    }
  });
  B.o.JL = B.o.Yb.extend({
    w: {visible: !0, zooms: [3, g.l.ba ? 20 : 18], opacity: 1, type: "overlay", zIndex: 6}, A: function (a) {
      arguments.callee.ma.apply(this, arguments)
    }, fg: function (a) {
      return g.o.CA ? new g.o.CA(this, a) : ["imagelayer"]
    }, getMap: function () {
      g.c.add(this, "getMap");
      return this.Ce.map
    }, show: function () {
      g.c.add(this, "show");
      this.set("visible", !0);
      this.q("options")
    }, getOpacity: function () {
      g.c.add(this, "getOpacity");
      return this.get("opacity", null, !0)
    }, setOpacity: function (a) {
      g.c.add(this, "setOpacity");
      this.set("opacity",
        a)
    }, getBounds: function () {
      g.c.add(this, "getBounds");
      return this.get("bounds", null, !0).cb()
    }, setBounds: function (a) {
      g.c.add(this, "setBounds");
      this.q("bounds", a);
      this.D = !0;
      this.setOptions({bounds: a});
      this.D = !1
    }, hide: function () {
      g.c.add(this, "hide");
      this.set("visible", !1);
      this.q("options")
    }, setOptions: function (a) {
      g.c.add(this, "setOptions");
      this.kf(a);
      this.q("options")
    }, getOptions: function () {
      g.c.add(this, "getOptions");
      var a = {}, b;
      for (b in this.w) this.w.hasOwnProperty(b) && (a[b] = this.get(b));
      return a
    }, getElement: function () {
      return this.o.M ?
        this.o.M.Nb : this.o.Ef ? this.o.Ef.Nb : null
    }
  });
  B.o.CA = B.o.JL.extend({
    A: function (a) {
      this.CLASS_NAME = "AMap.ImageLayer";
      g.c.ya(this, a);
      a && a.url && (a.__source__ = a.url);
      arguments.callee.ma.apply(this, arguments)
    }, getImageUrl: function () {
      g.c.add(this, "getImageUrl");
      return this.get("__source__")
    }, setImageUrl: function (a) {
      g.c.add(this, "setImageUrl");
      return this.set("__source__", a)
    }
  });
  B.o.Eba = B.o.JL.extend({
    A: function (a) {
      this.CLASS_NAME = "AMap.VideoLayer";
      g.c.ya(this, a);
      a && a.url && (a.__source__ = a.url);
      arguments.callee.ma.apply(this, arguments)
    }, play: function () {
      var a = this.getElement();
      a && a.play && a.play()
    }, pause: function () {
      var a = this.getElement();
      a && a.pause && a.pause()
    }, getVideoUrl: function () {
      g.c.add(this, "getVideoUrl");
      return this.get("__source__")
    }, setVideoUrl: function (a) {
      g.c.add(this, "setVideoUrl");
      return this.set("__source__", a)
    }
  });
  B.o.X$ = B.o.JL.extend({
    A: function (a) {
      this.CLASS_NAME = "AMap.CanvasLayer";
      g.c.ya(this, a);
      a && a.canvas && (a.__source__ = a.canvas);
      arguments.callee.ma.apply(this, arguments)
    }, getCanvas: function () {
      g.c.add(this, "getCanvas");
      return this.get("__source__")
    }, setCanvas: function (a) {
      g.c.add(this, "setCanvas");
      return this.set("__source__", a)
    }, reFresh: function () {
      this.o && (this.o.JE = !0, this.o.set("display"))
    }
  });
  B.o.Qaa = B.o.Yb.extend({
    w: {
      visible: !0,
      zooms: [3, 20],
      type: "overlay",
      zIndex: 5,
      cursor: "pointer",
      alwaysRender: !0,
      stable: !0,
      bubble: !0,
      rejectMapMask: !0,
      className: "amap-mass"
    }, A: function (a, b) {
      this.CLASS_NAME = "AMap.MassMarks";
      g.c.ya(this, b);
      g.l.kl && (this.Cj = !0, b.size && (b.size = g.a.Mq(b.size)), this.D = !0, this.setData(a), g.a.tb(this, b), b.style ? (this.kf(this.w, !0), this.setStyle(b.style)) : this.setStyle(this.w), this.D = !1)
    }, clear: function () {
      g.c.add(this, "clear");
      this.set("dataSources", "")
    }, getStyle: function () {
      g.c.add(this,
        "getStyle");
      return this.Em
    }, setStyle: function (a) {
      g.c.add(this, "setStyle");
      if (a instanceof Array) {
        for (var b = 0; b < a.length; b += 1) a[b].rotation_ = Math.PI * (a[b].rotation || 0) / 180, a[b].size = g.a.Mq(a[b].size), a.Df = Math.max(a.Df || 0, a[b].size.width + a[b].anchor.x), a.mg = Math.max(a.Df || 0, a[b].size.height + a[b].anchor.y);
        this.Em = a
      } else a.size && (a.size = g.a.Mq(a.size)), a.rotation_ = Math.PI * (a.rotation || 0) / 180, this.kf(a, !0), this.Em = {
        anchor: this.get("anchor"),
        url: this.get("url"),
        size: this.get("size"),
        rotation_: this.get("rotation_")
      },
        this.Em.Df = this.Em.size.width + this.Em.anchor.x, this.Em.mg = this.Em.size.height + this.Em.anchor.y;
      this.q("style")
    }, setData: function (a) {
      g.c.add(this, "setData");
      this.set("dataSources", a)
    }, getData: function () {
      g.c.add(this, "getData");
      return this.get("datas") || this.get("dataSources")
    }, setMap: function (a) {
      g.c.add(this, "setMap");
      g.l.kl && (a ? (this.get("map") && this.get("map").wk(this), this.set("map", a)) : this.get("map") && (this.get("map").wk(this), this.set("map", null, !0), this.ti = !1, this.kg && this.kg()))
    }, fg: function (a) {
      return g.sb.ID(["cvector"]) ?
        (a = new g.o.ed(this, a), this.X("datas", a), a) : ["cvector"]
    }
  });
  B.o.aaa = B.o.Yb.extend({
    A: function (a) {
      this.CLASS_NAME = "AMap.CompositeLayer";
      this.xB = !0;
      g.a.tb(this, a);
      this.Xm = [];
      this.kf(this.w)
    }, opacityChanged: function () {
      for (var a = this.get("opacity", null, !0), b = -1, c = this.Xm.length; ++b < c;) this.Xm[b].setOpacity(a)
    }, addLayer: function (a) {
      if (!this.has(a)) {
        a.ZA = this;
        var b = this.get("map");
        a.setMap(b);
        this.Xm.push(a)
      }
      return this
    }, removeLayer: function (a) {
      this.has(a) && a.setMap(null);
      return this
    }, Rka: function (a) {
      if (this.has(a)) {
        delete a.ZA;
        var b = this.Xm;
        a = g.a.indexOf(b, a);
        g.a.Ho(b, a)
      }
    }, has: function (a) {
      return -1 !== g.a.indexOf(this.Xm, a)
    }, show: function () {
      for (var a = -1, b = this.Xm.length; ++a < b;) this.Xm[a].show()
    }, hide: function () {
      for (var a = -1, b = this.Xm.length; ++a < b;) this.Xm[a].hide()
    }, setzIndex: function (a, b) {
      g.c.add(this, "setzIndex");
      this.set("zIndex", a);
      var c = this.Xm;
      if ("undefined" === typeof b) for (var d = -1, e = c.length; ++d < e;) {
        var f = c[d];
        f.setzIndex(a)
      } else (f = c[b]) && f.setzIndex(a)
    }, fg: function (a) {
      this.e = a
    }, getLayers: function () {
      return this.Xm
    }
  });
  B.o.qr = B.o.Yb.extend({
    Eaa: {visible: !0, zIndex: 121, opacity: 1, zooms: [3, 20], collision: !0, animation: !0, alwaysRender: !0},
    w: {zooms: [3, 20]},
    tP: null,
    _markerBindArray: {},
    A: function (a) {
      this.CLASS_NAME = this.CLASS_NAME || "AMap.LabelsLayer";
      a = a || {};
      g.c.ya(this, a);
      arguments.callee.ma.apply(this, arguments);
      this.w = this.Eaa;
      g.a.tb(this, a);
      this.kf(this.w);
      this.ag = [];
      this.kb = [];
      this.Ou = []
    },
    getCollision: function () {
      return this.get("collision", null, !0)
    },
    setCollision: function () {
      var a = 0 < arguments.length && void 0 !== arguments[0] ?
        arguments[0] : !0;
      this.set("collision", a);
      this.w.collision = a;
      this.f && this.f.tb(this.w, this.ag)
    },
    getOpacity: function () {
      return this.get("opacity", null, !0)
    },
    setOpacity: function () {
      var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1;
      this.set("opacity", a);
      this.w.opacity = a;
      this.f && this.f.tb(this.w, this.ag)
    },
    getzIndex: function () {
      return this.get("zIndex", null, !0)
    },
    setzIndex: function () {
      var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 120;
      this.set("zIndex", a);
      this.w.zIndex = a;
      this.f && this.f.tb(this.w,
        this.ag)
    },
    getAnimation: function () {
      return this.get("animation", null, !0)
    },
    setAnimation: function () {
      var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : !0;
      this.set("animation", a);
      this.w.animation = a;
      this.f && this.f.tb(this.w, this.ag)
    },
    getZooms: function () {
      return this.get("zooms", null, !0)
    },
    setZooms: function () {
      var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [3, 20];
      this.set("zooms", a);
      this.w.zooms = a;
      this.f && this.f.tb(this.w, this.ag)
    },
    add: function (a) {
      g.c.add(this, "add");
      if (a) {
        a = "[object Array]" !==
        Object.prototype.toString.apply(a) ? [a] : a;
        for (var b = 0; b < a.length; b++) {
          var c = a[b];
          if (c) {
            c.f = this;
            var d = c.w, e = {
              data: {
                id: c._LabelMarkerId || void 0,
                name: d.title || "",
                position: this.kfa(d.position) || void 0,
                rank: d.rank || void 0
              },
              opts: {
                zooms: d.zooms || void 0,
                opacity: "number" === typeof d.opacity ? d.opacity : 1,
                zIndex: "number" === typeof d.zIndex ? d.zIndex : 1,
                height: "number" === typeof d.height ? d.height : 0,
                icon: {},
                text: {}
              }
            };
            if (d.icon) {
              var f = d.icon, h = f.size, k = f.clipSize;
              h && (f.size = this.yG(h));
              k && (f.clipSize = this.yG(k));
              e.opts.icon =
                d.icon
            }
            d.text && (e.opts.text = d.text, d.text.content && (e.data.txt = d.text.content), (d = (d = e.opts.text.style) && d.padding) && (e.opts.text.style.padding = this.qha(d)));
            this.ag.push(e);
            this.kb.push(c);
            this._markerBindArray[c._LabelMarkerId] = c
          }
        }
        this.Jo();
        b = a.length;
        for (c = 0; c < b; c++) (e = a[c]) && e.P8 && e.P8()
      }
    },
    getMarkers: function () {
      return this.kb
    },
    remove: function (a) {
      g.c.add(this, "remove");
      if (a) {
        var b = void 0, b = "[object Array]" !== Object.prototype.toString.apply(a) ? [a] : a;
        if (this.ag) {
          for (a = 0; a < b.length; a++) {
            var c = this.yn(this.ag,
              b[a]);
            -1 !== c && (this.ag.splice(c, 1), this.kb.splice(c, 1))
          }
          this.Jo()
        }
      }
    },
    clear: function () {
      g.c.add(this, "clear");
      this.f && this.f.clear();
      this.ag = [];
      this.kb = []
    },
    setPosition: function () {
    },
    positionChanged: function () {
    },
    on: function (a) {
      g.c.add(this, "on");
      this.f ? (this.Fh(arguments), this.f.T1(a)) : this.Ou.push(arguments)
    },
    off: function (a) {
      g.c.add(this, "off");
      this.f && this.f.n$(a)
    },
    Jo: function () {
      this.f && this.f.Rz(this.ag)
    },
    Rz: function (a) {
      this.S0(a)
    },
    HU: function (a, b) {
      var c = this.tP;
      a && (b ? (c && c._LabelMarkerId !== a._LabelMarkerId &&
      c.setTop(!1), this.tP = a) : this.tP = null)
    },
    zR: function (a) {
      if (this.f) return this.f.zR(a)
    },
    yn: function (a, b) {
      for (var c = b._LabelMarkerId || null, d = 0; d < a.length; d++) if (a[d].data.id === c) return d;
      return -1
    },
    removeItem: function () {
    },
    fg: function (a) {
      this.get("map") || this.set("map", a.B, !0);
      if (g.o.qr) {
        this.f = new g.o.qr(this, a);
        this.ag && this.Jo();
        a = this.Ou;
        if (a.length) {
          for (var b = 0; b < a.length; b++) this.on.apply(this, a[b]);
          this.Ou = []
        }
        return this.f
      }
      return ["AMap.LabelsLayer"]
    },
    k4: function (a) {
      if (a) return this._markerBindArray[a] ||
        null
    },
    tZ: function () {
      var a = this;
      return g.a.MD(function (b) {
        var c = a.f;
        c ? c.Rz(b) : a.uD = b
      }, 100)
    },
    Nf: function (a) {
      return "undefined" === typeof a
    },
    MZ: function (a) {
      return "string" === typeof a
    },
    yga: function (a) {
      return "number" === typeof a
    },
    yG: function () {
      var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
      return this.Nf(a.width) || this.Nf(a.height) ? this.MZ(a) ? a.split(",") : this.yga(a) ? [a, a] : a : [a.width, a.height]
    },
    kfa: function () {
      var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
      return this.Nf(a.R) ||
      this.Nf(a.Q) ? this.MZ(a) ? a.split(",") : a : [a.R, a.Q]
    },
    qha: function (a) {
      "string" === typeof a && (a = a.trim(), a = a.split(" "));
      if ("[object Array]" === Object.prototype.toString.apply(a)) {
        for (var b = a.length, c = 0; c < b; c++) {
          var d = parseInt(a[c]);
          a[c] = isNaN(d) ? 3 : d
        }
        switch (b) {
          case 0:
            a = [3, 3, 3, 3];
            break;
          case 1:
            a = [a[0], a[0], a[0], a[0]];
            break;
          case 2:
            a = [a[0], a[1], a[0], a[1]];
            break;
          case 3:
            a = [a[0], a[1], a[2], a[1]]
        }
        return a
      }
      return [3, 3, 3, 3]
    }
  });
  B.o.RL = B.o.CA.extend({
    A: function (a, b, c) {
      this.CLASS_NAME = "AMap.GroundImage";
      g.c.ya(this, c);
      c = c || {};
      this.dh = !0;
      var d = parseFloat(c.opacity);
      isNaN(d) && (d = 1);
      arguments.callee.ma.call(this, {
        url: a,
        bounds: b,
        clickable: c.clickable,
        opacity: d,
        map: c.map,
        zooms: c.zooms || [3, 20]
      });
      this.CLASS_NAME = "AMap.GroundImage"
    }, Iua: function (a) {
      this.get("bounds").contains(a.lnglat) && (a.target = this, this.q("click", a))
    }, Jua: function (a) {
      this.get("bounds").contains(a.lnglat) && (a.target = this, this.q("dblclick", a))
    }, setMap: function (a) {
      g.c.add(this,
        "setMap");
      a ? (this.get("map") && (this.get("map").wk(this), this.C2 && B.event.removeListener(this.C2), this.U2 && B.event.removeListener(this.U2)), this.set("map", a)) : this.get("map") && (this.get("map").wk(this), this.Ce.map = null)
    }, mapChanged: function () {
      this.get("map") && (this.get("map").SH(this), this.get("clickable") && (this.C2 = B.event.addListener(this.get("map"), "click", this.Iua, this), this.U2 = B.event.addListener(this.get("map"), "dblclick", this.Jua, this)))
    }
  });
  B.C.Hh = g.da.extend({
    ka: [g.va, g.$e, {Ja: g.a.Ja}], w: {extData: {}, bubble: !1, clickable: !0, draggable: !1}, A: function () {
      this.OG = g.a.xb(this)
    }, tEa: function () {
      return this.OG
    }, YCa: function () {
      this.D = !0;
      this.get("map", null, !0) && this.setMap(this.get("map"));
      this.D = !1
    }, mapChanged: function () {
      this.get("map", null, !0) && this.get("map", null, !0).tC(this)
    }, gR: function (a) {
      var b = 0;
      a && (b = "string" === typeof a ? Math.round(parseFloat(a) / 0.14929107086948487) : a);
      return b
    }, setHeight: function (a) {
      this.height = a = a || 0;
      a = this.gR(a);
      this.set("altitude",
        a)
    }, getHeight: function () {
      return this.height
    }, show: function () {
      g.c.add(this, "show");
      !0 != this.get("visible", null, !0) && this.set("visible", !0)
    }, hide: function () {
      g.c.add(this, "hide");
      !1 != this.get("visible", null, !0) && this.set("visible", !1)
    }, setMap: function (a) {
      g.c.add(this, "setMap");
      a !== this.get("map", null, !0) && (a ? (this.get("map", null, !0) && this.get("map", null, !0).Kz(this), this.set("map", a)) : this.get("map", null, !0) && (this.get("map", null, !0).Kz(this), this.set("map", null, !0)))
    }, getMap: function () {
      g.c.add(this,
        "getMap");
      return this.get("map", null, !0)
    }, setExtData: function (a) {
      g.c.add(this, "setExtData");
      this.set("extData", a)
    }, positionChanged: function () {
    }, getExtData: function () {
      g.c.add(this, "getExtData");
      return this.get("extData", null, !0)
    }, getVisible: function () {
      return this.get("visible", null, !0)
    }
  });
  B.C.ed = B.C.Hh.extend({
    A: function (a) {
      B.C.ed.bd.A.apply(this, arguments)
    }, show: function () {
      g.c.add(this, "show");
      !1 == this.get("visible", null, !0) && (this.set("visible", !0), this.q("show", {type: "show", target: this}))
    }, hide: function () {
      g.c.add(this, "hide");
      !0 == this.get("visible", null, !0) && (this.set("visible", !1), this.q("hide", {type: "hide", target: this}))
    }, getVisible: function () {
      g.c.add(this, "getVisible");
      return this.get("visible", null, !0)
    }, getOptions: function () {
      g.c.add(this, "getOptions");
      var a = {},
        b = "map zIndex strokeColor strokeOpacity strokeWeight strokeStyle strokeDasharray extData bubble clickable draggable".split(" "),
        c = "isOutline outlineColor geodesic path lineJoin lineCap borderWeight showDir dirColor dirImg".split(" "),
        d = ["fillColor", "fillOpacity", "path", "lineJoin", "texture"], e = ["center", "radius", "texture"],
        f = ["bounds", "texture"], h = [];
      this instanceof B.C.Zb && (h = b.concat(c));
      this instanceof B.C.Ec && (h = b.concat(d));
      this instanceof B.C.jh && (h = b.concat(e).concat(d));
      this instanceof B.C.Et && (h = b.concat(e).concat(d));
      this instanceof B.C.Lt && (h = b.concat(d).concat(f));
      for (b = 0; b < h.length; b += 1) a[h[b]] = this.get(h[b], null,
        !0);
      return a
    }, setOptions: function (a) {
      g.c.add(this, "setOptions");
      a.hasOwnProperty("path") && (a.path && a.path.length || (a.path = []), a.path = this.Ja(a.path));
      a.center && (a.center = this.Ja(a.center));
      var b;
      a.hasOwnProperty("map") && (b = a.map, delete a.map);
      this.kf(a);
      void 0 !== b && (this.setMap(b), a.map = b);
      this.q("options");
      this.q("change", {type: "change", target: this})
    }, setzIndex: function (a) {
      g.c.add(this, "setzIndex");
      this.set("zIndex", a)
    }, getzIndex: function () {
      g.c.add(this, "getzIndex");
      return this.get("zIndex", null,
        !0)
    }, setDraggable: function (a) {
      g.c.add(this, "setDraggable");
      this.set("draggable", a)
    }
  });
  B.C.hM = B.C.ed.extend({
    w: {
      visible: !0,
      zIndex: 10,
      strokeColor: "#006600",
      strokeOpacity: 0.9,
      strokeWeight: 3,
      strokeStyle: "solid",
      strokeDasharray: [10, 5],
      lineJoin: "miter",
      lineCap: "butt",
      path: []
    }, A: function (a) {
      B.C.hM.bd.A.apply(this, arguments)
    }, setPath: function (a, b) {
      g.c.add(this, "setPath");
      a && a.length || (a = []);
      a = this.Ja(a);
      this.C && this.C.get("deltaPos") && this.C.set("deltaPos", [0, 0], !0);
      this.set("path", a);
      this.q("change", {type: "change", target: this});
      b || this.q("setPath")
    }, getPath: function () {
      g.c.add(this, "getPath");
      return this.I2()
    }, reset: function () {
      var a = this.I2();
      this.C.set("deltaPos", [0, 0], !0);
      this.setPath(a)
    }, I2: function () {
      var a = this.get("path", null, !0);
      this.C && this.C.get("deltaPos") && (a = this.C.Tt(a, this.C.get("deltaPos")));
      return a
    }
  });
  B.C.fi = g.da.extend({
    ka: [g.va, g.$e],
    w: {
      size: new g.xd(36, 36),
      imageOffset: new g.H(0, 0),
      image: g.r.Fb + "/theme/v1.3/markers/0.png",
      imageSize: null
    },
    A: function (a) {
      this.CLASS_NAME = "AMap.Icon";
      g.c.ya(this, a);
      a = a || {};
      a.size && (a.size = g.a.Mq(a.size));
      a.imageSize && (a.imageSize = g.a.Mq(a.imageSize));
      g.a.tb(this, a);
      this.kf(this.w)
    },
    setImageSize: function (a) {
      g.c.add(this, "setImageSize");
      a = g.a.Mq(a);
      this.set("imageSize", a)
    },
    getImageSize: function () {
      g.c.add(this, "getImageSize");
      return this.get("imageSize", null, !0)
    }
  });
  B.C.Oaa = g.da.extend({
    ka: [g.va, g.$e], w: {coords: [], type: ""}, A: function (a) {
      this.CLASS_NAME = "AMap.MarkerShape";
      g.c.ya(this, a);
      g.a.tb(this, a);
      this.kf(this.w)
    }
  });
  B.C.ub = B.C.Hh.extend({
    w: {
      cursor: "pointer",
      visible: !0,
      zIndex: 100,
      angle: 0,
      textAlign: "left",
      verticalAlign: "top",
      autoRotation: !1,
      opacity: 1,
      offset: new g.H(-9, -31),
      size: new g.H(19, 33),
      raiseOnDrag: !1,
      topWhenClick: !1,
      topWhenMouseOver: !1,
      animation: "AMAP_ANIMATION_NONE"
    }, A: function (a) {
      this.CLASS_NAME = this.CLASS_NAME || "AMap.Marker";
      g.c.ya(this, a);
      a = a || {};
      this.dh = !0;
      this.fha = g.a.xb(this);
      this.D = !0;
      a.position && (a.position = this.Ja(a.position));
      a.height && this.setHeight(a.height);
      g.a.tb(this, a);
      g.l.Ie && (this.w.angle =
        0);
      this.kf(this.w, !0);
      this.mapChanged();
      this.D = !1
    }, getAnchor: function () {
      g.c.add(this, "getAnchor");
      return this.get("anchor", null, !0)
    }, setAnchor: function (a) {
      g.c.add(this, "setAnchor");
      this.set("anchor", a)
    }, getId: function () {
      g.c.add(this, "getId");
      return this.fha
    }, setRaiseOnDrag: function (a) {
      g.c.add(this, "setRaiseOnDrag");
      this.set("raiseOnDrag", a)
    }, setPosition: function (a, b) {
      g.c.add(this, "setPosition");
      a = this.Ja(a);
      void 0 !== b && (this.D = !0, this.setHeight(b), this.D = !1);
      this.set("position", a)
    }, getPosition: function () {
      g.c.add(this,
        "getPosition");
      return this.get("position", null, !0)
    }, getBounds: function () {
      var a = this.get("position", null, !0).cb();
      return new g.ne(a, a.cb())
    }, mapChanged: function () {
      this.zl("zoom");
      var a = this.get("map", null, !0);
      a && (this.get("position", null, !0) || this.set("position", a.get("center")), a.tC(this), this.X("zoom", a))
    }, getZooms: function () {
      g.c.add(this, "getZooms");
      return this.get("zooms", null, !0)
    }, zoomChanged: function () {
      var a = this.get("zooms", null, !0);
      if (a) {
        var b = this.get("zoom");
        b < a[0] || b > a[1] ? this.set("outOfZooms",
          !0) : this.set("outOfZooms", !1);
        this.C && this.C.eva()
      }
    }, setIcon: function (a) {
      g.c.add(this, "setIcon");
      this.set("icon", a)
    }, getIcon: function () {
      g.c.add(this, "getIcon");
      return this.get("icon", null, !0)
    }, setContent: function (a) {
      g.c.add(this, "setContent");
      this.set("content", a)
    }, getContent: function () {
      g.c.add(this, "getContent");
      return this.get("content", null, !0)
    }, getContentDom: function () {
      return this.get("contentDom", null, !0)
    }, hide: function () {
      g.c.add(this, "hide");
      !0 == this.get("visible", null, !0) && this.set("visible",
        !1)
    }, show: function () {
      g.c.add(this, "show");
      !1 == this.get("visible", null, !0) && this.set("visible", !0)
    }, setCursor: function (a) {
      g.c.add(this, "setCursor");
      this.set("cursor", a)
    }, setRotation: function (a) {
      g.c.add(this, "setRotation");
      g.l.Ie || this.set("angle", a)
    }, setAngle: function (a) {
      g.c.add(this, "setAngle");
      g.l.Ie || "number" !== typeof a || this.set("angle", a)
    }, getAngle: function () {
      g.c.add(this, "getAngle");
      return this.get("angle", null, !0)
    }, setOffset: function (a) {
      g.c.add(this, "setOffset");
      this.set("offset", a)
    }, getOffset: function () {
      g.c.add(this,
        "getOffset");
      return this.get("offset", null, !0)
    }, setTextAlign: function (a) {
      g.c.add(this, "setTextAlign");
      this.set("textAlign", a)
    }, getTextAlign: function () {
      g.c.add(this, "getTextAlign");
      return this.get("textAlign", null, !0)
    }, setVerticalAlign: function (a) {
      g.c.add(this, "setVerticalAlign");
      this.set("verticalAlign", a)
    }, getVerticalAlign: function () {
      g.c.add(this, "getVerticalAlign");
      return this.get("verticalAlign", null, !0)
    }, setzIndex: function (a) {
      g.c.add(this, "setzIndex");
      this.set("zIndex", a)
    }, getzIndex: function () {
      g.c.add(this,
        "getzIndex");
      return this.get("zIndex", null, !0)
    }, setOpacity: function (a) {
      g.c.add(this, "setOpacity");
      this.set("opacity", a)
    }, setDraggable: function (a) {
      g.c.add(this, "setDraggable");
      this.set("draggable", a)
    }, getDraggable: function () {
      g.c.add(this, "getDraggable");
      return this.get("draggable", null, !0)
    }, moveTo: function (a, b, c) {
      g.c.add(this, "moveTo");
      a = this.Ja(a);
      this.set("move", {Tf: a, speed: b, wb: c})
    }, moveAlong: function (a, b, c, d) {
      g.c.add(this, "moveAlong");
      if (!(2 > a.length)) {
        a = this.Ja(a);
        console.log("", "   -lnglatList.length- ",
          a.length);
        for (var e = [a[0]], f = a[0], h = 1; h < a.length; h += 1) f.gb(a[h]) || (e.push(a[h]), f = a[h]);
        console.log("", "   -x- ", e);
        this.set("move", {Tf: e, speed: b, wb: c, sna: d})
      }
    }, stopMove: function () {
      g.c.add(this, "stopMove");
      this.set("move", !1)
    }, pauseMove: function () {
      g.c.add(this, "pauseMove");
      var a = this.get("move");
      if (!a) return !1;
      a.action = "pause";
      this.set("move", a);
      return !0
    }, resumeMove: function () {
      g.c.add(this, "resumeMove");
      var a = this.get("move");
      if (!a) return !1;
      a.action = "resume";
      this.set("move", a);
      return !0
    }, setShadow: function (a) {
      g.c.add(this,
        "setShadow");
      this.set("shadow", a)
    }, getShadow: function () {
      g.c.add(this, "getShadow");
      return this.get("shadow", null, !0)
    }, setClickable: function (a) {
      g.c.add(this, "setClickable");
      a !== this.get("clickable", null, !0) && this.set("clickable", a)
    }, getClickable: function () {
      g.c.add(this, "getClickable");
      return this.get("clickable", null, !0)
    }, setTitle: function (a, b) {
      g.c.add(this, "setTitle");
      "string" === typeof a && this.set("title", a, b)
    }, getTitle: function () {
      g.c.add(this, "getTitle");
      return this.get("title", null, !0)
    }, setLabel: function (a) {
      g.c.add(this,
        "setLabel");
      a && !g.a.xh(a) && (a = g.extend({}, this.get("label"), a));
      this.set("label", a)
    }, getLabel: function () {
      g.c.add(this, "getLabel");
      return this.get("label", null, !0)
    }, setTop: function (a, b) {
      g.c.add(this, "setTop");
      this.set("isTop", a, b)
    }, getTop: function () {
      g.c.add(this, "getTop");
      return this.get("isTop", null, !0)
    }, setShape: function (a, b) {
      g.c.add(this, "setShape");
      this.set("shape", a, b)
    }, getShape: function () {
      g.c.add(this, "getShape");
      return this.get("shape", null, !0)
    }, setAnimation: function (a, b) {
      g.c.add(this, "setAnimation");
      this.set("animation", a, b)
    }, getAnimation: function () {
      g.c.add(this, "getAnimation");
      return this.get("animation", null, !0)
    }, getMap: function () {
      g.c.add(this, "getMap");
      return this.get("map", null, !0)
    }, markOnAMAP: function (a) {
      g.c.add(this, "markOnAMAP");
      a = a || {};
      var b = {};
      b.name = a.name || this.get("name", null, !0) || "";
      a = this.Ja(a.position) || this.get("position", null, !0);
      b.y = a.Q;
      b.x = a.R;
      g.ci.nt(g.ci.ara(b))
    }
  });
  B.C.Haa = B.C.Hh.extend({
    Saa: Math.pow(2, 31),
    w: {position: null, zooms: [3, 20], opacity: 1, visible: !0, zIndex: 1, rank: 1, extData: null},
    A: function (a) {
      a = a || {};
      this.CLASS_NAME = this.CLASS_NAME || "AMap.LabelMarker";
      g.c.ya(this, a);
      arguments.callee.ma.apply(this, arguments);
      this._LabelMarkerId = g.a.xb(this);
      g.a.tb(this, a);
      this.kf(this.w, !0);
      this.p3 = []
    },
    yn: function (a, b) {
      for (var c = b._LabelMarkerId || null, d = 0, e = a.length; d < e; d++) if (a[d].data.id === c) return d;
      return -1
    },
    P8: function () {
      var a = this.p3 || [];
      if (a.length) {
        for (var b = 0,
               c = a.length; b < c; b++) this.on.apply(this, a[b]);
        this.p3 = []
      }
    },
    lJ: function () {
      var a = this.f;
      if (!a) return null;
      var a = a.ag || [], b = this.yn(a, this);
      return -1 !== b ? a[b] : null
    },
    getName: function () {
      g.c.add(this, "getName");
      return this.w.name
    },
    setName: function (a) {
      g.c.add(this, "setName");
      this.w.name = a;
      var b = this.lJ();
      b && (b.opts.title = a)
    },
    getBounds: function () {
      g.c.add(this, "getBounds");
      var a = this.get("position", null, !0);
      try {
        return "string" === typeof a ? a = new g.U(a.split(",")) : "[object Array]" == Object.prototype.toString.apply(a) &&
          (a = new g.U(a[0], a[1])), new g.ne(a, a.cb())
      } catch (b) {
        return null
      }
    },
    getPosition: function () {
      g.c.add(this, "getPosition");
      var a = this.f.ag, b = this.yn(a, this);
      return -1 !== b ? a[b].data.position : null
    },
    setPosition: function (a) {
      g.c.add(this, "setPosition");
      this.w.position = a;
      var b = this.f;
      if (b) {
        var c = b.ag, d = this.yn(c, this);
        -1 !== d && (c[d].data.position = a, b.Jo())
      }
    },
    getZooms: function () {
      g.c.add(this, "getZooms");
      var a = this.f.ag, b = this.yn(a, this);
      return -1 !== b ? a[b].opts.zooms : null
    },
    setZooms: function (a) {
      g.c.add(this, "setZooms");
      this.w.zooms = a;
      var b = this.f;
      if (b) {
        var c = b.ag || [], d = this.yn(c, this);
        -1 !== d && (c[d].opts.zooms = a, b.Jo())
      }
    },
    getOpacity: function () {
      g.c.add(this, "getOpacity");
      var a = this.f.ag, b = this.yn(a, this);
      return -1 !== b ? a[b].opts.opacity : null
    },
    setOpacity: function (a) {
      g.c.add(this, "setOpacity");
      this.w.opacity = a;
      var b = this.f;
      if (b) {
        var c = b.ag, d = this.yn(c, this);
        -1 !== d && (c[d].opts.opacity = a, b.Jo())
      }
    },
    getzIndex: function () {
      g.c.add(this, "getzIndex");
      if (this.lJ()) return this.w.zIndex
    },
    setzIndex: function (a) {
      g.c.add(this, "setzIndex");
      this.w.zIndex = a;
      var b = this.lJ();
      b && (b.opts.zIndex = a, this.f.Jo())
    },
    getRank: function () {
      g.c.add(this, "getRank");
      return this.w.rank
    },
    setRank: function (a) {
      g.c.add(this, "setZIndex");
      var b = this.lJ();
      this.w.rank = a;
      b && (b.data.rank = a, this.f.Jo())
    },
    getIcon: function () {
      g.c.add(this, "getIcon");
      return this.w.icon
    },
    setIcon: function (a) {
      g.c.add(this, "setIcon");
      this.w.icon = this.w.icon ? g.extend({}, this.w.icon, a) : a;
      var b = this.f;
      if (b) {
        var b = b.ag, c = this.yn(b, this);
        if (-1 !== c) {
          var d = a.size, e = a.clipSize;
          d && (a.size = this.f.yG(d));
          e && (a.clipSize = this.f.yG(e));
          b[c].opts.icon = g.extend({}, b[c].opts.icon, a);
          this.f.Jo()
        }
      }
    },
    getText: function () {
      g.c.add(this, "getText");
      return this.w.text
    },
    setText: function (a) {
      g.c.add(this, "setText");
      this.w.text = this.w.text ? g.extend({}, this.w.text, a) : a;
      var b = this.f;
      if (b) {
        var b = b.ag, c = this.yn(b, this);
        -1 !== c && (b[c].data.txt = void 0 == a.content ? b[c].data.txt : a.content, b[c].opts.text = g.extend({}, b[c].opts.text, a), a.style && (b[c].opts.text.style = g.extend({}, b[c].opts.text.style, a.style)), this.f.Jo())
      }
    },
    setTop: function () {
      var a =
        0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : !0;
      g.c.add(this, "setTop");
      this.f && this.f.HU(this, a);
      a ? (this.vca = this.w.zIndex, this.setzIndex(this.Saa)) : this.setzIndex(this.vca || this.w.zIndex)
    },
    getVisible: function () {
      g.c.add(this, "getVisible");
      var a = this.w.visible;
      this.f && a && (a = !this.f.zR(this._LabelMarkerId));
      return a
    },
    getExtData: function () {
      g.c.add(this, "getExtData");
      return this.w.extData
    },
    setExtData: function (a) {
      g.c.add(this, "setExtData");
      this.w.extData = a
    },
    getOptions: function () {
      return this.w
    },
    show: function () {
      g.c.add(this, "show");
      this.w.visible = !0;
      this.f && this.f.add(this);
      return this
    },
    hide: function () {
      g.c.add(this, "hide");
      this.w.visible = !1;
      this.f && this.f.remove(this);
      return this
    }
  });
  B.C.Vn = B.C.Hh.extend({
    w: {visible: !1, items: []}, A: function (a) {
      this.CLASS_NAME = "AMap.ContextMenu";
      g.c.ya(this, a);
      this.dh = !0;
      g.a.tb(this, a);
      this.w.items = [];
      this.kf(this.w)
    }, addItem: function (a, b, c) {
      g.c.add(this, "addItem");
      this.get("items").push({Sn: a, wb: b, nK: c});
      this.q("items")
    }, removeItem: function (a, b) {
      g.c.add(this, "removeItem");
      var c = this.get("items"), d, e;
      for (e = 0; e < c.length; e += 1) if (d = c[e], d.Sn === a && d.wb === b) {
        c.splice(e, 1);
        break
      }
      this.q("items")
    }, open: function (a, b) {
      g.c.add(this, "open");
      this.D = !0;
      b = g.a.Ja(b);
      this.set("position", b);
      this.map ? this.map && this.map !== a && (this.map.Kz(this), this.map = a, this.setMap(a)) : (this.map = a, this.setMap(a));
      this.q("open", {type: "open", target: this});
      this.D = !1
    }, close: function () {
      g.c.add(this, "close");
      this.D = !0;
      this.setMap(null);
      this.map && (this.map = this.map.ry = null, this.q("close", {type: "close", target: this}));
      this.D = !1
    }
  });
  B.C.Ze = B.C.Hh.extend({
    w: {
      visible: !0,
      offset: new g.H(0, 0),
      showShadow: !1,
      closeWhenClickMap: !1,
      retainWhenClose: !0,
      autoMove: !0,
      altitude: 0,
      anchor: "bottom-center"
    }, A: function (a) {
      this.CLASS_NAME = this.CLASS_NAME || "AMap.InfoWindow";
      g.c.ya(this, a);
      a = a || {};
      this.dh = !0;
      a && a.size && (a.size = g.a.Mq(a.size));
      g.a.tb(this, a);
      this.kf(this.w);
      a.position && this.set("position", g.a.Ja(a.position), !0);
      a.height && this.set("altitude", this.gR(a.height), !0)
    }, open: function (a, b, c) {
      g.c.add(this, "open");
      b = g.a.Ja(b);
      if (a && !this.mL && (b =
        b || this.get("position", null, !0))) {
        this.q("change", {type: "change", target: this});
        c = this.gR(c) || this.get("altitude");
        var d = this.get("map", null, !0);
        d && d === a ? (this.set("altitude", c, !0), this.set("position", b)) : (this.map = a, a.um && a.um.close(), this.set("position", b, !0), this.set("altitude", c, !0), this.D = !0, this.setMap(a), this.D = !1);
        this.q("open", {type: "open", target: this})
      }
    }, close: function () {
      g.c.add(this, "close");
      this.C && this.C.map && (this.D = !0, this.setMap(null), this.map = null, this.q("change", {
        type: "change",
        target: this
      }),
        this.D = !1)
    }, getAnchor: function () {
      g.c.add(this, "getAnchor");
      return this.get("anchor", null, !0)
    }, setAnchor: function (a) {
      g.c.add(this, "setAnchor");
      this.set("anchor", a);
      this.q("change", {type: "change", target: this})
    }, setContent: function (a) {
      g.c.add(this, "setContent");
      this.set("content", a);
      this.q("change", {type: "change", target: this})
    }, getContentU: function () {
      g.c.add(this, "getContentU");
      return this.get("content", null, !0)
    }, getContentDom: function () {
      return this.get("contentDom", null, !0)
    }, getContent: function () {
      g.c.add(this,
        "getContent");
      return this.get("content", null, !0)
    }, setPosition: function (a) {
      g.c.add(this, "setPosition");
      a = g.a.Ja(a);
      this.set("position", a);
      this.q("change", {type: "change", target: this})
    }, setOffset: function (a) {
      g.c.add(this, "setOffset");
      this.set("offset", a);
      this.q("change", {type: "change", target: this})
    }, getPosition: function () {
      g.c.add(this, "getPosition");
      return this.get("position", null, !0)
    }, setSize: function (a) {
      g.c.add(this, "setSize");
      a = g.a.Mq(a);
      this.set("size", a);
      this.q("change", {type: "change", target: this})
    },
    getSize: function (a) {
      g.c.add(this, "getSize");
      var b = this.get("size", null, !0);
      if (b) return b;
      if (this.C && !a) return new g.xd(this.C.sh.offsetWidth, this.C.sh.offsetHeight)
    }, getIsOpen: function () {
      g.c.add(this, "getIsOpen");
      return !!this.get("map")
    }
  });
  B.C.Zb = B.C.hM.extend({
    w: {isOutline: !1, outlineColor: "#000000", geodesic: !1, dirColor: "white", showDir: !1, borderWeight: 1},
    A: function (a) {
      this.CLASS_NAME = this.CLASS_NAME || "AMap.Polyline";
      g.c.ya(this, a);
      this.D = !0;
      B.C.Zb.bd.A.apply(this, arguments);
      this.dh = !0;
      a = a || {};
      a.zIndex = "number" === typeof a.zIndex ? a.zIndex : 50;
      a.path && (a.path = this.Ja(a.path));
      g.a.tb(this, a);
      this.setOptions(this.w);
      this.D = !1
    },
    getLength: function () {
      g.c.add(this, "getLength");
      for (var a = this.get("path"), b = 0, c = 0; c < a.length - 1; c += 1) b += a[c].He(a[c +
      1]);
      return parseFloat(b.toFixed(2))
    },
    getBounds: function () {
      var a = this.get("path");
      if (!a || !a.length) return null;
      for (var b = new g.ne(180, 90, -180, -90), c = a.length - 1; 0 <= c; c -= 1) b.extend(a[c]);
      return b
    }
  });
  (function (a) {
    function b(a, b, c, d) {
      if (1 <= a) return d;
      var e = 1 - a;
      return e * e * b + 2 * e * a * c + a * a * d
    }

    function c(a, b, c, d, e) {
      if (1 <= a) return e;
      var f = 3 * (c[0] - b[0]), h = 3 * (d[0] - c[0]) - f, s = 3 * (c[1] - b[1]);
      c = 3 * (d[1] - c[1]) - s;
      return [(e[0] - b[0] - f - h) * Math.pow(a, 3) + h * Math.pow(a, 2) + f * a + b[0], (e[1] - b[1] - s - c) * Math.pow(a, 3) + c * Math.pow(a, 2) + s * a + b[1]]
    }

    function d(a, c, d, e) {
      return [b(a, c[0], d[0], e[0]), b(a, c[1], d[1], e[1])]
    }

    function e(b, c) {
      c = a.a.Ja(c);
      return b.ND(c, 20).yl()
    }

    function f(b, c) {
      a.a.isArray(c) && (c = new a.H(c[0], c[1]));
      return b.lE(c,
        20)
    }

    function h(b, f, h, n, p, q) {
      var r = null;
      if (b && h && h.length) {
        b = [b];
        b.push.apply(b, h);
        b.push(f);
        h = 0;
        for (r = b.length; h < r; h++) b[h] = e(n, b[h]);
        h = a.extend({tolerance: 4, interpolateNumLimit: [3, 300]}, q);
        q = h.tolerance;
        h = h.interpolateNumLimit;
        q = Math.max(2, q);
        for (var s = r = 0, u = 0, v = b.length; u < v - 1; u++) var w = b[u], t = b[u + 1], r = r + Math.abs(t[0] - w[0]), s = s + Math.abs(t[1] - w[1]);
        a:{
          p = Math.min(h[1], Math.max(h[0], Math.round(Math.max(r, s) / p / q)));
          q = null;
          switch (b.length) {
            case 3:
              q = d;
              break;
            case 4:
              q = c;
              break;
            default:
              r = null;
              break a
          }
          h = [];
          r = [0].concat(b);
          for (s = 1; s < p - 2; s++) r[0] = s / p, h.push(q.apply(null, r));
          h.push(b[b.length - 1]);
          r = h
        }
      }
      return r || [e(n, f)]
    }

    a.Kw = {
      FGa: d, nDa: c, HI: function () {
        function a(b, c, d) {
          return (((1 - 3 * d + 3 * c) * b + (3 * d - 6 * c)) * b + 3 * c) * b
        }

        function b(a) {
          return a
        }

        var c = {}, d = "function" === typeof Float32Array;
        return function (e, f, h, s) {
          function u(b) {
            if (0 === b) b = 0; else if (1 === b) b = 1; else {
              for (var c = 0, d = 1; 10 !== d && w[d] <= b; ++d) c += 0.1;
              --d;
              var d = c + (b - w[d]) / (w[d + 1] - w[d]) * 0.1,
                l = 3 * (1 - 3 * h + 3 * e) * d * d + 2 * (3 * h - 6 * e) * d + 3 * e;
              if (0.001 <= l) {
                for (c = 0; 4 > c; ++c) {
                  l = 3 *
                    (1 - 3 * h + 3 * e) * d * d + 2 * (3 * h - 6 * e) * d + 3 * e;
                  if (0 === l) break;
                  d -= (a(d, e, h) - b) / l
                }
                b = d
              } else if (0 === l) b = d; else {
                var d = c, c = c + 0.1, m, n = 0;
                do m = d + (c - d) / 2, l = a(m, e, h) - b, 0 < l ? c = m : d = m; while (1E-7 < Math.abs(l) && 10 > ++n);
                b = m
              }
              b = a(b, f, s)
            }
            return b
          }

          if (!(0 <= e && 1 >= e && 0 <= h && 1 >= h)) throw Error("bezier x values must be in [0, 1] range");
          var v = arguments.toString();
          if (c[v]) return c[v];
          if (e === f && h === s) return b;
          for (var w = d ? new Float32Array(11) : Array(11), t = 0; 11 > t; ++t) w[t] = a(0.1 * t, e, h);
          return c[v] = u
        }
      }(), f4: function (a, b, c, d) {
        var e, f, r = [];
        e = 0;
        for (f =
               a.length; e < f; e += 1) r.push.apply(r, h(a[e - 1], a[e], a[e].controlPoints, b, c, d));
        return r
      }, Oqa: function (a, b, c, d) {
        a = this.f4(a, b, c, d);
        c = [];
        d = 0;
        for (var e = a.length; d < e; d++) c.push(f(b, a[d]));
        return c
      }
    }
  })(g);
  B.C.tA = B.C.Zb.extend({
    w: {tolerance: 4, interpolateNumLimit: [3, 300]}, A: function (a) {
      this.CLASS_NAME = "AMap.BezierCurve";
      g.c.ya(this, a);
      B.C.tA.bd.A.apply(this, arguments)
    }, getLength: function () {
      g.c.add(this, "getLength");
      this.get("map");
      this.D = !0;
      var a = this.getInterpolateLngLats();
      this.D = !1;
      return g.Ft.distanceOfLine(a)
    }, getInterpolateLngLats: function () {
      g.c.add(this, "getInterpolateLngLats");
      var a = this.get("map");
      return g.Kw.Oqa(this.get("path"), a && a.pj || g.bi.NL, Math.pow(2, 2), this.w)
    }, getSerializedPath: function () {
      g.c.add(this,
        "getSerializedPath");
      for (var a = this.get("path", null, !0), b = [], c = 0, d = a.length; c < d; c++) {
        var e = a[c];
        if (e instanceof g.U) {
          var f = [];
          if (e.controlPoints) for (var h = 0, k = e.controlPoints.length; h < k; h++) f.push(e.controlPoints[h].DR()), f.push(e.controlPoints[h].AR());
          f.push(e.DR());
          f.push(e.AR());
          b.push(f)
        } else b.push(e)
      }
      return b
    }, Ja: function (a) {
      var b = typeof a[0];
      if (g.a.isArray(a) && "object" === b) {
        for (b = 0; b < a.length; b += 1) a[b] = this.xja(a[b]);
        return a
      }
      return [this.kGa(a)]
    }, xja: function (a) {
      var b;
      if (a instanceof g.U) b =
        a; else {
        b = typeof a[0];
        var c, d, e = [];
        if ("string" === b || "number" === b) {
          d = a.length;
          if (d % 2) throw Error("LngLat number should be even, now it's " + d);
          b = new g.U(a[d - 2], a[d - 1]);
          c = 0;
          for (d -= 2; c < d; c += 2) e.push(new g.U(a[c], a[c + 1]))
        } else if (g.a.isArray(a[0])) for (d = a.length, b = new g.U(a[d - 1][0], a[d - 1][1]), c = 0, d -= 1; c < d; c++) e.push(new g.U(a[c][0], a[c][1])); else throw Error("AMap.LngLat expected, now it's " + a);
        b && e.length && (b.controlPoints = g.a.Ja(e))
      }
      if (b.controlPoints && 2 < b.controlPoints.length) throw Error("Control Points Number should be 1 or 2 !");
      return b
    }
  });
  B.C.Ec = B.C.hM.extend({
    A: function (a) {
      this.CLASS_NAME = this.CLASS_NAME || "AMap.Polygon";
      g.c.ya(this, a);
      this.D = !0;
      B.C.Ec.bd.A.apply(this, arguments);
      this.dh = !0;
      a = a || {};
      a.zIndex = "number" === typeof a.zIndex ? a.zIndex : 10;
      a.path && (a.path = this.Ja(a.path));
      g.a.tb(this, g.extend({fillColor: "#FFAA00", fillOpacity: 0.9}, a));
      this.setOptions(this.w);
      this.D = !1
    }, u4: function (a) {
      var b = 6378137 * Math.PI / 180, c = 0, d = a.length;
      if (3 > d) return 0;
      for (var e = 0; e < d - 1; e += 1) var f = a[e], h = a[e + 1], k = f.R * b * Math.cos(f.Q * Math.PI / 180), f = f.Q * b, l = h.R *
        b * Math.cos(h.Q * Math.PI / 180), c = c + (k * h.Q * b - l * f);
      e = a[e];
      a = a[0];
      d = e.R * b * Math.cos(e.Q * Math.PI / 180);
      e = e.Q * b;
      h = a.R * b * Math.cos(a.Q * Math.PI / 180);
      c += d * a.Q * b - h * e;
      return 0.5 * Math.abs(c)
    }, fK: function (a) {
      return a.length ? a[0] instanceof g.U ? [[a]] : a[0] instanceof Array && a[0][0] instanceof g.U ? [a] : a : a
    }, getArea: function () {
      g.c.add(this, "getArea");
      for (var a = this.get("path", null, !0), a = this.fK(a), b = 0, c = 0, d = a.length; c < d; c += 1) for (var e = a[c], b = b + this.u4(e[0]), f = 1; f < e.length; f += 1) b -= this.u4(e[f]);
      return Number(b.toFixed(2))
    },
    toString: function () {
      g.c.add(this, "toString");
      for (var a = this.get("path"), a = this.fK(a), b = [], c = 0, d = a.length; c < d; c += 1) {
        for (var e = a[c], f = [], h = 0, k = e.length; h < k; h += 1) f.push(e[h].join(";"));
        b.push(f.join("|"))
      }
      return b.join("^")
    }, getBounds: function () {
      var a = this.get("path");
      if (a && a.length) {
        for (var a = this.fK(a), b = new g.ne(180, 90, -180, -90), c = 0, d = a.length; c < d; c += 1) for (var e = a[c][0], f = e.length - 1; 0 <= f; f -= 1) b.extend(e[f]);
        return b
      }
      return null
    }, contains: function (a) {
      g.c.add(this, "contains");
      a = g.a.Ja(a);
      var b = this.get("path"),
        b = this.fK(b);
      a = [a.R, a.Q];
      for (var c = 0, d = b.length; c < d; c += 1) {
        for (var e = b[c], f = !1, h = 0, k = e.length; h < k && (f = this.ana(e[h]), g.wd.vq(f) || f.reverse(), f = g.wd.Sd(a, f, 0 === h ? !0 : !1), 0 < h && (f = !f), f); h += 1) ;
        if (f) return !0
      }
      return !1
    }, ana: function (a) {
      for (var b = [], c = 0; c < a.length; c += 1) b.push([a[c].R, a[c].Q]);
      return b
    }
  });
  B.C.jh = B.C.ed.extend({
    w: {
      visible: !0,
      zIndex: 10,
      strokeColor: "#006600",
      strokeOpacity: 0.9,
      strokeWeight: 3,
      strokeStyle: "solid",
      strokeDasharray: [10, 5],
      radius: 1E3,
      fillColor: "#006600",
      fillOpacity: 0.9,
      unit: "miter"
    }, A: function (a) {
      this.CLASS_NAME = this.CLASS_NAME || "AMap.Circle";
      g.c.ya(this, a);
      this.D = !0;
      B.C.jh.bd.A.apply(this, arguments);
      a = a || {};
      a.center && (a.center = g.a.Ja(a.center));
      a.zIndex = "number" === typeof a.zIndex ? a.zIndex : 10;
      g.a.lk(a.radius, "string") && (a.radius = parseFloat(a.radius), isNaN(a.radius) && delete a.radius);
      g.a.tb(this, a);
      this.dh = this.w.center ? !0 : !1;
      this.setOptions(this.w);
      this.D = !1
    }, setCenter: function (a, b) {
      g.c.add(this, "setCenter");
      (a = g.a.Ja(a)) && a instanceof g.U && (this.C && this.C.get("deltaPos") && this.C.set("deltaPos", [0, 0], !0), this.set("center", a), this.q("change", {
        type: "change",
        target: this
      }), this.dh || (this.dh = !0, this.get("map") && this.get("map").q("overlays")), b || this.q("setCenter"))
    }, getCenter: function () {
      g.c.add(this, "getCenter");
      var a = this.get("center", null, !0);
      this.C && this.C.get("deltaPos") && (a =
        this.C.Tt([a], this.C.get("deltaPos"))[0]);
      return a
    }, reset: function () {
      var a = this.get("center", null, !0);
      this.C && this.C.get("deltaPos") && (a = this.C.Tt([a], this.C.get("deltaPos"))[0], this.C.set("deltaPos", [0, 0], !0));
      this.set("center", a)
    }, setRadius: function (a, b) {
      g.c.add(this, "setRadius");
      this.set("radius", a);
      this.q("change", {type: "change", target: this});
      b || this.q("setRadius")
    }, getPath: function (a) {
      g.c.add(this, "getPath");
      a = a || 36;
      for (var b = this.get("center", null, !0), c = this.get("radius", null, !0), d = [], e = 0; e <
      a; e += 1) {
        var f = Math.PI * e / a * 2, h = Math.cos(f) * c, f = Math.sin(f) * c;
        d.push(b.offset(h, f))
      }
      return d
    }, getRadius: function () {
      g.c.add(this, "getRadius");
      return this.get("radius", null, !0)
    }, getBounds: function () {
      var a = this.get("center"), b = this.get("radius");
      if (!a) return null;
      var c = a.offset(-b, -b), a = a.offset(b, b);
      return new g.ne(c, a)
    }, contains: function (a) {
      g.c.add(this, "contains");
      return this.get("center").He(a) <= this.get("radius") ? !0 : !1
    }
  });
  B.C.TV = B.C.jh.extend({
    A: function (a) {
      this.CLASS_NAME = "AMap.CircleMarker";
      g.c.ya(this, a);
      a = a || {};
      a.unit = "px";
      void 0 === a.radius ? a.radius = 20 : g.a.lk(a.radius, "string") && (a.radius = parseFloat(a.radius), isNaN(a.radius) && (a.radius = 20));
      B.C.TV.bd.A.apply(this, arguments)
    }, getBounds: function () {
      this.D = !0;
      var a = this.getCenter();
      this.D = !1;
      return new g.ne(a, a.cb())
    }, contains: function (a) {
      g.c.add(this, "contains");
      this.D = !0;
      var b = this.getMap();
      this.D = !1;
      if (!b) return !1;
      var c = this.get("center");
      b.D = !0;
      var d = !1;
      c.He(a) <=
      this.get("radius") * b.getResolution(c) && (d = !0);
      b.D = !1;
      return d
    }
  });
  var rc = g.da.extend({
    A: function (a) {
      var b = Array(3), c;
      c = a instanceof Array ? a : a instanceof g.Hl || a instanceof g.Pa ? a.elements : arguments;
      b[0] = c[0] || 0;
      b[1] = c[1] || 0;
      b[2] = c[2] || 0;
      this.elements = b
    }, length: function () {
      return Math.sqrt(this.i6())
    }, i6: function () {
      var a = this.elements;
      return a[0] * a[0] + a[1] * a[1] + a[2] * a[2]
    }, normalize: function () {
      var a = this.elements, b = a[0], c = a[1], d = a[2], e = Math.sqrt(b * b + c * c + d * d);
      if (e) {
        if (1 === e) return this
      } else return a[0] = 0, a[1] = 0, a[2] = 0, this;
      e = 1 / e;
      a[0] = b * e;
      a[1] = c * e;
      a[2] = d * e;
      return this
    },
    cb: function () {
      return new g.Pa(this)
    }, copy: function (a) {
      var b = this.elements;
      a = a.elements;
      b[0] = a[0];
      b[1] = a[1];
      b[2] = a[2];
      return this
    }, set: function (a, b, c) {
      var d = this.elements;
      d[0] = a;
      d[1] = b;
      d[2] = c
    }, gb: function (a) {
      var b = this.elements;
      a = a.elements;
      return b[0] === a[0] && b[1] === a[1] && b[2] === a[2]
    }, Mn: function (a) {
      var b = this.elements;
      b[0] *= a;
      b[1] *= a;
      b[2] *= a;
      return this
    }, add: function (a) {
      var b = this.elements;
      a = a.elements;
      b[0] += a[0];
      b[1] += a[1];
      b[2] += a[2];
      return this
    }, Yla: function (a, b) {
      var c = a.elements, d = b.elements,
        e = this.elements;
      e[0] = c[0] + d[0];
      e[1] = c[1] + d[1];
      e[2] = c[2] + d[2];
      return this
    }, sub: function (a) {
      a = a.elements;
      var b = this.elements;
      b[0] -= a[0];
      b[1] -= a[1];
      b[2] -= a[2];
      return this
    }, Wz: function (a, b) {
      var c = a.elements, d = b.elements, e = this.elements;
      e[0] = c[0] - d[0];
      e[1] = c[1] - d[1];
      e[2] = c[2] - d[2];
      return this
    }, hs: function (a) {
      a = a.elements;
      var b = this.elements;
      b[0] = b[1] * a[2] - b[2] * a[1];
      b[1] = b[2] * a[0] - b[0] * a[2];
      b[2] = b[0] * a[1] - b[1] * a[0];
      return this
    }, wy: function (a, b) {
      var c = a.elements, d = b.elements, e = this.elements;
      e[0] = c[1] * d[2] -
        c[2] * d[1];
      e[1] = c[2] * d[0] - c[0] * d[2];
      e[2] = c[0] * d[1] - c[1] * d[0];
      return this
    }, Rf: function (a) {
      a = a.elements;
      var b = this.elements;
      return b[0] * a[0] + b[1] * a[1] + b[2] * a[2]
    }, He: function (a) {
      return Math.sqrt(this.b3(a))
    }, b3: function (a) {
      var b = a.elements, c = this.elements;
      a = c[0] - b[0];
      var d = c[1] - b[1], b = c[2] - b[2];
      return a * a + d * d + b * b
    }, uf: function (a) {
      var b = this.elements[0], c = this.elements[1], d = this.elements[2];
      a = a.elements;
      var e = 1 / (a[3] * b + a[7] * c + a[11] * d + a[15]);
      this.elements[0] = (a[0] * b + a[4] * c + a[8] * d + a[12]) * e;
      this.elements[1] =
        (a[1] * b + a[5] * c + a[9] * d + a[13]) * e;
      this.elements[2] = (a[2] * b + a[6] * c + a[10] * d + a[14]) * e;
      return this
    }
  });
  g.Pa = rc;
  g.Pa.Xb({
    Rf: "dot",
    cb: "clone",
    add: "add",
    sub: "sub",
    Yla: "addVectors",
    Wz: "subVectors",
    wy: "crossVectors",
    normalize: "normalize",
    length: "length"
  });
  var sc = g.da.extend({
    A: function (a) {
      var b = Array(4), c;
      c = a instanceof Array ? a : arguments;
      b[0] = c[0];
      b[1] = c[1];
      b[2] = c[2];
      b[3] = c[3] || 1;
      this.elements = b
    }, copy: function (a) {
      var b = this.elements;
      a = a.elements;
      b[0] = a[0];
      b[1] = a[1];
      b[2] = a[2];
      b[3] = void 0 !== a[3] ? a[3] : 1;
      return this
    }, multiply: function (a) {
      var b = this.elements;
      b[0] *= a;
      b[1] *= a;
      b[2] *= a;
      b[3] *= a
    }, uf: function (a) {
      var b = this.elements[0], c = this.elements[1], d = this.elements[2], e = this.elements[3];
      a = a.elements;
      this.elements[0] = a[0] * b + a[4] * c + a[8] * d + a[12] * e;
      this.elements[1] =
        a[1] * b + a[5] * c + a[9] * d + a[13] * e;
      this.elements[2] = a[2] * b + a[6] * c + a[10] * d + a[14] * e;
      this.elements[3] = a[3] * b + a[7] * c + a[11] * d + a[15] * e;
      return this
    }
  });
  g.Hl = sc;

  function vc(a, b) {
    this.wz = void 0 !== a ? a : new g.Pa(1, 0, 0);
    this.LC = void 0 !== b ? b : 0
  }

  g.Vw = vc;
  vc.prototype = {
    set: function (a, b) {
      this.wz.copy(a);
      this.LC = b;
      return this
    }, normalize: function () {
      var a = 1 / this.wz.length();
      this.wz.Mn(a);
      this.LC *= a;
      return this
    }, AI: function (a) {
      return this.wz.Rf(a) + this.LC
    }
  };

  function wc(a, b, c, d, e) {
    a.wz.set(b, c, d);
    a.LC = e;
    return a
  };

  function xc(a, b, c, d, e, f) {
    this.iE = [void 0 !== a ? a : new g.Vw, void 0 !== b ? b : new g.Vw, void 0 !== c ? c : new g.Vw, void 0 !== d ? d : new g.Vw, void 0 !== e ? e : new g.Vw, void 0 !== f ? f : new g.Vw]
  }

  g.cW = xc;
  xc.prototype = {
    set: function (a, b, c, d, e, f) {
      var h = this.iE;
      h[0].copy(a);
      h[1].copy(b);
      h[2].copy(c);
      h[3].copy(d);
      h[4].copy(e);
      h[5].copy(f);
      return this
    }, cb: function () {
      return (new g.cW).copy(this)
    }, copy: function (a) {
      for (var b = this.iE, c = 0; 6 > c; c++) b[c].copy(a.iE[c]);
      return this
    }, CJ: function () {
      var a = new g.Pa, b = new g.Pa, c = a.elements, d = b.elements;
      return function (e) {
        var f = this.iE, h = e.max.elements;
        e = e.min.elements;
        for (var k = 0; 6 > k; k++) {
          var l = f[k], m = l.wz.elements;
          c[0] = 0 < m[0] ? e[0] : h[0];
          d[0] = 0 < m[0] ? h[0] : e[0];
          c[1] = 0 < m[1] ?
            e[1] : h[1];
          d[1] = 0 < m[1] ? h[1] : e[1];
          c[2] = 0 < m[2] ? e[2] : h[2];
          d[2] = 0 < m[2] ? h[2] : e[2];
          m = l.AI(a);
          l = l.AI(b);
          if (0 > m && 0 > l) return !1
        }
        return !0
      }
    }()
  };
  (function (a) {
    function b(a) {
      this.elements = a || [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
    }

    a.gM = function (a) {
      this.elements = [a.elements[0], a.elements[1], a.elements[2], a.elements[4], a.elements[5], a.elements[6], a.elements[8], a.elements[9], a.elements[10]]
    };
    b.prototype.BU = function () {
      var a = this.elements;
      a[0] = 1;
      a[4] = 0;
      a[8] = 0;
      a[12] = 0;
      a[1] = 0;
      a[5] = 1;
      a[9] = 0;
      a[13] = 0;
      a[2] = 0;
      a[6] = 0;
      a[10] = 1;
      a[14] = 0;
      a[3] = 0;
      a[7] = 0;
      a[11] = 0;
      a[15] = 1
    };
    b.prototype.set = function (a) {
      if (a.elements !== this.elements) return this.elements = a.elements.slice(0),
        this
    };
    b.prototype.toFixed = function (b) {
      for (var d = this.elements, e = 0; 16 > e; ++e) 0 !== d[e] && (d[e] = a.a.vb(d[e], b));
      return this
    };
    b.prototype.concat = function (a) {
      var b, e, f, h, k, l, m;
      e = b = this.elements;
      f = a.elements;
      if (b === f) for (f = Array(16), a = 0; 16 > a; ++a) f[a] = b[a];
      for (a = 0; 4 > a; a++) h = e[a], k = e[a + 4], l = e[a + 8], m = e[a + 12], b[a] = h * f[0] + k * f[1] + l * f[2] + m * f[3], b[a + 4] = h * f[4] + k * f[5] + l * f[6] + m * f[7], b[a + 8] = h * f[8] + k * f[9] + l * f[10] + m * f[11], b[a + 12] = h * f[12] + k * f[13] + l * f[14] + m * f[15];
      return this
    };
    b.multiply = function (b, d) {
      var e = Array(16), f, h,
        k, l, m, n, p;
      k = h = b.elements;
      l = d.elements;
      if (h === l) for (f = 0; 16 > f; ++f) e[f] = h[f];
      for (f = 0; 4 > f; f++) h = k[f], m = k[f + 4], n = k[f + 8], p = k[f + 12], e[f] = h * l[0] + m * l[1] + n * l[2] + p * l[3], e[f + 4] = h * l[4] + m * l[5] + n * l[6] + p * l[7], e[f + 8] = h * l[8] + m * l[9] + n * l[10] + p * l[11], e[f + 12] = h * l[12] + m * l[13] + n * l[14] + p * l[15];
      return new a.Dc(e)
    };
    b.prototype.multiply = b.prototype.concat;
    b.prototype.Dh = function (b) {
      var d = this.elements;
      b = b.elements;
      var e = new a.Hl, f = e.elements;
      f[0] = b[0] * d[0] + b[1] * d[4] + b[2] * d[8] + b[3] * d[12];
      f[1] = b[0] * d[1] + b[1] * d[5] + b[2] * d[9] + b[3] *
        d[13];
      f[2] = b[0] * d[2] + b[1] * d[6] + b[2] * d[10] + b[3] * d[14];
      f[3] = b[0] * d[3] + b[1] * d[7] + b[2] * d[11] + b[3] * d[15];
      return e
    };
    b.prototype.cA = function () {
      var a, b;
      a = this.elements;
      b = a[1];
      a[1] = a[4];
      a[4] = b;
      b = a[2];
      a[2] = a[8];
      a[8] = b;
      b = a[3];
      a[3] = a[12];
      a[12] = b;
      b = a[6];
      a[6] = a[9];
      a[9] = b;
      b = a[7];
      a[7] = a[13];
      a[13] = b;
      b = a[11];
      a[11] = a[14];
      a[14] = b;
      return this
    };
    b.prototype.xxa = function (a) {
      var b, e, f;
      b = a.elements;
      a = this.elements;
      e = [];
      e[0] = b[5] * (b[10] * b[15] - b[11] * b[14]) - b[9] * (b[6] * b[15] + b[7] * b[14]) + b[13] * (b[6] * b[11] - b[7] * b[10]);
      e[4] = -b[4] *
        (b[10] * b[15] - b[11] * b[14]) + b[8] * (b[6] * b[15] - b[7] * b[14]) - b[12] * (b[6] * b[11] - b[7] * b[10]);
      e[8] = b[4] * (b[9] * b[15] - b[11] * b[13]) - b[8] * (b[5] * b[15] - b[7] * b[13]) + b[12] * (b[5] * b[11] - b[7] * b[9]);
      e[12] = -b[4] * (b[9] * b[14] - b[10] * b[13]) + b[8] * (b[5] * b[14] - b[6] * b[13]) - b[12] * (b[5] * b[10] - b[6] * b[9]);
      e[1] = -b[1] * (b[10] * b[15] - b[11] * b[14]) + b[9] * (b[2] * b[15] - b[3] * b[14]) - b[13] * (b[2] * b[11] - b[3] * b[10]);
      e[5] = b[0] * (b[10] * b[15] - b[11] * b[14]) - b[8] * (b[2] * b[15] - b[3] * b[14]) + b[12] * (b[2] * b[11] - b[3] * b[10]);
      e[9] = -b[0] * (b[9] * b[15] - b[11] * b[13]) + b[8] *
        (b[1] * b[15] - b[3] * b[13]) - b[12] * (b[1] * b[11] - b[3] * b[9]);
      e[13] = b[0] * (b[9] * b[14] - b[10] * b[13]) - b[8] * (b[1] * b[14] - b[2] * b[13]) + b[12] * (b[1] * b[10] - b[2] * b[9]);
      e[2] = b[1] * (b[6] * b[15] - b[7] * b[14]) - b[5] * (b[2] * b[15] - b[3] * b[14]) + b[13] * (b[2] * b[7] - b[3] * b[6]);
      e[6] = -b[0] * (b[6] * b[15] - b[7] * b[14]) + b[4] * (b[2] * b[15] - b[3] * b[14]) - b[12] * (b[2] * b[7] - b[3] * b[6]);
      e[10] = b[0] * (b[5] * b[15] - b[7] * b[13]) - b[4] * (b[1] * b[15] - b[3] * b[13]) + b[12] * (b[1] * b[7] - b[3] * b[5]);
      e[14] = -b[0] * (b[5] * b[14] - b[6] * b[13]) + b[4] * (b[1] * b[14] - b[2] * b[13]) - b[12] * (b[1] * b[6] -
        b[2] * b[5]);
      e[3] = -b[1] * (b[6] * b[11] - b[7] * b[10]) + b[5] * (b[2] * b[11] - b[3] * b[10]) - b[9] * (b[2] * b[7] - b[3] * b[6]);
      e[7] = b[0] * (b[6] * b[11] - b[7] * b[10]) - b[4] * (b[2] * b[11] + b[3] * b[10]) + b[8] * (b[2] * b[7] - b[3] * b[6]);
      e[11] = -b[0] * (b[5] * b[11] + b[7] * b[9]) + b[4] * (b[1] * b[11] - b[3] * b[9]) - b[8] * (b[1] * b[7] + b[3] * b[5]);
      e[15] = b[0] * (b[5] * b[10] - b[6] * b[9]) - b[4] * (b[1] * b[10] + b[2] * b[9]) + b[8] * (b[1] * b[6] - b[2] * b[5]);
      f = b[0] * e[0] + b[1] * e[4] + b[2] * e[8] + b[3] * e[12];
      if (0 === f) return this;
      f = 1 / f;
      for (b = 0; 16 > b; b++) a[b] = e[b] * f;
      return this
    };
    b.prototype.Hg = function () {
      return (new b).xxa(this)
    };
    b.prototype.EU = function (a, b, e, f, h, k) {
      var l, m, n, p;
      if (a === b || e === f || h === k) throw"null frustum";
      m = 1 / (b - a);
      n = 1 / (f - e);
      p = 1 / (k - h);
      l = this.elements;
      l[0] = 2 * m;
      l[1] = 0;
      l[2] = 0;
      l[3] = 0;
      l[4] = 0;
      l[5] = 2 * n;
      l[6] = 0;
      l[7] = 0;
      l[8] = 0;
      l[9] = 0;
      l[10] = -2 * p;
      l[11] = 0;
      l[12] = -(b + a) * m;
      l[13] = -(f + e) * n;
      l[14] = -(k + h) * p;
      l[15] = 1;
      return this
    };
    b.prototype.cva = function (a, d, e, f, h, k) {
      return this.concat((new b).EU(a, d, e, f, h, k))
    };
    b.prototype.vxa = function (a, b, e, f, h, k) {
      var l, m, n, p;
      if (a === b || f === e || h === k) throw"null frustum";
      if (0 >= h) throw"near <= 0";
      if (0 >=
        k) throw"far <= 0";
      m = 1 / (b - a);
      n = 1 / (f - e);
      p = 1 / (k - h);
      l = this.elements;
      l[0] = 2 * h * m;
      l[1] = 0;
      l[2] = 0;
      l[3] = 0;
      l[4] = 0;
      l[5] = 2 * h * n;
      l[6] = 0;
      l[7] = 0;
      l[8] = (b + a) * m;
      l[9] = (f + e) * n;
      l[10] = -(k + h) * p;
      l[11] = -1;
      l[12] = 0;
      l[13] = 0;
      l[14] = -2 * h * k * p;
      l[15] = 0;
      return this
    };
    b.prototype.pR = function (a, d, e, f, h, k) {
      return this.concat((new b).vxa(a, d, e, f, h, k))
    };
    b.prototype.Y8 = function (a, b, e, f) {
      var h, k;
      if (e === f || 0 === b) throw"null frustum";
      if (0 >= e) throw"near <= 0";
      if (0 >= f) throw"far <= 0";
      a /= 2;
      k = Math.sin(a);
      if (0 === k) throw"null frustum";
      h = 1 / (f - e);
      k = Math.cos(a) /
        k;
      a = this.elements;
      a[0] = k / b;
      a[1] = 0;
      a[2] = 0;
      a[3] = 0;
      a[4] = 0;
      a[5] = k;
      a[6] = 0;
      a[7] = 0;
      a[8] = 0;
      a[9] = 0;
      a[10] = -(f + e) * h;
      a[11] = -1;
      a[12] = 0;
      a[13] = 0;
      a[14] = -2 * e * f * h;
      a[15] = 0;
      return this
    };
    b.prototype.perspective = function (a, d, e, f) {
      return this.concat((new b).Y8(a, d, e, f))
    };
    b.prototype.bw = function (a, b, e) {
      var f = this.elements;
      f[0] = a;
      f[4] = 0;
      f[8] = 0;
      f[12] = 0;
      f[1] = 0;
      f[5] = b;
      f[9] = 0;
      f[13] = 0;
      f[2] = 0;
      f[6] = 0;
      f[10] = e;
      f[14] = 0;
      f[3] = 0;
      f[7] = 0;
      f[11] = 0;
      f[15] = 1;
      return this
    };
    b.prototype.scale = function (a, b, e) {
      var f = this.elements;
      f[0] *= a;
      f[4] *= b;
      f[8] *= e;
      f[1] *= a;
      f[5] *= b;
      f[9] *= e;
      f[2] *= a;
      f[6] *= b;
      f[10] *= e;
      f[3] *= a;
      f[7] *= b;
      f[11] *= e;
      return this
    };
    b.prototype.b9 = function (a, b, e) {
      var f = this.elements;
      f[12] = a;
      f[13] = b;
      f[14] = e;
      return this
    };
    b.prototype.translate = function (a, b, e) {
      var f = this.elements;
      f[12] += f[0] * a + f[4] * b + f[8] * e;
      f[13] += f[1] * a + f[5] * b + f[9] * e;
      f[14] += f[2] * a + f[6] * b + f[10] * e;
      f[15] += f[3] * a + f[7] * b + f[11] * e;
      return this
    };
    b.prototype.Sz = function (a, b, e, f) {
      var h, k, l, m, n, p, q, r;
      a = Math.PI * a / 180;
      h = this.elements;
      k = Math.sin(a);
      a = Math.cos(a);
      0 !== b && 0 === e && 0 === f ?
        (0 > b && (k = -k), h[0] = 1, h[4] = 0, h[8] = 0, h[12] = 0, h[1] = 0, h[5] = a, h[9] = -k, h[13] = 0, h[2] = 0, h[6] = k, h[10] = a, h[14] = 0, h[3] = 0, h[7] = 0, h[11] = 0) : 0 === b && 0 !== e && 0 === f ? (0 > e && (k = -k), h[0] = a, h[4] = 0, h[8] = k, h[12] = 0, h[1] = 0, h[5] = 1, h[9] = 0, h[13] = 0, h[2] = -k, h[6] = 0, h[10] = a, h[14] = 0, h[3] = 0, h[7] = 0, h[11] = 0) : 0 === b && 0 === e && 0 !== f ? (0 > f && (k = -k), h[0] = a, h[4] = -k, h[8] = 0, h[12] = 0, h[1] = k, h[5] = a, h[9] = 0, h[13] = 0, h[2] = 0, h[6] = 0, h[10] = 1, h[14] = 0, h[3] = 0, h[7] = 0, h[11] = 0) : (l = Math.sqrt(b * b + e * e + f * f), 1 !== l && (l = 1 / l, b *= l, e *= l, f *= l), l = 1 - a, m = b * e, n = e * f, p = f * b, q = b * k,
          r = e * k, k *= f, h[0] = b * b * l + a, h[1] = m * l + k, h[2] = p * l - r, h[3] = 0, h[4] = m * l - k, h[5] = e * e * l + a, h[6] = n * l + q, h[7] = 0, h[8] = p * l + r, h[9] = n * l - q, h[10] = f * f * l + a, h[11] = 0, h[12] = 0, h[13] = 0, h[14] = 0);
      h[15] = 1;
      return this
    };
    b.prototype.rotate = function (a, d, e, f) {
      return this.concat((new b).Sz(a, d, e, f))
    };
    b.prototype.et = function (a) {
      return this.rotate(a, 1, 0, 0)
    };
    b.prototype.ft = function (a) {
      return this.rotate(a, 0, 1, 0)
    };
    b.prototype.gt = function (a) {
      return this.rotate(a, 0, 0, 1)
    };
    b.prototype.Yu = function (a) {
      for (var b = 0, e = this.elements.length; b < e; b++) if (this.elements[b] !==
        a.elements[b]) return !1;
      return !0
    };
    b.prototype.cb = function () {
      return new b(this.elements.slice(0))
    };
    a.Dc = b
  })(g);
  B.C.Et = B.C.Ec.extend({
    w: {
      visible: !0,
      zIndex: 10,
      strokeColor: "#006600",
      strokeOpacity: 0.9,
      strokeWeight: 3,
      strokeStyle: "solid",
      strokeDasharray: [10, 5],
      radius: [1E3, 1E3],
      fillColor: "#006600",
      fillOpacity: 0.9
    }, A: function () {
      var a = this, b = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
      this.CLASS_NAME = "AMap.Ellipse";
      g.c.ya(this, b);
      var b = g.extend({}, this.w, b), c = this.Ur(b);
      b.path = c;
      B.C.Et.bd.A.call(this, b);
      this.set("path", c);
      this.get("center") && this.get("map") || (this.dh = !1);
      this.on("movepoly", function (b) {
        var c =
          a.get("map");
        b = c.Od(c.Ab(a.get("center")).add(b.uK));
        "3D" === c.view.type && a.set("deltaPos", [0, 0], !0);
        a.set("center", b)
      })
    }, Ur: function () {
      var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, b = [],
        c = a.center || this.get("center"), d = a.map || this.get("map");
      if (c && d) for (var c = g.a.Ja(c), e = a.radius || this.get("radius"), f = d.Ab(c), a = f.x, f = f.y, h = g.a.map(e, function (a) {
        return a / d.getResolution(c, 20)
      }), e = h[0], h = h[1], k = g.l.ba, l = (k ? 4 : 1) * Math.PI / 180, m = 0, k = k ? 89 : 359; m <= k; m++) {
        var n = m * l, n = {
          x: a + e * Math.cos(n), y: f +
            h * Math.sin(n)
        };
        b.push(d.Od(n))
      }
      return b
    }, mapChanged: function () {
      g.a.Sh(B.C.Et.bd.mapChanged) && B.C.Et.bd.mapChanged.apply(this);
      this.D = !0;
      this.setPath(this.Ur());
      this.D = !1;
      !this.dh && this.get("map") && (this.dh = !0, this.get("map").q("overlays"))
    }, setCenter: function (a, b) {
      g.c.add(this, "setCenter");
      (a = g.a.Ja(a)) && a instanceof g.U && (this.C && this.C.get("deltaPos") && this.C.set("deltaPos", [0, 0], !0), this.set("center", a), this.set("path", this.Ur()), this.dh || (this.dh = !0, this.get("map") && this.get("map").q("overlays")),
      b || (this.q("setCenter"), this.q("change", {type: "change", target: this})))
    }, setRadius: function (a) {
      var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !1;
      g.c.add(this, "setRadius");
      a && 2 === a.length && (this.set("radius", a), this.set("path", this.Ur()), b || (this.q("change", {
        type: "change",
        target: this
      }), this.q("setPath")))
    }, setOptions: function (a) {
      B.C.Et.bd.setOptions.call(this, a);
      this.D = !0;
      a.radius && this.setRadius(a.radius, !0);
      a.center && this.setCenter(a.center, !0);
      this.D = !1
    }, getRadius: function () {
      g.c.add(this,
        "getRadius");
      return this.get("radius", null, !0)
    }, getCenter: function () {
      g.c.add(this, "getCenter");
      var a = this.get("center", null, !0);
      this.C && this.C.get("deltaPos") && this.C.Tt([a], this.C.get("deltaPos"))[0];
      return a
    }
  });
  B.C.Lt = B.C.Ec.extend({
    w: {
      visible: !0,
      zIndex: 10,
      strokeColor: "#006600",
      strokeOpacity: 0.9,
      strokeWeight: 3,
      strokeStyle: "solid",
      strokeDasharray: [10, 5],
      fillColor: "#006600",
      fillOpacity: 0.9
    }, A: function () {
      var a = this, b = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
      this.CLASS_NAME = "AMap.Rectangle";
      g.c.ya(this, b);
      b = g.extend({}, this.w, b);
      this.D = !0;
      var c = this.Ur(b);
      b.path = c;
      B.C.Lt.bd.A.call(this, b);
      this.setPath(c);
      this.w.bounds && this.get("map") || (this.dh = !1);
      this.on("movepoly", function (b) {
        var c = a.get("map"),
          f = a.get("bounds"), h = c.Od(c.Ab(f.xc).add(b.uK));
        b = c.Od(c.Ab(f.oc).add(b.uK));
        "3D" === c.view.type && a.set("deltaPos", [0, 0]);
        a.set("bounds", new g.ne(h, b))
      });
      this.D = !1
    }, Ur: function () {
      var a = [],
        b = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).bounds || this.get("bounds");
      if (b) {
        b.D = !0;
        var c = b.getSouthWest(), d = b.getNorthEast();
        b.D = !1;
        g.a.Tb([new g.U(c.R, c.Q, !0), new g.U(d.R, c.Q, !0), new g.U(d.R, d.Q, !0), new g.U(c.R, d.Q, !0)], function (b) {
          return a.push(b)
        })
      }
      return a
    }, mapChanged: function () {
      g.a.Sh(B.C.Lt.bd.mapChanged) &&
      B.C.Lt.bd.mapChanged.apply(this);
      this.D = !0;
      this.setPath(this.Ur());
      this.D = !1;
      !this.dh && this.get("map") && (this.dh = !0, this.get("map").q("overlays"))
    }, setOptions: function (a) {
      this.D = !0;
      B.C.Lt.bd.setOptions.call(this, a);
      a.bounds && this.setBounds(a.bounds, !0);
      this.D = !1
    }, setBounds: function (a) {
      var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !1;
      g.c.add(this, "setBounds");
      a && a instanceof g.ne && (this.set("bounds", a), this.set("path", this.Ur()), this.dh || (this.dh = !0, this.get("map") && this.get("map").q("overlays")),
      b || (this.q("change", {type: "change", target: this}), this.q("setBounds")))
    }, getBounds: function () {
      g.c.add(this, "getBounds");
      return this.get("bounds", null, !0)
    }
  });
  B.C.IW = B.C.ub.extend({
    w: {text: "", textAlign: "center", verticalAlign: "middle", offset: new g.H(0, 0)}, A: function (a) {
      this.CLASS_NAME = "AMap.Text";
      g.c.ya(this, a);
      B.C.IW.bd.A.apply(this, arguments);
      this.jga();
      this.D = !0;
      this.setText(this.get("text"));
      this.setStyle(this.get("style"));
      this.D = !1
    }, jga: function () {
      if (!this.kC) {
        var a = document.createElement("div");
        a.className = "amap-overlay-text-container";
        this.kC = a
      }
    }, getText: function () {
      g.c.add(this, "getText");
      return this.get("text", null, !0)
    }, setText: function (a) {
      g.c.add(this,
        "setText");
      a || 0 === a || (a = "");
      g.g.Aya(this.kC, "amap-overlay-text-empty", !a);
      g.c.add(this, "setText");
      this.set("text", a);
      this.kC.innerHTML = a;
      this.g8()
    }, setStyle: function (a) {
      g.c.add(this, "setStyle");
      a = a || {};
      for (var b in a) a.hasOwnProperty(b) && (this.kC.style[b] = a[b]);
      this.g8()
    }, g8: function () {
      this.D = !0;
      this.setContent(this.kC);
      this.setShadow(this.getShadow());
      this.D = !1
    }
  });
  g.fW = {
    find: function (a) {
      return g.a.find(this.fx || [], a)
    }, $I: function () {
      return this.fx || []
    }, Ld: function (a) {
      return null !== this.find(a)
    }, add: function (a) {
      var b = this, c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : g.a.Rs,
        d = this.fx || (this.fx = []);
      g.a.isArray(a) ? g.a.Tb(a, function (a) {
        b.add(a, c)
      }) : null === this.find(a) && (d.push(a), c(a));
      return this
    }, remove: function (a) {
      var b = this, c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : g.a.Rs, d = this.fx;
      if (d) if (g.a.isArray(a)) g.a.Tb(a, function (a) {
        b.remove(a,
          c)
      }); else {
        var e = g.a.indexOf(d, a);
        -1 !== e && (c(d[e]), d.splice(e, 1))
      }
      return this
    }, clear: function () {
      this.Tb(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : g.a.Rs);
      this.fx = [];
      return this
    }, Tb: function () {
      var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : g.a.Rs,
        b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
      g.a.Tb(this.fx || [], function () {
        for (var c = arguments.length, d = Array(c), e = 0; e < c; e++) d[e] = arguments[e];
        c = d[0];
        g.a.Sh(c.Tb) ? c.Tb(a, b) : a.apply(b || c, d)
      });
      return this
    }, To: function (a) {
      for (var b =
        arguments.length, c = Array(1 < b ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
      this.Tb(function (b) {
        b && g.a.Sh(b[a]) && b[a].apply(b, c)
      });
      return this
    }, h: function (a) {
      var b = arguments;
      this.Tb(function (a) {
        a.on.apply(a, b)
      });
      return this
    }, G: function (a) {
      var b = arguments;
      this.Tb(function (a) {
        a.off.apply(a, b)
      });
      return this
    }, addListener: function () {
      this.h.apply(this, arguments)
    }, by: function (a) {
      var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : g.a.Rs,
        c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
      this.Tb(function (d) {
        d.on.call(d,
          event, function () {
            b();
            d.off(a)
          }, c)
      })
    }, removeListener: function (a) {
      this.G(a.ZQ, a.fS, a.cf)
    }, O: function (a, b) {
      this.Tb(function (c) {
        c.emit(a, b)
      })
    }
  };
  B.C.Yn = B.C.Hh.extend({
    ka: [g.fW], A: function () {
      var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
      this.CLASS_NAME = "AMap.OverlayGroup";
      g.c.ya(this);
      B.C.Yn.bd.A.apply(this);
      this.map = null;
      this.add(a)
    }, wc: function (a) {
      g.c.add(this, "setMap");
      this.To("setMap", a);
      this.To("setMap", a);
      this.set("map", a);
      this.map = a;
      return this
    }, mapChanged: function () {
    }, tC: function (a) {
      var b = this;
      g.c.add(this, "addOverlay");
      this.add(a, function (a) {
        b.map && (a.D = !0, a.setMap(b.map), a.D = !1)
      });
      return this
    }, Kz: function (a) {
      var b =
        this;
      g.c.add(this, "removeOverlay");
      this.remove(a, function (a) {
        a.D = !0;
        a.getMap() === b.map && a.setMap(null);
        a.D = !1
      });
      return this
    }, jd: function () {
      var a = this;
      g.c.add(this, "clearOverlays");
      this.clear(function (b) {
        b.D = !0;
        b.getMap() === a.map && b.setMap(null);
        b.D = !1
      });
      return this
    }, Zy: function () {
      g.c.add(this, "hide");
      this.To("hide");
      return this
    }, show: function () {
      g.c.add(this, "show");
      this.To("show");
      return this
    }, tb: function () {
      var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
      g.c.add(this, "setOptions");
      this.To("setOptions", a);
      return this
    }
  });
  B.C.Yn.Xb({
    find: "getOverlay",
    $I: "getOverlays",
    tC: ["addOverlay", "addOverlays"],
    Ld: "hasOverlay",
    Kz: ["removeOverlay", "removeOverlays"],
    jd: "clearOverlays",
    Tb: "eachOverlay",
    wc: "setMap",
    tb: "setOptions",
    show: "show",
    Zy: "hide",
    h: "on",
    G: "off"
  });
  (function (a, b) {
    function c(a, b) {
      if (!a.length) return !1;
      for (var c = 0, d = a.length; c < d; c++) {
        var e = a[c];
        if (!("*" === b || e && e.geometry && e.geometry.type === b) || e && e.properties && !e.properties._isAmap) return !1
      }
      return !0
    }

    function d(a) {
      for (var b = [], c = 0, d = a.length; c < d; c++) b.push(a[c].geometry.coordinates);
      return b
    }

    function e(a) {
      if (!a || !a.length) return [];
      a = b.a.Ja(a);
      for (var c = [], d = 0, e = a.length; d < e; d++) c[d] = a[d].yl();
      a[a.length - 1].gb(a[0]) || c.push(a[0].yl());
      return c
    }

    function f(a) {
      if (!a) return [];
      a = b.a.Ja(a);
      b.a.isArray(a[0]) ||
      (a = [a]);
      for (var c = [], d = 0, f = a.length; d < f; d++) c[d] = e(a[d]);
      return c
    }

    a.C.dW = a.C.Yn.extend({
      A: function (c) {
        this.CLASS_NAME = "AMap.GeoJSON";
        b.c.ya(this, c);
        a.C.dW.bd.A.call(this, []);
        this.D = !0;
        this.w = b.extend({
          getMarker: function (b, c) {
            return new a.C.ub({innerOverlay: !0, position: c})
          }, getPolyline: function (b, c) {
            return new a.C.Zb({path: c, innerOverlay: !0})
          }, getPolygon: function (b, c) {
            return new a.C.Ec({path: c, innerOverlay: !0})
          }, coordsToLatLng: function (a) {
            return a
          }
        }, c);
        if (!this.w.coordsToLatLngs) {
          var d = this.w.coordsToLatLng;
          this.w.coordsToLatLngs = function (a) {
            for (var b = [], c = 0, e = a.length; c < e; c++) b.push(d.call(null, a[c]));
            return b
          }
        }
        this.importData(this.w.geoJSON);
        this.D = !1
      }, importData: function (a) {
        b.c.add(this, "importData");
        if (a && (a = this.ega(a), a.length)) {
          this.clearOverlays();
          this.tC(a);
          var c = this.w.map;
          if (c) for (var d = 0, e = a.length; d < e; d++) a[d].D = !0, a[d].setMap(c), a[d].D = !1
        }
      }, toGeoJSON: function () {
        b.c.add(this, "toGeoJSON");
        for (var a = this.$I(), c = [], d = 0, e = a.length; d < e; d++) a[d].D = !0, c[d] = a[d].toGeoJSON(), a[d].D = !1;
        return c
      },
      ega: function (a) {
        if (a) {
          b.a.isArray(a) || (a = [a]);
          for (var c = [], d = 0, e = a.length; d < e; d++) {
            var f = this.fga(a[d]);
            f && c.push(f)
          }
          return c
        }
      }, BX: function (a) {
        var b = "Feature" === a.type ? a.geometry : a, b = this.w.coordsToLatLng(b ? b.coordinates : null),
          b = this.w.getMarker(a, b);
        this.Lr(a, b);
        return b
      }, Vca: function (c) {
        for (var d = "Feature" === c.type ? c.geometry : c, d = d ? d.coordinates : null, e = [], f = 0, n = d.length; f < n; f++) e.push(this.BX(b.extend({}, c, {
          type: "Feature", properties: {_isAmap: !0, _pointIndex: f, _parentProperities: c.properties}, geometry: {
            type: "Point",
            coordinates: d[f]
          }
        })));
        d = new a.C.Yn(e);
        this.Lr(c, d);
        return d
      }, AX: function (a) {
        var b = "Feature" === a.type ? a.geometry : a, b = this.w.coordsToLatLngs(b ? b.coordinates : null),
          b = this.w.getPolyline(a, b);
        this.Lr(a, b);
        return b
      }, Uca: function (c) {
        for (var d = "Feature" === c.type ? c.geometry : c, d = d ? d.coordinates : null, e = [], f = 0, n = d.length; f < n; f++) e.push(this.AX(b.extend({}, c, {
          type: "Feature",
          properties: {_isAmap: !0, _lineStringIndex: f, _parentProperities: c.properties},
          geometry: {type: "LineString", coordinates: d[f]}
        })));
        d = new a.C.Yn(e);
        this.Lr(c, d);
        return d
      }, CX: function (a) {
        for (var b = "Feature" === a.type ? a.geometry : a, b = b ? b.coordinates : null, c = [], d = 0, e = b.length; d < e; d++) c.push(this.w.coordsToLatLngs(b[d]));
        b = this.w.getPolygon(a, c);
        this.Lr(a, b);
        return b
      }, Wca: function (c) {
        for (var d = "Feature" === c.type ? c.geometry : c, d = d ? d.coordinates : null, e = [], f = 0, n = d.length; f < n; f++) e.push(this.CX(b.extend({}, c, {
          type: "Feature",
          properties: {_isAmap: !0, _polygonIndex: f, _parentProperities: c.properties},
          geometry: {type: "Polygon", coordinates: d[f]}
        })));
        d = new a.C.Yn(e);
        this.Lr(c, d);
        return d
      }, Oca: function (c) {
        for (var d = ("Feature" === c.type ? c.geometry : c).geometries, e = [], f = 0, n = d.length; f < n; f++) e.push(this.RN(b.extend({}, c, {
          type: "Feature",
          properties: {_isAmap: !0, _geometryIndex: f, _parentProperities: c.properties},
          geometry: d[f]
        })));
        d = new a.C.Yn(e);
        this.Lr(c, d);
        return d
      }, fga: function (b) {
        if (b) switch (b.type) {
          case "Feature":
            return this.RN(b);
          case "FeatureCollection":
            for (var c = b.features, d = [], e = 0, f = c.length; e < f; e++) {
              var p = this.RN(c[e]);
              p && d.push(p)
            }
            c = new a.C.Yn(d);
            this.Lr(b, c);
            return c;
          default:
            throw Error("Invalid GeoJSON object." + b.type);
        }
      }, Lr: function (a, c) {
        c && a.properties && c.setExtData && (c.D = !0, c.setExtData(b.extend({}, c.getExtData() || {}, {_geoJsonProperties: a.properties})), c.D = !1)
      }, RN: function (a) {
        var b = "Feature" === a.type ? a.geometry : a;
        if (!(b && b.coordinates || b)) return null;
        switch (b.type) {
          case "Point":
            return this.BX(a);
          case "MultiPoint":
            return this.Vca(a);
          case "LineString":
            return this.AX(a);
          case "MultiLineString":
            return this.Uca(a);
          case "Polygon":
            return this.CX(a);
          case "MultiPolygon":
            return this.Wca(a);
          case "GeometryCollection":
            return this.Oca(a);
          default:
            throw Error("Invalid GeoJSON geometry." + b.type);
        }
      }
    });
    a.C.Yn.Gb({
      toGeoJSON: function (a) {
        b.c.add(this, "toGeoJSON");
        a = a || this.$I();
        for (var e = [], f = 0, m = a.length; f < m; f++) a[f].toGeoJSON && (a[f].D = !0, e[f] = a[f].toGeoJSON(), a[f].D = !1);
        this.D = !0;
        a = this.getExtData() || {};
        this.D = !1;
        if (c(e, "Point")) e = {
          type: "Feature",
          properties: a._geoJsonProperties || {},
          geometry: {type: "MultiPoint", coordinates: d(e)}
        }; else if (c(e, "LineString")) e = {
          type: "Feature", properties: a._geoJsonProperties ||
            {}, geometry: {type: "MultiLineString", coordinates: d(e)}
        }; else if (c(e, "Polygon")) e = {
          type: "Feature",
          properties: a._geoJsonProperties || {},
          geometry: {type: "MultiPolygon", coordinates: d(e)}
        }; else if (c(e, "*")) {
          a = a._geoJsonProperties || {};
          for (var f = [], m = 0, n = e.length; m < n; m++) f.push(e[m].geometry);
          e = {type: "Feature", properties: a, geometry: {type: "GeometryCollection", geometries: f}}
        } else e = {type: "FeatureCollection", properties: a._geoJsonProperties || {}, features: e};
        return e
      }
    });
    a.C.ub.Gb({
      toGeoJSON: function () {
        b.c.add(this,
          "toGeoJSON");
        this.D = !0;
        var a = this.getExtData() || {}, c = this.getPosition().yl();
        this.D = !1;
        return {type: "Feature", properties: a._geoJsonProperties || {}, geometry: {type: "Point", coordinates: c}}
      }
    });
    a.C.Zb.Gb({
      toGeoJSON: function () {
        b.c.add(this, "toGeoJSON");
        this.D = !0;
        var a = this.getExtData() || {}, c = this.getPath();
        this.D = !1;
        return {
          type: "Feature",
          properties: a._geoJsonProperties || {},
          geometry: {type: "LineString", coordinates: e(c)}
        }
      }
    });
    a.C.Ec.Gb({
      toGeoJSON: function () {
        b.c.add(this, "toGeoJSON");
        this.D = !0;
        var a = this.getExtData() ||
          {}, c = this.getPath();
        this.D = !1;
        if (b.a.isArray(c[0]) && b.a.isArray(c[0][0])) {
          for (var d = [], e = 0; e < c.length; e += 1) d.push(f(c[e]));
          return {
            type: "Feature",
            properties: a._geoJsonProperties || {},
            geometry: {type: "MultiPolygon", coordinates: d}
          }
        }
        return {type: "Feature", properties: a._geoJsonProperties || {}, geometry: {type: "Polygon", coordinates: f(c)}}
      }
    })
  })(B, g);
  B.o.WL = B.o.Yb.extend({
    ka: [g.fW], A: function (a) {
      var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
      this.CLASS_NAME = "AMap.LayerGroup";
      g.c.ya(this, b);
      B.o.WL.bd.A.call(this, b);
      this.map = null;
      this.add(a)
    }, wc: function (a) {
      g.c.add(this, "setMap");
      this.To("setMap", a);
      this.set("map", a);
      this.map = a;
      return this
    }, mapChanged: function () {
    }, SH: function (a) {
      var b = this;
      g.c.add(this, "addLayer");
      this.add(a, function (a) {
        b.map && (a.D = !0, a.setMap(b.map), a.D = !1)
      });
      return this
    }, wk: function (a) {
      var b = this;
      g.c.add(this,
        "removeLayer");
      this.remove(a, function (a) {
        a.D = !0;
        a.getMap() === b.map && a.setMap(null);
        a.D = !1
      });
      return this
    }, xna: function () {
      var a = this;
      g.c.add(this, "clearLayers");
      this.clear(function (b) {
        b.D = !0;
        b.getMap() === a.map && b.setMap(null);
        b.D = !1
      });
      return this
    }, Zy: function () {
      g.c.add(this, "hide");
      this.To("hide");
      return this
    }, show: function () {
      g.c.add(this, "show");
      this.To("show");
      return this
    }, reload: function () {
      this.To("reload");
      return this
    }, tb: function () {
      var a = this, b = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] :
        {};
      g.c.add(this, "setOptions");
      var c = g.a.keys(b);
      g.a.Tb(c, function (c) {
        a.To("set", c, b[c])
      });
      return this
    }
  });
  B.o.WL.Xb({
    find: "getLayer",
    $I: "getLayers",
    SH: ["addLayer", "addLayers"],
    Ld: "hasLayer",
    wk: ["removeLayer", "removeLayers"],
    xna: "clearLayers",
    Tb: "eachLayer",
    wc: "setMap",
    tb: "setOptions",
    show: "show",
    Zy: "hide",
    reload: "reload",
    h: "on",
    G: "off"
  });
  g.Yaa = B.Rb.extend({
    A: function (a, b) {
      b && (b.center = b.position, b.zoom = 11);
      arguments.callee.ma.apply(this, arguments);
      window.console && window.console.log && window.console.log("\u9ad8\u5fb7\u5730\u56feJSAPI\u8857\u666f\u5df2\u4e0b\u7ebf\uff0c\u611f\u8c22\u60a8\u7684\u652f\u6301\u3002")
    }
  });
  g.Zaa = B.C.ub.extend({
    A: function (a) {
      arguments.callee.ma.apply(this, arguments)
    }
  });
  g.wd = {
    ms: function (a, b) {
      for (var c = Infinity, d = 0, e = 1, f = b.length; e < f; d = e, e += 1) c = Math.min(c, g.wd.Txa(a, [b[d], b[e]]));
      return Math.sqrt(c)
    }, Txa: function (a, b) {
      return this.eL(a, this.D2(a, b))
    }, eL: function (a, b) {
      var c = a[0] - b[0], d = a[1] - b[1];
      return c * c + d * d
    }, AGa: function (a, b, c, d) {
      d = d || 1E-6;
      if (c[0] === b[0]) {
        var e = Math.min(b[1], c[1]);
        b = Math.max(b[1], c[1]);
        return Math.abs(a[0] - c[0]) < d && a[1] >= e && a[1] <= b
      }
      var e = Math.min(b[0], c[0]), f = Math.max(b[0], c[0]);
      return Math.abs((c[1] - b[1]) / (c[0] - b[0]) * (a[0] - b[0]) + b[1] - a[1]) < d &&
        a[0] >= e && a[0] <= f
    }, D2: function (a, b) {
      var c = a[0], d = a[1], e = b[0], f = b[1], h = e[0], e = e[1], k = f[0], f = f[1], l = k - h, m = f - e,
        c = 0 === l && 0 === m ? 0 : (l * (c - h) + m * (d - e)) / (l * l + m * m || 0);
      0 >= c || (1 <= c ? (h = k, e = f) : (h += c * l, e += c * m));
      return [h, e]
    }, vq: function (a) {
      for (var b = a.length, c = 0, d = a[b - 1], e = d[0], d = d[1], f, h, k = 0; k < b; k += 1) h = a[k], f = h[0], h = h[1], c += (f - e) * (h + d), e = f, d = h;
      return 0 < c
    }, Sd: function (a, b, c) {
      var d = a[0];
      a = a[1];
      var e = !1, f, h, k, l, m = b.length, n = 0;
      for (l = m - 1; n < m; l = n, n += 1) {
        var p = !1;
        f = b[n][0];
        h = b[n][1];
        k = b[l][0];
        l = b[l][1];
        if (f === d && h === a || k ===
          d && l === a) return c ? !0 : !1;
        if (h < a === l >= a) {
          f = (k - f) * (a - h) / (l - h) + f;
          if (d === f) return c ? !0 : !1;
          p = d < f
        }
        p && (e = !e)
      }
      return e
    }, P7: function (a, b) {
      function c(a, b, c, d) {
        var e = [a[0] - b[0], a[1] - b[1]], f = [c[0] - d[0], c[1] - d[1]];
        a = a[0] * b[1] - a[1] * b[0];
        c = c[0] * d[1] - c[1] * d[0];
        d = 1 / (e[0] * f[1] - e[1] * f[0]);
        return [(a * f[0] - c * e[0]) * d, (a * f[1] - c * e[1]) * d]
      }

      function d(a, b, c) {
        return (c[0] - b[0]) * (a[1] - b[1]) > (c[1] - b[1]) * (a[0] - b[0])
      }

      var e, f, h, k, l = a;
      e = b[b.length - 2];
      for (var m = 0, n = b.length - 1; m < n; m++) {
        f = b[m];
        var p = l, l = [];
        h = p[p.length - 1];
        for (var q = 0, r =
          p.length; q < r; q++) k = p[q], d(k, e, f) ? (d(h, e, f) || l.push(c(e, f, h, k)), l.push(k)) : d(h, e, f) && l.push(c(e, f, h, k)), h = k;
        e = f
      }
      if (3 > l.length) return [];
      l.push(l[0]);
      return l
    }
  };
  (function (a) {
    function b(b, c) {
      var d;
      a:{
        switch (b) {
          case "EPSG3395":
            d = a.bi.YV;
            break a;
          case "EPSG4326":
            d = a.bi.ZV;
            break a
        }
        d = a.bi.NL
      }
      return {
        project: function (b) {
          a.a.isArray(b) && (b = new a.U(b[0], b[1]));
          return d.ND(b, c).yl()
        }, unproject: function (b) {
          a.a.isArray(b) && (b = new a.H(b[0], b[1]));
          return d.lE(b, c).yl()
        }, normalizePoint: function (b) {
          return a.a.Ja(b)
        }, distance: function (b, c) {
          c = this.normalizePoint(c);
          if (a.a.isArray(c)) return this.distanceToLine(b, c);
          b = this.normalizePoint(b);
          var d = a.Nm.Pu, e = Math.cos, f = b.Q * d, h =
            c.Q * d, k = 2 * a.Nm.TQ, d = c.R * d - b.R * d, e = (1 - e(h - f) + (1 - e(d)) * e(f) * e(h)) / 2;
          return k * Math.asin(Math.sqrt(e))
        }, ringArea: function (b) {
          b = this.normalizeLine(b);
          var c = a.Nm.TQ * a.Nm.Pu, d = 0, e = b.length;
          if (3 > e) return 0;
          for (var f = 0; f < e - 1; f += 1) var h = b[f], k = b[f + 1], u = h.R * c * Math.cos(h.Q * a.Nm.Pu), h = h.Q * c, v = k.R * c * Math.cos(k.Q * a.Nm.Pu), d = d + (u * k.Q * c - v * h);
          f = b[f];
          b = b[0];
          e = f.R * c * Math.cos(f.Q * a.Nm.Pu);
          f = f.Q * c;
          k = b.R * c * Math.cos(b.Q * a.Nm.Pu);
          d += e * b.Q * c - k * f;
          return 0.5 * Math.abs(d)
        }, sphericalCalotteArea: function (b) {
          var c = a.Nm.TQ;
          b = c - c *
            Math.cos(b / c);
          return 2 * Math.PI * c * b
        }
      }
    }

    function c() {
      return {
        normalizePoint: function (a) {
          return a && a.x && a.y ? [a.x, a.y] : a
        }, distance: function (a, b) {
          var c = a[0] - b[0], d = a[1] - b[1];
          return Math.sqrt(c * c + d * d)
        }, project: function (a) {
          return a
        }, unproject: function (a) {
          return a
        }, ringArea: function (a) {
          for (var b = [0, 0], c = [0, 0], d = 0, e = a[0], n = a.length, p = 2; p < n; p++) {
            var q = a[p - 1], r = a[p];
            b[0] = e[0] - r[0];
            b[1] = e[1] - r[1];
            c[0] = e[0] - q[0];
            c[1] = e[1] - q[1];
            d += b[0] * c[1] - b[1] * c[0]
          }
          return d / 2
        }
      }
    }

    function d(a) {
      for (var b = 0, c = a.length, d = 0; d < c - 1; d++) var e =
        a[d], n = a[d + 1], b = b + (n[0] - e[0]) * (n[1] + e[1]);
      if (a[c - 1][0] !== a[0][0] || a[c - 1][1] !== a[0][1]) e = a[c - 1], n = a[0], b += (n[0] - e[0]) * (n[1] + e[1]);
      return 0 >= b
    }

    function e(b) {
      this.CLASS_NAME = "AMap.GeometryUtil";
      this.Vb = a.extend({onSegmentTolerance: 5, crs: "EPSG3857", maxZoom: 20}, b);
      this.setCrs(this.Vb.crs)
    }

    a.extend(e.prototype, {
      clone: function (b) {
        return new e(a.extend({}, this.Vb, b))
      }, isPoint: function (b) {
        return b && (b instanceof a.U || a.a.isArray(b) && !isNaN(b[0]))
      }, normalizePoint: function (a) {
        return a
      }, normalizeLine: function (a) {
        for (var b =
          [], c = 0, d = a.length; c < d; c++) b.push(this.normalizePoint(a[c]));
        return b
      }, normalizeMultiLines: function (b) {
        a.a.isArray(b) && this.isPoint(b[0]) && (b = [b]);
        for (var c = [], d = 0, e = b.length; d < e; d++) c.push(this.normalizeLine(b[d]));
        return c
      }, setCrs: function (d) {
        a.extend(this, d && d.project && d.unproject ? d : "plane" === d ? c() : b(d, this.Vb.maxZoom))
      }, distance: function () {
        throw Error("distance Not implemented!");
      }, Fx: function (a, b) {
        a = this.normalizeLine(a);
        this.isPoint(a[0]) || (a = a[0]);
        for (var c = [], d = 0, e = a.length; d < e; d++) c.push(this.project(a[d]));
        !0 === b ? c = this.makesureClockwise(c) : !1 === b && (c = this.makesureClockwise(c), c.reverse());
        return c
      }, bka: function (a) {
        for (var b = [], c = 0, d = a.length; c < d; c++) b.push(this.unproject(a[c]));
        return b
      }, closestOnSegment: function (b, c, d) {
        b = a.wd.D2(this.project(b), this.Fx([c, d]));
        return this.unproject(b)
      }, closestOnLine: function (a, b) {
        b = this.normalizeLine(b);
        for (var c = Infinity, d, e = 0, n = b.length; e < n - 1; e++) {
          var p = this.closestOnSegment(a, b[e], b[e + 1]), q = this.distance(a, p);
          q < c && (c = q, d = p)
        }
        return d
      }, distanceToSegment: function (a,
                                      b, c) {
        return this.distanceToLine(a, [b, c])
      }, distanceToLine: function (a, b) {
        b = this.normalizeLine(b);
        this.isPoint(b[0]) || (b = b[0]);
        for (var c = Infinity, d = 0, e = b.length; d < e - 1; d++) var n = this.closestOnSegment(a, b[d], b[d + 1]), c = Math.min(c, this.distance(a, n));
        return c
      }, distanceToPolygon: function (a, b) {
        return this.isPointInRing(a, b) ? 0 : this.distanceToLine(a, b)
      }, isPointOnSegment: function (a, b, c, d) {
        if (!d && 0 !== d || 0 > d) d = this.Vb.onSegmentTolerance;
        return this.distanceToSegment(a, b, c) <= d
      }, isPointOnLine: function (a, b, c) {
        b = this.normalizeLine(b);
        for (var d = 0, e = b.length; d < e - 1; d++) if (this.isPointOnSegment(a, b[d], b[d + 1], c)) return !0;
        return !1
      }, isPointOnRing: function (a, b, c) {
        b = this.normalizeLine(b);
        for (var d = 0, e = b.length; d < e; d++) if (this.isPointOnSegment(a, b[d], b[d === e - 1 ? 0 : d + 1], c)) return !0;
        return !1
      }, isPointOnPolygon: function (a, b, c) {
        b = this.normalizeMultiLines(b);
        for (var d = 0, e = b.length; d < e; d++) if (this.isPointOnRing(a, b[d], c)) return !0;
        return !1
      }, makesureClockwise: function (a) {
        d(a) || (a = [].concat(a), a.reverse());
        return a
      }, makesureAntiClockwise: function (a) {
        d(a) &&
        (a = [].concat(a), a.reverse());
        return a
      }, isPointInRing: function (b, c, d) {
        d || (c = this.normalizeLine(c));
        c = this.Fx(c, !0);
        return a.wd.Sd(this.project(b), c, !1)
      }, isRingInRing: function (a, b, c) {
        for (var d = 0, e = a.length; d < e; d++) if (!this.isPointInRing(a[d], b, c)) return !1;
        d = 0;
        for (e = b.length; d < e; d++) if (this.isPointInRing(b[d], a, c)) return !1;
        return !0
      }, isPointInPolygon: function (a, b) {
        b = this.normalizeMultiLines(b);
        for (var c, d = 0, e = b.length; d < e && (c = this.isPointInRing(a, b[d]), 0 < d && (c = !c), c); d += 1) ;
        return c
      }, doesSegmentsIntersect: function (a,
                                          b, c, d, e) {
        e = e ? [a, b, c, d] : this.Fx([a, b, c, d]);
        a = e[0];
        b = e[1];
        c = e[2];
        d = e[3];
        e = !1;
        var n = (d[0] - c[0]) * (a[1] - c[1]) - (d[1] - c[1]) * (a[0] - c[0]),
          p = (b[0] - a[0]) * (a[1] - c[1]) - (b[1] - a[1]) * (a[0] - c[0]);
        a = (d[1] - c[1]) * (b[0] - a[0]) - (d[0] - c[0]) * (b[1] - a[1]);
        0 !== a && (b = n / a, a = p / a, 0 <= b && 1 >= b && 0 <= a && 1 >= a && (e = !0));
        return e
      }, doesSegmentLineIntersect: function (a, b, c) {
        c = this.normalizeLine(c);
        for (var d = 0, e = c.length; d < e - 1; d++) if (this.doesSegmentsIntersect(a, b, c[d], c[d + 1])) return !0;
        return !1
      }, doesSegmentRingIntersect: function (a, b, c, d) {
        d ||
        (c = this.normalizeLine(c));
        for (var e = 0, n = c.length; e < n; e++) if (this.doesSegmentsIntersect(a, b, c[e], c[e === n - 1 ? 0 : e + 1], d)) return !0;
        return !1
      }, doesSegmentPolygonIntersect: function (a, b, c) {
        c = this.normalizeMultiLines(c);
        for (var d = 0, e = c.length; d < e; d++) if (this.doesSegmentRingIntersect(a, b, c[d])) return !0;
        return !1
      }, doesLineLineIntersect: function (a, b) {
        a = this.normalizeLine(a);
        for (var c = 0, d = a.length; c < d - 1; c++) if (this.doesSegmentLineIntersect(a[c], a[c + 1], b)) return !0;
        return !1
      }, doesLineRingIntersect: function (a, b) {
        a = this.normalizeLine(a);
        for (var c = 0, d = a.length; c < d - 1; c++) if (this.doesSegmentRingIntersect(a[c], a[c + 1], b)) return !0;
        return !1
      }, doesPolygonPolygonIntersect: function (a, b) {
        return this.doesRingRingIntersect(b, a) || this.isRingInRing(a, b) || this.isRingInRing(b, a) ? !0 : !1
      }, doesPolygonContainsPolygon: function (a, b, c) {
        return this.isRingInRing(b, a, !0) || (c ? this.doesRingRingIntersect(b, a, !0) : !1)
      }, doesRingRingIntersect: function (a, b, c) {
        c || (a = this.normalizeLine(a));
        for (var d = 0, e = a.length; d < e; d++) if (this.doesSegmentRingIntersect(a[d], a[d === e - 1 ?
          0 : d + 1], b, c)) return !0;
        return !1
      }, JP: function (a, b) {
        for (var c = 0, d = 0; d < a.length - 1; d += 1) {
          var e = this.distance(a[d], a[d + 1]);
          if (e + c < b) c += e; else return c = (b - c) / e, [a[d][0] + c * (a[d + 1][0] - a[d][0]), a[d][1] + c * (a[d + 1][1] - a[d][1]), d]
        }
        return null
      }, RX: function (a, b) {
        function c() {
          var a = [e[0] - n[0], e[1] - n[1]], b = [p[0] - q[0], p[1] - q[1]], d = e[0] * n[1] - e[1] * n[0],
            f = p[0] * q[1] - p[1] * q[0], h = 1 / (a[0] * b[1] - a[1] * b[0]);
          return [(d * b[0] - f * a[0]) * h, (d * b[1] - f * a[1]) * h]
        }

        function d(a) {
          return (n[0] - e[0]) * (a[1] - e[1]) > (n[1] - e[1]) * (a[0] - e[0])
        }

        a = this.makesureAntiClockwise(a);
        b = this.makesureClockwise(b);
        var e, n, p, q, r = a;
        e = b[b.length - 1];
        for (var s = 0, u = b.length; s < u; s++) {
          n = b[s];
          var v = r, r = [];
          p = v[v.length - 1];
          for (var w = 0, t = v.length; w < t; w++) q = v[w], d(q) ? (d(p) || r.push(c()), r.push(q)) : d(p) && r.push(c()), p = q;
          e = n
        }
        return r
      }, ringRingClip: function (a, b) {
        a = this.Fx(a);
        b = this.Fx(b);
        var c = this.RX(a, b);
        0 == c.length && (c = this.RX(b, a));
        return this.bka(c)
      }, ringArea: function () {
        throw Error("distance Not implemented!");
      }, distanceOfLine: function (a) {
        a = this.normalizeLine(a);
        for (var b = 0, c = 0, d = a.length; c <
        d - 1; c++) b += this.distance(a[c], a[c + 1]);
        return b
      }, isClockwise: function (a) {
        a = this.Fx(a);
        return d(a)
      }
    });
    a.Ft = new e;
    a.gi = new e;
    a.gi.setCrs("plane")
  })(g);
  g.PL = function () {
    var a = {};
    (function () {
      function b(a) {
        for (var b = 0, e = a.length, f = 0; f < e - 1; f++) var h = a[f], k = a[f + 1], b = b + (k[0] - h[0]) * (k[1] + h[1]);
        if (a[e - 1][0] !== a[0][0] || a[e - 1][1] !== a[0][1]) h = a[e - 1], k = a[0], b += (k[0] - h[0]) * (k[1] + h[1]);
        return 0 >= b
      }

      a.Ita = function (a) {
        b(a) && (a = [].concat(a), a.reverse());
        return a
      };
      a.B5 = b
    })();
    (function () {
      function b(a) {
        var b = a.length;
        2 < b && a[b - 1][0] == a[0][0] && a[b - 1][1] == a[0][1] && a.pop()
      }

      function c(a, b) {
        for (var c = 0; c < b.length; c++) a.push(b[c][0]), a.push(b[c][1])
      }

      a.Yh = function (a, e) {
        var f =
          2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0, h = arguments[3];
        e = e || [];
        var k = [], l = [];
        b(a);
        c(k, a);
        var m = a.length;
        e.forEach(b);
        for (var n = 0; n < e.length; n++) l.push(m), m += e[n].length, c(k, e[n]);
        l = (this.qL ? this.qL : g.Fc.qL)(k, l);
        if (h) {
          f = [];
          for (n = 0; n < l.length; n += 1) h = 2 * l[n], f.push([k[h], k[h + 1]]);
          return f
        }
        if (f) for (n = 0; n < l.length; n += 1) l[n] += f;
        return l
      }
    })();
    return a
  };
  (function (a) {
    a.sF = function () {
      function a(b, c, d, e, f) {
        for (var h, k = 0, l = c, n = d - e; l < d; l += e) k += (b[n] - b[l]) * (b[l + 1] + b[n + 1]), n = l;
        if (f === 0 < k) for (f = c; f < d; f += e) h = r(f, b[f], b[f + 1], h); else for (f = d - e; f >= c; f -= e) h = r(f, b[f], b[f + 1], h);
        h && m(h, h.next) && (s(h), h = h.next);
        return h
      }

      function c(a, b) {
        if (!a) return a;
        b || (b = a);
        var c = a, d;
        do if (d = !1, c.t9 || !m(c, c.next) && 0 !== l(c.Ia, c, c.next)) c = c.next; else {
          s(c);
          c = b = c.Ia;
          if (c === c.next) break;
          d = !0
        } while (d || c !== b);
        return b
      }

      function d(a, b, e, f, r, u, C) {
        if (a) {
          if (!C && u) {
            var E = a, A = E;
            do null === A.z &&
            (A.z = h(A.x, A.y, f, r, u)), A.jp = A.Ia, A = A.pl = A.next; while (A !== E);
            A.jp.pl = null;
            A.jp = null;
            var E = A, z, G, H, I, P, L, O = 1;
            do {
              A = E;
              H = E = null;
              for (I = 0; A;) {
                I++;
                G = A;
                for (z = P = 0; z < O && (P++, G = G.pl, G); z++) ;
                for (L = O; 0 < P || 0 < L && G;) 0 !== P && (0 === L || !G || A.z <= G.z) ? (z = A, A = A.pl, P--) : (z = G, G = G.pl, L--), H ? H.pl = z : E = z, z.jp = H, H = z;
                A = G
              }
              H.pl = null;
              O *= 2
            } while (1 < I)
          }
          for (E = a; a.Ia !== a.next;) {
            A = a.Ia;
            G = a.next;
            if (u) a:if (H = a.Ia, I = a.next, 0 <= l(H, a, I)) H = !1; else {
              P = h(H.x < a.x ? H.x < I.x ? H.x : I.x : a.x < I.x ? a.x : I.x, H.y < a.y ? H.y < I.y ? H.y : I.y : a.y < I.y ? a.y : I.y, f, r, u);
              O = h(H.x >
              a.x ? H.x > I.x ? H.x : I.x : a.x > I.x ? a.x : I.x, H.y > a.y ? H.y > I.y ? H.y : I.y : a.y > I.y ? a.y : I.y, f, r, u);
              for (z = a.pl; z && z.z <= O;) {
                if (z !== a.Ia && z !== a.next && k(H.x, H.y, a.x, a.y, I.x, I.y, z.x, z.y) && 0 <= l(z.Ia, z, z.next)) {
                  H = !1;
                  break a
                }
                z = z.pl
              }
              for (z = a.jp; z && z.z >= P;) {
                if (z !== a.Ia && z !== a.next && k(H.x, H.y, a.x, a.y, I.x, I.y, z.x, z.y) && 0 <= l(z.Ia, z, z.next)) {
                  H = !1;
                  break a
                }
                z = z.jp
              }
              H = !0
            } else a:if (H = a.Ia, I = a.next, 0 <= l(H, a, I)) H = !1; else {
              for (P = a.next.next; P !== a.Ia;) {
                if (k(H.x, H.y, a.x, a.y, I.x, I.y, P.x, P.y) && 0 <= l(P.Ia, P, P.next)) {
                  H = !1;
                  break a
                }
                P = P.next
              }
              H = !0
            }
            if (H) b.push(A.ve /
              e), b.push(a.ve / e), b.push(G.ve / e), s(a), E = a = G.next; else if (a = G, a === E) {
              if (C) if (1 === C) {
                C = b;
                E = e;
                A = a;
                do G = A.Ia, H = A.next.next, !m(G, H) && n(G, A, A.next, H) && p(G, H) && p(H, G) && (C.push(G.ve / E), C.push(A.ve / E), C.push(H.ve / E), s(A), s(A.next), A = a = H), A = A.next; while (A !== a);
                a = A;
                d(a, b, e, f, r, u, 2)
              } else {
                if (2 === C) a:{
                  C = a;
                  do {
                    for (E = C.next.next; E !== C.Ia;) {
                      if (A = C.ve !== E.ve) if (A = void 0, A = C.next.ve !== E.ve) if (A = void 0, A = C.Ia.ve !== E.ve) {
                        A = A = void 0;
                        b:{
                          A = C;
                          do {
                            if (A.ve !== C.ve && A.next.ve !== C.ve && A.ve !== E.ve && A.next.ve !== E.ve && n(A, A.next, C,
                              E)) {
                              A = !0;
                              break b
                            }
                            A = A.next
                          } while (A !== C);
                          A = !1
                        }
                        if (A = !A) if (A = void 0, A = p(C, E)) if (A = void 0, A = p(E, C)) {
                          A = C;
                          G = !1;
                          H = (C.x + E.x) / 2;
                          I = (C.y + E.y) / 2;
                          do A.y > I !== A.next.y > I && A.next.y !== A.y && H < (A.next.x - A.x) * (I - A.y) / (A.next.y - A.y) + A.x && (G = !G), A = A.next; while (A !== C);
                          A = G
                        }
                      }
                      if (A) {
                        a = q(C, E);
                        C = c(C, C.next);
                        a = c(a, a.next);
                        d(C, b, e, f, r, u);
                        d(a, b, e, f, r, u);
                        break a
                      }
                      E = E.next
                    }
                    C = C.next
                  } while (C !== a)
                }
              } else d(c(a), b, e, f, r, u, 1);
              break
            }
          }
        }
      }

      function e(a, b) {
        return a.x - b.x
      }

      function f(a, b) {
        var c = b, d = a.x, e = a.y, f = -Infinity, h;
        do {
          if (e <= c.y && e >= c.next.y &&
            c.next.y !== c.y) {
            var l = c.x + (e - c.y) * (c.next.x - c.x) / (c.next.y - c.y);
            if (l <= d && l > f) {
              f = l;
              if (l === d) {
                if (e === c.y) return c;
                if (e === c.next.y) return c.next
              }
              h = c.x < c.next.x ? c : c.next
            }
          }
          c = c.next
        } while (c !== b);
        if (!h) return null;
        if (d === f) return h.Ia;
        for (var l = h, m = h.x, n = h.y, r = Infinity, s, c = h.next; c !== l;) d >= c.x && c.x >= m && d !== c.x && k(e < n ? d : f, e, m, n, e < n ? f : d, e, c.x, c.y) && (s = Math.abs(e - c.y) / (d - c.x), (s < r || s === r && c.x > h.x) && p(c, a) && (h = c, r = s)), c = c.next;
        return h
      }

      function h(a, b, c, d, e) {
        a = 32767 * (a - c) * e;
        b = 32767 * (b - d) * e;
        a = (a | a << 8) & 16711935;
        a = (a | a << 4) & 252645135;
        a = (a | a << 2) & 858993459;
        b = (b | b << 8) & 16711935;
        b = (b | b << 4) & 252645135;
        b = (b | b << 2) & 858993459;
        return (a | a << 1) & 1431655765 | ((b | b << 1) & 1431655765) << 1
      }

      function k(a, b, c, d, e, f, h, k) {
        return 0 <= (e - h) * (b - k) - (a - h) * (f - k) && 0 <= (a - h) * (d - k) - (c - h) * (b - k) && 0 <= (c - h) * (f - k) - (e - h) * (d - k)
      }

      function l(a, b, c) {
        return (b.y - a.y) * (c.x - b.x) - (b.x - a.x) * (c.y - b.y)
      }

      function m(a, b) {
        return a.x === b.x && a.y === b.y
      }

      function n(a, b, c, d) {
        return m(a, b) && m(c, d) || m(a, d) && m(c, b) ? !0 : 0 < l(a, b, c) !== 0 < l(a, b, d) && 0 < l(c, d, a) !== 0 < l(c, d, b)
      }

      function p(a,
                 b) {
        return 0 > l(a.Ia, a, a.next) ? 0 <= l(a, b, a.next) && 0 <= l(a, a.Ia, b) : 0 > l(a, b, a.Ia) || 0 > l(a, a.next, b)
      }

      function q(a, b) {
        var c = new u(a.ve, a.x, a.y), d = new u(b.ve, b.x, b.y), e = a.next, f = b.Ia;
        a.next = b;
        b.Ia = a;
        c.next = e;
        e.Ia = c;
        d.next = c;
        c.Ia = d;
        f.next = d;
        d.Ia = f;
        return d
      }

      function r(a, b, c, d) {
        a = new u(a, b, c);
        d ? (a.next = d.next, a.Ia = d, d.next.Ia = a, d.next = a) : (a.Ia = a, a.next = a);
        return a
      }

      function s(a) {
        a.next.Ia = a.Ia;
        a.Ia.next = a.next;
        a.jp && (a.jp.pl = a.pl);
        a.pl && (a.pl.jp = a.jp)
      }

      function u(a, b, c) {
        this.ve = a;
        this.x = b;
        this.y = c;
        this.pl = this.jp =
          this.z = this.next = this.Ia = null;
        this.t9 = !1
      }

      return {
        qL: function (h, k, l) {
          l = l || 2;
          var m = k && k.length, n = m ? k[0] * l : h.length, p = a(h, 0, n, l, !0), r = [];
          if (!p) return r;
          var s, u, z, G;
          if (m) {
            var H = l, m = [], I, P, L;
            G = 0;
            for (I = k.length; G < I; G++) {
              P = k[G] * H;
              L = G < I - 1 ? k[G + 1] * H : h.length;
              P = a(h, P, L, H, !1);
              P === P.next && (P.t9 = !0);
              var O = L = P;
              do L.x < O.x && (O = L), L = L.next; while (L !== P);
              m.push(O)
            }
            m.sort(e);
            for (G = 0; G < m.length; G++) {
              k = m[G];
              H = p;
              if (H = f(k, H)) k = q(H, k), c(k, k.next);
              p = c(p, p.next)
            }
          }
          if (h.length > 80 * l) {
            s = z = h[0];
            u = m = h[1];
            for (H = l; H < n; H += l) G = h[H], k =
              h[H + 1], G < s && (s = G), k < u && (u = k), G > z && (z = G), k > m && (m = k);
            z = Math.max(z - s, m - u);
            z = 0 !== z ? 1 / z : 0
          }
          d(p, r, l, s, u, z);
          return r
        }
      }
    };
    a.eaa = a.sF()
  })(g);
  (function (a) {
    function b(a) {
      var b = a.length;
      2 < b && a[b - 1][0] == a[0][0] && a[b - 1][1] == a[0][1] && a.pop()
    }

    function c(a, b) {
      for (var c = 0; c < b.length; c++) a.push(b[c][0]), a.push(b[c][1])
    }

    a.ao = {
      ri: function (a) {
        for (var b = a.length, c = 0, h = b - 1, k = 0; k < b; h = k++) c += a[h][0] * a[k][1] - a[k][0] * a[h][1];
        return 0.5 * c
      }, B5: function (b) {
        return 0 > a.ao.ri(b)
      }, normalize: function (b) {
        var c;
        if (b) {
          c = [];
          for (var f = 0, h = b.length; f < h; f += 1) c[f] = b[f] instanceof Array ? this.normalize(b[f]) : b[f] instanceof a.U ? [b[f].R, b[f].Q] : b[f] instanceof a.H ? [b[f].x, b[f].y] :
            b[f]
        }
        return c
      }, Yh: function (d, e) {
        e = e || [];
        var f = [], h = [];
        b(d);
        c(f, d);
        var k = d.length;
        e.forEach(b);
        for (var l = 0; l < e.length; l++) h.push(k), k += e[l].length, c(f, e[l]);
        return a.eaa.qL(f, h)
      }
    }
  })(g);
  g.tI = function (a, b, c) {
    g.c.add({CLASS_NAME: "convertFrom"}, b);
    var d = g.r.Zd + "/v3/assistant/coordinate/convert";
    a = g.a.Ja(a);
    var e = [];
    if (a instanceof Array) {
      for (var f = 0, h = a.length; f < h; f += 1) e.push(a[f] + "");
      e = e.join(";")
    } else e = a + "";
    b = ["key=" + g.r.key, "s=rsv3", "locations=" + e, "coordsys=" + (b || "gps")];
    d += 0 < b.length ? "?" + b.join("&") : "";
    d = new g.jb.yb(d, {callback: "callback"});
    d.h("complete", function (a) {
      if ("1" === a.status) {
        a = a.locations.split(";");
        for (var b = 0; b < a.length; b += 1) {
          var d = a[b].split(",");
          a[b] = new AMap.LngLat(d[0],
            d[1])
        }
        c && "function" === typeof c && c("complete", {info: "ok", locations: a})
      } else c && "function" === typeof c && c("error", a.info)
    }, this);
    d.h("error", function (a) {
      c && "function" === typeof c && c("error", a.info)
    }, this)
  };
  g.jb = g.jb || {};
  g.jb.mM = g.da.extend({
    ka: [g.va], A: function (a, b) {
      this.w = {callback: "cbk", type: "json", charset: "utf-8"};
      b = b || {};
      g.a.tb(this, b);
      this.url = a;
      this.send(a, b.Ed, b.L2, b.oU, b.responseType)
    }, send: function (a) {
      var b = g.g.create("script");
      b.type = "text/javascript";
      b.charset = this.w.charset;
      var c = this;
      g.l.Ie ? b.onreadystatechange = function () {
        "loaded" !== this.readyState && "complete" !== this.readyState || c.q("complete")
      } : (b.onload = function () {
        c.q("complete")
      }, b.onerror = function () {
        c.q("error", {status: 0, info: "service error", url: a})
      });
      b.src = a;
      document.getElementsByTagName("head")[0].appendChild(b)
    }
  });
  g.jb.yb = g.jb.mM.extend({
    gna: function () {
      if (g.a.O8) return g.a.hL.push(this), !0
    }, Uwa: function () {
      this.q("error", {info: "TIME_OUT_A"})
    }, send: function (a, b, c, d) {
      function e() {
        window[f] = null;
        try {
          window[f] = null
        } catch (a) {
        }
        h.onerror = null;
        h.parentNode && h.parentNode.removeChild(h)
      }

      if (!this.w.gy || !this.gna()) {
        a = encodeURI(a);
        var f = this.w.fun;
        if (!f || window[f]) f = g.a.d4("jsonp_", 6) + "_";
        var h = document.createElement("script");
        h.type = "text/javascript";
        h.charset = "utf-8";
        h.async = !0;
        var k = this;
        g.l.Ie || (h.onerror = function () {
          e();
          k.q("error", {info: "REQUEST_FAILED", url: a})
        });
        window[f] = function (a) {
          e();
          if (k.w.callbackFunction) k.w.callbackFunction.call(k.w.context, a); else if (3E4 === a.errcode && a.data) g.a.O8 = !0, g.sb.load("AMap.AntiCrabFrame", function () {
            g.a.gy || (g.a.gy = new g.Q$);
            g.a.hL.push(k);
            g.a.gy.open(k.w.Ed, a.data.host, k.fE || "", k.url)
          }); else {
            if (a instanceof Array || "string" === typeof a) a = {data: a};
            a.$Da = f;
            k.q("complete", a)
          }
        };
        b = "?";
        -1 !== a.indexOf("?") && (b = "&");
        b = a + b + this.w.callback + "=" + f;
        if (-1 !== a.indexOf(g.r.Zd + "/v") || -1 !== a.indexOf("yuntuapi.amap.com/datasearch") ||
          -1 !== a.indexOf("webapi.amap.com/")) b = b + "&platform=JS&logversion=2.0" + ("&appname=" + g.r.Up), b += "&csid=" + g.a.fF(), b += "&sdkversion=" + g.r.nn;
        if (c = this.w.JI) {
          var l = [], m;
          for (m in c) c.hasOwnProperty(m) && (l.push(m + "=" + c[m]), b += "&" + m + "=" + encodeURIComponent(c[m]));
          k.fE = l.join("&")
        }
        h.src = d ? b + "&rereq=true" : b;
        g.jb.yb.fea = document.getElementsByTagName("body")[0] || document.getElementsByTagName("head")[0];
        g.jb.yb.fea.appendChild(h)
      }
    }
  });
  g.jb.XMLHttpRequest = g.jb.mM.extend({
    send: function (a, b, c, d, e) {
      var f = this;
      if ((g.l.Ie || g.l.h5) && window.XDomainRequest) {
        var h = this.J$ = new XDomainRequest;
        h.onerror = function (b) {
          f.q("error", {url: a, data: b})
        };
        h.onload = function () {
          f.q("complete", {url: a, data: h.responseText})
        };
        h.open(b || "GET", a);
        setTimeout(function () {
          h.send(c || void 0)
        }, 0)
      } else {
        var k = this.J$ = new XMLHttpRequest;
        k.onreadystatechange = function () {
          4 === k.readyState && 200 === k.status ? f.q("complete", {
            url: a, data: "arraybuffer" === k.responseType || "json" === k.responseType ?
              k.response : k.responseText
          }) : 404 === k.status && (k.abort(), f.q("error", {url: a, data: "404"}))
        };
        k.onerror = function (b) {
          k.abort();
          f.q("error", {url: a, data: b})
        };
        k.open(b || "GET", a);
        "POST" === b && k.setRequestHeader("Content-Type", d || "application/x-www-form-urlencoded");
        e && (k.responseType = e);
        k.send(c || void 0)
      }
    }, abort: function () {
      this.J$.abort()
    }
  });
  for (var $ = {
    v: "1.4.15",
    Pixel: g.H,
    LngLat: g.U,
    Size: g.xd,
    Bounds: g.ne,
    ArrayBounds: g.tp,
    PixelBounds: g.$f,
    Panorama: g.Yaa,
    PanoramaMarker: g.Zaa,
    Map: B.Rb,
    View2D: B.OF,
    GroundImage: B.o.RL,
    Marker: B.C.ub,
    ImageMarker: B.C.EAa,
    Text: B.C.IW,
    Icon: B.C.fi,
    MarkerShape: B.C.Oaa,
    Polyline: B.C.Zb,
    BezierCurve: B.C.tA,
    Polygon: B.C.Ec,
    Circle: B.C.jh,
    CircleMarker: B.C.TV,
    Ellipse: B.C.Et,
    Rectangle: B.C.Lt,
    ContextMenu: B.C.Vn,
    InfoWindow: B.C.Ze,
    Buildings: B.o.V$,
    TileLayer: B.o.qb,
    ImageLayer: B.o.CA,
    CanvasLayer: B.o.X$,
    VideoLayer: B.o.Eba,
    VectorLayer: B.o.ed,
    MassMarks: B.o.Qaa,
    CompositeLayer: B.o.aaa,
    LabelsLayer: B.o.qr,
    LabelMarker: B.C.Haa,
    LayerGroup: B.o.WL,
    OverlayGroup: B.C.Yn,
    GeoJSON: B.C.dW,
    CANVAS: "canvas",
    DOM: "dom",
    convertFrom: g.tI,
    Http: {JSONP: g.jb.yb},
    event: {CLASS_NAME: "AMap.event"}
  }, yc = "addDomListener addDomListenerOnce addListener addListenerOnce clearInstanceListeners clearListeners removeListener trigger".split(" "), Ic = 0; Ic < yc.length; Ic += 1) $.event[yc[Ic]] = function () {
    var a = g.event[yc[Ic]], b = yc[Ic];
    return function () {
      g.c.ya($.event);
      g.c.add($.event,
        b);
      return a.apply(g.event, Array.prototype.slice.call(arguments))
    }
  }();
  $.GeometryUtil = {CLASS_NAME: "AMap.GeometryUtil"};
  for (var Jc = "distance ringArea isClockwise makesureClockwise makesureAntiClockwise distanceOfLine ringRingClip doesSegmentsIntersect doesSegmentLineIntersect doesSegmentRingIntersect doesSegmentPolygonIntersect doesLineLineIntersect doesLineRingIntersect doesPolygonPolygonIntersect doesRingRingIntersect isPointInRing isRingInRing isPointInPolygon isPointOnSegment isPointOnLine isPointOnRing isPointOnPolygon closestOnSegment closestOnLine distanceToSegment distanceToLine distanceToPolygon".split(" "), Ic =
    0; Ic < Jc.length; Ic += 1) $.GeometryUtil[Jc[Ic]] = function () {
    var a = g.Ft[Jc[Ic]], b = Jc[Ic];
    return function () {
      g.c.ya($.GeometryUtil);
      g.c.add($.GeometryUtil, b);
      return a.apply(g.Ft, Array.prototype.slice.call(arguments))
    }
  }();
  $.GeometryUtil.triangulateShape = function (a, b) {
    g.c.ya($.GeometryUtil);
    g.c.add($.GeometryUtil, "triangulateShape");
    a = g.ao.normalize(a);
    b = g.ao.normalize(b);
    return g.ao.Yh(a, b)
  };
  $.PlaneGeometryUtil = {CLASS_NAME: "AMap.PlaneGeometryUtil"};
  for (Ic = 0; Ic < Jc.length; Ic += 1) $.PlaneGeometryUtil[Jc[Ic]] = function () {
    var a = g.gi[Jc[Ic]], b = Jc[Ic];
    return function () {
      g.c.ya($.PlaneGeometryUtil);
      g.c.add($.PlaneGeometryUtil, b);
      return a.apply(g.gi, Array.prototype.slice.call(arguments))
    }
  }();
  $.PlaneGeometryUtil.triangulateShape = function (a, b) {
    g.c.ya($.PlaneGeometryUtil);
    g.c.add($.PlaneGeometryUtil, "triangulateShape");
    a = g.ao.normalize(a);
    b = g.ao.normalize(b);
    return g.ao.Yh(a, b)
  };
  $.plugin = $.service = B.Rb.prototype.plugin;
  $.TileLayer.Satellite = B.o.qb.BW;
  $.TileLayer.RoadNet = B.o.qb.yW;
  $.TileLayer.google = B.o.qb.QL;
  $.TileLayer.Flexible = B.o.qb.zA;
  $.TileLayer.WMS = B.o.qb.Fba;
  $.TileLayer.WMTS = B.o.qb.Gba;
  $.TileLayer.Traffic = B.o.qb.KW;
  $.Panorama.Events = B.event;
  $.TileLayer.PanoramaLayer = B.o.qb.MAa;
  $.UA = {ie: g.l.Es, ielt9: g.l.Ie, ielt11: g.l.Wra, mobile: g.l.ba, android: g.l.Yl, ios: g.l.ED};
  $.Browser = {
    ua: navigator.userAgent,
    mobile: g.l.ba,
    plat: g.l.Ez,
    mac: g.l.oz,
    windows: g.l.Xza,
    ios: g.l.ED,
    iPad: g.l.Pra,
    iPhone: g.l.Qra,
    android: g.l.Yl,
    android23: g.l.ama,
    chrome: g.l.chrome,
    firefox: g.l.fR,
    safari: g.l.zE,
    wechat: g.l.B$,
    uc: g.l.lza,
    qq: g.l.awa,
    ie: g.l.Es,
    ie6: g.l.Ci,
    ie7: g.l.sv,
    ie8: g.l.Ie && !g.l.sv && !g.l.Ci,
    ie9: g.l.h5,
    ie10: g.l.g5,
    ie11: g.l.Tra,
    edge: g.l.opa,
    ielt9: g.l.Ie,
    baidu: g.l.YH,
    isLocalStorage: g.l.Gv,
    isGeolocation: !!navigator.geolocation,
    mobileWebkit: g.l.eua,
    mobileWebkit3d: g.l.E6,
    mobileOpera: !!g.l.dua,
    retina: g.l.Kc,
    touch: !!g.l.Yf,
    msPointer: !!g.l.G6,
    pointer: !!g.l.GT,
    webkit: g.l.A$,
    ie3d: g.l.Ura,
    webkit3d: g.l.HL,
    gecko3d: g.l.fqa,
    opera3d: g.l.Xua,
    any3d: g.l.UH,
    isCanvas: g.l.kl,
    isSvg: g.l.Gn,
    isVML: g.l.Es,
    isWorker: !!window.Worker,
    isWebsocket: !!window.WebSocket,
    isWebGL: function () {
      for (var a = document.createElement("canvas"), b = ["webgl", "experimental-webgl", "moz-webgl"], c = null, d = 0; d < b.length; d += 1) {
        try {
          c = a.getContext(b[d])
        } catch (e) {
        }
        if (c) if (c.drawingBufferWidth !== a.width || c.drawingBufferHeight !== a.height) break; else return !0
      }
      return !1
    }
  };
  $.Util = {CLASS_NAME: "AMap.Util"};
  var Kc = {
    colorNameToHex: g.a.oI,
    rgbHex2Rgba: g.a.A8,
    argbHex2Rgba: g.a.Rr,
    isEmpty: g.a.xh,
    deleteItemFromArray: g.a.zy,
    deleteItemFromArrayByIndex: g.a.Ho,
    indexOf: g.a.indexOf,
    format: g.a.vb,
    isArray: g.a.isArray,
    isDOM: g.a.HJ,
    includes: g.a.ka,
    requestIdleCallback: g.a.pU,
    cancelIdleCallback: g.a.eQ,
    requestAnimFrame: g.a.Yc,
    cancelAnimFrame: g.a.ui,
    color2RgbaArray: g.a.$l,
    color2Rgba: g.a.Lna
  };
  for (Ic in Kc) Kc.hasOwnProperty(Ic) && "function" == typeof Kc[Ic] && ($.Util[Ic] = function () {
    var a = Ic;
    return function () {
      g.c.ya($.Util);
      g.c.add($.Util, a);
      return Kc[a].apply(g.a, Array.prototype.slice.call(arguments))
    }
  }());
  $.DomUtil = {CLASS_NAME: "AMap.DomUtil"};
  var Lc = {
    getViewport: g.g.pJ,
    getViewportOffset: g.g.UR,
    create: g.g.create,
    setClass: g.g.pxa,
    hasClass: g.g.Cn,
    addClass: g.g.Wa,
    removeClass: g.g.eb,
    setOpacity: g.g.Yq,
    rotate: g.g.rotate,
    setCss: g.g.$a,
    empty: g.g.Jz,
    remove: g.g.remove,
    TRANSFORM: g.g.tg,
    TRANSITION: g.g.KF
  };
  for (Ic in Lc) Lc.hasOwnProperty(Ic) && "function" == typeof Lc[Ic] && ($.DomUtil[Ic] = function () {
    var a = Ic;
    return function () {
      g.c.ya($.DomUtil);
      g.c.add($.DomUtil, a);
      return Lc[a].apply(g.g, Array.prototype.slice.call(arguments))
    }
  }());
  var Mc = g.r;
  $.User = {key: Mc.key};
  window.AMap = $;
  window.AMap.BuryPoint = g.BuryPoint;
  window.AMap.Class = g.da;
  g.Nj = g.da.extend({
    A: function (a, b, c, d) {
      this.start = a;
      this.end = b;
      this.transition = c;
      this.precision = d || 0;
      this.Zv = !1;
      this.update = g.a.bind(this.update, this);
      return this
    }, Pn: function (a) {
      this.kh = this.startTime = +new Date;
      this.frames = 0;
      this.Zv = !0;
      this.Ao = g.a.Yc(this.update);
      this.Oia = g.a.bind(this.Kq, a || this)
    }, update: function () {
      this.frames += 1;
      var a = +new Date, b = a - this.startTime,
        b = this.transition ? this.transition(this.start, this.end, b, this.frames, a - this.kh) : null;
      "number" === typeof b && Math.abs(b - this.end) < this.precision ?
        (this.stop(), b = this.end) : this.Ao = g.a.Yc(this.update);
      this.kh = a;
      this.Oia(b)
    }, stop: function (a) {
      g.a.ui(this.Ao);
      a && this.update();
      this.Zv = !1
    }
  });
  g.Nj.Easing = {
    Linear: {
      None: function (a) {
        return a
      }
    }, Bounce: {
      In: function (a) {
        return 1 - (a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375)
      }, Out: function (a) {
        return g.Nj.Easing.Bounce.In(1 - a)
      }
    }, Cubic: {
      In: function (a) {
        return 1 - a * a * a
      }, Out: function (a) {
        a = 1 - a;
        return 1 - a * a * a
      }
    }
  };
  g.Rb = g.da.extend({
    ka: [g.va, g.$e, g.VJ], A: function (a, b) {
      this.pc = g.a.bind(this.pc, this);
      this.B = b;
      this.pj = b.pj;
      this.Dm = "";
      this.vg = this.Of = this.gj = !1;
      this.Vm = {};
      this.K = a;
      this.Tga();
      this.psa();
      this.X("zooms", b, !0);
      this.X("size", b, !0);
      this.X("limitBounds", b);
      this.X("view", b);
      this.X("nolimg", b, !0);
      this.X("mapNumber", b, !0);
      this.X("lang", b, !0);
      this.X("features", b, !0);
      this.X("styleID", b, !0);
      this.X("forceBig", b, !0);
      this.X("mode", b, !0);
      this.X("showBuildingBlock", b, !0);
      this.X("mapStyle", b);
      var c = this.get("mapStyle");
      this.De = g.r.De[c] || g.r.De["default"];
      this.NH = "#a3ccff";
      this.dC = b.get("skyColor") || "#cce0ff";
      g.r.VQ && this.X("editEnable", b);
      g.r.VQ && this.Bd ? this.X("style", b, !0) : this.X("styleUrl", b);
      this.X("hightlight", b, !0);
      this.X("labelzIndex", b, !0);
      if (g.l.gL) {
        c = new B.o.qb({innerLayer: !0, zIndex: b.get("labelzIndex"), visible: !1});
        this.Hc = new g.o.Sj(c, this, ["point", "road"]);
        this.Hc.type = "\u77e2\u91cf\u6807\u6ce8";
        var d = this.B.get("defaultLayer");
        d && c.X("rejectMapMask", d, !0);
        b.labelsLayer = this.Hc.S;
        this.Hc.S.h("complete",
          this.Br, this, !0);
        this.Hc.S.h("renderComplete", this.Br, this);
        this.Hc.yB = this.Hc.bh = !0
      }
      this.X("isHotspot", b, !0);
      this.X("layers", b);
      this.X("overlays", b);
      this.X("infos", b, !0);
      this.X("contextmenus", b, !0);
      this.X("controls", b);
      this.X("bounds", b);
      this.X("draw", b);
      this.bf("zoomAndCenter destroy defaultCursor jogEnable animateEnable baseRender overlayRender vectorMapForeign".split(" "), b);
      this.bf("rotateEnable pitchEnable dragEnable keyboardEnable doubleClickZoom scrollWheel zoomEnable touchZoom".split(" "),
        b, !0);
      this.get("jogEnable") ? this.vv = !0 : this.vv = !1;
      this.iga();
      this.pga();
      this.GG && this.GG();
      this.X("resizeEnable", b);
      this.B.map = this;
      c = this.get("size");
      c = c.width * c.height / 65536;
      g.l.Kc && 3 < c && (this.ZH = !0);
      this.V = {Ad: !1};
      this.PK()
    }, editEnableChanged: function () {
      this.Bd = this.get("editEnable")
    }, labelzIndexChanged: function () {
      this.Hc && this.Hc.set("zIndex", this.get("labelzIndex"))
    }, styleChanged: function () {
      this.Hi = !0
    }, mapStyleChanged: function () {
      if (this.B.Ei) {
        this.Dm && (this.set("style", ""), this.Nu = this.Dm = "");
        var a = this.get("mapStyle");
        this.Hi = !0;
        this.De = g.r.De[a] || g.r.De["default"];
        this.sE()
      }
    }, styleUrlChanged: function () {
      if (this.B.Ei) {
        var a = this.get("styleUrl") || "";
        if (a !== this.Dm) {
          var b = -1 !== a.indexOf("?isPublic=true"), a = a.substr(0, 46), c = a.split("amap://styles/")[1];
          "normal" === c ? (this.Dm = "", this.set("nolimg", !!this.B.get("nolimg_param")), this.set("style", ""), this.Nu = "") : (this.hA = !0, this.set("nolimg", !0), b = new g.jb.yb(32 > c.length ? "/amap/style?name=" + c + "&key=" + g.r.key : g.r.vc + "://webapi.amap.com/v4/map/styles?styleid=" +
            c + "&s=rsv3&key=" + g.r.key + (b ? "&ispublic=1" : ""), {callback: "callback"}), b.h("complete", function (a) {
            a.data && a.data.content ? this.set("style", JSON.parse(a.data.content)) : this.set("style", "");
            this.hA = !1
          }, this), b.h("error", function () {
            this.hA = !1
          }, this), this.Dm = a, this.sE())
        }
      }
    }, Q8: function (a) {
      this.K.style.background = a
    }, hqa: function (a) {
      var b = this.get("center");
      if (a.contains(b)) return null;
      a = g.Ft.closestOnLine(b, a.cV().path);
      return new g.U(a[0], a[1])
    }, ina: function () {
      var a = this.get("limitBounds"), b = this.get("bounds");
      b.xc && b.xc.R > b.oc.R && (b.oc.R += 360);
      if (!a.contains(b)) {
        if (b instanceof g.tp) return this.hqa(a, b);
        var c = this.get("center").cb();
        a.zj() < b.zj() ? c.R = a.Ai().R : (a.xc.R > b.xc.R && (c.R += a.xc.R - b.xc.R), a.oc.R < b.oc.R && (c.R += a.oc.R - b.oc.R));
        a.wj() < b.wj() ? c.Q = a.Ai().Q : (a.xc.Q > b.xc.Q && (c.Q += a.xc.Q - b.xc.Q), a.oc.Q < b.oc.Q && (c.Q += a.oc.Q - b.oc.Q));
        return c
      }
    }, aP: function () {
      var a = this.NU;
      this.B.refreshSize();
      var b = this.get("size");
      b && a && !b.gb(a) && (this.NU = b, this.it = !0, this.set("display"), this.x8(b), this.get("resizeEnable") &&
      this.qa("resize", {xua: a, Q6: b}))
    }, i0: function () {
      var a = this;
      a.aP();
      a.VO = setTimeout(function () {
        a.i0()
      }, 200)
    }, mda: function () {
      this.VO && (clearTimeout(this.VO), this.VO = null)
    }, Tga: function () {
      this.B.D = !0;
      this.NU = this.B.getSize();
      this.B.D = !1;
      if (g.l.Ie || g.l.B$ && g.l.ED || g.l.Sta) this.i0(); else {
        var a = this;
        g.F.Vla(this.K, function (b) {
          a.aP(b)
        })
      }
    }, psa: function () {
      var a = this.K;
      g.g.Wa(a, "amap-container");
      var b = {};
      b.$c = g.g.create("div", a, "amap-maps");
      this.Nl = g.g.create("div", a);
      this.Nl.style.display = "none";
      b.Xr = g.g.create("div",
        b.$c, "amap-drags");
      b.o = g.g.create("div", b.Xr, "amap-layers");
      b.C = g.g.create("div", b.Xr, "amap-overlays");
      b.controls = g.g.create("div", a, "amap-controls");
      b.$S = g.g.create("a", a, "amap-logo");
      g.g.create("img", b.$S).src = g.l.Kc ? this.B.w.logoUrlRetina : this.B.w.logoUrl;
      b.tn = g.g.create("div", a, "amap-copyright");
      b.tn.style.display = "none";
      350 < g.g.pJ(this.K).width && (b.tn.innerHTML = this.B.w.copyright, b.tn.t6 = g.g.create("span", b.tn, "amap-mcode"), this.sE());
      this.Xa = b
    }, sE: function () {
      var a = this.get("layers");
      if (a) {
        for (var b =
          -1, c = "", d = 0; d < a.length; d += 1) {
          var e = a[d].get("mapNumber"), f = a[d].get("zIndex", null, !0);
          e && f > b && a[d].get("visible") && (c = e, b = f)
        }
        this.set("mapNumber", c);
        this.B.D = !0;
        a = this.B.getMapStyle();
        this.B.D = !1;
        "GS(2019)6379" === c && a && "normal" !== a && "amap://styles/normal" !== a && (c = "", this.Xa.tn.style.visibility = "hidden");
        c && this.Xa.tn.t6 && (this.Xa.tn.t6.innerHTML = "- " + c + "\u53f7", this.Xa.tn.style.visibility = "visible");
        return c
      }
    }, wY: function () {
      var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : !1;
      g.Qj && (a ?
        g.Qj.flush() : this.D3 || (this.D3 = g.a.Yc(function () {
        g.Qj.flush();
        this.D3 = null
      }, this)))
    }, cU: function (a) {
      var b = this, c = this.B.get("rasterLayer");
      c && (this.B.set("rasterLayer", void 0), this.B.c8 = !0, this.B.vk = this.B.La, this.yi && (this.yi.wD = !1), c.o && (c.o.XD = !0), a || (this.dU = g.a.pU(function () {
        b.dU = null;
        b.B && b.B.wk(c)
      })));
      a && this.dU && g.a.eQ(this.dU)
    }, Br: function () {
      function a() {
        for (var a = d.get("layers"), b = d.get("zoom"), c = 0; c < a.length; c += 1) {
          var e = a[c].get("zooms");
          if (!(a[c].Cj || a[c].vk || a[c].q5 || !e || b > e[1] || b < e[0] ||
            !a[c].get("visible") || a[c].o && a[c].o.ga && 0 === a[c].o.ga.length || a[c].o && a[c].o.XD || a[c].o && a[c].o.La)) return !1
        }
        a = d.B.get("features");
        return ("all" === a || g.a.ka(a, "point")) && d.Hc && d.Hc.get("visible") && 0 < d.Hc.ga.length && !d.Hc.La && !d.Hc.ro ? !1 : !0
      }

      function b() {
        var a = {id: d.B.id};
        g.Be.nf.end(g.extend(a, {key: "rds"}));
        g.Be.nf.send(g.extend(a, {
          params: {
            rs: d.get("baseRender"),
            viewmode: d.B.view.type,
            fd: 0 === d.QJ ? 1 : 0,
            raster: d.B.vk ? 1 : 0
          }
        }));
        d.B && d.B.tm && d.B.tm.OB && d.B.tm.OB();
        d.B.V7 = 1;
        d.wY();
        d.set("display");
        d.LD = !0
      }

      function c() {
        g.Be.nf.end({id: d.B.id, key: "rd"});
        g.a.Yc(function () {
          this.q("complete")
        }, d);
        d.B.La = !0;
        d.set("display")
      }

      if (!this.yI) if (this.LD) 1 === this.St && 13 === this.get("zoom") && (g.a.jD.stop(this.tG), g.Be.nf.send({
        id: this.B.id,
        params: {fps: this.tG.jD, type: "fps", rs: this.get("baseRender")}
      }), this.St = 2), this.wY(); else {
        var d = this, e = this.B.get("rasterLayer"), f = a();
        e ? (e.o && e.o.La && (this.B.La || c()), f && (this.B.La || c(), this.cU(), b())) : f && (this.B.La || c(), b(), this.B.c8 = !0)
      }
    }, layersChanged: function () {
      this.la = this.la ||
        [];
      for (var a = this.get("layers"), b = this.la.length - 1; 0 <= b; b -= 1) this.la[b] === this.td || this.la[b] === this.Zs || this.la[b].yB || this.la[b].S.yB || -1 !== g.a.indexOf(a, this.la[b].S) || (this.la[b].kg(), this.la[b].Kj && this.la[b].Kj.kg(), this.la[b].S.G("complete", this.Br, this), this.la[b].S.G("renderComplete", this.Br, this), this.la = g.a.Ho(this.la, b));
      for (var c = !1, d = !0, e = this.get("labelzIndex"), b = 0; b < a.length; b += 1) if (!a[b].q5) if (a[b].ti) -1 === g.a.indexOf(this.la, a[b].o) && this.la.push(a[b].o); else {
        var f = this.fg(a[b]);
        f && (this.la.push(f), a[b].ti = !0, a[b].o = f);
        a[b].h("complete", this.Br, this, !0);
        a[b].h("renderComplete", this.Br, this)
      }
      for (b = 0; b < this.la.length; b += 1) f = this.la[b].S, f.Hq && f.get("visible") && (c = !0, !1 === f.get("detectRetina") && (d = !1), e = f.get("textIndex") || e);
      this.Hc && (c || "3D" !== this.B.view.type ? this.Hc.ro = !1 : (c = g.a.find(a, function (a) {
        if (B.o.Ht && a instanceof B.o.Ht && a.get("visible")) return !0
      }), this.Hc.ro = c = !!c));
      a = g.a.indexOf(this.la, this.Hc);
      c && this.B.get("showLabel") ? (-1 === a && this.la.push(this.Hc), this.Hc.ja =
        d && g.l.ja, this.Hc.BC(this.get("mapStyle") || "normal"), this.Hc.set("zIndex", e), this.Hc.set("visible", !0), this.B.vD = !0, this.B.get("isHotspot") ? this.Hc.Qua() : this.Hc.nQ()) : (this.Hc && (this.Hc.set("visible", !1), this.B.vD = !1, this.Hc.nQ()), this.B.vD = !1);
      this.B.isHotspotChanged();
      this.set("display", 0);
      this.sE()
    }, isHotspotChanged: function () {
      this.layersChanged()
    }, controlsChanged: function () {
      var a = this.get("controls"), b, c;
      if (a.add && 0 < a.add.length) for (; 0 < a.add.length;) b = a.add.shift(), (c = b.xu || b.addTo) && c.call(b,
        this.B, this.Xa.controls); else if (a.remove && a.remove.length) for (; 0 < a.remove.length;) b = a.remove.shift(), (c = b.Uv || b.removeFrom) && c.call(b, this.B, this.Xa.controls)
    }, v1: function () {
      if (!this.yI) {
        var a = this;
        this.A1 = !1;
        a.td || (a.td = new g.o.ed(new B.o.ed, a), a.td.Df = 36, a.td.mg = 36, a.td.set("zIndex", 120), a.la.push(a.td), a.td.XC = !0);
        for (var b = a.get("overlays"), c = [], d = 0; d < a.Xc.length; d += 1) -1 === g.a.indexOf(b, a.Xc[d].Kb) && (a.Xc[d].Kb instanceof B.C.Ze || a.Xc[d].Kb instanceof B.C.Vn ? a.Xc[d].kg() : (a.td && a.Xc[d] instanceof
        g.C.ub ? (a.td.eh = g.a.zy(a.td.eh, a.Xc[d].L), a.td.j8([a.Xc[d].L])) : a.Zs && a.Zs.j8([a.Xc[d].L]), a.Xc[d].L.fa ? (g.g.remove(a.Xc[d].L.fa), a.Xc[d].L.fa = null) : a.Xc[d].L.Ma && (g.g.remove(a.Xc[d].L.Ma.Rh), g.g.remove(a.Xc[d].L.Ma.Rc), g.g.remove(a.Xc[d].L.Ma.dir), a.Xc[d].L.Ma = null), a.Xc[d].Jn && a.Xc[d].Jn.stop(), a.Xc[d].Bh && a.Xc[d].Bh.stop(), a.Xc[d].Kb.ti = !1, a.Xc[d].Kb.Al(), a.Xc[d].Kb.C = null, a.Xc[d].Kb = null, a.Xc[d].L.Ooa(), a.Xc[d].L = null, a.Xc[d].Al(), a.Xc[d].Ce = null, a.Xc[d].wi(), a.Xc[d].map = null), c.push(a.Xc[d]));
        for (d = 0; d < c.length; d += 1) a.Xc = g.a.Ho(a.Xc, g.a.indexOf(a.Xc, c[d]));
        var e = [], f = [];
        g.a.kxa(function (b) {
          if (!b.ti && b.dh) {
            var c = b.C || a.Pma(b);
            c && (a.Xc.push(c), c instanceof g.C.Ze || c instanceof g.C.Vn ? c.Ts(a) : c instanceof g.C.ub ? e.push(c.L) : f.push(c.L), b.ti = !0)
          }
        }, b);
        e.length && a.td.ay(e);
        f.length && (a.Zs || (a.Zs = new g.o.ed(new B.o.ed, a), a.Zs.set("zIndex", 110), a.la.push(a.Zs)), a.Zs.ay(f));
        a.set("display", 0)
      }
    }, overlaysChanged: function () {
      this.Xc = this.Xc || [];
      this.get("overlays") && 0 === this.get("overlays").length ?
        this.v1() : this.A1 || (g.a.Yc(this.v1, this), this.A1 = !0)
    }, contextmenusChanged: function () {
      var a = this.get("contextmenu");
      if (a) {
        var b = this;
        g.sb.load("overlay", function () {
          b.ry = new g.C.Vn(a, b);
          b.set("display", 0)
        })
      }
    }, infosChanged: function () {
      var a = this.get("infos");
      if (a) {
        this.um = this.um || {};
        var b, c = this;
        g.sb.load("overlay", function () {
          for (var d in a) a.hasOwnProperty(d) && (b = a[d], c.um[d] = c.um[d] || new g.C.Ze(b, c))
        })
      }
    }, Pma: function (a) {
      var b = null;
      if (a instanceof B.C.ub) b = new g.C.ub(a, this); else if (a instanceof B.C.Vn) b =
        new g.C.Vn(a, this); else if (a instanceof B.C.Ze) b = new g.C.Ze(a, this); else {
        var c = ["overlay"];
        "d" === this.get("overlayRender") ? (c.push("dvector"), g.l.Gn ? c.push("svg") : c.push("vml")) : c.push("cvector");
        if (!this.Hza && !g.sb.ID(c)) {
          var d = this;
          g.sb.Jg(c, function () {
            this.Hza = !0;
            d.overlaysChanged()
          });
          return
        }
        a instanceof B.C.Ec ? b = new g.C.Ec(a, this) : a instanceof B.C.tA ? b = new g.C.tA(a, this) : a instanceof B.C.Zb ? b = new g.C.Zb(a, this) : a instanceof B.C.jh ? b = new g.C.jh(a, this) : a instanceof B.C.Et ? b = new g.C.Ec(a, this) :
          a instanceof B.C.Lt && (b = new g.C.Ec(a, this))
      }
      return b
    }, L3: function () {
      var a = this.De;
      this.Nu && (!this.Te || !this.Te.Hp || this.B && this.B.js) && (a = "function" === typeof this.Nu ? this.Nu(this.yi.P.zoom) : this.Nu);
      return a
    }, FCa: function () {
      function a() {
      }

      var b = new g.o.ed, c = [], d = new g.U(116.405467, 39.907761);
      new g.style.Qg.fi;
      for (var e = 0; 100 > e; e += 1) for (var f = 0; 100 > f; f += 1) {
        var h = new g.U(d.R + 0.02 * f, d.Q + 0.02 * e),
          h = new g.di({name: "point" + (100 * e + f), map: this, W: new g.Aa.Pg(this.Ab(h))});
        c[100 * e + f] = h;
        h.h("hover", a, h)
      }
      b.ay(c);
      this.la.push(b)
    }, nc: function () {
    }, DCa: function (a) {
      var b = new g.o.ed, c = [], c = (new g.qaa({map: this})).RT(a);
      b.ay(c);
      this.la.push(b);
      this.set("display", 0)
    }, fg: function (a) {
      var b = this;
      a = a.fg(this);
      if (!a) return null;
      if (a.length && "string" == typeof a[0]) g.sb.Jg(a, function () {
        b.layersChanged()
      }); else return a;
      return null
    }, yEa: function () {
      return this.Xa
    }, MGa: function () {
      this.set("display", 0)
    }, displayChanged: function (a) {
      this.n1 || this.PK(a)
    }, PK: function (a) {
      if (a) if (g.a.ui(this.wE), g.l.Yl) {
        var b = this;
        setTimeout(function () {
            b.pc()
          },
          0)
      } else this.pc(); else this.Dw || (this.wE = g.a.Yc(this.pc), this.Dw = !0)
    }, pc: function () {
      this.wE = null;
      if (!this.yI) {
        this.q("render");
        this.Dw = !1;
        var a = {};
        if (this.la && (a.size = this.B.get("size"), a.size.width && a.size.height)) {
          for (var b = this.B.view.type, c = [], d = 0, e = this.la.length; d < e; d += 1) this.la[d].Kf && this.la[d].Kf !== b ? this.la[d].La = !0 : (c.push(this.la[d]), this.la[d].Kj && c.push(this.la[d].Kj));
          c.sort(function (a, b) {
            var c = a.get("zIndex"), d = b.get("zIndex");
            return c > d ? 1 : c === d ? a.ex > b.ex ? 1 : -1 : -1
          });
          a.la = c;
          c = g.l.ja ?
            Math.min(window.devicePixelRatio || 1, 2) : 1;
          a.S1 = 15E5 < a.size.width * a.size.height * c * c;
          a.wD = !!this.B.get("rasterLayer");
          a.ba = g.l.ba;
          a.lang = this.get("lang");
          a.P = this.B.sD();
          a.Kf = b;
          this.B.D = !0;
          a.T = this.B.getResolution([0, 0]);
          a.Eq = this.B.get("mapStyle");
          a.Hi = this.Hi;
          this.B.D = !1;
          a.Ad = this.vg;
          a.Uoa = this.Vm;
          a.fe = this.gj;
          a.hf = this.Of;
          a.SE = this.Of && g.l.ba;
          a.oL = g.l.ba && this.gj;
          a.ot = g.l.ba && this.vg;
          this.ot = a.ot;
          b = this.get("targetLevel") || a.P.zoom;
          a.sp = a.P.zoom > b;
          a.Lf = a.P.zoom > b ? "zoomOut" : a.P.zoom < b ? "zoomIn" : "stable";
          a.mua = !0;
          a.ZH = this.ZH;
          for (var b = !1, f, c = !1, d = 0; d < this.la.length; d += 1) this.la[d].Fi && this.la[d].S.get("visible") && a.P.zoom <= this.la[d].S.get("zooms")[1] && (a.hU = !0), this.la[d].le().Kc && (b = !0);
          for (d = 0; d < this.la.length; d += 1) this.la[d].S.SP && a.hU && (!this.gj && this.la[d].S.get("visible") && (f = this.la[d].S.SP(), f.fFa = 1, f.zoom = a.P.zoom), c = !0);
          this.nb = [];
          c && f && this.nb !== f && (this.nb = f);
          a.nb = this.nb;
          a.Kc = b;
          a.scale = Math.pow(2, a.P.zoom - a.P.me);
          this.yi = a;
          this.Oc = this.B.get("mask");
          a.Oc = this.Oc;
          a.YJ = this.YJ;
          if (f = this.Oy()) f.pc(a),
            this.Hi = this.lR = this.YJ = !1
        }
      }
    }, Qq: function (a) {
      if (!this.yI) {
        var b = {};
        if (this.la && (b.size = this.B.get("size"), b.size.width && b.size.height)) {
          for (var c = this.B.view.type, d = [], e = 0, f = this.la.length; e < f; e += 1) this.la[e].Kf && this.la[e].Kf !== c || !(this.la[e] instanceof g.o.Pm) || 0 > a.indexOf(this.la[e].S) || (d.push(this.la[e]), this.la[e].Kj && d.push(this.la[e].Kj));
          d.sort(function (a, b) {
            var c = a.get("zIndex"), d = b.get("zIndex");
            return c > d ? 1 : c === d ? a.ex > b.ex ? 1 : -1 : -1
          });
          b.la = d;
          a = g.l.ja ? Math.min(window.devicePixelRatio || 1,
            2) : 1;
          b.S1 = 15E5 < b.size.width * b.size.height * a * a;
          b.wD = !!this.B.get("rasterLayer");
          b.ba = g.l.ba;
          b.lang = this.get("lang");
          b.P = this.B.sD();
          b.Kf = c;
          this.B.D = !0;
          b.T = this.B.getResolution([0, 0]);
          b.Eq = this.B.get("mapStyle");
          b.Hi = this.Hi;
          this.B.D = !1;
          b.Ad = this.vg;
          b.Uoa = this.Vm;
          b.fe = this.gj;
          b.hf = this.Of;
          b.SE = this.Of && g.l.ba;
          b.oL = g.l.ba && this.gj;
          b.ot = g.l.ba && this.vg;
          this.ot = b.ot;
          c = this.get("targetLevel") || b.P.zoom;
          b.sp = b.P.zoom > c;
          b.Lf = b.P.zoom > c ? "zoomOut" : b.P.zoom < c ? "zoomIn" : "stable";
          b.mua = !0;
          b.ZH = this.ZH;
          c = !1;
          for (a =
                 0; a < this.la.length; a += 1) this.la[a].le().Kc && (c = !0);
          this.nb = [];
          b.nb = this.nb;
          b.Kc = c;
          b.scale = Math.pow(2, b.P.zoom - b.P.me);
          this.yi = b;
          this.Oc = this.B.get("mask");
          b.Oc = this.Oc;
          (c = this.Oy()) && c.Qq(b)
        }
      }
    }, Oy: function () {
      if (!this.J || this.J.type !== this.B.view.type || this.J.Hta) if (this.J = null, "3D" == this.B.view.type) {
        var a = this;
        g.sb.load("Map3D", function () {
          a.J || (a.J = new g.Ea.CF(a), a.set("display"))
        })
      } else this.J = new g.M.canvas.Rb(this);
      return this.J
    }, sqa: function () {
      var a = [], b = this.get("controls").Ld, c;
      for (c in b) b[c].Qy &&
      b[c].Qy() && a.push(b[c].Qy());
      return a
    }, destroyChanged: function () {
      delete g.Be.az[this.B._amap_id];
      this.yI = 1;
      this.cU(!0);
      this.V = {};
      this.Hc && (this.Hc.S.G("complete", this.Br, this), this.Hc.kg(), this.la = g.a.Ho(this.la, g.a.indexOf(this.la, this.Hc)));
      this.Te && this.Te.ge && this.Te.ge.S && this.Te.ge.S.setMap();
      this.Mka && clearTimeout(this.Mka);
      this.qka();
      this.tha();
      this.EO && this.EO();
      this.wla();
      this.Al();
      this.B = this.B.map = null;
      this.K = this.K.___amap___ = null;
      this.wi();
      this.Je && (this.Je.stop(), this.Je = null);
      this.Zf &&
      (this.Zf.stop(), this.Zf = null);
      this.Fd && (this.Fd.stop(), this.Fd = null);
      this.J && this.J.Qf && this.J.Qf();
      this.J = null
    }, wla: function () {
      var a = this.K;
      this.mda();
      g.F.zna(a);
      g.g.Jz(a);
      this.Nl = null;
      g.g.eb(a, "amap-container");
      this.Xa = null
    }, jogEnableChanged: function () {
      this.get("jogEnable") ? this.vv = !0 : this.vv = !1
    }, drawChanged: function () {
      var a = this, b, c, d = this.get("draw");
      if (d) {
        this.uq || (this.uq = []);
        b = 0;
        for (c = this.uq.length; b < c; b += 1) this.uq[b].swa();
        g.sb.load("interaction", function () {
          var b = new g.GAa({type: d, o: a.Zs},
            a);
          a.uq.push(b);
          a.loaded = !0
        })
      } else if (this.uq) for (b = 0, c = this.uq.length; b < c; b += 1) this.uq[b].swa(), this.uq[b].bDa(), this.G("click", this.uq[b].NEa, this)
    }, Xd: function (a, b, c) {
      return this.B.view.Xd(a, b, c)
    }, Cg: function (a, b, c) {
      return this.B.view.Cg(a, b, c)
    }, C4: function (a, b) {
      var c = this.get("size"), d = document.createElement("canvas");
      a = a || c.width;
      b = b || c.height;
      d.width = a;
      d.height = b;
      for (var e = -(c.width - a) / 2, c = -(c.height - b) / 2, f = d.getContext("2d"), h = this.Xa.o.childNodes, k = [], l = 0; l < h.length; l += 1) k.push(h[l]);
      k.sort(function (a,
                       b) {
        return a.style.zIndex - b.style.zIndex
      });
      for (l = 0; l < k.length; l += 1) {
        var m = k[l];
        if (g.g.Cn(m, "amap-layer") || g.g.Cn(m, "amap-e") || g.g.Cn(m, "amap-labels")) if ("CANVAS" === m.tagName) {
          var h = c, n = e, p = parseFloat(m.style.width) || m.width, q = parseFloat(m.style.height) || m.height, r = 1;
          m.style.transform && (r = parseFloat(m.style.transform.split("(")[1]));
          f.drawImage(m, n, h, p * r, q * r)
        } else if ("DIV" === m.tagName) for (var r = m.childNodes, s = parseFloat(m.style.top) || 0 + c, m = parseFloat(m.style.left) || 0 + e, u = 0; u < r.length; u += 1) {
          var v = r[u];
          if ("CANVAS" === v.tagName || "IMG" === v.tagName) h = parseFloat(v.style.top) || 0, n = parseFloat(v.style.left) || 0, p = parseFloat(v.style.width) || v.width, q = parseFloat(v.style.height) || v.height, f.drawImage(v, n + m, h + s, p, q)
        }
      }
      return d.toDataURL()
    }
  });
  g.Rb.Gb({
    iga: function () {
      this.DB = !1;
      g.l.Yf && ("3D" === this.B.view.type ? this.Eca() : this.Cca());
      g.l.ba || this.zca()
    }, qka: function () {
      g.l.Yf && ("3D" === this.B.view.type ? this.yha() : this.xha());
      g.l.ba || (this.uha(), this.i_())
    }, rotateEnableChanged: function () {
      this.axa = this.get("rotateEnable");
      g.l.Yf && this.U1 && "3D" !== this.B.view.type && (this.axa ? this.U1() : this.wua())
    }, zoomEnableChanged: function () {
      this.get("zoomEnable") ? (g.l.Yf && this.UP && "3D" !== this.B.view.type && this.UP(), g.l.ba || this.Bca()) : (g.l.Yf && this.jT && this.jT(),
      g.l.ba || this.i_())
    }, mousewheelChanged: function () {
    }, YS: function (a) {
      a && (this.DB = a.su)
    }, ww: function () {
      this.DB = !1
    }, Ni: function (a, b, c, d) {
      var e, f = {};
      a || (a = window.event);
      var h = g.F.nm(a, this.Xa.$c);
      g.l.Yf && ("touchend" !== a.type ? this.V.Oga = h : h = this.V.Oga);
      f.Bb = h;
      f.Sa = this.Cg(h);
      f.Sa && (f.Sa = f.Sa.toFixed(3));
      f.Tf = this.Od(f.Sa);
      c || (c = this.DB ? this.DB ? [this.DB] : null : this.Yea(f.Sa, d)) && 0 < c.length && c[0].wo && (e = c[0].wo, f.su = c[0]);
      e || "info" === a.af || (e = this);
      f.hd = e;
      f.GBa = a.altKey;
      f.ctrlKey = a.ctrlKey;
      f.button = void 0 ===
      a.button ? 0 : a.button;
      f.wT = a;
      e && "AMap.LabelMarker" === e.CLASS_NAME && (f.lnglat = f.Tf, f.pixel = f.Bb, f.target = e, f.data = e.TW, f.originEvent = a);
      b || g.F.preventDefault(a);
      return f
    }, bO: function (a) {
      return a && a !== this && a !== document
    }, WO: function () {
      var a = this.V;
      a.jg && (a.dk.Bb.x === a.jg.x && a.dk.Bb.y === a.jg.y ? a.Of = !1 : (a.Of = !0, a.Ep || (a.kq.q("dragstart", a.jq), a.Ep = !0), a.kq.q("dragging", a.dk), a.jg = a.dk.Bb))
    }, Rxa: function (a) {
      for (var b = [], c = 0; c < a.length; c += 1) a[c] && (b = b.concat(a[c]));
      return b
    }, Ov: function (a, b, c) {
      return a &&
        b && (a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y) < (c || 10)
    }, Yea: function (a, b) {
      var c = this.Oy();
      if (!c) return null;
      var d, e = this;
      this.la.sort(function (a, b) {
        return a.get("zIndex") > b.get("zIndex") ? -1 : 1
      });
      c.nq(a, this.la, function (a) {
        d = a;
        d = e.Rxa(d)
      }, function () {
        d = []
      }, b);
      return d
    }
  });
  g.Rb.Gb({
    pga: function () {
      this.Vm = {};
      this.h("moveend", this.e7, this);
      g.l.Yl && (g.l.vL || g.l.YH) && this.h("zoomend", this.HV, this);
      this.h("movestart", this.f7, this);
      this.h("zoomstart", this.n7, this);
      this.h("zoomend", this.m7, this);
      this.KM();
      this.St = 0;
      this.tG = {};
      "undefined" === typeof window.requestAnimationFrame && (this.St = 2)
    }, n7: function () {
      2 !== this.St && 12 === this.get("zoom") && (this.St = 1, g.a.jD.start(this.tG));
      this.gj = !0
    }, m7: function () {
      1 === this.St && 13 !== this.get("zoom") && (this.St = 0, g.a.jD.cancel(this.tG));
      this.gj =
        !1;
      this.set("display")
    }, R0: function (a, b) {
      this.Vm.left = 0 < a;
      this.Vm.right = 0 > a;
      this.Vm.bF = 0 < b;
      this.Vm.JQ = 0 > b
    }, nu: function () {
      this.Vm.left = !1;
      this.Vm.right = !1;
      this.Vm.bF = !1;
      this.Vm.JQ = !1
    }, tha: function () {
      this.G("moveend", this.e7, this);
      g.l.Yl && (g.l.vL || g.l.YH) && this.G("zoomend", this.HV, this);
      this.G("movestart", this.f7, this);
      this.G("zoomstart", this.n7, this);
      this.G("zoomend", this.m7, this);
      this.vha()
    }, e7: function (a) {
      this.Of = !1;
      this.nu();
      this.x8();
      !a.L5 && this.B.get("limitBounds", null, !0) ? (a = this.ina()) && !a.gb(this.get("center")) ?
        this.ZK(this.get("zoom"), a, !1, !0) : this.qa("moveend") : this.qa("moveend");
      this.set("display")
    }, f7: function () {
      this.Of = !0;
      this.nu()
    }, dragEnableChanged: function () {
      (this.YC = this.get("dragEnable")) ? this.JM() : this.DO()
    }, qa: function (a, b) {
      if (this.B.ue(a)) {
        var c;
        b && (c = b.Q6 ? {type: a, newsize: b.Q6, oldsize: b.xua} : {
          type: a,
          pixel: b.Bb,
          target: this.B,
          lnglat: b.Tf,
          originEvent: b.wT
        });
        this.B.q(a, c)
      }
    }, KM: function () {
      this.h("click", this.u_);
      this.h("dblclick", this.y_);
      g.l.Yf && this.uX();
      g.l.ba || this.Aca()
    }, vha: function () {
      this.G("click",
        this.u_);
      this.G("dblclick", this.y_);
      g.l.Yf && this.j_();
      g.l.ba || this.wha()
    }, eH: function (a, b) {
      var c = this.get("targetLevel") || this.get("zoom"), c = 0 < b ? Math.floor(c) + 1 : Math.ceil(c) - 1,
        c = Math.min(Math.max(c, this.get("zooms")[0]), this.get("zooms")[1]);
      c === this.get("zoom") || this.Zf && this.Zf.Zv && c === this.Zf.end || this.rA(c, !1, a)
    }, u_: function (a) {
      this.qa("click", a)
    }, y_: function (a) {
      this.get("doubleClickZoom") && this.get("zoomEnable") && this.eH(a.Sa, 1);
      this.qa("dblclick", a)
    }, mCa: function (a) {
      this.eH(a.EHa, a.G9);
      this.qa("touchend",
        a)
    }, JM: function () {
      this.YC && ("3D" === this.B.view.type ? (this.h("dragstart", this.E_), this.h("dragging", this.A_), this.h("dragend", this.C_)) : (this.h("dragstart", this.D_), this.h("dragging", this.z_), this.h("dragend", this.B_)))
    }, DO: function () {
      this.YC || ("3D" === this.B.view.type ? (this.G("dragstart", this.E_), this.G("dragging", this.A_), this.G("dragend", this.C_)) : (this.G("dragstart", this.D_), this.G("dragging", this.z_), this.G("dragend", this.B_)))
    }, D_: function (a) {
      this.YS(a);
      this.nu();
      this.vg = !0;
      this.V.Ey = a.Bb.x;
      this.V.ZC =
        a.Bb.y;
      this.Je && (this.Je.stop(), this.us(!0));
      this.qa("dragstart");
      this.qa("movestart");
      this.q("movestart", a);
      this.Xxa()
    }, z_: function () {
      var a = this.V, b = a.dk.Bb.x - a.Ey, c = a.dk.Bb.y - a.ZC;
      if (c || b) {
        this.V.Of = !0;
        this.R0(b, c);
        a.Ey = a.dk.Bb.x;
        a.ZC = a.dk.Bb.y;
        var a = b, d = c, e = this.rotation;
        e && (e *= Math.PI / 180, a = b * Math.cos(e) + Math.sin(e) * c, d = -Math.sin(e) * b + Math.cos(e) * c);
        a = this.get("centerCoords").ab((new g.H(a, d)).Nd(this.T));
        (d = this.u2(a)) && (c = Math.round(this.Xd(d).ab(this.Xd(a)).y));
        this.$o(this.Xa.Xr, b, c);
        a.x =
          (a.x + g.a.Fa) % g.a.Fa;
        this.set("centerCoords", a, !0);
        this.set("center", this.Od(a), !0);
        this.vv && (this.kh ? (a = new Date, this.Zt = 100 < a - this.kh ? new g.H(0, 0) : new g.H(b, c), this.kh = a) : this.kh = new Date);
        this.qa("dragging");
        this.qa("mapmove")
      } else this.V.Of = !1, this.Zt = null, this.nu()
    }, $o: function (a, b, c) {
      if (a && !(1 > Math.abs(b) && 1 > Math.abs(c))) {
        var d = parseFloat(a.style.top) || 0, e = parseFloat(a.style.left) || 0, f = "";
        this.rotation && (f = g.g.pt[g.g.tg] + ":rotate(" + this.rotation + "deg);overflow:visible;");
        a.style.cssText = "position:absolute;top:" +
          (d + c) + "px;left:" + (e + b) + "px;" + f
      }
    }, u2: function (a) {
      var b = this.B.view.XW(), c = this.NU.height * this.T / 2;
      return a.y < b.hc + c ? (a.y = b.hc + c, a) : a.y > b.tc - c ? (a.y = b.tc - c, a) : null
    }, B_: function () {
      this.ww();
      100 < new Date - this.kh && (this.Zt = null);
      this.V.jg = null;
      this.vg = !1;
      this.nu();
      this.qa("dragend");
      if (this.vv && this.Zt) if (this.V.Of) {
        var a = this.Zt, b = new g.H(0, 0);
        this.Je = new g.Nj(a, b, function (a, b, e) {
          return 600 <= e ? b : a.Nd(1 - Math.pow(e / 600, 2)).floor()
        }, 1);
        this.Je.Kq = function (a) {
          if (2 > Math.abs(a.x) && 2 > Math.abs(a.y)) this.Je.stop(),
            this.q("moveend"), this.us(), this.Zt = this.kh = null; else {
            var b = a.x, e = a.y, f = this.rotation;
            f && (f *= Math.PI / 180, b = a.x * Math.cos(f) + Math.sin(f) * a.y, e = -Math.sin(f) * a.x + Math.cos(f) * a.y);
            b = this.get("centerCoords").ab((new g.H(b, e)).Nd(this.T));
            e = this.u2(b);
            f = a.y;
            e && (f = Math.round(this.Xd(e).ab(this.Xd(b)).y));
            this.$o(this.Xa.Xr, a.x, f);
            b.x = (b.x + g.a.Fa) % g.a.Fa;
            this.set("centerCoords", b, !0);
            this.set("center", this.Od(b), !0);
            this.qa("mapmove")
          }
        };
        this.Je.Pn(this)
      } else this.q("moveend"), this.us(!0), this.Zt = this.kh = null;
      else this.q("moveend"), this.us(), this.Zt = this.kh = null
    }, Xxa: function () {
      if (!this.V.refresh) {
        var a = this, b = null;
        this.V.refresh = setInterval(function () {
          b !== a.V.jg && (a.set("display", 0), b = a.V.jg)
        }, g.l.ba ? 400 : 100)
      }
    }, HV: function () {
      if (g.l.Yl && (g.l.vL || g.l.YH)) {
        for (var a = this.Xa.o.childNodes, b = 0; b < a.length; b += 1) {
          var c = a[b];
          c instanceof HTMLCanvasElement && (c.width = 0);
          "amap-e" === c.className && (c.style.height = "0")
        }
        for (b = 0; b < this.la.length; b += 1) c = this.la[b], "undefined" !== typeof AMap.IndoorMap && c instanceof AMap.IndoorMap &&
        (c.uu && (c.uu.width = 0), c.Wx && (c.Wx.width = 0))
      }
    }, us: function (a) {
      this.V.refresh && (clearInterval(this.V.refresh), this.V.refresh = null);
      a || (this.HV(), this.set("display", 0))
    }, x8: function (a) {
      this.set("refresh", a)
    }
  });
  g.Rb.Gb({
    setZoomSlow: function (a) {
      this.ZK(a, null, !this.get("animateEnable"))
    }, setPanTo: function (a) {
      this.ZK(null, a, !this.get("animateEnable"))
    }, zoomAndCenterChanged: function (a) {
      var b = a[0];
      b < this.get("zooms")[0] && (b = this.get("zooms")[0]);
      b > this.get("zooms")[1] && (b = this.get("zooms")[1]);
      this.ZK(b, a[1], a[2] || !this.get("animateEnable"))
    }, zoomChanged: function () {
      this.T = Math.pow(2, 20 - this.get("zoom"));
      this.q("closeOverlays");
      this.set("display")
    }, rotationChanged: function (a) {
      this.rotation = this.get("rotation");
      this.B.q("rotate", {rotation: this.rotation || 0});
      !0 !== a && this.set("display", 0)
    }, pitchChanged: function () {
      this.pitch = this.get("pitch");
      this.B.q("pitch", {pitch: this.pitch || 0});
      this.set("display", 0)
    }, centerCoordsChanged: function () {
      this.q("closeOverlays");
      this.LBa ? this.PK(!0) : this.PK(!1)
    }
  });
  g.MW = g.da.extend({
    ka: [g.va, g.$e], A: function (a, b) {
      this.type = "2D";
      this.kf(b, !0);
      a && this.zma(a)
    }, zma: function (a) {
      this.map = a;
      this.bf(["size", "refresh", "maxPitch"], a);
      this.centerChanged();
      a.bf(["zoom", "center", "centerCoords", "rotation", "pitch"], this)
    }, XW: function () {
      this.AM || this.Sna();
      return this.AM
    }, Sna: function () {
      var a;
      if (this.get("center") instanceof g.U) {
        a = new g.ne(-180, -85, 180, 85);
        var b = this.map.Ab(a.fk());
        a = this.map.Ab(a.Po());
        this.AM = {Jc: b.x, hc: b.y, Ic: a.x, tc: a.y}
      } else a = this.map.get("limitBounds",
        null, !0), this.AM = {Jc: a[0], hc: a[1], Ic: a[2], tc: a[3]}
    }, sD: function () {
      var a = this.map, b = this.get("zoom");
      return {
        zoom: b,
        rh: this.get("center"),
        Ha: this.lm(),
        lb: this.get("centerCoords"),
        rotation: parseInt(this.get("rotation")),
        Uf: a.get("crs"),
        T: Math.pow(2, 20 - b),
        me: Math.round(b),
        Kg: Math.pow(2, 20 - Math.round(this.get("zoom")))
      }
    }, centerChanged: function () {
      this.set("centerCoords", this.map.Ab(this.get("center")).toFixed(3), !0)
    }, centerCoordsChanged: function () {
      var a = this.map;
      a.D = !0;
      var b = this.XW(), c = this.get("centerCoords"),
        d = a.getSize();
      a.D = !1;
      var e = this.get("zoom", null, !0), a = this.get("center", null, !0), d = d.height * Math.pow(2, 20 - e) / 2;
      a instanceof g.U ? c.x = (c.x + 268435456) % 268435456 : 0 > c.x ? c.x = 0 : c.x > b.Ic && (c.x = b.Ic);
      c.y < b.hc + d ? c.y = b.hc + d : c.y > b.tc - d && (c.y = b.tc - d);
      this.set("center", this.map.Od(c), !0)
    }
  });
  g.OF = g.MW.extend({
    lm: function () {
      var a = this.get("size"), b = this.get("centerCoords"), c = parseInt(this.get("rotation")) % 360,
        d = this.get("zoom", null, !0), e = Math.pow(2, 20 - d), c = Math.PI * c / 180,
        a = new g.H((Math.abs(a.width * Math.cos(c)) + Math.abs(a.height * Math.sin(c))) / 2, (Math.abs(a.width * Math.sin(c)) + Math.abs(a.height * Math.cos(c))) / 2),
        e = new g.$f(b.ab(a.Nd(e)), b.add(a.Nd(e))), c = this.map.get("targetLevel");
      if (c > d - 1) {
        var f = Math.pow(2, 20 - c);
        e.M$ = new g.$f(b.ab(a.Nd(f)), b.add(a.Nd(f)))
      }
      e.E9 = c || d;
      e.Bc = a;
      return e
    }, jqa: function (a) {
      var b =
          this.get("size"), c = this.get("centerCoords"), d = parseInt(this.get("rotation")) % 360, d = Math.PI * d / 180,
        b = new g.H((Math.abs(b.width * Math.cos(d)) + Math.abs(b.height * Math.sin(d))) / 2, (Math.abs(b.width * Math.sin(d)) + Math.abs(b.height * Math.cos(d))) / 2);
      a = Math.pow(2, 20 - a);
      return new g.$f(c.ab(b.Nd(a)), c.add(b.Nd(a)))
    }, Kd: function () {
      var a = this.lm(), b = a.Vd.x, c = a.kc.y, a = new g.H(a.kc.x, a.Vd.y), b = new g.H(b, c);
      return new g.ne(this.map.Od(a), this.map.Od(b))
    }, zoomChanged: function () {
    }, Xd: function (a, b) {
      this.get("size");
      var c =
        a.cb(), d = this.get("centerCoords"), e = c.ab(d);
      e.x < -g.a.Fa / 2 ? e.x += g.a.Fa : e.x > g.a.Fa / 2 && (e.x -= g.a.Fa);
      var c = this.get("size").PE().kd(2), f = this.get("rotation") * Math.PI / 180,
        d = e.x * Math.cos(f) - Math.sin(f) * e.y, e = Math.sin(f) * e.x + Math.cos(f) * e.y;
      return c.add((new g.H(d, e)).Nd(Math.pow(2, (b || this.get("zoom")) - 20)))
    }, Cg: function (a, b) {
      var c = this.get("size").PE().kd(2), d = a.ab(c), e = this.get("rotation") * Math.PI / 180,
        c = d.x * Math.cos(e) + Math.sin(e) * d.y, d = -Math.sin(e) * d.x + Math.cos(e) * d.y,
        c = this.get("centerCoords").add((new g.H(c,
          d)).Nd(Math.pow(2, 20 - (b || this.get("zoom")))));
      c.x = (c.x + 268435456) % 268435456;
      return c
    }
  });
  g.uM = g.MW.extend({
    A: function (a, b) {
      this.Ne = new g.Dc;
      this.cc = new g.Dc([1, 0, 0, 0, 0, -1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1]);
      arguments.callee.ma.apply(this, arguments);
      this.scale = 1;
      this.type = "3D";
      this.mA = null;
      this.S7 = "";
      this.P = ["", 0, 0, "", 0];
      this.mA = {}
    }, refreshChanged: function () {
      this.jr()
    }, zoomChanged: function (a) {
      this.jr();
      this.P[4] = a
    }, centerChanged: function (a) {
      arguments.callee.ma.apply(this, arguments);
      this.jr()
    }, centerCoordsChanged: function (a) {
      arguments.callee.ma.apply(this, arguments);
      this.jr();
      this.P[0] = a.toString()
    },
    rotationChanged: function (a) {
      this.jr();
      this.P[2] = a
    }, pitchChanged: function (a) {
      this.Ce.pitch = Math.min(this.get("maxPitch"), Math.max(a, 0));
      this.jr();
      this.P[1] = a
    }, jr: function () {
      if (!this.yza() && (this.xL(), this.Poa(), this.map)) {
        var a = this, b = function () {
          a.map.camera = a.P3();
          a.map.q("camerachange", {map: a.map, camera: a.map.camera})
        };
        a.map.La ? b() : this.map.h("complete", b, this)
      }
    }, P3: function () {
      return {
        height: this.rn,
        fov: this.Ypa,
        aspect: this.vC,
        near: this.tz,
        far: this.OI,
        position: this.Wma,
        rotation: this.Ce.rotation,
        pitch: this.Ce.pitch
      }
    },
    Poa: function () {
      this.Pga = g.a.hg()
    }, Vo: function () {
      var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 300;
      return g.a.hg() - this.Pga > a
    }, xL: function () {
      var a = this.get("centerCoords"), b = this.get("pitch"), c = this.get("rotation"),
        d = (new g.Dc).b9(-a.x + g.a.dc.x, -a.y + g.a.dc.y, 0);
      this.Wma = {x: a.x - g.a.dc.x, y: a.y - g.a.dc.y};
      a = (new g.Dc).Sz(180 - b, 1, 0, 0);
      this.H7 = (new g.Dc).set(a);
      c = (new g.Dc).Sz(c, 0, 0, 1);
      this.Uq = (new g.Dc).set(c);
      this.Wpa = d.Hg();
      this.cc = (new g.Dc).b9(0, 0, -this.rn).multiply(a.multiply(c.multiply(d))).toFixed(8);
      this.cc.ef = this.cc.Hg()
    }, yza: function (a) {
      a = a || this.get("zoom");
      var b = this.get("size"), c = b.width, b = b.height;
      if (!c || !b) return !0;
      this.vC = c /= b;
      b = b / 2 * Math.pow(2, 20 - a);
      a = g.a.vb((56 - a) * Math.PI / 180, 2);
      var d = g.a.vb(b / Math.tan(a / 2), 0);
      2400 > d && (d = 2400, a = 2 * Math.atan(b / d));
      this.Ypa = a;
      this.rn = d;
      this.tz = this.rn / 10;
      this.OI = 50 * this.rn;
      this.yoa = (this.rn - this.tz) / (this.OI - this.tz);
      this.Ne.Y8(a, c, this.tz, this.OI);
      this.Ne.ef = this.Ne.Hg();
      a = this.Ne;
      var c = new g.cW, b = c.iE, e = this.Ne.elements, d = e[0], f = e[1], h = e[2], k = e[3], l =
          e[4], m = e[5], n = e[6], p = e[7], q = e[8], r = e[9], s = e[10], u = e[11], v = e[12], w = e[13], t = e[14],
        e = e[15];
      wc(b[0], k - d, p - l, u - q, e - v).normalize();
      wc(b[1], k + d, p + l, u + q, e + v).normalize();
      wc(b[2], k + f, p + m, u + r, e + w).normalize();
      wc(b[3], k - f, p - m, u - r, e - w).normalize();
      wc(b[4], k - h, p - n, u - s, e - t).normalize();
      wc(b[5], k + h, p + n, u + s, e + t).normalize();
      a.pR = c
    }, sD: function () {
      var a = this.map;
      a.map.it && (this.jr(), this.P[3] = a.get("size").toString());
      var b = this.P.toString();
      if (b !== this.S7) {
        var c = this.get("zoom"), d = this.mA;
        d.zoom = c;
        d.vC = this.vC;
        d.top =
          this.top;
        d.Ha = this.lm();
        d.lb = this.get("centerCoords");
        d.rotation = a.get("rotateEnable") && parseInt(this.get("rotation")) || 0;
        d.pitch = this.get("pitch") || 0;
        d.vIa = this.get("yaw");
        d.Uf = a.get("crs");
        d.T = Math.pow(2, 20 - c);
        d.me = Math.round(c);
        d.p7 = Math.floor(c);
        d.Kg = Math.pow(2, 20 - d.me);
        d.Yua = Math.pow(2, 20 - d.p7);
        d.Ne = this.Ne;
        d.cc = this.cc;
        this.S7 = d.key = b
      }
      this.mA.rh = this.get("center");
      this.mA.hr = g.a.hg();
      this.mA.Vo = this.Vo();
      return this.mA
    }, lm: function () {
      var a = this.get("size"), b = a.width, a = a.height;
      if (!b || !a) return null;
      var c, d;
      d = 0;
      var e = new g.H(0, d);
      c = this.Cg(e, !0);
      if (55 < this.Ce.pitch || !c) for (; !c;) d += a / 40, e.y = d, c = this.Cg(e, !0);
      this.top = d / a;
      e.x = b;
      d = this.Cg(e, !0);
      var f = 0, h = this.Ce.zoom;
      50 <= this.Ce.pitch && 18 <= h && (f = 0);
      e.y = a + f;
      f = this.Cg(e, !0);
      e.x = 0;
      h = this.Cg(e, !0);
      c = [c.yl(), d.yl(), f.yl(), h.yl(), c.yl()];
      c = new g.caa(c);
      e.x = b / 2;
      e.y = a + 256;
      c.cQ = this.Cg(e, !0);
      return c
    }, Kd: function () {
      var a = this.lm();
      if (a) {
        for (var b = [], c = 0; c < a.path.length; c += 1) {
          var d = this.map.Od(new g.H(a.path[c][0], a.path[c][1]));
          b.push(d)
        }
        return new g.tp(b)
      }
    },
    Xd: function (a, b, c) {
      a.z = c || 0;
      a = this.H6([a]);
      a = a[0];
      return new g.H(a.x, a.y)
    }, T3: function (a) {
      var b = this.get("size");
      a = new g.Hl([a.x / b.width * 2 - 1, 1 - a.y / b.height * 2, -1, 1]);
      a.multiply(this.tz);
      return this.Ne.ef.Dh(a)
    }, Cg: function (a, b, c) {
      var d;
      this.map ? (this.map.D = !0, d = this.map.getSize(!0), this.map.D = !1) : d = this.get("size");
      var e = a.x / d.width * 2 - 1;
      d = 1 - a.y / d.height * 2;
      a = new g.Hl([e, d, -1, 1]);
      a.multiply(this.tz);
      if (!this.Ne.ef) return null;
      a = this.Ne.ef.Dh(a);
      e = new g.Hl([e, d, 1, 1]);
      e.multiply(this.OI);
      d = this.Ne.ef.Dh(e);
      var f = this.cc.ef, e = f.Dh(a).elements;
      a = f.Dh(d).elements;
      c = (e[2] - (-c || 0)) / (e[2] - a[2]);
      if (0 > a[2] || 0 > c || b && c > 2.5 * this.yoa) return null;
      b = e[0] - c * (e[0] - a[0]);
      c = e[1] - c * (e[1] - a[1]);
      return isNaN(b) || isNaN(c) ? null : (new g.H(b, c)).add(g.a.dc)
    }, H6: function (a) {
      for (var b = this.get("centerCoords"), c = g.a.dc.x, d = g.a.dc.y, e = this.get("size"), f = g.a.Fa, h = b.x + f / 2, b = b.x - f / 2, k = [], l = new g.Hl([0, 0, 0, 1]), m = l.elements, n = new g.H(0, 0), p = g.Dc.multiply(this.Ne, this.cc), q = 0, r = a.length; q < r; q++) if (a[q]) {
        a[q].concat ? (n.x = a[q][0], n.y = a[q][1],
          n.z = -a[q][2] || 0) : (n.x = a[q].x, n.y = a[q].y, n.z = -a[q].z || 0);
        h < n.x ? n.x -= f : b > n.x && (n.x += f);
        m[0] = n.x - c;
        m[1] = n.y - d;
        m[2] = n.z;
        var s = p.Dh(l);
        s.multiply(1 / s.elements[3]);
        k[q] = {x: (s.elements[0] + 1) / 2 * e.width, y: (-s.elements[1] + 1) / 2 * e.height, z: s.elements[2]}
      }
      return k
    }, aAa: function (a) {
      var b = this.get("size");
      a = this.Ne.Dh(this.cc.Dh((new g.Hl).copy(a)));
      a.multiply(1 / a.elements[3]);
      b = new g.H((a.elements[0] + 1) / 2 * b.width, (-a.elements[1] + 1) / 2 * b.height);
      b.z = a.elements[2];
      return b
    }
  });
  g.a.dc = new g.H(215440491, 106744817);
  g.Rb.Gb({
    p2: function (a, b, c) {
      var d = this;
      d.jF ? (clearTimeout(d.jF), d.jF = null) : (d.qa("zoomstart", {zoom: a}), d.q("zoomstart"));
      d.jF = setTimeout(function () {
        d.jF = null;
        d.qa("zoomend", {zoom: a});
        d.qa("zoomchange", {zoom: a});
        d.q("zoomend")
      }, 150);
      a = g.a.vb(a, 2);
      d.rA(a, !0, b, c)
    }, rA: function (a, b, c, d) {
      var e = this.get("zoom");
      if (e !== a) {
        var f = this.get("zooms");
        "3D" !== this.B.view.type && (g.l.ba || g.l.Ie) && (b = !0);
        a = a || e;
        a = Math.min(Math.max(a, f[0]), f[1]);
        var h = a !== e, k = !!c;
        this.Je && (this.Je.stop(), this.Je = null);
        c = c || this.get("centerCoords");
        var l = this.Xd(c);
        c = function (c) {
          b || (c = g.a.vb(c, 2));
          var d = this.Cg(l);
          this.set("zoom", c);
          var e = this.Cg(l), d = e && e ? e.ab(d) : new g.H(0, 0);
          this.set("centerCoords", this.get("centerCoords").ab(d).toFixed(3));
          d.x && d.y && this.qa("mapmove");
          c === a && a << 0 === a && (this.set("targetLevel", null), h && !this.jF && (this.qa("zoomchange"), this.qa("zoomend")), this.q("zoomend"), k && this.q("moveend"), this.Zf = null)
        };
        var m;
        this.Fd && this.Fd.Zv && (this.Fd.stop(), this.Fd.hS && (d = !0), this.Fd.tD && (m = !0), this.Fd = null, this.set("targetLevel",
          null));
        this.Zf && this.Zf.Zv && (this.Zf.stop(), d = !0, this.Zf.tD && (m = !0), this.Zf = null, this.set("targetLevel", null));
        h && !d && this.qa("zoomstart");
        k && !m && this.qa("movestart");
        this.q("zoomstart");
        b ? c.call(this, a) : (this.Zf = new g.Nj(e, a, null, 0.04), this.Zf.hS = h, this.Zf.tD = k, this.Zf.transition = function (a, b, c) {
          return c >= g.r.TH ? b : (b - a) * (1 - Math.pow(1 - c / g.r.TH, 4)) + a
        }, this.Zf.Kq = c, this.Zf.Pn(this, !0), this.set("targetLevel", a))
      }
    }, ZK: function (a, b, c, d) {
      var e = null;
      a || (a = this.Fd ? this.Fd.hya : this.get("targetLevel") || this.get("zoom"));
      var e = b ? this.Ab(b).toFixed(3) : this.Fd ? this.Fd.D9 : this.get("centerCoords"), f = a !== this.get("zoom"),
        h = !e.gb(this.get("centerCoords")), k = b = !1;
      this.Zf && this.Zf.Zv && (this.Zf.stop(), b = !0, this.Zf.tD && (k = !0), this.Zf = null, this.set("targetLevel", null));
      this.Fd && this.Fd.Zv && (this.Fd.stop(), this.Fd.hS && (b = !0), this.Fd.tD && (k = !0), this.Fd = null, this.set("targetLevel", null));
      this.Je && (this.Je.stop(), this.Je = null);
      if (f || h) {
        if (!this.B.view.lm().contains(e) || f && "3D" !== this.B.view.type && (g.l.ba || g.l.Ie)) c = !0;
        if (c) f && (b ||
        (this.q("zoomstart"), this.qa("zoomstart")), this.set("zoom", a), this.qa("zoomchange"), this.qa("zoomend"), this.q("zoomend")), h && (k || d || (this.qa("movestart"), this.q("movestart")), this.set("centerCoords", e), this.qa("mapmove"), this.q("moveend", {L5: d})), this.set("targetLevel", null); else {
          this.set("targetLevel", a);
          var l = a - this.get("zoom"), m = e.ab(this.get("centerCoords")).toFixed(3);
          this.Fd = new g.Nj(1, 0, null, 0.001);
          this.Fd.hS = f;
          this.Fd.tD = h;
          this.Fd.D9 = e;
          this.Fd.hya = a;
          this.Fd.transition = function (a, b, c) {
            return Math.pow(1 -
              Math.min(g.r.TH, c) / g.r.TH, 2)
          };
          this.Fd.Kq = function (b) {
            0.02 > b ? (this.Fd && (this.Fd.stop(), this.Fd = null), f && (this.set("zoom", a), this.qa("zoomchange"), this.qa("zoomend"), f = !1, this.q("zoomend")), h && (this.set("centerCoords", e), this.q("mapmove"), this.q("moveend", {L5: d})), this.set("targetLevel", null)) : (f && this.set("zoom", a - l * b), h && (b = e.ab(m.Nd(b)).toFixed(3), this.set("centerCoords", b), this.qa("mapmove")));
            this.set("display", 1)
          };
          this.Fd.Pn(this);
          f && !b && (this.q("zoomstart"), this.qa("zoomstart"));
          !h || k || d || (this.q("movestart"),
            this.qa("movestart"))
        }
      }
    }
  });
  g.o = {};
  g.o.Yb = g.da.extend({
    ka: [g.va, g.$e], A: function (a, b) {
      this.S = a;
      this.Ya = [3, 18];
      this.ex = g.a.xb(this);
      a && this.bf(["opacity", "visible", "zIndex", "zooms"], a);
      a.Kf = b.B.view.type;
      this.e = b;
      this.X("display", b)
    }, kg: function () {
      this.Fi && this.nQ();
      if (g.Da && g.Da.lr && g.Da.lr.length) {
        var a = g.a.indexOf(g.Da.lr, this);
        -1 !== a && (g.Da.lr = g.a.Ho(g.Da.lr, a))
      }
      if (a = this.Mb) {
        if (a.length) for (var b = 0; b < a.length; b += 1) a[b].parentNode && a[b].parentNode.removeChild(a[b]); else a.parentNode && a.parentNode.removeChild(a);
        this.Mb = null
      }
      this.S.kg && this.S.kg();
      this.S.ti = !1;
      this.S.o = null;
      this.Al();
      var c;
      this.M && (this.M.ck(), this.M = null, c = "-" + this.mc);
      this.Ef && (this.Ef.ck(), this.Ef = null, c = "-" + this.mc);
      if (c) for (var d in g.Da.Ij) g.a.dD(d, c) && delete g.Da.Ij[d]
    }, qa: function (a, b) {
      this.S.q(a, b)
    }, visibleChanged: function () {
      this.set("display", 0)
    }, zIndexChanged: function () {
      this.set("display", 0)
    }, DU: function (a) {
      g.g.Yq(a, this.opacity)
    }, opacityChanged: function () {
      var a = this.get("opacity");
      this.opacity = Math.min(Math.max(0, a), 1);
      if (a = this.Mb) if (a.length) for (var b = 0; b < a.length; b +=
        1) this.DU(a[b]); else this.DU(a);
      this.e && this.e.B && "3D" == this.e.B.view.type && this.set("display", 0)
    }, Bn: function () {
      return this.e.Oc && !this.S.get("rejectMapMask")
    }, dJ: function () {
      var a = this.get("bounds");
      if (a) {
        if (a instanceof g.ne) {
          var b = a.fk(), a = a.Po(), c = this.e.Ab(new g.U(180, 0)).x, d = this.e.Ab(b), e = this.e.Ab(a),
            f = this.e.get("center");
          b.R > a.R && (0 < f.R ? e.x += c : d.x -= c);
          this.I = [d.x, d.y, e.x, e.y]
        } else a instanceof g.$f ? this.I = [a.kc.x, a.kc.y, a.Vd.x, a.Vd.y] : a instanceof g.PF && "3D" === this.S.Kf && (b = a.path[1], d =
          this.e.Ab(a.path[0]), e = this.e.Ab(b), this.I = [d.x, d.y, e.x, e.y, a.N8, a.height]);
        return this.I
      }
      return null
    }
  });
  var Nc = function () {
    function a(a) {
      this.SF[g.a.xb(a)] = a;
      return this
    }

    function b(a) {
      this.SF[g.a.xb(a)] = null;
      return this
    }

    return function () {
      function c() {
        var a = c.SF, b, f = [], h;
        for (h in a) a.hasOwnProperty(h) && f.push(a[h]);
        for (a = f.length - 1; 0 <= a; a -= 1) h = f[a].apply(this, arguments), void 0 !== h && (b = h);
        return b
      }

      c.SF = {};
      c.G1 = a;
      c.KGa = b;
      return c
    }
  }();
  g.sg = g.da.extend({
    ka: [g.va], A: function (a, b) {
      this.Ip = a | 0;
      this.VF = !!b;
      this.count = 0;
      this.mK = Nc();
      this.clear();
      this.CB = []
    }, xh: function () {
      return !this.count
    }, cFa: function () {
      return this.count >= this.Ip
    }, sHa: function (a) {
      this.Ip !== a && (this.Ip = a | 0) && this.q1(this.Ip)
    }, Ld: function (a) {
      return !!this.e[a]
    }, get: function (a, b) {
      var c = this.tY(a);
      return c ? c.value : b
    }, set: function (a, b) {
      var c = this.tY(a);
      c ? c.value = b : (c = new g.sg.tr(a, b), this.e[a] = c, this.tB(c), this.count += 1, this.count > this.Ip && this.q1(this.Ip))
    }, yw: function (a) {
      this.remove(a)
    },
    remove: function (a) {
      return this.e.hasOwnProperty(a) && this.UB(this.e[a]) ? !0 : !1
    }, forEach: function (a, b) {
      for (var c = this.cd.next; c !== this.cd; c = c.next) a.call(b, c.value, c.key, this)
    }, tK: function (a, b) {
      return this.e.hasOwnProperty(a) ? this.e[a].value : b
    }, nGa: function () {
      return this.cd.next.value
    }, oGa: function () {
      return this.cd.Ia.value
    }, shift: function () {
      return this.j0(this.cd.next)
    }, z2: function () {
      this.CB.length = 0
    }, r6: function (a) {
      this.CB.push(a)
    }, push: function (a) {
      a = new g.sg.tr("", a);
      0 === this.count ? (this.cd.Ia = null,
        a.Ia = this.cd, this.cd.next = a) : (this.jC.next = a, a.Ia = this.jC);
      this.count += 1;
      this.jC = a
    }, nza: function (a) {
      a = new g.sg.tr("", a);
      0 === this.count ? (this.cd.Ia = null, a.Ia = this.cd, this.jC = this.cd.next = a) : (this.cd.next.Ia = a, a.next = this.cd.next, a.Ia = this.cd, this.cd.next = a);
      this.count += 1
    }, pua: function () {
      if (this.count) {
        this.count -= 1;
        var a = this.cd.next;
        a.next ? (a.next.Ia = this.cd, this.cd.next = a.next) : (this.cd.next = null, this.jC = this.cd.Ia = null);
        a.next = null;
        a.Ia = null;
        return a.value
      }
      return null
    }, pop: function () {
      return this.j0(this.cd.Ia)
    },
    tY: function (a) {
      if (this.e.hasOwnProperty(a)) return a = this.e[a], this.VF && (a.remove(), this.tB(a)), a
    }, tB: function (a) {
      this.VF ? (a.next = this.cd.next, a.Ia = this.cd, this.cd.next = a, a.next.Ia = a) : (a.Ia = this.cd.Ia, a.next = this.cd, this.cd.Ia = a, a.Ia.next = a)
    }, q1: function (a) {
      if (!(this.count <= a || this.count < 2 * this.CB.length)) {
        for (var b = this.VF ? this.cd.Ia : this.cd.next, c = {}, d = 0, e = this.CB.length; d < e; d++) c[this.CB[d]] = !0;
        for (a = Math.ceil(2 * a / 3); b && this.count > a && (d = this.VF ? b.Ia : b.next, b.key && !c[b.key] && this.UB(b) && this.mK(b.value),
          b = d, b !== this.cd && b !== this.jC);) ;
      }
    }, UB: function (a) {
      if (this.yC && !1 == this.yC(a.value)) return !1;
      a.remove();
      delete this.e[a.key];
      this.count -= 1;
      return !0
    }, j0: function (a) {
      this.cd !== a && (this.yC && console.log("Warnning!!!"), this.UB(a));
      return a.value
    }, clear: function () {
      this.e = {};
      this.cd = new g.sg.tr("", null);
      this.cd.Ia = this.cd.next = this.cd;
      this.count = 0
    }
  });
  g.sg.tr = function (a, b) {
    this.key = a;
    this.value = b
  };
  g.sg.tr.prototype.Ia = null;
  g.sg.tr.prototype.next = null;
  g.sg.tr.prototype.remove = function () {
    this.Ia.next = this.next;
    this.next.Ia = this.Ia;
    this.next = this.Ia = null
  };

  function Oc(a, b, c) {
    this.url = a;
    this.Nc = b;
    this.kR = c;
    this.sn = this.QK = !1
  }

  function Pc(a, b, c) {
    var d = Qc;
    return function () {
      return d.call(this, a, b, c)
    }
  }

  function Qc(a, b, c) {
    a.GDa = +new Date;
    a.loaded = b;
    clearTimeout(a.vya);
    var d = a.Cta;
    d.Nn.remove(a.url) && d.Qga();
    d = a.Isa ? a.ga : a.Ba;
    a.ga = null;
    (c || b || a.kR) && a.Nc(b ? d : null, a);
    a.T5 ? (a.T5.wi(), a.T5 = null) : d && (d.onload = null, d.onerror = null, d.onabort = null, a.Ba = null)
  }

  g.xF = g.da.extend({
    IBa: "assets/image/blank.gif", A: function (a, b, c) {
      this.timeout = b || 15E3;
      this.Pq = new g.sg(1024);
      this.Nn = new g.sg(1024);
      this.J2 = a;
      this.YQ = c
    }, SM: function (a) {
      a && this.Nn.count >= this.J2 && (a = this.Nn.cd.Ia.value, a.sn && (this.Nn.remove(a.url), this.dX(a)));
      for (; this.Pq.count && !(this.Nn.count >= this.J2);) this.bea(this.Pq.shift())
    }, Qga: function () {
      if (!this.MX) {
        this.MX = !0;
        var a = this;
        setTimeout(function () {
          a.MX = !1;
          a.SM()
        }, 0)
      }
    }, bea: function (a) {
      var b = document.createElement("img");
      a.$pa && (b.crossOrigin =
        "anonymous");
      b.src = a.url;
      a.Ba = b;
      a.Cta = this;
      a.startTime = +new Date;
      a.QK = !0;
      b.complete ? Qc(a, !0) : (this.Nn.set(a.url, a), b.onload = Pc(a, !0), b.onerror = Pc(a, !1, !0), b.onabort = Pc(a, !1), a.vya = setTimeout(Pc(a, !1, !0), this.timeout))
    }, dX: function (a) {
      a.QK && (Qc(a, !1), a.sn = !0, a.CCa = !0)
    }, BFa: function (a, b, c) {
      return this.nz(a.url, b, c, !0, a.ta.z + "_" + a.ta.x + "_" + a.ta.y)
    }, nz: function (a, b, c, d, e) {
      var f = this.Nn.get(a);
      if (f && f.sn) f.sn = !1, f.Nc = b, f.kR = c; else {
        f = new Oc(a, b, c);
        f.Isa = d;
        f.key = e;
        if (this.Pq.get(g.a.xb(f))) return;
        this.Pq.set(g.a.xb(f),
          f);
        this.SM(!0)
      }
      return f
    }, sta: function (a, b, c) {
      var d = this.Nn.get(a);
      if (d && d.sn) d.sn = !1, d.Nc = b, d.kR = c; else {
        d = new Oc(a, b, c);
        d.$pa = !0;
        if (this.Pq.get(g.a.xb(d))) return;
        this.Pq.set(g.a.xb(d), d);
        this.SM(!0)
      }
      return d
    }, m2: function (a) {
      a.sn || (a.sn = !0, this.Pq.remove(g.a.xb(a)))
    }, clear: function (a) {
      this.Pq.forEach(function (a) {
        a.sn = !0
      });
      this.Pq.clear();
      if (a) for (; 0 < this.Nn.length;) a = this.Nn.pop(), this.dX(a); else this.Nn.forEach(function (a) {
        a.sn = !0
      })
    }
  });

  function Rc(a, b, c) {
    this.z = a;
    this.x = b;
    this.y = c
  }

  Rc.prototype.cb = function () {
    return new Rc(this.z, this.x, this.y)
  };
  Rc.prototype.toString = function () {
    return this.z + "/" + this.x + "/" + this.y
  };
  g.qb = function (a) {
    var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !1;
    this.ta = a;
    this.key = a.toString();
    this.Ke = b
  };
  g.pr = Rc;
  g.o.qb = g.o.Yb.extend({
    A: function (a, b, c, d, e) {
      arguments.callee.ma.apply(this, arguments);
      this.X("tileSize", a);
      this.X("tiles", a);
      this.bf(["zooms", "type", "detectRetina", "errorUrl"], a);
      a.HG && (this.X("lang", b, !0), this.X("mapStyle", b, !0), this.X("style", b, !0), this.X("features", b, !0));
      var f = "overlayer" === a.get("type") || !1 === a.get("blend");
      this.Pk = !f && !g.l.ba;
      if (g.l.Ie || g.l.oIa) this.Pk = !1;
      var h = b.get("size"), h = h.width * h.height / 65536;
      this.ja = g.l.ba && g.l.ja && this.get("detectRetina");
      g.l.Kc && g.l.ba && 9 < h && (this.Pk =
        !1);
      this.$i = !f && !a.vk;
      this.aj = !f && !a.vk;
      this.lL = c;
      this.X("reload", a);
      a.Esa ? this.X("createTile", a) : this.X("tileFun", a);
      this.gf = d;
      this.qS = e
    }, langChanged: function () {
      this.set("reload");
      this.S.$s()
    }, styleChanged: function () {
      this.e.Bd || (this.set("reload"), this.S.$s())
    }, featuresChanged: function () {
      this.set("reload");
      this.S.$s()
    }, reloadChanged: function () {
      this.set("display", 0)
    }, tileFunChanged: function () {
      var a = this.lL || this.get("tileFun");
      this.Do = function (b, c, d) {
        var e = a(b.ta.x, b.ta.y, b.ta.z);
        if (!b.Is || b.Is.sn) b.loaded =
          !1, b.Is = ("3D" === this.e.B.view.type ? g.sm.sta : g.sm.nz).call(g.sm, e, function (a) {
          b.Is = null;
          a ? c(a) : d()
        }, !1)
      }
    }, createTileChanged: function () {
      this.S.D = !0;
      var a = this.S.getCreateTile();
      this.S.D = !1;
      this.Do = function (b, c, d) {
        a.call(this.f.S, b.ta.x, b.ta.y, b.ta.z, c, d, b)
      };
      this.set("reload")
    }, le: function () {
      var a = this.S.get("zooms", null, !0);
      this.S.Dsa && (a = [Math.min(a[0], 18), Math.min(a[1], 18)]);
      return {
        Dd: this.S.get("tileSize"),
        visible: this.S.get("visible"),
        I: this.dJ(),
        Ya: a,
        bI: this.Pk,
        $i: this.$i,
        aj: this.aj,
        opacity: this.S.get("opacity"),
        Do: this.S.get("createTile"),
        Qo: this.lL || this.S.get("tileFun"),
        Kc: this.S.Hq ? !1 : this.S.get("detectRetina") && g.l.ja && g.l.ba,
        Oc: this.Bn()
      }
    }, am: function (a) {
      if (g.M.ae.Vi) return new g.M.ae.Vi(this, a)
    }
  });
  g.sm = new g.xF(6, null);
  g.o.ed = g.o.Yb.extend({
    A: function (a, b) {
      this.Ta = Math.min(2, window.devicePixelRatio || 1);
      this.Kc = g.l.ja;
      this.map = b;
      this.fr = 0;
      this.pm = !1;
      this.mg = this.Df = 0;
      this.eh = [];
      arguments.callee.ma.apply(this, arguments);
      this.Jv = [];
      this.fm = new g.o.kaa;
      a && (this.X("style", a), this.X("cursor", a, !0), this.Uxa = a.get("stable") || !1, this.X("dataSources", a), this.X("bubble", a));
      this.X("display", b);
      this.wca()
    }, le: function () {
      return {
        visible: this.get("visible"), Ya: this.get("zooms"), opacity: this.get("opacity"), zIndex: this.get("zIndex"),
        ey: this.S.get("alwaysRender") || !1, Oc: this.Bn()
      }
    }, dataSourcesChanged: function () {
      var a = this.get("dataSources");
      a && a.length ? "string" === typeof a ? (new g.jb.yb(a)).h("complete", function (a) {
        this.x7(a.data);
        this.ls = a.data;
        this.pm = !0;
        this.set("display");
        this.La = !0;
        this.S.q("complete")
      }, this) : a.length && (this.x7(a), this.ls = a, this.pm = !0, this.set("display"), this.La = !0, this.S.q("complete")) : this.clear()
    }, getDatas: function () {
      return this.ls
    }, sza: function () {
      if (this.S.Cj) {
        var a = this.Em;
        this.Df = a.Df;
        this.mg = a.mg
      }
    },
    qa: function (a, b) {
      var c = {type: a, data: "mouseout" === a ? this.Nga || null : b.su.hb, target: this.S, originEvent: b.wT};
      this.Nga = "mouseout" === a ? null : b.su.hb;
      this.S.q(a, c)
    }, sc: function (a) {
      this.qa(a.type, a)
    }, wca: function () {
      this.h("click", this.sc);
      this.h("dblclick", this.sc);
      this.h("mousedown", this.sc);
      this.h("mouseup", this.sc);
      this.h("mouseover", this.sc);
      this.h("mouseout", this.sc);
      this.h("touchstart", this.sc);
      this.h("touchend", this.sc)
    }, zCa: function () {
      this.G("click", this.sc);
      this.G("dblclick", this.sc);
      this.G("mousedown",
        this.sc);
      this.G("mouseup", this.sc);
      this.G("mouseover", this.sc);
      this.G("mouseout", this.sc);
      this.G("touchstart", this.sc);
      this.G("touchend", this.sc)
    }, styleChanged: function () {
      this.Em = this.get("style");
      this.sza();
      this.set("display", 0)
    }, x7: function (a) {
      if (a) {
        this.clear();
        for (var b = 0; b < a.length; b += 1) {
          var c = a[b].lnglat;
          a[b].lnglat = g.a.Ja(c);
          c = this.map.Ab(c);
          c = new g.di({name: "point-" + g.a.xb(this), W: new g.Aa.Pg([c.x, c.y], !0)});
          c.wo = this;
          c.hb = a[b];
          this.RH(c)
        }
      }
    }, Yqa: function (a) {
      if ("geojson" === a) return new g.qaa({map: this.map});
      if ("topjson" === a) return new g.dBa({map: this.map});
      if ("subway" === a) return new g.ZAa({map: this.map})
    }, Dva: function (a) {
      if (a) {
        var b = [], b = [], c = {};
        if (a.rules) {
          for (var b = a.rules, d = 0, e = b.length; d < e; d += 1) {
            for (var f = [], h = b[d].symbolizers, k = 0, l = h.length; k < l; k += 1) h[k].fill && (f[k] = new g.style.Qg.aW(h[k].fill)), h[k].stroke && (f[k] = new g.style.Qg.FW(h[k].stroke));
            h = f;
            b[d].iL = h;
            b[d] = new g.style.iba(b[d])
          }
          c.rules = b
        }
        if (a.symbolizers) {
          b = a.symbolizers;
          a = 0;
          for (d = b.length; a < d; a += 1) b[a].fill && (b[a] = new g.style.Qg.aW(b[a].fill)),
          b[a].stroke && (b[a] = new g.style.Qg.FW(b[a].stroke));
          c.iL = b
        }
        a = new g.pM(c)
      } else a = new g.pM({});
      this.set("style", a);
      return a
    }, wCa: function (a, b) {
      var c = new g.jb.yb(a);
      c.h("complete", function (c) {
        c = this.ga[a] = this.Yqa(b).RT(c);
        this.ay(c);
        this.qa("complete")
      }, this);
      c.h("error", this.nc, this)
    }, fwa: function (a) {
      "px" === a.target.get("unit") ? (this.Df = Math.max(a.vl, this.Df), this.mg = Math.max(a.vl, this.mg)) : a.vl > this.Ns && (this.Ns = a.vl, this.qz = this.Ns / this.map.B.pj.oq(20))
    }, RH: function (a) {
      this.fm.add(a);
      if (!this.XC &&
        !this.S.Cj) {
        if (0 === a.name.indexOf("circle") || 0 === a.name.indexOf("ellipse")) {
          a.h("rad", this.fwa, this);
          var b = a.get("radius");
          b.length && (b = Math.max.apply(null, b));
          "px" === a.get("unit") ? (this.Df = Math.max(b, this.Df), this.mg = Math.max(b, this.mg)) : this.Ns ? b > this.Ns && (this.Ns = b, this.qz = this.Ns / this.map.B.pj.oq(20)) : (this.Ns = b, this.qz = this.Ns / this.map.B.pj.oq(20))
        }
        b = a.get("strokeWeight") || 0;
        if (!this.rz || b > this.rz) this.rz = b
      }
      this.Uxa || a.X("feature", this, !0)
    }, ay: function (a) {
      this.pm = !0;
      for (var b = 0, c = a.length; b <
      c; b += 1) this.RH(a[b])
    }, clear: function () {
      this.pm = !0;
      this.ls = [];
      this.fm.clear();
      this.set("display", 0)
    }, An: function (a) {
      var b, c;
      b = this.fm.An([a[0] + g.a.Fa, a[1], a[2] + g.a.Fa, a[3]]);
      c = this.fm.An([a[0] - g.a.Fa, a[1], a[2] - g.a.Fa, a[3]]);
      a = this.fm.An(a);
      return g.extend(a, g.extend(b, c))
    }, vEa: function (a) {
      var b, c = this.get("style"), d = a.wl;
      c instanceof g.pM || (c = this.Dva(c));
      if (d && 0 < d.length) b = c.O2(d, a); else {
        if (c.H8.length || c.wl.length) b = c.loa(a);
        b || (b = a.Aqa())
      }
      return b
    }, XR: function (a) {
      function b(a, b) {
        return a.gm - b.gm
      }

      var c = [], d, e, f, h, k, l = {};
      for (d in a) if (a.hasOwnProperty(d)) {
        f = a[d];
        h = f.get("zIndex");
        for (e in l) if (l.hasOwnProperty(e) && (k = c[l[e]][2], k === h)) break;
        "undefined" === typeof l[h] && (c.push([[], [], h]), l[h] = c.length - 1);
        h = c[l[h]];
        h[0].push(f)
      }
      c.sort(this.Qxa);
      a = 0;
      for (d = c.length; a < d; a += 1) c[a][0].sort(b);
      return c
    }, featureChanged: function (a) {
      this.pm = !0;
      var b = a.target, c = b.fc();
      0 !== this.fm.Fqa([g.a.xb(b)]).length && (this.fm.remove(b, a.Lv), c && !a.Eoa && this.fm.add(b))
    }, j8: function (a) {
      this.pm = !0;
      for (var b, c = 0, d = a.length; c <
      d; c += 1) b = a[c], b.W.Lv = null, b.ss(!0), b.zl("feature")
    }, xHa: function (a, b) {
      return a[1].zIndex === b[1].zIndex ? g.a.xb(a[1]) - g.a.xb(b[1]) : a[1].zIndex - b[1].zIndex
    }, Qxa: function (a, b) {
      return a[2] - b[2]
    }, kHa: function (a) {
      return a.BEa() === g.o.iBa.SAa
    }, am: function (a) {
      return this.XC ? new g.M.Me.Il(this, a) : "c" === this.map.get("overlayRender") && g.M.canvas.Il ? new g.M.canvas.Il(this, a) : g.M.ae.Il && "d" === this.map.get("overlayRender") ? new g.M.ae.Il(this, a) : null
    }
  });
  g.o.ed.Gb({
    bm: function (a) {
      return this.XC ? new g.Ea.Me.Il(this, a) : this.S.Cj ? new g.Ea.Raa(this, a) : new g.Ea.Il(this, a)
    }
  });
  g.o.kaa = g.da.extend({
    A: function () {
      this.clear()
    }, clear: function () {
      this.sq = [];
      this.NT = new g.Ok
    }, add: function (a) {
      var b = g.a.xb(a), c = a.fc();
      this.sq[b] || (this.count += 1, this.sq[b] = a, c && !g.I.gb(c.Kd(), [Infinity, Infinity, -Infinity, -Infinity]) && this.NT.Gs(c.Kd(), a))
    }, pEa: function () {
      return this.sq
    }, An: function (a) {
      return this.NT.dxa(a)
    }, Fqa: function (a) {
      var b = a.length, c = [], d;
      for (d = 0; d < b; d += 1) this.sq[a[d]] && c.push(this.sq[a[d]]);
      return c
    }, remove: function (a, b) {
      var c = g.a.xb(a).toString(), d = a.fc();
      this.sq[c] && (this.sq[c] =
        null, d && (c = "undefined" !== typeof b ? b : d.Kd(), this.NT.remove(c, a)))
    }
  });
  g.Ok = g.da.extend({
    A: function (a) {
      this.x6 = "undefined" !== typeof a ? a : 6;
      this.ZJ = Math.floor(this.x6 / 2);
      this.UK = {I: [Infinity, Infinity, -Infinity, -Infinity], Ib: []};
      this.count = 0
    }, ona: function (a, b) {
      var c = -1, d = [], e;
      d.push(b);
      var f = b.Ib;
      do {
        -1 !== c && (d.push(f[c]), f = f[c].Ib, c = -1);
        for (var h = f.length - 1; 0 <= h; h -= 1) {
          var k = f[h];
          if ("undefined" !== typeof k.We) {
            c = -1;
            break
          }
          var l = g.Ok.Uz(k.I[2] - k.I[0], k.I[3] - k.I[1], k.Ib.length + 1),
            k = g.Ok.Uz((k.I[2] > a.I[2] ? k.I[2] : a.I[2]) - (k.I[0] < a.I[0] ? k.I[0] : a.I[0]), (k.I[3] > a.I[3] ? k.I[3] : a.I[3]) -
              (k.I[1] < a.I[1] ? k.I[1] : a.I[1]), k.Ib.length + 2);
          if (0 > c || Math.abs(k - l) < e) e = Math.abs(k - l), c = h
        }
      } while (-1 !== c);
      return d
    }, Gs: function (a, b, c) {
      a = {I: a, We: b};
      "undefined" !== typeof c && (a.type = c);
      this.v5(a, this.UK);
      this.count += 1
    }, v5: function (a, b) {
      var c;
      if (0 === b.Ib.length) b.I = g.I.cb(a.I), b.Ib.push(a); else {
        var d = this.ona(a, b), e = a;
        do {
          if (c && "undefined" !== typeof c.Ib && 0 === c.Ib.length) {
            var f = c;
            c = d.pop();
            for (var h = 0, k = c.Ib.length; h < k; h += 1) if (c.Ib[h] === f || 0 === c.Ib[h].Ib.length) {
              c.Ib.splice(h, 1);
              break
            }
          } else c = d.pop();
          f =
            e instanceof Array;
          if ("undefined" !== typeof e.We || "undefined" !== typeof e.Ib || f) {
            if (f) {
              f = 0;
              for (h = e.length; f < h; f += 1) g.I.extend(c.I, e[f].I);
              c.Ib = c.Ib.concat(e)
            } else g.I.extend(c.I, e.I), c.Ib.push(e);
            if (c.Ib.length <= this.x6) if (0 < d.length) e = {I: g.I.cb(c.I)}; else break; else e = f = this.hta(c.Ib), 1 > d.length && (c.Ib.push(f[0]), d.push(c), e = f[1])
          } else g.I.extend(c.I, e.I), e = {I: g.I.cb(c.I)}
        } while (0 < d.length)
      }
    }, hta: function (a) {
      for (var b = this.Iva(a); 0 < a.length;) this.Jva(a, b[0], b[1]);
      return b
    }, Iva: function (a) {
      for (var b =
        a.length - 1, c = 0, d = a.length - 1, e = 0, f = a.length - 2; 0 <= f; f -= 1) {
        var h = a[f];
        h.I[0] > a[c].I[0] ? c = f : h.I[2] < a[b].I[1] && (b = f);
        h.I[1] > a[e].I[1] ? e = f : h.I[3] < a[d].I[3] && (d = f)
      }
      Math.abs(a[b].I[2] - a[c].I[0]) > Math.abs(a[d].I[3] - a[e].I[1]) ? b > c ? (b = a.splice(b, 1)[0], c = a.splice(c, 1)[0]) : (c = a.splice(c, 1)[0], b = a.splice(b, 1)[0]) : d > e ? (b = a.splice(d, 1)[0], c = a.splice(e, 1)[0]) : (c = a.splice(e, 1)[0], b = a.splice(d, 1)[0]);
      return [{I: g.I.cb(b.I), Ib: [b]}, {I: g.I.cb(c.I), Ib: [c]}]
    }, Jva: function (a, b, c) {
      for (var d = g.Ok.Uz(b.I[2] - b.I[0], b.I[3] - b.I[1],
        b.Ib.length + 1), e = g.Ok.Uz(c.I[2] - c.I[0], c.I[3] - c.I[1], c.Ib.length + 1), f, h, k, l = a.length - 1; 0 <= l; l -= 1) {
        var m = a[l],
          n = [b.I[0] < m.I[0] ? b.I[0] : m.I[0], b.I[2] > m.I[2] ? b.I[2] : m.I[2], b.I[1] < m.I[1] ? b.I[1] : m.I[1], b.I[3] > m.I[3] ? b.I[3] : m.I[3]],
          n = Math.abs(g.Ok.Uz(n[1] - n[0], n[3] - n[2], b.Ib.length + 2) - d),
          m = [c.I[0] < m.I[0] ? c.I[0] : m.I[0], c.I[2] > m.I[2] ? c.I[2] : m.I[2], c.I[1] < m.I[1] ? c.I[1] : m.I[1], c.I[3] > m.I[3] ? c.I[3] : m.I[3]],
          m = Math.abs(g.Ok.Uz(m[1] - m[0], m[3] - m[2], c.Ib.length + 2) - e), p = Math.abs(m - n);
        if (!h || !f || p < f) h = l, f = p, k = m < n ? c :
          b
      }
      d = a.splice(h, 1)[0];
      b.Ib.length + a.length + 1 <= this.ZJ ? (b.Ib.push(d), g.I.extend(b.I, d.I)) : c.Ib.length + a.length + 1 <= this.ZJ ? (c.Ib.push(d), g.I.extend(c.I, d.I)) : (k.Ib.push(d), g.I.extend(k.I, d.I))
    }, remove: function (a, b) {
      var c = [];
      c[0] = {I: a};
      (c[1] = b) || (c[1] = !1);
      c[2] = this.UK;
      this.count -= 1;
      if (!1 === c[1]) {
        var d = 0, e = [];
        do d = e.length, e = e.concat(this.m8.apply(this, c)); while (d !== e.length);
        return e
      }
      return this.m8.apply(this, c)
    }, m8: function (a, b, c) {
      var d = [], e = [], f = [];
      if (!a || !g.I.ah(a.I, c.I)) return f;
      a = g.I.cb(a.I);
      var h;
      e.push(c.Ib.length);
      d.push(c);
      do {
        c = d.pop();
        var k = e.pop() - 1;
        if ("undefined" !== typeof b) for (; 0 <= k;) {
          var l = c.Ib[k];
          if (g.I.ah(a, l.I)) if (b && "undefined" !== typeof l.We && l.We === b || !b && ("undefined" !== typeof l.We || g.I.K2(a, l.I))) {
            "undefined" !== typeof l.Ib ? (f = this.Oz(l, !0, [], l), c.Ib.splice(k, 1)) : f = c.Ib.splice(k, 1);
            g.Ok.XT(c);
            b = void 0;
            c.Ib.length < this.ZJ && (h = this.Oz(c, !0, [], c));
            break
          } else "undefined" !== typeof l.Ib && (e.push(k), d.push(c), c = l, k = l.Ib.length);
          k -= 1
        } else if ("undefined" !== typeof h) {
          c.Ib.splice(k + 1, 1);
          0 < c.Ib.length && g.Ok.XT(c);
          k = 0;
          for (l = h.length; k < l; k += 1) this.v5(h[k], c);
          h.length = 0;
          0 === d.length && 1 >= c.Ib.length ? (h = this.Oz(c, !0, h, c), c.Ib.length = 0, d.push(c), e.push(1)) : 0 < d.length && c.Ib.length < this.ZJ ? (h = this.Oz(c, !0, h, c), c.Ib.length = 0) : h = void 0
        } else g.Ok.XT(c)
      } while (0 < d.length);
      return f
    }, search: function (a, b) {
      return this.Oz({I: a}, !1, [], this.UK, b)
    }, dxa: function (a, b) {
      return this.Oz({I: a}, !1, [], this.UK, b, !0)
    }, Oz: function (a, b, c, d, e, f) {
      var h = {}, k = [];
      if (!g.I.ah(a.I, d.I)) return f ? h : c;
      k.push(d.Ib);
      do {
        d = k.pop();
        for (var l = d.length - 1; 0 <= l; l -= 1) {
          var m = d[l];
          if (g.I.ah(a.I, m.I)) if ("undefined" !== typeof m.Ib) k.push(m.Ib); else if ("undefined" !== typeof m.We) if (b) c.push(m); else if ("undefined" === typeof e || m.type === e) m = m.We, "undefined" !== typeof f ? h[g.a.xb(m)] = m : c.push(m)
        }
      } while (0 < k.length);
      return "undefined" !== typeof f ? h : c
    }
  });
  g.Ok.XT = function (a) {
    var b = a.Ib.length, c = a.I;
    if (0 === b) g.I.empty(c); else {
      var d = a.Ib[0].I;
      c[0] = d[0];
      c[2] = d[2];
      c[1] = d[1];
      c[3] = d[3];
      for (d = 1; d < b; d += 1) g.I.extend(c, a.Ib[d].I)
    }
  };
  g.Ok.Uz = function (a, b, c) {
    var d = (a + b) / 2;
    a *= b;
    return a * c / (a / (d * d))
  };
  g.C = g.C || {};
  g.C.Hh = g.da.extend({
    ka: [g.va, g.$e], nva: ["position", "altitude", "visible", "clickable", "bubble"], A: function (a, b) {
      this.map = b;
      this.bf(this.nva, a);
      this.X("zIndex", a);
      this.X("draggable", a);
      g.l.Yf && this.Dca();
      g.l.ba || this.KM();
      this.Kb = a;
      this.Kb.C = this
    }, draggableChanged: function () {
      this.get("draggable") ? this.JM() : this.DO()
    }, qa: function (a, b) {
      var c;
      c = b ? {type: a, pixel: b.Bb, target: this.Kb, lnglat: b.Tf, originEvent: b.wT} : {type: a};
      this.Kb && this.Kb.q(a, c)
    }, sc: function (a) {
      ("click" !== a.type && "rightclick" !== a.type && "dblclick" !==
        a.type && "longclick" !== a.type || this.get("clickable")) && this.qa(a.type, a)
    }, IM: function () {
      this.h("click", this.sc);
      this.h("rightclick", this.sc);
      this.h("longclick", this.sc);
      this.h("longpress", this.sc);
      this.h("dblclick", this.sc)
    }, s1: function () {
      this.G("click", this.sc);
      this.G("rightclick", this.sc);
      this.G("longclick", this.sc);
      this.G("longpress", this.sc);
      this.G("dblclick", this.sc)
    }, KM: function () {
      this.get("clickable") && this.IM();
      this.h("mousemove", this.sc);
      this.h("mouseout", this.sc);
      this.h("mouseover", this.sc);
      this.h("mousedown", this.sc);
      this.h("mouseup", this.sc)
    }, ACa: function () {
      this.s1();
      this.G("mousemove", this.sc);
      this.G("mouseout", this.sc);
      this.G("mouseover", this.sc);
      this.G("mousedown", this.sc);
      this.G("mouseup", this.sc)
    }, clickableChanged: function () {
      this.get("clickable") ? this.IM() : this.s1()
    }, Dca: function () {
      this.get("clickable") && this.IM();
      this.h("touchstart", this.sc, this);
      this.h("touchmove", this.sc, this);
      this.h("touchend", this.sc, this)
    }, JM: function () {
      this.h("dragstart", this.fu);
      this.h("dragging", this.du);
      this.h("dragend", this.eu)
    }, fu: function (a) {
      this.map.YS(a);
      this.jg = a.Bb;
      this.X5 = a.Sa;
      this.W5 = a.Tf;
      this.qa("dragstart", a)
    }, du: function (a) {
      var b = this.map.B.view.type;
      if ("2D" == b) {
        var c = a.Bb.ab(this.jg), b = c.x, c = c.y;
        this.jg = a.Bb;
        var d = this.map.get("rotation") * Math.PI / 180, e = b * Math.cos(d) + Math.sin(d) * c,
          b = -Math.sin(d) * b + Math.cos(d) * c;
        this.$o(new g.H(e, b));
        this.qa("dragging", a)
      } else "3D" == b && a.Sa && (c = a.Bb.ab(this.jg), b = c.x, c = c.y, e = a.Sa.ab(this.X5), a.Tf.ab(this.W5), this.jg = a.Bb, "function" === typeof this.sz && this.sz(b,
        c, e), this.X5 = a.Sa, this.W5 = a.Tf, this.qa("dragging", a))
    }, eu: function (a) {
      this.map.ww();
      "3D" == this.map.B.view.type && this.Kb.reset && this.Kb.reset();
      this.qa("dragend", a)
    }, DO: function () {
      this.G("dragstart", this.fu);
      this.G("dragging", this.du);
      this.G("dragend", this.eu)
    }, DN: function (a) {
      var b, c, d = [];
      if (a) for (b = 0, c = a.length; b < c; b += 1) d.push(this.EN(a[b]));
      return d
    }, EN: function (a) {
      a = this.map.Ab(a);
      return [a.x, a.y]
    }, lg: function (a) {
      var b = this.L.mb || this.map.get("centerCoords"), c = Math.pow(2, 20 - this.map.get("zoom"));
      return [(a[0] - b.x) / c, (a[1] - b.y) / c]
    }, Tt: function (a, b) {
      var c = this.map.B, d = [], e = !1;
      a[0] instanceof Array && "number" !== typeof a[0][0] && (e = !0);
      if (e) for (var e = 0, f = a.length; e < f; e++) {
        for (var h = [], k = 0, l = a[e].length; k < l; k++) {
          var m = c.Ab(a[e][k]);
          m.x += b[0];
          m.y += b[1];
          h.push(c.Od(m))
        }
        d.push(h)
      } else for (e = 0, f = a.length; e < f; e++) h = c.Ab(a[e]), h.x += b[0], h.y += b[1], d.push(c.Od(h));
      return d
    }
  });
  g.C.ub = g.C.Hh.extend({
    fE: "content contentDom icon opacity angle autoRotation offset textAlign verticalAlign shadow title label isTop shape topWhenClick topWhenMouseOver noSelect anchor".split(" "),
    bma: {AMAP_ANIMATION_NONE: !1, AMAP_ANIMATION_DROP: g.Nj.Easing.Bounce, AMAP_ANIMATION_BOUNCE: g.Nj.Easing.Cubic},
    A: function (a, b) {
      arguments.callee.ma.apply(this, arguments);
      this.bf(this.fE, a);
      this.X("move", a);
      this.Rma();
      this.Fu();
      this.set("AnimationOffset", new g.H(0, 0), !0);
      this.X("raiseOnDrag", a);
      this.X("animation",
        a)
    },
    VN: function (a, b, c) {
      var d = this.get("animation");
      if (d && "AMAP_ANIMATION_NONE" !== d) {
        var e = this;
        this.Jn = new g.Nj;
        this.Jn.transition = function (c, h, k) {
          if ("AMAP_ANIMATION_NONE" === d) return 0;
          if (a && 600 <= k) return e.Jn.stop(), 0;
          c = 0 === Math.floor(k / 600) % 2 ? "Out" : "In";
          "out" === b ? c = "Out" : "in" === b && (c = "In");
          return e.bma[d][c](k % 600 / 600)
        };
        c = c || 40;
        this.Jn.Kq = function (a) {
          e.set("AnimationOffset", e.GO.add(new g.H(0, -1 * c * a)))
        };
        this.GO = new g.H(0, 0);
        this.Jn.Pn()
      }
    },
    AnimationOffsetChanged: function () {
      this.positionChanged()
    },
    u0: function () {
      this.Jn && (this.Jn.stop(), this.set("AnimationOffset", this.GO));
      this.set("AnimationOffset", new g.H(0, -40));
      if (this.nr) this.nr.set("position", this.get("position")); else {
        var a = new B.C.ub({
          zIndex: this.get("zIndex") - 1,
          icon: new B.C.fi({image: g.r.Fb + "/theme/v1.3/dragCross.png", size: new g.xd(14, 11), innerOverlay: !0}),
          offset: new g.H(-4, -5),
          position: this.get("position"),
          innerOverlay: !0
        });
        a.Ca = !0;
        this.nr = a
      }
      this.nr.D = !0;
      this.nr.setMap(this.map.B);
      this.nr.D = !1
    },
    hY: function () {
      this.set("animation", "AMAP_ANIMATION_DROP",
        !0);
      this.VN(!0, "in");
      this.nr.D = !0;
      this.nr.D = !1
    },
    animationChanged: function () {
      this.Jn && (this.Jn.stop(), this.set("AnimationOffset", this.GO), this.Jn = null);
      var a = this.get("animation");
      a && "AMAP_ANIMATION_NONE" !== a && ("AMAP_ANIMATION_DROP" === a ? this.VN(!0, "in", 100) : this.VN())
    },
    vg: function () {
      this.nr && this.nr.set("position", this.get("position"))
    },
    raiseOnDragChanged: function () {
      this.get("raiseOnDrag") ? (this.h("dragstart", this.u0, this), this.h("dragging", this.vg, this), this.h("dragend", this.hY, this)) : (this.G("dragstart",
        this.u0, this), this.G("dragging", this.vg, this), this.G("dragend", this.hY, this))
    },
    $o: function (a) {
      var b = this.get("position");
      a = this.map.Ab(b).add(a.Nd(Math.pow(2, 20 - this.map.get("zoom"))));
      b instanceof g.U ? this.set("position", this.map.Od(a)) : this.set("position", a)
    },
    sz: function (a, b) {
      var c = this.get("position"), d = this.get("altitude"), c = this.map.Ls(c, d),
        d = this.map.$p(new g.H(c.x + a, c.y + b), null, d);
      this.set("position", d)
    },
    Rma: function () {
      var a = this.get("content"), b = this.get("shadow"), c = this.get("offset"), d = this.get("label"),
        e, f = this;
      e = a ? this.Z1(a, c) : this.YP(this.get("icon"), function () {
        f.L && f.L.fa ? (g.l.Ci && g.a.iepngFix(e), f.offsetChanged(), f.wL()) : f.map && f.map.set("display")
      });
      this.set("contentDom", e, !0);
      b && (a = this.f2(b, c), this.set("shadowDom", a, !0));
      d && d.content && this.set("labelDom", this.ZP(d.content), !0)
    },
    ZP: function (a) {
      var b = document.createElement("div");
      b.className = "amap-marker-label";
      b.innerHTML = a;
      return b
    },
    Fu: function () {
      var a = this.get("position");
      if (this.map && a && !this.L) {
        var b = this.map, a = this.map.Ab(a), a = this.L =
          new g.di({name: "marker-" + g.a.xb(this), map: b, W: new g.Aa.Pg([a.x, a.y])});
        a.Tp = this.Kb.CLASS_NAME;
        a.wo = this;
        this.X("coords", a, !0);
        a.bf("offset textAlign verticalAlign isTop zIndex params noSelect".split(" "), this)
      }
    },
    getParams: function () {
      return {
        zIndex: this.get("zIndex"),
        Rp: this.get("angle"),
        Wg: this.get("contentDom"),
        LJ: this.get("labelDom"),
        d9: this.get("shadowDom"),
        opacity: this.get("opacity"),
        altitude: this.get("altitude"),
        title: this.get("title"),
        label: this.get("label"),
        oF: this.get("AnimationOffset"),
        verticalAlign: this.get("verticalAlign"),
        textAlign: this.get("textAlign"),
        offset: this.get("offset"),
        Q5: this.get("isTop"),
        shape: this.get("shape"),
        visible: this.get("visible") && !this.Kb.get("outOfZooms"),
        anchor: this.get("anchor")
      }
    },
    offsetChanged: function () {
      function a(a) {
        var c = b.get("offset"), f = b.get("AnimationOffset"), h = b.get("verticalAlign"), k = b.get("textAlign"),
          l = Math.round(a.x) + c.x + f.x;
        a = Math.round(a.y) + c.y + f.y;
        var f = b.get("anchor"), m = b.L.Zj || g.g.Mo(b.L.Wg);
        b.L.Zj = m;
        c = m[0];
        m = m[1];
        f && (f = f.split("-"), 2 === f.length ? (k = f[1], h = f[0]) : 1 === f.length &&
          "center" === f[0] && (k = "center", h = "middle"));
        switch (k) {
          case "center":
            l -= c / 2;
            break;
          case "right":
            l -= c
        }
        switch (h) {
          case "middle":
            a -= m / 2;
            break;
          case "bottom":
            a -= m
        }
        b.L.fa.style.left = l + "px";
        b.L.fa.style.top = a + "px"
      }

      if (this.map) if (this.L && this.L.fa) {
        var b = this, c = this.map.B.view.type;
        "2D" == c ? (c = this.map.Ab(this.get("position")), c = c.ab(this.L.Na).kd(Math.pow(2, 20 - this.map.get("zoom"))), this.L.fa && (this.L.fa.LB && this.L.fa.parentNode !== this.L.fa.LB ? this.map.set("display") : a(c))) : "3D" == c && (c = this.get("position"), c =
          this.map.Ls(c, this.get("altitude")), this.L.fa && (this.L.fa.LB && this.L.fa.parentNode !== this.L.fa.LB ? this.map.set("display") : a(c)))
      } else this.map.set("display")
    },
    altitudeChanged: function () {
      this.offsetChanged()
    },
    positionChanged: function () {
      if (this.L) {
        var a = this.map.Ab(this.get("position"));
        this.set("coords", [a.x, a.y]);
        this.map && (this.L.bba = !0, this.offsetChanged())
      }
    },
    anchorChanged: function () {
      this.TF()
    },
    textAlignChanged: function () {
      this.TF()
    },
    verticalAlignChanged: function () {
      this.TF()
    },
    TF: function () {
      this.L &&
      (this.L.Zj = null, this.L.qe = !0, this.map && (this.map.td.om = !0, this.map.set("display")))
    },
    contentChanged: function () {
      if (this.L) {
        this.L.Zj = null;
        this.map.td.om = !0;
        -1 === g.a.indexOf(this.map.td.eh, this.L) && this.map.td.eh.push(this.L);
        var a = this.get("contentDom");
        this.L.fa && this.L.fa === a.parentNode && this.L.fa.removeChild(a);
        var a = this.get("content"), b = this.get("offset"), a = this.Z1(a, b);
        this.set("contentDom", a);
        this.L.fa ? (g.l.Ci && g.a.iepngFix(a), this.L.fa.appendChild(a), this.L.Wg = a, this.offsetChanged(), this.wL()) :
          this.map && this.map.set("display");
        this.titleChanged()
      }
    },
    iconChanged: function () {
      if (this.L && !this.get("content")) {
        this.L.Zj = null;
        this.map.td.om = !0;
        -1 === g.a.indexOf(this.map.td.eh, this.L) && this.map.td.eh.push(this.L);
        this.L.fa && this.get("contentDom") && this.L.fa.removeChild(this.get("contentDom"));
        var a = this.get("icon");
        this.get("offset");
        var b = this, c = this.YP(a, function () {
          b.L && b.L.fa ? (g.l.Ci && g.a.iepngFix(c), b.offsetChanged(), b.wL()) : b.map && b.map.set("display")
        });
        this.set("contentDom", c);
        this.L.fa && (this.L.fa.appendChild(c),
          this.L.Wg = c);
        this.titleChanged()
      }
    },
    shadowChanged: function () {
      if (this.L) {
        var a = this.get("shadowDom");
        this.L.fa && a && a.parentNode === this.L.fa && this.L.fa.removeChild(a);
        if (a = this.get("shadow")) {
          var b = this.get("offset"), a = this.f2(a, b);
          this.set("shadowDom", a);
          this.L.fa && this.L.fa.appendChild(a)
        }
      }
    },
    titleChanged: function () {
      this.L && this.L.Wg && "string" === typeof this.get("title") && this.L.Wg && this.get("title") && (this.L.Wg.title = this.get("title"))
    },
    wL: function (a, b) {
      a = a || this.get("label");
      b = b || this.get("labelDom");
      if (a && b) {
        var c = a.direction, d = this.L.Zj || g.g.Mo(this.L.Wg), e = d[0], d = d[1], f = g.g.Mo(b), h = f[0], k = f[1];
        this.L.Cv = f;
        var l = f = 0;
        switch (c) {
          case "top":
            f = -k;
            l = (e - h) / 2;
            break;
          case "right":
            f = (d - k) / 2;
            l = e;
            break;
          case "bottom":
            f = d;
            l = (e - h) / 2;
            break;
          case "left":
            f = (d - k) / 2;
            l = -h;
            break;
          case "center":
            f = (d - k) / 2, l = (e - h) / 2
        }
        a.offset && (f += a.offset.y, l += a.offset.x);
        b.style.top = f + "px";
        b.style.left = l + "px"
      }
    },
    labelChanged: function (a) {
      a = a || this.get("label");
      if (this.L && this.L.fa) {
        this.L.Cv = null;
        var b = this.L.fa, c = this.get("labelDom");
        c && c.parentNode === b && b.removeChild(c);
        a && a.content && (c = "", a.content && (c = this.ZP(a.content), b.appendChild(c), this.wL(a, c)), this.set("labelDom", c))
      } else a && a.content ? this.set("labelDom", this.ZP(a.content), !0) : this.set("labelDom", null)
    },
    isTopChanged: function () {
      var a = this.map.td.nL, b = this.get("isTop"), c = this.get("zIndex");
      a ? a === this ? this.L && this.L.fa && (this.L.fa.style.zIndex = b ? this.map.td.fr + 10 : c, this.map.td.nL = b ? this : null) : (a.L && a.L.fa && (a.L.fa.style.zIndex = b ? a.get("zIndex") : this.map.td.fr + 10), this.L &&
      this.L.fa && (this.L.fa.style.zIndex = b ? this.map.td.fr + 10 : c), this.map.td.nL = b ? this : a) : (this.map.td.nL = this, this.L && this.L.fa && (this.L.fa.style.zIndex = b ? this.map.td.fr + 10 : c))
    },
    visibleChanged: function () {
      this.L && this.L.fa && (this.get("visible") && !this.Kb.get("outOfZooms") ? this.L.fa.style.display = "block" : this.L.fa.style.display = "none")
    },
    eva: function () {
      this.visibleChanged()
    },
    angleChanged: function () {
      if (!g.l.Ie && this.L && this.L.fa) {
        var a = this.L, b = a.get("params"), c = b.textAlign, d = b.verticalAlign, e = b.offset, b = e.x,
          e = e.y;
        this.TF();
        if ("AMap.Text" == a.Tp) {
          var e = b = 0, f = a.Zj || g.g.Mo(a.Wg), h = f[0], k = f[1];
          a.Zj = f;
          switch (c) {
            case "center":
              b = h / 2;
              break;
            case "right":
              b = h
          }
          switch (d) {
            case "middle":
              e = k / 2;
              break;
            case "bottom":
              e = k
          }
        } else b = -b, e = -e;
        g.g.rotate(this.L.fa, this.get("angle") || 0, {x: b, y: e})
      }
    },
    zIndexChanged: function () {
      var a = this.get("zIndex");
      if (a > this.map.td.fr) {
        this.map.td.fr = a;
        var b = this.map.td.nL;
        b && b.L && b.L.fa && (b.L.fa.style.zIndex = a + 10)
      }
      this.L && this.L.fa && (this.L.fa.style.zIndex = this.get("isTop") ? this.map.td.fr + 10 : this.get("zIndex"))
    },
    opacityChanged: function () {
      var a = this.get("contentDom"), b = this.get("shadowDom");
      a && g.g.Yq(a, this.get("opacity"));
      b && g.g.Yq(b, this.get("opacity"))
    },
    Z1: function (a) {
      var b;
      b = document.createElement("div");
      b.className = "amap-marker-content";
      "string" !== typeof a ? b.appendChild(a) : (b.innerHTML = a, b.childNodes[0] && !b.childNodes[0].style && (b.style["white-space"] = "pre"));
      g.g.Yq(b, this.get("opacity"));
      return b
    },
    YP: function (a, b) {
      var c, d = 0, e = 0, f, h, k, l, m, n;
      a ? ("string" === typeof a ? (c = a, n = !0) : (c = a.get("image"), e = a.get("size"),
        f = a.get("imageSize"), d = e.width, e = e.height, f && (l = f.width, m = f.height)), f = "string" !== typeof a ? a.get("imageOffset") : {
        x: 0,
        y: 0
      }) : (c = g.r.Ji + "/mark_bs.png", f = {x: 0, y: 0}, d = 19, e = 33, l = 19, m = 33);
      h = document.createElement("div");
      h.className = "amap-icon";
      h.style.position = "absolute";
      h.style.overflow = n ? "inherit" : "hidden";
      d && (h.style.width = d + "px");
      e && (h.style.height = e + "px");
      k = document.createElement("img");
      l && m && (k.style.width = l + "px", k.style.height = m + "px");
      k.style.top = f.y + "px";
      k.style.left = f.x + "px";
      h.appendChild(k);
      g.g.Yq(g.l.Ie &&
      n ? k : h, this.get("opacity"));
      d && e || (h.CM = !1);
      g.F.h(k, "load", function q() {
        this.L && (this.L.Zj = null);
        this.map && this.map.td && (this.map.td.om = !0);
        g.F.G(k, "load", q, this);
        if (this.L && this.L.fa) {
          var a = this.get("labelDom");
          a && this.L.fa.appendChild(a)
        }
        h.CM = !0;
        b && b()
      }, this);
      k.src = c;
      return h
    },
    f2: function (a) {
      a = this.YP(a);
      a.style.zIndex = -1;
      return a
    },
    moveChanged: function () {
      var a = this.get("move");
      if (!1 === a) return this.aya();
      void 0 !== a && ("pause" === a.action ? this.Gva() : "[object Array]" === Object.prototype.toString.call(a.Tf) ?
        a.Tf && ("resume" === a.action && this.PG ? this.moveTo(a.Tf[a.Tf.Kp || 0], a.speed, a.wb) : (this.PG && this.q("movestop"), a.Tf.Kp = 0, this.set("position", a.Tf[0]), this.iua(a.Tf, a.speed, a.wb, a.sna))) : this.moveTo(a.Tf, a.speed, a.wb, !0))
    },
    moveTo: function (a, b, c, d) {
      if (!(0 >= b)) {
        var e = this.get("position");
        a.ab(e);
        var f = Math.round(a.He(e) / 1E3 / b * 36E5);
        if (0 === f) return this.q("moveend");
        this.Bh && (this.Bh.stop(), this.Bh = null);
        this.Bh = new g.Nj(e, a);
        c = c || function (a) {
          return a
        };
        this.Bh.transition = function (a, b, d) {
          if (d >= f) return b;
          var e = (b.R - a.R) * c(d / f) + a.R;
          a = (b.Q - a.Q) * c(d / f) + a.Q;
          return new g.U(e, a)
        };
        this.Bh.Kq = function (b) {
          this.set("position", b);
          d && this.Kb.q("moving", {target: this.Kb, passedPath: [this.Bh.start, this.get("position")]});
          this.q("moving");
          b.gb(a) && (this.Bh && (this.Bh.stop(), this.Bh = null), this.Kb.q("moveend", {target: this.Kb}), this.q("moveend"))
        };
        this.get("autoRotation") && !g.l.Ie && (b = "2D" == (this.map.B.view.type || "2D") ? this.Vea(e, a) : this.Wea(e, a), this.set("angle", b));
        this.Bh.Pn(this)
      }
    },
    aya: function () {
      this.Bh && (this.Bh.stop(),
        this.Bh = null, this.q("movestop"))
    },
    Gva: function () {
      this.Bh && (this.Bh.stop(), this.Bh = null, this.q("movepause"))
    },
    iua: function (a, b, c, d) {
      function e() {
        var b = a.slice(0, a.Kp || 0);
        b.push(this.get("position"));
        this.Kb.q("moving", {target: this.Kb, passedPath: b})
      }

      function f() {
        a.Kp < a.length - 1 ? (a.Kp += 1, this.moveTo(a[a.Kp], b, c)) : (this.qa("movealong"), d ? (a.Kp = 0, this.set("position", a[0]), this.moveTo(a[a.Kp], b, c)) : this.q("movestop"))
      }

      var h = Math.min(a.Kp || 0, a.length - 1);
      this.PG || (this.PG = !0, this.h("moving", e, this), this.h("moveend",
        f, this), this.h("movestop", function l() {
        this.PG = !1;
        this.G("moveend", f, this);
        this.G("moving", e, this);
        this.G("movestop", l, this)
      }, this));
      this.moveTo(a[h], b, c)
    },
    Wea: function (a, b) {
      var c = this.map, d = c.Ls(a), c = c.Ls(b), e = 0;
      c.He(d);
      var f = c.y - d.y, h = c.x - d.x;
      0 !== c.x - d.x ? (e = Math.atan((c.y - d.y) / (c.x - d.x)), 0 <= f && 0 > h ? e = Math.PI + e : 0 > f && 0 >= h ? e = Math.PI + e : 0 > f && 0 <= h && (e = 2 * Math.PI + e)) : e = c.y > d.y ? Math.PI / 2 : 3 * Math.PI / 2;
      return g.a.vb(180 * e / Math.PI, 1)
    },
    Vea: function (a, b) {
      var c = this.map, d = c.Ab(a), c = c.Ab(b), e = 0;
      c.He(d);
      var f = c.y -
        d.y, h = c.x - d.x;
      0 !== c.x - d.x ? (e = Math.atan((c.y - d.y) / (c.x - d.x)), 0 <= f && 0 > h ? e = Math.PI + e : 0 > f && 0 >= h ? e = Math.PI + e : 0 > f && 0 <= h && (e = 2 * Math.PI + e)) : e = c.y > d.y ? Math.PI / 2 : 3 * Math.PI / 2;
      return g.a.vb(180 * e / Math.PI, 1)
    }
  });
  g.C.Vn = g.C.Hh.extend({
    A: function (a, b) {
      arguments.callee.ma.apply(this, arguments);
      this.X("items", a, !0);
      this.X("content", a, !0);
      this.X("resolution", b);
      this.X("centerCoords", b);
      this.Sp = a
    }, Ts: function (a) {
      this.$g();
      this.ut();
      this.Gm();
      this.zl("resolution");
      this.zl("centerCoords");
      this.zl("render");
      this.X("resolution", a);
      this.X("centerCoords", a);
      this.X("render", a);
      this.map.h("movestart", this.bn, this);
      this.map.h("mapmove", this.bn, this);
      this.map.h("zoomstart", this.bn, this);
      this.map.h("click", this.bn, this);
      this.map.h("closeOverlays", this.bn, this);
      this.map.h("rotate", this.bn, this)
    }, bn: function () {
      this.Sp.map && (this.Sp.D = !0, this.Sp.close(), this.Sp.D = !1)
    }, mapChanged: function () {
    }, positionChanged: function () {
      this.Gm()
    }, renderChanged: function () {
      this.Gm()
    }, $g: function () {
      this.K && (this.K.parentNode && this.K.parentNode.removeChild(this.K), this.K = null);
      var a = g.g.create("div", null, "amap-menu");
      g.F.h(a, "mousedown", function (a) {
        g.F.stopPropagation(a)
      }, this);
      this.K = a;
      this.map.Xa.C.appendChild(this.K)
    }, ut: function () {
      var a =
        this, b = this.K;
      b.innerHTML = "";
      var c = this.get("content");
      if ("object" === typeof c) b.appendChild(c); else if ("string" === typeof c) b.innerHTML = c; else if ((c = this.get("items")) && c.length) {
        var d = g.g.create("ul", b, "amap-menu-outer");
        c.sort(function (a, b) {
          return isNaN(a.nK) || isNaN(b.nK) ? 0 : a.nK - b.nK
        });
        for (b = 0; b < c.length; b += 1) (function (b) {
          var c = b.Sn, h = b.wb, k = g.g.create("li", d);
          k.innerHTML = c;
          g.F.h(k, "click", function () {
            h.call(k);
            a.Sp.D = !0;
            a.Sp.close();
            a.Sp.D = !1
          }, k)
        })(c[b])
      } else this.K.innerHTML = ""
    }, Gm: function () {
      var a =
        this.map, b = this.K;
      a && b && (this.map.get("zoom"), b = this.get("position"), b = a.Ls(b), a = b.y, b = b.x, this.K.style.right = "", this.K.style.bottom = "", this.K.style.left = b + "px", this.K.style.top = a + "px")
    }, kg: function () {
      this.K && (this.map.G("click", this.OBa, this), this.map.Xa.C.removeChild(this.K), this.Sp.ti = !1, this.K = this.Sp.Ce.map = null, this.map.G("movestart", this.bn, this), this.map.G("zoomstart", this.bn, this), this.map.G("click", this.bn, this), this.map.G("closeOverlays", this.bn, this), this.map.G("rotate", this.bn, this))
    },
    visibleChanged: function () {
      this.K && (this.get("visible") ? this.K.style.display = "block" : this.K.style.display = "none")
    }, itemsChanged: function () {
      this.K && this.ut()
    }
  });
  g.C.Ze = g.C.Hh.extend({
    A: function (a, b) {
      arguments.callee.ma.apply(this, arguments);
      this.bf("content contentDom position contentU altitude isCustom autoMove showShadow closeWhenClickMap size offset anchor".split(" "), a);
      this.X("retainWhenClose", a, !0);
      a.X("toBeClose", this);
      this.tf = a
    }, Ts: function (a) {
      this.Vna || (this.$g(), this.ut());
      this.zl("resolution");
      this.zl("centerCoords");
      this.zl("render");
      this.X("resolution", a);
      this.X("centerCoords", a);
      this.X("render", a);
      this.map = a;
      a.Xa.C.appendChild(this.Rc);
      this.yV();
      this.Gm();
      this.lX();
      this.Vna = !0;
      this.Kna();
      this.Kb.q("onAdd", {type: "onAdd", target: this.Kb})
    }, $g: function () {
      var a = g.g.create("div");
      a.className = "amap-info";
      var b = g.g.create("div", a, "amap-info-shadowContainer"), c = g.g.create("div", a), d = this.get("anchor"),
        e = "amap-info-contentContainer";
      d && (e = d + " amap-info-contentContainer");
      d = g.g.create("div", c, e);
      a.style.position = "absolute";
      c.style.position = "absolute";
      c.style.bottom = "0px";
      c.style.left = "0px";
      b.style.position = "absolute";
      this.Rc = a;
      this.Rh = c;
      this.IU = b;
      this.sh =
        d;
      this.set("contentDom", this.sh, !0)
    }, ut: function () {
      var a = this.get("contentU");
      if (a) {
        var b = this.get("isCustom"), c = this.sh, d = this.IU;
        c.innerHTML = "";
        var e = null;
        if (b) {
          if ("string" === typeof a) c.innerHTML = a; else if (a instanceof Array) for (e = 0; e < a.length; e += 1) c.appendChild(a[e]); else c.appendChild(a);
          e = c;
          d.parentNode && d.parentNode.removeChild(d)
        } else {
          e = "amap-info-content amap-info-outer";
          g.l.Ie && (e += " amap-info-content-ie8");
          e = this.gsa = d = g.g.create("div", c, e);
          "string" === typeof a ? d.innerHTML = a : d.appendChild(a);
          this.Xna = d;
          a = g.g.create("a", this.gsa, "amap-info-close");
          a.innerHTML = "\u00d7";
          this.mQ = a;
          a.href = "javascript: void(0)";
          g.l.Yf && (g.F.h(a, "touchstart", function (a) {
            g.F.stop(a)
          }, this), g.F.h(a, "touchend", function (a) {
            g.F.stop(a);
            this.tf.D = !0;
            this.tf.close();
            this.tf.D = !1
          }, this), g.F.h(a, "click", function (a) {
            g.F.stop(a);
            this.tf.D = !0;
            this.tf.close();
            this.tf.D = !1
          }, this));
          g.l.ba || (g.F.h(a, "mousedown", function (a) {
            g.F.stop(a)
          }, this), g.F.h(a, "click", function (a) {
              g.F.stop(a);
              this.tf.D = !0;
              this.tf.close();
              this.tf.D = !1
            },
            this));
          if (a = this.get("size", !0)) 0 !== a.width && (d.style.width = a.width + "px"), 0 !== a.height && (d.style.height = a.height + "px");
          this.get("anchor");
          g.g.create("div", c, g.l.Ie ? "amap-info-sharp-old" : "amap-info-sharp");
          this.IU.style.display = "block"
        }
        g.F.Zxa(e)
      }
    }, yV: function () {
      var a = this.get("isCustom"), b = this.get("showShadow");
      if (!a && b) {
        var a = this.IU, b = g.g.pJ(this.sh), c = b.height - 23, d = b.width;
        if (g.l.Ci || g.l.sv) c = this.sh.childNodes[0].offsetHeight, d = this.sh.childNodes[0].offsetWidth + 26;
        b = "background-image:url(" + g.r.Fb +
          (g.l.Ci ? "/theme/v1.3/iws.gif);" : "/theme/v1.3/iws.png);");
        a.innerHTML = "";
        var e = [], f;
        f = e[1] = {};
        f.height = 0.5 * c + 4;
        f.width = d;
        f.offsetX = 400;
        f.offsetY = 16;
        f.top = -f.height - 10 - 15;
        f.left = 23;
        f = e[2] = {};
        f.height = e[1].height;
        f.width = e[1].height;
        f.offsetX = 1075 - f.width;
        f.offsetY = e[1].offsetY;
        f.top = e[1].top;
        f.left = 23 + e[1].width;
        f = e[3] = {};
        f.height = 10;
        f.width = 22;
        f.offsetX = 30;
        f.offsetY = 445;
        f.top = -25;
        f.left = 23 + (g.l.sv || g.l.Ci ? 5 : 0);
        f = e[4] = {};
        f.height = 10;
        f.width = d / 2 - 15 - e[3].left - e[3].width;
        f.offsetX = 132;
        f.offsetY = 445;
        f.top =
          -25;
        f.left = e[3].left + e[3].width;
        f = e[5] = {};
        f.height = 10;
        f.width = 70;
        f.offsetX = 80;
        f.offsetY = 445;
        f.top = -25;
        f.left = e[4].left + e[4].width;
        f = e[6] = {};
        f.height = 10;
        f.width = d - e[5].left - e[5].width;
        f.offsetX = 132;
        f.offsetY = 445;
        f.top = -25;
        f.left = e[5].left + e[5].width;
        f = e[7] = {};
        f.height = 10;
        f.width = 30;
        f.offsetX = 621;
        f.offsetY = 445;
        f.top = -25;
        f.left = d;
        f = e[8] = {};
        f.height = 15;
        f.width = 70;
        f.offsetX = 47;
        f.offsetY = 470;
        f.top = -15;
        f.left = d / 2 - 15;
        for (c = 1; 8 >= c; c += 1) d = g.g.create("div", a), f = [], f.push("position:absolute;"), f.push(b), f.push("top:" +
          e[c].top + "px;"), f.push("left:" + e[c].left + "px;"), f.push("width:" + e[c].width + "px;"), f.push("height:" + e[c].height + "px;"), f.push("background-position:" + -e[c].offsetX + "px " + -e[c].offsetY + "px;"), d.style.cssText = f.join("")
      }
    }, aIa: function () {
    }, Gm: function () {
      var a = this.map, b = this.Rc, c = this.get("position"), d = this.get("anchor");
      if (a && b && c) {
        a = a.Ls(c, this.get("altitude"));
        d && (this.sh.className = d + " amap-info-contentContainer");
        var e = g.g.pJ(this.sh);
        if (g.l.Ci || g.l.sv) e.width = this.sh.childNodes[0].offsetWidth + 14;
        b = e.height;
        c = this.get("offset");
        this.get("isCustom");
        e = e.width;
        this.Rc.style.left = Math.round(a.x - e / 2 + (c.x || 0)) + "px";
        this.Rc.style.top = Math.round(a.y + (c.y || 0)) + "px";
        if (d) {
          var f;
          "center" == d ? (d = "center", f = "middle") : (f = d.split("-"), d = f[1], f = f[0]);
          switch (f) {
            case "middle":
              this.Rc.style.top = Math.round(a.y + b / 2 + (c.y || 0)) + "px";
              break;
            case "top":
              this.Rc.style.top = Math.round(a.y + b + (c.y || 0)) + "px"
          }
          switch (d) {
            case "left":
              this.Rc.style.left = Math.round(a.x + (c.x || 0)) + "px";
              break;
            case "right":
              this.Rc.style.left = Math.round(a.x -
                e + (c.x || 0)) + "px"
          }
        }
        d = this.Xna;
        if (this.mQ && d.childNodes[0]) {
          for (b = a = 0; b < d.childNodes.length; b += 1) a += d.childNodes[0].clientHeight || 0;
          a > (this.get("size").height || d.clientHeight) ? this.mQ.style.right = "20px" : this.mQ.style.right = "5px"
        }
      }
    }, yda: function () {
      var a = new g.H(2 - this.sh.offsetWidth / 2, 2 - this.sh.offsetHeight), b = this.get("offset") || new g.H(0, 0),
        c = this.get("anchor");
      if (c) {
        var a = this.sh.offsetWidth, d = this.sh.offsetHeight, e, f, h = 2 - a / 2, k = 2 - d;
        c && (c = c.split("-"), 2 === c.length ? (e = c[1], f = c[0]) : 1 === c.length && "center" ===
          c[0] && (e = "center", f = "middle"));
        switch (e) {
          case "left":
            h = 2;
            break;
          case "right":
            h = -a
        }
        switch (f) {
          case "middle":
            k = -d / 2;
            break;
          case "top":
            k = -2
        }
        a = new g.H(h, k)
      }
      this.get("isCustom") || (a = a.add(new g.H(0, -23)));
      return a.add(b)
    }, altitudeChanged: function () {
      this.Gm()
    }, lX: function () {
      if (this.get("position") && this.get("autoMove") && this.sh) {
        for (var a = this.map, b = new g.xd(this.sh.offsetWidth, this.sh.offsetHeight), c = a.Ls(this.get("position"), this.get("altitude")).add(this.yda()), d = c.add(b.PE()), e = a.get("size"), f = a.sqa(),
               h = 0, k = 0, l = 0; l < f.length; l += 1) {
          var m = f[l], n = 0, p = 0;
          0 === m[1] && 0 === m[2] ? (n = m[3] - (c.x + h), p = m[0] - (c.y + k), 0 < n && 0 < p && (Math.abs(n) < Math.abs(p) ? h += n : k += p)) : 0 === m[2] && 0 === m[3] ? (n = e.zj() - m[1] - (d.x + h), p = m[0] - (c.y + k), 0 > n && 0 < p && (Math.abs(n) < Math.abs(p) ? h += n : k += p)) : 0 === m[0] && 0 === m[3] ? (n = e.zj() - m[1] - (d.x + h), p = e.wj() - m[2] - (d.y + k), 0 > n && 0 > p && (Math.abs(n) < Math.abs(p) ? h += n : k += p)) : 0 === m[0] && 0 === m[1] && (n = m[3] - (c.x + h), p = e.wj() - m[2] - (d.y + k), 0 < n && 0 > p && (Math.abs(n) < Math.abs(p) ? h += n : k += p))
        }
        c = c.add(new g.H(h, k));
        d = d.add(new g.H(h,
          k));
        l = f = 0;
        0 > c.x || b.zj() > e.zj() ? f = 20 - c.x : e.zj() < d.x && (f = e.zj() - d.x - 25);
        0 > c.y || b.wj() > e.wj() ? l = 5 - c.y : e.wj() < d.y && (l = e.wj() - d.y - 15);
        f += h;
        l += k;
        if (f || l) a.B.D = !0, a.B.panBy(f, l), a.B.D = !1
      }
    }, Kna: function () {
      this.get("closeWhenClickMap") && (this.map.h("clickstart", this.w_, this, !1), this.map.h("clickend", this.v_, this, !1))
    }, w_: function () {
      this.tf.ti && (this.tf.D = !0, this.tf.getIsOpen() && (this.tf.mL = !0), this.tf.D = !1)
    }, v_: function () {
      this.tf.ti && (this.tf.mL && (this.tf.D = !0, this.tf.close(), this.tf.D = !1), this.tf.mL = !1)
    },
    kg: function () {
      this.Rc && this.map && (this.tf.mL = !1, this.get("closeWhenClickMap") && (this.map.G("clickstart", this.w_, this), this.map.G("clickend", this.v_, this)), this.get("retainWhenClose") ? this.map.Nl.appendChild(this.Rc) : (this.Rc.parentNode === this.map.Xa.C && this.map.Xa.C.removeChild(this.Rc), this.tf.C = null), this.map = null, this.tf.ti = !1, this.Kb.q("close", {
        type: "close",
        target: this.Kb
      }))
    }, YBa: function () {
      if (!this.get("isCustom")) return this.sh.offsetWidth;
      for (var a = this.ji, b = a.firstChild, c = a.lastChild; b && c &&
      b.style && c.style && b === c;) a = b, b = a.firstChild, c = a.lastChild;
      a = g.g.Vc(a, "width");
      return a = parseInt(a.replace("px", ""), 10)
    }, renderChanged: function () {
      this.Gm()
    }, positionChanged: function () {
      this.map && this.Rc && (this.Gm(), this.lX())
    }, anchorChanged: function () {
      this.positionChanged()
    }, offsetChanged: function () {
      this.positionChanged()
    }, contentChanged: function () {
      this.ut();
      this.yV();
      this.Gm()
    }, sizeChanged: function () {
      this.ut();
      this.yV();
      this.Gm()
    }
  });
  g.Aa = {};
  g.Aa.Qe = g.da.extend({
    ka: [g.va, g.$e], A: function () {
    }, ev: function () {
      var a = this.Kd();
      a.rh || (a.rh = g.I.Ai(a));
      return a.rh
    }, cb: function () {
      return new this.A(this.za)
    }, uR: function () {
      return this.za
    }, setCoords: function (a) {
      this.R8(a)
    }, R8: function (a) {
      this.Lv = this.Kd();
      this.Bg = null;
      if (g.Aa.xp && this instanceof g.Aa.xp) {
        var b = a.length;
        this.he = this.he.slice(0, b);
        for (var c = 0; c < b; c += 1) if (this.he[c]) this.he[c].R8(a[c]); else {
          var d = new g.Aa.Ec(a[c]);
          this.he[c] = d
        }
      } else if (g.Aa.Ec && this instanceof g.Aa.Ec) {
        b = a.length;
        this.Vf =
          Array(b);
        for (var e, c = 0; c < b; c += 1) if (d = a[c], e = new g.Aa.XL(d), this.Vf[c] = e, 0 === c) {
          if (0 === d.length) break;
          e.vq(d) || d.reverse()
        } else 0 !== d.length && e.vq(d) && d.reverse()
      } else this.za = a
    }
  });
  g.Aa.Re = g.extend({}, {
    Uw: "point",
    TL: "linestring",
    mW: "linearring",
    FF: "polygon",
    dM: "multipoint",
    cM: "multilinestring",
    BF: "multipolygon",
    CAa: "geometrycollection"
  });
  g.di = g.da.extend({
    ka: [g.va, g.$e], A: function (a) {
      a = a || {};
      a.wB && (this.wB = a.wB);
      a.XN && (this.XN = a.XN);
      a.FZ && (this.FZ = a.FZ);
      this.map = a.map;
      this.gm = a.yN || g.a.xb(this);
      this.name = a.name || "";
      this.qe = !1;
      this.set("visible", !0, !0);
      this.AU(a.W);
      this.wl = a.iL;
      this.style = a.style
    }, Ooa: function () {
      this.name = this.map = null;
      this.style = this.wl = this.wo = this.e6 = this.W = this.W.Oa = null;
      this.Al();
      this.wi()
    }, mra: function () {
      return this.wl
    }, Exa: function (a) {
      this.wl = a;
      this.zIndex = this.wl[0].Lk || this.zIndex
    }, fc: function () {
      return this.W
    },
    AU: function (a) {
      a && (this.W = a, this.X("coords", a, !0), this.wB || this.XN) && (a.X("radius", this), a.X("center", this), a.X("resolution", this), a.X("strokeWeight", this))
    }, setStyle: function (a) {
      this.Exa(a);
      this.ss()
    }, coordsChanged: function () {
      this.ss()
    }, radiusChanged: function () {
      this.W.Lv = this.W.Kd();
      this.W.Bg = null;
      this.ss()
    }, ss: function (a) {
      this.set("feature", {target: this, Eoa: a, Lv: this.W.Lv || this.W.Kd(), oua: this.W.Kd()});
      this.W.Lv = this.W.Kd()
    }, visibleChanged: function () {
      this.ss()
    }, GEa: function (a) {
      for (var b = 0; b < this.wl.length; b +=
        1) {
        var c = this.wl[b];
        if (a.gb(c.ty(this))) return c
      }
    }, Aqa: function () {
      var a = this.fc(), b = [];
      a.Bi() === g.Aa.Re.FF || a.Bi() === g.Aa.Re.BF ? b.push(new g.style.Ae.Ec({
        fillColor: "#78cdd1",
        ke: 0.2,
        strokeColor: "#122e29",
        ob: 0.5,
        qc: 1
      })) : a.Bi() === g.Aa.Re.TL || a.Bi() === g.Aa.Re.mW || a.Bi() === g.Aa.Re.cM ? b.push(new g.style.Ae.wp({
        color: "#888888",
        width: 1,
        zIndex: 10
      })) : a.Bi() !== g.Aa.Re.Uw && a.Bi() !== g.Aa.Re.dM || b.push(new g.style.Ae.fi({
        url: g.r.Fb + "/theme/v1.3/markers/0.png",
        width: 36,
        height: 36,
        rotation: 0,
        sIa: -12,
        uIa: -36,
        zIndex: 100
      }));
      return b
    }
  });
  g.di.xAa = "geometry";
  g.Aa.Pg = g.Aa.Qe.extend({
    A: function (a, b) {
      this.za = a;
      this.Cj = b;
      this.Bg = null
    }, Kd: function () {
      if (!this.Bg) {
        var a = this.za[0], b = this.za[1];
        if (this.Cj) this.Bg = [a, b, a, b]; else {
          var c = this.get("radius"), d = this.get("resolution") * this.get("strokeWeight") || 0,
            c = c ? c / Math.cos(Math.PI * this.get("center").Q / 180) : 0;
          this.Bg = [a - c - d, b - c - d, a + c + d, b + c + d]
        }
      }
      return this.Bg
    }, Bi: function () {
      return g.Aa.Re.Uw
    }
  });
  g.M = {canvas: {}, ae: {}, Ye: {}, Me: {}};
  g.M.Yb = g.da.extend({
    ka: [g.va, g.$e], A: function (a, b) {
      this.f = a;
      this.Cj = a.S.Cj;
      this.J = b;
      this.e = b.e;
      this.X("display", b)
    }, ck: function () {
      this.Jq && this.Jq();
      this.Al();
      this.e = this.J = this.f = null
    }, nq: function (a, b, c, d) {
      var e = this.zoom;
      c = [];
      var f = this.f;
      if (Math.floor(e) !== e) b(c, f); else {
        a = [a.x, a.y];
        if (f.om) {
          for (var e = f.eh, h = !0, k = [], l = 0; l < e.length; l += 1) {
            var m = e[l].Wg;
            if (m) if (m.parentNode && m.parentNode.parentNode && this.J && m.parentNode.parentNode !== this.J.Nl && "none" !== m.parentNode.style.display) {
              var n = g.g.Mo(m), m =
                n[0], n = n[1];
              if (m && n) {
                var p = Math.max(Math.abs(e[l].get("offset").x), Math.abs(e[l].get("offset").y)) + Math.max(m, n);
                f.Df = Math.max(f.Df, p);
                f.mg = Math.max(f.mg, p);
                e[l].width = m;
                e[l].height = n
              } else h = !1, k.push(e[l])
            } else h = !1, k.push(e[l])
          }
          h ? (f.om = !1, f.eh = []) : f.eh = k
        }
        e = Math.max(f.Df, f.rz || 0) * this.T;
        h = Math.max(f.mg, f.rz || 0) * this.T;
        k = 0;
        f.qz && (k = f.qz / Math.cos(Math.PI * this.e.get("center").Q / 180));
        h = Math.max(h, k || 0);
        e = Math.max(e, k || 0);
        if (e = f.An([a[0] - e, a[1] - h, a[0] + e, a[1] + h])) {
          for (var q in e) if (e.hasOwnProperty(q) &&
            (h = e[q], h.get("visible") && !h.get("noSelect"))) if (k = h.fc(), k instanceof g.Aa.Pg) if (this.Cj) {
            l = this.f.Em;
            l instanceof Array && (l = "number" === typeof h.hb.style && l[h.hb.style] ? l[h.hb.style] : l[0]);
            var m = l.size.width * this.T, n = l.size.height * this.T, p = l.anchor.x * this.T, r = l.anchor.y * this.T,
              k = k.za, s = l.rotation_, u = [a[0], a[1]];
            if (s) {
              var v = (a[0] - k[0]) / this.T, w = (a[1] - k[1]) / this.T, t = s, s = Math.cos(-t), x = Math.sin(-t),
                t = v * s - w * x, v = v * x + w * s;
              u[0] = k[0] + t * this.T;
              u[1] = k[1] + v * this.T
            }
            m = g.I.VP([[u[0] - m + p, u[1] - n + r], [u[0] + p, u[1] +
            r]]);
            g.I.Sd(m, k) && c.push(h)
          } else if ("undefined" !== typeof k.get("radius")) l = k.za, l = new g.H(l[0], l[1]), m = new g.H(a[0], a[1]), k = k.get("radius"), "px" === h.get("unit") ? m.He(l) / Math.pow(2, 20 - this.zoom) < k && c.push(h) : m.He(l) * Math.cos(h.get("center").Q * Math.PI / 180) <= k / this.Dq * Math.pow(2, 20 - this.zoom) && c.push(h); else if ("AMap.Text" == h.Tp) l = h.get("params"), l.visible && h.fa && g.g.HD(d, h.fa, "amap-markers") && c.push(h); else {
            if (l = h.get("params"), l.visible && h.fa) if (l.shape) for (k = k.za, s = l.Rp % 360, u = [a[0], a[1]], s && (v = (a[0] -
              k[0]) / this.T, w = (a[1] - k[1]) / this.T, t = Math.PI * s / 180, s = Math.cos(-t), x = Math.sin(-t), t = v * s - w * x, v = v * x + w * s, u[0] = k[0] + t * this.T, u[1] = k[1] + v * this.T), m = h.width * this.T, n = h.height * this.T, p = l.offset.x * this.T, r = l.offset.y * this.T, m = g.I.VP([[u[0] - m - p, u[1] - n - r], [u[0] - p, u[1] - r]]), k[0] instanceof Array || (k = [k]), n = k.length - 1; 0 <= n; n -= 1) {
              if (g.I.Sd(m, k[n])) {
                l.shape ? this.GD(h, u, k) && c.push(h) : c.push(h);
                break
              }
            } else g.g.HD(d, h.fa, "amap-markers") && c.push(h)
          } else k.Sd ? k.Sd(a) && c.push(h) : k.By && 1.8 * k.By(a) <= h.get("strokeWeight") *
            this.T && c.push(h);
          this.Cj ? c.sort(function (a, b) {
            return a.gm > b.gm ? -1 : 1
          }) : c.sort(function (a, b) {
            return a.get("isTop") ? -1 : b.get("isTop") ? 1 : a.get("zIndex") > b.get("zIndex") || a.get("zIndex") === b.get("zIndex") && a.gm > b.gm ? -1 : 1
          });
          b(c, f)
        } else b([], f)
      }
    }, GD: function (a, b, c) {
      var d = (b[0] - c[0][0]) / this.T;
      b = (b[1] - c[0][1]) / this.T;
      a = a.get("params");
      c = a.offset;
      var d = [d - c.x, b - c.y], e;
      a = a.shape;
      if ("circle" === a.w.type) {
        if (b = a.w.coords[0], c = a.w.coords[1], Math.sqrt((d[0] - b) * (d[0] - b) + (d[1] - c) * (d[1] - c)) <= a.w.coords[2]) return !0
      } else {
        if ("poly" ===
          a.w.type) return e = a.w.coords, e = this.jI(e), g.wd.Sd(d, e);
        if ("rect" === a.w.type) return e = a.w.coords, a = e[0], b = e[1], c = e[2], e = e[3], e = [[a, b], [c, b], [c, e], [a, e]], g.wd.Sd(d, e)
      }
      return !1
    }, jI: function (a) {
      for (var b = [], c = 0; c / 2 < a.length / 2; c += 2) b.push([a[c], a[c + 1]]);
      return b
    }, e4: function (a, b, c, d, e, f, h) {
      var k = ["position:absolute;"];
      k.push("top:" + Math.round(c) + "px;");
      k.push("left:" + Math.round(b) + "px;");
      k.push("width:" + Math.round(d) + "px;");
      k.push("height:" + Math.round(e) + "px;");
      1 > f && ("opacity" in a.style ? (k.push("opacity"),
        k.push(":"), k.push(f), k.push(";")) : 8 <= document.documentMode ? (k.push("-ms-filter:'progid:DXImageTransform.Microsoft.Alpha(opacity="), k.push(Math.ceil(100 * f)), k.push(")';")) : (k.push("filter:alpha(opacity="), k.push(Math.ceil(100 * f)), k.push(");")));
      k.push("z-index:" + h + ";");
      k.join("");
      g.g.S8(a, k.join(""))
    }
  });
  g.M.Rb = g.da.extend({
    ka: [g.va, g.$e], A: function (a) {
      this.e = a;
      this.type = "2D";
      this.Jj = g.a.vb(a.get("zoom"), 1);
      this.Nl = a.Nl;
      this.K = a.Xa.o;
      this.X("display", a);
      this.X("rotateEnable", a);
      this.X("style", a);
      this.X("zoom", a);
      this.X("hightlight", a)
    }, lT: function (a) {
      this.De = a || g.a.bl("ff" + this.e.De.slice(1))
    }, nq: function (a, b, c, d, e) {
      function f(a, d) {
        a.length && (k[g.a.indexOf(b, d)] = a);
        l -= 1;
        0 >= l && (c(k), l = 0)
      }

      for (var h = b.length, k = [], l = 0, m, n = [], p = 0; p < h; p += 1) m = b[p], (m instanceof g.o.ed || "AMap.LabelLayer" === m.CLASS_NAME) &&
      m.get("visible") && (n.push(this.zs(m)), l += 1);
      for (h = 0; h < n.length; h += 1) n[h].nq(a, f, d, e)
    }
  });
  g.R2 = {
    mD: function (a, b, c) {
      for (var d = null, e = null, f = 0, h = 0, k = 0, l = b.length; k < l; k++) {
        var m = b[k];
        if (m < a) d = c[m], f = m; else {
          e = c[m];
          h = m;
          break
        }
      }
      null === d ? (d = e, f = h) : null === e && (e = d, h = f);
      return {Hz: f, eK: h, Nq: d, WD: e}
    }, pra: function (a) {
      var b = this, c = g.a, d = [], e = {};
      c.Tb(a.nodes, function (a) {
        !1 !== a.value && null !== a.value && (e[a.zoom] = g.r.vc + "://" + a.value, d.push(a.zoom))
      });
      return function (a) {
        a = c.vb(a, 1);
        void 0 === e[a] && (e[a] = b.mD(a, d, e).Nq);
        return e[a]
      }
    }, Xqa: function (a) {
      var b = this, c = g.a, d = [], e = {}, f = a.transitional;
      c.Tb(a.nodes,
        function (a) {
          null !== a.value && !1 !== a.value && (e[a.zoom] = a.value, d.push(a.zoom))
        });
      return function (a) {
        a = c.vb(a, 1);
        if (void 0 === e[a]) {
          var k = b.mD(a, d, e);
          e[a] = f && "none" !== f && k.eK !== k.Hz && k.Nq !== k.WD ? c.D4(k.Nq, k.WD, (a - k.Hz) / (k.eK - k.Hz), f) : k.Nq
        }
        return e[a]
      }
    }, iqa: function (a) {
      var b = this, c = g.a, d = [], e = {};
      c.Tb(a.nodes, function (a) {
        null !== a.value && (e[a.zoom] = a.value, d.push(a.zoom))
      });
      return function (a) {
        a = c.vb(a, 1);
        void 0 === e[a] && (e[a] = b.mD(a, d, e).Nq);
        return e[a]
      }
    }, l4: function (a) {
      var b = this, c = g.a, d = [], e = {};
      c.Tb(a.nodes,
        function (a) {
          null !== a.value && (e[a.zoom] = a.value, d.push(a.zoom))
        });
      return function (a) {
        a = c.vb(a, 1);
        void 0 === e[a] && (e[a] = b.mD(a, d, e).Nq);
        return e[a]
      }
    }, qqa: function (a, b, c) {
      var d = this, e = g.a, f = [], h = {}, k = a.transitional;
      e.Tb(a.nodes, function (a) {
        a.value && (h[a.zoom] = e.ema(a.value, c ? "rgba" : "webgl"), f.push(a.zoom))
      });
      return function (a) {
        var b = null;
        a = e.vb(a, 1);
        if (void 0 === h[a]) {
          var b = d.mD(a, f, h), n = b.Nq;
          if (k && "none" !== k && b.Hz !== b.eK && b.Nq.join("") !== b.WD.join("")) for (var n = n.slice(0), p = (a - b.Hz) / (b.eK - b.Hz), q = 0, r =
            b.WD.length; q < r; q++) n[q] = e.D4(b.Nq[q], b.WD[q], p, k);
          h[a] = n
        }
        b = h[a];
        return c && b ? "rgba(" + b.join(",") + ")" : b || ""
      }
    }, Cz: function (a, b, c, d) {
      var e = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : {}, f;
      for (f in c) if (c.hasOwnProperty(f)) {
        var h = c[f];
        void 0 !== b[h] ? (b[h].nodes && 1 < b[h].nodes.length && b[h].nodes.sort(function (a, b) {
          return a.zoom - b.zoom
        }), a[f] = e.ysa ? {
          Ye: d.call(this, b[h], c[f]),
          canvas: d.call(this, b[h], c[f], !0)
        } : d.call(this, b[h], c[f])) : e.xsa && (a[f] = !0)
      }
    }, Rr: function (a, b) {
      for (var c = [], d = 0, e = a.length; d <
      e; d += 2) {
        var f = 0,
          f = "str" === b ? g.a.vb(parseInt(a.substr(d, 2), 16) / (0 === d ? 255 : 1), 3) : g.a.vb(parseInt(a.substr(d, 2), 16) / 255, 3);
        c.push(f)
      }
      return c.length ? (c.push(c.shift()), "str" === b ? "rgba(" + c.join(",") + ")" : c) : ""
    }, A7: function (a, b, c) {
      if (b[c]) console.log("customType repeat!!", c); else {
        var d = {}, e = {visible: "visible", KU: "showLabel", zk: "showIcon"},
          f = [["color", {color: "color"}, {opacity: "opacity"}], ["fillColor", {fillColor: "fillColor"}, {ke: "fillOpacity"}], ["strokeColor", {strokeColor: "strokeColor"}, {ob: "strokeOpacity"}],
            ["textFillColor", {kya: "textFillColor"}, {lya: "textFillOpacity"}], ["textStrokeColor", {nya: "textStrokeColor"}, {oya: "textStrokeOpacity"}], ["backgroundColor", {backgroundColor: "backgroundColor"}, {nma: "backgroundOpacity"}]],
          h = {fontSize: "fontSize"}, k = {fillWidth: "fillWidth", strokeWidth: "strokeWidth"};
        if (a.styles) {
          a = a.styles;
          this.Cz(d, a, e, this.iqa, {xsa: !0});
          this.Cz(d, a, h, this.l4, {Msa: !0});
          this.Cz(d, a, k, this.l4, {Msa: !0});
          h = 0;
          for (k = f.length; h < k; h++) {
            var l = f[h];
            a[l[0]] ? this.Cz(d, a, l[1], this.qqa, {ysa: !0}) : this.Cz(d,
              a, l[2], this.Xqa)
          }
          a.texture && (this.Cz(d, a, {Ua: "texture"}, this.pra), d.nd = [], g.a.Tb(a.texture.nodes, function (a) {
            a.value && d.nd.push(g.r.vc + "://" + a.value)
          }))
        } else {
          for (var m in e) if (e.hasOwnProperty(m)) {
            var n = e[m];
            d[m] = void 0 === a[n] ? !0 : a[n]
          }
          e = 0;
          for (m = f.length; e < m; e++) {
            var p = f[e], n = g.a.keys(p[1])[0], q = p[1][n], r = g.a.keys(p[2])[0], p = p[2][r];
            void 0 !== a[q] ? d[n] = {canvas: this.Rr(a[q], "str"), Ye: this.Rr(a[q])} : d[r] = a[p]
          }
          for (l in h) h.hasOwnProperty(l) && void 0 !== a[l] && (d[l] = a[l]);
          for (var s in k) k.hasOwnProperty(s) &&
          void 0 !== a[s] && (d[s] = a[s]);
          a.texture && (d.Ua = g.r.vc + "://" + a.texture)
        }
        b[c] = d
      }
    }, BT: function (a, b, c, d) {
      if (a) for (var e in a) if (a.hasOwnProperty(e) && g.a.lk(a[e], "object")) {
        var f = a[e], h = e;
        c && (h = c + ":" + e);
        if (f.detailedType) this.A7(f, b, h), this.BT(f.detailedType, b, h, f); else if (f.subType) this.BT(f.subType, b, h); else {
          if (void 0 !== f.code) {
            for (var k in d) d.hasOwnProperty(k) && !g.a.ka(["isDetailed", "detailedType", "styles"], k) && void 0 === f[k] && void 0 !== d[k] && (f[k] = d[k]);
            h = c + ":" + f.code
          }
          this.A7(f, b, h)
        }
      }
    }, vV: function (a) {
      if (!this.fq ||
        this.fq.zoom != a) {
        var b = g.a.Sh, c = {zoom: a}, d;
        for (d in this.Pf) if (this.Pf.hasOwnProperty(d)) {
          var e = this.Pf[d];
          c[d] = {};
          for (var f in e) if (e.hasOwnProperty(f)) {
            var h = e[f];
            h ? h.Ye ? (c[d][f] = {}, b(h.Ye) ? c[d][f].Ye = h.Ye(a) : c[d][f].Ye = h.Ye, b(h.canvas) ? c[d][f].canvas = h.canvas(a) : c[d][f].canvas = h.canvas) : b(h) ? c[d][f] = h(a) : c[d][f] = h : c[d][f] = h
          }
        }
        this.fq = c
      }
    }, styleChanged: function () {
      if (this.e.B.Ei) {
        var a = this.get("style");
        this.mm.RA || (this.mm = g.a.bind(this.mm, this), this.lq = g.a.bind(this.lq, this), this.mm.RA = !0);
        var b =
          g.a;
        if (a) {
          var c = {};
          this.BT(a, c);
          this.Pf = c
        } else this.Pf = null;
        var d, e, f, h;
        this.Pf && (d = this.Pf["regions:land"], e = this.Pf.water, f = this.Pf.sky, h = this.Pf.buildings);
        var k, l, m, n, p, a = this.Jj;
        if (d) {
          c = "rgba(0, 0, 0, 0)";
          if (d.visible) {
            var q = this.lq(b.A8(this.e.De.substr(1)), d.opacity, d.color, !0, a);
            q && (c = this.oA(q, d.visible, "rgba(0, 0, 0, 0)"), q = this.mm(b.dt(this.e.De.substr(1)), d.opacity, d.color, !0, a), k = this.oA(q, d.visible))
          }
          this.e.Nu = c
        } else this.e.Nu = "";
        e && e.visible && (l = this.mm(b.dt(this.e.NH.substr(1)), e.opacity,
          e.color, !0, a), l = this.oA(l, e.visible));
        f && f.visible && (m = this.mm(b.dt(this.e.dC.substr(1)), void 0, f.color, !0, a), m = this.oA(m, f.visible));
        h && (h.visible ? (n = this.mm(b.bl(this.e.WF[0]), void 0, h.fillColor, !0, a), n = this.oA(n, h.visible), p = this.mm(b.bl(this.e.WF[1]), void 0, h.strokeColor, !0, a), p = this.oA(p, h.visible)) : (n = [1, 1, 1, 0], p = [1, 1, 1, 0]));
        this.lT && this.lT(k, l, m, [n, p]);
        this.q$ ? this.q$(this.Pf) : this.set("display");
        delete this.fq;
        this.vV(a)
      }
    }, oA: function (a, b) {
      var c = 2 < arguments.length && void 0 !== arguments[2] ?
        arguments[2] : [0, 0, 0, 0], d = g.a.Sh;
      if (d(a) && d(b)) {
        var e = a;
        a = function (a) {
          return b(a) ? e(a) : c
        }
      }
      return a
    }, lq: function (a, b, c, d, e) {
      if (a) {
        if (void 0 !== b) return a = a.split(","), c = b, "function" === typeof b && (c = b(e)), a[3] = g.a.vb(c, 3) + ")", a.join(",");
        if (c) return "function" === typeof c.canvas ? d ? c.canvas : c.canvas(e) : c.canvas
      }
      return a
    }, mm: function (a, b, c, d, e) {
      if (a) {
        if (b) return c = b, "function" === typeof b && (c = b(e)), [a[0], a[1], a[2], g.a.vb(c, 3)];
        if (c) return "function" === typeof c.Ye ? d ? c.Ye : c.Ye(e) : c.Ye
      }
      return a
    }, kJ: function (a,
                     b, c) {
      var d = this.Pf;
      if (d) {
        this.fq && c && c == this.fq.zoom && (d = this.fq);
        if (b || 0 === b) if (b = d[a + ":" + b]) return b;
        return d[a]
      }
    }, km: function (a, b, c, d, e) {
      var f = null, h = a;
      d = d ? this.lq : this.mm;
      e = e || this.Jj;
      if (f = this.kJ(b, void 0, e)) if ("function" === typeof f.visible && !f.visible(e) || !1 === f.visible) h = ""; else {
        var h = 1, k = "";
        if (c) if (f.fillColor || f.ke) h = f.ke, k = f.fillColor; else {
          if (f.color || f.opacity) h = f.opacity, k = f.color
        } else if (f.strokeColor || f.ob) h = f.ob, k = f.strokeColor; else if (f.color || f.opacity) h = f.opacity, k = f.color;
        h = d(a,
          h, k, !1, e)
      }
      this.Cs === b && (h = this.gv(h || a));
      return h
    }, Vc: function (a, b, c) {
      var d = this.Pf;
      if (d) {
        this.fq && c && c == this.fq.zoom && (d = this.fq);
        if (b || 0 === b) if (b = d[a + ":" + b]) return b;
        return d[a]
      }
    }, kv: function (a, b) {
      var c = null;
      return c = this.Vc(a, void 0, b || this.Jj)
    }, xs: function (a, b, c, d) {
      c = c ? this.lq : this.mm;
      var e = null, f = a;
      d = d || this.Jj;
      (e = this.kJ(b, void 0, d)) && (f = "function" === typeof e.visible && !e.visible(d) || !1 === e.visible ? "" : c(a, e.opacity, e.color, !1, d));
      this.Cs === b && (f = this.gv(f || a));
      return f
    }, My: function (a, b, c, d, e,
                     f) {
      var h = a, k = b, l = c, m = !0, n = !0, p, q = 1;
      f = f || this.Jj;
      var r = this.kJ(d, e, f);
      r && ("function" === typeof r.visible && !r.visible(f) || !1 === r.visible || "function" === typeof r.KU && !r.KU(f) || !1 === r.KU ? (n = m = !1, h = k = l = "") : (h = this.lq(a, r.lya, r.kya, !1, f), k = this.lq(b, r.oya, r.nya, !1, f), l = this.lq(c, r.nma, r.backgroundColor, !1, f), m = "function" === typeof r.zk ? r.zk(f) : r.zk, r.fontSize && (p = "function" === typeof r.fontSize ? r.fontSize(f) : r.fontSize, p = 12 <= p ? p : 12, p = 22 >= p ? p : 22), p && g.l.Kc && (p *= 2)));
      f = !1;
      this.Cs === d ? f = !0 : void 0 !== e && this.Cs ===
        d + "-" + e && (f = !0);
      f && (h = this.gv(h || a), k = this.gv(k || b), l = this.gv(l || c), q = 1 - 1.6 * this.zD, n = m = !0);
      return [h, k, l, m, n, q, p]
    }, Ly: function (a, b, c, d, e) {
      var f = null, h = a, k = b;
      d = d ? this.lq : this.mm;
      var l = e || this.Jj;
      if (f = this.kJ(c, void 0, e)) "function" === typeof f.visible && !f.visible(l) || !1 === f.visible ? h = k = "" : (h = d(a, f.ke, f.fillColor, !1, l), k = d(b, f.ob, f.strokeColor, !1, l));
      this.Cs === c && (b = k || b, h = this.gv(h || a), k = this.gv(b));
      return [h, k]
    }
  };
  g.M.Rb.Gb(g.R2);
  g.M.canvas.Rb = g.M.Rb.extend({
    A: function (a) {
      arguments.callee.ma.apply(this, arguments)
    }, zs: function (a) {
      if (!a.M) {
        var b = a.am(this);
        b && !b.hoa && (a.M = b)
      }
      return a.M
    }, pc: function (a) {
      var b = this.e.L3();
      b && this.VT !== b && this.e.B.Ei && (this.e.Q8(b), this.VT = b);
      this.e.Xa.Xr.style.cssText = "";
      var c = a.la, b = a.P, d = this.e.B.get("features"), e = a.size.width, f = a.size.height;
      this.Jj = "vw" === this.e.B.Ce.baseRender ? g.a.vb(b.zoom, 1) : a.P.me;
      this.T = b.T;
      if (!this.Na || 1E4 < Math.abs(b.lb.x - this.Na.x) / this.T || 1E4 < Math.abs(b.lb.y - this.Na.y) /
        this.T) this.Na = b.lb;
      this.Na.x - b.lb.x < -g.a.Fa / 2 ? this.Na = new g.H(this.Na.x + g.a.Fa, this.Na.y) : this.Na.x - b.lb.x > g.a.Fa / 2 && (this.Na = new g.H(this.Na.x - g.a.Fa, this.Na.y));
      for (var h = 0; h < c.length; h += 1) {
        var k = c[h], l = this.zs(k), m = c[h].le();
        if (l && l.f) if (!m.visible || k.XD || m.Ya[0] > b.zoom || m.Ya[1] < b.zoom || k.ga && 0 === k.ga.length) {
          if (l = l.yj()) if (l.length) for (m = 0; m < l.length; m += 1) l[m].parentNode === this.K && this.K.removeChild(l[m]); else l.parentNode === this.K && this.K.removeChild(l)
        } else if (this.JJ(k, d)) {
          l.pc(a, m);
          l.mk &&
          (a.se = l.se);
          var k = l.yj(), n, p, q = l.transform;
          if (!q || !k || l.bh && !this.e.B.La) c[h].Bj && k.parentNode !== this.K && (this.K.appendChild(k), c[h].Mb = k); else {
            c[h].Mb = k;
            k.length || (k = [k], q = [q]);
            for (var r = 0; r < k.length; r += 1) if (n = k[r], p = q[r], !p.Zy) {
              var s = p.translate.x, u = p.translate.y;
              c[h].IJ || (s = g.a.vb(s, 2), u = g.a.vb(u, 2));
              var v = p.scale;
              1E-5 > Math.abs(s) && (s = 0);
              1E-5 > Math.abs(u) && (u = 0);
              var w = [];
              w.push("position:absolute");
              w.push("z-index:" + (p.Lk || c[h].get("zIndex")));
              c[h].XC ? (w.push("top:" + Math.floor(f / 2 + u) + "px"), w.push("left:" +
                Math.floor(e / 2 + s) + "px")) : n.J5 ? (w.push("height:" + n.height * v + "px"), w.push("width:" + n.width * v + "px"), w.push("top:" + (f / 2 - u * v) + "px"), w.push("left:" + (e / 2 - s * v) + "px")) : (1 !== v && (w.push(g.g.pt[g.g.tg] + "-origin:" + s + "px " + u + "px"), w.push(g.g.pt[g.g.tg] + ":scale3d(" + v + "," + v + ",1)")), w.push("top:" + Math.floor(f / 2 - u) + "px"), w.push("left:" + Math.floor(e / 2 - s) + "px"), w.push("display:block"), l.ok && (w.push("height:" + n.height + "px"), w.push("width:" + n.width + "px")));
              l.IJ || 1 === m.opacity || "number" !== typeof m.opacity || w.push(g.g.n4(n,
                m.opacity));
              n.parentNode !== this.K && this.K.appendChild(n);
              g.g.S8(n, w.join(";"))
            }
          }
        }
      }
      a = this.e.Xa.Xr;
      k = this.e.Xa.o;
      c = this.e.Xa.C;
      g.g.tg && "number" === typeof b.rotation && 0 !== b.rotation ? (a.style[g.g.tg + "Origin"] = e / 2 + "px " + f / 2 + "px", a.style[g.g.tg] = "rotate(" + b.rotation + "deg)", a.style.overflow = "visible", k.style.overflow = "visible", c.style.overflow = "visible") : (a.style.cssText = "", k.style.cssText = "-webkit-transform: translateZ(0);", c.style.cssText = "");
      this.e.it = !1
    }, JJ: function (a, b) {
      if ("all" === b || void 0 === a.Xl) return !0;
      for (var c = 0, d = a.Xl.length; c < d; c++) if (g.a.ka(b, "region" === a.Xl[c] ? "bg" : a.Xl[c])) return !0;
      return !1
    }, zoomChanged: function () {
      var a = this.e.get("zoom");
      this.Jj = "vw" === this.e.B.Ce.baseRender ? g.a.vb(a, 1) : Math.round(a);
      this.Pf && this.vV(this.Jj)
    }
  });
  g.M.Vi = g.M.Yb.extend({
    A: function (a, b) {
      arguments.callee.ma.apply(this, arguments);
      this.X("reload", a, !0);
      var c = a.S.get("cacheSize");
      if (this.e && this.e.B) {
        var d = this.e.B.get("tileCacheSize");
        d && 0 < d && (c = d)
      }
      this.oa = new g.sg(c);
      var e = this;
      this.oa.mK.G1(function (a) {
        e.cB(a)
      });
      this.oa.yC = function (a) {
        return a.Pb ? (a.Pb.kj -= 1, 0 == a.Pb.kj && (a.zv = !1), delete a.Pb, !0) : a.zv ? a.kj ? !1 : !0 : !0
      };
      this.gd = 1;
      this.bo = 50;
      this.nX = !0;
      this.f.oa = this.oa;
      this.sm = new g.xF(6, null, a.YQ);
      new g.xF(5, null, a.YQ)
    }, Jq: function () {
      this.clear();
      this.Mg = null;
      this.oa.clear();
      this.oa.yC = null;
      this.oa = this.oa.mK.SF = null;
      this.Lc && (this.Lc.G("tiles", this.bE, this), this.Lc.G("ack", this.aE, this), this.Lc.G("disable", this.ZD, this), this.Lc = null);
      this.e.G("zoomend", this.ek, this);
      this.e.G("moveend", this.ek, this)
    }, reloadChanged: function () {
      this.f && (this.f.La = !1);
      this.oa.clear();
      this.reload = !0;
      this.set("display")
    }, Ah: function (a, b, c) {
      function d(b) {
        a.loaded = !0;
        e.f && (a.status = "loaded", a.Ba = !0, a.Fe = b, e.set("display", 0), "function" === typeof c && c())
      }

      var e = this;
      a.status = "loading";
      this.f.Do && this.f.Do.call(this, a, d, function () {
        a.loaded = !0;
        e.f && (a.status = "loaded", a.Ba = !0, "function" === typeof c && c())
      })
    }, THa: function (a, b, c, d) {
      var e = [];
      c = c || 18;
      b = Math.pow(2, b - c);
      for (var f = 0; f < a.length; f += 1) {
        var h = a[f].ta, k = Math.floor(h.x / b), h = Math.floor(h.y / b);
        if (d) {
          if (k = c + "/" + k + "/" + h, (h = this.oa.get(k)) && "loaded" == h.status) continue
        } else h = new g.pr(c, k, h), k = h + "", h = new g.qb(h);
        !e[k] && h && (e.push(h), e[k] = 1)
      }
      return e
    }, QI: function (a, b) {
      var c = this, d = this;
      if (this.f.xH) {
        var e, f, h, k, l, m,
          n, p = function () {
            var p = 0;
            for (e = a.length - 1; 0 <= e; e -= 1) f = a[e], p += f.length;
            if (0 == p) return b.call(c, a), {yL: void 0};
            d.dV = a;
            for (e = a.length - 1; 0 <= e; e -= 1) for (f = a[e], h = [], k = [], f.WT = h, f.Kv = k, l = f.length - 1; 0 <= l; l -= 1) m = f[l], n = m.ta, c.f.e.Te.ME(n.x, n.y, n.z, function () {
              var c = l;
              return function (e) {
                e ? h.push(f[c]) : k.push(f[c]);
                p -= 1;
                if (0 == p) {
                  for (e = a.length - 1; 0 <= e; e -= 1) {
                    var l = a[e];
                    a[e] = l.WT;
                    if (l.Kv) for (var m = l.Kv.length - 1; 0 <= m; m -= 1) {
                      var n = l.Kv[m];
                      n.status = "loaded";
                      n.loaded = !0;
                      n.Ba = !0
                    }
                  }
                  b.call(d, a)
                }
              }
            }())
          }();
        if ("object" === typeof p) return p.yL
      } else b.call(this,
        a)
    }, qw: function (a, b, c) {
      if (a = this.oa.get(a + "/" + b + "/" + c)) {
        if (a.zv) return a;
        if (a.Pb) return a.Pb;
        a.zv = !0;
        a.kj = 0;
        return a
      }
    }, nJ: function (a) {
      var b = a.ta;
      a = b.x;
      var c = b.y, b = b.z, d = Math.pow(2, b), e = (a + d) % d, f = e + d, d = e - d, h = null;
      e !== a && (h = this.qw(b, e, c));
      h || d === a || (h = this.qw(b, d, c));
      h || f === a || (h = this.qw(b, f, c));
      return h
    }, Hn: function (a) {
      var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !1;
      if ((!this.mk || !this.hf && !this.fe) && a.length) if (this.LK) this.cK = !0; else {
        for (var c = a.length - 1; 0 <= c; c -= 1) {
          var d = a[c];
          if (d.length) for (var e =
            Math.pow(2, 20 - d[0].ta.z), c = d.length - 1; 0 <= c; c--) {
            var f = d[c], h = f.ta;
            h.T = e;
            f.ra = {};
            f.un = 0;
            if (10 > h.z) {
              var k = this.nJ(f);
              k && (f.Pb = k, f.status = "loaded", f.Ba = !0, k.kj += 1, f.un = (h.x - k.ta.x) / Math.pow(2, h.z), d.splice(c, 1), this.set("display", 0))
            }
            this.oa.set(f.key, f);
            !b && f.Ke ? f.Ke = !1 : f.status = "loading"
          }
        }
        var l = this;
        this.QI(a, function (a) {
          for (var c = a.length - 1; 0 <= c; c -= 1) {
            var d = a[c];
            if (d.length) if (l.Fi) {
              if (l.e.hA) break;
              var e = d[0].ta.z;
              l.ew(d, l.ok ? 1 : 0);
              for (var f = 0, h = 0; f < d.length;) l.XS(d.slice(10 * h, 10 * h + 10), e, b), f += 10,
                h += 1
            } else for (e = function () {
              var a = d.length;
              return function () {
                if (0 === --a) {
                  var b = {key: "rb", index: 0, id: l.e.B.id};
                  l.f.S.vk || (g.Be.nf.end(b), g.Be.nf.end(g.extend(b, {index: 1})))
                }
              }
            }(), l.ew(d), l.Aq += d.length, f = d.length - 1; 0 <= f; f -= 1) l.Ah(d[f], l.sm, e)
          }
        })
      }
    }, Sy: function (a, b) {
      var c = this.oa.get(a + "");
      c || b || (c = new g.qb(a.cb()));
      return c
    }, cL: function (a, b) {
      return this.Dd * Math.pow(2, a - b)
    }, cB: function (a) {
      a.Is && this.sm.m2(a.Is);
      a.QK = !1;
      a.loaded = !1;
      this.Qf && this.Qf(a)
    }, qy: function (a, b) {
      var c = (2 < arguments.length && void 0 !==
      arguments[2] ? arguments[2] : 0) || this.fb, d = a.Vd.x, e = a.Vd.y, f = a.kc.x, h = a.kc.y;
      new g.H(0, 0);
      var k = this.cL(20, c);
      b && (f = Math.max(b[0], f) - b[0], h = Math.max(b[1], h) - b[1], d = Math.min(b[2], d) - b[0], e = Math.min(b[3], e) - b[1], new g.H(Math.floor(b[0] / k), Math.floor(b[1] / k)));
      d /= k;
      e /= k;
      d = {
        Ic: 0 === d % 1 ? d - 1 : Math.floor(d),
        tc: 0 === e % 1 ? e - 1 : Math.floor(e),
        Jc: Math.floor(f / k),
        hc: Math.floor(h / k)
      };
      d.qE = d.Ic - d.Jc + 1;
      d.DK = d.tc - d.hc + 1;
      d.z = c;
      d.T = this.T * Math.pow(2, this.zoom - c);
      d.Uy = Math.ceil(d.qE / 2);
      return d
    }, uv: function (a, b, c) {
      return b <
      a.Jc || b > a.Ic || c < a.hc || c > a.tc ? !1 : !0
    }, ew: function (a, b) {
      if (a.length) {
        var c = this.lb.kd(this.Dd << 20 - a[0].ta.z), d = Math.floor(c.x), e = Math.floor(c.y);
        a.sort(function (a, c) {
          var k = a.ta, l = c.ta, m = k.x - d, k = k.y - e, n = l.x - d, l = l.y - e;
          return (b ? -1 : 1) * (n * n + l * l - (m * m + k * k))
        })
      }
    }, clear: function () {
      this.sm.clear()
    }, hp: function (a, b) {
      this.zg = !1;
      this.clear();
      this.aj = b.aj;
      this.$i = b.$i;
      this.Dd = b.Dd;
      var c = a.P;
      this.Uf = b.Uf || a.P.Uf;
      this.rh = c.rh;
      this.size = a.size;
      this.rotation = c.rotation;
      this.lb = c.lb;
      this.Ha = a.P.Ha;
      this.Lf = a.Lf;
      this.fe =
        a.fe;
      this.hf = a.hf;
      this.zoom = c.zoom;
      this.me = c.me;
      this.fb = "AMap.MapBox" == this.f.S.CLASS_NAME ? Math.max(2, this.me - g.r.Xn) : !1 === this.Fi && !this.f.qS && this.f.ja ? this.me + 1 : this.me;
      this.gf && this.fb > this.gf && (this.fb = this.gf);
      this.Zo && this.fb < this.Zo && (this.fb = this.Zo);
      this.T = c.T;
      this.Kg = c.Kg;
      c = a.P.Ha;
      this.sk = this.qy(c, b.I);
      this.Gw = c.M$ ? this.qy(c.M$, b.I) : null;
      var c = this.sk, d = this.Ha.E9, e = null, e = d < this.zoom && this.Gw ? this.Gw : c, f = [], h = [], k, l = [],
        m = [], n = [], p = new g.pr(0, 0, 0), q, r = this.zoom, m = this.Sk || "", s = {}, u = {},
        v, w, t, x, y, F;
      this.de = 1E6 * Math.random() << 0;
      for (q = m.length - 1; 0 <= q; q -= 1) if (k = m[q], !(k.hx < b.opacity)) if (p.z = k.ta.z, p.x = k.ta.x, p.y = k.ta.y, p.z === this.fb) s[p + ""] |= 16; else if (p.z < this.fb) {
        if (s[p + ""] |= 64, this.aj) for (x = this.fb - p.z, v = Math.max(c.Jc, p.x << x), r = Math.min(c.Ic, (p.x + 1 << x) - 1), w = Math.max(c.hc, p.y << x), t = Math.min(c.tc, (p.y + 1 << x) - 1), p.z = this.fb, x = v; x <= r; x += 1) for (p.x = x, y = w; y <= t; y += 1) p.y = y, F = p + "", s[F] |= 32, u[F] = u[F] ? Math.max(k.ta.z, u[F]) : k.ta.z
      } else if (this.$i) for (v = 1; p.z >= this.fb;) {
        s[p + ""] |= v;
        v = p.x >> 1;
        w = p.y >>
          1;
        r = v << 1;
        t = w << 1;
        k = 0;
        for (x = 2; 0 < x; x -= 1) for (p.x = r + x, y = 2; 0 < y; y -= 1) p.y = t + y, s[p + ""] & 5 && (k += 1);
        p.z -= 1;
        p.x = v;
        p.y = w;
        v = 4 === k ? 4 : 2
      }
      m = [];
      p.z = this.fb;
      q = !0;
      this.oa.z2();
      for (x = e.Jc; x <= e.Ic; x += 1) for (p.x = x, y = e.hc; y <= e.tc; y += 1) p.y = y, k = this.Sy(p), this.bu(k), v = !1, k.Ba ? (k.de = this.de, this.uv(c, x, y) && (m.push(k), this.Pk && (k.gd !== this.gd || 1 > k.hx) && (v = !0))) : (q = !1, this.uv(c, x, y) && (v = !0), k.status && !k.Ke || this.me !== d || this.Gw && !this.uv(this.Gw, x, y) || l.push(k)), v && n.push(k);
      q ? (this.gD || (this.gD = !0), this.f.La || (k = {
        key: this.f.bh ?
          "rl" : "rb", index: 1, id: this.e.B.id
      }, this.f.S.vk || (g.Be.nf.end(k), g.Be.nf.push({key: "ftc", If: m.length, id: this.e.B.id})))) : this.f.La = !1;
      this.zg = q;
      m.length && this.gD && (f.push(m), m.zg = q);
      h.push(l);
      d = !1;
      if (this.$i) {
        n = n.slice(0);
        e = [];
        for (q = n.length - 1; 0 <= q; q -= 1) k = n[q], s[k.key] & 4 || e.push(k);
        k = b.Ya[1];
        for (r = this.fb + 1; n.length && r <= k; r += 1) {
          m = [];
          l = n;
          n = [];
          p.z = r;
          for (q = l.length - 1; 0 <= q; q -= 1) if (x = l[q], v = s[x.key], v & 7) for (v = x.ta.x << 1, w = x.ta.y << 1, x = 1; 0 <= x; x -= 1) for (p.x = v + x, y = 1; 0 <= y; y -= 1) p.y = w + y, F = p + "", t = this.oa.tK(F), s[F] &
          5 && t && t.Ba ? (t.IB = !0, t.de = this.de, m.push(t), this.bu(t)) : n.push(new g.qb(p.cb()));
          m.length && (d = !0, f.push(m))
        }
        n = e
      }
      if (!d && this.aj) for (x = !f.length || this.ok ? b.Ya[0] : Math.max(b.Ya[0], this.fb - 2), Math.max(x, this.fb - this.aha), r = this.fb - 1; n.length && r >= x; r -= 1) {
        m = [];
        y = {};
        l = n;
        n = [];
        for (q = l.length - 1; 0 <= q; q -= 1) k = l[q], p.z = r, p.x = k.ta.x >> 1, p.y = k.ta.y >> 1, k = this.Sy(p), y[k.key] || (y[k.key] = 1, v = !1, k.Ba && (!this.aja || s[k.key] & 64) ? (p.x = Math.min(c.Ic, Math.max(c.Jc, p.x << this.fb - r)), p.y = Math.min(c.tc, Math.max(c.hc, p.y << this.fb -
          r)), p.z = this.fb, F = p + "", "number" === typeof u[F] && k.ta.z > u[F] ? v = !0 : k.IB = !0, k.de = this.de, m.push(k), this.bu(k)) : v = !0, v && n.push(k));
        m.length && f.push(m)
      }
      this.dV = h;
      this.Fv = this.Aq = 0;
      this.Hn(h);
      this.Mg = f;
      this.f.set("tiles", f);
      this.Rv(a, b)
    }, bu: function (a) {
      this.oa.r6(a.xFa)
    }, KR: function (a, b) {
      for (var c = [], d = this.e.B.getCoordsBoundByZoom(a), d = this.qy(d, b, a), e = d.Jc; e < d.Ic; e++) for (var f = d.hc; f < d.tc; f++) {
        var h = [a, e, f].join("/");
        this.oa.Ld(h) || c.push(new g.qb(new g.pr(a, e, f), !0))
      }
      return c
    }, PM: function () {
      var a = this.e.B;
      return a.V7 && a.get("preloadMode") && 200 <= this.oa.Ip && this.f.S.wq() && "stable" != this.Lf && this.Yx && this.Yx() && this.zoom !== this.fb
    }, Rv: function (a, b) {
      var c = b.I, d = b.Ya;
      if (this.PM() && this.fb >= d[0] + 1) {
        var d = [], e = null, e = "zoomOut" === this.Lf ? Math.floor(this.zoom) : Math.ceil(this.zoom),
          e = this.KR(e, c);
        e.length && d.push(e);
        d.length && this.Hn(d, !0)
      }
    }
  });
  g.M.ae.Vi = g.M.Vi.extend({
    A: function (a, b) {
      arguments.callee.ma.apply(this, arguments);
      this.bo = 120;
      this.Fi = !1;
      this.$g();
      this.gf = a.gf;
      this.Zo = a.Zo
    }, yj: function () {
      return this.Mb
    }, $g: function () {
      this.Mb = document.createElement("div");
      this.Mb.className = this.f.S.get("className") || "amap-layer";
      this.bv = document.createDocumentFragment()
    }, Wv: function (a) {
      var b = Math.pow(2, a.P.zoom - this.Ff), c = a.P.lb.ab(this.Js).kd(this.zm);
      this.transform = {translate: this.transform.translate.add(c), scale: b, rotate: 0};
      this.lb = a.P.lb
    },
    TP: function (a, b) {
      this.Na = this.J.Na;
      this.Ff = this.me;
      this.zm = this.Kg;
      this.xe = !1;
      this.currentTime = +new Date;
      this.AV = b.AV;
      var c = this.sk;
      this.Pk = this.bo && b.bI;
      var d = this.Mg, e = 256 * c.qE, c = 256 * c.DK;
      this.fe = this.zoom << 0 !== this.zoom;
      var f = this.lb.ab(this.Na);
      f.x < -g.a.Fa / 2 ? f.x += g.a.Fa : f.x > g.a.Fa / 2 && (f.x -= g.a.Fa);
      this.fQ = f.kd(this.Kg);
      return [d, e, c, b]
    }, Mz: function (a, b) {
      var c = this.TP(a, b);
      this.at.apply(this, c);
      this.Pe(a);
      this.zg && !this.f.La && (c = this.f, c.S.vk || g.Be.nf.end({key: "rb", index: 2, id: this.e.B.id}), c.La =
        !0, c.Jd ? c.qa("renderComplete") : (c.Jd = !0, c.qa("complete")))
    }, pc: function (a, b) {
      this.sp = a.sp;
      this.hf = a.hf;
      this.hp(a, b);
      this.Js && g.l.Yl && (a.fe || a.hf) ? this.Wv(a, b) : this.Mz(a, b);
      this.Js = this.lb;
      this.xe && this.set("display", 0)
    }, Vv: function () {
      for (var a = this.Mb.childNodes, b = a.length - 1; 0 <= b; b -= 1) a[b] && a[b].gd !== this.gd && this.Mb.removeChild(a[b])
    }, pE: function (a, b) {
      return a.hc === b.hc && a.Jc === b.Jc && a.tc === b.tc && a.Ic === b.Ic
    }, at: function (a) {
      var b = this.gd;
      this.gd += 1;
      var c = !1, d, e, f;
      e = !1;
      var h = [], k, l;
      for (d = a.length -
        1; 0 <= d; d -= 1) if (f = a[d], f.length) {
        e = f[0].ta.z;
        var m, n, p = this.cL(this.me, e), q = !1;
        this.mk && f.zg && f[0].ta.z == this.fb && (k = [], l = [], q = !0);
        for (var r = f.length - 1; 0 <= r; r -= 1) {
          n = f[r];
          q && n.ga && (k.push.apply(k, n.ga), l.push(n.ta + ""));
          this.mU(n);
          if (this.Na === n.Na && n.Ff === this.Ff) {
            var s = n.Fe;
            if (s && s.parentNode === this.Mb && 1 === n.hx) {
              h.push(n);
              s.gd = this.gd;
              n.gd = this.gd;
              continue
            }
          }
          n.Na = this.Na;
          n.Ff = this.Ff;
          m = n.ta;
          var c = !0, u = (new g.H((m.x << 20 - e) * this.Dd, (m.y << 20 - e) * this.Dd)).ab(this.Na),
            u = u.kd(this.Kg);
          u.x = g.a.vb(u.x, 1);
          u.y = g.a.vb(u.y, 1);
          var v = 1;
          if (!n.iY || this.nX && n.gd !== b) n.iY = this.currentTime;
          this.Pk && !n.IB ? (s = Math.max(0, Math.abs(m.z - this.zoom) - 1), v = Math.min(1, (this.currentTime - n.iY) / (1 / Math.pow(1.32, s) * this.bo)), 1 !== v && (this.xe = !0)) : n.IB = !1;
          n.gd = this.gd;
          n.hx = v;
          n.Ba ? (s = n.Fe, !s && n.Pb && n.Pb.Fe && (s = n.Pb.Fe), 0 !== v && s && (this.e4(s, u.x, u.y, p, p, v, m.z), s.parentNode !== this.Mb && (g.l.Ci && "overlayer" === this.f.get("type") && (s.style.display = "none"), this.bv.appendChild(s)), s.gd = this.gd, n.me = this.me, h.push(n))) : n.de = null
        }
        e = !0
      }
      this.mk &&
      k && (r = l.sort().join(";"), k.KS = r, r !== this.se.KS && (this.se = k));
      1 < a.length && (this.xe = !0);
      this.Sk = h;
      this.Vv();
      this.Mb.appendChild(this.bv);
      return c || !e
    }, mU: function () {
    }, Pe: function () {
      this.transform = {translate: this.fQ, scale: Math.pow(2, this.zoom - this.me), rotate: 0}
    }
  });
  window.CanvasRenderingContext2D && (window.CanvasRenderingContext2D.prototype.EQ = function (a, b, c, d, e) {
    "undefined" === typeof e && (e = [10, 10]);
    this.moveTo(a, b);
    var f = c - a, h = d - b, k = Math.floor(Math.sqrt(f * f + h * h));
    d = f / k;
    c = h / k;
    e.Ig = 0;
    for (var l = [], f = this.vI, m = 0, n = 0, p = !1, q = h = 0; q < e.length; q += 1) e.Ig += e[q], l[q] = {
      bD: e[q] * d,
      cD: e[q] * c,
      fz: h += e[q]
    }, f -= e[q], 0 > f && !p && (m = q, n = -f, p = !0);
    for (p = 0; n + p <= k;) n < e[m] ? (f = n * d, h = n * c) : (f = l[m].bD, h = l[m].cD), a += f, b += h, this.GE ? this.moveTo(a, b) : this.lineTo(a, b), p += n, this.GE = !this.GE, n = e[(m + 1) %
    e.length], m = (m + 1) % e.length;
    k -= p;
    a += k * d;
    b += k * c;
    this.GE ? this.moveTo(a, b) : this.lineTo(a, b);
    this.vI = (this.vI + p + k) % e.Ig
  }, window.CanvasRenderingContext2D.prototype.uoa = function (a, b, c, d) {
    "undefined" === typeof d && (d = [10, 10]);
    var e = 2 * Math.PI * c, f = 0 >= d ? e : Math.round(e / (d[0] + d[1])), h = (d[0] + d[1]) / e * 2 * Math.PI;
    d = d[0] / e * 2 * Math.PI;
    for (e = 0; e < f; e += 1) this.beginPath(), this.arc(a, b, c, e * h, e * h + d), this.stroke()
  });
  g.M.Me.Il = g.M.Vi.extend({
    A: function (a, b) {
      arguments.callee.ma.apply(this, arguments);
      this.$g()
    }, OR: function () {
      return this.Za.VU
    }, yj: function () {
      return this.Mb
    }, $g: function () {
      this.Mb = document.createElement("div");
      this.Mb.className = "amap-markers";
      this.Za = new g.M.Me.ed(this.Mb);
      this.Za.f = this.f;
      this.J.K.appendChild(this.Mb)
    }, vt: function (a, b) {
      this.bv = b.bv;
      this.iz = b;
      this.Uf = a.P.Uf;
      this.T = a.P.T;
      this.zoom = a.P.zoom;
      this.size = a.size;
      this.Ha = a.P.Ha;
      this.Dq = a.T;
      this.mb = a.P.lb;
      this.rh = a.P.rh;
      var c = !1;
      if (!this.Na ||
        500 < Math.abs(this.mb.x - this.Na.x) / this.T || 500 < Math.abs(this.mb.y - this.Na.y) / this.T) c = !0;
      if (c || this.zoom << 0 !== this.zoom || this.Ff !== this.zoom) this.Na = this.mb, this.Ff = this.zoom
    }, jv: function (a) {
      var b = a.P.Ha.Bc.y * this.T;
      a = a.P.Ha.Bc.x * this.T;
      return [this.mb.x - a, this.mb.y - b, this.mb.x + a, this.mb.y + b]
    }, Vv: function () {
      if (this.Vh && this.Vh) for (var a in this.Vh) if (this.Vh.hasOwnProperty(a)) {
        var b = this.Vh[a];
        b.de !== this.de && b.fa && this.J.Nl.appendChild(b.fa)
      }
    }, pc: function (a, b) {
      this.de = 1E6 * Math.random() << 0;
      this.vt(a,
        b);
      this.P = a.P;
      this.size = a.size;
      var c = this.f;
      this.Dd = 256;
      var d, e;
      e = this.jv(a);
      var f = 0;
      c.om && (f = 50 * this.T);
      e[0] -= this.f.Df * this.T + f;
      e[1] -= this.f.mg * this.T + f;
      e[2] += this.f.Df * this.T + f;
      e[3] += this.f.mg * this.T + f;
      c = c.An(e);
      for (d in c) c.hasOwnProperty(d) && (c[d].de = this.de, c[d].e6 = this);
      this.Vv(c);
      this.vt.call(this.Za, a, b);
      this.Za.vE(c);
      this.Vh = c;
      this.Pe(a)
    }, Pe: function () {
      var a = Math.pow(2, this.zoom - this.me);
      this.transform = {translate: this.Na.ab(this.mb).kd(this.T), scale: a, rotate: 0}
    }
  });
  g.M.Me.ed = g.da.extend({
    A: function (a) {
      this.rl = a
    }, vE: function (a, b) {
      var c = document.createDocumentFragment(), d = b && b.CS ? null : {}, e = !0, f;
      for (f in a) if (a.hasOwnProperty(f)) {
        var h = a[f], k, l = h.get("params");
        if (h.fa) k = h.fa; else {
          k = g.g.create("div");
          k.className = "amap-marker";
          var m = l.Wg, n = l.d9, p = l.LJ;
          m && k.appendChild(m);
          n && k.appendChild(n);
          p && !1 !== m.CM && k.appendChild(p);
          h.fa = k;
          h.Wg = m;
          if (n = l.title) m.title = n;
          this.f.om = !0;
          -1 === g.a.indexOf(this.f.eh, h) && this.f.eh.push(h);
          h.qe = !0
        }
        var p = l.offset, q = p.x, r = p.y, s = l.textAlign,
          u = l.verticalAlign, n = l.anchor, m = !1, v, w;
        n && (n = n.split("-"), 2 === n.length ? (s = n[1], u = n[0]) : 1 === n.length && "center" === n[0] && (s = "center", u = "middle"));
        var t, n = t = 0;
        if ("AMap.Text" == h.Tp || "AMap.Marker" == h.Tp) {
          if (w = v = 0, k.parentNode !== this.rl && d && (m = !0, d[f] = h, e = !1), !m) {
            h.qe || !h.Zj ? (t = g.g.Mo(h.Wg), h.Zj = t) : t = h.Zj;
            n = t[0];
            t = t[1];
            switch (s) {
              case "center":
                v = n / 2;
                break;
              case "right":
                v = n
            }
            switch (u) {
              case "middle":
                w = t / 2;
                break;
              case "bottom":
                w = t
            }
            q -= v;
            r -= w
          }
        } else v = -q, w = -r;
        var x, y;
        if (!m) if (h.qe) {
          var F = [];
          x = this.Ku(h.W.za);
          h.Na =
            this.Na;
          y = l.oF;
          r = Math.round(x[1] + r + y.y);
          q = Math.round(x[0] + q + y.x);
          F.push("top:" + r + "px");
          F.push("left:" + q + "px");
          F.push("z-index:" + (l.Q5 ? this.f.fr + 10 : l.zIndex));
          if (!g.l.Ie) {
            r = v;
            q = w;
            if ("AMap.Marker" == h.Tp) {
              r = -p.x;
              q = -p.y;
              switch (s) {
                case "center":
                  r = -p.x + n / 2;
                  q = -p.y + t / 2;
                  break;
                case "right":
                  r = -p.x + n
              }
              switch (u) {
                case "middle":
                  q = -p.y + t / 2;
                  break;
                case "bottom":
                  q = -p.y + t
              }
            }
            F.push(g.g.A4(k, l.Rp, {x: r, y: q}))
          }
          F.push("display:" + (l.visible ? "block" : "none") + ";");
          k.style.cssText = F.join(";");
          if ((p = l.label) && p.content) {
            l = l.LJ;
            s =
              p.direction;
            r = null;
            h.Cv || (r = g.g.Mo(l), h.Cv = r);
            u = (r = h.Cv) && r[0];
            w = r && r[1];
            q = r = 0;
            if (s && u && w) switch (s) {
              case "top":
                r = -w;
                q = (n - u) / 2;
                break;
              case "right":
                r = (t - w) / 2;
                q = n;
                break;
              case "bottom":
                r = t;
                q = (n - u) / 2;
                break;
              case "left":
                r = (t - w) / 2;
                q = -u;
                break;
              case "center":
                r = (t - w) / 2, q = (n - u) / 2
            }
            p.offset ? (r = r + p.offset.y + "px", q = q + p.offset.x + "px") : (r += "px", q += "px");
            l.style.top = r;
            l.style.left = q
          }
        } else if (h.bba || this.zoom << 0 !== this.zoom || h.zoom !== this.zoom || k.parentNode !== this.rl || h.Na !== this.Na) x = this.Ku(h.W.za), h.Na = this.Na, y = l.oF,
          r = Math.round(x[1] + r + y.y), q = Math.round(x[0] + q + y.x), k.style.top = r + "px", k.style.left = q + "px";
        h.zoom = this.zoom;
        k.parentNode !== this.rl && (g.l.Ci && g.a.iepngFix(k), c.appendChild(k));
        h.qe = m;
        k.LB = this.rl
      }
      this.rl.appendChild(c);
      e || this.vE(d, {CS: !0})
    }, Ku: function (a) {
      var b = a[0] - this.Na.x;
      b > g.a.Fa / 2 ? b -= g.a.Fa : b < -g.a.Fa / 2 && (b += g.a.Fa);
      return [b / this.T, (a[1] - this.Na.y) / this.T]
    }
  });
  var Mc = g.r, Sc = g.l, fc = g.da.Ru, Tc = g.Lva, fa = document, Uc = !0, Vc = [];
  Sc.Yf && Vc.push("touch");
  Sc.ba || Vc.push("mouse");
  Sc.gL && (Vc.push("vectorlayer", "overlay"), Sc.qp ? Vc.push("wgl") : Vc.push("cgl"));
  if (Tc) {
    for (var Wc = [], Xc = Tc.split(","), Ic = 0; Ic < Xc.length; Ic += 1) {
      var Yc = Xc[Ic];
      fc[Yc] && Wc.push.apply(Wc, fc[Yc]);
      Wc.push(Yc)
    }
    Vc = Vc.concat(Wc)
  }
  Vc.push("sync");
  if (Sc.Gv) {
    var Zc = !0, $c = [], ad = [];
    try {
      for (var Ic = 0, bd = Vc.length; Ic < bd; Ic++) {
        var cd = JSON.parse(localStorage.getItem("_AMap_" + Vc[Ic]));
        if (cd && cd.version === Mc.Hk) $c.push(cd.script), cd.css && ad.push(cd.css); else {
          $c = void 0;
          Zc = !1;
          break
        }
      }
    } catch (dd) {
      $c = ad = void 0, Zc = !1
    }
    if (Zc) try {
      ad.length && ed();
      var fd = $c.join(";");
      eval(fd)
    } catch (gd) {
      Uc = !1
    } else Uc = !1
  } else Uc = !1;
  if (Uc) for (Ic = 0; Ic < Vc.length; Ic += 1) g.sb.QC(Vc[Ic]).status = 1; else Mc.PJ = !1, hd();

  function id() {
    for (var a = fa.getElementsByTagName("script"), b, c = 0; c < a.length; c += 1) if (0 === a[c].src.indexOf(Mc.Fb + "/maps?")) {
      b = a[c];
      break
    }
    return Mc.Nc || b && b.async
  }

  function hd() {
    var a = "/amap/webapi/maps/modules?v=" + Mc.nn + "&key=" + Mc.key + "&vrs=1617959106697" + "&m=" + Vc.join(",");
    id() ? jd(a) : (fa.write('<script crossorigin="anonymous" id="amap_plus_js" src="' + a + '" type="text/javascript">\x3c/script>'), setTimeout(function () {
      fa.getElementById("amap_plus_js") || jd(a)
    }, 1))
  }

  function jd(a) {
    var b = fa.createElement("script");
    b.charset = "utf-8";
    b.src = a;
    b.id = "amap_plus_js";
    (a = fa.head || fa.getElementsByTagName("head")[0] || fa.body) && a.appendChild(b)
  }

  function ed() {
    var a = ad.join("\n"), b = fa.createElement("style");
    b.type = "text/css";
    -1 === Mc.Fb.indexOf("webapi.amap.com") && (a = a.replace(/webapi.amap.com/gi, Mc.Fb.split("://")[1]));
    "https" === Mc.vc && (a = a.replace(/http:/gi, "https:"));
    if (b.styleSheet) {
      var c = function () {
        try {
          b.styleSheet.cssText = a
        } catch (c) {
        }
      };
      b.styleSheet.disabled ? setTimeout(c, 10) : c()
    } else b.appendChild(fa.createTextNode(a));
    c = fa.head || fa.getElementsByTagName("head")[0];
    2 > c.childNodes.length ? c.appendChild(b) : c.insertBefore(b, c.childNodes[1])
  }
  ;
  (typeof _cssload_ == "function") && _cssload_("logo", ".amap-logo{display:block!important;pointer-events:none;}", true)
})(["e38726e1590bc325faae7bb39767c31d", [110.517434, 39.588911, 112.311648, 41.387432, 111.670801, 40.818311], "http://webapi.amap.com", 1, "1.4.15", null, "150100", "AMap.MouseTool,AMap.RangingTool,AMap.MarkerClusterer,AMap.PlaceSearch,AMap.Autocomplete", true, false, false, true, "20210330011500-20201123-1", false, "B", "3_21_04_19_00", "", "/amap/webapi/"])
