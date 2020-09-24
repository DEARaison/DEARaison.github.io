!function a(b, c, d) {
    function e(g, h) {
        if (!c[g]) {
            if (!b[g]) {
                var i = "function" == typeof require && require;
                if (!h && i) return i(g, !0);
                if (f) return f(g, !0);
                var j = new Error("Cannot find module '" + g + "'");
                throw j.code = "MODULE_NOT_FOUND", j
            }
            var k = c[g] = {
                exports: {}
            };
            b[g][0].call(k.exports, function (a) {
                var c = b[g][1][a];
                return e(c ? c : a)
            }, k, k.exports, a, b, c, d)
        }
        return c[g].exports
    }

    for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
    return e
}({
    1: [function (a, b, c) {
        "use strict";

        function d() {
            if (n = i(d), l = Date.now(), m = l - r, m > s) {
                r = l - m % s, k.fillStyle = "rgba(0, 0, 0, 0.06)", k.fillRect(0, 0, j.width, j.height), k.fillStyle = "hsla(" + p + ", 80%, 50%, 1 )", k.font = t + "px Helvetica", p++;
                for (var a = 0; a < v.length; a++) {
                    var b = o[Math.floor(Math.random() * o.length)];
                    k.fillText(b, a * t, v[a] * t), v[a] * t > j.height && Math.random() > .975 && (v[a] = 0), v[a]++
                }
            }
        }

        function e() {
            j.height = window.innerHeight, j.width = window.innerWidth, u = j.width / t;
            for (var a = 0; a < u; a++) v[a] = Math.floor(Math.random() * j.height);
            d()
        }

        var h = $(window).innerWidth();
        $(document).ready(function () {
            h <= 769 && $("#matrix-link").removeAttr("xlink:href href")
        });
        var i = (window.cancelAnimationFrame || window.mozCancelAnimationFrame, window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame),
            j = document.getElementById("m"),
            k = j.getContext("2d");
        j.height = window.innerHeight, j.width = window.innerWidth;
        var l, m, n,
            o = "qwertyuiop[]asdfghjkl;'{}zxcvbnm,./QWERTYUIOPLKJHGFDSAZXCVBNM0123456789/*-+&⁊ǷÞÐÆ" /*Changes this string to change the random character*/,
            p = 250,
            q = 15,
            r = Date.now(),
            s = 1e3 / q;
        o = o.split("");
        for (var t = 13, u = j.width / t, v = [], w = 0; w < u; w++) v[w] = Math.floor(Math.random() * j.height);
        d(), window.addEventListener("resize", e, !1)
    }]
}, {}, [1]);
