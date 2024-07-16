/*! ThunderX */
/*! Last updated on 2018/12/16 */
/*! http://www.carrotchou.blog */
module.exports = function (e) {
    var n = {};

    function t(i) {
        if (n[i]) return n[i].exports;
        var r = n[i] = {i, l: !1, exports: {}};
        return e[i].call(r.exports, r, r.exports, t), r.l = !0, r.exports
    }

    return t.m = e, t.c = n, t.d = function (e, n, i) {
        t.o(e, n) || Object.defineProperty(e, n, {enumerable: !0, get: i})
    }, t.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, t.t = function (e, n) {
        if (1 & n && (e = t(e)), 8 & n) return e;
        if (4 & n && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (t.r(i), Object.defineProperty(i, "default", {
            enumerable: !0,
            value: e
        }), 2 & n && "string" != typeof e) for (var r in e) t.d(i, r, function (n) {
            return e[n]
        }.bind(null, r));
        return i
    }, t.n = function (e) {
        var n = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function (e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, t.p = "", t(t.s = 36)
}([function (e, n) {
    e.exports = require("electron")
}, function (e, n, t) {
    "use strict";
    var i;
    Object.defineProperty(n, "__esModule", {value: !0}), function (e) {
        e[e.Critical = 1] = "Critical", e[e.Error = 2] = "Error", e[e.Warning = 3] = "Warning", e[e.Information = 4] = "Information", e[e.Verbose = 5] = "Verbose"
    }(i = n.LogLevel || (n.LogLevel = {})), n.outputLoggerConsole = ((r = {})[i.Critical] = function () {
        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        return console.error.apply(console, e)
    }, r[i.Error] = function () {
        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        return console.error.apply(console, e)
    }, r[i.Warning] = function () {
        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        return console.warn.apply(console, e)
    }, r[i.Information] = function () {
        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        return console.info.apply(console, e)
    }, r[i.Verbose] = function () {
        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        return console.log.apply(console, e)
    }, r);
    var r, o = function () {
        function e(e) {
            this.enableLogger = "1" === process.env.TL_ENABLE, this.moduleFilter = process.env.TL_MODULE_FILTER || "all", this.level = process.env.TL_LEVEL ? parseInt(process.env.TL_LEVEL, 10) : i.Information, this.moduleName = "", this.moduleName = e
        }

        return e.getLogger = function (n) {
            return new e(n)
        }, e.hook = function (n, t) {
            n && t && "function" == typeof t && (e.hooks[n] = (e.hooks[n] || []).concat([t]))
        }, e.callHook = function (n, t, i) {
            for (var r = [], o = 3; o < arguments.length; o++) r[o - 3] = arguments[o];
            n in e.hooks && e.hooks[n].forEach(function (e) {
                return e.apply(void 0, [t, i].concat(r))
            })
        }, e.prototype.critical = function () {
            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
            return this.log.apply(this, [i.Critical].concat(e))
        }, e.prototype.error = function () {
            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
            return this.log.apply(this, [i.Error].concat(e))
        }, e.prototype.warning = function () {
            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
            return this.log.apply(this, [i.Warning].concat(e))
        }, e.prototype.information = function () {
            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
            return this.log.apply(this, [i.Information].concat(e))
        }, e.prototype.verbose = function () {
            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
            return this.log.apply(this, [i.Verbose].concat(e))
        }, e.prototype.log = function (n) {
            for (var t = [], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
            e.callHook.apply(e, ["beforeLog", n, this.moduleName].concat(t)), this.checkShouldLog(n) && (this.writeLog.apply(this, [n, "[" + this.moduleName + "]"].concat(t)), e.callHook.apply(e, ["logged", n, this.moduleName].concat(t)))
        }, e.prototype.writeLog = function (n) {
            for (var t, i = [], r = 1; r < arguments.length; r++) i[r - 1] = arguments[r];
            (t = e.outputLogger)[n].apply(t, i)
        }, e.prototype.checkShouldLog = function (e) {
            return this.enableLogger && e <= this.level && this.checkfilter()
        }, e.prototype.checkfilter = function () {
            return "all" === this.moduleFilter || this.moduleName.includes(this.moduleFilter)
        }, e.outputLogger = n.outputLoggerConsole, e.hooks = {}, e
    }();
    n.default = o
}, function (e, n) {
    e.exports = require("path")
}, function (e, n, t) {
    "use strict";
    var i = t(24), r = t(65), o = Object.prototype.toString;

    function s(e) {
        return "[object Array]" === o.call(e)
    }

    function a(e) {
        return null !== e && "object" == typeof e
    }

    function l(e) {
        return "[object Function]" === o.call(e)
    }

    function d(e, n) {
        if (null !== e && void 0 !== e) if ("object" != typeof e && (e = [e]), s(e)) for (var t = 0, i = e.length; t < i; t++) n.call(null, e[t], t, e); else for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.call(null, e[r], r, e)
    }

    e.exports = {
        isArray: s, isArrayBuffer: function (e) {
            return "[object ArrayBuffer]" === o.call(e)
        }, isBuffer: r, isFormData: function (e) {
            return "undefined" != typeof FormData && e instanceof FormData
        }, isArrayBufferView: function (e) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
        }, isString: function (e) {
            return "string" == typeof e
        }, isNumber: function (e) {
            return "number" == typeof e
        }, isObject: a, isUndefined: function (e) {
            return void 0 === e
        }, isDate: function (e) {
            return "[object Date]" === o.call(e)
        }, isFile: function (e) {
            return "[object File]" === o.call(e)
        }, isBlob: function (e) {
            return "[object Blob]" === o.call(e)
        }, isFunction: l, isStream: function (e) {
            return a(e) && l(e.pipe)
        }, isURLSearchParams: function (e) {
            return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
        }, isStandardBrowserEnv: function () {
            return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document
        }, forEach: d, merge: function e() {
            var n = {};

            function t(t, i) {
                "object" == typeof n[i] && "object" == typeof t ? n[i] = e(n[i], t) : n[i] = t
            }

            for (var i = 0, r = arguments.length; i < r; i++) d(arguments[i], t);
            return n
        }, extend: function (e, n, t) {
            return d(n, function (n, r) {
                e[r] = t && "function" == typeof n ? i(n, t) : n
            }), e
        }, trim: function (e) {
            return e.replace(/^\s*/, "").replace(/\s*$/, "")
        }
    }
}, function (e, n) {
    e.exports = require("util")
}, function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {value: !0}), n.default = function (e) {
        return require(e)
    }
}, function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {value: !0}), function (e) {
        e.channelRMNewTaskReadyForSetTaskData = "RM_NEWTASK_READYRORSETTASKDATA", e.channelRMNewTaskSetTaskData = "RM_NEWTASK_SETTASKDATA", e.channelRMPreNewTaskSetTaskData = "RM_PRENEWTASK_SETTASKDATA", e.channelRMNewTaskCreateNewTask = "RM_NEWTASK_CREATENEWTASK", e.channelRMNewTaskSetBTInfo = "RM_NEWTASK_SETBTINFO", e.channelRMNewTaskDownloadTorrent = "RM_NEW_TASK_DOWNLOAD_TORRENT", e.channelRMNewTaskCreateBtTask = "RM_NEWTASK_CRATEBTTASK", e.channelRMNewTaskCancleMagnet = "RM_NEWTASK_CANCLE_MAGNET", e.channelRMImportTorrent = "RM_NEWTASK_IMPORT_TORRENT", e.channelRMGetConfigValueResolve = "RM_GET_CONFIG_VALUE_RESOLVE", e.channelRMGetConfigValueReject = "RM_GET_CONFIG_VALUE_REJECT", e.channelMRTrayMenuClick = "MR_TRAY_MENU_CLICK", e.channelMRNewTaskMagnetTaskCreated = "MR_NEW_TASK_MAGNET_TASK_CREATED", e.channelMRNewTaskDownloadTorrentResult = "MR_NEW_TASK_DOWNLOAD_TORRENT_RESULT", e.channelMRNewTaskCreateNewTaskResult = "MR_NEWTASK_CREATENEWTASK_RESULT", e.channelMRNewTaskCreateBtTaskResult = "RM_NEWTASK_CRATEBTTASK_RESULT", e.channelMRGetConfigValue = "MR_GET_CONFIG_VALUE", e.channelMRSetConfigValue = "MR_SET_CONFIG_VALUE", e.channelRMCommitPlanTask = "RM_PLANTASK_COMMIT", e.channelRMPerformePlanTask = "RM_PLANTASK_PERFORME", e.channelRMProcessSend = "RM_RENDER_PROCESS_INFO", e.channelRMGetPrivateSpaceInfo = "RM_RENDER_GET_PRIVATE_SPACE_INFO", e.channelMRGetPrivateSpaceInfoResult = "MR_RENDER_GET_PRIVATE_SPACE_INFO_RESULT", e.channelRMFileCopy = "RM_FILE_COPY", e.channelRMFileMove = "RM_FILE_MOVE", e.channelMRFileCopyResult = "MR_FILE_COPY_RESULT", e.channelMRFileMoveResult = "MR_FILE_MOVE_RESULT", e.channelRMGetSutitleByCid = "RM_RENDER_GET_SUBTITLE_BY_CID", e.channelMRGetSutitleByCidResult = "MR_RENDER_GET_SUBTITLE_BY_CID_RESULT", e.channelRMGetSutitleByName = "RM_RENDER_GET_SUBTITLE_BY_NAME", e.channelMRGetSutitleByNameResult = "MR_RENDER_GET_SUBTITLE_BY_NAME_RESULT", e.channelRMDownloadSutitle = "RM_RENDER_DOWNLOAD_SUBTITLE", e.channelMRDownloadSutitleSuc = "MR_RENDER_DOWNLOAD_SUBTITLE_SUCCESS", e.channelMRDownloadSutitleFail = "MR_RENDER_DOWNLOAD_SUBTITLE_FAIL", e.channelRMGetDisplayName = "RM_RENDER_GET_SUBTITLE_DISPLAYNAME", e.channelMRGetDisplayNameResult = "MR_RENDER_GET_SUBTITLE_DISPLAYNAME_RESULT", e.channelMRBringWindowToTop = "MR_RENDER_BRING_WINDOW_TO_TOP", e.channelRMDownloadXmp = "RM_RENDER_DOWNLOAD_XMP", e.channelMRFixXmpSuc = "MR_RENDER_FIX_XMP_SUC", e.channelMRFixXMPFail = "MR_RENDER_FIX_XMP_FAIL", e.channelRMDownloadXmpEx = "RM_RENDER_DOWNLOAD_XMP_EX", e.channelRMSetPosition = "RM_SET_POSITION", e.channelRMSetFoucs = "RM_SET_FOCUS", e.channelRMCreateAddressDropWnd = "RM_CREATE_ADDRESS_DROPWND", e.channelRMRefreshAddressDropWnd = "RM_REFRESH_ADDRESS_DROPWND", e.channelRMSelectAddressDropItem = "RM_SELECT_ADDRESS_DROPITEM", e.channelRMCreateSearchWindow = "RM_CREATE_SEARCH_WINDOW", e.channelRMAddressKeyDown = "RM_ADDRESS_BAR_KEYDOWN", e.channelMRFWAddressKeyDown = "MR_ADDRESS_FW_BAR_KEYDOWN", e.channelMRFWSelectAddressDropItem = "MR_FW_SELECT_ADDRESS_DROPITEM", e.channelRMAddressDropWndKeyDown = "RM_ADDRESS_DROPWND_KEYDOWN", e.channelMRSearchWindowVisibleChange = "MR_SEARCH_WINDOW_VISIBLE_CHANGE", e.channelRMShowSearchWindow = "RM_SEARCH_WINDOW_SHOW", e.channelRMHideSearchWindow = "RM_SEARCH_WINDOW_HIDE", e.channelRMClickMouse = "RM_CLICK_MOUSE", e.channelMRSearchBarFocusChange = "MR_SEARCHBAR_FOCUS_CHANGE", e.channelMRFWAddressDropWndKeyDown = "MR_FW_ADDRESS_DROPWND_KEYDOWN", e.channelMRClickAddressDropItem = "MR_CLICK_ADDRESS_DROPITEM", e.channelMRMainWndMax = "MR_MAINWINDOW_MAX", e.channelMRMainWndMin = "MR_MAINWINDOW_MIN", e.channelMRMainWndRestore = "MR_MAINWINDOW_RESTORE", e.channelRMGetBrowserStartType = "RM_GET_BROWSER_START_TYPE", e.channelMRGetBrowserStartTypeResult = "MR_GET_BROWSER_START_TYPE_RESULT", e.channelRMExecute = "RM_SHELL_EXECUTE", e.channelMRExecuteResult = "MR_SHELL_EXECUTE_RESULT", e.channelMRAdTipsClick = "MR_AD_TIPS_CLICK", e.channelMRNotificationMsg = "MR_NOTIFICATION_MSG", e.channelRMSetProgressBar = "RM_SET_PROGRESS_BAR", e.channelRMRoundWindow = "RM_ROUND_WINDOW"
    }(n.ThunderChannelList || (n.ThunderChannelList = {}))
}, function (e, n) {
    e.exports = require("os")
}, function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {value: !0}), n.information = function (...e) {
    }, n.error = function (...e) {
    }, n.warning = function (...e) {
    }, n.critical = function (...e) {
    }, n.verbose = function (...e) {
    }, "development" === process.env.LOGGER_ENV && (n.information = function (...e) {
        console.log("information", e)
    }, n.error = function (...e) {
        console.log("error", e)
    }, n.warning = function (...e) {
        console.log("warning", e)
    }, n.critical = function (...e) {
        console.log("critical", e)
    }, n.verbose = function (...e) {
        console.log("verbose", e)
    })
}, function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {value: !0}), function (e) {
        e.msgIPCCommunicatorForward = "ipc_communicator_forward", e.msgIPCSendToMain = "ipc_send_to_main", e.msgIPCSendToRenderer = "ipc_send_to_renderer", e.msgIPCRendererConnect = "ipc_renderer_connect", e.msgIPCRendererDisconnect = "ipc_renderer_disconnect", e.msgNCCallNativeFunction = "nc_call_native_function", e.msgNCCheckNativeFunction = "nc_check_native_function", e.msgNCCallJsFunctionById = "nc_call_js_function_by_id", e.msgNCCallJsFunctionByName = "nc_call_js_function_by_name", e.msgNCNativeFireEvent = "nc_native_fire_event", e.msgNCNativeCallReady = "nc_native_call_ready"
    }(n.CommonIPCMessage || (n.CommonIPCMessage = {}))
}, function (e, n) {
    e.exports = require("fs")
}, function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {value: !0});
    const i = t(2), r = t(5), o = t(1).default.getLogger("XLStat");
    let s = r.default(i.join(__rootDir, "../bin/ThunderHelper.node"));

    function a(e = "") {
        let n;
        if ("string" == typeof e) n = e; else if (l(e) && "object" == typeof e) {
            let t = [];
            for (let n in e) l(e[n]) && t.push(n + "=" + encodeURIComponent(e[n]));
            n = t.join(",")
        }
        return n
    }

    function l(e) {
        return void 0 !== e && null !== e
    }

    !function (e) {
        function n(e) {
            do {
                if (void 0 === e) break;
                s.trackClick(e, 0)
            } while (0)
        }

        e.trackEvent = function (e, n = "", t = "", i = 0, r = 0, l = 0, d = 0, c = "", u = 0) {
            let f = 0;
            do {
                if (void 0 === e) {
                    f = 1;
                    break
                }
                let h = a(c);
                f = s.trackEvent(e, n, t, i, r, l, d, h, u), o.information(e, n, t, i, r, l, d, h, u)
            } while (0);
            return f
        }, e.trackClick = n, e.trackShow = function (e) {
            n(e)
        }, e.setUserID = function (e = 0, n = 0) {
            s.setUserID(e, n)
        }
    }(n.XLStatNS || (n.XLStatNS = {}))
}, function (e, n, t) {
    "use strict";
    var i = this && this.__awaiter || function (e, n, t, i) {
        return new (t || (t = Promise))(function (r, o) {
            function s(e) {
                try {
                    l(i.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    l(i.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                e.done ? r(e.value) : new t(function (n) {
                    n(e.value)
                }).then(s, a)
            }

            l((i = i.apply(e, n || [])).next())
        })
    };
    Object.defineProperty(n, "__esModule", {value: !0});
    const r = t(10), o = t(2), s = t(4).promisify, a = t(1).default.getLogger("Thunder.base.fs-utilities");
    !function (e) {
        function n(e) {
            return i(this, void 0, void 0, function* () {
                let n = !1;
                if (void 0 !== e) {
                    const t = s(r.access);
                    try {
                        yield t(e), n = !0
                    } catch (e) {
                        a.information(e)
                    }
                }
                return n
            })
        }

        function l(e) {
            return i(this, void 0, void 0, function* () {
                let n = !1;
                if (void 0 !== e) {
                    const t = s(r.mkdir);
                    try {
                        yield t(e), n = !0
                    } catch (e) {
                        a.warning(e)
                    }
                }
                return n
            })
        }

        function d(e) {
            return i(this, void 0, void 0, function* () {
                let n = !1;
                if (void 0 !== e) {
                    const t = s(r.rmdir);
                    try {
                        yield t(e), n = !0
                    } catch (e) {
                        a.warning(e)
                    }
                }
                return n
            })
        }

        function c(e) {
            return i(this, void 0, void 0, function* () {
                let n = !1;
                if (void 0 !== e) {
                    const t = s(r.unlink);
                    try {
                        yield t(e), n = !0
                    } catch (e) {
                        a.warning(e)
                    }
                }
                return n
            })
        }

        function u(e) {
            return i(this, void 0, void 0, function* () {
                let n = null;
                if (void 0 !== e) {
                    const t = s(r.readdir);
                    try {
                        n = yield t(e)
                    } catch (e) {
                        a.warning(e)
                    }
                }
                return n
            })
        }

        function f(e) {
            return i(this, void 0, void 0, function* () {
                let n = null;
                if (void 0 !== e) {
                    const t = s(r.lstat);
                    try {
                        n = yield t(e)
                    } catch (e) {
                        a.warning(e)
                    }
                }
                return n
            })
        }

        function h(e, n) {
            return i(this, void 0, void 0, function* () {
                let t = !1;
                if (void 0 !== e && void 0 !== n) {
                    let i = o.join(e, n), r = yield f(i);
                    t = null !== r && r.isDirectory() ? yield p(i) : yield c(i)
                }
                return t
            })
        }

        function p(e) {
            return i(this, void 0, void 0, function* () {
                let t = !1;
                if (void 0 !== e) {
                    if (yield n(e)) {
                        t = !0;
                        let n = yield u(e);
                        for (let i = 0; i < n.length; i++) t = (yield h(e, n[i])) && t;
                        (t || 0 === n.length) && (t = (yield d(e)) && t)
                    }
                }
                return t
            })
        }

        function m(e) {
            return i(this, void 0, void 0, function* () {
                let t = !1;
                return a.information("mkdirsAW", e), void 0 !== e && ((yield n(e)) ? t = !0 : o.dirname(e) === e ? t = !1 : (yield m(o.dirname(e))) && (t = yield l(e))), t
            })
        }

        function g(e, t) {
            return i(this, void 0, void 0, function* () {
                let i;
                if (e.toLowerCase() !== t.toLowerCase() && (yield n(e))) {
                    let n = r.createReadStream(e), o = r.createWriteStream(t);
                    i = new Promise(e => {
                        n.pipe(o).on("finish", () => {
                            e(!0)
                        })
                    })
                } else i = new Promise(e => {
                    e(!1)
                });
                return i
            })
        }

        e.readFileAW = function (e) {
            return i(this, void 0, void 0, function* () {
                let n = null;
                if (void 0 !== e) {
                    const t = s(r.readFile);
                    try {
                        n = yield t(e)
                    } catch (e) {
                        a.warning(e)
                    }
                }
                return n
            })
        }, e.writeFileAW = function (e, n) {
            return i(this, void 0, void 0, function* () {
                let t = !1;
                if (void 0 !== e && null !== n) {
                    const i = s(r.writeFile);
                    try {
                        yield i(e, n), t = !0
                    } catch (e) {
                        a.warning(e)
                    }
                }
                return t
            })
        }, e.existsAW = n, e.mkdirAW = l, e.rmdirAW = d, e.unlinkAW = c, e.readdirAW = u, e.lstatAW = f, e.rmdirsAW = p, e.mkdirsAW = m, e.renameAW = function (e, n) {
            return i(this, void 0, void 0, function* () {
                if (void 0 !== e && void 0 !== n) {
                    const t = s(r.rename);
                    try {
                        yield t(e, n)
                    } catch (e) {
                        a.warning(e)
                    }
                }
            })
        }, e.copyFileAW = g, e.copyDirsAW = function e(t, r) {
            return i(this, void 0, void 0, function* () {
                let i = !1, s = yield f(t);
                if (s.isDirectory()) {
                    i = yield m(r);
                    let a = yield u(t);
                    for (let l = 0; l < a.length; l++) {
                        let d = o.join(t, a[l]), c = o.join(r, a[l]);
                        (i = yield n(d)) && (i = (s = yield f(d)).isDirectory() ? yield e(d, c) : yield g(d, c))
                    }
                }
                return i
            })
        }, e.mkdtempAW = function () {
            return i(this, void 0, void 0, function* () {
                let e = !1;
                const n = s(r.mkdtemp), i = (yield Promise.resolve().then(() => t(7))).tmpdir();
                try {
                    e = yield n(`${i}${o.sep}`)
                } catch (e) {
                    a.warning(e)
                }
                return e
            })
        }
    }(n.FileSystemAWNS || (n.FileSystemAWNS = {}))
}, function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {value: !0}), n.default = function (e, n, t, i = 12) {
        let r = e.getNativeWindowHandle().readUIntLE(0, 4), o = 0;
        t && (o = t.getNativeWindowHandle().readUIntLE(0, 4)), n.attachShadowWindow(r, i, o)
    }
}, function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {value: !0});
    const i = t(0), r = t(4), o = t(8), s = t(9);
    !function (e) {
        e.mainProcessContext = "main-process", e.mainRendererContext = "main-renderer", e.mainPageWebviewRendererContext = "main-page-webview-renderer", e.newTaskRendererContext = "new-task-renderer", e.preNewTaskRendererContext = "pre-new-task-renderer", e.loginRendererContext = "login-renderer";

        class n {
            constructor() {
                this.isConnected = !1, this.isOnIPCEvent = !1, this.rendererInfos = [], this.listeners = new Map, n.intervalIPCModuleMsgs = [s.CommonIPCMessage.msgIPCRendererConnect, s.CommonIPCMessage.msgIPCRendererDisconnect]
            }

            onMessage(e, n) {
                do {
                    if (!r.isString(e) || 0 === e.length) {
                        o.error("msgName is null");
                        break
                    }
                    if (r.isNullOrUndefined(n)) {
                        o.error("listener is null");
                        break
                    }
                    this.listeners.has(e) ? this.listeners.get(e).push(n) : this.listeners.set(e, [n])
                } while (0)
            }

            getCommunicatorInfo() {
                return this.currInfo
            }

            getAllRenderer() {
                return this.rendererInfos
            }

            getCommunicatorInfoById(e) {
                for (let n of this.rendererInfos) if (n.id === e) return n;
                return null
            }

            getCommunicatorInfoByContext(e) {
                for (let n of this.rendererInfos) if (n.context === e) return n;
                return null
            }

            startListenIPCMessage(e) {
                this.isOnIPCEvent || (this.isOnIPCEvent = !0, e && this.ListenSendToMainMsg(), this.ListenSendToRendererMsg(e))
            }

            ListenSendToMainMsg() {
                i.ipcMain.on(s.CommonIPCMessage.msgIPCSendToMain, (e, n) => {
                    let t = void 0;
                    do {
                        if (r.isNullOrUndefined(n)) {
                            o.error("msgInfo is empty");
                            break
                        }
                        if (!this.isConnected) {
                            o.warning("hasnot been connected yet");
                            break
                        }
                        let i = n.msg.name;
                        if (this.isIPCModuleIntervalMsg(i)) {
                            o.information(`IPC module interval msg : ${i}`);
                            let r = this.handleIPCModuleIntervalMsg(e.sender, n);
                            if (t = r[1], !r[0]) break;
                            o.information("need to dispatch msg:" + i)
                        }
                        r.isNullOrUndefined(t) ? t = this.NotifyListener(n) : this.NotifyListener(n)
                    } while (0);
                    r.isNullOrUndefined(t) || (e.returnValue = t)
                })
            }

            ListenSendToRendererMsg(e) {
                (e ? i.ipcMain : i.ipcRenderer).on(s.CommonIPCMessage.msgIPCSendToRenderer, (n, t) => {
                    let i = void 0;
                    do {
                        if (r.isNullOrUndefined(t)) {
                            o.error("msgInfo is empty");
                            break
                        }
                        if (!this.isConnected) {
                            o.warning("hasnot been connected yet");
                            break
                        }
                        let s = t.msg.name;
                        if (this.isIPCModuleIntervalMsg(s)) {
                            o.information(`IPC module interval msg : ${s}`);
                            let e = this.handleIPCModuleIntervalMsg(n.sender, t);
                            if (i = e[1], !e[0]) break;
                            o.information("need to dispatch msg:" + s)
                        }
                        e ? (o.information("is main, handle forward msg"), this.handleForwardRendererToRendererMsg(t)) : (o.information("is renderer, handle business msg"), r.isNullOrUndefined(i) ? i = this.NotifyListener(t) : this.NotifyListener(t))
                    } while (0);
                    r.isNullOrUndefined(i) || (n.returnValue = i)
                })
            }

            isIPCModuleIntervalMsg(e) {
                for (let t of n.intervalIPCModuleMsgs) if (e === t) return !0;
                return !1
            }

            handleIPCModuleIntervalMsg(e, n) {
                let t = [!1, void 0];
                do {
                    let i = n.msg.name;
                    if (i === s.CommonIPCMessage.msgIPCRendererConnect) {
                        t = [!0, this.handleRendererConnectMsg(e, n)];
                        break
                    }
                    if (i === s.CommonIPCMessage.msgIPCRendererDisconnect) {
                        t = [!0, this.handleRendererDisconnectMsg(e, n)];
                        break
                    }
                } while (0);
                return t
            }

            handleRendererConnectMsg(e, n) {
                o.verbose(e), o.verbose(n)
            }

            handleRendererDisconnectMsg(e, n) {
                o.verbose(e), o.verbose(n)
            }

            handleForwardRendererToRendererMsg(e) {
                this.sendForwardRendererToRendererMsg(e)
            }

            sendForwardRendererToRendererMsg(e) {
                o.verbose(e)
            }

            NotifyListener(e) {
                let n = void 0, t = e.msg.name;
                if (this.listeners.has(t)) {
                    let i = this.listeners.get(t), r = !0;
                    for (let t of i) r ? (r = !1, n = t(e)) : t(e)
                }
                return n
            }
        }

        e.Communicator = n
    }(n.CommonIPCBase || (n.CommonIPCBase = {}))
}, function (e, n, t) {
    "use strict";
    var i = this && this.__awaiter || function (e, n, t, i) {
        return new (t || (t = Promise))(function (r, o) {
            function s(e) {
                try {
                    l(i.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    l(i.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                e.done ? r(e.value) : new t(function (n) {
                    n(e.value)
                }).then(s, a)
            }

            l((i = i.apply(e, n || [])).next())
        })
    };
    Object.defineProperty(n, "__esModule", {value: !0});
    const r = t(21), o = t(10), s = t(12), a = t(1).default.getLogger("Thunder.base.tools-utilities"), l = t(2),
        d = t(5).default(l.join(__rootDir, "../bin/ThunderHelper.node"));
    !function (e) {
        function n(e) {
            return i(this, void 0, void 0, function* () {
                let n;
                return n = e && (yield s.FileSystemAWNS.existsAW(e)) ? new Promise(n => {
                    d.asyncCalcuteFileMD5(e, (e, t) => {
                        e ? (t = t.toUpperCase(), n(t)) : n(void 0)
                    })
                }) : new Promise(e => {
                    e(void 0)
                })
            })
        }

        e.genarateMd5 = function (e) {
            let n = void 0, t = r.createHash("md5");
            return null !== t && (n = t.update(e).digest("hex")), n
        }, e.matchFileMd5 = function (e, t) {
            return i(this, void 0, void 0, function* () {
                let i = !1, r = yield n(e);
                return void 0 !== r && r === t.toUpperCase() && (a.information("check full md5 sucessful"), i = !0), i
            })
        }, e.calculateFileMd5Ex = function (e) {
            return i(this, void 0, void 0, function* () {
                let n;
                if (e && (yield s.FileSystemAWNS.existsAW(e))) {
                    let t = o.createReadStream(e), i = r.createHash("md5");
                    t.on("data", e => {
                        i.update(e)
                    }), n = new Promise(e => {
                        t.on("end", () => {
                            let n = i.digest("hex");
                            n = n.toUpperCase(), e(n)
                        })
                    })
                } else n = new Promise(e => {
                    e(void 0)
                });
                return n
            })
        }, e.calculateFileMd5 = n, e.encryptBuffer = function (e, n) {
            let t = null;
            try {
                let i = r.createCipheriv("aes-128-ecb", n, ""), o = i.update(e), s = i.final();
                t = Buffer.concat([o, s])
            } catch (e) {
                a.error("encryptBuffer", e)
            }
            return t
        }, e.decryptBuffer = function (e, n) {
            let t = null;
            try {
                let i = r.createDecipheriv("aes-128-ecb", n, ""), o = i.update(e), s = i.final();
                t = Buffer.concat([o, s])
            } catch (e) {
                a.error("decryptBuffer", e)
            }
            return t
        }, e.encryptSha1Buffer = function (e) {
            let n = null;
            try {
                n = r.createHash("sha1").update(e).digest("hex")
            } catch (e) {
                a.error("encryptSha1Buffer", e)
            }
            return n
        }, e.setForegroundWindow = function (e, n) {
            if (null !== e && null !== n) {
                let t = n.getNativeWindowHandle().readUIntLE(0, 4);
                e.setForegroundWindow(t) ? a.information("sucessful") : a.information("failed")
            }
        }
    }(n.ToolsUtilitiesAWNS || (n.ToolsUtilitiesAWNS = {}))
}, function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {value: !0});
    const i = t(2), r = t(5).default(i.join(__rootDir, "../bin/ThunderHelper.node"));
    !function (e) {
        e.getDriveInfo = function (e) {
            return r.getDriveInfo(e)
        }, e.getFreePartitionSpace = function (e) {
            return r.getFreePartitionSpace(e)
        }, e.getLogicalDriveStrings = function () {
            return r.getLogicalDriveStrings()
        }, e.getPartitionSpace = function (e) {
            return r.getPartitionSpace(e)
        }, e.getSystemTempPath = function () {
            return r.getSystemTempPath()
        }, e.getTaskTypeFromUrl = function (e) {
            return r.getTaskTypeFromUrl(e)
        }, e.extractIcon = function (e, n) {
            return r.extractIcon(e, n)
        }, e.isWindow7 = function () {
            return 1 === r.isWin7()
        }, e.compareStr = function (e, n) {
            return r.compareStr(e, n)
        }, e.getTickCount = function () {
            return r.getTickCount()
        }
    }(n.ThunderHelper || (n.ThunderHelper = {}))
}, function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {value: !0}), function (e) {
        let n, t, i, r, o, s, a, l, d, c, u, f, h, p, m, g, w, v;
        !function (e) {
            e[e.Unkown = 0] = "Unkown", e[e.Create = 1] = "Create", e[e.InvaldParam = 2] = "InvaldParam", e[e.InvaldLink = 3] = "InvaldLink", e[e.InvaldConfig = 4] = "InvaldConfig", e[e.Timeout = 5] = "Timeout", e[e.VerifyData = 6] = "VerifyData", e[e.Forbidden = 7] = "Forbidden", e[e.RangeDispatch = 8] = "RangeDispatch", e[e.FilePathOverRanging = 9] = "FilePathOverRanging", e[e.FileCreate = 201] = "FileCreate", e[e.FileWrite = 202] = "FileWrite", e[e.FileRead = 203] = "FileRead", e[e.FileRename = 204] = "FileRename", e[e.FileFull = 205] = "FileFull", e[e.BtUploadExist = 601] = "BtUploadExist", e[e.ForbinddenResource = 701] = "ForbinddenResource", e[e.ForbinddenAccount = 702] = "ForbinddenAccount", e[e.ForbinddenArea = 703] = "ForbinddenArea", e[e.ForbinddenCopyright = 704] = "ForbinddenCopyright", e[e.ForbinddenReaction = 705] = "ForbinddenReaction", e[e.ForbinddenPorn = 706] = "ForbinddenPorn"
        }(n = e.TaskError || (e.TaskError = {})), function (e) {
            e[e.Unkown = -1] = "Unkown", e[e.Success = 0] = "Success", e[e.QueryFailed = 1] = "QueryFailed", e[e.ServerError = 2] = "ServerError", e[e.ResourceNotFound = 3] = "ResourceNotFound", e[e.AuthorizingFailed = 4] = "AuthorizingFailed", e[e.ForbidByCopyright = 5] = "ForbidByCopyright", e[e.ForbidByPorNoGraphy = 6] = "ForbidByPorNoGraphy", e[e.ForbidByReactionary = 7] = "ForbidByReactionary", e[e.ForbidByOtherFilter = 8] = "ForbidByOtherFilter"
        }(t = e.DcdnStatusCode || (e.DcdnStatusCode = {})), function (e) {
            e[e.Begin = -1] = "Begin", e[e.Unkown = 0] = "Unkown", e[e.StandBy = 1] = "StandBy", e[e.PreDownloading = 2] = "PreDownloading", e[e.StartWaiting = 3] = "StartWaiting", e[e.StartPending = 4] = "StartPending", e[e.Started = 5] = "Started", e[e.StopPending = 6] = "StopPending", e[e.Stopped = 7] = "Stopped", e[e.Succeeded = 8] = "Succeeded", e[e.Failed = 9] = "Failed", e[e.Seeding = 10] = "Seeding", e[e.DestroyPending = 11] = "DestroyPending", e[e.End = 12] = "End"
        }(i = e.TaskStatus || (e.TaskStatus = {})), function (e) {
            e[e.Begin = -1] = "Begin", e[e.StandBy = 0] = "StandBy", e[e.Stopped = 1] = "Stopped", e[e.Started = 2] = "Started", e[e.Complete = 3] = "Complete", e[e.Forbidden = 4] = "Forbidden", e[e.Error = 5] = "Error", e[e.End = 6] = "End"
        }(r = e.BtFileStatus || (e.BtFileStatus = {})), function (e) {
            e[e.DispatchStrategyNone = 0] = "DispatchStrategyNone", e[e.DispatchStrategyOrigin = 1] = "DispatchStrategyOrigin", e[e.DispatchStrategyP2s = 2] = "DispatchStrategyP2s", e[e.DispatchStrategyP2p = 4] = "DispatchStrategyP2p", e[e.DispatchStrategyAll = -1] = "DispatchStrategyAll"
        }(o = e.DispatchStrategy || (e.DispatchStrategy = {})), function (e) {
            e[e.Unkown = 0] = "Unkown", e[e.P2sp = 1] = "P2sp", e[e.Bt = 2] = "Bt", e[e.Emule = 3] = "Emule", e[e.Group = 4] = "Group", e[e.Magnet = 5] = "Magnet"
        }(s = e.TaskType || (e.TaskType = {})), function (e) {
            e.Unkown = "Unkown", e.Downloading = "Downloading", e.Completed = "Completed", e.Recycle = "Recycle"
        }(a = e.CategroyViewID || (e.CategroyViewID = {})), function (e) {
            e[e.Unknow = 0] = "Unknow", e[e.TaskCreated = 1] = "TaskCreated", e[e.InsertToCategoryView = 2] = "InsertToCategoryView", e[e.RemoveFromCategoryView = 3] = "RemoveFromCategoryView", e[e.StatusChanged = 4] = "StatusChanged", e[e.DetailChanged = 5] = "DetailChanged", e[e.ChannelInfoChanged = 6] = "ChannelInfoChanged", e[e.DcdnStatusChanged = 7] = "DcdnStatusChanged", e[e.TaskDescriptionChanged = 8] = "TaskDescriptionChanged", e[e.TaskUserRead = 9] = "TaskUserRead", e[e.TaskRenamed = 10] = "TaskRenamed", e[e.TaskMovedEnd = 11] = "TaskMovedEnd", e[e.BtSubFileDetailChanged = 12] = "BtSubFileDetailChanged", e[e.BtSubFileForbidden = 13] = "BtSubFileForbidden", e[e.BtSubFileDcdnStatusChanged = 14] = "BtSubFileDcdnStatusChanged", e[e.TaskCategoryMovedEnd = 15] = "TaskCategoryMovedEnd", e[e.GroupTaskSubFileDetailChanged = 16] = "GroupTaskSubFileDetailChanged", e[e.TaskDestroying = 17] = "TaskDestroying", e[e.TaskDestroyed = 18] = "TaskDestroyed"
        }(l = e.TaskEventType || (e.TaskEventType = {})), function (e) {
            e[e.NumberStrart = 0] = "NumberStrart", e[e.TaskId = 1] = "TaskId", e[e.VirtualId = 2] = "VirtualId", e[e.SrcTotal = 3] = "SrcTotal", e[e.SrcUsing = 4] = "SrcUsing", e[e.FileSize = 5] = "FileSize", e[e.ReceivedSize = 6] = "ReceivedSize", e[e.DownloadSize = 7] = "DownloadSize", e[e.CreateTime = 8] = "CreateTime", e[e.CompletionTime = 9] = "CompletionTime", e[e.DownloadingPeriod = 10] = "DownloadingPeriod", e[e.Progress = 11] = "Progress", e[e.RecycleTime = 12] = "RecycleTime", e[e.FileCreated = 13] = "FileCreated", e[e.Forbidden = 14] = "Forbidden", e[e.CategoryId = 15] = "CategoryId", e[e.UserRead = 16] = "UserRead", e[e.OpenOnComplete = 17] = "OpenOnComplete", e[e.GroupTaskId = 18] = "GroupTaskId", e[e.DownloadSubTask = 19] = "DownloadSubTask", e[e.NameType = 20] = "NameType", e[e.OwnerProduct = 21] = "OwnerProduct", e[e.FileIndex = 22] = "FileIndex", e[e.NumberEnd = 23] = "NumberEnd", e[e.BooleanStart = 24] = "BooleanStart", e[e.Destroyed = 25] = "Destroyed", e[e.Background = 26] = "Background", e[e.BooleanEnd = 27] = "BooleanEnd", e[e.StringStart = 28] = "StringStart", e[e.TaskName = 29] = "TaskName", e[e.SavePath = 30] = "SavePath", e[e.RelativePath = 31] = "RelativePath", e[e.TaskUrl = 32] = "TaskUrl", e[e.RefUrl = 33] = "RefUrl", e[e.Cid = 34] = "Cid", e[e.Gcid = 35] = "Gcid", e[e.Cookie = 36] = "Cookie", e[e.ProductInfo = 37] = "ProductInfo", e[e.Origin = 38] = "Origin", e[e.Description = 39] = "Description", e[e.UserData = 40] = "UserData", e[e.StringEnd = 41] = "StringEnd", e[e.ObjectStart = 42] = "ObjectStart", e[e.ObjectEnd = 43] = "ObjectEnd", e[e.CategoryViewId = 44] = "CategoryViewId", e[e.TaskType = 45] = "TaskType", e[e.ErrorCode = 46] = "ErrorCode"
        }(d = e.TaskAttribute || (e.TaskAttribute = {})), function (e) {
            e[e.UnKnown = 0] = "UnKnown", e[e.SrcTotal = 1] = "SrcTotal", e[e.SrcUsing = 2] = "SrcUsing", e[e.FileSize = 4] = "FileSize", e[e.ReceivedSize = 8] = "ReceivedSize", e[e.DownloadSize = 16] = "DownloadSize", e[e.CompletionTime = 32] = "CompletionTime", e[e.DownloadingPeriod = 64] = "DownloadingPeriod", e[e.Progress = 128] = "Progress", e[e.RecycleTime = 256] = "RecycleTime", e[e.FileCreated = 512] = "FileCreated", e[e.Forbidden = 1024] = "Forbidden", e[e.UserRead = 2048] = "UserRead", e[e.OpenOnComplete = 4096] = "OpenOnComplete", e[e.DownloadSubTask = 8192] = "DownloadSubTask", e[e.TaskName = 16384] = "TaskName", e[e.SavePath = 32768] = "SavePath", e[e.Cid = 65536] = "Cid", e[e.Gcid = 131072] = "Gcid", e[e.UserData = 262144] = "UserData", e[e.CategoryViewId = 524288] = "CategoryViewId", e[e.ErrorCode = 1048576] = "ErrorCode", e[e.TaskSpeed = 2097152] = "TaskSpeed", e[e.ChannelInfo = 4194304] = "ChannelInfo"
        }(c = e.TaskDetailChangedFlags || (e.TaskDetailChangedFlags = {})), function (e) {
            e[e.UnKnown = 0] = "UnKnown"
        }(u = e.BtSubFileDetailChangedFlags || (e.BtSubFileDetailChangedFlags = {})), function (e) {
            e[e.UnKnown = 0] = "UnKnown"
        }(f = e.GroupTaskSubFileDetailChangedFlags || (e.GroupTaskSubFileDetailChangedFlags = {})), function (e) {
            e[e.NumberStrart = 0] = "NumberStrart", e[e.TaskId = 1] = "TaskId", e[e.FileStatus = 2] = "FileStatus", e[e.DownloadSize = 3] = "DownloadSize", e[e.FileSize = 4] = "FileSize", e[e.EnableDcdn = 5] = "EnableDcdn", e[e.ErrorCode = 6] = "ErrorCode", e[e.DcdnStatus = 7] = "DcdnStatus", e[e.RealIndex = 8] = "RealIndex", e[e.FileOffset = 9] = "FileOffset", e[e.Visible = 10] = "Visible", e[e.Download = 11] = "Download", e[e.NumberEnd = 12] = "NumberEnd", e[e.StringStart = 13] = "StringStart", e[e.FinalName = 14] = "FinalName", e[e.RelativePath = 15] = "RelativePath", e[e.FileName = 16] = "FileName", e[e.FilePath = 17] = "FilePath", e[e.Cid = 18] = "Cid", e[e.Gcid = 19] = "Gcid", e[e.StringEnd = 20] = "StringEnd"
        }(h = e.BtFileAttribute || (e.BtFileAttribute = {})), function (e) {
            e[e.P2spUrl = 0] = "P2spUrl", e[e.BtInfoId = 1] = "BtInfoId", e[e.EmuleFileHash = 2] = "EmuleFileHash", e[e.MagnetUrl = 3] = "MagnetUrl", e[e.GroupTaskName = 4] = "GroupTaskName"
        }(p = e.KeyType || (e.KeyType = {})), function (e) {
            e[e.NameInclude = 1] = "NameInclude", e[e.BtDisplayNameInclude = 2] = "BtDisplayNameInclude"
        }(m = e.SearchKeyType || (e.SearchKeyType = {})), function (e) {
            e[e.All = 0] = "All", e[e.CommonForeground = 1] = "CommonForeground", e[e.CommonBackground = 2] = "CommonBackground", e[e.Temporary = 3] = "Temporary", e[e.PreDownload = 4] = "PreDownload", e[e.PrivateForeground = 5] = "PrivateForeground"
        }(g = e.KeyFilter || (e.KeyFilter = {})), function (e) {
            e[e.Unknown = -1] = "Unknown", e[e.LoadTaskBasic = 0] = "LoadTaskBasic", e[e.Create = 1] = "Create", e[e.Recycle = 2] = "Recycle", e[e.Recover = 3] = "Recover", e[e.ReDownload = 4] = "ReDownload", e[e.MoveThoughCategory = 5] = "MoveThoughCategory"
        }(w = e.TaskInsertReason || (e.TaskInsertReason = {})), function (e) {
            e[e.Unknown = -1] = "Unknown", e[e.ContextMenu = 0] = "ContextMenu", e[e.Button = 1] = "Button", e[e.TaskDetail = 2] = "TaskDetail", e[e.DownloadMagnet = 3] = "DownloadMagnet", e[e.ToolbarButton = 4] = "ToolbarButton", e[e.SelectDownloadLists = 5] = "SelectDownloadLists", e[e.DeleteTask = 6] = "DeleteTask"
        }(v = e.TaskStopReason || (e.TaskStopReason = {}))
    }(n.DownloadKernel || (n.DownloadKernel = {}))
}, function (e, n, t) {
    "use strict";
    var i = t(3), r = t(67), o = {"Content-Type": "application/x-www-form-urlencoded"};

    function s(e, n) {
        !i.isUndefined(e) && i.isUndefined(e["Content-Type"]) && (e["Content-Type"] = n)
    }

    var a, l = {
        adapter: ("undefined" != typeof XMLHttpRequest ? a = t(68) : "undefined" != typeof process && (a = t(28)), a),
        transformRequest: [function (e, n) {
            return r(n, "Content-Type"), i.isFormData(e) || i.isArrayBuffer(e) || i.isBuffer(e) || i.isStream(e) || i.isFile(e) || i.isBlob(e) ? e : i.isArrayBufferView(e) ? e.buffer : i.isURLSearchParams(e) ? (s(n, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : i.isObject(e) ? (s(n, "application/json;charset=utf-8"), JSON.stringify(e)) : e
        }],
        transformResponse: [function (e) {
            if ("string" == typeof e) try {
                e = JSON.parse(e)
            } catch (e) {
            }
            return e
        }],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        validateStatus: function (e) {
            return e >= 200 && e < 300
        }
    };
    l.headers = {common: {Accept: "application/json, text/plain, */*"}}, i.forEach(["delete", "get", "head"], function (e) {
        l.headers[e] = {}
    }), i.forEach(["post", "put", "patch"], function (e) {
        l.headers[e] = i.merge(o)
    }), e.exports = l
}, function (e, n, t) {
    "use strict";
    var i = t(26);
    e.exports = function (e, n, t, r, o) {
        var s = new Error(e);
        return i(s, n, t, r, o)
    }
}, function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {value: !0});
    const i = t(41);
    "browser" === process.type ? global.xlDesktopApplicationSolution = i.xlDesktopApplicationSolution : (window.xlDesktopApplicationSolution = i.xlDesktopApplicationSolution, process.once("loaded", () => {
        window.xlDesktopApplicationSolution = i.xlDesktopApplicationSolution
    }))
}, function (e, n) {
    e.exports = require("crypto")
}, function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {value: !0});
    const i = t(0), r = t(6);
    !function (e) {
        e.resizeToFitContent = function (e = 0, n = 0, t) {
            let r = i.remote.getCurrentWindow();
            if (e > 0 && n > 0) r.setSize(e, n); else {
                let e = document.querySelector(".td-dialog");
                r.setSize(e.offsetWidth, e.offsetHeight)
            }
            t && "function" == typeof t && t(), window.requestIdleCallback(() => {
                r.show()
            })
        }, e.autoAdaptScrollIntoView = function (e, n, t) {
            let i = n.scrollTop, r = n.getBoundingClientRect(), o = e.getBoundingClientRect(), s = r.bottom;
            void 0 !== t && "number" == typeof t && t > 0 && (s = r.top + t), o.top < r.top ? n.scrollTop = i - (r.top - o.top) : o.bottom > s && (n.scrollTop = i + (o.bottom - s))
        }, e.fitWindowPosInParent = function (e, n) {
            e || (e = i.remote.getCurrentWindow()), n || (n = e.getParentWindow()), i.ipcRenderer.sendSync(r.ThunderChannelList.channelRMSetPosition, e.getNativeWindowHandle(), n.getNativeWindowHandle())
        }, e.getWindowsInParentCenterPos = function (e, n, t) {
            t || (t = i.remote.getCurrentWindow());
            let r = t.getPosition(), o = t.getSize(), s = i.screen.getCursorScreenPoint(),
                a = i.screen.getDisplayNearestPoint(s), l = a.size.width, d = a.size.height, c = o[0], u = o[1];
            r[0] + c > l && (c = l - r[0]), r[1] + u > d && (u = d - r[1]);
            let f = r[0] + (c - e) / 2, h = r[1] + (u - n) / 2;
            return f < 0 ? f = 0 : f > l - e && (f = l - e), h < 0 ? h = 0 : h > d - n && (h = d - n), [Math.round(f), Math.round(h)]
        }, e.centerWnd = function (e, n, t) {
            do {
                if (!e || !n) break;
                let r = e.getNativeWindowHandle().readUIntLE(0, 4);
                if (!r) break;
                let o = n.getPosition(), s = n.getSize(), a = e.getSize(), l = i.screen.getCursorScreenPoint(),
                    d = i.screen.getDisplayNearestPoint(l), c = d.scaleFactor, u = d.size.width, f = d.size.height,
                    h = s[0], p = s[1];
                o[0] + h > u && (h = u - o[0]), o[1] + p > f && (p = f - o[1]);
                let m = o[0] + (h - a[0]) / 2, g = o[1] + (p - a[1]) / 2;
                m < 0 ? m = 0 : m > u - a[0] && (m = u - a[0]), g < 0 ? g = 0 : g > f - a[1] && (g = f - a[1]), t.setWindowPos(r, 0, m * c, g * c, 0, 0, 5)
            } while (0)
        }, e.bringWindowToTop = function (e) {
            e || (e = i.remote.getCurrentWindow().getNativeWindowHandle().readUIntLE(0, 4));
            i.ipcRenderer.send(r.ThunderChannelList.channelMRBringWindowToTop, e)
        }
    }(n.ThunderWindowNS || (n.ThunderWindowNS = {}))
}, function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {value: !0});
    const i = t(4), r = t(8), o = t(9), s = t(14), a = t(57);
    !function (e) {
        let n;
        !function (e) {
            e[e.Unknown = -1] = "Unknown", e[e.Success = 0] = "Success", e[e.FunctionNotExist = 1] = "FunctionNotExist", e[e.ParamaterError = 2] = "ParamaterError", e[e.CallFailed = 3] = "CallFailed"
        }(n = e.NativeCallErrorCode || (e.NativeCallErrorCode = {}));

        class t {
            constructor(e, n, t) {
                this.maxId = e, this.minId = n, this.invalidId = t
            }

            generateId() {
                return this.minId === this.maxId ? this.invalidId : this.minId++
            }

            isInvalidId(e) {
                return e === this.invalidId
            }
        }

        e.IdGenerator = t;
        const l = 0;
        e.idGenerator = new t(1e7, 1, l);

        class d {
            constructor() {
                this.jsCallbacks = new Map, this.eventJsCallbakcs = new Map, this.jsRegisterFunctions = new Map, this.targetCommunitorInfo = a.CommonIPCRenderer.rendererCommunicator.getCommunicatorInfoByContext(s.CommonIPCBase.mainRendererContext), this.bindMsgListeners(), this.notifyNativeCallReady()
            }

            CallNativeFunction(n, ...t) {
                do {
                    if (i.isNullOrUndefined(n) || 0 === n.length) {
                        r.error("funcName is empty");
                        break
                    }
                    r.information("funcName = ", n), this.printArgs(t);
                    let s = l;
                    for (let n = 0; n < t.length; ++n) if (i.isFunction(t[n])) {
                        let i = e.idGenerator.generateId(), r = t[n];
                        this.jsCallbacks.set(i, r), n === t.length - 1 ? (s = i, t.pop()) : t[n] = i
                    }
                    a.CommonIPCRenderer.rendererCommunicator.sendMessageToRenderer(this.targetCommunitorInfo.id, {
                        name: o.CommonIPCMessage.msgNCCallNativeFunction,
                        args: [n, s].concat(t)
                    })
                } while (0)
            }

            AttachNativeEvent(n, t) {
                let o = void 0;
                do {
                    if (i.isNullOrUndefined(n) || 0 === n.length) {
                        r.error("eventName is empty");
                        break
                    }
                    if (i.isNullOrUndefined(t)) {
                        r.error("callback is empty");
                        break
                    }
                    let s = e.idGenerator.generateId();
                    if (e.idGenerator.isInvalidId(s)) {
                        r.error("id error");
                        break
                    }
                    if (this.eventJsCallbakcs.has(n)) this.eventJsCallbakcs.get(n).set(s, t); else {
                        let e = new Map;
                        e.set(s, t), this.eventJsCallbakcs.set(n, e)
                    }
                    o = s
                } while (0);
                return o
            }

            DetachNativeEvent(e, n) {
                do {
                    if (i.isNullOrUndefined(e) || 0 === e.length) {
                        r.error("eventName is empty");
                        break
                    }
                    if (i.isNullOrUndefined(n)) {
                        r.error("callback is empty");
                        break
                    }
                    if (!this.eventJsCallbakcs.has(e)) {
                        r.error(`event: ${e} doesnot have listener`);
                        break
                    }
                    if (!this.eventJsCallbakcs.get(e).has(n)) {
                        r.error(`event: ${e} doesnot have the listener of id=${n}`);
                        break
                    }
                    this.eventJsCallbakcs.get(e).delete(n)
                } while (0)
            }

            CheckNativeFunction(n, t) {
                do {
                    if (i.isNullOrUndefined(n) || 0 === n.length) {
                        r.error("funcName is empty");
                        break
                    }
                    if (i.isNullOrUndefined(t)) {
                        r.error("callback is empty");
                        break
                    }
                    r.information("funcName = ", n);
                    let s = e.idGenerator.generateId();
                    this.jsCallbacks.set(s, t), a.CommonIPCRenderer.rendererCommunicator.sendMessageToRenderer(this.targetCommunitorInfo.id, {
                        name: o.CommonIPCMessage.msgNCCheckNativeFunction,
                        args: [n, s]
                    })
                } while (0)
            }

            RegisterJSFunction(e, t) {
                let o = n.ParamaterError;
                do {
                    if (i.isNullOrUndefined(e) || 0 === e.length) {
                        r.error("funcName is empty");
                        break
                    }
                    if (i.isNullOrUndefined(t)) {
                        r.error("jsFunc is empty");
                        break
                    }
                    this.jsRegisterFunctions.set(e, t), o = n.Success
                } while (0);
                return o
            }

            bindMsgListeners() {
                a.CommonIPCRenderer.rendererCommunicator.onMessage(o.CommonIPCMessage.msgNCCallJsFunctionById, e => {
                    this.handleCallJsFunctionById(e.msg.args)
                }), a.CommonIPCRenderer.rendererCommunicator.onMessage(o.CommonIPCMessage.msgNCCallJsFunctionByName, e => {
                    this.handleCallJsFunctionByName(e.msg.args)
                }), a.CommonIPCRenderer.rendererCommunicator.onMessage(o.CommonIPCMessage.msgNCNativeFireEvent, e => {
                    this.handleNativeFireEvent(e.msg.args)
                })
            }

            handleCallJsFunctionById(n) {
                do {
                    let t = n[0];
                    if (!i.isNumber(t)) {
                        r.error(`id error id = ${t}`);
                        break
                    }
                    if (e.idGenerator.isInvalidId(t)) {
                        r.error(`id = ${t} invalid`);
                        break
                    }
                    if (!this.jsCallbacks.has(t)) {
                        r.error(`jsCallbacks[${t}] is null`);
                        break
                    }
                    n.splice(0, 1), this.jsCallbacks.get(t).apply(null, n)
                } while (0)
            }

            handleCallJsFunctionByName(e) {
                do {
                    let n = e[0];
                    if (!i.isString(n)) {
                        r.error(`funcName error funcName = ${n}`);
                        break
                    }
                    if (!this.jsRegisterFunctions.has(n)) {
                        r.error(`jsRegisterFunctions[${n}] is null`);
                        break
                    }
                    e.splice(0, 1), this.jsRegisterFunctions.get(n).apply(null, e)
                } while (0)
            }

            handleNativeFireEvent(e) {
                do {
                    let n = e[0];
                    if (!i.isString(n)) {
                        r.warning(`eventName error eventName = ${n}`);
                        break
                    }
                    if (!this.eventJsCallbakcs.has(n)) {
                        r.warning(`eventJsCallbakcs[${n}] is null`);
                        break
                    }
                    e.shift(), this.eventJsCallbakcs.get(n).forEach((n, t, o) => {
                        r.information(`value = ${n}, key = ${t}, map = ${o}`), i.isNullOrUndefined(n) || n.apply(null, e)
                    })
                } while (0)
            }

            notifyNativeCallReady() {
                a.CommonIPCRenderer.rendererCommunicator.sendMessageToRenderer(this.targetCommunitorInfo.id, {
                    name: o.CommonIPCMessage.msgNCNativeCallReady,
                    args: [a.CommonIPCRenderer.rendererCommunicator.getCommunicatorInfo()]
                })
            }

            printArgs(e) {
                for (let n in e) r.information(`index ${n} = `, e[n])
            }
        }

        e.NativeCallImpl = d, e.nativeCall = new d
    }(n.NativeCallModule || (n.NativeCallModule = {}))
}, function (e, n, t) {
    "use strict";
    e.exports = function (e, n) {
        return function () {
            for (var t = new Array(arguments.length), i = 0; i < t.length; i++) t[i] = arguments[i];
            return e.apply(n, t)
        }
    }
}, function (e, n, t) {
    "use strict";
    var i = t(19);
    e.exports = function (e, n, t) {
        var r = t.config.validateStatus;
        t.status && r && !r(t.status) ? n(i("Request failed with status code " + t.status, t.config, null, t.request, t)) : e(t)
    }
}, function (e, n, t) {
    "use strict";
    e.exports = function (e, n, t, i, r) {
        return e.config = n, t && (e.code = t), e.request = i, e.response = r, e
    }
}, function (e, n, t) {
    "use strict";
    var i = t(3);

    function r(e) {
        return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }

    e.exports = function (e, n, t) {
        if (!n) return e;
        var o;
        if (t) o = t(n); else if (i.isURLSearchParams(n)) o = n.toString(); else {
            var s = [];
            i.forEach(n, function (e, n) {
                null !== e && void 0 !== e && (i.isArray(e) ? n += "[]" : e = [e], i.forEach(e, function (e) {
                    i.isDate(e) ? e = e.toISOString() : i.isObject(e) && (e = JSON.stringify(e)), s.push(r(n) + "=" + r(e))
                }))
            }), o = s.join("&")
        }
        return o && (e += (-1 === e.indexOf("?") ? "?" : "&") + o), e
    }
}, function (e, n, t) {
    "use strict";
    var i = t(3), r = t(25), o = t(27), s = t(29), a = t(30), l = t(31).http, d = t(31).https, c = t(32), u = t(82),
        f = t(83), h = t(19), p = t(26);
    e.exports = function (e) {
        return new Promise(function (n, t) {
            var m, g = e.data, w = e.headers;
            if (w["User-Agent"] || w["user-agent"] || (w["User-Agent"] = "axios/" + f.version), g && !i.isStream(g)) {
                if (Buffer.isBuffer(g)) ; else if (i.isArrayBuffer(g)) g = new Buffer(new Uint8Array(g)); else {
                    if (!i.isString(g)) return t(h("Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream", e));
                    g = new Buffer(g, "utf-8")
                }
                w["Content-Length"] = g.length
            }
            var v = void 0;
            e.auth && (v = (e.auth.username || "") + ":" + (e.auth.password || ""));
            var C = c.parse(e.url), y = C.protocol || "http:";
            if (!v && C.auth) {
                var _ = C.auth.split(":");
                v = (_[0] || "") + ":" + (_[1] || "")
            }
            v && delete w.Authorization;
            var b = "https:" === y, T = b ? e.httpsAgent : e.httpAgent, S = {
                path: o(C.path, e.params, e.paramsSerializer).replace(/^\?/, ""),
                method: e.method,
                headers: w,
                agent: T,
                auth: v
            };
            e.socketPath ? S.socketPath = e.socketPath : (S.hostname = C.hostname, S.port = C.port);
            var k, R = e.proxy;
            if (!R && !1 !== R) {
                var M = y.slice(0, -1) + "_proxy", N = process.env[M] || process.env[M.toUpperCase()];
                if (N) {
                    var x = c.parse(N);
                    if (R = {host: x.hostname, port: x.port}, x.auth) {
                        var E = x.auth.split(":");
                        R.auth = {username: E[0], password: E[1]}
                    }
                }
            }
            if (R && (S.hostname = R.host, S.host = R.host, S.headers.host = C.hostname + (C.port ? ":" + C.port : ""), S.port = R.port, S.path = y + "//" + C.hostname + (C.port ? ":" + C.port : "") + S.path, R.auth)) {
                var W = new Buffer(R.auth.username + ":" + R.auth.password, "utf8").toString("base64");
                S.headers["Proxy-Authorization"] = "Basic " + W
            }
            e.transport ? k = e.transport : 0 === e.maxRedirects ? k = b ? a : s : (e.maxRedirects && (S.maxRedirects = e.maxRedirects), k = b ? d : l), e.maxContentLength && e.maxContentLength > -1 && (S.maxBodyLength = e.maxContentLength);
            var D = k.request(S, function (i) {
                if (!D.aborted) {
                    clearTimeout(m), m = null;
                    var o = i;
                    switch (i.headers["content-encoding"]) {
                        case"gzip":
                        case"compress":
                        case"deflate":
                            o = o.pipe(u.createUnzip()), delete i.headers["content-encoding"]
                    }
                    var s = i.req || D, a = {
                        status: i.statusCode,
                        statusText: i.statusMessage,
                        headers: i.headers,
                        config: e,
                        request: s
                    };
                    if ("stream" === e.responseType) a.data = o, r(n, t, a); else {
                        var l = [];
                        o.on("data", function (n) {
                            l.push(n), e.maxContentLength > -1 && Buffer.concat(l).length > e.maxContentLength && t(h("maxContentLength size of " + e.maxContentLength + " exceeded", e, null, s))
                        }), o.on("error", function (n) {
                            D.aborted || t(p(n, e, null, s))
                        }), o.on("end", function () {
                            var i = Buffer.concat(l);
                            "arraybuffer" !== e.responseType && (i = i.toString("utf8")), a.data = i, r(n, t, a)
                        })
                    }
                }
            });
            D.on("error", function (n) {
                D.aborted || t(p(n, e, null, D))
            }), e.timeout && !m && (m = setTimeout(function () {
                D.abort(), t(h("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", D))
            }, e.timeout)), e.cancelToken && e.cancelToken.promise.then(function (e) {
                D.aborted || (D.abort(), t(e))
            }), i.isStream(g) ? g.pipe(D) : D.end(g)
        })
    }
}, function (e, n) {
    e.exports = require("http")
}, function (e, n) {
    e.exports = require("https")
}, function (e, n, t) {
    var i = t(32), r = t(29), o = t(30), s = t(73), a = t(74).Writable, l = t(75)("follow-redirects"),
        d = {GET: !0, HEAD: !0, OPTIONS: !0, TRACE: !0}, c = Object.create(null);

    function u(e, n) {
        a.call(this), e.headers = e.headers || {}, this._options = e, this._redirectCount = 0, this._requestBodyLength = 0, this._requestBodyBuffers = [], n && this.on("response", n);
        var t = this;
        if (this._onNativeResponse = function (e) {
            t._processResponse(e)
        }, !e.pathname && e.path) {
            var i = e.path.indexOf("?");
            i < 0 ? e.pathname = e.path : (e.pathname = e.path.substring(0, i), e.search = e.path.substring(i))
        }
        this._performRequest()
    }

    function f(e) {
        var n = {maxRedirects: 21, maxBodyLength: 10485760}, t = {};
        return Object.keys(e).forEach(function (r) {
            var o = r + ":", a = t[o] = e[r], d = n[r] = Object.create(a);
            d.request = function (e, r) {
                return "string" == typeof e ? (e = i.parse(e)).maxRedirects = n.maxRedirects : e = Object.assign({
                    protocol: o,
                    maxRedirects: n.maxRedirects,
                    maxBodyLength: n.maxBodyLength
                }, e), e.nativeProtocols = t, s.equal(e.protocol, o, "protocol mismatch"), l("options", e), new u(e, r)
            }, d.get = function (e, n) {
                var t = d.request(e, n);
                return t.end(), t
            }
        }), n
    }

    ["abort", "aborted", "error", "socket", "timeout"].forEach(function (e) {
        c[e] = function (n) {
            this._redirectable.emit(e, n)
        }
    }), u.prototype = Object.create(a.prototype), u.prototype.write = function (e, n, t) {
        this._requestBodyLength + e.length <= this._options.maxBodyLength ? (this._requestBodyLength += e.length, this._requestBodyBuffers.push({
            data: e,
            encoding: n
        }), this._currentRequest.write(e, n, t)) : (this.emit("error", new Error("Request body larger than maxBodyLength limit")), this.abort())
    }, u.prototype.end = function (e, n, t) {
        var i = this._currentRequest;
        e ? this.write(e, n, function () {
            i.end(null, null, t)
        }) : i.end(null, null, t)
    }, u.prototype.setHeader = function (e, n) {
        this._options.headers[e] = n, this._currentRequest.setHeader(e, n)
    }, u.prototype.removeHeader = function (e) {
        delete this._options.headers[e], this._currentRequest.removeHeader(e)
    }, ["abort", "flushHeaders", "getHeader", "setNoDelay", "setSocketKeepAlive", "setTimeout"].forEach(function (e) {
        u.prototype[e] = function (n, t) {
            return this._currentRequest[e](n, t)
        }
    }), ["aborted", "connection", "socket"].forEach(function (e) {
        Object.defineProperty(u.prototype, e, {
            get: function () {
                return this._currentRequest[e]
            }
        })
    }), u.prototype._performRequest = function () {
        var e = this._options.protocol, n = this._options.nativeProtocols[e];
        if (this._options.agents) {
            var t = e.substr(0, e.length - 1);
            this._options.agent = this._options.agents[t]
        }
        var r = this._currentRequest = n.request(this._options, this._onNativeResponse);
        for (var o in this._currentUrl = i.format(this._options), r._redirectable = this, c) o && r.on(o, c[o]);
        if (this._isRedirect) {
            var s = this._requestBodyBuffers;
            !function e() {
                if (0 !== s.length) {
                    var n = s.pop();
                    r.write(n.data, n.encoding, e)
                } else r.end()
            }()
        }
    }, u.prototype._processResponse = function (e) {
        var n = e.headers.location;
        if (n && !1 !== this._options.followRedirects && e.statusCode >= 300 && e.statusCode < 400) {
            if (++this._redirectCount > this._options.maxRedirects) return void this.emit("error", new Error("Max redirects exceeded."));
            var t, r = this._options.headers;
            if (307 !== e.statusCode && !(this._options.method in d)) for (t in this._options.method = "GET", this._requestBodyBuffers = [], r) /^content-/i.test(t) && delete r[t];
            if (!this._isRedirect) for (t in r) /^host$/i.test(t) && delete r[t];
            var o = i.resolve(this._currentUrl, n);
            l("redirecting to", o), Object.assign(this._options, i.parse(o)), this._isRedirect = !0, this._performRequest()
        } else e.responseUrl = this._currentUrl, this.emit("response", e), this._requestBodyBuffers = []
    }, e.exports = f({http: r, https: o}), e.exports.wrap = f
}, function (e, n) {
    e.exports = require("url")
}, function (e, n, t) {
    function i(e) {
        var t;

        function i() {
            if (i.enabled) {
                var e = i, r = +new Date, o = r - (t || r);
                e.diff = o, e.prev = t, e.curr = r, t = r;
                for (var s = new Array(arguments.length), a = 0; a < s.length; a++) s[a] = arguments[a];
                s[0] = n.coerce(s[0]), "string" != typeof s[0] && s.unshift("%O");
                var l = 0;
                s[0] = s[0].replace(/%([a-zA-Z%])/g, function (t, i) {
                    if ("%%" === t) return t;
                    l++;
                    var r = n.formatters[i];
                    if ("function" == typeof r) {
                        var o = s[l];
                        t = r.call(e, o), s.splice(l, 1), l--
                    }
                    return t
                }), n.formatArgs.call(e, s), (i.log || n.log || console.log.bind(console)).apply(e, s)
            }
        }

        return i.namespace = e, i.enabled = n.enabled(e), i.useColors = n.useColors(), i.color = function (e) {
            var t, i = 0;
            for (t in e) i = (i << 5) - i + e.charCodeAt(t), i |= 0;
            return n.colors[Math.abs(i) % n.colors.length]
        }(e), i.destroy = r, "function" == typeof n.init && n.init(i), n.instances.push(i), i
    }

    function r() {
        var e = n.instances.indexOf(this);
        return -1 !== e && (n.instances.splice(e, 1), !0)
    }

    (n = e.exports = i.debug = i.default = i).coerce = function (e) {
        return e instanceof Error ? e.stack || e.message : e
    }, n.disable = function () {
        n.enable("")
    }, n.enable = function (e) {
        var t;
        n.save(e), n.names = [], n.skips = [];
        var i = ("string" == typeof e ? e : "").split(/[\s,]+/), r = i.length;
        for (t = 0; t < r; t++) i[t] && ("-" === (e = i[t].replace(/\*/g, ".*?"))[0] ? n.skips.push(new RegExp("^" + e.substr(1) + "$")) : n.names.push(new RegExp("^" + e + "$")));
        for (t = 0; t < n.instances.length; t++) {
            var o = n.instances[t];
            o.enabled = n.enabled(o.namespace)
        }
    }, n.enabled = function (e) {
        if ("*" === e[e.length - 1]) return !0;
        var t, i;
        for (t = 0, i = n.skips.length; t < i; t++) if (n.skips[t].test(e)) return !1;
        for (t = 0, i = n.names.length; t < i; t++) if (n.names[t].test(e)) return !0;
        return !1
    }, n.humanize = t(77), n.instances = [], n.names = [], n.skips = [], n.formatters = {}
}, function (e, n, t) {
    "use strict";
    e.exports = function (e) {
        return !(!e || !e.__CANCEL__)
    }
}, function (e, n, t) {
    "use strict";

    function i(e) {
        this.message = e
    }

    i.prototype.toString = function () {
        return "Cancel" + (this.message ? ": " + this.message : "")
    }, i.prototype.__CANCEL__ = !0, e.exports = i
}, function (e, n, t) {
    t(37), t(38), e.exports = t(39)
}, function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {value: !0});
    const i = t(0), r = t(2);
    global.__rootDir = i.app.getAppPath(), global.__profilesDir = r.join(__rootDir, "../../../profiles")
}, function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {value: !0});
    const i = t(2), r = t(4), o = t(1), s = t(5).default(i.join(__rootDir, "../bin/ThunderHelper.node"));
    process.env.TL_ENABLE = "0", "console" === process.env.TL_OUTPUT ? o.default.outputLogger = o.outputLoggerConsole : o.default.outputLogger = function () {
        function e(e) {
            return function (...n) {
                s.printEtwLog(e, function (...e) {
                    return e.map(e => r.inspect(e)).join(" ").replace(/%/g, "%%")
                }(...n))
            }
        }

        return {
            [o.LogLevel.Critical]: e(o.LogLevel.Critical),
            [o.LogLevel.Error]: e(o.LogLevel.Error),
            [o.LogLevel.Warning]: e(o.LogLevel.Warning),
            [o.LogLevel.Information]: e(o.LogLevel.Information),
            [o.LogLevel.Verbose]: e(o.LogLevel.Verbose)
        }
    }()
}, function (e, n, t) {
    "use strict";
    var i = this && this.__awaiter || function (e, n, t, i) {
        return new (t || (t = Promise))(function (r, o) {
            function s(e) {
                try {
                    l(i.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    l(i.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                e.done ? r(e.value) : new t(function (n) {
                    n(e.value)
                }).then(s, a)
            }

            l((i = i.apply(e, n || [])).next())
        })
    };
    Object.defineProperty(n, "__esModule", {value: !0}), t(40).CommonIPCMain.mainCommunicator.connect(), t(20);
    const r = t(44);
    r.PerformanceMonitorStatNS.init("browser"), r.PerformanceMonitorStatNS.trackColdStartUpEvent("entrance_in_main").catch(), t(45);
    const o = t(0), s = t(10), a = t(1), l = t(6), d = t(11), c = t(46), u = t(2), f = t(5), h = t(47), p = t(15),
        m = t(48), g = t(49), w = t(50), v = t(51), C = t(12), y = t(53), _ = t(58), b = t(91);
    o.app.disableHardwareAcceleration();
    let T = u.join(__rootDir, "..\\..\\Thunder.exe");
    o.app.setAppUserModelId(T);
    const S = f.default(u.join(__rootDir, "../bin/ThunderHelper.node")), k = a.default.getLogger("Thunder.Main");
    k.information("trackShow maininterfaceEffectivelyshow");
    let R = null, M = null, N = null, x = S.getTickCount(), E = c.HistoryDataNS.getMainWndSizeHistoryData(), W = !1,
        D = !0, P = 1020, I = 1020, O = 650, L = global;

    function F() {
        if (null !== M) {
            let e = M.getBounds(), n = e.x + Math.round((e.width - I) / 2), t = e.y + Math.round((e.height - O) / 2);
            M.setBounds({x: n, y: t, width: I, height: O})
        }
    }

    function A() {
        if (null !== M) {
            let e = M.getNativeWindowHandle().readUIntLE(0, 4);
            S.showWindow(e, b.showCmd.SW_SHOWMAXIMIZED)
        }
    }

    L.mainRendererWindow = null, L.suspensionWindow = null, L.silentMainWnd = !1, L.silentSupsWnd = !1, function () {
        for (let e = 0; e < process.argv.length; e++) "--autotest:startup" === process.argv[e] ? W = !0 : "-StartType:Install" === process.argv[e] ? (E.exitState = "normal", E.width = P, E.height = 650) : "-silent" === process.argv[e] ? L.silentMainWnd = !0 : "-nofloatwnd" === process.argv[e] && (L.silentSupsWnd = !0)
    }(), o.ipcMain.on("closeMainWindow", (e, n) => i(this, void 0, void 0, function* () {
        null !== M && ("BossKey" === n ? M.isVisible() ? (V("BossKey", "BossKeyState", !0), L.suspensionWindow.hide(), M.minimize(), M.hide(), R.destroy()) : (V("BossKey", "BossKeyState", !1), M.isMinimized() && M.restore(), M.show(), q(), G("ConfigFloatPanel", "FloatPanelValue", "0").then(e => {
            "0" === e && L.suspensionWindow.show()
        }).catch()) : (M.minimize(), M.hide()))
    })), o.ipcMain.on("maximizeMainWindow", () => {
        A()
    }), o.ipcMain.on("restoreMainWindow", () => {
        null !== M && ("max" === E.exitState && !0 === D ? (D = !1, F()) : (D = !1, M.restore()))
    }), o.ipcMain.on("minizeMainWindow", () => {
        null !== M && M.minimize()
    });
    let U = [];
    o.ipcMain.on(l.ThunderChannelList.channelRMProcessSend, (e, n) => {
        U.push(n)
    }), setInterval(() => {
        for (let e = U.length - 1; e >= 0; --e) try {
            process.kill(U[e], 0)
        } catch (e) {
            c.HistoryDataNS.setExitType("normal"), o.app.quit()
        }
    }, 1e3);
    const B = "development" === process.env.RUN_ENV ? "http://localhost:9080/main-renderer/" : `file:///${__dirname}/main-renderer/index.html`,
        j = `${__rootDir}/out/common-preload.js`;

    function z() {
        let e = E.width, n = E.height;
        (P = o.screen.getPrimaryDisplay().size.width) <= 1024 ? (P = 356, e = 356) : P = 356, M = new o.BrowserWindow({
            width: e,
            height: n,
            minWidth: P,
            minHeight: 316,
            frame: !1,
            show: !1,
            webPreferences: {devTools: !0, preload: j, webSecurity: !1}
        }), v.loginUIObj.init(M, S), m.default(M, S), _.NewTaskDlgsManagerNS.init(M, S), g.default(M), w.default(M, S), L.mainRendererWindow = M, M.loadURL(B), S.initGDIPlus(), M.on("ready-to-show", () => {
            _.NewTaskDlgsManagerNS.setReady(!0), r.PerformanceMonitorStatNS.trackColdStartUpEvent("ready_to_show_of_mainwindow_in_main").catch(), "max" === E.exitState && A();
            let e = o.nativeImage.createFromPath(`${__rootDir}/static/thunderx.ico`);
            M.setIcon(e), q(), k.information("endThunderStartProcess"), S.endThunderStartProcess(), c.HistoryDataNS.setExitType(""), S.initLiveUD();
            let n = "areo=0";
            S.isDwmCompositionEnabled() && (n = "areo=1", function () {
                let e = o.screen.getPrimaryDisplay().workAreaSize.width - 500;
                N = new o.BrowserWindow({
                    transparent: !0,
                    frame: !1,
                    height: 540,
                    resizable: !0,
                    width: 808,
                    skipTaskbar: !0,
                    alwaysOnTop: !0,
                    show: !1,
                    x: e,
                    y: -160,
                    webPreferences: {preload: j}
                }), L.suspensionWindow = N, N.loadURL(H), N.on("ready-to-show", () => {
                })
            }()), S.isDropShadowEnabled() ? n += ",shadow=1" : n += ",shadow=0", d.XLStatNS.trackEvent("core_event", "system_setting", "", 0, 0, 0, 0, n), W && s.writeFile("autoteststartup.txt", new Date, e => {
                e && k.information(e)
            }), setTimeout(() => i(this, void 0, void 0, function* () {
                yield K(), setInterval(() => i(this, void 0, void 0, function* () {
                    yield K()
                }), 6e5)
            }), 5e3), L.silentMainWnd ? (M.minimize(), M.hide()) : (M.isMinimized() && M.restore(), M.show(), p.ToolsUtilitiesAWNS.setForegroundWindow(S, M))
        }), M.on("close", e => {
            let n = c.HistoryDataNS.getExitType();
            k.information("close:exitType = ", n), "normal" !== n && (null !== M && (M.minimize(), M.hide()), e.preventDefault())
        }), M.on("show", () => {
            L.silentMainWnd = !1, L.silentSupsWnd = !1
        }), M.on("unmaximize", () => {
            "max" === E.exitState && !0 === D && (D = !1, F())
        }), h.MainWindowCoreEventStatNS.watch(S, M)
    }

    const H = "development" === process.env.RUN_ENV ? "http://localhost:9080/suspension-renderer/" : `file:///${__dirname}/suspension-renderer/index.html`;

    function G(e, n, t) {
        return i(this, void 0, void 0, function* () {
            return new Promise(i => {
                do {
                    if (null === M) {
                        i(t);
                        break
                    }
                    o.ipcMain.once(l.ThunderChannelList.channelRMGetConfigValueResolve, (e, n) => {
                        i(n)
                    }), o.ipcMain.once(l.ThunderChannelList.channelRMGetConfigValueReject, () => {
                        i(t)
                    }), M.webContents.send(l.ThunderChannelList.channelMRGetConfigValue, e, n, t)
                } while (0)
            })
        })
    }

    function V(e, n, t) {
        do {
            if (null === M) break;
            M.webContents.send(l.ThunderChannelList.channelMRSetConfigValue, e, n, t)
        } while (0)
    }

    function q() {
        k.information(`${__rootDir}/static/thunderx.ico`), null !== (R = new o.Tray(`${__rootDir}/static/thunderx.ico`)) && (k.information("settooltip"), R.setToolTip("迅雷"), R.on("click", () => {
            if (null !== M) {
                let e = M.isMinimized();
                if (!e && M.isVisible()) {
                    let e = "status=hidemain";
                    d.XLStatNS.trackEvent("client_quick", "tuopan_click_main_status_get", "", 0, 0, 0, 0, e), M.minimize(), M.hide()
                } else {
                    let n = "status=showmain";
                    d.XLStatNS.trackEvent("client_quick", "tuopan_click_main_status_get", "", 0, 0, 0, 0, n), e ? (M.restore(), M.show()) : M.show()
                }
            }
        }), R.on("right-click", () => i(this, void 0, void 0, function* () {
            let e = yield G("ConfigFloatPanel", "FloatPanelValue", "0"), n = !0;
            1 !== Number(e) && 2 !== Number(e) || (n = !1);
            let t = !1;
            1 === Number(e) && (t = !0);
            let i = !1;
            2 === Number(e) && (i = !0);
            let r = [{
                type: "normal", label: "新建任务", icon: `${__rootDir}/static/icon/newtask.png`, click() {
                    d.XLStatNS.trackEvent("client_quick", "tuopan_rk_click", "", 0, 0, 0, 0, "button=create"), M.webContents.send(l.ThunderChannelList.channelMRTrayMenuClick, "-task:newtask", "tray_menu")
                }
            }, {
                type: "normal", label: "开始全部任务", icon: `${__rootDir}/static/icon/startalltask.png`, click() {
                    d.XLStatNS.trackEvent("client_quick", "tuopan_rk_click", "", 0, 0, 0, 0, "button=start"), M.webContents.send(l.ThunderChannelList.channelMRTrayMenuClick, "-task:startall")
                }
            }, {
                type: "normal", label: "暂停全部任务", icon: `${__rootDir}/static/icon/stoptask.png`, click() {
                    d.XLStatNS.trackEvent("client_quick", "tuopan_rk_click", "", 0, 0, 0, 0, "button=pause"), M.webContents.send(l.ThunderChannelList.channelMRTrayMenuClick, "-task:pauseall")
                }
            }, {
                type: "normal", label: "退出", icon: `${__rootDir}/static/icon/exit.png`, click() {
                    d.XLStatNS.trackEvent("client_quick", "tuopan_rk_click", "", 0, 0, 0, 0, "button=exit"), M.webContents.send(l.ThunderChannelList.channelMRTrayMenuClick, "-task:quitprocess")
                }
            }];
            null !== N && r.splice(3, 0, {
                type: "submenu",
                label: "悬浮窗显示设置",
                submenu: [{
                    type: "checkbox", label: "显示悬浮窗", checked: n, click() {
                        do {
                            if (n) break;
                            let e = "result=show";
                            d.XLStatNS.trackEvent("client_quick", "tuopan_rk_float_monitor_setting", "", 0, 0, 0, 0, e), V("ConfigFloatPanel", "FloatPanelValue", "0")
                        } while (0)
                    }
                }, {
                    type: "checkbox", label: "下载时显示悬浮窗", checked: t, click() {
                        do {
                            if (t) break;
                            let e = "result=undl_hide";
                            d.XLStatNS.trackEvent("client_quick", "tuopan_rk_float_monitor_setting", "", 0, 0, 0, 0, e), V("ConfigFloatPanel", "FloatPanelValue", "1")
                        } while (0)
                    }
                }, {
                    type: "checkbox", label: "隐藏悬浮窗", checked: i, click() {
                        d.XLStatNS.trackEvent("client_quick", "tuopan_rk_float_monitor_setting", "", 0, 0, 0, 0, "result=hide"), V("ConfigFloatPanel", "FloatPanelValue", "2")
                    }
                }]
            }), M.isVisible() && !M.isMinimized() ? r.splice(0, 0, {
                label: "隐藏主界面", type: "normal", click() {
                    d.XLStatNS.trackEvent("client_quick", "tuopan_rk_click", "", 0, 0, 0, 0, "button=hidemain"), M.minimize(), M.hide()
                }
            }) : r.splice(0, 0, {
                label: "显示主界面", type: "normal", click() {
                    d.XLStatNS.trackEvent("client_quick", "tuopan_rk_click", "", 0, 0, 0, 0, "button=showmain"), M.isMinimized() && M.restore(), M.show()
                }
            });
            let s = o.Menu.buildFromTemplate(r);
            R.popUpContextMenu(s, y.WindowPreferenceNS.getWindowPreference(!0))
        })))
    }

    function $(e) {
        return i(this, void 0, void 0, function* () {
            let n = [];
            if (yield function e(n, t) {
                return i(this, void 0, void 0, function* () {
                    do {
                        if (!n || !t || t.length > 50) break;
                        if (!(yield C.FileSystemAWNS.existsAW(n))) break;
                        let i = yield C.FileSystemAWNS.lstatAW(n);
                        if (i && i.isDirectory()) {
                            let i = yield C.FileSystemAWNS.readdirAW(n);
                            for (let r = 0; r < i.length; r++) yield e(u.join(n, i[r]), t)
                        } else i.size < 5242880 && t.push(n)
                    } while (0)
                })
            }(e, n), n.length > 0) for (let e = 0; e < n.length; ++e) S.asynPreLoadFile(n[e])
        })
    }

    function K() {
        return i(this, void 0, void 0, function* () {
            let e = ["bt-task-renderer", "message-box-renderer", "modifier-userinfo-renderer", "new-task-renderer", "notification-renderer", "personal-info-renderer", "pre-new-task-renderer", "retry-login-renderer", "css/bt-task-renderer", "css/message-box-renderer", "css/modifier-userinfo-renderer", "css/new-task-renderer", "css/notification-renderer", "css/personal-info-renderer", "css/pre-new-task-renderer", "css/retry-login-renderer"];
            for (let n = 0; n < e.length; ++n) yield $(u.join(__dirname, e[n]))
        })
    }

    o.app.on("ready", () => {
        r.PerformanceMonitorStatNS.trackColdStartUpEvent("ready_of_app_in_main").catch(), z()
    }), o.app.on("will-quit", () => {
        !function (e) {
            do {
                if (x <= 0) break;
                let n = (S.getTickCount() - x) / 1e3;
                if (n < 0) break;
                void 0 === e && (e = "manual");
                let t = "exitType=" + e + ",online_time=" + n;
                k.information("client_all_online_time", t), d.XLStatNS.trackEvent("core_event", "client_all_online_time", "", 0, 0, 0, 0, t)
            } while (0)
        }(), global.xlDesktopApplicationSolution.GetPerformanceMonitorReport().uninitPerformanceMonitor(), o.globalShortcut.unregister("ctrl+f12"), o.globalShortcut.unregister("Alt+D"), o.globalShortcut.unregisterAll(), k.information("main will quit"), S.uninitGDIPlus(), R.destroy()
    }), o.app.on("window-all-closed", () => {
        "darwin" !== process.platform && o.app.quit()
    }), process.on("SIGINT", () => {
        c.HistoryDataNS.setExitType("normal"), o.app.quit()
    }), o.ipcMain.on(l.ThunderChannelList.channelRMFileCopy, (e, n, t) => {
        k.information("asynCopyFile", n, t), S.asynCopyFile(n, t, (n, t) => {
            e.sender.send(l.ThunderChannelList.channelMRFileCopyResult, n, t)
        })
    }), o.ipcMain.on(l.ThunderChannelList.channelRMFileMove, (e, n, t, i) => {
        k.information("asynMoveFile", n, t), S.asynMoveFile(n, t, (n, t) => {
            e.sender.send(l.ThunderChannelList.channelMRFileMoveResult, n, t, i)
        })
    }), o.ipcMain.on(l.ThunderChannelList.channelMRBringWindowToTop, (e, n) => {
        k.information("bringWindowToTop", n), S.bringWindowToTop(n)
    }), o.ipcMain.on(l.ThunderChannelList.channelRMSetProgressBar, (e, n) => {
        M.setProgressBar(n)
    }), o.ipcMain.on(l.ThunderChannelList.channelRMSetFoucs, () => {
        k.information("setMainWindowFocus"), M.focus()
    }), o.ipcMain.on("onOpenExecute", (e, n, t, i) => {
        if (null !== n && void 0 !== n && "" !== n) {
            null !== M && (M.isMinimized() && M.restore(), p.ToolsUtilitiesAWNS.setForegroundWindow(S, M), M.show());
            let e = u.dirname(n);
            null !== i && void 0 !== i && "" !== i && (e = i), S.asyncShellExecuteAndWait(n, e, t, (i, r) => {
                k.information("shellExecute:result = ", i, ";code = ", r, ";filePath = ", n, ";directory = ", e, ";params = ", t)
            })
        }
    }), o.ipcMain.on(l.ThunderChannelList.channelRMExecute, (e, n, t, i, r, o, s) => {
        let a = M.getNativeWindowHandle().readUIntLE(0, 4), d = S.shellExecute(a, t, i, r, o, s);
        e.sender.send(l.ThunderChannelList.channelMRExecuteResult, n, d)
    }), o.ipcMain.on(l.ThunderChannelList.channelRMSetPosition, (e, n, t) => {
        let i = null, r = null;
        do {
            if (!n || !t) break;
            let e = n.readUIntLE(0, 4), s = t.readUIntLE(0, 4);
            if (!e || !s) break;
            let a = o.BrowserWindow.getAllWindows();
            for (let n = 0; n < a.length; ++n) {
                let t = a[n].getNativeWindowHandle().readUIntLE(0, 4);
                if (e === t) {
                    if (i = a[n], r) break
                } else if (s === t && (r = a[n], i)) break
            }
            if (!i || !r) break;
            let l = r.getPosition(), d = r.getSize(), c = i.getSize(), u = o.screen.getCursorScreenPoint(),
                f = o.screen.getDisplayNearestPoint(u), h = f.scaleFactor, p = f.size.width, m = f.size.height,
                g = d[0], w = d[1];
            l[0] + g > p && (g = p - l[0]), l[1] + w > m && (w = m - l[1]);
            let v = l[0] + (g - c[0]) / 2, C = l[1] + (w - c[1]) / 2;
            v < 0 ? v = 0 : v > p - c[0] && (v = p - c[0]), C < 0 ? C = 0 : C > m - c[1] && (C = m - c[1]), S.setWindowPos(e, 0, v * h, C * h, 0, 0, 5)
        } while (0);
        e.returnValue = !0
    })
}, function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {value: !0});
    const i = t(0), r = t(4), o = t(8), s = t(9), a = t(14);
    !function (e) {
        class n extends a.CommonIPCBase.Communicator {
            constructor() {
                super(), this.currInfo = {
                    id: void 0,
                    context: a.CommonIPCBase.mainProcessContext,
                    isMainCommunicator: !0
                }
            }

            connect() {
                this.isConnected ? o.warning("has been connected") : (this.isConnected = !0, this.startListenIPCMessage(!0))
            }

            disconnect() {
                this.isConnected ? this.isConnected = !1 : o.warning("hasnot been connected yet")
            }

            sendMessageToRenderer(e, n) {
                this.isConnected ? this.sendIPCMsgToRenderer(e, {
                    msg: n,
                    senderInfo: this.currInfo
                }) : o.warning("hasnot been connected yet")
            }

            sendMessageToAllRenderers(e) {
                if (this.isConnected) for (let n of this.rendererInfos) this.sendIPCMsgToRenderer(n.id, {
                    msg: e,
                    senderInfo: this.currInfo
                }); else o.warning("hasnot been connected yet")
            }

            handleRendererConnectMsg(e, n) {
                let t = void 0;
                do {
                    if (r.isNullOrUndefined(n)) {
                        o.error("msgInfo is null");
                        break
                    }
                    let a = n.senderInfo;
                    if (r.isNullOrUndefined(a)) {
                        o.error("connectRendererInfo is null");
                        break
                    }
                    let l = i.BrowserWindow.fromWebContents(e);
                    if (r.isNullOrUndefined(l)) {
                        o.error("rendererBrowserWindow is null");
                        break
                    }
                    if (a.id = l.id, r.isNullOrUndefined(a.id)) {
                        o.error("connectRendererInfo.id is null");
                        break
                    }
                    o.information(`Main: new renderer will connect, id = ${a.id}, context = ${a.context}`), this.sendMessageToAllRenderers({
                        name: s.CommonIPCMessage.msgIPCRendererConnect,
                        args: [a]
                    }), this.rendererInfos.push(a), t = [a.id, this.rendererInfos]
                } while (0);
                return t
            }

            handleRendererDisconnectMsg(e, n) {
                do {
                    if (r.isNullOrUndefined(n)) {
                        o.error("msgInfo is null");
                        break
                    }
                    let e = n.senderInfo;
                    if (r.isNullOrUndefined(e)) {
                        o.error("disconnectRendererInfo is null");
                        break
                    }
                    o.information(`renderer will disconnect, id = ${e.id}, context = ${e.context}`);
                    for (let n = 0; n < this.rendererInfos.length; ++n) if (this.rendererInfos[n] === e) {
                        this.rendererInfos.splice(n, 1);
                        break
                    }
                    this.sendMessageToAllRenderers({name: s.CommonIPCMessage.msgIPCRendererDisconnect, args: [e]})
                } while (0)
            }

            sendForwardRendererToRendererMsg(e) {
                let n = e.msg.args.shift();
                this.sendIPCMsgToRenderer(n, e)
            }

            sendIPCMsgToRenderer(e, n) {
                do {
                    let t = i.BrowserWindow.fromId(e);
                    if (r.isNullOrUndefined(t)) {
                        o.error("rendererBrowserWindow is null");
                        break
                    }
                    t.webContents.send(s.CommonIPCMessage.msgIPCSendToRenderer, n)
                } while (0)
            }
        }

        e.MainCommunicator = n, e.mainCommunicator = new n
    }(n.CommonIPCMain || (n.CommonIPCMain = {}))
}, function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {value: !0});
    const i = t(42);
    var r;
    !function (e) {
        e.XDAS = class {
            constructor() {
                this.performanceMonitorReport = null
            }

            GetPerformanceMonitorReport() {
                return null === this.performanceMonitorReport && (this.performanceMonitorReport = new i.PerformanceMonitorReport), this.performanceMonitorReport
            }
        }
    }(r || (r = {})), n.xlDesktopApplicationSolution = new r.XDAS
}, function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {value: !0});
    const i = t(2), r = t(7), o = t(43);
    let s = t(5).default(i.join(o.GlobalDataNS.getRootDir(), "../bin/ThunderHelper.node")).performanceMonitorReporter;
    n.PerformanceMonitorReport = class {
        initPerformanceMonitor(e, n) {
            s.init("browser" === process.type, process.pid, function (e) {
                let n = "";
                if (0 === e.length && "renderer" === process.type) {
                    let e = i.normalize(decodeURIComponent(window.location.href)), t = e.indexOf(process.resourcesPath);
                    t = t > -1 ? t + process.resourcesPath.length + 1 : t;
                    let r = e.length - 1, o = e.indexOf("?"), s = e.indexOf("#");
                    r = o > -1 ? Math.min(o - 1, r) : r, r = s > -1 ? Math.min(s - 1, r) : r, t > -1 && r >= t && (n = e.substr(t, r - t + 1))
                }
                return 0 === n.length && (n = 0 !== e.length ? e : process.type), n = n.replace(/\||,|;/g, "_")
            }(e), r.release(), n), s.start()
        }

        uninitPerformanceMonitor() {
            s.stop()
        }
    }
}, function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {value: !0});
    const i = t(2), r = t(0);
    let o = null, s = (o = "browser" === process.type ? r.app : r.remote.app).getAppPath().replace(/\\/g, "/"),
        a = i.resolve(s, "../../../profiles").replace(/\\/g, "/");
    !function (e) {
        e.getRootDir = function () {
            return s
        }, e.getProfilesDir = function () {
            return a
        }
    }(n.GlobalDataNS || (n.GlobalDataNS = {}))
}, function (e, n, t) {
    "use strict";
    var i = this && this.__awaiter || function (e, n, t, i) {
        return new (t || (t = Promise))(function (r, o) {
            function s(e) {
                try {
                    l(i.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    l(i.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                e.done ? r(e.value) : new t(function (n) {
                    n(e.value)
                }).then(s, a)
            }

            l((i = i.apply(e, n || [])).next())
        })
    };
    Object.defineProperty(n, "__esModule", {value: !0});
    const r = t(7), o = (t(10), t(2)), s = t(4);
    let a = null;
    const l = t(11), d = t(0), c = t(1), u = t(5), f = t(6), h = "xdas_profile_stat";
    let p = "", m = void 0, g = null, w = void 0, v = null,
        C = u.default(o.join(__rootDir, "../bin/ThunderHelper.node")), y = new Set;

    function _() {
        return i(this, void 0, void 0, function* () {
            return new Promise(e => i(this, void 0, void 0, function* () {
                void 0 === w && (null === v && (v = new Promise(e => {
                    e(w = function (e) {
                        let n = "";
                        if (0 === e.length && "renderer" === process.type) {
                            let e = o.normalize(decodeURIComponent(window.location.href)),
                                t = e.indexOf(process.resourcesPath);
                            t = t > -1 ? t + process.resourcesPath.length + 1 : t;
                            let i = e.length - 1, r = e.indexOf("?"), s = e.indexOf("#");
                            i = r > -1 ? Math.min(r - 1, i) : i, i = s > -1 ? Math.min(s - 1, i) : i, t > -1 && i >= t && (n = e.substr(t, i - t + 1))
                        }
                        return 0 === n.length && (n = 0 !== e.length ? e : process.type), n = n.replace(/\||,|;/g, "_")
                    }(""))
                })), w = yield v), e(w)
            }))
        })
    }

    function b(e) {
        let n = "";
        do {
            if (null === e || void 0 === e) break;
            switch (typeof e) {
                case"string":
                    n = e;
                    break;
                case"object":
                    n = s.inspect(e) || "";
                    break;
                case"number":
                case"boolean":
                    n = e.toString() || ""
            }
        } while (0);
        return n
    }

    function T(e) {
        return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }

    function S(e) {
        return i(this, void 0, void 0, function* () {
            return new Promise(n => i(this, void 0, void 0, function* () {
                let i = void 0;
                null === a && (a = yield Promise.resolve().then(() => t(21)));
                let r = a.createHash("md5");
                null !== r && (i = r.update(e).digest("hex")), n(i)
            }))
        })
    }

    function k() {
        return new Promise(e => i(this, void 0, void 0, function* () {
            let n = "";
            n = void 0 === m ? "browser" === process.type ? function () {
                if (void 0 === m) {
                    let e = process.argv.length, n = process.argv;
                    for (let t = 0; t < e; t++) {
                        let e = n[t];
                        if (e.startsWith("-StartType:")) {
                            m = e.substring("-StartType:".length);
                            break
                        }
                    }
                    void 0 === m && (m = "")
                }
                return m
            }() : yield function () {
                return i(this, void 0, void 0, function* () {
                    return null === g && (g = new Promise(e => {
                        d.ipcRenderer.send(f.ThunderChannelList.channelRMGetBrowserStartType), d.ipcRenderer.once(f.ThunderChannelList.channelMRGetBrowserStartTypeResult, (n, t) => {
                            m = t, e(t), g = null
                        })
                    })), g
                })
            }() : m, e(n)
        }))
    }

    function R(e, n, t, r) {
        return i(this, void 0, void 0, function* () {
            let o = b(n), s = b(t), a = yield S(s), d = function (e) {
                let n = new RegExp(T("file:///"), "g"), t = new RegExp(T(process.resourcesPath + "\\"), "g"),
                    i = new RegExp(T(encodeURI(process.resourcesPath.replace(/\\/g, "/") + "/")), "g");
                return e.replace(n, "").replace(t, "").replace(i, "")
            }(b(r)), c = yield S(d), u = `${e}:${a}:${c}`;
            y.has(u) || (y.add(u), l.XLStatNS.trackEvent(h, "uncaught_exception", "", 0, 0, 0, 0, `type=${e},business_name=${yield _()},code=${o},message_hash=${a},message=${encodeURI(s)},stack_hash=${c},stack=${encodeURI(d)}`)), function (e, n, t, r) {
                return i(this, void 0, void 0, function* () {
                })
            }().catch()
        })
    }

    function M(e) {
        console.error(e);
        let n = e || {};
        R("unhandledRejection", n.code, n instanceof Error ? n.message : n, n.stack).catch()
    }

    !function (e) {
        e.init = function (e) {
            p = e
        }, e.trackColdStartUpEvent = function (e) {
            return i(this, void 0, void 0, function* () {
                let n = C.iSColdStartUp() ? 1 : 0, t = r.release(), i = C.performanceMonitorReporter.getProcessUptime(),
                    o = yield k(), s = `key=${e},start_type=${o},cold_start_up=${n},os_version=${t},cost_time=${i}`;
                l.XLStatNS.trackEvent(h, "cold_start_up", "", 0, 0, 0, 0, s)
            })
        }
    }(n.PerformanceMonitorStatNS || (n.PerformanceMonitorStatNS = {})), function () {
        if (process.on("uncaughtException", e => {
            console.error(e);
            let n = e || {};
            R("uncaughtException", n.code, n.message, n.stack).catch()
        }), "browser" === process.type) process.on("unhandledRejection", (e, n) => {
            M(e)
        }), d.ipcMain.on(f.ThunderChannelList.channelRMGetBrowserStartType, function (e) {
            return i(this, void 0, void 0, function* () {
                let n = yield k();
                e.sender.send(f.ThunderChannelList.channelMRGetBrowserStartTypeResult, n)
            })
        }); else if ("browser" !== process.type) {
            window.addEventListener("unhandledrejection", e => {
                M(e && e.reason || {})
            });
            let e = d.remote.getCurrentWebContents();
            null !== e && void 0 !== e && e.once("did-finish-load", () => {
                (function () {
                    return i(this, void 0, void 0, function* () {
                        do {
                            if ("browser" === process.type) break;
                            if (null === window.performance.timing || void 0 === window.performance.timing) break;
                            let e = C.iSColdStartUp() ? 1 : 0, n = r.release(), t = window.performance.timing,
                                i = t.loadEventEnd - t.navigationStart, o = t.fetchStart - t.navigationStart,
                                s = t.domainLookupEnd - t.domainLookupStart, a = t.connectEnd - t.connectStart,
                                d = t.responseStart - t.requestStart, c = t.responseEnd - t.responseStart,
                                u = t.domComplete - t.domLoading, f = yield k();
                            l.XLStatNS.trackEvent(h, "page_load_time", "", 0, 0, 0, 0, `start_type=${f},cold_start_up=${e},os_version=${n},load_time=${i},before_fetch_time=${o},domin_lookup_time=${s},connect_time=${a},first_response_time=${d},responseTime=${c},domTime=${u},process=${p}`)
                        } while (0)
                    })
                })().catch()
            })
        }
        c.default.hook("beforeLog", (e, n, ...t) => {
            e === c.LogLevel.Critical && l.XLStatNS.trackEvent(h, "critical_error", "", 0, 0, 0, 0, `module_name=${n},messages=${t}`)
        })
    }()
}, function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {value: !0}), t(20), ("browser" === process.type ? global.xlDesktopApplicationSolution : window.xlDesktopApplicationSolution).GetPerformanceMonitorReport().initPerformanceMonitor("", {
        mainLoopHangCheckEnabled: !0,
        cpuUsageCheckEnabled: !0,
        memoryUsageCheckEnabled: !0
    })
}, function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {value: !0});
    const i = t(1), r = t(2), o = t(5).default(r.join(__rootDir, "../bin/ThunderHelper.node")),
        s = i.default.getLogger("HistoryDataNS");
    let a = r.resolve(__profilesDir, "mainWndData.ini"), l = 356, d = 650;
    !function (e) {
        e.getMainWndSizeHistoryData = function () {
            let e = null;
            s.information(a);
            let n = o.readINI(a, "MainFrame", "ExitState"), t = o.readINI(a, "MainFrame", "MainWndLastWidth"),
                i = o.readINI(a, "MainFrame", "MainWndLastHeight");
            if (s.information(n, t, i), "" !== t && "" !== i) {
                let r = Number(t), o = Number(i);
                (r < l || o < d) && (r = l, o = d), (e = {}).width = r, e.height = o, e.exitState = n
            }
            return null === e && ((e = {}).exitState = "normal", e.width = l, e.height = d), e
        }, e.setExitType = function (e) {
            o.writeINI(a, "MainFrame", "ExitType", e)
        }, e.getExitType = function () {
            return o.readINI(a, "MainFrame", "ExitType")
        }
    }(n.HistoryDataNS || (n.HistoryDataNS = {}))
}, function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {value: !0});
    const i = t(1), r = t(11), o = t(6), s = i.default.getLogger("Thunder.Main");
    let a = null, l = 0;

    function d(e) {
        let n = "status=smallwindow";
        e && (n = "status=bigwindow"), r.XLStatNS.trackEvent("core_event", "main_effective_show", "", 0, 0, 0, 0, n), l = a.getTickCount()
    }

    function c() {
        do {
            if (0 === l) {
                s.information("stat main window online time but not yet shown");
                break
            }
            let e = a.getTickCount();
            if (e < l) break;
            let n = (e - l) / 1e3, t = "online_time=" + n;
            l = 0, s.information("stat main window online time ", n), r.XLStatNS.trackEvent("core_event", "main_effective_online_time", "", 0, 0, 0, 0, t)
        } while (0)
    }

    !function (e) {
        e.watch = function (e, n) {
            a = e;
            let t = void 0;
            n.on("show", () => {
                n.webContents.send(o.ThunderChannelList.channelMRMainWndRestore), "" !== t && (s.information("stat main_effective_show on show", n.isMaximized()), d(n.isMaximized())), t = ""
            }), n.on("restore", () => {
                n.webContents.send(o.ThunderChannelList.channelMRMainWndRestore), "minimize" === t && (s.information("stat main_effective_show on restore", n.isMaximized()), d(n.isMaximized())), t = ""
            }), n.on("maximize", () => {
                n.webContents.send(o.ThunderChannelList.channelMRMainWndMax), "minimize" === t && (s.information("stat main_effective_show on maximize", n.isMaximized()), d(n.isMaximized())), t = ""
            }), n.on("hide", () => {
                n.webContents.send(o.ThunderChannelList.channelMRMainWndMin), t = "hide", c()
            }), n.on("minimize", () => {
                n.webContents.send(o.ThunderChannelList.channelMRMainWndMin), t = "minimize", c()
            })
        }
    }(n.MainWindowCoreEventStatNS || (n.MainWindowCoreEventStatNS = {}))
}, function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {value: !0});
    const i = t(0), r = t(13);
    n.default = function (e, n) {
        const t = {};
        let o = {}, s = new Map;
        i.ipcMain.on("message-box-confirm-create", (t, s) => {
            let a = Object.assign({
                width: 400,
                height: 174,
                frame: !1,
                resizable: !1,
                maximizable: !1,
                parent: e,
                show: !1,
                modal: !0,
                alwaysOnTop: !0
            }, s.dialogConf);
            if (a.modal && o.confirm) return;
            a.modal && (o.confirm = !0);
            let l = "development" === process.env.RUN_ENV ? "http://localhost:9080/message-box-renderer/" : `file:///${__dirname}/message-box-renderer/index.html`;
            l += `?boxId=${s.boxId}`;
            let d = new i.BrowserWindow(a);
            d.loadURL(l), d.on("ready-to-show", () => {
                d.setAlwaysOnTop(!1), r.default(d, n, e)
            }), d.on("close", () => {
                o.confirm = !1, e.focus()
            })
        }), i.ipcMain.on("message-box-pop-create", (t, s) => {
            let a = Object.assign({
                frame: !1,
                resizable: !1,
                maximizable: !1,
                parent: e,
                show: !1,
                modal: !0,
                alwaysOnTop: !0
            }, s.dialogConf);
            if (a.modal && o.pop) return;
            a.modal && (o.pop = !0);
            let l = "development" === process.env.RUN_ENV ? "http://localhost:9080/message-box-renderer/" : `file:///${__dirname}/message-box-renderer/index.html`;
            l += `?boxId=${s.boxId}`;
            let d = new i.BrowserWindow(a);
            d.loadURL(l), d.on("ready-to-show", () => {
                d.setAlwaysOnTop(!1), r.default(d, n, e)
            }), d.on("close", () => {
                o.pop = !1, e.focus()
            })
        }), i.ipcMain.on("message-box-custom-create", (a, l) => {
            let d = Object.assign({
                width: 300,
                height: 100,
                frame: !1,
                resizable: !1,
                maximizable: !1,
                parent: e,
                show: !1,
                modal: !0,
                alwaysOnTop: !1
            }, l.dialogConf);
            if (d.modal && o[l.popType]) return;
            if (d.modal && (o[l.popType] = !0), l.options.singleton) {
                if (s.get(l.popType)) return;
                s.set(l.popType, !0)
            }
            let c = "development" === process.env.RUN_ENV ? "http://localhost:9080/message-box-renderer/" : `file:///${__dirname}/message-box-renderer/index.html`;
            c += `?boxId=${l.boxId}`;
            let u = new i.BrowserWindow(d);
            u.loadURL(c), u.on("ready-to-show", () => {
                u.setAlwaysOnTop(!1), r.default(u, n, e)
            }), u.on("close", () => {
                o[l.popType] = !1, l.options.singleton && s.set(l.popType, !1), e.focus()
            }), t[l.popType] = u
        }), i.ipcMain.on("message-box-open", (e, n) => {
            const i = n.name, r = n.position;
            t[i] && (r && t[i].setPosition(r.x, r.y), t[i].show())
        })
    }
}, function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {value: !0});
    const i = t(0), r = t(1), o = t(6), s = r.default.getLogger("SearchWindows");
    let a = null, l = null;
    n.default = function (e) {
        i.ipcMain.on(o.ThunderChannelList.channelRMCreateSearchWindow, (n, t, r, s) => {
            do {
                if (null !== a) break;
                const n = "development" === process.env.RUN_ENV ? "http://localhost:9080/search-renderer/" : `file:///${__dirname}/search-renderer/index.html`;
                l = e, (a = new i.BrowserWindow({
                    x: t,
                    y: r,
                    width: s,
                    height: 0,
                    parent: e,
                    frame: !1,
                    skipTaskbar: !0,
                    resizable: !1,
                    alwaysOnTop: !1,
                    transparent: !1,
                    show: !1
                })).loadURL(n), a.on("ready-to-show", () => {
                }), a.on("blur", () => {
                    a.hide(), a.webContents.send(o.ThunderChannelList.channelMRSearchWindowVisibleChange, !1)
                }), l.on("hide", () => {
                    a.hide(), a.webContents.send(o.ThunderChannelList.channelMRSearchWindowVisibleChange, !1)
                })
            } while (0)
        }), i.ipcMain.on(o.ThunderChannelList.channelRMShowSearchWindow, (e, n, t, i, r) => {
            if (null !== a) {
                s.information("show-search-window", n, t, i, r);
                let e = l.getBounds();
                l.isMaximized() && (e.x = 0, e.y = 0), a.setBounds({
                    x: e.x + n,
                    y: e.y + t,
                    width: i,
                    height: r
                }), a.showInactive(), a.webContents.send(o.ThunderChannelList.channelMRSearchWindowVisibleChange, !0)
            }
        }), i.ipcMain.on(o.ThunderChannelList.channelRMHideSearchWindow, (n, t) => {
            null !== a && (a.hide(), s.information("channelRMHideSearchWindow forceClose", t), a.webContents.send(o.ThunderChannelList.channelMRSearchWindowVisibleChange, !1, t), t && e.webContents.send(o.ThunderChannelList.channelMRSearchBarFocusChange, !1))
        }), i.ipcMain.on(o.ThunderChannelList.channelRMClickMouse, (n, t, r, d, c, u, f, h) => {
            if (null !== a) {
                let n = i.screen.getCursorScreenPoint(), p = i.screen.getDisplayNearestPoint(n).scaleFactor;
                r = Math.round(r / p), d = Math.round(d / p);
                let m = a.getNativeWindowHandle().readUIntLE(0, 4), g = l.getBounds();
                s.information("click-mouse-in-window", p, t, m, r, d, g.x, g.y, c, u, f, h), m !== t && (r < g.x + c || r > g.x + f || d < g.y + u || d > g.y + h) && (a.hide(), a.webContents.send(o.ThunderChannelList.channelMRSearchWindowVisibleChange, !1), e.webContents.send(o.ThunderChannelList.channelMRSearchBarFocusChange, !1))
            }
        }), i.ipcMain.on(o.ThunderChannelList.channelRMSelectAddressDropItem, (n, t) => {
            e && e.webContents.send(o.ThunderChannelList.channelMRFWSelectAddressDropItem, t)
        }), i.ipcMain.on(o.ThunderChannelList.channelRMAddressDropWndKeyDown, (n, t) => {
            e && e.webContents.send(o.ThunderChannelList.channelMRFWAddressDropWndKeyDown, t)
        }), i.ipcMain.on(o.ThunderChannelList.channelRMAddressKeyDown, (e, n) => {
            a && a.isVisible() && a.webContents.send(o.ThunderChannelList.channelMRFWAddressKeyDown, n)
        })
    }
}, function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {value: !0});
    const i = t(0), r = t(13);
    n.default = function (e, n) {
        i.ipcMain.on("embedded-browser-create", (t, o) => {
            let s = i.BrowserWindow.fromId(o);
            null === s || void 0 === s || s.isDestroyed() || (s.on("ready-to-show", () => {
                r.default(s, n, e)
            }), s.on("close", () => {
                e.focus()
            }))
        })
    }
}, function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {value: !0});
    const i = t(0), r = t(4), o = t(1), s = t(15), a = t(22), l = t(52), d = t(13), c = o.default.getLogger("LoginUI");
    n.loginUIObj = new class {
        constructor() {
            this.retryLoginWnd = null, this.loginWnd = null, this.thunderHelperObj = null, this.parentWnd = null, this.loginWndDefaultWidth = 300, this.loginWndDefaultHeight = 440, this.isShowLoginWnd = !1
        }

        init(e, n) {
            this.parentWnd = e, this.thunderHelperObj = n, i.ipcMain.on(l.NodeEventMesssageNS.eventLoginWndCreate, (e, n, t, i, r, o) => {
                this.createLoginWnd(n, t, i, r, o)
            }), i.ipcMain.on(l.NodeEventMesssageNS.eventLoginWndShow, (e, n, t, i, r, o) => {
                let s = this.updateLoginWnd(n, t, i, r, o);
                e.sender.send(l.NodeEventMesssageNS.eventLoginWndShowResult, s)
            }), i.ipcMain.on(l.NodeEventMesssageNS.eventLoginWndClose, (e, n) => {
                this.closeLoginWnd(n)
            }), i.ipcMain.on(l.NodeEventMesssageNS.eventRetryLoginWndCreate, (e, n, t) => {
                this.createRetryLoginWnd(n, t)
            }), i.ipcMain.on(l.NodeEventMesssageNS.eventModifierUserinfoWndCreate, (e, n) => {
                this.createModifierUserInfoWnd(n)
            })
        }

        createLoginWnd(e, n, t, o, l) {
            if (c.information("create loginwnd:", e, n, t, o, l, this.loginWnd), null !== this.loginWnd && void 0 !== this.loginWnd && !this.loginWnd.isDestroyed()) return c.information("createLoginWnd: 登陆框已经存在"), void(!0 === this.isShowLoginWnd && (this.loginWnd.show(), s.ToolsUtilitiesAWNS.setForegroundWindow(this.thunderHelperObj, this.loginWnd)));
            r.isNullOrUndefined(e) || r.isNullOrUndefined(n) ? c.information("createLoginWnd: 参数有问题") : (n = "file:///" + n, r.isNullOrUndefined(o) && (o = 300), r.isNullOrUndefined(l) && (l = 440), this.loginWndDefaultWidth = o, this.loginWndDefaultHeight = l, this.loginWnd = new i.BrowserWindow({
                width: this.loginWndDefaultWidth,
                height: this.loginWndDefaultHeight,
                modal: !1,
                resizable: !1,
                frame: !1,
                parent: this.parentWnd,
                show: !1,
                webPreferences: {webSecurity: !1, preload: `${__rootDir}/out/common-preload.js`}
            }), null !== this.loginWnd && (this.isShowLoginWnd = !1, this.loginWnd.loadURL(n), a.ThunderWindowNS.centerWnd(this.loginWnd, this.parentWnd, this.thunderHelperObj), this.loginWnd.on("close", () => {
                do {
                    if (null === this.parentWnd || void 0 === this.parentWnd || this.parentWnd.isDestroyed()) break;
                    this.parentWnd.focus()
                } while (0)
            }), this.loginWnd.once("closed", () => {
                c.information("loginWnd closed"), this.loginWnd = null, this.isShowLoginWnd = !1
            })))
        }

        closeLoginWnd(e) {
            c.information("closeLoginWnd:", e), null === this.loginWnd || void 0 === this.loginWnd || this.loginWnd.isDestroyed() || this.loginWnd.close()
        }

        updateLoginWnd(e, n, t, i, r) {
            let o = !1;
            do {
                if (c.information("updateLoginWnd:", e, n, t, i, this.loginWnd), null === this.loginWnd || void 0 === this.loginWnd || this.loginWnd.isDestroyed()) {
                    c.information("updateLoginWnd:不显示登陆框 this.loginWnd 存在问题");
                    break
                }
                if (!0 === this.isShowLoginWnd) {
                    c.information("updateLoginWnd:登陆框已经处于显示状态");
                    break
                }
                e ? (c.information("updateLoginWnd:显示登陆框"), this.isShowLoginWnd = !0, (this.parentWnd.isMinimized() || !1 === this.parentWnd.isVisible()) && (this.parentWnd.isMinimized() && this.parentWnd.restore(), this.parentWnd.show()), this.loginWnd.show(), o = !0, s.ToolsUtilitiesAWNS.setForegroundWindow(this.thunderHelperObj, this.loginWnd)) : this.loginWnd.hide()
            } while (0);
            return o
        }

        createRetryLoginWnd(e, n) {
            let t = 0, r = 0;
            if ("userAvatar" === e) {
                let e = null;
                e = this.parentWnd.getBounds();
                let n = this.parentWnd.getContentSize();
                e.x < 0 || e.y < 0 ? e.width > n[0] && e.height > n[1] ? (t = e.x + Math.round((e.width - n[0]) / 2), r = e.y + Math.round((e.height - n[1]) / 2) - 1) : (t = -1, r = -1) : (t = e.x, r = e.y), c.information("createRetryLoginWnd:", e, n)
            }
            if (null === this.retryLoginWnd) {
                const e = "development" === process.env.RUN_ENV ? "http://localhost:9080/retry-login-renderer/" : `file:///${__dirname}/retry-login-renderer/index.html`;
                this.retryLoginWnd = new i.BrowserWindow({
                    x: t + 15,
                    y: r + 49,
                    width: 246,
                    height: 112,
                    frame: !1,
                    resizable: !1,
                    parent: this.parentWnd,
                    show: !1,
                    modal: !1,
                    alwaysOnTop: !0
                }), this.retryLoginWnd.loadURL(e), this.retryLoginWnd.on("ready-to-show", () => {
                    this.retryLoginWnd.webContents.send("onSendData", n)
                }), this.retryLoginWnd.on("close", () => {
                    do {
                        if (null === this.parentWnd || void 0 === this.parentWnd || this.parentWnd.isDestroyed()) break;
                        this.parentWnd.focus()
                    } while (0)
                }), this.retryLoginWnd.on("hide", () => {
                    do {
                        if (null === this.parentWnd || void 0 === this.parentWnd || this.parentWnd.isDestroyed()) break;
                        this.parentWnd.focus()
                    } while (0)
                }), this.retryLoginWnd.on("closed", () => {
                    this.retryLoginWnd = null
                })
            } else this.retryLoginWnd.setBounds({
                x: t + 15,
                y: r + 49,
                width: 246,
                height: 112
            }, !1), this.retryLoginWnd.webContents.send("onSendData", n)
        }

        createModifierUserInfoWnd(e) {
            const n = "development" === process.env.RUN_ENV ? "http://localhost:9080/modifier-userinfo-renderer/" : `file:///${__dirname}/modifier-userinfo-renderer/index.html`;
            let t = new i.BrowserWindow(Object.assign({
                width: 400,
                height: 474,
                frame: !1,
                resizable: !1,
                parent: this.parentWnd,
                show: !1,
                modal: !0,
                center: !0
            }));
            t.loadURL(n), t.on("ready-to-show", () => {
                d.default(t, this.thunderHelperObj, this.parentWnd), t.show()
            }), t.on("close", () => {
                this.parentWnd.focus()
            })
        }
    }
}, function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {value: !0}), function (e) {
        e.eventPluginLoderPluginReady = "event_plugin_loader_plugin_ready", e.eventDownloadItemActive = "event_download_item_active", e.eventDetailSwitch2Index = "event_detail_switch_to_index", e.eventDownloadSwitchCategory = "event_download_switch_category", e.eventBringMainWindowToTop = "event_bring_main_window_to_top", e.eventDownloadContextMenuClick = "event_download_context_menu_click", e.eventOnCommand = "event_on_command", e.eventDownloadKernelInitEnd = "event_dk_init_end", e.eventTaskDataBaseLoadEnd = "event_dk_task_data_base_load_end", e.eventGlobalDownloadSpeedChanged = "event_dk_global_download_speed_changed", e.eventGlobalUploadSpeedChanged = "event_dk_global_upload_speed_changed", e.eventConfigInitFinished = "event_config_init_finished", e.eventConfigValueChanged = "event_config_value_changed", e.eventBHOConfigInitFinished = "event_bho_config_init_finished", e.eventBHOConfigValueChanged = "event_bho_config_value_changed", e.eventShowHomePage = "event_show_home_page", e.eventShowSearchTaskPage = "event_show_searchtask_page", e.eventConfigBrowserInitFinished = "event_config_browser_init_finished", e.eventDownloadContextMenuPopup = "event_download_context_menu_popup", e.eventDownloadContextMenuEnd = "event_download_context_menu_end", e.eventEmbeddedBrowserWndClick = "event_embedded_browser_wnd_click", e.eventLoginWndCreate = "event_login_wnd_create", e.eventLoginWndShow = "event_login_wnd_show", e.eventLoginWndShowResult = "event_login_wnd_show_result", e.eventLoginWndClose = "event_login_wnd_close", e.eventRetryLoginWndCreate = "event_retry_login_wnd_create", e.eventModifierUserinfoWndCreate = "event_modifier-userinfo-wnd-create"
    }(n.NodeEventMesssageNS || (n.NodeEventMesssageNS = {}))
}, function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {value: !0});
    const i = t(54), r = t(55);
    !function (e) {
        e.getWindowPreference = function (e = !1) {
            let n = r.default(), t = {};
            return n && n.colors && "string" == typeof n.colors.colorPrimaryControl1 && (t.hoverBackgroundColor = e ? parseInt(i.ColorUtilNS.rgbaStringToHexWith0xBegin(n.colors.colorPrimaryControl1), 16) : i.ColorUtilNS.rgbaStringToHexWith0xBegin(n.colors.colorPrimaryControl1)), t
        }
    }(n.WindowPreferenceNS || (n.WindowPreferenceNS = {}))
}, function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {value: !0}), function (e) {
        function n(e) {
            let n = e.toString(16).toUpperCase();
            return n.length < 2 && (n = "0" + n), n
        }

        function t(e, t, i, r) {
            return "0x" + n(r) + n(e) + n(t) + n(i)
        }

        e.rgbaStringToHexWith0xBegin = function (e) {
            if (void 0 !== e) {
                let n = e.split(",");
                return t(parseInt(n[0] || "0", 10), parseInt(n[1] || "0", 10), parseInt(n[2] || "0", 10), parseInt(n[3] || "255", 10))
            }
        }, e.colorNumberToHex = n, e.rgbaToHexWith0xBegin = t
    }(n.ColorUtilNS || (n.ColorUtilNS = {}))
}, function (e, n, t) {
    "use strict";
    var i = this && this.__awaiter || function (e, n, t, i) {
        return new (t || (t = Promise))(function (r, o) {
            function s(e) {
                try {
                    l(i.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    l(i.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                e.done ? r(e.value) : new t(function (n) {
                    n(e.value)
                }).then(s, a)
            }

            l((i = i.apply(e, n || [])).next())
        })
    };
    Object.defineProperty(n, "__esModule", {value: !0});
    const r = t(0), o = t(1).default.getLogger("GetSkinInfo");
    let s;
    (function () {
        return i(this, void 0, void 0, function* () {
            if ("renderer" === process.type) {
                o.information("renderer process");
                const e = yield Promise.resolve().then(() => t(56)), n = yield Promise.resolve().then(() => t(23));
                e.default("GetSkinInfo").then(e => {
                    s = e, o.information("send OnChangeSkin", e)
                }).catch(e => {
                    o.warning(e)
                }), n.NativeCallModule.nativeCall.AttachNativeEvent("OnChangeSkin", e => {
                    s = e, o.information("send OnChangeSkin", e)
                })
            } else "browser" === process.type && (o.information("main process"), r.ipcMain.on("OnChangeSkin", (e, n) => {
                o.information("OnChangeSkin", n), s = n
            }))
        })
    })().catch(e => {
        o.information(e)
    }), n.default = function () {
        return s
    }
}, function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {value: !0});
    const i = t(4), r = t(1), o = t(23), s = r.default.getLogger("Thunder.PromiseNativeCall"), a = i.promisify;
    n.default = function (...e) {
        return s.verbose(...e), a(o.NativeCallModule.nativeCall.CallNativeFunction.bind(o.NativeCallModule.nativeCall))(...e)
    }
}, function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {value: !0});
    const i = t(0), r = t(4), o = t(8), s = t(9), a = t(14);
    !function (e) {
        class n extends a.CommonIPCBase.Communicator {
            constructor() {
                super()
            }

            initialize(e) {
                this.currInfo = {id: void 0, context: e, isMainCommunicator: !1}
            }

            connect() {
                this.isConnected ? o.warning("has been connected") : (this.sendConnectMsgToMain(), this.isConnected = !0, this.startListenIPCMessage(!1))
            }

            disconnect() {
                this.isConnected ? (this.isConnected = !1, this.sendDisconnectMsgToMain()) : o.warning("hasnot been connected yet")
            }

            sendMessageToMain(e) {
                this.sendIPCMsgToMain(e)
            }

            sendMessageToMainSync(e) {
                return this.sendIPCMsgToMain(e, !0)
            }

            sendMessageToRenderer(e, n) {
                this.sendIPCMsgToRenderer(e, n)
            }

            handleRendererConnectMsg(e, n) {
                do {
                    if (r.isNullOrUndefined(n)) {
                        o.error("msgInfo is null");
                        break
                    }
                    let e = n.msg.args[0];
                    if (r.isNullOrUndefined(e)) {
                        o.error("connectRendererInfo is null");
                        break
                    }
                    o.information(`Renderer: new renderer will connect, id = ${e.id}, context = ${e.context}`), this.rendererInfos.push(e)
                } while (0)
            }

            handleRendererDisconnectMsg(e, n) {
                do {
                    if (r.isNullOrUndefined(n)) {
                        o.error("msgInfo is null");
                        break
                    }
                    let e = n.msg.args[0];
                    if (r.isNullOrUndefined(e)) {
                        o.error("disconnectRendererInfo is null");
                        break
                    }
                    o.information(`renderer will disconnect, id = ${e.id}, context = ${e.context}`);
                    for (let n = 0; n < this.rendererInfos.length; ++n) if (this.rendererInfos[n] === e) {
                        this.rendererInfos.splice(n, 1);
                        break
                    }
                } while (0)
            }

            sendConnectMsgToMain() {
                let e = this.sendMessageToMainSync({name: s.CommonIPCMessage.msgIPCRendererConnect, args: []});
                this.currInfo.id = e[0], this.rendererInfos = e[1]
            }

            sendDisconnectMsgToMain() {
                this.sendMessageToMain({name: s.CommonIPCMessage.msgIPCRendererDisconnect, args: []})
            }

            sendIPCMsgToMain(e, n = !1) {
                let t = void 0;
                do {
                    if (r.isNullOrUndefined(e)) {
                        o.error("msg is null");
                        break
                    }
                    t = (n ? i.ipcRenderer.sendSync : i.ipcRenderer.send)(s.CommonIPCMessage.msgIPCSendToMain, {
                        msg: e,
                        senderInfo: this.currInfo
                    })
                } while (0);
                return t
            }

            sendIPCMsgToRenderer(e, n) {
                do {
                    if (r.isNullOrUndefined(e)) {
                        o.error("rendererId is null");
                        break
                    }
                    if (r.isNullOrUndefined(n)) {
                        o.error("msg is null");
                        break
                    }
                    let t = [e].concat(n.args);
                    n.args = t, i.ipcRenderer.send(s.CommonIPCMessage.msgIPCSendToRenderer, {
                        msg: n,
                        senderInfo: this.currInfo
                    })
                } while (0)
            }
        }

        e.RendererCommunicator = n, e.rendererCommunicator = new n
    }(n.CommonIPCRenderer || (n.CommonIPCRenderer = {}))
}, function (e, n, t) {
    "use strict";
    var i = this && this.__awaiter || function (e, n, t, i) {
        return new (t || (t = Promise))(function (r, o) {
            function s(e) {
                try {
                    l(i.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    l(i.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                e.done ? r(e.value) : new t(function (n) {
                    n(e.value)
                }).then(s, a)
            }

            l((i = i.apply(e, n || [])).next())
        })
    };
    Object.defineProperty(n, "__esModule", {value: !0});
    const r = t(0), o = t(11), s = t(1), a = t(22), l = t(6), d = t(13), c = t(59), u = t(15), f = t(60),
        h = s.default.getLogger("ThunderNewTask"), p = 860;
    const m = new class {
        constructor() {
            this.parent = null, this.helperObj = null, this.isReady = !1, this.preNewTaskWindow = null, this.newTaskWindow = null, this.btTaskWindows = []
        }

        setReady(e) {
            this.isReady = e
        }

        init(e, n) {
            this.parent = e, this.helperObj = n, r.ipcMain.on(l.ThunderChannelList.channelRMRoundWindow, (e, n, t, i) => {
                this.helperObj.attachShadowWindow(n, t, i)
            }), r.ipcMain.on("create-pre-new-task-window", (e, ...n) => i(this, void 0, void 0, function* () {
                let e = void 0, t = void 0;
                if (n[0]) try {
                    e = JSON.parse(n[0])
                } catch (e) {
                }
                if (n[4]) try {
                    t = JSON.parse(n[4])
                } catch (e) {
                }
                let i = n[1], r = n[2], o = n[3];
                this.createPreNewTaskWindow(e, i, r, o, t).catch()
            })), r.ipcMain.on("create-bt-task-window", (e, ...n) => {
                let t = void 0;
                if (n[0]) try {
                    t = JSON.parse(n[0])
                } catch (e) {
                }
                let i = {};
                if (n[1]) try {
                    i = JSON.parse(n[1])
                } catch (e) {
                    i = {}
                }
                t && this.createBtTaskWindow(t, i)
            }), r.ipcMain.on("create-new-task-window", (e, ...n) => {
                let t = [];
                if (n[0]) try {
                    t = JSON.parse(n[0])
                } catch (e) {
                }
                t.length > 0 && this.createNewTaskWindow(t).catch()
            })
        }

        ipcMainGetConfigValueAW(e, n, t) {
            return i(this, void 0, void 0, function* () {
                return new Promise(i => {
                    do {
                        if (null === this.parent) {
                            i(t);
                            break
                        }
                        r.ipcMain.once(l.ThunderChannelList.channelRMGetConfigValueResolve, (e, n) => {
                            i(n)
                        }), r.ipcMain.once(l.ThunderChannelList.channelRMGetConfigValueReject, () => {
                            i(t)
                        }), this.parent.webContents.send(l.ThunderChannelList.channelMRGetConfigValue, e, n, t)
                    } while (0)
                })
            })
        }

        bringMainWindowToTop(e) {
            return i(this, void 0, void 0, function* () {
                e = void 0 === e || e;
                do {
                    if (e && !(yield this.ipcMainGetConfigValueAW("TaskDefaultSettings", "NewTaskDlgWithoutMainWnd", !0))) break;
                    this.isReady && null !== this.parent && (this.parent.isMinimized() && this.parent.restore(), this.parent.show(), u.ToolsUtilitiesAWNS.setForegroundWindow(this.helperObj, this.parent))
                } while (0)
            })
        }

        changeUrllistToNewTaskData(e, n) {
            return i(this, void 0, void 0, function* () {
                if (void 0 !== e && null !== e && void 0 !== e[0] && "string" == typeof e[0]) {
                    1 === e.length && (e = e[0].split(/[\n\r\n]/));
                    let t = [];
                    for (let i of e) {
                        let e = f.ThunderNewtaskHelperNS.getNewTaskDataByUrl(i, n);
                        void 0 !== e && t.push(e)
                    }
                    t.length > 0 && (e = t)
                }
                return e
            })
        }

        sendTaskDataToPreNewTaskRenderer(e, n, t, i, r) {
            this.preNewTaskWindow && this.preNewTaskWindow.webContents.send(l.ThunderChannelList.channelRMPreNewTaskSetTaskData, e, n, t, i, r)
        }

        createPreNewTaskWindow(e, n, t, s, l) {
            return i(this, void 0, void 0, function* () {
                if (null === this.preNewTaskWindow) {
                    let c = 276, u = c, f = 400, m = [void 0, void 0];
                    e && e.length > 0 ? u = 477 : m = a.ThunderWindowNS.getWindowsInParentCenterPos(f, u, this.parent);
                    let g = yield this.ipcMainGetConfigValueAW("TaskDefaultSettings", "NewTaskDlgWithoutMainWnd", !0),
                        w = g ? this.parent : null;
                    this.preNewTaskWindow = new r.BrowserWindow({
                        x: m[0],
                        y: m[1],
                        width: f,
                        height: u,
                        frame: !1,
                        resizable: !0,
                        parent: w,
                        alwaysOnTop: !0,
                        show: !1,
                        modal: !1,
                        minWidth: f,
                        minHeight: c,
                        maxWidth: p
                    });
                    const v = "development" === process.env.RUN_ENV ? "http://localhost:9080/pre-new-task-renderer/" : `file:///${__dirname}/pre-new-task-renderer/index.html`;
                    this.preNewTaskWindow.loadURL(v), this.preNewTaskWindow.once("show", () => {
                        d.default(this.preNewTaskWindow, this.helperObj, w)
                    }), this.preNewTaskWindow.on("ready-to-show", () => i(this, void 0, void 0, function* () {
                        if (g && this.bringMainWindowToTop(!1).catch(), e) if (e = yield this.changeUrllistToNewTaskData(e, n)) if (e.length <= 5) this.sendTaskDataToPreNewTaskRenderer(JSON.stringify(e), t, s, l); else {
                            let n = JSON.stringify(e.slice(0, 5));
                            if (this.sendTaskDataToPreNewTaskRenderer(n, t, s, l, !0), void 0 !== (e = e.splice(5)) && e.length > 0) {
                                let n = 100, i = Math.ceil(e.length / 100);
                                i > 1 && (n = 100 * (i > 10 ? 10 : i)), setTimeout(() => {
                                    this.sendTaskDataToPreNewTaskRenderer(JSON.stringify(e), t, s, l)
                                }, n)
                            }
                        } else this.preNewTaskWindow.show(); else this.preNewTaskWindow.show();
                        let i = "source=Thunder,panel=PreNewTaskDlg";
                        o.XLStatNS.trackEvent("core_event", "create_task_panel_show", "", 0, 0, 0, 0, i), h.information("trackEvent", "core_event", "create_task_panel_show", i)
                    })), this.preNewTaskWindow.on("close", () => {
                        do {
                            if (null === this.parent || this.parent.isDestroyed()) break;
                            w && this.parent.focus()
                        } while (0)
                    }), this.preNewTaskWindow.on("hide", () => {
                        this.parent && !this.parent.isDestroyed() && this.parent.focus()
                    }), this.preNewTaskWindow.on("closed", () => i(this, void 0, void 0, function* () {
                        do {
                            if (null === this.parent || this.parent.isDestroyed()) break;
                            this.preNewTaskWindow = null, (yield this.ipcMainGetConfigValueAW("TaskDefaultSettings", "NewTaskDlgWithoutMainWnd", !0)) && this.parent.show()
                        } while (0)
                    }))
                } else yield this.bringMainWindowToTop(), (e = yield this.changeUrllistToNewTaskData(e, n)) && (this.preNewTaskWindow.isVisible() ? (this.sendTaskDataToPreNewTaskRenderer(JSON.stringify(e), t, s, l), this.preNewTaskWindow.show()) : this.preNewTaskWindow.once("show", () => {
                    this.sendTaskDataToPreNewTaskRenderer(JSON.stringify(e), t, s, l)
                }))
            })
        }

        createBtTaskWindow(e, n = {}) {
            const t = "development" === process.env.RUN_ENV ? "http://localhost:9080/bt-task-renderer/" : `file:///${__dirname}/bt-task-renderer/index.html`;
            let i = 582;
            "url" !== e.type && void 0 !== e.data || (i = 113);
            let o = a.ThunderWindowNS.getWindowsInParentCenterPos(400, i, this.parent),
                s = ["newwindow_bt"].includes(n.source), c = new r.BrowserWindow({
                    x: s ? o[0] : null,
                    y: s ? o[1] : null,
                    width: 400,
                    height: i,
                    frame: !1,
                    resizable: !1,
                    parent: this.parent,
                    alwaysOnTop: !0,
                    show: !1,
                    modal: !1,
                    minWidth: 400,
                    minHeight: 113,
                    maxWidth: p
                });
            this.btTaskWindows.push(c), c.loadURL(t), c.once("show", () => {
                d.default(c, this.helperObj, this.parent)
            }), c.on("ready-to-show", () => {
                c.webContents.send(l.ThunderChannelList.channelRMNewTaskSetBTInfo, c.id, e, n)
            }), c.on("close", () => {
                do {
                    if (null === this.parent || this.parent.isDestroyed()) break;
                    this.parent.focus()
                } while (0)
            })
        }

        createNewTaskWindow(e) {
            return i(this, void 0, void 0, function* () {
                do {
                    if (0 === e.length) break;
                    let n = yield this.ipcMainGetConfigValueAW("TaskDefaultSettings", "OrignHostThreads", "5"),
                        t = Number(n);
                    if (e = e.map(e => (e.thread && "number" == typeof e.thread || (e.thread = t), e)), null !== this.newTaskWindow) {
                        this.bringMainWindowToTop().catch(), this.newTaskWindow.isVisible() ? this.newTaskWindow.webContents.send(l.ThunderChannelList.channelRMNewTaskSetTaskData, JSON.stringify(e)) : this.newTaskWindow.once("show", () => {
                            this.newTaskWindow.webContents.send(l.ThunderChannelList.channelRMNewTaskSetTaskData, JSON.stringify(e))
                        });
                        break
                    }
                    let s = "development" === process.env.RUN_ENV ? "http://localhost:9080/new-task-renderer/" : `file:///${__dirname}/new-task-renderer/index.html`;
                    s = 1 === e.length ? c.ThunderUtil.setQueryString(s, {type: "single"}) : c.ThunderUtil.setQueryString(s, {type: "multi"});
                    let a = 208, u = 400,
                        f = (yield this.ipcMainGetConfigValueAW("TaskDefaultSettings", "NewTaskDlgWithoutMainWnd", !0)) ? this.parent : null;
                    this.newTaskWindow = new r.BrowserWindow({
                        width: u,
                        height: a,
                        frame: !1,
                        resizable: !1,
                        parent: f,
                        show: !1,
                        alwaysOnTop: !0,
                        minWidth: u,
                        minHeight: a,
                        maxWidth: p
                    }), h.information("create new task browser window created");
                    let m = 5, g = (() => i(this, void 0, void 0, function* () {
                        let n = {info: "", isPartial: !1};
                        if (e.length > 100) {
                            let t = e.slice(0, m);
                            n.info = JSON.stringify(t), n.isPartial = !0
                        } else n.info = JSON.stringify(e), n.isPartial = !1;
                        return n
                    }))();
                    r.ipcMain.once(l.ThunderChannelList.channelRMNewTaskReadyForSetTaskData, n => {
                        g.then(t => {
                            if (null !== t && n.sender.send(l.ThunderChannelList.channelRMNewTaskSetTaskData, t.info, t.isPartial), t.isPartial) {
                                let n = 100, t = Math.ceil(e.length / 100);
                                t > 1 && (n = 100 * (t > 10 ? 10 : t));
                                let i = e.splice(m);
                                setTimeout(() => {
                                    null !== this.newTaskWindow && this.newTaskWindow.webContents.send(l.ThunderChannelList.channelRMNewTaskSetTaskData, JSON.stringify(i), !1)
                                }, n)
                            }
                        }).catch()
                    }), this.newTaskWindow.once("show", () => {
                        d.default(this.newTaskWindow, this.helperObj, f)
                    }), this.newTaskWindow.on("ready-to-show", () => i(this, void 0, void 0, function* () {
                        this.bringMainWindowToTop().catch(), o.XLStatNS.trackEvent("core_event", "create_task_panel_show", "", 0, 0, 0, 0, "source=Thunder,panel=NewTaskDlg"), h.information("trackEvent", "core_event", "create_task_panel_show", "source=Thunder,panel=NewTaskDlg"), h.information("create new task browser window ready to show")
                    })), this.newTaskWindow.on("close", () => {
                        do {
                            if (null === this.parent || this.parent.isDestroyed()) break;
                            f && this.parent.focus()
                        } while (0)
                    }), this.newTaskWindow.on("closed", e => i(this, void 0, void 0, function* () {
                        h.verbose(e), this.newTaskWindow = null;
                        do {
                            if (null === this.parent || this.parent.isDestroyed()) break;
                            (yield this.ipcMainGetConfigValueAW("TaskDefaultSettings", "NewTaskDlgWithoutMainWnd", !0)) && this.parent.show()
                        } while (0)
                    })), this.newTaskWindow.loadURL(s)
                } while (0)
            })
        }
    };
    !function (e) {
        e.init = function (e, n) {
            m.init(e, n)
        }, e.setReady = function (e) {
            m.setReady(e)
        }
    }(n.NewTaskDlgsManagerNS || (n.NewTaskDlgsManagerNS = {}))
}, function (e, n, t) {
    "use strict";
    var i = this && this.__awaiter || function (e, n, t, i) {
        return new (t || (t = Promise))(function (r, o) {
            function s(e) {
                try {
                    l(i.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    l(i.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                e.done ? r(e.value) : new t(function (n) {
                    n(e.value)
                }).then(s, a)
            }

            l((i = i.apply(e, n || [])).next())
        })
    };
    Object.defineProperty(n, "__esModule", {value: !0});
    const r = t(0), o = t(2), s = t(1), a = t(12), l = t(16), d = s.default.getLogger("Thunder.Util"),
        c = "Thunder Network\\Thunder7.9\\";

    function u(e) {
        let n = e;
        return 0 === e.indexOf('"') && e.lastIndexOf('"') === e.length - 1 ? n = e.substring(1, e.length - 1) : 0 === e.indexOf("'") && e.lastIndexOf("'") === e.length - 1 && (n = e.substring(1, e.length - 1)), n
    }

    !function (e) {
        function n() {
            let e = l.ThunderHelper.getSystemTempPath(), n = l.ThunderHelper.getLogicalDriveStrings(), t = 0;
            for (let i = 0; i < n.length; i++) {
                let r = l.ThunderHelper.getDriveInfo(n[i]);
                3 === r.type && t < r.freeBytes && n[i] !== e && (t = r.freeBytes, e = n[i])
            }
            return e.substring(0, 1) + ":\\迅雷下载"
        }

        e.formatSize = function (e, n) {
            n = n || 2;
            let t = "0B";
            if ("number" == typeof e && e > 0) {
                let i = ["B", "KB", "MB", "GB", "TB"], r = 0, o = e;
                for (; o >= 1e3 && !(r >= 4);) o /= 1024, r += 1;
                t = -1 === String(o).indexOf(".") ? o + i[r] : o.toFixed(n) + i[r]
            }
            return t
        }, e.isDigital = function (e) {
            let n = !1;
            return /^\d+$/.test(e) && (n = !0), n
        }, e.isAlpha = function (e) {
            let n = !1;
            return /[A-Za-z]/.test(e) && (n = !0), n
        }, e.isUpperCase = function (e) {
            let n = !1;
            return /[A-Z]/.test(e) && (n = !0), n
        }, e.isLowerCase = function (e) {
            let n = !1;
            return /[a-z]/.test(e) && (n = !0), n
        }, e.isChinese = function (e) {
            let n = !1;
            return /[\u4E00-\u9FA5]/.test(e) && (n = !0), n
        }, e.replaceNonDigital = function (e) {
            return e.replace(/[^\d]/g, "")
        }, e.replaceNonAlpha = function (e) {
            return e.replace(/[^A-Za-z]/g, "")
        }, e.replaceNonWord = function (e) {
            return e.replace(/[^\W]/g, "")
        }, e.getDefaultDownloadDir = n, e.getMaxFreeDriver = function () {
            return n().substring(0, 1)
        }, e.deepCopy = function (e) {
            let n = JSON.stringify(e), t = null;
            try {
                t = JSON.parse(n)
            } catch (e) {
                d.warning(e)
            }
            return t
        }, e.swap = function (e, n, t) {
            do {
                if (n < 0 || n >= e.length) break;
                if (t < 0 || t >= e.length) break;
                if (n === t) break;
                e[n] = e.splice(t, 1, e[n])[0]
            } while (0);
            return e
        }, e.compareNocase = function (e, n) {
            let t = !1;
            do {
                if (void 0 === e && void 0 === n) {
                    t = !0;
                    break
                }
                if (void 0 === e || void 0 === n) break;
                if ("string" != typeof e || "string" != typeof n) break;
                t = e.toLowerCase() === n.toLowerCase()
            } while (0);
            return t
        }, e.parseCommandLine = function (e) {
            let n = 0, t = "", i = !1, r = [], o = e.length;
            for (let s = 0; s < o; s++) {
                let a = e[s];
                if ('"' !== a && "'" !== a || ("" === t ? (i = !0, t = a) : t === a && (i = !1, t = "")), " " !== a || i || s === o - 1) {
                    if (s === o - 1) {
                        let t = e.substring(n);
                        "" !== t.trim() && r.push(u(t))
                    }
                } else {
                    let t = e.substring(n, s);
                    "" !== t.trim() && r.push(u(t)), n = s + 1
                }
            }
            return r
        }, e.getThunderTempPath = function (e, n) {
            return i(this, void 0, void 0, function* () {
                const i = yield Promise.resolve().then(() => t(7));
                let r = o.join(i.tmpdir(), c);
                return n && (r = o.join(r, n)), void 0 !== e && e && (yield a.FileSystemAWNS.mkdirsAW(r)), r
            })
        }, e.setQueryString = function (e, n) {
            return Object.keys(n).forEach((t, i) => {
                e += 0 === i ? "?" : "&", e += `${t}=${n[t]}`
            }), e
        }, e.getQueryString = function (e, n) {
            return e && n && e.match(new RegExp(`(^${n}|[?|&]${n})=([^&#]+)`)) ? RegExp.$2 : ""
        }, e.isClipboardTextFormatAvailable = function () {
            let e = !1, n = r.clipboard.availableFormats();
            for (let t of n) if ("text/plain" === t) {
                e = !0;
                break
            }
            return e
        }, e.keywordsHighLight = function (e, n, t) {
            if (!e) return "";
            if (!n) return e;
            if (0 === e.length) return e;
            if (0 === n.length) return e;
            let i = /\\/, r = n.split(" ");
            if (0 === (r = r.filter(e => e.trim().length > 0)).length) return e;
            for (let n = 0; n < r.length; n++) if (r[n].search(i) > 0) return e;
            t = void 0 === t || null === t ? "#FF0000" : t;
            let o = "", s = ["\\[", "\\^", "\\*", "\\(", "\\)", "\\|", "\\?", "\\$", "\\.", "\\+"], a = "", l = "|";
            for (let e = 0; e < r.length; e++) {
                for (let n = 0; n < s.length; n++) {
                    let t = new RegExp(s[n], "g");
                    r[e] = r[e].replace(t, s[n])
                }
                e === r.length - 1 && (l = ""), a = a.concat(r[e], l)
            }
            let d = new RegExp(a, "gi");
            return o = e.replace(d, e => '<span style= "color:' + t + '">' + e + "</span>")
        }, e.isDef = function (e) {
            return void 0 !== e && null !== e
        }, e.isUndef = function (e) {
            return void 0 === e || null === e
        }, e.setStyle = function (e, n) {
            Object.entries(n).forEach(([n, t]) => {
                e.style[n] = t
            })
        }, e.setCSSProperties = function (e, n) {
            Object.entries(n).forEach(([n, t]) => {
                e.style.setProperty(n, t)
            })
        }, e.versionCompare = function (e, n) {
            let t = e.split("."), i = n.split("."), r = 0;
            for (let e = 0; e < t.length; e++) {
                if (Number(t[e]) - Number(i[e]) > 0) {
                    r = 1;
                    break
                }
                if (Number(t[e]) - Number(i[e]) < 0) {
                    r = -1;
                    break
                }
            }
            return r
        }, e.throttle = function (e, n) {
            let t, i = 0;
            return (...r) => {
                const o = Date.now();
                clearTimeout(t), o - i > n ? (e(...r), i = o) : t = setTimeout(() => {
                    e(...r), i = o
                }, n)
            }
        }
    }(n.ThunderUtil || (n.ThunderUtil = {}))
}, function (e, n, t) {
    "use strict";
    var i = this && this.__awaiter || function (e, n, t, i) {
        return new (t || (t = Promise))(function (r, o) {
            function s(e) {
                try {
                    l(i.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    l(i.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                e.done ? r(e.value) : new t(function (n) {
                    n(e.value)
                }).then(s, a)
            }

            l((i = i.apply(e, n || [])).next())
        })
    };
    Object.defineProperty(n, "__esModule", {value: !0});
    const r = t(2), o = t(5), s = t(1), a = t(0), l = t(6), d = t(12), c = t(17), u = t(16), f = t(61),
        h = s.default.getLogger("ThunderNewTask"), p = o.default(r.join(__rootDir, "../bin/ThunderHelper.node"));
    let m = 5;
    !function (e) {
        let n;

        function o(e, n, t) {
            void 0 === t && (t = u.ThunderHelper.getTaskTypeFromUrl(e));
            let i = void 0, o = -1, s = "", a = "";
            do {
                if (t !== c.DownloadKernel.TaskType.Emule && t !== c.DownloadKernel.TaskType.P2sp) break;
                let l = f.ParseUrlFileNameNS.getNameFromUrl(e), d = r.extname(l);
                if ("" !== d && (s = d.substring(1)), t === c.DownloadKernel.TaskType.Emule) {
                    let n = f.ParseUrlFileNameNS.parseEd2kUrl(e);
                    o = n.fileSize, a = n.fileHash
                }
                i = {
                    url: e,
                    cookie: "",
                    referer: "",
                    fileName: l,
                    browser: "",
                    statClick: n = void 0 === n ? "" : n,
                    fileSize: o,
                    fileHash: a,
                    fileType: s
                };
                break
            } while (0);
            return i
        }

        !function (e) {
            e.PreNewTask = "PreNewTaskCtrl", e.NewTask = "NewTaskCtrl", e.UrlFilter = "UrlFilterCtrl", e.Magnet = "BtCtrl"
        }(n = e.TaskCtrlType || (e.TaskCtrlType = {})), e.updateThreadCount = function (e) {
            do {
                if (isNaN(e)) break;
                if (e <= 0 || e > 10) break;
                m = e
            } while (0)
        }, e.contructTaskByUrl = function (e, n, t) {
            let i = o(e, n, t);
            h.verbose(e);
            let r = 5;
            return {
                taskType: t,
                data: i,
                setting: {
                    loginFtp: !1,
                    ftpInfo: {userName: "", password: ""},
                    onlyOrigin: !1,
                    thread: r = null !== i.thread && void 0 !== i.thread ? i.thread : m,
                    note: "",
                    openAfterDownload: !1
                },
                selected: !0
            }
        }, e.contructTaskByUrlData = function (e, n) {
            let t = void 0, i = u.ThunderHelper.getTaskTypeFromUrl(e.url);
            if (i === c.DownloadKernel.TaskType.Emule && (void 0 === e.fileHash || "" === e.fileHash)) {
                let n = f.ParseUrlFileNameNS.parseEd2kUrl(e.url);
                e.fileSize = n.fileSize, e.fileHash = n.fileHash
            }
            if (void 0 !== e.fileSize && null !== e.fileSize && 0 !== e.fileSize || (e.fileSize = -1), void 0 !== e.fileName && "" !== e.fileName || (e.fileName = f.ParseUrlFileNameNS.getNameFromUrl(e.url)), e.fileName = e.fileName.replace(/[*?/\\:|<>\"]/g, "_"), void 0 === e.fileType || "" === e.fileType) {
                let n = r.extname(e.fileName);
                "" !== n && (e.fileType = n.substring(1))
            }
            if (void 0 === n || null === n) {
                let t = 5;
                n = {
                    loginFtp: !1,
                    ftpInfo: {userName: "", password: ""},
                    onlyOrigin: !1,
                    thread: t = null !== e.thread && void 0 !== e.thread ? e.thread : m,
                    note: "",
                    openAfterDownload: !1
                }
            }
            return t = {taskType: i, data: e, setting: n, selected: !0}
        }, e.getDesktopPath = function () {
            return p.getDesktopPath()
        }, e.getDocumentPath = function () {
            return p.getDocumentPath()
        }, e.queryFileExists = function (e) {
            return p.queryFileExists(e)
        }, e.isFilePathValid = function (e) {
            return p.isFilePathValid(e)
        }, e.getNewTaskDataByUrl = o, e.getDownloadResult = function (e, ...n) {
            return i(this, void 0, void 0, function* () {
                let t = {result: !1};
                do {
                    if (e.length < 3) {
                        t.message = "不合法的存储路径";
                        break
                    }
                    if (!(yield d.FileSystemAWNS.mkdirsAW(e))) {
                        t.message = "不合法的存储路径";
                        break
                    }
                    a.ipcRenderer.send(l.ThunderChannelList.channelRMNewTaskCreateNewTask, e, ...n), t = yield new Promise(e => {
                        a.ipcRenderer.once(l.ThunderChannelList.channelMRNewTaskCreateNewTaskResult, (n, t, i) => {
                            e({result: t, message: i})
                        })
                    })
                } while (0);
                return t
            })
        }, e.readThunderUnionConfig = function (e) {
            return i(this, void 0, void 0, function* () {
                let n = null, i = null;
                try {
                    const i = yield t(63);
                    i.defaults.adapter = t(28), n = yield i.get(e)
                } catch (e) {
                    h.information(e)
                }
                return null !== n && void 0 !== n.status && 200 === n.status && void 0 !== n.data && null !== n.data && (i = n.data), i
            })
        }
    }(n.ThunderNewtaskHelperNS || (n.ThunderNewtaskHelperNS = {}))
}, function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {value: !0});
    const i = t(2), r = t(1), o = t(17), s = t(62), a = t(16), l = t(5), d = r.default.getLogger("ThunderNewTask"),
        c = l.default(i.join(__rootDir, "../bin/ThunderHelper.node")),
        u = ".asf;.avi;.exe;.iso;.mp3;.mpeg;.mpg;.mpga;.ra;.rar;.rm;.rmvb;.tar;.wma;.wmp;.wmv;\n  .mov;.zip;.3gp;.chm;.mdf;.torrent;.jar;.msi;.arj;.bin;.dll;.psd;.hqx;.sit;.lzh;.gz;.tgz;.xlsx;.xls;.doc;.docx;.ppt;\n  .pptx;.flv;.swf;.mkv;.tp;.ts;.flac;.ape;.wav;.aac;.txt;.dat;.7z;.ttf;.bat;.xv;.xvx;.pdf;.mp4;.apk;.ipa;.epub;.mobi;\n  .deb;.sisx;.cab;.pxl;",
        f = ".a;.a3m;.a3w;.a4m;.a4p;.a4w;.a5w;.aam;.aas;.abf;.abk;.abs;.ace;.acm;.acp;.act;.ad;\n  .ada;.adb;.adf;.adi;.adm;.adp;.adr;.ads;.af2;.af3;.afm;.ai;.aif;.aifc;.aiff;.aim;.ais;.akw;.alb;.all;.ams;.anc;.ani;\n  .ans;.ant;.api;.aps;.ari;.arj;.art;.asa;.asc;.asd;.ase;.asf;.asm;.aso;.asp;.asv;.asx;.atw;.au;.avb;.avi;.avr;.avs;\n  .awd;.awr;.axx;.bak;.bas;.bat;.bdf;.bgl;.bi;.bif;.biff;.bin;.bk;.bk$;.bks;.bmk;.bmp;.book;.brx;.bsp;.btm;.bud;.bun;\n  .bw;.bwv;.c;.cab;.cad;.cal;.cap;.cas;.cb;.cc;.ccb;.cch;.cco;.cct;.cda;.cdf;.cdi;.cdm;.cdr;.cdt;.cdx;.cfg;.cgi;.cgm;\n  .chk;.chm;.chr;.cif;.cil;.class;.cll;.clp;.cls;.cmf;.cmv;.cmx;.cnf;.cnm;.cnt;.cod;.com;.cpl;.cpo;.cpp;.cpr;.cpt;.cpx;\n  .crd;.crp;.crt;.csc;.csp;.cst;.csv;.ctl;.cur;.cv;.cxx;.dat;.db;.dbc;.dbf;.dbx;.dcm;.dcs;.dct;.dcu;.dcx;.dem;.der;.dewf;\n  .dib;.dic;.dif;.dig;.dir;.diz;.dlg;.dll;.dls;.dmd;.dmf;.doc;.dot;.draw;.drv;.drw;.dsf;.dsg;.dsm;.dsp;.dsq;.dsw;.dtd;\n  .dun;.dv;.dxf;.dxr;.eda;.edd;.emd;.emf;.eml;.ephtml;.eps;.exe;.fav;.fax;.fcd;.fdf;.ffa;.ffk;.ffl;.ffo;.fif;.fla;.flc;\n  .fm;.fml;.fng;.fnk;.fon;.fot;.frt;.frx;.ftg;.fts;.gal;.gdb;.gdm;.gem;.gen;.getright;.gfi;.gfx;.gho;.gif;.gim;.gix;.gkh;\n  .gks;.gl;.gna;.gnt;.gnx;.gra;.grf;.grp;.hcom;.hgl;.hlp;.hpj;.hpp;.hst;.ht;.htm;.html;.htt;.htx;.icb;.icc;.icl;.icm;.ico;\n  .idd;.idf;.idq;.idx;.iff;.iges;.igf;.ilbm;.ima;.inf;.ini;.inrs;.ins;.int;.iqy;.iso;.ist;.isu;.iwc;.j62;.jar;.java;.jbf;\n  .jff;.jfif;.jif;.jmp;.jpe;.jpeg;.jpg;.js;.jsp;.jtf;.k25;.kar;.kdc;.key;.kfx;.kiz;.kkw;.kmp;.kqp;.lab;.lbm;.lbt;.lbx;.ldb;\n  .ldl;.leg;.lft;.lgo;.lha;.lib;.lin;.lis;.llx;.lnk;.log;.lst;.lu;.lyr;.lzh;.lzs;.m1v;.m3u;.mad;.maf;.mam;.map;.maq;.mar;.mat;\n  .mb1;.mbx;.mcr;.mdb;.mde;.mdl;.mdn;.mdw;.mdz;.mic;.mid;.mim;.mime;.mli;.mme;.mng;.mnu;.mod;.mov;.mp2;.mp3;.mpa;.mpe;.mpeg;\n  .mpg;.mpp;.mpr;.msg;.msi;.msn;.msp;.mst;.mtm;.nan;.nap;.ncb;.ncd;.ncf;.nff;.nft;.nil;.nist;.nls;.nlu;.ntx;.nwc;.nws;.obj;\n  .ocx;.ods;.ofn;.oft;.olb;.ole;.oogl;.opo;.p65;.pab;.part;.pas;.pbd;.pbl;.pbm;.pbr;.pcd;.pcl;.pcm;.pdd;.pdf;.pfm;.pgl;.pgm;\n  .ph;.php;.php3;.phtml;.pic;.pjt;.pjx;.pkg;.pli;.png;.pot;.ppa;.ppf;.ppm;.pps;.ppt;.prf;.prg;.prj;.prn;.prt;.psd;.psp;.pst;\n  .pwz;.qic;.qif;.qlb;.qry;.qtp;.qtx;.qw;.ra;.ram;.rar;.rdf;.reg;.rep;.res;.rft;.rgb;.rm;.rmd;.rpt;.rtf;.rul;.rvp;.s;.sav;.sbl;\n  .scc;.scf;.scp;.scr;.sct;.scx;.sdt;.sdv;.sdx;.sep;.sfd;.sfi;.sfr;.sfx;.sgi;.sgml;.shg;.shtml;.shw;.sig;.ska;.skl;.sl;.spl;\n  .sqc;.sqr;.str;.swa;.swf;.sys;.syw;.taz;.tga;.theme;.thn;.tif;.tiff;.tig;.tlb;.tmp;.tol;.tpl;.trm;.trn;.ttf;.txt;.txw;.udf;\n  .ult;.url;.use;.uwf;.vbp;.vbp;.vbw;.vbw;.vbx;.vbx;.vct;.vcx;.vda;.vda;.vir;.vir;.viv;.vqf;.vsd;.vsd;.vsl;.vsl;.vss;.vss;.vst;\n  .vst;.vsw;.vsw;.vxd;.vxd;.w3l;.wab;.wad;.wav;.wbk;.wcm;.wdb;.wfm;.wfn;.wil;.wiz;.wll;.wmf;.wow;.wp;.wpd;.wpf;.wpg;.wps;.wpt;.wr1;\n  .wrk;.wrl;.wrz;.x;.x16;.x32;.xar;.xbm;.xi;.xla;.xlb;.xlc;.xld;.xlk;.xll;.xlm;.xls;.xlt;.xlv;.xlw;.xnk;.xpm;.xwd;.xwf;.yal;.z;.zap;.zip;";
    !function (e) {
        function n(e) {
            let n = !1;
            do {
                if (void 0 === e || null === e) break;
                if ("" === e || "." === e) break;
                if (u.indexOf(e) > -1) {
                    n = !0;
                    break
                }
            } while (0);
            return n
        }

        function t(e) {
            let n = !1;
            do {
                if (void 0 === e || null === e) break;
                if ("" === e) break;
                if (e.match(/[\/\\"<>\?\*|]/)) break;
                n = !0
            } while (0);
            return n
        }

        function r(e) {
            let t = !1;
            do {
                if (void 0 === e || null === e) break;
                if ("" === e || "." === e) break;
                let i = s.TaskUtilHelper.getTaskFileType(void 0, e);
                if (i === s.TaskUtilHelper.FileExtType.Video || i === s.TaskUtilHelper.FileExtType.Music || i === s.TaskUtilHelper.FileExtType.Pic) {
                    t = !0;
                    break
                }
                t = n(e)
            } while (0);
            return t
        }

        function l(e) {
            let n = !1, o = i.parse(e);
            return n = t(o.name) && r(o.ext)
        }

        function h(e) {
            let n = {};
            do {
                if (void 0 === e || null === e) break;
                d.information("parseDynamicUrlArgs");
                let t = /([^&=?]+)=([^&]*)/g;
                for (; t.exec(e);) n[RegExp.$1] = RegExp.$2;
                d.information("parseDynamicUrlArgs ret ", n)
            } while (0);
            return n
        }

        function p(e) {
            let n = {pageFileName: void 0, args: void 0};
            do {
                if (void 0 === e || null === e) break;
                d.information("parseDynamicUrlPath"), e.match(/[\/]?([^?]*)\?([^\s]*)/) && (n.pageFileName = RegExp.$1, n.args = RegExp.$2), d.information("parseDynamicUrlPath ret", n)
            } while (0);
            return n
        }

        function m(e) {
            let n = "";
            do {
                if (void 0 === e || null === e) break;
                let t = p(e);
                if (void 0 !== t.args) {
                    let e = h(t.args);
                    for (let t in e) {
                        let i = e[t];
                        if (l(i)) {
                            n = i;
                            break
                        }
                    }
                }
                void 0 !== t.pageFileName && l(t.pageFileName) && (n = t.pageFileName)
            } while (0);
            return n
        }

        function g(e) {
            let n = [];
            do {
                if (void 0 === e || null === e) break;
                let t = m(e);
                if ("" !== t && !n.includes(t)) {
                    let e = w(t);
                    n.push(e)
                }
                let i = w(e);
                n.includes(i) || n.push(i)
            } while (0);
            return n
        }

        function w(e) {
            return c.parseFileNameFromP2spUrlPath(e)
        }

        function v(e) {
            return c.isThunderPrivateUrl(e)
        }

        function C(e) {
            return c.parseEd2kUrl(e)
        }

        function y(e) {
            return c.parseUrl(e)
        }

        e.isDownloadFileExtName = n, e.isIllegalFileName = t, e.isGoodFileExtName = r, e.isUsualFileExtName = function (e) {
            let n = !1;
            do {
                if (void 0 === e || null === e) break;
                if ("" === e || "." === e) break;
                if (r(e)) {
                    n = !0;
                    break
                }
                if (f.indexOf(e) > -1) {
                    n = !0;
                    break
                }
            } while (0);
            return n
        }, e.isGoodFileName = l, e.parseDynamicUrlArgs = h, e.parseDynamicUrlPath = p, e.parseFileNameFromDynamicUrlPath = m, e.getFileNameListFromUrlPath = g, e.getNameFromUrl = function (e) {
            let n = "index.html", t = a.ThunderHelper.getTaskTypeFromUrl(e);
            if (t === o.DownloadKernel.TaskType.P2sp) {
                let t = g(y(e).fullPath);
                t.length > 0 && (n = t[0])
            } else t === o.DownloadKernel.TaskType.Emule && (n = C(e).fileName);
            return n.replace(/[*?/\\:|<>\"]/g, "_")
        }, e.parseFileNameFromP2spUrlPath = w, e.isThunderPrivateUrl = v, e.parseThunderPrivateUrl = function (e) {
            let n = {url: e, codePage: -1};
            return v(e) && (n = c.parseThunderPrivateUrl(e)), n
        }, e.parseEd2kUrl = C, e.parseUrl = y, e.parseMagnetUrl = function (e) {
            return c.parseMagnetUrl(e)
        }, e.makeUrl = function (e) {
            return c.makeUrl(e)
        }
    }(n.ParseUrlFileNameNS || (n.ParseUrlFileNameNS = {}))
}, function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {value: !0});
    const i = t(2), r = t(17);
    let o = ["apk", "avi", "chm", "doc", "exe", "flv", "ipa", "ipsw", "iso", "mkv", "mov", "mp4"];
    o.push(...["mpg", "pdf", "ppt", "rar", "rm", "rmvb", "txt", "wmv", "xls"]);
    const s = ".xv;.xlmv;.3gp;.3gp2;.3gpp;.3gpp2;.3mm;.3p2;.60d;.787;.aaf;.aep;.aepx;.aet;.aetx;.ajp;.ale;.amv;.amx;.arf;\n  .asf;.ass;.asx;.avb;.avd;.avi;.avp;.avs;.avs;.axm;.bdm;.bdmv;.bik;.bix;.bmk;.bnp;.box;.bs4;.bsf;.byu;.camproj;.camrec;.clpi;.cmmp;\n  .cmmtpl;.cmproj; .cmrec;.cpi;.cst;.cvc;.d2v;.d3v;.dat;.dav;.dce;.dck;.ddat;.dif;.dir;.divx;.dlx; .dmb;.dmsm;.dmsm3d;.dmss;.dnc;.dpg;\n  .dream;.dsy;.dv;.dv-avi;.dv4;.dvdmedia; .dvr-ms;.dvx;.dxr;.dzm;.dzp;.dzt;.edl;.evo;.eye;.f4p;.f4v;.fbr;.fbr;.fbz;.fcp; .flc;.flh;\n  .fli;.flv;.flx;.gfp;.gl;.grasp;.gts;.gvi;.gvp;.hdmov;.hkm;.ifo; .imovieproj;.imovieproject;.iva;.ivf;.ivr;.ivs;.izz;.izzy;.jts;.jtv;\n  .k3g;.lrec; .lsf;.lsx;.m15;.m1pg;.m1v;.m21;.m21;.m2a;.m2p;.m2t;.m2ts;.m2v;.m4e;.m4u;.m4v; .m75;.meta;.mgv;.mj2;.mjp;.mjpg;.mkv;.mmv;\n  .mnv;.mod;.modd;.moff;.moi;.moov;.mov; .movie;.mp21;.mp21;.mp2v;.mp4;.mp4v;.mpe;.mpeg;.mpeg4;.mpf;.mpg;.mpg2;.mpgindex; .mpl;.mpls;\n  .mpsub;.mpv;.mpv2;.mqv;.msdvd;.msh;.mswmm;.mts;.mtv;.mvb;.mvc;.mvd; .mve;.mvp;.mvy;.mxf;.mys;.ncor;.nsv;.nuv;.nvc;.ogm;.ogv;.ogx;.osp;\n  .par;.pds;.pgi; .piv;.pjs;.playlist;.pmf;.pns;.ppj;.prel;.pro;.prproj;.prtl;.psb;.psh;.pssd;.pva;.pvr;.pxv; .qt;.qtch;.qtl;.qtm;.qtz;\n  .r3d;.rcproject;.rdb;.rec;.rm;.rmd;.rmp;.rms;.rmvb;.roq; .rp;.rts;.rts;.rum;.rv;.sbk;.sbt;.scc;.scm;.scn;.screenflow;.sec;.seq;.sfd;\n  .sfvidcap;.smi;.smil;.smk;.sml;.smv;.spl;.srt;.ssa;.ssm;.stl;.str;.stx;.sub;.svi;.swf;.swi; .swt;.tda3mt;.tivo;.tix;.tod;.tp;.tp0;.tpd;\n  .tpr;.trp;.ts;.tts;.tvs;.vc1;.vcpf;.vcr; .vcv;.vdo;.vdr;.veg;.vem;.vf;.vfw;.vfz;.vgz;.vid;.viewlet;.viv;.vivo;.vlab;.vob; .vp3;.vp6;.vp7;\n  .vpj;.vro;.vs4;.vse;.vsp;.w32;.wcp;.webm;.wlmp;.wm;.wmd;.wmmp; .wmv;.wmx;.wp3;.wpl;.wtv;.wvx;.xfl;.xvid;.yuv;.zm1;.zm2;.zm3;.zmv;",
        a = ".exe;.com;.bat;.msi;.apk;.ipa;.iso;.mds;.bin;.img;.ipsw;",
        l = ".txt;.html;.htm;.shtml;.xhtml;.chm;.hlp;.inf;.rtf;.tex;.ltx;.doc;.docx;.wps;.ppt;.pptx;.odf;.pdf;.xls;.xlsx;.docm;.\n  dot;.dotm;.dotx;.email;.rp;.pps;.et;.ett;.xlt;.dbf;.prn;.csv;.mht;.mhtml;.xml;.wpt;.dps;.dpt;.pot;.ppsx;.epub;.mobi;.lit;.wdl;.ceb;.abm;\n  .pdg;.umb;.ibooks;",
        d = ".aiff;.cue;.m3u;.au;.cdda;.raw;.wav;.flac;.tak;.mp3;.aac;.wma;.m4a;.mid;.mka;.mp2;.mpa;.mpc;.ape;.ofr;\n  .ogg;.ra;.wv;.tta;.ac3;.dts;.nsf;.mod;.s3m;.xm;.it;.vst;",
        c = ".psd;.tga;.gif;.jpeg;.jpg;.jp2;.bmp;.ico;.pcx;.png;.pbm;.pgm;.ppm;.pnm;.pgf;.arw;.cr2;.crw;.dcr;.dng;.erf;.kdc;.mef;\n  .mos;.mrw;.nef;.nrw;.orf;.pef;.ptx;.r3d;.raf;.raw;.rw2;.srf;.srw;.x3f;.ras;.tiff;.tif;.wbmp;.ilbm;.lbm;.iff;.ico;",
        u = ".zip;.zipx;.rar;.7z;.isz;.cab;.arj;.ace;.alz;.uue;.tar;.gz; .gzip;.tgz;.tpz;.bzip2;.bz2;.bz;.tbz;.tbz2;.xz;.txz;\n  .lzh;.lha;.zt;.az; .xpi;.jar;.wim;.swm;.rpm;.xar;.deb;.dmg;.hfs;.cpio;.lzma;.lzma86;.split;",
        f = ".torrent;",
        h = ".3gp;.asf;.avi;.divx;.f4v;.flv;.mkv;.mov;.movie;.mp4;.mpeg;.mpeg4;.mpg;.mpg2;.rm;.rmvb;.rp;.swf;.tp;.tp0;.ts;.wmv",
        p = ".exe;.com;.bat;.msi", m = ".wav;.flac;.MP3;.AAC;.WMA;.M4A;.MID;.APE;.OGG;.RA;.mod",
        g = ".psd;.tga;.gif;.jpeg;.jpg;.jp2;.bmp;.ico;.pcx;.pdf;.png;.pbm;.pgm;.ppm;.pnm;.pgf;.arw;.cr2;.crw;.dcr;.dng;.erf;.kdc;\n  .mef;.mos;.mrw;.nef;.nrw;.orf;.pef;.ptx;.r3d;.raf;.raw;.rw2;.srf;.srw;.x3f;.ras;.tiff;.tif;.wbmp;.ilbm;.lbm;.iff;.ico",
        w = ".txt;.html;.htm;.shtml;.xhtml;.chm;.hlp;.inf;.rtf;.tex;.ltx;.doc;.docx;.wps;.ppt;.pptx;.odf;.pdf;.xls;.xlsx;.docm;.dot;.dotm;.dotx;.email;.rp;.pps",
        v = ".rar;.tar;.zip;.gzip;.cab;.uue;.arj;.bz2;.lzh;.jar;.ace;.iso;.7-zip;.7z";
    !function (e) {
        let n;

        function t(e) {
            let t = n.Unkown, r = i.extname(e);
            return void 0 === r || "" === r || r.length < 2 ? t = n.Unkown : h.indexOf(r) > -1 ? t = n.Video : p.indexOf(r) > -1 ? t = n.Software : w.indexOf(r) > -1 ? t = n.Doc : m.indexOf(r) > -1 ? t = n.Music : g.indexOf(r) > -1 ? t = n.Pic : v.indexOf(r) > -1 && (t = n.Zip), r.length > 1 && ".z" === r.slice(0, 2) && /[0-9]+/.test(r.substring(2)) && (t = n.Zip), t
        }

        e.getTaskIcon = function (e, n) {
            let t = "";
            do {
                if (n === r.DownloadKernel.TaskType.Bt) {
                    t = "xlx-icon-type-bt-file";
                    break
                }
                if (n === r.DownloadKernel.TaskType.Group) {
                    t = "xlx-icon-type-group";
                    break
                }
                t = "xlx-icon-type-unknown";
                let h = i.extname(e);
                if ("" === h || h.length < 2) break;
                let p = (h = h.toLowerCase()).substring(1);
                if (o.indexOf(p) > -1) {
                    t = "doc" === h ? "xlx-icon-type-word" : "xlx-icon-type-" + p;
                    break
                }
                if (s.indexOf(h) > -1) {
                    t = "xlx-icon-type-video";
                    break
                }
                if (a.indexOf(h) > -1) {
                    t = "xlx-icon-type-install", [".mds", ".bin", ".img"].indexOf(h) > -1 && (t = "xlx-icon-type-iso");
                    break
                }
                if (l.indexOf(h) > -1) {
                    if (t = "xlx-icon-type-doc", [".htm", ".html", ".mht"].indexOf(h) > -1) {
                        t = "xlx-icon-type-link";
                        break
                    }
                    if ("docx" === h) {
                        t = "xlx-icon-type-word";
                        break
                    }
                    if ("xlsx" === h) {
                        t = "xlx-icon-type-xls";
                        break
                    }
                    if ("pptx" === h) {
                        t = "xlx-icon-type-ppt";
                        break
                    }
                    break
                }
                if (d.indexOf(h) > -1) {
                    t = "xlx-icon-type-music";
                    break
                }
                if (c.indexOf(h) > -1) {
                    t = "xlx-icon-type-pic";
                    break
                }
                if (u.indexOf(h) > -1) {
                    t = "xlx-icon-type-rar";
                    break
                }
                if (f.indexOf(h) > -1) {
                    t = "xlx-icon-type-bt-link";
                    break
                }
            } while (0);
            return t
        }, function (e) {
            e[e.Unkown = 0] = "Unkown", e[e.Video = 1] = "Video", e[e.Software = 2] = "Software", e[e.Doc = 3] = "Doc", e[e.Music = 4] = "Music", e[e.Pic = 5] = "Pic", e[e.Zip = 6] = "Zip", e[e.Bt = 7] = "Bt"
        }(n = e.FileExtType || (e.FileExtType = {})), e.getTaskFileType = function (e, t) {
            let r = n.Unkown;
            return void 0 === t && void 0 !== e && (t = i.extname(e)), void 0 === t || "" === t || t.length < 2 ? r = n.Unkown : s.indexOf(t) > -1 ? r = n.Video : a.indexOf(t) > -1 ? r = n.Software : l.indexOf(t) > -1 ? r = n.Doc : d.indexOf(t) > -1 ? r = n.Music : c.indexOf(t) > -1 ? r = n.Pic : u.indexOf(t) > -1 ? r = n.Zip : f.indexOf(t) > -1 && (r = n.Bt), t.length > 1 && ".z" === t.slice(0, 2) && /[0-9]+/.test(t.substring(2)) && (r = n.Zip), r
        }, e.getGroupFileType = t, e.getDefaultGroupPrefix = function (e) {
            let i = "任务组";
            do {
                if (void 0 === e || null === e || 0 === e.length) break;
                let r = [];
                for (let e = 0; e < 7; e++) r[e] = 0;
                for (let n of e) {
                    let e = t(n);
                    r[e] = r[e] + 1
                }
                let o = n.Unkown;
                for (let e = 1; e < r.length; e++) r[e] > r[o] && (o = e);
                o === n.Video ? i = "视频任务组" : o === n.Software ? i = "程序任务组" : o === n.Music ? i = "音乐任务组" : o === n.Pic ? i = "图片任务组" : o === n.Doc ? i = "文档任务组" : o === n.Zip && (i = "压缩包任务组")
            } while (0);
            return i
        }, e.compareVersion = function (e, n) {
            let t = -2;
            do {
                if (null === e || void 0 === e || "" === e || null === n || void 0 === n || "" === n) break;
                let i = 0, r = 0, o = 0, s = 0, a = 0, l = 0, d = 0, c = 0, u = e.split(/\./);
                if (null === u || void 0 === u || u.length < 3) break;
                if (i = Number(u[0]), r = Number(u[1]), o = Number(u[2]), null !== u[3] && void 0 !== u[3] && "" !== u[3] && (s = Number(u[3])), null === (u = n.split(/\./)) || void 0 === u || u.length < 3) break;
                if (a = Number(u[0]), l = Number(u[1]), d = Number(u[2]), null !== u[3] && void 0 !== u[3] && "" !== u[3] && (c = Number(u[3])), a > i) {
                    t = 1;
                    break
                }
                if (a < i) {
                    t = -1;
                    break
                }
                if (l > r) {
                    t = 1;
                    break
                }
                if (l < r) {
                    t = -1;
                    break
                }
                if (d > o) {
                    t = 1;
                    break
                }
                if (d < o) {
                    t = -1;
                    break
                }
                if (0 !== s) {
                    if (c > s) {
                        t = 1;
                        break
                    }
                    if (c < s) {
                        t = -1;
                        break
                    }
                }
                t = 0
            } while (0);
            return t
        }
    }(n.TaskUtilHelper || (n.TaskUtilHelper = {}))
}, function (e, n, t) {
    e.exports = t(64)
}, function (e, n, t) {
    "use strict";
    var i = t(3), r = t(24), o = t(66), s = t(18);

    function a(e) {
        var n = new o(e), t = r(o.prototype.request, n);
        return i.extend(t, o.prototype, n), i.extend(t, n), t
    }

    var l = a(s);
    l.Axios = o, l.create = function (e) {
        return a(i.merge(s, e))
    }, l.Cancel = t(35), l.CancelToken = t(89), l.isCancel = t(34), l.all = function (e) {
        return Promise.all(e)
    }, l.spread = t(90), e.exports = l, e.exports.default = l
}, function (e, n) {
    function t(e) {
        return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
    }

    /*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
    e.exports = function (e) {
        return null != e && (t(e) || function (e) {
            return "function" == typeof e.readFloatLE && "function" == typeof e.slice && t(e.slice(0, 0))
        }(e) || !!e._isBuffer)
    }
}, function (e, n, t) {
    "use strict";
    var i = t(18), r = t(3), o = t(84), s = t(85);

    function a(e) {
        this.defaults = e, this.interceptors = {request: new o, response: new o}
    }

    a.prototype.request = function (e) {
        "string" == typeof e && (e = r.merge({url: arguments[0]}, arguments[1])), (e = r.merge(i, {method: "get"}, this.defaults, e)).method = e.method.toLowerCase();
        var n = [s, void 0], t = Promise.resolve(e);
        for (this.interceptors.request.forEach(function (e) {
            n.unshift(e.fulfilled, e.rejected)
        }), this.interceptors.response.forEach(function (e) {
            n.push(e.fulfilled, e.rejected)
        }); n.length;) t = t.then(n.shift(), n.shift());
        return t
    }, r.forEach(["delete", "get", "head", "options"], function (e) {
        a.prototype[e] = function (n, t) {
            return this.request(r.merge(t || {}, {method: e, url: n}))
        }
    }), r.forEach(["post", "put", "patch"], function (e) {
        a.prototype[e] = function (n, t, i) {
            return this.request(r.merge(i || {}, {method: e, url: n, data: t}))
        }
    }), e.exports = a
}, function (e, n, t) {
    "use strict";
    var i = t(3);
    e.exports = function (e, n) {
        i.forEach(e, function (t, i) {
            i !== n && i.toUpperCase() === n.toUpperCase() && (e[n] = t, delete e[i])
        })
    }
}, function (e, n, t) {
    "use strict";
    var i = t(3), r = t(25), o = t(27), s = t(69), a = t(70), l = t(19),
        d = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || t(71);
    e.exports = function (e) {
        return new Promise(function (n, c) {
            var u = e.data, f = e.headers;
            i.isFormData(u) && delete f["Content-Type"];
            var h = new XMLHttpRequest, p = "onreadystatechange", m = !1;
            if ("undefined" == typeof window || !window.XDomainRequest || "withCredentials" in h || a(e.url) || (h = new window.XDomainRequest, p = "onload", m = !0, h.onprogress = function () {
            }, h.ontimeout = function () {
            }), e.auth) {
                var g = e.auth.username || "", w = e.auth.password || "";
                f.Authorization = "Basic " + d(g + ":" + w)
            }
            if (h.open(e.method.toUpperCase(), o(e.url, e.params, e.paramsSerializer), !0), h.timeout = e.timeout, h[p] = function () {
                if (h && (4 === h.readyState || m) && (0 !== h.status || h.responseURL && 0 === h.responseURL.indexOf("file:"))) {
                    var t = "getAllResponseHeaders" in h ? s(h.getAllResponseHeaders()) : null, i = {
                        data: e.responseType && "text" !== e.responseType ? h.response : h.responseText,
                        status: 1223 === h.status ? 204 : h.status,
                        statusText: 1223 === h.status ? "No Content" : h.statusText,
                        headers: t,
                        config: e,
                        request: h
                    };
                    r(n, c, i), h = null
                }
            }, h.onerror = function () {
                c(l("Network Error", e, null, h)), h = null
            }, h.ontimeout = function () {
                c(l("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", h)), h = null
            }, i.isStandardBrowserEnv()) {
                var v = t(72),
                    C = (e.withCredentials || a(e.url)) && e.xsrfCookieName ? v.read(e.xsrfCookieName) : void 0;
                C && (f[e.xsrfHeaderName] = C)
            }
            if ("setRequestHeader" in h && i.forEach(f, function (e, n) {
                void 0 === u && "content-type" === n.toLowerCase() ? delete f[n] : h.setRequestHeader(n, e)
            }), e.withCredentials && (h.withCredentials = !0), e.responseType) try {
                h.responseType = e.responseType
            } catch (n) {
                if ("json" !== e.responseType) throw n
            }
            "function" == typeof e.onDownloadProgress && h.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && h.upload && h.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function (e) {
                h && (h.abort(), c(e), h = null)
            }), void 0 === u && (u = null), h.send(u)
        })
    }
}, function (e, n, t) {
    "use strict";
    var i = t(3),
        r = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
    e.exports = function (e) {
        var n, t, o, s = {};
        return e ? (i.forEach(e.split("\n"), function (e) {
            if (o = e.indexOf(":"), n = i.trim(e.substr(0, o)).toLowerCase(), t = i.trim(e.substr(o + 1)), n) {
                if (s[n] && r.indexOf(n) >= 0) return;
                s[n] = "set-cookie" === n ? (s[n] ? s[n] : []).concat([t]) : s[n] ? s[n] + ", " + t : t
            }
        }), s) : s
    }
}, function (e, n, t) {
    "use strict";
    var i = t(3);
    e.exports = i.isStandardBrowserEnv() ? function () {
        var e, n = /(msie|trident)/i.test(navigator.userAgent), t = document.createElement("a");

        function r(e) {
            var i = e;
            return n && (t.setAttribute("href", i), i = t.href), t.setAttribute("href", i), {
                href: t.href,
                protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
                host: t.host,
                search: t.search ? t.search.replace(/^\?/, "") : "",
                hash: t.hash ? t.hash.replace(/^#/, "") : "",
                hostname: t.hostname,
                port: t.port,
                pathname: "/" === t.pathname.charAt(0) ? t.pathname : "/" + t.pathname
            }
        }

        return e = r(window.location.href), function (n) {
            var t = i.isString(n) ? r(n) : n;
            return t.protocol === e.protocol && t.host === e.host
        }
    }() : function () {
        return !0
    }
}, function (e, n, t) {
    "use strict";
    var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

    function r() {
        this.message = "String contains an invalid character"
    }

    r.prototype = new Error, r.prototype.code = 5, r.prototype.name = "InvalidCharacterError", e.exports = function (e) {
        for (var n, t, o = String(e), s = "", a = 0, l = i; o.charAt(0 | a) || (l = "=", a % 1); s += l.charAt(63 & n >> 8 - a % 1 * 8)) {
            if ((t = o.charCodeAt(a += .75)) > 255) throw new r;
            n = n << 8 | t
        }
        return s
    }
}, function (e, n, t) {
    "use strict";
    var i = t(3);
    e.exports = i.isStandardBrowserEnv() ? {
        write: function (e, n, t, r, o, s) {
            var a = [];
            a.push(e + "=" + encodeURIComponent(n)), i.isNumber(t) && a.push("expires=" + new Date(t).toGMTString()), i.isString(r) && a.push("path=" + r), i.isString(o) && a.push("domain=" + o), !0 === s && a.push("secure"), document.cookie = a.join("; ")
        }, read: function (e) {
            var n = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
            return n ? decodeURIComponent(n[3]) : null
        }, remove: function (e) {
            this.write(e, "", Date.now() - 864e5)
        }
    } : {
        write: function () {
        }, read: function () {
            return null
        }, remove: function () {
        }
    }
}, function (e, n) {
    e.exports = require("assert")
}, function (e, n) {
    e.exports = require("stream")
}, function (e, n, t) {
    "undefined" == typeof process || "renderer" === process.type ? e.exports = t(76) : e.exports = t(78)
}, function (e, n, t) {
    function i() {
        var e;
        try {
            e = n.storage.debug
        } catch (e) {
        }
        return !e && "undefined" != typeof process && "env" in process && (e = process.env.DEBUG), e
    }

    (n = e.exports = t(33)).log = function () {
        return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
    }, n.formatArgs = function (e) {
        var t = this.useColors;
        if (e[0] = (t ? "%c" : "") + this.namespace + (t ? " %c" : " ") + e[0] + (t ? "%c " : " ") + "+" + n.humanize(this.diff), !t) return;
        var i = "color: " + this.color;
        e.splice(1, 0, i, "color: inherit");
        var r = 0, o = 0;
        e[0].replace(/%[a-zA-Z%]/g, function (e) {
            "%%" !== e && "%c" === e && (o = ++r)
        }), e.splice(o, 0, i)
    }, n.save = function (e) {
        try {
            null == e ? n.storage.removeItem("debug") : n.storage.debug = e
        } catch (e) {
        }
    }, n.load = i, n.useColors = function () {
        if ("undefined" != typeof window && window.process && "renderer" === window.process.type) return !0;
        if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
        return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
    }, n.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function () {
        try {
            return window.localStorage
        } catch (e) {
        }
    }(), n.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], n.formatters.j = function (e) {
        try {
            return JSON.stringify(e)
        } catch (e) {
            return "[UnexpectedJSONParseError]: " + e.message
        }
    }, n.enable(i())
}, function (e, n) {
    var t = 1e3, i = 60 * t, r = 60 * i, o = 24 * r, s = 365.25 * o;

    function a(e, n, t) {
        if (!(e < n)) return e < 1.5 * n ? Math.floor(e / n) + " " + t : Math.ceil(e / n) + " " + t + "s"
    }

    e.exports = function (e, n) {
        n = n || {};
        var l, d = typeof e;
        if ("string" === d && e.length > 0) return function (e) {
            if ((e = String(e)).length > 100) return;
            var n = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
            if (!n) return;
            var a = parseFloat(n[1]);
            switch ((n[2] || "ms").toLowerCase()) {
                case"years":
                case"year":
                case"yrs":
                case"yr":
                case"y":
                    return a * s;
                case"days":
                case"day":
                case"d":
                    return a * o;
                case"hours":
                case"hour":
                case"hrs":
                case"hr":
                case"h":
                    return a * r;
                case"minutes":
                case"minute":
                case"mins":
                case"min":
                case"m":
                    return a * i;
                case"seconds":
                case"second":
                case"secs":
                case"sec":
                case"s":
                    return a * t;
                case"milliseconds":
                case"millisecond":
                case"msecs":
                case"msec":
                case"ms":
                    return a;
                default:
                    return
            }
        }(e);
        if ("number" === d && !1 === isNaN(e)) return n.long ? a(l = e, o, "day") || a(l, r, "hour") || a(l, i, "minute") || a(l, t, "second") || l + " ms" : function (e) {
            if (e >= o) return Math.round(e / o) + "d";
            if (e >= r) return Math.round(e / r) + "h";
            if (e >= i) return Math.round(e / i) + "m";
            if (e >= t) return Math.round(e / t) + "s";
            return e + "ms"
        }(e);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
    }
}, function (e, n, t) {
    var i = t(79), r = t(4);
    (n = e.exports = t(33)).init = function (e) {
        e.inspectOpts = {};
        for (var t = Object.keys(n.inspectOpts), i = 0; i < t.length; i++) e.inspectOpts[t[i]] = n.inspectOpts[t[i]]
    }, n.log = function () {
        return process.stderr.write(r.format.apply(r, arguments) + "\n")
    }, n.formatArgs = function (e) {
        var t = this.namespace;
        if (this.useColors) {
            var i = this.color, r = "[3" + (i < 8 ? i : "8;5;" + i), o = "  " + r + ";1m" + t + " [0m";
            e[0] = o + e[0].split("\n").join("\n" + o), e.push(r + "m+" + n.humanize(this.diff) + "[0m")
        } else e[0] = (n.inspectOpts.hideDate ? "" : (new Date).toISOString() + " ") + t + " " + e[0]
    }, n.save = function (e) {
        null == e ? delete process.env.DEBUG : process.env.DEBUG = e
    }, n.load = s, n.useColors = function () {
        return "colors" in n.inspectOpts ? Boolean(n.inspectOpts.colors) : i.isatty(process.stderr.fd)
    }, n.colors = [6, 2, 3, 4, 5, 1];
    try {
        var o = t(80);
        o && o.level >= 2 && (n.colors = [20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221])
    } catch (e) {
    }

    function s() {
        return process.env.DEBUG
    }

    n.inspectOpts = Object.keys(process.env).filter(function (e) {
        return /^debug_/i.test(e)
    }).reduce(function (e, n) {
        var t = n.substring(6).toLowerCase().replace(/_([a-z])/g, function (e, n) {
            return n.toUpperCase()
        }), i = process.env[n];
        return i = !!/^(yes|on|true|enabled)$/i.test(i) || !/^(no|off|false|disabled)$/i.test(i) && ("null" === i ? null : Number(i)), e[t] = i, e
    }, {}), n.formatters.o = function (e) {
        return this.inspectOpts.colors = this.useColors, r.inspect(e, this.inspectOpts).split("\n").map(function (e) {
            return e.trim()
        }).join(" ")
    }, n.formatters.O = function (e) {
        return this.inspectOpts.colors = this.useColors, r.inspect(e, this.inspectOpts)
    }, n.enable(s())
}, function (e, n) {
    e.exports = require("tty")
}, function (e, n, t) {
    "use strict";
    const i = t(7), r = t(81), o = process.env;
    let s;

    function a(e) {
        return function (e) {
            return 0 !== e && {level: e, hasBasic: !0, has256: e >= 2, has16m: e >= 3}
        }(function (e) {
            if (!1 === s) return 0;
            if (r("color=16m") || r("color=full") || r("color=truecolor")) return 3;
            if (r("color=256")) return 2;
            if (e && !e.isTTY && !0 !== s) return o.VSCODE_PID ? 1 : 0;
            const n = s ? 1 : 0;
            if ("win32" === process.platform) {
                const e = i.release().split(".");
                return Number(process.versions.node.split(".")[0]) >= 8 && Number(e[0]) >= 10 && Number(e[2]) >= 10586 ? Number(e[2]) >= 14931 ? 3 : 2 : 1
            }
            if ("CI" in o) return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI"].some(e => e in o) || "codeship" === o.CI_NAME ? 1 : n;
            if ("TEAMCITY_VERSION" in o) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(o.TEAMCITY_VERSION) ? 1 : 0;
            if ("truecolor" === o.COLORTERM) return 3;
            if ("TERM_PROGRAM" in o) {
                const e = parseInt((o.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
                switch (o.TERM_PROGRAM) {
                    case"iTerm.app":
                        return e >= 3 ? 3 : 2;
                    case"Apple_Terminal":
                        return 2
                }
            }
            return /-256(color)?$/i.test(o.TERM) ? 2 : /^screen|^xterm|^vt100|^rxvt|color|ansi|cygwin|linux/i.test(o.TERM) ? 1 : "COLORTERM" in o ? 1 : (o.TERM, n)
        }(e))
    }

    r("no-color") || r("no-colors") || r("color=false") ? s = !1 : (r("color") || r("colors") || r("color=true") || r("color=always")) && (s = !0), "FORCE_COLOR" in o && (s = 0 === o.FORCE_COLOR.length || 0 !== parseInt(o.FORCE_COLOR, 10)), e.exports = {
        supportsColor: a,
        stdout: a(process.stdout),
        stderr: a(process.stderr)
    }
}, function (e, n, t) {
    "use strict";
    e.exports = ((e, n) => {
        n = n || process.argv;
        const t = e.startsWith("-") ? "" : 1 === e.length ? "-" : "--", i = n.indexOf(t + e), r = n.indexOf("--");
        return -1 !== i && (-1 === r || i < r)
    })
}, function (e, n) {
    e.exports = require("zlib")
}, function (e) {
    e.exports = {
        _args: [["axios@0.18.0", "D:\\thunderx_bin\\trunk\\build\\app"]],
        _from: "axios@0.18.0",
        _id: "axios@0.18.0",
        _inBundle: !1,
        _integrity: "sha1-MtU+SFHv3AoRmTts0AB4nXDAUQI=",
        _location: "/axios",
        _phantomChildren: {},
        _requested: {
            type: "version",
            registry: !0,
            raw: "axios@0.18.0",
            name: "axios",
            escapedName: "axios",
            rawSpec: "0.18.0",
            saveSpec: null,
            fetchSpec: "0.18.0"
        },
        _requiredBy: ["/", "/@types/axios", "/@xunlei/thunderx-login-main"],
        _resolved: "http://xnpm.repo.xunlei.cn/axios/-/axios-0.18.0.tgz",
        _spec: "0.18.0",
        _where: "D:\\thunderx_bin\\trunk\\build\\app",
        author: {name: "Matt Zabriskie"},
        browser: {"./lib/adapters/http.js": "./lib/adapters/xhr.js"},
        bugs: {url: "https://github.com/axios/axios/issues"},
        bundlesize: [{path: "./dist/axios.min.js", threshold: "5kB"}],
        dependencies: {"follow-redirects": "^1.3.0", "is-buffer": "^1.1.5"},
        description: "Promise based HTTP client for the browser and node.js",
        devDependencies: {
            bundlesize: "^0.5.7",
            coveralls: "^2.11.9",
            "es6-promise": "^4.0.5",
            grunt: "^1.0.1",
            "grunt-banner": "^0.6.0",
            "grunt-cli": "^1.2.0",
            "grunt-contrib-clean": "^1.0.0",
            "grunt-contrib-nodeunit": "^1.0.0",
            "grunt-contrib-watch": "^1.0.0",
            "grunt-eslint": "^19.0.0",
            "grunt-karma": "^2.0.0",
            "grunt-ts": "^6.0.0-beta.3",
            "grunt-webpack": "^1.0.18",
            "istanbul-instrumenter-loader": "^1.0.0",
            "jasmine-core": "^2.4.1",
            karma: "^1.3.0",
            "karma-chrome-launcher": "^2.0.0",
            "karma-coverage": "^1.0.0",
            "karma-firefox-launcher": "^1.0.0",
            "karma-jasmine": "^1.0.2",
            "karma-jasmine-ajax": "^0.1.13",
            "karma-opera-launcher": "^1.0.0",
            "karma-safari-launcher": "^1.0.0",
            "karma-sauce-launcher": "^1.1.0",
            "karma-sinon": "^1.0.5",
            "karma-sourcemap-loader": "^0.3.7",
            "karma-webpack": "^1.7.0",
            "load-grunt-tasks": "^3.5.2",
            minimist: "^1.2.0",
            sinon: "^1.17.4",
            typescript: "^2.0.3",
            "url-search-params": "^0.6.1",
            webpack: "^1.13.1",
            "webpack-dev-server": "^1.14.1"
        },
        homepage: "https://github.com/axios/axios",
        keywords: ["xhr", "http", "ajax", "promise", "node"],
        license: "MIT",
        main: "index.js",
        name: "axios",
        repository: {type: "git", url: "git+https://github.com/axios/axios.git"},
        scripts: {
            build: "NODE_ENV=production grunt build",
            coveralls: "cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",
            examples: "node ./examples/server.js",
            postversion: "git push && git push --tags",
            preversion: "npm test",
            start: "node ./sandbox/server.js",
            test: "grunt test && bundlesize",
            version: "npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json"
        },
        typings: "./index.d.ts",
        version: "0.18.0"
    }
}, function (e, n, t) {
    "use strict";
    var i = t(3);

    function r() {
        this.handlers = []
    }

    r.prototype.use = function (e, n) {
        return this.handlers.push({fulfilled: e, rejected: n}), this.handlers.length - 1
    }, r.prototype.eject = function (e) {
        this.handlers[e] && (this.handlers[e] = null)
    }, r.prototype.forEach = function (e) {
        i.forEach(this.handlers, function (n) {
            null !== n && e(n)
        })
    }, e.exports = r
}, function (e, n, t) {
    "use strict";
    var i = t(3), r = t(86), o = t(34), s = t(18), a = t(87), l = t(88);

    function d(e) {
        e.cancelToken && e.cancelToken.throwIfRequested()
    }

    e.exports = function (e) {
        return d(e), e.baseURL && !a(e.url) && (e.url = l(e.baseURL, e.url)), e.headers = e.headers || {}, e.data = r(e.data, e.headers, e.transformRequest), e.headers = i.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), i.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (n) {
            delete e.headers[n]
        }), (e.adapter || s.adapter)(e).then(function (n) {
            return d(e), n.data = r(n.data, n.headers, e.transformResponse), n
        }, function (n) {
            return o(n) || (d(e), n && n.response && (n.response.data = r(n.response.data, n.response.headers, e.transformResponse))), Promise.reject(n)
        })
    }
}, function (e, n, t) {
    "use strict";
    var i = t(3);
    e.exports = function (e, n, t) {
        return i.forEach(t, function (t) {
            e = t(e, n)
        }), e
    }
}, function (e, n, t) {
    "use strict";
    e.exports = function (e) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
    }
}, function (e, n, t) {
    "use strict";
    e.exports = function (e, n) {
        return n ? e.replace(/\/+$/, "") + "/" + n.replace(/^\/+/, "") : e
    }
}, function (e, n, t) {
    "use strict";
    var i = t(35);

    function r(e) {
        if ("function" != typeof e) throw new TypeError("executor must be a function.");
        var n;
        this.promise = new Promise(function (e) {
            n = e
        });
        var t = this;
        e(function (e) {
            t.reason || (t.reason = new i(e), n(t.reason))
        })
    }

    r.prototype.throwIfRequested = function () {
        if (this.reason) throw this.reason
    }, r.source = function () {
        var e;
        return {
            token: new r(function (n) {
                e = n
            }), cancel: e
        }
    }, e.exports = r
}, function (e, n, t) {
    "use strict";
    e.exports = function (e) {
        return function (n) {
            return e.apply(null, n)
        }
    }
}, function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {value: !0}), function (e) {
        e[e.NONE = 0] = "NONE", e[e.PAGE = 1] = "PAGE", e[e.FRAME = 2] = "FRAME", e[e.LINK = 4] = "LINK", e[e.MEDIA = 8] = "MEDIA", e[e.SELECTION = 16] = "SELECTION", e[e.EDITABLE = 32] = "EDITABLE"
    }(n.MenuNodeType || (n.MenuNodeType = {})), function (e) {
        e[e.NONE = 0] = "NONE", e[e.UNDO = 1] = "UNDO", e[e.REDO = 2] = "REDO", e[e.CUT = 4] = "CUT", e[e.COPY = 8] = "COPY", e[e.PASTE = 16] = "PASTE", e[e.DELETE = 32] = "DELETE", e[e.SELECT_ALL = 64] = "SELECT_ALL", e[e.TRANSLATE = 128] = "TRANSLATE"
    }(n.MenuEditableState || (n.MenuEditableState = {})), function (e) {
        e[e.NONE = 0] = "NONE", e[e.IMAGE = 1] = "IMAGE", e[e.VIDEO = 2] = "VIDEO", e[e.AUDIO = 3] = "AUDIO", e[e.FILE = 4] = "FILE", e[e.PLUGIN = 5] = "PLUGIN"
    }(n.MenuMediaType || (n.MenuMediaType = {})), function (e) {
        e[e.HWND_NOTOPMOST = -2] = "HWND_NOTOPMOST", e[e.HWND_TOPMOST = -1] = "HWND_TOPMOST", e[e.HWND_TOP = 0] = "HWND_TOP", e[e.HWND_BOTTOM = 1] = "HWND_BOTTOM"
    }(n.OptionOfhwndInAfter || (n.OptionOfhwndInAfter = {})), function (e) {
        e[e.SWP_ASYNCWINDOWPOS = 16384] = "SWP_ASYNCWINDOWPOS", e[e.SWP_DEFERERASE = 8192] = "SWP_DEFERERASE", e[e.SWP_DRAWFRAME = 32] = "SWP_DRAWFRAME", e[e.SWP_FRAMECHANGED = 32] = "SWP_FRAMECHANGED", e[e.SWP_HIDEWINDOW = 128] = "SWP_HIDEWINDOW", e[e.SWP_NOACTIVATE = 16] = "SWP_NOACTIVATE", e[e.SWP_NOCOPYBITS = 256] = "SWP_NOCOPYBITS", e[e.SWP_NOMOVE = 2] = "SWP_NOMOVE", e[e.SWP_NOOWNERZORDER = 512] = "SWP_NOOWNERZORDER", e[e.SWP_NOREDRAW = 8] = "SWP_NOREDRAW", e[e.SWP_NOREPOSITION = 512] = "SWP_NOREPOSITION", e[e.SWP_NOSENDCHANGING = 1024] = "SWP_NOSENDCHANGING", e[e.SWP_NOSIZE = 1] = "SWP_NOSIZE", e[e.SWP_NOZORDER = 4] = "SWP_NOZORDER", e[e.SWP_SHOWWINDOW = 64] = "SWP_SHOWWINDOW"
    }(n.Uflags || (n.Uflags = {})), function (e) {
        e[e.WS_BORDER = 8388608] = "WS_BORDER", e[e.WS_CAPTION = 12582912] = "WS_CAPTION", e[e.WS_CHILD = 1073741824] = "WS_CHILD", e[e.WS_CHILDWINDOW = 1073741824] = "WS_CHILDWINDOW", e[e.WS_CLIPCHILDREN = 33554432] = "WS_CLIPCHILDREN", e[e.WS_CLIPSIBLINGS = 67108864] = "WS_CLIPSIBLINGS"
    }(n.WindowStyle || (n.WindowStyle = {})), function (e) {
        e[e.WS_EX_TOOLWINDOW = 128] = "WS_EX_TOOLWINDOW"
    }(n.ExtendedWindowStyles || (n.ExtendedWindowStyles = {})), function (e) {
        e[e.GWL_EXSTYLE = -20] = "GWL_EXSTYLE", e[e.GWL_HINSTANCE = -6] = "GWL_HINSTANCE", e[e.GWL_ID = -12] = "GWL_ID", e[e.GWL_STYLE = -16] = "GWL_STYLE", e[e.GWL_USERDATA = -21] = "GWL_USERDATA", e[e.GWL_WNDPROC = -4] = "GWL_WNDPROC"
    }(n.SetWindowType || (n.SetWindowType = {})), function (e) {
        e[e.WM_CREATE = 1] = "WM_CREATE", e[e.WM_DESTROY = 2] = "WM_DESTROY", e[e.WM_MOVE = 3] = "WM_MOVE", e[e.WM_SIZE = 5] = "WM_SIZE", e[e.WM_ACTIVATE = 6] = "WM_ACTIVATE", e[e.WM_SETFOCUS = 7] = "WM_SETFOCUS", e[e.WM_KILLFOCUS = 8] = "WM_KILLFOCUS", e[e.WM_ENABLE = 10] = "WM_ENABLE", e[e.WM_DPICHANGED = 736] = "WM_DPICHANGED"
    }(n.WindowMessages || (n.WindowMessages = {})), function (e) {
        e[e.SW_HIDE = 0] = "SW_HIDE", e[e.SW_SHOWMAXIMIZED = 3] = "SW_SHOWMAXIMIZED", e[e.SW_SHOW = 5] = "SW_SHOW"
    }(n.showCmd || (n.showCmd = {})), function (e) {
        e[e.Success = 0] = "Success", e[e.FunctionUnExist = 1] = "FunctionUnExist", e[e.ParamError = 2] = "ParamError", e[e.CallFailed = 3] = "CallFailed"
    }(n.NativeFunctionErrorCode || (n.NativeFunctionErrorCode = {}))
}]);
//# sourceMappingURL=main.js.map
/*! ThunderX BY LUOCHENZHIMU */
/*! Last updated on 2018/12/16 */
/*! https://www.luochenzhimu.com */