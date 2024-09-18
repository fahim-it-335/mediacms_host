!function(){"use strict";var e,n={2772:function(e,n,t){(0,t(2541).X)()},4234:function(e,n,t){t.r(n),t.d(n,{CircleIconButton:function(){return r.M},FilterOptions:function(){return o.j},FiltersToggleButton:function(){return i._},MaterialIcon:function(){return a.O},NavigationContentApp:function(){return u.o},NavigationMenuList:function(){return l.S},Notifications:function(){return c.T},NumericInputWithUnit:function(){return s.O},PopupMain:function(){return d.W8},PopupTop:function(){return d.HF},SpinnerLoader:function(){return f.i},UserThumbnail:function(){return v.q}});var r=t(7714),o=t(7446),i=t(2915),a=t(2299),u=t(2917),l=t(5671),c=t(2436),s=t(5517),d=t(940),f=t(6309),v=t(6142)},6191:function(e,n,t){t.r(n),t.d(n,{PageHeader:function(){return r.m},PageMain:function(){return o.r},PageSidebar:function(){return i.$},PageSidebarContentOverlay:function(){return a.a}});var r=t(6006),o=t(9198),i=t(2947),a=t(1542)},8727:function(e,n,t){t.d(n,{Y7:function(){return s}}),t(2322),t(3296),t(6394),t(4669),t(717),t(5677),t(2129),t(4655),t(6453),t(9006);var r=t(5466),o=t(3074),i=t.n(o),a=t(137),u=t.n(a),l=t(8009),c=t.n(l);function s(e){var n=(0,r.useRef)(null),t=null,o={playerVolume:e.playerVolume,playerSoundMuted:e.playerSoundMuted,videoQuality:e.videoQuality,videoPlaybackSpeed:e.videoPlaybackSpeed,inTheaterMode:e.inTheaterMode};function i(){void 0!==e.onClickNextCallback&&e.onClickNextCallback()}function a(){void 0!==e.onClickPreviousCallback&&e.onClickPreviousCallback()}function l(n){o.playerVolume!==n.volume&&(o.playerVolume=n.volume),o.playerSoundMuted!==n.soundMuted&&(o.playerSoundMuted=n.soundMuted),o.videoQuality!==n.quality&&(o.videoQuality=n.quality),o.videoPlaybackSpeed!==n.playbackSpeed&&(o.videoPlaybackSpeed=n.playbackSpeed),o.inTheaterMode!==n.theaterMode&&(o.inTheaterMode=n.theaterMode),void 0!==e.onStateUpdateCallback&&e.onStateUpdateCallback(n)}function s(){if(null===t&&null===e.errorMessage&&(e.inEmbed||(window.removeEventListener("focus",s),document.removeEventListener("visibilitychange",s)),n.current)){e.inEmbed||n.current.focus();var r,d,f,v={on:!1};if(void 0!==e.subtitlesInfo&&null!==e.subtitlesInfo&&e.subtitlesInfo.length){v.languages=[];for(var p=0;p<e.subtitlesInfo.length;)void 0!==e.subtitlesInfo[p].src&&void 0!==e.subtitlesInfo[p].srclang&&void 0!==e.subtitlesInfo[p].label&&v.languages.push({src:(r=e.subtitlesInfo[p].src,d=e.siteUrl,f=void 0,f=u()(r,{}),""!==f.origin&&"null"!==f.origin&&f.origin||(f=u()(d+"/"+r.replace(/^\//g,""),{})),f.toString()),srclang:e.subtitlesInfo[p].srclang,label:e.subtitlesInfo[p].label}),p+=1;v.languages.length&&(v.on=!0)}t=new(c())(n.current,{enabledTouchControls:!0,sources:e.sources,poster:e.poster,autoplay:e.enableAutoplay,bigPlayButton:!0,controlBar:{theaterMode:e.hasTheaterMode,pictureInPicture:!1,next:!!e.hasNextLink,previous:!!e.hasPreviousLink},subtitles:v,cornerLayers:e.cornerLayers,videoPreviewThumb:e.previewSprite},{volume:o.playerVolume,soundMuted:o.playerSoundMuted,theaterMode:o.inTheaterMode,theSelectedQuality:void 0,theSelectedPlaybackSpeed:o.videoPlaybackSpeed||1},e.info,[.25,.5,.75,1,1.25,1.5,1.75,2],l,i,a),void 0!==e.onPlayerInitCallback&&e.onPlayerInitCallback(t,n.current)}}return o.playerVolume=null===o.playerVolume?1:Math.max(Math.min(Number(o.playerVolume),1),0),o.playerSoundMuted=null!==o.playerSoundMuted&&o.playerSoundMuted,o.videoQuality=null!==o.videoQuality?o.videoQuality:"Auto",o.videoPlaybackSpeed=null!==o.videoPlaybackSpeed&&o.videoPlaybackSpeed,o.inTheaterMode=null!==o.inTheaterMode&&o.inTheaterMode,(0,r.useEffect)((function(){return e.inEmbed||document.hasFocus()||"visible"===document.visibilityState?s():(window.addEventListener("focus",s),document.addEventListener("visibilitychange",s)),t&&t.player.one("loadedmetadata",(function(){var e=new URLSearchParams(window.location.search),n=Number(e.get("t")),r=isNaN(n)?0:n;t.player.currentTime(r)})),function(){null!==t&&(videojs(n.current).dispose(),t=null),void 0!==e.onUnmountCallback&&e.onUnmountCallback()}}),[]),null===e.errorMessage?r.createElement("video",{ref:n,className:"video-js vjs-mediacms native-dimensions"}):r.createElement("div",{className:"error-container"},r.createElement("div",{className:"error-container-inner"},r.createElement("span",{className:"icon-wrap"},r.createElement("i",{className:"material-icons"},"error_outline")),r.createElement("span",{className:"msg-wrap"},e.errorMessage)))}i().string.isRequired,s.propTypes={playerVolume:i().string,playerSoundMuted:i().bool,videoQuality:i().string,videoPlaybackSpeed:i().number,inTheaterMode:i().bool,siteId:i().string.isRequired,siteUrl:i().string.isRequired,errorMessage:i().string,cornerLayers:i().object,subtitlesInfo:i().array.isRequired,inEmbed:i().bool.isRequired,sources:i().array.isRequired,info:i().object.isRequired,enableAutoplay:i().bool.isRequired,hasTheaterMode:i().bool.isRequired,hasNextLink:i().bool.isRequired,hasPreviousLink:i().bool.isRequired,poster:i().string,previewSprite:i().object,onClickPreviousCallback:i().func,onClickNextCallback:i().func,onPlayerInitCallback:i().func,onStateUpdateCallback:i().func,onUnmountCallback:i().func},s.defaultProps={errorMessage:null,cornerLayers:{}}},473:function(e,n,t){t.d(n,{BrowserEvents:function(){return r.Jj},addClassname:function(){return r.Ec},cancelAnimationFrame:function(){return r.Wx},hasClassname:function(){return r.mO},removeClassname:function(){return r.dt},requestAnimationFrame:function(){return r.U7},supportsSvgAsImg:function(){return r.Je},logErrorAndReturnError:function(){return o.O},logWarningAndReturnError:function(){return o.a},exportStore:function(){return i.Z},formatInnerLink:function(){return a.U},formatViewsNumber:function(){return u.Z},csrfToken:function(){return l.o},imageExtension:function(){return c.s},greaterCommonDivision:function(){return s.$A},isPositiveIntegerOrZero:function(){return s.ZU},PositiveInteger:function(){return d.n},PositiveIntegerOrZero:function(){return d.g},publishedOnDate:function(){return f.Z},quickSort:function(){return v.U},deleteRequest:function(){return p.Jl},getRequest:function(){return p.A_},postRequest:function(){return p.j0},putRequest:function(){return p.GH}});var r=t(1454),o=t(9039),i=t(9264),a=t(1397),u=t(705),l=t(1450),c=t(2161),s=(t(4646),t(408)),d=t(5477),f=t(2276),v=t(3803),p=t(447)},541:function(e,n,t){var r=this&&this.__createBinding||(Object.create?function(e,n,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return n[t]}})}:function(e,n,t,r){void 0===r&&(r=t),e[r]=n[t]}),o=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(n,e,t);return o(n,e),n};Object.defineProperty(n,"__esModule",{value:!0}),n.VideoViewerActions=n.SearchFieldActions=n.ProfilePageActions=n.PlaylistViewActions=n.PlaylistPageActions=n.PageActions=n.MediaPageActions=void 0,n.MediaPageActions=i(t(979)),n.PageActions=i(t(6613)),n.PlaylistPageActions=i(t(5880)),n.PlaylistViewActions=i(t(9660)),n.ProfilePageActions=i(t(2472)),n.SearchFieldActions=i(t(2600)),n.VideoViewerActions=i(t(5464))},8578:function(e,n,t){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.VideoViewerStore=n.SearchFieldStore=n.ProfilePageStore=n.PlaylistViewStore=n.PlaylistPageStore=n.PageStore=n.MediaPageStore=void 0;var o=r(t(337));n.MediaPageStore=o.default;var i=r(t(7959));n.PageStore=i.default;var a=r(t(1566));n.PlaylistPageStore=a.default;var u=r(t(1439));n.PlaylistViewStore=u.default;var l=r(t(8024));n.ProfilePageStore=l.default;var c=r(t(7359));n.SearchFieldStore=c.default;var s=r(t(5641));n.VideoViewerStore=s.default}},t={};function r(e){var o=t[e];if(void 0!==o)return o.exports;var i=t[e]={exports:{}};return n[e].call(i.exports,i,i.exports,r),i.exports}r.m=n,e=[],r.O=function(n,t,o,i){if(!t){var a=1/0;for(c=0;c<e.length;c++){t=e[c][0],o=e[c][1],i=e[c][2];for(var u=!0,l=0;l<t.length;l++)(!1&i||a>=i)&&Object.keys(r.O).every((function(e){return r.O[e](t[l])}))?t.splice(l--,1):(u=!1,i<a&&(a=i));u&&(e.splice(c--,1),n=o())}return n}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[t,o,i]},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,{a:n}),n},r.d=function(e,n){for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.j=841,function(){var e={841:0};r.O.j=function(n){return 0===e[n]};var n=function(n,t){var o,i,a=t[0],u=t[1],l=t[2],c=0;for(o in u)r.o(u,o)&&(r.m[o]=u[o]);if(l)var s=l(r);for(n&&n(t);c<a.length;c++)i=a[c],r.o(e,i)&&e[i]&&e[i][0](),e[a[c]]=0;return r.O(s)},t=self.webpackChunkmediacms_frontend=self.webpackChunkmediacms_frontend||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var o=r.O(void 0,[431],(function(){return r(2772)}));o=r.O(o)}();