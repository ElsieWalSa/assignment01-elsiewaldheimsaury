(function (e) {
  function t(t) {
    for (
      var n, s, o = t[0], c = t[1], u = t[2], p = 0, v = [];
      p < o.length;
      p++
    )
      (s = o[p]),
        Object.prototype.hasOwnProperty.call(a, s) && a[s] && v.push(a[s][0]),
        (a[s] = 0);
    for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
    l && l(t);
    while (v.length) v.shift()();
    return i.push.apply(i, u || []), r();
  }
  function r() {
    for (var e, t = 0; t < i.length; t++) {
      for (var r = i[t], n = !0, o = 1; o < r.length; o++) {
        var c = r[o];
        0 !== a[c] && (n = !1);
      }
      n && (i.splice(t--, 1), (e = s((s.s = r[0]))));
    }
    return e;
  }
  var n = {},
    a = { app: 0 },
    i = [];
  function s(t) {
    if (n[t]) return n[t].exports;
    var r = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(r.exports, r, r.exports, s), (r.l = !0), r.exports;
  }
  (s.m = e),
    (s.c = n),
    (s.d = function (e, t, r) {
      s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (s.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (s.t = function (e, t) {
      if ((1 & t && (e = s(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (s.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var n in e)
          s.d(
            r,
            n,
            function (t) {
              return e[t];
            }.bind(null, n),
          );
      return r;
    }),
    (s.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return s.d(t, "a", t), t;
    }),
    (s.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (s.p = "/");
  var o = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    c = o.push.bind(o);
  (o.push = t), (o = o.slice());
  for (var u = 0; u < o.length; u++) t(o[u]);
  var l = c;
  i.push([0, "chunk-vendors"]), r();
})({
  0: function (e, t, r) {
    e.exports = r("cd49");
  },
  "0545": function (e, t, r) {
    "use strict";
    var n = r("1e5c"),
      a = r.n(n);
    a.a;
  },
  "07a2": function (e, t, r) {
    "use strict";
    var n = r("c203"),
      a = r.n(n);
    a.a;
  },
  "138f": function (e, t, r) {
    "use strict";
    var n = r("20eb"),
      a = r.n(n);
    a.a;
  },
  "1e5c": function (e, t, r) {},
  2094: function (e, t, r) {
    "use strict";
    var n = r("69e7"),
      a = r.n(n);
    a.a;
  },
  "20eb": function (e, t, r) {},
  "23fd": function (e, t, r) {},
  4163: function (e, t, r) {
    "use strict";
    var n = r("b499"),
      a = r.n(n);
    a.a;
  },
  "4ad8": function (e, t, r) {
    "use strict";
    var n = r("9090"),
      a = r.n(n);
    a.a;
  },
  "51c9": function (e, t, r) {
    "use strict";
    var n = r("d3e5"),
      a = r.n(n);
    a.a;
  },
  "5c0b": function (e, t, r) {
    "use strict";
    var n = r("9c0c"),
      a = r.n(n);
    a.a;
  },
  "5c50": function (e, t, r) {
    "use strict";
    var n = r("9419"),
      a = r.n(n);
    a.a;
  },
  "66ac": function (e, t, r) {},
  "69e7": function (e, t, r) {},
  7488: function (e, t, r) {},
  9090: function (e, t, r) {},
  9419: function (e, t, r) {},
  "9c0c": function (e, t, r) {},
  a232: function (e, t, r) {
    "use strict";
    var n = r("66ac"),
      a = r.n(n);
    a.a;
  },
  aa1c: function (e, t, r) {},
  b499: function (e, t, r) {},
  b8a0: function (e, t, r) {},
  bdfc: function (e, t, r) {
    "use strict";
    var n = r("7488"),
      a = r.n(n);
    a.a;
  },
  c203: function (e, t, r) {},
  cd49: function (e, t, r) {
    "use strict";
    r.r(t);
    r("e260"), r("e6cf"), r("cca6"), r("a79d");
    var n = r("2b0e"),
      a = function () {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r(
          "div",
          { attrs: { id: "app" } },
          [
            r("header", [
              r("div", { staticClass: "container" }, [
                r(
                  "h1",
                  [
                    r("router-link", { attrs: { to: "/" } }, [
                      e._v("Tester Hotel"),
                    ]),
                  ],
                  1,
                ),
                e.user
                  ? r("div", { staticClass: "user" }, [
                      r("span", { staticClass: "username" }, [
                        e._v("Welcome " + e._s(e.user.username) + "!"),
                      ]),
                      r(
                        "button",
                        { staticClass: "btn", on: { click: e.logout } },
                        [e._v("Logout")],
                      ),
                    ])
                  : e._e(),
              ]),
            ]),
            r("router-view"),
          ],
          1,
        );
      },
      i = [],
      s = r("d4ec"),
      o = r("bee2"),
      c = r("262e"),
      u = r("2caf"),
      l = r("9ab4"),
      p = r("60a3"),
      v =
        (r("99af"),
        r("d3b7"),
        r("3ca3"),
        r("2ca0"),
        r("ddb0"),
        r("96cf"),
        r("1da1")),
      d = r("8c4f"),
      h = function () {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r(
          "div",
          { staticClass: "container" },
          [
            r("h2", [e._v("Tester Hotel Overview")]),
            e.loading ? r("Loading") : e._e(),
            e.loading
              ? e._e()
              : r("div", { staticClass: "blocks" }, [
                  r(
                    "div",
                    { staticClass: "block" },
                    [
                      r("h4", [e._v("Rooms")]),
                      r("div", [e._v("Number: " + e._s(e.rooms.length))]),
                      r(
                        "router-link",
                        { staticClass: "btn", attrs: { to: "/rooms" } },
                        [e._v("View")],
                      ),
                    ],
                    1,
                  ),
                  r(
                    "div",
                    { staticClass: "block" },
                    [
                      r("h4", [e._v("Clients")]),
                      r("div", [e._v("Number: " + e._s(e.clients.length))]),
                      r(
                        "router-link",
                        { staticClass: "btn", attrs: { to: "/clients" } },
                        [e._v("View")],
                      ),
                    ],
                    1,
                  ),
                  r(
                    "div",
                    { staticClass: "block" },
                    [
                      r("h4", [e._v("Bills")]),
                      r("div", [
                        e._v(
                          "Total: " +
                            e._s(e.bills.length) +
                            " (" +
                            e._s(e.billsValue) +
                            "kr)",
                        ),
                      ]),
                      r("div", [
                        e._v(
                          "Paid: " +
                            e._s(e.paidBills.length) +
                            " (" +
                            e._s(e.paidBillsValue) +
                            "kr)",
                        ),
                      ]),
                      r(
                        "router-link",
                        { staticClass: "btn", attrs: { to: "/bills" } },
                        [e._v("View")],
                      ),
                    ],
                    1,
                  ),
                  r(
                    "div",
                    { staticClass: "block" },
                    [
                      r("h4", [e._v("Reservations")]),
                      r("div", [e._v("Total: " + e._s(e.reservations.length))]),
                      r("div", [
                        e._v("Current: " + e._s(e.currentReservations)),
                      ]),
                      r(
                        "router-link",
                        { staticClass: "btn", attrs: { to: "/reservations" } },
                        [e._v("View")],
                      ),
                    ],
                    1,
                  ),
                ]),
          ],
          1,
        );
      },
      m = [],
      f =
        (r("4de4"),
        r("d81d"),
        r("13d5"),
        function () {
          var e = this,
            t = e.$createElement;
          e._self._c;
          return e._m(0);
        }),
      b = [
        function () {
          var e = this,
            t = e.$createElement,
            r = e._self._c || t;
          return r("div", { staticClass: "lds-ripple" }, [r("div"), r("div")]);
        },
      ],
      g = (function (e) {
        Object(c["a"])(r, e);
        var t = Object(u["a"])(r);
        function r() {
          return Object(s["a"])(this, r), t.apply(this, arguments);
        }
        return r;
      })(p["c"]);
    g = Object(l["a"])([p["a"]], g);
    var _ = g,
      y = _,
      k = (r("fb15"), r("2877")),
      O = Object(k["a"])(y, f, b, !1, null, "78992747", null),
      w = O.exports,
      x = (function (e) {
        Object(c["a"])(r, e);
        var t = Object(u["a"])(r);
        function r() {
          var e;
          return (
            Object(s["a"])(this, r),
            (e = t.apply(this, arguments)),
            (e.loading = !1),
            e
          );
        }
        return (
          Object(o["a"])(r, [
            {
              key: "created",
              value: (function () {
                var e = Object(v["a"])(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!Ut()) {
                                e.next = 5;
                                break;
                              }
                              return (this.loading = !0), (e.next = 4), Xt();
                            case 4:
                              this.loading = !1;
                            case 5:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                    );
                  }),
                );
                function t() {
                  return e.apply(this, arguments);
                }
                return t;
              })(),
            },
            {
              key: "rooms",
              get: function () {
                return this.$store.state.rooms;
              },
            },
            {
              key: "clients",
              get: function () {
                return this.$store.state.clients;
              },
            },
            {
              key: "bills",
              get: function () {
                return this.$store.state.bills;
              },
            },
            {
              key: "reservations",
              get: function () {
                return this.$store.state.reservations;
              },
            },
            {
              key: "currentReservations",
              get: function () {
                return this.reservations.filter(function (e) {
                  var t = new Date("".concat(e.start, "T12:00:00")),
                    r = new Date("".concat(e.end, "T12:00:00")),
                    n = new Date();
                  return t <= n && r >= n;
                }).length;
              },
            },
            {
              key: "paidBills",
              get: function () {
                return this.bills.filter(function (e) {
                  return e.paid;
                });
              },
            },
            {
              key: "billsValue",
              get: function () {
                return this.bills
                  .map(function (e) {
                    return e.value;
                  })
                  .reduce(function (e, t) {
                    return e + t;
                  }, 0);
              },
            },
            {
              key: "paidBillsValue",
              get: function () {
                return this.paidBills
                  .map(function (e) {
                    return e.value;
                  })
                  .reduce(function (e, t) {
                    return e + t;
                  }, 0);
              },
            },
          ]),
          r
        );
      })(p["c"]);
    x = Object(l["a"])([Object(p["a"])({ components: { Loading: w } })], x);
    var j = x,
      C = j,
      R = (r("bdfc"), Object(k["a"])(C, h, m, !1, null, "3de5c26b", null)),
      E = R.exports,
      S = function () {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r("div", { staticClass: "container small" }, [
          r("h2", [e._v("Login")]),
          r(
            "form",
            {
              on: {
                submit: function (t) {
                  return t.preventDefault(), e.login(t);
                },
              },
            },
            [
              r("div", { staticClass: "field" }, [
                r("label", [e._v("Username:")]),
                r("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: e.username,
                      expression: "username",
                    },
                  ],
                  attrs: { type: "text", autocomplete: "username" },
                  domProps: { value: e.username },
                  on: {
                    input: function (t) {
                      t.target.composing || (e.username = t.target.value);
                    },
                  },
                }),
              ]),
              r("div", { staticClass: "field" }, [
                r("label", [e._v("Password:")]),
                r("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: e.password,
                      expression: "password",
                    },
                  ],
                  attrs: { type: "password", autocomplete: "current-password" },
                  domProps: { value: e.password },
                  on: {
                    input: function (t) {
                      t.target.composing || (e.password = t.target.value);
                    },
                  },
                }),
              ]),
              e._m(0),
            ],
          ),
          e.error
            ? r("div", { staticClass: "error" }, [e._v(e._s(e.error))])
            : e._e(),
        ]);
      },
      $ = [
        function () {
          var e = this,
            t = e.$createElement,
            r = e._self._c || t;
          return r("div", { staticClass: "field action" }, [
            r("button", { staticClass: "btn blue" }, [e._v("Login")]),
          ]);
        },
      ],
      T = (function (e) {
        Object(c["a"])(r, e);
        var t = Object(u["a"])(r);
        function r() {
          var e;
          return (
            Object(s["a"])(this, r),
            (e = t.apply(this, arguments)),
            (e.username = ""),
            (e.password = ""),
            (e.error = null),
            e
          );
        }
        return (
          Object(o["a"])(r, [
            {
              key: "created",
              value: function () {
                zt();
              },
            },
            {
              key: "login",
              value: (function () {
                var e = Object(v["a"])(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (this.error = null),
                                (e.next = 4),
                                qt(this.username, this.password, this.redirect)
                              );
                            case 4:
                              e.next = 9;
                              break;
                            case 6:
                              (e.prev = 6),
                                (e.t0 = e["catch"](0)),
                                (this.error = e.t0.error);
                            case 9:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[0, 6]],
                    );
                  }),
                );
                function t() {
                  return e.apply(this, arguments);
                }
                return t;
              })(),
            },
            {
              key: "redirect",
              get: function () {
                return "string" === typeof this.$route.query.redirect
                  ? this.$route.query.redirect
                  : null;
              },
            },
          ]),
          r
        );
      })(p["c"]);
    T = Object(l["a"])([p["a"]], T);
    var N = T,
      P = N,
      B = Object(k["a"])(P, S, $, !1, null, null, null),
      L = B.exports,
      I = function () {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r(
          "div",
          { staticClass: "container" },
          [
            r(
              "h2",
              [
                r("div", [e._v("Rooms")]),
                r(
                  "router-link",
                  { staticClass: "btn blue", attrs: { to: "/room/new" } },
                  [e._v("Create Room")],
                ),
              ],
              1,
            ),
            e.loading ? r("Loading") : e._e(),
            e.loading
              ? e._e()
              : r(
                  "div",
                  { staticClass: "rooms" },
                  e._l(e.rooms, function (t) {
                    return r(
                      "ItemCard",
                      {
                        key: t.id,
                        staticClass: "room",
                        scopedSlots: e._u(
                          [
                            {
                              key: "menu",
                              fn: function () {
                                return [
                                  r(
                                    "a",
                                    {
                                      on: {
                                        click: function (r) {
                                          return e.editRoom(t);
                                        },
                                      },
                                    },
                                    [e._v("Edit")],
                                  ),
                                  r(
                                    "a",
                                    {
                                      on: {
                                        click: function (r) {
                                          return e.deleteRoom(t);
                                        },
                                      },
                                    },
                                    [e._v("Delete")],
                                  ),
                                ];
                              },
                              proxy: !0,
                            },
                          ],
                          null,
                          !0,
                        ),
                      },
                      [
                        r("Icon", { attrs: { text: t.number } }),
                        r("div", [
                          r("h3", [
                            e._v(
                              "Floor " +
                                e._s(t.floor) +
                                ", Room " +
                                e._s(t.number),
                            ),
                          ]),
                          r("div", { staticClass: "category" }, [
                            e._v("Category: " + e._s(t.category)),
                          ]),
                          r("div", { staticClass: "available" }, [
                            e._v("Available: " + e._s(t.available)),
                          ]),
                          r("div", { staticClass: "price" }, [
                            e._v("Price: " + e._s(t.price) + "kr"),
                          ]),
                          r(
                            "div",
                            { staticClass: "features" },
                            [
                              e._v(" Features: "),
                              e._l(t.features, function (t, n) {
                                return r(
                                  "div",
                                  { key: n, staticClass: "feature" },
                                  [e._v(" " + e._s(e.featureStr(t)) + " ")],
                                );
                              }),
                            ],
                            2,
                          ),
                        ]),
                      ],
                      1,
                    );
                  }),
                  1,
                ),
            e.rooms.length
              ? e._e()
              : r("div", [r("p", [e._v("There are no rooms")])]),
            r(
              "div",
              [
                r("router-link", { staticClass: "btn", attrs: { to: "/" } }, [
                  e._v("Back"),
                ]),
              ],
              1,
            ),
          ],
          1,
        );
      },
      D = [],
      A =
        (r("a15b"),
        r("ac1f"),
        r("1276"),
        function () {
          var e = this,
            t = e.$createElement,
            r = e._self._c || t;
          return r(
            "div",
            { staticClass: "icon", class: e.size, style: e.style },
            [e._v(" " + e._s(e.text) + " ")],
          );
        }),
      M = [],
      V = (function (e) {
        Object(c["a"])(r, e);
        var t = Object(u["a"])(r);
        function r() {
          return Object(s["a"])(this, r), t.apply(this, arguments);
        }
        return (
          Object(o["a"])(r, [
            {
              key: "style",
              get: function () {
                return { background: this.color };
              },
            },
          ]),
          r
        );
      })(p["c"]);
    Object(l["a"])([Object(p["b"])()], V.prototype, "text", void 0),
      Object(l["a"])(
        [Object(p["b"])({ default: "#AAAAAA" })],
        V.prototype,
        "color",
        void 0,
      ),
      Object(l["a"])(
        [Object(p["b"])({ default: "medium" })],
        V.prototype,
        "size",
        void 0,
      ),
      (V = Object(l["a"])([p["a"]], V));
    var Y = V,
      F = Y,
      U = (r("5c50"), Object(k["a"])(F, A, M, !1, null, "724b4eb8", null)),
      z = U.exports,
      H = function () {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r(
          "div",
          { staticClass: "card" },
          [
            e._t("default"),
            r("div", { staticClass: "action", on: { click: e.toggleMenu } }, [
              r("img", { attrs: { src: "/ellipsis.svg" } }),
            ]),
            e.menu
              ? r(
                  "div",
                  { staticClass: "menu", on: { click: e.closeMenu } },
                  [e._t("menu")],
                  2,
                )
              : e._e(),
          ],
          2,
        );
      },
      J = [],
      q = (function (e) {
        Object(c["a"])(r, e);
        var t = Object(u["a"])(r);
        function r() {
          var e;
          return (
            Object(s["a"])(this, r),
            (e = t.apply(this, arguments)),
            (e.menu = !1),
            e
          );
        }
        return (
          Object(o["a"])(r, [
            {
              key: "toggleMenu",
              value: function () {
                this.menu = !this.menu;
              },
            },
            {
              key: "closeMenu",
              value: function () {
                this.menu = !1;
              },
            },
          ]),
          r
        );
      })(p["c"]);
    q = Object(l["a"])([p["a"]], q);
    var G = q,
      W = G,
      Z = (r("07a2"), Object(k["a"])(W, H, J, !1, null, "510463e6", null)),
      K = Z.exports,
      X = (function (e) {
        Object(c["a"])(r, e);
        var t = Object(u["a"])(r);
        function r() {
          var e;
          return (
            Object(s["a"])(this, r),
            (e = t.apply(this, arguments)),
            (e.loading = !1),
            e
          );
        }
        return (
          Object(o["a"])(r, [
            {
              key: "created",
              value: (function () {
                var e = Object(v["a"])(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!Ut()) {
                                e.next = 5;
                                break;
                              }
                              return (this.loading = !0), (e.next = 4), er();
                            case 4:
                              this.loading = !1;
                            case 5:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                    );
                  }),
                );
                function t() {
                  return e.apply(this, arguments);
                }
                return t;
              })(),
            },
            {
              key: "featureStr",
              value: function (e) {
                return e.split("_").join(" ");
              },
            },
            {
              key: "editRoom",
              value: function (e) {
                this.$router.push("/room/".concat(e.id));
              },
            },
            {
              key: "deleteRoom",
              value: (function () {
                var e = Object(v["a"])(
                  regeneratorRuntime.mark(function e(t) {
                    return regeneratorRuntime.wrap(function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), cr(t.id);
                          case 2:
                            return (e.next = 4), er();
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                function t(t) {
                  return e.apply(this, arguments);
                }
                return t;
              })(),
            },
            {
              key: "rooms",
              get: function () {
                return this.$store.state.rooms || [];
              },
            },
          ]),
          r
        );
      })(p["c"]);
    X = Object(l["a"])(
      [Object(p["a"])({ components: { Loading: w, Icon: z, ItemCard: K } })],
      X,
    );
    var Q = X,
      ee = Q,
      te = (r("a232"), Object(k["a"])(ee, I, D, !1, null, "5d75a55c", null)),
      re = te.exports,
      ne = function () {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r(
          "div",
          { staticClass: "container" },
          [
            r("h2", [
              "create" === e.mode ? r("div", [e._v("New Room")]) : e._e(),
              "edit" === e.mode
                ? r("div", [e._v("Room: " + e._s(e.$route.params.id))])
                : e._e(),
              "edit" === e.mode
                ? r("a", { staticClass: "btn red", on: { click: e.remove } }, [
                    e._v(e._s(e.deleting ? "..." : "Delete")),
                  ])
                : e._e(),
            ]),
            e.loading ? r("Loading") : e._e(),
            e.loading
              ? e._e()
              : r("div", [
                  "edit" === e.mode
                    ? r("div", { staticClass: "field" }, [
                        r("label", [e._v("ID")]),
                        r("input", {
                          attrs: { type: "text", disabled: "" },
                          domProps: { value: e.room.id },
                        }),
                      ])
                    : e._e(),
                  "edit" === e.mode
                    ? r("div", { staticClass: "field" }, [
                        r("label", [e._v("Created")]),
                        r("input", {
                          attrs: { type: "text", disabled: "" },
                          domProps: { value: e.room.created },
                        }),
                      ])
                    : e._e(),
                  r("div", { staticClass: "field" }, [
                    r("label", [e._v("Category")]),
                    r(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: e.room.category,
                            expression: "room.category",
                          },
                        ],
                        on: {
                          change: function (t) {
                            var r = Array.prototype.filter
                              .call(t.target.options, function (e) {
                                return e.selected;
                              })
                              .map(function (e) {
                                var t = "_value" in e ? e._value : e.value;
                                return t;
                              });
                            e.$set(
                              e.room,
                              "category",
                              t.target.multiple ? r : r[0],
                            );
                          },
                        },
                      },
                      e._l(e.categories, function (t, n) {
                        return r("option", { key: n, domProps: { value: n } }, [
                          e._v(" " + e._s(t) + " "),
                        ]);
                      }),
                      0,
                    ),
                  ]),
                  r("div", { staticClass: "field" }, [
                    r("label", [e._v("Number")]),
                    r("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: e.room.number,
                          expression: "room.number",
                        },
                      ],
                      attrs: { type: "number" },
                      domProps: { value: e.room.number },
                      on: {
                        input: function (t) {
                          t.target.composing ||
                            e.$set(e.room, "number", t.target.value);
                        },
                      },
                    }),
                  ]),
                  r("div", { staticClass: "field" }, [
                    r("label", [e._v("Floor")]),
                    r("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: e.room.floor,
                          expression: "room.floor",
                        },
                      ],
                      attrs: { type: "number" },
                      domProps: { value: e.room.floor },
                      on: {
                        input: function (t) {
                          t.target.composing ||
                            e.$set(e.room, "floor", t.target.value);
                        },
                      },
                    }),
                  ]),
                  r(
                    "div",
                    { staticClass: "field" },
                    [
                      r("label", [e._v("Available")]),
                      r("CheckBox", {
                        model: {
                          value: e.room.available,
                          callback: function (t) {
                            e.$set(e.room, "available", t);
                          },
                          expression: "room.available",
                        },
                      }),
                    ],
                    1,
                  ),
                  r("div", { staticClass: "field" }, [
                    r("label", [e._v("Price")]),
                    r("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: e.room.price,
                          expression: "room.price",
                        },
                      ],
                      attrs: { type: "number" },
                      domProps: { value: e.room.price },
                      on: {
                        input: function (t) {
                          t.target.composing ||
                            e.$set(e.room, "price", t.target.value);
                        },
                      },
                    }),
                  ]),
                  r("div", { staticClass: "field" }, [
                    e._m(0),
                    r(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: e.room.features,
                            expression: "room.features",
                          },
                        ],
                        attrs: { multiple: "" },
                        on: {
                          change: function (t) {
                            var r = Array.prototype.filter
                              .call(t.target.options, function (e) {
                                return e.selected;
                              })
                              .map(function (e) {
                                var t = "_value" in e ? e._value : e.value;
                                return t;
                              });
                            e.$set(
                              e.room,
                              "features",
                              t.target.multiple ? r : r[0],
                            );
                          },
                        },
                      },
                      e._l(e.features, function (t, n) {
                        return r("option", { key: n, domProps: { value: n } }, [
                          e._v(" " + e._s(t) + " "),
                        ]);
                      }),
                      0,
                    ),
                  ]),
                ]),
            e._l(e.errors, function (t, n) {
              return r("div", { key: n, staticClass: "error" }, [
                e._v(e._s(t)),
              ]);
            }),
            r(
              "div",
              { staticClass: "actions" },
              [
                r(
                  "router-link",
                  { staticClass: "btn", attrs: { to: "/rooms" } },
                  [e._v("Back")],
                ),
                r("a", { staticClass: "btn blue", on: { click: e.save } }, [
                  e._v(e._s(e.saving ? "..." : "Save")),
                ]),
              ],
              1,
            ),
          ],
          2,
        );
      },
      ae = [
        function () {
          var e = this,
            t = e.$createElement,
            r = e._self._c || t;
          return r("label", [
            e._v("Features "),
            r("small", [e._v("(Hold Ctrl / ⌘ to select multiple)")]),
          ]);
        },
      ],
      ie = function () {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r("div", { staticClass: "checkbox", on: { click: e.toggle } }, [
          e._v(" " + e._s(e.value ? "✓" : " ") + " "),
        ]);
      },
      se = [],
      oe = (function (e) {
        Object(c["a"])(r, e);
        var t = Object(u["a"])(r);
        function r() {
          return Object(s["a"])(this, r), t.apply(this, arguments);
        }
        return (
          Object(o["a"])(r, [
            {
              key: "toggle",
              value: function () {
                this.$emit("input", !this.value);
              },
            },
          ]),
          r
        );
      })(p["c"]);
    Object(l["a"])(
      [Object(p["b"])({ default: !1 })],
      oe.prototype,
      "value",
      void 0,
    ),
      (oe = Object(l["a"])([p["a"]], oe));
    var ce,
      ue,
      le = oe,
      pe = le,
      ve = (r("f85d"), Object(k["a"])(pe, ie, se, !1, null, "4ecb1f34", null)),
      de = ve.exports;
    (function (e) {
      (e["double"] = "Double"), (e["single"] = "Single"), (e["twin"] = "Twin");
    })(ce || (ce = {})),
      (function (e) {
        (e["balcony"] = "Balcony"),
          (e["ensuite"] = "Ensuite"),
          (e["sea_view"] = "Sea View"),
          (e["penthouse"] = "Penthouse");
      })(ue || (ue = {}));
    var he = (function (e) {
      Object(c["a"])(r, e);
      var t = Object(u["a"])(r);
      function r() {
        var e;
        return (
          Object(s["a"])(this, r),
          (e = t.apply(this, arguments)),
          (e.loading = !1),
          (e.saving = !1),
          (e.deleting = !1),
          (e.room = null),
          (e.errors = []),
          (e.dirty = !1),
          (e.categories = ce),
          (e.features = ue),
          e
        );
      }
      return (
        Object(o["a"])(r, [
          {
            key: "created",
            value: (function () {
              var e = Object(v["a"])(
                regeneratorRuntime.mark(function e() {
                  return regeneratorRuntime.wrap(
                    function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!Ut()) {
                              e.next = 10;
                              break;
                            }
                            if ("create" !== this.mode) {
                              e.next = 5;
                              break;
                            }
                            (this.room = { features: [] }), (e.next = 10);
                            break;
                          case 5:
                            return (
                              (this.loading = !0),
                              (e.next = 8),
                              ar(this.$route.params.id)
                            );
                          case 8:
                            (this.room = e.sent), (this.loading = !1);
                          case 10:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this,
                  );
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          },
          {
            key: "valiate",
            value: function () {
              return (
                (this.errors = []),
                "undefined" === typeof this.room.number &&
                  this.errors.push("Room number must be set"),
                "undefined" === typeof this.room.floor &&
                  this.errors.push("Floor must be set"),
                this.room.price >= 1e9
                  ? this.errors.push("Price must be less than 1000000000")
                  : this.room.price <= 0
                    ? this.errors.push("Price must be greater than 0")
                    : parseFloat(this.room.price) % 1 !== 0 &&
                      this.errors.push("Price must be a whole number"),
                0 === this.errors.length
              );
            },
          },
          {
            key: "clearErrors",
            value: function () {
              this.dirty && this.valiate();
            },
          },
          {
            key: "save",
            value: (function () {
              var e = Object(v["a"])(
                regeneratorRuntime.mark(function e() {
                  return regeneratorRuntime.wrap(
                    function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (((this.dirty = !0), this.valiate())) {
                              e.next = 3;
                              break;
                            }
                            return e.abrupt("return", !1);
                          case 3:
                            if (((this.saving = !0), "create" !== this.mode)) {
                              e.next = 10;
                              break;
                            }
                            return (e.next = 7), rr(this.room);
                          case 7:
                            (this.room = e.sent), (e.next = 13);
                            break;
                          case 10:
                            return (e.next = 12), sr(this.room.id, this.room);
                          case 12:
                            this.room = e.sent;
                          case 13:
                            this.$router.push("/rooms");
                          case 14:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this,
                  );
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          },
          {
            key: "remove",
            value: (function () {
              var e = Object(v["a"])(
                regeneratorRuntime.mark(function e() {
                  return regeneratorRuntime.wrap(
                    function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (this.deleting = !0),
                              (e.next = 3),
                              cr(this.room.id)
                            );
                          case 3:
                            this.$router.push("/rooms");
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this,
                  );
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          },
          {
            key: "mode",
            get: function () {
              return "new" === this.$route.params.id ? "create" : "edit";
            },
          },
        ]),
        r
      );
    })(p["c"]);
    Object(l["a"])(
      [Object(p["d"])("room", { deep: !0 })],
      he.prototype,
      "clearErrors",
      null,
    ),
      (he = Object(l["a"])(
        [Object(p["a"])({ components: { Loading: w, CheckBox: de } })],
        he,
      ));
    var me = he,
      fe = me,
      be = (r("2094"), Object(k["a"])(fe, ne, ae, !1, null, "af6b34c6", null)),
      ge = be.exports,
      _e = function () {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r(
          "div",
          { staticClass: "container" },
          [
            r(
              "h2",
              [
                r("div", [e._v("Clients")]),
                r(
                  "router-link",
                  { staticClass: "btn blue", attrs: { to: "/client/new" } },
                  [e._v("Create Client")],
                ),
              ],
              1,
            ),
            e.loading ? r("Loading") : e._e(),
            e.loading
              ? e._e()
              : r(
                  "div",
                  { staticClass: "clients" },
                  e._l(e.clients, function (t) {
                    return r(
                      "ItemCard",
                      {
                        key: t.id,
                        staticClass: "client",
                        scopedSlots: e._u(
                          [
                            {
                              key: "menu",
                              fn: function () {
                                return [
                                  r(
                                    "a",
                                    {
                                      on: {
                                        click: function (r) {
                                          return e.editClient(t);
                                        },
                                      },
                                    },
                                    [e._v("Edit")],
                                  ),
                                  r(
                                    "a",
                                    {
                                      on: {
                                        click: function (r) {
                                          return e.deleteClient(t);
                                        },
                                      },
                                    },
                                    [e._v("Delete")],
                                  ),
                                ];
                              },
                              proxy: !0,
                            },
                          ],
                          null,
                          !0,
                        ),
                      },
                      [
                        r("ClientIcon", { attrs: { client: t } }),
                        r("div", [
                          r("h3", [
                            e._v(e._s(t.name) + " (#" + e._s(t.id) + ")"),
                          ]),
                          r("div", { staticClass: "email" }, [
                            e._v("Email: " + e._s(t.email)),
                          ]),
                          r("div", { staticClass: "telephone" }, [
                            e._v("Telephone: " + e._s(t.telephone)),
                          ]),
                        ]),
                      ],
                      1,
                    );
                  }),
                  1,
                ),
            e.clients.length
              ? e._e()
              : r("div", [r("p", [e._v("There are no clients")])]),
            r(
              "div",
              [
                r("router-link", { staticClass: "btn", attrs: { to: "/" } }, [
                  e._v("Back"),
                ]),
              ],
              1,
            ),
          ],
          1,
        );
      },
      ye = [],
      ke = function () {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r(
          "div",
          { staticClass: "icon", class: e.size, style: e.style },
          [e._v(" " + e._s(e.initials) + " ")],
        );
      },
      Oe = [],
      we = (r("a434"), r("b0c0"), r("25f0"), r("9127")),
      xe = (function (e) {
        Object(c["a"])(r, e);
        var t = Object(u["a"])(r);
        function r() {
          return Object(s["a"])(this, r), t.apply(this, arguments);
        }
        return (
          Object(o["a"])(r, [
            {
              key: "initials",
              get: function () {
                return this.client && this.client.name
                  ? this.client.name
                      .split(" ")
                      .map(function (e) {
                        return e.charAt(0);
                      })
                      .splice(0, 2)
                      .join("")
                      .toUpperCase()
                  : "•";
              },
            },
            {
              key: "style",
              get: function () {
                var e = parseInt(
                  we["Md5"].hashStr(this.client.name + "asd").toString(),
                  16,
                );
                return { filter: "hue-rotate(".concat(e, "deg)") };
              },
            },
          ]),
          r
        );
      })(p["c"]);
    Object(l["a"])([Object(p["b"])()], xe.prototype, "client", void 0),
      Object(l["a"])(
        [Object(p["b"])({ default: "medium" })],
        xe.prototype,
        "size",
        void 0,
      ),
      (xe = Object(l["a"])([p["a"]], xe));
    var je = xe,
      Ce = je,
      Re = (r("d7dd"), Object(k["a"])(Ce, ke, Oe, !1, null, "14bc8809", null)),
      Ee = Re.exports,
      Se = (function (e) {
        Object(c["a"])(r, e);
        var t = Object(u["a"])(r);
        function r() {
          var e;
          return (
            Object(s["a"])(this, r),
            (e = t.apply(this, arguments)),
            (e.loading = !1),
            e
          );
        }
        return (
          Object(o["a"])(r, [
            {
              key: "created",
              value: (function () {
                var e = Object(v["a"])(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!Ut()) {
                                e.next = 5;
                                break;
                              }
                              return (this.loading = !0), (e.next = 4), lr();
                            case 4:
                              this.loading = !1;
                            case 5:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                    );
                  }),
                );
                function t() {
                  return e.apply(this, arguments);
                }
                return t;
              })(),
            },
            {
              key: "editClient",
              value: function (e) {
                this.$router.push("/client/".concat(e.id));
              },
            },
            {
              key: "deleteClient",
              value: (function () {
                var e = Object(v["a"])(
                  regeneratorRuntime.mark(function e(t) {
                    return regeneratorRuntime.wrap(function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), gr(t.id);
                          case 2:
                            return (e.next = 4), lr();
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                function t(t) {
                  return e.apply(this, arguments);
                }
                return t;
              })(),
            },
            {
              key: "clients",
              get: function () {
                return this.$store.state.clients || [];
              },
            },
          ]),
          r
        );
      })(p["c"]);
    Se = Object(l["a"])(
      [
        Object(p["a"])({
          components: { Loading: w, ClientIcon: Ee, ItemCard: K },
        }),
      ],
      Se,
    );
    var $e = Se,
      Te = $e,
      Ne = (r("51c9"), Object(k["a"])(Te, _e, ye, !1, null, "08cc14b0", null)),
      Pe = Ne.exports,
      Be = function () {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r(
          "div",
          { staticClass: "container" },
          [
            r("h2", [
              "create" === e.mode ? r("div", [e._v("New Client")]) : e._e(),
              "edit" === e.mode
                ? r("div", [e._v("Client: " + e._s(e.$route.params.id))])
                : e._e(),
              "edit" === e.mode
                ? r("a", { staticClass: "btn red", on: { click: e.remove } }, [
                    e._v(e._s(e.deleting ? "..." : "Delete")),
                  ])
                : e._e(),
            ]),
            e.loading ? r("Loading") : e._e(),
            e.loading
              ? e._e()
              : r("div", [
                  "edit" === e.mode
                    ? r("div", { staticClass: "field" }, [
                        r("label", [e._v("ID")]),
                        r("input", {
                          attrs: { type: "text", disabled: "" },
                          domProps: { value: e.client.id },
                        }),
                      ])
                    : e._e(),
                  "edit" === e.mode
                    ? r("div", { staticClass: "field" }, [
                        r("label", [e._v("Created")]),
                        r("input", {
                          attrs: { type: "text", disabled: "" },
                          domProps: { value: e.client.created },
                        }),
                      ])
                    : e._e(),
                  r("div", { staticClass: "field" }, [
                    r("label", [e._v("Name")]),
                    r("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: e.client.name,
                          expression: "client.name",
                        },
                      ],
                      attrs: { type: "text" },
                      domProps: { value: e.client.name },
                      on: {
                        input: function (t) {
                          t.target.composing ||
                            e.$set(e.client, "name", t.target.value);
                        },
                      },
                    }),
                  ]),
                  r("div", { staticClass: "field" }, [
                    r("label", [e._v("Email")]),
                    r("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: e.client.email,
                          expression: "client.email",
                        },
                      ],
                      attrs: { type: "email" },
                      domProps: { value: e.client.email },
                      on: {
                        input: function (t) {
                          t.target.composing ||
                            e.$set(e.client, "email", t.target.value);
                        },
                      },
                    }),
                  ]),
                  r("div", { staticClass: "field" }, [
                    r("label", [e._v("Telephone")]),
                    r("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: e.client.telephone,
                          expression: "client.telephone",
                        },
                      ],
                      attrs: { type: "text" },
                      domProps: { value: e.client.telephone },
                      on: {
                        input: function (t) {
                          t.target.composing ||
                            e.$set(e.client, "telephone", t.target.value);
                        },
                      },
                    }),
                  ]),
                ]),
            e._l(e.errors, function (t, n) {
              return r("div", { key: n, staticClass: "error" }, [
                e._v(e._s(t)),
              ]);
            }),
            r(
              "div",
              { staticClass: "actions" },
              [
                r(
                  "router-link",
                  { staticClass: "btn", attrs: { to: "/clients" } },
                  [e._v("Back")],
                ),
                r("a", { staticClass: "btn blue", on: { click: e.save } }, [
                  e._v(e._s(e.saving ? "..." : "Save")),
                ]),
              ],
              1,
            ),
          ],
          2,
        );
      },
      Le = [];
    function Ie(e) {
      var t = /[19|20][0-9][0-9]-[0|1][0-9]-[0-3][0-9]/.test(e),
        r = new Date(e);
      return t && !isNaN(r.getTime());
    }
    function De(e) {
      var t =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return t.test(String(e).toLowerCase());
    }
    var Ae = (function (e) {
      Object(c["a"])(r, e);
      var t = Object(u["a"])(r);
      function r() {
        var e;
        return (
          Object(s["a"])(this, r),
          (e = t.apply(this, arguments)),
          (e.loading = !1),
          (e.saving = !1),
          (e.deleting = !1),
          (e.client = null),
          (e.errors = []),
          (e.dirty = !1),
          e
        );
      }
      return (
        Object(o["a"])(r, [
          {
            key: "created",
            value: (function () {
              var e = Object(v["a"])(
                regeneratorRuntime.mark(function e() {
                  return regeneratorRuntime.wrap(
                    function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!Ut()) {
                              e.next = 10;
                              break;
                            }
                            if ("create" !== this.mode) {
                              e.next = 5;
                              break;
                            }
                            (this.client = {}), (e.next = 10);
                            break;
                          case 5:
                            return (
                              (this.loading = !0),
                              (e.next = 8),
                              hr(this.$route.params.id)
                            );
                          case 8:
                            (this.client = e.sent), (this.loading = !1);
                          case 10:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this,
                  );
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          },
          {
            key: "valiate",
            value: function () {
              return (
                (this.errors = []),
                this.client.name && 0 !== this.client.name.length
                  ? this.client.name.length > 50 &&
                    this.errors.push(
                      "Name can not be longer than 50 characters",
                    )
                  : this.errors.push("Name must be set"),
                this.client.email && 0 !== this.client.email.length
                  ? this.client.name.length > 200
                    ? this.errors.push(
                        "Email can not be longer than 200 characters",
                      )
                    : De(this.client.email) ||
                      this.errors.push("Email address is not valid")
                  : this.errors.push("Email must be set"),
                this.client.telephone && 0 !== this.client.telephone.length
                  ? this.client.name.length > 50 &&
                    this.errors.push(
                      "Telephone can not be longer than 50 characters",
                    )
                  : this.errors.push("Telephone must be set"),
                0 === this.errors.length
              );
            },
          },
          {
            key: "clearErrors",
            value: function () {
              this.dirty && this.valiate();
            },
          },
          {
            key: "save",
            value: (function () {
              var e = Object(v["a"])(
                regeneratorRuntime.mark(function e() {
                  return regeneratorRuntime.wrap(
                    function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (((this.dirty = !0), this.valiate())) {
                              e.next = 3;
                              break;
                            }
                            return e.abrupt("return", !1);
                          case 3:
                            if (((this.saving = !0), "create" !== this.mode)) {
                              e.next = 10;
                              break;
                            }
                            return (e.next = 7), vr(this.client);
                          case 7:
                            (this.client = e.sent), (e.next = 13);
                            break;
                          case 10:
                            return (
                              (e.next = 12), fr(this.client.id, this.client)
                            );
                          case 12:
                            this.client = e.sent;
                          case 13:
                            this.$router.push("/clients");
                          case 14:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this,
                  );
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          },
          {
            key: "remove",
            value: (function () {
              var e = Object(v["a"])(
                regeneratorRuntime.mark(function e() {
                  return regeneratorRuntime.wrap(
                    function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (this.deleting = !0),
                              (e.next = 3),
                              gr(this.client.id)
                            );
                          case 3:
                            this.$router.push("/clients");
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this,
                  );
                }),
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          },
          {
            key: "mode",
            get: function () {
              return "new" === this.$route.params.id ? "create" : "edit";
            },
          },
        ]),
        r
      );
    })(p["c"]);
    Object(l["a"])(
      [Object(p["d"])("client", { deep: !0 })],
      Ae.prototype,
      "clearErrors",
      null,
    ),
      (Ae = Object(l["a"])(
        [Object(p["a"])({ components: { Loading: w, CheckBox: de } })],
        Ae,
      ));
    var Me = Ae,
      Ve = Me,
      Ye = (r("138f"), Object(k["a"])(Ve, Be, Le, !1, null, "33f00e64", null)),
      Fe = Ye.exports,
      Ue = function () {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r(
          "div",
          { staticClass: "container" },
          [
            r(
              "h2",
              [
                r("div", [e._v("Bills")]),
                r(
                  "router-link",
                  { staticClass: "btn blue", attrs: { to: "/bill/new" } },
                  [e._v("Create Bill")],
                ),
              ],
              1,
            ),
            e.loading ? r("Loading") : e._e(),
            e.loading
              ? e._e()
              : r(
                  "div",
                  { staticClass: "bills" },
                  e._l(e.bills, function (t) {
                    return r(
                      "ItemCard",
                      {
                        key: t.id,
                        staticClass: "bill",
                        scopedSlots: e._u(
                          [
                            {
                              key: "menu",
                              fn: function () {
                                return [
                                  r(
                                    "a",
                                    {
                                      on: {
                                        click: function (r) {
                                          return e.editBill(t);
                                        },
                                      },
                                    },
                                    [e._v("Edit")],
                                  ),
                                  r(
                                    "a",
                                    {
                                      on: {
                                        click: function (r) {
                                          return e.deleteBill(t);
                                        },
                                      },
                                    },
                                    [e._v("Delete")],
                                  ),
                                ];
                              },
                              proxy: !0,
                            },
                          ],
                          null,
                          !0,
                        ),
                      },
                      [
                        r("h3", { staticClass: "id" }, [
                          e._v("ID: " + e._s(t.id)),
                        ]),
                        r("div", { staticClass: "value" }, [
                          e._v("Value: " + e._s(t.value) + "kr"),
                        ]),
                        r("div", { staticClass: "paid" }, [
                          e._v("Paid: " + e._s(t.paid ? "Yes" : "No")),
                        ]),
                      ],
                    );
                  }),
                  1,
                ),
            e.bills.length
              ? e._e()
              : r("div", [r("p", [e._v("There are no bills")])]),
            r(
              "div",
              [
                r("router-link", { staticClass: "btn", attrs: { to: "/" } }, [
                  e._v("Back"),
                ]),
              ],
              1,
            ),
          ],
          1,
        );
      },
      ze = [],
      He = (function (e) {
        Object(c["a"])(r, e);
        var t = Object(u["a"])(r);
        function r() {
          var e;
          return (
            Object(s["a"])(this, r),
            (e = t.apply(this, arguments)),
            (e.loading = !1),
            e
          );
        }
        return (
          Object(o["a"])(r, [
            {
              key: "created",
              value: (function () {
                var e = Object(v["a"])(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!Ut()) {
                                e.next = 5;
                                break;
                              }
                              return (this.loading = !0), (e.next = 4), yr();
                            case 4:
                              this.loading = !1;
                            case 5:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                    );
                  }),
                );
                function t() {
                  return e.apply(this, arguments);
                }
                return t;
              })(),
            },
            {
              key: "editBill",
              value: function (e) {
                this.$router.push("/bill/".concat(e.id));
              },
            },
            {
              key: "deleteBill",
              value: (function () {
                var e = Object(v["a"])(
                  regeneratorRuntime.mark(function e(t) {
                    return regeneratorRuntime.wrap(function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), Er(t.id);
                          case 2:
                            return (e.next = 4), yr();
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                function t(t) {
                  return e.apply(this, arguments);
                }
                return t;
              })(),
            },
            {
              key: "bills",
              get: function () {
                return this.$store.state.bills || [];
              },
            },
          ]),
          r
        );
      })(p["c"]);
    He = Object(l["a"])(
      [Object(p["a"])({ components: { Loading: w, ItemCard: K } })],
      He,
    );
    var Je = He,
      qe = Je,
      Ge = (r("dc84"), Object(k["a"])(qe, Ue, ze, !1, null, "3dc8e785", null)),
      We = Ge.exports,
      Ze = function () {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r(
          "div",
          { staticClass: "container" },
          [
            r("h2", [
              "create" === e.mode ? r("div", [e._v("New Bill")]) : e._e(),
              "edit" === e.mode
                ? r("div", [e._v("Bill: " + e._s(e.$route.params.id))])
                : e._e(),
              "edit" === e.mode
                ? r("a", { staticClass: "btn red", on: { click: e.remove } }, [
                    e._v(e._s(e.deleting ? "..." : "Delete")),
                  ])
                : e._e(),
            ]),
            e.loading ? r("Loading") : e._e(),
            e.loading
              ? e._e()
              : r("div", [
                  "edit" === e.mode
                    ? r("div", { staticClass: "field" }, [
                        r("label", [e._v("ID")]),
                        r("input", {
                          attrs: { type: "text", disabled: "" },
                          domProps: { value: e.bill.id },
                        }),
                      ])
                    : e._e(),
                  "edit" === e.mode
                    ? r("div", { staticClass: "field" }, [
                        r("label", [e._v("Created")]),
                        r("input", {
                          attrs: { type: "text", disabled: "" },
                          domProps: { value: e.bill.created },
                        }),
                      ])
                    : e._e(),
                  r("div", { staticClass: "field" }, [
                    r("label", [e._v("Value (SEK)")]),
                    r("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: e.bill.value,
                          expression: "bill.value",
                        },
                      ],
                      attrs: { type: "number" },
                      domProps: { value: e.bill.value },
                      on: {
                        input: function (t) {
                          t.target.composing ||
                            e.$set(e.bill, "value", t.target.value);
                        },
                      },
                    }),
                  ]),
                  r(
                    "div",
                    { staticClass: "field" },
                    [
                      r("label", [e._v("Paid")]),
                      r("CheckBox", {
                        model: {
                          value: e.bill.paid,
                          callback: function (t) {
                            e.$set(e.bill, "paid", t);
                          },
                          expression: "bill.paid",
                        },
                      }),
                    ],
                    1,
                  ),
                ]),
            e._l(e.errors, function (t, n) {
              return r("div", { key: n, staticClass: "error" }, [
                e._v(e._s(t)),
              ]);
            }),
            r(
              "div",
              { staticClass: "actions" },
              [
                r(
                  "router-link",
                  { staticClass: "btn", attrs: { to: "/bills" } },
                  [e._v("Back")],
                ),
                r("a", { staticClass: "btn blue", on: { click: e.save } }, [
                  e._v(e._s(e.saving ? "..." : "Save")),
                ]),
              ],
              1,
            ),
          ],
          2,
        );
      },
      Ke = [],
      Xe = (function (e) {
        Object(c["a"])(r, e);
        var t = Object(u["a"])(r);
        function r() {
          var e;
          return (
            Object(s["a"])(this, r),
            (e = t.apply(this, arguments)),
            (e.loading = !1),
            (e.saving = !1),
            (e.deleting = !1),
            (e.bill = null),
            (e.errors = []),
            (e.dirty = !1),
            e
          );
        }
        return (
          Object(o["a"])(r, [
            {
              key: "created",
              value: (function () {
                var e = Object(v["a"])(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!Ut()) {
                                e.next = 10;
                                break;
                              }
                              if ("create" !== this.mode) {
                                e.next = 5;
                                break;
                              }
                              (this.bill = {}), (e.next = 10);
                              break;
                            case 5:
                              return (
                                (this.loading = !0),
                                (e.next = 8),
                                xr(this.$route.params.id)
                              );
                            case 8:
                              (this.bill = e.sent), (this.loading = !1);
                            case 10:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                    );
                  }),
                );
                function t() {
                  return e.apply(this, arguments);
                }
                return t;
              })(),
            },
            {
              key: "valiate",
              value: function () {
                return (
                  (this.errors = []),
                  this.bill.value >= 1e9
                    ? this.errors.push("Value must be less than 1000000000")
                    : this.bill.value <= 0
                      ? this.errors.push("Value must be greater than 0")
                      : parseFloat(this.bill.value) % 1 !== 0 &&
                        this.errors.push("Value must be a whole number"),
                  0 === this.errors.length
                );
              },
            },
            {
              key: "clearErrors",
              value: function () {
                this.dirty && this.valiate();
              },
            },
            {
              key: "save",
              value: (function () {
                var e = Object(v["a"])(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (((this.dirty = !0), this.valiate())) {
                                e.next = 3;
                                break;
                              }
                              return e.abrupt("return", !1);
                            case 3:
                              if (
                                ((this.saving = !0), "create" !== this.mode)
                              ) {
                                e.next = 10;
                                break;
                              }
                              return (e.next = 7), Or(this.bill);
                            case 7:
                              (this.bill = e.sent), (e.next = 13);
                              break;
                            case 10:
                              return (e.next = 12), Cr(this.bill.id, this.bill);
                            case 12:
                              this.bill = e.sent;
                            case 13:
                              this.$router.push("/bills");
                            case 14:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                    );
                  }),
                );
                function t() {
                  return e.apply(this, arguments);
                }
                return t;
              })(),
            },
            {
              key: "remove",
              value: (function () {
                var e = Object(v["a"])(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (this.deleting = !0),
                                (e.next = 3),
                                Er(this.bill.id)
                              );
                            case 3:
                              this.$router.push("/bills");
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                    );
                  }),
                );
                function t() {
                  return e.apply(this, arguments);
                }
                return t;
              })(),
            },
            {
              key: "mode",
              get: function () {
                return "new" === this.$route.params.id ? "create" : "edit";
              },
            },
          ]),
          r
        );
      })(p["c"]);
    Object(l["a"])(
      [Object(p["d"])("bill", { deep: !0 })],
      Xe.prototype,
      "clearErrors",
      null,
    ),
      (Xe = Object(l["a"])(
        [Object(p["a"])({ components: { Loading: w, CheckBox: de } })],
        Xe,
      ));
    var Qe = Xe,
      et = Qe,
      tt = (r("0545"), Object(k["a"])(et, Ze, Ke, !1, null, "249a4276", null)),
      rt = tt.exports,
      nt = function () {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r(
          "div",
          { staticClass: "container" },
          [
            r(
              "h2",
              [
                r("div", [e._v("Reservations")]),
                r(
                  "router-link",
                  {
                    staticClass: "btn blue",
                    attrs: { to: "/reservation/new" },
                  },
                  [e._v("Create Reservation")],
                ),
              ],
              1,
            ),
            e.loading ? r("Loading") : e._e(),
            e.loading
              ? e._e()
              : r(
                  "div",
                  { staticClass: "reservations" },
                  e._l(e.reservations, function (t) {
                    return r(
                      "ItemCard",
                      {
                        key: t.id,
                        staticClass: "reservation card",
                        scopedSlots: e._u(
                          [
                            {
                              key: "menu",
                              fn: function () {
                                return [
                                  r(
                                    "a",
                                    {
                                      on: {
                                        click: function (r) {
                                          return e.editReservation(t);
                                        },
                                      },
                                    },
                                    [e._v("Edit")],
                                  ),
                                  r(
                                    "a",
                                    {
                                      on: {
                                        click: function (r) {
                                          return e.deleteReservation(t);
                                        },
                                      },
                                    },
                                    [e._v("Delete")],
                                  ),
                                ];
                              },
                              proxy: !0,
                            },
                          ],
                          null,
                          !0,
                        ),
                      },
                      [
                        r("h3", [
                          e._v(
                            e._s(e.client(t).name) +
                              ": " +
                              e._s(t.start || "No start") +
                              " - " +
                              e._s(t.end || "No end"),
                          ),
                        ]),
                        r("div", { staticClass: "id" }, [
                          e._v("Booking ID: " + e._s(t.id)),
                        ]),
                        r("div", { staticClass: "start" }, [
                          e._v("Start: " + e._s(t.start || "No start")),
                        ]),
                        r("div", { staticClass: "end" }, [
                          e._v("End: " + e._s(t.end || "No end")),
                        ]),
                        r("div", { staticClass: "client" }, [
                          e._v("Client: " + e._s(t.client || "No client")),
                        ]),
                        r("div", { staticClass: "room" }, [
                          e._v("Room: " + e._s(t.room || "No room")),
                        ]),
                        r("div", { staticClass: "bill" }, [
                          e._v("Bill: " + e._s(t.bill || "No bill")),
                        ]),
                      ],
                    );
                  }),
                  1,
                ),
            e.reservations.length
              ? e._e()
              : r("div", [r("p", [e._v("There are no reservations")])]),
            r(
              "div",
              [
                r("router-link", { staticClass: "btn", attrs: { to: "/" } }, [
                  e._v("Back"),
                ]),
              ],
              1,
            ),
          ],
          1,
        );
      },
      at = [],
      it =
        (r("7db0"),
        (function (e) {
          Object(c["a"])(r, e);
          var t = Object(u["a"])(r);
          function r() {
            var e;
            return (
              Object(s["a"])(this, r),
              (e = t.apply(this, arguments)),
              (e.loading = !1),
              e
            );
          }
          return (
            Object(o["a"])(r, [
              {
                key: "created",
                value: (function () {
                  var e = Object(v["a"])(
                    regeneratorRuntime.mark(function e() {
                      return regeneratorRuntime.wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (!Ut()) {
                                  e.next = 5;
                                  break;
                                }
                                return (this.loading = !0), (e.next = 4), Xt();
                              case 4:
                                this.loading = !1;
                              case 5:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  function t() {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "client",
                value: function (e) {
                  return (
                    this.clients.find(function (t) {
                      return t.id === e.client;
                    }) || { name: "No client" }
                  );
                },
              },
              {
                key: "bill",
                value: function (e) {
                  return this.rooms.find(function (t) {
                    return t.id === e.room;
                  });
                },
              },
              {
                key: "room",
                value: function (e) {
                  return this.bills.find(function (t) {
                    return t.id === e.bill;
                  });
                },
              },
              {
                key: "editReservation",
                value: function (e) {
                  this.$router.push("/reservation/".concat(e.id));
                },
              },
              {
                key: "deleteReservation",
                value: (function () {
                  var e = Object(v["a"])(
                    regeneratorRuntime.mark(function e(t) {
                      return regeneratorRuntime.wrap(function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), Ar(t.id);
                            case 2:
                              return (e.next = 4), $r();
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    }),
                  );
                  function t(t) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              },
              {
                key: "rooms",
                get: function () {
                  return this.$store.state.rooms || [];
                },
              },
              {
                key: "clients",
                get: function () {
                  return this.$store.state.clients || [];
                },
              },
              {
                key: "bills",
                get: function () {
                  return this.$store.state.bills || [];
                },
              },
              {
                key: "reservations",
                get: function () {
                  return this.$store.state.reservations || [];
                },
              },
            ]),
            r
          );
        })(p["c"]));
    it = Object(l["a"])(
      [Object(p["a"])({ components: { Loading: w, ItemCard: K } })],
      it,
    );
    var st = it,
      ot = st,
      ct = (r("4ad8"), Object(k["a"])(ot, nt, at, !1, null, "3c6bca6c", null)),
      ut = ct.exports,
      lt = function () {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r(
          "div",
          { staticClass: "container" },
          [
            r("h2", [
              "create" === e.mode
                ? r("div", [e._v("New Reservation")])
                : e._e(),
              "edit" === e.mode
                ? r("div", [e._v("Reservation: " + e._s(e.$route.params.id))])
                : e._e(),
              "edit" === e.mode
                ? r("a", { staticClass: "btn red", on: { click: e.remove } }, [
                    e._v(e._s(e.deleting ? "..." : "Delete")),
                  ])
                : e._e(),
            ]),
            e.loading ? r("Loading") : e._e(),
            e.loading
              ? e._e()
              : r("div", [
                  "edit" === e.mode
                    ? r("div", { staticClass: "field" }, [
                        r("label", [e._v("ID")]),
                        r("input", {
                          attrs: { type: "text", disabled: "" },
                          domProps: { value: e.reservation.id },
                        }),
                      ])
                    : e._e(),
                  "edit" === e.mode
                    ? r("div", { staticClass: "field" }, [
                        r("label", [e._v("Created")]),
                        r("input", {
                          attrs: { type: "text", disabled: "" },
                          domProps: { value: e.reservation.created },
                        }),
                      ])
                    : e._e(),
                  r("div", { staticClass: "field" }, [
                    e._m(0),
                    r("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: e.reservation.start,
                          expression: "reservation.start",
                        },
                      ],
                      attrs: { type: "text", placeholder: "YYYY-MM-DD" },
                      domProps: { value: e.reservation.start },
                      on: {
                        input: function (t) {
                          t.target.composing ||
                            e.$set(e.reservation, "start", t.target.value);
                        },
                      },
                    }),
                  ]),
                  r("div", { staticClass: "field" }, [
                    e._m(1),
                    r("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: e.reservation.end,
                          expression: "reservation.end",
                        },
                      ],
                      attrs: { type: "text", placeholder: "YYYY-MM-DD" },
                      domProps: { value: e.reservation.end },
                      on: {
                        input: function (t) {
                          t.target.composing ||
                            e.$set(e.reservation, "end", t.target.value);
                        },
                      },
                    }),
                  ]),
                  r("div", { staticClass: "field" }, [
                    r("label", [e._v("Client")]),
                    r(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: e.reservation.client,
                            expression: "reservation.client",
                          },
                        ],
                        on: {
                          change: function (t) {
                            var r = Array.prototype.filter
                              .call(t.target.options, function (e) {
                                return e.selected;
                              })
                              .map(function (e) {
                                var t = "_value" in e ? e._value : e.value;
                                return t;
                              });
                            e.$set(
                              e.reservation,
                              "client",
                              t.target.multiple ? r : r[0],
                            );
                          },
                        },
                      },
                      [
                        r("option", { attrs: { value: "" } }, [
                          e._v("- Not selected -"),
                        ]),
                        e._l(e.clients, function (t) {
                          return r(
                            "option",
                            { key: t.id, domProps: { value: t.id } },
                            [e._v(e._s(t.name) + " (#" + e._s(t.id) + ")")],
                          );
                        }),
                      ],
                      2,
                    ),
                  ]),
                  r("div", { staticClass: "field" }, [
                    r("label", [e._v("Room")]),
                    r(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: e.reservation.room,
                            expression: "reservation.room",
                          },
                        ],
                        on: {
                          change: function (t) {
                            var r = Array.prototype.filter
                              .call(t.target.options, function (e) {
                                return e.selected;
                              })
                              .map(function (e) {
                                var t = "_value" in e ? e._value : e.value;
                                return t;
                              });
                            e.$set(
                              e.reservation,
                              "room",
                              t.target.multiple ? r : r[0],
                            );
                          },
                        },
                      },
                      [
                        r("option", { attrs: { value: "" } }, [
                          e._v("- Not selected -"),
                        ]),
                        e._l(e.rooms, function (t) {
                          return r(
                            "option",
                            { key: t.id, domProps: { value: t.id } },
                            [
                              e._v(
                                "Floor " +
                                  e._s(t.floor) +
                                  ", Room " +
                                  e._s(t.number),
                              ),
                            ],
                          );
                        }),
                      ],
                      2,
                    ),
                  ]),
                  r("div", { staticClass: "field" }, [
                    r("label", [e._v("Bill")]),
                    r(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: e.reservation.bill,
                            expression: "reservation.bill",
                          },
                        ],
                        on: {
                          change: function (t) {
                            var r = Array.prototype.filter
                              .call(t.target.options, function (e) {
                                return e.selected;
                              })
                              .map(function (e) {
                                var t = "_value" in e ? e._value : e.value;
                                return t;
                              });
                            e.$set(
                              e.reservation,
                              "bill",
                              t.target.multiple ? r : r[0],
                            );
                          },
                        },
                      },
                      [
                        r("option", { attrs: { value: "" } }, [
                          e._v("- Not selected -"),
                        ]),
                        e._l(e.bills, function (t) {
                          return r(
                            "option",
                            { key: t.id, domProps: { value: t.id } },
                            [e._v("ID: " + e._s(t.id))],
                          );
                        }),
                      ],
                      2,
                    ),
                  ]),
                ]),
            e._l(e.errors, function (t, n) {
              return r("div", { key: n, staticClass: "error" }, [
                e._v(e._s(t)),
              ]);
            }),
            r(
              "div",
              { staticClass: "actions" },
              [
                r(
                  "router-link",
                  { staticClass: "btn", attrs: { to: "/reservations" } },
                  [e._v("Back")],
                ),
                r("a", { staticClass: "btn blue", on: { click: e.save } }, [
                  e._v(e._s(e.saving ? "..." : "Save")),
                ]),
              ],
              1,
            ),
          ],
          2,
        );
      },
      pt = [
        function () {
          var e = this,
            t = e.$createElement,
            r = e._self._c || t;
          return r("label", [
            e._v("Start "),
            r("small", [e._v("(Format YYYY-MM-DD)")]),
          ]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            r = e._self._c || t;
          return r("label", [
            e._v("End "),
            r("small", [e._v("(Format YYYY-MM-DD)")]),
          ]);
        },
      ],
      vt = (function (e) {
        Object(c["a"])(r, e);
        var t = Object(u["a"])(r);
        function r() {
          var e;
          return (
            Object(s["a"])(this, r),
            (e = t.apply(this, arguments)),
            (e.loading = !1),
            (e.saving = !1),
            (e.deleting = !1),
            (e.reservation = {}),
            (e.errors = []),
            (e.dirty = !1),
            e
          );
        }
        return (
          Object(o["a"])(r, [
            {
              key: "created",
              value: (function () {
                var e = Object(v["a"])(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!Ut()) {
                                e.next = 12;
                                break;
                              }
                              return (e.next = 3), Xt();
                            case 3:
                              if ("create" !== this.mode) {
                                e.next = 7;
                                break;
                              }
                              (this.reservation = {
                                client: "",
                                room: "",
                                bill: "",
                              }),
                                (e.next = 12);
                              break;
                            case 7:
                              return (
                                (this.loading = !0),
                                (e.next = 10),
                                Br(this.$route.params.id)
                              );
                            case 10:
                              (this.reservation = e.sent), (this.loading = !1);
                            case 12:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                    );
                  }),
                );
                function t() {
                  return e.apply(this, arguments);
                }
                return t;
              })(),
            },
            {
              key: "valiate",
              value: function () {
                var e = this;
                return (
                  (this.errors = []),
                  this.reservation.start && 0 !== this.reservation.start.length
                    ? Ie(this.reservation.start) ||
                      this.errors.push("Start date is not valid")
                    : this.errors.push("Start date must be set"),
                  this.reservation.end && 0 !== this.reservation.end.length
                    ? Ie(this.reservation.end) ||
                      this.errors.push("End date is not valid")
                    : this.errors.push("End date must be set"),
                  "" === this.reservation.client ||
                    this.clients.find(function (t) {
                      return t.id === e.reservation.client;
                    }) ||
                    this.errors.push("Please select a valid client"),
                  "" === this.reservation.room ||
                    this.rooms.find(function (t) {
                      return t.id === e.reservation.room;
                    }) ||
                    this.errors.push("Please select a valid room"),
                  "" === this.reservation.bill ||
                    this.bills.find(function (t) {
                      return t.id === e.reservation.bill;
                    }) ||
                    this.errors.push("Please select a valid bill"),
                  0 === this.errors.length
                );
              },
            },
            {
              key: "clearErrors",
              value: function () {
                this.dirty && this.valiate();
              },
            },
            {
              key: "save",
              value: (function () {
                var e = Object(v["a"])(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (((this.dirty = !0), this.valiate())) {
                                e.next = 3;
                                break;
                              }
                              return e.abrupt("return", !1);
                            case 3:
                              if (
                                ((this.saving = !0), "create" !== this.mode)
                              ) {
                                e.next = 10;
                                break;
                              }
                              return (e.next = 7), Nr(this.reservation);
                            case 7:
                              (this.reservation = e.sent), (e.next = 13);
                              break;
                            case 10:
                              return (
                                (e.next = 12),
                                Ir(this.reservation.id, this.reservation)
                              );
                            case 12:
                              this.reservation = e.sent;
                            case 13:
                              this.$router.push("/reservations");
                            case 14:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                    );
                  }),
                );
                function t() {
                  return e.apply(this, arguments);
                }
                return t;
              })(),
            },
            {
              key: "remove",
              value: (function () {
                var e = Object(v["a"])(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (this.deleting = !0),
                                (e.next = 3),
                                Ar(this.reservation.id)
                              );
                            case 3:
                              this.$router.push("/reservations");
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                    );
                  }),
                );
                function t() {
                  return e.apply(this, arguments);
                }
                return t;
              })(),
            },
            {
              key: "clients",
              get: function () {
                return this.$store.state.clients;
              },
            },
            {
              key: "rooms",
              get: function () {
                return this.$store.state.rooms;
              },
            },
            {
              key: "bills",
              get: function () {
                return this.$store.state.bills;
              },
            },
            {
              key: "mode",
              get: function () {
                return "new" === this.$route.params.id ? "create" : "edit";
              },
            },
          ]),
          r
        );
      })(p["c"]);
    Object(l["a"])(
      [Object(p["d"])("reservation", { deep: !0 })],
      vt.prototype,
      "clearErrors",
      null,
    ),
      (vt = Object(l["a"])(
        [Object(p["a"])({ components: { Loading: w, CheckBox: de } })],
        vt,
      ));
    var dt = vt,
      ht = dt,
      mt = (r("4163"), Object(k["a"])(ht, lt, pt, !1, null, "3333ec2d", null)),
      ft = mt.exports,
      bt = function () {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r("div", { staticClass: "container small" }, [
          r("h2", [e._v("404 - Oh no!")]),
          r("p", [e._v("The page could not be found")]),
          r(
            "div",
            [
              r("router-link", { staticClass: "btn", attrs: { to: "/" } }, [
                e._v("Go To Homepage"),
              ]),
            ],
            1,
          ),
        ]);
      },
      gt = [],
      _t = (function (e) {
        Object(c["a"])(r, e);
        var t = Object(u["a"])(r);
        function r() {
          return Object(s["a"])(this, r), t.apply(this, arguments);
        }
        return r;
      })(p["c"]);
    _t = Object(l["a"])([p["a"]], _t);
    var yt = _t,
      kt = yt,
      Ot = Object(k["a"])(kt, bt, gt, !1, null, null, null),
      wt = Ot.exports;
    n["a"].use(d["a"]);
    var xt = [
        { path: "/", name: "Home", component: E },
        { path: "/rooms", name: "Rooms", component: re },
        { path: "/room/:id", name: "Room", component: ge },
        { path: "/clients", name: "Clients", component: Pe },
        { path: "/client/:id", name: "Client", component: Fe },
        { path: "/bills", name: "Bills", component: We },
        { path: "/bill/:id", name: "Bill", component: rt },
        { path: "/reservations", name: "Reservations", component: ut },
        { path: "/reservation/:id", name: "Reservation", component: ft },
        { path: "/login", name: "Login", component: L },
        { path: "/*", name: "404", component: wt },
      ],
      jt = new d["a"]({ mode: "history", base: "/", routes: xt });
    function Ct(e) {
      jt.push(e);
    }
    var Rt,
      Et = jt,
      St = r("3835"),
      $t = r("5530"),
      Tt = (function () {
        function e() {
          Object(s["a"])(this, e);
        }
        return (
          Object(o["a"])(e, [
            {
              key: "execute",
              value: function (e, t) {
                var r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : null,
                  n =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : {};
                n = Object($t["a"])(
                  {
                    Accept: "application/json",
                    "Content-Type": "application/json;charset=UTF-8",
                  },
                  n,
                );
                var a = r ? JSON.stringify(r) : null,
                  i = { method: t, headers: n, body: a };
                return fetch(e, i)
                  .then(function (e) {
                    return e.json().then(function (t) {
                      return [e.ok, t];
                    });
                  })
                  .then(function (e) {
                    var t = Object(St["a"])(e, 2),
                      r = t[0],
                      n = t[1];
                    return r ? Promise.resolve(n) : Promise.reject(n);
                  });
              },
            },
            {
              key: "get",
              value: function (e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null;
                return this.execute(e, "GET", null, t);
              },
            },
            {
              key: "post",
              value: function (e, t) {
                var r =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : null;
                return this.execute(e, "POST", t, r);
              },
            },
            {
              key: "put",
              value: function (e, t) {
                var r =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : null;
                return this.execute(e, "PUT", t, r);
              },
            },
            {
              key: "delete",
              value: function (e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null;
                return this.execute(e, "DELETE", null, t);
              },
            },
          ]),
          e
        );
      })(),
      Nt = "http://localhost:3000",
      Pt = new Tt(),
      Bt = Pt,
      Lt = r("ade3"),
      It = r("2f62"),
      Dt = r("bfa9");
    function At() {
      return {
        user: null,
        rooms: null,
        clients: null,
        bills: null,
        reservations: null,
      };
    }
    n["a"].use(It["a"]);
    var Mt = {
        RESET_STATE: "RESET_STATE",
        SET_USER: "SET_USER",
        SET_ROOMS: "SET_ROOMS",
        SET_CLIENTS: "SET_CLIENTS",
        SET_BILLS: "SET_BILLS",
        SET_RESERVATIONS: "SET_RESERVATIONS",
      },
      Vt =
        ((Rt = {}),
        Object(Lt["a"])(Rt, Mt.RESET_STATE, function (e) {
          Object.assign(e, At());
        }),
        Object(Lt["a"])(Rt, Mt.SET_USER, function (e, t) {
          e.user = t;
        }),
        Object(Lt["a"])(Rt, Mt.SET_ROOMS, function (e, t) {
          e.rooms = t;
        }),
        Object(Lt["a"])(Rt, Mt.SET_CLIENTS, function (e, t) {
          e.clients = t;
        }),
        Object(Lt["a"])(Rt, Mt.SET_BILLS, function (e, t) {
          e.bills = t;
        }),
        Object(Lt["a"])(Rt, Mt.SET_RESERVATIONS, function (e, t) {
          e.reservations = t;
        }),
        Rt),
      Yt = new Dt["a"]({ key: "tester-hotel", storage: window.localStorage }),
      Ft = new It["a"].Store({
        strict: !0,
        state: At(),
        mutations: Vt,
        plugins: [Yt.plugin],
      });
    function Ut() {
      var e =
          !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
        t = Ft.state.user;
      return e && !t ? (Ct("/login"), !1) : t;
    }
    function zt() {
      Ft.state.user && Ct("/");
    }
    function Ht() {
      return Jt.apply(this, arguments);
    }
    function Jt() {
      return (
        (Jt = Object(v["a"])(
          regeneratorRuntime.mark(function e() {
            return regeneratorRuntime.wrap(
              function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        Bt.post("".concat(Nt, "/api/logout"), Ft.state.user)
                      );
                    case 3:
                      e.next = 7;
                      break;
                    case 5:
                      (e.prev = 5), (e.t0 = e["catch"](0));
                    case 7:
                      return (e.prev = 7), Zt(!1), e.finish(7);
                    case 10:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 5, 7, 10]],
            );
          }),
        )),
        Jt.apply(this, arguments)
      );
    }
    function qt(e, t) {
      return Gt.apply(this, arguments);
    }
    function Gt() {
      return (
        (Gt = Object(v["a"])(
          regeneratorRuntime.mark(function e(t, r) {
            var n,
              a,
              i = arguments;
            return regeneratorRuntime.wrap(
              function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = i.length > 2 && void 0 !== i[2] ? i[2] : "/"),
                        (e.prev = 1),
                        (e.next = 4),
                        Bt.post("".concat(Nt, "/api/login"), {
                          username: t,
                          password: r,
                        })
                      );
                    case 4:
                      (a = e.sent),
                        Ft.commit(Mt.SET_USER, a),
                        (n = n && n.startsWith("/login") ? "/" : n),
                        Ct(n || "/"),
                        (e.next = 13);
                      break;
                    case 10:
                      throw ((e.prev = 10), (e.t0 = e["catch"](1)), e.t0);
                    case 13:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[1, 10]],
            );
          }),
        )),
        Gt.apply(this, arguments)
      );
    }
    function Wt() {
      return { "X-User-Auth": JSON.stringify(Ft.state.user) };
    }
    function Zt() {
      var e =
        !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      Ft.commit(Mt.RESET_STATE);
      var t = e ? "?redirect=".concat(Et.currentRoute.path) : "";
      Ct("/login".concat(t));
    }
    function Kt() {
      Ct("/404");
    }
    function Xt() {
      return Qt.apply(this, arguments);
    }
    function Qt() {
      return (
        (Qt = Object(v["a"])(
          regeneratorRuntime.mark(function e() {
            return regeneratorRuntime.wrap(
              function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        Promise.all([er(), lr(), yr(), $r()])
                      );
                    case 3:
                      return e.abrupt("return", !0);
                    case 6:
                      return (
                        (e.prev = 6),
                        (e.t0 = e["catch"](0)),
                        Zt(),
                        e.abrupt("return", !1)
                      );
                    case 10:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 6]],
            );
          }),
        )),
        Qt.apply(this, arguments)
      );
    }
    function er() {
      return tr.apply(this, arguments);
    }
    function tr() {
      return (
        (tr = Object(v["a"])(
          regeneratorRuntime.mark(function e() {
            var t;
            return regeneratorRuntime.wrap(
              function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        Bt.get("".concat(Nt, "/api/rooms"), Wt())
                      );
                    case 3:
                      return (
                        (t = e.sent),
                        Ft.commit(Mt.SET_ROOMS, t),
                        e.abrupt("return", t)
                      );
                    case 8:
                      return (
                        (e.prev = 8),
                        (e.t0 = e["catch"](0)),
                        e.abrupt("return", Zt())
                      );
                    case 11:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 8]],
            );
          }),
        )),
        tr.apply(this, arguments)
      );
    }
    function rr(e) {
      return nr.apply(this, arguments);
    }
    function nr() {
      return (
        (nr = Object(v["a"])(
          regeneratorRuntime.mark(function e(t) {
            return regeneratorRuntime.wrap(
              function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        Bt.post("".concat(Nt, "/api/room/new"), t, Wt())
                      );
                    case 3:
                      return e.abrupt("return", e.sent);
                    case 6:
                      return (
                        (e.prev = 6),
                        (e.t0 = e["catch"](0)),
                        e.abrupt("return", Zt())
                      );
                    case 9:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 6]],
            );
          }),
        )),
        nr.apply(this, arguments)
      );
    }
    function ar(e) {
      return ir.apply(this, arguments);
    }
    function ir() {
      return (
        (ir = Object(v["a"])(
          regeneratorRuntime.mark(function e(t) {
            return regeneratorRuntime.wrap(
              function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        Bt.get("".concat(Nt, "/api/room/").concat(t), Wt())
                      );
                    case 3:
                      return e.abrupt("return", e.sent);
                    case 6:
                      return (
                        (e.prev = 6),
                        (e.t0 = e["catch"](0)),
                        e.abrupt("return", Kt())
                      );
                    case 9:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 6]],
            );
          }),
        )),
        ir.apply(this, arguments)
      );
    }
    function sr(e, t) {
      return or.apply(this, arguments);
    }
    function or() {
      return (
        (or = Object(v["a"])(
          regeneratorRuntime.mark(function e(t, r) {
            return regeneratorRuntime.wrap(
              function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        Bt.put("".concat(Nt, "/api/room/").concat(t), r, Wt())
                      );
                    case 3:
                      return e.abrupt("return", e.sent);
                    case 6:
                      return (
                        (e.prev = 6),
                        (e.t0 = e["catch"](0)),
                        e.abrupt("return", Zt())
                      );
                    case 9:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 6]],
            );
          }),
        )),
        or.apply(this, arguments)
      );
    }
    function cr(e) {
      return ur.apply(this, arguments);
    }
    function ur() {
      return (
        (ur = Object(v["a"])(
          regeneratorRuntime.mark(function e(t) {
            return regeneratorRuntime.wrap(
              function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        Bt.delete("".concat(Nt, "/api/room/").concat(t), Wt())
                      );
                    case 3:
                      return e.abrupt("return", e.sent);
                    case 6:
                      return (
                        (e.prev = 6),
                        (e.t0 = e["catch"](0)),
                        e.abrupt("return", Zt())
                      );
                    case 9:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 6]],
            );
          }),
        )),
        ur.apply(this, arguments)
      );
    }
    function lr() {
      return pr.apply(this, arguments);
    }
    function pr() {
      return (
        (pr = Object(v["a"])(
          regeneratorRuntime.mark(function e() {
            var t;
            return regeneratorRuntime.wrap(
              function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        Bt.get("".concat(Nt, "/api/clients"), Wt())
                      );
                    case 3:
                      return (
                        (t = e.sent),
                        Ft.commit(Mt.SET_CLIENTS, t),
                        e.abrupt("return", t)
                      );
                    case 8:
                      return (
                        (e.prev = 8),
                        (e.t0 = e["catch"](0)),
                        e.abrupt("return", Zt())
                      );
                    case 11:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 8]],
            );
          }),
        )),
        pr.apply(this, arguments)
      );
    }
    function vr(e) {
      return dr.apply(this, arguments);
    }
    function dr() {
      return (
        (dr = Object(v["a"])(
          regeneratorRuntime.mark(function e(t) {
            return regeneratorRuntime.wrap(
              function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        Bt.post("".concat(Nt, "/api/client/new"), t, Wt())
                      );
                    case 3:
                      return e.abrupt("return", e.sent);
                    case 6:
                      return (
                        (e.prev = 6),
                        (e.t0 = e["catch"](0)),
                        e.abrupt("return", Zt())
                      );
                    case 9:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 6]],
            );
          }),
        )),
        dr.apply(this, arguments)
      );
    }
    function hr(e) {
      return mr.apply(this, arguments);
    }
    function mr() {
      return (
        (mr = Object(v["a"])(
          regeneratorRuntime.mark(function e(t) {
            return regeneratorRuntime.wrap(
              function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        Bt.get("".concat(Nt, "/api/client/").concat(t), Wt())
                      );
                    case 3:
                      return e.abrupt("return", e.sent);
                    case 6:
                      return (
                        (e.prev = 6),
                        (e.t0 = e["catch"](0)),
                        e.abrupt("return", Kt())
                      );
                    case 9:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 6]],
            );
          }),
        )),
        mr.apply(this, arguments)
      );
    }
    function fr(e, t) {
      return br.apply(this, arguments);
    }
    function br() {
      return (
        (br = Object(v["a"])(
          regeneratorRuntime.mark(function e(t, r) {
            return regeneratorRuntime.wrap(
              function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        Bt.put("".concat(Nt, "/api/client/").concat(t), r, Wt())
                      );
                    case 3:
                      return e.abrupt("return", e.sent);
                    case 6:
                      return (
                        (e.prev = 6),
                        (e.t0 = e["catch"](0)),
                        e.abrupt("return", Zt())
                      );
                    case 9:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 6]],
            );
          }),
        )),
        br.apply(this, arguments)
      );
    }
    function gr(e) {
      return _r.apply(this, arguments);
    }
    function _r() {
      return (
        (_r = Object(v["a"])(
          regeneratorRuntime.mark(function e(t) {
            return regeneratorRuntime.wrap(
              function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        Bt.delete("".concat(Nt, "/api/client/").concat(t), Wt())
                      );
                    case 3:
                      return e.abrupt("return", e.sent);
                    case 6:
                      return (
                        (e.prev = 6),
                        (e.t0 = e["catch"](0)),
                        e.abrupt("return", Zt())
                      );
                    case 9:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 6]],
            );
          }),
        )),
        _r.apply(this, arguments)
      );
    }
    function yr() {
      return kr.apply(this, arguments);
    }
    function kr() {
      return (
        (kr = Object(v["a"])(
          regeneratorRuntime.mark(function e() {
            var t;
            return regeneratorRuntime.wrap(
              function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        Bt.get("".concat(Nt, "/api/bills"), Wt())
                      );
                    case 3:
                      return (
                        (t = e.sent),
                        Ft.commit(Mt.SET_BILLS, t),
                        e.abrupt("return", t)
                      );
                    case 8:
                      return (
                        (e.prev = 8),
                        (e.t0 = e["catch"](0)),
                        e.abrupt("return", Zt())
                      );
                    case 11:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 8]],
            );
          }),
        )),
        kr.apply(this, arguments)
      );
    }
    function Or(e) {
      return wr.apply(this, arguments);
    }
    function wr() {
      return (
        (wr = Object(v["a"])(
          regeneratorRuntime.mark(function e(t) {
            return regeneratorRuntime.wrap(
              function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        Bt.post("".concat(Nt, "/api/bill/new"), t, Wt())
                      );
                    case 3:
                      return e.abrupt("return", e.sent);
                    case 6:
                      return (
                        (e.prev = 6),
                        (e.t0 = e["catch"](0)),
                        e.abrupt("return", Zt())
                      );
                    case 9:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 6]],
            );
          }),
        )),
        wr.apply(this, arguments)
      );
    }
    function xr(e) {
      return jr.apply(this, arguments);
    }
    function jr() {
      return (
        (jr = Object(v["a"])(
          regeneratorRuntime.mark(function e(t) {
            return regeneratorRuntime.wrap(
              function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        Bt.get("".concat(Nt, "/api/bill/").concat(t), Wt())
                      );
                    case 3:
                      return e.abrupt("return", e.sent);
                    case 6:
                      return (
                        (e.prev = 6),
                        (e.t0 = e["catch"](0)),
                        e.abrupt("return", Kt())
                      );
                    case 9:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 6]],
            );
          }),
        )),
        jr.apply(this, arguments)
      );
    }
    function Cr(e, t) {
      return Rr.apply(this, arguments);
    }
    function Rr() {
      return (
        (Rr = Object(v["a"])(
          regeneratorRuntime.mark(function e(t, r) {
            return regeneratorRuntime.wrap(
              function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        Bt.put("".concat(Nt, "/api/bill/").concat(t), r, Wt())
                      );
                    case 3:
                      return e.abrupt("return", e.sent);
                    case 6:
                      return (
                        (e.prev = 6),
                        (e.t0 = e["catch"](0)),
                        e.abrupt("return", Zt())
                      );
                    case 9:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 6]],
            );
          }),
        )),
        Rr.apply(this, arguments)
      );
    }
    function Er(e) {
      return Sr.apply(this, arguments);
    }
    function Sr() {
      return (
        (Sr = Object(v["a"])(
          regeneratorRuntime.mark(function e(t) {
            return regeneratorRuntime.wrap(
              function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        Bt.delete("".concat(Nt, "/api/bill/").concat(t), Wt())
                      );
                    case 3:
                      return e.abrupt("return", e.sent);
                    case 6:
                      return (
                        (e.prev = 6),
                        (e.t0 = e["catch"](0)),
                        e.abrupt("return", Zt())
                      );
                    case 9:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 6]],
            );
          }),
        )),
        Sr.apply(this, arguments)
      );
    }
    function $r() {
      return Tr.apply(this, arguments);
    }
    function Tr() {
      return (
        (Tr = Object(v["a"])(
          regeneratorRuntime.mark(function e() {
            var t;
            return regeneratorRuntime.wrap(
              function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        Bt.get("".concat(Nt, "/api/reservations"), Wt())
                      );
                    case 3:
                      return (
                        (t = e.sent),
                        Ft.commit(Mt.SET_RESERVATIONS, t),
                        e.abrupt("return", t)
                      );
                    case 8:
                      return (
                        (e.prev = 8),
                        (e.t0 = e["catch"](0)),
                        e.abrupt("return", Zt())
                      );
                    case 11:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 8]],
            );
          }),
        )),
        Tr.apply(this, arguments)
      );
    }
    function Nr(e) {
      return Pr.apply(this, arguments);
    }
    function Pr() {
      return (
        (Pr = Object(v["a"])(
          regeneratorRuntime.mark(function e(t) {
            return regeneratorRuntime.wrap(
              function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        Bt.post("".concat(Nt, "/api/reservation/new"), t, Wt())
                      );
                    case 3:
                      return e.abrupt("return", e.sent);
                    case 6:
                      return (
                        (e.prev = 6),
                        (e.t0 = e["catch"](0)),
                        e.abrupt("return", Zt())
                      );
                    case 9:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 6]],
            );
          }),
        )),
        Pr.apply(this, arguments)
      );
    }
    function Br(e) {
      return Lr.apply(this, arguments);
    }
    function Lr() {
      return (
        (Lr = Object(v["a"])(
          regeneratorRuntime.mark(function e(t) {
            return regeneratorRuntime.wrap(
              function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        Bt.get(
                          "".concat(Nt, "/api/reservation/").concat(t),
                          Wt(),
                        )
                      );
                    case 3:
                      return e.abrupt("return", e.sent);
                    case 6:
                      return (
                        (e.prev = 6),
                        (e.t0 = e["catch"](0)),
                        e.abrupt("return", Kt())
                      );
                    case 9:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 6]],
            );
          }),
        )),
        Lr.apply(this, arguments)
      );
    }
    function Ir(e, t) {
      return Dr.apply(this, arguments);
    }
    function Dr() {
      return (
        (Dr = Object(v["a"])(
          regeneratorRuntime.mark(function e(t, r) {
            return regeneratorRuntime.wrap(
              function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        Bt.put(
                          "".concat(Nt, "/api/reservation/").concat(t),
                          r,
                          Wt(),
                        )
                      );
                    case 3:
                      return e.abrupt("return", e.sent);
                    case 6:
                      return (
                        (e.prev = 6),
                        (e.t0 = e["catch"](0)),
                        e.abrupt("return", Zt())
                      );
                    case 9:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 6]],
            );
          }),
        )),
        Dr.apply(this, arguments)
      );
    }
    function Ar(e) {
      return Mr.apply(this, arguments);
    }
    function Mr() {
      return (
        (Mr = Object(v["a"])(
          regeneratorRuntime.mark(function e(t) {
            return regeneratorRuntime.wrap(
              function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        Bt.delete(
                          "".concat(Nt, "/api/reservation/").concat(t),
                          Wt(),
                        )
                      );
                    case 3:
                      return e.abrupt("return", e.sent);
                    case 6:
                      return (
                        (e.prev = 6),
                        (e.t0 = e["catch"](0)),
                        e.abrupt("return", Zt())
                      );
                    case 9:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 6]],
            );
          }),
        )),
        Mr.apply(this, arguments)
      );
    }
    var Vr = (function (e) {
      Object(c["a"])(r, e);
      var t = Object(u["a"])(r);
      function r() {
        return Object(s["a"])(this, r), t.apply(this, arguments);
      }
      return (
        Object(o["a"])(r, [
          {
            key: "logout",
            value: function () {
              Ht();
            },
          },
          {
            key: "user",
            get: function () {
              return this.$store.state.user;
            },
          },
        ]),
        r
      );
    })(p["c"]);
    Vr = Object(l["a"])([p["a"]], Vr);
    var Yr = Vr,
      Fr = Yr,
      Ur = (r("5c0b"), Object(k["a"])(Fr, a, i, !1, null, null, null)),
      zr = Ur.exports;
    (n["a"].config.productionTip = !1),
      new n["a"]({
        router: Et,
        store: Ft,
        render: function (e) {
          return e(zr);
        },
      }).$mount("#app");
  },
  d3e5: function (e, t, r) {},
  d7dd: function (e, t, r) {
    "use strict";
    var n = r("23fd"),
      a = r.n(n);
    a.a;
  },
  dc84: function (e, t, r) {
    "use strict";
    var n = r("b8a0"),
      a = r.n(n);
    a.a;
  },
  f85d: function (e, t, r) {
    "use strict";
    var n = r("fc9f"),
      a = r.n(n);
    a.a;
  },
  fb15: function (e, t, r) {
    "use strict";
    var n = r("aa1c"),
      a = r.n(n);
    a.a;
  },
  fc9f: function (e, t, r) {},
});
//# sourceMappingURL=app.9c4514eb.js.map
