!function(e){var n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,function(n){return e[n]}.bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=71)}({14:function(e,n,t){"use strict";var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();Object.defineProperty(n,"__esModule",{value:!0});var i=t(9),o=t(15),a=t(16),s=t(17);!function(e){e.mainProcessContext="main-process",e.mainRendererContext="main-renderer",e.mainPageWebviewRendererContext="main-page-webview-renderer",e.newTaskRendererContext="new-task-renderer",e.preNewTaskRendererContext="pre-new-task-renderer",e.loginRendererContext="login-renderer";var n=function(){function e(){!function(n,t){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this),this.isConnected=!1,this.isOnIPCEvent=!1,this.rendererInfos=[],this.listeners=new Map,e.intervalIPCModuleMsgs=[s.CommonIPCMessage.msgIPCRendererConnect,s.CommonIPCMessage.msgIPCRendererDisconnect]}return r(e,[{key:"onMessage",value:function(e,n){do{if(!o.isString(e)||0===e.length){a.error("msgName is null");break}if(o.isNullOrUndefined(n)){a.error("listener is null");break}this.listeners.has(e)?this.listeners.get(e).push(n):this.listeners.set(e,[n])}while(0)}},{key:"getCommunicatorInfo",value:function(){return this.currInfo}},{key:"getAllRenderer",value:function(){return this.rendererInfos}},{key:"getCommunicatorInfoById",value:function(e){var n=!0,t=!1,r=void 0;try{for(var i,o=this.rendererInfos[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){var a=i.value;if(a.id===e)return a}}catch(e){t=!0,r=e}finally{try{!n&&o.return&&o.return()}finally{if(t)throw r}}return null}},{key:"getCommunicatorInfoByContext",value:function(e){var n=!0,t=!1,r=void 0;try{for(var i,o=this.rendererInfos[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){var a=i.value;if(a.context===e)return a}}catch(e){t=!0,r=e}finally{try{!n&&o.return&&o.return()}finally{if(t)throw r}}return null}},{key:"startListenIPCMessage",value:function(e){this.isOnIPCEvent||(this.isOnIPCEvent=!0,e&&this.ListenSendToMainMsg(),this.ListenSendToRendererMsg(e))}},{key:"ListenSendToMainMsg",value:function(){var e=this;i.ipcMain.on(s.CommonIPCMessage.msgIPCSendToMain,function(n,t){var r=void 0;do{if(o.isNullOrUndefined(t)){a.error("msgInfo is empty");break}if(!e.isConnected){a.warning("hasnot been connected yet");break}var i=t.msg.name;if(e.isIPCModuleIntervalMsg(i)){a.information("IPC module interval msg : "+i);var s=e.handleIPCModuleIntervalMsg(n.sender,t);if(r=s[1],!s[0])break;a.information("need to dispatch msg:"+i)}o.isNullOrUndefined(r)?r=e.NotifyListener(t):e.NotifyListener(t)}while(0);o.isNullOrUndefined(r)||(n.returnValue=r)})}},{key:"ListenSendToRendererMsg",value:function(e){var n=this;(e?i.ipcMain:i.ipcRenderer).on(s.CommonIPCMessage.msgIPCSendToRenderer,function(t,r){var i=void 0;do{if(o.isNullOrUndefined(r)){a.error("msgInfo is empty");break}if(!n.isConnected){a.warning("hasnot been connected yet");break}var s=r.msg.name;if(n.isIPCModuleIntervalMsg(s)){a.information("IPC module interval msg : "+s);var l=n.handleIPCModuleIntervalMsg(t.sender,r);if(i=l[1],!l[0])break;a.information("need to dispatch msg:"+s)}e?(a.information("is main, handle forward msg"),n.handleForwardRendererToRendererMsg(r)):(a.information("is renderer, handle business msg"),o.isNullOrUndefined(i)?i=n.NotifyListener(r):n.NotifyListener(r))}while(0);o.isNullOrUndefined(i)||(t.returnValue=i)})}},{key:"isIPCModuleIntervalMsg",value:function(n){var t=!0,r=!1,i=void 0;try{for(var o,a=e.intervalIPCModuleMsgs[Symbol.iterator]();!(t=(o=a.next()).done);t=!0)if(n===o.value)return!0}catch(n){r=!0,i=n}finally{try{!t&&a.return&&a.return()}finally{if(r)throw i}}return!1}},{key:"handleIPCModuleIntervalMsg",value:function(e,n){var t=[!1,void 0];do{var r=n.msg.name;if(r===s.CommonIPCMessage.msgIPCRendererConnect){t=[!0,this.handleRendererConnectMsg(e,n)];break}if(r===s.CommonIPCMessage.msgIPCRendererDisconnect){t=[!0,this.handleRendererDisconnectMsg(e,n)];break}}while(0);return t}},{key:"handleRendererConnectMsg",value:function(e,n){a.verbose(e),a.verbose(n)}},{key:"handleRendererDisconnectMsg",value:function(e,n){a.verbose(e),a.verbose(n)}},{key:"handleForwardRendererToRendererMsg",value:function(e){this.sendForwardRendererToRendererMsg(e)}},{key:"sendForwardRendererToRendererMsg",value:function(e){a.verbose(e)}},{key:"NotifyListener",value:function(e){var n=void 0,t=e.msg.name;if(this.listeners.has(t)){var r=this.listeners.get(t),i=!0,o=!0,a=!1,s=void 0;try{for(var l,u=r[Symbol.iterator]();!(o=(l=u.next()).done);o=!0){var d=l.value;i?(i=!1,n=d(e)):d(e)}}catch(e){a=!0,s=e}finally{try{!o&&u.return&&u.return()}finally{if(a)throw s}}}return n}}]),e}();e.Communicator=n}(n.CommonIPCBase||(n.CommonIPCBase={}))},15:function(e,n){e.exports=require("util")},16:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.information=function(){},n.error=function(){},n.warning=function(){},n.critical=function(){},n.verbose=function(){},"development"===process.env.LOGGER_ENV&&(n.information=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t]},n.error=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t]},n.warning=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t]},n.critical=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t]},n.verbose=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t]})},17:function(e,n,t){"use strict";var r;Object.defineProperty(n,"__esModule",{value:!0}),(r=n.CommonIPCMessage||(n.CommonIPCMessage={})).msgIPCCommunicatorForward="ipc_communicator_forward",r.msgIPCSendToMain="ipc_send_to_main",r.msgIPCSendToRenderer="ipc_send_to_renderer",r.msgIPCRendererConnect="ipc_renderer_connect",r.msgIPCRendererDisconnect="ipc_renderer_disconnect",r.msgNCCallNativeFunction="nc_call_native_function",r.msgNCCheckNativeFunction="nc_check_native_function",r.msgNCCallJsFunctionById="nc_call_js_function_by_id",r.msgNCCallJsFunctionByName="nc_call_js_function_by_name",r.msgNCNativeFireEvent="nc_native_fire_event",r.msgNCNativeCallReady="nc_native_call_ready"},45:function(e,n,t){"use strict";var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();Object.defineProperty(n,"__esModule",{value:!0});var i,o,a=t(9),s=t(15),l=t(16),u=t(17),d=t(14);i=n.CommonIPCRenderer||(n.CommonIPCRenderer={}),o=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,d.CommonIPCBase.Communicator),r(n,[{key:"initialize",value:function(e){this.currInfo={id:void 0,context:e,isMainCommunicator:!1}}},{key:"connect",value:function(){this.isConnected?l.warning("has been connected"):(this.sendConnectMsgToMain(),this.isConnected=!0,this.startListenIPCMessage(!1))}},{key:"disconnect",value:function(){this.isConnected?(this.isConnected=!1,this.sendDisconnectMsgToMain()):l.warning("hasnot been connected yet")}},{key:"sendMessageToMain",value:function(e){this.sendIPCMsgToMain(e)}},{key:"sendMessageToMainSync",value:function(e){return this.sendIPCMsgToMain(e,!0)}},{key:"sendMessageToRenderer",value:function(e,n){this.sendIPCMsgToRenderer(e,n)}},{key:"handleRendererConnectMsg",value:function(e,n){do{if(s.isNullOrUndefined(n)){l.error("msgInfo is null");break}var t=n.msg.args[0];if(s.isNullOrUndefined(t)){l.error("connectRendererInfo is null");break}l.information("Renderer: new renderer will connect, id = "+t.id+", context = "+t.context),this.rendererInfos.push(t)}while(0)}},{key:"handleRendererDisconnectMsg",value:function(e,n){do{if(s.isNullOrUndefined(n)){l.error("msgInfo is null");break}var t=n.msg.args[0];if(s.isNullOrUndefined(t)){l.error("disconnectRendererInfo is null");break}l.information("renderer will disconnect, id = "+t.id+", context = "+t.context);for(var r=0;r<this.rendererInfos.length;++r)if(this.rendererInfos[r]===t){this.rendererInfos.splice(r,1);break}}while(0)}},{key:"sendConnectMsgToMain",value:function(){var e=this.sendMessageToMainSync({name:u.CommonIPCMessage.msgIPCRendererConnect,args:[]});this.currInfo.id=e[0],this.rendererInfos=e[1]}},{key:"sendDisconnectMsgToMain",value:function(){this.sendMessageToMain({name:u.CommonIPCMessage.msgIPCRendererDisconnect,args:[]})}},{key:"sendIPCMsgToMain",value:function(e){var n=1<arguments.length&&void 0!==arguments[1]&&arguments[1],t=void 0;do{if(s.isNullOrUndefined(e)){l.error("msg is null");break}t=(n?a.ipcRenderer.sendSync:a.ipcRenderer.send)(u.CommonIPCMessage.msgIPCSendToMain,{msg:e,senderInfo:this.currInfo})}while(0);return t}},{key:"sendIPCMsgToRenderer",value:function(e,n){do{if(s.isNullOrUndefined(e)){l.error("rendererId is null");break}if(s.isNullOrUndefined(n)){l.error("msg is null");break}var t=[e].concat(n.args);n.args=t,a.ipcRenderer.send(u.CommonIPCMessage.msgIPCSendToRenderer,{msg:n,senderInfo:this.currInfo})}while(0)}}]),n}(),i.RendererCommunicator=o,i.rendererCommunicator=new o},71:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(14),i=t(45);i.CommonIPCRenderer.rendererCommunicator.initialize(r.CommonIPCBase.loginRendererContext),i.CommonIPCRenderer.rendererCommunicator.connect();var o=t(72),a=t(9);window.addEventListener("keyup",function(e){var n;"F12"===e.key&&null!==(n=a.remote.getCurrentWindow())&&(n.webContents.isDevToolsOpened()?n.webContents.closeDevTools():n.webContents.openDevTools({mode:"undocked"}))},!0);var s=window.xlQuickLogin||{},l=window.store||{},u=!1,d=!1,c=new(function(){function e(){this.loginTYPE=0,this.userinfo={},this.allUserInfo={},this.isGetFail=!1,this.isRuning=!1,this.getInitConf(),this.bindXdas()}return e.prototype.getInitConf=function(){var e=this;e.getXdasDatas("memory","initconfig",function(n){null===n&&(n={appid:"0",package:"com.xunlei.thunderx",appkey:"4af30ad6c6b0c02c4d8df3ded2cb79b8",platform:"pc-xdas",thunderVersion:"10.1.3.185",activityEnable:!1,activityCssPath:""}),e.setDeviceid(),window.Xreport.push({type:"conf",global:{category:"xdas_bugs",thunderVersion:n.thunderVersion||"unknown"}});var t=n.activityEnable&&n.activityCssPath||"./css/style.css";s.init({loginID:n.appid+"",appName:n.package,registerID:n.appid+"",UI_THEME:"xlx",SET_ROOT_DOMAIN:!1,UI_STYLE:t,THIRD_LOGIN_DEFAULT:["weixin","qq"],THIRD_LOGIN_GROUP:["qq","weixin","sina","alipay"],LOGIN_SUCCESS_URL:"",REGISTER_SUCCESS_URL:""}),e.setLoginBox(),e.reportPerformance(),l.set("thunderVersion",n.thunderVersion)})},e.prototype.setLoginBox=function(){this.loginIframe(),this.checkIsOut()},e.prototype.reportPerformance=function(){setTimeout(function(){var e=window.performance.timing,n=e.loadEventEnd-e.navigationStart,t=e.fetchStart-e.navigationStart,r=e.domainLookupEnd-e.domainLookupStart,i=e.connectEnd-e.connectStart,o=e.responseStart-e.requestStart,a=e.responseEnd-e.responseStart,s=e.domComplete-e.domLoading;window.Xreport.push({type:"now",data:{action:"performance",category:"xdas_bugs",bussiness:"0",loadTime:n,beforeFetchTime:t,dominLookupTime:r,connectTime:i,firstResponseTime:o,responseTime:a,domTime:s}})},3e3)},e.prototype.checkIsOut=function(){var e=this;e.getXdasDatas("memory","userinfo",function(n){if(n&&"sessionOut"==n.type){var t=n;t.type="",e.saveToXdas("memory","userinfo",JSON.stringify(t)),setTimeout(function(){e.showError("您的帐号已在其他设备登录，请注意帐号安全")},1e3)}n&&"thirdFail"==n.loginType&&(e.saveToXdas("memory","userinfo",JSON.stringify({})),setTimeout(function(){e.showError(n.errmsg)},1e3))})},e.prototype.setDeviceid=function(){this.getXdasDatas("memory","deviceid",function(e){e&&l.set("deviceid",e.id)})},e.prototype.loginFetch=function(e){this.loginTYPE=e;var n=l.get("usernick")||"",t=l.get("userid")||"";o.NativeCallModule.nativeCall.CallNativeFunction("NativeFireEvent","onLoginBefore",n,t,function(e,n){})},e.prototype.loginFail=function(e,n){o.NativeCallModule.nativeCall.CallNativeFunction("NativeFireEvent","onLoginFailed",n+"",e+"",function(e,n){})},e.prototype.getUserIMg=function(e,n){o.NativeCallModule.nativeCall.CallNativeFunction("GetUserHeaderByUserID",e,function(e,t){n&&n(t)})},e.prototype.bindXdas=function(){var e=this;window.addEventListener("unload",function(n){u||e.loginFail("close","close")}),s.loginExtFun=this.loginExtFun.bind(this),s.getXdasDatas=this.getXdasDatas.bind(this),s.saveToXdas=this.saveToXdas.bind(this),s.cloLogin=this.cloLogin.bind(this),s.openNewTab=this.openNewTab.bind(this),s.loginFail=this.loginFail.bind(this),s.loginFetch=this.loginFetch.bind(this),s.onLoginWndClose=this.onLoginWndClose.bind(this),s.getUserImg=this.getUserIMg.bind(this),s.updateLoginWnd=this.updateLoginWnd.bind(this),s.getSkinInfo=this.getSkinInfo.bind(this),o.NativeCallModule.nativeCall.AttachNativeEvent("OnChangeSkin",function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var r=e.getSkinTheme(n[0]);e.changeTheme(r)})},e.prototype.updateLoginWnd=function(e){d||(d=!0,o.NativeCallModule.nativeCall.CallNativeFunction("UpdateLoginWnd",e))},e.prototype.showError=function(e){void 0===e&&(e=""),s.showError(e)},e.prototype.sendLoginSuc=function(){this.isGetFail=!1,l.clearAll(),this.onLoginWndClose("suc")},e.prototype.onLoginWndClose=function(e){o.NativeCallModule.nativeCall.CallNativeFunction("NativeFireEvent","onLoginWndClose",e),window.close()},e.prototype.loginIframe=function(){document.getElementById("xl_login")&&s.getLoginIframe("xl_login")},e.prototype.loginExtFun=function(e){var n=e;u=!0,n.loginType="0",n.uName=l.get("uName")||"",n.xl_autologin="1"==l.get("xl_autologin"),this.saveToXdas("memory","userinfo",JSON.stringify(n)),this.sendLoginSuc()},e.prototype.openNewTab=function(e){o.NativeCallModule.nativeCall.CallNativeFunction("openNewTab",e)},e.prototype.cloLogin=function(){this.onLoginWndClose("close")},e.prototype.saveToXdas=function(e,n,t){o.NativeCallModule.nativeCall.CallNativeFunction("SaveLoginData",e,n,t,function(e,n){})},e.prototype.getXdasDatas=function(e,n,t){o.NativeCallModule.nativeCall.CallNativeFunction("LoadLoginData",e,n,function(e,n){var r=n?JSON.parse(n):null;t&&t(r)})},e.prototype.getSkinInfo=function(e){var n=this;o.NativeCallModule.nativeCall.CallNativeFunction("GetSkinInfo",function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var i=n.getSkinTheme(t[1]);e(i)})},e.prototype.getSkinTheme=function(e){var n="";if(0!=e.colorID){for(var t=e.colors,r=function(e,t){var r="--"+e.replace(/([A-Z0-9])/g,"-$1").toLowerCase();Array.isArray(t)?t.forEach(function(e,t){n+=r+"-"+(t+1)+": "+e+";"}):n+=r+": "+t+";"},i=0,o=Object.entries(t);i<o.length;i++){var a=o[i];r(a[0],a[1])}e.opacity&&(n+="--default-opacity: "+e.opacity+";"),e.image&&(n+="--background-main: url("+e.image+");")}return n},e.prototype.changeTheme=function(e){var n=window.frames.loginIframe.document.body;n.style=e,n.classList=""==e?"":"is-theme"},e}());window.xdas=c},72:function(e,n,t){"use strict";var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=t(15),a=t(16),s=t(17),l=t(14),u=t(45);!function(e){var n,t;(t=n=e.NativeCallErrorCode||(e.NativeCallErrorCode={}))[t.Unknown=-1]="Unknown",t[t.Success=0]="Success",t[t.FunctionNotExist=1]="FunctionNotExist",t[t.ParamaterError=2]="ParamaterError",t[t.CallFailed=3]="CallFailed";var d=function(){function e(n,t,r){i(this,e),this.maxId=n,this.minId=t,this.invalidId=r}return r(e,[{key:"generateId",value:function(){return this.minId===this.maxId?this.invalidId:this.minId++}},{key:"isInvalidId",value:function(e){return e===this.invalidId}}]),e}();e.IdGenerator=d,e.idGenerator=new d(1e7,1,0);var c=function(){function t(){i(this,t),this.jsCallbacks=new Map,this.eventJsCallbakcs=new Map,this.jsRegisterFunctions=new Map,this.targetCommunitorInfo=u.CommonIPCRenderer.rendererCommunicator.getCommunicatorInfoByContext(l.CommonIPCBase.mainRendererContext),this.bindMsgListeners(),this.notifyNativeCallReady()}return r(t,[{key:"CallNativeFunction",value:function(n){for(var t=arguments.length,r=Array(1<t?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];do{if(o.isNullOrUndefined(n)||0===n.length){a.error("funcName is empty");break}a.information("funcName = ",n),this.printArgs(r);for(var l=0,d=0;d<r.length;++d)if(o.isFunction(r[d])){var c=e.idGenerator.generateId(),f=r[d];this.jsCallbacks.set(c,f),d===r.length-1?(l=c,r.pop()):r[d]=c}u.CommonIPCRenderer.rendererCommunicator.sendMessageToRenderer(this.targetCommunitorInfo.id,{name:s.CommonIPCMessage.msgNCCallNativeFunction,args:[n,l].concat(r)})}while(0)}},{key:"AttachNativeEvent",value:function(n,t){var r=void 0;do{if(o.isNullOrUndefined(n)||0===n.length){a.error("eventName is empty");break}if(o.isNullOrUndefined(t)){a.error("callback is empty");break}var i=e.idGenerator.generateId();if(e.idGenerator.isInvalidId(i)){a.error("id error");break}if(this.eventJsCallbakcs.has(n))this.eventJsCallbakcs.get(n).set(i,t);else{var s=new Map;s.set(i,t),this.eventJsCallbakcs.set(n,s)}r=i}while(0);return r}},{key:"DetachNativeEvent",value:function(e,n){do{if(o.isNullOrUndefined(e)||0===e.length){a.error("eventName is empty");break}if(o.isNullOrUndefined(n)){a.error("callback is empty");break}if(!this.eventJsCallbakcs.has(e)){a.error("event: "+e+" doesnot have listener");break}if(!this.eventJsCallbakcs.get(e).has(n)){a.error("event: "+e+" doesnot have the listener of id="+n);break}this.eventJsCallbakcs.get(e).delete(n)}while(0)}},{key:"CheckNativeFunction",value:function(n,t){do{if(o.isNullOrUndefined(n)||0===n.length){a.error("funcName is empty");break}if(o.isNullOrUndefined(t)){a.error("callback is empty");break}a.information("funcName = ",n);var r=e.idGenerator.generateId();this.jsCallbacks.set(r,t),u.CommonIPCRenderer.rendererCommunicator.sendMessageToRenderer(this.targetCommunitorInfo.id,{name:s.CommonIPCMessage.msgNCCheckNativeFunction,args:[n,r]})}while(0)}},{key:"RegisterJSFunction",value:function(e,t){var r=n.ParamaterError;do{if(o.isNullOrUndefined(e)||0===e.length){a.error("funcName is empty");break}if(o.isNullOrUndefined(t)){a.error("jsFunc is empty");break}this.jsRegisterFunctions.set(e,t),r=n.Success}while(0);return r}},{key:"bindMsgListeners",value:function(){var e=this;u.CommonIPCRenderer.rendererCommunicator.onMessage(s.CommonIPCMessage.msgNCCallJsFunctionById,function(n){e.handleCallJsFunctionById(n.msg.args)}),u.CommonIPCRenderer.rendererCommunicator.onMessage(s.CommonIPCMessage.msgNCCallJsFunctionByName,function(n){e.handleCallJsFunctionByName(n.msg.args)}),u.CommonIPCRenderer.rendererCommunicator.onMessage(s.CommonIPCMessage.msgNCNativeFireEvent,function(n){e.handleNativeFireEvent(n.msg.args)})}},{key:"handleCallJsFunctionById",value:function(n){do{var t=n[0];if(!o.isNumber(t)){a.error("id error id = "+t);break}if(e.idGenerator.isInvalidId(t)){a.error("id = "+t+" invalid");break}if(!this.jsCallbacks.has(t)){a.error("jsCallbacks["+t+"] is null");break}n.splice(0,1),this.jsCallbacks.get(t).apply(null,n)}while(0)}},{key:"handleCallJsFunctionByName",value:function(e){do{var n=e[0];if(!o.isString(n)){a.error("funcName error funcName = "+n);break}if(!this.jsRegisterFunctions.has(n)){a.error("jsRegisterFunctions["+n+"] is null");break}e.splice(0,1),this.jsRegisterFunctions.get(n).apply(null,e)}while(0)}},{key:"handleNativeFireEvent",value:function(e){do{var n=e[0];if(!o.isString(n)){a.warning("eventName error eventName = "+n);break}if(!this.eventJsCallbakcs.has(n)){a.warning("eventJsCallbakcs["+n+"] is null");break}e.shift(),this.eventJsCallbakcs.get(n).forEach(function(n,t,r){a.information("value = "+n+", key = "+t+", map = "+r),o.isNullOrUndefined(n)||n.apply(null,e)})}while(0)}},{key:"notifyNativeCallReady",value:function(){u.CommonIPCRenderer.rendererCommunicator.sendMessageToRenderer(this.targetCommunitorInfo.id,{name:s.CommonIPCMessage.msgNCNativeCallReady,args:[u.CommonIPCRenderer.rendererCommunicator.getCommunicatorInfo()]})}},{key:"printArgs",value:function(e){for(var n in e)a.information("index "+n+" = ",e[n])}}]),t}();e.NativeCallImpl=c,e.nativeCall=new c}(n.NativeCallModule||(n.NativeCallModule={}))},9:function(e,n){e.exports=require("electron")}});