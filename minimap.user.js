// ==UserScript==
// @name         tas
// @namespace    http://tampermonkey.net/
// @version      1
// @description  1
// @author       1
// @match        https://pixelzone.io/*
// @match        http://pixelzone.io/*
// @homepage     https://github.com/zTopMan/asasasassaa
// @updateURL    https://raw.githubusercontent.com/zTopMan/asasasassaa/minimap.user.js
// @downloadURL  https://raw.githubusercontent.com/zTopMan/asasasassaa/master/minimap.user.js
// @grant        none
// ==/UserScript==

var a = ['aW5uZXJIdG1s',
    'Ym90Y2FudmFz',
    'ZmFpbGVkOiBsb2FkSW1hZ2Uo',
    'Z2V0SW1hZ2VEYXRh',
    'ZGF0YQ==',
    '8J+RkSBJbXDDqXJpbyBCb3Q6',
    'RVJST1I=',
    'Qm90IGRlc2xpZ2FkbyDinYwg',
    'ZG9jdW1lbnRFbGVtZW50',
    'Y2xpZW50SGVpZ2h0',
    'Y2xpZW50V2lkdGg=',
    'Qm90IExpZ2FkbyDinJTvuI8=',
    'Wm9vbSBtdXN0IGJlIGF0IGxlYXN0IDI=',
    'c2V0VGltZW91dA==',
    'Y2xpY2tDb2xvcg==',
    'bGVmdA==',
    'dG9w',
    'Qm90IExpZ2FkbyDinJTvuI8g',
    'cmFuZG9t',
    'Z2V0Q29sb3JJZEZyb21SR0I=',
    'WW91ciBpbWFnZSBjb250YWlucyBjb2xvcnMgb3V0c2lkZSB0aGUgcGFsZXR0ZSBhdCA=',
    'OiBb',
    'XS4gVXNlIGV4YWN0LCBhbmQgcG5nIGZvcm1hdA==',
    'YWJz',
    'Q29vcmRpbmF0ZSBlcnJvciB0b28gYmlnLiBQbGVhc2UgcGFu',
    'UGFpbnQg',
    'IHdhcyA=',
    'LiBUZXN0ZWQ6IA==',
    'IGluIA==',
    'IG1zLg==',
    'Tm8gcGFpbnQuIFRlc3RlZDog',
    'ZGlzcGF0Y2hFdmVudA==',
    'Z2V0RGlmZg==',
    'cG9zdA==',
    'bmV4dFNpYmxpbmc=',
    'dmlzaWJpbGl0eQ==',
    'dmlzaWJsZQ==',
    'Q2FwdGNoYSDimqDvuI8=',
    'b2Zmc2V0TGVmdA==',
    'b2Zmc2V0VG9w',
    'c2V0Q29va2ll',
    'YXJndW1lbnRz',
    'c2V0VGltZQ==',
    'OyBleHBpcmVzPQ==',
    'dG9HTVRTdHJpbmc=',
    'Y29va2ll',
    'OyBwYXRoPS8=',
    'cG9w',
    'c2hpZnQ=',
    'c3RyaW5n',
    'Y29uc3RydWN0b3I=',
    'd2hpbGUgKHRydWUpIHt9',
    'Y291bnRlcg==',
    'ZGVidQ==',
    'Z2dlcg==',
    'Y2FsbA==',
    'YWN0aW9u',
    'c3RhdGVPYmplY3Q=',
    'YXBwbHk=',
    'ZnVuY3Rpb24gKlwoICpcKQ==',
    'XCtcKyAqKD86XzB4KD86W2EtZjAtOV0pezQsNn18KD86XGJ8XGQpW2EtejAtOV17MSw0fSg/OlxifFxkKSk=',
    'aW5pdA==',
    'dGVzdA==',
    'Y2hhaW4=',
    'aW5wdXQ=',
    '8J+RkSBJbXDDqXJpbyBCb3Qg8J+RkQ==',
    'aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3pUb3BNYW4vQXF1YU1hcC9tYXN0ZXIvaW1hZ2Vz',
    'cHJvdG90eXBl',
    'YmV0d2Vlbg==',
    'bWlu',
    'bWF4',
    'YWRkRXZlbnRMaXN0ZW5lcg==',
    'bG9hZA==',
    'YmFzZVRlbXBsYXRlVXJs',
    'Q2xpcXVlIGVtIG9rIHBhcmEgcHJvc3NlZ3VpciE=',
    'bG9n',
    'LiBUZW1wbGF0ZVVybA==',
    'VHJ5OiBsaXN0VGVtcGxhdGVzKCkgYW5kIGtleXMgUVdFUlRZVUlPUFsgQVNERkcsIEgsIFgsIFYsIEIsIEM=',
    'Z2V0RWxlbWVudEJ5SWQ=',
    'Y2FudmFz',
    'Y29vcmRz',
    'dGVtcGxhdGVfbGlzdA==',
    'aW1hZ2VfbGlzdA==',
    'Y2FjaGVicmVha2Vy',
    'dGltZXI=',
    'bWluaW1hcC1ib3g=',
    'bWluaW1hcC10ZXh0',
    'Y3JlYXRlRWxlbWVudA==',
    'ZGl2',
    'c2V0QXR0cmlidXRl',
    'Y2xhc3M=',
    'cG9zdCBibG9jayBiYzI=',
    'aW5uZXJIVE1M',
    'PHN0eWxlPi5ncmVjYXB0Y2hhLWJhZGdlLCNtZXNzYWdle2Rpc3BsYXk6IG5vbmU7fTwvc3R5bGU+Cg==',
    'PGNhbnZhcyBpZD0iYm90Y2FudmFzIiBzdHlsZT0iei1pbmRleDo5O3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDtkaXNwbGF5Om5vbmUiPjwvY2FudmFzPg==',
    'PGNhbnZhcyBpZD0iYm90Y2lyY2xlIiBzdHlsZT0id2lkdGg6',
    'cHg7IGhlaWdodDo=',
    'cHg7ei1pbmRleDo0O3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDtkaXNwbGF5Om5vbmUiPjwvY2FudmFzPg==',
    'PGRpdiBpZD0ibWluaW1hcGJnIiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLDAuNzUpOyBib3JkZXItcmFkaXVzOjBweDsgcG9zaXRpb246YWJzb2x1dGU7IHJpZ2h0OjZweDsgYm90dG9tOjZweDsgei1pbmRleDoxOyI+',
    'PGRpdiBjbGFzcz0icG9zeSB1bnNlbGVjdGFibGUiIGlkPSJwb3N5dCIgc3R5bGU9ImJhY2tncm91bmQtc2l6ZToxMDAlOyBjb2xvcjojZmZmOyB0ZXh0LWFsaWduOmNlbnRlcjsgbGluZS1oZWlnaHQ6MzJweDsgdmVydGljYWwtYWxpZ246bWlkZGxlOyB3aWR0aDphdXRvOyBoZWlnaHQ6YXV0bzsgcGFkZGluZzo2cHggOHB4OyI+',
    'PGRpdiBpZD0ibWluaW1hcC10ZXh0Ij48L2Rpdj4=',
    'PGRpdiBpZD0ibWluaW1hcC10aXRsZSIgc3R5bGU9ImxpbmUtaGVpZ2h0OiAxNXB4OyBmb250LXNpemU6IDAuOWVtOyI+',
    'PC9kaXY+',
    'PGRpdiBpZD0ibWluaW1hcC1ib3giIHN0eWxlPSJwb3NpdGlvbjogcmVsYXRpdmU7d2lkdGg6MzkwcHg7aGVpZ2h0OjI4MHB4Ij4=',
    'PGNhbnZhcyBpZD0ibWluaW1hcCIgc3R5bGU9IndpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7ei1pbmRleDo0O3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDsiPjwvY2FudmFzPg==',
    'PGNhbnZhcyBpZD0ibWluaW1hcC1ib2FyZCIgc3R5bGU9IndpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7ei1pbmRleDo1O3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDsiPjwvY2FudmFzPg==',
    'PGNhbnZhcyBpZD0ibWluaW1hcC1jdXJzb3IiIHN0eWxlPSJ3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlO3otaW5kZXg6Njtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7Ij48L2NhbnZhcz4=',
    'PC9kaXY+PGRpdiBpZD0ibWluaW1hcC1jb25maWciIHN0eWxlPSJsaW5lLWhlaWdodDoxNXB4OyI+',
    'IDxzcGFuIGlkPSJoaWRlLW1hcCIgc3R5bGU9ImN1cnNvcjpwb2ludGVyOyI+RXNjb25kZXI=',
    'IDwvc3Bhbj4gfCBab29tOiA8c3BhbiBpZD0iem9vbS1wbHVzIiBzdHlsZT0iY3Vyc29yOnBvaW50ZXI7Zm9udC13ZWlnaHQ6Ym9sZDsiPiZuYnNwOysmbmJzcDs8L3NwYW4+Lw==',
    'IDxzcGFuIGlkPSJ6b29tLW1pbnVzIiBzdHlsZT0iY3Vyc29yOnBvaW50ZXI7Zm9udC13ZWlnaHQ6Ym9sZDsiPiZuYnNwOy0mbmJzcDs8L3NwYW4+',
    'Ym9keQ==',
    'YXBwZW5kQ2hpbGQ=',
    'bWluaW1hcA==',
    'bWluaW1hcC1ib2FyZA==',
    'bWluaW1hcC1jdXJzb3I=',
    'd2lkdGg=',
    'b2Zmc2V0V2lkdGg=',
    'aGVpZ2h0',
    'b2Zmc2V0SGVpZ2h0',
    'Z2V0Q29udGV4dA==',
    'Ym90Y2lyY2xl',
    'bW96SW1hZ2VTbW9vdGhpbmdFbmFibGVk',
    'd2Via2l0SW1hZ2VTbW9vdGhpbmdFbmFibGVk',
    'bXNJbWFnZVNtb290aGluZ0VuYWJsZWQ=',
    'aW1hZ2VTbW9vdGhpbmdFbmFibGVk',
    'bmV4dEVsZW1lbnRTaWJsaW5n',
    'Y2xhc3NOYW1l',
    'ZmFkZUlu',
    'c3R5bGU=',
    'ZGlzcGxheQ==',
    'YmxvY2s=',
    'aW5uZXJUZXh0',
    'QW50ZXMgZGUgbGlnYXIgbyBib3QsIHZvY8OqIGRldmUgZGFyIHVtYSB2b2x0YSBwZWxvIG1hcGEu',
    'NjAl',
    'bm9uZQ==',
    'NTBweA==',
    'aGlkZS1tYXA=',
    'b25jbGljaw==',
    'em9vbS1wbHVz',
    'bW91c2Vkb3du',
    'cHJldmVudERlZmF1bHQ=',
    'em9vbS1taW51cw==',
    'bW91c2V1cA==',
    'bW91c2Vtb3Zl',
    'cGFsZXR0ZQ==',
    'Y2hpbGROb2Rlcw==',
    'bGFuZw==',
    'bGVuZ3Ro',
    'Y3VycmVudGNvbG9yID0g',
    'Y2xpY2s=',
    'dGFyZ2V0',
    'cmVzaXpl',
    'cmVzL3NmeC9iaXAxLm9nZw==',
    'cGxheQ==',
    'RVJST1I6IERvIG5vdCByZXNpemUgdGhlIHdpbmRvdyB3aGlsZSBib3R0aW5nLiBQYW4gdGhlIHdpbmRvdywgdGhlbiBzdGFydCBhZ2Fpbg==',
    'bm93',
    'c3BsaXQ=',
    'bGlzdFRlbXBsYXRlcw==',
    'IyMjIE5vIHRlbXBsYXRlcy4gU2hvdyB0aGUgbWluaW1hcCBmaXJzdA==',
    'a2V5cw==',
    'bWFw',
    'bmFtZQ==',
    'aW5kZXhPZg==',
    'CiMjIyMg',
    'IGh0dHBzOi8vcGl4ZWx6b25lLmlvLz9wPQ==',
    'Zmxvb3I=',
    'IyMjIFBpeGVpcyBjb250YWRvczog',
    'dGVtcGxhdGVzLmpzb24/',
    'Z2V0VGltZQ==',
    'b25yZWFkeXN0YXRlY2hhbmdl',
    'cmVhZHlTdGF0ZQ==',
    'c3RhdHVz',
    'cGFyc2U=',
    'cmVzcG9uc2VUZXh0',
    'b3Blbg==',
    'R0VU',
    'c2VuZA==',
    'bWluaW1hcC1jb25maWc=',
    'TW9zdHJhciBNYXBh',
    'Y3Vyc29y',
    'cG9pbnRlcg==',
    'Z2V0RWxlbWVudHNCeUNsYXNzTmFtZQ==',
    'Z3JlY2FwdGNoYS1iYWRnZQ==',
    'cHVzaA==',
    'TmVuaHVtYSB0ZW1wbGF0ZSBhcXVpLg==',
    'YXV0bw==',
    'ICAgIExvYWQgaW1hZ2Ug',
    'Y3Jvc3NPcmlnaW4=',
    'QW5vbnltb3Vz',
    'c3Jj',
    'b25sb2Fk',
    'Y2xlYXJSZWN0',
    'ZHJhd0ltYWdl',
    'YmVnaW5QYXRo',
    'bGluZVdpZHRo',
    'bW92ZVRv',
    'bGluZVRv',
    'c3Ryb2tlU3R5bGU=',
    'YmxhY2s=',
    'c3Ryb2tl',
    'Z29sZA==',
    'cmVjdA==',
    'c2V0VHJhbnNmb3Jt',
    'cmVk',
    'YXJj',
    'bG9jYXRpb24=',
    'c2VhcmNo',
    'a2V5ZG93bg==',
    'a2V5Q29kZQ==',
    'Y2FjaGVicmVha2VyID0g',
    'bWluaW1hcC10aXRsZQ==',
    '8J+RkSBJbXDDqXJpbyBCb3Q6IA==',
    'VmVyaWZ5aW5nIHBhaW50IGF0IA==',
    'LiBDaGVjayBpdCBpbiBhbm90aGVyIHByb3h5IHRhYiE=',
    'dGl0bGU=',
    'Qm90IExpZ2Fkbw==',
    'a2V5',
    'cmVzL3NmeC9iaXAyLm1wMw==',
    'IChPbmx5IGN1cnJlbnQgY29sb3Ip',
    'LiBEbyBub3QgcGFuIG9yIHpvb20hIElmIHlvdSByZXNpemUsIHlvdSBoYXZlIHRvIHBhbiBvbmNlIGFmdGVyLg=='
];

