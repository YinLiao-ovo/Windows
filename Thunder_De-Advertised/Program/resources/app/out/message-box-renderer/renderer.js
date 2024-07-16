/*! ThunderX BY LUOCHENZHIMU */
/*! Last updated on 2018/12/18 */
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
    }, n.p = "", n(n.s = 984)
}([function (e, t, n) {
    "use strict";

    function i(e, t, n, i, o, r, s, a) {
        var l, c = "function" == typeof e ? e.options : e;
        if (t && (c.render = t, c.staticRenderFns = n, c._compiled = !0), i && (c.functional = !0), r && (c._scopeId = "data-v-" + r), s ? (l = function (e) {
            (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), o && o.call(this, e), e && e._registeredComponents && e._registeredComponents.add(s)
        }, c._ssrRegister = l) : o && (l = a ? function () {
            o.call(this, this.$root.$options.shadowRoot)
        } : o), l) if (c.functional) {
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
}, function (e, t, n) {
    e.exports = n(12)(64)
}, function (e, t) {
    e.exports = require("path")
}, function (e, t) {
    e.exports = require("electron")
}, function (e, t, n) {
    e.exports = n(12)(127)
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e) {
        return require(e)
    }
}, function (e, t, n) {
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

        class c {
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

        e.NativeCallImpl = c, e.nativeCall = new c
    }(t.NativeCallModule || (t.NativeCallModule = {}))
}, function (e, t) {
    e.exports = require("util")
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
        let t, n, i, o, r, s, a, l, c, u, d, f, p, h, v, m, g, _;
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
        }(c = e.TaskAttribute || (e.TaskAttribute = {})), function (e) {
            e[e.UnKnown = 0] = "UnKnown", e[e.SrcTotal = 1] = "SrcTotal", e[e.SrcUsing = 2] = "SrcUsing", e[e.FileSize = 4] = "FileSize", e[e.ReceivedSize = 8] = "ReceivedSize", e[e.DownloadSize = 16] = "DownloadSize", e[e.CompletionTime = 32] = "CompletionTime", e[e.DownloadingPeriod = 64] = "DownloadingPeriod", e[e.Progress = 128] = "Progress", e[e.RecycleTime = 256] = "RecycleTime", e[e.FileCreated = 512] = "FileCreated", e[e.Forbidden = 1024] = "Forbidden", e[e.UserRead = 2048] = "UserRead", e[e.OpenOnComplete = 4096] = "OpenOnComplete", e[e.DownloadSubTask = 8192] = "DownloadSubTask", e[e.TaskName = 16384] = "TaskName", e[e.SavePath = 32768] = "SavePath", e[e.Cid = 65536] = "Cid", e[e.Gcid = 131072] = "Gcid", e[e.UserData = 262144] = "UserData", e[e.CategoryViewId = 524288] = "CategoryViewId", e[e.ErrorCode = 1048576] = "ErrorCode", e[e.TaskSpeed = 2097152] = "TaskSpeed", e[e.ChannelInfo = 4194304] = "ChannelInfo"
        }(u = e.TaskDetailChangedFlags || (e.TaskDetailChangedFlags = {})), function (e) {
            e[e.UnKnown = 0] = "UnKnown"
        }(d = e.BtSubFileDetailChangedFlags || (e.BtSubFileDetailChangedFlags = {})), function (e) {
            e[e.UnKnown = 0] = "UnKnown"
        }(f = e.GroupTaskSubFileDetailChangedFlags || (e.GroupTaskSubFileDetailChangedFlags = {})), function (e) {
            e[e.NumberStrart = 0] = "NumberStrart", e[e.TaskId = 1] = "TaskId", e[e.FileStatus = 2] = "FileStatus", e[e.DownloadSize = 3] = "DownloadSize", e[e.FileSize = 4] = "FileSize", e[e.EnableDcdn = 5] = "EnableDcdn", e[e.ErrorCode = 6] = "ErrorCode", e[e.DcdnStatus = 7] = "DcdnStatus", e[e.RealIndex = 8] = "RealIndex", e[e.FileOffset = 9] = "FileOffset", e[e.Visible = 10] = "Visible", e[e.Download = 11] = "Download", e[e.NumberEnd = 12] = "NumberEnd", e[e.StringStart = 13] = "StringStart", e[e.FinalName = 14] = "FinalName", e[e.RelativePath = 15] = "RelativePath", e[e.FileName = 16] = "FileName", e[e.FilePath = 17] = "FilePath", e[e.Cid = 18] = "Cid", e[e.Gcid = 19] = "Gcid", e[e.StringEnd = 20] = "StringEnd"
        }(p = e.BtFileAttribute || (e.BtFileAttribute = {})), function (e) {
            e[e.P2spUrl = 0] = "P2spUrl", e[e.BtInfoId = 1] = "BtInfoId", e[e.EmuleFileHash = 2] = "EmuleFileHash", e[e.MagnetUrl = 3] = "MagnetUrl", e[e.GroupTaskName = 4] = "GroupTaskName"
        }(h = e.KeyType || (e.KeyType = {})), function (e) {
            e[e.NameInclude = 1] = "NameInclude", e[e.BtDisplayNameInclude = 2] = "BtDisplayNameInclude"
        }(v = e.SearchKeyType || (e.SearchKeyType = {})), function (e) {
            e[e.All = 0] = "All", e[e.CommonForeground = 1] = "CommonForeground", e[e.CommonBackground = 2] = "CommonBackground", e[e.Temporary = 3] = "Temporary", e[e.PreDownload = 4] = "PreDownload", e[e.PrivateForeground = 5] = "PrivateForeground"
        }(m = e.KeyFilter || (e.KeyFilter = {})), function (e) {
            e[e.Unknown = -1] = "Unknown", e[e.LoadTaskBasic = 0] = "LoadTaskBasic", e[e.Create = 1] = "Create", e[e.Recycle = 2] = "Recycle", e[e.Recover = 3] = "Recover", e[e.ReDownload = 4] = "ReDownload", e[e.MoveThoughCategory = 5] = "MoveThoughCategory"
        }(g = e.TaskInsertReason || (e.TaskInsertReason = {})), function (e) {
            e[e.Unknown = -1] = "Unknown", e[e.ContextMenu = 0] = "ContextMenu", e[e.Button = 1] = "Button", e[e.TaskDetail = 2] = "TaskDetail", e[e.DownloadMagnet = 3] = "DownloadMagnet", e[e.ToolbarButton = 4] = "ToolbarButton", e[e.SelectDownloadLists = 5] = "SelectDownloadLists", e[e.DeleteTask = 6] = "DeleteTask"
        }(_ = e.TaskStopReason || (e.TaskStopReason = {}))
    }(t.DownloadKernel || (t.DownloadKernel = {}))
}, function (e, t, n) {
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

        function c(e) {
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

        function u(e) {
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

        function d(e) {
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

        function f(e) {
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

        function p(e, t) {
            return i(this, void 0, void 0, function* () {
                let n = !1;
                if (void 0 !== e && void 0 !== t) {
                    let i = r.join(e, t), o = yield f(i);
                    n = null !== o && o.isDirectory() ? yield h(i) : yield u(i)
                }
                return n
            })
        }

        function h(e) {
            return i(this, void 0, void 0, function* () {
                let n = !1;
                if (void 0 !== e) {
                    if (yield t(e)) {
                        n = !0;
                        let t = yield d(e);
                        for (let i = 0; i < t.length; i++) n = (yield p(e, t[i])) && n;
                        (n || 0 === t.length) && (n = (yield c(e)) && n)
                    }
                }
                return n
            })
        }

        function v(e) {
            return i(this, void 0, void 0, function* () {
                let n = !1;
                return a.information("mkdirsAW", e), void 0 !== e && ((yield t(e)) ? n = !0 : r.dirname(e) === e ? n = !1 : (yield v(r.dirname(e))) && (n = yield l(e))), n
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
        }, e.existsAW = t, e.mkdirAW = l, e.rmdirAW = c, e.unlinkAW = u, e.readdirAW = d, e.lstatAW = f, e.rmdirsAW = h, e.mkdirsAW = v, e.renameAW = function (e, t) {
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
                let i = !1, s = yield f(n);
                if (s.isDirectory()) {
                    i = yield v(o);
                    let a = yield d(n);
                    for (let l = 0; l < a.length; l++) {
                        let c = r.join(n, a[l]), u = r.join(o, a[l]);
                        (i = yield t(c)) && (i = (s = yield f(c)).isDirectory() ? yield e(c, u) : yield m(c, u))
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
}, function (e, t, n) {
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
    const o = n(3), r = n(2), s = n(1), a = n(9), l = n(17), c = s.default.getLogger("Thunder.Util"),
        u = "Thunder Network\\Thunder7.9\\";

    function d(e) {
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
            let t = 0, n = "", i = !1, o = [], r = e.length;
            for (let s = 0; s < r; s++) {
                let a = e[s];
                if ('"' !== a && "'" !== a || ("" === n ? (i = !0, n = a) : n === a && (i = !1, n = "")), " " !== a || i || s === r - 1) {
                    if (s === r - 1) {
                        let n = e.substring(t);
                        "" !== n.trim() && o.push(d(n))
                    }
                } else {
                    let n = e.substring(t, s);
                    "" !== n.trim() && o.push(d(n)), t = s + 1
                }
            }
            return o
        }, e.getThunderTempPath = function (e, t) {
            return i(this, void 0, void 0, function* () {
                const i = yield Promise.resolve().then(() => n(16));
                let o = r.join(i.tmpdir(), u);
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
            let c = new RegExp(a, "gi");
            return r = e.replace(c, e => '<span style= "color:' + n + '">' + e + "</span>")
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
}, function (e, t, n) {
    "use strict";
    var i = n(71), o = n(118), r = Object.prototype.toString;

    function s(e) {
        return "[object Array]" === r.call(e)
    }

    function a(e) {
        return null !== e && "object" == typeof e
    }

    function l(e) {
        return "[object Function]" === r.call(e)
    }

    function c(e, t) {
        if (null !== e && void 0 !== e) if ("object" != typeof e && (e = [e]), s(e)) for (var n = 0, i = e.length; n < i; n++) t.call(null, e[n], n, e); else for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e)
    }

    e.exports = {
        isArray: s, isArrayBuffer: function (e) {
            return "[object ArrayBuffer]" === r.call(e)
        }, isBuffer: o, isFormData: function (e) {
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
            return "[object Date]" === r.call(e)
        }, isFile: function (e) {
            return "[object File]" === r.call(e)
        }, isBlob: function (e) {
            return "[object Blob]" === r.call(e)
        }, isFunction: l, isStream: function (e) {
            return a(e) && l(e.pipe)
        }, isURLSearchParams: function (e) {
            return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
        }, isStandardBrowserEnv: function () {
            return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document
        }, forEach: c, merge: function e() {
            var t = {};

            function n(n, i) {
                "object" == typeof t[i] && "object" == typeof n ? t[i] = e(t[i], n) : t[i] = n
            }

            for (var i = 0, o = arguments.length; i < o; i++) c(arguments[i], n);
            return t
        }, extend: function (e, t, n) {
            return c(t, function (t, o) {
                e[o] = n && "function" == typeof t ? i(t, n) : t
            }), e
        }, trim: function (e) {
            return e.replace(/^\s*/, "").replace(/\s*$/, "")
        }
    }
}, function (e, t) {
    e.exports = vendor_f06ab6e95552376989e1
}, function (e, t, n) {
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

        e.trackEvent = function (e, t = "", n = "", i = 0, o = 0, l = 0, c = 0, u = "", d = 0) {
            let f = 0;
            do {
                if (void 0 === e) {
                    f = 1;
                    break
                }
                let p = a(u);
                f = s.trackEvent(e, t, n, i, o, l, c, p, d), r.information(e, t, n, i, o, l, c, p, d)
            } while (0);
            return f
        }, e.trackClick = t, e.trackShow = function (e) {
            t(e)
        }, e.setUserID = function (e = 0, t = 0) {
            s.setUserID(e, t)
        }
    }(t.XLStatNS || (t.XLStatNS = {}))
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
        e.channelRMNewTaskReadyForSetTaskData = "RM_NEWTASK_READYRORSETTASKDATA", e.channelRMNewTaskSetTaskData = "RM_NEWTASK_SETTASKDATA", e.channelRMPreNewTaskSetTaskData = "RM_PRENEWTASK_SETTASKDATA", e.channelRMNewTaskCreateNewTask = "RM_NEWTASK_CREATENEWTASK", e.channelRMNewTaskSetBTInfo = "RM_NEWTASK_SETBTINFO", e.channelRMNewTaskDownloadTorrent = "RM_NEW_TASK_DOWNLOAD_TORRENT", e.channelRMNewTaskCreateBtTask = "RM_NEWTASK_CRATEBTTASK", e.channelRMNewTaskCancleMagnet = "RM_NEWTASK_CANCLE_MAGNET", e.channelRMImportTorrent = "RM_NEWTASK_IMPORT_TORRENT", e.channelRMGetConfigValueResolve = "RM_GET_CONFIG_VALUE_RESOLVE", e.channelRMGetConfigValueReject = "RM_GET_CONFIG_VALUE_REJECT", e.channelMRTrayMenuClick = "MR_TRAY_MENU_CLICK", e.channelMRNewTaskMagnetTaskCreated = "MR_NEW_TASK_MAGNET_TASK_CREATED", e.channelMRNewTaskDownloadTorrentResult = "MR_NEW_TASK_DOWNLOAD_TORRENT_RESULT", e.channelMRNewTaskCreateNewTaskResult = "MR_NEWTASK_CREATENEWTASK_RESULT", e.channelMRNewTaskCreateBtTaskResult = "RM_NEWTASK_CRATEBTTASK_RESULT", e.channelMRGetConfigValue = "MR_GET_CONFIG_VALUE", e.channelMRSetConfigValue = "MR_SET_CONFIG_VALUE", e.channelRMCommitPlanTask = "RM_PLANTASK_COMMIT", e.channelRMPerformePlanTask = "RM_PLANTASK_PERFORME", e.channelRMProcessSend = "RM_RENDER_PROCESS_INFO", e.channelRMGetPrivateSpaceInfo = "RM_RENDER_GET_PRIVATE_SPACE_INFO", e.channelMRGetPrivateSpaceInfoResult = "MR_RENDER_GET_PRIVATE_SPACE_INFO_RESULT", e.channelRMFileCopy = "RM_FILE_COPY", e.channelRMFileMove = "RM_FILE_MOVE", e.channelMRFileCopyResult = "MR_FILE_COPY_RESULT", e.channelMRFileMoveResult = "MR_FILE_MOVE_RESULT", e.channelRMGetSutitleByCid = "RM_RENDER_GET_SUBTITLE_BY_CID", e.channelMRGetSutitleByCidResult = "MR_RENDER_GET_SUBTITLE_BY_CID_RESULT", e.channelRMGetSutitleByName = "RM_RENDER_GET_SUBTITLE_BY_NAME", e.channelMRGetSutitleByNameResult = "MR_RENDER_GET_SUBTITLE_BY_NAME_RESULT", e.channelRMDownloadSutitle = "RM_RENDER_DOWNLOAD_SUBTITLE", e.channelMRDownloadSutitleSuc = "MR_RENDER_DOWNLOAD_SUBTITLE_SUCCESS", e.channelMRDownloadSutitleFail = "MR_RENDER_DOWNLOAD_SUBTITLE_FAIL", e.channelRMGetDisplayName = "RM_RENDER_GET_SUBTITLE_DISPLAYNAME", e.channelMRGetDisplayNameResult = "MR_RENDER_GET_SUBTITLE_DISPLAYNAME_RESULT", e.channelMRBringWindowToTop = "MR_RENDER_BRING_WINDOW_TO_TOP", e.channelRMDownloadXmp = "RM_RENDER_DOWNLOAD_XMP", e.channelMRFixXmpSuc = "MR_RENDER_FIX_XMP_SUC", e.channelMRFixXMPFail = "MR_RENDER_FIX_XMP_FAIL", e.channelRMDownloadXmpEx = "RM_RENDER_DOWNLOAD_XMP_EX", e.channelRMSetPosition = "RM_SET_POSITION", e.channelRMSetFoucs = "RM_SET_FOCUS", e.channelRMCreateAddressDropWnd = "RM_CREATE_ADDRESS_DROPWND", e.channelRMRefreshAddressDropWnd = "RM_REFRESH_ADDRESS_DROPWND", e.channelRMSelectAddressDropItem = "RM_SELECT_ADDRESS_DROPITEM", e.channelRMCreateSearchWindow = "RM_CREATE_SEARCH_WINDOW", e.channelRMAddressKeyDown = "RM_ADDRESS_BAR_KEYDOWN", e.channelMRFWAddressKeyDown = "MR_ADDRESS_FW_BAR_KEYDOWN", e.channelMRFWSelectAddressDropItem = "MR_FW_SELECT_ADDRESS_DROPITEM", e.channelRMAddressDropWndKeyDown = "RM_ADDRESS_DROPWND_KEYDOWN", e.channelMRSearchWindowVisibleChange = "MR_SEARCH_WINDOW_VISIBLE_CHANGE", e.channelRMShowSearchWindow = "RM_SEARCH_WINDOW_SHOW", e.channelRMHideSearchWindow = "RM_SEARCH_WINDOW_HIDE", e.channelRMClickMouse = "RM_CLICK_MOUSE", e.channelMRSearchBarFocusChange = "MR_SEARCHBAR_FOCUS_CHANGE", e.channelMRFWAddressDropWndKeyDown = "MR_FW_ADDRESS_DROPWND_KEYDOWN", e.channelMRClickAddressDropItem = "MR_CLICK_ADDRESS_DROPITEM", e.channelMRMainWndMax = "MR_MAINWINDOW_MAX", e.channelMRMainWndMin = "MR_MAINWINDOW_MIN", e.channelMRMainWndRestore = "MR_MAINWINDOW_RESTORE", e.channelRMGetBrowserStartType = "RM_GET_BROWSER_START_TYPE", e.channelMRGetBrowserStartTypeResult = "MR_GET_BROWSER_START_TYPE_RESULT", e.channelRMExecute = "RM_SHELL_EXECUTE", e.channelMRExecuteResult = "MR_SHELL_EXECUTE_RESULT", e.channelMRAdTipsClick = "MR_AD_TIPS_CLICK", e.channelMRNotificationMsg = "MR_NOTIFICATION_MSG", e.channelRMSetProgressBar = "RM_SET_PROGRESS_BAR", e.channelRMRoundWindow = "RM_ROUND_WINDOW"
    }(t.ThunderChannelList || (t.ThunderChannelList = {}))
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const i = n(7), o = n(1), r = n(6), s = o.default.getLogger("Thunder.PromiseNativeCall"), a = i.promisify;
    t.default = function (...e) {
        return s.verbose(...e), a(r.NativeCallModule.nativeCall.CallNativeFunction.bind(r.NativeCallModule.nativeCall))(...e)
    }
}, function (e, t) {
    e.exports = require("os")
}, function (e, t, n) {
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
}, function (e, t, n) {
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
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
        e.msgIPCCommunicatorForward = "ipc_communicator_forward", e.msgIPCSendToMain = "ipc_send_to_main", e.msgIPCSendToRenderer = "ipc_send_to_renderer", e.msgIPCRendererConnect = "ipc_renderer_connect", e.msgIPCRendererDisconnect = "ipc_renderer_disconnect", e.msgNCCallNativeFunction = "nc_call_native_function", e.msgNCCheckNativeFunction = "nc_check_native_function", e.msgNCCallJsFunctionById = "nc_call_js_function_by_id", e.msgNCCallJsFunctionByName = "nc_call_js_function_by_name", e.msgNCNativeFireEvent = "nc_native_fire_event", e.msgNCNativeCallReady = "nc_native_call_ready"
    }(t.CommonIPCMessage || (t.CommonIPCMessage = {}))
}, function (e, t) {
    e.exports = require("fs")
}, function (e, t, n) {
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
}, , , function (e, t, n) {
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
}, function (e, t, n) {
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
}, function (e, t) {
    e.exports = require("crypto")
}, function (e, t, n) {
    e.exports = n(117)
}, function (e, t, n) {
    "use strict";
    var i = n(11), o = n(72), r = n(74), s = n(52), a = n(75), l = n(76).http, c = n(76).https, u = n(29), d = n(94),
        f = n(130), p = n(44), h = n(73);
    e.exports = function (e) {
        return new Promise(function (t, n) {
            var v, m = e.data, g = e.headers;
            if (g["User-Agent"] || g["user-agent"] || (g["User-Agent"] = "axios/" + f.version), m && !i.isStream(m)) {
                if (Buffer.isBuffer(m)) ; else if (i.isArrayBuffer(m)) m = new Buffer(new Uint8Array(m)); else {
                    if (!i.isString(m)) return n(p("Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream", e));
                    m = new Buffer(m, "utf-8")
                }
                g["Content-Length"] = m.length
            }
            var _ = void 0;
            e.auth && (_ = (e.auth.username || "") + ":" + (e.auth.password || ""));
            var y = u.parse(e.url), b = y.protocol || "http:";
            if (!_ && y.auth) {
                var C = y.auth.split(":");
                _ = (C[0] || "") + ":" + (C[1] || "")
            }
            _ && delete g.Authorization;
            var w = "https:" === b, x = w ? e.httpsAgent : e.httpAgent, S = {
                path: r(y.path, e.params, e.paramsSerializer).replace(/^\?/, ""),
                method: e.method,
                headers: g,
                agent: x,
                auth: _
            };
            e.socketPath ? S.socketPath = e.socketPath : (S.hostname = y.hostname, S.port = y.port);
            var k, P = e.proxy;
            if (!P && !1 !== P) {
                var T = b.slice(0, -1) + "_proxy", D = process.env[T] || process.env[T.toUpperCase()];
                if (D) {
                    var R = u.parse(D);
                    if (P = {host: R.hostname, port: R.port}, R.auth) {
                        var O = R.auth.split(":");
                        P.auth = {username: O[0], password: O[1]}
                    }
                }
            }
            if (P && (S.hostname = P.host, S.host = P.host, S.headers.host = y.hostname + (y.port ? ":" + y.port : ""), S.port = P.port, S.path = b + "//" + y.hostname + (y.port ? ":" + y.port : "") + S.path, P.auth)) {
                var N = new Buffer(P.auth.username + ":" + P.auth.password, "utf8").toString("base64");
                S.headers["Proxy-Authorization"] = "Basic " + N
            }
            e.transport ? k = e.transport : 0 === e.maxRedirects ? k = w ? a : s : (e.maxRedirects && (S.maxRedirects = e.maxRedirects), k = w ? c : l), e.maxContentLength && e.maxContentLength > -1 && (S.maxBodyLength = e.maxContentLength);
            var E = k.request(S, function (i) {
                if (!E.aborted) {
                    clearTimeout(v), v = null;
                    var r = i;
                    switch (i.headers["content-encoding"]) {
                        case"gzip":
                        case"compress":
                        case"deflate":
                            r = r.pipe(d.createUnzip()), delete i.headers["content-encoding"]
                    }
                    var s = i.req || E, a = {
                        status: i.statusCode,
                        statusText: i.statusMessage,
                        headers: i.headers,
                        config: e,
                        request: s
                    };
                    if ("stream" === e.responseType) a.data = r, o(t, n, a); else {
                        var l = [];
                        r.on("data", function (t) {
                            l.push(t), e.maxContentLength > -1 && Buffer.concat(l).length > e.maxContentLength && n(p("maxContentLength size of " + e.maxContentLength + " exceeded", e, null, s))
                        }), r.on("error", function (t) {
                            E.aborted || n(h(t, e, null, s))
                        }), r.on("end", function () {
                            var i = Buffer.concat(l);
                            "arraybuffer" !== e.responseType && (i = i.toString("utf8")), a.data = i, o(t, n, a)
                        })
                    }
                }
            });
            E.on("error", function (t) {
                E.aborted || n(h(t, e, null, E))
            }), e.timeout && !v && (v = setTimeout(function () {
                E.abort(), n(p("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", E))
            }, e.timeout)), e.cancelToken && e.cancelToken.promise.then(function (e) {
                E.aborted || (E.abort(), n(e))
            }), i.isStream(m) ? m.pipe(E) : E.end(m)
        })
    }
}, function (e, t) {
    e.exports = require("url")
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
        let t;
        !function (e) {
            e[e.OK = 0] = "OK", e[e.Cancel = 1] = "Cancel", e[e.Close = 2] = "Close"
        }(t = e.Action || (e.Action = {}))
    }(t.MessageBoxNS || (t.MessageBoxNS = {}))
}, , function (e, t, n) {
    e.exports = n(12)(14)
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(34), o = n.n(i);
    for (var r in i) "default" !== r && function (e) {
        n.d(t, e, function () {
            return i[e]
        })
    }(r);
    t.default = o.a
}, function (e, t, n) {
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
    const r = n(3), s = n(4);
    let a = class extends s.Vue {
        onOptionsChanged() {
            this.appendContent()
        }

        appendContent() {
            this.dropdown || (this.dropdown = new r.remote.DropdownWindow), this.dropdown.clear(), this.options.forEach(e => {
                "separator" === e ? this.dropdown.append(new r.remote.DropdownWindowContent({type: "separator"})) : this.dropdown.append(new r.remote.DropdownWindowContent({
                    label: e.toString(),
                    click: () => {
                        this.$refs.select.menuVisible = !1, this.$emit("input", e, !0)
                    }
                }))
            })
        }

        handleMenuShow() {
            return o(this, void 0, void 0, function* () {
                if (void 0 === this.options || !Array.isArray(this.options) || 0 === this.options.length) return;
                this.dropdown || this.appendContent();
                let e = this.$el.getBoundingClientRect();
                const {DropDownWindowSkinNS: t} = yield Promise.resolve().then(() => n(96));
                t.setStyle(this.dropdown, {
                    windowPreference: {
                        marginLeft: 0,
                        marginRight: 0,
                        stringWidth: Math.round(e.width) - 39
                    }
                }), this.dropdown.popup({
                    window: r.remote.getCurrentWindow(),
                    x: Math.round(e.left),
                    y: Math.round(e.top + e.height + 4)
                })
            })
        }
    };
    i([s.Prop()], a.prototype, "value", void 0), i([s.Prop({default: () => []})], a.prototype, "options", void 0), i([s.Watch("options")], a.prototype, "onOptionsChanged", null), a = i([s.Component], a), t.default = a
}, function (e, t) {
    e.exports = require("events")
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const i = n(3);
    !function (e) {
        let t;
        !function (e) {
            e.Info = "info", e.Warning = "warning", e.Error = "error"
        }(t = e.ConfirmType || (e.ConfirmType = {})), e.confirm = function (e, t = {}) {
            let n = String(Math.random()).replace(/\D/, "");
            return i.ipcRenderer.send("message-box-confirm-create", {
                dialogConf: t,
                boxId: n
            }), i.remote.ipcMain.once(`message-box-init-${n}`, t => {
                t.sender.send("message-box-init-reply", {popType: "confirm", options: e})
            }), new Promise(e => {
                i.remote.ipcMain.once(`message-box-resolve-${n}`, (t, n, i) => {
                    e({action: n, checkboxChecked: i})
                })
            })
        }, e.pop = function (e, t = {}) {
            let n = String(Math.random()).replace(/\D/, "");
            return i.ipcRenderer.send("message-box-pop-create", {
                dialogConf: t,
                boxId: n
            }), i.remote.ipcMain.once(`message-box-init-${n}`, t => {
                t.sender.send("message-box-init-reply", {popType: "message-box", options: e})
            }), new Promise(e => {
                i.remote.ipcMain.once(`message-box-resolve-${n}`, (t, n, i) => {
                    e({action: n, formData: i})
                })
            })
        }, e.custom = function (e, t = {}, n = {}) {
            let o = String(Math.random()).replace(/\D/, "");
            return i.ipcRenderer.send("message-box-custom-create", {
                popType: e,
                dialogConf: n,
                boxId: o,
                options: t
            }), i.remote.ipcMain.once(`message-box-init-${o}`, i => {
                i.sender.send("message-box-init-reply", {popType: e, options: t, dialogConf: n})
            }), new Promise(e => {
                i.remote.ipcMain.once(`message-box-resolve-${o}`, (t, n, i) => {
                    e({action: n, args: i})
                })
            })
        }
    }(t.MessageBox || (t.MessageBox = {}))
}, , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
        let t;
        !function (e) {
            e[e.Default = 0] = "Default", e[e.Color = 1] = "Color", e[e.Wallpaper = 2] = "Wallpaper", e[e.Custom = 3] = "Custom"
        }(t = e.SkinType || (e.SkinType = {})), e.defaultSkinInfo = {type: t.Default, colorID: 0}
    }(t.SkinHelperNS || (t.SkinHelperNS = {}))
}, function (e, t, n) {
    "use strict";
    t.__esModule = !0;
    var i = s(n(583)), o = s(n(595)),
        r = "function" == typeof o.default && "symbol" == typeof i.default ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof o.default && e.constructor === o.default && e !== o.default.prototype ? "symbol" : typeof e
        };

    function s(e) {
        return e && e.__esModule ? e : {default: e}
    }

    t.default = "function" == typeof o.default && "symbol" === r(i.default) ? function (e) {
        return void 0 === e ? "undefined" : r(e)
    } : function (e) {
        return e && "function" == typeof o.default && e.constructor === o.default && e !== o.default.prototype ? "symbol" : void 0 === e ? "undefined" : r(e)
    }
}, function (e, t, n) {
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
}, function (e, t, n) {
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
    const l = n(13), c = n(3), u = n(1), d = n(5), f = n(14), p = "xdas_profile_stat";
    let h = "", v = void 0, m = null, g = void 0, _ = null,
        y = d.default(r.join(__rootDir, "../bin/ThunderHelper.node")), b = new Set;

    function C() {
        return i(this, void 0, void 0, function* () {
            return new Promise(e => i(this, void 0, void 0, function* () {
                void 0 === g && (null === _ && (_ = new Promise(e => {
                    e(g = function (e) {
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
                })), g = yield _), e(g)
            }))
        })
    }

    function w(e) {
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

    function x(e) {
        return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }

    function S(e) {
        return i(this, void 0, void 0, function* () {
            return new Promise(t => i(this, void 0, void 0, function* () {
                let i = void 0;
                null === a && (a = yield Promise.resolve().then(() => n(26)));
                let o = a.createHash("md5");
                null !== o && (i = o.update(e).digest("hex")), t(i)
            }))
        })
    }

    function k() {
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

    function P(e, t, n, o) {
        return i(this, void 0, void 0, function* () {
            let r = w(t), s = w(n), a = yield S(s), c = function (e) {
                let t = new RegExp(x("file:///"), "g"), n = new RegExp(x(process.resourcesPath + "\\"), "g"),
                    i = new RegExp(x(encodeURI(process.resourcesPath.replace(/\\/g, "/") + "/")), "g");
                return e.replace(t, "").replace(n, "").replace(i, "")
            }(w(o)), u = yield S(c), d = `${e}:${a}:${u}`;
            b.has(d) || (b.add(d), l.XLStatNS.trackEvent(p, "uncaught_exception", "", 0, 0, 0, 0, `type=${e},business_name=${yield C()},code=${r},message_hash=${a},message=${encodeURI(s)},stack_hash=${u},stack=${encodeURI(c)}`)), function (e, t, n, o) {
                return i(this, void 0, void 0, function* () {
                })
            }().catch()
        })
    }

    function T(e) {
        console.error(e);
        let t = e || {};
        P("unhandledRejection", t.code, t instanceof Error ? t.message : t, t.stack).catch()
    }

    !function (e) {
        e.init = function (e) {
            h = e
        }, e.trackColdStartUpEvent = function (e) {
            return i(this, void 0, void 0, function* () {
                let t = y.iSColdStartUp() ? 1 : 0, n = o.release(), i = y.performanceMonitorReporter.getProcessUptime(),
                    r = yield k(), s = `key=${e},start_type=${r},cold_start_up=${t},os_version=${n},cost_time=${i}`;
                l.XLStatNS.trackEvent(p, "cold_start_up", "", 0, 0, 0, 0, s)
            })
        }
    }(t.PerformanceMonitorStatNS || (t.PerformanceMonitorStatNS = {})), function () {
        if (process.on("uncaughtException", e => {
            console.error(e);
            let t = e || {};
            P("uncaughtException", t.code, t.message, t.stack).catch()
        }), "browser" === process.type) process.on("unhandledRejection", (e, t) => {
            T(e)
        }), c.ipcMain.on(f.ThunderChannelList.channelRMGetBrowserStartType, function (e) {
            return i(this, void 0, void 0, function* () {
                let t = yield k();
                e.sender.send(f.ThunderChannelList.channelMRGetBrowserStartTypeResult, t)
            })
        }); else if ("browser" !== process.type) {
            window.addEventListener("unhandledrejection", e => {
                T(e && e.reason || {})
            });
            let e = c.remote.getCurrentWebContents();
            null !== e && void 0 !== e && e.once("did-finish-load", () => {
                (function () {
                    return i(this, void 0, void 0, function* () {
                        do {
                            if ("browser" === process.type) break;
                            if (null === window.performance.timing || void 0 === window.performance.timing) break;
                            let e = y.iSColdStartUp() ? 1 : 0, t = o.release(), n = window.performance.timing,
                                i = n.loadEventEnd - n.navigationStart, r = n.fetchStart - n.navigationStart,
                                s = n.domainLookupEnd - n.domainLookupStart, a = n.connectEnd - n.connectStart,
                                c = n.responseStart - n.requestStart, u = n.responseEnd - n.responseStart,
                                d = n.domComplete - n.domLoading, f = yield k();
                            l.XLStatNS.trackEvent(p, "page_load_time", "", 0, 0, 0, 0, `start_type=${f},cold_start_up=${e},os_version=${t},load_time=${i},before_fetch_time=${r},domin_lookup_time=${s},connect_time=${a},first_response_time=${c},responseTime=${u},domTime=${d},process=${h}`)
                        } while (0)
                    })
                })().catch()
            })
        }
        u.default.hook("beforeLog", (e, t, ...n) => {
            e === u.LogLevel.Critical && l.XLStatNS.trackEvent(p, "critical_error", "", 0, 0, 0, 0, `module_name=${t},messages=${n}`)
        })
    }()
}, function (e, t, n) {
    e.exports = n(12)(130)
}, function (e, t, n) {
    "use strict";
    var i = n(11), o = n(120), r = {"Content-Type": "application/x-www-form-urlencoded"};

    function s(e, t) {
        !i.isUndefined(e) && i.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
    }

    var a, l = {
        adapter: ("undefined" != typeof XMLHttpRequest ? a = n(121) : "undefined" != typeof process && (a = n(28)), a),
        transformRequest: [function (e, t) {
            return o(t, "Content-Type"), i.isFormData(e) || i.isArrayBuffer(e) || i.isBuffer(e) || i.isStream(e) || i.isFile(e) || i.isBlob(e) ? e : i.isArrayBufferView(e) ? e.buffer : i.isURLSearchParams(e) ? (s(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : i.isObject(e) ? (s(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
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
        l.headers[e] = i.merge(r)
    }), e.exports = l
}, function (e, t, n) {
    "use strict";
    var i = n(73);
    e.exports = function (e, t, n, o, r) {
        var s = new Error(e);
        return i(s, t, n, o, r)
    }
}, , function (e, t, n) {
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
}, function (e, t, n) {
    "use strict";
    var i = function () {
        var e = this, t = e.$createElement;
        return (e._self._c || t)("td-select", e._g(e._b({
            ref: "select",
            attrs: {value: e.value, "custom-menu-enabled": ""},
            on: {"menu-show": e.handleMenuShow}
        }, "td-select", e.$attrs, !1), e.$listeners), [e._t("suffix", null, {slot: "suffix"}), e._v(" "), e._t("append", null, {slot: "append"})], 2)
    }, o = [];
    i._withStripped = !0, n.d(t, "a", function () {
        return i
    }), n.d(t, "b", function () {
        return o
    })
}, , function (e, t, n) {
    e.exports = n(12)(4)
}, function (e, t, n) {
    "use strict";
    var i = this && this.__decorate || function (e, t, n, i) {
        var o, r = arguments.length, s = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, i); else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (s = (r < 3 ? o(s) : r > 3 ? o(t, n, s) : o(t, n)) || s);
        return r > 3 && s && Object.defineProperty(t, n, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const o = n(4), r = n(145), s = n(10), a = n(80);
    let l = class extends o.Vue {
        constructor() {
            super(...arguments), this.removeDraggable = null
        }

        mounted() {
            this.removeDraggable = r.default(".td-dialog__header")
        }

        destroyed() {
            this.removeDraggable()
        }
    };
    l = i([o.Component], l), t.DraggableMixin = l;
    let c = class extends o.Vue {
        constructor() {
            super(...arguments), this.windowWidth = 0, this.windowHeight = 0, this.resizeToFitContent = a.ThunderWindowNS.resizeToFitContent, this.fitWindowPosInParent = a.ThunderWindowNS.fitWindowPosInParent
        }

        get relativeToParent() {
            return !s.ThunderUtil.isDef(this.options.relativeToParent) || this.options.relativeToParent
        }

        mounted() {
            this.relativeToParent ? this.resizeToFitContent(this.windowWidth, this.windowHeight, this.fitWindowPosInParent) : this.resizeToFitContent(this.windowWidth, this.windowHeight)
        }
    };
    i([o.Prop()], c.prototype, "options", void 0), c = i([o.Component], c), t.PositionMixin = c
}, function (e, t, n) {
    e.exports = n(12)(65)
}, function (e, t) {
    e.exports = require("http")
}, , function (e, t, n) {
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
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const i = n(15), o = n(6), r = n(38), s = n(1), a = n(10), l = s.default.getLogger("common/skin");

    function c(e) {
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
            let {colors: {colorPrimary: t, colorPrimaryControl1: n, colorPrimaryControl2: i, colorPrimaryControl3: o, colorPrimaryControl4: r, colorPrimaryGradient: s, colorPrimaryText: l, colorSearch: c, colorSecondary: u, colorGradientBackground: d, colorGradientForeground: f, colorAccordion: p}, opacity: h} = e;
            a.ThunderUtil.setCSSProperties(document.body, {
                "--color-primary-theme": `${t}`,
                "--color-primary-control-1": `${n}`,
                "--color-primary-control-2": `${i}`,
                "--color-primary-control-3": `${o}`,
                "--color-primary-control-4": `${r}`,
                "--color-primary-gradient-1": `${s[0]}`,
                "--color-primary-gradient-2": `${s[1]}`,
                "--color-primary-text": `${l}`,
                "--color-search": `${c}`,
                "--color-secondary": `${u}`,
                "--color-gradient-background-1": `${d[0]}`,
                "--color-gradient-background-2": `${d[1]}`,
                "--color-gradient-foreground-1": `${f[0]}`,
                "--color-gradient-foreground-2": `${f[1]}`,
                "--color-accordion-1": `${p[0]}`,
                "--color-accordion-2": `${p[1]}`,
                "--default-opacity-1": `${h - .1}`,
                "--default-opacity-2": `${h + .1}`
            })
        }
    }

    i.default("GetSkinInfo").then(c).catch(e => {
        l.warning(e)
    }), o.NativeCallModule.nativeCall.AttachNativeEvent("OnChangeSkin", c)
}, function (e, t, n) {
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
    const o = n(10), r = n(21), s = n(6);
    !function (e) {
        e.getDownloadDir = function () {
            return i(this, void 0, void 0, function* () {
                return new Promise(e => {
                    s.NativeCallModule.nativeCall.CallNativeFunction("GetDownloadDir", (t, n) => {
                        t === r.NativeFunctionErrorCode.Success ? e(n) : e(o.ThunderUtil.getDefaultDownloadDir())
                    })
                })
            })
        }, e.getConfigValueAW = function (e, t, n) {
            return i(this, void 0, void 0, function* () {
                return new Promise(i => {
                    s.NativeCallModule.nativeCall.CallNativeFunction("GetConfigValue", e, t, n, (e, t) => {
                        e === r.NativeFunctionErrorCode.Success ? i(t) : i(n)
                    })
                })
            })
        }, e.isSingleBtTask = function (e) {
            return i(this, void 0, void 0, function* () {
                return new Promise(t => {
                    s.NativeCallModule.nativeCall.CallNativeFunction("IsSingleBtTask", e, (e, n) => {
                        e === r.NativeFunctionErrorCode.Success ? t(n) : t(!1)
                    })
                })
            })
        }
    }(t.NativeCallAWNS || (t.NativeCallAWNS = {}))
}, , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const i = n(86), o = n(69);
    !function (e) {
        e.getWindowPreference = function (e = !1) {
            let t = o.default(), n = {};
            return t && t.colors && "string" == typeof t.colors.colorPrimaryControl1 && (n.hoverBackgroundColor = e ? parseInt(i.ColorUtilNS.rgbaStringToHexWith0xBegin(t.colors.colorPrimaryControl1), 16) : i.ColorUtilNS.rgbaStringToHexWith0xBegin(t.colors.colorPrimaryControl1)), n
        }
    }(t.WindowPreferenceNS || (t.WindowPreferenceNS = {}))
}, function (e, t, n) {
    (function (e) {
        var n = 200, i = "__lodash_hash_undefined__", o = 800, r = 16, s = 9007199254740991, a = "[object Arguments]",
            l = "[object AsyncFunction]", c = "[object Function]", u = "[object GeneratorFunction]",
            d = "[object Null]", f = "[object Object]", p = "[object Proxy]", h = "[object Undefined]",
            v = /^\[object .+?Constructor\]$/, m = /^(?:0|[1-9]\d*)$/, g = {};
        g["[object Float32Array]"] = g["[object Float64Array]"] = g["[object Int8Array]"] = g["[object Int16Array]"] = g["[object Int32Array]"] = g["[object Uint8Array]"] = g["[object Uint8ClampedArray]"] = g["[object Uint16Array]"] = g["[object Uint32Array]"] = !0, g[a] = g["[object Array]"] = g["[object ArrayBuffer]"] = g["[object Boolean]"] = g["[object DataView]"] = g["[object Date]"] = g["[object Error]"] = g[c] = g["[object Map]"] = g["[object Number]"] = g[f] = g["[object RegExp]"] = g["[object Set]"] = g["[object String]"] = g["[object WeakMap]"] = !1;
        var _ = "object" == typeof global && global && global.Object === Object && global,
            y = "object" == typeof self && self && self.Object === Object && self,
            b = _ || y || Function("return this")(), C = "object" == typeof t && t && !t.nodeType && t,
            w = C && "object" == typeof e && e && !e.nodeType && e, x = w && w.exports === C, S = x && _.process,
            k = function () {
                try {
                    return S && S.binding && S.binding("util")
                } catch (e) {
                }
            }(), P = k && k.isTypedArray;

        function T(e, t) {
            return "__proto__" == t ? void 0 : e[t]
        }

        var D, R, O, N = Array.prototype, E = Function.prototype, I = Object.prototype, M = b["__core-js_shared__"],
            F = E.toString, j = I.hasOwnProperty,
            A = (D = /[^.]+$/.exec(M && M.keys && M.keys.IE_PROTO || "")) ? "Symbol(src)_1." + D : "", L = I.toString,
            W = F.call(Object),
            B = RegExp("^" + F.call(j).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
            U = x ? b.Buffer : void 0, $ = b.Symbol, V = b.Uint8Array, K = U ? U.allocUnsafe : void 0,
            G = (R = Object.getPrototypeOf, O = Object, function (e) {
                return R(O(e))
            }), H = Object.create, z = I.propertyIsEnumerable, q = N.splice, X = $ ? $.toStringTag : void 0,
            Q = function () {
                try {
                    var e = Ce(Object, "defineProperty");
                    return e({}, "", {}), e
                } catch (e) {
                }
            }(), J = U ? U.isBuffer : void 0, Y = Math.max, Z = Date.now, ee = Ce(b, "Map"), te = Ce(Object, "create"),
            ne = function () {
                function e() {
                }

                return function (t) {
                    if (!Ee(t)) return {};
                    if (H) return H(t);
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
            var n = Te(e), i = !n && Pe(e), o = !n && !i && Re(e), r = !n && !i && !o && Me(e), s = n || i || o || r,
                a = s ? function (e, t) {
                    for (var n = -1, i = Array(e); ++n < e;) i[n] = t(n);
                    return i
                }(e.length, String) : [], l = a.length;
            for (var c in e) !t && !j.call(e, c) || s && ("length" == c || o && ("offset" == c || "parent" == c) || r && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || we(c, l)) || a.push(c);
            return a
        }

        function le(e, t, n) {
            (void 0 === n || ke(e[t], n)) && (void 0 !== n || t in e) || de(e, t, n)
        }

        function ce(e, t, n) {
            var i = e[t];
            j.call(e, t) && ke(i, n) && (void 0 !== n || t in e) || de(e, t, n)
        }

        function ue(e, t) {
            for (var n = e.length; n--;) if (ke(e[n][0], t)) return n;
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
            return j.call(t, e) ? t[e] : void 0
        }, ie.prototype.has = function (e) {
            var t = this.__data__;
            return te ? void 0 !== t[e] : j.call(t, e)
        }, ie.prototype.set = function (e, t) {
            var n = this.__data__;
            return this.size += this.has(e) ? 0 : 1, n[e] = te && void 0 === t ? i : t, this
        }, oe.prototype.clear = function () {
            this.__data__ = [], this.size = 0
        }, oe.prototype.delete = function (e) {
            var t = this.__data__, n = ue(t, e);
            return !(n < 0 || (n == t.length - 1 ? t.pop() : q.call(t, n, 1), --this.size, 0))
        }, oe.prototype.get = function (e) {
            var t = this.__data__, n = ue(t, e);
            return n < 0 ? void 0 : t[n][1]
        }, oe.prototype.has = function (e) {
            return ue(this.__data__, e) > -1
        }, oe.prototype.set = function (e, t) {
            var n = this.__data__, i = ue(n, e);
            return i < 0 ? (++this.size, n.push([e, t])) : n[i][1] = t, this
        }, re.prototype.clear = function () {
            this.size = 0, this.__data__ = {hash: new ie, map: new (ee || oe), string: new ie}
        }, re.prototype.delete = function (e) {
            var t = be(this, e).delete(e);
            return this.size -= t ? 1 : 0, t
        }, re.prototype.get = function (e) {
            return be(this, e).get(e)
        }, re.prototype.has = function (e) {
            return be(this, e).has(e)
        }, re.prototype.set = function (e, t) {
            var n = be(this, e), i = n.size;
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
        var fe, pe = function (e, t, n) {
            for (var i = -1, o = Object(e), r = n(e), s = r.length; s--;) {
                var a = r[fe ? s : ++i];
                if (!1 === t(o[a], a, o)) break
            }
            return e
        };

        function he(e) {
            return null == e ? void 0 === e ? h : d : X && X in Object(e) ? function (e) {
                var t = j.call(e, X), n = e[X];
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

        function ve(e) {
            return Ie(e) && he(e) == a
        }

        function me(e) {
            return !(!Ee(e) || A && A in e) && (Oe(e) ? B : v).test(function (e) {
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

        function ge(e) {
            if (!Ee(e)) return function (e) {
                var t = [];
                if (null != e) for (var n in Object(e)) t.push(n);
                return t
            }(e);
            var t = xe(e), n = [];
            for (var i in e) ("constructor" != i || !t && j.call(e, i)) && n.push(i);
            return n
        }

        function _e(e, t, n, i, o) {
            e !== t && pe(t, function (r, s) {
                if (Ee(r)) o || (o = new se), function (e, t, n, i, o, r, s) {
                    var a = T(e, n), l = T(t, n), c = s.get(l);
                    if (c) return void le(e, n, c);
                    var u = r ? r(a, l, n + "", e, t, s) : void 0, d = void 0 === u;
                    if (d) {
                        var p = Te(l), h = !p && Re(l), v = !p && !h && Me(l);
                        u = l, p || h || v ? Te(a) ? u = a : Ie(b = a) && De(b) ? u = function (e, t) {
                            var n = -1, i = e.length;
                            t || (t = Array(i));
                            for (; ++n < i;) t[n] = e[n];
                            return t
                        }(a) : h ? (d = !1, u = function (e, t) {
                            if (t) return e.slice();
                            var n = e.length, i = K ? K(n) : new e.constructor(n);
                            return e.copy(i), i
                        }(l, !0)) : v ? (d = !1, m = l, g = !0 ? (_ = m.buffer, y = new _.constructor(_.byteLength), new V(y).set(new V(_)), y) : m.buffer, u = new m.constructor(g, m.byteOffset, m.length)) : u = [] : function (e) {
                            if (!Ie(e) || he(e) != f) return !1;
                            var t = G(e);
                            if (null === t) return !0;
                            var n = j.call(t, "constructor") && t.constructor;
                            return "function" == typeof n && n instanceof n && F.call(n) == W
                        }(l) || Pe(l) ? (u = a, Pe(a) ? u = function (e) {
                            return function (e, t, n, i) {
                                var o = !n;
                                n || (n = {});
                                var r = -1, s = t.length;
                                for (; ++r < s;) {
                                    var a = t[r], l = i ? i(n[a], e[a], a, n, e) : void 0;
                                    void 0 === l && (l = e[a]), o ? de(n, a, l) : ce(n, a, l)
                                }
                                return n
                            }(e, Fe(e))
                        }(a) : (!Ee(a) || i && Oe(a)) && (u = function (e) {
                            return "function" != typeof e.constructor || xe(e) ? {} : ne(G(e))
                        }(l))) : d = !1
                    }
                    var m, g, _, y;
                    var b;
                    d && (s.set(l, u), o(u, l, i, r, s), s.delete(l));
                    le(e, n, u)
                }(e, t, s, n, _e, i, o); else {
                    var a = i ? i(T(e, s), r, s + "", e, t, o) : void 0;
                    void 0 === a && (a = r), le(e, s, a)
                }
            }, Fe)
        }

        function ye(e, t) {
            return Se(function (e, t, n) {
                return t = Y(void 0 === t ? e.length - 1 : t, 0), function () {
                    for (var i = arguments, o = -1, r = Y(i.length - t, 0), s = Array(r); ++o < r;) s[o] = i[t + o];
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

        function be(e, t) {
            var n, i, o = e.__data__;
            return ("string" == (i = typeof(n = t)) || "number" == i || "symbol" == i || "boolean" == i ? "__proto__" !== n : null === n) ? o["string" == typeof t ? "string" : "hash"] : o.map
        }

        function Ce(e, t) {
            var n = function (e, t) {
                return null == e ? void 0 : e[t]
            }(e, t);
            return me(n) ? n : void 0
        }

        function we(e, t) {
            var n = typeof e;
            return !!(t = null == t ? s : t) && ("number" == n || "symbol" != n && m.test(e)) && e > -1 && e % 1 == 0 && e < t
        }

        function xe(e) {
            var t = e && e.constructor;
            return e === ("function" == typeof t && t.prototype || I)
        }

        var Se = function (e) {
            var t = 0, n = 0;
            return function () {
                var i = Z(), s = r - (i - n);
                if (n = i, s > 0) {
                    if (++t >= o) return arguments[0]
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
        } : Le);

        function ke(e, t) {
            return e === t || e != e && t != t
        }

        var Pe = ve(function () {
            return arguments
        }()) ? ve : function (e) {
            return Ie(e) && j.call(e, "callee") && !z.call(e, "callee")
        }, Te = Array.isArray;

        function De(e) {
            return null != e && Ne(e.length) && !Oe(e)
        }

        var Re = J || function () {
            return !1
        };

        function Oe(e) {
            if (!Ee(e)) return !1;
            var t = he(e);
            return t == c || t == u || t == l || t == p
        }

        function Ne(e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= s
        }

        function Ee(e) {
            var t = typeof e;
            return null != e && ("object" == t || "function" == t)
        }

        function Ie(e) {
            return null != e && "object" == typeof e
        }

        var Me = P ? function (e) {
            return function (t) {
                return e(t)
            }
        }(P) : function (e) {
            return Ie(e) && Ne(e.length) && !!g[he(e)]
        };

        function Fe(e) {
            return De(e) ? ae(e, !0) : ge(e)
        }

        var je, Ae = (je = function (e, t, n) {
            _e(e, t, n)
        }, ye(function (e, t) {
            var n = -1, i = t.length, o = i > 1 ? t[i - 1] : void 0, r = i > 2 ? t[2] : void 0;
            for (o = je.length > 3 && "function" == typeof o ? (i--, o) : void 0, r && function (e, t, n) {
                if (!Ee(n)) return !1;
                var i = typeof t;
                return !!("number" == i ? De(n) && we(t, n.length) : "string" == i && t in n) && ke(n[t], e)
            }(t[0], t[1], r) && (o = i < 3 ? void 0 : o, i = 1), e = Object(e); ++n < i;) {
                var s = t[n];
                s && je(e, s, n, o)
            }
            return e
        }));

        function Le(e) {
            return e
        }

        e.exports = Ae
    }).call(this, n(87)(e))
}, , , , function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(64), o = n.n(i);
    for (var r in i) "default" !== r && function (e) {
        n.d(t, e, function () {
            return i[e]
        })
    }(r);
    t.default = o.a
}, function (e, t, n) {
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
    const r = n(3), s = n(4), a = n(70), l = n(17), c = n(10), u = n(56), d = n(9), f = n(14), p = n(204), h = n(1),
        v = n(15), m = h.default.getLogger("ThunderNewTask.path-selector");
    let g = class extends s.Vue {
        constructor() {
            super(...arguments), this.timerId = -1, this.freeSpace = 0, this.totalSpace = 0, this.valid = !0, this.optionsAlias = {}, this.isDanger = !1, this.isWarn = !1
        }

        get options() {
            return [...Object.values(this.optionsAlias)]
        }

        onPathChange(e) {
            return o(this, void 0, void 0, function* () {
                do {
                    let t = e;
                    if ("私人空间" === e) {
                        let e = yield v.default("GetUserID");
                        if (null === e || void 0 === e || "" === e) break;
                        t = yield u.NativeCallAWNS.getConfigValueAW("PrivateSpaceDefaultPath", e, "")
                    }
                    this.totalSpace = l.ThunderHelper.getPartitionSpace(t), this.freeSpace = l.ThunderHelper.getFreePartitionSpace(t)
                } while (0)
            })
        }

        onDanger(e) {
            this.$emit("danger", e)
        }

        onAppendDirsChange(e, t) {
            if (void 0 !== t && null !== t && t.length > 0) for (let e of t) this.optionsAlias.hasOwnProperty(e) && this.$delete(this.optionsAlias, e);
            if (void 0 !== e && null !== e && e.length > 0) for (let t of e) "\\" === t[t.length - 1] && (t = t.slice(0, t.length - 1)), this.optionsAlias.hasOwnProperty(t) || this.$set(this.optionsAlias, t, t)
        }

        created() {
            setTimeout(() => {
                let e = this.value;
                void 0 !== this.defaultDir && null !== this.defaultDir && (this.$emit("input", this.defaultDir), e = this.defaultDir);
                let t = r.remote.app.getPath("desktop"), n = r.remote.app.getPath("documents");
                this.$set(this.optionsAlias, t, "桌面"), this.$set(this.optionsAlias, n, "我的文档"), p.HistoryPathsNS.getHistoryPaths().then(e => {
                    if (void 0 !== e) {
                        let i = e.indexOf(t);
                        -1 !== i && e.splice(i, 1);
                        let o = e.indexOf(n);
                        if (-1 !== o && e.splice(o, 1), e.length > 0) for (let t of e) "\\" === t[t.length - 1] && (t = t.slice(0, t.length - 1)), this.optionsAlias.hasOwnProperty(t) || this.$set(this.optionsAlias, t, t)
                    }
                }), this.onPathChange(e), this.enablePrivateSpace && (r.ipcRenderer.once(f.ThunderChannelList.channelMRGetPrivateSpaceInfoResult, (e, t, n) => o(this, void 0, void 0, function* () {
                    m.information("GetPrivateSpaceInfoResult isPrivateSpaceOpen:", t, ", currentCategoryId:", n);
                    if (this.options.includes("私人空间") || this.$set(this.optionsAlias, "私人空间", "私人空间"), -1 !== n) this.$emit("input", "私人空间"); else {
                        let e = yield u.NativeCallAWNS.getDownloadDir();
                        this.$emit("input", e)
                    }
                    this.$emit("private", t)
                })), r.ipcRenderer.send(f.ThunderChannelList.channelRMGetPrivateSpaceInfo))
            }, 500), this.timerId = setInterval(() => o(this, void 0, void 0, function* () {
                if (void 0 !== this.value && null !== this.value) {
                    if ("私人空间" === this.value) this.valid = !0; else if (this.value.length >= 3) {
                        let e = this.value.slice(0, 3);
                        this.valid = yield d.FileSystemAWNS.existsAW(e)
                    } else this.valid = !1;
                    this.valid && this.onPathChange(this.value)
                }
            }), 1e3)
        }

        get spaceColor() {
            let e = "";
            return this.isDanger ? e = "is-danger" : this.isWarn && (e = "is-warn"), e
        }

        get freeSpaceFormat() {
            let e = "";
            do {
                if ("string" != typeof this.value) break;
                if (-1 === this.freeSpace) break;
                if ("" === this.value) {
                    this.isDanger = !1;
                    break
                }
                if (this.value.length < 3) {
                    this.isDanger = !1;
                    break
                }
                if (!this.valid) {
                    this.isDanger = !1;
                    break
                }
                if (this.isDanger = !1, this.isWarn = !1, this.needSpace >= this.freeSpace) {
                    this.isDanger = !0, e = "磁盘空间不足";
                    break
                }
                this.freeSpace / this.totalSpace <= .3 && (this.isWarn = !0), e = "剩余:" + c.ThunderUtil.formatSize(this.freeSpace)
            } while (0);
            return e
        }

        handleInput(e) {
            do {
                let t = !1;
                for (let n in this.optionsAlias) if (e === this.optionsAlias[n]) {
                    t = !0, this.$emit("input", n, !0);
                    break
                }
                if (t) break;
                this.$emit("input", e, !0)
            } while (0)
        }

        handleContextMenu() {
            return o(this, void 0, void 0, function* () {
                const {MenuSkinNS: e} = yield Promise.resolve().then(() => n(54));
                e.popEditableDefaultContextMenu()
            })
        }

        handleChangePath() {
            const e = r.remote.dialog;
            let t = r.remote.getCurrentWindow(),
                n = e.showOpenDialog(t, {defaultPath: this.value, properties: ["openDirectory"]});
            void 0 !== n && this.$emit("input", n[0], !0)
        }

        mounted() {
        }

        destroyed() {
            -1 !== this.timerId && (clearTimeout(this.timerId), this.timerId = -1)
        }
    };
    i([s.Prop({})], g.prototype, "appendDirs", void 0), i([s.Prop({})], g.prototype, "defaultDir", void 0), i([s.Prop({default: !0})], g.prototype, "enablePrivateSpace", void 0), i([s.Prop({default: ""})], g.prototype, "value", void 0), i([s.Prop({default: 0})], g.prototype, "needSpace", void 0), i([s.Watch("value", {immediate: !0})], g.prototype, "onPathChange", null), i([s.Watch("isDanger", {immediate: !0})], g.prototype, "onDanger", null), i([s.Watch("appendDirs", {immediate: !0})], g.prototype, "onAppendDirsChange", null), g = i([s.Component({components: {SelectNative: a.default}})], g), t.default = g
}, , , , function (e, t, n) {
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
    const o = n(2), r = n(8), s = n(17);
    let a = null;
    const l = n(1).default.getLogger("url.helper");
    !function (e) {
        function t(e) {
            let t = !0;
            if ("string" == typeof e) if (40 === e.length || 32 === e.length) {
                for (let n = 0; n < e.length; n++) if (e.charCodeAt(n) > 127) {
                    t = !1;
                    break
                }
            } else t = !1; else t = !1;
            return t
        }

        function c(e, n = !0) {
            n = void 0 === n || n;
            let i = !1;
            do {
                if ("string" != typeof e || "" === e) break;
                let o = e.trim();
                if ("" === o) break;
                if (s.ThunderHelper.getTaskTypeFromUrl(o) === r.DownloadKernel.TaskType.Unkown) {
                    if (!n) break;
                    t(o) && (i = !0)
                } else i = !0;
                i || o.match(/^file:\/\/\//) && (i = !0)
            } while (0);
            return i
        }

        e.isMagnetCode = t, e.fixMagnetUrl = function (e) {
            let n = "";
            do {
                if ("string" != typeof e || "" === e) break;
                if ("" === (n = e.trim())) break;
                s.ThunderHelper.getTaskTypeFromUrl(n) === r.DownloadKernel.TaskType.Unkown && t(n) && (n = "magnet:?xt=urn:btih:" + n)
            } while (0);
            return n
        }, e.isUrlValid = c, e.isBirdKey = function (e) {
            return e ? e.match(/#X([0-9a-zA-Z]{8}){1,2}#/g) : null
        }, e.isCustomProtocol = function (e) {
            return i(this, void 0, void 0, function* () {
                let t = !1;
                null === a && (a = yield Promise.resolve().then(() => n(29)));
                let i = a.parse(e);
                do {
                    if (null === i || void 0 === i) break;
                    let e = i.protocol;
                    if ("magnet:" === e) {
                        t = !0;
                        break
                    }
                    if ("thunder:" === e) {
                        t = !0;
                        break
                    }
                    if ("ed2k:" === e) {
                        t = !0;
                        break
                    }
                } while (0);
                return t
            })
        }, e.isP2spOrEmuleUrl = function (e) {
            let t = !1;
            do {
                if (null === e || void 0 === e || "" === e) break;
                let n = e.trim();
                if ("" === n) break;
                let i = s.ThunderHelper.getTaskTypeFromUrl(n);
                if (i === r.DownloadKernel.TaskType.P2sp || i === r.DownloadKernel.TaskType.Emule) {
                    t = !0;
                    break
                }
            } while (0);
            return t
        }, e.isSupportUrl = function (e) {
            e = e.toLowerCase();
            let t = !1;
            do {
                if ("http://" === e.substr(0, "http://".length)) {
                    t = !0;
                    break
                }
                if ("https://" === e.substr(0, "https://".length)) {
                    t = !0;
                    break
                }
                if ("ftp://" === e.substr(0, "ftp://".length)) {
                    t = !0;
                    break
                }
                if ("ed2k://" === e.substr(0, "ed2k://".length)) {
                    t = !0;
                    break
                }
                if ("thunder://" === e.substr(0, "thunder://".length)) {
                    t = !0;
                    break
                }
                if ("magnet:?" === e.substr(0, "magnet:?".length)) {
                    t = !0;
                    break
                }
            } while (0);
            return t
        };
        let u = ".edu;.gov;.mil;.hk;.tw;.com.tw;.com.tw;.aero;.biz;.coop;.info;.museum;.name;.pro;";
        u += ".com;.cn;.xin;.net;.top;.xyz;.wang;.shop;.site;.club;.cc;.fun;.online;.biz;.red;.link;.ltd;.mobi;.info;.org;", u += ".com.cn;.net.cn;.org.cn;.gov.cn;.name;.vip;.work;.tv;.co;.kim;.group;.tech;.store;.ren;.ink;.pub;.live;.wiki;.design;";
        const d = (u += ".me").split(";");

        function f(e) {
            let t = !1;
            do {
                if (void 0 === e || null === e || "" === e) break;
                if (-1 !== d.indexOf(e)) {
                    t = !0;
                    break
                }
            } while (0);
            return t
        }

        function p(e) {
            let t = null;
            do {
                if (void 0 === e || null === e) break;
                if ("" === (e = e.trim())) break;
                let n = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/.exec(e);
                if (null === n) break;
                l.information("url parse result ", n), t = {};
                let i = ["url", "scheme", "slash", "host", "port", "path", "query", "hash"];
                for (let e = 0; e < i.length; e++) t[i[e]] = n[e];
                l.information("url parse", t)
            } while (0);
            return t
        }

        e.isUsualDomainSuffix = f, e.urlParse = p, e.isUrl = function (e) {
            let t = !1, n = e;
            do {
                if (void 0 === e || null === e) break;
                if (c(e, !1)) {
                    t = !0;
                    break
                }
                if (e.trim().match(/^file:\/\/\//)) {
                    t = !0;
                    break
                }
                let i = p(e);
                if (null === i) {
                    l.information("url parse failed");
                    break
                }
                if (void 0 === i.host || null === i.host) break;
                if (void 0 !== i.scheme) {
                    t = !0;
                    break
                }
                let r = i.host.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);
                if (r) {
                    if (l.information("url parse is ip", r), Number(r[1]) <= 0 || Number(r[1]) > 255) {
                        t = !1;
                        break
                    }
                    if (Number(r[2]) < 0 || Number(r[2]) > 255) {
                        t = !1;
                        break
                    }
                    if (Number(r[4]) < 0 || Number(r[4]) > 255) {
                        t = !1;
                        break
                    }
                    if (Number(r[4]) < 0 || Number(r[4]) > 255) {
                        t = !1;
                        break
                    }
                    t = !0, void 0 === i.scheme && void 0 !== i.port && (n = `http://${e}`);
                    break
                }
                if (i.host.match(/\.{2,}/)) {
                    l.information("url parse has multi dot"), t = !1;
                    break
                }
                let s = o.extname(i.host);
                if ("" === s) break;
                if (f(s)) {
                    t = !0;
                    break
                }
            } while (0);
            return l.information("url parse isUrl", t), {ret: t, suggest: n}
        }, e.isFileNameValid = function (e) {
            let t = !1;
            do {
                if (void 0 === e) break;
                if (null === e) break;
                if ("" === (e = e.trim())) break;
                if ("." === e[0]) break;
                if (e.match(/[\/\\"<>\?\*|]/)) break;
                t = !0
            } while (0);
            return t
        }, e.isSuffixNeedDownload = function (e) {
            let t = !0;
            do {
                if (void 0 === e) break;
                if ("" === e || "." === e) break;
                if (e = e.toLowerCase(), -1 !== ["txt", "url", "html", "htm", "mht", "nfo"].indexOf(e)) {
                    t = !1;
                    break
                }
            } while (0);
            return t
        }
    }(t.URLHelperNS || (t.URLHelperNS = {}))
}, function (e, t, n) {
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
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(47), o = n(33);
    for (var r in o) "default" !== r && function (e) {
        n.d(t, e, function () {
            return o[e]
        })
    }(r);
    var s = n(0), a = Object(s.a)(o.default, i.a, i.b, !1, null, null, null);
    a.options.__file = "src\\common\\components\\select-native.vue", t.default = a.exports
}, function (e, t, n) {
    "use strict";
    e.exports = function (e, t) {
        return function () {
            for (var n = new Array(arguments.length), i = 0; i < n.length; i++) n[i] = arguments[i];
            return e.apply(t, n)
        }
    }
}, function (e, t, n) {
    "use strict";
    var i = n(44);
    e.exports = function (e, t, n) {
        var o = n.config.validateStatus;
        n.status && o && !o(n.status) ? t(i("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n)
    }
}, function (e, t, n) {
    "use strict";
    e.exports = function (e, t, n, i, o) {
        return e.config = t, n && (e.code = n), e.request = i, e.response = o, e
    }
}, function (e, t, n) {
    "use strict";
    var i = n(11);

    function o(e) {
        return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }

    e.exports = function (e, t, n) {
        if (!t) return e;
        var r;
        if (n) r = n(t); else if (i.isURLSearchParams(t)) r = t.toString(); else {
            var s = [];
            i.forEach(t, function (e, t) {
                null !== e && void 0 !== e && (i.isArray(e) ? t += "[]" : e = [e], i.forEach(e, function (e) {
                    i.isDate(e) ? e = e.toISOString() : i.isObject(e) && (e = JSON.stringify(e)), s.push(o(t) + "=" + o(e))
                }))
            }), r = s.join("&")
        }
        return r && (e += (-1 === e.indexOf("?") ? "?" : "&") + r), e
    }
}, function (e, t) {
    e.exports = require("https")
}, function (e, t, n) {
    var i = n(29), o = n(52), r = n(75), s = n(126), a = n(113).Writable, l = n(127)("follow-redirects"),
        c = {GET: !0, HEAD: !0, OPTIONS: !0, TRACE: !0}, u = Object.create(null);

    function d(e, t) {
        a.call(this), e.headers = e.headers || {}, this._options = e, this._redirectCount = 0, this._requestBodyLength = 0, this._requestBodyBuffers = [], t && this.on("response", t);
        var n = this;
        if (this._onNativeResponse = function (e) {
            n._processResponse(e)
        }, !e.pathname && e.path) {
            var i = e.path.indexOf("?");
            i < 0 ? e.pathname = e.path : (e.pathname = e.path.substring(0, i), e.search = e.path.substring(i))
        }
        this._performRequest()
    }

    function f(e) {
        var t = {maxRedirects: 21, maxBodyLength: 10485760}, n = {};
        return Object.keys(e).forEach(function (o) {
            var r = o + ":", a = n[r] = e[o], c = t[o] = Object.create(a);
            c.request = function (e, o) {
                return "string" == typeof e ? (e = i.parse(e)).maxRedirects = t.maxRedirects : e = Object.assign({
                    protocol: r,
                    maxRedirects: t.maxRedirects,
                    maxBodyLength: t.maxBodyLength
                }, e), e.nativeProtocols = n, s.equal(e.protocol, r, "protocol mismatch"), l("options", e), new d(e, o)
            }, c.get = function (e, t) {
                var n = c.request(e, t);
                return n.end(), n
            }
        }), t
    }

    ["abort", "aborted", "error", "socket", "timeout"].forEach(function (e) {
        u[e] = function (t) {
            this._redirectable.emit(e, t)
        }
    }), d.prototype = Object.create(a.prototype), d.prototype.write = function (e, t, n) {
        this._requestBodyLength + e.length <= this._options.maxBodyLength ? (this._requestBodyLength += e.length, this._requestBodyBuffers.push({
            data: e,
            encoding: t
        }), this._currentRequest.write(e, t, n)) : (this.emit("error", new Error("Request body larger than maxBodyLength limit")), this.abort())
    }, d.prototype.end = function (e, t, n) {
        var i = this._currentRequest;
        e ? this.write(e, t, function () {
            i.end(null, null, n)
        }) : i.end(null, null, n)
    }, d.prototype.setHeader = function (e, t) {
        this._options.headers[e] = t, this._currentRequest.setHeader(e, t)
    }, d.prototype.removeHeader = function (e) {
        delete this._options.headers[e], this._currentRequest.removeHeader(e)
    }, ["abort", "flushHeaders", "getHeader", "setNoDelay", "setSocketKeepAlive", "setTimeout"].forEach(function (e) {
        d.prototype[e] = function (t, n) {
            return this._currentRequest[e](t, n)
        }
    }), ["aborted", "connection", "socket"].forEach(function (e) {
        Object.defineProperty(d.prototype, e, {
            get: function () {
                return this._currentRequest[e]
            }
        })
    }), d.prototype._performRequest = function () {
        var e = this._options.protocol, t = this._options.nativeProtocols[e];
        if (this._options.agents) {
            var n = e.substr(0, e.length - 1);
            this._options.agent = this._options.agents[n]
        }
        var o = this._currentRequest = t.request(this._options, this._onNativeResponse);
        for (var r in this._currentUrl = i.format(this._options), o._redirectable = this, u) r && o.on(r, u[r]);
        if (this._isRedirect) {
            var s = this._requestBodyBuffers;
            !function e() {
                if (0 !== s.length) {
                    var t = s.pop();
                    o.write(t.data, t.encoding, e)
                } else o.end()
            }()
        }
    }, d.prototype._processResponse = function (e) {
        var t = e.headers.location;
        if (t && !1 !== this._options.followRedirects && e.statusCode >= 300 && e.statusCode < 400) {
            if (++this._redirectCount > this._options.maxRedirects) return void this.emit("error", new Error("Max redirects exceeded."));
            var n, o = this._options.headers;
            if (307 !== e.statusCode && !(this._options.method in c)) for (n in this._options.method = "GET", this._requestBodyBuffers = [], o) /^content-/i.test(n) && delete o[n];
            if (!this._isRedirect) for (n in o) /^host$/i.test(n) && delete o[n];
            var r = i.resolve(this._currentUrl, t);
            l("redirecting to", r), Object.assign(this._options, i.parse(r)), this._isRedirect = !0, this._performRequest()
        } else e.responseUrl = this._currentUrl, this.emit("response", e), this._requestBodyBuffers = []
    }, e.exports = f({http: o, https: r}), e.exports.wrap = f
}, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
        return !(!e || !e.__CANCEL__)
    }
}, function (e, t, n) {
    "use strict";

    function i(e) {
        this.message = e
    }

    i.prototype.toString = function () {
        return "Cancel" + (this.message ? ": " + this.message : "")
    }, i.prototype.__CANCEL__ = !0, e.exports = i
}, , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const i = n(3), o = n(14);
    !function (e) {
        e.resizeToFitContent = function (e = 0, t = 0, n) {
            let o = i.remote.getCurrentWindow();
            if (e > 0 && t > 0) o.setSize(e, t); else {
                let e = document.querySelector(".td-dialog");
                o.setSize(e.offsetWidth, e.offsetHeight)
            }
            n && "function" == typeof n && n(), window.requestIdleCallback(() => {
                o.show()
            })
        }, e.autoAdaptScrollIntoView = function (e, t, n) {
            let i = t.scrollTop, o = t.getBoundingClientRect(), r = e.getBoundingClientRect(), s = o.bottom;
            void 0 !== n && "number" == typeof n && n > 0 && (s = o.top + n), r.top < o.top ? t.scrollTop = i - (o.top - r.top) : r.bottom > s && (t.scrollTop = i + (r.bottom - s))
        }, e.fitWindowPosInParent = function (e, t) {
            e || (e = i.remote.getCurrentWindow()), t || (t = e.getParentWindow()), i.ipcRenderer.sendSync(o.ThunderChannelList.channelRMSetPosition, e.getNativeWindowHandle(), t.getNativeWindowHandle())
        }, e.getWindowsInParentCenterPos = function (e, t, n) {
            n || (n = i.remote.getCurrentWindow());
            let o = n.getPosition(), r = n.getSize(), s = i.screen.getCursorScreenPoint(),
                a = i.screen.getDisplayNearestPoint(s), l = a.size.width, c = a.size.height, u = r[0], d = r[1];
            o[0] + u > l && (u = l - o[0]), o[1] + d > c && (d = c - o[1]);
            let f = o[0] + (u - e) / 2, p = o[1] + (d - t) / 2;
            return f < 0 ? f = 0 : f > l - e && (f = l - e), p < 0 ? p = 0 : p > c - t && (p = c - t), [Math.round(f), Math.round(p)]
        }, e.centerWnd = function (e, t, n) {
            do {
                if (!e || !t) break;
                let o = e.getNativeWindowHandle().readUIntLE(0, 4);
                if (!o) break;
                let r = t.getPosition(), s = t.getSize(), a = e.getSize(), l = i.screen.getCursorScreenPoint(),
                    c = i.screen.getDisplayNearestPoint(l), u = c.scaleFactor, d = c.size.width, f = c.size.height,
                    p = s[0], h = s[1];
                r[0] + p > d && (p = d - r[0]), r[1] + h > f && (h = f - r[1]);
                let v = r[0] + (p - a[0]) / 2, m = r[1] + (h - a[1]) / 2;
                v < 0 ? v = 0 : v > d - a[0] && (v = d - a[0]), m < 0 ? m = 0 : m > f - a[1] && (m = f - a[1]), n.setWindowPos(o, 0, v * u, m * u, 0, 0, 5)
            } while (0)
        }, e.bringWindowToTop = function (e) {
            e || (e = i.remote.getCurrentWindow().getNativeWindowHandle().readUIntLE(0, 4));
            i.ipcRenderer.send(o.ThunderChannelList.channelMRBringWindowToTop, e)
        }
    }(t.ThunderWindowNS || (t.ThunderWindowNS = {}))
}, function (e, t) {
    var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, , , function (e, t, n) {
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
    const o = n(1), r = n(15), s = o.default.getLogger("FetchRes"), a = {
        mock: "http://easy-mock.com/mock/59f0652c1bd72e7a888988ab/sl",
        test: "http://api-xl9-ssl.xunlei.com/sl_dev",
        pre: "http://api-xl9-ssl.xunlei.com/sl_pre",
        prod: "http://api-xl9-ssl.xunlei.com/sl"
    };

    function l({url: e, data: t, method: o = "get"}) {
        return i(this, arguments, void 0, function* () {
            s.information("fetchFromApiProxy", arguments);
            try {
                const i = yield Promise.all([r.default("GetUserID"), r.default("GetSessionID"), r.default("GetPeerID")]), [a, l, c] = i;
                s.information(i);
                let u = {
                    _sessid: l,
                    _uid: a,
                    _m: o,
                    _h: [`Peer-Id:${c}`, `User-Id:${a}`, `Session-Id:${l}`, "App-Type:pc_xunlei", ...t && t._h || []]
                };
                t && t._h && delete t._h;
                let d = Object.assign({}, u, "get" === o && t);
                s.information("fetchFromApiProxy data", d);
                const f = yield n(27);
                return f.defaults.adapter = n(28), "post" === o && (f.defaults.headers["Content-Type"] = "application/json"), f.request({
                    method: o,
                    url: e,
                    params: d,
                    data: t
                }).then(e => (s.information("fetchFromApiProxy success", e), e))
            } catch (e) {
                return {error: e}
            }
        })
    }

    t.fetchFromApiProxy = l, t.fetchSlRes = function ({url: e, data: t, method: n = "get"}, o = "prod") {
        return i(this, void 0, void 0, function* () {
            let i = a[o], c = yield r.default("GetValue", "ConfigFetchInterface", "TestServer", 0);
            return 1 === c ? i = a.test : 2 === c && (i = a.pre), s.information("当前fetchSlRes 是否测试服:", c, " 远程地址:", i), l({
                url: `${i}${e}`,
                data: t,
                method: n
            })
        })
    }, t.fetchPCRes = function ({url: e, data: t, method: n = "get"}, o = "prod", r = !1) {
        return i(this, void 0, void 0, function* () {
            let i = "http://api-xl9-ssl.xunlei.com";
            return r && (i = "http://api-shoulei-ssl.xunlei.com"), l({url: `${i}${e}`, data: t, method: n})
        })
    }
}, , function (e, t, n) {
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
}, function (e, t) {
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
}, function (e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function (e, t) {
        return n.call(e, t)
    }
}, function (e, t) {
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
                var n = e.document, i = !1, o = function () {
                    i || (i = !0, t())
                }, r = function () {
                    try {
                        n.documentElement.doScroll("left")
                    } catch (e) {
                        return void setTimeout(r, 50)
                    }
                    o()
                };
                r(), n.onreadystatechange = function () {
                    "complete" == n.readyState && (n.onreadystatechange = null, o())
                }
            }(e, t)
        }(function () {
            var e, t;
            (e = document.createElement("div")).innerHTML = n, n = null, (t = e.getElementsByTagName("svg")[0]) && (t.setAttribute("aria-hidden", "true"), t.style.position = "absolute", t.style.width = 0, t.style.height = 0, t.style.overflow = "hidden", i(t, document.body))
        })
    }(window)
}, function (e, t, n) {
    "use strict";
    var i = function () {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("select-native", {
            attrs: {
                editable: "",
                value: e.value,
                placeholder: "请选择下载目录",
                options: e.options,
                appendDirs: e.appendDirs,
                defaultDir: e.defaultDir,
                type: "file"
            }, on: {input: e.handleInput, "choose-file": e.handleChangePath}, nativeOn: {
                contextmenu: function (t) {
                    return e.handleContextMenu(t)
                }
            }
        }, [n("span", {
            staticClass: "xlx-file-size",
            class: e.spaceColor,
            attrs: {slot: "suffix"},
            slot: "suffix"
        }, [e._v(e._s(e.freeSpaceFormat))])])
    }, o = [];
    i._withStripped = !0, n.d(t, "a", function () {
        return i
    }), n.d(t, "b", function () {
        return o
    })
}, function (e, t, n) {
    "use strict";
    t.__esModule = !0;
    var i, o = n(574), r = (i = o) && i.__esModule ? i : {default: i};
    t.default = r.default || function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
    }
}, , , function (e, t) {
    e.exports = require("zlib")
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const i = n(35), o = n(2), r = n(5);
    let s = null, a = null, l = null;
    a = r.default(o.join(__rootDir, "../bin/ThunderHelper.node"));

    class c extends i.EventEmitter {
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

    t.WinMouseEvent = c, t.mouseDestroy = function () {
        l && l.destroy()
    }, t.mouseUse = function (e) {
        if (l) return;
        s = a.registerWinMouseObj(), l = new c;
        let t = new s((t, n, i, o) => {
            e(!0, t)
        });
        l.setMouse(t)
    }, t.mouseMove = function () {
        let e = null, t = new c;
        return t.once("newListener", function () {
            null === s && (s = a.registerWinMouseObj()), null !== s && (e = new s(function (e, n, i, o) {
                "move" === e && t.emit(e, n, i, o)
            }), t.setMouse(e))
        }), t
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const i = n(59), o = n(58);
    !function (e) {
        e.setStyle = function (e, t) {
            if (null !== e) {
                let n = {windowPreference: o.WindowPreferenceNS.getWindowPreference()};
                e.setStyle(i(n, t))
            }
        }
    }(t.DropDownWindowSkinNS || (t.DropDownWindowSkinNS = {}))
}, , , , , function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(102), o = n.n(i);
    for (var r in i) "default" !== r && function (e) {
        n.d(t, e, function () {
            return i[e]
        })
    }(r);
    t.default = o.a
}, function (e, t, n) {
    "use strict";
    var i = this && this.__decorate || function (e, t, n, i) {
        var o, r = arguments.length, s = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, i); else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (s = (r < 3 ? o(s) : r > 3 ? o(t, n, s) : o(t, n)) || s);
        return r > 3 && s && Object.defineProperty(t, n, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const o = n(4), r = n(10);
    let s = class extends o.Vue {
        constructor() {
            super(...arguments), this.tipsText = "", this.isShowTips = !1
        }

        handleDocClick() {
            this.tipsText = "", this.isShowTips = !1
        }

        mounted() {
            document.addEventListener("mousedown", this.handleDocClick)
        }

        destroyed() {
            document.removeEventListener("mousedown", this.handleDocClick)
        }

        handleInputChange(e) {
            let t = !0;
            do {
                if (this.isAlpha) {
                    if (e.length > 1) {
                        this.tipsText = "最大输入字符个数为1", this.isShowTips = !0, t = !1;
                        break
                    }
                    if (!r.ThunderUtil.isAlpha(e)) {
                        this.tipsText = "只能为字母", this.isShowTips = !0, t = !1;
                        break
                    }
                } else if (this.isNumber) {
                    if (!r.ThunderUtil.isDigital(e)) {
                        this.tipsText = "输入值必须为数字", this.isShowTips = !0, t = !1;
                        break
                    }
                    let n = Number(e);
                    if (void 0 !== this.min && null !== this.min && n < this.min) {
                        this.tipsText = "输入值必须大于等于" + this.min, this.isShowTips = !0, t = !1;
                        break
                    }
                    if (void 0 !== this.max && null !== this.max && n > this.max) {
                        this.tipsText = "输入值必须小于等于" + this.max, this.isShowTips = !0, t = !1;
                        break
                    }
                }
            } while (0);
            t ? this.$emit("input", e) : this.$emit("input", this.value, e)
        }
    };
    i([o.Prop({default: "top"})], s.prototype, "placement", void 0), i([o.Prop({})], s.prototype, "value", void 0), i([o.Prop({default: !1})], s.prototype, "isNumber", void 0), i([o.Prop({})], s.prototype, "max", void 0), i([o.Prop({})], s.prototype, "min", void 0), i([o.Prop({default: !1})], s.prototype, "isAlpha", void 0), s = i([o.Component], s), t.default = s
}, , , , , function (e, t) {
    e.exports = function () {
        for (var e = [].slice.call(arguments), t = e[0], n = 1; n < e.length; n++) try {
            t = t[e[n]]
        } catch (e) {
            return
        }
        return t
    }
}, function (e, t, n) {
    var i = n(109), o = n(161);
    e.exports = n(110) ? function (e, t, n) {
        return i.f(e, t, o(1, n))
    } : function (e, t, n) {
        return e[t] = n, e
    }
}, function (e, t, n) {
    var i = n(160), o = n(265), r = n(215), s = Object.defineProperty;
    t.f = n(110) ? Object.defineProperty : function (e, t, n) {
        if (i(e), t = r(t, !0), i(n), o) try {
            return s(e, t, n)
        } catch (e) {
        }
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (e[t] = n.value), e
    }
}, function (e, t, n) {
    e.exports = !n(144)(function () {
        return 7 != Object.defineProperty({}, "a", {
            get: function () {
                return 7
            }
        }).a
    })
}, function (e, t, n) {
    var i = n(268), o = n(216);
    e.exports = function (e) {
        return i(o(e))
    }
}, function (e, t, n) {
    var i = n(219)("wks"), o = n(164), r = n(81).Symbol, s = "function" == typeof r;
    (e.exports = function (e) {
        return i[e] || (i[e] = s && r[e] || (s ? r : o)("Symbol." + e))
    }).store = i
}, function (e, t) {
    e.exports = require("stream")
}, , , , function (e, t, n) {
    "use strict";
    var i = n(11), o = n(71), r = n(119), s = n(43);

    function a(e) {
        var t = new r(e), n = o(r.prototype.request, t);
        return i.extend(n, r.prototype, t), i.extend(n, t), n
    }

    var l = a(s);
    l.Axios = r, l.create = function (e) {
        return a(i.merge(s, e))
    }, l.Cancel = n(78), l.CancelToken = n(136), l.isCancel = n(77), l.all = function (e) {
        return Promise.all(e)
    }, l.spread = n(137), e.exports = l, e.exports.default = l
}, function (e, t) {
    function n(e) {
        return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
    }

    /*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
    e.exports = function (e) {
        return null != e && (n(e) || function (e) {
            return "function" == typeof e.readFloatLE && "function" == typeof e.slice && n(e.slice(0, 0))
        }(e) || !!e._isBuffer)
    }
}, function (e, t, n) {
    "use strict";
    var i = n(43), o = n(11), r = n(131), s = n(132);

    function a(e) {
        this.defaults = e, this.interceptors = {request: new r, response: new r}
    }

    a.prototype.request = function (e) {
        "string" == typeof e && (e = o.merge({url: arguments[0]}, arguments[1])), (e = o.merge(i, {method: "get"}, this.defaults, e)).method = e.method.toLowerCase();
        var t = [s, void 0], n = Promise.resolve(e);
        for (this.interceptors.request.forEach(function (e) {
            t.unshift(e.fulfilled, e.rejected)
        }), this.interceptors.response.forEach(function (e) {
            t.push(e.fulfilled, e.rejected)
        }); t.length;) n = n.then(t.shift(), t.shift());
        return n
    }, o.forEach(["delete", "get", "head", "options"], function (e) {
        a.prototype[e] = function (t, n) {
            return this.request(o.merge(n || {}, {method: e, url: t}))
        }
    }), o.forEach(["post", "put", "patch"], function (e) {
        a.prototype[e] = function (t, n, i) {
            return this.request(o.merge(i || {}, {method: e, url: t, data: n}))
        }
    }), e.exports = a
}, function (e, t, n) {
    "use strict";
    var i = n(11);
    e.exports = function (e, t) {
        i.forEach(e, function (n, i) {
            i !== t && i.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[i])
        })
    }
}, function (e, t, n) {
    "use strict";
    var i = n(11), o = n(72), r = n(74), s = n(122), a = n(123), l = n(44),
        c = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || n(124);
    e.exports = function (e) {
        return new Promise(function (t, u) {
            var d = e.data, f = e.headers;
            i.isFormData(d) && delete f["Content-Type"];
            var p = new XMLHttpRequest, h = "onreadystatechange", v = !1;
            if ("undefined" == typeof window || !window.XDomainRequest || "withCredentials" in p || a(e.url) || (p = new window.XDomainRequest, h = "onload", v = !0, p.onprogress = function () {
            }, p.ontimeout = function () {
            }), e.auth) {
                var m = e.auth.username || "", g = e.auth.password || "";
                f.Authorization = "Basic " + c(m + ":" + g)
            }
            if (p.open(e.method.toUpperCase(), r(e.url, e.params, e.paramsSerializer), !0), p.timeout = e.timeout, p[h] = function () {
                if (p && (4 === p.readyState || v) && (0 !== p.status || p.responseURL && 0 === p.responseURL.indexOf("file:"))) {
                    var n = "getAllResponseHeaders" in p ? s(p.getAllResponseHeaders()) : null, i = {
                        data: e.responseType && "text" !== e.responseType ? p.response : p.responseText,
                        status: 1223 === p.status ? 204 : p.status,
                        statusText: 1223 === p.status ? "No Content" : p.statusText,
                        headers: n,
                        config: e,
                        request: p
                    };
                    o(t, u, i), p = null
                }
            }, p.onerror = function () {
                u(l("Network Error", e, null, p)), p = null
            }, p.ontimeout = function () {
                u(l("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", p)), p = null
            }, i.isStandardBrowserEnv()) {
                var _ = n(125),
                    y = (e.withCredentials || a(e.url)) && e.xsrfCookieName ? _.read(e.xsrfCookieName) : void 0;
                y && (f[e.xsrfHeaderName] = y)
            }
            if ("setRequestHeader" in p && i.forEach(f, function (e, t) {
                void 0 === d && "content-type" === t.toLowerCase() ? delete f[t] : p.setRequestHeader(t, e)
            }), e.withCredentials && (p.withCredentials = !0), e.responseType) try {
                p.responseType = e.responseType
            } catch (t) {
                if ("json" !== e.responseType) throw t
            }
            "function" == typeof e.onDownloadProgress && p.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && p.upload && p.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function (e) {
                p && (p.abort(), u(e), p = null)
            }), void 0 === d && (d = null), p.send(d)
        })
    }
}, function (e, t, n) {
    "use strict";
    var i = n(11),
        o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
    e.exports = function (e) {
        var t, n, r, s = {};
        return e ? (i.forEach(e.split("\n"), function (e) {
            if (r = e.indexOf(":"), t = i.trim(e.substr(0, r)).toLowerCase(), n = i.trim(e.substr(r + 1)), t) {
                if (s[t] && o.indexOf(t) >= 0) return;
                s[t] = "set-cookie" === t ? (s[t] ? s[t] : []).concat([n]) : s[t] ? s[t] + ", " + n : n
            }
        }), s) : s
    }
}, function (e, t, n) {
    "use strict";
    var i = n(11);
    e.exports = i.isStandardBrowserEnv() ? function () {
        var e, t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");

        function o(e) {
            var i = e;
            return t && (n.setAttribute("href", i), i = n.href), n.setAttribute("href", i), {
                href: n.href,
                protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                host: n.host,
                search: n.search ? n.search.replace(/^\?/, "") : "",
                hash: n.hash ? n.hash.replace(/^#/, "") : "",
                hostname: n.hostname,
                port: n.port,
                pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
            }
        }

        return e = o(window.location.href), function (t) {
            var n = i.isString(t) ? o(t) : t;
            return n.protocol === e.protocol && n.host === e.host
        }
    }() : function () {
        return !0
    }
}, function (e, t, n) {
    "use strict";
    var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

    function o() {
        this.message = "String contains an invalid character"
    }

    o.prototype = new Error, o.prototype.code = 5, o.prototype.name = "InvalidCharacterError", e.exports = function (e) {
        for (var t, n, r = String(e), s = "", a = 0, l = i; r.charAt(0 | a) || (l = "=", a % 1); s += l.charAt(63 & t >> 8 - a % 1 * 8)) {
            if ((n = r.charCodeAt(a += .75)) > 255) throw new o;
            t = t << 8 | n
        }
        return s
    }
}, function (e, t, n) {
    "use strict";
    var i = n(11);
    e.exports = i.isStandardBrowserEnv() ? {
        write: function (e, t, n, o, r, s) {
            var a = [];
            a.push(e + "=" + encodeURIComponent(t)), i.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()), i.isString(o) && a.push("path=" + o), i.isString(r) && a.push("domain=" + r), !0 === s && a.push("secure"), document.cookie = a.join("; ")
        }, read: function (e) {
            var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
            return t ? decodeURIComponent(t[3]) : null
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
}, function (e, t) {
    e.exports = require("assert")
}, function (e, t, n) {
    function i() {
        var e;
        try {
            e = t.storage.debug
        } catch (e) {
        }
        return !e && "undefined" != typeof process && "env" in process && (e = process.env.DEBUG), e
    }

    (t = e.exports = n(128)).log = function () {
        return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
    }, t.formatArgs = function (e) {
        var n = this.useColors;
        if (e[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + e[0] + (n ? "%c " : " ") + "+" + t.humanize(this.diff), !n) return;
        var i = "color: " + this.color;
        e.splice(1, 0, i, "color: inherit");
        var o = 0, r = 0;
        e[0].replace(/%[a-zA-Z%]/g, function (e) {
            "%%" !== e && "%c" === e && (r = ++o)
        }), e.splice(r, 0, i)
    }, t.save = function (e) {
        try {
            null == e ? t.storage.removeItem("debug") : t.storage.debug = e
        } catch (e) {
        }
    }, t.load = i, t.useColors = function () {
        if ("undefined" != typeof window && window.process && "renderer" === window.process.type) return !0;
        if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
        return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
    }, t.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function () {
        try {
            return window.localStorage
        } catch (e) {
        }
    }(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t.formatters.j = function (e) {
        try {
            return JSON.stringify(e)
        } catch (e) {
            return "[UnexpectedJSONParseError]: " + e.message
        }
    }, t.enable(i())
}, function (e, t, n) {
    function i(e) {
        var n;

        function i() {
            if (i.enabled) {
                var e = i, o = +new Date, r = o - (n || o);
                e.diff = r, e.prev = n, e.curr = o, n = o;
                for (var s = new Array(arguments.length), a = 0; a < s.length; a++) s[a] = arguments[a];
                s[0] = t.coerce(s[0]), "string" != typeof s[0] && s.unshift("%O");
                var l = 0;
                s[0] = s[0].replace(/%([a-zA-Z%])/g, function (n, i) {
                    if ("%%" === n) return n;
                    l++;
                    var o = t.formatters[i];
                    if ("function" == typeof o) {
                        var r = s[l];
                        n = o.call(e, r), s.splice(l, 1), l--
                    }
                    return n
                }), t.formatArgs.call(e, s), (i.log || t.log || console.log.bind(console)).apply(e, s)
            }
        }

        return i.namespace = e, i.enabled = t.enabled(e), i.useColors = t.useColors(), i.color = function (e) {
            var n, i = 0;
            for (n in e) i = (i << 5) - i + e.charCodeAt(n), i |= 0;
            return t.colors[Math.abs(i) % t.colors.length]
        }(e), i.destroy = o, "function" == typeof t.init && t.init(i), t.instances.push(i), i
    }

    function o() {
        var e = t.instances.indexOf(this);
        return -1 !== e && (t.instances.splice(e, 1), !0)
    }

    (t = e.exports = i.debug = i.default = i).coerce = function (e) {
        return e instanceof Error ? e.stack || e.message : e
    }, t.disable = function () {
        t.enable("")
    }, t.enable = function (e) {
        var n;
        t.save(e), t.names = [], t.skips = [];
        var i = ("string" == typeof e ? e : "").split(/[\s,]+/), o = i.length;
        for (n = 0; n < o; n++) i[n] && ("-" === (e = i[n].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")));
        for (n = 0; n < t.instances.length; n++) {
            var r = t.instances[n];
            r.enabled = t.enabled(r.namespace)
        }
    }, t.enabled = function (e) {
        if ("*" === e[e.length - 1]) return !0;
        var n, i;
        for (n = 0, i = t.skips.length; n < i; n++) if (t.skips[n].test(e)) return !1;
        for (n = 0, i = t.names.length; n < i; n++) if (t.names[n].test(e)) return !0;
        return !1
    }, t.humanize = n(129), t.instances = [], t.names = [], t.skips = [], t.formatters = {}
}, function (e, t) {
    var n = 1e3, i = 60 * n, o = 60 * i, r = 24 * o, s = 365.25 * r;

    function a(e, t, n) {
        if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s"
    }

    e.exports = function (e, t) {
        t = t || {};
        var l, c = typeof e;
        if ("string" === c && e.length > 0) return function (e) {
            if ((e = String(e)).length > 100) return;
            var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
            if (!t) return;
            var a = parseFloat(t[1]);
            switch ((t[2] || "ms").toLowerCase()) {
                case"years":
                case"year":
                case"yrs":
                case"yr":
                case"y":
                    return a * s;
                case"days":
                case"day":
                case"d":
                    return a * r;
                case"hours":
                case"hour":
                case"hrs":
                case"hr":
                case"h":
                    return a * o;
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
                    return a * n;
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
        if ("number" === c && !1 === isNaN(e)) return t.long ? a(l = e, r, "day") || a(l, o, "hour") || a(l, i, "minute") || a(l, n, "second") || l + " ms" : function (e) {
            if (e >= r) return Math.round(e / r) + "d";
            if (e >= o) return Math.round(e / o) + "h";
            if (e >= i) return Math.round(e / i) + "m";
            if (e >= n) return Math.round(e / n) + "s";
            return e + "ms"
        }(e);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
    }
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
}, function (e, t, n) {
    "use strict";
    var i = n(11);

    function o() {
        this.handlers = []
    }

    o.prototype.use = function (e, t) {
        return this.handlers.push({fulfilled: e, rejected: t}), this.handlers.length - 1
    }, o.prototype.eject = function (e) {
        this.handlers[e] && (this.handlers[e] = null)
    }, o.prototype.forEach = function (e) {
        i.forEach(this.handlers, function (t) {
            null !== t && e(t)
        })
    }, e.exports = o
}, function (e, t, n) {
    "use strict";
    var i = n(11), o = n(133), r = n(77), s = n(43), a = n(134), l = n(135);

    function c(e) {
        e.cancelToken && e.cancelToken.throwIfRequested()
    }

    e.exports = function (e) {
        return c(e), e.baseURL && !a(e.url) && (e.url = l(e.baseURL, e.url)), e.headers = e.headers || {}, e.data = o(e.data, e.headers, e.transformRequest), e.headers = i.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), i.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (t) {
            delete e.headers[t]
        }), (e.adapter || s.adapter)(e).then(function (t) {
            return c(e), t.data = o(t.data, t.headers, e.transformResponse), t
        }, function (t) {
            return r(t) || (c(e), t && t.response && (t.response.data = o(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
        })
    }
}, function (e, t, n) {
    "use strict";
    var i = n(11);
    e.exports = function (e, t, n) {
        return i.forEach(n, function (n) {
            e = n(e, t)
        }), e
    }
}, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
    }
}, function (e, t, n) {
    "use strict";
    e.exports = function (e, t) {
        return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
    }
}, function (e, t, n) {
    "use strict";
    var i = n(78);

    function o(e) {
        if ("function" != typeof e) throw new TypeError("executor must be a function.");
        var t;
        this.promise = new Promise(function (e) {
            t = e
        });
        var n = this;
        e(function (e) {
            n.reason || (n.reason = new i(e), t(n.reason))
        })
    }

    o.prototype.throwIfRequested = function () {
        if (this.reason) throw this.reason
    }, o.source = function () {
        var e;
        return {
            token: new o(function (t) {
                e = t
            }), cancel: e
        }
    }, e.exports = o
}, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
        return function (t) {
            return e.apply(null, t)
        }
    }
}, , , , function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(240), o = n(172);
    for (var r in o) "default" !== r && function (e) {
        n.d(t, e, function () {
            return o[e]
        })
    }(r);
    var s = n(0), a = Object(s.a)(o.default, i.a, i.b, !1, null, null, null);
    a.options.__file = "src\\common\\generator-view\\conf-component\\conf-tip.vue", t.default = a.exports
}, function (e, t) {
    var n = e.exports = {version: "2.5.7"};
    "number" == typeof __e && (__e = n)
}, function (e, t) {
    e.exports = function (e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
}, function (e, t) {
    e.exports = function (e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const i = n(3), o = n(95), r = n(5), s = n(2), a = r.default(s.join(__rootDir, "../bin/ThunderHelper.node"));
    t.default = function (e) {
        let t = null, n = o.mouseMove(), r = i.remote.getCurrentWindow(), s = document.querySelector(e), l = !1,
            c = function (e) {
                t = [e.clientX, e.clientY], 0 === e.button && (l = !0)
            }, u = function (e) {
                0 === e.button && (l = !1)
            }, d = function (e) {
                if ("Escape" === e.code) return l = !1, void window.close()
            };
        return s.addEventListener("mousedown", c), s.addEventListener("mouseup", u), window.addEventListener("keydown", d), n.on("move", e => {
            if (e) {
                if (t && l) {
                    let e = i.screen.getCursorScreenPoint(), n = i.screen.getDisplayNearestPoint(e).scaleFactor,
                        o = Math.round(e.x * n - t[0] * n), s = Math.round(e.y * n - t[1] * n),
                        l = r.getNativeWindowHandle().readUIntLE(0, 4);
                    a.setWindowPos(l, 0, o, s, 0, 0, 5)
                }
            } else l = !1
        }), function () {
            s.removeEventListener("mousedown", c), s.removeEventListener("mouseup", u), window.removeEventListener("keydown", d), n.destroy()
        }
    }
}, function (e, t, n) {
    "use strict";
    var i = function () {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("td-tooltip", {
            attrs: {
                content: e.tipsText,
                visible: e.isShowTips,
                placement: e.placement
            }
        }, [n("td-input", e._b({
            attrs: {
                value: e.value,
                isNumber: e.isNumber,
                max: e.max,
                min: e.min,
                isAlpha: e.isAlpha
            }, on: {input: e.handleInputChange}
        }, "td-input", e.$attrs, !1))], 1)
    }, o = [];
    i._withStripped = !0, n.d(t, "a", function () {
        return i
    }), n.d(t, "b", function () {
        return o
    })
}, , , , , , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
        e.formatDate = function (e, t) {
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, (e.getFullYear() + "").substr(4 - RegExp.$1.length)));
            let n = {
                "M+": e.getMonth() + 1,
                "d+": e.getDate(),
                "h+": e.getHours(),
                "m+": e.getMinutes(),
                "s+": e.getSeconds()
            };
            for (let e in n) {
                let i = n[e] + "";
                new RegExp(`(${e})`).test(t) && (t = t.replace(RegExp.$1, 1 === RegExp.$1.length ? i : ("00" + (i = i)).substr(i.length)))
            }
            var i;
            if (/(f+)/.test(t)) {
                let n = e.getMilliseconds() + "";
                t = t.replace(RegExp.$1, ("000" + n).substr(n.length))
            }
            return t
        }, e.formatSeconds = function (e) {
            let t = "";
            do {
                if (e <= 0) {
                    t = "00:00:00";
                    break
                }
                let n = Math.floor(e / 3600), i = Math.floor(e / 60) % 60, o = Math.floor(e % 60);
                t = n < 10 ? "0" + n + ":" : n + ":", t += i < 10 ? "0" + i + ":" : i + ":", t += o < 10 ? "0" + o : "" + o
            } while (0);
            return t
        }, e.convertTimeToMinutes = function (e, t, n) {
            return 3600 * e + 60 * t + n
        }, e.convertMinuteToTime = function (e) {
            return [Math.floor(e / 3600), Math.floor(e / 60 % 60), Math.floor(e % 60)]
        }
    }(t.TimeHelperNS || (t.TimeHelperNS = {}))
}, , , , , function (e, t, n) {
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
    const o = n(84), r = n(36), s = n(6);
    var a;
    !function (e) {
        e[e.ShowUI_Decoding = 0] = "ShowUI_Decoding", e[e.ShowUI_Creating = 1] = "ShowUI_Creating", e[e.ShowUI_DecodeFailed = 2] = "ShowUI_DecodeFailed", e[e.ShowUI_CreateFailed = 3] = "ShowUI_CreateFailed", e[e.ShowUI_CreateSucc = 4] = "ShowUI_CreateSucc", e[e.ShowUI_CreateSuccDis = 5] = "ShowUI_CreateSuccDis"
    }(a = t.ShowType || (t.ShowType = {}));

    class l {
        constructor() {
            this.lastBirdKey = []
        }

        static GetInstance() {
            return l.instance || (l.instance = new l), l.instance
        }

        setLastBirdKey(e) {
            if (e && 0 !== e.length) {
                this.lastBirdKey = [];
                for (let t = 0; t < e.length; t++) this.lastBirdKey.push(e[t])
            }
        }

        getLastBirdKey() {
            return this.lastBirdKey
        }

        isSameBirdKey(e) {
            if (!this.lastBirdKey) return !1;
            if (e.length !== this.lastBirdKey.length) return !1;
            let t = 0;
            for (let n = 0; n < e.length; n++) e[n] === this.lastBirdKey[n] && t++;
            return t === e.length
        }
    }

    l.instance = null, t.encodeBirdKey = function (e, t) {
        return o.fetchSlRes({url: "/dlj_create", data: {url: encodeURI(t), uid: e, "Chat-Version": 2}, method: "post"})
    }, t.decodeBirdKey = function (e) {
        return i(this, void 0, void 0, function* () {
            let t = yield new Promise(e => {
                s.NativeCallModule.nativeCall.CallNativeFunction("GetThunderVersion", (t, n) => {
                    e(0 === t ? n : "")
                })
            });
            return o.fetchSlRes({
                url: "/dlj/bird_key?key=" + e.toLowerCase(),
                data: {_h: ["Chat-Version:2", "Version-Name:" + t]},
                method: "get"
            })
        })
    }, t.openBirdKeyEncodeDialog = function (e, t) {
        r.MessageBox.custom("BirdKeyShow", {showType: a.ShowUI_Creating, url: e, statData: t}).catch()
    }, t.openBirdKeyDecodeDialog = function (e, t) {
        r.MessageBox.custom("BirdKeyShow", {showType: a.ShowUI_Decoding, birdkeyChars: e, statData: t}).catch()
    }, t.saveVestUrlToConfig = function (e, t) {
        let n = t ? "vestURL" : "commonUrl";
        s.NativeCallModule.nativeCall.CallNativeFunction("GetValue", "BirdKeyVest", n, [], (t, i) => {
            let o = [];
            0 === t && (o = i), "" !== e && -1 === o.join().indexOf(e) && (o.push(e), s.NativeCallModule.nativeCall.CallNativeFunction("SetValue", "BirdKeyVest", n, o, e => e))
        })
    }, t.isVestUrl = function (e, t) {
        return i(this, void 0, void 0, function* () {
            return new Promise(n => {
                s.NativeCallModule.nativeCall.CallNativeFunction("GetValue", "BirdKeyVest", t, [], (t, i) => {
                    let o = [];
                    0 === t && (o = i), "" !== e && -1 !== o.join().indexOf(e) ? n(!0) : n(!1)
                })
            })
        })
    }, t.getBirdKeyMgr = function () {
        return l.GetInstance()
    }
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(233), o = n(174);
    for (var r in o) "default" !== r && function (e) {
        n.d(t, e, function () {
            return o[e]
        })
    }(r);
    var s = n(0), a = Object(s.a)(o.default, i.a, i.b, !1, null, null, null);
    a.options.__file = "src\\common\\generator-view\\conf-component\\conf-button.vue", t.default = a.exports
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(235), o = n(176);
    for (var r in o) "default" !== r && function (e) {
        n.d(t, e, function () {
            return o[e]
        })
    }(r);
    n(606);
    var s = n(0), a = Object(s.a)(o.default, i.a, i.b, !1, null, null, null);
    a.options.__file = "src\\common\\generator-view\\conf-component\\conf-select.vue", t.default = a.exports
}, function (e, t, n) {
    var i = n(143);
    e.exports = function (e) {
        if (!i(e)) throw TypeError(e + " is not an object!");
        return e
    }
}, function (e, t) {
    e.exports = function (e, t) {
        return {enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t}
    }
}, function (e, t, n) {
    var i = n(267), o = n(220);
    e.exports = Object.keys || function (e) {
        return i(e, o)
    }
}, function (e, t) {
    e.exports = !0
}, function (e, t) {
    var n = 0, i = Math.random();
    e.exports = function (e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + i).toString(36))
    }
}, function (e, t) {
    t.f = {}.propertyIsEnumerable
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(234), o = n(178);
    for (var r in o) "default" !== r && function (e) {
        n.d(t, e, function () {
            return o[e]
        })
    }(r);
    var s = n(0), a = Object(s.a)(o.default, i.a, i.b, !1, null, null, null);
    a.options.__file = "src\\common\\generator-view\\conf-component\\conf-input.vue", t.default = a.exports
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(229), o = n(184);
    for (var r in o) "default" !== r && function (e) {
        n.d(t, e, function () {
            return o[e]
        })
    }(r);
    var s = n(0), a = Object(s.a)(o.default, i.a, i.b, !1, null, null, null);
    a.options.__file = "src\\common\\generator-view\\conf-component\\conf-text.vue", t.default = a.exports
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(169), o = n.n(i);
    for (var r in i) "default" !== r && function (e) {
        n.d(t, e, function () {
            return i[e]
        })
    }(r);
    t.default = o.a
}, function (e, t, n) {
    "use strict";
    var i = this && this.__decorate || function (e, t, n, i) {
        var o, r = arguments.length, s = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, i); else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (s = (r < 3 ? o(s) : r > 3 ? o(t, n, s) : o(t, n)) || s);
        return r > 3 && s && Object.defineProperty(t, n, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const o = n(573), r = n(609), s = n(159), a = n(167), l = n(610), c = n(611), u = n(166), d = n(612), f = n(613),
        p = n(158), h = n(4);
    let v = class extends h.Vue {
        handleInput(e, t = "") {
            "" === t ? this.$emit("input", e, this.item.name) : this.$emit("input", e, t)
        }
    };
    i([h.Prop({})], v.prototype, "item", void 0), i([h.Prop({})], v.prototype, "formData", void 0), i([h.Prop()], v.prototype, "value", void 0), v = i([h.Component({
        components: {
            confCheckbox: o.default,
            confRadio: r.default,
            confSelect: s.default,
            confText: a.default,
            confCheckboxInput: l.default,
            confCheckboxSelect: c.default,
            confInput: u.default,
            confSpeedText: f.default,
            confTextarea: d.default,
            confBtn: p.default
        }
    })], v), t.default = v
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(171), o = n.n(i);
    for (var r in i) "default" !== r && function (e) {
        n.d(t, e, function () {
            return i[e]
        })
    }(r);
    t.default = o.a
}, function (e, t, n) {
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
    const r = n(4), s = n(213), a = n(141), l = n(158), c = n(159), u = n(166), d = n(607), f = n(608), p = n(167);
    let h = class extends r.Vue {
        handleInput(e, t = "") {
            return o(this, void 0, void 0, function* () {
                if ("" === t ? this.$emit("input", e, this.item.name) : this.$emit("input", e, t), void 0 !== this.item.linkItem && e) {
                    let t = yield s.ConfigHelperNS.getValue(this.formData[this.item.linkItem.name].section, this.formData[this.item.linkItem.name].key, "");
                    "" !== e && this.$emit("input", t, this.item.linkItem.name)
                }
            })
        }
    };
    i([r.Prop({})], h.prototype, "item", void 0), i([r.Prop({})], h.prototype, "formData", void 0), i([r.Prop()], h.prototype, "value", void 0), i([r.Prop()], h.prototype, "label", void 0), h = i([r.Component({
        components: {
            confTip: a.default,
            confBtn: l.default,
            confSelect: c.default,
            confInput: u.default,
            confSpeed: d.default,
            confSpeedTime: f.default,
            confText: p.default
        }
    })], h), t.default = h
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(173), o = n.n(i);
    for (var r in i) "default" !== r && function (e) {
        n.d(t, e, function () {
            return i[e]
        })
    }(r);
    t.default = o.a
}, function (e, t, n) {
    "use strict";
    var i = this && this.__decorate || function (e, t, n, i) {
        var o, r = arguments.length, s = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, i); else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (s = (r < 3 ? o(s) : r > 3 ? o(t, n, s) : o(t, n)) || s);
        return r > 3 && s && Object.defineProperty(t, n, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const o = n(4);
    let r = class extends o.Vue {
    };
    i([o.Prop()], r.prototype, "classes", void 0), i([o.Prop()], r.prototype, "text", void 0), r = i([o.Component({})], r), t.default = r
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(175), o = n.n(i);
    for (var r in i) "default" !== r && function (e) {
        n.d(t, e, function () {
            return i[e]
        })
    }(r);
    t.default = o.a
}, function (e, t, n) {
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
    const r = n(4), s = n(213), a = n(36), l = n(30), c = n(10), u = n(6), d = n(141);
    let f = class extends r.Vue {
        popDialog() {
            switch (this.item.boxType) {
                case"speedConfBox":
                    u.NativeCallModule.nativeCall.CallNativeFunction("ShowCustomDownloadModeDlg", () => {
                    });
                    break;
                case"browserGuideConfBox":
                    u.NativeCallModule.nativeCall.CallNativeFunction("ShowBrowserGuideDlg", () => {
                    });
                    break;
                case"function":
                    this.item.handle();
                    break;
                case"pop":
                    this.messagePop()
            }
        }

        messagePop() {
            return o(this, void 0, void 0, function* () {
                let e = c.ThunderUtil.deepCopy(this.item.pop.formData);
                for (let t in e) e[t].value = yield s.ConfigHelperNS.getValue(this.item.pop.formData[t].section, this.item.pop.formData[t].key, this.item.pop.formData[t].value);
                a.MessageBox.pop({
                    title: this.item.pop.title,
                    size: this.item.pop.size,
                    schemas: this.item.pop.schema,
                    formData: e
                }, this.item.pop.dialogOption).then(t => {
                    if (t.action === l.MessageBoxNS.Action.OK) for (let t in e) s.ConfigHelperNS.setValue(e[t].section, e[t].key, e[t].value)
                }).catch()
            })
        }
    };
    i([r.Prop({})], f.prototype, "item", void 0), i([r.Prop()], f.prototype, "classes", void 0), i([r.Prop()], f.prototype, "text", void 0), i([r.Prop()], f.prototype, "disabled", void 0), f = i([r.Component({components: {confTip: d.default}})], f), t.default = f
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(177), o = n.n(i);
    for (var r in i) "default" !== r && function (e) {
        n.d(t, e, function () {
            return i[e]
        })
    }(r);
    t.default = o.a
}, function (e, t, n) {
    "use strict";
    var i = this && this.__decorate || function (e, t, n, i) {
        var o, r = arguments.length, s = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, i); else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (s = (r < 3 ? o(s) : r > 3 ? o(t, n, s) : o(t, n)) || s);
        return r > 3 && s && Object.defineProperty(t, n, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const o = n(4), r = n(3), s = n(205), a = n(70), l = n(1).default.getLogger("conf-select");
    let c = class extends o.Vue {
        constructor() {
            super(...arguments), this.schema = null, this.tooltipVisible = !1, this.tipContent = "", this.dyNamicOptions = [], this.valueData = ""
        }

        handleInput(e) {
            void 0 === this.item.hasDeleteOption || e !== this.item.deleteOptionText ? (this.tooltipVisible || this.item.blurUpdate || this.$emit("input", e, this.item.name), this.valueData = e) : this.$emit("input", [], this.item.optionByName)
        }

        handleOutFocus() {
            this.item.blurUpdate && !this.tooltipVisible && this.$emit("input", this.valueData, this.item.name)
        }

        selectPath() {
            let e = r.remote.dialog.showOpenDialog({defaultPath: this.valueData, properties: [this.fileType]});
            void 0 !== e && (void 0 !== this.name ? this.$emit("input", e[0], this.name) : this.$emit("input", e[0], this.item.name), this.valueData = e[0])
        }

        get optionList() {
            if (this.item.optionByName && this.formData[this.item.optionByName] && this.formData[this.item.optionByName].value) {
                let e = this.formData[this.item.optionByName].value,
                    t = [...e].reverse().slice(0, this.item.maxOptionLen || e.length);
                return t.push(this.item.deleteOptionText), t
            }
            return this.options
        }

        get fileType() {
            return this.item.slotOption
        }

        get rules() {
            let e;
            do {
                if (!this.item.rules) break;
                e = this.item.rules.map(e => Array.isArray(e) ? new Function(e[0], e[1]) : e)
            } while (0);
            return e
        }

        validate(e) {
            l.information("value....", e), this.handleInput(e), void 0 !== this.item.hasDeleteOption && e === this.item.deleteOptionText || this.item.rules && this.schema.validate({[this.item.name]: e}, (e, t) => {
                l.information("errors", e), null === e ? this.tooltipVisible = !1 : (l.information("路径有误", e), this.tipContent = e[0].message, this.tooltipVisible = !0)
            })
        }

        created() {
            this.item.rules && (this.schema = new s.default({[this.item.name]: this.rules})), void 0 !== this.value ? this.valueData = this.value.value.toString() : this.valueData = this.formData[this.item.name].value.toString()
        }
    };
    i([o.Prop({})], c.prototype, "item", void 0), i([o.Prop()], c.prototype, "label", void 0), i([o.Prop({})], c.prototype, "formData", void 0), i([o.Prop()], c.prototype, "options", void 0), i([o.Prop()], c.prototype, "value", void 0), i([o.Prop()], c.prototype, "disabled", void 0), i([o.Prop()], c.prototype, "classes", void 0), i([o.Prop()], c.prototype, "name", void 0), i([o.Prop()], c.prototype, "placeHolder", void 0), c = i([o.Component({components: {SelectNative: a.default}})], c), t.default = c
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(179), o = n.n(i);
    for (var r in i) "default" !== r && function (e) {
        n.d(t, e, function () {
            return i[e]
        })
    }(r);
    t.default = o.a
}, function (e, t, n) {
    "use strict";
    var i = this && this.__decorate || function (e, t, n, i) {
        var o, r = arguments.length, s = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, i); else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (s = (r < 3 ? o(s) : r > 3 ? o(t, n, s) : o(t, n)) || s);
        return r > 3 && s && Object.defineProperty(t, n, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const o = n(205), r = n(4), s = n(158);
    let a = class extends r.Vue {
        constructor() {
            super(...arguments), this.shortcutKey = "", this.funKey = !0, this.valueData = " ", this.canRegister = !1, this.schema = null, this.tooltip = "", this.tooltipVisible = !1
        }

        get rules() {
            let e;
            do {
                if (!this.item.rules) break;
                e = this.item.rules.map(e => Array.isArray(e) ? new Function(e[0], e[1]) : e)
            } while (0);
            return e
        }

        handleInput(e) {
            this.valueData = e, this.$emit("input", e, this.name)
        }

        handleChange(e) {
            let t = e.target;
            this.valueData = t.value, void 0 !== this.item.ShortcutKey && this.canRegister ? this.$emit("input", t.value, this.name) : void 0 === this.item.ShortcutKey && this.$emit("input", t.value, this.name)
        }

        handleKeyDown(e) {
            if (void 0 !== this.item.ShortcutKey) {
                let t = /Digit\d/.test(e.code) || e.keyCode >= 65 && e.keyCode <= 90;
                if (this.shortcutKey = "", this.funKey = !1, this.canRegister = !1, this.valueData = "", "Backspace" === e.key) return this.valueData = "无", void this.$emit("input", "", this.name);
                e.altKey && (this.shortcutKey = "Alt+"), e.ctrlKey && (this.shortcutKey = "" === this.shortcutKey ? "Crtl+" : `${this.shortcutKey}Crtl+`), e.shiftKey && (this.shortcutKey = "" === this.shortcutKey ? "Shift+" : `${this.shortcutKey}Shift+`);
                let n = "Alt" === e.key || "Shift" === e.key || "Control" === e.key ? "" : t ? e.code[e.code.length - 1] : e.key;
                this.valueData = this.shortcutKey + n, "" !== n && (this.funKey = !0), this.shortcutKey + n !== n && "" !== n && (this.canRegister = !0, this.valueData = this.shortcutKey + n, this.$emit("input", this.valueData, this.name))
            }
        }

        handleKeyup() {
            this.funKey || void 0 === this.item.ShortcutKey || (this.valueData = "无", this.$emit("input", "", this.name))
        }

        mounted() {
            this.valueData = this.value.value
        }

        validate(e) {
            this.item.rules && this.schema.validate({[this.item.name]: e}, (e, t) => {
                this.tooltipVisible = null !== e
            })
        }

        outFocus() {
            this.tooltipVisible = !1
        }

        created() {
            this.item.rules && (this.schema = new o.default({[this.item.name]: this.rules}))
        }
    };
    i([r.Prop()], a.prototype, "item", void 0), i([r.Prop({})], a.prototype, "formData", void 0), i([r.Prop()], a.prototype, "disabled", void 0), i([r.Prop()], a.prototype, "value", void 0), i([r.Prop()], a.prototype, "name", void 0), i([r.Prop()], a.prototype, "label", void 0), a = i([r.Component({components: {confBtn: s.default}})], a), t.default = a
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(181), o = n.n(i);
    for (var r in i) "default" !== r && function (e) {
        n.d(t, e, function () {
            return i[e]
        })
    }(r);
    t.default = o.a
}, function (e, t, n) {
    "use strict";
    var i = this && this.__decorate || function (e, t, n, i) {
        var o, r = arguments.length, s = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, i); else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (s = (r < 3 ? o(s) : r > 3 ? o(t, n, s) : o(t, n)) || s);
        return r > 3 && s && Object.defineProperty(t, n, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const o = n(205), r = n(4);
    let s = class extends r.Vue {
        constructor() {
            super(...arguments), this.schema = null, this.tooltip = "", this.tooltipVisible = !1, this.timeout = null
        }

        get rules() {
            return (this.item.rules || []).map(e => Array.isArray(e) ? new Function(e[0], e[1]) : e)
        }

        get doEmit() {
            return this.item.doEmit ? new Function(this.item.doEmit[0], this.item.doEmit[1]) : null
        }

        get doBlur() {
            return this.item.doBlur ? new Function(this.item.doBlur[0], this.item.doBlur[1]) : null
        }

        get sliderValue() {
            let e;
            return e = "number" == typeof this.value ? this.value : "object" == typeof this.value ? Number(this.value.value) : Number(this.value), this.item.scales && this.item.scales.length ? Math.min(Math.max(this.item.scales[0], e), this.item.scales[this.item.scales.length - 1]) : e
        }

        handleSliderUpdate(e) {
            this.handleInput(e.toString())
        }

        handleInput(e) {
            this.doEmit ? this.doEmit(this.item.name, e, this.value.value) : this.$emit("input", e, this.item.name), this.doValidate(e)
        }

        doValidate(e) {
            this.schema && this.schema.validate({[this.item.name]: e}, (e, t) => {
                null === e ? this.hideTooltip() : this.showTooltip(e[0].message)
            })
        }

        handleBlur() {
            let e;
            e = "object" == typeof this.value ? this.value.value : this.value, this.doBlur && this.doBlur(this.item.name, e), this.$nextTick(() => {
                let e;
                e = "object" == typeof this.value ? this.value.value : this.value, this.doValidate(e)
            })
        }

        showTooltip(e) {
            this.tooltip = e, this.$refs.tooltip.show(this.$refs.input.$el)
        }

        hideTooltip() {
            this.$refs.tooltip.hide()
        }

        created() {
            this.item.rules && (this.schema = new o.default({[this.item.name]: this.rules}))
        }
    };
    i([r.Prop({})], s.prototype, "item", void 0), i([r.Prop()], s.prototype, "value", void 0), i([r.Prop()], s.prototype, "disabled", void 0), s = i([r.Component], s), t.default = s
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(183), o = n.n(i);
    for (var r in i) "default" !== r && function (e) {
        n.d(t, e, function () {
            return i[e]
        })
    }(r);
    t.default = o.a
}, function (e, t, n) {
    "use strict";
    var i = this && this.__decorate || function (e, t, n, i) {
        var o, r = arguments.length, s = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, i); else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (s = (r < 3 ? o(s) : r > 3 ? o(t, n, s) : o(t, n)) || s);
        return r > 3 && s && Object.defineProperty(t, n, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const o = n(4), r = n(70);
    let s = class extends o.Vue {
        constructor() {
            super(...arguments), this.data = [{
                label: "开始限速时间",
                options: [{index: 0, type: "hour"}, {index: 1, type: "minute"}]
            }, {
                label: "结束限速时间",
                options: [{index: 2, type: "hour"}, {index: 3, type: "minute"}]
            }], this.hours = Array.from({length: 24}, (e, t) => t), this.minutes = Array.from({length: 60}, (e, t) => t)
        }

        handleInput(e, t) {
            let n = this.value.slice(0), i = Object.assign({}, n[t]);
            i.value = e, n[t] = i, this.$emit("input", n, this.item.name)
        }
    };
    i([o.Prop({})], s.prototype, "item", void 0), i([o.Prop()], s.prototype, "value", void 0), i([o.Prop()], s.prototype, "disabled", void 0), s = i([o.Component({components: {SelectNative: r.default}})], s), t.default = s
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(185), o = n.n(i);
    for (var r in i) "default" !== r && function (e) {
        n.d(t, e, function () {
            return i[e]
        })
    }(r);
    t.default = o.a
}, function (e, t, n) {
    "use strict";
    var i = this && this.__decorate || function (e, t, n, i) {
        var o, r = arguments.length, s = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, i); else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (s = (r < 3 ? o(s) : r > 3 ? o(t, n, s) : o(t, n)) || s);
        return r > 3 && s && Object.defineProperty(t, n, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const o = n(4), r = n(6);
    let s = class extends o.Vue {
        constructor() {
            super(...arguments), this.userId = ""
        }

        get clas() {
            return void 0 !== this.classes ? this.classes : this.item.classes
        }

        get textContent() {
            return void 0 !== this.item.text ? this.item.text : this.text
        }

        mounted() {
            void 0 !== this.item.isReleventUser && this.item.isReleventUser && (r.NativeCallModule.nativeCall.AttachNativeEvent("onLoginSuc", e => {
                this.userId = e
            }), r.NativeCallModule.nativeCall.AttachNativeEvent("onLogout", () => {
                this.userId = ""
            }))
        }
    };
    i([o.Prop({})], s.prototype, "item", void 0), i([o.Prop()], s.prototype, "classes", void 0), i([o.Prop()], s.prototype, "extIndex", void 0), i([o.Prop()], s.prototype, "text", void 0), s = i([o.Component({})], s), t.default = s
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(187), o = n.n(i);
    for (var r in i) "default" !== r && function (e) {
        n.d(t, e, function () {
            return i[e]
        })
    }(r);
    t.default = o.a
}, function (e, t, n) {
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
    const r = n(4), s = n(141), a = n(158), l = n(166), c = n(6), u = n(15);
    let d = class extends r.Vue {
        constructor() {
            super(...arguments), this.userId = ""
        }

        handleInput(e, t = "") {
            "" === t ? this.$emit("input", e, this.item.name) : this.$emit("input", e, t)
        }

        setUserId() {
            return o(this, void 0, void 0, function* () {
                let e = yield u.default("GetUserID");
                this.userId = e
            })
        }

        mounted() {
            return o(this, void 0, void 0, function* () {
                void 0 !== this.item.isReleventUser && this.item.isReleventUser && (this.setUserId(), c.NativeCallModule.nativeCall.AttachNativeEvent("onLoginSuc", e => {
                    this.userId = e
                }), c.NativeCallModule.nativeCall.AttachNativeEvent("onLogout", () => {
                    this.userId = ""
                }))
            })
        }
    };
    i([r.Prop({})], d.prototype, "item", void 0), i([r.Prop({})], d.prototype, "formData", void 0), i([r.Prop()], d.prototype, "value", void 0), d = i([r.Component({
        components: {
            confTip: s.default,
            confBtn: a.default,
            confInput: l.default
        }
    })], d), t.default = d
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(189), o = n.n(i);
    for (var r in i) "default" !== r && function (e) {
        n.d(t, e, function () {
            return i[e]
        })
    }(r);
    t.default = o.a
}, function (e, t, n) {
    "use strict";
    var i = this && this.__decorate || function (e, t, n, i) {
        var o, r = arguments.length, s = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, i); else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (s = (r < 3 ? o(s) : r > 3 ? o(t, n, s) : o(t, n)) || s);
        return r > 3 && s && Object.defineProperty(t, n, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const o = n(4), r = n(141), s = n(166), a = n(167), l = n(159);
    let c = class extends o.Vue {
        handleInput(e, t = "") {
            "" === t ? this.$emit("input", e, this.item.name) : this.$emit("input", e, t)
        }
    };
    i([o.Prop({})], c.prototype, "item", void 0), i([o.Prop({})], c.prototype, "formData", void 0), c = i([o.Component({
        components: {
            confTip: r.default,
            confInput: s.default,
            confText: a.default,
            confSelect: l.default
        }
    })], c), t.default = c
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(191), o = n.n(i);
    for (var r in i) "default" !== r && function (e) {
        n.d(t, e, function () {
            return i[e]
        })
    }(r);
    t.default = o.a
}, function (e, t, n) {
    "use strict";
    var i = this && this.__decorate || function (e, t, n, i) {
        var o, r = arguments.length, s = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, i); else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (s = (r < 3 ? o(s) : r > 3 ? o(t, n, s) : o(t, n)) || s);
        return r > 3 && s && Object.defineProperty(t, n, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const o = n(4), r = n(141), s = n(167), a = n(159);
    let l = class extends o.Vue {
        handleInput(e, t = "") {
            "" === t ? this.$emit("input", e, this.item.name) : this.$emit("input", e, t)
        }
    };
    i([o.Prop({})], l.prototype, "item", void 0), i([o.Prop({})], l.prototype, "formData", void 0), l = i([o.Component({
        components: {
            confTip: r.default,
            confText: s.default,
            confSelect: a.default
        }
    })], l), t.default = l
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(193), o = n.n(i);
    for (var r in i) "default" !== r && function (e) {
        n.d(t, e, function () {
            return i[e]
        })
    }(r);
    t.default = o.a
}, function (e, t, n) {
    "use strict";
    var i = this && this.__decorate || function (e, t, n, i) {
        var o, r = arguments.length, s = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, i); else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (s = (r < 3 ? o(s) : r > 3 ? o(t, n, s) : o(t, n)) || s);
        return r > 3 && s && Object.defineProperty(t, n, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const o = n(4);
    let r = class extends o.Vue {
        handleChange(e) {
            let t = e.target;
            this.$emit("input", t.value, this.item.name)
        }
    };
    i([o.Prop({})], r.prototype, "item", void 0), i([o.Prop({})], r.prototype, "formData", void 0), i([o.Prop()], r.prototype, "value", void 0), i([o.Prop()], r.prototype, "label", void 0), r = i([o.Component({components: {}})], r), t.default = r
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(195), o = n.n(i);
    for (var r in i) "default" !== r && function (e) {
        n.d(t, e, function () {
            return i[e]
        })
    }(r);
    t.default = o.a
}, function (e, t, n) {
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
    const r = n(4), s = n(213);
    let a = class extends r.Vue {
        constructor() {
            super(...arguments), this.maxDownloadSpeed = "", this.maxUploadSpeed = ""
        }

        onFormDataChange(e) {
            this.updateMaxDownloadSpeed(), this.updateMaxUploadSpeed()
        }

        standardNumber(e) {
            let t = parseInt(e + "", 10);
            return t > 9 ? t + "" : "0" + t
        }

        updateMaxDownloadSpeed() {
            return o(this, void 0, void 0, function* () {
                let e = "不限速";
                this.formData["ConfigNet-ConfigNet_Custom_DownloadSpeedChk"].value && (e = (yield s.ConfigHelperNS.getValue("ConfigNet", "ConfigNet_Custom_MaxDownloadSpeedTmp", 1024)) + "KB/S"), this.maxDownloadSpeed = e
            })
        }

        updateMaxUploadSpeed() {
            return o(this, void 0, void 0, function* () {
                let e = "不限速";
                this.formData["ConfigNet-ConfigNet_Custom_UploadSpeedChk"].value && (e = (yield s.ConfigHelperNS.getValue("ConfigNet", "ConfigNet_Custom_MaxUploadSpeedTmp", 1024)) + "KB/S"), this.maxUploadSpeed = e
            })
        }
    };
    i([r.Prop({})], a.prototype, "item", void 0), i([r.Prop({})], a.prototype, "formData", void 0), i([r.Watch("formData", {
        immediate: !0,
        deep: !0
    })], a.prototype, "onFormDataChange", null), a = i([r.Component], a), t.default = a
}, , , , , function (e, t, n) {
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
    const o = n(29), r = n(27), s = n(2), a = n(9), l = n(1).default.getLogger("Axios.Helper");
    !function (e) {
        e.getFileSizeWithUrlAW = function (e) {
            return i(this, void 0, void 0, function* () {
                let t = 0;
                do {
                    let n = o.parse(e);
                    if ("https:" !== n.protocol && "http:" !== n.protocol) break;
                    let i = null;
                    try {
                        i = yield r.default.get(e, {responseType: "arraybuffer"})
                    } catch (e) {
                        l.warning(e)
                    }
                    if (null !== i && void 0 !== i.status && 200 === i.status) {
                        let e = i.headers["content-length"];
                        void 0 !== e && (t = parseInt(e, 10))
                    }
                } while (0);
                return t
            })
        }, e.downloadFileAW = function (e, t) {
            return i(this, void 0, void 0, function* () {
                let n = !1;
                do {
                    let i = null;
                    try {
                        i = yield r.default.get(e, {responseType: "arraybuffer"})
                    } catch (e) {
                        l.information(e);
                        break
                    }
                    if (null !== i && void 0 !== i.status && 200 === i.status && void 0 !== i.data && null !== i.data && "" !== i.data) {
                        let e = s.dirname(t), o = yield a.FileSystemAWNS.mkdirsAW(e);
                        o && (o = yield a.FileSystemAWNS.writeFileAW(t, i.data)) && (n = !0)
                    }
                } while (0);
                return n
            })
        }
    }(t.AxiosNS || (t.AxiosNS = {}))
}, , , function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(90), o = n(63);
    for (var r in o) "default" !== r && function (e) {
        n.d(t, e, function () {
            return o[e]
        })
    }(r);
    var s = n(0), a = Object(s.a)(o.default, i.a, i.b, !1, null, null, null);
    a.options.__file = "src\\common\\views\\path-selector.vue", t.default = a.exports
}, function (e, t, n) {
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
    const o = n(6), r = n(21), s = n(1).default.getLogger("path-selector"), a = "PathAndCategory",
        l = "historyDownloadPaths", c = 8;
    !function (e) {
        function t() {
            return new Promise(e => {
                o.NativeCallModule.nativeCall.CallNativeFunction("GetConfigValue", a, l, [], (t, n) => {
                    t === r.NativeFunctionErrorCode.Success ? (s.information("getHistoryPaths", n), e(n)) : e([])
                })
            })
        }

        e.getMaxHistoryPathsLen = function () {
            return c
        }, e.getHistoryPaths = t, e.addHistoryPaths = function (e) {
            return i(this, void 0, void 0, function* () {
                let n = yield t();
                do {
                    if (void 0 === e || null === e || "" === e) break;
                    if ("\\" === e[e.length - 1] && (e = e.slice(0, e.length - 1)), n.includes(e)) break;
                    n.length >= c && n.splice(0, 1), n.push(e), s.information("SetConfigValue", n), o.NativeCallModule.nativeCall.CallNativeFunction("SetConfigValue", a, l, n, e => {
                        0 !== e ? s.information("写配置出错") : (s.information("setvalue success"), o.NativeCallModule.nativeCall.CallNativeFunction("SaveConfig", e => {
                            0 !== e ? s.information("配置文件保存失败") : s.information("配置文件保存 success")
                        }))
                    })
                } while (0)
            })
        }
    }(t.HistoryPathsNS || (t.HistoryPathsNS = {}))
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(91), o = n.n(i), r = n(39), s = n.n(r), a = /%[sdj%]/g, l = function () {
    };

    function c() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        var i = 1, o = t[0], r = t.length;
        if ("function" == typeof o) return o.apply(null, t.slice(1));
        if ("string" == typeof o) {
            for (var s = String(o).replace(a, function (e) {
                if ("%%" === e) return "%";
                if (i >= r) return e;
                switch (e) {
                    case"%s":
                        return String(t[i++]);
                    case"%d":
                        return Number(t[i++]);
                    case"%j":
                        try {
                            return JSON.stringify(t[i++])
                        } catch (e) {
                            return "[Circular]"
                        }
                        break;
                    default:
                        return e
                }
            }), l = t[i]; i < r; l = t[++i]) s += " " + l;
            return s
        }
        return o
    }

    function u(e, t) {
        return void 0 === e || null === e || (!("array" !== t || !Array.isArray(e) || e.length) || !(!function (e) {
            return "string" === e || "url" === e || "hex" === e || "email" === e || "pattern" === e
        }(t) || "string" != typeof e || e))
    }

    function d(e, t, n) {
        var i = 0, o = e.length;
        !function r(s) {
            if (s && s.length) n(s); else {
                var a = i;
                i += 1, a < o ? t(e[a], r) : n([])
            }
        }([])
    }

    function f(e, t, n, i) {
        if (t.first) return d(function (e) {
            var t = [];
            return Object.keys(e).forEach(function (n) {
                t.push.apply(t, e[n])
            }), t
        }(e), n, i);
        var o = t.firstFields || [];
        !0 === o && (o = Object.keys(e));
        var r = Object.keys(e), s = r.length, a = 0, l = [], c = function (e) {
            l.push.apply(l, e), ++a === s && i(l)
        };
        r.forEach(function (t) {
            var i = e[t];
            -1 !== o.indexOf(t) ? d(i, n, c) : function (e, t, n) {
                var i = [], o = 0, r = e.length;

                function s(e) {
                    i.push.apply(i, e), ++o === r && n(i)
                }

                e.forEach(function (e) {
                    t(e, s)
                })
            }(i, n, c)
        })
    }

    function p(e) {
        return function (t) {
            return t && t.message ? (t.field = t.field || e.fullField, t) : {message: t, field: t.field || e.fullField}
        }
    }

    function h(e, t) {
        if (t) for (var n in t) if (t.hasOwnProperty(n)) {
            var i = t[n];
            "object" === (void 0 === i ? "undefined" : s()(i)) && "object" === s()(e[n]) ? e[n] = o()({}, e[n], i) : e[n] = i
        }
        return e
    }

    var v = function (e, t, n, i, o, r) {
        !e.required || n.hasOwnProperty(e.field) && !u(t, r || e.type) || i.push(c(o.messages.required, e.fullField))
    };
    var m = function (e, t, n, i, o) {
        (/^\s+$/.test(t) || "" === t) && i.push(c(o.messages.whitespace, e.fullField))
    }, g = {
        email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        url: new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", "i"),
        hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
    }, _ = {
        integer: function (e) {
            return _.number(e) && parseInt(e, 10) === e
        }, float: function (e) {
            return _.number(e) && !_.integer(e)
        }, array: function (e) {
            return Array.isArray(e)
        }, regexp: function (e) {
            if (e instanceof RegExp) return !0;
            try {
                return !!new RegExp(e)
            } catch (e) {
                return !1
            }
        }, date: function (e) {
            return "function" == typeof e.getTime && "function" == typeof e.getMonth && "function" == typeof e.getYear
        }, number: function (e) {
            return !isNaN(e) && "number" == typeof e
        }, object: function (e) {
            return "object" === (void 0 === e ? "undefined" : s()(e)) && !_.array(e)
        }, method: function (e) {
            return "function" == typeof e
        }, email: function (e) {
            return "string" == typeof e && !!e.match(g.email) && e.length < 255
        }, url: function (e) {
            return "string" == typeof e && !!e.match(g.url)
        }, hex: function (e) {
            return "string" == typeof e && !!e.match(g.hex)
        }
    };
    var y = "enum";
    var b = {
        required: v, whitespace: m, type: function (e, t, n, i, o) {
            if (e.required && void 0 === t) v(e, t, n, i, o); else {
                var r = e.type;
                ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"].indexOf(r) > -1 ? _[r](t) || i.push(c(o.messages.types[r], e.fullField, e.type)) : r && (void 0 === t ? "undefined" : s()(t)) !== e.type && i.push(c(o.messages.types[r], e.fullField, e.type))
            }
        }, range: function (e, t, n, i, o) {
            var r = "number" == typeof e.len, s = "number" == typeof e.min, a = "number" == typeof e.max, l = t,
                u = null, d = "number" == typeof t, f = "string" == typeof t, p = Array.isArray(t);
            if (d ? u = "number" : f ? u = "string" : p && (u = "array"), !u) return !1;
            p && (l = t.length), f && (l = t.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, "_").length), r ? l !== e.len && i.push(c(o.messages[u].len, e.fullField, e.len)) : s && !a && l < e.min ? i.push(c(o.messages[u].min, e.fullField, e.min)) : a && !s && l > e.max ? i.push(c(o.messages[u].max, e.fullField, e.max)) : s && a && (l < e.min || l > e.max) && i.push(c(o.messages[u].range, e.fullField, e.min, e.max))
        }, enum: function (e, t, n, i, o) {
            e[y] = Array.isArray(e[y]) ? e[y] : [], -1 === e[y].indexOf(t) && i.push(c(o.messages[y], e.fullField, e[y].join(", ")))
        }, pattern: function (e, t, n, i, o) {
            e.pattern && (e.pattern instanceof RegExp ? (e.pattern.lastIndex = 0, e.pattern.test(t) || i.push(c(o.messages.pattern.mismatch, e.fullField, t, e.pattern))) : "string" == typeof e.pattern && (new RegExp(e.pattern).test(t) || i.push(c(o.messages.pattern.mismatch, e.fullField, t, e.pattern))))
        }
    };
    var C = "enum";
    var w = function (e, t, n, i, o) {
        var r = e.type, s = [];
        if (e.required || !e.required && i.hasOwnProperty(e.field)) {
            if (u(t, r) && !e.required) return n();
            b.required(e, t, i, s, o, r), u(t, r) || b.type(e, t, i, s, o)
        }
        n(s)
    }, x = {
        string: function (e, t, n, i, o) {
            var r = [];
            if (e.required || !e.required && i.hasOwnProperty(e.field)) {
                if (u(t, "string") && !e.required) return n();
                b.required(e, t, i, r, o, "string"), u(t, "string") || (b.type(e, t, i, r, o), b.range(e, t, i, r, o), b.pattern(e, t, i, r, o), !0 === e.whitespace && b.whitespace(e, t, i, r, o))
            }
            n(r)
        }, method: function (e, t, n, i, o) {
            var r = [];
            if (e.required || !e.required && i.hasOwnProperty(e.field)) {
                if (u(t) && !e.required) return n();
                b.required(e, t, i, r, o), void 0 !== t && b.type(e, t, i, r, o)
            }
            n(r)
        }, number: function (e, t, n, i, o) {
            var r = [];
            if (e.required || !e.required && i.hasOwnProperty(e.field)) {
                if (u(t) && !e.required) return n();
                b.required(e, t, i, r, o), void 0 !== t && (b.type(e, t, i, r, o), b.range(e, t, i, r, o))
            }
            n(r)
        }, boolean: function (e, t, n, i, o) {
            var r = [];
            if (e.required || !e.required && i.hasOwnProperty(e.field)) {
                if (u(t) && !e.required) return n();
                b.required(e, t, i, r, o), void 0 !== t && b.type(e, t, i, r, o)
            }
            n(r)
        }, regexp: function (e, t, n, i, o) {
            var r = [];
            if (e.required || !e.required && i.hasOwnProperty(e.field)) {
                if (u(t) && !e.required) return n();
                b.required(e, t, i, r, o), u(t) || b.type(e, t, i, r, o)
            }
            n(r)
        }, integer: function (e, t, n, i, o) {
            var r = [];
            if (e.required || !e.required && i.hasOwnProperty(e.field)) {
                if (u(t) && !e.required) return n();
                b.required(e, t, i, r, o), void 0 !== t && (b.type(e, t, i, r, o), b.range(e, t, i, r, o))
            }
            n(r)
        }, float: function (e, t, n, i, o) {
            var r = [];
            if (e.required || !e.required && i.hasOwnProperty(e.field)) {
                if (u(t) && !e.required) return n();
                b.required(e, t, i, r, o), void 0 !== t && (b.type(e, t, i, r, o), b.range(e, t, i, r, o))
            }
            n(r)
        }, array: function (e, t, n, i, o) {
            var r = [];
            if (e.required || !e.required && i.hasOwnProperty(e.field)) {
                if (u(t, "array") && !e.required) return n();
                b.required(e, t, i, r, o, "array"), u(t, "array") || (b.type(e, t, i, r, o), b.range(e, t, i, r, o))
            }
            n(r)
        }, object: function (e, t, n, i, o) {
            var r = [];
            if (e.required || !e.required && i.hasOwnProperty(e.field)) {
                if (u(t) && !e.required) return n();
                b.required(e, t, i, r, o), void 0 !== t && b.type(e, t, i, r, o)
            }
            n(r)
        }, enum: function (e, t, n, i, o) {
            var r = [];
            if (e.required || !e.required && i.hasOwnProperty(e.field)) {
                if (u(t) && !e.required) return n();
                b.required(e, t, i, r, o), t && b[C](e, t, i, r, o)
            }
            n(r)
        }, pattern: function (e, t, n, i, o) {
            var r = [];
            if (e.required || !e.required && i.hasOwnProperty(e.field)) {
                if (u(t, "string") && !e.required) return n();
                b.required(e, t, i, r, o), u(t, "string") || b.pattern(e, t, i, r, o)
            }
            n(r)
        }, date: function (e, t, n, i, o) {
            var r = [];
            if (e.required || !e.required && i.hasOwnProperty(e.field)) {
                if (u(t) && !e.required) return n();
                if (b.required(e, t, i, r, o), !u(t)) {
                    var s = void 0;
                    s = "number" == typeof t ? new Date(t) : t, b.type(e, s, i, r, o), s && b.range(e, s.getTime(), i, r, o)
                }
            }
            n(r)
        }, url: w, hex: w, email: w, required: function (e, t, n, i, o) {
            var r = [], a = Array.isArray(t) ? "array" : void 0 === t ? "undefined" : s()(t);
            b.required(e, t, i, r, o, a), n(r)
        }
    };

    function S() {
        return {
            default: "Validation error on field %s",
            required: "%s is required",
            enum: "%s must be one of %s",
            whitespace: "%s cannot be empty",
            date: {
                format: "%s date %s is invalid for format %s",
                parse: "%s date could not be parsed, %s is invalid ",
                invalid: "%s date %s is invalid"
            },
            types: {
                string: "%s is not a %s",
                method: "%s is not a %s (function)",
                array: "%s is not an %s",
                object: "%s is not an %s",
                number: "%s is not a %s",
                date: "%s is not a %s",
                boolean: "%s is not a %s",
                integer: "%s is not an %s",
                float: "%s is not a %s",
                regexp: "%s is not a valid %s",
                email: "%s is not a valid %s",
                url: "%s is not a valid %s",
                hex: "%s is not a valid %s"
            },
            string: {
                len: "%s must be exactly %s characters",
                min: "%s must be at least %s characters",
                max: "%s cannot be longer than %s characters",
                range: "%s must be between %s and %s characters"
            },
            number: {
                len: "%s must equal %s",
                min: "%s cannot be less than %s",
                max: "%s cannot be greater than %s",
                range: "%s must be between %s and %s"
            },
            array: {
                len: "%s must be exactly %s in length",
                min: "%s cannot be less than %s in length",
                max: "%s cannot be greater than %s in length",
                range: "%s must be between %s and %s in length"
            },
            pattern: {mismatch: "%s value %s does not match pattern %s"},
            clone: function () {
                var e = JSON.parse(JSON.stringify(this));
                return e.clone = this.clone, e
            }
        }
    }

    var k = S();

    function P(e) {
        this.rules = null, this._messages = k, this.define(e)
    }

    P.prototype = {
        messages: function (e) {
            return e && (this._messages = h(S(), e)), this._messages
        }, define: function (e) {
            if (!e) throw new Error("Cannot configure a schema with no rules");
            if ("object" !== (void 0 === e ? "undefined" : s()(e)) || Array.isArray(e)) throw new Error("Rules must be an object");
            this.rules = {};
            var t = void 0, n = void 0;
            for (t in e) e.hasOwnProperty(t) && (n = e[t], this.rules[t] = Array.isArray(n) ? n : [n])
        }, validate: function (e) {
            var t = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = arguments[2],
                r = e, a = n, u = i;
            if ("function" == typeof a && (u = a, a = {}), this.rules && 0 !== Object.keys(this.rules).length) {
                if (a.messages) {
                    var d = this.messages();
                    d === k && (d = S()), h(d, a.messages), a.messages = d
                } else a.messages = this.messages();
                var v = void 0, m = void 0, g = {};
                (a.keys || Object.keys(this.rules)).forEach(function (n) {
                    v = t.rules[n], m = r[n], v.forEach(function (i) {
                        var s = i;
                        "function" == typeof s.transform && (r === e && (r = o()({}, r)), m = r[n] = s.transform(m)), (s = "function" == typeof s ? {validator: s} : o()({}, s)).validator = t.getValidationMethod(s), s.field = n, s.fullField = s.fullField || n, s.type = t.getType(s), s.validator && (g[n] = g[n] || [], g[n].push({
                            rule: s,
                            value: m,
                            source: r,
                            field: n
                        }))
                    })
                });
                var _ = {};
                f(g, a, function (e, t) {
                    var n = e.rule,
                        i = !("object" !== n.type && "array" !== n.type || "object" !== s()(n.fields) && "object" !== s()(n.defaultField));

                    function r(e, t) {
                        return o()({}, t, {fullField: n.fullField + "." + e})
                    }

                    function u() {
                        var s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                        if (Array.isArray(s) || (s = [s]), s.length && l("async-validator:", s), s.length && n.message && (s = [].concat(n.message)), s = s.map(p(n)), a.first && s.length) return _[n.field] = 1, t(s);
                        if (i) {
                            if (n.required && !e.value) return s = n.message ? [].concat(n.message).map(p(n)) : a.error ? [a.error(n, c(a.messages.required, n.field))] : [], t(s);
                            var u = {};
                            if (n.defaultField) for (var d in e.value) e.value.hasOwnProperty(d) && (u[d] = n.defaultField);
                            for (var f in u = o()({}, u, e.rule.fields)) if (u.hasOwnProperty(f)) {
                                var h = Array.isArray(u[f]) ? u[f] : [u[f]];
                                u[f] = h.map(r.bind(null, f))
                            }
                            var v = new P(u);
                            v.messages(a.messages), e.rule.options && (e.rule.options.messages = a.messages, e.rule.options.error = a.error), v.validate(e.value, e.rule.options || a, function (e) {
                                t(e && e.length ? s.concat(e) : e)
                            })
                        } else t(s)
                    }

                    i = i && (n.required || !n.required && e.value), n.field = e.field;
                    var d = n.validator(n, e.value, u, e.source, a);
                    d && d.then && d.then(function () {
                        return u()
                    }, function (e) {
                        return u(e)
                    })
                }, function (e) {
                    !function (e) {
                        var t, n = void 0, i = void 0, o = [], r = {};
                        for (n = 0; n < e.length; n++) t = e[n], Array.isArray(t) ? o = o.concat.apply(o, t) : o.push(t);
                        if (o.length) for (n = 0; n < o.length; n++) r[i = o[n].field] = r[i] || [], r[i].push(o[n]); else o = null, r = null;
                        u(o, r)
                    }(e)
                })
            } else u && u()
        }, getType: function (e) {
            if (void 0 === e.type && e.pattern instanceof RegExp && (e.type = "pattern"), "function" != typeof e.validator && e.type && !x.hasOwnProperty(e.type)) throw new Error(c("Unknown rule type %s", e.type));
            return e.type || "string"
        }, getValidationMethod: function (e) {
            if ("function" == typeof e.validator) return e.validator;
            var t = Object.keys(e), n = t.indexOf("message");
            return -1 !== n && t.splice(n, 1), 1 === t.length && "required" === t[0] ? x.required : x[this.getType(e)] || !1
        }
    }, P.register = function (e, t) {
        if ("function" != typeof t) throw new Error("Cannot register a validator by type, validator is not a function");
        x[e] = t
    }, P.messages = k;
    t.default = P
}, , , function (e, t, n) {
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
    const o = n(550), r = n(9), s = n(2), a = n(1).default.getLogger("Thunder.base.unzip-utilities"),
        l = n(5).default(s.join(__rootDir, "../bin/ThunderHelper.node"));
    !function (e) {
        function t(e, t) {
            return i(this, void 0, void 0, function* () {
                let n = !1, o = yield function (e) {
                    return i(this, void 0, void 0, function* () {
                        let t = null;
                        if (null !== e) try {
                            t = yield e.async("nodebuffer")
                        } catch (e) {
                            a.warning(e)
                        }
                        return t
                    })
                }(t);
                return null !== o && (n = yield r.FileSystemAWNS.writeFileAW(e, o)), n
            })
        }

        function n(e, t) {
            return i(this, void 0, void 0, function* () {
                let n = !0;
                if (null !== t) {
                    (yield r.FileSystemAWNS.existsAW(e)) || (n = yield r.FileSystemAWNS.mkdirAW(e))
                }
                return n
            })
        }

        e.uncompressZipFileEx = function (e, l) {
            return i(this, void 0, void 0, function* () {
                let c = !1;
                if (void 0 !== e && void 0 !== l) {
                    let u = new o, d = yield r.FileSystemAWNS.readFileAW(l);
                    if (null !== d && d.length > 0 && null !== u) {
                        let o = yield function (e, t) {
                            return i(this, void 0, void 0, function* () {
                                let n = null;
                                try {
                                    n = yield e.loadAsync(t)
                                } catch (e) {
                                    a.warning(e)
                                }
                                return n
                            })
                        }(u, d);
                        null !== o && null !== o.files && (c = yield function (e, o, l) {
                            return i(this, arguments, void 0, function* () {
                                a.information("extractFiles", arguments);
                                let i = !1, c = yield r.FileSystemAWNS.existsAW(l), u = c;
                                if (a.information("exsitStatus", c), a.information("mkStatus", u), c || (u = yield r.FileSystemAWNS.mkdirAW(l)), u) {
                                    let c = Object.keys(o), u = !0;
                                    for (let i = 0; i < c.length; i++) {
                                        let o = c[i], d = `${l}` + o, f = e.file(o);
                                        if (a.information(s.dirname(s.join(l, o))), yield r.FileSystemAWNS.mkdirsAW(s.dirname(s.join(l, o))), null !== f) {
                                            if (!(u = yield t(d, f))) {
                                                a.warning("write file failure");
                                                break
                                            }
                                        } else if (!(u = yield n(d, e.folder(o)))) {
                                            a.warning("write folder failure");
                                            break
                                        }
                                    }
                                    u && (i = !0)
                                }
                                return i
                            })
                        }(u, o.files, e))
                    }
                }
                return c
            })
        }, e.uncompressZipFile = function (e, t) {
            return i(this, void 0, void 0, function* () {
                return new Promise(n => {
                    l.asyncUnZipFile(t, e, e => {
                        n(e)
                    })
                })
            })
        }
    }(t.UnzipUtilitiesAWNS || (t.UnzipUtilitiesAWNS = {}))
}, , , , , function (e, t, n) {
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
    const o = n(6), r = n(21);
    !function (e) {
        e.getValue = function (e, t, n) {
            return i(this, void 0, void 0, function* () {
                return new Promise(i => {
                    o.NativeCallModule.nativeCall.CallNativeFunction("GetConfigValue", e, t, n, (e, t) => {
                        e === r.NativeFunctionErrorCode.Success ? i(t) : i(n)
                    })
                })
            })
        }, e.setValue = function (e, t, n) {
            return i(this, void 0, void 0, function* () {
                return new Promise((i, s) => {
                    o.NativeCallModule.nativeCall.CallNativeFunction("SetConfigValue", e, t, n, e => {
                        e === r.NativeFunctionErrorCode.Success ? i() : s(new Error("SetConfigValue error"))
                    })
                })
            })
        }
    }(t.ConfigHelperNS || (t.ConfigHelperNS = {}))
}, function (e, t, n) {
    var i = n(81), o = n(142), r = n(577), s = n(108), a = n(88), l = function (e, t, n) {
        var c, u, d, f = e & l.F, p = e & l.G, h = e & l.S, v = e & l.P, m = e & l.B, g = e & l.W,
            _ = p ? o : o[t] || (o[t] = {}), y = _.prototype, b = p ? i : h ? i[t] : (i[t] || {}).prototype;
        for (c in p && (n = t), n) (u = !f && b && void 0 !== b[c]) && a(_, c) || (d = u ? b[c] : n[c], _[c] = p && "function" != typeof b[c] ? n[c] : m && u ? r(d, i) : g && b[c] == d ? function (e) {
            var t = function (t, n, i) {
                if (this instanceof e) {
                    switch (arguments.length) {
                        case 0:
                            return new e;
                        case 1:
                            return new e(t);
                        case 2:
                            return new e(t, n)
                    }
                    return new e(t, n, i)
                }
                return e.apply(this, arguments)
            };
            return t.prototype = e.prototype, t
        }(d) : v && "function" == typeof d ? r(Function.call, d) : d, v && ((_.virtual || (_.virtual = {}))[c] = d, e & l.R && y && !y[c] && s(y, c, d)))
    };
    l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, l.U = 64, l.R = 128, e.exports = l
}, function (e, t, n) {
    var i = n(143);
    e.exports = function (e, t) {
        if (!i(e)) return e;
        var n, o;
        if (t && "function" == typeof(n = e.toString) && !i(o = n.call(e))) return o;
        if ("function" == typeof(n = e.valueOf) && !i(o = n.call(e))) return o;
        if (!t && "function" == typeof(n = e.toString) && !i(o = n.call(e))) return o;
        throw TypeError("Can't convert object to primitive value")
    }
}, function (e, t) {
    e.exports = function (e) {
        if (void 0 == e) throw TypeError("Can't call method on  " + e);
        return e
    }
}, function (e, t) {
    var n = Math.ceil, i = Math.floor;
    e.exports = function (e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? i : n)(e)
    }
}, function (e, t, n) {
    var i = n(219)("keys"), o = n(164);
    e.exports = function (e) {
        return i[e] || (i[e] = o(e))
    }
}, function (e, t, n) {
    var i = n(142), o = n(81), r = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
    (e.exports = function (e, t) {
        return r[e] || (r[e] = void 0 !== t ? t : {})
    })("versions", []).push({
        version: i.version,
        mode: n(163) ? "pure" : "global",
        copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
    })
}, function (e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function (e, t) {
    t.f = Object.getOwnPropertySymbols
}, function (e, t) {
    e.exports = {}
}, function (e, t, n) {
    var i = n(109).f, o = n(88), r = n(112)("toStringTag");
    e.exports = function (e, t, n) {
        e && !o(e = n ? e : e.prototype, r) && i(e, r, {configurable: !0, value: t})
    }
}, function (e, t, n) {
    t.f = n(112)
}, function (e, t, n) {
    var i = n(81), o = n(142), r = n(163), s = n(224), a = n(109).f;
    e.exports = function (e) {
        var t = o.Symbol || (o.Symbol = r ? {} : i.Symbol || {});
        "_" == e.charAt(0) || e in t || a(t, e, {value: s.f(e)})
    }
}, , function (e, t, n) {
    "use strict";
    var i = function () {
        var e = this.$createElement;
        return (this._self._c || e)(this.item.type, {
            tag: "component",
            attrs: {item: this.item, label: this.item.label, formData: this.formData, value: this.value},
            on: {input: this.handleInput}
        })
    }, o = [];
    i._withStripped = !0, n.d(t, "a", function () {
        return i
    }), n.d(t, "b", function () {
        return o
    })
}, function (e, t, n) {
    "use strict";
    var i = function () {
        var e = this.$createElement, t = this._self._c || e;
        return t("div", {class: this.item.outerClass}, [t("label", {staticClass: "td-textarea"}, [t("textarea", {
            staticClass: "td-textarea__inner",
            class: this.item.classes,
            attrs: {placeholder: this.item.placeholder},
            domProps: {value: this.formData[this.item.name].value},
            on: {change: this.handleChange}
        })])])
    }, o = [];
    i._withStripped = !0, n.d(t, "a", function () {
        return i
    }), n.d(t, "b", function () {
        return o
    })
}, function (e, t, n) {
    "use strict";
    var i = function () {
        var e = this, t = e.$createElement;
        return (e._self._c || t)("p", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: !e.item.isReleventUser || e.item.isReleventUser && "" !== e.userId,
                expression: "!item.isReleventUser || (item.isReleventUser && userId !== '')"
            }], class: e.clas, style: e.item.style || ""
        }, [e._v("\n   " + e._s(e.textContent) + "\n ")])
    }, o = [];
    i._withStripped = !0, n.d(t, "a", function () {
        return i
    }), n.d(t, "b", function () {
        return o
    })
}, function (e, t, n) {
    "use strict";
    var i = function () {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("div", {class: e.item.classes}, [n("p", [e._v("\n    限速时间段：\n    " + e._s(e.standardNumber(e.formData["ConfigNet-ConfigNet_Custom_Time_Begin_Hour"].value)) + ":\n    " + e._s(e.standardNumber(e.formData["ConfigNet-ConfigNet_Custom_Time_Begin_Minute"].value)) + "-" + e._s(e.standardNumber(e.formData["ConfigNet-ConfigNet_Custom_Time_End_Hour"].value)) + ":\n    " + e._s(e.standardNumber(e.formData["ConfigNet-ConfigNet_Custom_Time_End_Minute"].value)) + "\n  ")]), e._v(" "), n("p", [e._v("\n    最大下载速度: " + e._s(e.maxDownloadSpeed) + "   \n    最大上传速度: " + e._s(e.maxUploadSpeed))])])
    }, o = [];
    i._withStripped = !0, n.d(t, "a", function () {
        return i
    }), n.d(t, "b", function () {
        return o
    })
}, function (e, t, n) {
    "use strict";
    var i = function () {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("div", {class: e.item.outerClass}, [n("ul", {class: e.item.ulClasses}, e._l(e.item.option, function (t, i) {
            return n("li", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !e.item.isReleventUser || e.item.isReleventUser && "" !== e.userId,
                    expression: "!item.isReleventUser || (item.isReleventUser && userId !== '')"
                }], key: i, class: e.item.classes
            }, [n("td-radio", {
                attrs: {
                    name: e.item.key,
                    value: "" + e.formData[e.item.name].value,
                    label: t,
                    disabled: e.item.disableds && e.item.disableds[i]
                }, on: {input: e.handleInput}
            }, [e._v("\n        " + e._s(e.item.labels[i] || e.lable) + "\n      ")]), e._v(" "), e.item.extEles ? n(e.item.extEles[i].type, {
                tag: "component",
                attrs: {
                    text: e.item.extEles[i].text,
                    item: e.item.extEles[i],
                    label: e.item.extEles[i] && e.item.extEles[i].label,
                    classes: e.item.extEles[i].classes,
                    disabled: e.formData[e.item.name].value !== e.item.extActiveValue,
                    name: e.item.extEles[i].name,
                    value: e.formData[e.item.extEles[i].name],
                    formData: e.formData
                },
                on: {input: e.handleInput}
            }) : e._e()], 1)
        })), e._v(" "), e.item.tip ? n("p", {class: e.item.tipClass}, [e._v("\n    " + e._s(e.item.tip) + "\n  ")]) : e._e()])
    }, o = [];
    i._withStripped = !0, n.d(t, "a", function () {
        return i
    }), n.d(t, "b", function () {
        return o
    })
}, function (e, t, n) {
    "use strict";
    var i = function () {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("div", {class: e.item.outerClass}, [n("td-checkbox", {
            attrs: {value: !(0 == e.formData[e.item.name].value)},
            on: {input: e.handleInput}
        }, [e._v("\n    " + e._s(e.item.label) + "\n  ")]), e._v(" "), e._l(e.item.extEles, function (t) {
            return [n(t.type, {
                key: t.name,
                tag: "component",
                attrs: {
                    item: t,
                    classes: t.classes,
                    text: t.text,
                    formData: e.formData,
                    name: t.name,
                    disabled: !e.formData[e.item.name].value,
                    value: e.formData[t.name]
                },
                on: {input: e.handleInput}
            })]
        }), e._v(" "), e.item.tip ? n("p", {class: e.item.tipClass}, [e._v("\n    " + e._s(e.item.tip) + "\n  ")]) : e._e()], 2)
    }, o = [];
    i._withStripped = !0, n.d(t, "a", function () {
        return i
    }), n.d(t, "b", function () {
        return o
    })
}, function (e, t, n) {
    "use strict";
    var i = function () {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("div", {class: e.item.outerClass}, [n("td-button", {
            class: e.classes || e.item.classes,
            style: e.item.style || "",
            attrs: {disabled: e.disabled},
            on: {click: e.popDialog}
        }, [e._v("\n   " + e._s(e.text || e.item.text) + "\n")]), e._v(" "), e._l(e.item.extEles, function (e) {
            return [n(e.type, {
                key: e.name,
                tag: "component",
                style: e.style || "",
                attrs: {item: e, classes: e.classes, text: e.text}
            })]
        })], 2)
    }, o = [];
    i._withStripped = !0, n.d(t, "a", function () {
        return i
    }), n.d(t, "b", function () {
        return o
    })
}, function (e, t, n) {
    "use strict";
    var i = function () {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("div", {
            class: e.item.outClasses,
            style: e.item.style
        }, [n("td-tooltip", {
            attrs: {
                content: e.item.toolTipsContent || "",
                visible: e.tooltipVisible,
                placement: "top"
            }
        }, [n("td-input", {
            ref: "input",
            class: e.item.classes,
            attrs: {
                label: e.label || e.item.label,
                value: e.valueData,
                placeholder: e.item.placeholder,
                disabled: e.disabled
            },
            on: {
                input: e.validate,
                change: e.handleChange,
                keydown: e.handleKeyDown,
                keyup: e.handleKeyup,
                blur: e.outFocus
            }
        })], 1), e._v(" "), e._l(e.item.extEles, function (t) {
            return [n(t.type, {
                key: t.name,
                tag: "component",
                attrs: {
                    item: t,
                    classes: t.classes,
                    text: t.text,
                    formData: e.formData,
                    disabled: e.disabled || !e.formData[e.item.name].value,
                    value: e.formData[t.name]
                },
                on: {input: e.handleInput}
            })]
        })], 2)
    }, o = [];
    i._withStripped = !0, n.d(t, "a", function () {
        return i
    }), n.d(t, "b", function () {
        return o
    })
}, function (e, t, n) {
    "use strict";
    var i = function () {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("div", {
            class: e.item.outerClass,
            style: e.item.style
        }, ["" !== e.label ? n("span", [e._v("\n    " + e._s(e.label) + "\n  ")]) : e._e(), e._v(" "), n("td-tooltip", {
            attrs: {
                content: e.tipContent,
                visible: e.tooltipVisible,
                placement: "top"
            }
        }, [n("select-native", {
            class: e.classes || e.item.classes,
            attrs: {
                value: e.valueData,
                options: e.optionList || e.item.option,
                placeholder: e.placeHolder || e.formData[e.item.name].value + "",
                editable: e.item.editable,
                type: e.item.selectType,
                disabled: e.disabled
            },
            on: {input: e.validate, blur: e.handleOutFocus, "choose-file": e.selectPath}
        })], 1)], 1)
    }, o = [];
    i._withStripped = !0, n.d(t, "a", function () {
        return i
    }), n.d(t, "b", function () {
        return o
    })
}, function (e, t, n) {
    "use strict";
    var i = function () {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("div", [n("td-checkbox", {
            attrs: {value: !(0 == e.formData[e.item.name].value)},
            on: {input: e.handleInput}
        }, [e._v("\n    " + e._s(e.item.label) + "\n  ")]), e._v(" "), e._l(e.item.extEles, function (t, i) {
            return e.item.extEles ? n(t.type, {
                key: i,
                tag: "component",
                attrs: {
                    formData: e.formData,
                    placeHolder: e.formData[t.name] && e.formData[t.name].value,
                    item: t,
                    value: e.formData[t.name],
                    disabled: !(e.formData[e.item.name] && e.formData[e.item.name].value),
                    name: t.name,
                    label: t.label,
                    classes: t.classes,
                    text: t.text
                },
                on: {input: e.handleInput}
            }) : e._e()
        })], 2)
    }, o = [];
    i._withStripped = !0, n.d(t, "a", function () {
        return i
    }), n.d(t, "b", function () {
        return o
    })
}, function (e, t, n) {
    "use strict";
    var i = function () {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("div", {class: e.item.classes}, [n("td-checkbox", {
            attrs: {value: !(0 == e.formData[e.item.name].value)},
            on: {input: e.handleInput}
        }, [e._v("\n    " + e._s(e.item.label) + "\n  ")]), e._v(" "), e._l(e.item.extEles, function (t, i) {
            return e.item.extEles ? n(t.type, {
                key: i,
                tag: "component",
                attrs: {
                    formData: e.formData,
                    item: t,
                    placeHolder: e.formData[t.name] && e.formData[t.name].value,
                    disabled: !e.formData[e.item.name].value
                },
                on: {input: e.handleInput}
            }) : e._e()
        })], 2)
    }, o = [];
    i._withStripped = !0, n.d(t, "a", function () {
        return i
    }), n.d(t, "b", function () {
        return o
    })
}, function (e, t, n) {
    "use strict";
    var i = function () {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("div", {staticClass: "xlx-dialog-setting__speed-time"}, [n("ul", e._l(e.data, function (t) {
            return n("li", {
                key: t.label,
                staticClass: "xlx-dialog-setting__item"
            }, [n("span", {staticClass: "xlx-dialog-setting__text"}, [e._v(e._s(t.label))]), e._v(" "), e._l(t.options, function (t) {
                return n("div", {
                    key: t.index,
                    staticClass: "xlx-dialog-setting__option"
                }, [n("select-native", {
                    staticClass: "xlx-select-size-1",
                    attrs: {
                        value: e.value[t.index].value.toString(),
                        options: "hour" === t.type ? e.hours : e.minutes,
                        disabled: e.disabled
                    },
                    on: {
                        input: function (n) {
                            return e.handleInput(n, t.index)
                        }
                    }
                }), e._v(" "), n("span", {staticClass: "xlx-dialog-setting__text"}, [e._v(e._s("hour" === t.type ? "时" : "分"))])], 1)
            })], 2)
        }))])
    }, o = [];
    i._withStripped = !0, n.d(t, "a", function () {
        return i
    }), n.d(t, "b", function () {
        return o
    })
}, , function (e, t, n) {
    "use strict";
    var i = function () {
        var e = this.$createElement;
        return (this._self._c || e)("i", {class: this.classes, attrs: {title: this.text}})
    }, o = [];
    i._withStripped = !0, n.d(t, "a", function () {
        return i
    }), n.d(t, "b", function () {
        return o
    })
}, function (e, t, n) {
    "use strict";
    var i = function () {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("div", {class: e.item.outerClass}, [n("td-slider", {
            attrs: {
                value: e.sliderValue,
                marks: e.item.marks,
                scales: e.item.scales,
                disabled: e.disabled
            }, on: {input: e.handleSliderUpdate}
        }), e._v(" "), n("div", {staticClass: "xlx-dialog-setting__speed-input"}, [n("td-input", {
            ref: "input",
            staticClass: "xlx-setting__input-3",
            attrs: {value: e.value.value, disabled: e.disabled},
            on: {input: e.handleInput, blur: e.handleBlur}
        }), e._v(" "), n("popup", {
            ref: "tooltip",
            staticClass: "td-tooltip",
            attrs: {direction: "top", display: e.tooltipVisible, padding: 10},
            on: {
                "update:display": function (t) {
                    e.tooltipVisible = t
                }
            }
        }, [n("p", {staticClass: "td-tooltip__inner"}, [e._v(e._s(e.tooltip))])]), e._v(" "), n("span", {staticClass: "xlx-setting__text"}, [e._v("KB/s")])], 1)], 1)
    }, o = [];
    i._withStripped = !0, n.d(t, "a", function () {
        return i
    }), n.d(t, "b", function () {
        return o
    })
}, , , , , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
        let t;
        !function (e) {
            e[e.Default = 0] = "Default", e[e.Normal = 1] = "Normal", e[e.Vip = 2] = "Vip", e[e.SuperVip = 3] = "SuperVip"
        }(t = e.SkinType || (e.SkinType = {})), e.defaultSkinInfo = {
            type: t.Default,
            id: 1
        }, e.cacheDir = `${__profilesDir}/speedcurve-skin`
    }(t.SpeedCurveSkinHelperNS || (t.SpeedCurveSkinHelperNS = {}))
}, , , , function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(146), o = n(101);
    for (var r in o) "default" !== r && function (e) {
        n.d(t, e, function () {
            return o[e]
        })
    }(r);
    var s = n(0), a = Object(s.a)(o.default, i.a, i.b, !1, null, null, null);
    a.options.__file = "src\\common\\views\\limit-input.vue", t.default = a.exports
}, function (e, t, n) {
    e.exports = function (e) {
        function t(i) {
            if (n[i]) return n[i].exports;
            var o = n[i] = {i, l: !1, exports: {}};
            return e[i].call(o.exports, o, o.exports, t), o.l = !0, o.exports
        }

        var n = {};
        return t.m = e, t.c = n, t.i = function (e) {
            return e
        }, t.d = function (e, n, i) {
            t.o(e, n) || Object.defineProperty(e, n, {configurable: !1, enumerable: !0, get: i})
        }, t.n = function (e) {
            var n = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "/dist/", t(t.s = 4)
    }([function (e, t) {
        e.exports = {
            inserted: function (e, t, n) {
                var i = n.context.$refs[t.arg];
                i && i.addItem({el: e, value: t.value})
            }, unbind: function (e, t, n) {
                var i = n.context.$refs[t.arg];
                i && i.removeItem({el: e, value: t.value})
            }
        }
    }, function (e, t, n) {
        var i = n(5)(n(2), n(6), null, null, null);
        e.exports = i.exports
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = n(3);
        t.default = {
            name: "Popup",
            props: {
                appendToBody: {type: Boolean, default: !0},
                arrowClass: String,
                direction: {type: String, default: "bottom"},
                display: {type: Boolean, default: !1},
                padding: {type: Number, default: 0},
                trigger: {type: String, default: "hover"},
                scrollShow: {type: Boolean, default: !0}
            },
            data: function () {
                return {
                    arrowStyle: {},
                    delay: 100,
                    directionMap: {top: "height", left: "width"},
                    secondDirection: "",
                    left: 0,
                    top: 0,
                    currentElement: null,
                    willHide: !1
                }
            },
            computed: {
                directionClass: function () {
                    var e = /(top)|(bottom)|(left)|(right)/i, t = e.exec(this.direction) || [],
                        n = this.secondDirection ? e.exec(this.secondDirection)[0] : "", i = t[0] || "";
                    return "" === n ? "popup-" + i : "popup-" + n
                }, triggerEvent: function () {
                    switch (this.trigger) {
                        case"hover":
                            return "mouseenter";
                        case"focus":
                            return "focus";
                        case"click":
                            return "click"
                    }
                }, unTriggerEl: function () {
                    return "click" === this.trigger ? document : this.$el
                }, unTriggerEvent: function () {
                    switch (this.trigger) {
                        case"hover":
                            return "mouseleave";
                        case"focus":
                            return "blur";
                        case"click":
                            return "click"
                    }
                }
            },
            mounted: function () {
                this.appendToBody && document.body.appendChild(this.$el), this.$el.addEventListener(this.triggerEvent, this.handlePopupVisible), this.unTriggerEl.addEventListener(this.unTriggerEvent, this.handlePopupInvisible), this.handleResizeThrottle = n.i(i.a)(this.handleResize, 16), window.addEventListener("resize", this.handleResizeThrottle)
            },
            beforeDestroy: function () {
                this.$el.removeEventListener(this.triggerEvent, this.handlePopupVisible), this.unTriggerEl.removeEventListener(this.unTriggerEvent, this.handlePopupInvisible), window.removeEventListener("resize", this.handleResizeThrottle)
            },
            destroyed: function () {
                this.appendToBody && this.$el && document.body.hasChildNodes(this.$el) && document.body.removeChild(this.$el)
            },
            methods: {
                addItem: function (e) {
                    e.el.handleVisible = this.handleVisible.bind(this, e.value, e.el), e.el.addEventListener(this.triggerEvent, e.el.handleVisible), "click" !== this.trigger && (e.el.handleInvisible = this.handleInvisible.bind(this, e.value), e.el.addEventListener(this.unTriggerEvent, e.el.handleInvisible)), this.bindScroll(e.el)
                }, removeItem: function (e) {
                    e.el.removeEventListener(this.triggerEvent, e.el.handleVisible), "click" !== this.trigger && e.el.removeEventListener(this.unTriggerEvent, e.el.handleInvisible), this.unbindScroll(e.el)
                }, bindScroll: function (e) {
                    for (e = e.parentNode; e;) e.addEventListener("scroll", this.handleScroll), e = e.parentNode
                }, unbindScroll: function (e) {
                    for (e = e.parentNode; e;) e.removeEventListener("scroll", this.handleScroll), e = e.parentNode
                }, computePosition: function (e, t) {
                    e = e.getBoundingClientRect();
                    var n = 0, i = 0, o = (t = t.getBoundingClientRect()).top - e.height - this.padding,
                        r = t.left + t.width + this.padding, s = t.top + t.height + this.padding,
                        a = t.left - e.width - this.padding;
                    /(top)|(bottom)/i.test(this.direction) ? (n = t.left + (t.width - e.width) / 2, "bottomStart" !== this.direction && "topStart" !== this.direction || (n = t.left), "bottomEnd" !== this.direction && "topEnd" !== this.direction || (n = t.left - e.width + t.width), n < 0 ? (n = 0, this.arrowStyle = {left: (t.left + t.right) / 2 + "px"}) : n + e.width > window.innerWidth ? (n = window.innerWidth - e.width, this.arrowStyle = {left: (t.left + t.right) / 2 - n + "px"}) : this.arrowStyle = {left: (t.left + t.right) / 2 - n + "px"}, "top" === this.direction || "topStart" === this.direction || "topEnd" === this.direction ? o < 0 && s + e.height <= window.innerHeight ? (i = s, this.secondDirection = "bottom", "topStart" === this.direction && (this.secondDirection = "bottomStart", this.arrowStyle = {left: (t.left + t.right) / 2 - n + "px"}), "topEnd" === this.direction && (this.secondDirection = "bottomEnd", this.arrowStyle = {left: (t.left + t.right) / 2 - n + "px"})) : (i = o, this.secondDirection = "", this.arrowStyle = {left: (t.left + t.right) / 2 - n + "px"}) : s + e.height > window.innerHeight && o >= 0 ? (i = o, this.secondDirection = "top", "bottomStart" === this.direction && (this.secondDirection = "topStart", this.arrowStyle = {left: (t.left + t.right) / 2 - n + "px"}), "bottomEnd" === this.direction && (this.secondDirection = "topEnd", this.arrowStyle = {left: (t.left + t.right) / 2 - n + "px"})) : (i = s, this.secondDirection = "", this.arrowStyle = {left: (t.left + t.right) / 2 - n + "px"})) : /(left)|(right)/i.test(this.direction) && (i = t.top + (t.height - e.height) / 2, "leftStart" !== this.direction && "rightStart" !== this.direction || (i = t.top), "leftEnd" !== this.direction && "rightEnd" !== this.direction || (i = t.top - e.height + t.height), i < 0 ? (i = 0, this.arrowStyle = {top: (t.top + t.bottom) / 2 + "px"}) : i + e.height > window.innerHeight ? (i = window.innerHeight - e.height, this.arrowStyle = {top: (t.top + t.bottom) / 2 - i + "px"}) : this.arrowStyle = {top: (t.top + t.bottom) / 2 - i + "px"}, "left" === this.direction || "leftStart" === this.direction || "leftEnd" === this.direction ? a < 0 && r + e.width <= window.innerWidth ? (n = r, this.secondDirection = "right", "leftStart" === this.direction && (this.secondDirection = "rightStart", this.arrowStyle = {top: (t.top + t.bottom) / 2 - i + "px"}), "leftEnd" === this.direction && (this.secondDirection = "rightEnd", this.arrowStyle = {top: (t.top + t.bottom) / 2 - i + "px"})) : (n = a, this.secondDirection = "", this.arrowStyle = {top: (t.top + t.bottom) / 2 - i + "px"}) : r + e.width > window.innerWidth && a >= 0 ? (n = a, this.secondDirection = "left", "rightStart" === this.direction && (this.secondDirection = "leftStart", this.arrowStyle = {top: (t.top + t.bottom) / 2 - i + "px"}), "rightEnd" === this.direction && (this.secondDirection = "leftEnd", this.arrowStyle = {top: (t.top + t.bottom) / 2 - i + "px"})) : (n = r, this.secondDirection = "", this.arrowStyle = {top: (t.top + t.bottom) / 2 - i + "px"})), this.top = i, this.left = n
                }, handleVisible: function (e, t, n) {
                    var i = this;
                    if ("click" === this.trigger && this.display && !0 !== n) return this.handleInvisible(e);
                    this.willHide = !1, this.currentElement = t, this.currentValue = e, this.$emit("update:display", !0), this.$emit("show", e), this.$nextTick(function () {
                        setTimeout(function () {
                            i.computePosition(i.$el, i.currentElement)
                        })
                    })
                }, handleInvisible: function (e) {
                    var t = this;
                    "click" === this.trigger ? (this.$emit("update:display", !1), this.$emit("hide", e)) : (this.willHide = !0, setTimeout(function () {
                        t.willHide && (t.$emit("update:display", !1), t.$emit("hide", e))
                    }, this.delay))
                }, handleScroll: function () {
                    this.scrollShow ? this.display && this.computePosition(this.$el, this.currentElement) : (this.$emit("update:display", !1), this.$emit("hide"))
                }, handlePopupVisible: function (e) {
                    e.stopPropagation(), this.willHide = !1, this.$emit("update:display", !0), this.$emit("show", this.value)
                }, handlePopupInvisible: function (e) {
                    var t = this;
                    "click" === this.trigger && this.isClosest(e.target, this.currentElement) || ("click" === this.trigger ? (this.$emit("update:display", !1), this.$emit("hide", this.value)) : (this.willHide = !0, setTimeout(function () {
                        t.willHide && (t.$emit("update:display", !1), t.$emit("hide", t.value))
                    }, this.delay)))
                }, handleResize: function () {
                    this.display && this.handleVisible(this.value, this.currentElement, !0)
                }, show: function (e, t) {
                    this.handleVisible(t, e)
                }, hide: function () {
                    this.handleInvisible()
                }, isDirectionLine: function (e) {
                    return "top" === e || "bottom" === e ? "top" === this.direction || "bottom" === this.direction : "left" === this.direction || "right" === this.direction
                }, isClosest: function (e, t) {
                    return e !== document && (e === t || this.isClosest(e.parentNode, t))
                }
            }
        }
    }, function (e, t, n) {
        "use strict";
        t.a = function (e, t) {
            var n = this, i = 0;
            return function () {
                for (var o = arguments.length, r = Array(o), s = 0; s < o; s++) r[s] = arguments[s];
                var a = +new Date;
                a - i > t && (e.apply(n, r), i = a)
            }
        }
    }, function (e, t, n) {
        var i = n(0), o = n(1);
        o.install = function (e) {
            e.directive("popup", i), e.component(o.name, o)
        }, e.exports = o
    }, function (e, t) {
        e.exports = function (e, t, n, i, o) {
            var r, s = e = e || {}, a = typeof e.default;
            "object" !== a && "function" !== a || (r = e, s = e.default);
            var l, c = "function" == typeof s ? s.options : s;
            if (t && (c.render = t.render, c.staticRenderFns = t.staticRenderFns), i && (c._scopeId = i), o ? (l = function (e) {
                (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), n && n.call(this, e), e && e._registeredComponents && e._registeredComponents.add(o)
            }, c._ssrRegister = l) : n && (l = n), l) {
                var u = c.functional, d = u ? c.render : c.beforeCreate;
                u ? c.render = function (e, t) {
                    return l.call(t), d(e, t)
                } : c.beforeCreate = d ? [].concat(d, l) : [l]
            }
            return {esModule: r, exports: s, options: c}
        }
    }, function (e, t) {
        e.exports = {
            render: function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {
                    class: e.directionClass,
                    style: {display: e.display ? "block" : "none", left: e.left + "px", top: e.top + "px"},
                    attrs: {tabindex: "999"}
                }, [e._t("default"), e._v(" "), n("span", {
                    staticClass: "popup-arrow",
                    class: e.arrowClass,
                    style: e.arrowStyle
                })], 2)
            }, staticRenderFns: []
        }
    }])
}, , , , , , function (e, t, n) {
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
    const o = n(27), r = n(1), s = n(10);
    let {isDef: a} = s.ThunderUtil;
    const l = r.default.getLogger("Thunder.speedcurve-skin.skin-storage");
    t.default = new class {
        constructor() {
            this.skinURL = "http://static-xl9-ssl.xunlei.com/json/thunderx_speedcurve_skin.json"
        }

        getSkins() {
            return i(this, void 0, void 0, function* () {
                do {
                    o.default.defaults.adapter = n(28);
                    try {
                        let e = yield o.default.get(this.skinURL);
                        if (200 === e.status && e.data) {
                            this.skins = e.data, l.information("skins", this.skins), localStorage.setItem("speedcurveSkins", JSON.stringify(this.skins));
                            break
                        }
                    } catch (e) {
                        l.warning(e)
                    }
                    if (a(this.skins)) break;
                    this.skins = JSON.parse(localStorage.getItem("speedcurveSkins"))
                } while (0);
                return this.skins
            })
        }
    }
}, , , , , , , , function (e, t, n) {
    e.exports = !n(110) && !n(144)(function () {
        return 7 != Object.defineProperty(n(266)("div"), "a", {
            get: function () {
                return 7
            }
        }).a
    })
}, function (e, t, n) {
    var i = n(143), o = n(81).document, r = i(o) && i(o.createElement);
    e.exports = function (e) {
        return r ? o.createElement(e) : {}
    }
}, function (e, t, n) {
    var i = n(88), o = n(111), r = n(580)(!1), s = n(218)("IE_PROTO");
    e.exports = function (e, t) {
        var n, a = o(e), l = 0, c = [];
        for (n in a) n != s && i(a, n) && c.push(n);
        for (; t.length > l;) i(a, n = t[l++]) && (~r(c, n) || c.push(n));
        return c
    }
}, function (e, t, n) {
    var i = n(269);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
        return "String" == i(e) ? e.split("") : Object(e)
    }
}, function (e, t) {
    var n = {}.toString;
    e.exports = function (e) {
        return n.call(e).slice(8, -1)
    }
}, function (e, t, n) {
    var i = n(216);
    e.exports = function (e) {
        return Object(i(e))
    }
}, function (e, t, n) {
    "use strict";
    var i = n(163), o = n(214), r = n(272), s = n(108), a = n(222), l = n(587), c = n(223), u = n(590),
        d = n(112)("iterator"), f = !([].keys && "next" in [].keys()), p = function () {
            return this
        };
    e.exports = function (e, t, n, h, v, m, g) {
        l(n, t, h);
        var _, y, b, C = function (e) {
                if (!f && e in k) return k[e];
                switch (e) {
                    case"keys":
                    case"values":
                        return function () {
                            return new n(this, e)
                        }
                }
                return function () {
                    return new n(this, e)
                }
            }, w = t + " Iterator", x = "values" == v, S = !1, k = e.prototype, P = k[d] || k["@@iterator"] || v && k[v],
            T = P || C(v), D = v ? x ? C("entries") : T : void 0, R = "Array" == t && k.entries || P;
        if (R && (b = u(R.call(new e))) !== Object.prototype && b.next && (c(b, w, !0), i || "function" == typeof b[d] || s(b, d, p)), x && P && "values" !== P.name && (S = !0, T = function () {
            return P.call(this)
        }), i && !g || !f && !S && k[d] || s(k, d, T), a[t] = T, a[w] = p, v) if (_ = {
            values: x ? T : C("values"),
            keys: m ? T : C("keys"),
            entries: D
        }, g) for (y in _) y in k || r(k, y, _[y]); else o(o.P + o.F * (f || S), t, _);
        return _
    }
}, function (e, t, n) {
    e.exports = n(108)
}, function (e, t, n) {
    var i = n(160), o = n(588), r = n(220), s = n(218)("IE_PROTO"), a = function () {
    }, l = function () {
        var e, t = n(266)("iframe"), i = r.length;
        for (t.style.display = "none", n(589).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), l = e.F; i--;) delete l.prototype[r[i]];
        return l()
    };
    e.exports = Object.create || function (e, t) {
        var n;
        return null !== e ? (a.prototype = i(e), n = new a, a.prototype = null, n[s] = e) : n = l(), void 0 === t ? n : o(n, t)
    }
}, function (e, t, n) {
    var i = n(267), o = n(220).concat("length", "prototype");
    t.f = Object.getOwnPropertyNames || function (e) {
        return i(e, o)
    }
}, , , , , , , , , , , , , , , , , , , , , , , , function (e, t, n) {
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
    const o = n(27), r = n(1), s = n(10), a = n(9), l = n(15);
    let {isDef: c} = s.ThunderUtil;
    const u = r.default.getLogger("WallpaperManager");
    t.default = new class {
        constructor() {
            this.wallpapersURL = "https://api-xl9-ssl.xunlei.com/sl/xlppc.personalizedcenter.api/api/xskin/list", this.testPapersURL = "http://test.api-shoulei-ssl.xunlei.com/xlppc.personalizedcenter.api/api/xskin/list"
        }

        getWallpapers() {
            return i(this, void 0, void 0, function* () {
                do {
                    o.default.defaults.adapter = n(28);
                    let e = 1 === (yield l.default("GetValue", "ConfigFetchInterface", "TestServer", 0)) ? this.testPapersURL : this.wallpapersURL;
                    try {
                        let t = yield o.default.get(e, {params: {page: 0, per_page: 30}});
                        if (200 === t.status && "ok" === t.data.result) {
                            this.wallpapers = t.data.list;
                            try {
                                localStorage.setItem("wallpapers", JSON.stringify(this.wallpapers))
                            } catch (e) {
                                u.warning(e)
                            }
                            break
                        }
                    } catch (e) {
                        u.warning(e)
                    }
                    if (c(this.wallpapers)) break;
                    this.wallpapers = JSON.parse(localStorage.getItem("wallpapers"))
                } while (0);
                return this.wallpapers
            })
        }

        getImage(e) {
            return i(this, void 0, void 0, function* () {
                let t = `${__profilesDir}/skins/${e.id}/wallpaper.jpg`;
                return (yield a.FileSystemAWNS.existsAW(t)) ? (this.updateImage(e).catch(e => {
                    u.information("update skin preview error", e)
                }), t) : (yield this.updateImage(e), t)
            })
        }

        updateImage(e) {
            return i(this, void 0, void 0, function* () {
                o.default.defaults.adapter = n(28);
                let t = yield o.default.get(e.skin_link, {responseType: "arraybuffer"});
                if (c(t) && 200 === t.status && c(t.data) && (yield a.FileSystemAWNS.mkdirAW(`${__profilesDir}/skins`), yield a.FileSystemAWNS.writeFileAW(`${__profilesDir}/skins/${e.id}.zip`, t.data))) {
                    const {UnzipUtilitiesAWNS: t} = yield Promise.resolve().then(() => n(208));
                    yield t.uncompressZipFile(`${__profilesDir}/skins/${e.id}/`, `${__profilesDir}/skins/${e.id}.zip`)
                }
            })
        }
    }
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(467), o = n.n(i);
    for (var r in i) "default" !== r && function (e) {
        n.d(t, e, function () {
            return i[e]
        })
    }(r);
    t.default = o.a
}, function (e, t, n) {
    "use strict";
    var i = this && this.__decorate || function (e, t, n, i) {
        var o, r = arguments.length, s = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, i); else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (s = (r < 3 ? o(s) : r > 3 ? o(t, n, s) : o(t, n)) || s);
        return r > 3 && s && Object.defineProperty(t, n, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const o = n(3), r = n(4), s = n(36), a = n(29);
    let l = class extends r.Vue {
        constructor() {
            super(...arguments), this.popType = "", this.options = {
                title: "",
                type: s.MessageBox.ConfirmType.Info
            }, this.boxId = a.parse(location.href, !0).query.boxId, this.removeDraggable = null
        }

        created() {
            o.ipcRenderer.once("message-box-init-reply", (e, t) => {
                this.popType = t.popType, this.options = t.options
            }), o.ipcRenderer.send(`message-box-init-${this.boxId}`)
        }
    };
    l = i([r.Component({
        components: {
            About: () => Promise.resolve().then(() => n(987)),
            Confirm: () => Promise.resolve().then(() => n(988)),
            MessageBox: () => Promise.resolve().then(() => n(989)),
            PlanTask: () => Promise.resolve().then(() => n(990)),
            TaskRename: () => Promise.resolve().then(() => n(991)),
            BtRepeatTask: () => Promise.resolve().then(() => n(992)),
            BtRepeatFile: () => Promise.resolve().then(() => n(993)),
            PrivateSpaceSetPassword: () => Promise.resolve().then(() => n(994)),
            PrivateSpaceVerifyPassword: () => Promise.resolve().then(() => n(995)),
            PrivateSpaceDownloadSetting: () => Promise.resolve().then(() => n(996)),
            PrivateSpaceTaskManager: () => Promise.resolve().then(() => n(997)),
            MultiRepeatTask: () => Promise.resolve().then(() => n(998)),
            BatchNewTaskCtrl: () => Promise.resolve().then(() => n(999)),
            BookMarks: () => Promise.resolve().then(() => n(1e3)),
            BookList: () => Promise.resolve().then(() => n(1001)),
            SubtitleTaskFilelist: () => Promise.resolve().then(() => n(1002)),
            SubtitleSearch: () => Promise.resolve().then(() => n(1003)),
            BrowserConfigGuide: () => Promise.resolve().then(() => n(1004)),
            XmpFixBox: () => Promise.resolve().then(() => n(1005)),
            XmpFixBoxEx: () => Promise.resolve().then(() => n(1006)),
            BirdKeyShow: () => Promise.resolve().then(() => n(1007)),
            TotalTabs: () => Promise.resolve().then(() => n(1009)),
            Individuation: () => Promise.resolve().then(() => n(1010))
        }
    })], l), t.default = l
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(469), o = n.n(i);
    for (var r in i) "default" !== r && function (e) {
        n.d(t, e, function () {
            return i[e]
        })
    }(r);
    t.default = o.a
}, function (e, t, n) {
    "use strict";
    var i = this && this.__decorate || function (e, t, n, i) {
        var o, r = arguments.length, s = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, i); else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (s = (r < 3 ? o(s) : r > 3 ? o(t, n, s) : o(t, n)) || s);
        return r > 3 && s && Object.defineProperty(t, n, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const o = n(49), r = n(4), s = n(50);
    let a = class extends (o.mixins(s.DraggableMixin, s.PositionMixin)) {
        handleCancel(e) {
            window.close()
        }
    };
    i([r.Prop()], a.prototype, "options", void 0), a = i([r.Component], a), t.default = a
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(471), o = n.n(i);
    for (var r in i) "default" !== r && function (e) {
        n.d(t, e, function () {
            return i[e]
        })
    }(r);
    t.default = o.a
}, function (e, t, n) {
    "use strict";
    var i = this && this.__decorate || function (e, t, n, i) {
        var o, r = arguments.length, s = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, i); else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (s = (r < 3 ? o(s) : r > 3 ? o(t, n, s) : o(t, n)) || s);
        return r > 3 && s && Object.defineProperty(t, n, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const o = n(3), r = n(49), s = n(4), a = n(50), l = n(30);
    let c = class extends (r.mixins(a.DraggableMixin, a.PositionMixin)) {
        constructor() {
            super(...arguments), this.action = l.MessageBoxNS.Action, this.icon = {
                info: "question",
                warning: "warning",
                error: "error"
            }
        }

        handleInput(e) {
            this.$emit("update:options", Object.assign({}, this.options, {checkboxChecked: e}))
        }

        handleOK() {
            o.ipcRenderer.send(`message-box-resolve-${this.boxId}`, l.MessageBoxNS.Action.OK, this.options.checkboxChecked), window.close()
        }

        handleCancel(e) {
            o.ipcRenderer.send(`message-box-resolve-${this.boxId}`, e), window.close()
        }
    };
    i([s.Prop()], c.prototype, "options", void 0), i([s.Prop()], c.prototype, "boxId", void 0), c = i([s.Component({props: {options: Object}})], c), t.default = c
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(473), o = n.n(i);
    for (var r in i) "default" !== r && function (e) {
        n.d(t, e, function () {
            return i[e]
        })
    }(r);
    t.default = o.a
}, function (e, t, n) {
    "use strict";
    var i = this && this.__decorate || function (e, t, n, i) {
        var o, r = arguments.length, s = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, i); else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (s = (r < 3 ? o(s) : r > 3 ? o(t, n, s) : o(t, n)) || s);
        return r > 3 && s && Object.defineProperty(t, n, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const o = n(3), r = n(49), s = n(4), a = n(572), l = n(30), c = n(50);
    let u = class extends (r.mixins(c.DraggableMixin, c.PositionMixin)) {
        constructor() {
            super(...arguments), this.action = l.MessageBoxNS.Action
        }

        handleInput(e, t) {
            let n = null, i = JSON.stringify(this.formData);
            try {
                n = JSON.parse(i)
            } catch (e) {
            }
            null !== n && (Array.isArray(e) ? n[t] = e : n[t].value = e, this.$emit("update:formData", n))
        }

        handleOK() {
            o.ipcRenderer.send(`message-box-resolve-${this.boxId}`, this.action.OK, this.formData), window.close()
        }

        handleCancel(e) {
            o.ipcRenderer.send(`message-box-resolve-${this.boxId}`, e), window.close()
        }

        get comfirmButtonActive() {
            if (void 0 === this.formData) return !0;
            if (void 0 === this.formData.maxDownloadSpeedEnabled) return !0;
            let e = this.formData.maxDownloadSpeedEnabled.value, t = this.formData.maxUploadSpeedEnabled.value;
            return e || t
        }
    };
    i([s.Prop()], u.prototype, "options", void 0), i([s.Prop()], u.prototype, "formData", void 0), i([s.Prop()], u.prototype, "boxId", void 0), u = i([s.Component({components: {GeneratorView: a.default}})], u), t.default = u
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(475), o = n.n(i);
    for (var r in i) "default" !== r && function (e) {
        n.d(t, e, function () {
            return i[e]
        })
    }(r);
    t.default = o.a
}, function (e, t, n) {
    "use strict";
    var i = this && this.__decorate || function (e, t, n, i) {
        var o, r = arguments.length, s = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, i); else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (s = (r < 3 ? o(s) : r > 3 ? o(t, n, s) : o(t, n)) || s);
        return r > 3 && s && Object.defineProperty(t, n, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const o = n(205), r = n(49), s = n(4), a = n(80), l = n(14), c = n(3), u = n(70), d = n(50), f = n(107);
    let p = class extends (r.mixins(d.DraggableMixin, d.PositionMixin)) {
        constructor() {
            super(...arguments), this.hours = "0", this.minutes = "0", this.seconds = "0", this.operation = "开始全部任务", this.operations = ["关机", "睡眠", "退出迅雷", "开始全部任务", "暂停全部任务"], this.plans = [], this.timeIntervalId = -1, this.isMax = !1, this.schema = null, this.errorFields = null
        }

        sget() {
            return f.apply(null, arguments)
        }

        addPlan() {
            this.schema.validate({hours: this.hours, minutes: this.minutes}, (e, t) => {
                e ? this.errorFields = t : (this.errorFields = null, this.plans.length >= 3 ? this.isMax = !0 : this.plans.push({
                    hours: this.hours,
                    minutes: this.minutes,
                    seconds: this.seconds,
                    operation: this.operation
                }), this.$nextTick(() => {
                    a.ThunderWindowNS.resizeToFitContent()
                }))
            })
        }

        removePlan(e) {
            this.isMax = !1, this.plans.splice(e, 1), this.$nextTick(() => {
                a.ThunderWindowNS.resizeToFitContent()
            })
        }

        handleClose() {
            this.plans.length >= 0 && c.ipcRenderer.send(l.ThunderChannelList.channelRMCommitPlanTask, this.plans), -1 !== this.timeIntervalId && (clearInterval(this.timeIntervalId), this.timeIntervalId = -1), window.close()
        }

        created() {
            this.plans = this.options, this.timeIntervalId = setInterval(() => {
                for (let e = this.plans.length - 1; e >= 0; --e) {
                    let t = this.plans[e], n = 3600 * Number(t.hours) + 60 * Number(t.minutes) + Number(t.seconds);
                    if ((n -= 1) <= 0) {
                        this.removePlan(e), c.ipcRenderer.send(l.ThunderChannelList.channelRMPerformePlanTask, t.operation);
                        continue
                    }
                    let i = [Math.floor(n / 3600), Math.floor(n / 60 % 60), Math.floor(n % 60)];
                    t.hours = i[0] + "", t.minutes = i[1] + "", t.seconds = i[2] + ""
                }
            }, 1e3), this.schema = new o.default({
                hours: {
                    type: "number",
                    min: 0,
                    max: 999,
                    message: "请输入正确的时间",
                    transform: Number
                }, minutes: [{
                    type: "number", message: "执行时间不能为0", transform: Number, validator: (e, t, n) => {
                        0 === t && 0 === Number(this.hours) ? n(new Error("执行时间不能为0")) : n()
                    }
                }, {type: "number", min: 0, max: 59, message: "请输入正确的时间", transform: Number}]
            })
        }
    };
    i([s.Prop()], p.prototype, "options", void 0), p = i([s.Component({components: {SelectNative: u.default}})], p), t.default = p
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(477), o = n.n(i);
    for (var r in i) "default" !== r && function (e) {
        n.d(t, e, function () {
            return i[e]
        })
    }(r);
    t.default = o.a
}, function (e, t, n) {
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
    const r = n(2), s = n(3), a = n(49), l = n(4), c = n(9), u = n(8), d = n(50), f = n(30), p = n(56);
    let h = class extends (a.mixins(d.DraggableMixin, d.PositionMixin)) {
        constructor() {
            super(...arguments), this.newName = "", this.tipsText = "", this.isShowTips = !1
        }

        get originName() {
            let e = "";
            do {
                if (null === this.options || void 0 === this.options) break;
                let t = this.options.taskBase;
                if (null === t || void 0 === t) break;
                let n = t.taskName;
                if (null === n || void 0 === n) break;
                if ("string" != typeof n) break;
                e = n
            } while (0);
            return e
        }

        handleInput(e) {
            this.newName = e
        }

        handleClose(e) {
            s.ipcRenderer.send(`message-box-resolve-${this.boxId}`, f.MessageBoxNS.Action.Close), window.close()
        }

        handleOK() {
            return o(this, void 0, void 0, function* () {
                do {
                    let e = this.newName.trim();
                    e = e.replace(/[\n\r\n]/g, "");
                    let t = this.options.taskBase, n = t.taskName, i = t.savePath, o = t.taskType, a = i;
                    if (o !== u.DownloadKernel.TaskType.Group && (a = r.join(i, n)), "" === e) {
                        this.isShowTips = !0, this.tipsText = "文件名不能为空";
                        break
                    }
                    if ("." === e[0]) {
                        this.isShowTips = !0, this.tipsText = "必须键入文件名";
                        break
                    }
                    if (e.match(/[\/\\"<>\?\*:|]/)) {
                        this.isShowTips = !0, this.tipsText = '文件名不能包含下列任何字符： \\ / : * ? " < > |';
                        break
                    }
                    if (!(yield p.NativeCallAWNS.isSingleBtTask(t.taskId)) && o !== u.DownloadKernel.TaskType.Group) {
                        if (!(yield c.FileSystemAWNS.existsAW(a))) {
                            this.isShowTips = !0, this.tipsText = "文件不存在";
                            break
                        }
                        let t = r.join(i, e);
                        if (yield c.FileSystemAWNS.existsAW(t)) {
                            this.isShowTips = !0, this.tipsText = "文件已存在";
                            break
                        }
                    }
                    s.ipcRenderer.send(`message-box-resolve-${this.boxId}`, f.MessageBoxNS.Action.OK, {fileName: e}), window.close()
                } while (0)
            })
        }

        mounted() {
            this.newName = this.originName, document.addEventListener("click", () => {
                this.isShowTips = !1
            }), this.$nextTick(() => {
                let e = this.$refs.input.$el.querySelector("textarea");
                null !== e && void 0 !== e && e.select()
            })
        }
    };
    i([l.Prop()], h.prototype, "options", void 0), i([l.Prop()], h.prototype, "boxId", void 0), h = i([l.Component], h), t.default = h
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(479), o = n.n(i);
    for (var r in i) "default" !== r && function (e) {
        n.d(t, e, function () {
            return i[e]
        })
    }(r);
    t.default = o.a
}, function (e, t, n) {
    "use strict";
    var i = this && this.__decorate || function (e, t, n, i) {
        var o, r = arguments.length, s = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, i); else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (s = (r < 3 ? o(s) : r > 3 ? o(t, n, s) : o(t, n)) || s);
        return r > 3 && s && Object.defineProperty(t, n, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const o = n(3), r = n(49), s = n(4), a = n(50), l = n(30);
    let c = class extends (r.mixins(a.DraggableMixin, a.PositionMixin)) {
        handleClose(e) {
            o.ipcRenderer.send(`message-box-resolve-${this.boxId}`, l.MessageBoxNS.Action.Close), window.close()
        }

        handleOK(e) {
            o.ipcRenderer.send(`message-box-resolve-${this.boxId}`, l.MessageBoxNS.Action.OK, {picked: e}), window.close()
        }
    };
    i([s.Prop()], c.prototype, "boxId", void 0), c = i([s.Component], c), t.default = c
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(481), o = n.n(i);
    for (var r in i) "default" !== r && function (e) {
        n.d(t, e, function () {
            return i[e]
        })
    }(r);
    t.default = o.a
}, function (e, t, n) {
    "use strict";
    var i = this && this.__decorate || function (e, t, n, i) {
        var o, r = arguments.length, s = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, i); else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (s = (r < 3 ? o(s) : r > 3 ? o(t, n, s) : o(t, n)) || s);
        return r > 3 && s && Object.defineProperty(t, n, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const o = n(3), r = n(49), s = n(4), a = n(50), l = n(30), c = n(80);
    let u = class extends (r.mixins(a.DraggableMixin)) {
        constructor() {
            super(...arguments), this.files = ""
        }

        handleClose(e) {
            o.ipcRenderer.send(`message-box-resolve-${this.boxId}`, l.MessageBoxNS.Action.Close), window.close()
        }

        handleOK(e) {
            o.ipcRenderer.send(`message-box-resolve-${this.boxId}`, l.MessageBoxNS.Action.OK, {picked: e}), window.close()
        }

        mounted() {
            do {
                if (void 0 === this.options || null === this.options) break;
                let e = this.options.file;
                if (void 0 === e || null === e) break;
                let t = null;
                try {
                    t = JSON.parse(e)
                } catch (e) {
                }
                if (null === t) break;
                let n = "在目录“" + this.options.saveDir + "”下已存在文件：";
                t.splice(0, 0, n), this.files = t.join("<br>")
            } while (0);
            this.$nextTick(() => {
                c.ThunderWindowNS.resizeToFitContent(0, 0, c.ThunderWindowNS.fitWindowPosInParent)
            })
        }
    };
    i([s.Prop({})], u.prototype, "options", void 0), i([s.Prop()], u.prototype, "boxId", void 0), u = i([s.Component], u), t.default = u
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(483), o = n.n(i);
    for (var r in i) "default" !== r && function (e) {
        n.d(t, e, function () {
            return i[e]
        })
    }(r);
    t.default = o.a
}, function (e, t, n) {
    "use strict";
    var i = this && this.__decorate || function (e, t, n, i) {
        var o, r = arguments.length, s = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, i); else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (s = (r < 3 ? o(s) : r > 3 ? o(t, n, s) : o(t, n)) || s);
        return r > 3 && s && Object.defineProperty(t, n, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const o = n(49), r = n(4), s = n(3), a = n(50), l = n(30);
    let c = class extends (o.mixins(a.DraggableMixin, a.PositionMixin)) {
        constructor() {
            super(...arguments), this.password = "", this.secondPassword = "", this.tipsText = "", this.isShowTips = !1
        }

        handleClose(e) {
            s.ipcRenderer.send(`message-box-resolve-${this.boxId}`, l.MessageBoxNS.Action.Close), window.close()
        }

        handleOK() {
            do {
                if ("" === this.password || "" === this.secondPassword) {
                    this.tipsText = "密码不能为空！", this.isShowTips = !0;
                    break
                }
                if (this.password !== this.secondPassword) {
                    this.tipsText = "两次输入的密码不一致！", this.isShowTips = !0;
                    break
                }
                s.ipcRenderer.send(`message-box-resolve-${this.boxId}`, l.MessageBoxNS.Action.OK, {password: this.password}), window.close()
            } while (0)
        }

        mounted() {
            window.addEventListener("keyup", e => {
                "Enter" === e.key ? this.handleOK() : "Escape" === e.key && this.handleClose("")
            }, !0), document.addEventListener("click", () => {
                this.isShowTips = !1
            })
        }
    };
    i([r.Prop()], c.prototype, "boxId", void 0), c = i([r.Component], c), t.default = c
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(485), o = n.n(i);
    for (var r in i) "default" !== r && function (e) {
        n.d(t, e, function () {
            return i[e]
        })
    }(r);
    t.default = o.a
}, function (e, t, n) {
    "use strict";
    var i = this && this.__decorate || function (e, t, n, i) {
        var o, r = arguments.length, s = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, i); else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (s = (r < 3 ? o(s) : r > 3 ? o(t, n, s) : o(t, n)) || s);
        return r > 3 && s && Object.defineProperty(t, n, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const o = n(49), r = n(4), s = n(3), a = n(50), l = n(30);
    let c = class extends (o.mixins(a.DraggableMixin, a.PositionMixin)) {
        constructor() {
            super(...arguments), this.newPassword = "", this.tipsText = "", this.isShowTips = !1
        }

        handleClose(e) {
            s.ipcRenderer.send(`message-box-resolve-${this.boxId}`, l.MessageBoxNS.Action.Close), window.close()
        }

        handleOK() {
            do {
                if ("" === this.newPassword) {
                    this.tipsText = "密码不能为空！", this.isShowTips = !0;
                    break
                }
                if (this.options.password !== this.newPassword) {
                    this.tipsText = "密码错误，请重新输入！", this.isShowTips = !0;
                    break
                }
                s.ipcRenderer.send(`message-box-resolve-${this.boxId}`, l.MessageBoxNS.Action.OK, {success: !0}), window.close()
            } while (0)
        }

        mounted() {
            window.addEventListener("keyup", e => {
                "Enter" === e.key ? this.handleOK() : "Escape" === e.key && this.handleClose("")
            }, !0), this.$refs.pwdInput.focus(), document.addEventListener("click", () => {
                this.isShowTips = !1
            })
        }
    };
    i([r.Prop()], c.prototype, "options", void 0), i([r.Prop()], c.prototype, "boxId", void 0), c = i([r.Component], c), t.default = c
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(487), o = n.n(i);
    for (var r in i) "default" !== r && function (e) {
        n.d(t, e, function () {
            return i[e]
        })
    }(r);
    t.default = o.a
}, function (e, t, n) {
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
    const r = n(49), s = n(4), a = n(3), l = n(203), c = n(9), u = n(50), d = n(30);
    let f = class extends (r.mixins(u.DraggableMixin, u.PositionMixin)) {
        constructor() {
            super(...arguments), this.pathTips = "", this.isShowPathTips = !1, this.savePath = "", this.appendDirs = [], this.hideLocalDir = !0
        }

        handleClose(e) {
            a.ipcRenderer.send(`message-box-resolve-${this.boxId}`, d.MessageBoxNS.Action.Close), window.close()
        }

        handleChangePath(e) {
            this.savePath = e
        }

        handleOK() {
            return o(this, void 0, void 0, function* () {
                do {
                    if ("" === this.savePath) {
                        this.isShowPathTips = !0, this.pathTips = "不合法的存储路径";
                        break
                    }
                    if (!(yield c.FileSystemAWNS.existsAW(this.savePath))) {
                        if (!(yield c.FileSystemAWNS.mkdirAW(this.savePath))) {
                            this.isShowPathTips = !0, this.pathTips = "不合法的存储路径";
                            break
                        }
                    }
                    a.ipcRenderer.send(`message-box-resolve-${this.boxId}`, d.MessageBoxNS.Action.OK, {
                        savePath: this.savePath,
                        hideLocalDir: this.hideLocalDir ? 1 : 0
                    }), window.close()
                } while (0)
            })
        }

        mounted() {
            this.options.savePath && "" !== this.options.savePath && this.appendDirs.push(this.options.savePath), this.savePath = this.options.savePath, this.hideLocalDir = this.options.hideLocalDir, document.addEventListener("click", () => {
                this.isShowPathTips = !1
            })
        }
    };
    i([s.Prop({})], f.prototype, "options", void 0), i([s.Prop()], f.prototype, "boxId", void 0), f = i([s.Component({components: {PathSelector: l.default}})], f), t.default = f
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(489), o = n.n(i);
    for (var r in i) "default" !== r && function (e) {
        n.d(t, e, function () {
            return i[e]
        })
    }(r);
    t.default = o.a
}, function (e, t, n) {
    "use strict";
    var i = this && this.__decorate || function (e, t, n, i) {
        var o, r = arguments.length, s = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, i); else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (s = (r < 3 ? o(s) : r > 3 ? o(t, n, s) : o(t, n)) || s);
        return r > 3 && s && Object.defineProperty(t, n, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const o = n(49), r = n(4), s = n(3), a = n(50), l = n(30);
    let c = class extends (o.mixins(a.DraggableMixin, a.PositionMixin)) {
        constructor() {
            super(...arguments), this.maxTaskCount = 5, this.autoMoveLowSpeedTaskToTail = !0, this.tipsText = "请输入大于等于1小于等于50的数字", this.isShowTips = !1
        }

        handleClose(e) {
            s.ipcRenderer.send(`message-box-resolve-${this.boxId}`, l.MessageBoxNS.Action.Close), window.close()
        }

        handleOK() {
            do {
                if (!this.maxTaskCount || this.maxTaskCount < 1 || this.maxTaskCount > 50) {
                    this.isShowTips = !0;
                    break
                }
                s.ipcRenderer.send(`message-box-resolve-${this.boxId}`, l.MessageBoxNS.Action.OK, {
                    maxTaskCount: this.maxTaskCount,
                    autoMoveLowSpeedTaskToTail: this.autoMoveLowSpeedTaskToTail
                }), window.close()
            } while (0)
        }

        mounted() {
            document.addEventListener("click", () => {
                this.isShowTips = !1
            })
        }
    };
    i([r.Prop()], c.prototype, "boxId", void 0), c = i([r.Component], c), t.default = c
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(491), o = n.n(i);
    for (var r in i) "default" !== r && function (e) {
        n.d(t, e, function () {
            return i[e]
        })
    }(r);
    t.default = o.a
}, function (e, t, n) {
    "use strict";
    var i = this && this.__decorate || function (e, t, n, i) {
        var o, r = arguments.length, s = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, i); else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (s = (r < 3 ? o(s) : r > 3 ? o(t, n, s) : o(t, n)) || s);
        return r > 3 && s && Object.defineProperty(t, n, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const o = n(80), r = n(49), s = n(4), a = n(50);
    let l = class extends (r.mixins(a.DraggableMixin)) {
        constructor() {
            super(...arguments), this.title = "以下0个相同任务，将不再下载这些文件", this.urls = ""
        }

        mounted() {
            do {
                if (void 0 === this.options || null === this.options) break;
                let e = this.options.file;
                if (void 0 === e || null === e) break;
                let t = null;
                try {
                    t = JSON.parse(e)
                } catch (e) {
                }
                if (null === t) break;
                this.urls = t.join("<br>"), this.title = "以下" + t.length + "个相同任务，将不再下载这些文件"
            } while (0);
            this.$nextTick(() => {
                o.ThunderWindowNS.resizeToFitContent(0, 0, o.ThunderWindowNS.fitWindowPosInParent)
            })
        }

        handleOK() {
            window.close()
        }
    };
    i([s.Prop()], l.prototype, "options", void 0), l = i([s.Component], l), t.default = l
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(493), o = n.n(i);
    for (var r in i) "default" !== r && function (e) {
        n.d(t, e, function () {
            return i[e]
        })
    }(r);
    t.default = o.a
}, function (e, t, n) {
    "use strict";
    var i = this && this.__decorate || function (e, t, n, i) {
        var o, r = arguments.length, s = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, i); else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (s = (r < 3 ? o(s) : r > 3 ? o(t, n, s) : o(t, n)) || s);
        return r > 3 && s && Object.defineProperty(t, n, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const o = n(3), r = n(49), s = n(4), a = n(68), l = n(250), c = n(70), u = n(50), d = n(30);
    let f = class extends (r.mixins(u.DraggableMixin, u.PositionMixin)) {
        constructor() {
            super(...arguments), this.selectOptions = ["1", "2", "3"], this.picked = "number", this.urlExample = "", this.numFrom = "0", this.numTo = "0", this.numMax = 999, this.wildcardLength = "2", this.alphaFrom = "a", this.alphaTo = "z", this.context = "", this.tipsText = "", this.isShowTips = !1
        }

        handleClose() {
            o.ipcRenderer.send(`message-box-resolve-${this.boxId}`, d.MessageBoxNS.Action.Close), window.close()
        }

        handleOK() {
            do {
                if (!a.URLHelperNS.isP2spOrEmuleUrl(this.urlExample)) {
                    this.tipsText = "不支持的协议，请重新输入", this.isShowTips = !0;
                    break
                }
                if (!/\(\*\)/.test(this.urlExample)) {
                    this.tipsText = "必须在url中包含‘(*)’，请重新输入", this.isShowTips = !0;
                    break
                }
                if ("number" === this.picked) {
                    o.ipcRenderer.send(`message-box-resolve-${this.boxId}`, d.MessageBoxNS.Action.OK, {
                        picked: this.picked,
                        urlExample: this.urlExample,
                        from: Number(this.numFrom),
                        to: Number(this.numTo),
                        wildcardLen: Number(this.wildcardLength)
                    }), window.close();
                    break
                }
                if ("alpha" === this.picked) {
                    o.ipcRenderer.send(`message-box-resolve-${this.boxId}`, d.MessageBoxNS.Action.OK, {
                        picked: this.picked,
                        urlExample: this.urlExample,
                        from: this.alphaFrom,
                        to: this.alphaTo
                    }), window.close();
                    break
                }
            } while (0)
        }

        padLeftZero(e, t) {
            if (t.length > e) return t;
            return ("000000".substring(0, e) + t).substr(t.length)
        }

        showUrls() {
            do {
                if (!a.URLHelperNS.isP2spOrEmuleUrl(this.urlExample)) {
                    this.context = "";
                    break
                }
                if (!/\(\*\)/.test(this.urlExample)) {
                    this.context = "";
                    break
                }
                if ("number" === this.picked) {
                    if (this.numFrom === this.numTo) this.context = this.urlExample.replace(/\(\*\)/, this.padLeftZero(Number(this.wildcardLength), this.numFrom)); else {
                        let e = this.urlExample.replace(/\(\*\)/, this.padLeftZero(Number(this.wildcardLength), this.numFrom)),
                            t = this.urlExample.replace(/\(\*\)/, this.padLeftZero(Number(this.wildcardLength), this.numTo));
                        this.context = e + "\r\n...\r\n...\r\n" + t
                    }
                    break
                }
                if ("alpha" === this.picked) {
                    if (this.alphaFrom === this.alphaTo) this.context = this.urlExample.replace(/\(\*\)/, this.alphaFrom); else {
                        let e = this.urlExample.replace(/\(\*\)/, this.alphaFrom),
                            t = this.urlExample.replace(/\(\*\)/, this.alphaTo);
                        this.context = e + "\r\n...\r\n...\r\n" + t
                    }
                    break
                }
            } while (0)
        }

        handleNumFromChange(e, t) {
            let n = this.numFrom;
            void 0 !== t && null !== t && (this.numFrom = t), this.numFrom = e, n !== e && this.showUrls()
        }

        handleNumToChange(e, t) {
            let n = this.numTo;
            void 0 !== t && null !== t && (this.numTo = t), this.numTo = e, n !== e && this.showUrls()
        }

        handleWildcardChange(e) {
            let t = this.wildcardLength;
            this.wildcardLength = e, t !== e && "number" === this.picked && this.showUrls()
        }

        handleAlphaFromChange(e, t) {
            let n = this.alphaFrom;
            void 0 !== t && null !== t && (this.alphaFrom = t), this.alphaFrom = e, n !== e && this.showUrls()
        }

        handleAlphaToChange(e, t) {
            let n = this.alphaTo;
            void 0 !== t && null !== t && (this.alphaTo = t), this.alphaTo = e, n !== e && this.showUrls()
        }

        handleDocClick() {
            this.tipsText = "", this.isShowTips = !1
        }

        mounted() {
            document.addEventListener("click", this.handleDocClick)
        }

        destroyed() {
            document.removeEventListener("click", this.handleDocClick)
        }

        onUrlExampleChanged() {
            this.showUrls()
        }

        onPickedChange() {
            this.showUrls()
        }
    };
    i([s.Prop()], f.prototype, "boxId", void 0), i([s.Watch("urlExample")], f.prototype, "onUrlExampleChanged", null), i([s.Watch("picked")], f.prototype, "onPickedChange", null), f = i([s.Component({
        components: {
            LimitInput: l.default,
            SelectNative: c.default
        }
    })], f), t.default = f
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(495), o = n.n(i);
    for (var r in i) "default" !== r && function (e) {
        n.d(t, e, function () {
            return i[e]
        })
    }(r);
    t.default = o.a
}, function (e, t, n) {
    "use strict";
    var i = this && this.__decorate || function (e, t, n, i) {
        var o, r = arguments.length, s = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, i); else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (s = (r < 3 ? o(s) : r > 3 ? o(t, n, s) : o(t, n)) || s);
        return r > 3 && s && Object.defineProperty(t, n, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const o = n(49), r = n(4), s = n(3), a = n(50), l = n(30);
    let c = class extends (o.mixins(a.DraggableMixin, a.PositionMixin)) {
        constructor() {
            super(...arguments), this.value = ""
        }

        mounted() {
            this.value = this.options.title, this.$nextTick(() => {
                let e = this.$refs.titleInput;
                e.focus(), e.select()
            }), s.remote.ipcMain.on("book-mark-list-close", e => {
                window.close()
            }), s.remote.getCurrentWindow().on("blur", e => {
                window.close()
            })
        }

        handleOk() {
            let e = this.$refs.titleInput;
            "" !== e.value.trim() && (s.ipcRenderer.send(`message-box-resolve-${this.boxId}`, l.MessageBoxNS.Action.OK, {
                title: e.value,
                state: "ok"
            }), window.close())
        }

        handleDelete() {
            s.ipcRenderer.send(`message-box-resolve-${this.boxId}`, l.MessageBoxNS.Action.Cancel, {
                title: this.value,
                state: "delete"
            }), window.close()
        }

        handleClose() {
            s.ipcRenderer.send(`message-box-resolve-${this.boxId}`, l.MessageBoxNS.Action.Close, {
                title: this.value,
                state: "close"
            }), window.close()
        }
    };
    i([r.Prop({})], c.prototype, "options", void 0), i([r.Prop()], c.prototype, "boxId", void 0), c = i([r.Component({})], c), t.default = c
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(497), o = n.n(i);
    for (var r in i) "default" !== r && function (e) {
        n.d(t, e, function () {
            return i[e]
        })
    }(r);
    t.default = o.a
}, function (e, t, n) {
    "use strict";
    var i = this && this.__decorate || function (e, t, n, i) {
        var o, r = arguments.length, s = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, i); else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (s = (r < 3 ? o(s) : r > 3 ? o(t, n, s) : o(t, n)) || s);
        return r > 3 && s && Object.defineProperty(t, n, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const o = n(49), r = n(4), s = n(3), a = n(50), l = n(1), c = n(13), u = n(30), d = n(54),
        f = l.default.getLogger("book-list");
    let p = class extends (o.mixins(a.DraggableMixin)) {
        constructor() {
            super(...arguments), this.value = "", this.bookMarkMenuUrl = "", this.bookMarkMenuTitle = "", this.currentIndex = 0, this.itemHeight = 28, this.moreBookMarkMaxHeight = 440, this.itemsPadding = 8, this.itemsWarpperPadding = 12
        }

        mounted() {
            s.remote.getCurrentWindow().show(), s.remote.getCurrentWindow().focus(), s.remote.ipcMain.on("book-mark-list-close", e => {
                f.information("book-mark-list-close"), window.close()
            }), s.remote.getCurrentWindow().on("blur", e => {
                window.close()
            })
        }

        handleOk() {
            let e = this.$refs.titleInput;
            "" !== e.value.trim() && (s.ipcRenderer.send(`message-box-resolve-${this.boxId}`, u.MessageBoxNS.Action.OK, {
                title: e.value,
                state: "ok"
            }), window.close())
        }

        isShowDefaultIcon(e, t) {
            let n = !1;
            do {
                if (-1 !== e.indexOf("ftp://") || "" === t || void 0 === t) {
                    n = !0;
                    break
                }
            } while (0);
            return n
        }

        openNewTab(e, t, n = "") {
            s.ipcRenderer.send("openNewTab-book-list", {url: e, title: t})
        }

        get bookMarkTemplate() {
            return [{
                label: "在新标签页中打开", click: () => {
                    this.bookMarkRightClick("open_new"), this.openNewTab(this.bookMarkMenuUrl, this.bookMarkMenuTitle, "new")
                }
            }, {
                label: "删除", click: () => {
                    let e = s.remote.getCurrentWindow();
                    this.options.splice(this.currentIndex, 1);
                    let t = e.getSize();
                    this.options.length * this.itemHeight + this.itemsPadding + this.itemsWarpperPadding < this.moreBookMarkMaxHeight && e.setSize(t[0], t[1] - this.itemHeight), s.ipcRenderer.send("delete-book-list", {url: this.bookMarkMenuUrl}), c.XLStatNS.trackEvent("clienttop", "bookmarks_delete"), 0 === this.options.length && window.close()
                }
            }]
        }

        showBookMarkMenu(e, t, n, i = {}) {
            this.bookMarkMenuUrl = e, this.bookMarkMenuTitle = t, this.currentIndex = n;
            let o = s.remote.getCurrentWindow(), r = s.remote.Menu.buildFromTemplate(this.bookMarkTemplate);
            d.MenuSkinNS.setStyle(r, {}), r.popup(Object.assign({}, {window: o}, i)), c.XLStatNS.trackEvent("clienttop", "bookmarks_top_right_click")
        }

        bookMarkRightClick(e) {
            let t = `button=${e}`;
            c.XLStatNS.trackEvent("clienttop", "bookmarks_top_right_click_menu", "", 0, 0, 0, 0, t)
        }
    };
    i([r.Prop({})], p.prototype, "options", void 0), i([r.Prop()], p.prototype, "boxId", void 0), p = i([r.Component({})], p), t.default = p
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(499), o = n.n(i);
    for (var r in i) "default" !== r && function (e) {
        n.d(t, e, function () {
            return i[e]
        })
    }(r);
    t.default = o.a
}, function (e, t, n) {
    "use strict";
    var i = this && this.__decorate || function (e, t, n, i) {
        var o, r = arguments.length, s = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, i); else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (s = (r < 3 ? o(s) : r > 3 ? o(t, n, s) : o(t, n)) || s);
        return r > 3 && s && Object.defineProperty(t, n, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const o = n(49), r = n(4), s = n(3), a = n(1), l = n(50), c = n(36), u = n(6), d = n(13), f = n(8),
        p = a.default.getLogger("Subtitle-Task-FileList");
    let h = class extends (o.mixins(l.DraggableMixin, l.PositionMixin)) {
        constructor() {
            super(...arguments), this.taskId = void 0, this.taskName = "", this.videoNum = 1, this.fileList = [], this.saveDir = "", this.taskType = 2, this.categoryViewId = f.DownloadKernel.CategroyViewID.Unkown
        }

        get taskIcon() {
            return this.taskType === f.DownloadKernel.TaskType.Bt ? "xlx-icon-type-bt-file" : "xlx-icon-type-group"
        }

        onVideoNumberTextClick() {
            if ("" !== this.saveDir) {
                let e = this.saveDir + "\\.";
                s.remote.shell.showItemInFolder(e)
            }
        }

        searchShooter() {
            let e = this.taskName.replace(/[\`\-\=\~\!\@\#\$\%\^\&\(\)\_\+\[\]\;\'\,\.\{\}]/g, " "),
                t = "http://subhd.com/search/" + encodeURIComponent(e);
            u.NativeCallModule.nativeCall.CallNativeFunction("openNewTab", t), window.close()
        }

        popSutitleMessageBox(e) {
            s.remote.ipcMain.on("onSearchSubtitleWndClose", (e, t) => {
                0 === t ? i.show() : i.close()
            });
            let t = "",
                n = `pannel=${t = this.categoryViewId === f.DownloadKernel.CategroyViewID.Downloading ? "downloading" : this.categoryViewId === f.DownloadKernel.CategroyViewID.Completed ? "complete" : "trash"},cid=${e.cid},taskid=${this.taskId},filename=${encodeURIComponent(e.fileName)}`;
            d.XLStatNS.trackEvent("download_detail", "dltab_detail_viewsubtitles_click", "", 0, 0, 0, 0, n), p.information("PopSutitleMessageBox: ", n);
            let i = s.remote.getCurrentWindow();
            i.hide(), c.MessageBox.custom("SubtitleSearch", {
                size: "large",
                taskId: this.taskId,
                taskName: e.fileName,
                cid: e.cid,
                saveDir: this.saveDir,
                from: "fileListDlg",
                categoryViewId: this.categoryViewId
            })
        }

        handleCancel(e) {
            window.close()
        }

        mounted() {
            this.taskId = this.options.taskId, p.information("taskName: ", this.taskId), this.taskName = this.options.taskName, p.information("taskName: ", this.taskName), this.taskType = this.options.taskType, p.information("taskType: ", this.taskType), this.saveDir = this.options.saveDir, p.information("saveDir: ", this.saveDir), this.fileList = this.options.fileList, this.videoNum = this.options.fileList.length, p.information("result: ", this.fileList), p.information("videoNum: ", this.videoNum), this.categoryViewId = this.options.categoryViewId, p.information("categoryViewId: ", this.categoryViewId)
        }
    };
    i([r.Prop()], h.prototype, "options", void 0), h = i([r.Component], h), t.default = h
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(501), o = n.n(i);
    for (var r in i) "default" !== r && function (e) {
        n.d(t, e, function () {
            return i[e]
        })
    }(r);
    t.default = o.a
}, function (e, t, n) {
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
    const r = n(2), s = n(49), a = n(4), l = n(3), c = n(1), u = n(14), d = n(50), f = n(6), p = n(5), h = n(8),
        v = n(13), m = p.default(r.join(__rootDir, "../bin/ThunderHelper.node")),
        g = c.default.getLogger("Subtitle-Search");
    let _ = class extends (s.mixins(d.DraggableMixin, d.PositionMixin)) {
        constructor() {
            super(...arguments), this.taskId = void 0, this.taskName = "", this.taskCid = "", this.saveDir = "", this.subtitleList = [], this.searchText = "", this.searchStatus = 0, this.categoryViewId = h.DownloadKernel.CategroyViewID.Unkown, this.from = "taskList"
        }

        getName(e) {
            let t = ".srt";
            if (g.information("getName ", e.surl), void 0 !== e.surl && e.surl.length > 1) {
                let n = e.surl.substring(e.surl.lastIndexOf("."));
                t = e.sname + n
            }
            return "" === e.sname ? ".srt" : t
        }

        getRate(e) {
            if (void 0 !== e) {
                if ("number" == typeof e.rate) return e.rate;
                if ("string" == typeof e.rate) return Number(e.rate)
            }
            return 0
        }

        onOperationTextClick(e, t) {
            if (g.information("OnOperationTextClick index ", t), 0 === e.status || 3 === e.status) e.status = 2, l.remote.ipcMain.on(u.ThunderChannelList.channelMRDownloadSutitleSuc, t => o(this, void 0, void 0, function* () {
                g.information("OnOperationTextClick channelMRDownloadSutitleSuc"), e.status = 1, this.stat("dltab_detail_subtitlesdown_click", "result=success")
            })), l.remote.ipcMain.on(u.ThunderChannelList.channelMRDownloadSutitleFail, t => o(this, void 0, void 0, function* () {
                g.information("OnOperationTextClick channelMRDownloadSutitleFail"), e.status = 3, this.stat("dltab_detail_subtitlesdown_click", "result=fail")
            })), g.information("send channelRMDownloadSutitle"), l.ipcRenderer.send(u.ThunderChannelList.channelRMDownloadSutitle, e, this.taskId, this.taskName); else if (1 === e.status) {
                if (m.shellExecute(0, "open", r.join(this.saveDir, this.taskName), null, null, "SW_SHOW") <= 32) {
                    let e = this.saveDir + "\\.";
                    l.remote.shell.showItemInFolder(e)
                }
            }
        }

        stat(e, t) {
            let n = "",
                i = `pannel=${n = this.categoryViewId === h.DownloadKernel.CategroyViewID.Downloading ? "downloading" : this.categoryViewId === h.DownloadKernel.CategroyViewID.Completed ? "complete" : "trash"},cid=${this.taskCid},taskid=${this.taskId},filename=${encodeURIComponent(this.taskName)}`;
            null !== t && void 0 !== t && "" !== t && (i = `${i},${t}`), g.information(e, i), v.XLStatNS.trackEvent("download_detail", e, "", 0, 0, 0, 0, i)
        }

        searchSubtitleByName(e) {
            this.searchStatus = 0, l.ipcRenderer.on(u.ThunderChannelList.channelMRGetSutitleByNameResult, (e, t) => o(this, void 0, void 0, function* () {
                if (g.information("SearchSubtitleByName"), t) if (this.subtitleList = t, g.information("result: ", t), t.length > 1) {
                    this.searchStatus = 1;
                    for (let e of t) g.information("item: ", e)
                } else this.searchStatus = 2; else this.searchStatus = 2, g.information("result is null")
            })), g.information("SearchSubtitleByName searchText: ", this.searchText), l.ipcRenderer.send(u.ThunderChannelList.channelRMGetSutitleByName, this.searchText, this.taskId), "btn" === e && this.stat("dltab_detail_subtitlessearch_click")
        }

        searchShooter() {
            let e = "http://subhd.com/search/" + encodeURIComponent(this.searchText);
            f.NativeCallModule.nativeCall.CallNativeFunction("openNewTab", e), "fileListDlg" === this.from && l.ipcRenderer.send("onSearchSubtitleWndClose", 1), window.close()
        }

        handleCancel(e) {
            try {
                "fileListDlg" === this.from && l.ipcRenderer.send("onSearchSubtitleWndClose", 0), window.close()
            } catch (e) {
                g.warning(e)
            }
        }

        mounted() {
            this.taskId = this.options.taskId, g.information("taskId: ", this.taskId), this.taskName = this.options.taskName, g.information("taskName: ", this.taskName), this.taskCid = this.options.cid, g.information("cid: ", this.taskCid), this.saveDir = this.options.saveDir, g.information("saveDir: ", this.saveDir), this.categoryViewId = this.options.categoryViewId, g.information("categoryViewId: ", this.categoryViewId);
            let e = this.taskName.lastIndexOf(".");
            g.information("index: ", e);
            let t = "";
            t = void 0 !== e && -1 !== e ? this.taskName.substring(0, e) : this.taskName, g.information("text: ", t), this.searchText = t.replace(/[\`\-\=\~\!\@\#\$\%\^\&\(\)\_\+\[\]\;\'\,\.\{\}]/g, " "), g.information("searchText: ", this.searchText), this.from = this.options.from, g.information("from: ", this.from), l.ipcRenderer.on(u.ThunderChannelList.channelMRGetSutitleByCidResult, (e, t) => o(this, void 0, void 0, function* () {
                if (g.information("on channelMRGetSutitleByCidResult"), t) if (this.subtitleList = t, g.information(t), t.length > 1) {
                    this.searchStatus = 1;
                    for (let e of t) g.information("item: ", e)
                } else this.searchStatus = 2, this.searchSubtitleByName(); else this.searchStatus = 2, g.information("result is null"), this.searchSubtitleByName()
            })), l.ipcRenderer.send(u.ThunderChannelList.channelRMGetSutitleByCid, this.taskCid, this.taskId)
        }
    };
    i([a.Prop()], _.prototype, "options", void 0), _ = i([a.Component], _), t.default = _
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(503), o = n.n(i);
    for (var r in i) "default" !== r && function (e) {
        n.d(t, e, function () {
            return i[e]
        })
    }(r);
    t.default = o.a
}, function (e, t, n) {
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
    const r = n(49), s = n(4), a = n(50), l = n(1), c = n(5), u = n(2), d = n(3), f = n(6), p = n(30),
        h = c.default(u.resolve(__rootDir, "../bin/ThunderHelper.node")), v = l.default.getLogger("DownloadCategory");
    let m = class extends (r.mixins(a.DraggableMixin, a.PositionMixin)) {
        constructor() {
            super(...arguments), this.szCurSelect = "", this.selectClassQQ = "td-tabs__item", this.selectClass360 = "td-tabs__item", this.selectClassSG = "td-tabs__item", this.obj360Data = null, this.objSouGouData = null, this.objQQData = null, this.path360 = `${__rootDir}/static/browser/360.gif`, this.pathSougou = `${__rootDir}/static/browser/sg.gif`, this.pathQQ = `${__rootDir}/static/browser/qq.gif`, this.settingFlag = 0, this.windowWidth = 560, this.windowHeight = 420
        }

        get is360Exist() {
            return null !== this.obj360Data
        }

        get isSouGouExist() {
            return null !== this.objSouGouData
        }

        get isQQExist() {
            return null !== this.objQQData
        }

        handleItemClick(e) {
            this.szCurSelect = e
        }

        handleCloseButton() {
            d.ipcRenderer.send(`message-box-resolve-${this.boxId}`, p.MessageBoxNS.Action.Close), window.close()
        }

        onFinalSet() {
            this.settingFlag++, 3 === this.settingFlag && (this.obj360Data && "" === this.szCurSelect ? this.szCurSelect = "360" : this.objSouGouData && "" === this.szCurSelect ? this.szCurSelect = "SouGou" : this.objQQData && "" === this.szCurSelect && (this.szCurSelect = "QQ"))
        }

        handleConfigBrowser() {
            v.information("选择迅雷下载");
            let e = null, t = "";
            switch (this.szCurSelect) {
                case"360":
                    e = this.obj360Data, t = "se://settings/browser#downloadsSection";
                    break;
                case"SouGou":
                    e = this.objSouGouData, t = "se://settings/?category=download";
                    break;
                case"QQ":
                    e = this.objQQData, t = "qqbrowser://settings/#search-section-content"
            }
            if (e) {
                let n = h.queryRegValue(e.reg.regRoot, e.reg.regKey, e.reg.regName);
                n = h.getLongPathName(n), h.queryFileExists(n) ? h.shellExecute(0, "open", n, t, "", "SW_SHOW") : v.information("浏览器执行文件:", n, " 不存在")
            }
        }

        onChange(e, t) {
            switch (v.information("当前选择改变了:", this.szCurSelect), e) {
                case"360":
                    -1 === this.selectClass360.indexOf("is-active") && (this.selectClass360 = this.selectClass360.concat(" is-active")), this.selectClassQQ = this.selectClassQQ.replace("is-active", ""), this.selectClassSG = this.selectClassSG.replace("is-active", "");
                    break;
                case"SouGou":
                    -1 === this.selectClassSG.indexOf("is-active") && (this.selectClassSG = this.selectClassSG.concat(" is-active")), this.selectClassQQ = this.selectClassQQ.replace("is-active", ""), this.selectClass360 = this.selectClass360.replace("is-active", "");
                    break;
                case"QQ":
                    -1 === this.selectClassQQ.indexOf("is-active") && (this.selectClassQQ = this.selectClassQQ.concat(" is-active")), this.selectClass360 = this.selectClass360.replace("is-active", ""), this.selectClassSG = this.selectClassSG.replace("is-active", "")
            }
        }

        initConfigGuide() {
            return o(this, void 0, void 0, function* () {
                if (!(yield this.isBrowserConfigInit())) return null;
                let e = h.getDefaultBrowserPath(), t = e.split("\\"), n = "";
                t && t.length > 0 && (n = t[t.length - 1]), v.information("默认浏览器运行地址为:", e, " exeName:", n), this.getInstallBrowserInfo("360安全浏览器").then(e => {
                    this.obj360Data = e, this.obj360Data && this.obj360Data.proName.toLowerCase() === n.toLowerCase() && (this.szCurSelect = "360"), this.onFinalSet(), v.error("360浏览器安装信息:", e)
                }).catch(e => {
                    v.error("调用异步接口getInstallBrowserInfo失败 1")
                }), this.getInstallBrowserInfo("QQ浏览器").then(e => {
                    this.objQQData = e, this.objQQData && this.objQQData.proName.toLowerCase() === n.toLowerCase() && (this.szCurSelect = "QQ"), this.onFinalSet(), v.error("QQ浏览器安装信息:", e)
                }).catch(e => {
                    v.error("调用异步接口getInstallBro  wserInfo失败 2")
                }), this.getInstallBrowserInfo("搜狗浏览器").then(e => {
                    this.objSouGouData = e, this.objSouGouData && this.objSouGouData.proName.toLowerCase() === n.toLowerCase() && (this.szCurSelect = "SouGou"), this.onFinalSet(), v.error("搜狗浏览器安装信息:", e)
                }).catch(e => {
                    v.error("调用异步接口getInstallBrowserInfo失败 3")
                })
            })
        }

        isBrowserConfigInit() {
            return o(this, void 0, void 0, function* () {
                return new Promise(e => {
                    f.NativeCallModule.nativeCall.CallNativeFunction("IsConfigBrowserInitFinish", (t, n) => {
                        v.information("Error: Info: ", t, n), e(n)
                    })
                })
            })
        }

        getInstallBrowserInfo(e) {
            return o(this, void 0, void 0, function* () {
                return new Promise(t => {
                    f.NativeCallModule.nativeCall.CallNativeFunction("GetInstallBrowserInfo", e, (e, n) => {
                        v.information("Error: Info: ", e, n), t(n)
                    })
                })
            })
        }

        created() {
            this.initConfigGuide().catch()
        }
    };
    i([s.Prop()], m.prototype, "boxId", void 0), i([s.Watch("szCurSelect", {immediate: !0})], m.prototype, "onChange", null), m = i([s.Component], m), t.default = m
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(505), o = n.n(i);
    for (var r in i) "default" !== r && function (e) {
        n.d(t, e, function () {
            return i[e]
        })
    }(r);
    t.default = o.a
}, function (e, t, n) {
    "use strict";
    var i = this && this.__decorate || function (e, t, n, i) {
        var o, r = arguments.length, s = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, i); else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (s = (r < 3 ? o(s) : r > 3 ? o(t, n, s) : o(t, n)) || s);
        return r > 3 && s && Object.defineProperty(t, n, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const o = n(49), r = n(4), s = n(50), a = n(3), l = n(14);
    let c = class extends (o.mixins(s.DraggableMixin, s.PositionMixin)) {
        constructor() {
            super(...arguments), this.progress = 1, this.timerId = -1, this.status = 0
        }

        handleCancel(e) {
            1 !== this.status && 2 !== this.status || window.close()
        }

        onClickDownloadXmp() {
            a.ipcRenderer.send(l.ThunderChannelList.channelRMDownloadXmp), window.close()
        }

        handleFixXmpSuc() {
            this.status = 1, clearTimeout(this.timerId), this.progress = 100, window.close()
        }

        handleFixXmpFail() {
            this.status = 2
        }

        mounted() {
            this.timerId = setInterval(() => {
                this.progress < 100 && (this.progress = this.progress + 1)
            }, 100), a.remote.ipcMain.on(l.ThunderChannelList.channelMRFixXmpSuc, this.handleFixXmpSuc), a.remote.ipcMain.on(l.ThunderChannelList.channelMRFixXMPFail, this.handleFixXmpFail)
        }

        destroyed() {
            a.remote.ipcMain.removeListener(l.ThunderChannelList.channelMRFixXmpSuc, this.handleFixXmpSuc), a.remote.ipcMain.removeListener(l.ThunderChannelList.channelMRFixXMPFail, this.handleFixXmpFail), this.removeDraggable()
        }
    };
    i([r.Prop()], c.prototype, "options", void 0), c = i([r.Component], c), t.default = c
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(507), o = n.n(i);
    for (var r in i) "default" !== r && function (e) {
        n.d(t, e, function () {
            return i[e]
        })
    }(r);
    t.default = o.a
}, function (e, t, n) {
    "use strict";
    var i = this && this.__decorate || function (e, t, n, i) {
        var o, r = arguments.length, s = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, i); else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (s = (r < 3 ? o(s) : r > 3 ? o(t, n, s) : o(t, n)) || s);
        return r > 3 && s && Object.defineProperty(t, n, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const o = n(49), r = n(4), s = n(50), a = n(3), l = n(14);
    let c = class extends (o.mixins(s.DraggableMixin, s.PositionMixin)) {
        constructor() {
            super(...arguments), this.progress = 1, this.timerId = -1, this.status = 0
        }

        handleCancel(e) {
            window.close()
        }

        onClickDownloadXmpEx() {
            a.ipcRenderer.send(l.ThunderChannelList.channelRMDownloadXmpEx), window.close()
        }

        destroyed() {
            this.removeDraggable()
        }
    };
    i([r.Prop()], c.prototype, "options", void 0), c = i([r.Component], c), t.default = c
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(509), o = n.n(i);
    for (var r in i) "default" !== r && function (e) {
        n.d(t, e, function () {
            return i[e]
        })
    }(r);
    t.default = o.a
}, function (e, t, n) {
    "use strict";
    var i = this && this.__decorate || function (e, t, n, i) {
        var o, r = arguments.length, s = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, i); else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (s = (r < 3 ? o(s) : r > 3 ? o(t, n, s) : o(t, n)) || s);
        return r > 3 && s && Object.defineProperty(t, n, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const o = n(49), r = n(50), s = n(4), a = n(6), l = n(80), c = n(152), u = n(157), d = n(3), f = n(1), p = n(13),
        h = n(68), v = f.default.getLogger("ThunderBirdKey");
    let m = class extends (o.mixins(r.DraggableMixin, r.PositionMixin)) {
        constructor() {
            super(...arguments), this.curBirdKey = "", this.expiresDate = "", this.timeToClose = 5
        }

        get tips() {
            return `【迅雷口令#X${this.curBirdKey}#】复制口令，打开最新版迅雷，\n        接下来就是见证奇迹的时刻！（${this.expiresDate}失效）`
        }

        get timeClose() {
            return this.timeToClose
        }

        mounted() {
            v.information("迅雷口令界面"), this.options.showType === u.ShowType.ShowUI_Creating ? this.createBirdKey() : this.options.showType === u.ShowType.ShowUI_Decoding && this.analysisBirdKey(), this.selfCopyFlag = !1, this.isWindowTrytoClose = !1
        }

        onClickClose() {
            this.isWindowTrytoClose = !0, window.close()
        }

        retryEncode() {
            this.createBirdKey(!0), this.showUI(u.ShowType.ShowUI_Creating)
        }

        retryDecode() {
            this.analysisBirdKey(!0), this.showUI(u.ShowType.ShowUI_Decoding)
        }

        getStatPublicData() {
            let e = "";
            return this.options.statData ? (this.options.statData.pannel && (e = e + "pannel=" + this.options.statData.pannel), this.options.statData.gcid && (e = e + ",gcid=" + this.options.statData.gcid), this.options.statData.taskid && (e = e + ",taskid=" + this.options.statData.taskid), this.options.statData.filename && (e = e + ",filename=" + encodeURIComponent(this.options.statData.filename)), this.options.statData.pannelType && (e = e + ",pannel_type=" + this.options.statData.pannelType), this.options.statData.taskType && (e = e + ",task_type=" + this.options.statData.taskType), e) : e
        }

        statCreateBirdKey(e) {
            let t = this.getStatPublicData();
            0 !== t.length && (t = t + ",bird=" + encodeURI(this.tips), v.information("[bird]stat attr:", e, " extData:", t), p.XLStatNS.trackEvent("download_detail", e, "", 0, 0, 0, 0, t))
        }

        statDecodeBirdKey(e, t) {
            let n = "bird=" + encodeURIComponent(t || this.tips);
            this.options.statData.from && (n = n + ",type=" + this.options.statData.from), v.information("[bird]stat attr:", e, " extData:", n), p.XLStatNS.trackEvent("download_detail", e, "", 0, 0, 0, 0, n)
        }

        createBirdKey(e) {
            a.NativeCallModule.nativeCall.CallNativeFunction("GetUserInfo", (t, n) => {
                u.encodeBirdKey(n.userID, this.options.url).then(t => {
                    if (!this.isWindowTrytoClose && "object" == typeof t && t.data) if ("ok" === t.data.result) {
                        v.information("生成迅雷口令成功,口令码:", t.data.bird_key), this.curBirdKey = t.data.bird_key;
                        let e = (new Date).getTime(), n = new Date(e + 5184e6);
                        this.expiresDate = c.TimeHelperNS.formatDate(n, "yyyy年MM月d日"), this.showUI(u.ShowType.ShowUI_CreateSucc), this.statCreateBirdKey("dltab_detail_bird_share_click")
                    } else v.error("生成迅雷口令失败,data:", t.data), this.delayShow(u.ShowType.ShowUI_CreateFailed, e), this.statCreateBirdKey("dltab_detail_bird_share_failed")
                }).catch(t => {
                    v.error("生成迅雷口令发生错误,reason:", t), this.delayShow(u.ShowType.ShowUI_CreateFailed, e), this.statCreateBirdKey("dltab_detail_bird_share_failed")
                })
            })
        }

        analysisBirdKey(e) {
            if (v.information("剪贴板的迅雷口令相应:", this.options.birdkeyChars), !this.options.birdkeyChars) return;
            if (0 === this.options.birdkeyChars.length) return;
            let t = h.URLHelperNS.isBirdKey(this.options.birdkeyChars);
            if (!t || 0 === t.length) return;
            if (u.getBirdKeyMgr().isSameBirdKey(t) && !e) return;
            let n = [], i = 0;
            for (let e = 0; e < t.length; e++) {
                i = t[e].length;
                const o = t[e].substring(2, i - 1);
                n.push(u.decodeBirdKey(o.toLowerCase()))
            }
            Promise.all(n).then(t => {
                if (this.isWindowTrytoClose) return;
                "object" != typeof t && v.error("请求口令回传参数错误", t);
                let n = [];
                for (let e = 0; e < t.length; e++) {
                    if (!t[e].data) continue;
                    if ("ok" !== t[e].data.result) {
                        this.statDecodeBirdKey("bird_parse_fail", this.options.birdkeyChars);
                        continue
                    }
                    if ("string" != typeof t[e].data.url) continue;
                    this.statDecodeBirdKey("bird_parse_success", this.options.birdkeyChars);
                    let i = t[e].data.url;
                    i.indexOf("%") > -1 && (i = decodeURIComponent(i)), i.match("%20") && (i = decodeURI(i)), u.saveVestUrlToConfig(i, "vest" === t[e].data.type), v.information(" decodeURL before:", t[e].data.url, " after:", i), this.isURLExist(i, n) || n.push({
                        url: i,
                        stat: "birdkey"
                    })
                }
                n.length > 0 ? (a.NativeCallModule.nativeCall.CallNativeFunction("CreateNewTaskEx", n), setTimeout(() => {
                    window.close()
                }, 300)) : this.delayShow(u.ShowType.ShowUI_DecodeFailed, e)
            }).catch(t => {
                this.delayShow(u.ShowType.ShowUI_DecodeFailed, e)
            }), u.getBirdKeyMgr().setLastBirdKey(t), this.statDecodeBirdKey("bird_parse_start")
        }

        isURLExist(e, t) {
            let n = !1;
            if (!t) return n;
            if (0 === t.length) return n;
            for (let i = 0; i < t.length; i++) if (t[i].url === e) {
                n = !0;
                break
            }
            return n
        }

        onCopyBtnClick() {
            this.selfCopyFlag = !0, this.statCreateBirdKey("dltab_detail_bird_copy_click");
            let e = this.tips;
            e = (e = (e = e.replace(/\r\n/g, "")).replace(/\n/g, "")).replace(/\s+/g, ""), d.clipboard.writeText(e), this.showUI(u.ShowType.ShowUI_CreateSuccDis), this.timeCloseCookie = setInterval(e => {
                this.timeToClose -= 1, this.timeToClose <= 0 && (clearInterval(this.timeCloseCookie), this.timeCloseCookie = null, window.close())
            }, 1e3)
        }

        delayShow(e, t) {
            t ? setTimeout(() => {
                this.showUI(e)
            }, 300) : this.showUI(e)
        }

        showUI(e) {
            let t = this.options.showType;
            this.options.showType = e;
            let n = 0, i = 0;
            e !== u.ShowType.ShowUI_CreateSucc && e !== u.ShowType.ShowUI_CreateSuccDis || (n = 400, i = 214), t !== e && this.$nextTick(() => {
                l.ThunderWindowNS.resizeToFitContent(n, i), e !== u.ShowType.ShowUI_CreateSuccDis && l.ThunderWindowNS.fitWindowPosInParent()
            })
        }
    };
    i([s.Prop()], m.prototype, "options", void 0), m = i([s.Component({})], m), t.default = m
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(511), o = n.n(i);
    for (var r in i) "default" !== r && function (e) {
        n.d(t, e, function () {
            return i[e]
        })
    }(r);
    t.default = o.a
}, function (e, t, n) {
    "use strict";
    var i = this && this.__decorate || function (e, t, n, i) {
        var o, r = arguments.length, s = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, i); else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (s = (r < 3 ? o(s) : r > 3 ? o(t, n, s) : o(t, n)) || s);
        return r > 3 && s && Object.defineProperty(t, n, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const o = n(4), r = n(3), s = n(6);
    let a = class extends o.Vue {
        constructor() {
            super(...arguments), this.tabsCopy = [], this.currentCopy = 0
        }

        get tabs() {
            return this.options.tabs
        }

        get current() {
            return this.options.current
        }

        get unpinnedLength() {
            return this.tabsCopy.filter(e => !e.pinned).length
        }

        isShowDefaultIcon(e) {
            let t = !1, n = this.tabsCopy[e].title;
            do {
                if ("新标签页" === n) {
                    t = !0;
                    break
                }
                if (-1 !== n.indexOf("ftp://")) {
                    t = !0;
                    break
                }
                if ("" === this.tabsCopy[e].tab.iconUrl || void 0 === this.tabsCopy[e].tab.iconUrl) {
                    t = !0;
                    break
                }
            } while (0);
            return t
        }

        handleIconUrl(e) {
            return this.tabsCopy[e].tab.iconUrl
        }

        handleRemove(e) {
            s.NativeCallModule.nativeCall.CallNativeFunction("CloseTabByIndex", e)
        }

        handleUpdateCurrent(e) {
            this.currentCopy !== e && s.NativeCallModule.nativeCall.CallNativeFunction("SelectTab", e), r.ipcRenderer.send("total-tabs-hide"), this.win.hide()
        }

        created() {
            this.currentCopy = this.current, this.tabsCopy = this.tabs, this.win = r.remote.getCurrentWindow(), this.win.on("blur", () => {
                r.ipcRenderer.send("total-tabs-hide"), this.win.hide()
            }), r.remote.ipcMain.on("total-tabs-update", (e, t) => {
                this.tabsCopy = t.tabs, this.currentCopy = t.current
            })
        }

        mounted() {
            this.win.show(), this.$refs["item" + this.current][0].scrollIntoView()
        }
    };
    i([o.Prop()], a.prototype, "options", void 0), a = i([o.Component({})], a), t.default = a
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(513), o = n.n(i);
    for (var r in i) "default" !== r && function (e) {
        n.d(t, e, function () {
            return i[e]
        })
    }(r);
    t.default = o.a
}, function (e, t, n) {
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
    const r = n(3), s = n(49), a = n(4), l = n(50), c = n(1011), u = n(1012), d = n(1013), f = n(38), p = n(246),
        h = n(15), v = n(1), m = n(6), g = n(298), _ = n(13), y = n(10), b = n(30),
        C = v.default.getLogger("Individuation"), {isDef: w} = y.ThunderUtil;
    let x = class extends (s.mixins(l.DraggableMixin, l.PositionMixin)) {
        constructor() {
            super(...arguments), this.tabs = [{title: "皮肤", key: "skin"}, {
                title: "头像",
                key: "avatar"
            }], this.activeKey = "skin", this.skinTabs = [{title: "精选", key: "featured"}, {
                title: "自定义",
                key: "custom"
            }, {
                title: "速度条",
                key: "speedcurve"
            }], this.skinActiveKey = "featured", this.skinInfo = f.SkinHelperNS.defaultSkinInfo, this.lastSkinInfo = null, this.wallpaper = null, this.wallpapers = [], this.speedCurveSkinInfo = p.SpeedCurveSkinHelperNS.defaultSkinInfo, this.lastSpeedCurveSkinInfo = null, this.isLogined = !1, this.isVip = !1, this.vasType = 0
        }

        get isPlatinumVip() {
            return this.isVip && w(this.vasType) && this.vasType > 2
        }

        get isSuperVip() {
			this.vasType = 5;
            return this.isVip && 5 === this.vasType
        }

        canUseSpeedCurveSkin(e) {
            let t = 1;
            return t
        }

        openVip() {
            return o(this, void 0, void 0, function* () {
                this.trackEvent("user_info", "open_vip", {type: "skin" === this.activeKey ? "skin" : "head_image"});
                try {
                    yield h.default("OpenNewTab", "https://pay.xunlei.com/pay.html?bizNo=baijin"), this.closeWindow()
                } catch (e) {
                    C.warning(e)
                }
            })
        }

        updateIsVip() {
            return o(this, void 0, void 0, function* () {
                try {
                    let e = JSON.parse(yield h.default("GetUserInfo", 2));
                    w(e) && (this.vasType = 5, this.isVip = 1)
                } catch (e) {
                    C.warning(e)
                }
            })
        }

        changeTab() {
            let e = {skin: "skin", avatar: "head_image"}[this.activeKey],
                t = {featured: "recommend", custom: "custom", speedcurve: " progress_bar"}[this.skinActiveKey];
            this.trackEvent("user_info", "change_tab", {type: e, tab: t})
        }

        trackEvent(e, t, n) {
            _.XLStatNS.trackEvent(e, t, "", 0, 0, 0, 0, Object.assign({
                is_login: Number(this.isLogined),
                is_vip: Number(this.isVip),
                vip_type: this.vasType
            }, n))
        }

        restoreSkin() {
            return o(this, void 0, void 0, function* () {
                w(this.wallpaper) && this.wallpaper.is_vip && (this.isLogined && !this.isVip || !this.isLogined) && (yield this.setSkinInfo(this.lastSkinInfo))
            })
        }

        restoreSpeedCurveSkin() {
            return o(this, void 0, void 0, function* () {
                this.canUseSpeedCurveSkin(this.speedCurveSkinInfo) || (yield this.setSpeedCurveSkinInfo(this.lastSpeedCurveSkinInfo))
            })
        }

        closeWindow() {
            return o(this, void 0, void 0, function* () {
                yield this.restoreSkin(), yield this.restoreSpeedCurveSkin(), r.ipcRenderer.send(`message-box-resolve-${this.boxId}`, b.MessageBoxNS.Action.Close), window.close()
            })
        }

        setSkinInfo(e, t, n, i = !1) {
            return o(this, void 0, void 0, function* () {
                e.type === f.SkinHelperNS.SkinType.Wallpaper ? (this.wallpaper = n, w(n) && !n.is_vip && (this.lastSkinInfo = e)) : (this.wallpaper = null, this.lastSkinInfo = e), w(t) && this.trackEvent("user_info", "click_member_exclusive", {
                    type: "skin",
                    is_member_exclusive: Number(Boolean(n && n.is_vip)),
                    id: t
                });
                try {
                    yield h.default("SetSkinInfo", e, !0, i)
                } catch (e) {
                    C.warning(e)
                }
            })
        }

        setSpeedCurveSkinInfo(e, t = !1) {
            return o(this, void 0, void 0, function* () {
                this.speedCurveSkinInfo = e, this.canUseSpeedCurveSkin(e) && (this.lastSpeedCurveSkinInfo = e);
                try {
                    yield h.default("SetSpeedCurveSkinInfo", e, !0, t)
                } catch (e) {
                    C.warning(e)
                }
            })
        }

        handleClose() {
            r.ipcRenderer.send(`message-box-resolve-${this.boxId}`, b.MessageBoxNS.Action.Close), window.close()
        }

        created() {
            return o(this, void 0, void 0, function* () {
                h.default("GetSkinInfo").then(e => {
                    this.skinInfo = e, this.lastSkinInfo = this.skinInfo
                }, e => {
                    C.warning(e)
                }), h.default("GetSpeedCurveSkinInfo").then(e => {
                    e.is_vip_try || (this.speedCurveSkinInfo = e), this.lastSpeedCurveSkinInfo = this.speedCurveSkinInfo
                }, e => {
                    C.warning(e)
                }), h.default("IsLogined").then(e => {
                    this.isLogined = e
                }, e => {
                    C.warning(e)
                }), this.updateIsVip(), m.NativeCallModule.nativeCall.AttachNativeEvent("OnChangeSkin", e => {
                    this.skinInfo = e
                }), m.NativeCallModule.nativeCall.AttachNativeEvent("OnChangeSpeedCurveSkin", (e, t, n) => {
                    t || n || (this.speedCurveSkinInfo = e)
                }), m.NativeCallModule.nativeCall.AttachNativeEvent("OnUserLogin", () => {
                    this.isLogined = !0, this.updateIsVip()
                }), m.NativeCallModule.nativeCall.AttachNativeEvent("OnUserLogout", () => {
                    this.isLogined = !1, this.isVip = !1, this.vasType = 0
                }), m.NativeCallModule.nativeCall.AttachNativeEvent("OnLoginWndClose", e => {
                    "close" === e && (this.restoreSkin(), this.restoreSpeedCurveSkin())
                });
                try {
                    let e = JSON.parse(localStorage.getItem("wallpapers"));
                    null !== e && (this.wallpapers = e.sort((e, t) => e.manual_order - t.manual_order));
                    let t = ((yield g.default.getWallpapers()) || []).sort((e, t) => e.manual_order - t.manual_order);
                    t.length > 0 && (this.wallpapers = t), C.information("获取壁纸", this.wallpapers)
                } catch (e) {
                    C.warning(e)
                }
            })
        }

        mounted() {
            this.trackEvent("user_info", "personalized_center_show"), w(this.options) && (w(this.options.activeKey) && (this.activeKey = this.options.activeKey), w(this.options.skinActiveKey) && (this.skinActiveKey = this.options.skinActiveKey))
        }
    };
    i([a.Prop()], x.prototype, "options", void 0), i([a.Prop()], x.prototype, "boxId", void 0), x = i([a.Component({
        components: {
            PaneSkinCustom: c.default,
            PaneSkinFeatured: u.default,
            PaneSkinSpeedcurve: d.default
        }
    })], x), t.default = x
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(515), o = n.n(i);
    for (var r in i) "default" !== r && function (e) {
        n.d(t, e, function () {
            return i[e]
        })
    }(r);
    t.default = o.a
}, function (e, t, n) {
    "use strict";
    var i = this && this.__decorate || function (e, t, n, i) {
        var o, r = arguments.length, s = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, i); else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (s = (r < 3 ? o(s) : r > 3 ? o(t, n, s) : o(t, n)) || s);
        return r > 3 && s && Object.defineProperty(t, n, s), s
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const o = n(4);
    let r = class extends o.Vue {
    };
    r = i([o.Component], r), t.default = r
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(517), o = n.n(i);
    for (var r in i) "default" !== r && function (e) {
        n.d(t, e, function () {
            return i[e]
        })
    }(r);
    t.default = o.a
}, function (e, t, n) {
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
    const r = n(4), s = n(568), a = n(38), l = n(15), c = n(1), u = n(298), d = n(10), f = n(5), p = n(2), h = n(13),
        v = f.default(p.join(__rootDir, "../bin/ThunderHelper.node")),
        m = c.default.getLogger("Individuation"), {isDef: g} = d.ThunderUtil;
    let _ = class extends r.Vue {
        constructor() {
            super(...arguments), this.colorList = s.SkinConfigNS.colorList, this.skinType = a.SkinHelperNS.SkinType, this.defaultPreview = JSON.stringify(`${__rootDir}/static/default-preview.jpg`), this.updateDialogVisible = !1, this.vipDialogVisible = !1
        }

        trackEvent(e, t, n) {
            h.XLStatNS.trackEvent(e, t, "", 0, 0, 0, 0, Object.assign({
                is_login: Number(this.isLogined),
                is_vip: Number(this.isVip)
            }, n))
        }

        changeWallpaper(e, t) {
            return o(this, void 0, void 0, function* () {
                if (e.is_vip && (this.isLogined && this.isVip || (this.vipDialogVisible = !0, this.trackEvent("user_info", "open_vip_tip_show", {type: "skin"}))), !e.is_dynamic || g(this.options.dynamicSkinVersion) && d.ThunderUtil.versionCompare(this.options.version, this.options.dynamicSkinVersion) >= 0) {
                    let n = yield u.default.getImage(e), i = !!e.is_vip;
                    this.$emit("set-skin-info", {
                        type: a.SkinHelperNS.SkinType.Wallpaper,
                        colorID: e.color,
                        image: n,
                        opacity: e.transparency / 100,
                        skinID: e.id
                    }, t, e, i)
                } else this.vipDialogVisible || (this.updateDialogVisible = !0, this.trackEvent("user_info", "update_now"))
            })
        }

        updateApp() {
            v.startManualUpdateWithUI(), this.updateDialogVisible = !1, this.trackEvent("user_info", "click_update_now")
        }

        openVip() {
            return o(this, void 0, void 0, function* () {
                this.trackEvent("user_info", "open_vip_tip_click", {type: "skin", button: "open_vip"});
                try {
                    yield l.default("OpenNewTab", "https://pay.xunlei.com/pay.html?bizNo=baijin"), this.$emit("close-window")
                } catch (e) {
                    m.warning(e)
                }
            })
        }

        showloginDlg() {
            return o(this, void 0, void 0, function* () {
                this.trackEvent("user_info", "open_vip_tip_click", {type: "skin", button: "login"});
                try {
                    yield l.default("ShowLoginDlg"), this.vipDialogVisible = !1
                } catch (e) {
                    m.warning(e)
                }
            })
        }
    };
    i([r.Prop()], _.prototype, "options", void 0), i([r.Prop()], _.prototype, "skinInfo", void 0), i([r.Prop()], _.prototype, "lastSkinInfo", void 0), i([r.Prop()], _.prototype, "wallpapers", void 0), i([r.Prop()], _.prototype, "isLogined", void 0), i([r.Prop()], _.prototype, "isVip", void 0), _ = i([r.Component], _), t.default = _
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(519), o = n.n(i);
    for (var r in i) "default" !== r && function (e) {
        n.d(t, e, function () {
            return i[e]
        })
    }(r);
    t.default = o.a
}, function (e, t, n) {
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
    const r = n(4), s = n(246), a = n(257), l = n(15), c = n(10), u = n(1), d = n(13), f = n(200), p = n(9),
        h = u.default.getLogger("Individuation"), {isDef: v} = c.ThunderUtil,
        m = `${s.SpeedCurveSkinHelperNS.cacheDir}/Preview`;
    let g = class extends r.Vue {
        constructor() {
            super(...arguments), this.skinType = s.SpeedCurveSkinHelperNS.SkinType, this.defaultPreview = JSON.stringify(`${__rootDir}/static/default-speedcurve-preview.png`), this.defaultSkinInfo = s.SpeedCurveSkinHelperNS.defaultSkinInfo, this.skins = [], this.vipDialogVisible = !1, this.ktType = ""
        }

        get vipDialogTitle() {
            let e = "开通迅雷会员尊享品质皮肤";
            return this.skinInfo.type === s.SpeedCurveSkinHelperNS.SkinType.SuperVip && (e = "开通超级会员尊享超级皮肤"), e
        }

        get vipDialogBtnText() {
            let e = "开通会员";
            return this.skinInfo.type === s.SpeedCurveSkinHelperNS.SkinType.SuperVip && (e = this.isVip ? "升级超会" : "开通超会"), e
        }

        canUse(e) {
            let t = 1;
            return t
        }

        trackEvent(e, t, n) {
            d.XLStatNS.trackEvent(e, t, "", 0, 0, 0, 0, Object.assign({
                is_login: Number(this.isLogined),
                vip_type: this.vasType
            }, n))
        }

        trackOpenVipShow(e) {
            this.trackEvent("user_info", "open_vip_tip_show", {type: "skin", kt_type: this.ktType})
        }

        trackChangeSkin(e) {
            let t = "free";
            e.type === this.skinType.SuperVip ? t = "ch" : e.type === this.skinType.Vip && (t = "bj"), this.trackEvent("user_info", "change_progress_bar", {
                type: "skin",
                button: "login",
                skin_type: t,
                id: e.id
            })
        }

        changeSkin(e) {
            return o(this, void 0, void 0, function* () {
                this.trackChangeSkin(e), this.ktType = e.type === this.skinType.SuperVip ? "ch" : "bj";
                let t = !!(v(e.type) && e.type >= this.skinType.Vip);
                this.$emit("set-skin-info", e, t), this.canUse(e) || (this.vipDialogVisible = !0, this.trackOpenVipShow(e))
            })
        }

        openVip() {
            return o(this, void 0, void 0, function* () {
                this.trackEvent("user_info", "open_vip_tip_click", {
                    type: "skin",
                    button: "open_vip",
                    kt_type: this.ktType
                });
                try {
                    let e = void 0;
                    e = "ch" === this.ktType ? "https://pay.xunlei.com/pay.html?bizNo=baijin&selectBizno=supervip&timeType=1006&referfrom=v_pc_xlx_ggong_skin_kt&aidfrom=ch" : "https://pay.xunlei.com/pay.html?bizNo=baijin&selectBizno=baijin&timeType=1001&referfrom=v_pc_xlx_ggong_skin_kt&aidfrom=bj", yield l.default("OpenNewTab", e), this.$emit("close-window")
                } catch (e) {
                    h.warning(e)
                }
            })
        }

        showloginDlg() {
            return o(this, void 0, void 0, function* () {
                this.trackEvent("user_info", "open_vip_tip_click", {
                    type: "skin",
                    button: "login",
                    kt_type: this.ktType
                });
                try {
                    yield l.default("ShowLoginDlg"), this.vipDialogVisible = !1
                } catch (e) {
                    h.warning(e)
                }
            })
        }

        created() {
            return o(this, void 0, void 0, function* () {
                try {
                    let e = (yield a.default.getSkins()) || [];
                    for (let t of e) {
                        let e = `${m}/${t.id}.png`, n = yield p.FileSystemAWNS.existsAW(e);
                        n || (n = yield f.AxiosNS.downloadFileAW(t.preview, e)), n && (t.previewSavePath = e, this.skins.push(t))
                    }
                    h.information("获取速度曲线皮肤", this.skins)
                } catch (e) {
                    h.warning(e)
                }
            })
        }
    };
    i([r.Prop()], g.prototype, "skinInfo", void 0), i([r.Prop()], g.prototype, "lastSkinInfo", void 0), i([r.Prop()], g.prototype, "isLogined", void 0), i([r.Prop()], g.prototype, "isVip", void 0), i([r.Prop()], g.prototype, "isPlatinumVip", void 0), i([r.Prop()], g.prototype, "isSuperVip", void 0), i([r.Prop()], g.prototype, "vasType", void 0), g = i([r.Component], g), t.default = g
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, n) {
    e.exports = n(12)(67)
}, , , , , , , , , , , , , , , , , , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
        e.colorList = [{id: 0}, {
            id: 1,
            defaultOpacity: .9,
            colors: {
                colorPreview: "196,208,232",
                colorAccordion: ["116,137,180", "116,137,180"],
                colorGradientBackground: ["191,207,230", "227,236,246"],
                colorGradientForeground: ["255,255,255", "255,255,255"],
                colorPrimary: "116,137,180",
                colorPrimaryControl1: "120,149,209",
                colorPrimaryControl2: "116,137,180",
                colorPrimaryControl3: "212,225,225",
                colorPrimaryControl4: "240,243,250",
                colorPrimaryGradient: ["168,187,226", "105,132,177"],
                colorPrimaryText: "56,66,77",
                colorSearch: "252,252,252",
                colorSecondary: "83,95,117"
            }
        }, {
            id: 2,
            defaultOpacity: .9,
            colors: {
                colorPreview: "159,204,255",
                colorAccordion: ["51,160,255", "91,179,255"],
                colorGradientBackground: ["217,236,255", "138,204,255"],
                colorGradientForeground: ["255,255,255", "255,255,255"],
                colorPrimary: "51,160,255",
                colorPrimaryControl1: "119,182,255",
                colorPrimaryControl2: "51,160,255",
                colorPrimaryControl3: "212,231,255",
                colorPrimaryControl4: "232,240,255",
                colorPrimaryGradient: ["0,137,226", "103,189,255"],
                colorPrimaryText: "73,91,104",
                colorSearch: "252,252,252",
                colorSecondary: "103,132,154"
            }
        }, {
            id: 3,
            defaultOpacity: .9,
            colors: {
                colorPreview: "255,187,128",
                colorAccordion: ["255,149,87", "255,149,87"],
                colorGradientBackground: ["255,210,142", "255,151,119"],
                colorGradientForeground: ["255,255,255", "255,255,255"],
                colorPrimary: "255,149,87",
                colorPrimaryControl1: "255,178,110",
                colorPrimaryControl2: "255,149,87",
                colorPrimaryControl3: "229,210,194",
                colorPrimaryControl4: "242,233,226",
                colorPrimaryGradient: ["255,176,39", "255,137,33"],
                colorPrimaryText: "97,64,47",
                colorSearch: "252,252,252",
                colorSecondary: "130,99,75"
            }
        }, {
            id: 4,
            defaultOpacity: .9,
            colors: {
                colorPreview: "150,200,158",
                colorAccordion: ["93,154,103", "93,154,103"],
                colorGradientBackground: ["171,207,158", "124,188,162"],
                colorGradientForeground: ["255,255,255", "255,255,255"],
                colorPrimary: "85,123,91",
                colorPrimaryControl1: "114,152,120",
                colorPrimaryControl2: "85,123,91",
                colorPrimaryControl3: "191,210,194",
                colorPrimaryControl4: "220,232,222",
                colorPrimaryGradient: ["84,123,81", "115,165,150"],
                colorPrimaryText: "67,74,61",
                colorSearch: "252,252,252",
                colorSecondary: "97,109,86"
            }
        }, {
            id: 5,
            defaultOpacity: .5,
            colors: {
                colorPreview: "47,73,141",
                colorAccordion: ["99,177,255", "121,175,244"],
                colorGradientBackground: ["56,76,140", "41,72,143"],
                colorGradientForeground: ["97,144,251", "19,34,75"],
                colorPrimary: "230,199,138",
                colorPrimaryControl1: "204,170,122",
                colorPrimaryControl2: "220,191,132",
                colorPrimaryControl3: "185,185,185",
                colorPrimaryControl4: "233,233,233",
                colorPrimaryGradient: ["111,150,255", "156,192,255"],
                colorPrimaryText: "230,207,161",
                colorSearch: "68,124,209",
                colorSecondary: "204,184,143"
            }
        }, {
            id: 6,
            defaultOpacity: .7,
            colors: {
                colorPreview: "65,17,17",
                colorAccordion: ["214,99,99", "214,99,99"],
                colorGradientBackground: ["72,29,29", "16,7,7"],
                colorGradientForeground: ["117,57,57", "30,22,22"],
                colorPrimary: "223,77,77",
                colorPrimaryControl1: "220,96,96",
                colorPrimaryControl2: "159,51,51",
                colorPrimaryControl3: "219,193,193",
                colorPrimaryControl4: "239,224,224",
                colorPrimaryGradient: ["255,86,86", "161,70,70"],
                colorPrimaryText: "235,197,197",
                colorSearch: "88,74,74",
                colorSecondary: "184,151,151"
            }
        }, {
            id: 7,
            defaultOpacity: .3,
            colors: {
                colorPreview: "75,65,129",
                colorAccordion: ["160,185,252", "103,155,207"],
                colorGradientBackground: ["29,90,151", "105,61,191"],
                colorGradientForeground: ["163,177,204", "0,0,0"],
                colorPrimary: "128,213,255",
                colorPrimaryControl1: "118,193,230",
                colorPrimaryControl2: "161,207,230",
                colorPrimaryControl3: "205,215,235",
                colorPrimaryControl4: "228,232,240",
                colorPrimaryGradient: ["142,163,245", "120,144,222"],
                colorPrimaryText: "184,197,204",
                colorSearch: "153,153,153",
                colorSecondary: "138,184,230"
            }
        }, {
            id: 8,
            defaultOpacity: .6,
            colors: {
                colorPreview: "82,39,90",
                colorAccordion: ["170,163,204", "136,122,204"],
                colorGradientBackground: ["83,42,118", "61,46,77"],
                colorGradientForeground: ["93,82,193", "0,0,0"],
                colorPrimary: "170,153,255",
                colorPrimaryControl1: "136,122,204",
                colorPrimaryControl2: "147,132,220",
                colorPrimaryControl3: "204,194,255",
                colorPrimaryControl4: "234,230,255",
                colorPrimaryGradient: ["156,149,255", "128,128,255"],
                colorPrimaryText: "191,184,230",
                colorSearch: "166,148,255",
                colorSecondary: "153,143,204"
            }
        }, {
            id: 9,
            defaultOpacity: .3,
            colors: {
                colorPreview: "74,77,83",
                colorAccordion: ["103,155,207", "160,185,252"],
                colorGradientBackground: ["69,71,77", "15,19,26"],
                colorGradientForeground: ["179,179,179", "0,34,51"],
                colorPrimary: "204,238,255",
                colorPrimaryControl1: "143,184,204",
                colorPrimaryControl2: "161,207,230",
                colorPrimaryControl3: "205,215,235",
                colorPrimaryControl4: "228,232,240",
                colorPrimaryGradient: ["140,173,205", "103,132,162"],
                colorPrimaryText: "184,197,204",
                colorSearch: "153,153,153",
                colorSecondary: "138,184,230"
            }
        }, {
            id: 10,
            defaultOpacity: .5,
            colors: {
                colorPreview: "77,62,45",
                colorAccordion: ["204,177,122", "204,191,163"],
                colorGradientBackground: ["51,44,30", "26,22,15"],
                colorGradientForeground: ["153,122,92", "0,0,0"],
                colorPrimary: "230,199,138",
                colorPrimaryControl1: "204,170,122",
                colorPrimaryControl2: "220,191,132",
                colorPrimaryControl3: "219,212,203",
                colorPrimaryControl4: "236,230,223",
                colorPrimaryGradient: ["186,152,105", "226,197,139"],
                colorPrimaryText: "230,207,161",
                colorSearch: "105,105,105",
                colorSecondary: "204,184,143"
            }
        }]
    }(t.SkinConfigNS || (t.SkinConfigNS = {}))
}, , , , function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(227), o = n(168);
    for (var r in o) "default" !== r && function (e) {
        n.d(t, e, function () {
            return o[e]
        })
    }(r);
    n(614);
    var s = n(0), a = Object(s.a)(o.default, i.a, i.b, !1, null, "69ad46c4", null);
    a.options.__file = "src\\common\\generator-view\\generator-view.vue", t.default = a.exports
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(232), o = n(170);
    for (var r in o) "default" !== r && function (e) {
        n.d(t, e, function () {
            return o[e]
        })
    }(r);
    var s = n(0), a = Object(s.a)(o.default, i.a, i.b, !1, null, null, null);
    a.options.__file = "src\\common\\generator-view\\conf-component\\conf-checkbox.vue", t.default = a.exports
}, function (e, t, n) {
    e.exports = {default: n(575), __esModule: !0}
}, function (e, t, n) {
    n(576), e.exports = n(142).Object.assign
}, function (e, t, n) {
    var i = n(214);
    i(i.S + i.F, "Object", {assign: n(579)})
}, function (e, t, n) {
    var i = n(578);
    e.exports = function (e, t, n) {
        if (i(e), void 0 === t) return e;
        switch (n) {
            case 1:
                return function (n) {
                    return e.call(t, n)
                };
            case 2:
                return function (n, i) {
                    return e.call(t, n, i)
                };
            case 3:
                return function (n, i, o) {
                    return e.call(t, n, i, o)
                }
        }
        return function () {
            return e.apply(t, arguments)
        }
    }
}, function (e, t) {
    e.exports = function (e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");
        return e
    }
}, function (e, t, n) {
    "use strict";
    var i = n(162), o = n(221), r = n(165), s = n(270), a = n(268), l = Object.assign;
    e.exports = !l || n(144)(function () {
        var e = {}, t = {}, n = Symbol(), i = "abcdefghijklmnopqrst";
        return e[n] = 7, i.split("").forEach(function (e) {
            t[e] = e
        }), 7 != l({}, e)[n] || Object.keys(l({}, t)).join("") != i
    }) ? function (e, t) {
        for (var n = s(e), l = arguments.length, c = 1, u = o.f, d = r.f; l > c;) for (var f, p = a(arguments[c++]), h = u ? i(p).concat(u(p)) : i(p), v = h.length, m = 0; v > m;) d.call(p, f = h[m++]) && (n[f] = p[f]);
        return n
    } : l
}, function (e, t, n) {
    var i = n(111), o = n(581), r = n(582);
    e.exports = function (e) {
        return function (t, n, s) {
            var a, l = i(t), c = o(l.length), u = r(s, c);
            if (e && n != n) {
                for (; c > u;) if ((a = l[u++]) != a) return !0
            } else for (; c > u; u++) if ((e || u in l) && l[u] === n) return e || u || 0;
            return !e && -1
        }
    }
}, function (e, t, n) {
    var i = n(217), o = Math.min;
    e.exports = function (e) {
        return e > 0 ? o(i(e), 9007199254740991) : 0
    }
}, function (e, t, n) {
    var i = n(217), o = Math.max, r = Math.min;
    e.exports = function (e, t) {
        return (e = i(e)) < 0 ? o(e + t, 0) : r(e, t)
    }
}, function (e, t, n) {
    e.exports = {default: n(584), __esModule: !0}
}, function (e, t, n) {
    n(585), n(591), e.exports = n(224).f("iterator")
}, function (e, t, n) {
    "use strict";
    var i = n(586)(!0);
    n(271)(String, "String", function (e) {
        this._t = String(e), this._i = 0
    }, function () {
        var e, t = this._t, n = this._i;
        return n >= t.length ? {value: void 0, done: !0} : (e = i(t, n), this._i += e.length, {value: e, done: !1})
    })
}, function (e, t, n) {
    var i = n(217), o = n(216);
    e.exports = function (e) {
        return function (t, n) {
            var r, s, a = String(o(t)), l = i(n), c = a.length;
            return l < 0 || l >= c ? e ? "" : void 0 : (r = a.charCodeAt(l)) < 55296 || r > 56319 || l + 1 === c || (s = a.charCodeAt(l + 1)) < 56320 || s > 57343 ? e ? a.charAt(l) : r : e ? a.slice(l, l + 2) : s - 56320 + (r - 55296 << 10) + 65536
        }
    }
}, function (e, t, n) {
    "use strict";
    var i = n(273), o = n(161), r = n(223), s = {};
    n(108)(s, n(112)("iterator"), function () {
        return this
    }), e.exports = function (e, t, n) {
        e.prototype = i(s, {next: o(1, n)}), r(e, t + " Iterator")
    }
}, function (e, t, n) {
    var i = n(109), o = n(160), r = n(162);
    e.exports = n(110) ? Object.defineProperties : function (e, t) {
        o(e);
        for (var n, s = r(t), a = s.length, l = 0; a > l;) i.f(e, n = s[l++], t[n]);
        return e
    }
}, function (e, t, n) {
    var i = n(81).document;
    e.exports = i && i.documentElement
}, function (e, t, n) {
    var i = n(88), o = n(270), r = n(218)("IE_PROTO"), s = Object.prototype;
    e.exports = Object.getPrototypeOf || function (e) {
        return e = o(e), i(e, r) ? e[r] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? s : null
    }
}, function (e, t, n) {
    n(592);
    for (var i = n(81), o = n(108), r = n(222), s = n(112)("toStringTag"), a = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), l = 0; l < a.length; l++) {
        var c = a[l], u = i[c], d = u && u.prototype;
        d && !d[s] && o(d, s, c), r[c] = r.Array
    }
}, function (e, t, n) {
    "use strict";
    var i = n(593), o = n(594), r = n(222), s = n(111);
    e.exports = n(271)(Array, "Array", function (e, t) {
        this._t = s(e), this._i = 0, this._k = t
    }, function () {
        var e = this._t, t = this._k, n = this._i++;
        return !e || n >= e.length ? (this._t = void 0, o(1)) : o(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]])
    }, "values"), r.Arguments = r.Array, i("keys"), i("values"), i("entries")
}, function (e, t) {
    e.exports = function () {
    }
}, function (e, t) {
    e.exports = function (e, t) {
        return {value: t, done: !!e}
    }
}, function (e, t, n) {
    e.exports = {default: n(596), __esModule: !0}
}, function (e, t, n) {
    n(597), n(603), n(604), n(605), e.exports = n(142).Symbol
}, function (e, t, n) {
    "use strict";
    var i = n(81), o = n(88), r = n(110), s = n(214), a = n(272), l = n(598).KEY, c = n(144), u = n(219), d = n(223),
        f = n(164), p = n(112), h = n(224), v = n(225), m = n(599), g = n(600), _ = n(160), y = n(143), b = n(111),
        C = n(215), w = n(161), x = n(273), S = n(601), k = n(602), P = n(109), T = n(162), D = k.f, R = P.f, O = S.f,
        N = i.Symbol, E = i.JSON, I = E && E.stringify, M = p("_hidden"), F = p("toPrimitive"),
        j = {}.propertyIsEnumerable, A = u("symbol-registry"), L = u("symbols"), W = u("op-symbols"),
        B = Object.prototype, U = "function" == typeof N, $ = i.QObject,
        V = !$ || !$.prototype || !$.prototype.findChild, K = r && c(function () {
            return 7 != x(R({}, "a", {
                get: function () {
                    return R(this, "a", {value: 7}).a
                }
            })).a
        }) ? function (e, t, n) {
            var i = D(B, t);
            i && delete B[t], R(e, t, n), i && e !== B && R(B, t, i)
        } : R, G = function (e) {
            var t = L[e] = x(N.prototype);
            return t._k = e, t
        }, H = U && "symbol" == typeof N.iterator ? function (e) {
            return "symbol" == typeof e
        } : function (e) {
            return e instanceof N
        }, z = function (e, t, n) {
            return e === B && z(W, t, n), _(e), t = C(t, !0), _(n), o(L, t) ? (n.enumerable ? (o(e, M) && e[M][t] && (e[M][t] = !1), n = x(n, {enumerable: w(0, !1)})) : (o(e, M) || R(e, M, w(1, {})), e[M][t] = !0), K(e, t, n)) : R(e, t, n)
        }, q = function (e, t) {
            _(e);
            for (var n, i = m(t = b(t)), o = 0, r = i.length; r > o;) z(e, n = i[o++], t[n]);
            return e
        }, X = function (e) {
            var t = j.call(this, e = C(e, !0));
            return !(this === B && o(L, e) && !o(W, e)) && (!(t || !o(this, e) || !o(L, e) || o(this, M) && this[M][e]) || t)
        }, Q = function (e, t) {
            if (e = b(e), t = C(t, !0), e !== B || !o(L, t) || o(W, t)) {
                var n = D(e, t);
                return !n || !o(L, t) || o(e, M) && e[M][t] || (n.enumerable = !0), n
            }
        }, J = function (e) {
            for (var t, n = O(b(e)), i = [], r = 0; n.length > r;) o(L, t = n[r++]) || t == M || t == l || i.push(t);
            return i
        }, Y = function (e) {
            for (var t, n = e === B, i = O(n ? W : b(e)), r = [], s = 0; i.length > s;) !o(L, t = i[s++]) || n && !o(B, t) || r.push(L[t]);
            return r
        };
    U || (a((N = function () {
        if (this instanceof N) throw TypeError("Symbol is not a constructor!");
        var e = f(arguments.length > 0 ? arguments[0] : void 0), t = function (n) {
            this === B && t.call(W, n), o(this, M) && o(this[M], e) && (this[M][e] = !1), K(this, e, w(1, n))
        };
        return r && V && K(B, e, {configurable: !0, set: t}), G(e)
    }).prototype, "toString", function () {
        return this._k
    }), k.f = Q, P.f = z, n(274).f = S.f = J, n(165).f = X, n(221).f = Y, r && !n(163) && a(B, "propertyIsEnumerable", X, !0), h.f = function (e) {
        return G(p(e))
    }), s(s.G + s.W + s.F * !U, {Symbol: N});
    for (var Z = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ee = 0; Z.length > ee;) p(Z[ee++]);
    for (var te = T(p.store), ne = 0; te.length > ne;) v(te[ne++]);
    s(s.S + s.F * !U, "Symbol", {
        for: function (e) {
            return o(A, e += "") ? A[e] : A[e] = N(e)
        }, keyFor: function (e) {
            if (!H(e)) throw TypeError(e + " is not a symbol!");
            for (var t in A) if (A[t] === e) return t
        }, useSetter: function () {
            V = !0
        }, useSimple: function () {
            V = !1
        }
    }), s(s.S + s.F * !U, "Object", {
        create: function (e, t) {
            return void 0 === t ? x(e) : q(x(e), t)
        },
        defineProperty: z,
        defineProperties: q,
        getOwnPropertyDescriptor: Q,
        getOwnPropertyNames: J,
        getOwnPropertySymbols: Y
    }), E && s(s.S + s.F * (!U || c(function () {
        var e = N();
        return "[null]" != I([e]) || "{}" != I({a: e}) || "{}" != I(Object(e))
    })), "JSON", {
        stringify: function (e) {
            for (var t, n, i = [e], o = 1; arguments.length > o;) i.push(arguments[o++]);
            if (n = t = i[1], (y(t) || void 0 !== e) && !H(e)) return g(t) || (t = function (e, t) {
                if ("function" == typeof n && (t = n.call(this, e, t)), !H(t)) return t
            }), i[1] = t, I.apply(E, i)
        }
    }), N.prototype[F] || n(108)(N.prototype, F, N.prototype.valueOf), d(N, "Symbol"), d(Math, "Math", !0), d(i.JSON, "JSON", !0)
}, function (e, t, n) {
    var i = n(164)("meta"), o = n(143), r = n(88), s = n(109).f, a = 0, l = Object.isExtensible || function () {
        return !0
    }, c = !n(144)(function () {
        return l(Object.preventExtensions({}))
    }), u = function (e) {
        s(e, i, {value: {i: "O" + ++a, w: {}}})
    }, d = e.exports = {
        KEY: i, NEED: !1, fastKey: function (e, t) {
            if (!o(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
            if (!r(e, i)) {
                if (!l(e)) return "F";
                if (!t) return "E";
                u(e)
            }
            return e[i].i
        }, getWeak: function (e, t) {
            if (!r(e, i)) {
                if (!l(e)) return !0;
                if (!t) return !1;
                u(e)
            }
            return e[i].w
        }, onFreeze: function (e) {
            return c && d.NEED && l(e) && !r(e, i) && u(e), e
        }
    }
}, function (e, t, n) {
    var i = n(162), o = n(221), r = n(165);
    e.exports = function (e) {
        var t = i(e), n = o.f;
        if (n) for (var s, a = n(e), l = r.f, c = 0; a.length > c;) l.call(e, s = a[c++]) && t.push(s);
        return t
    }
}, function (e, t, n) {
    var i = n(269);
    e.exports = Array.isArray || function (e) {
        return "Array" == i(e)
    }
}, function (e, t, n) {
    var i = n(111), o = n(274).f, r = {}.toString,
        s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    e.exports.f = function (e) {
        return s && "[object Window]" == r.call(e) ? function (e) {
            try {
                return o(e)
            } catch (e) {
                return s.slice()
            }
        }(e) : o(i(e))
    }
}, function (e, t, n) {
    var i = n(165), o = n(161), r = n(111), s = n(215), a = n(88), l = n(265), c = Object.getOwnPropertyDescriptor;
    t.f = n(110) ? c : function (e, t) {
        if (e = r(e), t = s(t, !0), l) try {
            return c(e, t)
        } catch (e) {
        }
        if (a(e, t)) return o(!i.f.call(e, t), e[t])
    }
}, function (e, t) {
}, function (e, t, n) {
    n(225)("asyncIterator")
}, function (e, t, n) {
    n(225)("observable")
}, function (e, t, n) {
    "use strict";
    var i = n(1104);
    n.n(i).a
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(241), o = n(180);
    for (var r in o) "default" !== r && function (e) {
        n.d(t, e, function () {
            return o[e]
        })
    }(r);
    var s = n(0), a = Object(s.a)(o.default, i.a, i.b, !1, null, null, null);
    a.options.__file = "src\\common\\generator-view\\conf-component\\conf-speed.vue", t.default = a.exports
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(238), o = n(182);
    for (var r in o) "default" !== r && function (e) {
        n.d(t, e, function () {
            return o[e]
        })
    }(r);
    var s = n(0), a = Object(s.a)(o.default, i.a, i.b, !1, null, null, null);
    a.options.__file = "src\\common\\generator-view\\conf-component\\conf-speed-time.vue", t.default = a.exports
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(231), o = n(186);
    for (var r in o) "default" !== r && function (e) {
        n.d(t, e, function () {
            return o[e]
        })
    }(r);
    var s = n(0), a = Object(s.a)(o.default, i.a, i.b, !1, null, null, null);
    a.options.__file = "src\\common\\generator-view\\conf-component\\conf-radio.vue", t.default = a.exports
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(236), o = n(188);
    for (var r in o) "default" !== r && function (e) {
        n.d(t, e, function () {
            return o[e]
        })
    }(r);
    var s = n(0), a = Object(s.a)(o.default, i.a, i.b, !1, null, null, null);
    a.options.__file = "src\\common\\generator-view\\conf-component\\conf-checkinput.vue", t.default = a.exports
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(237), o = n(190);
    for (var r in o) "default" !== r && function (e) {
        n.d(t, e, function () {
            return o[e]
        })
    }(r);
    var s = n(0), a = Object(s.a)(o.default, i.a, i.b, !1, null, null, null);
    a.options.__file = "src\\common\\generator-view\\conf-component\\conf-checkselect.vue", t.default = a.exports
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(228), o = n(192);
    for (var r in o) "default" !== r && function (e) {
        n.d(t, e, function () {
            return o[e]
        })
    }(r);
    var s = n(0), a = Object(s.a)(o.default, i.a, i.b, !1, null, null, null);
    a.options.__file = "src\\common\\generator-view\\conf-component\\conf-textarea.vue", t.default = a.exports
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(230), o = n(194);
    for (var r in o) "default" !== r && function (e) {
        n.d(t, e, function () {
            return o[e]
        })
    }(r);
    var s = n(0), a = Object(s.a)(o.default, i.a, i.b, !1, null, null, null);
    a.options.__file = "src\\common\\generator-view\\conf-component\\conf-speed-text.vue", t.default = a.exports
}, function (e, t, n) {
    "use strict";
    var i = n(1106);
    n.n(i).a
}, function (e, t, n) {
    "use strict";
    var i = n(1110);
    n.n(i).a
}, function (e, t, n) {
    "use strict";
    var i = n(1113);
    n.n(i).a
}, function (e, t, n) {
    "use strict";
    var i = n(1122);
    n.n(i).a
}, , , , , , , function (e, t, n) {
    "use strict";
    var i = n(1164);
    n.n(i).a
}, , , , , , , function (e, t, n) {
    "use strict";
    var i = function () {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return "confirm" === e.popType ? n("confirm", {
            attrs: {options: e.options, "box-id": e.boxId},
            on: {
                "update:options": function (t) {
                    e.options = t
                }
            },
            nativeOn: {
                dragstart: function (e) {
                    e.preventDefault()
                }
            }
        }) : "message-box" === e.popType ? n("message-box", {
            attrs: {
                options: e.options,
                formData: e.options.formData,
                "box-id": e.boxId
            }, on: {
                "update:formData": function (t) {
                    e.$set(e.options, "formData", t)
                }
            }, nativeOn: {
                dragstart: function (e) {
                    e.preventDefault()
                }
            }
        }) : n(e.popType, {
            tag: "component",
            attrs: {options: e.options, "box-id": e.boxId},
            nativeOn: {
                dragstart: function (e) {
                    e.preventDefault()
                }
            }
        })
    }, o = [];
    i._withStripped = !0, n.d(t, "a", function () {
        return i
    }), n.d(t, "b", function () {
        return o
    })
}, , , , , , , , , , , function (e, t, n) {
    "use strict";
    var i = function () {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("td-dialog", {
            attrs: {
                "custom-class": ["xlx-dialog--" + e.options.size, "xlx-dialog-about"],
                "footer-enabled": !1,
                visible: ""
            }, on: {close: e.handleCancel}
        }, [n("div", {staticClass: "xlx-dialog-about__content"}, [n("div", {staticClass: "xlx-dialog-about__picture"}), e._v(" "), n("div", {staticClass: "xlx-dialog-about__title"}, [n("h1", [e._v("迅雷"), n("span", [e._v("X")])]), e._v(" "), n("p", [e._v("版本号 "), n("span", [e._v(e._s(e.options.version))])])]), e._v(" "), n("div", {staticClass: "xlx-dialog-about__copyright"}, [n("p", [e._v("深圳市迅雷网络技术有限公司 © 2003-2018")]), e._v(" "), n("p", [n("span", [e._v("Xunlei Networking Technologies.LTD © 2013-2018")]), n("span", [e._v("www.xunlei.com")])])])])])
    }, o = [];
    i._withStripped = !0, n.d(t, "a", function () {
        return i
    }), n.d(t, "b", function () {
        return o
    })
}, , function (e, t, n) {
    "use strict";
    var i = function () {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("td-dialog", e._g(e._b({
            attrs: {visible: ""}, on: {
                close: function (t) {
                    e.handleCancel(e.action.Close)
                }
            }
        }, "td-dialog", e.$attrs, !1), e.$listeners), [n("div", {staticClass: "td-dialog-comfirm"}, [n("span", {staticClass: "td-dialog-comfirm__icon"}, [n("td-icon", {attrs: {type: e.icon[e.options.type]}})], 1), e._v(" "), n("div", {staticClass: "td-dialog-comfirm__content"}, [n("p", {staticClass: "td-dialog-comfirm__title"}, [e._v(e._s(e.options.title))]), e._v(" "), n("div", {staticClass: "td-dialog-comfirm__text"}, [e.options.checkboxEnabled ? n("td-checkbox", {
            attrs: {value: e.options.checkboxChecked},
            on: {input: e.handleInput}
        }, [e._v("\n          " + e._s(e.options.checkboxLabel) + "\n        ")]) : e.options.content ? n("span", {domProps: {innerHTML: e._s(e.options.content)}}) : e.options.fileName ? n("div", {
            staticClass: "xlx-dialog-comfirm__film-name",
            attrs: {title: e.options.fileName}
        }, [e._v("\n          " + e._s(e.options.fileName) + "\n        ")]) : e._e()], 1)])]), e._v(" "), n("template", {slot: "footer"}, ["okVisible" in e.options && !e.options.okVisible ? e._e() : n("td-button", {on: {click: e.handleOK}}, [e._v("\n      " + e._s(e.options.okText || "确定") + "\n    ")]), e._v(" "), "cancelVisible" in e.options && !e.options.cancelVisible ? e._e() : n("td-button", {
            attrs: {secondary: ""},
            on: {
                click: function (t) {
                    e.handleCancel(e.action.Cancel)
                }
            }
        }, [e._v("\n      " + e._s(e.options.cancelText || "取消") + "\n    ")])], 1)], 2)
    }, o = [];
    i._withStripped = !0, n.d(t, "a", function () {
        return i
    }), n.d(t, "b", function () {
        return o
    })
}, function (e, t, n) {
    "use strict";
    var i = function () {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("td-dialog", {
            attrs: {
                "custom-class": ["xlx-dialog--" + e.options.size, "xlx-dialog-setting"],
                visible: ""
            }, on: {
                close: function (t) {
                    e.handleCancel(e.action.Close)
                }
            }
        }, [n("h2", {
            attrs: {slot: "header"},
            slot: "header"
        }, [e._v(e._s(e.options.title))]), e._v(" "), e.options.schemas ? n("div", {staticClass: "xlx-dialog-setting__content"}, [n("div", {staticClass: "xlx-dialog-setting__speed"}, e._l(e.options.schemas, function (t) {
            return n("generator-view", {
                key: t.name,
                attrs: {item: t, value: e.formData[t.name], formData: e.formData},
                on: {input: e.handleInput}
            })
        }))]) : e.options.message ? [e._v(e._s(e.options.message))] : e._e(), e._v(" "), n("template", {slot: "footer"}, ["okVisible" in e.options && !e.options.okVisible ? e._e() : n("td-button", {
            attrs: {disabled: !e.comfirmButtonActive},
            on: {click: e.handleOK}
        }, [e._v("\n      " + e._s(e.options.okText || "确定") + "\n    ")]), e._v(" "), "cancelVisible" in e.options && !e.options.cancelVisible ? e._e() : n("td-button", {
            attrs: {secondary: ""},
            on: {
                click: function (t) {
                    e.handleCancel(e.action.Cancel)
                }
            }
        }, [e._v("\n      " + e._s(e.options.cancelText || "取消") + "\n    ")])], 1)], 2)
    }, o = [];
    i._withStripped = !0, n.d(t, "a", function () {
        return i
    }), n.d(t, "b", function () {
        return o
    })
}, , function (e, t, n) {
    "use strict";
    var i = function () {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("td-dialog", {
            attrs: {"footer-enabled": !1, visible: ""},
            on: {close: e.handleClose}
        }, [n("h2", {
            attrs: {slot: "header"},
            slot: "header"
        }, [e._v("计划任务，按时下载")]), e._v(" "), n("div", {staticClass: "xlx-dialog-plan"}, [n("div", {staticClass: "xlx-dialog-plan__time"}, [n("td-tooltip", {
            attrs: {
                content: e.sget(e.errorFields, "hours", 0, "message"),
                visible: Boolean(e.sget(e.errorFields, "hours"))
            }
        }, [n("td-input", {
            attrs: {placeholder: "0"}, model: {
                value: e.hours, callback: function (t) {
                    e.hours = t
                }, expression: "hours"
            }
        })], 1), e._v(" "), n("span", {staticClass: "xlx-dialog-setting__text"}, [e._v("时")]), e._v(" "), n("td-tooltip", {
            attrs: {
                content: e.sget(e.errorFields, "minutes", 0, "message"),
                visible: Boolean(e.sget(e.errorFields, "minutes"))
            }
        }, [n("td-input", {
            attrs: {placeholder: "0"}, model: {
                value: e.minutes, callback: function (t) {
                    e.minutes = t
                }, expression: "minutes"
            }
        })], 1), e._v(" "), n("span", {staticClass: "xlx-dialog-setting__text"}, [e._v("分")]), e._v("\n      后\n      "), n("select-native", {
            attrs: {options: e.operations},
            model: {
                value: e.operation, callback: function (t) {
                    e.operation = t
                }, expression: "operation"
            }
        }), e._v(" "), n("td-button", {
            attrs: {disabled: e.plans && e.plans.length >= 3},
            on: {click: e.addPlan}
        }, [n("i", {staticClass: "xlx-icon-new"})])], 1), e._v(" "), n("div", {staticClass: "xlx-dialog-plan__result"}, [n("ul", e._l(e.plans, function (t, i) {
            return n("li", {
                key: i,
                staticClass: "xlx-dialog-plan__result-item"
            }, [n("p", {staticClass: "xlx-dialog-plan__text"}, [n("span", {staticClass: "xlx-dialog-plan__text-time"}, [e._v(e._s(t.hours) + " 小时 " + e._s(t.minutes) + " 分 " + e._s(t.seconds) + " 秒")]), e._v(" "), n("span", [e._v("后")]), e._v(" "), n("span", [e._v(e._s(t.operation))])]), e._v(" "), n("td-button", {
                attrs: {secondary: ""},
                on: {
                    click: function (t) {
                        e.removePlan(i)
                    }
                }
            }, [n("td-icon", {attrs: {type: "close"}})], 1)], 1)
        }))])])])
    }, o = [];
    i._withStripped = !0, n.d(t, "a", function () {
        return i
    }), n.d(t, "b", function () {
        return o
    })
}, , function (e, t, n) {
    "use strict";
    var i = function () {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("td-dialog", {attrs: {visible: ""}, on: {close: e.handleClose}}, [n("h2", {
            attrs: {slot: "header"},
            slot: "header"
        }, [e._v("重命名")]), e._v(" "), n("div", {staticClass: "xlx-dialog-rename"}, [n("td-tooltip", {
            staticStyle: {display: "block"},
            attrs: {content: e.tipsText, visible: e.isShowTips, placement: "top"}
        }, [n("td-input", {
            ref: "input",
            attrs: {label: "", type: "textarea", placeholder: "请输入文件名"},
            model: {
                value: e.newName, callback: function (t) {
                    e.newName = t
                }, expression: "newName"
            }
        })], 1)], 1), e._v(" "), n("template", {slot: "footer"}, [n("td-button", {
            on: {click: e.handleOK},
            nativeOn: {
                click: function (e) {
                    e.stopPropagation()
                }
            }
        }, [e._v(e._s("确定"))]), e._v(" "), n("td-button", {
            attrs: {secondary: ""},
            on: {click: e.handleClose}
        }, [e._v(e._s("取消"))])], 1)], 2)
    }, o = [];
    i._withStripped = !0, n.d(t, "a", function () {
        return i
    }), n.d(t, "b", function () {
        return o
    })
}, , function (e, t, n) {
    "use strict";
    var i = function () {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("td-dialog", {
            attrs: {visible: ""},
            on: {close: e.handleClose}
        }, [n("div", {staticClass: "td-dialog-comfirm"}, [n("span", {staticClass: "td-dialog-comfirm__icon"}, [n("i", {staticClass: "td-icon-warning"})]), e._v(" "), n("div", {staticClass: "td-dialog-comfirm__content"}, [n("p", {staticClass: "td-dialog-comfirm__title"}, [e._v("下载列表已存在相同任务")])])]), e._v(" "), n("template", {slot: "footer"}, [n("div", {staticClass: "xlx-dialog-repeat__footer"}, [n("td-button", {
            attrs: {secondary: ""},
            on: {
                click: function (t) {
                    e.handleOK("ignore")
                }
            }
        }, [n("i", {staticClass: "xlx-icon-skip"}), e._v("跳过重复文件，继续下载")]), e._v(" "), n("td-button", {
            attrs: {secondary: ""},
            on: {
                click: function (t) {
                    e.handleOK("delete")
                }
            }
        }, [n("i", {staticClass: "xlx-icon-replace"}), e._v("替换重复文件，覆盖下载")]), e._v(" "), n("td-button", {
            attrs: {secondary: ""},
            on: {click: e.handleClose}
        }, [n("i", {staticClass: "xlx-icon-not-operate"}), e._v("不做任何操作")])], 1)])], 2)
    }, o = [];
    i._withStripped = !0, n.d(t, "a", function () {
        return i
    }), n.d(t, "b", function () {
        return o
    })
}, , function (e, t, n) {
    "use strict";
    var i = function () {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("td-dialog", {
            attrs: {visible: ""},
            on: {close: e.handleClose}
        }, [n("div", {staticClass: "td-dialog-comfirm"}, [n("span", {staticClass: "td-dialog-comfirm__icon"}, [n("i", {staticClass: "td-icon-warning"})]), e._v(" "), n("div", {staticClass: "td-dialog-comfirm__content"}, [n("p", {staticClass: "td-dialog-comfirm__title"}, [e._v("发现重复文件")])])]), e._v(" "), n("div", {staticClass: "xlx-dialog-repeat"}, [n("div", {staticClass: "xlx-dialog-repeat__list"}, [n("p", {domProps: {innerHTML: e._s(e.files)}})])]), e._v(" "), n("template", {slot: "footer"}, [n("div", {staticClass: "xlx-dialog-repeat__footer"}, [n("td-button", {
            attrs: {secondary: ""},
            on: {
                click: function (t) {
                    e.handleOK("ignore")
                }
            }
        }, [n("i", {staticClass: "xlx-icon-skip"}), e._v("跳过重复文件，继续下载")]), e._v(" "), n("td-button", {
            attrs: {secondary: ""},
            on: {
                click: function (t) {
                    e.handleOK("delete")
                }
            }
        }, [n("i", {staticClass: "xlx-icon-replace"}), e._v("替换重复文件，覆盖下载")]), e._v(" "), n("td-button", {
            attrs: {secondary: ""},
            on: {click: e.handleClose}
        }, [n("i", {staticClass: "xlx-icon-not-operate"}), e._v("不做任何操作")])], 1)])], 2)
    }, o = [];
    i._withStripped = !0, n.d(t, "a", function () {
        return i
    }), n.d(t, "b", function () {
        return o
    })
}, function (e, t, n) {
    "use strict";
    var i = function () {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("td-dialog", {
            attrs: {"custom-class": "xlx-skin", "footer-enabled": !1, visible: ""},
            on: {close: e.handleClose}
        }, [n("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: "skin" === e.activeKey && !e.isVip,
                expression: "activeKey === 'skin' && !isVip"
            }], staticClass: "xlx-skin-vip"
        }), e._v(" "), n("td-tabs", {
            staticClass: "xlx-skin__title",
            attrs: {tabs: e.tabs, "active-key": e.activeKey},
            on: {
                "update:activeKey": function (t) {
                    e.activeKey = t
                }
            },
            scopedSlots: e._u([{
                key: "default", fn: function (t) {
                    var i = t.tab;
                    return ["skin" === i.key ? n("td-tabs", {
                        attrs: {tabs: e.skinTabs, "active-key": e.skinActiveKey},
                        on: {
                            "update:activeKey": [function (t) {
                                e.skinActiveKey = t
                            }, e.changeTab]
                        },
                        scopedSlots: e._u([{
                            key: "default", fn: function (t) {
                                var i = t.tab;
                                return ["featured" === i.key ? n("pane-skin-featured", {
                                    ref: "paneSkinFeatured",
                                    attrs: {
                                        options: e.options,
                                        "skin-info": e.skinInfo,
                                        "last-skin-info": e.lastSkinInfo,
                                        wallpapers: e.wallpapers,
                                        "is-logined": e.isLogined,
                                        "is-vip": e.isVip
                                    },
                                    on: {"set-skin-info": e.setSkinInfo, "close-window": e.closeWindow}
                                }) : e._e(), e._v(" "), "custom" === i.key ? n("pane-skin-custom") : e._e(), e._v(" "), "speedcurve" === i.key ? n("pane-skin-speedcurve", {
                                    attrs: {
                                        "skin-info": e.speedCurveSkinInfo,
                                        "last-skin-info": e.lastSpeedCurveSkinInfo,
                                        "is-logined": e.isLogined,
                                        "is-vip": e.isVip,
                                        "is-platinum-vip": e.isPlatinumVip,
                                        "is-super-vip": e.isSuperVip,
                                        "vas-type": e.vasType
                                    }, on: {"set-skin-info": e.setSpeedCurveSkinInfo, "close-window": e.closeWindow}
                                }) : e._e()]
                            }
                        }])
                    }) : e._e(), e._v(" "), "avatar" === i.key ? n("div", {staticClass: "xlx-skin__expect"}, [n("span", {staticClass: "xlx-image-avatar"}), e._v(" "), n("p", [e._v("头像功能，敬请期待！")])]) : e._e()]
                }
            }])
        })], 1)
    }, o = [];
    i._withStripped = !0, n.d(t, "a", function () {
        return i
    }), n.d(t, "b", function () {
        return o
    })
}, function (e, t, n) {
    "use strict";
    var i = function () {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("td-dialog", {attrs: {visible: ""}, on: {close: e.handleClose}}, [n("h2", {
            attrs: {slot: "header"},
            slot: "header"
        }, [e._v("设置私人空间密码")]), e._v(" "), n("div", {staticClass: "td-dialog__body"}, [n("div", {staticClass: "td-dialog-secret__setting"}, [n("ul", [n("li", [n("label", {staticClass: "td-input"}, [n("span", {staticClass: "td-input__label"}, [e._v("输入密码：")]), e._v(" "), n("input", {
            directives: [{
                name: "model",
                rawName: "v-model",
                value: e.password,
                expression: "password"
            }],
            staticClass: "td-input__inner",
            attrs: {type: "password", maxlength: "50", placeholder: "请输入密码"},
            domProps: {value: e.password},
            on: {
                input: function (t) {
                    t.target.composing || (e.password = t.target.value)
                }
            }
        })])]), e._v(" "), n("li", [n("label", {staticClass: "td-input"}, [n("span", {staticClass: "td-input__label"}, [e._v("确认密码：")]), e._v(" "), n("td-tooltip", {
            staticStyle: {
                display: "flex",
                flex: "1"
            }, attrs: {content: e.tipsText, visible: e.isShowTips, placement: "top"}
        }, [n("input", {
            directives: [{
                name: "model",
                rawName: "v-model",
                value: e.secondPassword,
                expression: "secondPassword"
            }],
            staticClass: "td-input__inner",
            attrs: {type: "password", maxlength: "50", placeholder: "再次输入密码"},
            domProps: {value: e.secondPassword},
            on: {
                input: function (t) {
                    t.target.composing || (e.secondPassword = t.target.value)
                }
            }
        })])], 1)])])])]), e._v(" "), n("template", {slot: "footer"}, [n("td-button", {
            on: {
                click: function (t) {
                    return t.stopPropagation(), e.handleOK(t)
                }
            }
        }, [e._v("确定")]), e._v(" "), n("td-button", {
            attrs: {secondary: ""},
            on: {click: e.handleClose}
        }, [e._v("取消")])], 1)], 2)
    }, o = [];
    i._withStripped = !0, n.d(t, "a", function () {
        return i
    }), n.d(t, "b", function () {
        return o
    })
}, function (e, t, n) {
    "use strict";
    var i = function () {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("div", {staticClass: "td-context-menu xlx-context-menu--browser"}, [n("h3", [e._v("已打开标签页"), n("span", [e._v(e._s(e.unpinnedLength))]), e._v("个")]), e._v(" "), n("ul", {
            staticClass: "td-context-menu__main",
            staticStyle: {width: "145px", height: "336px"}
        }, e._l(e.tabsCopy, function (t, i) {
            return t.pinned ? e._e() : n("li", {
                key: t.key,
                ref: "item" + i,
                refInFor: !0,
                staticClass: "td-context-menu__item",
                attrs: {"data-index": i},
                on: {
                    click: function (t) {
                        e.handleUpdateCurrent(i)
                    }
                }
            }, [n("div", {
                staticClass: "td-context-menu__content",
                class: {"is-active": i === e.currentCopy}
            }, [n("i", {staticClass: "td-icon"}, [e.isShowDefaultIcon(i) ? n("i", {staticClass: "xlx-icon-net"}) : n("img", {attrs: {src: e.handleIconUrl(i)}})]), e._v(" "), n("span", {staticClass: "td-context-menu__text"}, [e._v(e._s(t.title))]), e._v(" "), n("a", {
                staticClass: "td-icon-close",
                attrs: {href: "javascript: void 0;"},
                on: {
                    click: function (t) {
                        t.stopPropagation(), e.handleRemove(i)
                    }
                }
            })])])
        }))])
    }, o = [];
    i._withStripped = !0, n.d(t, "a", function () {
        return i
    }), n.d(t, "b", function () {
        return o
    })
}, function (e, t, n) {
    "use strict";
    var i = function () {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("td-dialog", {attrs: {visible: ""}, on: {close: e.handleClose}}, [n("h2", {
            attrs: {slot: "header"},
            slot: "header"
        }, [e._v("私人空间密码验证")]), e._v(" "), n("div", {staticClass: "td-dialog__body"}, [n("div", {staticClass: "td-dialog-secret__setting"}, [n("ul", [n("li", [n("label", {staticClass: "td-input"}, [n("td-tooltip", {
            staticStyle: {
                display: "flex",
                flex: "1"
            }, attrs: {content: e.tipsText, visible: e.isShowTips, placement: "top"}
        }, [n("input", {
            directives: [{
                name: "model",
                rawName: "v-model",
                value: e.newPassword,
                expression: "newPassword"
            }],
            ref: "pwdInput",
            staticClass: "td-input__inner",
            attrs: {type: "password", maxlength: "50", placeholder: "请输入密码"},
            domProps: {value: e.newPassword},
            on: {
                input: function (t) {
                    t.target.composing || (e.newPassword = t.target.value)
                }
            }
        })])], 1)])])])]), e._v(" "), n("template", {slot: "footer"}, [n("td-button", {
            on: {click: e.handleOK},
            nativeOn: {
                click: function (e) {
                    e.stopPropagation()
                }
            }
        }, [e._v("确定")]), e._v(" "), n("td-button", {
            attrs: {secondary: ""},
            on: {click: e.handleClose}
        }, [e._v("取消")])], 1)], 2)
    }, o = [];
    i._withStripped = !0, n.d(t, "a", function () {
        return i
    }), n.d(t, "b", function () {
        return o
    })
}, function (e, t, n) {
    "use strict";
    var i = function () {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("div", [1 === e.options.showType ? n("td-dialog", {
            attrs: {
                "custom-class": "xlx-dialog--cipher xlx-dialog--small",
                visible: "",
                "footer-enabled": !1
            }, on: {close: e.onClickClose}
        }, [n("div", {staticClass: "td-dialog__body"}, [n("div", {staticClass: "td-dialog-comfirm"}, [n("span", {staticClass: "td-dialog-comfirm__icon"}, [n("i", {staticClass: "xlx-icon-bird"})]), e._v(" "), n("div", {staticClass: "td-dialog-comfirm__content"}, [n("p", {staticClass: "td-dialog-comfirm__title"}, [e._v("正在生成口令...")])])])])]) : 0 === e.options.showType ? n("td-dialog", {
            attrs: {
                "custom-class": "xlx-dialog--cipher xlx-dialog--small",
                visible: "",
                "footer-enabled": !1
            }, on: {close: e.onClickClose}
        }, [n("div", {staticClass: "td-dialog__body"}, [n("div", {staticClass: "td-dialog-comfirm"}, [n("span", {staticClass: "td-dialog-comfirm__icon"}, [n("i", {staticClass: "xlx-icon-bird"})]), e._v(" "), n("div", {staticClass: "td-dialog-comfirm__content"}, [n("p", {staticClass: "td-dialog-comfirm__title"}, [e._v("正在翻译口令...")])])])])]) : 3 === e.options.showType ? n("td-dialog", {
            attrs: {
                "custom-class": "xlx-dialog--cipher xlx-dialog--small",
                visible: "",
                "footer-enabled": !1
            }, on: {close: e.onClickClose}
        }, [n("div", {staticClass: "td-dialog__body"}, [n("div", {staticClass: "td-dialog-comfirm"}, [n("span", {staticClass: "td-dialog-comfirm__icon"}, [n("i", {staticClass: "td-icon-error"})]), e._v(" "), n("div", {staticClass: "td-dialog-comfirm__content"}, [n("p", {staticClass: "td-dialog-comfirm__title"}, [e._v("生成口令失败")])])])]), e._v(" "), n("div", {staticClass: "td-dialog__footer"}, [n("div", {staticClass: "td-dialog-footer"}, [n("button", {
            staticClass: "td-button td-button--secondary",
            on: {click: e.retryEncode}
        }, [e._v("重试")])])])]) : 2 === e.options.showType ? n("td-dialog", {
            attrs: {
                "custom-class": "xlx-dialog--cipher xlx-dialog--small",
                visible: "",
                "footer-enabled": !1
            }, on: {close: e.onClickClose}
        }, [n("div", {staticClass: "td-dialog__body"}, [n("div", {staticClass: "td-dialog-comfirm"}, [n("span", {staticClass: "td-dialog-comfirm__icon"}, [n("i", {staticClass: "td-icon-error"})]), e._v(" "), n("div", {staticClass: "td-dialog-comfirm__content"}, [n("p", {staticClass: "td-dialog-comfirm__title"}, [e._v("翻译口令失败")])])])]), e._v(" "), n("div", {staticClass: "td-dialog__footer"}, [n("div", {staticClass: "td-dialog-footer"}, [n("button", {
            staticClass: "td-button td-button--secondary",
            on: {click: e.retryDecode}
        }, [e._v("重试")])])])]) : 4 === e.options.showType ? n("td-dialog", {
            attrs: {
                "custom-class": "xlx-dialog--cipher",
                visible: "",
                "footer-enabled": !1
            }, on: {close: e.onClickClose}
        }, [n("h2", {
            attrs: {slot: "header"},
            slot: "header"
        }, [e._v("您的迅雷口令已生成")]), e._v(" "), n("div", {staticClass: "td-dialog__body"}, [n("div", {staticClass: "xlx-dialog-chipher"}, [e._v(e._s(e.tips))])]), e._v(" "), n("div", {staticClass: "td-dialog__footer"}, [n("div", {staticClass: "td-dialog-footer"}, [n("button", {
            staticClass: "td-button td-button",
            on: {click: e.onCopyBtnClick}
        }, [e._v("复制口令")])])])]) : 5 === e.options.showType ? n("td-dialog", {
            attrs: {
                "custom-class": "xlx-dialog--cipher",
                visible: "",
                "footer-enabled": !1
            }, on: {close: e.onClickClose}
        }, [n("h2", {
            attrs: {slot: "header"},
            slot: "header"
        }, [e._v("您的迅雷口令已生成")]), e._v(" "), n("div", {staticClass: "td-dialog__body"}, [n("div", {staticClass: "xlx-dialog-chipher"}, [e._v(e._s(e.tips))])]), e._v(" "), n("div", {staticClass: "td-dialog__footer"}, [n("div", {staticClass: "td-dialog-footer"}, [n("button", {staticClass: "td-button is-disabled"}, [n("i", {staticClass: "td-icon-success"}), e._v("已复制，快去粘贴\n          "), n("span", [e._v("（" + e._s(e.timeToClose) + "秒后关闭）")])])])])]) : e._e()], 1)
    }, o = [];
    i._withStripped = !0, n.d(t, "a", function () {
        return i
    }), n.d(t, "b", function () {
        return o
    })
}, function (e, t, n) {
    "use strict";
    var i = function () {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("td-dialog", {attrs: {visible: ""}, on: {close: e.handleClose}}, [n("h2", {
            attrs: {slot: "header"},
            slot: "header"
        }, [e._v("私人下载存储目录设置")]), e._v(" "), n("div", {staticClass: "td-dialog__body"}, [n("td-tooltip", {
            staticStyle: {display: "block"},
            attrs: {content: e.pathTips, visible: e.isShowPathTips, placement: "top"}
        }, [n("path-selector", {
            attrs: {enablePrivateSpace: !1, value: e.savePath, appendDirs: e.appendDirs},
            on: {input: e.handleChangePath}
        })], 1), e._v(" "), n("p", {staticClass: "td-dialog-comfirm__text"}, [n("label", {
            staticClass: "td-checkbox",
            class: {"is-checked": e.hideLocalDir}
        }, [n("input", {
            directives: [{
                name: "model",
                rawName: "v-model",
                value: e.hideLocalDir,
                expression: "hideLocalDir"
            }],
            staticClass: "td-checkbox__inner",
            attrs: {type: "checkbox"},
            domProps: {checked: Array.isArray(e.hideLocalDir) ? e._i(e.hideLocalDir, null) > -1 : e.hideLocalDir},
            on: {
                change: function (t) {
                    var n = e.hideLocalDir, i = t.target, o = !!i.checked;
                    if (Array.isArray(n)) {
                        var r = e._i(n, null);
                        i.checked ? r < 0 && (e.hideLocalDir = n.concat([null])) : r > -1 && (e.hideLocalDir = n.slice(0, r).concat(n.slice(r + 1)))
                    } else e.hideLocalDir = o
                }
            }
        }), e._v(" "), n("span", {staticClass: "td-checkbox__label"}, [e._v("在本地隐藏私人空间对应文件夹")])])])], 1), e._v(" "), n("template", {slot: "footer"}, [n("td-button", {
            on: {
                click: function (t) {
                    return t.stopPropagation(), e.handleOK(t)
                }
            }
        }, [e._v("确定")]), e._v(" "), n("td-button", {
            attrs: {secondary: ""},
            on: {click: e.handleClose}
        }, [e._v("取消")])], 1)], 2)
    }, o = [];
    i._withStripped = !0, n.d(t, "a", function () {
        return i
    }), n.d(t, "b", function () {
        return o
    })
}, function (e, t, n) {
    "use strict";
    var i = function () {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("td-dialog", {
            attrs: {"custom-class": ["xlx-dialog-setting"], "footer-enabled": !1, visible: ""},
            on: {close: e.handleCancel}
        }, [n("div", {staticClass: "td-dialog__body"}, [n("div", {staticClass: "td-dialog-comfirm"}, [n("span", {staticClass: "td-dialog-comfirm__icon"}, [n("i", {staticClass: "td-icon-warning"})]), e._v(" "), n("div", {staticClass: "td-dialog-comfirm__content"}, [n("p", {staticClass: "td-dialog-comfirm__title"}, [e._v("您还没有安装迅雷影音，需要现在\n          "), n("br"), e._v("下载吗？\n        ")])])])]), e._v(" "), n("div", {staticClass: "td-dialog__footer"}, [n("div", {staticClass: "td-dialog-footer"}, [n("a", {
            staticClass: "td-button",
            attrs: {href: "javascript:;"},
            on: {click: e.onClickDownloadXmpEx}
        }, [e._v("立即下载")]), e._v(" "), n("a", {
            staticClass: "td-button td-button--secondary",
            attrs: {href: "javascript:;"},
            on: {click: e.handleCancel}
        }, [e._v("取消")])])])])
    }, o = [];
    i._withStripped = !0, n.d(t, "a", function () {
        return i
    }), n.d(t, "b", function () {
        return o
    })
}, function (e, t, n) {
    "use strict";
    var i = function () {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("td-dialog", {attrs: {visible: ""}, on: {close: e.handleClose}}, [n("h2", {
            attrs: {slot: "header"},
            slot: "header"
        }, [e._v("私人下载任务管理")]), e._v(" "), n("div", {staticClass: "td-dialog__body"}, [n("div", {staticClass: "td-dialog-secret__setting"}, [n("ul", [n("li", [n("span", [e._v("同时下载的最大任务数")]), e._v(" "), n("div", {staticClass: "td-select xlx-select-size-1"}, [n("div", {staticClass: "td-select-group"}, [n("label", {staticClass: "td-input"}, [n("input", {
            directives: [{
                name: "model",
                rawName: "v-model.number",
                value: e.maxTaskCount,
                expression: "maxTaskCount",
                modifiers: {number: !0}
            }],
            staticClass: "td-input__inner",
            attrs: {type: "number", placeholder: "5"},
            domProps: {value: e.maxTaskCount},
            on: {
                input: function (t) {
                    t.target.composing || (e.maxTaskCount = e._n(t.target.value))
                }, blur: function (t) {
                    e.$forceUpdate()
                }
            }
        })]), e._v(" "), n("a", {
            staticClass: "td-select__drop",
            attrs: {href: "#"}
        }, [n("i", {staticClass: "td-icon-arrow-drop"})])])]), e._v(" "), n("span", {staticClass: "xlx-setting-content__tips"}, [e._v("（1-50）")])])]), e._v(" "), n("p", {staticClass: "td-dialog-comfirm__text"}, [n("label", {staticClass: "td-checkbox is-checked"}, [n("input", {
            staticClass: "td-checkbox__inner",
            attrs: {type: "checkbox", checked: ""}
        }), e._v(" "), n("span", {staticClass: "td-checkbox__label"}, [e._v("自动将低速任务移动至列尾")])])])])]), e._v(" "), n("template", {slot: "footer"}, [n("td-button", {
            on: {
                click: function (t) {
                    return t.stopPropagation(), e.handleOK(t)
                }
            }
        }, [e._v("确定")]), e._v(" "), n("td-button", {
            attrs: {secondary: ""},
            on: {click: e.handleClose}
        }, [e._v("取消")])], 1)], 2)
    }, o = [];
    i._withStripped = !0, n.d(t, "a", function () {
        return i
    }), n.d(t, "b", function () {
        return o
    })
}, function (e, t, n) {
    "use strict";
    var i = function () {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("td-dialog", {
            attrs: {"custom-class": ["xlx-dialog--fix"], "footer-enabled": !1, visible: ""},
            on: {close: e.handleCancel}
        }, [n("div", {staticClass: "td-dialog-comfirm"}, [n("span", {staticClass: "td-dialog-comfirm__icon"}, [n("i", {staticClass: "icon-fix"})]), e._v(" "), n("div", {staticClass: "td-dialog-comfirm__content"}, [0 === e.status ? n("p", {staticClass: "td-dialog-comfirm__title"}, [e._v("修复迅雷影音播放组件"), n("br"), n("span", [e._v(e._s(e.progress) + "%")])]) : 1 === e.status ? n("p", {staticClass: "td-dialog-comfirm__title"}, [e._v("修复成功")]) : n("p", {staticClass: "td-dialog-comfirm__title"}, [e._v("修复失败"), n("br"), n("a", {
            staticClass: "link-down",
            attrs: {href: "#"},
            on: {click: e.onClickDownloadXmp}
        }, [e._v("下载官方版迅雷影音")])])])])])
    }, o = [];
    i._withStripped = !0, n.d(t, "a", function () {
        return i
    }), n.d(t, "b", function () {
        return o
    })
}, function (e, t, n) {
    "use strict";
    var i = function () {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("td-dialog", {
            attrs: {visible: ""},
            on: {close: e.handleOK}
        }, [n("div", {staticClass: "td-dialog-comfirm"}, [n("span", {staticClass: "td-dialog-comfirm__icon"}, [n("i", {staticClass: "td-icon-warning"})]), e._v(" "), n("div", {staticClass: "td-dialog-comfirm__content"}, [n("p", {staticClass: "td-dialog-comfirm__title"}, [e._v("下载列表已存在相同任务")])])]), e._v(" "), n("div", {staticClass: "xlx-dialog-repeat"}, [n("p", [e._v(e._s(e.title))]), e._v(" "), n("div", {staticClass: "xlx-dialog-repeat__list is-nowrap"}, [n("p", {domProps: {innerHTML: e._s(e.urls)}})])]), e._v(" "), n("template", {slot: "footer"}, [n("td-button", {
            on: {click: e.handleOK},
            nativeOn: {
                click: function (e) {
                    e.stopPropagation()
                }
            }
        }, [e._v(e._s("我知道了"))])], 1)], 2)
    }, o = [];
    i._withStripped = !0, n.d(t, "a", function () {
        return i
    }), n.d(t, "b", function () {
        return o
    })
}, function (e, t, n) {
    "use strict";
    var i = function () {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("td-dialog", {
            attrs: {"custom-class": "xlx-dialog--browser", visible: "", "footer-enabled": !1},
            on: {close: e.handleCloseButton}
        }, [n("h2", {
            attrs: {slot: "header"},
            slot: "header"
        }, [e._v("如何在浏览器中使用迅雷下载？")]), e._v(" "), n("div", {staticClass: "td-tabs"}, [n("div", {staticClass: "td-tabs__title"}, [this.is360Exist ? n("div", {
            class: e.selectClass360,
            on: {
                click: function (t) {
                    e.handleItemClick("360")
                }
            }
        }, [n("i", {staticClass: "icon-browser icon-browser--360"}), e._v(" "), n("span", [e._v("360浏览器")])]) : e._e(), e._v(" "), this.isSouGouExist ? n("div", {
            class: e.selectClassSG,
            on: {
                click: function (t) {
                    e.handleItemClick("SouGou")
                }
            }
        }, [n("i", {staticClass: "icon-browser icon-browser--sg"}), e._v(" "), n("span", [e._v("搜狗浏览器")])]) : e._e(), e._v(" "), e.isQQExist ? n("div", {
            class: e.selectClassQQ,
            on: {
                click: function (t) {
                    e.handleItemClick("QQ")
                }
            }
        }, [n("i", {staticClass: "icon-browser icon-browser--qq"}), e._v(" "), n("span", [e._v("QQ浏览器")])]) : e._e()]), e._v(" "), n("div", {staticClass: "td-tabs__content"}, ["360" === this.szCurSelect ? n("div", {staticClass: "td-tabs__pane"}, [n("img", {
            attrs: {
                src: e.path360,
                alt: "设置360浏览器"
            }
        })]) : "SouGou" === this.szCurSelect ? n("div", {staticClass: "td-tabs__pane"}, [n("img", {
            attrs: {
                src: e.pathSougou,
                alt: "设置搜狗浏览器"
            }
        })]) : "QQ" === this.szCurSelect ? n("div", {staticClass: "td-tabs__pane"}, [n("img", {
            attrs: {
                src: e.pathQQ,
                alt: "设置QQ浏览器"
            }
        })]) : e._e()])]), e._v(" "), n("div", {staticClass: "browser-operation-wp"}, [n("a", {
            staticClass: "td-button td-button--large",
            attrs: {href: "#"},
            on: {click: e.handleConfigBrowser}
        }, [e._v("去选择迅雷下载")]), e._v(" "), n("p", {staticClass: "user-count"}, [n("em", [e._v("80%")]), e._v("人选择了迅雷下载")])])])
    }, o = [];
    i._withStripped = !0, n.d(t, "a", function () {
        return i
    }), n.d(t, "b", function () {
        return o
    })
}, function (e, t, n) {
    "use strict";
    var i = function () {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("td-dialog", {attrs: {visible: "", "before-close": e.handleClose}}, [n("h2", {
            attrs: {slot: "header"},
            slot: "header"
        }, [e._v("新建下载任务")]), e._v(" "), n("div", {staticClass: "xlx-dialog__filter"}, [n("p", [e._v("批量下载功能可以方便的创建多个包含共同特征的下载任务。例如网站A提供了10个这样的下载链接：")]), e._v(" "), n("p", [e._v("http://www.a.com/01.zip")]), e._v(" "), n("p", [e._v("http://www.a.com/02.zip")]), e._v("\n    ...\n    "), n("p", [e._v("http://www.a.com/10.zip")]), e._v(" "), n("br"), e._v(" "), n("p", [e._v("这10个地址只有数字部分不同，如果用(*)表示不同的部分，这些地址可以写成：")]), e._v(" "), n("p", [e._v("http://www.a.com/(*).zip")]), e._v(" "), n("br"), e._v(" "), n("p", [e._v("同时，通配符长度指的是这些地址不同部分数字的长度，例如：")]), e._v(" "), n("p", [e._v("从01.zip－10.zip，通配符长度是2；")]), e._v(" "), n("p", [e._v("从001.zip－010.zip，通配符长度是3。")]), e._v(" "), n("br"), e._v(" "), n("p", [e._v("注意，在填写从xxx到xxx的时候，虽然是从01到10或者是001到010，但是，当您设定了通配符长度以后，就只需要填写成从1到10。 填写完成后，在示意窗口会显示第一个和最后一个任务的具体链接地址，您可以检查是否正确，然后点确定完成操作。")])]), e._v(" "), n("div", {staticClass: "xlx-dialog__down-input"}, [n("td-tooltip", {
            staticStyle: {display: "block"},
            attrs: {content: e.tipsText, visible: e.isShowTips, placement: "top"}
        }, [n("td-input", {
            attrs: {label: "通过URL过滤：", placeholder: ""},
            model: {
                value: e.urlExample, callback: function (t) {
                    e.urlExample = t
                }, expression: "urlExample"
            }
        })], 1)], 1), e._v(" "), n("div", {staticClass: "xlx-dialog__down-filter"}, [n("ul", [n("li", [n("td-radio", {
            attrs: {label: "number"},
            model: {
                value: e.picked, callback: function (t) {
                    e.picked = t
                }, expression: "picked"
            }
        }), e._v(" "), n("span", {staticClass: "xlx-dialog-setting__text"}, [e._v("从")]), e._v(" "), n("limit-input", {
            attrs: {
                isNumber: !0,
                readonly: "number" !== e.picked,
                value: e.numFrom,
                min: 0,
                max: e.numMax
            }, on: {input: e.handleNumFromChange}
        }), e._v(" "), n("span", {staticClass: "xlx-dialog-setting__text"}, [e._v("到")]), e._v(" "), n("limit-input", {
            attrs: {
                isNumber: !0,
                readonly: "number" !== e.picked,
                value: e.numTo,
                min: 0,
                max: e.numMax
            }, on: {input: e.handleNumToChange}
        }), e._v(" "), n("span", {staticClass: "xlx-dialog-setting__text"}, [e._v("通配符长度：")]), e._v(" "), n("select-native", {
            attrs: {
                readonly: "number" !== e.picked,
                value: e.wildcardLength,
                options: e.selectOptions
            }, on: {input: e.handleWildcardChange}
        })], 1), e._v(" "), n("li", [n("td-radio", {
            attrs: {label: "alpha"},
            model: {
                value: e.picked, callback: function (t) {
                    e.picked = t
                }, expression: "picked"
            }
        }), e._v(" "), n("span", {staticClass: "xlx-dialog-setting__text"}, [e._v("从")]), e._v(" "), n("limit-input", {
            attrs: {
                isAlpha: !0,
                readonly: "alpha" !== e.picked,
                value: e.alphaFrom
            }, on: {input: e.handleAlphaFromChange}
        }), e._v(" "), n("span", {staticClass: "xlx-dialog-setting__text"}, [e._v("到")]), e._v(" "), n("limit-input", {
            attrs: {
                isAlpha: !0,
                readonly: "alpha" !== e.picked,
                value: e.alphaTo
            }, on: {input: e.handleAlphaToChange}
        }), e._v(" "), n("span", {staticClass: "xlx-dialog-setting__text"}, [e._v("区分大小写")])], 1)]), e._v(" "), n("label", {staticClass: "td-textarea"}, [n("textarea", {
            directives: [{
                name: "model",
                rawName: "v-model",
                value: e.context,
                expression: "context"
            }],
            staticClass: "td-textarea__inner",
            attrs: {readonly: "", placeholder: ""},
            domProps: {value: e.context},
            on: {
                input: function (t) {
                    t.target.composing || (e.context = t.target.value)
                }
            }
        })])]), e._v(" "), n("template", {slot: "footer"}, [n("td-button", {
            on: {click: e.handleOK},
            nativeOn: {
                click: function (e) {
                    e.stopPropagation()
                }
            }
        }, [e._v(e._s("确定"))])], 1)], 2)
    }, o = [];
    i._withStripped = !0, n.d(t, "a", function () {
        return i
    }), n.d(t, "b", function () {
        return o
    })
}, function (e, t, n) {
    "use strict";
    var i = function () {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("td-dialog", {
            attrs: {
                "custom-class": ["xlx-dialog--" + e.options.size, "xlx-dialog-subtitle"],
                "footer-enabled": !1,
                visible: ""
            }, on: {close: e.handleCancel}
        }, [n("h2", {
            attrs: {slot: "header"},
            slot: "header"
        }, [e._v("字幕搜索")]), e._v(" "), n("div", {staticClass: "xlx-dialog-subtitle"}, [n("div", {staticClass: "xlx-dialog-subtitle__form"}, [n("label", {staticClass: "td-input"}, [n("input", {
            directives: [{
                name: "model",
                rawName: "v-model",
                value: e.searchText,
                expression: "searchText"
            }],
            staticClass: "td-input__inner",
            attrs: {type: "text"},
            domProps: {value: e.searchText},
            on: {
                input: function (t) {
                    t.target.composing || (e.searchText = t.target.value)
                }
            }
        })]), e._v(" "), n("a", {
            staticClass: "td-button", attrs: {href: "javascript:;"}, on: {
                click: function (t) {
                    e.searchSubtitleByName("btn")
                }
            }
        }, [e._v("搜索")])]), e._v(" "), n("div", {staticClass: "xlx-dialog-subtitle__list"}, [n("div", {staticClass: "td-table td-table--hover"}, [n("div", {staticClass: "td-table__header-wrapper"}, [n("table", {staticClass: "td-table__header"}, [n("colgroup", [n("col"), e._v(" "), n("col", {staticClass: "xlx-dialog-subtitle__column-1"}), e._v(" "), n("col", {staticClass: "xlx-dialog-subtitle__column-2"}), e._v(" "), n("col", {staticClass: "xlx-dialog-subtitle__column-3"})]), e._v(" "), n("tr", [n("th", [n("p", {staticClass: "td-table__text"}, [e._v("字幕名")])]), e._v(" "), n("th", [n("p", {staticClass: "td-table__text"}, [e._v("语言")])]), e._v(" "), n("th", [n("p", {staticClass: "td-table__text"}, [e._v("评价")])]), e._v(" "), n("th", [n("p", {staticClass: "td-table__text"}, [e._v("操作")])])])])]), e._v(" "), n("div", {staticClass: "td-table__body-wrapper"}, [0 === e.searchStatus ? n("div", {staticClass: "xlx-dialog-subtitle__empty"}, [n("div", {staticClass: "xlx-dialog-subtitle__tips"}, [n("i", {staticClass: "td-icon-load"}), n("p", [e._v("搜索中")])])]) : 2 === e.searchStatus ? n("div", {staticClass: "xlx-dialog-subtitle__empty"}, [n("div", {staticClass: "xlx-dialog-subtitle__tips"}, [n("i", {staticClass: "td-icon-warning"}), n("p", [e._v("无相关字幕，建议换名搜索"), n("br"), e._v("或前往"), n("a", {
            attrs: {href: "#"},
            on: {
                click: function (t) {
                    e.searchShooter()
                }
            }
        }, [e._v("SubHD")]), e._v("查找")])])]) : 1 === e.searchStatus ? n("table", {staticClass: "td-table__body"}, [n("colgroup", [n("col"), e._v(" "), n("col", {staticClass: "xlx-dialog-subtitle__column-1"}), e._v(" "), n("col", {staticClass: "xlx-dialog-subtitle__column-2"}), e._v(" "), n("col", {staticClass: "xlx-dialog-subtitle__column-3"})]), e._v(" "), n("tbody", e._l(e.subtitleList, function (t, i) {
            return t.scid && t.scid.length > 1 ? n("tr", {key: i}, [n("td", [n("p", {staticClass: "td-table__text"}, [n("span", {
                staticClass: "xlx-dialog-subtitle__name",
                attrs: {title: e.getName(t)}
            }, [e._v(e._s(e.getName(t)))])])]), e._v(" "), n("td", [n("p", {staticClass: "td-table__text"}, [e._v(e._s(t.language))])]), e._v(" "), n("td", [n("td-rate", {
                attrs: {
                    value: e.getRate(t),
                    total: 5,
                    readonly: ""
                }
            })], 1), 0 === t.status ? n("td", [n("p", {staticClass: "td-table__text"}, [n("a", {
                staticClass: "xlx-dialog-subtitle__link",
                attrs: {href: "#"},
                on: {
                    click: function (n) {
                        e.onOperationTextClick(t, i)
                    }
                }
            }, [e._v("下载字幕")])])]) : 1 === t.status ? n("td", [n("p", {staticClass: "td-table__text"}, [n("a", {
                staticClass: "xlx-dialog-subtitle__link",
                attrs: {href: "#"},
                on: {
                    click: function (n) {
                        e.onOperationTextClick(t, i)
                    }
                }
            }, [e._v("播放视频")])])]) : 2 === t.status ? n("td", [n("p", {staticClass: "td-table__text"}, [n("i", {staticClass: "td-icon-load"})])]) : 3 === t.status ? n("td", [n("p", {staticClass: "td-table__text"}, [n("a", {
                staticClass: "xlx-dialog-subtitle__link.is-failed",
                attrs: {href: "#"},
                on: {
                    click: function (n) {
                        e.onOperationTextClick(t, i)
                    }
                }
            }, [e._v("下载失败")])])]) : e._e()]) : e._e()
        }))]) : e._e()])])]), e._v(" "), n("a", {
            staticClass: "xlx-dialog-subtitle__access",
            attrs: {href: "#"},
            on: {
                click: function (t) {
                    e.searchShooter()
                }
            }
        }, [e._v("访问SubHD搜索字幕")])])])
    }, o = [];
    i._withStripped = !0, n.d(t, "a", function () {
        return i
    }), n.d(t, "b", function () {
        return o
    })
}, function (e, t, n) {
    "use strict";
    var i = function () {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("div", {staticClass: "td-dialog"}, [n("div", {staticClass: "td-dialog__header"}, [n("h2", [e._v(e._s("add" === e.options.state ? "已添加书签" : "修改书签"))]), e._v(" "), n("a", {
            staticClass: "td-dialog__close",
            attrs: {href: "javascript:;", title: "关闭"},
            on: {click: e.handleClose}
        }, [n("i", {staticClass: "td-icon-close"})])]), e._v(" "), n("div", {staticClass: "td-dialog__body"}, [n("div", {staticClass: "xlx-dialog__bookmarks-add"}, [n("ul", [n("li", {staticClass: "xlx-dialog__bookmarks-add-item"}, [n("label", {staticClass: "td-input"}, [n("span", {staticClass: "td-input__label"}, [e._v("名称")]), e._v(" "), n("input", {
            directives: [{
                name: "model",
                rawName: "v-model",
                value: e.value,
                expression: "value"
            }],
            ref: "titleInput",
            staticClass: "td-input__inner",
            attrs: {type: "text"},
            domProps: {value: e.value},
            on: {
                input: function (t) {
                    t.target.composing || (e.value = t.target.value)
                }
            }
        })])]), e._v(" "), n("li", {staticClass: "xlx-dialog__bookmarks-add-item"}, [n("div", {staticClass: "td-select"}, [n("span", {staticClass: "td-input__label"}, [e._v("添加到")]), e._v(" "), n("div", {staticClass: "td-select-group is-choose"}, [n("span", {staticClass: "td-select-group__label"}, ["edit" === e.options.state ? n("i", {
            staticClass: "xlx-icon-fav",
            class: {"is-active": "edit" === e.options.state}
        }) : e._e(), e._v("书签栏")]), e._v(" "), e._m(0)])])])])])]), e._v(" "), n("div", {staticClass: "td-dialog__footer"}, [n("div", {staticClass: "td-dialog-footer"}, [n("a", {
            staticClass: "td-button",
            class: {"is-disabled": "" === e.value.trim()},
            attrs: {href: "javascript:;"},
            on: {click: e.handleOk}
        }, [e._v("确定")]), e._v(" "), n("a", {
            staticClass: "td-button td-button--secondary",
            attrs: {href: "javascript:;"},
            on: {click: e.handleDelete}
        }, [e._v("删除")])])])])
    }, o = [function () {
        var e = this.$createElement, t = this._self._c || e;
        return t("a", {
            staticClass: "td-select__drop",
            attrs: {href: "javascript:;"}
        }, [t("i", {staticClass: "td-icon-arrow-drop"})])
    }];
    i._withStripped = !0, n.d(t, "a", function () {
        return i
    }), n.d(t, "b", function () {
        return o
    })
}, function (e, t, n) {
    "use strict";
    var i = function () {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("td-dialog", {
            attrs: {
                "custom-class": ["xlx-dialog--" + e.options.size, "xlx-dialog-subtitle"],
                "footer-enabled": !1,
                visible: ""
            }, on: {close: e.handleCancel}
        }, [n("div", {staticClass: "xlx-dialog-subtitle"}, [n("div", {staticClass: "xlx-resource"}, [n("i", {
            staticClass: "xlx-icon-type",
            class: e.taskIcon
        }), e._v(" "), n("div", {staticClass: "xlx-resource__subtitle"}, [n("p", {
            staticClass: "xlx-resource__text",
            attrs: {title: e.taskName}
        }, [e._v(e._s(e.taskName))]), e._v(" "), n("a", {
            staticClass: "xlx-resource__text-tips",
            attrs: {href: "#"},
            on: {click: e.onVideoNumberTextClick}
        }, [e._v(e._s(e.videoNum) + "个视频文件")])])]), e._v(" "), n("div", {staticClass: "xlx-dialog-subtitle__list"}, [n("div", {staticClass: "td-table td-table--hover"}, [n("div", {staticClass: "td-table__header-wrapper"}, [n("table", {staticClass: "td-table__header"}, [n("colgroup", [n("col"), e._v(" "), n("col", {staticClass: "xlx-dialog-subtitle__column-3"})]), e._v(" "), n("tr", [n("th", [n("p", {staticClass: "td-table__text"}, [e._v("文件名")])]), e._v(" "), n("th", [n("p", {staticClass: "td-table__text"}, [e._v("操作")])])])])]), e._v(" "), n("div", {staticClass: "td-table__body-wrapper"}, [n("table", {staticClass: "td-table__body"}, [n("colgroup", [n("col"), e._v(" "), n("col", {staticClass: "xlx-dialog-subtitle__column-3"})]), e._v(" "), n("tbody", e._l(e.fileList, function (t, i) {
            return n("tr", {key: i}, [n("td", [n("p", {staticClass: "td-table__text"}, [n("span", {
                staticClass: "xlx-dialog-subtitle__name",
                attrs: {title: t.fileName}
            }, [e._v(e._s(t.fileName))])])]), e._v(" "), n("td", [n("p", {staticClass: "td-table__text"}, [n("a", {
                staticClass: "xlx-dialog-subtitle__link",
                attrs: {href: "#"},
                on: {
                    click: function (n) {
                        e.popSutitleMessageBox(t)
                    }
                }
            }, [e._v("搜索字幕")])])])])
        }))])])])]), e._v(" "), n("a", {
            staticClass: "xlx-dialog-subtitle__access",
            attrs: {href: "#"},
            on: {
                click: function (t) {
                    e.searchShooter()
                }
            }
        }, [e._v("访问SubHD搜索字幕")])])])
    }, o = [];
    i._withStripped = !0, n.d(t, "a", function () {
        return i
    }), n.d(t, "b", function () {
        return o
    })
}, , function (e, t, n) {
    "use strict";
    var i = function () {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("div", {
            ref: "list",
            staticClass: "td-context-menu xlx-context-menu--bookmarks is-left"
        }, [n("ul", {staticClass: "td-context-menu__main"}, e._l(e.options, function (t, i) {
            return n("li", {
                key: t.url,
                staticClass: "td-context-menu__item",
                attrs: {title: t.name + "\n" + t.url},
                on: {
                    click: function (n) {
                        return "button" in n || !e._k(n.keyCode, "left", 37, n.key, ["Left", "ArrowLeft"]) ? "button" in n && 0 !== n.button ? null : (n.stopPropagation(), void e.openNewTab(t.url, t.name)) : null
                    }, contextmenu: function (n) {
                        n.stopPropagation(), e.showBookMarkMenu(t.url, t.name, i)
                    }
                }
            }, [n("div", {staticClass: "td-context-menu__content"}, [n("i", {staticClass: "td-icon"}, [e.isShowDefaultIcon(t.url, t.iconUrl) ? n("i", {staticClass: "xlx-icon-net"}) : n("img", {attrs: {src: t.iconUrl}})]), e._v(" "), n("span", {staticClass: "td-context-menu__text"}, [e._v(e._s(t.name))])])])
        }))])
    }, o = [];
    i._withStripped = !0, n.d(t, "a", function () {
        return i
    }), n.d(t, "b", function () {
        return o
    })
}, , function (e, t, n) {
    "use strict";
    var i = function () {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("div", {staticClass: "xlx-skin-picture xlx-skin-picture--speed"}, [n("ul", [n("li", {
            staticClass: "xlx-skin-picture__item",
            class: {"is-chosen": e.skinInfo.type === e.skinType.Default},
            style: {backgroundImage: "url(" + e.defaultPreview + ")"},
            on: {
                click: function (t) {
                    e.changeSkin(e.defaultSkinInfo)
                }
            }
        }, [n("p", {staticClass: "xlx-skin-picture__name"}, [e._v("默认皮肤")])]), e._v(" "), e._l(e.skins, function (t) {
            return n("li", {
                key: t.id,
                staticClass: "xlx-skin-picture__item",
                class: {"is-chosen": e.skinInfo.id === t.id},
                style: {backgroundImage: "url('" + t.previewSavePath + "')"},
                on: {
                    click: function (n) {
                        e.changeSkin(t)
                    }
                }
            }, [n("div", {staticClass: "xlx-skin__tag-wrapper"}, [t.type === e.skinType.Vip ? n("span", {staticClass: "xlx-skin__tag xlx-skin__tag--vip"}, [e._v("VIP")]) : t.type === e.skinType.SuperVip ? n("span", {staticClass: "xlx-skin__tag xlx-skin__tag--svip"}, [e._v("SVIP")]) : e._e()]), e._v(" "), n("p", {staticClass: "xlx-skin-picture__name"}, [e._v(e._s(t.name))])])
        })], 2), e._v(" "), n("td-dialog", {
            attrs: {
                "custom-class": "xlx-dialog-skin-popup",
                visible: e.vipDialogVisible
            }, on: {
                "update:visible": function (t) {
                    e.vipDialogVisible = t
                }, close: function (t) {
                    e.$emit("set-skin-info", e.lastSkinInfo)
                }
            }
        }, [n("span", {staticClass: "xlx-image-vip"}), e._v(" "), n("p", {staticClass: "xlx-dialog-skin-popup__text-1"}, [e._v(e._s(e.vipDialogTitle))]), e._v(" "), n("p", {staticClass: "xlx-dialog-skin-popup__text-2"}, [e._v("更有会员加速、离线空间等30多项特权")]), e._v(" "), n("template", {slot: "footer"}, [n("td-button", {
            staticClass: "xlx-button--vip",
            on: {click: e.openVip}
        }, [e._v(e._s(e.vipDialogBtnText))]), e._v(" "), e.isLogined ? e._e() : n("a", {
            staticClass: "xlx-dialog-skin__link",
            attrs: {href: "javascript:;"},
            on: {click: e.showloginDlg}
        }, [e._v("会员登录")])], 1)], 2)], 1)
    }, o = [];
    i._withStripped = !0, n.d(t, "a", function () {
        return i
    }), n.d(t, "b", function () {
        return o
    })
}, , function (e, t, n) {
    "use strict";
    var i = function () {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("div", [n("div", {staticClass: "xlx-skin-color"}, [n("ul", e._l(e.colorList.slice(1), function (t, i) {
            return n("li", {
                key: t.id,
                staticClass: "xlx-skin-color__item",
                class: {"is-chosen": e.skinInfo.type === e.skinType.Color && e.skinInfo.colorID === t.id},
                style: {background: "rgb(" + t.colors.colorPreview + ")"},
                on: {
                    click: function (n) {
                        e.$emit("set-skin-info", {type: e.skinType.Color, colorID: t.id, opacity: t.defaultOpacity}, i)
                    }
                }
            })
        }))]), e._v(" "), n("div", {staticClass: "xlx-skin-picture"}, [n("ul", [n("li", {
            staticClass: "xlx-skin-picture__item",
            class: {"is-chosen": e.skinInfo.type === e.skinType.Default},
            style: {backgroundImage: "url(" + e.defaultPreview + ")"},
            on: {
                click: function (t) {
                    e.$emit("set-skin-info", {type: e.skinType.Default, colorID: 0}, 10)
                }
            }
        }, [n("p", {staticClass: "xlx-skin-picture__name"}, [e._v("默认皮肤")])]), e._v(" "), e._l(e.wallpapers, function (t, i) {
            return n("li", {
                key: t.id,
                staticClass: "xlx-skin-picture__item",
                class: {"is-chosen": e.skinInfo.type === e.skinType.Wallpaper && e.skinInfo.skinID === t.id},
                style: {backgroundImage: "url('" + t.preview + "')"},
                on: {
                    click: function (n) {
                        e.changeWallpaper(t, i + 11)
                    }
                }
            }, [n("p", {staticClass: "xlx-skin-picture__name"}, [e._v(e._s(t.name))]), e._v(" "), n("div", {staticClass: "xlx-skin__tag-wrapper"}, [t.is_vip ? n("span", {staticClass: "xlx-skin__tag xlx-skin__tag--vip"}, [e._v("会员")]) : e._e(), e._v(" "), t.is_dynamic ? n("span", {staticClass: "xlx-skin__tag"}, [e._v("动态")]) : e._e(), e._v(" "), t.is_4k ? n("span", {staticClass: "xlx-skin__tag"}, [e._v("4K")]) : e._e()])])
        })], 2)]), e._v(" "), n("td-dialog", {
            attrs: {
                "custom-class": "xlx-dialog-skin-popup",
                visible: e.updateDialogVisible
            }, on: {
                "update:visible": function (t) {
                    e.updateDialogVisible = t
                }
            }
        }, [n("span", {staticClass: "xlx-image-update"}), e._v(" "), n("p", {staticClass: "xlx-dialog-skin-popup__text-1"}, [e._v("升级新版客户端，体验动态皮肤")]), e._v(" "), n("p", {staticClass: "xlx-dialog-skin-popup__text-2"}, [e._v("还有私人空间、迅雷社区20多项新功能")]), e._v(" "), n("td-button", {
            attrs: {slot: "footer"},
            on: {click: e.updateApp},
            slot: "footer"
        }, [e._v("马上升级")])], 1), e._v(" "), n("td-dialog", {
            attrs: {
                "custom-class": "xlx-dialog-skin-popup",
                visible: e.vipDialogVisible
            }, on: {
                "update:visible": function (t) {
                    e.vipDialogVisible = t
                }, close: function (t) {
                    e.$emit("set-skin-info", e.lastSkinInfo)
                }
            }
        }, [n("span", {staticClass: "xlx-image-vip"}), e._v(" "), n("p", {staticClass: "xlx-dialog-skin-popup__text-1"}, [e._v("开通迅雷会员尊享品质皮肤")]), e._v(" "), n("p", {staticClass: "xlx-dialog-skin-popup__text-2"}, [e._v("更有会员加速、离线空间等30多项特权")]), e._v(" "), n("template", {slot: "footer"}, [n("td-button", {
            staticClass: "xlx-button--vip",
            on: {click: e.openVip}
        }, [e._v("开通会员")]), e._v(" "), e.isLogined ? e._e() : n("a", {
            staticClass: "xlx-dialog-skin__link",
            attrs: {href: "javascript:;"},
            on: {click: e.showloginDlg}
        }, [e._v("\n        会员登录\n      ")])], 1)], 2)], 1)
    }, o = [];
    i._withStripped = !0, n.d(t, "a", function () {
        return i
    }), n.d(t, "b", function () {
        return o
    })
}, , function (e, t, n) {
    "use strict";
    var i = function () {
        var e = this.$createElement;
        this._self._c;
        return this._m(0)
    }, o = [function () {
        var e = this.$createElement, t = this._self._c || e;
        return t("div", {staticClass: "xlx-skin-customize xlx-skin-customize--picture"}, [t("div", {staticClass: "xlx-skin__expect"}, [t("span", {staticClass: "xlx-image-skin"}), this._v(" "), t("p", [this._v("自定义皮肤功能，敬请期待！")])])])
    }];
    i._withStripped = !0, n.d(t, "a", function () {
        return i
    }), n.d(t, "b", function () {
        return o
    })
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, n) {
    n(40), e.exports = n(985)
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const i = n(25);
    i.CommonIPCRenderer.rendererCommunicator.initialize("messageBoxRendererContext"), i.CommonIPCRenderer.rendererCommunicator.connect();
    const o = n(41), r = n(32), s = n(986), a = n(51);
    n(42), n(89);
    const l = n(46);
    n(55);
    const c = n(1).default.getLogger("MessageBoxRenderer"), u = n(251);
    o.PerformanceMonitorStatNS.init("message-box-renderer"), r.default.use(a.default), r.default.use(u), new r.default({
        components: {App: s.default},
        render: e => e("app")
    }).$mount("#app"), l.ThunderToolsNS.enableDevTools().catch(e => {
        c.warning(e)
    }), l.ThunderToolsNS.enableDragOpenFile()
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(631), o = n(466);
    for (var r in o) "default" !== r && function (e) {
        n.d(t, e, function () {
            return o[e]
        })
    }(r);
    n(1014), n(1015), n(624), n(617), n(1016), n(1017), n(1018), n(1019), n(1020), n(1021), n(1022);
    var s = n(0), a = Object(s.a)(o.default, i.a, i.b, !1, null, null, null);
    a.options.__file = "src\\message-box-renderer\\app.vue", t.default = a.exports
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(642), o = n(468);
    for (var r in o) "default" !== r && function (e) {
        n.d(t, e, function () {
            return o[e]
        })
    }(r);
    var s = n(0), a = Object(s.a)(o.default, i.a, i.b, !1, null, null, null);
    a.options.__file = "src\\message-box-renderer\\views\\about.vue", t.default = a.exports
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(644), o = n(470);
    for (var r in o) "default" !== r && function (e) {
        n.d(t, e, function () {
            return o[e]
        })
    }(r);
    var s = n(0), a = Object(s.a)(o.default, i.a, i.b, !1, null, null, null);
    a.options.__file = "src\\message-box-renderer\\views\\confirm.vue", t.default = a.exports
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(645), o = n(472);
    for (var r in o) "default" !== r && function (e) {
        n.d(t, e, function () {
            return o[e]
        })
    }(r);
    var s = n(0), a = Object(s.a)(o.default, i.a, i.b, !1, null, null, null);
    a.options.__file = "src\\message-box-renderer\\views\\message-box.vue", t.default = a.exports
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(647), o = n(474);
    for (var r in o) "default" !== r && function (e) {
        n.d(t, e, function () {
            return o[e]
        })
    }(r);
    var s = n(0), a = Object(s.a)(o.default, i.a, i.b, !1, null, null, null);
    a.options.__file = "src\\message-box-renderer\\views\\plan-task.vue", t.default = a.exports
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(649), o = n(476);
    for (var r in o) "default" !== r && function (e) {
        n.d(t, e, function () {
            return o[e]
        })
    }(r);
    var s = n(0), a = Object(s.a)(o.default, i.a, i.b, !1, null, null, null);
    a.options.__file = "src\\message-box-renderer\\views\\task-rename.vue", t.default = a.exports
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(651), o = n(478);
    for (var r in o) "default" !== r && function (e) {
        n.d(t, e, function () {
            return o[e]
        })
    }(r);
    var s = n(0), a = Object(s.a)(o.default, i.a, i.b, !1, null, null, null);
    a.options.__file = "src\\message-box-renderer\\views\\bt-repeat-task.vue", t.default = a.exports
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(653), o = n(480);
    for (var r in o) "default" !== r && function (e) {
        n.d(t, e, function () {
            return o[e]
        })
    }(r);
    var s = n(0), a = Object(s.a)(o.default, i.a, i.b, !1, null, null, null);
    a.options.__file = "src\\message-box-renderer\\views\\bt-repeat-file.vue", t.default = a.exports
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(655), o = n(482);
    for (var r in o) "default" !== r && function (e) {
        n.d(t, e, function () {
            return o[e]
        })
    }(r);
    var s = n(0), a = Object(s.a)(o.default, i.a, i.b, !1, null, null, null);
    a.options.__file = "src\\message-box-renderer\\views\\private-space-set-password.vue", t.default = a.exports
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(657), o = n(484);
    for (var r in o) "default" !== r && function (e) {
        n.d(t, e, function () {
            return o[e]
        })
    }(r);
    var s = n(0), a = Object(s.a)(o.default, i.a, i.b, !1, null, null, null);
    a.options.__file = "src\\message-box-renderer\\views\\private-space-verify-password.vue", t.default = a.exports
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(659), o = n(486);
    for (var r in o) "default" !== r && function (e) {
        n.d(t, e, function () {
            return o[e]
        })
    }(r);
    var s = n(0), a = Object(s.a)(o.default, i.a, i.b, !1, null, null, null);
    a.options.__file = "src\\message-box-renderer\\views\\private-space-download-setting.vue", t.default = a.exports
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(661), o = n(488);
    for (var r in o) "default" !== r && function (e) {
        n.d(t, e, function () {
            return o[e]
        })
    }(r);
    var s = n(0), a = Object(s.a)(o.default, i.a, i.b, !1, null, null, null);
    a.options.__file = "src\\message-box-renderer\\views\\private-space-task-manager.vue", t.default = a.exports
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(663), o = n(490);
    for (var r in o) "default" !== r && function (e) {
        n.d(t, e, function () {
            return o[e]
        })
    }(r);
    var s = n(0), a = Object(s.a)(o.default, i.a, i.b, !1, null, null, null);
    a.options.__file = "src\\message-box-renderer\\views\\multi-repeat-task.vue", t.default = a.exports
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(665), o = n(492);
    for (var r in o) "default" !== r && function (e) {
        n.d(t, e, function () {
            return o[e]
        })
    }(r);
    var s = n(0), a = Object(s.a)(o.default, i.a, i.b, !1, null, null, null);
    a.options.__file = "src\\message-box-renderer\\views\\batch-new-task-ctrl.vue", t.default = a.exports
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(667), o = n(494);
    for (var r in o) "default" !== r && function (e) {
        n.d(t, e, function () {
            return o[e]
        })
    }(r);
    var s = n(0), a = Object(s.a)(o.default, i.a, i.b, !1, null, null, null);
    a.options.__file = "src\\message-box-renderer\\views\\book-marks.vue", t.default = a.exports
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(670), o = n(496);
    for (var r in o) "default" !== r && function (e) {
        n.d(t, e, function () {
            return o[e]
        })
    }(r);
    var s = n(0), a = Object(s.a)(o.default, i.a, i.b, !1, null, null, null);
    a.options.__file = "src\\message-box-renderer\\views\\book-list.vue", t.default = a.exports
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(668), o = n(498);
    for (var r in o) "default" !== r && function (e) {
        n.d(t, e, function () {
            return o[e]
        })
    }(r);
    var s = n(0), a = Object(s.a)(o.default, i.a, i.b, !1, null, null, null);
    a.options.__file = "src\\message-box-renderer\\views\\subtitle-task-filelist.vue", t.default = a.exports
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(666), o = n(500);
    for (var r in o) "default" !== r && function (e) {
        n.d(t, e, function () {
            return o[e]
        })
    }(r);
    var s = n(0), a = Object(s.a)(o.default, i.a, i.b, !1, null, null, null);
    a.options.__file = "src\\message-box-renderer\\views\\subtitle-search.vue", t.default = a.exports
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(664), o = n(502);
    for (var r in o) "default" !== r && function (e) {
        n.d(t, e, function () {
            return o[e]
        })
    }(r);
    var s = n(0), a = Object(s.a)(o.default, i.a, i.b, !1, null, null, null);
    a.options.__file = "src\\message-box-renderer\\views\\browser-config-guide.vue", t.default = a.exports
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(662), o = n(504);
    for (var r in o) "default" !== r && function (e) {
        n.d(t, e, function () {
            return o[e]
        })
    }(r);
    var s = n(0), a = Object(s.a)(o.default, i.a, i.b, !1, null, null, null);
    a.options.__file = "src\\message-box-renderer\\views\\xmp-fix.vue", t.default = a.exports
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(660), o = n(506);
    for (var r in o) "default" !== r && function (e) {
        n.d(t, e, function () {
            return o[e]
        })
    }(r);
    var s = n(0), a = Object(s.a)(o.default, i.a, i.b, !1, null, null, null);
    a.options.__file = "src\\message-box-renderer\\views\\xmp-fix-ex.vue", t.default = a.exports
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(658), o = n(508);
    for (var r in o) "default" !== r && function (e) {
        n.d(t, e, function () {
            return o[e]
        })
    }(r);
    n(1008);
    var s = n(0), a = Object(s.a)(o.default, i.a, i.b, !1, null, null, null);
    a.options.__file = "src\\message-box-renderer\\views\\bird-key-show.vue", t.default = a.exports
}, function (e, t, n) {
    "use strict";
    var i = n(1157);
    n.n(i).a
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(656), o = n(510);
    for (var r in o) "default" !== r && function (e) {
        n.d(t, e, function () {
            return o[e]
        })
    }(r);
    n(615), n(616);
    var s = n(0), a = Object(s.a)(o.default, i.a, i.b, !1, null, null, null);
    a.options.__file = "src\\message-box-renderer\\views\\total-tabs.vue", t.default = a.exports
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(654), o = n(512);
    for (var r in o) "default" !== r && function (e) {
        n.d(t, e, function () {
            return o[e]
        })
    }(r);
    var s = n(0), a = Object(s.a)(o.default, i.a, i.b, !1, null, null, null);
    a.options.__file = "src\\message-box-renderer\\views\\individuation\\index.vue", t.default = a.exports
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(676), o = n(514);
    for (var r in o) "default" !== r && function (e) {
        n.d(t, e, function () {
            return o[e]
        })
    }(r);
    var s = n(0), a = Object(s.a)(o.default, i.a, i.b, !1, null, null, null);
    a.options.__file = "src\\message-box-renderer\\views\\individuation\\pane-skin-custom.vue", t.default = a.exports
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(674), o = n(516);
    for (var r in o) "default" !== r && function (e) {
        n.d(t, e, function () {
            return o[e]
        })
    }(r);
    var s = n(0), a = Object(s.a)(o.default, i.a, i.b, !1, null, null, null);
    a.options.__file = "src\\message-box-renderer\\views\\individuation\\pane-skin-featured.vue", t.default = a.exports
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(672), o = n(518);
    for (var r in o) "default" !== r && function (e) {
        n.d(t, e, function () {
            return o[e]
        })
    }(r);
    var s = n(0), a = Object(s.a)(o.default, i.a, i.b, !1, null, null, null);
    a.options.__file = "src\\message-box-renderer\\views\\individuation\\pane-skin-speedcurve.vue", t.default = a.exports
}, function (e, t, n) {
    "use strict";
    var i = n(1159);
    n.n(i).a
}, function (e, t, n) {
    "use strict";
    var i = n(1162);
    n.n(i).a
}, function (e, t, n) {
    "use strict";
    var i = n(1166);
    n.n(i).a
}, function (e, t, n) {
    "use strict";
    var i = n(1168);
    n.n(i).a
}, function (e, t, n) {
    "use strict";
    var i = n(1171);
    n.n(i).a
}, function (e, t, n) {
    "use strict";
    var i = n(1173);
    n.n(i).a
}, function (e, t, n) {
    "use strict";
    var i = n(1176);
    n.n(i).a
}, function (e, t, n) {
    "use strict";
    var i = n(1179);
    n.n(i).a
}, function (e, t, n) {
    "use strict";
    var i = n(1183);
    n.n(i).a
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t) {
}, , function (e, t) {
}, , , , function (e, t) {
}, , , function (e, t) {
}, , , , , , , , , function (e, t) {
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t) {
}, , function (e, t) {
}, , , function (e, t) {
}, , function (e, t) {
}, , function (e, t) {
}, , function (e, t) {
}, , , function (e, t) {
}, , function (e, t) {
}, , , function (e, t) {
}, , , function (e, t) {
}, , , , function (e, t) {
}]);
//# sourceMappingURL=renderer.js.map
/*! ThunderX BY LUOCHENZHIMU */
/*! Last updated on 2018/12/18 */
/*! https://www.luochenzhimu.com */