/*! ThunderX BY LUOCHENZHIMU */
/*! Last updated on 2018/12/17 */
/*! https://www.luochenzhimu.com */
module.exports = function (e) {
    var t = {};

    function n(i) {
        if (t[i]) return t[i].exports;
        var r = t[i] = {i, l: !1, exports: {}};
        return e[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
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
        }), 2 & t && "string" != typeof e) for (var r in e) n.d(i, r, function (t) {
            return e[t]
        }.bind(null, r));
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
    }, n.p = "", n(n.s = 980)
}({
    0: function (e, t, n) {
        "use strict";

        function i(e, t, n, i, r, o, s, a) {
            var l, c = "function" == typeof e ? e.options : e;
            if (t && (c.render = t, c.staticRenderFns = n, c._compiled = !0), i && (c.functional = !0), o && (c._scopeId = "data-v-" + o), s ? (l = function (e) {
                (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), r && r.call(this, e), e && e._registeredComponents && e._registeredComponents.add(s)
            }, c._ssrRegister = l) : r && (l = a ? function () {
                r.call(this, this.$root.$options.shadowRoot)
            } : r), l) if (c.functional) {
                c._injectStyles = l;
                var u = c.render;
                c.render = function (e, t) {
                    return l.call(t), u(e, t)
                }
            } else {
                var d = c.beforeCreate;
                c.beforeCreate = d ? [].concat(d, l) : [l]
            }
            return {exports: e, options: c}
        }

        n.d(t, "a", function () {
            return i
        })
    }, 1: function (e, t, n) {
        e.exports = n(12)(64)
    }, 10: function (e, t, n) {
        "use strict";
        var i = this && this.__awaiter || function (e, t, n, i) {
            return new (n || (n = Promise))(function (r, o) {
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
                    e.done ? r(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(s, a)
                }

                l((i = i.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const r = n(3), o = n(2), s = n(1), a = n(9), l = n(17), c = s.default.getLogger("Thunder.Util"),
            u = "Thunder Network\\Thunder7.9\\";

        function d(e) {
            let t = e;
            return 0 === e.indexOf('"') && e.lastIndexOf('"') === e.length - 1 ? t = e.substring(1, e.length - 1) : 0 === e.indexOf("'") && e.lastIndexOf("'") === e.length - 1 && (t = e.substring(1, e.length - 1)), t
        }

        !function (e) {
            function t() {
                let e = l.ThunderHelper.getSystemTempPath(), t = l.ThunderHelper.getLogicalDriveStrings(), n = 0;
                for (let i = 0; i < t.length; i++) {
                    let r = l.ThunderHelper.getDriveInfo(t[i]);
                    3 === r.type && n < r.freeBytes && t[i] !== e && (n = r.freeBytes, e = t[i])
                }
                return e.substring(0, 1) + ":\\迅雷下载"
            }

            e.formatSize = function (e, t) {
                t = t || 2;
                let n = "0B";
                if ("number" == typeof e && e > 0) {
                    let i = ["B", "KB", "MB", "GB", "TB"], r = 0, o = e;
                    for (; o >= 1e3 && !(r >= 4);) o /= 1024, r += 1;
                    n = -1 === String(o).indexOf(".") ? o + i[r] : o.toFixed(t) + i[r]
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
                    c.warning(e)
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
                let t = 0, n = "", i = !1, r = [], o = e.length;
                for (let s = 0; s < o; s++) {
                    let a = e[s];
                    if ('"' !== a && "'" !== a || ("" === n ? (i = !0, n = a) : n === a && (i = !1, n = "")), " " !== a || i || s === o - 1) {
                        if (s === o - 1) {
                            let n = e.substring(t);
                            "" !== n.trim() && r.push(d(n))
                        }
                    } else {
                        let n = e.substring(t, s);
                        "" !== n.trim() && r.push(d(n)), t = s + 1
                    }
                }
                return r
            }, e.getThunderTempPath = function (e, t) {
                return i(this, void 0, void 0, function* () {
                    const i = yield Promise.resolve().then(() => n(16));
                    let r = o.join(i.tmpdir(), u);
                    return t && (r = o.join(r, t)), void 0 !== e && e && (yield a.FileSystemAWNS.mkdirsAW(r)), r
                })
            }, e.setQueryString = function (e, t) {
                return Object.keys(t).forEach((n, i) => {
                    e += 0 === i ? "?" : "&", e += `${n}=${t[n]}`
                }), e
            }, e.getQueryString = function (e, t) {
                return e && t && e.match(new RegExp(`(^${t}|[?|&]${t})=([^&#]+)`)) ? RegExp.$2 : ""
            }, e.isClipboardTextFormatAvailable = function () {
                let e = !1, t = r.clipboard.availableFormats();
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
                let i = /\\/, r = t.split(" ");
                if (0 === (r = r.filter(e => e.trim().length > 0)).length) return e;
                for (let t = 0; t < r.length; t++) if (r[t].search(i) > 0) return e;
                n = void 0 === n || null === n ? "#FF0000" : n;
                let o = "", s = ["\\[", "\\^", "\\*", "\\(", "\\)", "\\|", "\\?", "\\$", "\\.", "\\+"], a = "", l = "|";
                for (let e = 0; e < r.length; e++) {
                    for (let t = 0; t < s.length; t++) {
                        let n = new RegExp(s[t], "g");
                        r[e] = r[e].replace(n, s[t])
                    }
                    e === r.length - 1 && (l = ""), a = a.concat(r[e], l)
                }
                let c = new RegExp(a, "gi");
                return o = e.replace(c, e => '<span style= "color:' + n + '">' + e + "</span>")
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
                let n = e.split("."), i = t.split("."), r = 0;
                for (let e = 0; e < n.length; e++) {
                    if (Number(n[e]) - Number(i[e]) > 0) {
                        r = 1;
                        break
                    }
                    if (Number(n[e]) - Number(i[e]) < 0) {
                        r = -1;
                        break
                    }
                }
                return r
            }, e.throttle = function (e, t) {
                let n, i = 0;
                return (...r) => {
                    const o = Date.now();
                    clearTimeout(n), o - i > t ? (e(...r), i = o) : n = setTimeout(() => {
                        e(...r), i = o
                    }, t)
                }
            }
        }(t.ThunderUtil || (t.ThunderUtil = {}))
    }, 1063: function (e, t) {
    }, 1145: function (e, t) {
    }, 1155: function (e, t) {
    }, 12: function (e, t) {
        e.exports = vendor_f06ab6e95552376989e1
    }, 13: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(2), r = n(5), o = n(1).default.getLogger("XLStat");
        let s = r.default(i.join(__rootDir, "../bin/ThunderHelper.node"));

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

            e.trackEvent = function (e, t = "", n = "", i = 0, r = 0, l = 0, c = 0, u = "", d = 0) {
                let f = 0;
                do {
                    if (void 0 === e) {
                        f = 1;
                        break
                    }
                    let h = a(u);
                    f = s.trackEvent(e, t, n, i, r, l, c, h, d), o.information(e, t, n, i, r, l, c, h, d)
                } while (0);
                return f
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
        const i = n(7), r = n(1), o = n(6), s = r.default.getLogger("Thunder.PromiseNativeCall"), a = i.promisify;
        t.default = function (...e) {
            return s.verbose(...e), a(o.NativeCallModule.nativeCall.CallNativeFunction.bind(o.NativeCallModule.nativeCall))(...e)
        }
    }, 16: function (e, t) {
        e.exports = require("os")
    }, 17: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(2), r = n(5).default(i.join(__rootDir, "../bin/ThunderHelper.node"));
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
            }, e.extractIcon = function (e, t) {
                return r.extractIcon(e, t)
            }, e.isWindow7 = function () {
                return 1 === r.isWin7()
            }, e.compareStr = function (e, t) {
                return r.compareStr(e, t)
            }, e.getTickCount = function () {
                return r.getTickCount()
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
    }, 226: function (e, t, n) {
        "use strict";
        var i = n(1145);
        n.n(i).a
    }, 24: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(3), r = n(7), o = n(18), s = n(19);
        !function (e) {
            e.mainProcessContext = "main-process", e.mainRendererContext = "main-renderer", e.mainPageWebviewRendererContext = "main-page-webview-renderer", e.newTaskRendererContext = "new-task-renderer", e.preNewTaskRendererContext = "pre-new-task-renderer", e.loginRendererContext = "login-renderer";

            class t {
                constructor() {
                    this.isConnected = !1, this.isOnIPCEvent = !1, this.rendererInfos = [], this.listeners = new Map, t.intervalIPCModuleMsgs = [s.CommonIPCMessage.msgIPCRendererConnect, s.CommonIPCMessage.msgIPCRendererDisconnect]
                }

                onMessage(e, t) {
                    do {
                        if (!r.isString(e) || 0 === e.length) {
                            o.error("msgName is null");
                            break
                        }
                        if (r.isNullOrUndefined(t)) {
                            o.error("listener is null");
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
                            if (r.isNullOrUndefined(t)) {
                                o.error("msgInfo is empty");
                                break
                            }
                            if (!this.isConnected) {
                                o.warning("hasnot been connected yet");
                                break
                            }
                            let i = t.msg.name;
                            if (this.isIPCModuleIntervalMsg(i)) {
                                o.information(`IPC module interval msg : ${i}`);
                                let r = this.handleIPCModuleIntervalMsg(e.sender, t);
                                if (n = r[1], !r[0]) break;
                                o.information("need to dispatch msg:" + i)
                            }
                            r.isNullOrUndefined(n) ? n = this.NotifyListener(t) : this.NotifyListener(t)
                        } while (0);
                        r.isNullOrUndefined(n) || (e.returnValue = n)
                    })
                }

                ListenSendToRendererMsg(e) {
                    (e ? i.ipcMain : i.ipcRenderer).on(s.CommonIPCMessage.msgIPCSendToRenderer, (t, n) => {
                        let i = void 0;
                        do {
                            if (r.isNullOrUndefined(n)) {
                                o.error("msgInfo is empty");
                                break
                            }
                            if (!this.isConnected) {
                                o.warning("hasnot been connected yet");
                                break
                            }
                            let s = n.msg.name;
                            if (this.isIPCModuleIntervalMsg(s)) {
                                o.information(`IPC module interval msg : ${s}`);
                                let e = this.handleIPCModuleIntervalMsg(t.sender, n);
                                if (i = e[1], !e[0]) break;
                                o.information("need to dispatch msg:" + s)
                            }
                            e ? (o.information("is main, handle forward msg"), this.handleForwardRendererToRendererMsg(n)) : (o.information("is renderer, handle business msg"), r.isNullOrUndefined(i) ? i = this.NotifyListener(n) : this.NotifyListener(n))
                        } while (0);
                        r.isNullOrUndefined(i) || (t.returnValue = i)
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
                    o.verbose(e), o.verbose(t)
                }

                handleRendererDisconnectMsg(e, t) {
                    o.verbose(e), o.verbose(t)
                }

                handleForwardRendererToRendererMsg(e) {
                    this.sendForwardRendererToRendererMsg(e)
                }

                sendForwardRendererToRendererMsg(e) {
                    o.verbose(e)
                }

                NotifyListener(e) {
                    let t = void 0, n = e.msg.name;
                    if (this.listeners.has(n)) {
                        let i = this.listeners.get(n), r = !0;
                        for (let n of i) r ? (r = !1, t = n(e)) : n(e)
                    }
                    return t
                }
            }

            e.Communicator = t
        }(t.CommonIPCBase || (t.CommonIPCBase = {}))
    }, 25: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(3), r = n(7), o = n(18), s = n(19), a = n(24);
        !function (e) {
            class t extends a.CommonIPCBase.Communicator {
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

                sendMessageToRenderer(e, t) {
                    this.sendIPCMsgToRenderer(e, t)
                }

                handleRendererConnectMsg(e, t) {
                    do {
                        if (r.isNullOrUndefined(t)) {
                            o.error("msgInfo is null");
                            break
                        }
                        let e = t.msg.args[0];
                        if (r.isNullOrUndefined(e)) {
                            o.error("connectRendererInfo is null");
                            break
                        }
                        o.information(`Renderer: new renderer will connect, id = ${e.id}, context = ${e.context}`), this.rendererInfos.push(e)
                    } while (0)
                }

                handleRendererDisconnectMsg(e, t) {
                    do {
                        if (r.isNullOrUndefined(t)) {
                            o.error("msgInfo is null");
                            break
                        }
                        let e = t.msg.args[0];
                        if (r.isNullOrUndefined(e)) {
                            o.error("disconnectRendererInfo is null");
                            break
                        }
                        o.information(`renderer will disconnect, id = ${e.id}, context = ${e.context}`);
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
                        if (r.isNullOrUndefined(e)) {
                            o.error("msg is null");
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
                        if (r.isNullOrUndefined(e)) {
                            o.error("rendererId is null");
                            break
                        }
                        if (r.isNullOrUndefined(t)) {
                            o.error("msg is null");
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
    }, 260: function (e, t) {
        e.exports = "data:image/png;base64,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"
    }, 3: function (e, t) {
        e.exports = require("electron")
    }, 32: function (e, t, n) {
        e.exports = n(12)(14)
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
        const i = n(2), r = n(7), o = n(1), s = n(5).default(i.join(__rootDir, "../bin/ThunderHelper.node"));
        process.env.TL_ENABLE = "0", "console" === process.env.TL_OUTPUT ? o.default.outputLogger = o.outputLoggerConsole : o.default.outputLogger = function () {
            function e(e) {
                return function (...t) {
                    s.printEtwLog(e, function (...e) {
                        return e.map(e => r.inspect(e)).join(" ").replace(/%/g, "%%")
                    }(...t))
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
    }, 41: function (e, t, n) {
        "use strict";
        var i = this && this.__awaiter || function (e, t, n, i) {
            return new (n || (n = Promise))(function (r, o) {
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
                    e.done ? r(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(s, a)
                }

                l((i = i.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const r = n(16), o = (n(20), n(2)), s = n(7);
        let a = null;
        const l = n(13), c = n(3), u = n(1), d = n(5), f = n(14), h = "xdas_profile_stat";
        let p = "", v = void 0, m = null, g = void 0, y = null,
            C = d.default(o.join(__rootDir, "../bin/ThunderHelper.node")), A = new Set;

        function M() {
            return i(this, void 0, void 0, function* () {
                return new Promise(e => i(this, void 0, void 0, function* () {
                    void 0 === g && (null === y && (y = new Promise(e => {
                        e(g = function (e) {
                            let t = "";
                            if (0 === e.length && "renderer" === process.type) {
                                let e = o.normalize(decodeURIComponent(window.location.href)),
                                    n = e.indexOf(process.resourcesPath);
                                n = n > -1 ? n + process.resourcesPath.length + 1 : n;
                                let i = e.length - 1, r = e.indexOf("?"), s = e.indexOf("#");
                                i = r > -1 ? Math.min(r - 1, i) : i, i = s > -1 ? Math.min(s - 1, i) : i, n > -1 && i >= n && (t = e.substr(n, i - n + 1))
                            }
                            return 0 === t.length && (t = 0 !== e.length ? e : process.type), t = t.replace(/\||,|;/g, "_")
                        }(""))
                    })), g = yield y), e(g)
                }))
            })
        }

        function b(e) {
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

        function N(e) {
            return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
        }

        function T(e) {
            return i(this, void 0, void 0, function* () {
                return new Promise(t => i(this, void 0, void 0, function* () {
                    let i = void 0;
                    null === a && (a = yield Promise.resolve().then(() => n(26)));
                    let r = a.createHash("md5");
                    null !== r && (i = r.update(e).digest("hex")), t(i)
                }))
            })
        }

        function w() {
            return new Promise(e => i(this, void 0, void 0, function* () {
                let t = "";
                t = void 0 === v ? "browser" === process.type ? function () {
                    if (void 0 === v) {
                        let e = process.argv.length, t = process.argv;
                        for (let n = 0; n < e; n++) {
                            let e = t[n];
                            if (e.startsWith("-StartType:")) {
                                v = e.substring("-StartType:".length);
                                break
                            }
                        }
                        void 0 === v && (v = "")
                    }
                    return v
                }() : yield function () {
                    return i(this, void 0, void 0, function* () {
                        return null === m && (m = new Promise(e => {
                            c.ipcRenderer.send(f.ThunderChannelList.channelRMGetBrowserStartType), c.ipcRenderer.once(f.ThunderChannelList.channelMRGetBrowserStartTypeResult, (t, n) => {
                                v = n, e(n), m = null
                            })
                        })), m
                    })
                }() : v, e(t)
            }))
        }

        function R(e, t, n, r) {
            return i(this, void 0, void 0, function* () {
                let o = b(t), s = b(n), a = yield T(s), c = function (e) {
                    let t = new RegExp(N("file:///"), "g"), n = new RegExp(N(process.resourcesPath + "\\"), "g"),
                        i = new RegExp(N(encodeURI(process.resourcesPath.replace(/\\/g, "/") + "/")), "g");
                    return e.replace(t, "").replace(n, "").replace(i, "")
                }(b(r)), u = yield T(c), d = `${e}:${a}:${u}`;
                A.has(d) || (A.add(d), l.XLStatNS.trackEvent(h, "uncaught_exception", "", 0, 0, 0, 0, `type=${e},business_name=${yield M()},code=${o},message_hash=${a},message=${encodeURI(s)},stack_hash=${u},stack=${encodeURI(c)}`)), function (e, t, n, r) {
                    return i(this, void 0, void 0, function* () {
                    })
                }().catch()
            })
        }

        function x(e) {
            console.error(e);
            let t = e || {};
            R("unhandledRejection", t.code, t instanceof Error ? t.message : t, t.stack).catch()
        }

        !function (e) {
            e.init = function (e) {
                p = e
            }, e.trackColdStartUpEvent = function (e) {
                return i(this, void 0, void 0, function* () {
                    let t = C.iSColdStartUp() ? 1 : 0, n = r.release(),
                        i = C.performanceMonitorReporter.getProcessUptime(), o = yield w(),
                        s = `key=${e},start_type=${o},cold_start_up=${t},os_version=${n},cost_time=${i}`;
                    l.XLStatNS.trackEvent(h, "cold_start_up", "", 0, 0, 0, 0, s)
                })
            }
        }(t.PerformanceMonitorStatNS || (t.PerformanceMonitorStatNS = {})), function () {
            if (process.on("uncaughtException", e => {
                console.error(e);
                let t = e || {};
                R("uncaughtException", t.code, t.message, t.stack).catch()
            }), "browser" === process.type) process.on("unhandledRejection", (e, t) => {
                x(e)
            }), c.ipcMain.on(f.ThunderChannelList.channelRMGetBrowserStartType, function (e) {
                return i(this, void 0, void 0, function* () {
                    let t = yield w();
                    e.sender.send(f.ThunderChannelList.channelMRGetBrowserStartTypeResult, t)
                })
            }); else if ("browser" !== process.type) {
                window.addEventListener("unhandledrejection", e => {
                    x(e && e.reason || {})
                });
                let e = c.remote.getCurrentWebContents();
                null !== e && void 0 !== e && e.once("did-finish-load", () => {
                    (function () {
                        return i(this, void 0, void 0, function* () {
                            do {
                                if ("browser" === process.type) break;
                                if (null === window.performance.timing || void 0 === window.performance.timing) break;
                                let e = C.iSColdStartUp() ? 1 : 0, t = r.release(), n = window.performance.timing,
                                    i = n.loadEventEnd - n.navigationStart, o = n.fetchStart - n.navigationStart,
                                    s = n.domainLookupEnd - n.domainLookupStart, a = n.connectEnd - n.connectStart,
                                    c = n.responseStart - n.requestStart, u = n.responseEnd - n.responseStart,
                                    d = n.domComplete - n.domLoading, f = yield w();
                                l.XLStatNS.trackEvent(h, "page_load_time", "", 0, 0, 0, 0, `start_type=${f},cold_start_up=${e},os_version=${t},load_time=${i},before_fetch_time=${o},domin_lookup_time=${s},connect_time=${a},first_response_time=${c},responseTime=${u},domTime=${d},process=${p}`)
                            } while (0)
                        })
                    })().catch()
                })
            }
            u.default.hook("beforeLog", (e, t, ...n) => {
                e === u.LogLevel.Critical && l.XLStatNS.trackEvent(h, "critical_error", "", 0, 0, 0, 0, `module_name=${t},messages=${n}`)
            })
        }()
    }, 42: function (e, t, n) {
        e.exports = n(12)(130)
    }, 46: function (e, t, n) {
        "use strict";
        var i = this && this.__awaiter || function (e, t, n, i) {
            return new (n || (n = Promise))(function (r, o) {
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
                    e.done ? r(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(s, a)
                }

                l((i = i.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const r = n(3), o = n(9), s = n(6), a = n(2);
        !function (e) {
            function t(e, t) {
                if (null !== e) {
                    e.webContents.isDevToolsOpened() ? e.webContents.closeDevTools() : e.webContents.openDevTools(t)
                }
            }

            e.openDevTool = t, e.enableDevTools = function (e) {
                return i(this, void 0, void 0, function* () {
                    (yield o.FileSystemAWNS.existsAW(a.resolve(__rootDir, "../../enableDevTools"))) && window.addEventListener("keyup", n => {
                        "F12" === n.key && n.ctrlKey && t(r.remote.getCurrentWindow(), e)
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
                        void 0 !== t && null !== t && "" !== t && (yield o.FileSystemAWNS.existsAW(t)) && s.NativeCallModule.nativeCall.CallNativeFunction("DropOpenFile", t)
                    }
                }), !1)
            }
        }(t.ThunderToolsNS || (t.ThunderToolsNS = {}))
    }, 464: function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n(465), r = n.n(i);
        for (var o in i) "default" !== o && function (e) {
            n.d(t, e, function () {
                return i[e]
            })
        }(o);
        t.default = r.a
    }, 465: function (e, t, n) {
        "use strict";
        var i = this && this.__decorate || function (e, t, n, i) {
            var r, o = arguments.length, s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, i); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, n, s) : r(t, n)) || s);
            return o > 3 && s && Object.defineProperty(t, n, s), s
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const r = n(4);
        n(1063);
        const o = n(3), s = n(6), a = n(1).default.getLogger("personalInfo"), l = n(260), c = n(546), u = n(54);
        r.Vue.use(c.default);
        let d = class extends r.Vue {
            constructor() {
                super(...arguments), this.curWnd = null, this.userID = "", this.userNick = "", this.vipType = 2, this.isVip = 0, this.isYear = 0, this.userLevel = 0, this.vipLevel = 0, this.curScore = 0, this.nextScore = 0, this.strLevelupNum = "0天", this.order = "0名", this.imgUrl = l, this.checkMenutimer = null, this.checkWndtimer = null, this.readyCloseTimer = null, this.yearIcon = "vip-icon-nian is-disabled", this.degreePointScore = [], this.contextMenu = null, this.isShowMenuIng = !1, this.expireDate = "", this.expireStrDate = "", this.bisExpire = !1, this.expireNum = 0, this.vipText = "", this.vipBtnText = "开通白金会员", this.vipBtnClickUrl = "https://pay.xunlei.com/pay.html?bizNo=baijin/?referfrom=v_pc_xl9_ggong_h_pay&aidfrom=ktnovip", this.rectData = "", this.onUserHeaderChangeCookie = 0, this.onGetUserInfoFinishedCookie = 0, this.nVipGrow = 0, this.nVipShowType = -1, this.strAidfrom = "", this.vipData = null, this.isReadyColse = !1, this.isShowSign = !1, this.isOpenSign = !1
            }

            get userYearIcon() {
                return 0 !== this.isYear && 0 !== this.isVip ? this.yearIcon = "vip-icon-nian" : this.yearIcon = "vip-icon-nian is-disabled", this.yearIcon
            }

            get strUserLevel() {
                let e = "Lv0";
                return e = this.userLevel >= 99 ? "等级已满" : "Lv" + this.userLevel
            }

            get scoreInfo() {
                let e;
                return e = "等级：" + this.strUserLevel + "\r\n经验值：" + this.curScore + "/" + this.nextScore
            }

            get userOrder() {
                return "全球排名：" + this.order
            }

            get userLevelupNum() {
                let e = 70;
                0 !== this.isVip && (e = this.getVipLevelDailyExp());
                let t = this.nextScore - this.curScore;
                return this.strLevelupNum = Math.ceil(t / e) + "天", "升级剩余活跃天数：" + this.strLevelupNum
            }

            getVipLevelDailyExp() {
                let e = this.vipType, t = this.vipLevel, n = 70;
                return n = 3 === e || 4 === e ? t >= 1 && t <= 7 ? 100 + 10 * (t - 1) : 70 : t >= 1 && t <= 7 ? 80 + 10 * (t - 1) : 70
            }

            onClick(e) {
                let t = "", n = "";
                if ("sign" === e) return s.NativeCallModule.nativeCall.CallNativeFunction("ShowWebWnd", "sign", "hover"), void(null !== this.curWnd && this.curWnd.close());
                if ("nian" === e) n = "nf", t = "https://vip.xunlei.com/vip_service/year/?referfrom=v_pc_xlx_ggong_hover_yearicon"; else {
                    if ("nick" === e || "header" === e) return this.statClient("userinfo_click"), s.NativeCallModule.nativeCall.CallNativeFunction("ShowModifierUserInfoWnd", e), void(null !== this.curWnd && this.curWnd.close());
                    "vip" === e ? (t = 0 !== this.isVip ? "https://vip.xunlei.com/vip_service/rule/?referfrom=v_pc_xlx_ggong_hover_vipicon" : "https://pay.xunlei.com/pay.html?bizNo=baijin?referfrom=v_pc_xlx_ggong_hover_vipicon", n = "vipicon") : "level" === e ? (t = "http://i.xunlei.com/help/help_2.html?referfrom=v_pc_xlx_ggong_hover_grade", n = "grade") : "levelupNum" === e ? (t = "http://i.xunlei.com/help/help_2.html?referfrom=v_pc_xlx_ggong_hover_upgrade", n = "upgrade") : "order" === e ? (t = " http://dynamic.i.xunlei.com/rank?referfrom=v_pc_xlx_ggong_hover_ranking", n = "ranking") : "vipBtn" === e && (t = this.vipBtnClickUrl, n = "pay")
                }
                "" !== n && this.stat(n), a.information("onClick:", t), "" !== t && s.NativeCallModule.nativeCall.CallNativeFunction("openNewTab", t, () => {
                    null !== this.curWnd && this.curWnd.close()
                })
            }

            calculateScoreInfo() {
                for (let e = 99; e >= 0; e--) if (this.curScore >= this.degreePointScore[e]) {
                    this.userLevel = e + 1;
                    break
                }
                this.nextScore = this.degreePointScore[this.userLevel]
            }

            initEveryLevelValue() {
                let e = 0;
                for (let t = 1; t <= 100; t++) e = 50 * t * (t + 3), this.degreePointScore.push(e)
            }

            calculateExpireDate() {
                let e, t, n;
                e = this.expireDate.substring(0, 4), t = this.expireDate.substring(4, 6), n = this.expireDate.substring(6, 8), this.expireStrDate = e + "-" + t + "-" + n;
                let i = new Date(e + "-" + t + "-" + n + " 00:00:00").getTime() / 1e3, r = new Date,
                    o = r.getFullYear(), s = r.getMonth(), a = r.getDate(),
                    l = (r = new Date(o + "-" + (s < 10 ? "0" + (s + 1) : s + 1) + "-" + (a < 10 ? "0" + a : a) + " 00:00:00")).getTime() / 1e3;
                i >= l ? (this.bisExpire = !1, this.expireNum = Math.ceil((i - l) / 86400)) : (this.bisExpire = !0, this.expireNum = Math.ceil((l - i) / 86400))
            }

            updateVipBtnInfo() {
                2 === this.isVip ? (this.vipText = "会员已暂停", this.vipBtnText = "激活会员", this.vipBtnClickUrl = "http://vip.xunlei.com/vip_service/mycenter/stop.html?referfrom=v_pc_xlx_ggong_pay_hover") : 1 === this.isVip ? (null === this.expireDate || "" === this.expireDate ? this.bisExpire = !1 : this.calculateExpireDate(), 3 === this.vipType ? !1 === this.bisExpire && this.expireNum <= 30 ? (this.vipText = this.expireStrDate + "到期", this.expireNum <= 0 ? this.vipText = "会员今日到期" : this.expireNum <= 15 && (this.vipText = "会员还有" + this.expireNum + "天到期"), this.vipBtnText = "续费超级会员", this.nVipShowType = 6, this.strAidfrom = "bjxf", this.vipBtnClickUrl = "https://pay.xunlei.com/pay.html?bizNo=baijin&selectBizno=supervip&timeType=1412&selectWay=qrcode&referfrom=v_pc_xlx_ggong_pay_hover&aidfrom=bjxf") : !1 === this.bisExpire && this.expireNum > 30 ? (this.vipText = this.expireStrDate + "到期", this.vipBtnText = "升级超级会员", this.nVipShowType = 4, this.strAidfrom = "bjsj", this.vipBtnClickUrl = "https://pay.xunlei.com/pay.html?bizNo=baijin/?referfrom=v_pc_xlx_ggong_pay_hover&aidfrom=bjsj") : (this.vipText = "", this.vipBtnText = "开通超级会员", this.vipBtnClickUrl = "https://pay.xunlei.com/pay.html?bizNo=baijin/?referfrom=v_pc_xlx_ggong_pay_hover&aidfrom=ktnovip1") : 5 === this.vipType ? !1 === this.bisExpire ? (this.vipText = this.expireStrDate + "到期", this.expireNum <= 0 ? this.vipText = "会员今日到期" : this.expireNum <= 15 && (this.vipText = "会员还有" + this.expireNum + "天到期"), this.vipBtnText = "续费超级会员", this.nVipShowType = 7, this.strAidfrom = "cjxf", this.vipBtnClickUrl = "https://pay.xunlei.com/pay.html?bizNo=baijin&selectBizno=supervip&timeType=1412&selectWay=qrcode&referfrom=v_pc_xlx_ggong_pay_hover&aidfrom=cjxf") : (this.vipText = "", this.vipBtnText = "开通超级会员", this.vipBtnClickUrl = "https://pay.xunlei.com/pay.html?bizNo=baijin/?referfrom=v_pc_xlx_ggong_pay_hover&aidfrom=ktnovip1") : 2 === this.vipType ? !1 === this.bisExpire && this.expireNum <= 30 ? (this.vipText = this.expireStrDate + "到期", this.expireNum <= 0 ? this.vipText = "会员今日到期" : this.expireNum <= 15 && (this.vipText = "会员还有" + this.expireNum + "天到期"), this.vipBtnText = "续费超级会员", this.nVipShowType = 5, this.strAidfrom = "ptxf", this.vipBtnClickUrl = "https://pay.xunlei.com/pay.html?bizNo=baijin&selectBizno=supervip&timeType=1412&selectWay=qrcode&referfrom=v_pc_xlx_ggong_pay_hover&aidfrom=ptxf") : !1 === this.bisExpire && this.expireNum > 30 ? (this.vipText = this.expireStrDate + "到期", this.vipBtnText = "升级超级会员", this.nVipShowType = 3, this.strAidfrom = "ptsj", this.vipBtnClickUrl = "https://pay.xunlei.com/pay.html?bizNo=baijin/?referfrom=v_pc_xlx_ggong_pay_hover&aidfrom=ptsj") : (this.vipText = "", this.vipBtnText = "开通超级会员", this.vipBtnClickUrl = "https://pay.xunlei.com/pay.html?bizNo=baijin/?referfrom=v_pc_xlx_ggong_pay_hover&aidfrom=ktnovip1") : (this.vipText = "", this.vipBtnText = "开通超级会员", this.vipBtnClickUrl = "https://pay.xunlei.com/pay.html?bizNo=baijin/?referfrom=v_pc_xlx_ggong_pay_hover&aidfrom=ktnovip1")) : (this.isVip, this.vipText = "", this.vipBtnText = "开通超级会员", this.vipBtnClickUrl = "https://pay.xunlei.com/pay.html?bizNo=baijin/?referfrom=v_pc_xlx_ggong_pay_hover&aidfrom=ktnovip")
            }

            menuItemClick(e) {
                let t = "";
                if ("changePassword" === e) {
                    let e = "https://i.xunlei.com/xluser/validate/enter/modifypwd_enter.html";
                    s.NativeCallModule.nativeCall.CallNativeFunction("openNewTab", e), t = "button=modify_code"
                } else if ("accountSecurity" === e) {
                    let e = "https://i.xunlei.com/xluser/account/acc_safe.html";
                    s.NativeCallModule.nativeCall.CallNativeFunction("openNewTab", e), t = "button=account_se"
                } else "switchAccount" === e ? (s.NativeCallModule.nativeCall.CallNativeFunction("NativeFireEvent", "onSwitchAccount"), t = "button=change_account") : "logout" === e && (s.NativeCallModule.nativeCall.CallNativeFunction("Logout", function (e) {
                    a.information(e)
                }), t = "button=exit");
                a.information("menuItemClick:extData = ", t), s.NativeCallModule.nativeCall.CallNativeFunction("TrackEvent", "clienttop", "userinfo_hover_click", "", 0, 0, 0, 0, t, () => {
                }), null !== this.curWnd && this.curWnd.close()
            }

            showMenu() {
                let e = [{
                    type: "normal", label: "修改密码", click: () => {
                        this.menuItemClick("changePassword")
                    }
                }, {
                    type: "normal", label: "帐号安全", click: () => {
                        this.menuItemClick("accountSecurity")
                    }
                }, {
                    type: "normal", label: "切换帐号", click: () => {
                        this.menuItemClick("switchAccount")
                    }
                }, {
                    type: "normal", label: "退出登录", click: () => {
                        this.menuItemClick("logout")
                    }
                }];
                this.contextMenu = o.remote.Menu.buildFromTemplate(e);
                let t = this.curWnd, n = t.getBounds(), i = Math.round(n.width);
                this.isShowMenuIng = !0, u.MenuSkinNS.setStyle(this.contextMenu, {}), this.contextMenu.popup({
                    window: t,
                    x: i,
                    y: 0
                }), this.stat("account_manage")
            }

            isMenuWndRect() {
                let e = this.curWnd.getBounds(), t = o.screen.getCursorScreenPoint();
                return t.x >= e.x + e.width && t.x <= e.x + e.width + 100 && t.y >= e.y && t.y <= e.y + 135 || t.x >= e.x + e.width - 50 && t.x <= e.x + e.width && t.y >= e.y && t.y <= e.y + 50
            }

            isPersonalInfoWndRect() {
                if (null === this.curWnd) return !1;
                let e = this.curWnd.getBounds(), t = o.screen.getCursorScreenPoint(), n = 0, i = 0;
                return this.isShowMenuIng && (n = 100, i = 135), t.x >= e.x && t.x <= e.x + e.width && t.y >= e.y && t.y <= e.y + e.height || t.x >= e.x + e.width && t.x <= e.x + e.width + n && t.y >= e.y && t.y <= e.y + i
            }

            isLoginInfoRect() {
                let e = !1;
                do {
                    if (null === this.curWnd || "" === this.rectData) break;
                    let t = o.screen.getCursorScreenPoint(), n = null;
                    try {
                        n = JSON.parse(this.rectData)
                    } catch (e) {
                        a.warning(e)
                    }
                    if (null === n) break;
                    let i = this.curWnd.getBounds(), r = i.x + 10, s = i.y - Number(n.height) - 5,
                        l = i.x + 10 + Number(n.width), c = i.y - 3;
                    a.information("isLoginInfoRect:", r, s, l, c, t.x, t.y), t.x >= r && t.x <= l && t.y >= s && t.y <= c && (e = !0)
                } while (0);
                return e
            }

            checkIsHideWnd() {
                let e = this.isPersonalInfoWndRect(), t = this.isLoginInfoRect();
                return !1 === e && !1 === t
            }

            closeWndAndClearData() {
                null !== this.contextMenu && this.contextMenu.closePopup(this.curWnd), null !== this.checkMenutimer && (clearInterval(this.checkMenutimer), this.checkMenutimer = null), null !== this.checkWndtimer && (clearInterval(this.checkWndtimer), this.checkWndtimer = null), null !== this.readyCloseTimer && (clearTimeout(this.readyCloseTimer), this.readyCloseTimer = null), this.curWnd.close()
            }

            updateReadyCloseWndAndClearDataState(e) {
                this.isReadyColse = e, e ? null === this.readyCloseTimer && (this.readyCloseTimer = setTimeout(() => {
                    this.isReadyColse && this.closeWndAndClearData()
                }, 500)) : null !== this.readyCloseTimer && (clearTimeout(this.readyCloseTimer), this.readyCloseTimer = null)
            }

            hidePersonalInfoWnd() {
                this.checkIsHideWnd() ? this.updateReadyCloseWndAndClearDataState(!0) : (this.updateReadyCloseWndAndClearDataState(!1), null === this.checkWndtimer && (this.checkWndtimer = setInterval(() => {
                    this.checkIsHideWnd() ? this.updateReadyCloseWndAndClearDataState(!0) : this.updateReadyCloseWndAndClearDataState(!1)
                }, 200)))
            }

            hideMenu() {
                null === this.checkMenutimer && (this.checkMenutimer = setInterval(() => {
                    !1 === this.isMenuWndRect() && (this.isShowMenuIng = !1, this.contextMenu.closePopup(this.curWnd), null !== this.checkMenutimer && (clearInterval(this.checkMenutimer), this.checkMenutimer = null))
                }, 200))
            }

            getCurUserHeader() {
                this.imgUrl = l, a.information("getCurUserHeader:", this.userID), s.NativeCallModule.nativeCall.CallNativeFunction("GetUserHeaderByUserID", this.userID, (e, t) => {
                    a.information("GetUserHeaderByUserID:", t), null !== t && void 0 !== t && "" !== t && (this.imgUrl = `${t}?_=${Date.now()}`)
                })
            }

            stat(e) {
                let t = "";
                t = "is_vip=" + this.isVip + ",vip_type=" + this.vipType + ",position=" + e;
                let n = "", i = "", r = -1, o = "";
                "grade" === e || "upgrade" === e || "ranking" === e || "coupon" === e || "my_page" === e || "vipicon" === e || "nf" === e ? (i = e, "my_page" === e ? i = "mypage" : "nf" === e && (i = "yearicon"), n = "v_pc_xlx_ggong_hover_" + i) : "pay" === e && (n = "v_pc_xlx_ggong_pay_hover"), "account_manage" !== e && (t = t + ",referfrom=" + n), "vipicon" !== e && "pay" !== e || (0 === this.isVip && 0 === this.nVipGrow ? (r = 1, o = "ktnovip") : 0 === this.isVip && 0 !== this.nVipGrow ? (r = 2, o = "ktnovip1") : -1 !== this.nVipShowType && "vipicon" !== e && (r = this.nVipShowType, o = this.strAidfrom), -1 !== r && (t = t + ",show_type=" + r), "" !== o && (t = t + ",aidfrom=" + o));
                let l = encodeURIComponent(t);
                a.information(t, l), s.NativeCallModule.nativeCall.CallNativeFunction("TrackEvent", "clienttop", "logged_hover_layer_click", "", 0, 0, 0, 0, l, () => {
                })
            }

            statClient(e) {
                let t = `is_login=1,is_vip=${this.isVip}`;
                a.information(e, t), s.NativeCallModule.nativeCall.CallNativeFunction("TrackEvent", "user_info", e, "", 0, 0, 0, 0, t, () => {
                })
            }

            updateUserData() {
                s.NativeCallModule.nativeCall.CallNativeFunction("GetAllUserInfo", (e, t) => {
                    a.information(e);
                    do {
                        if (null === t || void 0 === t) break;
                        if (this.userID = t.userID, this.userNick = t.nickName, this.getCurUserHeader(), null !== t.order && void 0 !== t.order && "" !== t.order && (this.order = t.order + "名"), this.curScore = t.account, this.calculateScoreInfo(), null === t.vipList || void 0 === t.vipList) break;
                        if (null === t.vipList[0] || void 0 === t.vipList[0]) break;
                        let e = t.vipList[0];
						if (e.isVip == 0) {
						e.vipLevel = 10;
						e.isVip = 1;
						e.isYear = 1;
						e.vasType = 5;
						}
                        this.vipData = [{
                            VIPLevel: e.vipLevel,
                            isVIP: e.isVip,
                            isYear: e.isYear,
                            uid: t.userID,
                            vasID: 2,
                            vasType: e.vasType
                        }], this.isYear = Number(e.isYear), this.isVip = Number(e.isVip), this.vipLevel = Number(e.vipLevel), this.vipType = Number(e.vasType), this.expireDate = e.expireDate, "" !== e.vipGrow && (this.nVipGrow = Number(e.vipGrow)), this.updateVipBtnInfo()
                    } while (0)
                })
            }

            mounted() {
                s.NativeCallModule.nativeCall.CallNativeFunction("IsAlreadySign", (e, t) => {
                    a.information("IsAlreadySign: result = ", t, e), this.isOpenSign = t
                }), s.NativeCallModule.nativeCall.CallNativeFunction("IsHaveSignQuestion", (e, t) => {
                    a.information("IsHaveSignQuestion: result = ", t, e), this.isShowSign = t
                }), this.curWnd = o.remote.getCurrentWindow(), a.information("mounted:", this.curWnd), this.initEveryLevelValue(), this.updateUserData(), this.onGetUserInfoFinishedCookie = s.NativeCallModule.nativeCall.AttachNativeEvent("onGetUserInfoFinished", () => {
                    a.information("收到 onGetUserInfoFinished 事件"), this.updateUserData()
                }), this.onUserHeaderChangeCookie = s.NativeCallModule.nativeCall.AttachNativeEvent("onUserHeaderChange", e => {
                    a.information("onUserHeaderChange:", e), this.imgUrl = e
                }), o.remote.ipcMain.on("enteLeftTopUserInfoArea", (e, t, n) => {
                    a.information("enteLeftTopUserInfoArea:", t, n), this.rectData = n, this.hidePersonalInfoWnd()
                }), null !== this.curWnd && this.curWnd.on("close", () => {
                    null !== this.contextMenu && this.contextMenu.closePopup(this.curWnd), null !== this.checkWndtimer && (clearInterval(this.checkWndtimer), this.checkWndtimer = null), null !== this.checkMenutimer && (clearInterval(this.checkMenutimer), this.checkMenutimer = null), s.NativeCallModule.nativeCall.DetachNativeEvent("onUserHeaderChange", this.onUserHeaderChangeCookie), s.NativeCallModule.nativeCall.DetachNativeEvent("onGetUserInfoFinished", this.onGetUserInfoFinishedCookie)
                })
            }
        };
        d = i([r.Component({components: {}})], d), t.default = d
    }, 5: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e) {
            return require(e)
        }
    }, 51: function (e, t, n) {
        e.exports = n(12)(65)
    }, 54: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(3), r = n(58), o = n(1), s = n(10), a = n(59), l = o.default.getLogger("MenuSkinNS");
        !function (e) {
            function t(e, t) {
                if (l.information("setStyle", e, t), null !== e) {
                    let n = {windowPreference: r.WindowPreferenceNS.getWindowPreference()};
                    l.information("skinOpts", n), e.setStyle(a(n, t))
                }
            }

            e.setStyle = t, e.popEditableDefaultContextMenu = function (e, n, r) {
                let o = i.remote.getCurrentWebContents();
                o.once("context-menu", (r, a) => {
                    if (l.verbose(r), a.isEditable) {
                        let r = [{
                            label: "撤销", enabled: a.editFlags.canUndo, click: () => {
                                o.undo()
                            }
                        }, {type: "separator"}, {
                            label: "剪切", enabled: a.editFlags.canCut, click: () => {
                                o.cut()
                            }
                        }, {
                            label: "复制", enabled: a.editFlags.canCopy, click: () => {
                                o.copy()
                            }
                        }, {
                            label: "粘贴",
                            enabled: a.editFlags.canPaste && s.ThunderUtil.isClipboardTextFormatAvailable(),
                            click: () => {
                                o.paste()
                            }
                        }, {
                            label: "删除", enabled: a.editFlags.canDelete, click: () => {
                                o.delete()
                            }
                        }, {type: "separator"}, {
                            label: "全选", enabled: a.editFlags.canSelectAll, click: () => {
                                o.selectAll()
                            }
                        }];
                        if (void 0 !== e && "function" == typeof e) {
                            let t = e(a);
                            void 0 !== t && t.length > 0 && (void 0 === n ? n = r.length : (n < 0 && (n = r.length + 1 + n) < 0 && (n = 0), n > r.length && (n = r.length)), r.splice(n, 0, ...t))
                        }
                        let l = i.remote.Menu.buildFromTemplate(r);
                        t(l, {}), l.popup({window: i.remote.getCurrentWindow()})
                    }
                })
            }
        }(t.MenuSkinNS || (t.MenuSkinNS = {}))
    }, 546: function (e, t, n) {
        var i;
        i = function () {
            return function (e) {
                var t = {};

                function n(i) {
                    if (t[i]) return t[i].exports;
                    var r = t[i] = {i, l: !1, exports: {}};
                    return e[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
                }

                return n.m = e, n.c = t, n.i = function (e) {
                    return e
                }, n.d = function (e, t, i) {
                    n.o(e, t) || Object.defineProperty(e, t, {configurable: !1, enumerable: !0, get: i})
                }, n.n = function (e) {
                    var t = e && e.__esModule ? function () {
                        return e.default
                    } : function () {
                        return e
                    };
                    return n.d(t, "a", t), t
                }, n.o = function (e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, n.p = "", n(n.s = 3)
            }([function (e, t, n) {
                "use strict";
                t.a = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = "", n = "";
                    if (!e || 0 === e.length) return {isVip: !1};
                    var i = e.filter(function (e) {
                        return e && 2 === (e.vasId || e.vasID)
                    })[0];
                    if (n = i.vIPLevel || i.VIPLevel || 0, i) {
                        var r = {2: "", 3: "p", 5: "s"}[i.vasType] || "";
                        return t = "vip-icon-" + r + "vip" + n, {
                            isVip: "1" === i.isVIP,
                            isStop: "2" === i.isVIP,
                            isYear: "1" === i.isYear,
                            type: i.vasType,
                            level: n,
                            vipClass: t
                        }
                    }
                    return {isVip: !1}
                }
            }, function (e, t, n) {
                "use strict";
                var i = n(4), r = n.n(i);
                r.a.install = function (e) {
                    e.component(r.a.name, r.a)
                }, t.a = r.a
            }, function (e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0});
                var i = n(0);
                t.default = {
                    name: "vip-icon",
                    props: {
                        vipData: {type: Array, required: !0},
                        size: {type: String, default: "normal"},
                        disabled: {type: Boolean, default: !1}
                    },
                    computed: {
                        vipInfo: function () {
                            return n.i(i.a)(this.vipData)
                        }, vipClass: function () {
                            var e = this.vipInfo.vipClass;
                            return "small" === this.size && (e += " is-small"), (this.vipInfo.isStop || "0" === this.vipInfo.level || this.disabled) && (e += " is-disabled"), e
                        }
                    }
                }
            }, function (e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0});
                var i = n(1), r = n(0);
                n.d(t, "vipInfo", function () {
                    return r.a
                });
                /**
                 * vip
                 * (c) 2018 shijianan
                 * @license MIT
                 */
                var o = {
                    install: function (e, t) {
                        e.use(i.a), e.prototype.$vipInfo = function (e) {
                            return n.i(r.a)(e)
                        }
                    }
                };
                t.default = o
            }, function (e, t, n) {
                var i = n(5)(n(2), n(6), null, null, null);
                i.options.__file = "/Users/nancy/Desktop/work/@xunlei/vip/src/vip-icon/VipIcon.vue", i.esModule && Object.keys(i.esModule).some(function (e) {
                    return "default" !== e && "__" !== e.substr(0, 2)
                }) && console.error("named exports are not supported in *.vue files."), i.options.functional && console.error("[vue-loader] VipIcon.vue: functional components are not supported with templates, they should use render functions."), e.exports = i.exports
            }, function (e, t) {
                e.exports = function (e, t, n, i, r) {
                    var o, s = e = e || {}, a = typeof e.default;
                    "object" !== a && "function" !== a || (o = e, s = e.default);
                    var l, c = "function" == typeof s ? s.options : s;
                    if (t && (c.render = t.render, c.staticRenderFns = t.staticRenderFns), i && (c._scopeId = i), r ? (l = function (e) {
                        (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), n && n.call(this, e), e && e._registeredComponents && e._registeredComponents.add(r)
                    }, c._ssrRegister = l) : n && (l = n), l) {
                        var u = c.functional, d = u ? c.render : c.beforeCreate;
                        u ? c.render = function (e, t) {
                            return l.call(t), d(e, t)
                        } : c.beforeCreate = d ? [].concat(d, l) : [l]
                    }
                    return {esModule: o, exports: s, options: c}
                }
            }, function (e, t, n) {
                e.exports = {
                    render: function () {
                        var e = this.$createElement;
                        return (this._self._c || e)("i", {class: this.vipClass})
                    }, staticRenderFns: []
                }, e.exports.render._withStripped = !0
            }])
        }, e.exports = i()
    }, 55: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(15), r = n(6), o = n(38), s = n(1), a = n(10), l = s.default.getLogger("common/skin");

        function c(e) {
            if (e.type === o.SkinHelperNS.SkinType.Default) document.body.classList.remove("is-theme"), a.ThunderUtil.setCSSProperties(document.body, {
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
            }); else if (e.type === o.SkinHelperNS.SkinType.Color || e.type === o.SkinHelperNS.SkinType.Wallpaper) {
                document.body.classList.add("is-theme");
                let {colors: {colorPrimary: t, colorPrimaryControl1: n, colorPrimaryControl2: i, colorPrimaryControl3: r, colorPrimaryControl4: o, colorPrimaryGradient: s, colorPrimaryText: l, colorSearch: c, colorSecondary: u, colorGradientBackground: d, colorGradientForeground: f, colorAccordion: h}, opacity: p} = e;
                a.ThunderUtil.setCSSProperties(document.body, {
                    "--color-primary-theme": `${t}`,
                    "--color-primary-control-1": `${n}`,
                    "--color-primary-control-2": `${i}`,
                    "--color-primary-control-3": `${r}`,
                    "--color-primary-control-4": `${o}`,
                    "--color-primary-gradient-1": `${s[0]}`,
                    "--color-primary-gradient-2": `${s[1]}`,
                    "--color-primary-text": `${l}`,
                    "--color-search": `${c}`,
                    "--color-secondary": `${u}`,
                    "--color-gradient-background-1": `${d[0]}`,
                    "--color-gradient-background-2": `${d[1]}`,
                    "--color-gradient-foreground-1": `${f[0]}`,
                    "--color-gradient-foreground-2": `${f[1]}`,
                    "--color-accordion-1": `${h[0]}`,
                    "--color-accordion-2": `${h[1]}`,
                    "--default-opacity-1": `${p - .1}`,
                    "--default-opacity-2": `${p + .1}`
                })
            }
        }

        i.default("GetSkinInfo").then(c).catch(e => {
            l.warning(e)
        }), r.NativeCallModule.nativeCall.AttachNativeEvent("OnChangeSkin", c)
    }, 58: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(86), r = n(69);
        !function (e) {
            e.getWindowPreference = function (e = !1) {
                let t = r.default(), n = {};
                return t && t.colors && "string" == typeof t.colors.colorPrimaryControl1 && (n.hoverBackgroundColor = e ? parseInt(i.ColorUtilNS.rgbaStringToHexWith0xBegin(t.colors.colorPrimaryControl1), 16) : i.ColorUtilNS.rgbaStringToHexWith0xBegin(t.colors.colorPrimaryControl1)), n
            }
        }(t.WindowPreferenceNS || (t.WindowPreferenceNS = {}))
    }, 59: function (e, t, n) {
        (function (e) {
            var n = 200, i = "__lodash_hash_undefined__", r = 800, o = 16, s = 9007199254740991,
                a = "[object Arguments]", l = "[object AsyncFunction]", c = "[object Function]",
                u = "[object GeneratorFunction]", d = "[object Null]", f = "[object Object]", h = "[object Proxy]",
                p = "[object Undefined]", v = /^\[object .+?Constructor\]$/, m = /^(?:0|[1-9]\d*)$/, g = {};
            g["[object Float32Array]"] = g["[object Float64Array]"] = g["[object Int8Array]"] = g["[object Int16Array]"] = g["[object Int32Array]"] = g["[object Uint8Array]"] = g["[object Uint8ClampedArray]"] = g["[object Uint16Array]"] = g["[object Uint32Array]"] = !0, g[a] = g["[object Array]"] = g["[object ArrayBuffer]"] = g["[object Boolean]"] = g["[object DataView]"] = g["[object Date]"] = g["[object Error]"] = g[c] = g["[object Map]"] = g["[object Number]"] = g[f] = g["[object RegExp]"] = g["[object Set]"] = g["[object String]"] = g["[object WeakMap]"] = !1;
            var y = "object" == typeof global && global && global.Object === Object && global,
                C = "object" == typeof self && self && self.Object === Object && self,
                A = y || C || Function("return this")(), M = "object" == typeof t && t && !t.nodeType && t,
                b = M && "object" == typeof e && e && !e.nodeType && e, N = b && b.exports === M, T = N && y.process,
                w = function () {
                    try {
                        return T && T.binding && T.binding("util")
                    } catch (e) {
                    }
                }(), R = w && w.isTypedArray;

            function x(e, t) {
                return "__proto__" == t ? void 0 : e[t]
            }

            var _, S, D, I = Array.prototype, k = Function.prototype, E = Object.prototype, P = A["__core-js_shared__"],
                W = k.toString, L = E.hasOwnProperty,
                B = (_ = /[^.]+$/.exec(P && P.keys && P.keys.IE_PROTO || "")) ? "Symbol(src)_1." + _ : "",
                O = E.toString, z = W.call(Object),
                F = RegExp("^" + W.call(L).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                j = N ? A.Buffer : void 0, U = A.Symbol, G = A.Uint8Array, Z = j ? j.allocUnsafe : void 0,
                K = (S = Object.getPrototypeOf, D = Object, function (e) {
                    return S(D(e))
                }), V = Object.create, Y = E.propertyIsEnumerable, H = I.splice, X = U ? U.toStringTag : void 0,
                Q = function () {
                    try {
                        var e = Me(Object, "defineProperty");
                        return e({}, "", {}), e
                    } catch (e) {
                    }
                }(), J = j ? j.isBuffer : void 0, q = Math.max, $ = Date.now, ee = Me(A, "Map"),
                te = Me(Object, "create"), ne = function () {
                    function e() {
                    }

                    return function (t) {
                        if (!ke(t)) return {};
                        if (V) return V(t);
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

            function re(e) {
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

            function se(e) {
                var t = this.__data__ = new re(e);
                this.size = t.size
            }

            function ae(e, t) {
                var n = xe(e), i = !n && Re(e), r = !n && !i && Se(e), o = !n && !i && !r && Pe(e),
                    s = n || i || r || o, a = s ? function (e, t) {
                        for (var n = -1, i = Array(e); ++n < e;) i[n] = t(n);
                        return i
                    }(e.length, String) : [], l = a.length;
                for (var c in e) !t && !L.call(e, c) || s && ("length" == c || r && ("offset" == c || "parent" == c) || o && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || be(c, l)) || a.push(c);
                return a
            }

            function le(e, t, n) {
                (void 0 === n || we(e[t], n)) && (void 0 !== n || t in e) || de(e, t, n)
            }

            function ce(e, t, n) {
                var i = e[t];
                L.call(e, t) && we(i, n) && (void 0 !== n || t in e) || de(e, t, n)
            }

            function ue(e, t) {
                for (var n = e.length; n--;) if (we(e[n][0], t)) return n;
                return -1
            }

            function de(e, t, n) {
                "__proto__" == t && Q ? Q(e, t, {configurable: !0, enumerable: !0, value: n, writable: !0}) : e[t] = n
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
                return L.call(t, e) ? t[e] : void 0
            }, ie.prototype.has = function (e) {
                var t = this.__data__;
                return te ? void 0 !== t[e] : L.call(t, e)
            }, ie.prototype.set = function (e, t) {
                var n = this.__data__;
                return this.size += this.has(e) ? 0 : 1, n[e] = te && void 0 === t ? i : t, this
            }, re.prototype.clear = function () {
                this.__data__ = [], this.size = 0
            }, re.prototype.delete = function (e) {
                var t = this.__data__, n = ue(t, e);
                return !(n < 0 || (n == t.length - 1 ? t.pop() : H.call(t, n, 1), --this.size, 0))
            }, re.prototype.get = function (e) {
                var t = this.__data__, n = ue(t, e);
                return n < 0 ? void 0 : t[n][1]
            }, re.prototype.has = function (e) {
                return ue(this.__data__, e) > -1
            }, re.prototype.set = function (e, t) {
                var n = this.__data__, i = ue(n, e);
                return i < 0 ? (++this.size, n.push([e, t])) : n[i][1] = t, this
            }, oe.prototype.clear = function () {
                this.size = 0, this.__data__ = {hash: new ie, map: new (ee || re), string: new ie}
            }, oe.prototype.delete = function (e) {
                var t = Ae(this, e).delete(e);
                return this.size -= t ? 1 : 0, t
            }, oe.prototype.get = function (e) {
                return Ae(this, e).get(e)
            }, oe.prototype.has = function (e) {
                return Ae(this, e).has(e)
            }, oe.prototype.set = function (e, t) {
                var n = Ae(this, e), i = n.size;
                return n.set(e, t), this.size += n.size == i ? 0 : 1, this
            }, se.prototype.clear = function () {
                this.__data__ = new re, this.size = 0
            }, se.prototype.delete = function (e) {
                var t = this.__data__, n = t.delete(e);
                return this.size = t.size, n
            }, se.prototype.get = function (e) {
                return this.__data__.get(e)
            }, se.prototype.has = function (e) {
                return this.__data__.has(e)
            }, se.prototype.set = function (e, t) {
                var i = this.__data__;
                if (i instanceof re) {
                    var r = i.__data__;
                    if (!ee || r.length < n - 1) return r.push([e, t]), this.size = ++i.size, this;
                    i = this.__data__ = new oe(r)
                }
                return i.set(e, t), this.size = i.size, this
            };
            var fe, he = function (e, t, n) {
                for (var i = -1, r = Object(e), o = n(e), s = o.length; s--;) {
                    var a = o[fe ? s : ++i];
                    if (!1 === t(r[a], a, r)) break
                }
                return e
            };

            function pe(e) {
                return null == e ? void 0 === e ? p : d : X && X in Object(e) ? function (e) {
                    var t = L.call(e, X), n = e[X];
                    try {
                        e[X] = void 0;
                        var i = !0
                    } catch (e) {
                    }
                    var r = O.call(e);
                    i && (t ? e[X] = n : delete e[X]);
                    return r
                }(e) : function (e) {
                    return O.call(e)
                }(e)
            }

            function ve(e) {
                return Ee(e) && pe(e) == a
            }

            function me(e) {
                return !(!ke(e) || B && B in e) && (De(e) ? F : v).test(function (e) {
                    if (null != e) {
                        try {
                            return W.call(e)
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

            function ge(e) {
                if (!ke(e)) return function (e) {
                    var t = [];
                    if (null != e) for (var n in Object(e)) t.push(n);
                    return t
                }(e);
                var t = Ne(e), n = [];
                for (var i in e) ("constructor" != i || !t && L.call(e, i)) && n.push(i);
                return n
            }

            function ye(e, t, n, i, r) {
                e !== t && he(t, function (o, s) {
                    if (ke(o)) r || (r = new se), function (e, t, n, i, r, o, s) {
                        var a = x(e, n), l = x(t, n), c = s.get(l);
                        if (c) return void le(e, n, c);
                        var u = o ? o(a, l, n + "", e, t, s) : void 0, d = void 0 === u;
                        if (d) {
                            var h = xe(l), p = !h && Se(l), v = !h && !p && Pe(l);
                            u = l, h || p || v ? xe(a) ? u = a : Ee(A = a) && _e(A) ? u = function (e, t) {
                                var n = -1, i = e.length;
                                t || (t = Array(i));
                                for (; ++n < i;) t[n] = e[n];
                                return t
                            }(a) : p ? (d = !1, u = function (e, t) {
                                if (t) return e.slice();
                                var n = e.length, i = Z ? Z(n) : new e.constructor(n);
                                return e.copy(i), i
                            }(l, !0)) : v ? (d = !1, m = l, g = !0 ? (y = m.buffer, C = new y.constructor(y.byteLength), new G(C).set(new G(y)), C) : m.buffer, u = new m.constructor(g, m.byteOffset, m.length)) : u = [] : function (e) {
                                if (!Ee(e) || pe(e) != f) return !1;
                                var t = K(e);
                                if (null === t) return !0;
                                var n = L.call(t, "constructor") && t.constructor;
                                return "function" == typeof n && n instanceof n && W.call(n) == z
                            }(l) || Re(l) ? (u = a, Re(a) ? u = function (e) {
                                return function (e, t, n, i) {
                                    var r = !n;
                                    n || (n = {});
                                    var o = -1, s = t.length;
                                    for (; ++o < s;) {
                                        var a = t[o], l = i ? i(n[a], e[a], a, n, e) : void 0;
                                        void 0 === l && (l = e[a]), r ? de(n, a, l) : ce(n, a, l)
                                    }
                                    return n
                                }(e, We(e))
                            }(a) : (!ke(a) || i && De(a)) && (u = function (e) {
                                return "function" != typeof e.constructor || Ne(e) ? {} : ne(K(e))
                            }(l))) : d = !1
                        }
                        var m, g, y, C;
                        var A;
                        d && (s.set(l, u), r(u, l, i, o, s), s.delete(l));
                        le(e, n, u)
                    }(e, t, s, n, ye, i, r); else {
                        var a = i ? i(x(e, s), o, s + "", e, t, r) : void 0;
                        void 0 === a && (a = o), le(e, s, a)
                    }
                }, We)
            }

            function Ce(e, t) {
                return Te(function (e, t, n) {
                    return t = q(void 0 === t ? e.length - 1 : t, 0), function () {
                        for (var i = arguments, r = -1, o = q(i.length - t, 0), s = Array(o); ++r < o;) s[r] = i[t + r];
                        r = -1;
                        for (var a = Array(t + 1); ++r < t;) a[r] = i[r];
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
                }(e, t, Oe), e + "")
            }

            function Ae(e, t) {
                var n, i, r = e.__data__;
                return ("string" == (i = typeof(n = t)) || "number" == i || "symbol" == i || "boolean" == i ? "__proto__" !== n : null === n) ? r["string" == typeof t ? "string" : "hash"] : r.map
            }

            function Me(e, t) {
                var n = function (e, t) {
                    return null == e ? void 0 : e[t]
                }(e, t);
                return me(n) ? n : void 0
            }

            function be(e, t) {
                var n = typeof e;
                return !!(t = null == t ? s : t) && ("number" == n || "symbol" != n && m.test(e)) && e > -1 && e % 1 == 0 && e < t
            }

            function Ne(e) {
                var t = e && e.constructor;
                return e === ("function" == typeof t && t.prototype || E)
            }

            var Te = function (e) {
                var t = 0, n = 0;
                return function () {
                    var i = $(), s = o - (i - n);
                    if (n = i, s > 0) {
                        if (++t >= r) return arguments[0]
                    } else t = 0;
                    return e.apply(void 0, arguments)
                }
            }(Q ? function (e, t) {
                return Q(e, "toString", {
                    configurable: !0, enumerable: !1, value: (n = t, function () {
                        return n
                    }), writable: !0
                });
                var n
            } : Oe);

            function we(e, t) {
                return e === t || e != e && t != t
            }

            var Re = ve(function () {
                return arguments
            }()) ? ve : function (e) {
                return Ee(e) && L.call(e, "callee") && !Y.call(e, "callee")
            }, xe = Array.isArray;

            function _e(e) {
                return null != e && Ie(e.length) && !De(e)
            }

            var Se = J || function () {
                return !1
            };

            function De(e) {
                if (!ke(e)) return !1;
                var t = pe(e);
                return t == c || t == u || t == l || t == h
            }

            function Ie(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= s
            }

            function ke(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t)
            }

            function Ee(e) {
                return null != e && "object" == typeof e
            }

            var Pe = R ? function (e) {
                return function (t) {
                    return e(t)
                }
            }(R) : function (e) {
                return Ee(e) && Ie(e.length) && !!g[pe(e)]
            };

            function We(e) {
                return _e(e) ? ae(e, !0) : ge(e)
            }

            var Le, Be = (Le = function (e, t, n) {
                ye(e, t, n)
            }, Ce(function (e, t) {
                var n = -1, i = t.length, r = i > 1 ? t[i - 1] : void 0, o = i > 2 ? t[2] : void 0;
                for (r = Le.length > 3 && "function" == typeof r ? (i--, r) : void 0, o && function (e, t, n) {
                    if (!ke(n)) return !1;
                    var i = typeof t;
                    return !!("number" == i ? _e(n) && be(t, n.length) : "string" == i && t in n) && we(n[t], e)
                }(t[0], t[1], o) && (r = i < 3 ? void 0 : r, i = 1), e = Object(e); ++n < i;) {
                    var s = t[n];
                    s && Le(e, s, n, r)
                }
                return e
            }));

            function Oe(e) {
                return e
            }

            e.exports = Be
        }).call(this, n(87)(e))
    }, 6: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(7), r = n(18), o = n(19), s = n(24), a = n(25);
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

            class c {
                constructor() {
                    this.jsCallbacks = new Map, this.eventJsCallbakcs = new Map, this.jsRegisterFunctions = new Map, this.targetCommunitorInfo = a.CommonIPCRenderer.rendererCommunicator.getCommunicatorInfoByContext(s.CommonIPCBase.mainRendererContext), this.bindMsgListeners(), this.notifyNativeCallReady()
                }

                CallNativeFunction(t, ...n) {
                    do {
                        if (i.isNullOrUndefined(t) || 0 === t.length) {
                            r.error("funcName is empty");
                            break
                        }
                        r.information("funcName = ", t), this.printArgs(n);
                        let s = l;
                        for (let t = 0; t < n.length; ++t) if (i.isFunction(n[t])) {
                            let i = e.idGenerator.generateId(), r = n[t];
                            this.jsCallbacks.set(i, r), t === n.length - 1 ? (s = i, n.pop()) : n[t] = i
                        }
                        a.CommonIPCRenderer.rendererCommunicator.sendMessageToRenderer(this.targetCommunitorInfo.id, {
                            name: o.CommonIPCMessage.msgNCCallNativeFunction,
                            args: [t, s].concat(n)
                        })
                    } while (0)
                }

                AttachNativeEvent(t, n) {
                    let o = void 0;
                    do {
                        if (i.isNullOrUndefined(t) || 0 === t.length) {
                            r.error("eventName is empty");
                            break
                        }
                        if (i.isNullOrUndefined(n)) {
                            r.error("callback is empty");
                            break
                        }
                        let s = e.idGenerator.generateId();
                        if (e.idGenerator.isInvalidId(s)) {
                            r.error("id error");
                            break
                        }
                        if (this.eventJsCallbakcs.has(t)) this.eventJsCallbakcs.get(t).set(s, n); else {
                            let e = new Map;
                            e.set(s, n), this.eventJsCallbakcs.set(t, e)
                        }
                        o = s
                    } while (0);
                    return o
                }

                DetachNativeEvent(e, t) {
                    do {
                        if (i.isNullOrUndefined(e) || 0 === e.length) {
                            r.error("eventName is empty");
                            break
                        }
                        if (i.isNullOrUndefined(t)) {
                            r.error("callback is empty");
                            break
                        }
                        if (!this.eventJsCallbakcs.has(e)) {
                            r.error(`event: ${e} doesnot have listener`);
                            break
                        }
                        if (!this.eventJsCallbakcs.get(e).has(t)) {
                            r.error(`event: ${e} doesnot have the listener of id=${t}`);
                            break
                        }
                        this.eventJsCallbakcs.get(e).delete(t)
                    } while (0)
                }

                CheckNativeFunction(t, n) {
                    do {
                        if (i.isNullOrUndefined(t) || 0 === t.length) {
                            r.error("funcName is empty");
                            break
                        }
                        if (i.isNullOrUndefined(n)) {
                            r.error("callback is empty");
                            break
                        }
                        r.information("funcName = ", t);
                        let s = e.idGenerator.generateId();
                        this.jsCallbacks.set(s, n), a.CommonIPCRenderer.rendererCommunicator.sendMessageToRenderer(this.targetCommunitorInfo.id, {
                            name: o.CommonIPCMessage.msgNCCheckNativeFunction,
                            args: [t, s]
                        })
                    } while (0)
                }

                RegisterJSFunction(e, n) {
                    let o = t.ParamaterError;
                    do {
                        if (i.isNullOrUndefined(e) || 0 === e.length) {
                            r.error("funcName is empty");
                            break
                        }
                        if (i.isNullOrUndefined(n)) {
                            r.error("jsFunc is empty");
                            break
                        }
                        this.jsRegisterFunctions.set(e, n), o = t.Success
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

                handleCallJsFunctionById(t) {
                    do {
                        let n = t[0];
                        if (!i.isNumber(n)) {
                            r.error(`id error id = ${n}`);
                            break
                        }
                        if (e.idGenerator.isInvalidId(n)) {
                            r.error(`id = ${n} invalid`);
                            break
                        }
                        if (!this.jsCallbacks.has(n)) {
                            r.error(`jsCallbacks[${n}] is null`);
                            break
                        }
                        t.splice(0, 1), this.jsCallbacks.get(n).apply(null, t)
                    } while (0)
                }

                handleCallJsFunctionByName(e) {
                    do {
                        let t = e[0];
                        if (!i.isString(t)) {
                            r.error(`funcName error funcName = ${t}`);
                            break
                        }
                        if (!this.jsRegisterFunctions.has(t)) {
                            r.error(`jsRegisterFunctions[${t}] is null`);
                            break
                        }
                        e.splice(0, 1), this.jsRegisterFunctions.get(t).apply(null, e)
                    } while (0)
                }

                handleNativeFireEvent(e) {
                    do {
                        let t = e[0];
                        if (!i.isString(t)) {
                            r.warning(`eventName error eventName = ${t}`);
                            break
                        }
                        if (!this.eventJsCallbakcs.has(t)) {
                            r.warning(`eventJsCallbakcs[${t}] is null`);
                            break
                        }
                        e.shift(), this.eventJsCallbakcs.get(t).forEach((t, n, o) => {
                            r.information(`value = ${t}, key = ${n}, map = ${o}`), i.isNullOrUndefined(t) || t.apply(null, e)
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
                    for (let t in e) r.information(`index ${t} = `, e[t])
                }
            }

            e.NativeCallImpl = c, e.nativeCall = new c
        }(t.NativeCallModule || (t.NativeCallModule = {}))
    }, 632: function (e, t, n) {
        "use strict";
        var i = function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", {staticClass: "xlx-personal-main"}, [n("div", {staticClass: "xlx-personal-menu"}, [n("a", {
                staticClass: "xlx-personal-icon xlx-personal-icon__menu",
                attrs: {href: "javascript:;"},
                on: {click: e.showMenu, mouseenter: e.showMenu, mouseleave: e.hideMenu}
            })]), e._v(" "), n("div", {staticClass: "xlx-personal-information"}, [n("div", {staticClass: "xlx-personal-information__avatar"}, [n("a", {
                attrs: {href: "javascript:;"},
                on: {
                    click: function (t) {
                        e.onClick("header")
                    }
                }
            }, [n("img", {
                attrs: {
                    src: e.imgUrl,
                    alt: "头像",
                    draggable: "false"
                }
            })])]), e._v(" "), n("div", {
                staticClass: "xlx-personal-information__name",
                class: {"is-vip ": e.isVip}
            }, [n("h4", [n("a", {
                attrs: {href: "javascript:;", title: e.userNick}, on: {
                    click: function (t) {
                        e.onClick("nick")
                    }
                }
            }, [e._v(e._s(e.userNick))])])]), e._v(" "), n("div", {staticClass: "xlx-personal-information__vip"}, [e.vipData ? n("vip-icon", {
                staticStyle: {cursor: "pointer"},
                attrs: {vipData: e.vipData, size: "normal", disabled: 0 === e.isVip},
                nativeOn: {
                    click: function (t) {
                        e.onClick("vip")
                    }
                }
            }) : e._e(), e._v(" "), n("a", {
                class: e.userYearIcon,
                attrs: {href: "javascript:;"},
                on: {
                    click: function (t) {
                        e.onClick("nian")
                    }
                }
            })], 1), e._v(" "), n("div", {staticClass: "xlx-personal-information__data"}, [n("a", {
                attrs: {
                    href: "javascript:;",
                    title: e.scoreInfo
                }, on: {
                    click: function (t) {
                        e.onClick("level")
                    }
                }
            }, [n("i", {staticClass: "xlx-personal-icon xlx-personal-icon__badge"}), e._v(" "), n("em", [e._v(e._s(e.strUserLevel))])]), e._v(" "), n("a", {
                attrs: {
                    href: "javascript:;",
                    title: e.userLevelupNum
                }, on: {
                    click: function (t) {
                        e.onClick("levelupNum")
                    }
                }
            }, [n("i", {staticClass: "xlx-personal-icon xlx-personal-icon__time"}), e._v(" "), n("em", [e._v(e._s(e.strLevelupNum))])]), e._v(" "), n("a", {
                attrs: {
                    href: "javascript:;",
                    title: e.userOrder
                }, on: {
                    click: function (t) {
                        e.onClick("order")
                    }
                }
            }, [n("i", {staticClass: "xlx-personal-icon xlx-personal-icon__rank"}), e._v(" "), n("em", [e._v(e._s(e.order))])])]), e._v(" "), n()]), e._v(" "), n("div", {staticClass: "xlx-personal-activity"}, [n("p", [e._v(e._s(e.vipText))]), e._v(" "), n("a", {
                staticClass: "",
                attrs: {draggable: "false", href: "javascript:;"},
                on: {
                    click: function (t) {
                        e.onClick("vipBtn")
                    }
                }
            })])])
        }, r = [];
        i._withStripped = !0, n.d(t, "a", function () {
            return i
        }), n.d(t, "b", function () {
            return r
        })
    }, 69: function (e, t, n) {
        "use strict";
        var i = this && this.__awaiter || function (e, t, n, i) {
            return new (n || (n = Promise))(function (r, o) {
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
                    e.done ? r(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(s, a)
                }

                l((i = i.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const r = n(3), o = n(1).default.getLogger("GetSkinInfo");
        let s;
        (function () {
            return i(this, void 0, void 0, function* () {
                if ("renderer" === process.type) {
                    o.information("renderer process");
                    const e = yield Promise.resolve().then(() => n(15)), t = yield Promise.resolve().then(() => n(6));
                    e.default("GetSkinInfo").then(e => {
                        s = e, o.information("send OnChangeSkin", e)
                    }).catch(e => {
                        o.warning(e)
                    }), t.NativeCallModule.nativeCall.AttachNativeEvent("OnChangeSkin", e => {
                        s = e, o.information("send OnChangeSkin", e)
                    })
                } else "browser" === process.type && (o.information("main process"), r.ipcMain.on("OnChangeSkin", (e, t) => {
                    o.information("OnChangeSkin", t), s = t
                }))
            })
        })().catch(e => {
            o.information(e)
        }), t.default = function () {
            return s
        }
    }, 7: function (e, t) {
        e.exports = require("util")
    }, 86: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
            function t(e) {
                let t = e.toString(16).toUpperCase();
                return t.length < 2 && (t = "0" + t), t
            }

            function n(e, n, i, r) {
                return "0x" + t(r) + t(e) + t(n) + t(i)
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
    }, 89: function (e, t) {
        !function (e) {
            var t,
                n = '<svg><symbol id="td-icon-svg-file" viewBox="0 0 1204 1024"><path d="M180.705882 1024c-102.4 0-180.705882-78.305882-180.705882-180.705882V180.705882c0-102.4 78.305882-180.705882 180.705882-180.705882h240.941177c102.4 0 180.705882 78.305882 180.705882 180.705882h421.647059c102.4 0 180.705882 78.305882 180.705882 180.705883v481.882353c0 102.4-78.305882 180.705882-180.705882 180.705882H180.705882z" fill="#FFC25A" ></path><path d="M301.176471 361.411765h602.352941c66.258824 0 120.470588 54.211765 120.470588 120.470588v361.411765c0 66.258824-54.211765 120.470588-120.470588 120.470588H301.176471c-66.258824 0-120.470588-54.211765-120.470589-120.470588V481.882353c0-66.258824 54.211765-120.470588 120.470589-120.470588z" fill="#FFFFFF" ></path><path d="M180.705882 542.117647h843.294118c102.4 0 180.705882 78.305882 180.705882 180.705882v120.470589c0 102.4-78.305882 180.705882-180.705882 180.705882H180.705882c-102.4 0-180.705882-78.305882-180.705882-180.705882v-120.470589c0-102.4 78.305882-180.705882 180.705882-180.705882z" fill="#FFD68F" ></path></symbol></svg>',
                i = function (e, t) {
                    t.firstChild ? function (e, t) {
                        t.parentNode.insertBefore(e, t)
                    }(e, t.firstChild) : t.appendChild(e)
                };
            if ((t = document.getElementsByTagName("script"))[t.length - 1].getAttribute("data-injectcss") && !e.__iconfont__svg__cssinject__) {
                e.__iconfont__svg__cssinject__ = !0;
                try {
                    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")
                } catch (e) {
                    console && console.log(e)
                }
            }
            !function (t) {
                if (document.addEventListener) if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) setTimeout(t, 0); else {
                    var n = function () {
                        document.removeEventListener("DOMContentLoaded", n, !1), t()
                    };
                    document.addEventListener("DOMContentLoaded", n, !1)
                } else document.attachEvent && function (e, t) {
                    var n = e.document, i = !1, r = function () {
                        i || (i = !0, t())
                    }, o = function () {
                        try {
                            n.documentElement.doScroll("left")
                        } catch (e) {
                            return void setTimeout(o, 50)
                        }
                        r()
                    };
                    o(), n.onreadystatechange = function () {
                        "complete" == n.readyState && (n.onreadystatechange = null, r())
                    }
                }(e, t)
            }(function () {
                var e, t;
                (e = document.createElement("div")).innerHTML = n, n = null, (t = e.getElementsByTagName("svg")[0]) && (t.setAttribute("aria-hidden", "true"), t.style.position = "absolute", t.style.width = 0, t.style.height = 0, t.style.overflow = "hidden", i(t, document.body))
            })
        }(window)
    }, 9: function (e, t, n) {
        "use strict";
        var i = this && this.__awaiter || function (e, t, n, i) {
            return new (n || (n = Promise))(function (r, o) {
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
                    e.done ? r(e.value) : new n(function (t) {
                        t(e.value)
                    }).then(s, a)
                }

                l((i = i.apply(e, t || [])).next())
            })
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const r = n(20), o = n(2), s = n(7).promisify, a = n(1).default.getLogger("Thunder.base.fs-utilities");
        !function (e) {
            function t(e) {
                return i(this, void 0, void 0, function* () {
                    let t = !1;
                    if (void 0 !== e) {
                        const n = s(r.access);
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
                        const n = s(r.mkdir);
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
                        const n = s(r.rmdir);
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
                    let t = !1;
                    if (void 0 !== e) {
                        const n = s(r.unlink);
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
                    let t = null;
                    if (void 0 !== e) {
                        const n = s(r.readdir);
                        try {
                            t = yield n(e)
                        } catch (e) {
                            a.warning(e)
                        }
                    }
                    return t
                })
            }

            function f(e) {
                return i(this, void 0, void 0, function* () {
                    let t = null;
                    if (void 0 !== e) {
                        const n = s(r.lstat);
                        try {
                            t = yield n(e)
                        } catch (e) {
                            a.warning(e)
                        }
                    }
                    return t
                })
            }

            function h(e, t) {
                return i(this, void 0, void 0, function* () {
                    let n = !1;
                    if (void 0 !== e && void 0 !== t) {
                        let i = o.join(e, t), r = yield f(i);
                        n = null !== r && r.isDirectory() ? yield p(i) : yield u(i)
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
                            let t = yield d(e);
                            for (let i = 0; i < t.length; i++) n = (yield h(e, t[i])) && n;
                            (n || 0 === t.length) && (n = (yield c(e)) && n)
                        }
                    }
                    return n
                })
            }

            function v(e) {
                return i(this, void 0, void 0, function* () {
                    let n = !1;
                    return a.information("mkdirsAW", e), void 0 !== e && ((yield t(e)) ? n = !0 : o.dirname(e) === e ? n = !1 : (yield v(o.dirname(e))) && (n = yield l(e))), n
                })
            }

            function m(e, n) {
                return i(this, void 0, void 0, function* () {
                    let i;
                    if (e.toLowerCase() !== n.toLowerCase() && (yield t(e))) {
                        let t = r.createReadStream(e), o = r.createWriteStream(n);
                        i = new Promise(e => {
                            t.pipe(o).on("finish", () => {
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
                        const n = s(r.readFile);
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
                        const i = s(r.writeFile);
                        try {
                            yield i(e, t), n = !0
                        } catch (e) {
                            a.warning(e)
                        }
                    }
                    return n
                })
            }, e.existsAW = t, e.mkdirAW = l, e.rmdirAW = c, e.unlinkAW = u, e.readdirAW = d, e.lstatAW = f, e.rmdirsAW = p, e.mkdirsAW = v, e.renameAW = function (e, t) {
                return i(this, void 0, void 0, function* () {
                    if (void 0 !== e && void 0 !== t) {
                        const n = s(r.rename);
                        try {
                            yield n(e, t)
                        } catch (e) {
                            a.warning(e)
                        }
                    }
                })
            }, e.copyFileAW = m, e.copyDirsAW = function e(n, r) {
                return i(this, void 0, void 0, function* () {
                    let i = !1, s = yield f(n);
                    if (s.isDirectory()) {
                        i = yield v(r);
                        let a = yield d(n);
                        for (let l = 0; l < a.length; l++) {
                            let c = o.join(n, a[l]), u = o.join(r, a[l]);
                            (i = yield t(c)) && (i = (s = yield f(c)).isDirectory() ? yield e(c, u) : yield m(c, u))
                        }
                    }
                    return i
                })
            }, e.mkdtempAW = function () {
                return i(this, void 0, void 0, function* () {
                    let e = !1;
                    const t = s(r.mkdtemp), i = (yield Promise.resolve().then(() => n(16))).tmpdir();
                    try {
                        e = yield t(`${i}${o.sep}`)
                    } catch (e) {
                        a.warning(e)
                    }
                    return e
                })
            }
        }(t.FileSystemAWNS || (t.FileSystemAWNS = {}))
    }, 980: function (e, t, n) {
        n(40), e.exports = n(981)
    }, 981: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(25);
        i.CommonIPCRenderer.rendererCommunicator.initialize("personalInfoRendererContext"), i.CommonIPCRenderer.rendererCommunicator.connect();
        const r = n(41), o = n(32);
        n(42), n(89);
        const s = n(51), a = n(46), l = n(982);
        n(55);
        const c = n(1).default.getLogger("PersonalInfoRenderer");
        r.PerformanceMonitorStatNS.init("personal-info-renderer"), a.ThunderToolsNS.enableDragOpenFile(), a.ThunderToolsNS.enableDevTools().catch(e => {
            c.warning(e)
        }), o.default.use(s.default), o.default.config.ignoredElements = ["webview"], new o.default({
            components: {PersonalInfo: l.default},
            render: e => e("personal-info")
        }).$mount("#app")
    }, 982: function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n(632), r = n(464);
        for (var o in r) "default" !== o && function (e) {
            n.d(t, e, function () {
                return r[e]
            })
        }(o);
        n(983), n(226);
        var s = n(0), a = Object(s.a)(r.default, i.a, i.b, !1, null, null, null);
        a.options.__file = "src\\personal-info-renderer\\app.vue", t.default = a.exports
    }, 983: function (e, t, n) {
        "use strict";
        var i = n(1155);
        n.n(i).a
    }
});
//# sourceMappingURL=renderer.js.map
/*! ThunderX BY LUOCHENZHIMU */
/*! Last updated on 2018/12/17 */
/*! https://www.luochenzhimu.com */