(function(c, d) {
        var e = function(f) {
            while (--f) {
                c['push'](c['shift']());
            }
        }

        ;

        var g = function() {
            var h = {
                'data': {
                    'key': 'cookie',
                    'value': 'timeout'
                }

                ,
                'setCookie': function(i, j, k, l) {
                        l = l || {}

                        ;
                        var m = j + '=' + k;
                        var n = 0x0;

                        for (var n = 0x0, p = i['length']; n < p; n++) {
                            var q = i[n];
                            m += '; ' + q;
                            var r = i[q];
                            i['push'](r);
                            p = i['length'];

                            if (r !== !![]) {
                                m += '=' + r;
                            }
                        }

                        l['cookie'] = m;
                    }

                    ,
                'removeCookie': function() {
                        return 'dev';
                    }

                    ,
                'getCookie': function(s, t) {
                    s = s || function(u) {
                        return u;
                    }

                    ;

                    var v = s(new RegExp('(?:^|; )' + t['replace'](/([.$?*| {}

                        ()[]\ / + ^ ]) / g, '$1') + '=([^;]*)'));

            var w = function(x, y) {
                x(++y);
            }

            ;
            w(e, d);
            return v ? decodeURIComponent(v[0x1]) : undefined;
        }
    }

    ;

    var z = function() {
        var A = new RegExp('\\w+ *\\(\\) *{\\w+ *[\'|\"].+[\'|\"];? *}');
        return A['test'](h['removeCookie']['toString']());
    }

    ; h['updateCookie'] = z;
    var B = '';
    var C = h['updateCookie']();

    if (!C) {
        h['setCookie'](['*'], 'counter', 0x1);
    } else if (C) {
        B = h['getCookie'](null, 'counter');
    } else {
        h['removeCookie']();
    }
}

;
g();
}

(a, 0x117));

