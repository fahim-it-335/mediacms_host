!function(){"use strict";var e,t={7487:function(e,t,n){var r=n(2541),i=n(4538);(0,r.X)("page-latest",i.LatestMediaPage)},4234:function(e,t,n){n.r(t),n.d(t,{CircleIconButton:function(){return r.M},FilterOptions:function(){return i.j},FiltersToggleButton:function(){return o._},MaterialIcon:function(){return a.O},NavigationContentApp:function(){return u.o},NavigationMenuList:function(){return l.S},Notifications:function(){return s.T},NumericInputWithUnit:function(){return c.O},PopupMain:function(){return d.W8},PopupTop:function(){return d.HF},SpinnerLoader:function(){return f.i},UserThumbnail:function(){return v.q}});var r=n(7714),i=n(7446),o=n(2915),a=n(2299),u=n(2917),l=n(5671),s=n(2436),c=n(5517),d=n(940),f=n(6309),v=n(6142)},6191:function(e,t,n){n.r(t),n.d(t,{PageHeader:function(){return r.m},PageMain:function(){return i.r},PageSidebar:function(){return o.$},PageSidebarContentOverlay:function(){return a.a}});var r=n(6006),i=n(9198),o=n(2947),a=n(1542)},8727:function(e,t,n){n.d(t,{Y7:function(){return c}}),n(2322),n(3296),n(6394),n(4669),n(717),n(5677),n(2129),n(4655),n(6453),n(9006);var r=n(5466),i=n(3074),o=n.n(i),a=n(137),u=n.n(a),l=n(8009),s=n.n(l);function c(e){var t=(0,r.useRef)(null),n=null,i={playerVolume:e.playerVolume,playerSoundMuted:e.playerSoundMuted,videoQuality:e.videoQuality,videoPlaybackSpeed:e.videoPlaybackSpeed,inTheaterMode:e.inTheaterMode};function o(){void 0!==e.onClickNextCallback&&e.onClickNextCallback()}function a(){void 0!==e.onClickPreviousCallback&&e.onClickPreviousCallback()}function l(t){i.playerVolume!==t.volume&&(i.playerVolume=t.volume),i.playerSoundMuted!==t.soundMuted&&(i.playerSoundMuted=t.soundMuted),i.videoQuality!==t.quality&&(i.videoQuality=t.quality),i.videoPlaybackSpeed!==t.playbackSpeed&&(i.videoPlaybackSpeed=t.playbackSpeed),i.inTheaterMode!==t.theaterMode&&(i.inTheaterMode=t.theaterMode),void 0!==e.onStateUpdateCallback&&e.onStateUpdateCallback(t)}function c(){if(null===n&&null===e.errorMessage&&(e.inEmbed||(window.removeEventListener("focus",c),document.removeEventListener("visibilitychange",c)),t.current)){e.inEmbed||t.current.focus();var r,d,f,v={on:!1};if(void 0!==e.subtitlesInfo&&null!==e.subtitlesInfo&&e.subtitlesInfo.length){v.languages=[];for(var p=0;p<e.subtitlesInfo.length;)void 0!==e.subtitlesInfo[p].src&&void 0!==e.subtitlesInfo[p].srclang&&void 0!==e.subtitlesInfo[p].label&&v.languages.push({src:(r=e.subtitlesInfo[p].src,d=e.siteUrl,f=void 0,f=u()(r,{}),""!==f.origin&&"null"!==f.origin&&f.origin||(f=u()(d+"/"+r.replace(/^\//g,""),{})),f.toString()),srclang:e.subtitlesInfo[p].srclang,label:e.subtitlesInfo[p].label}),p+=1;v.languages.length&&(v.on=!0)}n=new(s())(t.current,{enabledTouchControls:!0,sources:e.sources,poster:e.poster,autoplay:e.enableAutoplay,bigPlayButton:!0,controlBar:{theaterMode:e.hasTheaterMode,pictureInPicture:!1,next:!!e.hasNextLink,previous:!!e.hasPreviousLink},subtitles:v,cornerLayers:e.cornerLayers,videoPreviewThumb:e.previewSprite},{volume:i.playerVolume,soundMuted:i.playerSoundMuted,theaterMode:i.inTheaterMode,theSelectedQuality:void 0,theSelectedPlaybackSpeed:i.videoPlaybackSpeed||1},e.info,[.25,.5,.75,1,1.25,1.5,1.75,2],l,o,a),void 0!==e.onPlayerInitCallback&&e.onPlayerInitCallback(n,t.current)}}return i.playerVolume=null===i.playerVolume?1:Math.max(Math.min(Number(i.playerVolume),1),0),i.playerSoundMuted=null!==i.playerSoundMuted&&i.playerSoundMuted,i.videoQuality=null!==i.videoQuality?i.videoQuality:"Auto",i.videoPlaybackSpeed=null!==i.videoPlaybackSpeed&&i.videoPlaybackSpeed,i.inTheaterMode=null!==i.inTheaterMode&&i.inTheaterMode,(0,r.useEffect)((function(){return e.inEmbed||document.hasFocus()||"visible"===document.visibilityState?c():(window.addEventListener("focus",c),document.addEventListener("visibilitychange",c)),n&&n.player.one("loadedmetadata",(function(){var e=new URLSearchParams(window.location.search),t=Number(e.get("t")),r=isNaN(t)?0:t;n.player.currentTime(r)})),function(){null!==n&&(videojs(t.current).dispose(),n=null),void 0!==e.onUnmountCallback&&e.onUnmountCallback()}}),[]),null===e.errorMessage?r.createElement("video",{ref:t,className:"video-js vjs-mediacms native-dimensions"}):r.createElement("div",{className:"error-container"},r.createElement("div",{className:"error-container-inner"},r.createElement("span",{className:"icon-wrap"},r.createElement("i",{className:"material-icons"},"error_outline")),r.createElement("span",{className:"msg-wrap"},e.errorMessage)))}o().string.isRequired,c.propTypes={playerVolume:o().string,playerSoundMuted:o().bool,videoQuality:o().string,videoPlaybackSpeed:o().number,inTheaterMode:o().bool,siteId:o().string.isRequired,siteUrl:o().string.isRequired,errorMessage:o().string,cornerLayers:o().object,subtitlesInfo:o().array.isRequired,inEmbed:o().bool.isRequired,sources:o().array.isRequired,info:o().object.isRequired,enableAutoplay:o().bool.isRequired,hasTheaterMode:o().bool.isRequired,hasNextLink:o().bool.isRequired,hasPreviousLink:o().bool.isRequired,poster:o().string,previewSprite:o().object,onClickPreviousCallback:o().func,onClickNextCallback:o().func,onPlayerInitCallback:o().func,onStateUpdateCallback:o().func,onUnmountCallback:o().func},c.defaultProps={errorMessage:null,cornerLayers:{}}},473:function(e,t,n){n.d(t,{BrowserEvents:function(){return r.Jj},addClassname:function(){return r.Ec},cancelAnimationFrame:function(){return r.Wx},hasClassname:function(){return r.mO},removeClassname:function(){return r.dt},requestAnimationFrame:function(){return r.U7},supportsSvgAsImg:function(){return r.Je},logErrorAndReturnError:function(){return i.O},logWarningAndReturnError:function(){return i.a},exportStore:function(){return o.Z},formatInnerLink:function(){return a.U},formatViewsNumber:function(){return u.Z},csrfToken:function(){return l.o},imageExtension:function(){return s.s},greaterCommonDivision:function(){return c.$A},isPositiveIntegerOrZero:function(){return c.ZU},PositiveInteger:function(){return d.n},PositiveIntegerOrZero:function(){return d.g},publishedOnDate:function(){return f.Z},quickSort:function(){return v.U},deleteRequest:function(){return p.Jl},getRequest:function(){return p.A_},postRequest:function(){return p.j0},putRequest:function(){return p.GH}});var r=n(1454),i=n(9039),o=n(9264),a=n(1397),u=n(705),l=n(1450),s=n(2161),c=(n(4646),n(408)),d=n(5477),f=n(2276),v=n(3803),p=n(447)},4538:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.LatestMediaPage=void 0;var i=r(n(5466)),o=n(3613),a=n(8578),u=n(5910),l=n(824),s=n(7637);t.LatestMediaPage=function(e){var t=e.id,n=void 0===t?"latest-media":t,r=e.title,c=void 0===r?a.PageStore.get("config-enabled").pages.latest.title:r;return i.default.createElement(s.Page,{id:n},i.default.createElement(o.ApiUrlConsumer,null,(function(e){return i.default.createElement(u.MediaListWrapper,{title:c,className:"items-list-ver"},i.default.createElement(l.LazyLoadItemListAsync,{requestUrl:e.media,hideViews:!a.PageStore.get("config-media-item").displayViews,hideAuthor:!a.PageStore.get("config-media-item").displayAuthor,hideDate:!a.PageStore.get("config-media-item").displayPublishDate}))})))}},541:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.VideoViewerActions=t.SearchFieldActions=t.ProfilePageActions=t.PlaylistViewActions=t.PlaylistPageActions=t.PageActions=t.MediaPageActions=void 0,t.MediaPageActions=o(n(979)),t.PageActions=o(n(6613)),t.PlaylistPageActions=o(n(5880)),t.PlaylistViewActions=o(n(9660)),t.ProfilePageActions=o(n(2472)),t.SearchFieldActions=o(n(2600)),t.VideoViewerActions=o(n(5464))},8578:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.VideoViewerStore=t.SearchFieldStore=t.ProfilePageStore=t.PlaylistViewStore=t.PlaylistPageStore=t.PageStore=t.MediaPageStore=void 0;var i=r(n(337));t.MediaPageStore=i.default;var o=r(n(7959));t.PageStore=o.default;var a=r(n(1566));t.PlaylistPageStore=a.default;var u=r(n(1439));t.PlaylistViewStore=u.default;var l=r(n(8024));t.ProfilePageStore=l.default;var s=r(n(7359));t.SearchFieldStore=s.default;var c=r(n(5641));t.VideoViewerStore=c.default}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var o=n[e]={exports:{}};return t[e].call(o.exports,o,o.exports,r),o.exports}r.m=t,e=[],r.O=function(t,n,i,o){if(!n){var a=1/0;for(s=0;s<e.length;s++){n=e[s][0],i=e[s][1],o=e[s][2];for(var u=!0,l=0;l<n.length;l++)(!1&o||a>=o)&&Object.keys(r.O).every((function(e){return r.O[e](n[l])}))?n.splice(l--,1):(u=!1,o<a&&(a=o));u&&(e.splice(s--,1),t=i())}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[n,i,o]},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.j=131,function(){var e={131:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,o,a=n[0],u=n[1],l=n[2],s=0;for(i in u)r.o(u,i)&&(r.m[i]=u[i]);if(l)var c=l(r);for(t&&t(n);s<a.length;s++)o=a[s],r.o(e,o)&&e[o]&&e[o][0](),e[a[s]]=0;return r.O(c)},n=self.webpackChunkmediacms_frontend=self.webpackChunkmediacms_frontend||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var i=r.O(void 0,[431],(function(){return r(7487)}));i=r.O(i)}();