 // OpenLayers 3. See http://openlayers.org/
// License: https://raw.githubusercontent.com/openlayers/ol3/master/LICENSE.md
// Version: v3.0.0-37-gad1f255

(function() {
    var k, m = this;
    function r(a) {
        return void 0 !== a
    }
    function aa() {
    }
    function ca(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array)
                    return "array";
                if (a instanceof Object)
                    return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c)
                    return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))
                    return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))
                    return "function"
            } else
                return "null";
        else if ("function" == b && "undefined" == typeof a.call)
            return "object";
        return b
    }
    function da(a) {
        return "array" == ca(a)
    }
    function ea(a) {
        var b = ca(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }
    function t(a) {
        return "string" == typeof a
    }
    function ga(a) {
        return "number" == typeof a
    }
    function ha(a) {
        return "function" == ca(a)
    }
    function ia(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }
    function v(a) {
        return a[ja] || (a[ja] = ++ka)
    }
    var ja = "closure_uid_" + (1E9 * Math.random() >>> 0), ka = 0;
    function ma(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }
    function na(a, b, c) {
        if (!a)
            throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }
    function z(a, b, c) {
        z = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ma : na;
        return z.apply(null, arguments)
    }
    function oa(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var b = c.slice();
            b.push.apply(b, arguments);
            return a.apply(this, b)
        }
    }
    var pa = Date.now || function() {
        return +new Date
    };
    function qa(a, b) {
        var c = a.split("."), d = m;
        c[0] in d || !d.execScript || d.execScript("var " + c[0]);
        for (var e; c.length && (e = c.shift()); )
            !c.length && r(b) ? d[e] = b : d[e] ? d = d[e] : d = d[e] = {}
    }
    function A(a, b) {
        function c() {
        }
        c.prototype = b.prototype;
        a.w = b.prototype;
        a.prototype = new c;
        a.gd = function(a, c, f) {
            return b.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2))
        }
    }
    ;
    var ra;
    function ta(a) {
        if (!ua.test(a))
            return a;
        -1 != a.indexOf("&") && (a = a.replace(va, "&amp;"));
        -1 != a.indexOf("<") && (a = a.replace(wa, "&lt;"));
        -1 != a.indexOf(">") && (a = a.replace(ya, "&gt;"));
        -1 != a.indexOf('"') && (a = a.replace(za, "&quot;"));
        -1 != a.indexOf("'") && (a = a.replace(Aa, "&#39;"));
        -1 != a.indexOf("\x00") && (a = a.replace(Ba, "&#0;"));
        return a
    }
    var va = /&/g, wa = /</g, ya = />/g, za = /"/g, Aa = /'/g, Ba = /\x00/g, ua = /[\x00&<>"']/;
    function Ca(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    }
    function Da() {
        return "transform".replace(/\-([a-z])/g, function(a, b) {
            return b.toUpperCase()
        })
    }
    function Ea(a) {
        var b = t(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
        return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, e) {
            return b + e.toUpperCase()
        })
    }
    ;
    var Fa = Array.prototype, Ga = Fa.indexOf ? function(a, b, c) {
        return Fa.indexOf.call(a, b, c)
    } : function(a, b, c) {
        c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
        if (t(a))
            return t(b) && 1 == b.length ? a.indexOf(b, c) : -1;
        for (; c < a.length; c++)
            if (c in a && a[c] === b)
                return c;
        return -1
    }, F = Fa.forEach ? function(a, b, c) {
        Fa.forEach.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = t(a) ? a.split("") : a, f = 0; f < d; f++)
            f in e && b.call(c, e[f], f, a)
    }, Ha = Fa.filter ? function(a, b, c) {
        return Fa.filter.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = [], f = 
        0, g = t(a) ? a.split("") : a, h = 0; h < d; h++)
            if (h in g) {
                var l = g[h];
                b.call(c, l, h, a) && (e[f++] = l)
            }
        return e
    }, Ia = Fa.map ? function(a, b, c) {
        return Fa.map.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = Array(d), f = t(a) ? a.split("") : a, g = 0; g < d; g++)
            g in f && (e[g] = b.call(c, f[g], g, a));
        return e
    };
    function Ja(a, b) {
        var c = Ga(a, b), d;
        (d = 0 <= c) && Fa.splice.call(a, c, 1);
        return d
    }
    function Ka(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++)
                c[d] = a[d];
            return c
        }
        return []
    }
    function La(a, b, c, d) {
        Fa.splice.apply(a, Ma(arguments, 1))
    }
    function Ma(a, b, c) {
        return 2 >= arguments.length ? Fa.slice.call(a, b) : Fa.slice.call(a, b, c)
    }
    function Na(a, b) {
        a.sort(b || Oa)
    }
    function Pa(a, b) {
        if (!ea(a) || !ea(b) || a.length != b.length)
            return !1;
        for (var c = a.length, d = Qa, e = 0; e < c; e++)
            if (!d(a[e], b[e]))
                return !1;
        return !0
    }
    function Oa(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }
    function Qa(a, b) {
        return a === b
    }
    ;
    var Sa;
    a: {
        var Ta = m.navigator;
        if (Ta) {
            var Ua = Ta.userAgent;
            if (Ua) {
                Sa = Ua;
                break a
            }
        }
        Sa = ""
    }
    function Va(a) {
        return -1 != Sa.indexOf(a)
    }
    ;
    var Wa, Xa, Ya = Va("Opera") || Va("OPR"), I = Va("Trident") || Va("MSIE"), Za = Va("Gecko") && -1 == Sa.toLowerCase().indexOf("webkit") && !(Va("Trident") || Va("MSIE")), J = -1 != Sa.toLowerCase().indexOf("webkit"), $a, ab = m.navigator || null;
    $a = ab && ab.platform || "";
    Wa = -1 != $a.indexOf("Mac");
    Xa = -1 != $a.indexOf("Win");
    var bb = -1 != $a.indexOf("Linux");
    function cb() {
        var a = m.document;
        return a ? a.documentMode : void 0
    }
    var db = function() {
        var a = "", b;
        if (Ya && m.opera)
            return a = m.opera.version, ha(a) ? a() : a;
        Za ? b = /rv\:([^\);]+)(\)|;)/ : I ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : J && (b = /WebKit\/(\S+)/);
        b && (a = (a = b.exec(Sa)) ? a[1] : "");
        return I && (b = cb(), b > parseFloat(a)) ? String(b) : a
    }(), eb = {};
    function K(a) {
        var b;
        if (!(b = eb[a])) {
            b = 0;
            for (var c = String(db).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                var g = c[f] || "", h = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), n = RegExp("(\\d*)(\\D*)", "g");
                do {
                    var q = l.exec(g) || ["", "", ""], s = n.exec(h) || ["", "", ""];
                    if (0 == q[0].length && 0 == s[0].length)
                        break;
                    b = Ca(0 == q[1].length ? 0 : parseInt(q[1], 10), 0 == s[1].length ? 0 : parseInt(s[1], 10)) || Ca(0 == q[2].length, 0 == s[2].length) || 
                    Ca(q[2], s[2])
                } while (0 == b)
            }
            b = eb[a] = 0 <= b
        }
        return b
    }
    var fb = m.document, gb = fb && I ? cb() || ("CSS1Compat" == fb.compatMode ? parseInt(db, 10) : 5) : void 0;
    I && K("9.0");
    function ib(a, b, c) {
        return Math.min(Math.max(a, b), c)
    }
    function jb(a, b) {
        var c = a % b;
        return 0 > c * b ? c + b : c
    }
    ;
    function kb(a) {
        return function(b) {
            if (r(b))
                return [ib(b[0], a[0], a[2]), ib(b[1], a[1], a[3])]
        }
    }
    function lb(a) {
        return a
    }
    ;
    function mb(a, b, c) {
        var d = a.length;
        if (a[0] <= b)
            return 0;
        if (!(b <= a[d - 1]))
            if (0 < c)
                for (c = 1; c < d; ++c) {
                    if (a[c] < b)
                        return c - 1
                }
            else if (0 > c)
                for (c = 1; c < d; ++c) {
                    if (a[c] <= b)
                        return c
                }
            else
                for (c = 1; c < d; ++c) {
                    if (a[c] == b)
                        return c;
                    if (a[c] < b)
                        return a[c - 1] - b < b - a[c] ? c - 1 : c
                }
        return d - 1
    }
    ;
    function nb(a) {
        return function(b, c, d) {
            if (r(b))
                return b = mb(a, b, d), b = ib(b + c, 0, a.length - 1), a[b]
        }
    }
    function ob(a, b, c) {
        return function(d, e, f) {
            if (r(d))
                return f = 0 < f ? 0 : 0 > f ? 1 : .5, d = Math.floor(Math.log(b / d) / Math.log(a) + f), e = Math.max(d + e, 0), r(c) && (e = Math.min(e, c)), b / Math.pow(a, e)
        }
    }
    ;
    function pb(a) {
        if (r(a))
            return 0
    }
    function qb(a, b) {
        if (r(a))
            return a + b
    }
    function rb(a) {
        var b = 2 * Math.PI / a;
        return function(a, d) {
            if (r(a))
                return a = Math.floor((a + d) / b + .5) * b
        }
    }
    function sb() {
        var a = 5 * Math.PI / 180;
        return function(b, c) {
            if (r(b))
                return Math.abs(b + c) <= a ? 0 : b + c
        }
    }
    ;
    function tb(a, b, c) {
        this.center = a;
        this.resolution = b;
        this.rotation = c
    }
    ;
    var ub = !I || I && 9 <= gb, vb = !I || I && 9 <= gb, wb = I && !K("9");
    !J || K("528");
    Za && K("1.9b") || I && K("8") || Ya && K("9.5") || J && K("528");
    Za && !K("8") || I && K("9");
    function xb() {
        0 != yb && (zb[v(this)] = this)
    }
    var yb = 0, zb = {};
    xb.prototype.Ma = !1;
    xb.prototype.ra = function() {
        if (!this.Ma && (this.Ma = !0, this.r(), 0 != yb)) {
            var a = v(this);
            delete zb[a]
        }
    };
    function Ab(a, b) {
        var c = oa(Bb, b);
        a.F || (a.F = []);
        a.F.push(r(void 0) ? z(c, void 0) : c)
    }
    xb.prototype.r = function() {
        if (this.F)
            for (; this.F.length; )
                this.F.shift()()
    };
    function Bb(a) {
        a && "function" == typeof a.ra && a.ra()
    }
    ;
    function L(a, b) {
        this.type = a;
        this.d = this.target = b;
        this.h = !1;
        this.ib = !0
    }
    L.prototype.ra = function() {
    };
    L.prototype.f = function() {
        this.h = !0
    };
    L.prototype.preventDefault = function() {
        this.ib = !1
    };
    function Cb(a) {
        a.f()
    }
    ;
    var Db = I ? "focusout" : "DOMFocusOut";
    function Eb(a) {
        Eb[" "](a);
        return a
    }
    Eb[" "] = aa;
    function Fb(a, b) {
        L.call(this, a ? a.type : "");
        this.relatedTarget = this.d = this.target = null;
        this.j = this.c = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
        this.k = this.e = this.b = this.g = !1;
        this.state = null;
        this.i = !1;
        this.a = null;
        if (a) {
            var c = this.type = a.type;
            this.target = a.target || a.srcElement;
            this.d = b;
            var d = a.relatedTarget;
            if (d) {
                if (Za) {
                    var e;
                    a: {
                        try {
                            Eb(d.nodeName);
                            e = !0;
                            break a
                        } catch (f) {
                        }
                        e = !1
                    }
                    e || (d = null)
                }
            } else
                "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
            this.relatedTarget = d;
            this.offsetX = J || void 0 !== a.offsetX ? a.offsetX : a.layerX;
            this.offsetY = J || void 0 !== a.offsetY ? a.offsetY : a.layerY;
            this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
            this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
            this.screenX = a.screenX || 0;
            this.screenY = a.screenY || 0;
            this.button = a.button;
            this.c = a.keyCode || 0;
            this.j = a.charCode || ("keypress" == c ? a.keyCode : 0);
            this.g = a.ctrlKey;
            this.b = a.altKey;
            this.e = a.shiftKey;
            this.k = a.metaKey;
            this.i = Wa ? a.metaKey : a.ctrlKey;
            this.state = a.state;
            this.a = a;
            a.defaultPrevented && 
            this.preventDefault()
        }
    }
    A(Fb, L);
    var Gb = [1, 4, 2];
    function Hb(a) {
        return (ub ? 0 == a.a.button : "click" == a.type ? !0 : !!(a.a.button & Gb[0])) && !(J && Wa && a.g)
    }
    Fb.prototype.f = function() {
        Fb.w.f.call(this);
        this.a.stopPropagation ? this.a.stopPropagation() : this.a.cancelBubble = !0
    };
    Fb.prototype.preventDefault = function() {
        Fb.w.preventDefault.call(this);
        var a = this.a;
        if (a.preventDefault)
            a.preventDefault();
        else if (a.returnValue = !1, wb)
            try {
                if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
                    a.keyCode = -1
            } catch (b) {
            }
    };
    Fb.prototype.l = function() {
        return this.a
    };
    var Ib = "closure_listenable_" + (1E6 * Math.random() | 0);
    function Jb(a) {
        return !(!a || !a[Ib])
    }
    var Kb = 0;
    function Lb(a, b, c, d, e) {
        this.S = a;
        this.a = null;
        this.src = b;
        this.type = c;
        this.ea = !!d;
        this.ta = e;
        this.key = ++Kb;
        this.aa = this.qa = !1
    }
    function Mb(a) {
        a.aa = !0;
        a.S = null;
        a.a = null;
        a.src = null;
        a.ta = null
    }
    ;
    function Nb(a, b) {
        for (var c in a)
            b.call(void 0, a[c], c, a)
    }
    function Ob(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a))
                return !0;
        return !1
    }
    function Pb(a) {
        var b = 0, c;
        for (c in a)
            b++;
        return b
    }
    function Qb(a) {
        var b = [], c = 0, d;
        for (d in a)
            b[c++] = a[d];
        return b
    }
    function Rb(a) {
        var b = [], c = 0, d;
        for (d in a)
            b[c++] = d;
        return b
    }
    function Sb(a) {
        for (var b in a)
            return !1;
        return !0
    }
    function Tb(a, b) {
        b in a && delete a[b]
    }
    function M(a, b, c) {
        return b in a ? a[b] : c
    }
    function Ub(a) {
        var b = {}, c;
        for (c in a)
            b[c] = a[c];
        return b
    }
    var Vb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    function Wb(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d)
                a[c] = d[c];
            for (var f = 0; f < Vb.length; f++)
                c = Vb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    }
    ;
    function Xb(a) {
        this.src = a;
        this.a = {};
        this.b = 0
    }
    Xb.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.a[f];
        a || (a = this.a[f] = [], this.b++);
        var g = Yb(a, b, d, e);
        -1 < g ? (b = a[g], c || (b.qa = !1)) : (b = new Lb(b, this.src, f, !!d, e), b.qa = c, a.push(b));
        return b
    };
    Xb.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.a))
            return !1;
        var e = this.a[a];
        b = Yb(e, b, c, d);
        return -1 < b ? (Mb(e[b]), Fa.splice.call(e, b, 1), 0 == e.length && (delete this.a[a], this.b--), !0) : !1
    };
    function $b(a, b) {
        var c = b.type;
        if (!(c in a.a))
            return !1;
        var d = Ja(a.a[c], b);
        d && (Mb(b), 0 == a.a[c].length && (delete a.a[c], a.b--));
        return d
    }
    function ac(a, b) {
        var c = r(b), d = c ? b.toString() : "", e = r(void 0);
        return Ob(a.a, function(a) {
            for (var b = 0; b < a.length; ++b)
                if (!(c && a[b].type != d || e && void 0 != a[b].ea))
                    return !0;
            return !1
        })
    }
    function Yb(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.aa && f.S == b && f.ea == !!c && f.ta == d)
                return e
        }
        return -1
    }
    ;
    var bc = "closure_lm_" + (1E6 * Math.random() | 0), cc = {}, dc = 0;
    function N(a, b, c, d, e) {
        if (da(b)) {
            for (var f = 0; f < b.length; f++)
                N(a, b[f], c, d, e);
            return null
        }
        c = ec(c);
        return Jb(a) ? a.C.add(String(b), c, !1, d, e) : fc(a, b, c, !1, d, e)
    }
    function fc(a, b, c, d, e, f) {
        if (!b)
            throw Error("Invalid event type");
        var g = !!e, h = gc(a);
        h || (a[bc] = h = new Xb(a));
        c = h.add(b, c, d, e, f);
        if (c.a)
            return c;
        d = hc();
        c.a = d;
        d.src = a;
        d.S = c;
        a.addEventListener ? a.addEventListener(b.toString(), d, g) : a.attachEvent(ic(b.toString()), d);
        dc++;
        return c
    }
    function hc() {
        var a = jc, b = vb ? function(c) {
            return a.call(b.src, b.S, c)
        } : function(c) {
            c = a.call(b.src, b.S, c);
            if (!c)
                return c
        };
        return b
    }
    function kc(a, b, c, d, e) {
        if (da(b)) {
            for (var f = 0; f < b.length; f++)
                kc(a, b[f], c, d, e);
            return null
        }
        c = ec(c);
        return Jb(a) ? a.C.add(String(b), c, !0, d, e) : fc(a, b, c, !0, d, e)
    }
    function lc(a, b, c, d, e) {
        if (da(b))
            for (var f = 0; f < b.length; f++)
                lc(a, b[f], c, d, e);
        else
            (c = ec(c), Jb(a)) ? a.C.remove(String(b), c, d, e) : a && (a = gc(a)) && (b = a.a[b.toString()], a = -1, b && (a = Yb(b, c, !!d, e)), (c = -1 < a ? b[a] : null) && P(c))
    }
    function P(a) {
        if (ga(a) || !a || a.aa)
            return !1;
        var b = a.src;
        if (Jb(b))
            return $b(b.C, a);
        var c = a.type, d = a.a;
        b.removeEventListener ? b.removeEventListener(c, d, a.ea) : b.detachEvent && b.detachEvent(ic(c), d);
        dc--;
        (c = gc(b)) ? ($b(c, a), 0 == c.b && (c.src = null, b[bc] = null)) : Mb(a);
        return !0
    }
    function ic(a) {
        return a in cc ? cc[a] : cc[a] = "on" + a
    }
    function mc(a, b, c, d) {
        var e = 1;
        if (a = gc(a))
            if (b = a.a[b.toString()])
                for (b = b.concat(), a = 0; a < b.length; a++) {
                    var f = b[a];
                    f && f.ea == c && !f.aa && (e &= !1 !== nc(f, d))
                }
        return Boolean(e)
    }
    function nc(a, b) {
        var c = a.S, d = a.ta || a.src;
        a.qa && P(a);
        return c.call(d, b)
    }
    function jc(a, b) {
        if (a.aa)
            return !0;
        if (!vb) {
            var c;
            if (!(c = b))
                a: {
                    c = ["window", "event"];
                    for (var d = m, e; e = c.shift(); )
                        if (null != d[e])
                            d = d[e];
                        else {
                            c = null;
                            break a
                        }
                    c = d
                }
            e = c;
            c = new Fb(e, this);
            d = !0;
            if (!(0 > e.keyCode || void 0 != e.returnValue)) {
                a: {
                    var f = !1;
                    if (0 == e.keyCode)
                        try {
                            e.keyCode = -1;
                            break a
                        } catch (g) {
                            f = !0
                        }
                    if (f || void 0 == e.returnValue)
                        e.returnValue = !0
                }
                e = [];
                for (f = c.d; f; f = f.parentNode)
                    e.push(f);
                for (var f = a.type, h = e.length - 1; !c.h && 0 <= h; h--)
                    c.d = e[h], d &= mc(e[h], f, !0, c);
                for (h = 0; !c.h && h < e.length; h++)
                    c.d = e[h], d &= mc(e[h], f, !1, 
                    c)
            }
            return d
        }
        return nc(a, new Fb(b, this))
    }
    function gc(a) {
        a = a[bc];
        return a instanceof Xb ? a : null
    }
    var oc = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
    function ec(a) {
        if (ha(a))
            return a;
        a[oc] || (a[oc] = function(b) {
            return a.handleEvent(b)
        });
        return a[oc]
    }
    ;
    function pc(a) {
        return function() {
            return a
        }
    }
    var qc = pc(!1), rc = pc(!0);
    function sc(a) {
        return a
    }
    function tc(a) {
        var b;
        b = b || 0;
        return function() {
            return a.apply(this, Array.prototype.slice.call(arguments, 0, b))
        }
    }
    function uc(a) {
        var b = arguments, c = b.length;
        return function() {
            for (var a = 0; a < c; a++)
                if (!b[a].apply(this, arguments))
                    return !1;
            return !0
        }
    }
    ;
    function Q() {
        xb.call(this);
        this.C = new Xb(this);
        this.ob = this;
        this.La = null
    }
    A(Q, xb);
    Q.prototype[Ib] = !0;
    Q.prototype.addEventListener = function(a, b, c, d) {
        N(this, a, b, c, d)
    };
    Q.prototype.removeEventListener = function(a, b, c, d) {
        lc(this, a, b, c, d)
    };
    Q.prototype.dispatchEvent = function(a) {
        var b, c = this.La;
        if (c)
            for (b = []; c; c = c.La)
                b.push(c);
        var c = this.ob, d = a.type || a;
        if (t(a))
            a = new L(a, c);
        else if (a instanceof L)
            a.target = a.target || c;
        else {
            var e = a;
            a = new L(d, c);
            Wb(a, e)
        }
        var e = !0, f;
        if (b)
            for (var g = b.length - 1; !a.h && 0 <= g; g--)
                f = a.d = b[g], e = vc(f, d, !0, a) && e;
        a.h || (f = a.d = c, e = vc(f, d, !0, a) && e, a.h || (e = vc(f, d, !1, a) && e));
        if (b)
            for (g = 0; !a.h && g < b.length; g++)
                f = a.d = b[g], e = vc(f, d, !1, a) && e;
        return e
    };
    Q.prototype.r = function() {
        Q.w.r.call(this);
        if (this.C) {
            var a = this.C, b = 0, c;
            for (c in a.a) {
                for (var d = a.a[c], e = 0; e < d.length; e++)
                    ++b, Mb(d[e]);
                delete a.a[c];
                a.b--
            }
        }
        this.La = null
    };
    function vc(a, b, c, d) {
        b = a.C.a[String(b)];
        if (!b)
            return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var g = b[f];
            if (g && !g.aa && g.ea == c) {
                var h = g.S, l = g.ta || g.src;
                g.qa && $b(a.C, g);
                e = !1 !== h.call(l, d) && e
            }
        }
        return e && !1 != d.ib
    }
    ;
    function wc() {
        Q.call(this);
        this.f = 0
    }
    A(wc, Q);
    k = wc.prototype;
    k.K = function() {
        ++this.f;
        this.dispatchEvent("change")
    };
    k.Sa = function() {
        return this.f
    };
    k.cb = function(a, b, c) {
        return N(this, a, b, !1, c)
    };
    k.fb = function(a, b, c) {
        return kc(this, a, b, !1, c)
    };
    k.lb = function(a, b, c) {
        lc(this, a, b, !1, c)
    };
    k.mb = function(a) {
        P(a)
    };
    function xc(a, b) {
        L.call(this, a);
        this.key = b
    }
    A(xc, L);
    function yc(a, b, c) {
        this.source = a;
        this.target = b;
        this.a = c;
        this.c = this.b = sc
    }
    function zc(a) {
        wc.call(this);
        v(this);
        this.d = {};
        this.h = {};
        this.ba = {};
        this.ca = {};
        r(a) && this.Z(a)
    }
    A(zc, wc);
    var Ac = {}, Bc = {}, Cc = {};
    function Dc(a) {
        return Ac.hasOwnProperty(a) ? Ac[a] : Ac[a] = "change:" + a.toLowerCase()
    }
    k = zc.prototype;
    k.Na = function(a, b, c) {
        c = c || a;
        this.za(a);
        var d = Dc(c);
        this.ca[a] = N(b, d, function() {
            Ec(this, a)
        }, void 0, this);
        this.ba[a] = N(b, "beforepropertychange", Fc(a, c), void 0, this);
        b = new yc(this, b, c);
        this.h[a] = b;
        Ec(this, a);
        return b
    };
    function Fc(a, b) {
        return function(c) {
            c.key === b && this.dispatchEvent(new xc("beforepropertychange", a))
        }
    }
    k.o = function(a) {
        var b, c = this.h;
        if (c.hasOwnProperty(a)) {
            a = c[a];
            b = a.target;
            var c = a.a, d = Bc.hasOwnProperty(c) ? Bc[c] : Bc[c] = "get" + (c.substr(0, 1).toUpperCase() + c.substr(1)), d = M(b, d);
            b = r(d) ? d.call(b) : b.o(c);
            b = a.c(b)
        } else
            this.d.hasOwnProperty(a) && (b = this.d[a]);
        return b
    };
    k.Ga = function() {
        var a = this.h, b;
        if (Sb(this.d)) {
            if (Sb(a))
                return [];
            b = a
        } else if (Sb(a))
            b = this.d;
        else {
            b = {};
            for (var c in this.d)
                b[c] = !0;
            for (c in a)
                b[c] = !0
        }
        return Rb(b)
    };
    k.Ra = function() {
        var a = {}, b;
        for (b in this.d)
            a[b] = this.d[b];
        for (b in this.h)
            a[b] = this.o(b);
        return a
    };
    function Ec(a, b) {
        var c = Dc(b);
        a.dispatchEvent(c);
        a.dispatchEvent(new xc("propertychange", b))
    }
    k.q = function(a, b) {
        this.dispatchEvent(new xc("beforepropertychange", a));
        var c = this.h;
        if (c.hasOwnProperty(a)) {
            var d = c[a], c = d.target, e = d.a;
            b = d.b(b);
            d = Cc.hasOwnProperty(e) ? Cc[e] : Cc[e] = "set" + (e.substr(0, 1).toUpperCase() + e.substr(1));
            d = M(c, d);
            r(d) ? d.call(c, b) : c.q(e, b)
        } else
            this.d[a] = b, Ec(this, a)
    };
    k.Z = function(a) {
        for (var b in a)
            this.q(b, a[b])
    };
    k.za = function(a) {
        var b = this.ca, c = b[a];
        c && (delete b[a], P(c), b = this.o(a), delete this.h[a], this.d[a] = b);
        if (b = this.ba[a])
            P(b), delete this.ba[a]
    };
    k.nb = function() {
        for (var a in this.ca)
            this.za(a)
    };
    function Gc(a, b) {
        a[0] += b[0];
        a[1] += b[1]
    }
    function Hc(a, b) {
        var c = Math.cos(b), d = Math.sin(b), e = a[1] * c + a[0] * d;
        a[0] = a[0] * c - a[1] * d;
        a[1] = e
    }
    ;
    function Ic(a) {
        this.length = a.length || a;
        for (var b = 0; b < this.length; b++)
            this[b] = a[b] || 0
    }
    Ic.prototype.a = 4;
    Ic.prototype.b = function(a, b) {
        b = b || 0;
        for (var c = 0; c < a.length && b + c < this.length; c++)
            this[b + c] = a[c]
    };
    Ic.prototype.toString = Array.prototype.join;
    "undefined" == typeof Float32Array && (Ic.BYTES_PER_ELEMENT = 4, Ic.prototype.BYTES_PER_ELEMENT = Ic.prototype.a, Ic.prototype.set = Ic.prototype.b, Ic.prototype.toString = Ic.prototype.toString, qa("Float32Array", Ic));
    function Jc(a) {
        this.length = a.length || a;
        for (var b = 0; b < this.length; b++)
            this[b] = a[b] || 0
    }
    Jc.prototype.a = 8;
    Jc.prototype.b = function(a, b) {
        b = b || 0;
        for (var c = 0; c < a.length && b + c < this.length; c++)
            this[b + c] = a[c]
    };
    Jc.prototype.toString = Array.prototype.join;
    if ("undefined" == typeof Float64Array) {
        try {
            Jc.BYTES_PER_ELEMENT = 8
        } catch (Kc) {
        }
        Jc.prototype.BYTES_PER_ELEMENT = Jc.prototype.a;
        Jc.prototype.set = Jc.prototype.b;
        Jc.prototype.toString = Jc.prototype.toString;
        qa("Float64Array", Jc)
    }
    ;
    function Lc() {
        var a = Array(16);
        a[0] = 0;
        a[1] = 0;
        a[2] = 0;
        a[3] = 0;
        a[4] = 0;
        a[5] = 0;
        a[6] = 0;
        a[7] = 0;
        a[8] = 0;
        a[9] = 0;
        a[10] = 0;
        a[11] = 0;
        a[12] = 0;
        a[13] = 0;
        a[14] = 0;
        a[15] = 0;
        return a
    }
    function Mc(a, b, c) {
        var d = a[1] * b + a[5] * c + 0 * a[9] + a[13], e = a[2] * b + a[6] * c + 0 * a[10] + a[14], f = a[3] * b + a[7] * c + 0 * a[11] + a[15];
        a[12] = a[0] * b + a[4] * c + 0 * a[8] + a[12];
        a[13] = d;
        a[14] = e;
        a[15] = f
    }
    new Float64Array(3);
    new Float64Array(3);
    new Float64Array(4);
    new Float64Array(4);
    new Float64Array(4);
    new Float64Array(16);
    function Nc(a, b, c, d, e) {
        return r(e) ? (e[0] = a, e[1] = b, e[2] = c, e[3] = d, e) : [a, b, c, d]
    }
    function Oc(a) {
        return [(a[0] + a[2]) / 2, (a[1] + a[3]) / 2]
    }
    function Qc(a, b) {
        var c;
        "bottom-left" === b ? c = [a[0], a[1]] : "bottom-right" === b ? c = [a[2], a[1]] : "top-left" === b ? c = Rc(a) : "top-right" === b && (c = [a[2], a[3]]);
        return c
    }
    function Sc(a, b, c, d) {
        var e = b * d[0] / 2, f = b * d[1] / 2;
        b = Math.cos(c);
        d = Math.sin(c);
        e = [-e, -e, e, e];
        c = [-f, f, -f, f];
        for (var g, h, f = 0; 4 > f; ++f)
            g = e[f], h = c[f], e[f] = a[0] + g * b - h * d, c[f] = a[1] + g * d + h * b;
        a = Math.min.apply(null, e);
        b = Math.min.apply(null, c);
        e = Math.max.apply(null, e);
        c = Math.max.apply(null, c);
        return Nc(a, b, e, c, void 0)
    }
    function Tc(a, b) {
        var c = r(void 0) ? void 0 : [Infinity, Infinity, -Infinity, -Infinity];
        Uc(a, b) && (c[0] = a[0] > b[0] ? a[0] : b[0], c[1] = a[1] > b[1] ? a[1] : b[1], c[2] = a[2] < b[2] ? a[2] : b[2], c[3] = a[3] < b[3] ? a[3] : b[3]);
        return c
    }
    function Rc(a) {
        return [a[0], a[3]]
    }
    function Uc(a, b) {
        return a[0] <= b[2] && a[2] >= b[0] && a[1] <= b[3] && a[3] >= b[1]
    }
    ; /*

 Latitude/longitude spherical geodesy formulae taken from
 http://www.movable-type.co.uk/scripts/latlong.html
 Licenced under CC-BY-3.0.
*/
    var Vc = {};
    Vc.degrees = 2 * Math.PI * (new function(a) {
        this.radius = a
    }(6370997)).radius / 360;
    Vc.ft = .3048;
    Vc.m = 1;
    function Wc(a) {
        this.a = a.code;
        this.d = a.units;
        this.f = r(a.extent) ? a.extent : null;
        this.c = null
    }
    Wc.prototype.b = function() {
        return this.f
    };
    var Xc = {}, Yc = {};
    function Zc(a) {
        $c(a);
        F(a, function(b) {
            F(a, function(a) {
                b !== a && ad(b, a, bd)
            })
        })
    }
    function cd(a) {
        Xc[a.a] = a;
        ad(a, a, bd)
    }
    function $c(a) {
        var b = [];
        F(a, function(a) {
            b.push(cd(a))
        })
    }
    function dd(a) {
        return null != a ? t(a) ? ed(a) : a : ed("EPSG:3857")
    }
    function ad(a, b, c) {
        a = a.a;
        b = b.a;
        a in Yc || (Yc[a] = {});
        Yc[a][b] = c
    }
    function ed(a) {
        var b;
        a instanceof Wc ? b = a : t(a) ? b = Xc[a] : b = null;
        return b
    }
    function bd(a, b) {
        var c;
        if (r(b)) {
            c = 0;
            for (var d = a.length; c < d; ++c)
                b[c] = a[c];
            c = b
        } else
            c = a.slice();
        return c
    }
    ;
    function R(a) {
        zc.call(this);
        a = r(a) ? a : {};
        this.n = [0, 0];
        var b = {};
        b.center = r(a.center) ? a.center : null;
        this.t = dd(a.projection);
        var c, d, e, f = r(a.minZoom) ? a.minZoom : 0;
        c = r(a.maxZoom) ? a.maxZoom : 28;
        var g = r(a.zoomFactor) ? a.zoomFactor : 2;
        if (r(a.resolutions))
            c = a.resolutions, d = c[0], e = c[c.length - 1], c = nb(c);
        else {
            d = dd(a.projection);
            e = d.b();
            var h = (null === e ? 360 * Vc.degrees / Vc[d.d] : Math.max(e[2] - e[0], e[3] - e[1])) / 256 / Math.pow(2, 0), l = h / Math.pow(2, 28);
            d = a.maxResolution;
            r(d) ? f = 0 : d = h / Math.pow(g, f);
            e = a.minResolution;
            r(e) || (e = 
            r(a.maxZoom) ? r(a.maxResolution) ? d / Math.pow(g, c) : h / Math.pow(g, c) : l);
            c = f + Math.floor(Math.log(d / e) / Math.log(g));
            e = d / Math.pow(g, c - f);
            c = ob(g, d, c - f)
        }
        this.i = d;
        this.v = e;
        this.j = f;
        f = r(a.extent) ? kb(a.extent) : lb;
        (r(a.enableRotation) ? a.enableRotation : 1) ? (d = a.constrainRotation, d = r(d) && !0 !== d ? !1 === d ? qb : ga(d) ? rb(d) : qb : sb()) : d = pb;
        this.l = new tb(f, c, d);
        r(a.resolution) ? b.resolution = a.resolution : r(a.zoom) && (b.resolution = this.constrainResolution(this.i, a.zoom - this.j));
        b.rotation = r(a.rotation) ? a.rotation : 0;
        this.Z(b)
    }
    A(R, zc);
    R.prototype.e = function(a) {
        return this.l.center(a)
    };
    R.prototype.constrainResolution = function(a, b, c) {
        return this.l.resolution(a, b || 0, c || 0)
    };
    R.prototype.constrainRotation = function(a, b) {
        return this.l.rotation(a, b || 0)
    };
    R.prototype.b = function() {
        return this.o("center")
    };
    R.prototype.getCenter = R.prototype.b;
    R.prototype.u = function(a) {
        var b = this.b(), c = this.a();
        return [b[0] - c * a[0] / 2, b[1] - c * a[1] / 2, b[0] + c * a[0] / 2, b[1] + c * a[1] / 2]
    };
    R.prototype.A = function() {
        return this.t
    };
    R.prototype.a = function() {
        return this.o("resolution")
    };
    R.prototype.getResolution = R.prototype.a;
    R.prototype.g = function(a, b) {
        return Math.max((a[2] - a[0]) / b[0], (a[3] - a[1]) / b[1])
    };
    R.prototype.J = function() {
        return this.o("rotation")
    };
    R.prototype.getRotation = R.prototype.J;
    k = R.prototype;
    k.s = function() {
        var a = this.b(), b = this.t, c = this.a(), d = this.J();
        return {center: a.slice(),projection: r(b) ? b : null,resolution: c,rotation: r(d) ? d : 0}
    };
    k.Qb = function() {
        var a, b = this.a();
        if (r(b)) {
            var c, d = 0;
            do {
                c = this.constrainResolution(this.i, d);
                if (c == b) {
                    a = d;
                    break
                }
                ++d
            } while (c > this.v)
        }
        return r(a) ? this.j + a : a
    };
    k.Ib = function(a, b) {
        if (!(a[2] < a[0] || a[3] < a[1])) {
            this.H(Oc(a));
            var c = this.g(a, b), d = this.constrainResolution(c, 0, 0);
            d < c && (d = this.constrainResolution(d, -1, 0));
            this.c(d)
        }
    };
    k.Jb = function(a, b, c) {
        var d = r(c) ? c : {};
        c = r(d.padding) ? d.padding : [0, 0, 0, 0];
        var e = r(d.constrainResolution) ? d.constrainResolution : !0, f = r(d.nearest) ? d.nearest : !1, g;
        r(d.minResolution) ? g = d.minResolution : r(d.maxZoom) ? g = this.constrainResolution(this.i, d.maxZoom - this.j, 0) : g = 0;
        var h = a.c, l = this.J(), d = Math.cos(-l), l = Math.sin(-l), n = Infinity, q = Infinity, s = -Infinity, p = -Infinity;
        a = a.a;
        for (var u = 0, w = h.length; u < w; u += a)
            var y = h[u] * d - h[u + 1] * l, x = h[u] * l + h[u + 1] * d, n = Math.min(n, y), q = Math.min(q, x), s = Math.max(s, y), p = Math.max(p, 
            x);
        b = this.g([n, q, s, p], [b[0] - c[1] - c[3], b[1] - c[0] - c[2]]);
        b = isNaN(b) ? g : Math.max(b, g);
        e && (g = this.constrainResolution(b, 0, 0), !f && g < b && (g = this.constrainResolution(g, -1, 0)), b = g);
        this.c(b);
        l = -l;
        f = (n + s) / 2 + (c[1] - c[3]) / 2 * b;
        c = (q + p) / 2 + (c[0] - c[2]) / 2 * b;
        this.H([f * d - c * l, c * d + f * l])
    };
    k.Ab = function(a, b, c) {
        var d = this.J(), e = Math.cos(-d), d = Math.sin(-d), f = a[0] * e - a[1] * d;
        a = a[1] * e + a[0] * d;
        var g = this.a(), f = f + (b[0] / 2 - c[0]) * g;
        a += (c[1] - b[1] / 2) * g;
        d = -d;
        this.H([f * e - a * d, a * e + f * d])
    };
    k.rotate = function(a, b) {
        if (r(b)) {
            var c, d = this.b();
            r(d) && (c = [d[0] - b[0], d[1] - b[1]], Hc(c, a - this.J()), Gc(c, b));
            this.H(c)
        }
        this.k(a)
    };
    k.H = function(a) {
        this.q("center", a)
    };
    R.prototype.setCenter = R.prototype.H;
    function fd(a, b) {
        a.n[1] += b
    }
    R.prototype.c = function(a) {
        this.q("resolution", a)
    };
    R.prototype.setResolution = R.prototype.c;
    R.prototype.k = function(a) {
        this.q("rotation", a)
    };
    R.prototype.setRotation = R.prototype.k;
    R.prototype.L = function(a) {
        a = this.constrainResolution(this.i, a - this.j, 0);
        this.c(a)
    };
    function gd(a) {
        return 1 - Math.pow(1 - a, 3)
    }
    ;
    function hd(a) {
        return 3 * a * a - 2 * a * a * a
    }
    function id(a) {
        return a
    }
    ;
    function jd(a) {
        var b = a.source, c = r(a.start) ? a.start : pa(), d = b[0], e = b[1], f = r(a.duration) ? a.duration : 1E3, g = r(a.easing) ? a.easing : hd;
        return function(a, b) {
            if (b.time < c)
                return b.animate = !0, b.viewHints[0] += 1, !0;
            if (b.time < c + f) {
                var n = 1 - g((b.time - c) / f), q = d - b.viewState.center[0], s = e - b.viewState.center[1];
                b.animate = !0;
                b.viewState.center[0] += n * q;
                b.viewState.center[1] += n * s;
                b.viewHints[0] += 1;
                return !0
            }
            return !1
        }
    }
    function kd(a) {
        var b = r(a.rotation) ? a.rotation : 0, c = r(a.start) ? a.start : pa(), d = r(a.duration) ? a.duration : 1E3, e = r(a.easing) ? a.easing : hd, f = r(a.anchor) ? a.anchor : null;
        return function(a, h) {
            if (h.time < c)
                return h.animate = !0, h.viewHints[0] += 1, !0;
            if (h.time < c + d) {
                var l = 1 - e((h.time - c) / d), l = (b - h.viewState.rotation) * l;
                h.animate = !0;
                h.viewState.rotation += l;
                if (null !== f) {
                    var n = h.viewState.center;
                    n[0] -= f[0];
                    n[1] -= f[1];
                    Hc(n, l);
                    Gc(n, f)
                }
                h.viewHints[0] += 1;
                return !0
            }
            return !1
        }
    }
    function ld(a) {
        var b = a.resolution, c = r(a.start) ? a.start : pa(), d = r(a.duration) ? a.duration : 1E3, e = r(a.easing) ? a.easing : hd;
        return function(a, g) {
            if (g.time < c)
                return g.animate = !0, g.viewHints[0] += 1, !0;
            if (g.time < c + d) {
                var h = 1 - e((g.time - c) / d), l = b - g.viewState.resolution;
                g.animate = !0;
                g.viewState.resolution += h * l;
                g.viewHints[0] += 1;
                return !0
            }
            return !1
        }
    }
    ;
    function md(a, b, c, d) {
        return r(d) ? (d[0] = a, d[1] = b, d[2] = c, d) : [a, b, c]
    }
    function nd(a, b, c) {
        return a + "/" + b + "/" + c
    }
    function od(a) {
        return nd(a[0], a[1], a[2])
    }
    ;
    function pd(a, b, c, d) {
        this.a = a;
        this.d = b;
        this.c = c;
        this.b = d
    }
    function qd(a, b, c, d, e) {
        return r(e) ? (e.a = a, e.d = b, e.c = c, e.b = d, e) : new pd(a, b, c, d)
    }
    pd.prototype.contains = function(a) {
        return rd(this, a[1], a[2])
    };
    function sd(a, b) {
        return a.a <= b.a && b.d <= a.d && a.c <= b.c && b.b <= a.b
    }
    function rd(a, b, c) {
        return a.a <= b && b <= a.d && a.c <= c && c <= a.b
    }
    pd.prototype.R = function() {
        return this.d - this.a + 1
    };
    var td = !I || I && 9 <= gb;
    !Za && !I || I && I && 9 <= gb || Za && K("1.9.1");
    I && K("9");
    function ud(a, b) {
        this.x = r(a) ? a : 0;
        this.y = r(b) ? b : 0
    }
    ud.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    ud.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    ud.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    function vd(a, b) {
        this.width = a;
        this.height = b
    }
    vd.prototype.f = function() {
        return !(this.width * this.height)
    };
    vd.prototype.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    vd.prototype.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    vd.prototype.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    function wd(a) {
        return a ? new xd(yd(a)) : ra || (ra = new xd)
    }
    function zd(a) {
        var b = document;
        return t(a) ? b.getElementById(a) : a
    }
    function Ad(a, b) {
        Nb(b, function(b, d) {
            "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in Bd ? a.setAttribute(Bd[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
        })
    }
    var Bd = {cellpadding: "cellPadding",cellspacing: "cellSpacing",colspan: "colSpan",frameborder: "frameBorder",height: "height",maxlength: "maxLength",role: "role",rowspan: "rowSpan",type: "type",usemap: "useMap",valign: "vAlign",width: "width"};
    function Cd(a) {
        a = a.document.documentElement;
        return new vd(a.clientWidth, a.clientHeight)
    }
    function T(a, b, c) {
        var d = arguments, e = document, f = d[0], g = d[1];
        if (!td && g && (g.name || g.type)) {
            f = ["<", f];
            g.name && f.push(' name="', ta(g.name), '"');
            if (g.type) {
                f.push(' type="', ta(g.type), '"');
                var h = {};
                Wb(h, g);
                delete h.type;
                g = h
            }
            f.push(">");
            f = f.join("")
        }
        f = e.createElement(f);
        g && (t(g) ? f.className = g : da(g) ? f.className = g.join(" ") : Ad(f, g));
        2 < d.length && Dd(e, f, d);
        return f
    }
    function Dd(a, b, c) {
        function d(c) {
            c && b.appendChild(t(c) ? a.createTextNode(c) : c)
        }
        for (var e = 2; e < c.length; e++) {
            var f = c[e];
            !ea(f) || ia(f) && 0 < f.nodeType ? d(f) : F(Ed(f) ? Ka(f) : f, d)
        }
    }
    function Fd(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    }
    function yd(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }
    function Ed(a) {
        if (a && "number" == typeof a.length) {
            if (ia(a))
                return "function" == typeof a.item || "string" == typeof a.item;
            if (ha(a))
                return "function" == typeof a.item
        }
        return !1
    }
    function xd(a) {
        this.a = a || m.document || document
    }
    function Gd(a) {
        var b = a.a;
        a = J ? b.body || b.documentElement : b.documentElement;
        b = b.parentWindow || b.defaultView;
        return I && K("10") && b.pageYOffset != a.scrollTop ? new ud(a.scrollLeft, a.scrollTop) : new ud(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
    }
    xd.prototype.contains = function(a, b) {
        if (a.contains && 1 == b.nodeType)
            return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition)
            return a == b || Boolean(a.compareDocumentPosition(b) & 16);
        for (; b && a != b; )
            b = b.parentNode;
        return b == a
    };
    function Hd(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    k = Hd.prototype;
    k.R = function() {
        return this.right - this.left
    };
    k.contains = function(a) {
        return this && a ? a instanceof Hd ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    k.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    k.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    k.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    function Id(a, b) {
        var c = yd(a);
        return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) || "" : ""
    }
    function Jd(a, b) {
        return Id(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }
    function Kd(a) {
        var b;
        try {
            b = a.getBoundingClientRect()
        } catch (c) {
            return {left: 0,top: 0,right: 0,bottom: 0}
        }
        I && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
        return b
    }
    function Ld(a) {
        if (I && !(I && 8 <= gb))
            return a.offsetParent;
        var b = yd(a), c = Jd(a, "position"), d = "fixed" == c || "absolute" == c;
        for (a = a.parentNode; a && a != b; a = a.parentNode)
            if (c = Jd(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c))
                return a;
        return null
    }
    function Md(a) {
        if (1 == a.nodeType) {
            var b;
            if (a.getBoundingClientRect)
                b = Kd(a), b = new ud(b.left, b.top);
            else {
                b = Gd(wd(a));
                var c, d = yd(a), e = Jd(a, "position"), f = Za && d.getBoxObjectFor && !a.getBoundingClientRect && "absolute" == e && (c = d.getBoxObjectFor(a)) && (0 > c.screenX || 0 > c.screenY), g = new ud(0, 0), h;
                c = d ? yd(d) : document;
                (h = !I || I && 9 <= gb) || (wd(c), h = !0);
                h = h ? c.documentElement : c.body;
                if (a != h)
                    if (a.getBoundingClientRect)
                        c = Kd(a), d = Gd(wd(d)), g.x = c.left + d.x, g.y = c.top + d.y;
                    else if (d.getBoxObjectFor && !f)
                        c = d.getBoxObjectFor(a), d = d.getBoxObjectFor(h), 
                        g.x = c.screenX - d.screenX, g.y = c.screenY - d.screenY;
                    else {
                        c = a;
                        do {
                            g.x += c.offsetLeft;
                            g.y += c.offsetTop;
                            c != a && (g.x += c.clientLeft || 0, g.y += c.clientTop || 0);
                            if (J && "fixed" == Jd(c, "position")) {
                                g.x += d.body.scrollLeft;
                                g.y += d.body.scrollTop;
                                break
                            }
                            c = c.offsetParent
                        } while (c && c != a);
                        if (Ya || J && "absolute" == e)
                            g.y -= d.body.offsetTop;
                        for (c = a; (c = Ld(c)) && c != d.body && c != h; )
                            g.x -= c.scrollLeft, Ya && "TR" == c.tagName || (g.y -= c.scrollTop)
                    }
                b = new ud(g.x - b.x, g.y - b.y)
            }
            if (Za && !K(12)) {
                b: {
                    g = Da();
                    if (void 0 === a.style[g] && (g = (J ? "Webkit" : Za ? "Moz" : I ? 
                    "ms" : Ya ? "O" : null) + Ea(g), void 0 !== a.style[g])) {
                        g = (J ? "-webkit" : Za ? "-moz" : I ? "-ms" : Ya ? "-o" : null) + "-transform";
                        break b
                    }
                    g = "transform"
                }
                a = (a = Jd(a, g) || Jd(a, "transform")) ? (a = a.match(Nd)) ? new ud(parseFloat(a[1]), parseFloat(a[2])) : new ud(0, 0) : new ud(0, 0);
                a = new ud(b.x + a.x, b.y + a.y)
            } else
                a = b;
            return a
        }
        b = ha(a.l);
        g = a;
        a.targetTouches ? g = a.targetTouches[0] : b && a.a.targetTouches && (g = a.a.targetTouches[0]);
        return new ud(g.clientX, g.clientY)
    }
    function Od(a, b) {
        a.style.display = b ? "" : "none"
    }
    function Pd(a, b, c, d) {
        if (/^\d+px?$/.test(b))
            return parseInt(b, 10);
        var e = a.style[c], f = a.runtimeStyle[c];
        a.runtimeStyle[c] = a.currentStyle[c];
        a.style[c] = b;
        b = a.style[d];
        a.style[c] = e;
        a.runtimeStyle[c] = f;
        return b
    }
    function Qd(a, b) {
        var c = a.currentStyle ? a.currentStyle[b] : null;
        return c ? Pd(a, c, "left", "pixelLeft") : 0
    }
    var Rd = {thin: 2,medium: 4,thick: 6};
    function Sd(a, b) {
        if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null))
            return 0;
        var c = a.currentStyle ? a.currentStyle[b + "Width"] : null;
        return c in Rd ? Rd[c] : Pd(a, c, "left", "pixelLeft")
    }
    var Nd = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;
    function Td(a, b) {
        var c = document.createElement("CANVAS");
        r(a) && (c.width = a);
        r(b) && (c.height = b);
        return c.getContext("2d")
    }
    ;
    var Ud = m.devicePixelRatio || 1, Vd = !1, Wd = function() {
        if (!("HTMLCanvasElement" in m))
            return !1;
        try {
            var a = Td();
            if (null === a)
                return !1;
            r(a.setLineDash) && (Vd = !0);
            return !0
        } catch (b) {
            return !1
        }
    }(), Xd = "ontouchstart" in m, Yd = "PointerEvent" in m, Zd = !!m.navigator.msPointerEnabled;
    function $d(a, b, c) {
        L.call(this, a, c);
        this.element = b
    }
    A($d, L);
    function be(a) {
        zc.call(this);
        this.a = a || [];
        ce(this)
    }
    A(be, zc);
    k = be.prototype;
    k.clear = function() {
        for (; 0 < this.o("length"); )
            de(this, this.o("length") - 1)
    };
    k.forEach = function(a, b) {
        F(this.a, a, b)
    };
    k.item = function(a) {
        return this.a[a]
    };
    k.push = function(a) {
        var b = this.a.length;
        La(this.a, b, 0, a);
        ce(this);
        this.dispatchEvent(new $d("add", a, this));
        return b
    };
    k.remove = function(a) {
        var b = this.a, c, d;
        c = 0;
        for (d = b.length; c < d; ++c)
            if (b[c] === a)
                return de(this, c)
    };
    function de(a, b) {
        var c = a.a[b];
        Fa.splice.call(a.a, b, 1);
        ce(a);
        a.dispatchEvent(new $d("remove", c, a));
        return c
    }
    function ce(a) {
        a.q("length", a.a.length)
    }
    ;
    function ee(a) {
        if (!t(a)) {
            var b = a[0];
            b != (b | 0) && (b = b + .5 | 0);
            var c = a[1];
            c != (c | 0) && (c = c + .5 | 0);
            var d = a[2];
            d != (d | 0) && (d = d + .5 | 0);
            a = "rgba(" + b + "," + c + "," + d + "," + a[3] + ")"
        }
        return a
    }
    ;
    function fe(a) {
        if (a.classList)
            return a.classList;
        a = a.className;
        return t(a) && a.match(/\S+/g) || []
    }
    function ge(a, b) {
        var c;
        a.classList ? c = a.classList.contains(b) : (c = fe(a), c = 0 <= Ga(c, b));
        return c
    }
    function he(a, b) {
        a.classList ? a.classList.add(b) : ge(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
    }
    function ie(a, b) {
        a.classList ? a.classList.remove(b) : ge(a, b) && (a.className = Ha(fe(a), function(a) {
            return a != b
        }).join(" "))
    }
    ;
    function je(a, b, c) {
        L.call(this, a);
        this.map = b;
        this.frameState = r(c) ? c : null
    }
    A(je, L);
    function ke(a) {
        zc.call(this);
        this.element = r(a.element) ? a.element : null;
        this.A = r(a.target) ? zd(a.target) : null;
        this.e = null;
        this.j = []
    }
    A(ke, zc);
    ke.prototype.r = function() {
        Fd(this.element);
        ke.w.r.call(this)
    };
    ke.prototype.i = aa;
    ke.prototype.setMap = function(a) {
        null === this.e || Fd(this.element);
        0 != this.j.length && (F(this.j, P), this.j.length = 0);
        this.e = a;
        null !== this.e && ((null === this.A ? a.L : this.A).appendChild(this.element), this.i !== aa && this.j.push(N(a, "postrender", this.i, !1, this)), a.p())
    };
    function le(a, b) {
        this.a = a;
        this.f = b
    }
    ;
    function me(a) {
        le.call(this, a, {mousedown: this.hc,mousemove: this.ic,mouseup: this.lc,mouseover: this.kc,mouseout: this.jc});
        this.b = a.b;
        this.c = []
    }
    A(me, le);
    function ne(a, b) {
        for (var c = a.c, d = b.clientX, e = b.clientY, f = 0, g = c.length, h; f < g && (h = c[f]); f++) {
            var l = Math.abs(e - h[1]);
            if (25 >= Math.abs(d - h[0]) && 25 >= l)
                return !0
        }
        return !1
    }
    function oe(a) {
        var b = pe(a, a.a), c = b.preventDefault;
        b.preventDefault = function() {
            a.preventDefault();
            c()
        };
        b.pointerId = 1;
        b.isPrimary = !0;
        b.pointerType = "mouse";
        return b
    }
    k = me.prototype;
    k.hc = function(a) {
        if (!ne(this, a)) {
            if ((1).toString() in this.b) {
                var b = oe(a);
                W(this.a, qe, b, a);
                Tb(this.b, (1).toString())
            }
            b = oe(a);
            this.b[(1).toString()] = a;
            W(this.a, re, b, a)
        }
    };
    k.ic = function(a) {
        if (!ne(this, a)) {
            var b = oe(a);
            W(this.a, se, b, a)
        }
    };
    k.lc = function(a) {
        if (!ne(this, a)) {
            var b = M(this.b, (1).toString());
            b && b.button === a.button && (b = oe(a), W(this.a, te, b, a), Tb(this.b, (1).toString()))
        }
    };
    k.kc = function(a) {
        if (!ne(this, a)) {
            var b = oe(a);
            ue(this.a, b, a)
        }
    };
    k.jc = function(a) {
        if (!ne(this, a)) {
            var b = oe(a);
            ve(this.a, b, a)
        }
    };
    function we(a) {
        le.call(this, a, {MSPointerDown: this.qc,MSPointerMove: this.rc,MSPointerUp: this.uc,MSPointerOut: this.sc,MSPointerOver: this.tc,MSPointerCancel: this.pc,MSGotPointerCapture: this.nc,MSLostPointerCapture: this.oc});
        this.b = a.b;
        this.c = ["", "unavailable", "touch", "pen", "mouse"]
    }
    A(we, le);
    function xe(a, b) {
        var c = b;
        ga(b.a.pointerType) && (c = pe(b, b.a), c.pointerType = a.c[b.a.pointerType]);
        return c
    }
    k = we.prototype;
    k.qc = function(a) {
        this.b[a.a.pointerId] = a;
        var b = xe(this, a);
        W(this.a, re, b, a)
    };
    k.rc = function(a) {
        var b = xe(this, a);
        W(this.a, se, b, a)
    };
    k.uc = function(a) {
        var b = xe(this, a);
        W(this.a, te, b, a);
        Tb(this.b, a.a.pointerId)
    };
    k.sc = function(a) {
        var b = xe(this, a);
        ve(this.a, b, a)
    };
    k.tc = function(a) {
        var b = xe(this, a);
        ue(this.a, b, a)
    };
    k.pc = function(a) {
        var b = xe(this, a);
        W(this.a, qe, b, a);
        Tb(this.b, a.a.pointerId)
    };
    k.oc = function(a) {
        this.a.dispatchEvent(new ye("lostpointercapture", a, a.a))
    };
    k.nc = function(a) {
        this.a.dispatchEvent(new ye("gotpointercapture", a, a.a))
    };
    function ze(a) {
        le.call(this, a, {pointerdown: this.Ac,pointermove: this.Bc,pointerup: this.Ec,pointerout: this.Cc,pointerover: this.Dc,pointercancel: this.zc,gotpointercapture: this.Rb,lostpointercapture: this.gc})
    }
    A(ze, le);
    k = ze.prototype;
    k.Ac = function(a) {
        Ae(this.a, a)
    };
    k.Bc = function(a) {
        Ae(this.a, a)
    };
    k.Ec = function(a) {
        Ae(this.a, a)
    };
    k.Cc = function(a) {
        Ae(this.a, a)
    };
    k.Dc = function(a) {
        Ae(this.a, a)
    };
    k.zc = function(a) {
        Ae(this.a, a)
    };
    k.gc = function(a) {
        Ae(this.a, a)
    };
    k.Rb = function(a) {
        Ae(this.a, a)
    };
    function ye(a, b, c) {
        L.call(this, a);
        this.a = b;
        a = r(c) ? c : {};
        this.buttons = Be(a);
        this.pressure = Ce(a, this.buttons);
        this.bubbles = M(a, "bubbles", !1);
        this.cancelable = M(a, "cancelable", !1);
        this.view = M(a, "view", null);
        this.detail = M(a, "detail", null);
        this.screenX = M(a, "screenX", 0);
        this.screenY = M(a, "screenY", 0);
        this.clientX = M(a, "clientX", 0);
        this.clientY = M(a, "clientY", 0);
        this.button = M(a, "button", 0);
        this.relatedTarget = M(a, "relatedTarget", null);
        this.pointerId = M(a, "pointerId", 0);
        this.width = M(a, "width", 0);
        this.height = M(a, 
        "height", 0);
        this.pointerType = M(a, "pointerType", "");
        this.isPrimary = M(a, "isPrimary", !1);
        b.preventDefault && (this.preventDefault = function() {
            b.preventDefault()
        })
    }
    A(ye, L);
    function Be(a) {
        if (a.buttons || De)
            a = a.buttons;
        else
            switch (a.which) {
                case 1:
                    a = 1;
                    break;
                case 2:
                    a = 4;
                    break;
                case 3:
                    a = 2;
                    break;
                default:
                    a = 0
            }
        return a
    }
    function Ce(a, b) {
        var c = 0;
        a.pressure ? c = a.pressure : c = b ? .5 : 0;
        return c
    }
    var De = !1;
    try {
        De = 1 === (new MouseEvent("click", {buttons: 1})).buttons
    } catch (Ee) {
    }
    ;
    function Fe(a, b) {
        le.call(this, a, {touchstart: this.Sc,touchmove: this.Rc,touchend: this.Qc,touchcancel: this.Pc});
        this.b = a.b;
        this.h = b;
        this.c = void 0;
        this.e = 0;
        this.d = void 0
    }
    A(Fe, le);
    k = Fe.prototype;
    k.hb = function() {
        this.e = 0;
        this.d = void 0
    };
    function Ge(a, b, c) {
        b = pe(b, c);
        b.pointerId = c.identifier + 2;
        b.bubbles = !0;
        b.cancelable = !0;
        b.detail = a.e;
        b.button = 0;
        b.buttons = 1;
        b.width = c.webkitRadiusX || c.radiusX || 0;
        b.height = c.webkitRadiusY || c.radiusY || 0;
        b.pressure = c.webkitForce || c.force || .5;
        b.isPrimary = a.c === c.identifier;
        b.pointerType = "touch";
        b.clientX = c.clientX;
        b.clientY = c.clientY;
        b.screenX = c.screenX;
        b.screenY = c.screenY;
        return b
    }
    function He(a, b, c) {
        function d() {
            b.preventDefault()
        }
        var e = Array.prototype.slice.call(b.a.changedTouches), f = e.length, g, h;
        for (g = 0; g < f; ++g)
            h = Ge(a, b, e[g]), h.preventDefault = d, c.call(a, b, h)
    }
    k.Sc = function(a) {
        var b = a.a.touches, c = Rb(this.b), d = c.length;
        if (d >= b.length) {
            var e = [], f, g, h;
            for (f = 0; f < d; ++f) {
                g = c[f];
                h = this.b[g];
                var l;
                if (!(l = 1 == g))
                    a: {
                        l = b.length;
                        for (var n = void 0, q = 0; q < l; q++)
                            if (n = b[q], n.identifier === g - 2) {
                                l = !0;
                                break a
                            }
                        l = !1
                    }
                l || e.push(h.U)
            }
            for (f = 0; f < e.length; ++f)
                this.Da(a, e[f])
        }
        b = Pb(this.b);
        if (!(c = 0 === b)) {
            if (b = 1 === b)
                b = (1).toString() in this.b;
            c = b
        }
        c && (this.c = a.a.changedTouches[0].identifier, r(this.d) && m.clearTimeout(this.d));
        Ie(this, a);
        this.e++;
        He(this, a, this.yc)
    };
    k.yc = function(a, b) {
        this.b[b.pointerId] = {target: b.target,U: b,gb: b.target};
        var c = this.a;
        b.bubbles = !0;
        W(c, Je, b, a);
        c = this.a;
        b.bubbles = !1;
        W(c, Ke, b, a);
        W(this.a, re, b, a)
    };
    k.Rc = function(a) {
        a.preventDefault();
        He(this, a, this.mc)
    };
    k.mc = function(a, b) {
        var c = M(this.b, b.pointerId);
        if (c) {
            var d = c.U, e = c.gb;
            W(this.a, se, b, a);
            d && e !== b.target && (d.relatedTarget = b.target, b.relatedTarget = e, d.target = e, b.target ? (ve(this.a, d, a), ue(this.a, b, a)) : (b.target = e, b.relatedTarget = null, this.Da(a, b)));
            c.U = b;
            c.gb = b.target
        }
    };
    k.Qc = function(a) {
        Ie(this, a);
        He(this, a, this.Tc)
    };
    k.Tc = function(a, b) {
        W(this.a, te, b, a);
        this.a.U(b, a);
        var c = this.a;
        b.bubbles = !1;
        W(c, Le, b, a);
        Tb(this.b, b.pointerId);
        b.isPrimary && (this.c = void 0, this.d = m.setTimeout(z(this.hb, this), 200))
    };
    k.Pc = function(a) {
        He(this, a, this.Da)
    };
    k.Da = function(a, b) {
        W(this.a, qe, b, a);
        this.a.U(b, a);
        var c = this.a;
        b.bubbles = !1;
        W(c, Le, b, a);
        Tb(this.b, b.pointerId);
        b.isPrimary && (this.c = void 0, this.d = m.setTimeout(z(this.hb, this), 200))
    };
    function Ie(a, b) {
        var c = a.h.c, d = b.a.changedTouches[0];
        if (a.c === d.identifier) {
            var e = [d.clientX, d.clientY];
            c.push(e);
            m.setTimeout(function() {
                Ja(c, e)
            }, 2500)
        }
    }
    ;
    function Me(a) {
        Q.call(this);
        this.f = a;
        this.b = {};
        this.d = {};
        this.a = [];
        Yd ? Ne(this, new ze(this)) : Zd ? Ne(this, new we(this)) : (a = new me(this), Ne(this, a), Xd && Ne(this, new Fe(this, a)));
        a = this.a.length;
        for (var b, c = 0; c < a; c++)
            b = this.a[c], Oe(this, Rb(b.f))
    }
    A(Me, Q);
    function Ne(a, b) {
        var c = Rb(b.f);
        c && (F(c, function(a) {
            var c = b.f[a];
            c && (this.d[a] = z(c, b))
        }, a), a.a.push(b))
    }
    Me.prototype.c = function(a) {
        var b = this.d[a.type];
        b && b(a)
    };
    function Oe(a, b) {
        F(b, function(a) {
            N(this.f, a, this.c, !1, this)
        }, a)
    }
    function Pe(a, b) {
        F(b, function(a) {
            lc(this.f, a, this.c, !1, this)
        }, a)
    }
    function pe(a, b) {
        for (var c = {}, d, e = 0, f = Qe.length; e < f; e++)
            d = Qe[e][0], c[d] = a[d] || b[d] || Qe[e][1];
        return c
    }
    Me.prototype.U = function(a, b) {
        a.bubbles = !0;
        W(this, Re, a, b)
    };
    function ve(a, b, c) {
        a.U(b, c);
        b.target.contains(b.relatedTarget) || (b.bubbles = !1, W(a, Le, b, c))
    }
    function ue(a, b, c) {
        b.bubbles = !0;
        W(a, Je, b, c);
        b.target.contains(b.relatedTarget) || (b.bubbles = !1, W(a, Ke, b, c))
    }
    function W(a, b, c, d) {
        a.dispatchEvent(new ye(b, d, c))
    }
    function Ae(a, b) {
        a.dispatchEvent(new ye(b.type, b, b.a))
    }
    Me.prototype.r = function() {
        for (var a = this.a.length, b, c = 0; c < a; c++)
            b = this.a[c], Pe(this, Rb(b.f));
        Me.w.r.call(this)
    };
    var se = "pointermove", re = "pointerdown", te = "pointerup", Je = "pointerover", Re = "pointerout", Ke = "pointerenter", Le = "pointerleave", qe = "pointercancel", Qe = [["bubbles", !1], ["cancelable", !1], ["view", null], ["detail", null], ["screenX", 0], ["screenY", 0], ["clientX", 0], ["clientY", 0], ["ctrlKey", !1], ["altKey", !1], ["shiftKey", !1], ["metaKey", !1], ["button", 0], ["relatedTarget", null], ["buttons", 0], ["pointerId", 0], ["width", 0], ["height", 0], ["pressure", 0], ["tiltX", 0], ["tiltY", 0], ["pointerType", ""], ["hwTimestamp", 0], ["isPrimary", 
            !1], ["type", ""], ["target", null], ["currentTarget", null], ["which", 0]];
    function Se(a) {
        a = r(a) ? a : {};
        this.n = document.createElement("UL");
        this.k = document.createElement("LI");
        this.n.appendChild(this.k);
        Od(this.k, !1);
        this.c = r(a.collapsed) ? a.collapsed : !0;
        this.g = r(a.collapsible) ? a.collapsible : !0;
        this.g || (this.c = !1);
        var b = r(a.className) ? a.className : "ol-attribution", c = T("SPAN", {role: "tooltip"}, r(a.tipLabel) ? a.tipLabel : "Attributions");
        this.t = r(a.collapseLabel) ? a.collapseLabel : "\u00bb";
        this.v = r(a.label) ? a.label : "i";
        this.u = T("SPAN", {}, this.g && !this.c ? this.t : this.v);
        var d = T("BUTTON", 
        {"class": "ol-has-tooltip",type: "button"}, this.u);
        d.appendChild(c);
        c = new Me(d);
        Ab(this, c);
        N(c, te, this.Q, !1, this);
        N(d, "click", this.P, !1, this);
        N(d, ["mouseout", Db], function() {
            this.blur()
        }, !1);
        b = T("DIV", {"class": b + " ol-unselectable ol-control" + (this.c && this.g ? " ol-collapsed" : "") + (this.g ? "" : " ol-uncollapsible")}, this.n, d);
        ke.call(this, {element: b,target: a.target});
        this.l = !0;
        this.b = {};
        this.a = {};
        this.L = {}
    }
    A(Se, ke);
    Se.prototype.i = function(a) {
        a = a.frameState;
        if (null === a)
            this.l && (Od(this.element, !1), this.l = !1);
        else {
            var b, c, d, e, f, g, h, l, n, q = a.layerStatesArray, s = Ub(a.attributions), p = {};
            c = 0;
            for (b = q.length; c < b; c++)
                if (d = q[c].layer.a, n = v(d).toString(), l = d.i, null !== l)
                    for (d = 0, e = l.length; d < e; d++)
                        g = l[d], h = v(g).toString(), h in s || (f = a.usedTiles[n], r(f) && g.b(f) ? (h in p && delete p[h], s[h] = g) : p[h] = g);
            b = [s, p];
            c = b[0];
            b = b[1];
            for (var u in this.b)
                u in c ? (this.a[u] || (Od(this.b[u], !0), this.a[u] = !0), delete c[u]) : u in b ? (this.a[u] && (Od(this.b[u], 
                !1), delete this.a[u]), delete b[u]) : (Fd(this.b[u]), delete this.b[u], delete this.a[u]);
            for (u in c)
                n = document.createElement("LI"), n.innerHTML = c[u].a(), this.n.appendChild(n), this.b[u] = n, this.a[u] = !0;
            for (u in b)
                n = document.createElement("LI"), n.innerHTML = b[u].a(), Od(n, !1), this.n.appendChild(n), this.b[u] = n;
            u = !Sb(this.a) || !Sb(a.logos);
            this.l != u && (Od(this.element, u), this.l = u);
            u && Sb(this.a) ? he(this.element, "ol-logo-only") : ie(this.element, "ol-logo-only");
            var w;
            a = a.logos;
            u = this.L;
            for (w in u)
                w in a || (Fd(u[w]), 
                delete u[w]);
            for (var y in a)
                y in u || (w = new Image, w.src = y, c = a[y], "" === c ? c = w : (c = T("A", {href: c,target: "_blank"}), c.appendChild(w)), this.k.appendChild(c), u[y] = c);
            Od(this.k, !Sb(a))
        }
    };
    Se.prototype.P = function(a) {
        0 !== a.screenX && 0 !== a.screenY || Te(this)
    };
    Se.prototype.Q = function(a) {
        a.a.preventDefault();
        Te(this)
    };
    function Te(a) {
        var b = a.element;
        ge(b, "ol-collapsed") ? ie(b, "ol-collapsed") : he(b, "ol-collapsed");
        var b = a.u, c = a.c ? a.t : a.v;
        if ("textContent" in b)
            b.textContent = c;
        else if (3 == b.nodeType)
            b.data = c;
        else if (b.firstChild && 3 == b.firstChild.nodeType) {
            for (; b.lastChild != b.firstChild; )
                b.removeChild(b.lastChild);
            b.firstChild.data = c
        } else {
            for (var d; d = b.firstChild; )
                b.removeChild(d);
            b.appendChild(yd(b).createTextNode(String(c)))
        }
        a.c = !a.c
    }
    ;
    function Ue(a) {
        a = r(a) ? a : {};
        var b = r(a.className) ? a.className : "ol-rotate";
        this.a = T("SPAN", {"class": "ol-compass"}, r(a.label) ? a.label : "\u21e7");
        var c = T("SPAN", {role: "tooltip"}, r(a.tipLabel) ? a.tipLabel : "Reset rotation"), c = T("BUTTON", {"class": b + "-reset ol-has-tooltip",name: "ResetRotation",type: "button"}, c, this.a), d = new Me(c);
        Ab(this, d);
        N(d, te, Ue.prototype.l, !1, this);
        N(c, "click", Ue.prototype.k, !1, this);
        N(c, ["mouseout", Db], function() {
            this.blur()
        }, !1);
        b = T("DIV", b + " ol-unselectable ol-control", c);
        ke.call(this, 
        {element: b,target: a.target});
        this.c = r(a.duration) ? a.duration : 250;
        this.b = r(a.autoHide) ? a.autoHide : !0;
        this.g = void 0;
        b.style.opacity = this.b ? 0 : 1
    }
    A(Ue, ke);
    Ue.prototype.k = function(a) {
        0 !== a.screenX && 0 !== a.screenY || Ve(this)
    };
    Ue.prototype.l = function(a) {
        a.a.preventDefault();
        Ve(this)
    };
    function Ve(a) {
        for (var b = a.e, c = b.a(), d = c.J(); d < -Math.PI; )
            d += 2 * Math.PI;
        for (; d > Math.PI; )
            d -= 2 * Math.PI;
        r(d) && (0 < a.c && b.I(kd({rotation: d,duration: a.c,easing: gd})), c.k(0))
    }
    Ue.prototype.i = function(a) {
        a = a.frameState;
        if (null !== a) {
            a = a.viewState.rotation;
            if (a != this.g) {
                var b = "rotate(" + 180 * a / Math.PI + "deg)";
                this.b && (this.element.style.opacity = 0 === a ? 0 : 1);
                this.a.style.msTransform = b;
                this.a.style.webkitTransform = b;
                this.a.style.transform = b
            }
            this.g = a
        }
    };
    function We(a) {
        a = r(a) ? a : {};
        var b = r(a.className) ? a.className : "ol-zoom", c = r(a.delta) ? a.delta : 1, d = r(a.zoomInLabel) ? a.zoomInLabel : "+", e = r(a.zoomOutLabel) ? a.zoomOutLabel : "\u2212", f = r(a.zoomOutTipLabel) ? a.zoomOutTipLabel : "Zoom out", g = T("SPAN", {role: "tooltip"}, r(a.zoomInTipLabel) ? a.zoomInTipLabel : "Zoom in"), d = T("BUTTON", {"class": b + "-in ol-has-tooltip",type: "button"}, g, d), g = new Me(d);
        Ab(this, g);
        N(g, te, oa(We.prototype.c, c), !1, this);
        N(d, "click", oa(We.prototype.b, c), !1, this);
        N(d, ["mouseout", Db], function() {
            this.blur()
        }, 
        !1);
        f = T("SPAN", {role: "tooltip"}, f);
        e = T("BUTTON", {"class": b + "-out  ol-has-tooltip",type: "button"}, f, e);
        f = new Me(e);
        Ab(this, f);
        N(f, te, oa(We.prototype.c, -c), !1, this);
        N(e, "click", oa(We.prototype.b, -c), !1, this);
        N(e, ["mouseout", Db], function() {
            this.blur()
        }, !1);
        b = T("DIV", b + " ol-unselectable ol-control", d, e);
        ke.call(this, {element: b,target: a.target});
        this.a = r(a.duration) ? a.duration : 250
    }
    A(We, ke);
    We.prototype.b = function(a, b) {
        0 !== b.screenX && 0 !== b.screenY || Xe(this, a)
    };
    We.prototype.c = function(a, b) {
        b.a.preventDefault();
        Xe(this, a)
    };
    function Xe(a, b) {
        var c = a.e, d = c.a(), e = d.a();
        r(e) && (0 < a.a && c.I(ld({resolution: e,duration: a.a,easing: gd})), c = d.constrainResolution(e, b), d.c(c))
    }
    ;
    function X(a, b, c, d) {
        je.call(this, a, b, d);
        this.a = c;
        this.originalEvent = c.a;
        this.pixel = b.Ea(this.originalEvent);
        this.coordinate = b.M(this.pixel)
    }
    A(X, je);
    X.prototype.preventDefault = function() {
        X.w.preventDefault.call(this);
        this.a.preventDefault()
    };
    X.prototype.f = function() {
        X.w.f.call(this);
        this.a.f()
    };
    function Y(a, b, c, d) {
        X.call(this, a, b, c.a, d);
        this.b = c
    }
    A(Y, X);
    function Ye(a) {
        Q.call(this);
        this.b = a;
        this.f = 0;
        this.g = !1;
        this.e = this.h = this.c = null;
        a = this.b.b;
        this.k = 0;
        this.j = {};
        this.d = new Me(a);
        this.a = null;
        this.h = N(this.d, re, this.Yb, !1, this);
        this.i = N(this.d, se, this.Fc, !1, this)
    }
    A(Ye, Q);
    function Ze(a, b) {
        var c;
        c = new Y($e, a.b, b);
        a.dispatchEvent(c);
        0 !== a.f ? (m.clearTimeout(a.f), a.f = 0, c = new Y(af, a.b, b), a.dispatchEvent(c)) : a.f = m.setTimeout(z(function() {
            this.f = 0;
            var a = new Y(bf, this.b, b);
            this.dispatchEvent(a)
        }, a), 250)
    }
    function cf(a, b) {
        b.type == df || b.type == ef ? delete a.j[b.pointerId] : b.type == ff && (a.j[b.pointerId] = !0);
        a.k = Pb(a.j)
    }
    k = Ye.prototype;
    k.Ya = function(a) {
        cf(this, a);
        var b = new Y(df, this.b, a);
        this.dispatchEvent(b);
        0 === this.k && (F(this.c, P), this.c = null, Bb(this.a), this.a = null);
        !this.g && 0 === a.button && Ze(this, this.e)
    };
    k.Yb = function(a) {
        cf(this, a);
        var b = new Y(ff, this.b, a);
        this.dispatchEvent(b);
        this.e = a;
        this.g = !1;
        null === this.c && (this.a = new Me(document), this.c = [N(this.a, gf, this.Zb, !1, this), N(this.a, df, this.Ya, !1, this), N(this.d, ef, this.Ya, !1, this)]);
        a.preventDefault()
    };
    k.Zb = function(a) {
        if (a.clientX != this.e.clientX || a.clientY != this.e.clientY) {
            this.g = !0;
            var b = new Y(hf, this.b, a);
            this.dispatchEvent(b)
        }
        a.preventDefault()
    };
    k.Fc = function(a) {
        this.dispatchEvent(new Y(a.type, this.b, a))
    };
    k.r = function() {
        null !== this.i && (P(this.i), this.i = null);
        null !== this.h && (P(this.h), this.h = null);
        null !== this.c && (F(this.c, P), this.c = null);
        null !== this.a && (Bb(this.a), this.a = null);
        null !== this.d && (Bb(this.d), this.d = null);
        Ye.w.r.call(this)
    };
    var bf = "singleclick", $e = "click", af = "dblclick", hf = "pointerdrag", gf = "pointermove", ff = "pointerdown", df = "pointerup", ef = "pointercancel", jf = {fd: bf,Vc: $e,Wc: af,Zc: hf,bd: gf,Yc: ff,ed: df,dd: "pointerover",cd: "pointerout",$c: "pointerenter",ad: "pointerleave",Xc: ef};
    function kf(a) {
        a = a.a;
        return a.b && !a.i && a.e
    }
    function lf(a) {
        a = a.a;
        return !a.b && !a.i && !a.e
    }
    function mf(a) {
        a = a.a;
        return !a.b && !a.i && a.e
    }
    function nf(a) {
        a = a.a.target.tagName;
        return "INPUT" !== a && "SELECT" !== a && "TEXTAREA" !== a
    }
    ;
    function of() {
        wc.call(this);
        this.extent = void 0;
        this.h = -1
    }
    A(of, wc);
    var pf = [0, 0, 0, 1], qf = [], rf = [0, 0, 0, 1];
    function sf(a) {
        a = r(a) ? a : {};
        this.ya = r(a.color) ? a.color : null;
        this.Va = a.lineCap;
        this.a = r(a.lineDash) ? a.lineDash : null;
        this.Wa = a.lineJoin;
        this.Xa = a.miterLimit;
        this.b = a.width
    }
    sf.prototype.getLineDash = function() {
        return this.a
    };
    sf.prototype.R = function() {
        return this.b
    };
    function tf(a) {
        a = r(a) ? a : {};
        this.$a = r(a.fill) ? a.fill : null;
        this.a = r(a.image) ? a.image : null;
        this.ab = r(a.stroke) ? a.stroke : null;
        this.bb = r(a.text) ? a.text : null
    }
    tf.prototype.V = function() {
        return this.a
    };
    function uf(a, b, c, d, e, f, g) {
        L.call(this, a, b);
        this.vectorContext = c;
        this.frameState = e;
        this.context = f;
        this.glContext = g
    }
    A(uf, L);
    function vf(a, b, c, d, e, f) {
        var g = e[0], h = e[1], l = e[4], n = e[5], q = e[12];
        e = e[13];
        for (var s = r(f) ? f : [], p = 0; b < c; b += d) {
            var u = a[b], w = a[b + 1];
            s[p++] = g * u + l * w + q;
            s[p++] = h * u + n * w + e
        }
        r(f) && s.length != p && (s.length = p);
        return s
    }
    ;
    function wf() {
        of.call(this);
        this.a = 2;
        this.c = null
    }
    A(wf, of);
    function xf(a) {
        if ("XY" == a)
            return 2;
        if ("XYZ" == a || "XYM" == a)
            return 3;
        if ("XYZM" == a)
            return 4
    }
    wf.prototype.b = function(a) {
        if (this.h != this.f) {
            for (var b = this.c, c = this.c.length, d = this.a, e = Nc(Infinity, Infinity, -Infinity, -Infinity, this.extent), f = 0; f < c; f += d) {
                var g = e, h = b[f], l = b[f + 1];
                g[0] = Math.min(g[0], h);
                g[1] = Math.min(g[1], l);
                g[2] = Math.max(g[2], h);
                g[3] = Math.max(g[3], l)
            }
            this.extent = e;
            this.h = this.f
        }
        b = this.extent;
        r(a) ? (a[0] = b[0], a[1] = b[1], a[2] = b[2], a[3] = b[3]) : a = b;
        return a
    };
    function yf(a, b, c, d, e, f) {
        for (var g = !1, h = a[c - d], l = a[c - d + 1]; b < c; b += d) {
            var n = a[b], q = a[b + 1];
            l > f != q > f && e < (n - h) * (f - l) / (q - l) + h && (g = !g);
            h = n;
            l = q
        }
        return g
    }
    ;
    function zf(a, b, c, d) {
        for (var e = 0, f = a[c - d], g = a[c - d + 1]; b < c; b += d)
            var h = a[b], l = a[b + 1], e = e + (h - f) * (l + g), f = h, g = l;
        return 0 < e
    }
    ;
    function Af(a, b) {
        wf.call(this);
        this.d = [];
        this.g = -1;
        this.i = null;
        this.k = -1;
        this.e = null;
        if (null === a) {
            var c = this.d;
            this.a = xf("XY");
            this.c = null;
            this.d = c
        } else {
            a: {
                c = a;
                if (r(b))
                    c = xf(b);
                else {
                    var d;
                    for (d = 0; 2 > d; ++d) {
                        if (0 === c.length) {
                            this.a = 2;
                            break a
                        }
                        c = c[0]
                    }
                    c = c.length
                }
                this.a = c
            }
            null === this.c && (this.c = []);
            c = this.c;
            d = this.a;
            var e = this.d, f = 0, e = r(e) ? e : [], g = 0, h, l;
            h = 0;
            for (l = a.length; h < l; ++h) {
                var n;
                n = c;
                for (var q = a[h], s = d, p = void 0, u = void 0, p = 0, u = q.length; p < u; ++p) {
                    var w = q[p], y;
                    for (y = 0; y < s; ++y)
                        n[f++] = w[y]
                }
                n = f;
                f = e[g++] = n
            }
            e.length = 
            g;
            this.c.length = 0 === e.length ? 0 : e[e.length - 1]
        }
        this.K()
    }
    A(Af, wf);
    function Bf(a) {
        if (a.k != a.f) {
            var b = a.c, c;
            a: {
                c = a.d;
                var d = 0, e, f;
                e = 0;
                for (f = c.length; e < f; ++e) {
                    var g = c[e], d = zf(b, d, g, a.a);
                    if (0 === e ? !d : d) {
                        c = !1;
                        break a
                    }
                    d = g
                }
                c = !0
            }
            if (c)
                a.e = b;
            else {
                a.e = b.slice();
                c = b = a.e;
                e = a.d;
                f = a.a;
                for (var h = 0, g = 0, d = e.length; g < d; ++g) {
                    var l = e[g], n = zf(c, h, l, f);
                    if (0 === g ? !n : n)
                        for (var n = c, q = l, s = f; h < q - s; ) {
                            var p;
                            for (p = 0; p < s; ++p) {
                                var u = n[h + p];
                                n[h + p] = n[q - s + p];
                                n[q - s + p] = u
                            }
                            h += s;
                            q -= s
                        }
                    h = l
                }
                b.length = h
            }
            a.k = a.f
        }
        return a.e
    }
    Af.prototype.j = function() {
        return "Polygon"
    };
    var Cf = ["Polygon", "LineString", "Image", "Text"];
    function Df() {
        this.a = {};
        this.b = 0
    }
    Df.b = function() {
        return Df.a ? Df.a : Df.a = new Df
    };
    Df.prototype.clear = function() {
        this.a = {};
        this.b = 0
    };
    function Ef(a, b) {
        Q.call(this);
        this.a = a;
        this.state = b
    }
    A(Ef, Q);
    Ef.prototype.Ja = function() {
        return v(this).toString()
    };
    Ef.prototype.s = function() {
        return this.state
    };
    function Ff(a, b, c, d, e) {
        Ef.call(this, a, b);
        this.f = c;
        this.b = new Image;
        null !== d && (this.b.crossOrigin = d);
        this.d = {};
        this.c = null;
        this.e = e
    }
    A(Ff, Ef);
    k = Ff.prototype;
    k.V = function(a) {
        if (r(a)) {
            var b = v(a);
            if (b in this.d)
                return this.d[b];
            a = Sb(this.d) ? this.b : this.b.cloneNode(!1);
            return this.d[b] = a
        }
        return this.b
    };
    k.Ja = function() {
        return this.f
    };
    k.vc = function() {
        this.state = 3;
        F(this.c, P);
        this.c = null;
        this.dispatchEvent("change")
    };
    k.wc = function() {
        this.state = this.b.naturalWidth && this.b.naturalHeight ? 2 : 4;
        F(this.c, P);
        this.c = null;
        this.dispatchEvent("change")
    };
    k.load = function() {
        0 == this.state && (this.state = 1, this.c = [kc(this.b, "error", this.vc, !1, this), kc(this.b, "load", this.wc, !1, this)], this.e(this, this.f))
    };
    function Gf() {
        wc.call(this);
        this.i = null
    }
    A(Gf, wc);
    Gf.prototype.setMap = function(a) {
        this.i = a
    };
    function Hf(a, b, c, d, e) {
        if (null != c) {
            var f = b.J(), g = b.b();
            r(f) && r(g) && r(e) && 0 < e && (a.I(kd({rotation: f,duration: e,easing: gd})), r(d) && a.I(jd({source: g,duration: e,easing: gd})));
            b.rotate(c, d)
        }
    }
    function If(a, b, c, d, e) {
        var f = b.a();
        c = b.constrainResolution(f, c, 0);
        Jf(a, b, c, d, e)
    }
    function Jf(a, b, c, d, e) {
        if (null != c) {
            var f = b.a(), g = b.b();
            r(f) && r(g) && r(e) && 0 < e && (a.I(ld({resolution: f,duration: e,easing: gd})), r(d) && a.I(jd({source: g,duration: e,easing: gd})));
            if (null != d) {
                var h;
                a = b.b();
                e = b.a();
                r(a) && r(e) && (h = [d[0] - c * (d[0] - a[0]) / e, d[1] - c * (d[1] - a[1]) / e]);
                b.H(h)
            }
            b.c(c)
        }
    }
    ;
    function Kf(a) {
        a = r(a) ? a : {};
        this.a = r(a.delta) ? a.delta : 1;
        Gf.call(this);
        this.b = r(a.duration) ? a.duration : 250
    }
    A(Kf, Gf);
    Kf.prototype.ga = function(a) {
        var b = !1, c = a.a;
        if (a.type == af) {
            var b = a.map, d = a.coordinate, c = c.e ? -this.a : this.a, e = b.a();
            If(b, e, c, d, this.b);
            a.preventDefault();
            b = !0
        }
        return !b
    };
    var Lf;
    function Mf() {
        var a = m.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && (a = function() {
            var a = document.createElement("iframe");
            a.style.display = "none";
            a.src = "";
            document.documentElement.appendChild(a);
            var b = a.contentWindow, a = b.document;
            a.open();
            a.write("");
            a.close();
            var c = "callImmediate" + Math.random(), d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host, a = z(function(a) {
                if (a.origin == d || a.data == c)
                    this.port1.onmessage()
            }, this);
            b.addEventListener("message", a, !1);
            this.port1 = {};
            this.port2 = {postMessage: function() {
                    b.postMessage(c, d)
                }}
        });
        if ("undefined" !== typeof a) {
            var b = new a, c = {}, d = c;
            b.port1.onmessage = function() {
                c = c.next;
                var a = c.Oa;
                c.Oa = null;
                a()
            };
            return function(a) {
                d.next = {Oa: a};
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return "undefined" !== typeof document && "onreadystatechange" in document.createElement("script") ? function(a) {
            var b = document.createElement("script");
            b.onreadystatechange = function() {
                b.onreadystatechange = null;
                b.parentNode.removeChild(b);
                b = null;
                a();
                a = null
            };
            document.documentElement.appendChild(b)
        } : function(a) {
            m.setTimeout(a, 0)
        }
    }
    ;
    function Nf() {
        Gf.call(this);
        this.c = !1;
        this.h = {};
        this.a = []
    }
    A(Nf, Gf);
    function Of(a) {
        for (var b = a.length, c = 0, d = 0, e = 0; e < b; e++)
            c += a[e].clientX, d += a[e].clientY;
        return [c / b, d / b]
    }
    k = Nf.prototype;
    k.X = aa;
    k.Y = qc;
    k.W = qc;
    k.ga = function(a) {
        if (!(a instanceof Y))
            return !0;
        var b = !1, c = a.type;
        if (c === ff || c === hf || c === df)
            c = a.b, a.type == df ? delete this.h[c.pointerId] : a.type == ff ? this.h[c.pointerId] = c : c.pointerId in this.h && (this.h[c.pointerId] = c), this.a = Qb(this.h);
        this.c && (a.type == hf ? this.X(a) : a.type == df && (this.c = this.Y(a)));
        a.type == ff && (this.c = a = this.W(a), b = this.kb(a));
        return !b
    };
    k.kb = qc;
    function Pf(a) {
        this.c = this.b = this.d = this.f = this.a = null;
        this.h = a
    }
    A(Pf, xb);
    function Qf(a) {
        var b = a.d, c = a.b;
        a = Ia([b, [b[0], c[1]], c, [c[0], b[1]]], a.a.M, a.a);
        a[4] = a[0].slice();
        return new Af([a])
    }
    Pf.prototype.r = function() {
        this.setMap(null)
    };
    Pf.prototype.e = function(a) {
        var b = this.c, c = this.h;
        Rf(a.vectorContext, function(a) {
            a.Nc(c.$a, c.ab);
            a.Oc(c.bb);
            a.Qa(b)
        })
    };
    Pf.prototype.Fa = function() {
        return this.c
    };
    function Sf(a) {
        null === a.a || null === a.d || null === a.b || a.a.p()
    }
    Pf.prototype.setMap = function(a) {
        null !== this.f && (P(this.f), this.f = null, this.a.p(), this.a = null);
        this.a = a;
        null !== this.a && (this.f = N(a, "postcompose", this.e, !1, this), Sf(this))
    };
    function Tf(a, b) {
        L.call(this, a);
        this.coordinate = b
    }
    A(Tf, L);
    function Uf(a) {
        Nf.call(this);
        a = r(a) ? a : {};
        this.d = new Pf(r(a.style) ? a.style : null);
        this.b = null;
        this.e = r(a.condition) ? a.condition : rc
    }
    A(Uf, Nf);
    k = Uf.prototype;
    k.X = function(a) {
        if (1 == a.b.pointerId) {
            var b = this.d;
            a = a.pixel;
            b.d = this.b;
            b.b = a;
            b.c = Qf(b);
            Sf(b)
        }
    };
    k.Fa = function() {
        return this.d.Fa()
    };
    k.eb = aa;
    k.Y = function(a) {
        if (1 != a.b.pointerId)
            return !0;
        this.d.setMap(null);
        var b = a.pixel[0] - this.b[0], c = a.pixel[1] - this.b[1];
        64 <= b * b + c * c && (this.eb(a), this.dispatchEvent(new Tf("boxend", a.coordinate)));
        return !1
    };
    k.W = function(a) {
        if (1 == a.b.pointerId && Hb(a.a) && this.e(a)) {
            this.b = a.pixel;
            this.d.setMap(a.map);
            var b = this.d, c = this.b;
            b.d = this.b;
            b.b = c;
            b.c = Qf(b);
            Sf(b);
            this.dispatchEvent(new Tf("boxstart", a.coordinate));
            return !0
        }
        return !1
    };
    k.kb = sc;
    function Vf() {
        this.a = [];
        this.b = this.c = 0
    }
    function Wf(a, b) {
        var c = a.b, d = .05 - c, e = Math.log(.05 / a.b) / -.005;
        return jd({source: b,duration: e,easing: function(a) {
                return c * (Math.exp(-.005 * a * e) - 1) / d
            }})
    }
    ;
    function Xf(a) {
        Nf.call(this);
        this.b = (r(a) ? a : {}).kinetic;
        this.d = this.e = null;
        this.j = r(a.condition) ? a.condition : lf;
        this.g = !1
    }
    A(Xf, Nf);
    Xf.prototype.X = function(a) {
        var b = Of(this.a);
        this.b && this.b.a.push(b[0], b[1], pa());
        if (null !== this.d) {
            var c = this.d[0] - b[0], d = b[1] - this.d[1];
            a = a.map;
            var e = a.a(), f = e.s(), d = c = [c, d], g = f.resolution;
            d[0] *= g;
            d[1] *= g;
            Hc(c, f.rotation);
            Gc(c, f.center);
            c = e.e(c);
            a.p();
            e.H(c)
        }
        this.d = b
    };
    Xf.prototype.Y = function(a) {
        a = a.map;
        var b = a.a();
        if (0 === this.a.length) {
            var c;
            if (c = !this.g && this.b)
                if (c = this.b, 6 > c.a.length)
                    c = !1;
                else {
                    var d = pa() - 100, e = c.a.length - 3;
                    if (c.a[e + 2] < d)
                        c = !1;
                    else {
                        for (var f = e - 3; 0 < f && c.a[f + 2] > d; )
                            f -= 3;
                        var d = c.a[e + 2] - c.a[f + 2], g = c.a[e] - c.a[f], e = c.a[e + 1] - c.a[f + 1];
                        c.c = Math.atan2(e, g);
                        c.b = Math.sqrt(g * g + e * e) / d;
                        c = .05 < c.b
                    }
                }
            c && (c = (.05 - this.b.b) / -.005, e = this.b.c, f = b.b(), this.e = Wf(this.b, f), a.I(this.e), f = a.ja(f), c = a.M([f[0] - c * Math.cos(e), f[1] - c * Math.sin(e)]), c = b.e(c), b.H(c));
            fd(b, -1);
            a.p();
            return !1
        }
        this.d = null;
        return !0
    };
    Xf.prototype.W = function(a) {
        if (0 < this.a.length && this.j(a)) {
            var b = a.map, c = b.a();
            this.d = null;
            this.c || fd(c, 1);
            b.p();
            null !== this.e && Ja(b.t, this.e) && (c.H(a.frameState.viewState.center), this.e = null);
            this.b && (a = this.b, a.a.length = 0, a.c = 0, a.b = 0);
            this.g = 1 < this.a.length;
            return !0
        }
        return !1
    };
    function Yf(a) {
        a = r(a) ? a : {};
        Nf.call(this);
        this.d = r(a.condition) ? a.condition : kf;
        this.b = void 0
    }
    A(Yf, Nf);
    Yf.prototype.X = function(a) {
        if (1 == a.b.pointerId) {
            var b = a.map, c = b.k();
            a = a.pixel;
            c = Math.atan2(c[1] / 2 - a[1], a[0] - c[0] / 2);
            if (r(this.b)) {
                a = c - this.b;
                var d = b.a(), e = d.s();
                b.p();
                Hf(b, d, e.rotation - a)
            }
            this.b = c
        }
    };
    Yf.prototype.Y = function(a) {
        if (1 != a.b.pointerId)
            return !0;
        a = a.map;
        var b = a.a();
        fd(b, -1);
        var c = b.s().rotation, c = b.constrainRotation(c, 0);
        Hf(a, b, c, void 0, 250);
        return !1
    };
    Yf.prototype.W = function(a) {
        return 1 == a.b.pointerId && Hb(a.a) && this.d(a) ? (a = a.map, fd(a.a(), 1), a.p(), this.b = void 0, !0) : !1
    };
    function Zf(a) {
        a = r(a) ? a : {};
        Uf.call(this, {condition: r(a.condition) ? a.condition : mf,style: r(a.style) ? a.style : new tf({stroke: new sf({color: [0, 0, 255, 1]})})})
    }
    A(Zf, Uf);
    Zf.prototype.eb = function() {
        var a = this.i, b = a.a(), c = this.Fa().b(), d = Oc(c), e = a.k(), c = b.g(c, e), c = b.constrainResolution(c, 0, void 0);
        Jf(a, b, c, d, 200)
    };
    function $f(a, b, c) {
        xb.call(this);
        this.d = a;
        this.c = c;
        this.a = b || window;
        this.b = z(this.Pa, this)
    }
    A($f, xb);
    k = $f.prototype;
    k.D = null;
    k.Ka = !1;
    k.start = function() {
        ag(this);
        this.Ka = !1;
        var a = bg(this), b = cg(this);
        a && !b && this.a.mozRequestAnimationFrame ? (this.D = N(this.a, "MozBeforePaint", this.b), this.a.mozRequestAnimationFrame(null), this.Ka = !0) : this.D = a && b ? a.call(this.a, this.b) : this.a.setTimeout(tc(this.b), 20)
    };
    function ag(a) {
        if (null != a.D) {
            var b = bg(a), c = cg(a);
            b && !c && a.a.mozRequestAnimationFrame ? P(a.D) : b && c ? c.call(a.a, a.D) : a.a.clearTimeout(a.D)
        }
        a.D = null
    }
    k.Pa = function() {
        this.Ka && this.D && P(this.D);
        this.D = null;
        this.d.call(this.c, pa())
    };
    k.r = function() {
        ag(this);
        $f.w.r.call(this)
    };
    function bg(a) {
        a = a.a;
        return a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame || null
    }
    function cg(a) {
        a = a.a;
        return a.cancelRequestAnimationFrame || a.webkitCancelRequestAnimationFrame || a.mozCancelRequestAnimationFrame || a.oCancelRequestAnimationFrame || a.msCancelRequestAnimationFrame || null
    }
    ;
    new function() {
        pa()
    };
    function dg(a) {
        Q.call(this);
        this.ia = a || window;
        this.wa = N(this.ia, "resize", this.ac, !1, this);
        this.sa = Cd(this.ia || window)
    }
    A(dg, Q);
    k = dg.prototype;
    k.wa = null;
    k.ia = null;
    k.sa = null;
    k.r = function() {
        dg.w.r.call(this);
        this.wa && (P(this.wa), this.wa = null);
        this.sa = this.ia = null
    };
    k.ac = function() {
        var a = Cd(this.ia || window), b = this.sa;
        a == b || a && b && a.width == b.width && a.height == b.height || (this.sa = a, this.dispatchEvent("resize"))
    };
    function eg(a, b, c, d, e) {
        if (!(I || J && K("525")))
            return !0;
        if (Wa && e)
            return fg(a);
        if (e && !d)
            return !1;
        ga(b) && (b = gg(b));
        if (!c && (17 == b || 18 == b || Wa && 91 == b))
            return !1;
        if (J && d && c)
            switch (a) {
                case 220:
                case 219:
                case 221:
                case 192:
                case 186:
                case 189:
                case 187:
                case 188:
                case 190:
                case 191:
                case 192:
                case 222:
                    return !1
            }
        if (I && d && b == a)
            return !1;
        switch (a) {
            case 13:
                return !0;
            case 27:
                return !J
        }
        return fg(a)
    }
    function fg(a) {
        if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || J && 0 == a)
            return !0;
        switch (a) {
            case 32:
            case 63:
            case 107:
            case 109:
            case 110:
            case 111:
            case 186:
            case 59:
            case 189:
            case 187:
            case 61:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
            case 219:
            case 220:
            case 221:
                return !0;
            default:
                return !1
        }
    }
    function gg(a) {
        if (Za)
            a = hg(a);
        else if (Wa && J)
            a: switch (a) {
                case 93:
                    a = 91;
                    break a
            }
        return a
    }
    function hg(a) {
        switch (a) {
            case 61:
                return 187;
            case 59:
                return 186;
            case 173:
                return 189;
            case 224:
                return 91;
            case 0:
                return 224;
            default:
                return a
        }
    }
    ;
    function ig(a, b) {
        Q.call(this);
        a && jg(this, a, b)
    }
    A(ig, Q);
    k = ig.prototype;
    k.fa = null;
    k.ua = null;
    k.Ha = null;
    k.va = null;
    k.B = -1;
    k.O = -1;
    k.Ca = !1;
    var kg = {3: 13,12: 144,63232: 38,63233: 40,63234: 37,63235: 39,63236: 112,63237: 113,63238: 114,63239: 115,63240: 116,63241: 117,63242: 118,63243: 119,63244: 120,63245: 121,63246: 122,63247: 123,63248: 44,63272: 46,63273: 36,63275: 35,63276: 33,63277: 34,63289: 144,63302: 45}, lg = {Up: 38,Down: 40,Left: 37,Right: 39,Enter: 13,F1: 112,F2: 113,F3: 114,F4: 115,F5: 116,F6: 117,F7: 118,F8: 119,F9: 120,F10: 121,F11: 122,F12: 123,"U+007F": 46,Home: 36,End: 35,PageUp: 33,PageDown: 34,Insert: 45}, mg = I || J && K("525"), ng = Wa && Za;
    ig.prototype.a = function(a) {
        J && (17 == this.B && !a.g || 18 == this.B && !a.b || Wa && 91 == this.B && !a.k) && (this.O = this.B = -1);
        -1 == this.B && (a.g && 17 != a.c ? this.B = 17 : a.b && 18 != a.c ? this.B = 18 : a.k && 91 != a.c && (this.B = 91));
        mg && !eg(a.c, this.B, a.e, a.g, a.b) ? this.handleEvent(a) : (this.O = gg(a.c), ng && (this.Ca = a.b))
    };
    ig.prototype.b = function(a) {
        this.O = this.B = -1;
        this.Ca = a.b
    };
    ig.prototype.handleEvent = function(a) {
        var b = a.a, c, d, e = b.altKey;
        I && "keypress" == a.type ? (c = this.O, d = 13 != c && 27 != c ? b.keyCode : 0) : J && "keypress" == a.type ? (c = this.O, d = 0 <= b.charCode && 63232 > b.charCode && fg(c) ? b.charCode : 0) : Ya ? (c = this.O, d = fg(c) ? b.keyCode : 0) : (c = b.keyCode || this.O, d = b.charCode || 0, ng && (e = this.Ca), Wa && 63 == d && 224 == c && (c = 191));
        var f = c = gg(c), g = b.keyIdentifier;
        c ? 63232 <= c && c in kg ? f = kg[c] : 25 == c && a.e && (f = 9) : g && g in lg && (f = lg[g]);
        this.B = f;
        a = new og(f, d, 0, b);
        a.b = e;
        this.dispatchEvent(a)
    };
    function jg(a, b, c) {
        a.va && pg(a);
        a.fa = b;
        a.ua = N(a.fa, "keypress", a, c);
        a.Ha = N(a.fa, "keydown", a.a, c, a);
        a.va = N(a.fa, "keyup", a.b, c, a)
    }
    function pg(a) {
        a.ua && (P(a.ua), P(a.Ha), P(a.va), a.ua = null, a.Ha = null, a.va = null);
        a.fa = null;
        a.B = -1;
        a.O = -1
    }
    ig.prototype.r = function() {
        ig.w.r.call(this);
        pg(this)
    };
    function og(a, b, c, d) {
        Fb.call(this, d);
        this.type = "key";
        this.c = a;
        this.j = b
    }
    A(og, Fb);
    function qg(a, b) {
        Q.call(this);
        var c = this.a = a;
        (c = ia(c) && 1 == c.nodeType ? this.a : this.a ? this.a.body : null) && Jd(c, "direction");
        this.b = N(this.a, Za ? "DOMMouseScroll" : "mousewheel", this, b)
    }
    A(qg, Q);
    qg.prototype.handleEvent = function(a) {
        var b = 0, c = 0, d = 0;
        a = a.a;
        if ("mousewheel" == a.type) {
            c = 1;
            if (I || J && (Xa || K("532.0")))
                c = 40;
            d = rg(-a.wheelDelta, c);
            r(a.wheelDeltaX) ? (b = rg(-a.wheelDeltaX, c), c = rg(-a.wheelDeltaY, c)) : c = d
        } else
            d = a.detail, 100 < d ? d = 3 : -100 > d && (d = -3), r(a.axis) && a.axis === a.HORIZONTAL_AXIS ? b = d : c = d;
        ga(this.c) && ib(b, -this.c, this.c);
        ga(this.d) && (c = ib(c, -this.d, this.d));
        b = new sg(d, a, 0, c);
        this.dispatchEvent(b)
    };
    function rg(a, b) {
        return J && (Wa || bb) && 0 != a % b ? a : a / b
    }
    qg.prototype.r = function() {
        qg.w.r.call(this);
        P(this.b);
        this.b = null
    };
    function sg(a, b, c, d) {
        Fb.call(this, b);
        this.type = "mousewheel";
        this.detail = a;
        this.F = d
    }
    A(sg, Fb);
    function tg(a) {
        wc.call(this);
        ed(a.projection);
        this.i = r(a.attributions) ? a.attributions : null;
        this.g = a.logo;
        this.j = r(a.state) ? a.state : "ready"
    }
    A(tg, wc);
    tg.prototype.s = function() {
        return this.j
    };
    function Z(a) {
        zc.call(this);
        a = Ub(a);
        a.brightness = r(a.brightness) ? a.brightness : 0;
        a.contrast = r(a.contrast) ? a.contrast : 1;
        a.hue = r(a.hue) ? a.hue : 0;
        a.opacity = r(a.opacity) ? a.opacity : 1;
        a.saturation = r(a.saturation) ? a.saturation : 1;
        a.visible = r(a.visible) ? a.visible : !0;
        a.maxResolution = r(a.maxResolution) ? a.maxResolution : Infinity;
        a.minResolution = r(a.minResolution) ? a.minResolution : 0;
        this.Z(a)
    }
    A(Z, zc);
    Z.prototype.g = function() {
        return this.o("brightness")
    };
    Z.prototype.getBrightness = Z.prototype.g;
    Z.prototype.i = function() {
        return this.o("contrast")
    };
    Z.prototype.getContrast = Z.prototype.i;
    Z.prototype.j = function() {
        return this.o("hue")
    };
    Z.prototype.getHue = Z.prototype.j;
    function ug(a) {
        var b = a.g(), c = a.i(), d = a.j(), e = a.A(), f = a.t(), g = a.u(), h = a.e(), l = a.b(), n = a.k(), q = a.l();
        return {layer: a,brightness: r(b) ? ib(b, -1, 1) : 0,contrast: r(c) ? Math.max(c, 0) : 1,hue: r(d) ? d : 0,opacity: r(e) ? ib(e, 0, 1) : 1,saturation: r(f) ? Math.max(f, 0) : 1,Ba: g,visible: r(h) ? !!h : !0,extent: l,maxResolution: r(n) ? n : Infinity,minResolution: r(q) ? Math.max(q, 0) : 0}
    }
    Z.prototype.b = function() {
        return this.o("extent")
    };
    Z.prototype.getExtent = Z.prototype.b;
    Z.prototype.k = function() {
        return this.o("maxResolution")
    };
    Z.prototype.getMaxResolution = Z.prototype.k;
    Z.prototype.l = function() {
        return this.o("minResolution")
    };
    Z.prototype.getMinResolution = Z.prototype.l;
    Z.prototype.A = function() {
        return this.o("opacity")
    };
    Z.prototype.getOpacity = Z.prototype.A;
    Z.prototype.t = function() {
        return this.o("saturation")
    };
    Z.prototype.getSaturation = Z.prototype.t;
    Z.prototype.e = function() {
        return this.o("visible")
    };
    Z.prototype.getVisible = Z.prototype.e;
    Z.prototype.Q = function(a) {
        this.q("brightness", a)
    };
    Z.prototype.setBrightness = Z.prototype.Q;
    Z.prototype.da = function(a) {
        this.q("contrast", a)
    };
    Z.prototype.setContrast = Z.prototype.da;
    Z.prototype.ja = function(a) {
        this.q("hue", a)
    };
    Z.prototype.setHue = Z.prototype.ja;
    Z.prototype.P = function(a) {
        this.q("extent", a)
    };
    Z.prototype.setExtent = Z.prototype.P;
    Z.prototype.ka = function(a) {
        this.q("maxResolution", a)
    };
    Z.prototype.setMaxResolution = Z.prototype.ka;
    Z.prototype.la = function(a) {
        this.q("minResolution", a)
    };
    Z.prototype.setMinResolution = Z.prototype.la;
    Z.prototype.ma = function(a) {
        this.q("opacity", a)
    };
    Z.prototype.setOpacity = Z.prototype.ma;
    Z.prototype.oa = function(a) {
        this.q("saturation", a)
    };
    Z.prototype.setSaturation = Z.prototype.oa;
    Z.prototype.Aa = function(a) {
        this.q("visible", a)
    };
    Z.prototype.setVisible = Z.prototype.Aa;
    function vg(a) {
        var b = Ub(a);
        delete b.source;
        Z.call(this, b);
        this.a = a.source;
        N(this.a, "change", this.L, !1, this)
    }
    A(vg, Z);
    vg.prototype.c = function(a) {
        a = r(a) ? a : [];
        a.push(ug(this));
        return a
    };
    vg.prototype.u = function() {
        return this.a.s()
    };
    vg.prototype.L = function() {
        this.K()
    };
    function wg(a) {
        this.minZoom = r(a.minZoom) ? a.minZoom : 0;
        this.d = a.resolutions;
        this.maxZoom = this.d.length - 1;
        this.b = r(a.origin) ? a.origin : null;
        this.c = null;
        r(a.origins) && (this.c = a.origins);
        this.f = null;
        r(a.tileSizes) && (this.f = a.tileSizes);
        this.g = r(a.tileSize) ? a.tileSize : null === this.f ? 256 : void 0
    }
    var xg = [0, 0, 0];
    wg.prototype.e = function(a, b, c, d, e) {
        e = yg(this, a, e);
        for (a = a[0] - 1; a >= this.minZoom; ) {
            if (b.call(c, a, zg(this, e, a, d)))
                return !0;
            --a
        }
        return !1
    };
    wg.prototype.a = function(a) {
        return this.d[a]
    };
    wg.prototype.h = function(a, b, c) {
        return a[0] < this.maxZoom ? (c = yg(this, a, c), zg(this, c, a[0] + 1, b)) : null
    };
    function Ag(a, b, c, d) {
        Bg(a, b[0], b[1], c, !1);
        var e = xg[1], f = xg[2];
        Bg(a, b[2], b[3], c, !0);
        return qd(e, xg[1], f, xg[2], d)
    }
    function zg(a, b, c, d) {
        c = a.a(c);
        return Ag(a, b, c, d)
    }
    function yg(a, b, c) {
        var d = null === a.b ? a.c[b[0]] : a.b, e = a.a(b[0]);
        a = Cg(a, b[0]);
        var f = d[0] + b[1] * a * e;
        b = d[1] + b[2] * a * e;
        return Nc(f, b, f + a * e, b + a * e, c)
    }
    function Bg(a, b, c, d, e) {
        var f = mb(a.d, d, 0), g = d / a.a(f), h = null === a.b ? a.c[f] : a.b;
        a = Cg(a, f);
        b = g * (b - h[0]) / (d * a);
        c = g * (c - h[1]) / (d * a);
        e ? (b = Math.ceil(b) - 1, c = Math.ceil(c) - 1) : (b = Math.floor(b), c = Math.floor(c));
        md(f, b, c, xg)
    }
    function Cg(a, b) {
        return r(a.g) ? a.g : a.f[b]
    }
    function Dg(a, b, c) {
        b = r(b) ? b : 42;
        c = r(c) ? c : 256;
        a = Math.max((a[2] - a[0]) / c, (a[3] - a[1]) / c);
        b += 1;
        c = Array(b);
        for (var d = 0; d < b; ++d)
            c[d] = a / Math.pow(2, d);
        return c
    }
    function Eg(a) {
        a = ed(a);
        var b = a.b();
        null === b && (a = 180 * Vc.degrees / Vc[a.d], b = Nc(-a, -a, a, a));
        return b
    }
    ;
    function Fg(a) {
        tg.call(this, {attributions: a.attributions,extent: a.extent,logo: a.logo,projection: a.projection,state: a.state});
        this.k = r(a.opaque) ? a.opaque : !1;
        this.n = r(a.tilePixelRatio) ? a.tilePixelRatio : 1;
        this.tileGrid = r(a.tileGrid) ? a.tileGrid : null
    }
    A(Fg, tg);
    Fg.prototype.d = qc;
    Fg.prototype.h = function(a, b, c, d) {
        var e = !0, f, g, h, l;
        for (h = d.a; h <= d.d; ++h)
            for (l = d.c; l <= d.b; ++l)
                g = this.c(c, h, l), a[c] && a[c][g] || (f = b(c, h, l), null === f ? e = !1 : (a[c] || (a[c] = {}), a[c][g] = f));
        return e
    };
    Fg.prototype.c = nd;
    function Gg(a, b) {
        var c;
        if (null === a.tileGrid) {
            if (c = b.c, null === c) {
                c = Eg(b);
                var d = r(void 0) ? void 0 : 256, e = r(void 0) ? void 0 : "bottom-left", f = Dg(c, void 0, d);
                c = new wg({origin: Qc(c, e),resolutions: f,tileSize: d});
                b.c = c
            }
        } else
            c = a.tileGrid;
        return c
    }
    function Hg(a, b, c) {
        return Cg(Gg(a, c), b) * a.n
    }
    Fg.prototype.e = aa;
    function Ig(a, b) {
        xb.call(this);
        this.g = b
    }
    A(Ig, xb);
    Ig.prototype.j = aa;
    function Jg(a, b) {
        b.d() && a.postRenderFunctions.push(oa(function(a, b, e) {
            b = v(a).toString();
            a = a.a;
            e = e.usedTiles[b];
            for (var f; Kg(a) && !(b = a.b.ha, f = b.a[0].toString(), f in e && e[f].contains(b.a)); )
                b = a, f = b.b, delete b.c[f.Ia], null !== f.G && (f.G.T = null), b.b = f.G, null === b.b && (b.a = null), --b.d, f.ha.ra()
        }, b))
    }
    function Lg(a, b) {
        var c = b.g;
        r(c) && (t(c) ? a.logos[c] = "" : ia(c) && (a.logos[c.src] = c.href))
    }
    function Mg(a, b, c, d) {
        b = v(b).toString();
        c = c.toString();
        b in a ? c in a[b] ? (a = a[b][c], d.a < a.a && (a.a = d.a), d.d > a.d && (a.d = d.d), d.c < a.c && (a.c = d.c), d.b > a.b && (a.b = d.b)) : a[b][c] = d : (a[b] = {}, a[b][c] = d)
    }
    function Ng(a, b, c, d) {
        return function(e, f, g) {
            e = Og(b, e, f, g, c, d);
            return a(e) ? e : null
        }
    }
    function Pg(a, b, c) {
        return [b * (Math.round(a[0] / b) + c[0] % 2 / 2), b * (Math.round(a[1] / b) + c[1] % 2 / 2)]
    }
    function Qg(a, b, c, d, e, f, g, h) {
        var l = v(b).toString();
        l in a.wantedTiles || (a.wantedTiles[l] = {});
        var n = a.wantedTiles[l];
        a = a.tileQueue;
        var q = c.minZoom, s, p, u, w, y, x;
        r(h) || (h = 0);
        for (x = g; x >= q; --x)
            for (p = zg(c, f, x, p), u = c.a(x), w = p.a; w <= p.d; ++w)
                for (y = p.c; y <= p.b; ++y)
                    if (g - x <= h) {
                        s = Og(b, x, w, y, d, e);
                        if (0 == s.s() && (n[od(s.a)] = !0, !(s.Ja() in a.c))) {
                            var D = s, B = c, C = s.a, G = null === B.b ? B.c[C[0]] : B.b, U = B.a(C[0]), O = Cg(B, C[0]), B = a, D = [D, l, [G[0] + (C[1] + .5) * O * U, G[1] + (C[2] + .5) * O * U], u], C = B.g(D);
                            Infinity != C && (B.a.push(D), B.b.push(C), B.c[B.h(D)] = 
                            !0, Rg(B, 0, B.a.length - 1))
                        }
                        r(void 0) && (void 0).call(void 0, s)
                    } else
                        b.e(x, w, y)
    }
    ;
    function Sg(a, b, c, d, e, f, g, h) {
        a[0] = 1;
        a[1] = 0;
        a[2] = 0;
        a[3] = 0;
        a[4] = 0;
        a[5] = 1;
        a[6] = 0;
        a[7] = 0;
        a[8] = 0;
        a[9] = 0;
        a[10] = 1;
        a[11] = 0;
        a[12] = 0;
        a[13] = 0;
        a[14] = 0;
        a[15] = 1;
        0 === b && 0 === c || Mc(a, b, c);
        if (1 != d || 1 != e) {
            b = a[1] * d;
            c = a[2] * d;
            var l = a[3] * d, n = a[4] * e, q = a[5] * e, s = a[6] * e;
            e = a[7] * e;
            var p = 1 * a[8], u = 1 * a[9], w = 1 * a[10], y = 1 * a[11], x = a[12], D = a[13], B = a[14], C = a[15];
            a[0] *= d;
            a[1] = b;
            a[2] = c;
            a[3] = l;
            a[4] = n;
            a[5] = q;
            a[6] = s;
            a[7] = e;
            a[8] = p;
            a[9] = u;
            a[10] = w;
            a[11] = y;
            a[12] = x;
            a[13] = D;
            a[14] = B;
            a[15] = C
        }
        0 !== f && (d = a[0], b = a[1], c = a[2], l = a[3], n = a[4], q = a[5], s = a[6], 
        e = a[7], p = Math.cos(f), f = Math.sin(f), a[0] = d * p + n * f, a[1] = b * p + q * f, a[2] = c * p + s * f, a[3] = l * p + e * f, a[4] = d * -f + n * p, a[5] = b * -f + q * p, a[6] = c * -f + s * p, a[7] = l * -f + e * p);
        0 === g && 0 === h || Mc(a, g, h);
        return a
    }
    function Tg(a, b, c) {
        var d = a[1], e = a[5], f = a[13], g = b[0];
        b = b[1];
        c[0] = a[0] * g + a[4] * b + a[12];
        c[1] = d * g + e * b + f;
        return c
    }
    ;
    function Ug(a, b) {
        xb.call(this);
        this.g = b;
        this.d = null;
        this.b = {}
    }
    A(Ug, xb);
    Ug.prototype.h = function(a) {
        return new Ig(0, a)
    };
    Ug.prototype.r = function() {
        Nb(this.b, Bb);
        Ug.w.r.call(this)
    };
    function Vg() {
        var a = Df.b();
        if (32 < a.b) {
            var b = 0, c, d;
            for (c in a.a) {
                d = a.a[c];
                var e;
                if (e = 0 === (b++ & 3))
                    Jb(d) ? d = ac(d.C, r(void 0) ? "undefined" : void 0) : (d = gc(d), d = !!d && ac(d, void 0)), e = !d;
                e && (delete a.a[c], --a.b)
            }
        }
    }
    function Wg(a, b, c, d, e, f, g) {
        var h, l = c.extent, n = c.viewState, q = n.resolution, n = n.rotation;
        if (null !== a.d) {
            var s = {};
            if (h = Xg(a.d, l, q, n, b, function(a, b) {
                var c = v(b).toString();
                if (!(c in s))
                    return s[c] = !0, d.call(e, b, null)
            }))
                return h
        }
        l = a.g.N().c();
        for (n = l.length - 1; 0 <= n; --n) {
            h = l[n];
            var p = h.layer;
            if (h.visible && q >= h.minResolution && q < h.maxResolution && f.call(g, p) && (h = Yg(a, p).j(b, c, d, e)))
                return h
        }
    }
    function Yg(a, b) {
        var c = v(b).toString();
        if (c in a.b)
            return a.b[c];
        var d = a.h(b);
        return a.b[c] = d
    }
    Ug.prototype.i = aa;
    Ug.prototype.k = function(a, b) {
        for (var c in this.b)
            if (!(null !== b && c in b.layerStates)) {
                var d = this.b[c];
                delete this.b[c];
                Bb(d)
            }
    };
    function Zg(a, b) {
        this.g = a;
        this.h = b;
        this.a = [];
        this.b = [];
        this.c = {}
    }
    Zg.prototype.clear = function() {
        this.a.length = 0;
        this.b.length = 0;
        var a = this.c, b;
        for (b in a)
            delete a[b]
    };
    Zg.prototype.e = function() {
        return this.a.length
    };
    Zg.prototype.f = function() {
        return 0 === this.a.length
    };
    function $g(a, b) {
        for (var c = a.a, d = a.b, e = c.length, f = c[b], g = d[b], h = b; b < e >> 1; ) {
            var l = 2 * b + 1, n = 2 * b + 2, l = n < e && d[n] < d[l] ? n : l;
            c[b] = c[l];
            d[b] = d[l];
            b = l
        }
        c[b] = f;
        d[b] = g;
        Rg(a, h, b)
    }
    function Rg(a, b, c) {
        var d = a.a;
        a = a.b;
        for (var e = d[c], f = a[c]; c > b; ) {
            var g = c - 1 >> 1;
            if (a[g] > f)
                d[c] = d[g], a[c] = a[g], c = g;
            else
                break
        }
        d[c] = e;
        a[c] = f
    }
    ;
    function ah(a, b) {
        Zg.call(this, function(b) {
            return a.apply(null, b)
        }, function(a) {
            return a[0].Ja()
        });
        this.j = b;
        this.d = 0
    }
    A(ah, Zg);
    ah.prototype.i = function() {
        --this.d;
        this.j()
    };
    function bh(a) {
        Gf.call(this);
        a = r(a) ? a : {};
        this.a = r(a.condition) ? a.condition : uc(lf, nf);
        this.b = r(a.pixelDelta) ? a.pixelDelta : 128
    }
    A(bh, Gf);
    bh.prototype.ga = function(a) {
        var b = !1;
        if ("key" == a.type) {
            var c = a.a.c;
            if (this.a(a) && (40 == c || 37 == c || 39 == c || 38 == c)) {
                var d = a.map, b = d.a(), e = b.s(), f = e.resolution * this.b, g = 0, h = 0;
                40 == c ? h = -f : 37 == c ? g = -f : 39 == c ? g = f : h = f;
                c = [g, h];
                Hc(c, e.rotation);
                e = b.b();
                r(e) && (r(100) && d.I(jd({source: e,duration: 100,easing: id})), d = b.e([e[0] + c[0], e[1] + c[1]]), b.H(d));
                a.preventDefault();
                b = !0
            }
        }
        return !b
    };
    function ch(a) {
        Gf.call(this);
        a = r(a) ? a : {};
        this.b = r(a.condition) ? a.condition : nf;
        this.a = r(a.delta) ? a.delta : 1;
        this.c = r(a.duration) ? a.duration : 100
    }
    A(ch, Gf);
    ch.prototype.ga = function(a) {
        var b = !1;
        if ("key" == a.type) {
            var c = a.a.j;
            if (this.b(a) && (43 == c || 45 == c)) {
                b = a.map;
                c = 43 == c ? this.a : -this.a;
                b.p();
                var d = b.a();
                If(b, d, c, void 0, this.c);
                a.preventDefault();
                b = !0
            }
        }
        return !b
    };
    function dh(a) {
        a = r(a) ? a : {};
        Gf.call(this);
        this.a = 0;
        this.h = r(a.duration) ? a.duration : 250;
        this.c = null;
        this.d = this.b = void 0
    }
    A(dh, Gf);
    dh.prototype.ga = function(a) {
        var b = !1;
        if ("mousewheel" == a.type) {
            var b = a.map, c = a.a;
            this.c = a.coordinate;
            this.a += c.F;
            r(this.b) || (this.b = pa());
            c = Math.max(80 - (pa() - this.b), 0);
            m.clearTimeout(this.d);
            this.d = m.setTimeout(z(this.e, this, b), c);
            a.preventDefault();
            b = !0
        }
        return !b
    };
    dh.prototype.e = function(a) {
        var b = ib(this.a, -1, 1), c = a.a();
        a.p();
        If(a, c, -b, this.c, this.h);
        this.a = 0;
        this.c = null;
        this.d = this.b = void 0
    };
    function eh(a) {
        Nf.call(this);
        a = r(a) ? a : {};
        this.d = null;
        this.e = void 0;
        this.b = !1;
        this.g = 0;
        this.j = r(a.threshold) ? a.threshold : .3
    }
    A(eh, Nf);
    eh.prototype.X = function(a) {
        var b = 0, c = this.a[0], d = this.a[1], c = Math.atan2(d.clientY - c.clientY, d.clientX - c.clientX);
        r(this.e) && (b = c - this.e, this.g += b, !this.b && Math.abs(this.g) > this.j && (this.b = !0));
        this.e = c;
        a = a.map;
        c = Md(a.b);
        d = Of(this.a);
        d[0] -= c.x;
        d[1] -= c.y;
        this.d = a.M(d);
        this.b && (c = a.a(), d = c.s(), a.p(), Hf(a, c, d.rotation + b, this.d))
    };
    eh.prototype.Y = function(a) {
        if (2 > this.a.length) {
            a = a.map;
            var b = a.a();
            fd(b, -1);
            if (this.b) {
                var c = b.s().rotation, d = this.d, c = b.constrainRotation(c, 0);
                Hf(a, b, c, d, 250)
            }
            return !1
        }
        return !0
    };
    eh.prototype.W = function(a) {
        return 2 <= this.a.length ? (a = a.map, this.d = null, this.e = void 0, this.b = !1, this.g = 0, this.c || fd(a.a(), 1), a.p(), !0) : !1
    };
    function fh(a) {
        a = r(a) ? a : {};
        Nf.call(this);
        this.d = null;
        this.g = r(a.duration) ? a.duration : 400;
        this.b = void 0;
        this.e = 1
    }
    A(fh, Nf);
    fh.prototype.X = function(a) {
        var b = 1, c = this.a[0], d = this.a[1], e = c.clientX - d.clientX, c = c.clientY - d.clientY, e = Math.sqrt(e * e + c * c);
        r(this.b) && (b = this.b / e);
        this.b = e;
        1 != b && (this.e = b);
        a = a.map;
        var e = a.a(), c = e.s(), d = Md(a.b), f = Of(this.a);
        f[0] -= d.x;
        f[1] -= d.y;
        this.d = a.M(f);
        a.p();
        Jf(a, e, c.resolution * b, this.d)
    };
    fh.prototype.Y = function(a) {
        if (2 > this.a.length) {
            a = a.map;
            var b = a.a();
            fd(b, -1);
            var c = b.s().resolution, d = this.d, e = this.g, c = b.constrainResolution(c, 0, this.e - 1);
            Jf(a, b, c, d, e);
            return !1
        }
        return !0
    };
    fh.prototype.W = function(a) {
        return 2 <= this.a.length ? (a = a.map, this.d = null, this.b = void 0, this.e = 1, this.c || fd(a.a(), 1), a.p(), !0) : !1
    };
    function gh(a) {
        var b = r(a) ? a : {};
        a = Ub(b);
        delete a.layers;
        b = b.layers;
        Z.call(this, a);
        this.a = null;
        N(this, Dc("layers"), this.Wb, !1, this);
        null != b ? da(b) && (b = new be(Ka(b))) : b = new be;
        this.n(b)
    }
    A(gh, Z);
    k = gh.prototype;
    k.Ua = function() {
        this.e() && this.K()
    };
    k.Wb = function() {
        null !== this.a && (F(Qb(this.a), P), this.a = null);
        var a = this.$();
        if (null != a) {
            this.a = {add: N(a, "add", this.Vb, !1, this),remove: N(a, "remove", this.Xb, !1, this)};
            var a = a.a, b, c, d;
            b = 0;
            for (c = a.length; b < c; b++)
                d = a[b], this.a[v(d).toString()] = N(d, ["propertychange", "change"], this.Ua, !1, this)
        }
        this.K()
    };
    k.Vb = function(a) {
        a = a.element;
        this.a[v(a).toString()] = N(a, ["propertychange", "change"], this.Ua, !1, this);
        this.K()
    };
    k.Xb = function(a) {
        a = v(a.element).toString();
        P(this.a[a]);
        delete this.a[a];
        this.K()
    };
    k.$ = function() {
        return this.o("layers")
    };
    gh.prototype.getLayers = gh.prototype.$;
    gh.prototype.n = function(a) {
        this.q("layers", a)
    };
    gh.prototype.setLayers = gh.prototype.n;
    gh.prototype.c = function(a) {
        var b = r(a) ? a : [], c = b.length;
        this.$().forEach(function(a) {
            a.c(b)
        });
        a = ug(this);
        var d, e;
        for (d = b.length; c < d; c++)
            e = b[c], e.brightness = ib(e.brightness + a.brightness, -1, 1), e.contrast *= a.contrast, e.hue += a.hue, e.opacity *= a.opacity, e.saturation *= a.saturation, e.visible = e.visible && a.visible, e.maxResolution = Math.min(e.maxResolution, a.maxResolution), e.minResolution = Math.max(e.minResolution, a.minResolution), r(a.extent) && r(e.extent) && (e.extent = Tc(e.extent, a.extent));
        return b
    };
    gh.prototype.u = function() {
        return "ready"
    };
    function hh(a) {
        Wc.call(this, {code: a,units: "m",extent: ih,global: !0,worldExtent: jh})
    }
    A(hh, Wc);
    var kh = 6378137 * Math.PI, ih = [-kh, -kh, kh, kh], jh = [-180, -85, 180, 85], lh = Ia("EPSG:3857 EPSG:102100 EPSG:102113 EPSG:900913 urn:ogc:def:crs:EPSG:6.18:3:3857 http://www.opengis.net/gml/srs/epsg.xml#3857".split(" "), function(a) {
        return new hh(a)
    });
    function mh(a, b, c) {
        var d = a.length;
        c = 1 < c ? c : 2;
        r(b) || (2 < c ? b = a.slice() : b = Array(d));
        for (var e = 0; e < d; e += c)
            b[e] = 6378137 * Math.PI * a[e] / 180, b[e + 1] = 6378137 * Math.log(Math.tan(Math.PI * (a[e + 1] + 90) / 360));
        return b
    }
    function nh(a, b, c) {
        var d = a.length;
        c = 1 < c ? c : 2;
        r(b) || (2 < c ? b = a.slice() : b = Array(d));
        for (var e = 0; e < d; e += c)
            b[e] = 180 * a[e] / (6378137 * Math.PI), b[e + 1] = 360 * Math.atan(Math.exp(a[e + 1] / 6378137)) / Math.PI - 90;
        return b
    }
    ;
    function oh(a, b) {
        Wc.call(this, {code: a,units: "degrees",extent: ph,axisOrientation: b,global: !0,worldExtent: ph})
    }
    A(oh, Wc);
    var ph = [-180, -90, 180, 90], qh = [new oh("CRS:84"), new oh("EPSG:4326", "neu"), new oh("urn:ogc:def:crs:EPSG:6.6:4326", "neu"), new oh("urn:ogc:def:crs:OGC:1.3:CRS84"), new oh("urn:ogc:def:crs:OGC:2:84"), new oh("http://www.opengis.net/gml/srs/epsg.xml#4326", "neu"), new oh("urn:x-ogc:def:crs:EPSG:4326", "neu")];
    function rh(a) {
        vg.call(this, a)
    }
    A(rh, vg);
    rh.prototype.n = function() {
        return this.o("preload")
    };
    rh.prototype.getPreload = rh.prototype.n;
    rh.prototype.na = function(a) {
        this.q("preload", a)
    };
    rh.prototype.setPreload = rh.prototype.na;
    rh.prototype.v = function() {
        return this.o("useInterimTilesOnError")
    };
    rh.prototype.getUseInterimTilesOnError = rh.prototype.v;
    rh.prototype.pa = function(a) {
        this.q("useInterimTilesOnError", a)
    };
    rh.prototype.setUseInterimTilesOnError = rh.prototype.pa;
    function sh(a, b, c, d) {
        this.i = {};
        this.d = a;
        this.j = b;
        this.f = c;
        this.n = d;
        this.a = this.b = this.v = this.u = this.t = null;
        this.c = "";
        this.h = this.k = this.ca = this.ba = 0;
        this.l = this.g = this.e = null;
        this.F = [];
        this.A = Lc()
    }
    function th(a, b, c, d) {
        var e = 0;
        if (null !== a.l && "" !== a.c) {
            null === a.e || uh(a, a.e);
            null === a.g || vh(a, a.g);
            var f = a.l, g = a.d, h = a.v;
            null === h ? (g.font = f.font, g.textAlign = f.textAlign, g.textBaseline = f.textBaseline, a.v = {font: f.font,textAlign: f.textAlign,textBaseline: f.textBaseline}) : (h.font != f.font && (h.font = g.font = f.font), h.textAlign != f.textAlign && (h.textAlign = g.textAlign = f.textAlign), h.textBaseline != f.textBaseline && (h.textBaseline = g.textBaseline = f.textBaseline));
            b = vf(b, e, c, d, a.n, a.F);
            for (f = a.d; e < c; e += d) {
                g = b[e] + a.ba;
                h = b[e + 1] + a.ca;
                if (0 !== a.k || 1 != a.h) {
                    var l = Sg(a.A, g, h, a.h, a.h, a.k, -g, -h);
                    f.setTransform(l[0], l[1], l[4], l[5], l[12], l[13])
                }
                null === a.g || f.strokeText(a.c, g, h);
                null === a.e || f.fillText(a.c, g, h)
            }
            0 === a.k && 1 == a.h || f.setTransform(1, 0, 0, 1, 0, 0)
        }
    }
    function wh(a, b, c, d, e, f) {
        var g = a.d;
        a = vf(b, c, d, e, a.n, a.F);
        g.moveTo(a[0], a[1]);
        for (b = 2; b < a.length; b += 2)
            g.lineTo(a[b], a[b + 1]);
        f && g.lineTo(a[0], a[1]);
        return d
    }
    function xh(a, b, c, d, e) {
        var f = a.d, g, h;
        g = 0;
        for (h = d.length; g < h; ++g)
            c = wh(a, b, c, d[g], e, !0), f.closePath();
        return c
    }
    function Rf(a, b) {
        var c = Infinity.toString(), d = a.i[c];
        r(d) ? d.push(b) : a.i[c] = [b]
    }
    k = sh.prototype;
    k.Bb = function(a) {
        if (Uc(this.f, a.b())) {
            if (null !== this.b || null !== this.a) {
                null === this.b || uh(this, this.b);
                null === this.a || vh(this, this.a);
                var b;
                b = a.c;
                b = null === b ? null : vf(b, 0, b.length, a.a, this.n, this.F);
                var c = b[2] - b[0], d = b[3] - b[1], c = Math.sqrt(c * c + d * d), d = this.d;
                d.beginPath();
                d.arc(b[0], b[1], c, 0, 2 * Math.PI);
                null === this.b || d.fill();
                null === this.a || d.stroke()
            }
            "" !== this.c && th(this, a.d(), 2, 2)
        }
    };
    k.Cb = function(a, b) {
        var c = a.a(), d, e;
        d = 0;
        for (e = c.length; d < e; ++d) {
            var f = c[d];
            yh[f.j()].call(this, f, b)
        }
    };
    k.Hb = function(a) {
        var b = a.c;
        a = a.a;
        "" !== this.c && th(this, b, b.length, a)
    };
    k.Fb = function(a) {
        var b = a.c;
        a = a.a;
        "" !== this.c && th(this, b, b.length, a)
    };
    k.Db = function(a) {
        if (Uc(this.f, a.b())) {
            if (null !== this.a) {
                vh(this, this.a);
                var b = this.d, c = a.c;
                b.beginPath();
                wh(this, c, 0, c.length, a.a, !1);
                b.stroke()
            }
            "" !== this.c && (a = a.d(), th(this, a, 2, 2))
        }
    };
    k.Eb = function(a) {
        var b = a.b();
        if (Uc(this.f, b)) {
            if (null !== this.a) {
                vh(this, this.a);
                var b = this.d, c = a.c, d = 0, e = a.e(), f = a.a;
                b.beginPath();
                var g, h;
                g = 0;
                for (h = e.length; g < h; ++g)
                    d = wh(this, c, d, e[g], f, !1);
                b.stroke()
            }
            "" !== this.c && (a = a.d(), th(this, a, a.length, 2))
        }
    };
    k.Qa = function(a) {
        if (Uc(this.f, a.b())) {
            if (null !== this.a || null !== this.b) {
                null === this.b || uh(this, this.b);
                null === this.a || vh(this, this.a);
                var b = this.d;
                b.beginPath();
                xh(this, Bf(a), 0, a.d, a.a);
                null === this.b || b.fill();
                null === this.a || b.stroke()
            }
            if ("" !== this.c) {
                if (a.g != a.f) {
                    b = Oc(a.b());
                    var c = Bf(a), d = a.d, e = a.a, f, g, h, l, n, q = b[1], s = [], p = d[0];
                    h = c[p - e];
                    n = c[p - e + 1];
                    for (f = 0; f < p; f += e) {
                        l = c[f];
                        g = c[f + 1];
                        if (q <= n && g <= q || n <= q && q <= g)
                            h = (q - n) / (g - n) * (l - h) + h, s.push(h);
                        h = l;
                        n = g
                    }
                    p = NaN;
                    n = -Infinity;
                    s.sort();
                    h = s[0];
                    f = 1;
                    for (g = s.length; f < 
                    g; ++f) {
                        l = s[f];
                        var u = Math.abs(l - h);
                        if (u > n) {
                            h = (h + l) / 2;
                            var w;
                            b: if (0 !== d.length && yf(c, 0, d[0], e, h, q)) {
                                var y = w = void 0;
                                w = 1;
                                for (y = d.length; w < y; ++w)
                                    if (yf(c, d[w - 1], d[w], e, h, q)) {
                                        w = !1;
                                        break b
                                    }
                                w = !0
                            } else
                                w = !1;
                            w && (p = h, n = u)
                        }
                        h = l
                    }
                    isNaN(p) && (p = b[0]);
                    r(void 0) ? ((void 0).push(p, q), b = void 0) : b = [p, q];
                    a.i = b;
                    a.g = a.f
                }
                th(this, a.i, 2, 2)
            }
        }
    };
    k.Gb = function(a) {
        if (Uc(this.f, a.b())) {
            if (null !== this.a || null !== this.b) {
                null === this.b || uh(this, this.b);
                null === this.a || vh(this, this.a);
                var b = this.d, c = a.g(), d = 0, e = a.d(), f = a.a, g, h;
                g = 0;
                for (h = e.length; g < h; ++g) {
                    var l = e[g];
                    b.beginPath();
                    d = xh(this, c, d, l, f);
                    null === this.b || b.fill();
                    null === this.a || b.stroke()
                }
            }
            "" !== this.c && (a = a.e(), th(this, a, a.length, 2))
        }
    };
    function zh(a) {
        var b = Ia(Rb(a.i), Number);
        Na(b);
        var c, d, e, f, g;
        c = 0;
        for (d = b.length; c < d; ++c)
            for (e = a.i[b[c].toString()], f = 0, g = e.length; f < g; ++f)
                e[f](a)
    }
    function uh(a, b) {
        var c = a.d, d = a.t;
        null === d ? (c.fillStyle = b.fillStyle, a.t = {fillStyle: b.fillStyle}) : d.fillStyle != b.fillStyle && (d.fillStyle = c.fillStyle = b.fillStyle)
    }
    function vh(a, b) {
        var c = a.d, d = a.u;
        null === d ? (c.lineCap = b.lineCap, Vd && c.setLineDash(b.lineDash), c.lineJoin = b.lineJoin, c.lineWidth = b.lineWidth, c.miterLimit = b.miterLimit, c.strokeStyle = b.strokeStyle, a.u = {lineCap: b.lineCap,lineDash: b.lineDash,lineJoin: b.lineJoin,lineWidth: b.lineWidth,miterLimit: b.miterLimit,strokeStyle: b.strokeStyle}) : (d.lineCap != b.lineCap && (d.lineCap = c.lineCap = b.lineCap), Vd && !Pa(d.lineDash, b.lineDash) && c.setLineDash(d.lineDash = b.lineDash), d.lineJoin != b.lineJoin && (d.lineJoin = c.lineJoin = 
        b.lineJoin), d.lineWidth != b.lineWidth && (d.lineWidth = c.lineWidth = b.lineWidth), d.miterLimit != b.miterLimit && (d.miterLimit = c.miterLimit = b.miterLimit), d.strokeStyle != b.strokeStyle && (d.strokeStyle = c.strokeStyle = b.strokeStyle))
    }
    k.Nc = function(a, b) {
        if (null === a)
            this.b = null;
        else {
            var c = a.ya;
            this.b = {fillStyle: ee(null === c ? pf : c)}
        }
        if (null === b)
            this.a = null;
        else {
            var c = b.ya, d = b.Va, e = b.getLineDash(), f = b.Wa, g = b.R(), h = b.Xa;
            this.a = {lineCap: r(d) ? d : "round",lineDash: null != e ? e : qf,lineJoin: r(f) ? f : "round",lineWidth: this.j * (r(g) ? g : 1),miterLimit: r(h) ? h : 10,strokeStyle: ee(null === c ? rf : c)}
        }
    };
    k.Oc = function(a) {
        if (null === a)
            this.c = "";
        else {
            var b = a.$a;
            null === b ? this.e = null : (b = b.ya, this.e = {fillStyle: ee(null === b ? pf : b)});
            var c = a.ab;
            if (null === c)
                this.g = null;
            else {
                var b = c.ya, d = c.Va, e = c.getLineDash(), f = c.Wa, g = c.R(), c = c.Xa;
                this.g = {lineCap: r(d) ? d : "round",lineDash: null != e ? e : qf,lineJoin: r(f) ? f : "round",lineWidth: r(g) ? g : 1,miterLimit: r(c) ? c : 10,strokeStyle: ee(null === b ? rf : b)}
            }
            var b = a.hd(), d = a.jd(), e = a.kd(), f = a.J(), g = a.ld(), c = a.bb, h = a.md();
            a = a.nd();
            this.l = {font: r(b) ? b : "10px sans-serif",textAlign: r(h) ? h : "center",
                textBaseline: r(a) ? a : "middle"};
            this.c = r(c) ? c : "";
            this.ba = r(d) ? this.j * d : 0;
            this.ca = r(e) ? this.j * e : 0;
            this.k = r(f) ? f : 0;
            this.h = this.j * (r(g) ? g : 1)
        }
    };
    var yh = {Point: sh.prototype.Hb,LineString: sh.prototype.Db,Polygon: sh.prototype.Qa,MultiPoint: sh.prototype.Fb,MultiLineString: sh.prototype.Eb,MultiPolygon: sh.prototype.Gb,GeometryCollection: sh.prototype.Cb,Circle: sh.prototype.Bb};
    function Ah(a, b, c, d, e, f, g, h) {
        var l;
        l = a.d;
        if (d[0] == l[0] && d[1] == l[1] && d[4] == l[4] && d[5] == l[5] && d[12] == l[12] && d[13] == l[13])
            l = a.c;
        else {
            l = vf(a.a, 0, a.a.length, 2, d, a.c);
            var n = a.d;
            n[0] = d[0];
            n[1] = d[1];
            n[2] = d[2];
            n[3] = d[3];
            n[4] = d[4];
            n[5] = d[5];
            n[6] = d[6];
            n[7] = d[7];
            n[8] = d[8];
            n[9] = d[9];
            n[10] = d[10];
            n[11] = d[11];
            n[12] = d[12];
            n[13] = d[13];
            n[14] = d[14];
            n[15] = d[15]
        }
        d = 0;
        var n = g.length, q = 0, s;
        for (a = a.h; d < n; ) {
            var p = g[d], u, w, y, x;
            switch (p[0]) {
                case 0:
                    q = p[2];
                    q = v(q).toString();
                    r(M(f, q)) ? d = p[3] : ++d;
                    break;
                case 1:
                    b.beginPath();
                    ++d;
                    break;
                case 2:
                    q = p[1];
                    s = l[q];
                    var D = l[q + 1], B = l[q + 2] - s, q = l[q + 3] - D;
                    b.arc(s, D, Math.sqrt(B * B + q * q), 0, 2 * Math.PI, !0);
                    ++d;
                    break;
                case 3:
                    b.closePath();
                    ++d;
                    break;
                case 4:
                    q = p[1];
                    s = p[2];
                    u = p[3];
                    y = p[4] * c;
                    var C = p[5] * c, G = p[6];
                    w = p[7];
                    var U = p[8], O = p[9], D = p[11], B = p[12], la = p[13], fa = p[14];
                    for (p[10] && (D += e); q < s; q += 2) {
                        p = l[q] - y;
                        x = l[q + 1] - C;
                        la && (p = p + .5 | 0, x = x + .5 | 0);
                        if (1 != B || 0 !== D) {
                            var ba = p + y, V = x + C;
                            Sg(a, ba, V, B, B, D, -ba, -V);
                            b.setTransform(a[0], a[1], a[4], a[5], a[12], a[13])
                        }
                        ba = b.globalAlpha;
                        1 != w && (b.globalAlpha = ba * w);
                        b.drawImage(u, U, O, fa, G, 
                        p, x, fa * c, G * c);
                        1 != w && (b.globalAlpha = ba);
                        1 == B && 0 === D || b.setTransform(1, 0, 0, 1, 0, 0)
                    }
                    ++d;
                    break;
                case 5:
                    q = p[1];
                    s = p[2];
                    y = p[3];
                    C = p[4] * c;
                    G = p[5] * c;
                    D = p[6];
                    B = p[7] * c;
                    u = p[8];
                    for (w = p[9]; q < s; q += 2) {
                        p = l[q] + C;
                        x = l[q + 1] + G;
                        if (1 != B || 0 !== D)
                            Sg(a, p, x, B, B, D, -p, -x), b.setTransform(a[0], a[1], a[4], a[5], a[12], a[13]);
                        w && b.strokeText(y, p, x);
                        u && b.fillText(y, p, x);
                        1 == B && 0 === D || b.setTransform(1, 0, 0, 1, 0, 0)
                    }
                    ++d;
                    break;
                case 6:
                    if (r(h) && (s = p[1], q = p[2], q = h(s, q)))
                        return q;
                    ++d;
                    break;
                case 7:
                    b.fill();
                    ++d;
                    break;
                case 8:
                    q = p[1];
                    s = p[2];
                    b.moveTo(l[q], 
                    l[q + 1]);
                    for (q += 2; q < s; q += 2)
                        b.lineTo(l[q], l[q + 1]);
                    ++d;
                    break;
                case 9:
                    b.fillStyle = p[1];
                    ++d;
                    break;
                case 10:
                    q = r(p[7]) ? p[7] : !0;
                    s = p[2];
                    b.strokeStyle = p[1];
                    b.lineWidth = q ? s * c : s;
                    b.lineCap = p[3];
                    b.lineJoin = p[4];
                    b.miterLimit = p[5];
                    Vd && b.setLineDash(p[6]);
                    ++d;
                    break;
                case 11:
                    b.font = p[1];
                    b.textAlign = p[2];
                    b.textBaseline = p[3];
                    ++d;
                    break;
                case 12:
                    b.stroke();
                    ++d;
                    break;
                default:
                    ++d
            }
        }
    }
    function Bh(a, b) {
        this.d = b;
        this.a = {};
        this.b = Td(1, 1);
        this.c = Lc()
    }
    function Ch(a, b, c, d, e, f, g) {
        var h = {}, l, n, q, s, p;
        l = 0;
        for (n = b.length; l < n; ++l)
            for (s in q = a.a[b[l].toString()], q)
                if (p = q[s], Uc(d, p.b()) && (p = Ah(p, c, 1, e, f, h, p.f, g)))
                    return p
    }
    function Xg(a, b, c, d, e, f) {
        var g = a.c;
        Sg(g, .5, .5, 1 / c, -1 / c, -d, -e[0], -e[1]);
        c = Ia(Rb(a.a), Number);
        Na(c, function(a, b) {
            return b - a
        });
        var h = a.b;
        h.clearRect(0, 0, 1, 1);
        return Ch(a, c, h, b, g, d, function(a, b) {
            if (0 < h.getImageData(0, 0, 1, 1).data[3]) {
                var c = f(a, b);
                if (c)
                    return c;
                h.clearRect(0, 0, 1, 1)
            }
        })
    }
    Bh.prototype.f = function() {
        return Sb(this.a)
    };
    function Dh(a, b) {
        Ig.call(this, 0, b);
        this.k = Lc()
    }
    A(Dh, Ig);
    Dh.prototype.l = function(a, b, c) {
        Eh(this, "precompose", c, a);
        var d = this.V();
        if (null !== d) {
            var e = this.i, f = c.globalAlpha;
            c.globalAlpha = b.opacity;
            if (0 === a.viewState.rotation) {
                b = e[13];
                var g = d.width * e[0], h = d.height * e[5];
                c.drawImage(d, 0, 0, +d.width, +d.height, Math.round(e[12]), Math.round(b), Math.round(g), Math.round(h))
            } else
                c.setTransform(e[0], e[1], e[4], e[5], e[12], e[13]), c.drawImage(d, 0, 0), c.setTransform(1, 0, 0, 1, 0, 0);
            c.globalAlpha = f
        }
        Eh(this, "postcompose", c, a)
    };
    function Eh(a, b, c, d) {
        var e = a.g;
        if (ac(e.C, r(b) ? String(b) : void 0)) {
            if (r(void 0))
                a = void 0;
            else {
                var f = d.viewState, g = d.pixelRatio;
                a = Sg(a.k, g * d.size[0] / 2, g * d.size[1] / 2, g / f.resolution, -g / f.resolution, -f.rotation, -f.center[0], -f.center[1])
            }
            a = new sh(c, d.pixelRatio, d.extent, a);
            e.dispatchEvent(new uf(b, e, a, 0, d, c, null));
            zh(a)
        }
    }
    var Fh = function() {
        var a = null, b = null;
        return function(c) {
            if (null === a) {
                a = Td(1, 1);
                b = a.createImageData(1, 1);
                var d = b.data;
                d[0] = 42;
                d[1] = 84;
                d[2] = 126;
                d[3] = 255
            }
            var d = a.canvas, e = c[0] <= d.width && c[1] <= d.height;
            e || (d.width = c[0], d.height = c[1], d = c[0] - 1, c = c[1] - 1, a.putImageData(b, d, c), c = a.getImageData(d, c, 1, 1), e = Pa(b.data, c.data));
            return e
        }
    }();
    function Gh(a, b) {
        Dh.call(this, 0, b);
        this.a = this.c = null;
        this.f = !1;
        this.e = null;
        this.i = Lc();
        this.h = NaN;
        this.d = this.b = null
    }
    A(Gh, Dh);
    Gh.prototype.V = function() {
        return this.c
    };
    Gh.prototype.n = function(a, b) {
        var c = a.pixelRatio, d = a.viewState, e = d.projection, f = this.g, g = f.a, h = Gg(g, e), l = mb(h.d, d.resolution, 0), n = Hg(g, l, e), q = n / Cg(h, l), s = h.a(l), q = s / q, p = d.center, u;
        s == d.resolution ? (p = Pg(p, s, a.size), u = Sc(p, s, d.rotation, a.size)) : u = a.extent;
        r(b.extent) && (u = Tc(u, b.extent));
        if (u[2] < u[0] || u[3] < u[1])
            return !1;
        var w = Ag(h, u, s), y = n * w.R(), x = n * (w.b - w.c + 1), D, B;
        null === this.c ? (B = Td(y, x), this.c = B.canvas, this.a = [y, x], this.e = B, this.f = !Fh(this.a)) : (D = this.c, B = this.e, this.a[0] < y || this.a[1] < x || this.f && (this.a[0] > 
        y || this.a[1] > x) ? (D.width = y, D.height = x, this.a = [y, x], this.f = !Fh(this.a), this.b = null) : (y = this.a[0], x = this.a[1], l == this.h && sd(this.b, w) || (this.b = null, l < this.h && this.e.clearRect(0, 0, y, x))));
        var C, G;
        null === this.b ? (y /= n, x /= n, C = w.a - Math.floor((y - w.R()) / 2), G = w.c - Math.floor((x - (w.b - w.c + 1)) / 2), this.h = l, this.b = new pd(C, C + y - 1, G, G + x - 1), this.d = Array(y * x), x = this.b) : (x = this.b, y = x.R());
        D = {};
        D[l] = {};
        var U = [], O = z(g.h, g, D, Ng(function(a) {
            return null !== a && 2 == a.s()
        }, g, c, e)), la = f.v();
        r(la) || (la = !0);
        var fa = [Infinity, Infinity, 
            -Infinity, -Infinity], ba = new pd(0, 0, 0, 0), V, E, S;
        for (G = w.a; G <= w.d; ++G)
            for (S = w.c; S <= w.b; ++S)
                E = Og(g, l, G, S, c, e), C = E.s(), 2 == C || 4 == C || 3 == C && !la ? D[l][od(E.a)] = E : (V = h.e(E.a, O, null, ba, fa), V || (U.push(E), V = h.h(E.a, ba, fa), null === V || O(l + 1, V)));
        O = 0;
        for (V = U.length; O < V; ++O)
            E = U[O], G = n * (E.a[1] - x.a), S = n * (x.b - E.a[2]), B.clearRect(G, S, n, n);
        U = Ia(Rb(D), Number);
        Na(U);
        var Ra = g.k, xa = Rc(yg(h, [l, x.a, x.b], fa)), H, sa, Pc, Zb, hb, ae, O = 0;
        for (V = U.length; O < V; ++O)
            if (H = U[O], n = Hg(g, H, e), Zb = D[H], H == l)
                for (Pc in Zb)
                    E = Zb[Pc], sa = (E.a[2] - x.c) * y + 
                    (E.a[1] - x.a), this.d[sa] != E && (G = n * (E.a[1] - x.a), S = n * (x.b - E.a[2]), C = E.s(), 4 != C && (3 != C || la) && Ra || B.clearRect(G, S, n, n), 2 == C && B.drawImage(E.V(), 0, 0, n, n, G, S, n, n), this.d[sa] = E);
            else
                for (Pc in H = h.a(H) / s, Zb)
                    for (E = Zb[Pc], sa = yg(h, E.a, fa), G = (sa[0] - xa[0]) / q, S = (xa[1] - sa[3]) / q, ae = H * n, hb = H * n, C = E.s(), 4 != C && Ra || B.clearRect(G, S, ae, hb), 2 == C && B.drawImage(E.V(), 0, 0, n, n, G, S, ae, hb), E = zg(h, sa, l, ba), C = Math.max(E.a, x.a), S = Math.min(E.d, x.d), G = Math.max(E.c, x.c), E = Math.min(E.b, x.b); C <= S; ++C)
                        for (hb = G; hb <= E; ++hb)
                            sa = (hb - x.c) * y + (C - 
                            x.a), this.d[sa] = void 0;
        Mg(a.usedTiles, g, l, w);
        Qg(a, g, h, c, e, u, l, f.n());
        Jg(a, g);
        Lg(a, g);
        Sg(this.i, c * a.size[0] / 2, c * a.size[1] / 2, c * q / d.resolution, c * q / d.resolution, d.rotation, (xa[0] - p[0]) / q, (p[1] - xa[1]) / q);
        return !0
    };
    function Hh(a, b) {
        Ug.call(this, 0, b);
        this.f = Td();
        this.a = this.f.canvas;
        this.a.style.width = "100%";
        this.a.style.height = "100%";
        this.a.className = "ol-unselectable";
        a.insertBefore(this.a, a.childNodes[0] || null);
        this.c = !0;
        this.e = Lc()
    }
    A(Hh, Ug);
    Hh.prototype.h = function(a) {
        return a instanceof rh ? new Gh(0, a) : null
    };
    function Ih(a, b, c) {
        var d = a.g, e = a.f;
        if (ac(d.C, r(b) ? String(b) : void 0)) {
            var f = c.extent, g = c.pixelRatio, h = c.viewState, l = h.rotation;
            Sg(a.e, a.a.width / 2, a.a.height / 2, g / h.resolution, -g / h.resolution, -h.rotation, -h.center[0], -h.center[1]);
            var h = new sh(e, g, f, a.e), n = new Bh(0, f);
            d.dispatchEvent(new uf(b, d, h, 0, c, e, null));
            for (var q in n.a) {
                b = n.a[q];
                for (var s in b)
                    b[s].g()
            }
            if (!n.f())
                a: {
                    q = a.e, s = Ia(Rb(n.a), Number), Na(s), b = {};
                    var p = n.d;
                    c = p[0];
                    var d = p[1], u = p[2], p = p[3];
                    c = vf([c, d, c, p, u, p, u, d], 0, 8, 2, q);
                    e.save();
                    e.beginPath();
                    e.moveTo(c[0], c[1]);
                    e.lineTo(c[2], c[3]);
                    e.lineTo(c[4], c[5]);
                    e.lineTo(c[6], c[7]);
                    e.closePath();
                    e.clip();
                    var w, y;
                    c = 0;
                    for (d = s.length; c < d; ++c)
                        for (w = n.a[s[c].toString()], u = 0, p = Cf.length; u < p; ++u)
                            if (y = w[Cf[u]], r(y) && Uc(f, y.b()) && (y = Ah(y, e, g, q, l, b, y.e, void 0)))
                                break a;
                    e.restore()
                }
            zh(h);
            a.d = n
        }
    }
    Hh.prototype.j = function() {
        return "canvas"
    };
    Hh.prototype.i = function(a) {
        if (null === a)
            this.c && (Od(this.a, !1), this.c = !1);
        else {
            var b = this.f, c = a.size[0] * a.pixelRatio, d = a.size[1] * a.pixelRatio;
            this.a.width != c || this.a.height != d ? (this.a.width = c, this.a.height = d) : b.clearRect(0, 0, this.a.width, this.a.height);
            var c = a.viewState, e = a.coordinateToPixelMatrix;
            Sg(e, a.size[0] / 2, a.size[1] / 2, 1 / c.resolution, -1 / c.resolution, -c.rotation, -c.center[0], -c.center[1]);
            var c = a.pixelToCoordinateMatrix, d = e[0], f = e[1], g = e[2], h = e[3], l = e[4], n = e[5], q = e[6], s = e[7], p = e[8], u = e[9], w = 
            e[10], y = e[11], x = e[12], D = e[13], B = e[14], e = e[15], C = d * n - f * l, G = d * q - g * l, U = d * s - h * l, O = f * q - g * n, la = f * s - h * n, fa = g * s - h * q, ba = p * D - u * x, V = p * B - w * x, E = p * e - y * x, S = u * B - w * D, Ra = u * e - y * D, xa = w * e - y * B, H = C * xa - G * Ra + U * S + O * E - la * V + fa * ba;
            0 != H && (H = 1 / H, c[0] = (n * xa - q * Ra + s * S) * H, c[1] = (-f * xa + g * Ra - h * S) * H, c[2] = (D * fa - B * la + e * O) * H, c[3] = (-u * fa + w * la - y * O) * H, c[4] = (-l * xa + q * E - s * V) * H, c[5] = (d * xa - g * E + h * V) * H, c[6] = (-x * fa + B * U - e * G) * H, c[7] = (p * fa - w * U + y * G) * H, c[8] = (l * Ra - n * E + s * ba) * H, c[9] = (-d * Ra + f * E - h * ba) * H, c[10] = (x * la - D * U + e * C) * H, c[11] = (-p * la + u * U - y * C) * H, c[12] = (-l * 
            S + n * V - q * ba) * H, c[13] = (d * S - f * V + g * ba) * H, c[14] = (-x * O + D * G - B * C) * H, c[15] = (p * O - u * G + w * C) * H);
            Ih(this, "precompose", a);
            c = a.layerStatesArray;
            d = a.viewState.resolution;
            f = 0;
            for (g = c.length; f < g; ++f)
                h = c[f], l = h.layer, l = Yg(this, l), h.visible && d >= h.minResolution && d < h.maxResolution && "ready" == h.Ba && l.n(a, h) && l.l(a, h, b);
            Ih(this, "postcompose", a);
            this.c || (Od(this.a, !0), this.c = !0);
            for (var sa in this.b)
                if (!(sa in a.layerStates)) {
                    a.postRenderFunctions.push(z(this.k, this));
                    break
                }
            a.postRenderFunctions.push(Vg)
        }
    };
    function Jh() {
        this.d = 0;
        this.c = {};
        this.a = this.b = null
    }
    Jh.prototype.clear = function() {
        this.d = 0;
        this.c = {};
        this.a = this.b = null
    };
    Jh.prototype.forEach = function(a, b) {
        for (var c = this.b; null !== c; )
            a.call(b, c.ha, c.Ia, this), c = c.G
    };
    function Kh(a, b) {
        var c = a.c[b];
        if (c === a.a)
            return c.ha;
        c === a.b ? (a.b = a.b.G, a.b.T = null) : (c.G.T = c.T, c.T.G = c.G);
        c.G = null;
        c.T = a.a;
        a.a.G = c;
        a.a = c;
        return c.ha
    }
    Jh.prototype.e = function() {
        return this.d
    };
    Jh.prototype.Ga = function() {
        var a = Array(this.d), b = 0, c;
        for (c = this.a; null !== c; c = c.T)
            a[b++] = c.Ia;
        return a
    };
    var Lh = ["canvas", "webgl", "dom"];
    function $(a) {
        zc.call(this);
        var b = Mh(a);
        this.rb = r(a.pixelRatio) ? a.pixelRatio : Ud;
        this.qb = b.logos;
        this.l = new $f(this.Kc, void 0, this);
        Ab(this, this.l);
        this.Aa = Lc();
        this.ub = Lc();
        this.pb = 0;
        this.j = this.v = this.P = this.c = null;
        this.b = T("DIV", "ol-viewport");
        this.b.style.position = "relative";
        this.b.style.overflow = "hidden";
        this.b.style.width = "100%";
        this.b.style.height = "100%";
        this.b.style.msTouchAction = "none";
        Xd && (this.b.className = "ol-touch");
        this.tb = T("DIV", "ol-overlaycontainer");
        this.b.appendChild(this.tb);
        this.L = 
        T("DIV", "ol-overlaycontainer-stopevent");
        N(this.L, ["click", "dblclick", "mousedown", "touchstart", "MSPointerDown", ff, Za ? "DOMMouseScroll" : "mousewheel"], Cb);
        this.b.appendChild(this.L);
        a = new Ye(this);
        N(a, Qb(jf), this.Za, !1, this);
        Ab(this, a);
        this.ka = b.keyboardEventTarget;
        this.n = new ig;
        N(this.n, "key", this.Ta, !1, this);
        Ab(this, this.n);
        a = new qg(this.b);
        N(a, "mousewheel", this.Ta, !1, this);
        Ab(this, a);
        this.g = b.controls;
        this.Ba = b.deviceOptions;
        this.e = b.interactions;
        this.i = b.overlays;
        this.Q = new b.Mc(this.b, this);
        Ab(this, 
        this.Q);
        this.pa = new dg;
        Ab(this, this.pa);
        N(this.pa, "resize", this.da, !1, this);
        this.A = null;
        this.t = [];
        this.la = [];
        this.oa = new ah(z(this.Ob, this), z(this.dc, this));
        this.vb = {};
        N(this, Dc("layergroup"), this.Sb, !1, this);
        N(this, Dc("view"), this.ec, !1, this);
        N(this, Dc("size"), this.bc, !1, this);
        N(this, Dc("target"), this.cc, !1, this);
        this.Z(b.Uc);
        this.g.forEach(function(a) {
            a.setMap(this)
        }, this);
        N(this.g, "add", function(a) {
            a.element.setMap(this)
        }, !1, this);
        N(this.g, "remove", function(a) {
            a.element.setMap(null)
        }, !1, this);
        this.e.forEach(function(a) {
            a.setMap(this)
        }, this);
        N(this.e, "add", function(a) {
            a.element.setMap(this)
        }, !1, this);
        N(this.e, "remove", function(a) {
            a.element.setMap(null)
        }, !1, this);
        this.i.forEach(function(a) {
            a.setMap(this)
        }, this);
        N(this.i, "add", function(a) {
            a.element.setMap(this)
        }, !1, this);
        N(this.i, "remove", function(a) {
            a.element.setMap(null)
        }, !1, this)
    }
    A($, zc);
    k = $.prototype;
    k.wb = function(a) {
        this.g.push(a)
    };
    k.xb = function(a) {
        this.e.push(a)
    };
    k.yb = function(a) {
        this.N().$().push(a)
    };
    k.zb = function(a) {
        this.i.push(a)
    };
    k.I = function(a) {
        this.p();
        Array.prototype.push.apply(this.t, arguments)
    };
    k.r = function() {
        Fd(this.b);
        $.w.r.call(this)
    };
    k.xc = function(a, b, c, d, e) {
        if (null !== this.c)
            return a = this.M(a), Wg(this.Q, a, this.c, b, r(c) ? c : null, r(d) ? d : rc, r(e) ? e : null)
    };
    k.Lb = function(a) {
        return this.M(this.Ea(a))
    };
    k.Ea = function(a) {
        if (r(a.changedTouches)) {
            var b = a.changedTouches[0];
            a = Md(this.b);
            return [b.clientX - a.x, b.clientY - a.y]
        }
        b = this.b;
        a = Md(a);
        b = Md(b);
        b = new ud(a.x - b.x, a.y - b.y);
        return [b.x, b.y]
    };
    k.xa = function() {
        return this.o("target")
    };
    $.prototype.getTarget = $.prototype.xa;
    k = $.prototype;
    k.M = function(a) {
        var b = this.c;
        if (null === b)
            return null;
        a = a.slice();
        return Tg(b.pixelToCoordinateMatrix, a, a)
    };
    k.Kb = function() {
        return this.g
    };
    k.Nb = function() {
        return this.i
    };
    k.Mb = function() {
        return this.e
    };
    k.N = function() {
        return this.o("layergroup")
    };
    $.prototype.getLayerGroup = $.prototype.N;
    $.prototype.sb = function() {
        return this.N().$()
    };
    $.prototype.ja = function(a) {
        var b = this.c;
        if (null === b)
            return null;
        a = a.slice(0, 2);
        return Tg(b.coordinateToPixelMatrix, a, a)
    };
    $.prototype.k = function() {
        return this.o("size")
    };
    $.prototype.getSize = $.prototype.k;
    $.prototype.a = function() {
        return this.o("view")
    };
    $.prototype.getView = $.prototype.a;
    k = $.prototype;
    k.Pb = function() {
        return this.b
    };
    k.Ob = function(a, b, c, d) {
        var e = this.c;
        if (!(null !== e && b in e.wantedTiles && e.wantedTiles[b][od(a.a)]))
            return Infinity;
        a = c[0] - e.focus[0];
        c = c[1] - e.focus[1];
        return 65536 * Math.log(d) + Math.sqrt(a * a + c * c) / d
    };
    k.Ta = function(a, b) {
        var c = new X(b || a.type, this, a);
        this.Za(c)
    };
    k.Za = function(a) {
        if (null !== this.c) {
            this.A = a.coordinate;
            a.frameState = this.c;
            var b = this.e.a, c;
            if (!1 !== this.dispatchEvent(a))
                for (c = b.length - 1; 0 <= c && b[c].ga(a); c--)
                    ;
        }
    };
    k.$b = function() {
        var a = this.c, b = this.oa;
        if (!b.f()) {
            var c = 16, d = c, e = 0;
            if (null !== a) {
                var e = a.viewHints, f = this.Ba;
                e[0] && (c = !1 === f.loadTilesWhileAnimating ? 0 : 8, d = 2);
                e[1] && (c = !1 === f.loadTilesWhileInteracting ? 0 : 8, d = 2);
                e = Pb(a.wantedTiles)
            }
            c *= e;
            d *= e;
            if (b.d < c) {
                var e = b.g, f = b.a, g = b.b, h = 0, l = f.length, n, q, s;
                for (q = 0; q < l; ++q)
                    n = f[q], s = e(n), Infinity == s ? delete b.c[b.h(n)] : (g[h] = s, f[h++] = n);
                f.length = h;
                g.length = h;
                for (e = (b.a.length >> 1) - 1; 0 <= e; e--)
                    $g(b, e);
                c = Math.min(c - b.d, d, b.e());
                for (d = 0; d < c; ++d)
                    e = b, g = e.a, h = e.b, f = g[0], 1 == 
                    g.length ? (g.length = 0, h.length = 0) : (g[0] = g.pop(), h[0] = h.pop(), $g(e, 0)), g = e.h(f), delete e.c[g], e = f[0], kc(e, "change", b.i, !1, b), e.load();
                b.d += c
            }
        }
        b = this.la;
        c = 0;
        for (d = b.length; c < d; ++c)
            b[c](this, a);
        b.length = 0
    };
    k.bc = function() {
        this.p()
    };
    k.cc = function() {
        var a = this.xa(), a = r(a) ? zd(a) : null;
        pg(this.n);
        null === a ? Fd(this.b) : (a.appendChild(this.b), jg(this.n, null === this.ka ? a : this.ka));
        this.da()
    };
    k.dc = function() {
        this.p()
    };
    k.fc = function() {
        this.p()
    };
    k.ec = function() {
        null !== this.v && (P(this.v), this.v = null);
        var a = this.a();
        null != a && (this.v = N(a, "propertychange", this.fc, !1, this));
        this.p()
    };
    k.Tb = function() {
        this.p()
    };
    k.Ub = function() {
        this.p()
    };
    k.Sb = function() {
        if (null !== this.j) {
            for (var a = this.j.length, b = 0; b < a; ++b)
                P(this.j[b]);
            this.j = null
        }
        a = this.N();
        null != a && (this.j = [N(a, "propertychange", this.Ub, !1, this), N(a, "change", this.Tb, !1, this)]);
        this.p()
    };
    k.Lc = function() {
        var a = this.l;
        ag(a);
        a.Pa()
    };
    k.p = function() {
        null != this.l.D || this.l.start()
    };
    k.Gc = function(a) {
        if (r(this.g.remove(a)))
            return a
    };
    k.Hc = function(a) {
        var b;
        r(this.e.remove(a)) && (b = a);
        return b
    };
    k.Ic = function(a) {
        return this.N().$().remove(a)
    };
    k.Jc = function(a) {
        if (r(this.i.remove(a)))
            return a
    };
    k.Kc = function(a) {
        var b, c, d, e = this.k(), f = this.a(), g = null;
        if (b = r(e) && 0 < e[0] && 0 < e[1] && r(f))
            b = null != f.b() && r(f.a());
        if (b) {
            var g = Ka(f.n), h = this.N().c(), l = {};
            b = 0;
            for (c = h.length; b < c; ++b)
                l[v(h[b].layer)] = h[b];
            d = f.s();
            g = {animate: !1,attributions: {},coordinateToPixelMatrix: this.Aa,extent: null,focus: null === this.A ? d.center : this.A,index: this.pb++,layerStates: l,layerStatesArray: h,logos: this.qb,pixelRatio: this.rb,pixelToCoordinateMatrix: this.ub,postRenderFunctions: [],size: e,skippedFeatureUids: this.vb,tileQueue: this.oa,
                time: a,usedTiles: {},viewState: d,viewHints: g,wantedTiles: {}}
        }
        a = this.t;
        b = e = 0;
        for (c = a.length; b < c; ++b)
            f = a[b], f(this, g) && (a[e++] = f);
        a.length = e;
        null !== g && (g.extent = Sc(d.center, d.resolution, d.rotation, g.size));
        this.c = g;
        this.Q.i(g);
        null !== g && (g.animate && this.p(), Array.prototype.push.apply(this.la, g.postRenderFunctions), !(d = 0 !== this.t.length || g.viewHints[0] || g.viewHints[1]) && (d = this.P) && (d = g.extent, b = this.P, d = d[0] == b[0] && d[2] == b[2] && d[1] == b[1] && d[3] == b[3]), d || (this.dispatchEvent(new je("moveend", this, g)), 
        this.P = r(void 0) ? void 0 : g.extent.slice()));
        this.dispatchEvent(new je("postrender", this, g));
        d = g = this.$b;
        this && (d = z(g, this));
        ha(m.setImmediate) ? m.setImmediate(d) : (Lf || (Lf = Mf()), Lf(d))
    };
    k.jb = function(a) {
        this.q("layergroup", a)
    };
    $.prototype.setLayerGroup = $.prototype.jb;
    $.prototype.u = function(a) {
        this.q("size", a)
    };
    $.prototype.setSize = $.prototype.u;
    $.prototype.ma = function(a) {
        this.q("target", a)
    };
    $.prototype.setTarget = $.prototype.ma;
    $.prototype.na = function(a) {
        this.q("view", a)
    };
    $.prototype.setView = $.prototype.na;
    $.prototype.da = function() {
        var a = this.xa(), a = r(a) ? zd(a) : null;
        if (null === a)
            this.u(void 0);
        else {
            var b = yd(a), c = I && a.currentStyle, d;
            if (d = c)
                wd(b), d = !0;
            if (d && "auto" != c.width && "auto" != c.height && !c.boxSizing)
                b = Pd(a, c.width, "width", "pixelWidth"), a = Pd(a, c.height, "height", "pixelHeight"), a = new vd(b, a);
            else {
                c = new vd(a.offsetWidth, a.offsetHeight);
                if (I) {
                    b = Qd(a, "paddingLeft");
                    d = Qd(a, "paddingRight");
                    var e = Qd(a, "paddingTop"), f = Qd(a, "paddingBottom"), b = new Hd(e, d, f, b)
                } else
                    b = Id(a, "paddingLeft"), d = Id(a, "paddingRight"), 
                    e = Id(a, "paddingTop"), f = Id(a, "paddingBottom"), b = new Hd(parseFloat(e), parseFloat(d), parseFloat(f), parseFloat(b));
                !I || I && 9 <= gb ? (d = Id(a, "borderLeftWidth"), e = Id(a, "borderRightWidth"), f = Id(a, "borderTopWidth"), a = Id(a, "borderBottomWidth"), a = new Hd(parseFloat(f), parseFloat(e), parseFloat(a), parseFloat(d))) : (d = Sd(a, "borderLeft"), e = Sd(a, "borderRight"), f = Sd(a, "borderTop"), a = Sd(a, "borderBottom"), a = new Hd(f, e, a, d));
                a = new vd(c.width - a.left - b.left - b.right - a.right, c.height - a.top - b.top - b.bottom - a.bottom)
            }
            this.u([a.width, 
                a.height])
        }
    };
    function Mh(a) {
        var b = null;
        r(a.keyboardEventTarget) && (b = t(a.keyboardEventTarget) ? document.getElementById(a.keyboardEventTarget) : a.keyboardEventTarget);
        var c = {}, d = {};
        if (!r(a.logo) || "boolean" == typeof a.logo && a.logo)
            d["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAHGAAABxgEXwfpGAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAhNQTFRF////AP//AICAgP//AFVVQECA////K1VVSbbbYL/fJ05idsTYJFtbbcjbJllmZszWWMTOIFhoHlNiZszTa9DdUcHNHlNlV8XRIVdiasrUHlZjIVZjaMnVH1RlIFRkH1RkH1ZlasvYasvXVsPQH1VkacnVa8vWIVZjIFRjVMPQa8rXIVVkXsXRsNveIFVkIFZlIVVj3eDeh6GmbMvXH1ZkIFRka8rWbMvXIFVkIFVjIFVkbMvWH1VjbMvWIFVlbcvWIFVla8vVIFVkbMvWbMvVH1VkbMvWIFVlbcvWIFVkbcvVbMvWjNPbIFVkU8LPwMzNIFVkbczWIFVkbsvWbMvXIFVkRnB8bcvW2+TkW8XRIFVkIlZlJVloJlpoKlxrLl9tMmJwOWd0Omh1RXF8TneCT3iDUHiDU8LPVMLPVcLPVcPQVsPPVsPQV8PQWMTQWsTQW8TQXMXSXsXRX4SNX8bSYMfTYcfTYsfTY8jUZcfSZsnUaIqTacrVasrVa8jTa8rWbI2VbMvWbcvWdJObdcvUdszUd8vVeJaee87Yfc3WgJyjhqGnitDYjaarldPZnrK2oNbborW5o9bbo9fbpLa6q9ndrL3ArtndscDDutzfu8fJwN7gwt7gxc/QyuHhy+HizeHi0NfX0+Pj19zb1+Tj2uXk29/e3uLg3+Lh3+bl4uXj4ufl4+fl5Ofl5ufl5ujm5+jmySDnBAAAAFp0Uk5TAAECAgMEBAYHCA0NDg4UGRogIiMmKSssLzU7PkJJT1JTVFliY2hrdHZ3foSFhYeJjY2QkpugqbG1tre5w8zQ09XY3uXn6+zx8vT09vf4+Pj5+fr6/P39/f3+gz7SsAAAAVVJREFUOMtjYKA7EBDnwCPLrObS1BRiLoJLnte6CQy8FLHLCzs2QUG4FjZ5GbcmBDDjxJBXDWxCBrb8aM4zbkIDzpLYnAcE9VXlJSWlZRU13koIeW57mGx5XjoMZEUqwxWYQaQbSzLSkYGfKFSe0QMsX5WbjgY0YS4MBplemI4BdGBW+DQ11eZiymfqQuXZIjqwyadPNoSZ4L+0FVM6e+oGI6g8a9iKNT3o8kVzNkzRg5lgl7p4wyRUL9Yt2jAxVh6mQCogae6GmflI8p0r13VFWTHBQ0rWPW7ahgWVcPm+9cuLoyy4kCJDzCm6d8PSFoh0zvQNC5OjDJhQopPPJqph1doJBUD5tnkbZiUEqaCnB3bTqLTFG1bPn71kw4b+GFdpLElKIzRxxgYgWNYc5SCENVHKeUaltHdXx0dZ8uBI1hJ2UUDgq82CM2MwKeibqAvSO7MCABq0wXEPiqWEAAAAAElFTkSuQmCC"] = "http://openlayers.org/";
        else {
            var e = a.logo;
            t(e) ? d[e] = "" : ia(e) && (d[e.src] = e.href)
        }
        e = a.layers instanceof gh ? a.layers : new gh({layers: a.layers});
        c.layergroup = e;
        c.target = a.target;
        c.view = r(a.view) ? a.view : new R;
        var e = Ug, f;
        r(a.renderer) ? da(a.renderer) ? f = a.renderer : t(a.renderer) && (f = [a.renderer]) : f = Lh;
        var g, h;
        g = 0;
        for (h = f.length; g < h; ++g)
            if ("canvas" == f[g] && Wd) {
                e = Hh;
                break
            }
        r(a.controls) ? f = da(a.controls) ? new be(Ka(a.controls)) : a.controls : (f = r(void 0) ? void 0 : {}, g = new be, (r(f.zoom) ? f.zoom : 1) && g.push(new We(f.zoomOptions)), (r(f.rotate) ? f.rotate : 
        1) && g.push(new Ue(f.rotateOptions)), (r(f.attribution) ? f.attribution : 1) && g.push(new Se(f.attributionOptions)), f = g);
        g = r(a.deviceOptions) ? a.deviceOptions : {};
        if (r(a.interactions))
            h = da(a.interactions) ? new be(Ka(a.interactions)) : a.interactions;
        else {
            h = r(void 0) ? void 0 : {};
            var l = new be, n = new Vf;
            (r(h.altShiftDragRotate) ? h.altShiftDragRotate : 1) && l.push(new Yf);
            (r(h.doubleClickZoom) ? h.doubleClickZoom : 1) && l.push(new Kf({delta: h.zoomDelta,duration: h.zoomDuration}));
            (r(h.dragPan) ? h.dragPan : 1) && l.push(new Xf({kinetic: n}));
            (r(h.pinchRotate) ? h.pinchRotate : 1) && l.push(new eh);
            (r(h.pinchZoom) ? h.pinchZoom : 1) && l.push(new fh({duration: h.zoomDuration}));
            if (r(h.keyboard) ? h.keyboard : 1)
                l.push(new bh), l.push(new ch({delta: h.zoomDelta,duration: h.zoomDuration}));
            (r(h.mouseWheelZoom) ? h.mouseWheelZoom : 1) && l.push(new dh({duration: h.zoomDuration}));
            (r(h.shiftDragZoom) ? h.shiftDragZoom : 1) && l.push(new Zf);
            h = l
        }
        a = r(a.overlays) ? da(a.overlays) ? new be(Ka(a.overlays)) : a.overlays : new be;
        return {controls: f,deviceOptions: g,interactions: h,keyboardEventTarget: b,
            logos: d,overlays: a,Mc: e,Uc: c}
    }
    Zc(lh);
    Zc(qh);
    F(qh, function(a) {
        F(lh, function(b) {
            ad(a, b, mh);
            ad(b, a, nh)
        })
    });
    function Nh(a) {
        var b = /\{z\}/g, c = /\{x\}/g, d = /\{y\}/g, e = /\{-y\}/g;
        return function(f) {
            return null === f ? void 0 : a.replace(b, f[0].toString()).replace(c, f[1].toString()).replace(d, f[2].toString()).replace(e, function() {
                return ((1 << f[0]) - f[2] - 1).toString()
            })
        }
    }
    function Oh(a) {
        return Ph(Ia(a, Nh))
    }
    function Ph(a) {
        return 1 === a.length ? a[0] : function(b, c, d) {
            return null === b ? void 0 : a[jb((b[1] << b[0]) + b[2], a.length)](b, c, d)
        }
    }
    function Qh() {
    }
    function Rh(a, b) {
        var c = [0, 0, 0];
        return function(d, e, f) {
            return null === d ? void 0 : b(a(d, f, c), e, f)
        }
    }
    function Sh(a) {
        var b = [], c = /\{(\d)-(\d)\}/.exec(a) || /\{([a-z])-([a-z])\}/.exec(a);
        if (c) {
            var d = c[2].charCodeAt(0), e;
            for (e = c[1].charCodeAt(0); e <= d; ++e)
                b.push(a.replace(c[0], String.fromCharCode(e)))
        } else
            b.push(a);
        return b
    }
    ;
    function Th(a) {
        Jh.call(this);
        this.f = r(a) ? a : 2048
    }
    A(Th, Jh);
    function Kg(a) {
        return a.e() > a.f
    }
    ;
    function Uh(a) {
        Fg.call(this, {attributions: a.attributions,extent: a.extent,logo: a.logo,opaque: a.opaque,projection: a.projection,state: r(a.state) ? a.state : void 0,tileGrid: a.tileGrid,tilePixelRatio: a.tilePixelRatio});
        this.tileUrlFunction = r(a.tileUrlFunction) ? a.tileUrlFunction : Qh;
        this.crossOrigin = r(a.crossOrigin) ? a.crossOrigin : null;
        this.a = new Th;
        this.tileLoadFunction = r(a.tileLoadFunction) ? a.tileLoadFunction : Vh;
        this.tileClass = r(a.tileClass) ? a.tileClass : Ff
    }
    A(Uh, Fg);
    function Vh(a, b) {
        a.V().src = b
    }
    Uh.prototype.d = function() {
        return Kg(this.a)
    };
    function Og(a, b, c, d, e, f) {
        var g = a.c(b, c, d);
        if (a.a.c.hasOwnProperty(g))
            return Kh(a.a, g);
        b = [b, c, d];
        e = a.tileUrlFunction(b, e, f);
        e = new a.tileClass(b, r(e) ? 0 : 4, r(e) ? e : "", a.crossOrigin, a.tileLoadFunction);
        a = a.a;
        f = {Ia: g,G: null,T: a.a,ha: e};
        null === a.a ? a.b = f : a.a.G = f;
        a.a = f;
        a.c[g] = f;
        ++a.d;
        return e
    }
    Uh.prototype.b = function(a) {
        this.a.clear();
        this.tileUrlFunction = a;
        this.K()
    };
    Uh.prototype.e = function(a, b, c) {
        a = this.c(a, b, c);
        this.a.c.hasOwnProperty(a) && Kh(this.a, a)
    };
    function Wh(a) {
        var b = r(a.extent) ? a.extent : ih, c = Dg(b, a.maxZoom, a.tileSize);
        wg.call(this, {minZoom: a.minZoom,origin: Qc(b, "top-left"),resolutions: c,tileSize: a.tileSize})
    }
    A(Wh, wg);
    function Xh(a, b) {
        var c = r(b) ? b : {}, d = a.minZoom, e = a.maxZoom, f = r(c.wrapX) ? c.wrapX : !0, g = null;
        if (r(c.extent)) {
            var g = Array(e + 1), h;
            for (h = 0; h <= e; ++h)
                g[h] = h < d ? null : zg(a, c.extent, h)
        }
        return function(a, b, c) {
            b = a[0];
            if (b < d || e < b)
                return null;
            var h = Math.pow(2, b), p = a[1];
            if (f)
                p = jb(p, h);
            else if (0 > p || h <= p)
                return null;
            a = a[2];
            return a < -h || -1 < a || null !== g && !rd(g[b], p, a) ? null : md(b, p, -a - 1, c)
        }
    }
    Wh.prototype.h = function(a, b) {
        return a[0] < this.maxZoom ? qd(2 * a[1], 2 * (a[1] + 1), 2 * a[2], 2 * (a[2] + 1), b) : null
    };
    Wh.prototype.e = function(a, b, c, d) {
        d = qd(0, a[1], 0, a[2], d);
        for (a = a[0] - 1; a >= this.minZoom; --a)
            if (d.a = d.d >>= 1, d.c = d.b >>= 1, b.call(c, a, d))
                return !0;
        return !1
    };
    function Yh(a) {
        var b = r(a.projection) ? a.projection : "EPSG:3857", c = new Wh({extent: Eg(b),maxZoom: a.maxZoom,tileSize: a.tileSize});
        Uh.call(this, {attributions: a.attributions,crossOrigin: a.crossOrigin,logo: a.logo,projection: b,tileGrid: c,tileLoadFunction: a.tileLoadFunction,tilePixelRatio: a.tilePixelRatio,tileUrlFunction: Qh});
        this.l = Xh(c, {wrapX: a.wrapX});
        r(a.tileUrlFunction) ? this.b(a.tileUrlFunction) : r(a.urls) ? this.b(Oh(a.urls)) : r(a.url) && this.b(Oh(Sh(a.url)))
    }
    A(Yh, Uh);
    Yh.prototype.b = function(a) {
        Yh.w.b.call(this, Rh(this.l, a))
    };
    qa("ol.Map", $);
    $.prototype.addControl = $.prototype.wb;
    $.prototype.addInteraction = $.prototype.xb;
    $.prototype.addLayer = $.prototype.yb;
    $.prototype.addOverlay = $.prototype.zb;
    $.prototype.beforeRender = $.prototype.I;
    $.prototype.forEachFeatureAtPixel = $.prototype.xc;
    $.prototype.getEventCoordinate = $.prototype.Lb;
    $.prototype.getEventPixel = $.prototype.Ea;
    $.prototype.getTarget = $.prototype.xa;
    $.prototype.getCoordinateFromPixel = $.prototype.M;
    $.prototype.getControls = $.prototype.Kb;
    $.prototype.getOverlays = $.prototype.Nb;
    $.prototype.getInteractions = $.prototype.Mb;
    $.prototype.getLayerGroup = $.prototype.N;
    $.prototype.getLayers = $.prototype.sb;
    $.prototype.getPixelFromCoordinate = $.prototype.ja;
    $.prototype.getSize = $.prototype.k;
    $.prototype.getView = $.prototype.a;
    $.prototype.getViewport = $.prototype.Pb;
    $.prototype.renderSync = $.prototype.Lc;
    $.prototype.render = $.prototype.p;
    $.prototype.removeControl = $.prototype.Gc;
    $.prototype.removeInteraction = $.prototype.Hc;
    $.prototype.removeLayer = $.prototype.Ic;
    $.prototype.removeOverlay = $.prototype.Jc;
    $.prototype.setLayerGroup = $.prototype.jb;
    $.prototype.setSize = $.prototype.u;
    $.prototype.setTarget = $.prototype.ma;
    $.prototype.setView = $.prototype.na;
    $.prototype.updateSize = $.prototype.da;
    X.prototype.originalEvent = X.prototype.originalEvent;
    X.prototype.pixel = X.prototype.pixel;
    X.prototype.coordinate = X.prototype.coordinate;
    X.prototype.preventDefault = X.prototype.preventDefault;
    X.prototype.stopPropagation = X.prototype.f;
    je.prototype.map = je.prototype.map;
    je.prototype.frameState = je.prototype.frameState;
    $.prototype.bindTo = $.prototype.Na;
    $.prototype.get = $.prototype.o;
    $.prototype.getKeys = $.prototype.Ga;
    $.prototype.getProperties = $.prototype.Ra;
    $.prototype.set = $.prototype.q;
    $.prototype.setProperties = $.prototype.Z;
    $.prototype.unbind = $.prototype.za;
    $.prototype.unbindAll = $.prototype.nb;
    $.prototype.dispatchChangeEvent = $.prototype.K;
    $.prototype.getRevision = $.prototype.Sa;
    $.prototype.on = $.prototype.cb;
    $.prototype.once = $.prototype.fb;
    $.prototype.un = $.prototype.lb;
    $.prototype.unByKey = $.prototype.mb;
    X.prototype.map = X.prototype.map;
    X.prototype.frameState = X.prototype.frameState;
    Y.prototype.originalEvent = Y.prototype.originalEvent;
    Y.prototype.pixel = Y.prototype.pixel;
    Y.prototype.coordinate = Y.prototype.coordinate;
    Y.prototype.preventDefault = Y.prototype.preventDefault;
    Y.prototype.stopPropagation = Y.prototype.f;
    Y.prototype.map = Y.prototype.map;
    Y.prototype.frameState = Y.prototype.frameState;
    qa("ol.View", R);
    R.prototype.constrainCenter = R.prototype.e;
    R.prototype.constrainResolution = R.prototype.constrainResolution;
    R.prototype.constrainRotation = R.prototype.constrainRotation;
    R.prototype.getCenter = R.prototype.b;
    R.prototype.calculateExtent = R.prototype.u;
    R.prototype.getProjection = R.prototype.A;
    R.prototype.getResolution = R.prototype.a;
    R.prototype.getResolutionForExtent = R.prototype.g;
    R.prototype.getRotation = R.prototype.J;
    R.prototype.getZoom = R.prototype.Qb;
    R.prototype.fitExtent = R.prototype.Ib;
    R.prototype.fitGeometry = R.prototype.Jb;
    R.prototype.centerOn = R.prototype.Ab;
    R.prototype.rotate = R.prototype.rotate;
    R.prototype.setCenter = R.prototype.H;
    R.prototype.setResolution = R.prototype.c;
    R.prototype.setRotation = R.prototype.k;
    R.prototype.setZoom = R.prototype.L;
    R.prototype.bindTo = R.prototype.Na;
    R.prototype.get = R.prototype.o;
    R.prototype.getKeys = R.prototype.Ga;
    R.prototype.getProperties = R.prototype.Ra;
    R.prototype.set = R.prototype.q;
    R.prototype.setProperties = R.prototype.Z;
    R.prototype.unbind = R.prototype.za;
    R.prototype.unbindAll = R.prototype.nb;
    R.prototype.dispatchChangeEvent = R.prototype.K;
    R.prototype.getRevision = R.prototype.Sa;
    R.prototype.on = R.prototype.cb;
    R.prototype.once = R.prototype.fb;
    R.prototype.un = R.prototype.lb;
    R.prototype.unByKey = R.prototype.mb;
    qa("ol.layer.Tile", rh);
    qa("ol.source.XYZ", Yh);
})();