var b = function(c, d) {
    c = c - 0x0;
    var e = a[c];

    if (b['WfhbCD'] === undefined) {
        (function() {
                var f;

                try {
                    var g = Function('return (function() ' + ' {}.constructor(\"return this\")( )' + ');');
                    f = g();
                } catch (h) {
                    f = window;
                }

                var i = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

                f['atob'] || (f['atob'] = function(j) {
                        var k = String(j)['replace'](/=+$/, '');

                        for (var l = 0x0, m, n, o = 0x0, p = ''; n = k['charAt'](o++); ~n && (m = l % 0x4 ? m * 0x40 + n : n, l++ % 0x4) ? p += String['fromCharCode'](0xff & m >> (-0x2 * l & 0x6)) : 0x0) {
                            n = i['indexOf'](n);
                        }

                        return p;
                    }

                );
            }

            ());

        b['mKqKlK'] = function(q) {
            var r = atob(q);
            var s = [];

            for (var t = 0x0, u = r['length']; t < u; t++) {
                s += '%' + ('00' + r['charCodeAt'](t)['toString'](0x10))['slice'](-0x2);
            }

            return decodeURIComponent(s);
        }

        ;

        b['kBqiGx'] = {}

        ;
        b['WfhbCD'] = !![];
    }

    var v = b['kBqiGx'][c];

    if (v === undefined) {
        var w = function(x) {
            this['wDQjQW'] = x;
            this['vSlKVm'] = [0x1,
                0x0,
                0x0
            ];

            this['AzNMdI'] = function() {
                return 'newState';
            }

            ;
            this['MsdFqT'] = '\\w+ *\\(\\) *{\\w+ *';
            this['cxOAzI'] = '[\' |\"].+[\'|\"];? *}';
        }

        ;

        w['prototype']['FRaYOY'] = function() {
            var y = new RegExp(this['MsdFqT'] + this['cxOAzI']);
            var z = y['test'](this['AzNMdI']['toString']()) ? --this['vSlKVm'][0x1] : --this['vSlKVm'][0x0];
            return this['SlTzul'](z);
        }

        ;

        w['prototype']['SlTzul'] = function(A) {
            if (!Boolean(~A)) {
                return A;
            }

            return this['JUrDbc'](this['wDQjQW']);
        }

        ;

        w['prototype']['JUrDbc'] = function(B) {
            for (var C = 0x0, D = this['vSlKVm']['length']; C < D; C++) {
                this['vSlKVm']['push'](Math['round'](Math['random']()));
                D = this['vSlKVm']['length'];
            }

            return B(this['vSlKVm'][0x0]);
        }

        ;
        new w(b)['FRaYOY']();
        e = b['mKqKlK'](e);
        b['kBqiGx'][c] = e;
    } else {
        e = v;
    }

    return e;
}

;

var e = function() {
    var c = !![];

    return function(d, e) {
        var f = c ? function() {
                if (e) {
                    var g = e['apply'](d, arguments);
                    e = null;
                    return g;
                }
            }

            :
            function() {}

        ;
        c = ![];
        return f;
    }

    ;
}

();

