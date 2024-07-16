/*! ThunderX BY LUOCHENZHIMU */
/*! Last updated on 2018/12/16 */
/*! https://www.luochenzhimu.com */
module.exports = function (e) {
    var t = {};

    function n(i) {
        if (t[i]) return t[i].exports;
        var o = t[i] = {i, l: !1, exports: {}};
        return e[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }

    return n.m = e, n.c = t, n.d = function (e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: i})
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var o in e) n.d(i, o, function (t) {
            return e[t]
        }.bind(null, o));
        return i
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 972)
}({
    0: function (e, t, n) {
        "use strict";

        function i(e, t, n, i, o, r, s, a) {
            var l, d = "function" == typeof e ? e.options : e;
            if (t && (d.render = t, d.staticRenderFns = n, d._compiled = !0), i && (d.functional = !0), r && (d._scopeId = "data-v-" + r), s ? (l = function (e) {
                (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), o && o.call(this, e), e && e._registeredComponents && e._registeredComponents.add(s)
            }, d._ssrRegister = l) : o && (l = a ? function () {
                o.call(this, this.$root.$options.shadowRoot)
            } : o), l) if (d.functional) {
                d._injectStyles = l;
                var c = d.render;
                d.render = function (e, t) {
                    return l.call(t), c(e, t)
                }
            } else {
                var u = d.beforeCreate;
                d.beforeCreate = u ? [].concat(u, l) : [l]
            }
            return {exports: e, options: d}
        }

        n.d(t, "a", function () {
            return i
        })
    }, 1: function (e, t, n) {
        e.exports = n(12)(64)
    }, 10: function (e, t, n) {
        "use strict";
        var i = this && this.__awaiter || function (e, t, n, i) {
            return new (n || (n = Promise))(function (o, r) {
                function s(e) {
                    try {
                        l(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function a(e) {
                    try {
                        l(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function l(e) {
                    e.done ? o(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(s, a)
                }

                l((i = i.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const o = n(3), r = n(2), s = n(1), a = n(9), l = n(17), d = s.default.getLogger("Thunder.Util"),
            c = "Thunder Network\\Thunder7.9\\";

        function u(e) {
            let t = e;
            return 0 === e.indexOf('"') && e.lastIndexOf('"') === e.length - 1 ? t = e.substring(1, e.length - 1) : 0 === e.indexOf("'") && e.lastIndexOf("'") === e.length - 1 && (t = e.substring(1, e.length - 1)), t
        }

        !function (e) {
            function t() {
                let e = l.ThunderHelper.getSystemTempPath(), t = l.ThunderHelper.getLogicalDriveStrings(), n = 0;
                for (let i = 0; i < t.length; i++) {
                    let o = l.ThunderHelper.getDriveInfo(t[i]);
                    3 === o.type && n < o.freeBytes && t[i] !== e && (n = o.freeBytes, e = t[i])
                }
                return e.substring(0, 1) + ":\\迅雷下载"
            }

            e.formatSize = function (e, t) {
                t = t || 2;
                let n = "0B";
                if ("number" == typeof e && e > 0) {
                    let i = ["B", "KB", "MB", "GB", "TB"], o = 0, r = e;
                    for (; r >= 1e3 && !(o >= 4);) r /= 1024, o += 1;
                    n = -1 === String(r).indexOf(".") ? r + i[o] : r.toFixed(t) + i[o]
                }
                return n
            }, e.isDigital = function (e) {
                let t = !1;
                return /^\d+$/.test(e) && (t = !0), t
            }, e.isAlpha = function (e) {
                let t = !1;
                return /[A-Za-z]/.test(e) && (t = !0), t
            }, e.isUpperCase = function (e) {
                let t = !1;
                return /[A-Z]/.test(e) && (t = !0), t
            }, e.isLowerCase = function (e) {
                let t = !1;
                return /[a-z]/.test(e) && (t = !0), t
            }, e.isChinese = function (e) {
                let t = !1;
                return /[\u4E00-\u9FA5]/.test(e) && (t = !0), t
            }, e.replaceNonDigital = function (e) {
                return e.replace(/[^\d]/g, "")
            }, e.replaceNonAlpha = function (e) {
                return e.replace(/[^A-Za-z]/g, "")
            }, e.replaceNonWord = function (e) {
                return e.replace(/[^\W]/g, "")
            }, e.getDefaultDownloadDir = t, e.getMaxFreeDriver = function () {
                return t().substring(0, 1)
            }, e.deepCopy = function (e) {
                let t = JSON.stringify(e), n = null;
                try {
                    n = JSON.parse(t)
                } catch (e) {
                    d.warning(e)
                }
                return n
            }, e.swap = function (e, t, n) {
                do {
                    if (t < 0 || t >= e.length) break;
                    if (n < 0 || n >= e.length) break;
                    if (t === n) break;
                    e[t] = e.splice(n, 1, e[t])[0]
                } while (0);
                return e
            }, e.compareNocase = function (e, t) {
                let n = !1;
                do {
                    if (void 0 === e && void 0 === t) {
                        n = !0;
                        break
                    }
                    if (void 0 === e || void 0 === t) break;
                    if ("string" != typeof e || "string" != typeof t) break;
                    n = e.toLowerCase() === t.toLowerCase()
                } while (0);
                return n
            }, e.parseCommandLine = function (e) {
                let t = 0, n = "", i = !1, o = [], r = e.length;
                for (let s = 0; s < r; s++) {
                    let a = e[s];
                    if ('"' !== a && "'" !== a || ("" === n ? (i = !0, n = a) : n === a && (i = !1, n = "")), " " !== a || i || s === r - 1) {
                        if (s === r - 1) {
                            let n = e.substring(t);
                            "" !== n.trim() && o.push(u(n))
                        }
                    } else {
                        let n = e.substring(t, s);
                        "" !== n.trim() && o.push(u(n)), t = s + 1
                    }
                }
                return o
            }, e.getThunderTempPath = function (e, t) {
                return i(this, void 0, void 0, function* () {
                    const i = yield Promise.resolve().then(() => n(16));
                    let o = r.join(i.tmpdir(), c);
                    return t && (o = r.join(o, t)), void 0 !== e && e && (yield a.FileSystemAWNS.mkdirsAW(o)), o
                })
            }, e.setQueryString = function (e, t) {
                return Object.keys(t).forEach((n, i) => {
                    e += 0 === i ? "?" : "&", e += `${n}=${t[n]}`
                }), e
            }, e.getQueryString = function (e, t) {
                return e && t && e.match(new RegExp(`(^${t}|[?|&]${t})=([^&#]+)`)) ? RegExp.$2 : ""
            }, e.isClipboardTextFormatAvailable = function () {
                let e = !1, t = o.clipboard.availableFormats();
                for (let n of t) if ("text/plain" === n) {
                    e = !0;
                    break
                }
                return e
            }, e.keywordsHighLight = function (e, t, n) {
                if (!e) return "";
                if (!t) return e;
                if (0 === e.length) return e;
                if (0 === t.length) return e;
                let i = /\\/, o = t.split(" ");
                if (0 === (o = o.filter(e => e.trim().length > 0)).length) return e;
                for (let t = 0; t < o.length; t++) if (o[t].search(i) > 0) return e;
                n = void 0 === n || null === n ? "#FF0000" : n;
                let r = "", s = ["\\[", "\\^", "\\*", "\\(", "\\)", "\\|", "\\?", "\\$", "\\.", "\\+"], a = "", l = "|";
                for (let e = 0; e < o.length; e++) {
                    for (let t = 0; t < s.length; t++) {
                        let n = new RegExp(s[t], "g");
                        o[e] = o[e].replace(n, s[t])
                    }
                    e === o.length - 1 && (l = ""), a = a.concat(o[e], l)
                }
                let d = new RegExp(a, "gi");
                return r = e.replace(d, e => '<span style= "color:' + n + '">' + e + "</span>")
            }, e.isDef = function (e) {
                return void 0 !== e && null !== e
            }, e.isUndef = function (e) {
                return void 0 === e || null === e
            }, e.setStyle = function (e, t) {
                Object.entries(t).forEach(([t, n]) => {
                    e.style[t] = n
                })
            }, e.setCSSProperties = function (e, t) {
                Object.entries(t).forEach(([t, n]) => {
                    e.style.setProperty(t, n)
                })
            }, e.versionCompare = function (e, t) {
                let n = e.split("."), i = t.split("."), o = 0;
                for (let e = 0; e < n.length; e++) {
                    if (Number(n[e]) - Number(i[e]) > 0) {
                        o = 1;
                        break
                    }
                    if (Number(n[e]) - Number(i[e]) < 0) {
                        o = -1;
                        break
                    }
                }
                return o
            }, e.throttle = function (e, t) {
                let n, i = 0;
                return (...o) => {
                    const r = Date.now();
                    clearTimeout(n), r - i > t ? (e(...o), i = r) : n = setTimeout(() => {
                        e(...o), i = r
                    }, t)
                }
            }
        }(t.ThunderUtil || (t.ThunderUtil = {}))
    }, 1143: function (e, t) {
    }, 1149: function (e, t) {
    }, 1153: function (e, t) {
    }, 12: function (e, t) {
        e.exports = vendor_f06ab6e95552376989e1
    }, 13: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(2), o = n(5), r = n(1).default.getLogger("XLStat");
        let s = o.default(i.join(__rootDir, "../bin/ThunderHelper.node"));

        function a(e = "") {
            let t;
            if ("string" == typeof e) t = e; else if (l(e) && "object" == typeof e) {
                let n = [];
                for (let t in e) l(e[t]) && n.push(t + "=" + encodeURIComponent(e[t]));
                t = n.join(",")
            }
            return t
        }

        function l(e) {
            return void 0 !== e && null !== e
        }

        !function (e) {
            function t(e) {
                do {
                    if (void 0 === e) break;
                    s.trackClick(e, 0)
                } while (0)
            }

            e.trackEvent = function (e, t = "", n = "", i = 0, o = 0, l = 0, d = 0, c = "", u = 0) {
                let h = 0;
                do {
                    if (void 0 === e) {
                        h = 1;
                        break
                    }
                    let f = a(c);
                    h = s.trackEvent(e, t, n, i, o, l, d, f, u), r.information(e, t, n, i, o, l, d, f, u)
                } while (0);
                return h
            }, e.trackClick = t, e.trackShow = function (e) {
                t(e)
            }, e.setUserID = function (e = 0, t = 0) {
                s.setUserID(e, t)
            }
        }(t.XLStatNS || (t.XLStatNS = {}))
    }, 14: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
            e.channelRMNewTaskReadyForSetTaskData = "RM_NEWTASK_READYRORSETTASKDATA", e.channelRMNewTaskSetTaskData = "RM_NEWTASK_SETTASKDATA", e.channelRMPreNewTaskSetTaskData = "RM_PRENEWTASK_SETTASKDATA", e.channelRMNewTaskCreateNewTask = "RM_NEWTASK_CREATENEWTASK", e.channelRMNewTaskSetBTInfo = "RM_NEWTASK_SETBTINFO", e.channelRMNewTaskDownloadTorrent = "RM_NEW_TASK_DOWNLOAD_TORRENT", e.channelRMNewTaskCreateBtTask = "RM_NEWTASK_CRATEBTTASK", e.channelRMNewTaskCancleMagnet = "RM_NEWTASK_CANCLE_MAGNET", e.channelRMImportTorrent = "RM_NEWTASK_IMPORT_TORRENT", e.channelRMGetConfigValueResolve = "RM_GET_CONFIG_VALUE_RESOLVE", e.channelRMGetConfigValueReject = "RM_GET_CONFIG_VALUE_REJECT", e.channelMRTrayMenuClick = "MR_TRAY_MENU_CLICK", e.channelMRNewTaskMagnetTaskCreated = "MR_NEW_TASK_MAGNET_TASK_CREATED", e.channelMRNewTaskDownloadTorrentResult = "MR_NEW_TASK_DOWNLOAD_TORRENT_RESULT", e.channelMRNewTaskCreateNewTaskResult = "MR_NEWTASK_CREATENEWTASK_RESULT", e.channelMRNewTaskCreateBtTaskResult = "RM_NEWTASK_CRATEBTTASK_RESULT", e.channelMRGetConfigValue = "MR_GET_CONFIG_VALUE", e.channelMRSetConfigValue = "MR_SET_CONFIG_VALUE", e.channelRMCommitPlanTask = "RM_PLANTASK_COMMIT", e.channelRMPerformePlanTask = "RM_PLANTASK_PERFORME", e.channelRMProcessSend = "RM_RENDER_PROCESS_INFO", e.channelRMGetPrivateSpaceInfo = "RM_RENDER_GET_PRIVATE_SPACE_INFO", e.channelMRGetPrivateSpaceInfoResult = "MR_RENDER_GET_PRIVATE_SPACE_INFO_RESULT", e.channelRMFileCopy = "RM_FILE_COPY", e.channelRMFileMove = "RM_FILE_MOVE", e.channelMRFileCopyResult = "MR_FILE_COPY_RESULT", e.channelMRFileMoveResult = "MR_FILE_MOVE_RESULT", e.channelRMGetSutitleByCid = "RM_RENDER_GET_SUBTITLE_BY_CID", e.channelMRGetSutitleByCidResult = "MR_RENDER_GET_SUBTITLE_BY_CID_RESULT", e.channelRMGetSutitleByName = "RM_RENDER_GET_SUBTITLE_BY_NAME", e.channelMRGetSutitleByNameResult = "MR_RENDER_GET_SUBTITLE_BY_NAME_RESULT", e.channelRMDownloadSutitle = "RM_RENDER_DOWNLOAD_SUBTITLE", e.channelMRDownloadSutitleSuc = "MR_RENDER_DOWNLOAD_SUBTITLE_SUCCESS", e.channelMRDownloadSutitleFail = "MR_RENDER_DOWNLOAD_SUBTITLE_FAIL", e.channelRMGetDisplayName = "RM_RENDER_GET_SUBTITLE_DISPLAYNAME", e.channelMRGetDisplayNameResult = "MR_RENDER_GET_SUBTITLE_DISPLAYNAME_RESULT", e.channelMRBringWindowToTop = "MR_RENDER_BRING_WINDOW_TO_TOP", e.channelRMDownloadXmp = "RM_RENDER_DOWNLOAD_XMP", e.channelMRFixXmpSuc = "MR_RENDER_FIX_XMP_SUC", e.channelMRFixXMPFail = "MR_RENDER_FIX_XMP_FAIL", e.channelRMDownloadXmpEx = "RM_RENDER_DOWNLOAD_XMP_EX", e.channelRMSetPosition = "RM_SET_POSITION", e.channelRMSetFoucs = "RM_SET_FOCUS", e.channelRMCreateAddressDropWnd = "RM_CREATE_ADDRESS_DROPWND", e.channelRMRefreshAddressDropWnd = "RM_REFRESH_ADDRESS_DROPWND", e.channelRMSelectAddressDropItem = "RM_SELECT_ADDRESS_DROPITEM", e.channelRMCreateSearchWindow = "RM_CREATE_SEARCH_WINDOW", e.channelRMAddressKeyDown = "RM_ADDRESS_BAR_KEYDOWN", e.channelMRFWAddressKeyDown = "MR_ADDRESS_FW_BAR_KEYDOWN", e.channelMRFWSelectAddressDropItem = "MR_FW_SELECT_ADDRESS_DROPITEM", e.channelRMAddressDropWndKeyDown = "RM_ADDRESS_DROPWND_KEYDOWN", e.channelMRSearchWindowVisibleChange = "MR_SEARCH_WINDOW_VISIBLE_CHANGE", e.channelRMShowSearchWindow = "RM_SEARCH_WINDOW_SHOW", e.channelRMHideSearchWindow = "RM_SEARCH_WINDOW_HIDE", e.channelRMClickMouse = "RM_CLICK_MOUSE", e.channelMRSearchBarFocusChange = "MR_SEARCHBAR_FOCUS_CHANGE", e.channelMRFWAddressDropWndKeyDown = "MR_FW_ADDRESS_DROPWND_KEYDOWN", e.channelMRClickAddressDropItem = "MR_CLICK_ADDRESS_DROPITEM", e.channelMRMainWndMax = "MR_MAINWINDOW_MAX", e.channelMRMainWndMin = "MR_MAINWINDOW_MIN", e.channelMRMainWndRestore = "MR_MAINWINDOW_RESTORE", e.channelRMGetBrowserStartType = "RM_GET_BROWSER_START_TYPE", e.channelMRGetBrowserStartTypeResult = "MR_GET_BROWSER_START_TYPE_RESULT", e.channelRMExecute = "RM_SHELL_EXECUTE", e.channelMRExecuteResult = "MR_SHELL_EXECUTE_RESULT", e.channelMRAdTipsClick = "MR_AD_TIPS_CLICK", e.channelMRNotificationMsg = "MR_NOTIFICATION_MSG", e.channelRMSetProgressBar = "RM_SET_PROGRESS_BAR", e.channelRMRoundWindow = "RM_ROUND_WINDOW"
        }(t.ThunderChannelList || (t.ThunderChannelList = {}))
    }, 15: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(7), o = n(1), r = n(6), s = o.default.getLogger("Thunder.PromiseNativeCall"), a = i.promisify;
        t.default = function (...e) {
            return s.verbose(...e), a(r.NativeCallModule.nativeCall.CallNativeFunction.bind(r.NativeCallModule.nativeCall))(...e)
        }
    }, 16: function (e, t) {
        e.exports = require("os")
    }, 17: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(2), o = n(5).default(i.join(__rootDir, "../bin/ThunderHelper.node"));
        !function (e) {
            e.getDriveInfo = function (e) {
                return o.getDriveInfo(e)
            }, e.getFreePartitionSpace = function (e) {
                return o.getFreePartitionSpace(e)
            }, e.getLogicalDriveStrings = function () {
                return o.getLogicalDriveStrings()
            }, e.getPartitionSpace = function (e) {
                return o.getPartitionSpace(e)
            }, e.getSystemTempPath = function () {
                return o.getSystemTempPath()
            }, e.getTaskTypeFromUrl = function (e) {
                return o.getTaskTypeFromUrl(e)
            }, e.extractIcon = function (e, t) {
                return o.extractIcon(e, t)
            }, e.isWindow7 = function () {
                return 1 === o.isWin7()
            }, e.compareStr = function (e, t) {
                return o.compareStr(e, t)
            }, e.getTickCount = function () {
                return o.getTickCount()
            }
        }(t.ThunderHelper || (t.ThunderHelper = {}))
    }, 18: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.information = function (...e) {
        }, t.error = function (...e) {
        }, t.warning = function (...e) {
        }, t.critical = function (...e) {
        }, t.verbose = function (...e) {
        }, "development" === process.env.LOGGER_ENV && (t.information = function (...e) {
            console.log("information", e)
        }, t.error = function (...e) {
            console.log("error", e)
        }, t.warning = function (...e) {
            console.log("warning", e)
        }, t.critical = function (...e) {
            console.log("critical", e)
        }, t.verbose = function (...e) {
            console.log("verbose", e)
        })
    }, 19: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
            e.msgIPCCommunicatorForward = "ipc_communicator_forward", e.msgIPCSendToMain = "ipc_send_to_main", e.msgIPCSendToRenderer = "ipc_send_to_renderer", e.msgIPCRendererConnect = "ipc_renderer_connect", e.msgIPCRendererDisconnect = "ipc_renderer_disconnect", e.msgNCCallNativeFunction = "nc_call_native_function", e.msgNCCheckNativeFunction = "nc_check_native_function", e.msgNCCallJsFunctionById = "nc_call_js_function_by_id", e.msgNCCallJsFunctionByName = "nc_call_js_function_by_name", e.msgNCNativeFireEvent = "nc_native_fire_event", e.msgNCNativeCallReady = "nc_native_call_ready"
        }(t.CommonIPCMessage || (t.CommonIPCMessage = {}))
    }, 2: function (e, t) {
        e.exports = require("path")
    }, 20: function (e, t) {
        e.exports = require("fs")
    }, 21: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
            e[e.NONE = 0] = "NONE", e[e.PAGE = 1] = "PAGE", e[e.FRAME = 2] = "FRAME", e[e.LINK = 4] = "LINK", e[e.MEDIA = 8] = "MEDIA", e[e.SELECTION = 16] = "SELECTION", e[e.EDITABLE = 32] = "EDITABLE"
        }(t.MenuNodeType || (t.MenuNodeType = {})), function (e) {
            e[e.NONE = 0] = "NONE", e[e.UNDO = 1] = "UNDO", e[e.REDO = 2] = "REDO", e[e.CUT = 4] = "CUT", e[e.COPY = 8] = "COPY", e[e.PASTE = 16] = "PASTE", e[e.DELETE = 32] = "DELETE", e[e.SELECT_ALL = 64] = "SELECT_ALL", e[e.TRANSLATE = 128] = "TRANSLATE"
        }(t.MenuEditableState || (t.MenuEditableState = {})), function (e) {
            e[e.NONE = 0] = "NONE", e[e.IMAGE = 1] = "IMAGE", e[e.VIDEO = 2] = "VIDEO", e[e.AUDIO = 3] = "AUDIO", e[e.FILE = 4] = "FILE", e[e.PLUGIN = 5] = "PLUGIN"
        }(t.MenuMediaType || (t.MenuMediaType = {})), function (e) {
            e[e.HWND_NOTOPMOST = -2] = "HWND_NOTOPMOST", e[e.HWND_TOPMOST = -1] = "HWND_TOPMOST", e[e.HWND_TOP = 0] = "HWND_TOP", e[e.HWND_BOTTOM = 1] = "HWND_BOTTOM"
        }(t.OptionOfhwndInAfter || (t.OptionOfhwndInAfter = {})), function (e) {
            e[e.SWP_ASYNCWINDOWPOS = 16384] = "SWP_ASYNCWINDOWPOS", e[e.SWP_DEFERERASE = 8192] = "SWP_DEFERERASE", e[e.SWP_DRAWFRAME = 32] = "SWP_DRAWFRAME", e[e.SWP_FRAMECHANGED = 32] = "SWP_FRAMECHANGED", e[e.SWP_HIDEWINDOW = 128] = "SWP_HIDEWINDOW", e[e.SWP_NOACTIVATE = 16] = "SWP_NOACTIVATE", e[e.SWP_NOCOPYBITS = 256] = "SWP_NOCOPYBITS", e[e.SWP_NOMOVE = 2] = "SWP_NOMOVE", e[e.SWP_NOOWNERZORDER = 512] = "SWP_NOOWNERZORDER", e[e.SWP_NOREDRAW = 8] = "SWP_NOREDRAW", e[e.SWP_NOREPOSITION = 512] = "SWP_NOREPOSITION", e[e.SWP_NOSENDCHANGING = 1024] = "SWP_NOSENDCHANGING", e[e.SWP_NOSIZE = 1] = "SWP_NOSIZE", e[e.SWP_NOZORDER = 4] = "SWP_NOZORDER", e[e.SWP_SHOWWINDOW = 64] = "SWP_SHOWWINDOW"
        }(t.Uflags || (t.Uflags = {})), function (e) {
            e[e.WS_BORDER = 8388608] = "WS_BORDER", e[e.WS_CAPTION = 12582912] = "WS_CAPTION", e[e.WS_CHILD = 1073741824] = "WS_CHILD", e[e.WS_CHILDWINDOW = 1073741824] = "WS_CHILDWINDOW", e[e.WS_CLIPCHILDREN = 33554432] = "WS_CLIPCHILDREN", e[e.WS_CLIPSIBLINGS = 67108864] = "WS_CLIPSIBLINGS"
        }(t.WindowStyle || (t.WindowStyle = {})), function (e) {
            e[e.WS_EX_TOOLWINDOW = 128] = "WS_EX_TOOLWINDOW"
        }(t.ExtendedWindowStyles || (t.ExtendedWindowStyles = {})), function (e) {
            e[e.GWL_EXSTYLE = -20] = "GWL_EXSTYLE", e[e.GWL_HINSTANCE = -6] = "GWL_HINSTANCE", e[e.GWL_ID = -12] = "GWL_ID", e[e.GWL_STYLE = -16] = "GWL_STYLE", e[e.GWL_USERDATA = -21] = "GWL_USERDATA", e[e.GWL_WNDPROC = -4] = "GWL_WNDPROC"
        }(t.SetWindowType || (t.SetWindowType = {})), function (e) {
            e[e.WM_CREATE = 1] = "WM_CREATE", e[e.WM_DESTROY = 2] = "WM_DESTROY", e[e.WM_MOVE = 3] = "WM_MOVE", e[e.WM_SIZE = 5] = "WM_SIZE", e[e.WM_ACTIVATE = 6] = "WM_ACTIVATE", e[e.WM_SETFOCUS = 7] = "WM_SETFOCUS", e[e.WM_KILLFOCUS = 8] = "WM_KILLFOCUS", e[e.WM_ENABLE = 10] = "WM_ENABLE", e[e.WM_DPICHANGED = 736] = "WM_DPICHANGED"
        }(t.WindowMessages || (t.WindowMessages = {})), function (e) {
            e[e.SW_HIDE = 0] = "SW_HIDE", e[e.SW_SHOWMAXIMIZED = 3] = "SW_SHOWMAXIMIZED", e[e.SW_SHOW = 5] = "SW_SHOW"
        }(t.showCmd || (t.showCmd = {})), function (e) {
            e[e.Success = 0] = "Success", e[e.FunctionUnExist = 1] = "FunctionUnExist", e[e.ParamError = 2] = "ParamError", e[e.CallFailed = 3] = "CallFailed"
        }(t.NativeFunctionErrorCode || (t.NativeFunctionErrorCode = {}))
    }, 24: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(3), o = n(7), r = n(18), s = n(19);
        !function (e) {
            e.mainProcessContext = "main-process", e.mainRendererContext = "main-renderer", e.mainPageWebviewRendererContext = "main-page-webview-renderer", e.newTaskRendererContext = "new-task-renderer", e.preNewTaskRendererContext = "pre-new-task-renderer", e.loginRendererContext = "login-renderer";

            class t {
                constructor() {
                    this.isConnected = !1, this.isOnIPCEvent = !1, this.rendererInfos = [], this.listeners = new Map, t.intervalIPCModuleMsgs = [s.CommonIPCMessage.msgIPCRendererConnect, s.CommonIPCMessage.msgIPCRendererDisconnect]
                }

                onMessage(e, t) {
                    do {
                        if (!o.isString(e) || 0 === e.length) {
                            r.error("msgName is null");
                            break
                        }
                        if (o.isNullOrUndefined(t)) {
                            r.error("listener is null");
                            break
                        }
                        this.listeners.has(e) ? this.listeners.get(e).push(t) : this.listeners.set(e, [t])
                    } while (0)
                }

                getCommunicatorInfo() {
                    return this.currInfo
                }

                getAllRenderer() {
                    return this.rendererInfos
                }

                getCommunicatorInfoById(e) {
                    for (let t of this.rendererInfos) if (t.id === e) return t;
                    return null
                }

                getCommunicatorInfoByContext(e) {
                    for (let t of this.rendererInfos) if (t.context === e) return t;
                    return null
                }

                startListenIPCMessage(e) {
                    this.isOnIPCEvent || (this.isOnIPCEvent = !0, e && this.ListenSendToMainMsg(), this.ListenSendToRendererMsg(e))
                }

                ListenSendToMainMsg() {
                    i.ipcMain.on(s.CommonIPCMessage.msgIPCSendToMain, (e, t) => {
                        let n = void 0;
                        do {
                            if (o.isNullOrUndefined(t)) {
                                r.error("msgInfo is empty");
                                break
                            }
                            if (!this.isConnected) {
                                r.warning("hasnot been connected yet");
                                break
                            }
                            let i = t.msg.name;
                            if (this.isIPCModuleIntervalMsg(i)) {
                                r.information(`IPC module interval msg : ${i}`);
                                let o = this.handleIPCModuleIntervalMsg(e.sender, t);
                                if (n = o[1], !o[0]) break;
                                r.information("need to dispatch msg:" + i)
                            }
                            o.isNullOrUndefined(n) ? n = this.NotifyListener(t) : this.NotifyListener(t)
                        } while (0);
                        o.isNullOrUndefined(n) || (e.returnValue = n)
                    })
                }

                ListenSendToRendererMsg(e) {
                    (e ? i.ipcMain : i.ipcRenderer).on(s.CommonIPCMessage.msgIPCSendToRenderer, (t, n) => {
                        let i = void 0;
                        do {
                            if (o.isNullOrUndefined(n)) {
                                r.error("msgInfo is empty");
                                break
                            }
                            if (!this.isConnected) {
                                r.warning("hasnot been connected yet");
                                break
                            }
                            let s = n.msg.name;
                            if (this.isIPCModuleIntervalMsg(s)) {
                                r.information(`IPC module interval msg : ${s}`);
                                let e = this.handleIPCModuleIntervalMsg(t.sender, n);
                                if (i = e[1], !e[0]) break;
                                r.information("need to dispatch msg:" + s)
                            }
                            e ? (r.information("is main, handle forward msg"), this.handleForwardRendererToRendererMsg(n)) : (r.information("is renderer, handle business msg"), o.isNullOrUndefined(i) ? i = this.NotifyListener(n) : this.NotifyListener(n))
                        } while (0);
                        o.isNullOrUndefined(i) || (t.returnValue = i)
                    })
                }

                isIPCModuleIntervalMsg(e) {
                    for (let n of t.intervalIPCModuleMsgs) if (e === n) return !0;
                    return !1
                }

                handleIPCModuleIntervalMsg(e, t) {
                    let n = [!1, void 0];
                    do {
                        let i = t.msg.name;
                        if (i === s.CommonIPCMessage.msgIPCRendererConnect) {
                            n = [!0, this.handleRendererConnectMsg(e, t)];
                            break
                        }
                        if (i === s.CommonIPCMessage.msgIPCRendererDisconnect) {
                            n = [!0, this.handleRendererDisconnectMsg(e, t)];
                            break
                        }
                    } while (0);
                    return n
                }

                handleRendererConnectMsg(e, t) {
                    r.verbose(e), r.verbose(t)
                }

                handleRendererDisconnectMsg(e, t) {
                    r.verbose(e), r.verbose(t)
                }

                handleForwardRendererToRendererMsg(e) {
                    this.sendForwardRendererToRendererMsg(e)
                }

                sendForwardRendererToRendererMsg(e) {
                    r.verbose(e)
                }

                NotifyListener(e) {
                    let t = void 0, n = e.msg.name;
                    if (this.listeners.has(n)) {
                        let i = this.listeners.get(n), o = !0;
                        for (let n of i) o ? (o = !1, t = n(e)) : n(e)
                    }
                    return t
                }
            }

            e.Communicator = t
        }(t.CommonIPCBase || (t.CommonIPCBase = {}))
    }, 25: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(3), o = n(7), r = n(18), s = n(19), a = n(24);
        !function (e) {
            class t extends a.CommonIPCBase.Communicator {
                constructor() {
                    super()
                }

                initialize(e) {
                    this.currInfo = {id: void 0, context: e, isMainCommunicator: !1}
                }

                connect() {
                    this.isConnected ? r.warning("has been connected") : (this.sendConnectMsgToMain(), this.isConnected = !0, this.startListenIPCMessage(!1))
                }

                disconnect() {
                    this.isConnected ? (this.isConnected = !1, this.sendDisconnectMsgToMain()) : r.warning("hasnot been connected yet")
                }

                sendMessageToMain(e) {
                    this.sendIPCMsgToMain(e)
                }

                sendMessageToMainSync(e) {
                    return this.sendIPCMsgToMain(e, !0)
                }

                sendMessageToRenderer(e, t) {
                    this.sendIPCMsgToRenderer(e, t)
                }

                handleRendererConnectMsg(e, t) {
                    do {
                        if (o.isNullOrUndefined(t)) {
                            r.error("msgInfo is null");
                            break
                        }
                        let e = t.msg.args[0];
                        if (o.isNullOrUndefined(e)) {
                            r.error("connectRendererInfo is null");
                            break
                        }
                        r.information(`Renderer: new renderer will connect, id = ${e.id}, context = ${e.context}`), this.rendererInfos.push(e)
                    } while (0)
                }

                handleRendererDisconnectMsg(e, t) {
                    do {
                        if (o.isNullOrUndefined(t)) {
                            r.error("msgInfo is null");
                            break
                        }
                        let e = t.msg.args[0];
                        if (o.isNullOrUndefined(e)) {
                            r.error("disconnectRendererInfo is null");
                            break
                        }
                        r.information(`renderer will disconnect, id = ${e.id}, context = ${e.context}`);
                        for (let t = 0; t < this.rendererInfos.length; ++t) if (this.rendererInfos[t] === e) {
                            this.rendererInfos.splice(t, 1);
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

                sendIPCMsgToMain(e, t = !1) {
                    let n = void 0;
                    do {
                        if (o.isNullOrUndefined(e)) {
                            r.error("msg is null");
                            break
                        }
                        n = (t ? i.ipcRenderer.sendSync : i.ipcRenderer.send)(s.CommonIPCMessage.msgIPCSendToMain, {
                            msg: e,
                            senderInfo: this.currInfo
                        })
                    } while (0);
                    return n
                }

                sendIPCMsgToRenderer(e, t) {
                    do {
                        if (o.isNullOrUndefined(e)) {
                            r.error("rendererId is null");
                            break
                        }
                        if (o.isNullOrUndefined(t)) {
                            r.error("msg is null");
                            break
                        }
                        let n = [e].concat(t.args);
                        t.args = n, i.ipcRenderer.send(s.CommonIPCMessage.msgIPCSendToRenderer, {
                            msg: t,
                            senderInfo: this.currInfo
                        })
                    } while (0)
                }
            }

            e.RendererCommunicator = t, e.rendererCommunicator = new t
        }(t.CommonIPCRenderer || (t.CommonIPCRenderer = {}))
    }, 26: function (e, t) {
        e.exports = require("crypto")
    }, 276: function (e, t, n) {
        "use strict";
        var i = n(1143);
        n.n(i).a
    }, 3: function (e, t) {
        e.exports = require("electron")
    }, 32: function (e, t, n) {
        e.exports = n(12)(14)
    }, 35: function (e, t) {
        e.exports = require("events")
    }, 38: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
            let t;
            !function (e) {
                e[e.Default = 0] = "Default", e[e.Color = 1] = "Color", e[e.Wallpaper = 2] = "Wallpaper", e[e.Custom = 3] = "Custom"
            }(t = e.SkinType || (e.SkinType = {})), e.defaultSkinInfo = {type: t.Default, colorID: 0}
        }(t.SkinHelperNS || (t.SkinHelperNS = {}))
    }, 4: function (e, t, n) {
        e.exports = n(12)(127)
    }, 40: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(2), o = n(7), r = n(1), s = n(5).default(i.join(__rootDir, "../bin/ThunderHelper.node"));
        process.env.TL_ENABLE = "0", "console" === process.env.TL_OUTPUT ? r.default.outputLogger = r.outputLoggerConsole : r.default.outputLogger = function () {
            function e(e) {
                return function (...t) {
                    s.printEtwLog(e, function (...e) {
                        return e.map(e => o.inspect(e)).join(" ").replace(/%/g, "%%")
                    }(...t))
                }
            }

            return {
                [r.LogLevel.Critical]: e(r.LogLevel.Critical),
                [r.LogLevel.Error]: e(r.LogLevel.Error),
                [r.LogLevel.Warning]: e(r.LogLevel.Warning),
                [r.LogLevel.Information]: e(r.LogLevel.Information),
                [r.LogLevel.Verbose]: e(r.LogLevel.Verbose)
            }
        }()
    }, 41: function (e, t, n) {
        "use strict";
        var i = this && this.__awaiter || function (e, t, n, i) {
            return new (n || (n = Promise))(function (o, r) {
                function s(e) {
                    try {
                        l(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function a(e) {
                    try {
                        l(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function l(e) {
                    e.done ? o(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(s, a)
                }

                l((i = i.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const o = n(16), r = (n(20), n(2)), s = n(7);
        let a = null;
        const l = n(13), d = n(3), c = n(1), u = n(5), h = n(14), f = "xdas_profile_stat";
        let p = "", g = void 0, m = null, v = void 0, S = null,
            _ = u.default(r.join(__rootDir, "../bin/ThunderHelper.node")), w = new Set;

        function C() {
            return i(this, void 0, void 0, function* () {
                return new Promise(e => i(this, void 0, void 0, function* () {
                    void 0 === v && (null === S && (S = new Promise(e => {
                        e(v = function (e) {
                            let t = "";
                            if (0 === e.length && "renderer" === process.type) {
                                let e = r.normalize(decodeURIComponent(window.location.href)),
                                    n = e.indexOf(process.resourcesPath);
                                n = n > -1 ? n + process.resourcesPath.length + 1 : n;
                                let i = e.length - 1, o = e.indexOf("?"), s = e.indexOf("#");
                                i = o > -1 ? Math.min(o - 1, i) : i, i = s > -1 ? Math.min(s - 1, i) : i, n > -1 && i >= n && (t = e.substr(n, i - n + 1))
                            }
                            return 0 === t.length && (t = 0 !== e.length ? e : process.type), t = t.replace(/\||,|;/g, "_")
                        }(""))
                    })), v = yield S), e(v)
                }))
            })
        }

        function y(e) {
            let t = "";
            do {
                if (null === e || void 0 === e) break;
                switch (typeof e) {
                    case"string":
                        t = e;
                        break;
                    case"object":
                        t = s.inspect(e) || "";
                        break;
                    case"number":
                    case"boolean":
                        t = e.toString() || ""
                }
            } while (0);
            return t
        }

        function T(e) {
            return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
        }

        function k(e) {
            return i(this, void 0, void 0, function* () {
                return new Promise(t => i(this, void 0, void 0, function* () {
                    let i = void 0;
                    null === a && (a = yield Promise.resolve().then(() => n(26)));
                    let o = a.createHash("md5");
                    null !== o && (i = o.update(e).digest("hex")), t(i)
                }))
            })
        }

        function b() {
            return new Promise(e => i(this, void 0, void 0, function* () {
                let t = "";
                t = void 0 === g ? "browser" === process.type ? function () {
                    if (void 0 === g) {
                        let e = process.argv.length, t = process.argv;
                        for (let n = 0; n < e; n++) {
                            let e = t[n];
                            if (e.startsWith("-StartType:")) {
                                g = e.substring("-StartType:".length);
                                break
                            }
                        }
                        void 0 === g && (g = "")
                    }
                    return g
                }() : yield function () {
                    return i(this, void 0, void 0, function* () {
                        return null === m && (m = new Promise(e => {
                            d.ipcRenderer.send(h.ThunderChannelList.channelRMGetBrowserStartType), d.ipcRenderer.once(h.ThunderChannelList.channelMRGetBrowserStartTypeResult, (t, n) => {
                                g = n, e(n), m = null
                            })
                        })), m
                    })
                }() : g, e(t)
            }))
        }

        function M(e, t, n, o) {
            return i(this, void 0, void 0, function* () {
                let r = y(t), s = y(n), a = yield k(s), d = function (e) {
                    let t = new RegExp(T("file:///"), "g"), n = new RegExp(T(process.resourcesPath + "\\"), "g"),
                        i = new RegExp(T(encodeURI(process.resourcesPath.replace(/\\/g, "/") + "/")), "g");
                    return e.replace(t, "").replace(n, "").replace(i, "")
                }(y(o)), c = yield k(d), u = `${e}:${a}:${c}`;
                w.has(u) || (w.add(u), l.XLStatNS.trackEvent(f, "uncaught_exception", "", 0, 0, 0, 0, `type=${e},business_name=${yield C()},code=${r},message_hash=${a},message=${encodeURI(s)},stack_hash=${c},stack=${encodeURI(d)}`)), function (e, t, n, o) {
                    return i(this, void 0, void 0, function* () {
                    })
                }().catch()
            })
        }

        function R(e) {
            console.error(e);
            let t = e || {};
            M("unhandledRejection", t.code, t instanceof Error ? t.message : t, t.stack).catch()
        }

        !function (e) {
            e.init = function (e) {
                p = e
            }, e.trackColdStartUpEvent = function (e) {
                return i(this, void 0, void 0, function* () {
                    let t = _.iSColdStartUp() ? 1 : 0, n = o.release(),
                        i = _.performanceMonitorReporter.getProcessUptime(), r = yield b(),
                        s = `key=${e},start_type=${r},cold_start_up=${t},os_version=${n},cost_time=${i}`;
                    l.XLStatNS.trackEvent(f, "cold_start_up", "", 0, 0, 0, 0, s)
                })
            }
        }(t.PerformanceMonitorStatNS || (t.PerformanceMonitorStatNS = {})), function () {
            if (process.on("uncaughtException", e => {
                console.error(e);
                let t = e || {};
                M("uncaughtException", t.code, t.message, t.stack).catch()
            }), "browser" === process.type) process.on("unhandledRejection", (e, t) => {
                R(e)
            }), d.ipcMain.on(h.ThunderChannelList.channelRMGetBrowserStartType, function (e) {
                return i(this, void 0, void 0, function* () {
                    let t = yield b();
                    e.sender.send(h.ThunderChannelList.channelMRGetBrowserStartTypeResult, t)
                })
            }); else if ("browser" !== process.type) {
                window.addEventListener("unhandledrejection", e => {
                    R(e && e.reason || {})
                });
                let e = d.remote.getCurrentWebContents();
                null !== e && void 0 !== e && e.once("did-finish-load", () => {
                    (function () {
                        return i(this, void 0, void 0, function* () {
                            do {
                                if ("browser" === process.type) break;
                                if (null === window.performance.timing || void 0 === window.performance.timing) break;
                                let e = _.iSColdStartUp() ? 1 : 0, t = o.release(), n = window.performance.timing,
                                    i = n.loadEventEnd - n.navigationStart, r = n.fetchStart - n.navigationStart,
                                    s = n.domainLookupEnd - n.domainLookupStart, a = n.connectEnd - n.connectStart,
                                    d = n.responseStart - n.requestStart, c = n.responseEnd - n.responseStart,
                                    u = n.domComplete - n.domLoading, h = yield b();
                                l.XLStatNS.trackEvent(f, "page_load_time", "", 0, 0, 0, 0, `start_type=${h},cold_start_up=${e},os_version=${t},load_time=${i},before_fetch_time=${r},domin_lookup_time=${s},connect_time=${a},first_response_time=${d},responseTime=${c},domTime=${u},process=${p}`)
                            } while (0)
                        })
                    })().catch()
                })
            }
            c.default.hook("beforeLog", (e, t, ...n) => {
                e === c.LogLevel.Critical && l.XLStatNS.trackEvent(f, "critical_error", "", 0, 0, 0, 0, `module_name=${t},messages=${n}`)
            })
        }()
    }, 42: function (e, t, n) {
        e.exports = n(12)(130)
    }, 458: function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n(459), o = n.n(i);
        for (var r in i) "default" !== r && function (e) {
            n.d(t, e, function () {
                return i[e]
            })
        }(r);
        t.default = o.a
    }, 459: function (e, t, n) {
        "use strict";
        var i = this && this.__decorate || function (e, t, n, i) {
            var o, r = arguments.length, s = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, i); else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (s = (r < 3 ? o(s) : r > 3 ? o(t, n, s) : o(t, n)) || s);
            return r > 3 && s && Object.defineProperty(t, n, s), s
        }, o = this && this.__awaiter || function (e, t, n, i) {
            return new (n || (n = Promise))(function (o, r) {
                function s(e) {
                    try {
                        l(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function a(e) {
                    try {
                        l(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function l(e) {
                    e.done ? o(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(s, a)
                }

                l((i = i.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const r = n(7), s = n(3), a = n(4), l = n(975), d = n(95), c = n(1), u = n(6), h = n(14), f = n(623), p = n(21),
            g = n(977), m = n(13), v = n(54), S = n(2),
            _ = n(5).default(S.join(__rootDir, "../bin/ThunderHelper.node")),
            w = c.default.getLogger("Thunder.SuspensionRender");
        let C = class extends a.Vue {
            constructor() {
                super(...arguments), this.isVipLogin = !1, this.isVip = !1, this.isInVipAcc = !1, this.isStopAnimation = !1, this.isDowning = !1, this.isLeftTop = !1, this.isLeftBottom = !0, this.isRightTop = !1, this.isRightBottom = !1, this.isLeftDown = !1, this.isClick = !1, this.clickCount = 0, this.isStatus = !1, this.statusText = "", this.floatPanelStyle = "display: none", this.mainWindow = null, this.suspensiinWindows = null, this.isShowSpeedType = 0, this.showFloatPanelType = 0, this.totalSpeed = {
                    speed: "0",
                    unit: "B/S"
                }, this.vipSpeed = "", this.movewindowTimeIntervalId = -1, this.movewindowToBottomTimeIntervalId = -1, this.autoHideAtY = -233, this.width = g.MutiScreenHelper.getScreenRectangle().width, this.height = g.MutiScreenHelper.getScreenRectangle().height, this.left = g.MutiScreenHelper.getScreenRectangle().x, this.top = g.MutiScreenHelper.getScreenRectangle().y, this.hoverWindowWidth = 404, this.hoverWindowHeight = 270, this.isThunderForeground = !1, this.isDowningStatus = !1, this.downloadProgress = "0.0%", this.startShowTime = 0, this.showState = !1
            }

            onDownloadingChanged(e) {
                1 === this.showFloatPanelType && (e ? this.canHideWindow() || this.getSuspensionWindows().showInactive() : this.getSuspensionWindows().hide())
            }

            get suspensionBallClass() {
                return {
                    "xlx-suspension": !0,
                    "is-stopped": this.isStopAnimation,
                    "is-downing": this.isDowning,
                    "is-status": this.isStatus,
                    "is-vip-login": this.isVipLogin,
                    "is-vip": this.isVip || this.isInVipAcc,
                    "is-left-bottom": this.isLeftBottom,
                    "is-left-top": this.isLeftTop,
                    "is-right-bottom": this.isRightBottom,
                    "is-right-top": this.isRightTop
                }
            }

            get suspensionStatusText() {
                return this.statusText
            }

            doDownloadEvent(e, t, n, i, o) {
                this.isDowning = e, r.isNullOrUndefined(o) ? this.isStatus = !1 : (this.statusText = o, this.isStatus = i), this.isStatus && (this.isDowning = !1), this.isDowningStatus = this.isDowning || this.isStatus
            }

            showOrHideFloatPanel(e) {
                e ? (this.stat("float_monitor_hover_show"), this.floatPanelStyle = "") : this.floatPanelStyle = "display: none"
            }

            setFloatPanelDirection(e) {
                switch (e) {
                    case f.FloatPanelDirection.LeftBottom:
                        this.isLeftBottom = !0, this.isLeftTop = !1, this.isRightTop = !1, this.isRightBottom = !1;
                        break;
                    case f.FloatPanelDirection.LeftTop:
                        this.isLeftBottom = !1, this.isLeftTop = !0, this.isRightTop = !1, this.isRightBottom = !1;
                        break;
                    case f.FloatPanelDirection.RightTop:
                        this.isLeftBottom = !1, this.isLeftTop = !1, this.isRightTop = !0, this.isRightBottom = !1;
                        break;
                    case f.FloatPanelDirection.RightBottom:
                        this.isLeftBottom = !1, this.isLeftTop = !1, this.isRightTop = !1, this.isRightBottom = !0
                }
            }

            enter() {
                this.isLeftDown || this.showOrHideFloatPanel(!0), setTimeout(() => {
                    this.isClick || (this.isThunderForeground = f.FloatPanelHelper.isThunderMainWndForeground())
                }, 100), this.getSuspensionWindows().getPosition()[1] <= this.autoHideAtY - 70 + this.top && (-1 === this.movewindowToBottomTimeIntervalId && (this.movewindowToBottomTimeIntervalId = setInterval(() => {
                    this.movewindowsToBottom()
                }, 150)), -1 !== this.movewindowTimeIntervalId && (clearInterval(this.movewindowTimeIntervalId), this.movewindowTimeIntervalId = -1))
            }

            leave() {
                this.isClick || this.showOrHideFloatPanel(!1);
                let e = this.getSuspensionWindows().getPosition();
                !this.isLeftDown && e[1] <= this.autoHideAtY + this.top && (-1 === this.movewindowTimeIntervalId && (this.movewindowTimeIntervalId = setInterval(() => {
                    this.movewindowsToTop()
                }, 150)), -1 !== this.movewindowToBottomTimeIntervalId && (clearInterval(this.movewindowToBottomTimeIntervalId), this.movewindowToBottomTimeIntervalId = -1))
            }

            click() {
                this.isClick || (this.isClick = !0, setTimeout(() => {
                    this.isClick = !1
                }, 150)), this.clickCount++, 1 === this.clickCount && setTimeout(() => {
                    this.clickCount > 1 && this.showOrHideMainWindow(), this.clickCount = 0
                }, 250)
            }

            makeDraggable(e) {
                "string" == typeof e && (e = document.querySelector(e));
                try {
                    this.mouseDrag(e)
                } catch (e) {
                    w.error("makeDraggable error:", e)
                }
            }

            mouseDrag(e) {
                let t = null, n = d.mouseMove(), i = e => {
                    t = [e.clientX, e.clientY]
                };
                return e.addEventListener("mousedown", i), n.on("move", e => {
                    if (e) {
                        if (t && this.isLeftDown) {
                            let e = s.screen.getCursorScreenPoint(), n = s.remote.getCurrentWindow().getBounds(),
                                i = Math.round(e.x - t[0]), o = Math.round(e.y - t[1]),
                                r = this.getFloatPanelDirection(i, o);
                            this.setFloatPanelDirection(r), w.critical("rectSuspension", n), this.setSuspensionConfig(n)
                        }
                    } else this.isLeftDown = !1
                }), function () {
                    e.removeEventListener("mousedown", i), n.destroy()
                }
            }

            getFloatPanelDirection(e, t) {
                let n = s.remote.getCurrentWindow(), i = n.getSize(), o = f.FloatPanelDirection.RightBottom;
                return e < this.left ? (e < this.left + 37 - this.hoverWindowWidth && (e = this.left + 37 - this.hoverWindowWidth), o = f.FloatPanelDirection.RightBottom, o = t + i[1] > this.height ? f.FloatPanelDirection.RightTop : f.FloatPanelDirection.RightBottom) : (e > this.width - this.hoverWindowWidth - 37 && (e = this.width - this.hoverWindowWidth - 37), o = f.FloatPanelDirection.LeftBottom, o = t + i[1] > this.height ? f.FloatPanelDirection.LeftTop : f.FloatPanelDirection.LeftBottom), t > this.height - this.hoverWindowHeight - 37 && (t = this.height - this.hoverWindowHeight - 37), n.setPosition(e, t), o
            }

            down(e) {
                0 === e.button && (this.showOrHideFloatPanel(!1), this.isLeftDown = !0)
            }

            up(e) {
                0 === e.button && (this.isLeftDown = !1)
            }

            canHideWindow() {
                let e = !0;
                do {
                    if (0 === this.showFloatPanelType) {
                        e = !1;
                        break
                    }
                    if (2 === this.showFloatPanelType) {
                        e = !0;
                        break
                    }
                    if (this.getMainWindows().isMaximized() && f.FloatPanelHelper.isThunderMainWndForeground() && this.getMainWindows().isVisible()) {
                        e = !0;
                        break
                    }
                    (this.isDowning || this.isStatus) && (e = !1)
                } while (0);
                return e
            }

            onSwitchTaskSpeed(e) {
            }

            onshowFloatPanel(e) {
                this.showFloatPanelType = e, u.NativeCallModule.nativeCall.CallNativeFunction("SetConfigValue", "ConfigFloatPanel", "FloatPanelValue", e.toString(), e => {
                    0 === e && u.NativeCallModule.nativeCall.CallNativeFunction("SaveConfig", () => {
                    })
                })
            }

            setSuspensionConfig(e) {
                u.NativeCallModule.nativeCall.CallNativeFunction("SetConfigValue", "ConfigSuspension", "SuspensionX", e.x, e => {
                }), u.NativeCallModule.nativeCall.CallNativeFunction("SetConfigValue", "ConfigSuspension", "SuspensionY", e.y, e => {
                })
            }

            handleRightClick() {
                this.showOrHideFloatPanel(!1);
                let e = [{
                    type: "normal",
                    label: "全局显示",
                    icon: 0 === this.isShowSpeedType ? `${__rootDir}/static/icon/ok.png` : "",
                    click: () => {
                        this.stat("float_monitor_speed_setting", "result=fullspeed"), this.onSwitchTaskSpeed(0)
                    }
                }], t = [{
                    type: "normal",
                    label: "新建任务(&N)",
                    icon: `${__rootDir}/static/icon/newtask.png`,
                    click: () => {
                        this.stat("float_monitor_rk_click", "button=create"), this.getMainWindows().webContents.send(h.ThunderChannelList.channelMRTrayMenuClick, "-task:newtask", "floatmonitor")
                    }
                }, {
                    type: "normal", label: "开始全部任务", icon: `${__rootDir}/static/icon/startalltask.png`, click: () => {
                        this.stat("float_monitor_rk_click", "button=start"), this.getMainWindows().webContents.send(h.ThunderChannelList.channelMRTrayMenuClick, "-task:startall")
                    }
                }, {
                    type: "normal", label: "暂停全部任务", icon: `${__rootDir}/static/icon/stoptask.png`, click: () => {
                        this.stat("float_monitor_rk_click", "button=pause"), this.getMainWindows().webContents.send(h.ThunderChannelList.channelMRTrayMenuClick, "-task:pauseall")
                    }
                }, {type: "submenu", label: "悬浮窗速度展示", submenu: e}, {
                    type: "submenu",
                    label: "悬浮窗显示设置",
                    submenu: [{
                        type: "normal",
                        label: "显示悬浮窗",
                        icon: 0 === this.showFloatPanelType ? `${__rootDir}/static/icon/ok.png` : "",
                        click: () => {
                            this.stat("float_monitor_display_setting", "result=show"), this.onshowFloatPanel(0)
                        }
                    }, {
                        type: "normal",
                        icon: 1 === this.showFloatPanelType ? `${__rootDir}/static/icon/ok.png` : "",
                        label: "下载时显示悬浮窗",
                        click: () => {
                            this.stat("float_monitor_display_setting", "result=undl_hide"), this.onshowFloatPanel(1)
                        }
                    }, {
                        type: "normal",
                        label: "隐藏悬浮窗",
                        icon: 2 === this.showFloatPanelType ? `${__rootDir}/static/icon/ok.png` : "",
                        click: () => {
                            this.stat("float_monitor_display_setting", "result=hide"), this.onshowFloatPanel(2)
                        }
                    }]
                }, {
                    type: "normal", icon: `${__rootDir}/static/icon/exit.png`, label: "退出(&X)", click: () => {
                        this.stat("float_monitor_rk_click", "button=exit"), this.getMainWindows().webContents.send(h.ThunderChannelList.channelMRTrayMenuClick, "-task:quitprocess")
                    }
                }];
                this.getMainWindows().isVisible() ? this.getMainWindows().isMinimized() ? t.splice(0, 0, {
                    label: "显示主界面",
                    type: "normal",
                    click: () => {
                        this.stat("float_monitor_rk_click", "button=showmain");
                        let e = this.getMainWindows();
                        e.isMinimized() && e.restore(), e.show()
                    }
                }) : t.splice(0, 0, {
                    label: "隐藏主界面", type: "normal", click: () => {
                        this.stat("float_monitor_rk_click", "button=hidemain"), this.getMainWindows().minimize(), this.getMainWindows().hide()
                    }
                }) : t.splice(0, 0, {
                    label: "显示主界面", type: "normal", click: () => {
                        this.stat("float_monitor_rk_click", "button=showmain");
                        let e = this.getMainWindows();
                        e.isMinimized() && e.restore(), e.show()
                    }
                });
                let n = s.remote.Menu.buildFromTemplate(t);
                v.MenuSkinNS.setStyle(n, {}), n.popup({window: this.getSuspensionWindows()})
            }

            isInInner() {
                let e = !1, t = s.screen.getCursorScreenPoint(), n = s.remote.getCurrentWindow().getBounds(),
                    i = n.x + this.hoverWindowWidth - 37, o = n.x + this.hoverWindowWidth + 37,
                    r = n.y + this.hoverWindowHeight - 37, a = n.y + this.hoverWindowHeight + 37;
                return t.x > i && t.x < o && t.y > r && t.y < a && (e = !0), e
            }

            showOrHideMainWindow() {
                if (this.isInInner()) {
                    let e = "";
                    this.getMainWindows().isMinimized() ? (this.getMainWindows().restore(), this.getMainWindows().show(), this.isThunderForeground = !0, e = "showmain") : this.getMainWindows().isVisible() && this.isThunderForeground ? (this.getMainWindows().minimize(), this.getMainWindows().hide(), this.isThunderForeground = !1, e = "hidemain") : (this.getMainWindows().isMinimized() && this.getMainWindows().restore(), this.getMainWindows().show(), this.isThunderForeground = !0, e = "showmain"), this.stat("float_monitor_dbclick_main_status_get", `status=${e}`)
                }
            }

            getMainWindows() {
                return null === this.mainWindow && (this.mainWindow = s.remote.getGlobal("mainRendererWindow")), this.mainWindow
            }

            getSuspensionWindows() {
                return null === this.suspensiinWindows && (this.suspensiinWindows = s.remote.getGlobal("suspensionWindow")), this.suspensiinWindows
            }

            onGetUserInfo() {
                u.NativeCallModule.nativeCall.CallNativeFunction("GetAllUserInfo", (e, t) => {
                    do {
                        if (w.information("onGetUserInfo allUserinfo", t), !t) break;
                        let e = t.vipList[0], n = Number(e.isVip);
                        w.information("onGetUserInfo vipInfo", e), 0 !== n ? (this.isVip = !0, this.isVipLogin = !0) : (this.isVip = !0, this.isVipLogin = !0)
                    } while (0)
                })
            }

            listenLoginEvent() {
                u.NativeCallModule.nativeCall.AttachNativeEvent("onLoginSuc", () => {
                    this.isVip = !1, this.onGetUserInfo()
                }), u.NativeCallModule.nativeCall.AttachNativeEvent("onLoginFailed", () => {
                    this.isVip = !1, this.isVipLogin = !1
                }), u.NativeCallModule.nativeCall.AttachNativeEvent("onUserInfoChange", (e, t) => {
                    "vipinfo" === e && this.onGetUserInfo()
                }), u.NativeCallModule.nativeCall.AttachNativeEvent("onLogout", () => {
                    this.isVip = !1, this.isVipLogin = !1
                })
            }

            getBooskeyState() {
                return new Promise(e => {
                    u.NativeCallModule.nativeCall.CallNativeFunction("GetConfigValue", "BossKey", "BossKeyState", !1, (t, n) => {
                        t === p.NativeFunctionErrorCode.Success ? e(n) : e(!1)
                    })
                })
            }

            setSuspensionPosition() {
                u.NativeCallModule.nativeCall.CallNativeFunction("GetConfigValue", "ConfigSuspension", "SuspensionX", null, (e, t) => {
                    if (e === p.NativeFunctionErrorCode.Success && null !== t) {
                        let e = s.remote.getCurrentWindow().getBounds();
                        e.x = t, this.getSuspensionWindows().setBounds(e)
                    }
                }), u.NativeCallModule.nativeCall.CallNativeFunction("GetConfigValue", "ConfigSuspension", "SuspensionY", null, (e, t) => {
                    if (e === p.NativeFunctionErrorCode.Success && null !== t) {
                        let e = s.remote.getCurrentWindow().getBounds();
                        e.y = t, this.getSuspensionWindows().setBounds(e)
                    }
                })
            }

            getConfigValue() {
                u.NativeCallModule.nativeCall.CallNativeFunction("GetConfigValue", "ConfigFloatPanel", "ConfigFloatPanelShowSpeedType", "0", (e, t) => {
                    e === p.NativeFunctionErrorCode.Success && (this.isShowSpeedType = Number(t), this.isShowSpeedType > 1 && (this.isShowSpeedType = 0))
                }), u.NativeCallModule.nativeCall.CallNativeFunction("GetConfigValue", "ConfigFloatPanel", "FloatPanelValue", "0", (e, t) => {
                    if (e === p.NativeFunctionErrorCode.Success) {
                        this.showFloatPanelType = Number(t);
                        let e = s.remote.getCurrentWindow().getBounds(), n = this.getFloatPanelDirection(e.x, e.y);
                        if (this.setFloatPanelDirection(n), this.getMainWindows().isMaximized() && this.getMainWindows().isVisible()) this.getSuspensionWindows().hide(); else if (2 === this.showFloatPanelType) this.getSuspensionWindows().hide(); else if (0 === this.showFloatPanelType) {
                            s.remote.getGlobal("silentSupsWnd") || this.getSuspensionWindows().showInactive()
                        } else if (this.canHideWindow()) this.getSuspensionWindows().hide(); else {
                            s.remote.getGlobal("silentSupsWnd") || this.getSuspensionWindows().showInactive()
                        }
                    }
                })
            }

            getAnimationLevel() {
                u.NativeCallModule.nativeCall.CallNativeFunction("GetConfigValue", "GenericSettings", "AnimationLevel", "0", (e, t) => {
                    e === p.NativeFunctionErrorCode.Success && (this.isStopAnimation = "0" === t)
                })
            }

            listenFullScreen() {
                let e = !1;
                setInterval(() => {
                    _.IsInFullScreen() ? (this.getSuspensionWindows().hide(), e = !0) : e && (this.canHideWindow() || (this.getSuspensionWindows().showInactive(), e = !1))
                }, 1e3)
            }

            listenConfigEvent() {
                u.NativeCallModule.nativeCall.CallNativeFunction("IsConfigInitFinish", e => {
                    e === p.NativeFunctionErrorCode.Success && (this.setSuspensionPosition(), this.getConfigValue(), this.getAnimationLevel())
                }), u.NativeCallModule.nativeCall.AttachNativeEvent("OnConfigValueChanaged", (e, t, n, i) => {
                    "ConfigFloatPanel" === e && n !== i && this.getConfigValue()
                }), u.NativeCallModule.nativeCall.AttachNativeEvent("OnConfigValueChanaged", (e, t, n, i) => {
                    "GenericSettings" === e && "AnimationLevel" === t && n !== i && this.getAnimationLevel()
                })
            }

            movewindowsToTop() {
                let e = this.getSuspensionWindows().getPosition(), t = e[1];
                t <= this.autoHideAtY - 70 + this.top ? (t = this.autoHideAtY - 70 + this.top, -1 !== this.movewindowTimeIntervalId && (clearInterval(this.movewindowTimeIntervalId), this.movewindowTimeIntervalId = -1)) : t -= 35, this.getSuspensionWindows().setPosition(e[0], t)
            }

            movewindowsToBottom() {
                let e = this.getSuspensionWindows().getPosition(), t = e[1];
                t >= this.autoHideAtY + this.top ? (t = this.autoHideAtY + this.top, -1 !== this.movewindowToBottomTimeIntervalId && (clearInterval(this.movewindowToBottomTimeIntervalId), this.movewindowToBottomTimeIntervalId = -1)) : t += 35, this.getSuspensionWindows().setPosition(e[0], t)
            }

            listenMainEvent() {
                this.getMainWindows().on("maximize", () => {
                    this.getSuspensionWindows().hide()
                }), this.getMainWindows().on("blur", () => {
                    this.canHideWindow() ? this.getSuspensionWindows().hide() : f.FloatPanelHelper.isThunderMainWndForeground() || this.getSuspensionWindows().showInactive()
                }), this.getMainWindows().on("focus", () => {
                    this.getMainWindows().isMaximized() ? this.getSuspensionWindows().hide() : this.canHideWindow() ? this.getSuspensionWindows().hide() : this.getSuspensionWindows().showInactive()
                }), this.getMainWindows().on("minimize", () => o(this, void 0, void 0, function* () {
                    (yield this.getBooskeyState()) ? this.getSuspensionWindows().hide() : this.getMainWindows().isVisible() && (this.canHideWindow() ? this.getSuspensionWindows().hide() : this.getSuspensionWindows().showInactive())
                })), this.getMainWindows().on("unmaximize", () => {
                    this.canHideWindow() ? this.getSuspensionWindows().hide() : this.getSuspensionWindows().showInactive()
                }), this.getMainWindows().on("hide", () => o(this, void 0, void 0, function* () {
                    if (yield this.getBooskeyState()) this.getSuspensionWindows().hide(); else if (this.canHideWindow()) this.getSuspensionWindows().hide(); else {
                        s.remote.getGlobal("silentSupsWnd") || this.getSuspensionWindows().showInactive()
                    }
                }))
            }

            listenGlobalSpeedChangeEvent() {
                u.NativeCallModule.nativeCall.AttachNativeEvent("OnTotalVipAcclerateStatusChanged", e => {
                    if (e) {
                        let t = JSON.parse(e);
                        t && (this.isInVipAcc = t.acclerating)
                    }
                }), u.NativeCallModule.nativeCall.AttachNativeEvent("OnGlobalDownloadSpeedChanged", (e, t) => {
                    this.totalSpeed = f.FloatPanelHelper.formatSpeed(e), this.isVip || this.isInVipAcc || (t = 0);
                    let n = f.FloatPanelHelper.formatSpeed(t);
                    this.vipSpeed = "+" + n.speed + n.unit, u.NativeCallModule.nativeCall.CallNativeFunction("GetDownloadProgress", (e, t) => {
                        this.downloadProgress = t
                    })
                })
            }

            stat(e, t) {
                let n = "";
                null !== t && void 0 !== t && "" !== t && (n = t), w.information(e, n), m.XLStatNS.trackEvent("client_quick", e, "", 0, 0, 0, 0, n)
            }

            mounted() {
                this.getSuspensionWindows().on("show", () => {
                    this.showState || (this.showState = !0, this.startShowTime = (new Date).getTime(), this.stat("float_monitor_show"))
                }), this.getSuspensionWindows().on("hide", () => {
                    if (this.showState) {
                        this.showState = !1;
                        let e = (((new Date).getTime() - this.startShowTime) / 1e3).toFixed(2);
                        this.stat("float_monitor_online_time", `time=${e}`), this.startShowTime = 0
                    }
                }), this.makeDraggable(this.$refs.suspension), this.listenMainEvent(), this.onGetUserInfo(), this.listenLoginEvent(), this.listenConfigEvent(), this.listenFullScreen(), this.listenGlobalSpeedChangeEvent(), this.getSuspensionWindows().hookWindowMessage(736, (e, t) => {
                    this.width = g.MutiScreenHelper.getScreenRectangle().width, this.height = g.MutiScreenHelper.getScreenRectangle().height, this.left = g.MutiScreenHelper.getScreenRectangle().x, this.top = g.MutiScreenHelper.getScreenRectangle().y, this.suspensiinWindows.setSize(2 * this.hoverWindowWidth, 2 * this.hoverWindowHeight)
                })
            }
        };
        i([a.Watch("isDowningStatus")], C.prototype, "onDownloadingChanged", null), C = i([a.Component({components: {FloatPanel: l.default}})], C), t.default = C
    }, 46: function (e, t, n) {
        "use strict";
        var i = this && this.__awaiter || function (e, t, n, i) {
            return new (n || (n = Promise))(function (o, r) {
                function s(e) {
                    try {
                        l(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function a(e) {
                    try {
                        l(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function l(e) {
                    e.done ? o(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(s, a)
                }

                l((i = i.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const o = n(3), r = n(9), s = n(6), a = n(2);
        !function (e) {
            function t(e, t) {
                if (null !== e) {
                    e.webContents.isDevToolsOpened() ? e.webContents.closeDevTools() : e.webContents.openDevTools(t)
                }
            }

            e.openDevTool = t, e.enableDevTools = function (e) {
                return i(this, void 0, void 0, function* () {
                    (yield r.FileSystemAWNS.existsAW(a.resolve(__rootDir, "../../enableDevTools"))) && window.addEventListener("keyup", n => {
                        "F12" === n.key && n.ctrlKey && t(o.remote.getCurrentWindow(), e)
                    }, !0)
                })
            }, e.enableDragOpenFile = function (e) {
                void 0 === e && (e = !1), document.addEventListener("dragover", e => {
                    e.preventDefault()
                }, !1), document.addEventListener("drop", e => i(this, void 0, void 0, function* () {
                    e.preventDefault();
                    let t = e.dataTransfer, n = t.files, i = t.items;
                    if (void 0 !== i && null !== i && i.length > 0) for (let e = 0; e < i.length; e++) {
                        let t = i[e];
                        "string" === t.kind && "text/uri-list" === t.type ? t.getAsString(e => {
                            s.NativeCallModule.nativeCall.CallNativeFunction("DropOpenUrl", e)
                        }) : t.kind
                    }
                    if (void 0 !== n && null !== n && n.length > 0) for (let e = 0; e < n.length; e++) {
                        let t = n[e].path;
                        void 0 !== t && null !== t && "" !== t && (yield r.FileSystemAWNS.existsAW(t)) && s.NativeCallModule.nativeCall.CallNativeFunction("DropOpenFile", t)
                    }
                }), !1)
            }
        }(t.ThunderToolsNS || (t.ThunderToolsNS = {}))
    }, 460: function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n(461), o = n.n(i);
        for (var r in i) "default" !== r && function (e) {
            n.d(t, e, function () {
                return i[e]
            })
        }(r);
        t.default = o.a
    }, 461: function (e, t, n) {
        "use strict";
        var i = this && this.__decorate || function (e, t, n, i) {
            var o, r = arguments.length, s = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, i); else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (s = (r < 3 ? o(s) : r > 3 ? o(t, n, s) : o(t, n)) || s);
            return r > 3 && s && Object.defineProperty(t, n, s), s
        }, o = this && this.__awaiter || function (e, t, n, i) {
            return new (n || (n = Promise))(function (o, r) {
                function s(e) {
                    try {
                        l(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function a(e) {
                    try {
                        l(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function l(e) {
                    e.done ? o(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(s, a)
                }

                l((i = i.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const r = n(4), s = n(976), a = n(8), l = n(6), d = n(21), c = n(623), u = n(13),
            h = n(1).default.getLogger("Thunder.SuspensionRender FloatPanelVue");
        let f = class extends r.Vue {
            constructor() {
                super(...arguments), this.downloadTaskCount = 0, this.taskBaseInfos = {}, this.haveDownloadTask = !1, this.taskIdLists = []
            }

            get haveDownloadTaskStyle() {
                let e = "display: none";
                return this.haveDownloadTask && (e = ""), e
            }

            get isHaveDownloadTaskStyle() {
                let e = "";
                return this.haveDownloadTask && (e = "display: none"), e
            }

            onClickShowFinishTask() {
                this.stat("float_monitor_hover_finished_click"), l.NativeCallModule.nativeCall.CallNativeFunction("SelectCategoryView", -1, a.DownloadKernel.CategroyViewID.Completed, void 0, !0), this.$emit("show-float-panel", !1)
            }

            dbclickItem(e) {
                this.stat("float_monitor_hover_downloading_click"), l.NativeCallModule.nativeCall.CallNativeFunction("SelectCategoryView", -1, a.DownloadKernel.CategroyViewID.Downloading, e, !0), this.$emit("show-float-panel", !1)
            }

            refresh() {
                return o(this, void 0, void 0, function* () {
                    let e = !1, t = 0, n = 0, i = !1, o = void 0;
                    this.downloadTaskCount = this.taskIdLists.length, this.haveDownloadTask = this.downloadTaskCount > 0;
                    let r = [], s = void 0;
                    for (let i = 0; i < this.taskIdLists.length; i++) s = this.taskIdLists[i], c.FloatPanelHelper.isDownloadStatus(this.taskBaseInfos[s].taskStatus) && (e = !0, t += this.taskBaseInfos[s].downloadSpeed, n += this.taskBaseInfos[s].vipSpeed, r.push(s));
                    (i = 1 === r.length) && (o = c.FloatPanelHelper.getTaskStartPrompt(this.taskBaseInfos[r[0]]), this.taskBaseInfos[r[0]].taskStatus === a.DownloadKernel.TaskStatus.StartPending && void 0 === o && (o = "连接资源")), this.$emit("download-event", e, t, n, i, o)
                })
            }

            onGetTaskListCallback(e, t) {
                if (e === d.NativeFunctionErrorCode.Success) {
                    let e = null;
                    if (t) try {
                        e = JSON.parse(t)
                    } catch (e) {
                        h.warning(e)
                    }
                    e ? (e.sort((e, t) => t.createTime - e.createTime), this.taskIdLists = e.map(e => (r.Vue.set(this.taskBaseInfos, e.taskId, e), e.taskId))) : (this.downloadTaskCount = 0, this.haveDownloadTask = !1), this.refresh(), l.NativeCallModule.nativeCall.AttachNativeEvent("OnTaskInserted", this.onTaskInsertedCallback), l.NativeCallModule.nativeCall.AttachNativeEvent("OnTaskRemoved", this.onTaskRemovedCallback), l.NativeCallModule.nativeCall.AttachNativeEvent("OnTaskStatusChanged", this.onTaskStatusChangedCallback), l.NativeCallModule.nativeCall.AttachNativeEvent("OnTaskDetailChanged", this.onTaskDetailChangedCallback)
                }
            }

            getTaskListAfterLoadTaskFinish() {
                l.NativeCallModule.nativeCall.CallNativeFunction("GetCategoryViewTaskListForSuspensionWnd", a.DownloadKernel.CategroyViewID.Downloading, this.onGetTaskListCallback)
            }

            onGetTaskBaseInfoCallback(e, t) {
                if (e === d.NativeFunctionErrorCode.Success) {
                    let e = null;
                    try {
                        e = JSON.parse(t)
                    } catch (e) {
                        h.warning(e)
                    }
                    if (null !== e) {
                        let t = e.taskId;
                        void 0 !== this.taskBaseInfos[t] ? this.taskBaseInfos[t] = e : (r.Vue.set(this.taskBaseInfos, t, e), this.taskIdLists.splice(0, 0, t)), this.refresh()
                    }
                }
            }

            onTaskInsertedCallback(e, t, n) {
                if (-1 === e && t === a.DownloadKernel.CategroyViewID.Downloading) {
                    let e = null;
                    try {
                        e = JSON.parse(n)
                    } catch (e) {
                        h.warning(e)
                    }
                    if (null !== e) for (let t = 0; t < e.length; ++t) l.NativeCallModule.nativeCall.CallNativeFunction("GetTaskBaseInfo", e[t], this.onGetTaskBaseInfoCallback)
                }
            }

            onTaskRemovedCallback(e, t, n) {
                if (-1 === e && t === a.DownloadKernel.CategroyViewID.Downloading) {
                    let e = [];
                    try {
                        e = JSON.parse(n)
                    } catch (e) {
                        h.warning(e)
                    }
                    for (let t = 0; t < e.length; ++t) for (let n = 0; n < this.taskIdLists.length; ++n) if (this.taskIdLists[n] === e[t]) {
                        this.taskIdLists.splice(n, 1), delete this.taskBaseInfos[e[t]];
                        break
                    }
                    this.taskIdLists.length > 0 ? this.haveDownloadTask = !0 : this.haveDownloadTask = !1, this.refresh()
                }
            }

            onTaskStatusChangedCallback(e) {
                {
                    let t = null;
                    try {
                        t = JSON.parse(e)
                    } catch (e) {
                        h.warning(e)
                    }
                    if (null !== t) {
                        for (let e in t) {
                            let n = t[e];
                            void 0 !== this.taskBaseInfos[e] && (this.taskBaseInfos[e].taskStatus = n)
                        }
                        this.refresh()
                    }
                }
            }

            onTaskDetailChangedCallback(e) {
                {
                    let t = null;
                    try {
                        t = JSON.parse(e)
                    } catch (e) {
                        h.warning(e)
                    }
                    if (null !== t) {
                        for (let e in t) {
                            let n = t[e];
                            void 0 !== this.taskBaseInfos[e] && (this.taskBaseInfos[e] = n)
                        }
                        this.refresh()
                    }
                }
            }

            listenTasksEvent() {
                l.NativeCallModule.nativeCall.CallNativeFunction("IsLoadStorageTaskFinish", e => {
                    e === d.NativeFunctionErrorCode.Success && this.getTaskListAfterLoadTaskFinish()
                })
            }

            stat(e, t) {
                let n = "";
                null !== t && void 0 !== t && "" !== t && (n = t), h.information(e, n), u.XLStatNS.trackEvent("client_quick", e, "", 0, 0, 0, 0, n)
            }

            mounted() {
                this.listenTasksEvent()
            }
        };
        f = i([r.Component({components: {TaskItem: s.default}})], f), t.default = f
    }, 462: function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n(463), o = n.n(i);
        for (var r in i) "default" !== r && function (e) {
            n.d(t, e, function () {
                return i[e]
            })
        }(r);
        t.default = o.a
    }, 463: function (e, t, n) {
        "use strict";
        var i = this && this.__decorate || function (e, t, n, i) {
            var o, r = arguments.length, s = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, i); else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (s = (r < 3 ? o(s) : r > 3 ? o(t, n, s) : o(t, n)) || s);
            return r > 3 && s && Object.defineProperty(t, n, s), s
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const o = n(7), r = n(4), s = n(57), a = n(623);
        let l = class extends r.Vue {
            get taskName() {
                return this.taskBase.taskName
            }

            get getTaskProgress() {
                let e = "width: ", t = 0;
                0 !== this.taskBase.fileSize && (t = this.taskBase.downloadSize / this.taskBase.fileSize), t >= 1 && (t = .9999);
                let n = (100 * t).toFixed(2) + "%";
                return "100.00%" === n && (n = "99.99%"), e += n
            }

            get getTaskIcon() {
                if (0 === this.taskBase.taskType) return "xlx-icon-type-group";
                return s.TaskUtilHelper.getTaskIcon(this.taskBase.taskName, this.taskBase.taskType)
            }

            get stateName() {
                let e = "", t = a.FloatPanelHelper.getTaskStatusPrompt(this.taskBase),
                    n = a.FloatPanelHelper.getTaskStartPrompt(this.taskBase);
                return o.isNullOrUndefined(n) ? o.isNullOrUndefined(t) || (e = t) : e = n, e
            }
        };
        i([r.Prop({})], l.prototype, "taskBase", void 0), l = i([r.Component({})], l), t.default = l
    }, 5: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e) {
            return require(e)
        }
    }, 54: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(3), o = n(58), r = n(1), s = n(10), a = n(59), l = r.default.getLogger("MenuSkinNS");
        !function (e) {
            function t(e, t) {
                if (l.information("setStyle", e, t), null !== e) {
                    let n = {windowPreference: o.WindowPreferenceNS.getWindowPreference()};
                    l.information("skinOpts", n), e.setStyle(a(n, t))
                }
            }

            e.setStyle = t, e.popEditableDefaultContextMenu = function (e, n, o) {
                let r = i.remote.getCurrentWebContents();
                r.once("context-menu", (o, a) => {
                    if (l.verbose(o), a.isEditable) {
                        let o = [{
                            label: "撤销", enabled: a.editFlags.canUndo, click: () => {
                                r.undo()
                            }
                        }, {type: "separator"}, {
                            label: "剪切", enabled: a.editFlags.canCut, click: () => {
                                r.cut()
                            }
                        }, {
                            label: "复制", enabled: a.editFlags.canCopy, click: () => {
                                r.copy()
                            }
                        }, {
                            label: "粘贴",
                            enabled: a.editFlags.canPaste && s.ThunderUtil.isClipboardTextFormatAvailable(),
                            click: () => {
                                r.paste()
                            }
                        }, {
                            label: "删除", enabled: a.editFlags.canDelete, click: () => {
                                r.delete()
                            }
                        }, {type: "separator"}, {
                            label: "全选", enabled: a.editFlags.canSelectAll, click: () => {
                                r.selectAll()
                            }
                        }];
                        if (void 0 !== e && "function" == typeof e) {
                            let t = e(a);
                            void 0 !== t && t.length > 0 && (void 0 === n ? n = o.length : (n < 0 && (n = o.length + 1 + n) < 0 && (n = 0), n > o.length && (n = o.length)), o.splice(n, 0, ...t))
                        }
                        let l = i.remote.Menu.buildFromTemplate(o);
                        t(l, {}), l.popup({window: i.remote.getCurrentWindow()})
                    }
                })
            }
        }(t.MenuSkinNS || (t.MenuSkinNS = {}))
    }, 55: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(15), o = n(6), r = n(38), s = n(1), a = n(10), l = s.default.getLogger("common/skin");

        function d(e) {
            if (e.type === r.SkinHelperNS.SkinType.Default) document.body.classList.remove("is-theme"), a.ThunderUtil.setCSSProperties(document.body, {
                "--color-primary-theme": "",
                "--color-primary-control-1": "",
                "--color-primary-control-2": "",
                "--color-primary-control-3": "",
                "--color-primary-control-4": "",
                "--color-primary-gradient-1": "",
                "--color-primary-gradient-2": "",
                "--color-primary-text": "",
                "--color-search": "",
                "--color-secondary": "",
                "--color-gradient-background-1": "",
                "--color-gradient-background-2": "",
                "--color-gradient-foreground-1": "",
                "--color-gradient-foreground-2": "",
                "--color-accordion-1": "",
                "--color-accordion-2": "",
                "--default-opacity-1": "",
                "--default-opacity-2": ""
            }); else if (e.type === r.SkinHelperNS.SkinType.Color || e.type === r.SkinHelperNS.SkinType.Wallpaper) {
                document.body.classList.add("is-theme");
                let {colors: {colorPrimary: t, colorPrimaryControl1: n, colorPrimaryControl2: i, colorPrimaryControl3: o, colorPrimaryControl4: r, colorPrimaryGradient: s, colorPrimaryText: l, colorSearch: d, colorSecondary: c, colorGradientBackground: u, colorGradientForeground: h, colorAccordion: f}, opacity: p} = e;
                a.ThunderUtil.setCSSProperties(document.body, {
                    "--color-primary-theme": `${t}`,
                    "--color-primary-control-1": `${n}`,
                    "--color-primary-control-2": `${i}`,
                    "--color-primary-control-3": `${o}`,
                    "--color-primary-control-4": `${r}`,
                    "--color-primary-gradient-1": `${s[0]}`,
                    "--color-primary-gradient-2": `${s[1]}`,
                    "--color-primary-text": `${l}`,
                    "--color-search": `${d}`,
                    "--color-secondary": `${c}`,
                    "--color-gradient-background-1": `${u[0]}`,
                    "--color-gradient-background-2": `${u[1]}`,
                    "--color-gradient-foreground-1": `${h[0]}`,
                    "--color-gradient-foreground-2": `${h[1]}`,
                    "--color-accordion-1": `${f[0]}`,
                    "--color-accordion-2": `${f[1]}`,
                    "--default-opacity-1": `${p - .1}`,
                    "--default-opacity-2": `${p + .1}`
                })
            }
        }

        i.default("GetSkinInfo").then(d).catch(e => {
            l.warning(e)
        }), o.NativeCallModule.nativeCall.AttachNativeEvent("OnChangeSkin", d)
    }, 57: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(2), o = n(8);
        let r = ["apk", "avi", "chm", "doc", "exe", "flv", "ipa", "ipsw", "iso", "mkv", "mov", "mp4"];
        r.push(...["mpg", "pdf", "ppt", "rar", "rm", "rmvb", "txt", "wmv", "xls"]);
        const s = ".xv;.xlmv;.3gp;.3gp2;.3gpp;.3gpp2;.3mm;.3p2;.60d;.787;.aaf;.aep;.aepx;.aet;.aetx;.ajp;.ale;.amv;.amx;.arf;\n  .asf;.ass;.asx;.avb;.avd;.avi;.avp;.avs;.avs;.axm;.bdm;.bdmv;.bik;.bix;.bmk;.bnp;.box;.bs4;.bsf;.byu;.camproj;.camrec;.clpi;.cmmp;\n  .cmmtpl;.cmproj; .cmrec;.cpi;.cst;.cvc;.d2v;.d3v;.dat;.dav;.dce;.dck;.ddat;.dif;.dir;.divx;.dlx; .dmb;.dmsm;.dmsm3d;.dmss;.dnc;.dpg;\n  .dream;.dsy;.dv;.dv-avi;.dv4;.dvdmedia; .dvr-ms;.dvx;.dxr;.dzm;.dzp;.dzt;.edl;.evo;.eye;.f4p;.f4v;.fbr;.fbr;.fbz;.fcp; .flc;.flh;\n  .fli;.flv;.flx;.gfp;.gl;.grasp;.gts;.gvi;.gvp;.hdmov;.hkm;.ifo; .imovieproj;.imovieproject;.iva;.ivf;.ivr;.ivs;.izz;.izzy;.jts;.jtv;\n  .k3g;.lrec; .lsf;.lsx;.m15;.m1pg;.m1v;.m21;.m21;.m2a;.m2p;.m2t;.m2ts;.m2v;.m4e;.m4u;.m4v; .m75;.meta;.mgv;.mj2;.mjp;.mjpg;.mkv;.mmv;\n  .mnv;.mod;.modd;.moff;.moi;.moov;.mov; .movie;.mp21;.mp21;.mp2v;.mp4;.mp4v;.mpe;.mpeg;.mpeg4;.mpf;.mpg;.mpg2;.mpgindex; .mpl;.mpls;\n  .mpsub;.mpv;.mpv2;.mqv;.msdvd;.msh;.mswmm;.mts;.mtv;.mvb;.mvc;.mvd; .mve;.mvp;.mvy;.mxf;.mys;.ncor;.nsv;.nuv;.nvc;.ogm;.ogv;.ogx;.osp;\n  .par;.pds;.pgi; .piv;.pjs;.playlist;.pmf;.pns;.ppj;.prel;.pro;.prproj;.prtl;.psb;.psh;.pssd;.pva;.pvr;.pxv; .qt;.qtch;.qtl;.qtm;.qtz;\n  .r3d;.rcproject;.rdb;.rec;.rm;.rmd;.rmp;.rms;.rmvb;.roq; .rp;.rts;.rts;.rum;.rv;.sbk;.sbt;.scc;.scm;.scn;.screenflow;.sec;.seq;.sfd;\n  .sfvidcap;.smi;.smil;.smk;.sml;.smv;.spl;.srt;.ssa;.ssm;.stl;.str;.stx;.sub;.svi;.swf;.swi; .swt;.tda3mt;.tivo;.tix;.tod;.tp;.tp0;.tpd;\n  .tpr;.trp;.ts;.tts;.tvs;.vc1;.vcpf;.vcr; .vcv;.vdo;.vdr;.veg;.vem;.vf;.vfw;.vfz;.vgz;.vid;.viewlet;.viv;.vivo;.vlab;.vob; .vp3;.vp6;.vp7;\n  .vpj;.vro;.vs4;.vse;.vsp;.w32;.wcp;.webm;.wlmp;.wm;.wmd;.wmmp; .wmv;.wmx;.wp3;.wpl;.wtv;.wvx;.xfl;.xvid;.yuv;.zm1;.zm2;.zm3;.zmv;",
            a = ".exe;.com;.bat;.msi;.apk;.ipa;.iso;.mds;.bin;.img;.ipsw;",
            l = ".txt;.html;.htm;.shtml;.xhtml;.chm;.hlp;.inf;.rtf;.tex;.ltx;.doc;.docx;.wps;.ppt;.pptx;.odf;.pdf;.xls;.xlsx;.docm;.\n  dot;.dotm;.dotx;.email;.rp;.pps;.et;.ett;.xlt;.dbf;.prn;.csv;.mht;.mhtml;.xml;.wpt;.dps;.dpt;.pot;.ppsx;.epub;.mobi;.lit;.wdl;.ceb;.abm;\n  .pdg;.umb;.ibooks;",
            d = ".aiff;.cue;.m3u;.au;.cdda;.raw;.wav;.flac;.tak;.mp3;.aac;.wma;.m4a;.mid;.mka;.mp2;.mpa;.mpc;.ape;.ofr;\n  .ogg;.ra;.wv;.tta;.ac3;.dts;.nsf;.mod;.s3m;.xm;.it;.vst;",
            c = ".psd;.tga;.gif;.jpeg;.jpg;.jp2;.bmp;.ico;.pcx;.png;.pbm;.pgm;.ppm;.pnm;.pgf;.arw;.cr2;.crw;.dcr;.dng;.erf;.kdc;.mef;\n  .mos;.mrw;.nef;.nrw;.orf;.pef;.ptx;.r3d;.raf;.raw;.rw2;.srf;.srw;.x3f;.ras;.tiff;.tif;.wbmp;.ilbm;.lbm;.iff;.ico;",
            u = ".zip;.zipx;.rar;.7z;.isz;.cab;.arj;.ace;.alz;.uue;.tar;.gz; .gzip;.tgz;.tpz;.bzip2;.bz2;.bz;.tbz;.tbz2;.xz;.txz;\n  .lzh;.lha;.zt;.az; .xpi;.jar;.wim;.swm;.rpm;.xar;.deb;.dmg;.hfs;.cpio;.lzma;.lzma86;.split;",
            h = ".torrent;",
            f = ".3gp;.asf;.avi;.divx;.f4v;.flv;.mkv;.mov;.movie;.mp4;.mpeg;.mpeg4;.mpg;.mpg2;.rm;.rmvb;.rp;.swf;.tp;.tp0;.ts;.wmv",
            p = ".exe;.com;.bat;.msi", g = ".wav;.flac;.MP3;.AAC;.WMA;.M4A;.MID;.APE;.OGG;.RA;.mod",
            m = ".psd;.tga;.gif;.jpeg;.jpg;.jp2;.bmp;.ico;.pcx;.pdf;.png;.pbm;.pgm;.ppm;.pnm;.pgf;.arw;.cr2;.crw;.dcr;.dng;.erf;.kdc;\n  .mef;.mos;.mrw;.nef;.nrw;.orf;.pef;.ptx;.r3d;.raf;.raw;.rw2;.srf;.srw;.x3f;.ras;.tiff;.tif;.wbmp;.ilbm;.lbm;.iff;.ico",
            v = ".txt;.html;.htm;.shtml;.xhtml;.chm;.hlp;.inf;.rtf;.tex;.ltx;.doc;.docx;.wps;.ppt;.pptx;.odf;.pdf;.xls;.xlsx;.docm;.dot;.dotm;.dotx;.email;.rp;.pps",
            S = ".rar;.tar;.zip;.gzip;.cab;.uue;.arj;.bz2;.lzh;.jar;.ace;.iso;.7-zip;.7z";
        !function (e) {
            let t;

            function n(e) {
                let n = t.Unkown, o = i.extname(e);
                return void 0 === o || "" === o || o.length < 2 ? n = t.Unkown : f.indexOf(o) > -1 ? n = t.Video : p.indexOf(o) > -1 ? n = t.Software : v.indexOf(o) > -1 ? n = t.Doc : g.indexOf(o) > -1 ? n = t.Music : m.indexOf(o) > -1 ? n = t.Pic : S.indexOf(o) > -1 && (n = t.Zip), o.length > 1 && ".z" === o.slice(0, 2) && /[0-9]+/.test(o.substring(2)) && (n = t.Zip), n
            }

            e.getTaskIcon = function (e, t) {
                let n = "";
                do {
                    if (t === o.DownloadKernel.TaskType.Bt) {
                        n = "xlx-icon-type-bt-file";
                        break
                    }
                    if (t === o.DownloadKernel.TaskType.Group) {
                        n = "xlx-icon-type-group";
                        break
                    }
                    n = "xlx-icon-type-unknown";
                    let f = i.extname(e);
                    if ("" === f || f.length < 2) break;
                    let p = (f = f.toLowerCase()).substring(1);
                    if (r.indexOf(p) > -1) {
                        n = "doc" === f ? "xlx-icon-type-word" : "xlx-icon-type-" + p;
                        break
                    }
                    if (s.indexOf(f) > -1) {
                        n = "xlx-icon-type-video";
                        break
                    }
                    if (a.indexOf(f) > -1) {
                        n = "xlx-icon-type-install", [".mds", ".bin", ".img"].indexOf(f) > -1 && (n = "xlx-icon-type-iso");
                        break
                    }
                    if (l.indexOf(f) > -1) {
                        if (n = "xlx-icon-type-doc", [".htm", ".html", ".mht"].indexOf(f) > -1) {
                            n = "xlx-icon-type-link";
                            break
                        }
                        if ("docx" === f) {
                            n = "xlx-icon-type-word";
                            break
                        }
                        if ("xlsx" === f) {
                            n = "xlx-icon-type-xls";
                            break
                        }
                        if ("pptx" === f) {
                            n = "xlx-icon-type-ppt";
                            break
                        }
                        break
                    }
                    if (d.indexOf(f) > -1) {
                        n = "xlx-icon-type-music";
                        break
                    }
                    if (c.indexOf(f) > -1) {
                        n = "xlx-icon-type-pic";
                        break
                    }
                    if (u.indexOf(f) > -1) {
                        n = "xlx-icon-type-rar";
                        break
                    }
                    if (h.indexOf(f) > -1) {
                        n = "xlx-icon-type-bt-link";
                        break
                    }
                } while (0);
                return n
            }, function (e) {
                e[e.Unkown = 0] = "Unkown", e[e.Video = 1] = "Video", e[e.Software = 2] = "Software", e[e.Doc = 3] = "Doc", e[e.Music = 4] = "Music", e[e.Pic = 5] = "Pic", e[e.Zip = 6] = "Zip", e[e.Bt = 7] = "Bt"
            }(t = e.FileExtType || (e.FileExtType = {})), e.getTaskFileType = function (e, n) {
                let o = t.Unkown;
                return void 0 === n && void 0 !== e && (n = i.extname(e)), void 0 === n || "" === n || n.length < 2 ? o = t.Unkown : s.indexOf(n) > -1 ? o = t.Video : a.indexOf(n) > -1 ? o = t.Software : l.indexOf(n) > -1 ? o = t.Doc : d.indexOf(n) > -1 ? o = t.Music : c.indexOf(n) > -1 ? o = t.Pic : u.indexOf(n) > -1 ? o = t.Zip : h.indexOf(n) > -1 && (o = t.Bt), n.length > 1 && ".z" === n.slice(0, 2) && /[0-9]+/.test(n.substring(2)) && (o = t.Zip), o
            }, e.getGroupFileType = n, e.getDefaultGroupPrefix = function (e) {
                let i = "任务组";
                do {
                    if (void 0 === e || null === e || 0 === e.length) break;
                    let o = [];
                    for (let e = 0; e < 7; e++) o[e] = 0;
                    for (let t of e) {
                        let e = n(t);
                        o[e] = o[e] + 1
                    }
                    let r = t.Unkown;
                    for (let e = 1; e < o.length; e++) o[e] > o[r] && (r = e);
                    r === t.Video ? i = "视频任务组" : r === t.Software ? i = "程序任务组" : r === t.Music ? i = "音乐任务组" : r === t.Pic ? i = "图片任务组" : r === t.Doc ? i = "文档任务组" : r === t.Zip && (i = "压缩包任务组")
                } while (0);
                return i
            }, e.compareVersion = function (e, t) {
                let n = -2;
                do {
                    if (null === e || void 0 === e || "" === e || null === t || void 0 === t || "" === t) break;
                    let i = 0, o = 0, r = 0, s = 0, a = 0, l = 0, d = 0, c = 0, u = e.split(/\./);
                    if (null === u || void 0 === u || u.length < 3) break;
                    if (i = Number(u[0]), o = Number(u[1]), r = Number(u[2]), null !== u[3] && void 0 !== u[3] && "" !== u[3] && (s = Number(u[3])), null === (u = t.split(/\./)) || void 0 === u || u.length < 3) break;
                    if (a = Number(u[0]), l = Number(u[1]), d = Number(u[2]), null !== u[3] && void 0 !== u[3] && "" !== u[3] && (c = Number(u[3])), a > i) {
                        n = 1;
                        break
                    }
                    if (a < i) {
                        n = -1;
                        break
                    }
                    if (l > o) {
                        n = 1;
                        break
                    }
                    if (l < o) {
                        n = -1;
                        break
                    }
                    if (d > r) {
                        n = 1;
                        break
                    }
                    if (d < r) {
                        n = -1;
                        break
                    }
                    if (0 !== s) {
                        if (c > s) {
                            n = 1;
                            break
                        }
                        if (c < s) {
                            n = -1;
                            break
                        }
                    }
                    n = 0
                } while (0);
                return n
            }
        }(t.TaskUtilHelper || (t.TaskUtilHelper = {}))
    }, 58: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(86), o = n(69);
        !function (e) {
            e.getWindowPreference = function (e = !1) {
                let t = o.default(), n = {};
                return t && t.colors && "string" == typeof t.colors.colorPrimaryControl1 && (n.hoverBackgroundColor = e ? parseInt(i.ColorUtilNS.rgbaStringToHexWith0xBegin(t.colors.colorPrimaryControl1), 16) : i.ColorUtilNS.rgbaStringToHexWith0xBegin(t.colors.colorPrimaryControl1)), n
            }
        }(t.WindowPreferenceNS || (t.WindowPreferenceNS = {}))
    }, 59: function (e, t, n) {
        (function (e) {
            var n = 200, i = "__lodash_hash_undefined__", o = 800, r = 16, s = 9007199254740991,
                a = "[object Arguments]", l = "[object AsyncFunction]", d = "[object Function]",
                c = "[object GeneratorFunction]", u = "[object Null]", h = "[object Object]", f = "[object Proxy]",
                p = "[object Undefined]", g = /^\[object .+?Constructor\]$/, m = /^(?:0|[1-9]\d*)$/, v = {};
            v["[object Float32Array]"] = v["[object Float64Array]"] = v["[object Int8Array]"] = v["[object Int16Array]"] = v["[object Int32Array]"] = v["[object Uint8Array]"] = v["[object Uint8ClampedArray]"] = v["[object Uint16Array]"] = v["[object Uint32Array]"] = !0, v[a] = v["[object Array]"] = v["[object ArrayBuffer]"] = v["[object Boolean]"] = v["[object DataView]"] = v["[object Date]"] = v["[object Error]"] = v[d] = v["[object Map]"] = v["[object Number]"] = v[h] = v["[object RegExp]"] = v["[object Set]"] = v["[object String]"] = v["[object WeakMap]"] = !1;
            var S = "object" == typeof global && global && global.Object === Object && global,
                _ = "object" == typeof self && self && self.Object === Object && self,
                w = S || _ || Function("return this")(), C = "object" == typeof t && t && !t.nodeType && t,
                y = C && "object" == typeof e && e && !e.nodeType && e, T = y && y.exports === C, k = T && S.process,
                b = function () {
                    try {
                        return k && k.binding && k.binding("util")
                    } catch (e) {
                    }
                }(), M = b && b.isTypedArray;

            function R(e, t) {
                return "__proto__" == t ? void 0 : e[t]
            }

            var I, N, E, D = Array.prototype, P = Function.prototype, O = Object.prototype, W = w["__core-js_shared__"],
                F = P.toString, x = O.hasOwnProperty,
                A = (I = /[^.]+$/.exec(W && W.keys && W.keys.IE_PROTO || "")) ? "Symbol(src)_1." + I : "",
                L = O.toString, B = F.call(Object),
                U = RegExp("^" + F.call(x).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                j = T ? w.Buffer : void 0, G = w.Symbol, H = w.Uint8Array, z = j ? j.allocUnsafe : void 0,
                V = (N = Object.getPrototypeOf, E = Object, function (e) {
                    return N(E(e))
                }), $ = Object.create, K = O.propertyIsEnumerable, Y = D.splice, X = G ? G.toStringTag : void 0,
                J = function () {
                    try {
                        var e = Ce(Object, "defineProperty");
                        return e({}, "", {}), e
                    } catch (e) {
                    }
                }(), q = j ? j.isBuffer : void 0, Z = Math.max, Q = Date.now, ee = Ce(w, "Map"),
                te = Ce(Object, "create"), ne = function () {
                    function e() {
                    }

                    return function (t) {
                        if (!Pe(t)) return {};
                        if ($) return $(t);
                        e.prototype = t;
                        var n = new e;
                        return e.prototype = void 0, n
                    }
                }();

            function ie(e) {
                var t = -1, n = null == e ? 0 : e.length;
                for (this.clear(); ++t < n;) {
                    var i = e[t];
                    this.set(i[0], i[1])
                }
            }

            function oe(e) {
                var t = -1, n = null == e ? 0 : e.length;
                for (this.clear(); ++t < n;) {
                    var i = e[t];
                    this.set(i[0], i[1])
                }
            }

            function re(e) {
                var t = -1, n = null == e ? 0 : e.length;
                for (this.clear(); ++t < n;) {
                    var i = e[t];
                    this.set(i[0], i[1])
                }
            }

            function se(e) {
                var t = this.__data__ = new oe(e);
                this.size = t.size
            }

            function ae(e, t) {
                var n = Re(e), i = !n && Me(e), o = !n && !i && Ne(e), r = !n && !i && !o && We(e),
                    s = n || i || o || r, a = s ? function (e, t) {
                        for (var n = -1, i = Array(e); ++n < e;) i[n] = t(n);
                        return i
                    }(e.length, String) : [], l = a.length;
                for (var d in e) !t && !x.call(e, d) || s && ("length" == d || o && ("offset" == d || "parent" == d) || r && ("buffer" == d || "byteLength" == d || "byteOffset" == d) || ye(d, l)) || a.push(d);
                return a
            }

            function le(e, t, n) {
                (void 0 === n || be(e[t], n)) && (void 0 !== n || t in e) || ue(e, t, n)
            }

            function de(e, t, n) {
                var i = e[t];
                x.call(e, t) && be(i, n) && (void 0 !== n || t in e) || ue(e, t, n)
            }

            function ce(e, t) {
                for (var n = e.length; n--;) if (be(e[n][0], t)) return n;
                return -1
            }

            function ue(e, t, n) {
                "__proto__" == t && J ? J(e, t, {configurable: !0, enumerable: !0, value: n, writable: !0}) : e[t] = n
            }

            ie.prototype.clear = function () {
                this.__data__ = te ? te(null) : {}, this.size = 0
            }, ie.prototype.delete = function (e) {
                var t = this.has(e) && delete this.__data__[e];
                return this.size -= t ? 1 : 0, t
            }, ie.prototype.get = function (e) {
                var t = this.__data__;
                if (te) {
                    var n = t[e];
                    return n === i ? void 0 : n
                }
                return x.call(t, e) ? t[e] : void 0
            }, ie.prototype.has = function (e) {
                var t = this.__data__;
                return te ? void 0 !== t[e] : x.call(t, e)
            }, ie.prototype.set = function (e, t) {
                var n = this.__data__;
                return this.size += this.has(e) ? 0 : 1, n[e] = te && void 0 === t ? i : t, this
            }, oe.prototype.clear = function () {
                this.__data__ = [], this.size = 0
            }, oe.prototype.delete = function (e) {
                var t = this.__data__, n = ce(t, e);
                return !(n < 0 || (n == t.length - 1 ? t.pop() : Y.call(t, n, 1), --this.size, 0))
            }, oe.prototype.get = function (e) {
                var t = this.__data__, n = ce(t, e);
                return n < 0 ? void 0 : t[n][1]
            }, oe.prototype.has = function (e) {
                return ce(this.__data__, e) > -1
            }, oe.prototype.set = function (e, t) {
                var n = this.__data__, i = ce(n, e);
                return i < 0 ? (++this.size, n.push([e, t])) : n[i][1] = t, this
            }, re.prototype.clear = function () {
                this.size = 0, this.__data__ = {hash: new ie, map: new (ee || oe), string: new ie}
            }, re.prototype.delete = function (e) {
                var t = we(this, e).delete(e);
                return this.size -= t ? 1 : 0, t
            }, re.prototype.get = function (e) {
                return we(this, e).get(e)
            }, re.prototype.has = function (e) {
                return we(this, e).has(e)
            }, re.prototype.set = function (e, t) {
                var n = we(this, e), i = n.size;
                return n.set(e, t), this.size += n.size == i ? 0 : 1, this
            }, se.prototype.clear = function () {
                this.__data__ = new oe, this.size = 0
            }, se.prototype.delete = function (e) {
                var t = this.__data__, n = t.delete(e);
                return this.size = t.size, n
            }, se.prototype.get = function (e) {
                return this.__data__.get(e)
            }, se.prototype.has = function (e) {
                return this.__data__.has(e)
            }, se.prototype.set = function (e, t) {
                var i = this.__data__;
                if (i instanceof oe) {
                    var o = i.__data__;
                    if (!ee || o.length < n - 1) return o.push([e, t]), this.size = ++i.size, this;
                    i = this.__data__ = new re(o)
                }
                return i.set(e, t), this.size = i.size, this
            };
            var he, fe = function (e, t, n) {
                for (var i = -1, o = Object(e), r = n(e), s = r.length; s--;) {
                    var a = r[he ? s : ++i];
                    if (!1 === t(o[a], a, o)) break
                }
                return e
            };

            function pe(e) {
                return null == e ? void 0 === e ? p : u : X && X in Object(e) ? function (e) {
                    var t = x.call(e, X), n = e[X];
                    try {
                        e[X] = void 0;
                        var i = !0
                    } catch (e) {
                    }
                    var o = L.call(e);
                    i && (t ? e[X] = n : delete e[X]);
                    return o
                }(e) : function (e) {
                    return L.call(e)
                }(e)
            }

            function ge(e) {
                return Oe(e) && pe(e) == a
            }

            function me(e) {
                return !(!Pe(e) || A && A in e) && (Ee(e) ? U : g).test(function (e) {
                    if (null != e) {
                        try {
                            return F.call(e)
                        } catch (e) {
                        }
                        try {
                            return e + ""
                        } catch (e) {
                        }
                    }
                    return ""
                }(e))
            }

            function ve(e) {
                if (!Pe(e)) return function (e) {
                    var t = [];
                    if (null != e) for (var n in Object(e)) t.push(n);
                    return t
                }(e);
                var t = Te(e), n = [];
                for (var i in e) ("constructor" != i || !t && x.call(e, i)) && n.push(i);
                return n
            }

            function Se(e, t, n, i, o) {
                e !== t && fe(t, function (r, s) {
                    if (Pe(r)) o || (o = new se), function (e, t, n, i, o, r, s) {
                        var a = R(e, n), l = R(t, n), d = s.get(l);
                        if (d) return void le(e, n, d);
                        var c = r ? r(a, l, n + "", e, t, s) : void 0, u = void 0 === c;
                        if (u) {
                            var f = Re(l), p = !f && Ne(l), g = !f && !p && We(l);
                            c = l, f || p || g ? Re(a) ? c = a : Oe(w = a) && Ie(w) ? c = function (e, t) {
                                var n = -1, i = e.length;
                                t || (t = Array(i));
                                for (; ++n < i;) t[n] = e[n];
                                return t
                            }(a) : p ? (u = !1, c = function (e, t) {
                                if (t) return e.slice();
                                var n = e.length, i = z ? z(n) : new e.constructor(n);
                                return e.copy(i), i
                            }(l, !0)) : g ? (u = !1, m = l, v = !0 ? (S = m.buffer, _ = new S.constructor(S.byteLength), new H(_).set(new H(S)), _) : m.buffer, c = new m.constructor(v, m.byteOffset, m.length)) : c = [] : function (e) {
                                if (!Oe(e) || pe(e) != h) return !1;
                                var t = V(e);
                                if (null === t) return !0;
                                var n = x.call(t, "constructor") && t.constructor;
                                return "function" == typeof n && n instanceof n && F.call(n) == B
                            }(l) || Me(l) ? (c = a, Me(a) ? c = function (e) {
                                return function (e, t, n, i) {
                                    var o = !n;
                                    n || (n = {});
                                    var r = -1, s = t.length;
                                    for (; ++r < s;) {
                                        var a = t[r], l = i ? i(n[a], e[a], a, n, e) : void 0;
                                        void 0 === l && (l = e[a]), o ? ue(n, a, l) : de(n, a, l)
                                    }
                                    return n
                                }(e, Fe(e))
                            }(a) : (!Pe(a) || i && Ee(a)) && (c = function (e) {
                                return "function" != typeof e.constructor || Te(e) ? {} : ne(V(e))
                            }(l))) : u = !1
                        }
                        var m, v, S, _;
                        var w;
                        u && (s.set(l, c), o(c, l, i, r, s), s.delete(l));
                        le(e, n, c)
                    }(e, t, s, n, Se, i, o); else {
                        var a = i ? i(R(e, s), r, s + "", e, t, o) : void 0;
                        void 0 === a && (a = r), le(e, s, a)
                    }
                }, Fe)
            }

            function _e(e, t) {
                return ke(function (e, t, n) {
                    return t = Z(void 0 === t ? e.length - 1 : t, 0), function () {
                        for (var i = arguments, o = -1, r = Z(i.length - t, 0), s = Array(r); ++o < r;) s[o] = i[t + o];
                        o = -1;
                        for (var a = Array(t + 1); ++o < t;) a[o] = i[o];
                        return a[t] = n(s), function (e, t, n) {
                            switch (n.length) {
                                case 0:
                                    return e.call(t);
                                case 1:
                                    return e.call(t, n[0]);
                                case 2:
                                    return e.call(t, n[0], n[1]);
                                case 3:
                                    return e.call(t, n[0], n[1], n[2])
                            }
                            return e.apply(t, n)
                        }(e, this, a)
                    }
                }(e, t, Le), e + "")
            }

            function we(e, t) {
                var n, i, o = e.__data__;
                return ("string" == (i = typeof(n = t)) || "number" == i || "symbol" == i || "boolean" == i ? "__proto__" !== n : null === n) ? o["string" == typeof t ? "string" : "hash"] : o.map
            }

            function Ce(e, t) {
                var n = function (e, t) {
                    return null == e ? void 0 : e[t]
                }(e, t);
                return me(n) ? n : void 0
            }

            function ye(e, t) {
                var n = typeof e;
                return !!(t = null == t ? s : t) && ("number" == n || "symbol" != n && m.test(e)) && e > -1 && e % 1 == 0 && e < t
            }

            function Te(e) {
                var t = e && e.constructor;
                return e === ("function" == typeof t && t.prototype || O)
            }

            var ke = function (e) {
                var t = 0, n = 0;
                return function () {
                    var i = Q(), s = r - (i - n);
                    if (n = i, s > 0) {
                        if (++t >= o) return arguments[0]
                    } else t = 0;
                    return e.apply(void 0, arguments)
                }
            }(J ? function (e, t) {
                return J(e, "toString", {
                    configurable: !0, enumerable: !1, value: (n = t, function () {
                        return n
                    }), writable: !0
                });
                var n
            } : Le);

            function be(e, t) {
                return e === t || e != e && t != t
            }

            var Me = ge(function () {
                return arguments
            }()) ? ge : function (e) {
                return Oe(e) && x.call(e, "callee") && !K.call(e, "callee")
            }, Re = Array.isArray;

            function Ie(e) {
                return null != e && De(e.length) && !Ee(e)
            }

            var Ne = q || function () {
                return !1
            };

            function Ee(e) {
                if (!Pe(e)) return !1;
                var t = pe(e);
                return t == d || t == c || t == l || t == f
            }

            function De(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= s
            }

            function Pe(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t)
            }

            function Oe(e) {
                return null != e && "object" == typeof e
            }

            var We = M ? function (e) {
                return function (t) {
                    return e(t)
                }
            }(M) : function (e) {
                return Oe(e) && De(e.length) && !!v[pe(e)]
            };

            function Fe(e) {
                return Ie(e) ? ae(e, !0) : ve(e)
            }

            var xe, Ae = (xe = function (e, t, n) {
                Se(e, t, n)
            }, _e(function (e, t) {
                var n = -1, i = t.length, o = i > 1 ? t[i - 1] : void 0, r = i > 2 ? t[2] : void 0;
                for (o = xe.length > 3 && "function" == typeof o ? (i--, o) : void 0, r && function (e, t, n) {
                    if (!Pe(n)) return !1;
                    var i = typeof t;
                    return !!("number" == i ? Ie(n) && ye(t, n.length) : "string" == i && t in n) && be(n[t], e)
                }(t[0], t[1], r) && (o = i < 3 ? void 0 : o, i = 1), e = Object(e); ++n < i;) {
                    var s = t[n];
                    s && xe(e, s, n, o)
                }
                return e
            }));

            function Le(e) {
                return e
            }

            e.exports = Ae
        }).call(this, n(87)(e))
    }, 6: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(7), o = n(18), r = n(19), s = n(24), a = n(25);
        !function (e) {
            let t;
            !function (e) {
                e[e.Unknown = -1] = "Unknown", e[e.Success = 0] = "Success", e[e.FunctionNotExist = 1] = "FunctionNotExist", e[e.ParamaterError = 2] = "ParamaterError", e[e.CallFailed = 3] = "CallFailed"
            }(t = e.NativeCallErrorCode || (e.NativeCallErrorCode = {}));

            class n {
                constructor(e, t, n) {
                    this.maxId = e, this.minId = t, this.invalidId = n
                }

                generateId() {
                    return this.minId === this.maxId ? this.invalidId : this.minId++
                }

                isInvalidId(e) {
                    return e === this.invalidId
                }
            }

            e.IdGenerator = n;
            const l = 0;
            e.idGenerator = new n(1e7, 1, l);

            class d {
                constructor() {
                    this.jsCallbacks = new Map, this.eventJsCallbakcs = new Map, this.jsRegisterFunctions = new Map, this.targetCommunitorInfo = a.CommonIPCRenderer.rendererCommunicator.getCommunicatorInfoByContext(s.CommonIPCBase.mainRendererContext), this.bindMsgListeners(), this.notifyNativeCallReady()
                }

                CallNativeFunction(t, ...n) {
                    do {
                        if (i.isNullOrUndefined(t) || 0 === t.length) {
                            o.error("funcName is empty");
                            break
                        }
                        o.information("funcName = ", t), this.printArgs(n);
                        let s = l;
                        for (let t = 0; t < n.length; ++t) if (i.isFunction(n[t])) {
                            let i = e.idGenerator.generateId(), o = n[t];
                            this.jsCallbacks.set(i, o), t === n.length - 1 ? (s = i, n.pop()) : n[t] = i
                        }
                        a.CommonIPCRenderer.rendererCommunicator.sendMessageToRenderer(this.targetCommunitorInfo.id, {
                            name: r.CommonIPCMessage.msgNCCallNativeFunction,
                            args: [t, s].concat(n)
                        })
                    } while (0)
                }

                AttachNativeEvent(t, n) {
                    let r = void 0;
                    do {
                        if (i.isNullOrUndefined(t) || 0 === t.length) {
                            o.error("eventName is empty");
                            break
                        }
                        if (i.isNullOrUndefined(n)) {
                            o.error("callback is empty");
                            break
                        }
                        let s = e.idGenerator.generateId();
                        if (e.idGenerator.isInvalidId(s)) {
                            o.error("id error");
                            break
                        }
                        if (this.eventJsCallbakcs.has(t)) this.eventJsCallbakcs.get(t).set(s, n); else {
                            let e = new Map;
                            e.set(s, n), this.eventJsCallbakcs.set(t, e)
                        }
                        r = s
                    } while (0);
                    return r
                }

                DetachNativeEvent(e, t) {
                    do {
                        if (i.isNullOrUndefined(e) || 0 === e.length) {
                            o.error("eventName is empty");
                            break
                        }
                        if (i.isNullOrUndefined(t)) {
                            o.error("callback is empty");
                            break
                        }
                        if (!this.eventJsCallbakcs.has(e)) {
                            o.error(`event: ${e} doesnot have listener`);
                            break
                        }
                        if (!this.eventJsCallbakcs.get(e).has(t)) {
                            o.error(`event: ${e} doesnot have the listener of id=${t}`);
                            break
                        }
                        this.eventJsCallbakcs.get(e).delete(t)
                    } while (0)
                }

                CheckNativeFunction(t, n) {
                    do {
                        if (i.isNullOrUndefined(t) || 0 === t.length) {
                            o.error("funcName is empty");
                            break
                        }
                        if (i.isNullOrUndefined(n)) {
                            o.error("callback is empty");
                            break
                        }
                        o.information("funcName = ", t);
                        let s = e.idGenerator.generateId();
                        this.jsCallbacks.set(s, n), a.CommonIPCRenderer.rendererCommunicator.sendMessageToRenderer(this.targetCommunitorInfo.id, {
                            name: r.CommonIPCMessage.msgNCCheckNativeFunction,
                            args: [t, s]
                        })
                    } while (0)
                }

                RegisterJSFunction(e, n) {
                    let r = t.ParamaterError;
                    do {
                        if (i.isNullOrUndefined(e) || 0 === e.length) {
                            o.error("funcName is empty");
                            break
                        }
                        if (i.isNullOrUndefined(n)) {
                            o.error("jsFunc is empty");
                            break
                        }
                        this.jsRegisterFunctions.set(e, n), r = t.Success
                    } while (0);
                    return r
                }

                bindMsgListeners() {
                    a.CommonIPCRenderer.rendererCommunicator.onMessage(r.CommonIPCMessage.msgNCCallJsFunctionById, e => {
                        this.handleCallJsFunctionById(e.msg.args)
                    }), a.CommonIPCRenderer.rendererCommunicator.onMessage(r.CommonIPCMessage.msgNCCallJsFunctionByName, e => {
                        this.handleCallJsFunctionByName(e.msg.args)
                    }), a.CommonIPCRenderer.rendererCommunicator.onMessage(r.CommonIPCMessage.msgNCNativeFireEvent, e => {
                        this.handleNativeFireEvent(e.msg.args)
                    })
                }

                handleCallJsFunctionById(t) {
                    do {
                        let n = t[0];
                        if (!i.isNumber(n)) {
                            o.error(`id error id = ${n}`);
                            break
                        }
                        if (e.idGenerator.isInvalidId(n)) {
                            o.error(`id = ${n} invalid`);
                            break
                        }
                        if (!this.jsCallbacks.has(n)) {
                            o.error(`jsCallbacks[${n}] is null`);
                            break
                        }
                        t.splice(0, 1), this.jsCallbacks.get(n).apply(null, t)
                    } while (0)
                }

                handleCallJsFunctionByName(e) {
                    do {
                        let t = e[0];
                        if (!i.isString(t)) {
                            o.error(`funcName error funcName = ${t}`);
                            break
                        }
                        if (!this.jsRegisterFunctions.has(t)) {
                            o.error(`jsRegisterFunctions[${t}] is null`);
                            break
                        }
                        e.splice(0, 1), this.jsRegisterFunctions.get(t).apply(null, e)
                    } while (0)
                }

                handleNativeFireEvent(e) {
                    do {
                        let t = e[0];
                        if (!i.isString(t)) {
                            o.warning(`eventName error eventName = ${t}`);
                            break
                        }
                        if (!this.eventJsCallbakcs.has(t)) {
                            o.warning(`eventJsCallbakcs[${t}] is null`);
                            break
                        }
                        e.shift(), this.eventJsCallbakcs.get(t).forEach((t, n, r) => {
                            o.information(`value = ${t}, key = ${n}, map = ${r}`), i.isNullOrUndefined(t) || t.apply(null, e)
                        })
                    } while (0)
                }

                notifyNativeCallReady() {
                    a.CommonIPCRenderer.rendererCommunicator.sendMessageToRenderer(this.targetCommunitorInfo.id, {
                        name: r.CommonIPCMessage.msgNCNativeCallReady,
                        args: [a.CommonIPCRenderer.rendererCommunicator.getCommunicatorInfo()]
                    })
                }

                printArgs(e) {
                    for (let t in e) o.information(`index ${t} = `, e[t])
                }
            }

            e.NativeCallImpl = d, e.nativeCall = new d
        }(t.NativeCallModule || (t.NativeCallModule = {}))
    }, 623: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(2), o = n(5), r = n(1), s = n(8), a = n(10),
            l = o.default(i.join(__rootDir, "../bin/ThunderHelper.node")),
            d = r.default.getLogger("Thunder.FloatPanelHelper");
        !function (e) {
            e[e.LeftBottom = 0] = "LeftBottom", e[e.LeftTop = 1] = "LeftTop", e[e.RightTop = 2] = "RightTop", e[e.RightBottom = 3] = "RightBottom"
        }(t.FloatPanelDirection || (t.FloatPanelDirection = {})), function (e) {
            let t, n, i;

            function o(e) {
                let o = null, r = e.receiveSize, a = e.srcUsing;
                do {
                    if (e.taskType === s.DownloadKernel.TaskType.P2sp) {
                        if (r > 0) {
                            o = t.Stared;
                            break
                        }
                        if (e.taskStatus === s.DownloadKernel.TaskStatus.StartPending) {
                            o = t.Starting;
                            break
                        }
                        if (e.taskStatus === s.DownloadKernel.TaskStatus.Started && 0 === r) {
                            o = t.Connect;
                            break
                        }
                    } else if (e.taskType === s.DownloadKernel.TaskType.Bt) {
                        if (r > 0) {
                            o = n.Stared;
                            break
                        }
                        if (e.taskStatus === s.DownloadKernel.TaskStatus.StartPending) {
                            o = n.Analy;
                            break
                        }
                        if (e.taskStatus === s.DownloadKernel.TaskStatus.Started) {
                            o = a > 0 ? n.Connect : n.Search;
                            break
                        }
                    } else if (e.taskType === s.DownloadKernel.TaskType.Emule) {
                        if (r > 0) {
                            o = i.Stared;
                            break
                        }
                        if (e.taskStatus === s.DownloadKernel.TaskStatus.StartPending) {
                            o = i.Starting;
                            break
                        }
                        if (e.taskStatus === s.DownloadKernel.TaskStatus.Started) {
                            o = a > 0 ? i.Connect : i.Search;
                            break
                        }
                    }
                } while (0);
                return o
            }

            e.isDownloadStatus = function (e) {
                let t = !1;
                return e !== s.DownloadKernel.TaskStatus.StartPending && e !== s.DownloadKernel.TaskStatus.StartWaiting && e !== s.DownloadKernel.TaskStatus.Started || (t = !0), t
            }, e.formatSpeed = function (e) {
                let t = {speed: "0", unit: "B/s"};
                if ("number" == typeof e && e > 0) {
                    let n = ["B/s", "KB/s", "MB/s", "GB/s", "TB/s"], i = 0, o = e;
                    for (; o >= 1e3 && !(i >= 4);) o /= 1024, i += 1;
                    t = -1 === String(o).indexOf(".") ? {speed: String(o), unit: n[i]} : {
                        speed: o.toFixed(1),
                        unit: n[i]
                    }
                }
                return t
            }, e.isThunderMainWndForeground = function () {
                let e = l.getForegroundProcessName();
                d.information("foreProcName:", e);
                let t = !1;
                return (e.toLowerCase().indexOf("thunder.exe") > -1 || e.toLowerCase().indexOf("xlbrowser.exe") > -1) && (t = !0), t
            }, function (e) {
                e[e.Unkown = 0] = "Unkown", e[e.Starting = 1] = "Starting", e[e.Connect = 2] = "Connect", e[e.Stared = 3] = "Stared"
            }(t || (t = {})), function (e) {
                e[e.Unkown = 0] = "Unkown", e[e.Analy = 1] = "Analy", e[e.Search = 2] = "Search", e[e.Connect = 3] = "Connect", e[e.Stared = 4] = "Stared"
            }(n || (n = {})), function (e) {
                e[e.Unkown = 0] = "Unkown", e[e.Starting = 1] = "Starting", e[e.Search = 2] = "Search", e[e.Connect = 3] = "Connect", e[e.Stared = 4] = "Stared"
            }(i || (i = {})), e.getTaskStartPrompt = function (e) {
                let r = void 0;
                do {
                    if (null === e) break;
                    if (e.taskStatus === s.DownloadKernel.TaskStatus.StartPending || e.taskStatus === s.DownloadKernel.TaskStatus.Started) {
                        if (e.taskType === s.DownloadKernel.TaskType.P2sp) {
                            let n = o(e);
                            if (null === n) break;
                            n === t.Connect && (r = "连接资源");
                            break
                        }
                        if (e.taskType === s.DownloadKernel.TaskType.Bt) {
                            let t = o(e);
                            if (null === t) break;
                            t === n.Analy ? r = "解析种子" : t === n.Search ? r = "寻找资源" : t === n.Connect && (r = "连接资源");
                            break
                        }
                        if (e.taskType === s.DownloadKernel.TaskType.Emule) {
                            let t = o(e);
                            if (null === t) break;
                            t === i.Search ? r = "寻找资源" : t === i.Connect && (r = "连接资源")
                        }
                    }
                } while (0);
                return r
            }, e.getTaskStatusPrompt = function (e) {
                let t = "";
                if (e) switch (e.taskStatus) {
                    case s.DownloadKernel.TaskStatus.Unkown:
                        t = "未知错误";
                        break;
                    case s.DownloadKernel.TaskStatus.StandBy:
                        t = "准备开始";
                        break;
                    case s.DownloadKernel.TaskStatus.PreDownloading:
                        t = "等待中";
                        break;
                    case s.DownloadKernel.TaskStatus.StartWaiting:
                        t = "排队等待";
                        break;
                    case s.DownloadKernel.TaskStatus.StartPending:
                        t = "正在开始";
                        break;
                    case s.DownloadKernel.TaskStatus.Started:
                        e.downloadSpeed >= 0 && (t = a.ThunderUtil.formatSize(e.downloadSpeed, 1), t += "/S");
                        break;
                    case s.DownloadKernel.TaskStatus.StopPending:
                        t = "正在停止";
                        break;
                    case s.DownloadKernel.TaskStatus.Stopped:
                        t = "暂停";
                        break;
                    case s.DownloadKernel.TaskStatus.Succeeded:
                        t = "完成";
                        break;
                    case s.DownloadKernel.TaskStatus.Failed:
                        t = "任务出错";
                        break;
                    case s.DownloadKernel.TaskStatus.Seeding:
                        t = "完成"
                }
                return t
            }, e.getProgress = function (e) {
                let t = 0;
                if (e) {
                    let n = e.downloadSize, i = e.taskStatus;
                    if (i === s.DownloadKernel.TaskStatus.Succeeded || i === s.DownloadKernel.TaskStatus.Seeding) t = 100; else {
                        let i = e.fileSize;
                        0 !== i && (t = n / i * 100, (t = parseInt(t.toString(), 10)) > 100 ? t = 100 : t < 0 && (t = 0))
                    }
                }
                return t
            }
        }(t.FloatPanelHelper || (t.FloatPanelHelper = {}))
    }, 626: function (e, t, n) {
        "use strict";
        var i = function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("li", {staticClass: "xlx-suspension-list__item"}, [n("span", {
                staticClass: "xlx-suspension-list__background",
                style: e.getTaskProgress
            }), e._v(" "), n("i", {
                staticClass: "xlx-icon-type",
                class: e.getTaskIcon
            }), e._v(" "), n("p", {staticClass: "xlx-suspension-list__name"}, [e._v(e._s(e.taskName))]), e._v(" "), n("p", {staticClass: "xlx-suspension-list__status"}, [e._v(e._s(e.stateName))])])
        }, o = [];
        i._withStripped = !0, n.d(t, "a", function () {
            return i
        }), n.d(t, "b", function () {
            return o
        })
    }, 633: function (e, t, n) {
        "use strict";
        var i = function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", {
                class: e.suspensionBallClass,
                staticStyle: {left: "367px", top: "233px"},
                on: {mouseenter: e.enter, mouseleave: e.leave, click: e.click}
            }, [n("div", {
                ref: "suspension",
                staticClass: "xlx-suspension__inner",
                on: {
                    mousedown: e.down, mouseup: e.up, contextmenu: function (t) {
                        return e.handleRightClick(t)
                    }
                }
            }, [n("div", {staticClass: "xlx-suspension__ball"}), e._v(" "), n("div", {staticClass: "xlx-suspension__wave"}, [n("div", {
                staticClass: "xlx-suspension__wave-inner",
                style: {height: e.downloadProgress}
            })]), e._v(" "), n("div", {staticClass: "xlx-suspension__bird"}), e._v(" "), n("div", {staticClass: "xlx-suspension__speed"}, [n("p", {staticClass: "xlx-suspension__speed-total"}, [n("span", [e._v(e._s(e.totalSpeed.speed))]), e._v("\n        " + e._s(e.totalSpeed.unit) + "\n      ")]), e._v(" "), n("p", {staticClass: "xlx-suspension__speed-upgrade"}, [e._v(e._s(e.vipSpeed))])]), e._v(" "), n("div", {staticClass: "xlx-suspension__status"}, [n("p", [e._v(e._s(e.suspensionStatusText))])])]), e._v(" "), n("float-panel", {
                style: e.floatPanelStyle,
                on: {"download-event": e.doDownloadEvent, "show-float-panel": e.showOrHideFloatPanel}
            })], 1)
        }, o = [];
        i._withStripped = !0, n.d(t, "a", function () {
            return i
        }), n.d(t, "b", function () {
            return o
        })
    }, 640: function (e, t, n) {
        "use strict";
        var i = function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", {staticClass: "xlx-suspension-list"}, [n("div", {staticClass: "xlx-suspension-list__header"}, [n("h2", [e._v("正在下载（"), n("span", [e._v(e._s(e.downloadTaskCount))]), e._v("）")])]), e._v(" "), n("div", {staticClass: "xlx-suspension-list__body"}, [n("ul", {style: e.haveDownloadTaskStyle}, e._l(e.taskIdLists, function (t) {
                return n("task-item", {
                    key: t,
                    attrs: {taskBase: e.taskBaseInfos[t]},
                    nativeOn: {
                        dblclick: function (n) {
                            e.dbclickItem(t)
                        }
                    }
                })
            })), e._v(" "), n("div", {
                staticClass: "xlx-suspension-list__empty",
                style: e.isHaveDownloadTaskStyle
            }, [n("p", [e._v("暂无下载任务")])])]), e._v(" "), n("div", {staticClass: "xlx-suspension-list__footer"}, [n("a", {
                staticClass: "td-button td-button--secondary",
                attrs: {href: "javascript:;"},
                on: {click: e.onClickShowFinishTask}
            }, [e._v("查看已完成")])])])
        }, o = [];
        i._withStripped = !0, n.d(t, "a", function () {
            return i
        }), n.d(t, "b", function () {
            return o
        })
    }, 69: function (e, t, n) {
        "use strict";
        var i = this && this.__awaiter || function (e, t, n, i) {
            return new (n || (n = Promise))(function (o, r) {
                function s(e) {
                    try {
                        l(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function a(e) {
                    try {
                        l(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function l(e) {
                    e.done ? o(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(s, a)
                }

                l((i = i.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const o = n(3), r = n(1).default.getLogger("GetSkinInfo");
        let s;
        (function () {
            return i(this, void 0, void 0, function* () {
                if ("renderer" === process.type) {
                    r.information("renderer process");
                    const e = yield Promise.resolve().then(() => n(15)), t = yield Promise.resolve().then(() => n(6));
                    e.default("GetSkinInfo").then(e => {
                        s = e, r.information("send OnChangeSkin", e)
                    }).catch(e => {
                        r.warning(e)
                    }), t.NativeCallModule.nativeCall.AttachNativeEvent("OnChangeSkin", e => {
                        s = e, r.information("send OnChangeSkin", e)
                    })
                } else "browser" === process.type && (r.information("main process"), o.ipcMain.on("OnChangeSkin", (e, t) => {
                    r.information("OnChangeSkin", t), s = t
                }))
            })
        })().catch(e => {
            r.information(e)
        }), t.default = function () {
            return s
        }
    }, 7: function (e, t) {
        e.exports = require("util")
    }, 8: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
            let t, n, i, o, r, s, a, l, d, c, u, h, f, p, g, m, v, S;
            !function (e) {
                e[e.Unkown = 0] = "Unkown", e[e.Create = 1] = "Create", e[e.InvaldParam = 2] = "InvaldParam", e[e.InvaldLink = 3] = "InvaldLink", e[e.InvaldConfig = 4] = "InvaldConfig", e[e.Timeout = 5] = "Timeout", e[e.VerifyData = 6] = "VerifyData", e[e.Forbidden = 7] = "Forbidden", e[e.RangeDispatch = 8] = "RangeDispatch", e[e.FilePathOverRanging = 9] = "FilePathOverRanging", e[e.FileCreate = 201] = "FileCreate", e[e.FileWrite = 202] = "FileWrite", e[e.FileRead = 203] = "FileRead", e[e.FileRename = 204] = "FileRename", e[e.FileFull = 205] = "FileFull", e[e.BtUploadExist = 601] = "BtUploadExist", e[e.ForbinddenResource = 701] = "ForbinddenResource", e[e.ForbinddenAccount = 702] = "ForbinddenAccount", e[e.ForbinddenArea = 703] = "ForbinddenArea", e[e.ForbinddenCopyright = 704] = "ForbinddenCopyright", e[e.ForbinddenReaction = 705] = "ForbinddenReaction", e[e.ForbinddenPorn = 706] = "ForbinddenPorn"
            }(t = e.TaskError || (e.TaskError = {})), function (e) {
                e[e.Unkown = -1] = "Unkown", e[e.Success = 0] = "Success", e[e.QueryFailed = 1] = "QueryFailed", e[e.ServerError = 2] = "ServerError", e[e.ResourceNotFound = 3] = "ResourceNotFound", e[e.AuthorizingFailed = 4] = "AuthorizingFailed", e[e.ForbidByCopyright = 5] = "ForbidByCopyright", e[e.ForbidByPorNoGraphy = 6] = "ForbidByPorNoGraphy", e[e.ForbidByReactionary = 7] = "ForbidByReactionary", e[e.ForbidByOtherFilter = 8] = "ForbidByOtherFilter"
            }(n = e.DcdnStatusCode || (e.DcdnStatusCode = {})), function (e) {
                e[e.Begin = -1] = "Begin", e[e.Unkown = 0] = "Unkown", e[e.StandBy = 1] = "StandBy", e[e.PreDownloading = 2] = "PreDownloading", e[e.StartWaiting = 3] = "StartWaiting", e[e.StartPending = 4] = "StartPending", e[e.Started = 5] = "Started", e[e.StopPending = 6] = "StopPending", e[e.Stopped = 7] = "Stopped", e[e.Succeeded = 8] = "Succeeded", e[e.Failed = 9] = "Failed", e[e.Seeding = 10] = "Seeding", e[e.DestroyPending = 11] = "DestroyPending", e[e.End = 12] = "End"
            }(i = e.TaskStatus || (e.TaskStatus = {})), function (e) {
                e[e.Begin = -1] = "Begin", e[e.StandBy = 0] = "StandBy", e[e.Stopped = 1] = "Stopped", e[e.Started = 2] = "Started", e[e.Complete = 3] = "Complete", e[e.Forbidden = 4] = "Forbidden", e[e.Error = 5] = "Error", e[e.End = 6] = "End"
            }(o = e.BtFileStatus || (e.BtFileStatus = {})), function (e) {
                e[e.DispatchStrategyNone = 0] = "DispatchStrategyNone", e[e.DispatchStrategyOrigin = 1] = "DispatchStrategyOrigin", e[e.DispatchStrategyP2s = 2] = "DispatchStrategyP2s", e[e.DispatchStrategyP2p = 4] = "DispatchStrategyP2p", e[e.DispatchStrategyAll = -1] = "DispatchStrategyAll"
            }(r = e.DispatchStrategy || (e.DispatchStrategy = {})), function (e) {
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
            }(h = e.GroupTaskSubFileDetailChangedFlags || (e.GroupTaskSubFileDetailChangedFlags = {})), function (e) {
                e[e.NumberStrart = 0] = "NumberStrart", e[e.TaskId = 1] = "TaskId", e[e.FileStatus = 2] = "FileStatus", e[e.DownloadSize = 3] = "DownloadSize", e[e.FileSize = 4] = "FileSize", e[e.EnableDcdn = 5] = "EnableDcdn", e[e.ErrorCode = 6] = "ErrorCode", e[e.DcdnStatus = 7] = "DcdnStatus", e[e.RealIndex = 8] = "RealIndex", e[e.FileOffset = 9] = "FileOffset", e[e.Visible = 10] = "Visible", e[e.Download = 11] = "Download", e[e.NumberEnd = 12] = "NumberEnd", e[e.StringStart = 13] = "StringStart", e[e.FinalName = 14] = "FinalName", e[e.RelativePath = 15] = "RelativePath", e[e.FileName = 16] = "FileName", e[e.FilePath = 17] = "FilePath", e[e.Cid = 18] = "Cid", e[e.Gcid = 19] = "Gcid", e[e.StringEnd = 20] = "StringEnd"
            }(f = e.BtFileAttribute || (e.BtFileAttribute = {})), function (e) {
                e[e.P2spUrl = 0] = "P2spUrl", e[e.BtInfoId = 1] = "BtInfoId", e[e.EmuleFileHash = 2] = "EmuleFileHash", e[e.MagnetUrl = 3] = "MagnetUrl", e[e.GroupTaskName = 4] = "GroupTaskName"
            }(p = e.KeyType || (e.KeyType = {})), function (e) {
                e[e.NameInclude = 1] = "NameInclude", e[e.BtDisplayNameInclude = 2] = "BtDisplayNameInclude"
            }(g = e.SearchKeyType || (e.SearchKeyType = {})), function (e) {
                e[e.All = 0] = "All", e[e.CommonForeground = 1] = "CommonForeground", e[e.CommonBackground = 2] = "CommonBackground", e[e.Temporary = 3] = "Temporary", e[e.PreDownload = 4] = "PreDownload", e[e.PrivateForeground = 5] = "PrivateForeground"
            }(m = e.KeyFilter || (e.KeyFilter = {})), function (e) {
                e[e.Unknown = -1] = "Unknown", e[e.LoadTaskBasic = 0] = "LoadTaskBasic", e[e.Create = 1] = "Create", e[e.Recycle = 2] = "Recycle", e[e.Recover = 3] = "Recover", e[e.ReDownload = 4] = "ReDownload", e[e.MoveThoughCategory = 5] = "MoveThoughCategory"
            }(v = e.TaskInsertReason || (e.TaskInsertReason = {})), function (e) {
                e[e.Unknown = -1] = "Unknown", e[e.ContextMenu = 0] = "ContextMenu", e[e.Button = 1] = "Button", e[e.TaskDetail = 2] = "TaskDetail", e[e.DownloadMagnet = 3] = "DownloadMagnet", e[e.ToolbarButton = 4] = "ToolbarButton", e[e.SelectDownloadLists = 5] = "SelectDownloadLists", e[e.DeleteTask = 6] = "DeleteTask"
            }(S = e.TaskStopReason || (e.TaskStopReason = {}))
        }(t.DownloadKernel || (t.DownloadKernel = {}))
    }, 86: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
            function t(e) {
                let t = e.toString(16).toUpperCase();
                return t.length < 2 && (t = "0" + t), t
            }

            function n(e, n, i, o) {
                return "0x" + t(o) + t(e) + t(n) + t(i)
            }

            e.rgbaStringToHexWith0xBegin = function (e) {
                if (void 0 !== e) {
                    let t = e.split(",");
                    return n(parseInt(t[0] || "0", 10), parseInt(t[1] || "0", 10), parseInt(t[2] || "0", 10), parseInt(t[3] || "255", 10))
                }
            }, e.colorNumberToHex = t, e.rgbaToHexWith0xBegin = n
        }(t.ColorUtilNS || (t.ColorUtilNS = {}))
    }, 87: function (e, t) {
        e.exports = function (e) {
            return e.webpackPolyfill || (e.deprecate = function () {
            }, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                enumerable: !0,
                get: function () {
                    return e.l
                }
            }), Object.defineProperty(e, "id", {
                enumerable: !0, get: function () {
                    return e.i
                }
            }), e.webpackPolyfill = 1), e
        }
    }, 9: function (e, t, n) {
        "use strict";
        var i = this && this.__awaiter || function (e, t, n, i) {
            return new (n || (n = Promise))(function (o, r) {
                function s(e) {
                    try {
                        l(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function a(e) {
                    try {
                        l(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function l(e) {
                    e.done ? o(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(s, a)
                }

                l((i = i.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const o = n(20), r = n(2), s = n(7).promisify, a = n(1).default.getLogger("Thunder.base.fs-utilities");
        !function (e) {
            function t(e) {
                return i(this, void 0, void 0, function* () {
                    let t = !1;
                    if (void 0 !== e) {
                        const n = s(o.access);
                        try {
                            yield n(e), t = !0
                        } catch (e) {
                            a.information(e)
                        }
                    }
                    return t
                })
            }

            function l(e) {
                return i(this, void 0, void 0, function* () {
                    let t = !1;
                    if (void 0 !== e) {
                        const n = s(o.mkdir);
                        try {
                            yield n(e), t = !0
                        } catch (e) {
                            a.warning(e)
                        }
                    }
                    return t
                })
            }

            function d(e) {
                return i(this, void 0, void 0, function* () {
                    let t = !1;
                    if (void 0 !== e) {
                        const n = s(o.rmdir);
                        try {
                            yield n(e), t = !0
                        } catch (e) {
                            a.warning(e)
                        }
                    }
                    return t
                })
            }

            function c(e) {
                return i(this, void 0, void 0, function* () {
                    let t = !1;
                    if (void 0 !== e) {
                        const n = s(o.unlink);
                        try {
                            yield n(e), t = !0
                        } catch (e) {
                            a.warning(e)
                        }
                    }
                    return t
                })
            }

            function u(e) {
                return i(this, void 0, void 0, function* () {
                    let t = null;
                    if (void 0 !== e) {
                        const n = s(o.readdir);
                        try {
                            t = yield n(e)
                        } catch (e) {
                            a.warning(e)
                        }
                    }
                    return t
                })
            }

            function h(e) {
                return i(this, void 0, void 0, function* () {
                    let t = null;
                    if (void 0 !== e) {
                        const n = s(o.lstat);
                        try {
                            t = yield n(e)
                        } catch (e) {
                            a.warning(e)
                        }
                    }
                    return t
                })
            }

            function f(e, t) {
                return i(this, void 0, void 0, function* () {
                    let n = !1;
                    if (void 0 !== e && void 0 !== t) {
                        let i = r.join(e, t), o = yield h(i);
                        n = null !== o && o.isDirectory() ? yield p(i) : yield c(i)
                    }
                    return n
                })
            }

            function p(e) {
                return i(this, void 0, void 0, function* () {
                    let n = !1;
                    if (void 0 !== e) {
                        if (yield t(e)) {
                            n = !0;
                            let t = yield u(e);
                            for (let i = 0; i < t.length; i++) n = (yield f(e, t[i])) && n;
                            (n || 0 === t.length) && (n = (yield d(e)) && n)
                        }
                    }
                    return n
                })
            }

            function g(e) {
                return i(this, void 0, void 0, function* () {
                    let n = !1;
                    return a.information("mkdirsAW", e), void 0 !== e && ((yield t(e)) ? n = !0 : r.dirname(e) === e ? n = !1 : (yield g(r.dirname(e))) && (n = yield l(e))), n
                })
            }

            function m(e, n) {
                return i(this, void 0, void 0, function* () {
                    let i;
                    if (e.toLowerCase() !== n.toLowerCase() && (yield t(e))) {
                        let t = o.createReadStream(e), r = o.createWriteStream(n);
                        i = new Promise(e => {
                            t.pipe(r).on("finish", () => {
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
                    let t = null;
                    if (void 0 !== e) {
                        const n = s(o.readFile);
                        try {
                            t = yield n(e)
                        } catch (e) {
                            a.warning(e)
                        }
                    }
                    return t
                })
            }, e.writeFileAW = function (e, t) {
                return i(this, void 0, void 0, function* () {
                    let n = !1;
                    if (void 0 !== e && null !== t) {
                        const i = s(o.writeFile);
                        try {
                            yield i(e, t), n = !0
                        } catch (e) {
                            a.warning(e)
                        }
                    }
                    return n
                })
            }, e.existsAW = t, e.mkdirAW = l, e.rmdirAW = d, e.unlinkAW = c, e.readdirAW = u, e.lstatAW = h, e.rmdirsAW = p, e.mkdirsAW = g, e.renameAW = function (e, t) {
                return i(this, void 0, void 0, function* () {
                    if (void 0 !== e && void 0 !== t) {
                        const n = s(o.rename);
                        try {
                            yield n(e, t)
                        } catch (e) {
                            a.warning(e)
                        }
                    }
                })
            }, e.copyFileAW = m, e.copyDirsAW = function e(n, o) {
                return i(this, void 0, void 0, function* () {
                    let i = !1, s = yield h(n);
                    if (s.isDirectory()) {
                        i = yield g(o);
                        let a = yield u(n);
                        for (let l = 0; l < a.length; l++) {
                            let d = r.join(n, a[l]), c = r.join(o, a[l]);
                            (i = yield t(d)) && (i = (s = yield h(d)).isDirectory() ? yield e(d, c) : yield m(d, c))
                        }
                    }
                    return i
                })
            }, e.mkdtempAW = function () {
                return i(this, void 0, void 0, function* () {
                    let e = !1;
                    const t = s(o.mkdtemp), i = (yield Promise.resolve().then(() => n(16))).tmpdir();
                    try {
                        e = yield t(`${i}${r.sep}`)
                    } catch (e) {
                        a.warning(e)
                    }
                    return e
                })
            }
        }(t.FileSystemAWNS || (t.FileSystemAWNS = {}))
    }, 95: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(35), o = n(2), r = n(5);
        let s = null, a = null, l = null;
        a = r.default(o.join(__rootDir, "../bin/ThunderHelper.node"));

        class d extends i.EventEmitter {
            constructor() {
                super(...arguments), this.mouse = null
            }

            setMouse(e) {
                this.mouse = e
            }

            ref() {
                this.mouse && this.mouse.ref()
            }

            unref() {
                this.mouse && this.mouse.unref()
            }

            destroy() {
                this.mouse && (this.mouse.destroy(), this.mouse = null, l = null)
            }
        }

        t.WinMouseEvent = d, t.mouseDestroy = function () {
            l && l.destroy()
        }, t.mouseUse = function (e) {
            if (l) return;
            s = a.registerWinMouseObj(), l = new d;
            let t = new s((t, n, i, o) => {
                e(!0, t)
            });
            l.setMouse(t)
        }, t.mouseMove = function () {
            let e = null, t = new d;
            return t.once("newListener", function () {
                null === s && (s = a.registerWinMouseObj()), null !== s && (e = new s(function (e, n, i, o) {
                    "move" === e && t.emit(e, n, i, o)
                }), t.setMouse(e))
            }), t
        }
    }, 972: function (e, t, n) {
        n(40), e.exports = n(973)
    }, 973: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(25);
        i.CommonIPCRenderer.rendererCommunicator.initialize("suspension_main"), i.CommonIPCRenderer.rendererCommunicator.connect();
        const o = n(41), r = n(32), s = n(974);
        n(42);
        const a = n(46);
        n(55);
        const l = n(1).default.getLogger("SuspensionRenderer");
        o.PerformanceMonitorStatNS.init("suspension-renderer"), a.ThunderToolsNS.enableDevTools().catch(e => {
            l.warning(e)
        }), a.ThunderToolsNS.enableDragOpenFile(), new r.default({
            components: {App: s.default},
            render: e => e("app")
        }).$mount("#app")
    }, 974: function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n(633), o = n(458);
        for (var r in o) "default" !== r && function (e) {
            n.d(t, e, function () {
                return o[e]
            })
        }(r);
        n(276), n(978), n(979);
        var s = n(0), a = Object(s.a)(o.default, i.a, i.b, !1, null, null, null);
        a.options.__file = "src\\suspension-renderer\\app.vue", t.default = a.exports
    }, 975: function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n(640), o = n(460);
        for (var r in o) "default" !== r && function (e) {
            n.d(t, e, function () {
                return o[e]
            })
        }(r);
        var s = n(0), a = Object(s.a)(o.default, i.a, i.b, !1, null, null, null);
        a.options.__file = "src\\suspension-renderer\\views\\float-panel.vue", t.default = a.exports
    }, 976: function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n(626), o = n(462);
        for (var r in o) "default" !== r && function (e) {
            n.d(t, e, function () {
                return o[e]
            })
        }(r);
        var s = n(0), a = Object(s.a)(o.default, i.a, i.b, !1, null, null, null);
        a.options.__file = "src\\suspension-renderer\\views\\task-item.vue", t.default = a.exports
    }, 977: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(3);
        !function (e) {
            e.getScreenRectangle = function () {
                let e = {x: 0, y: 0, width: 0, height: 0};
                e.width = i.screen.getPrimaryDisplay().size.width, e.height = i.screen.getPrimaryDisplay().size.height;
                let t = i.screen.getAllDisplays().find(e => 0 !== e.bounds.x || 0 !== e.bounds.y);
                return t && (t.bounds.x < 0 ? (e.x = t.bounds.x, e.width += t.bounds.width, e.y = 0) : t.bounds.x > 0 ? (e.x = 0, e.width += t.bounds.width, e.y = 0) : t.bounds.y < 0 ? (e.x = 0, e.y = t.bounds.y, e.height += t.bounds.height) : t.bounds.y > 0 && (e.x = 0, e.y = 0, e.height += t.bounds.height)), e
            }
        }(t.MutiScreenHelper || (t.MutiScreenHelper = {}))
    }, 978: function (e, t, n) {
        "use strict";
        var i = n(1149);
        n.n(i).a
    }, 979: function (e, t, n) {
        "use strict";
        var i = n(1153);
        n.n(i).a
    }
});
//# sourceMappingURL=renderer.js.map
/*! ThunderX BY LUOCHENZHIMU */
/*! Last updated on 2018/12/16 */
/*! https://www.luochenzhimu.com */