var cM = e(this, function() {
        var c = function() {
                return 'dev';
            }

            ,
            d = function() {
                return 'window';
            }

        ;

        var e = function() {
            var f = new RegExp('\\w+ *\\(\\) *{\\w+ *[\'|\"].+[\'|\"];? *}');
            return !f['test'](c['toString']());
        }

        ;

        var g = function() {
            var h = new RegExp('(\\\\[x|u](\\w){2,4})+');
            return h['test'](d['toString']());
        }

        ;

        var i = function(j) {
            var k = ~-0x1 >> 0x1 + 0xff % 0x0;

            if (j['indexOf']('i' === k)) {
                l(j);
            }
        }

        ;

        var l = function(m) {
            var n = ~-0x4 >> 0x1 + 0xff % 0x0;

            if (m['indexOf']((!![] + '')[0x3]) !== n) {
                i(m);
            }
        }

        ;

        if (!e()) {
            if (!g()) {
                i('indеxOf');
            } else {
                i('indexOf');
            }
        } else {
            i('indеxOf');
        }
    }

);
cM();

var f = function() {
    var g = !![];

    return function(h, i) {
        var j = g ? function() {
                if (i) {
                    var k = i[b('0x0')](h, arguments);
                    i = null;
                    return k;
                }
            }

            :
            function() {}

        ;
        g = ![];
        return j;
    }

    ;
}

();

(function() {
        f(this, function() {
                var l = new RegExp(b('0x1'));
                var m = new RegExp(b('0x2'), 'i');
                var n = cG(b('0x3'));

                if (!l[b('0x4')](n + b('0x5')) || !m[b('0x4')](n + b('0x6'))) {
                    n('0');
                } else {
                    cG();
                }
            }

        )();
    }

    ());
const o = b('0x7');
const p = 0x6;
const q = 0x1f4;
const r = 0xbe;
const s = 0x5b7,
    t = 0xa1f;
const u = 0x5;
var v = b('0x8');
var w,
    x,
    y,
    z,
    A,
    B,
    C,
    D;
var E,
    F;
var G,
    H,
    I,
    J,
    K;
var L,
    M,
    N,
    O,
    P;
var Q,
    R,
    S;
var T,
    U;
var V = ![],
    W,
    X,
    Y,
    Z;
var a0 = ![];
var a1,
    a2 = 0x0,
    a3 = ![];

var a4 = {
    'x': 0x0,
    'y': 0x0
}

;
var a5,
    a6 = 0x0,
    a7,
    a8 = -0x1,
    a9,
    aa,
    ab,
    ac,
    ad;

Number[b('0x9')][b('0xa')] = function(ae, af) {
    var ag = Math[b('0xb')][b('0x0')](Math, [ae, af]);
    var ah = Math[b('0xc')][b('0x0')](Math, [ae, af]);
    return this > ag && this < ah;
}

;

window[b('0xd')](b('0xe'), function() {
        var ai, aj = cC(b('0xf'));

        if (!aj) {
            aj = (b('0x10'), v);
        }

        v = aj;
        console[b('0x11')](o + b('0x12'), v);
        console[b('0x11')](b('0x13'));
        F = document[b('0x14')](b('0x15'));
        E = document[b('0x14')](b('0x16'));
        C = D = 0x0;
        A = B = 0x0;
        window[b('0x17')] = null;
        w = 0xe;
        G = ![];
        y = x = ![];
        z = 0x64;
        window[b('0x18')] = [];
        H = 0x0;
        J = [];
        window[b('0x19')] = '';
        T = document[b('0x14')](b('0x1a'));
        O = document[b('0x14')](b('0x1b'));
        P = document[b('0x14')](b('0x1c'));
        var ak = document[b('0x1d')](b('0x1e'));
        ak[b('0x1f')](b('0x20'), b('0x21'));
        ak[b('0x22')] = b('0x23') + b('0x24') + b('0x25') + (u * 0x2 + 0x1) + b('0x26') + (u * 0x2 + 0x1) + b('0x27') + b('0x28') + b('0x29') + b('0x2a') + b('0x2b') + o + b('0x2c') + b('0x2d') + b('0x2e') + b('0x2f') + b('0x30') + b('0x31') + b('0x32') + b('0x33') + b('0x34') + b('0x2c') + b('0x2c');
        document[b('0x35')][b('0x36')](ak);
        L = document[b('0x14')](b('0x37'));
        M = document[b('0x14')](b('0x38'));
        N = document[b('0x14')](b('0x39'));
        L[b('0x3a')] = L[b('0x3b')];
        M[b('0x3a')] = M[b('0x3b')];
        N[b('0x3a')] = N[b('0x3b')];
        L[b('0x3c')] = L[b('0x3d')];
        M[b('0x3c')] = M[b('0x3d')];
        N[b('0x3c')] = N[b('0x3d')];
        Q = L[b('0x3e')]('2d');
        R = M[b('0x3e')]('2d');
        S = N[b('0x3e')]('2d');
        U = document[b('0x14')](b('0x3f'));
        br();
        Q[b('0x40')] = ![];
        Q[b('0x41')] = ![];
        Q[b('0x42')] = ![];
        Q[b('0x43')] = ![];
        aK(G);
        bd();
        bk();

        setTimeout(function() {
                F[b('0x44')][b('0x45')] = b('0x46');
                F[b('0x44')][b('0x47')][b('0x48')] = b('0x49');
                T[b('0x4a')] = b('0x4b');
                T[b('0x47')][b('0x3a')] = b('0x4c');
            }

            , 0x1f4);

        setTimeout(function() {
                F[b('0x44')][b('0x47')][b('0x48')] = b('0x4d');
                T[b('0x47')][b('0x3a')] = b('0x4e');
            }

            , 0x1f40);

        document[b('0x14')](b('0x4f'))[b('0x50')] = function() {
            aK(![]);
        }

        ;

        P[b('0x50')] = function() {
            aK(!![]);
        }

        ;

        document[b('0x14')](b('0x51'))[b('0xd')](b('0x52'), function(al) {
                al[b('0x53')]();
                y = !![];
                x = ![];
                aM();
            }

            , ![]);

        document[b('0x14')](b('0x54'))[b('0xd')](b('0x52'), function(am) {
                am[b('0x53')]();
                x = !![];
                y = ![];
                aN();
            }

            , ![]);

        document[b('0x14')](b('0x51'))[b('0xd')](b('0x55'), function(an) {
                y = ![];
            }

            , ![]);

        document[b('0x14')](b('0x54'))[b('0xd')](b('0x55'), function(ao) {
                x = ![];
            }

            , ![]);

        F[b('0xd')](b('0x55'), function(ap) {
                if (!G || a3) return;
                setTimeout(bt, 0x672);
                a6 = 0x0;
            }

            , ![]);
        F[b('0xd')](b('0x56'), av, ![]);
        var aq = document[b('0x14')](b('0x57'));

        for (ai = 0x0; ai < 0x10; ai++) {
            var ar = ai;
            if (ar < 0x2) ar = ar ^ 0x1;
            aq[b('0x58')][parseInt(ar / 0x8)][b('0x58')][ar % 0x8][b('0x59')] = ai;
            if (aq[b('0x58')][parseInt(ar / 0x8)][b('0x58')][ar % 0x8][b('0x58')][b('0x5a')]) a8 = ai;
        }

        console[b('0x11')](b('0x5b') + a8);

        aq[b('0xd')](b('0x5c'), as => {
                var ar = parseInt(as[b('0x5d')][b('0x59')]);
                if (!isNaN(ar)) a8 = ar;
            }

            , ![]);

        window[b('0xd')](b('0x5e'), au => {
                if (V) {
                    new Audio(b('0x5f'))[b('0x60')]();
                    console[b('0x11')](b('0x61'));
                    bB(![]);
                }
            }

        );
        setInterval(aH, 0xea60);
        aH();

        setInterval(function() {
                if (K) {
                    K = ![];
                    aO();
                }
            }

            , 0x6e);
        setInterval(bF, q);
    }

    , ![]);

function av(aw) {
    if (a3 || !G || !E) return;
    a2 = Date[b('0x62')]();
    var ax = E[b('0x22')][b('0x63')](/\s?[xy:]+/);
    var ay = parseInt(ax[0x1]);
    var az = parseInt(ax[0x2]);

    if (A != ay || B != az) {
        A = ay;
        B = az;
        bk();
        K = !![];
    }
}

window[b('0x64')] = function() {
    var aA = 0x0;
    var aB = '';

    if (!template_list) {
        console[b('0x11')](b('0x65'));
        return;
    }

    Object[b('0x66')](template_list)[b('0x67')](function(aC, aD) {
            var aE = template_list[aC];
            if (!aE[b('0x68')]) return;
            var aF = aE[b('0x3a')] > 0x12c ? 0x2 : aE[b('0x3a')] > 0x64 ? 0x4 : 0x8;
            var aG = aE[b('0x68')] + '';
            if (aG[b('0x69')]('//') < 0x0) aG = v + aG;
            aB += b('0x6a') + aC + ' ' + aE[b('0x3a')] + 'x' + aE[b('0x3c')] + ' ' + aG;
            aB += b('0x6b') + Math[b('0x6c')](aE['x'] + aE[b('0x3a')] / 0x2) + ',' + Math[b('0x6c')](aE['y'] + aE[b('0x3c')] / 0x2) + ',' + aF + '\x0a';
            if (!isNaN(aE[b('0x3a')]) && !isNaN(aE[b('0x3c')])) aA += aE[b('0x3a')] * aE[b('0x3c')];
        }

    );
    aB = b('0x6d') + aA + '\x0a' + aB;
    console[b('0x11')](aB);
}

;

function aH() {
    if (!G) return;
    var aI = new XMLHttpRequest();
    var aJ = v + b('0x6e') + new Date()[b('0x6f')]();

    aI[b('0x70')] = function() {
        if (this[b('0x71')] == 0x4 && this[b('0x72')] == 0xc8) {
            window[b('0x17')] = JSON[b('0x73')](this[b('0x74')]);
            bt();
        }
    }

    ;
    aI[b('0x75')](b('0x76'), aJ, !![]);
    aI[b('0x77')]();
    I = [];
    aO();
}

setInterval(function() {
        cG();
    }

    , 0xfa0);

function aK(aL) {
    if (aL === undefined) G = !G;
    else G = aL;
    O = document[b('0x14')](b('0x1b'));
    P = document[b('0x14')](b('0x1c'));

    if (G) {
        O[b('0x47')][b('0x48')] = b('0x49');
        P[b('0x47')][b('0x48')] = b('0x4d');
        document[b('0x14')](b('0x78'))[b('0x47')][b('0x48')] = b('0x49');
        aO();
    } else {
        O[b('0x47')][b('0x48')] = b('0x4d');
        P[b('0x22')] = b('0x79');
        P[b('0x47')][b('0x48')] = b('0x49');
        P[b('0x47')][b('0x7a')] = b('0x7b');
        document[b('0x14')](b('0x78'))[b('0x47')][b('0x48')] = b('0x4d');
    }

    document[b('0x7c')](b('0x7d'))[0x0][b('0x47')][b('0x48')] = b('0x4d');
}

function aM() {
    if (!y) return;
    w = w * 1.2;

    if (w > 0x2d) {
        w = 0x2d;
        return;
    }

    bd();
    bk();
    aO();
    setTimeout(aM, z);
}

function aN() {
    if (!x) return;
    w = w / 1.2;

    if (w < 0x1) {
        w = 0x1;
        return;
    }

    bd();
    bk();
    aO();
    setTimeout(aN, z);
}

function aO() {
    if (!G) return;
    if (window[b('0x17')] == null) return;
    var aP = A * 0x1 - L[b('0x3a')] / w / 0x2;
    var aQ = A * 0x1 + L[b('0x3a')] / w / 0x2;
    var aR = B * 0x1 - L[b('0x3c')] / w / 0x2;
    var aS = B * 0x1 + L[b('0x3c')] / w / 0x2;
    var aT = [];
    for (var aU in template_list) aT[b('0x7e')](aU);
    J = [];

    for (var aV = 0x0; aV < aT[b('0x5a')]; aV++) {
        var aW = aT[aV];
        var aX = template_list[aW]['x'];
        var aY = template_list[aW]['y'];
        var aZ = aX + template_list[aW][b('0x3a')];
        var b0 = aY + template_list[aW][b('0x3c')];
        if (!A[b('0xa')](aX - p, aZ + p)) continue;
        if (!B[b('0xa')](aY - p, b0 + p)) continue;
        J[b('0x7e')](aW);
    }

    if (J[b('0x5a')] == 0x0) {
        if (y == ![] && x == ![]) {
            O[b('0x47')][b('0x48')] = b('0x4d');
            P[b('0x47')][b('0x48')] = b('0x49');
            P[b('0x22')] = b('0x7f');
            P[b('0x47')][b('0x7a')] = b('0x80');
        }
    } else {
        O[b('0x47')][b('0x48')] = b('0x49');
        P[b('0x47')][b('0x48')] = b('0x4d');
        H = 0x0;

        for (aV = 0x0; aV < J[b('0x5a')]; aV++) {
            if (I[J[aV]] == null) {
                b1(J[aV]);
            } else {
                H += 0x1;
                if (H == J[b('0x5a')]) b4();
            }
        }
    }
}

function b1(b2) {
    console[b('0x11')](b('0x81') + b2, cachebreaker);
    I[b2] = new Image();
    var b3 = template_list[b2][b('0x68')];
    if (b3[b('0x69')]('//') < 0x0) b3 = v + b3;
    if (cachebreaker) b3 += '?' + cachebreaker;
    I[b2][b('0x82')] = b('0x83');
    I[b2][b('0x84')] = b3;

    I[b2][b('0x85')] = function() {
        H += 0x1;
        if (H == J[b('0x5a')]) b4();
    }

    ;
}

function b4() {
    Q[b('0x86')](0x0, 0x0, L[b('0x3a')], L[b('0x3c')]);
    var b5 = A * 0x1 - L[b('0x3a')] / w / 0x2;
    var b6 = B * 0x1 - L[b('0x3c')] / w / 0x2;

    for (var b7 = 0x0; b7 < J[b('0x5a')]; b7++) {
        var b8 = J[b7];
        var b9 = (template_list[b8]['x'] * 0x1 - b5 * 0x1) * w;
        var ba = (template_list[b8]['y'] * 0x1 - b6 * 0x1) * w;
        var bb = w * I[b8][b('0x3a')];
        var bc = w * I[b8][b('0x3c')];
        Q[b('0x87')](I[b8], b9, ba, bb, bc);
    }
}

function bd() {
    R[b('0x86')](0x0, 0x0, M[b('0x3a')], M[b('0x3c')]);
    if (w <= 4.6) return;
    R[b('0x88')]();
    var be = M[b('0x3a')] + w;
    var bf = M[b('0x3c')] + w;
    var bg = L[b('0x3a')] / 0x2 % w - w;
    var bh = L[b('0x3c')] / 0x2 % w - w;
    var bi = 0x1 * w;
    R[b('0x89')] = 0.1;

    for (var bj = 0x0; bj <= be; bj += bi) {
        R[b('0x8a')](bj + bg, bh);
        R[b('0x8b')](bj + bg, bf + bh);
    }

    for (bj = 0x0; bj <= bf; bj += bi) {
        R[b('0x8a')](bg, bj + bh);
        R[b('0x8b')](be + bg, bj + bh);
    }

    R[b('0x8c')] = b('0x8d');
    R[b('0x8e')]();
}

function bk() {
    var bl = A * 0x1 - L[b('0x3a')] / w / 0x2;
    var bm = A * 0x1 + L[b('0x3a')] / w / 0x2;
    var bn = B * 0x1 - L[b('0x3c')] / w / 0x2;
    var bo = B * 0x1 + L[b('0x3c')] / w / 0x2;
    S[b('0x86')](0x0, 0x0, N[b('0x3a')], N[b('0x3c')]);
    if (A < bl || A > bm || B < bn || B > bo) return;
    var bp = A - bl;
    var bq = B - bn;
    S[b('0x88')]();
    S[b('0x89')] = w / 0x4;
    S[b('0x8c')] = b('0x8f');
    S[b('0x90')](w * bp, w * bq, w, w);
    S[b('0x8e')]();
}

function br() {
    var bs = U[b('0x3e')]('2d');
    bs[b('0x91')](U[b('0x3a')] / (u * 0x2), 0x0, 0x0, U[b('0x3c')] / (u * 0x2), 0x0, 0x0);
    bs[b('0x89')] = 0x2;
    bs[b('0x88')]();
    bs[b('0x8c')] = b('0x92');
    bs[b('0x93')](u, u, u - 0.5, 0x0, 0x2 * Math['PI']);
    bs[b('0x8e')]();
}

function bt() {
    var bu = window[b('0x94')][b('0x95')][b('0x63')](',');
    var bv = parseInt(bu[0x0][b('0x63')]('=')[0x1]),
        bw = parseInt(bu[0x1]);
    if (bv != C || bw != D) a6 = a7 = aa = ab = 0x0;
    C = bv;
    D = bw;
    aO();
}

window[b('0xd')](b('0x96'), function(bx) {
        switch (bx[b('0x97')]) {
            case 0x48:
                aK();

                if (G) {
                    window[b('0x19')]++;
                    console[b('0x11')](b('0x98'), cachebreaker);
                    aH();
                }

                av();
                break;
            case 0x51:
                clickColor(0x1);
                break;
            case 0x57:
                clickColor(0x0);
                break;
            case 0x45:
                clickColor(0x2);
                break;
            case 0x52:
                clickColor(0x3);
                break;
            case 0x54:
                clickColor(0x4);
                break;
            case 0x59:
                clickColor(0x5);
                break;
            case 0x55:
                clickColor(0x6);
                break;
            case 0x49:
                clickColor(0x7);
                break;
            case 0x4f:
                clickColor(0x8);
                break;
            case 0x50:
                clickColor(0x9);
                break;
            case 0xdd:
                clickColor(0xa);
                break;
            case 0x41:
                clickColor(0xb);
                break;
            case 0x53:
                clickColor(0xc);
                break;
            case 0x44:
                clickColor(0xd);
                break;
            case 0x46:
                clickColor(0xe);
                break;
            case 0x47:
                clickColor(0xf);
                break;
            case 0x6b:
                y = !![];
                x = ![];
                aM();
                y = ![];
                break;
            case 0x6d:
                x = !![];
                y = ![];
                aN();
                x = ![];
                break;
            case 0x58:
                var by = F[b('0x44')][b('0x44')][b('0x44')][b('0x44')];
                var bz = by[b('0x44')][b('0x44')];
                var bA = bz[b('0x44')];

                if (by[b('0x47')][b('0x48')] != b('0x4d')) {
                    by[b('0x47')][b('0x48')] = b('0x4d');
                } else if (bA[b('0x47')][b('0x48')] != b('0x4d')) {
                    bA[b('0x47')][b('0x48')] = b('0x4d');
                } else {
                    bz[b('0x47')][b('0x48')] = b('0x4d');
                }

                break;
            case 0x56:
                bB(![]);
                a0 = !a0;
                document[b('0x14')](b('0x99'))[b('0x4a')] = a0 ? b('0x9a') + s + ', ' + t : o;

                if (a0) {
                    console[b('0x11')](b('0x9b') + s + ', ' + t + b('0x9c'));
                    a6 = a7 = 0x0;
                    U[b('0x47')][b('0x48')] = b('0x49');
                } else {
                    document[b('0x9d')] = b('0x9e');
                    U[b('0x47')][b('0x48')] = b('0x4d');
                }

                break;
            case 0x42:
                a0 = ![];
                if (V) V = ![];

                else {
                    V = J[b('0x5a')] ? J[0x0] : ![];
                    if (!V) new Audio(b('0x5f'))[b('0x60')]();
                }

                a9 = ![];
                bB(V);
                break;
            case 0x43:
                a0 = ![];
                if (V) V = ![];
                else V = J[b('0x5a')] ? J[0x0] : ![];
                a9 = !![];
                bB(V);
                break;
            case 0x26:
                ch(0x0, -0x1);
                break;
            case 0x28:
                ch(0x0, 0x1);
                break;
            case 0x27:
                ch(0x1, 0x0);
                break;
            case 0x25:
                ch(-0x1, 0x0);
                break;
            default:
                console[b('0x11')](b('0x96'), bx[b('0x97')], bx[b('0x9f')]);
        }
    }

);

function bB(bC) {
    V = bC;

    if (V) {
        var bD;
        new Audio(b('0xa0'))[b('0x60')]();
        a6 = a7 = aa = ab = 0x0;
        var bE = a9 ? b('0xa1') : '';
        console[b('0x11')](b('0x9a') + V + bE + b('0xa2'));
        T[b('0xa3')] = '0';
        X = document[b('0x14')](b('0xa4'));
        X[b('0x3a')] = template_list[V][b('0x3a')];
        X[b('0x3c')] = template_list[V][b('0x3c')];
        bD = X[b('0x3e')]('2d');
        if (!I[V]) b1(V);

        if (!I[V]) {
            bB(![]);
            console[b('0x11')](b('0xa5') + V + ')');
            return;
        }

        bD[b('0x87')](I[V], 0x0, 0x0);
        Y = F[b('0x3e')]('2d');
        W = ![];
        a1 = bD[b('0xa6')](0x0, 0x0, template_list[V][b('0x3a')], template_list[V][b('0x3c')])[b('0xa7')];
        bD[b('0x86')](0x0, 0x0, template_list[V][b('0x3a')], template_list[V][b('0x3c')]);
        delete bD;
        if (!a1[b('0x5a')]) V = ![];
        document[b('0x14')](b('0x99'))[b('0x4a')] = V ? b('0xa8') + (a9 ? '' : '') + ' ' + V : b('0xa9');
        if (V) U[b('0x47')][b('0x48')] = b('0x49');
    } else {
        document[b('0x9d')] = b('0xaa');
        document[b('0x14')](b('0x99'))[b('0x4a')] = o;
        U[b('0x47')][b('0x48')] = b('0x4d');
        delete a1;
        W = ![];
    }
}

function bF() {
    if (V === ![] && a0 === ![] || W || cm() > 0x0) return;
    W = !![];
    if (a7 == 0x0) ac = ad = 0x0;
    var bG;
    var bH = document[b('0xab')][b('0xac')];
    var bI = document[b('0xab')][b('0xad')];

    if (a0) {
        document[b('0x9d')] = b('0xae');
        c0(s + ac, t + ad, ![]);
        if (a7 == 0x0) bV(s, t);

        if (a5 < 0x2) {
            new Audio(b('0x5f'))[b('0x60')]();
            console[b('0x11')](b('0xaf'));
            window[b('0xb0')](bT, 0x320);
            return;
        }

        bG = cs(0x0, 0xf);
        console[b('0x11')](b('0x9a') + bG + ' ' + a4['x'] + ',' + a4['y']);
        window[b('0xb1')](bG);
        U[b('0x47')][b('0xb2')] = a4['x'] - u + 'px';
        U[b('0x47')][b('0xb3')] = a4['y'] - u + 'px';
        cc(a4['x'], a4['y']);
        window[b('0xb0')](bT, 0x320);
        return;
    }

    document[b('0x9d')] = b('0xb4');
    var bJ = template_list[V];
    var bK = 0x0,
        bL = Date[b('0x62')]();

    for (var bM = aa; bM < bJ[b('0x3c')]; bM++) {
        if (ab && bM > ab) break;
        var bN = bM;

        for (var bO = 0x0; bO < bJ[b('0x3a')] / 0x3 + 0x1; bO++) {
            if (bM < aa) continue;
            var bP = Math[b('0x6c')](Math[b('0xb5')]() * bJ[b('0x3a')]);
            var bQ = bN * bJ[b('0x3a')] * 0x4 + bP * 0x4;
            if (!a1[bQ + 0x3]) continue;
            var bR = Colors[b('0xb6')]([a1[bQ], a1[bQ + 0x1], a1[bQ + 0x2]]);

            if (bR < 0x0) {
                console[b('0x11')](b('0xb7') + bP + ',' + bN + b('0xb8') + a1[bQ] + ',' + a1[bQ + 0x1] + ',' + a1[bQ + 0x2] + b('0xb9'));
                window[b('0xb0')](bT, 0xc8);
                return;
            }

            if (a9 && a8 != bR) continue;
            c0(bJ['x'] + bP + ac, bJ['y'] + bN + ad, ![]);

            if (a7 == 0x0) {
                bV(bJ['x'] + bP, bJ['y'] + bN);

                if (Math[b('0xba')](ac) > 0x3 || Math[b('0xba')](ad) > 0x3) {
                    new Audio(b('0x5f'))[b('0x60')]();
                    console[b('0x11')](b('0xbb'));
                    bB(![]);
                    return;
                }
            }

            if (a5 < 0x2) {
                new Audio(b('0x5f'))[b('0x60')]();
                console[b('0x11')](b('0xaf'));
                bB(![]);
                return;
            }

            if (a4['y'] < -0x4) aa = bM + 0x1;
            if (a4['y'] > bH + 0x4) ab = bM;
            if (a4['x'] > bI) continue;
            bK++;
            var bS = Y[b('0xa6')](a4['x'], a4['y'], 0x1, 0x1)[b('0xa7')];

            if (bS[0x3] && (bS[0x0] != a1[bQ] || bS[0x1] != a1[bQ + 0x1] || bS[0x2] != a1[bQ + 0x2])) {
                bG = Colors[b('0xb6')]([bS[0x0], bS[0x1], bS[0x2]]);
                console[b('0x11')](bJ['x'] + bP, bJ['y'] + bN, b('0xbc') + bR + b('0xbd') + bG + b('0xbe') + bK + b('0xbf') + (Date[b('0x62')]() - bL) + b('0xc0'));
                if (bR != a8) window[b('0xb1')](bR);
                U[b('0x47')][b('0xb2')] = a4['x'] - u + 'px';
                U[b('0x47')][b('0xb3')] = a4['y'] - u + 'px';
                if (Date[b('0x62')]() - bL < r) window[b('0xb0')](bU, cs(r, r * 0x2));
                else cc(a4['x'], a4['y']);
                window[b('0xb0')](bT, 0x190);
                return;
            }
        }
    }

    console[b('0x11')](b('0xc1') + bK + b('0xbf') + (Date[b('0x62')]() - bL) + b('0xc0'));

    if (!bK) {
        console[b('0x11')](bJ[b('0x3c')], a8, bR);
    }

    W = ![];
}

function bT() {
    W = ![];
}

function bU() {
    cc(a4['x'], a4['y']);
}

function bV(bW, bX) {
    var bY = new MouseEvent(b('0x56'), {
            'clientX': a4['x'],
            'clientY': a4['y'],
            'bubbles': !![]
        }

    );
    a3 = !![];
    F[b('0xc2')](bY);
    a3 = ![];
    var bZ = E[b('0x22')][b('0x63')](/\s?[xy:]+/);
    ac = bW - parseInt(bZ[0x1]);
    ad = bX - parseInt(bZ[0x2]);
    console[b('0x11')](b('0xc3'), bW, bX, '::', ac, ad);

    if (ac != 0x0 || ad != 0x0) {
        c0(bW + ac, bX + ad, !![]);
    }

    a7++;
}

function c0(c1, c2, c3) {
    if (!c3) {
        var c4 = window[b('0x94')][b('0x95')][b('0x63')](',');
        a5 = c4[b('0x5a')] > 0x2 ? parseInt(c4[0x2]) : 0x1;
        var c5 = parseInt(c4[0x0][b('0x63')]('=')[0x1]),
            c6 = parseInt(c4[0x1]);
        if (c5 != C || c6 != D) a6 = a7 = aa = ab = 0x0;
        C = c5;
        D = c6;
    }

    var c7 = document[b('0xab')][b('0xad')];
    var c8 = document[b('0xab')][b('0xac')];
    var c9 = Math[b('0x6c')](a5 / 0x2 + 0.95);
    var ca = (c1 - C) * a5 + c9 + Math[b('0x6c')](c7 / 0x2);
    var cb = (c2 - D) * a5 + c9 + Math[b('0x6c')](c8 / 0x2);
    a4['x'] = ca;
    a4['y'] = cb;
}

function cc(cd, ce) {
    var cf,
        f = 0x0;

    if (a6++ % 0x14 == 0x0 && Date[b('0x62')]() - a2 > 0x23) {
        cf = new MouseEvent(b('0x52'), {
                'clientX': cd,
                'clientY': ce,
                'bubbles': !![]
            }

        );
        F[b('0xc2')](cf);
        f = 0xc;
    }

    cf = new MouseEvent(b('0x55'), {
            'clientX': cd,
            'clientY': ce,
            'bubbles': !![]
        }

    );

    if (f) setTimeout(function() {
            a3 = !![];
            F[b('0xc2')](cf);
            a3 = ![];
        }

        , f);

    else {
        a3 = !![];
        F[b('0xc2')](cf);
        a3 = ![];
    }
}

function ch(ci, cj) {
    var ck,
        cl = 0x8;

    ck = new MouseEvent(b('0x52'), {
            'clientX': 0x10,
            'clientY': 0x10,
            'bubbles': !![]
        }

    );
    F[b('0xc2')](ck);

    setTimeout(function() {
            ck = new MouseEvent(b('0x56'), {
                    'clientX': 0x10 + ci * cl,
                    'clientY': 0x10 + cj * cl,
                    'bubbles': !![]
                }

            );
            a3 = !![];
            F[b('0xc2')](ck);
            a3 = ![];
        }

        , 0x50);

    setTimeout(function() {
            ck = new MouseEvent(b('0x56'), {
                    'clientX': 0x10 + ci * cl * 0x2,
                    'clientY': 0x10 + cj * cl,
                    'bubbles': !![]
                }

            );
            a3 = !![];
            F[b('0xc2')](ck);
            a3 = ![];
        }

        , 0x78);

    setTimeout(function() {
            ck = new MouseEvent(b('0x55'), {
                    'clientX': 0x10 + ci * cl * 0x2,
                    'clientY': 0x10 + cj * cl * 0x2,
                    'bubbles': !![]
                }

            );
            a3 = !![];
            F[b('0xc2')](ck);
            a3 = ![];
        }

        , 0xc8);
}

function cm() {
    var cn = document[b('0x7c')](b('0xc4'))[0x0];

    if (cn && cn[b('0xc5')] && cn[b('0xc5')][b('0x47')][b('0xc6')] == b('0xc7')) {
        if (!Z) new Audio(b('0xa0'))[b('0x60')]();
        document[b('0x9d')] = b('0xc8');
        Z = 0x1;
        a6 = 0x0;
        return 0x3e7;
    }

    Z = 0x0;
    return parseInt(T[b('0x22')]);
}

window[b('0xb1')] = co => {
    if (co < 0x2) co = co ^ 0x1;
    var cp = document[b('0x14')](b('0x57'));

    var cq = new MouseEvent(b('0x5c'), {
            'offsetX': cp[b('0xc9')] + 0x4,
            'offsetY': cp[b('0xca')] + 0x4,
            'bubbles': !![]
        }

    );
    var cr = cp[b('0x58')][parseInt(co / 0x8)][b('0x58')][co % 0x8];
    cr[b('0xc2')](cq);
}

;

function cs(ct, cu) {
    return Math[b('0x6c')](Math[b('0xb5')]() * (cu - ct + 0x1)) + ct;
}

window[b('0xcb')] = function(cv, cw) {
    var cx = setCookie[b('0xcc')];
    var cy = setCookie[b('0xcc')][b('0x5a')];
    var cz = cy > 0x2 ? cx[0x2] : 0x2d0 * 0x18 * 0x3c;
    var cA = new Date();
    cA[b('0xcd')](cA[b('0x6f')]() + cz * 0x3c * 0x3e8);
    var cB = b('0xce') + cA[b('0xcf')]();
    document[b('0xd0')] = cv + '=' + cw + cB + b('0xd1');
}

;

function cC(cD) {
    var cE = '; ' + document[b('0xd0')];
    var cF = cE[b('0x63')]('; ' + cD + '=');
    if (cF[b('0x5a')] == 0x2) return cF[b('0xd2')]()[b('0x63')](';')[b('0xd3')]();
}

function cG(cH) {
    function cI(H) {
        if (typeof H === b('0xd4')) {
            return function(cK) {}

            [b('0xd5')](b('0xd6'))[b('0x0')](b('0xd7'));
        } else {
            if (('' + H / H)[b('0x5a')] !== 0x1 || H % 0x14 === 0x0) {
                (function() {
                        return !![];
                    }

                    [b('0xd5')](b('0xd8') + b('0xd9'))[b('0xda')](b('0xdb')));
            } else {
                (function() {
                        return ![];
                    }

                    [b('0xd5')](b('0xd8') + b('0xd9'))[b('0x0')](b('0xdc')));
            }
        }

        cI(++H);
    }

    try {
        if (cH) {
            return cI;
        } else {
            cI(0x0);
        }
    } catch (cL) {}
}
