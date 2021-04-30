/* eslint-disable */
/**
 * 动画主控制器
 * @config target 动画对象，可以是数组，如果是数组的话会批量分发onframe等事件
 * @config life(1000) 动画时长
 * @config delay(0) 动画延迟时间
 * @config loop(true)
 * @config gap(0) 循环的间隔时间
 * @config onframe
 * @config easing(optional)
 * @config ondestroy(optional)
 * @config onrestart(optional)
 *
 * TODO pause
 */
function defaults(t,e,r){for(var n in e)e.hasOwnProperty(n)&&(r?null!=e[n]:null==t[n])&&(t[n]=e[n]);return t}function indexOf(t,e){if(t){if(t.indexOf)return t.indexOf(e);for(var r=0,n=t.length;r<n;r++)if(t[r]===e)return r}return-1}function mixin(t,e,r){defaults(t="prototype"in t?t.prototype:t,e="prototype"in e?e.prototype:e,r)}function isArrayLike(t){if(t)return"string"!=typeof t&&"number"==typeof t.length}var arrySlice=Array.prototype.slice,Eventful=function(t){this._$handlers={},this._$eventProcessor=t};function normalizeQuery(t,e){var r=t._$eventProcessor;return null!=e&&r&&r.normalizeQuery&&(e=r.normalizeQuery(e)),e}function on(t,e,r,n,i,a){var s=t._$handlers;if("function"==typeof r&&(i=n,n=r,r=null),!n||!e)return t;r=normalizeQuery(t,r),s[e]||(s[e]=[]);for(var o=0;o<s[e].length;o++)if(s[e][o].h===n)return t;var l={h:n,one:a,query:r,ctx:i||t,callAtLast:n.zrEventfulCallAtLast},u=s[e].length-1,h=s[e][u];return h&&h.callAtLast?s[e].splice(u,0,l):s[e].push(l),t}Eventful.prototype={constructor:Eventful,one:function(t,e,r,n){return on(this,t,e,r,n,!0)},on:function(t,e,r,n){return on(this,t,e,r,n,!1)},isSilent:function(t){var e=this._$handlers;return!e[t]||!e[t].length},off:function(t,e){var r=this._$handlers;if(!t)return this._$handlers={},this;if(e){if(r[t]){for(var n=[],i=0,a=r[t].length;i<a;i++)r[t][i].h!==e&&n.push(r[t][i]);r[t]=n}r[t]&&0===r[t].length&&delete r[t]}else delete r[t];return this},trigger:function(t){var e=this._$handlers[t],r=this._$eventProcessor;if(e){var n=arguments,i=n.length;i>3&&(n=arrySlice.call(n,1));for(var a=e.length,s=0;s<a;){var o=e[s];if(r&&r.filter&&null!=o.query&&!r.filter(t,o.query))s++;else{switch(i){case 1:o.h.call(o.ctx);break;case 2:o.h.call(o.ctx,n[1]);break;case 3:o.h.call(o.ctx,n[1],n[2]);break;default:o.h.apply(o.ctx,n)}o.one?(e.splice(s,1),a--):s++}}}return r&&r.afterTrigger&&r.afterTrigger(t),this},triggerWithContext:function(t){var e=this._$handlers[t],r=this._$eventProcessor;if(e){var n=arguments,i=n.length;i>4&&(n=arrySlice.call(n,1,n.length-1));for(var a=n[n.length-1],s=e.length,o=0;o<s;){var l=e[o];if(r&&r.filter&&null!=l.query&&!r.filter(t,l.query))o++;else{switch(i){case 1:l.h.call(a);break;case 2:l.h.call(a,n[1]);break;case 3:l.h.call(a,n[1],n[2]);break;default:l.h.apply(a,n)}l.one?(e.splice(o,1),s--):o++}}}return r&&r.afterTrigger&&r.afterTrigger(t),this}};var env={};function detect(t){var e={},r=t.match(/Firefox\/([\d.]+)/),n=t.match(/MSIE\s([\d.]+)/)||t.match(/Trident\/.+?rv:(([\d.]+))/),i=t.match(/Edge\/([\d.]+)/),a=/micromessenger/i.test(t);return r&&(e.firefox=!0,e.version=r[1]),n&&(e.ie=!0,e.version=n[1]),i&&(e.edge=!0,e.version=i[1]),a&&(e.weChat=!0),{browser:e,os:{},node:!1,canvasSupported:!!document.createElement("canvas").getContext,svgSupported:"undefined"!=typeof SVGRect,touchEventsSupported:"ontouchstart"in window&&!e.ie&&!e.edge,pointerEventsSupported:"onpointerdown"in window&&(e.edge||e.ie&&e.version>=11),domSupported:"undefined"!=typeof document}}env="object"==typeof wx&&"function"==typeof wx.getSystemInfoSync?{browser:{},os:{},node:!1,wxa:!0,canvasSupported:!0,svgSupported:!1,touchEventsSupported:!0,domSupported:!1}:"undefined"==typeof document&&"undefined"!=typeof self?{browser:{},os:{},node:!1,worker:!0,canvasSupported:!0,domSupported:!1}:"undefined"==typeof navigator?{browser:{},os:{},node:!0,worker:!1,canvasSupported:!0,svgSupported:!0,domSupported:!1}:detect(navigator.userAgent);var requestAnimationFrame="undefined"!=typeof window&&(window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.msRequestAnimationFrame&&window.msRequestAnimationFrame.bind(window)||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame)||function(t){setTimeout(t,16)},easing={linear:function(t){return t},quadraticIn:function(t){return t*t},quadraticOut:function(t){return t*(2-t)},quadraticInOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)},cubicIn:function(t){return t*t*t},cubicOut:function(t){return--t*t*t+1},cubicInOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},quarticIn:function(t){return t*t*t*t},quarticOut:function(t){return 1- --t*t*t*t},quarticInOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},quinticIn:function(t){return t*t*t*t*t},quinticOut:function(t){return--t*t*t*t*t+1},quinticInOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},sinusoidalIn:function(t){return 1-Math.cos(t*Math.PI/2)},sinusoidalOut:function(t){return Math.sin(t*Math.PI/2)},sinusoidalInOut:function(t){return.5*(1-Math.cos(Math.PI*t))},exponentialIn:function(t){return 0===t?0:Math.pow(1024,t-1)},exponentialOut:function(t){return 1===t?1:1-Math.pow(2,-10*t)},exponentialInOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))},circularIn:function(t){return 1-Math.sqrt(1-t*t)},circularOut:function(t){return Math.sqrt(1- --t*t)},circularInOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},elasticIn:function(t){var e,r=.1;return 0===t?0:1===t?1:(!r||r<1?(r=1,e=.1):e=.4*Math.asin(1/r)/(2*Math.PI),-r*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4))},elasticOut:function(t){var e,r=.1;return 0===t?0:1===t?1:(!r||r<1?(r=1,e=.1):e=.4*Math.asin(1/r)/(2*Math.PI),r*Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/.4)+1)},elasticInOut:function(t){var e,r=.1;return 0===t?0:1===t?1:(!r||r<1?(r=1,e=.1):e=.4*Math.asin(1/r)/(2*Math.PI),(t*=2)<1?r*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4)*-.5:r*Math.pow(2,-10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4)*.5+1)},backIn:function(t){var e=1.70158;return t*t*((e+1)*t-e)},backOut:function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1},backInOut:function(t){var e=2.5949095;return(t*=2)<1?t*t*((e+1)*t-e)*.5:.5*((t-=2)*t*((e+1)*t+e)+2)},bounceIn:function(t){return 1-easing.bounceOut(1-t)},bounceOut:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},bounceInOut:function(t){return t<.5?.5*easing.bounceIn(2*t):.5*easing.bounceOut(2*t-1)+.5}};function Clip(t){this._target=t.target,this._life=t.life||1e3,this._delay=t.delay||0,this._initialized=!1,this.loop=null!=t.loop&&t.loop,this.gap=t.gap||0,this.easing=t.easing||"Linear",this.onframe=t.onframe,this.ondestroy=t.ondestroy,this.onrestart=t.onrestart,this._pausedTime=0,this._paused=!1}Clip.prototype={constructor:Clip,step:function(t,e){if(this._initialized||(this._startTime=t+this._delay,this._initialized=!0),this._paused)this._pausedTime+=e;else{var r=(t-this._startTime-this._pausedTime)/this._life;if(!(r<0)){r=Math.min(r,1);var n=this.easing,i="string"==typeof n?easing[n]:n,a="function"==typeof i?i(r):r;return this.fire("frame",a),1===r?this.loop?(this.restart(t),"restart"):(this._needsRemove=!0,"destroy"):null}}},restart:function(t){var e=(t-this._startTime-this._pausedTime)%this._life;this._startTime=t-e+this.gap,this._pausedTime=0,this._needsRemove=!1},fire:function(t,e){this[t="on"+t]&&this[t](this._target,e)},pause:function(){this._paused=!0},resume:function(){this._paused=!1}};var LinkedList=function(){this.head=null,this.tail=null,this._len=0},linkedListProto=LinkedList.prototype;linkedListProto.insert=function(t){var e=new Entry(t);return this.insertEntry(e),e},linkedListProto.insertEntry=function(t){this.head?(this.tail.next=t,t.prev=this.tail,t.next=null,this.tail=t):this.head=this.tail=t,this._len++},linkedListProto.remove=function(t){var e=t.prev,r=t.next;e?e.next=r:this.head=r,r?r.prev=e:this.tail=e,t.next=t.prev=null,this._len--},linkedListProto.len=function(){return this._len},linkedListProto.clear=function(){this.head=this.tail=null,this._len=0};var Entry=function(t){this.value=t,this.next,this.prev},LRU=function(t){this._list=new LinkedList,this._map={},this._maxSize=t||10,this._lastRemovedEntry=null},LRUProto=LRU.prototype;LRUProto.put=function(t,e){var r=this._list,n=this._map,i=null;if(null==n[t]){var a=r.len(),s=this._lastRemovedEntry;if(a>=this._maxSize&&a>0){var o=r.head;r.remove(o),delete n[o.key],i=o.value,this._lastRemovedEntry=o}s?s.value=e:s=new Entry(e),s.key=t,r.insertEntry(s),n[t]=s}return i},LRUProto.get=function(t){var e=this._map[t],r=this._list;if(null!=e)return e!==r.tail&&(r.remove(e),r.insertEntry(e)),e.value},LRUProto.clear=function(){this._list.clear(),this._map={}};var kCSSColorTable={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]};function clampCssByte(t){return(t=Math.round(t))<0?0:t>255?255:t}function clampCssFloat(t){return t<0?0:t>1?1:t}function parseCssInt(t){return t.length&&"%"===t.charAt(t.length-1)?clampCssByte(parseFloat(t)/100*255):clampCssByte(parseInt(t,10))}function parseCssFloat(t){return t.length&&"%"===t.charAt(t.length-1)?clampCssFloat(parseFloat(t)/100):clampCssFloat(parseFloat(t))}function cssHueToRgb(t,e,r){return r<0?r+=1:r>1&&(r-=1),6*r<1?t+(e-t)*r*6:2*r<1?e:3*r<2?t+(e-t)*(2/3-r)*6:t}function setRgba(t,e,r,n,i){return t[0]=e,t[1]=r,t[2]=n,t[3]=i,t}function copyRgba(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}var colorCache=new LRU(20),lastRemovedArr=null;function putToCache(t,e){lastRemovedArr&&copyRgba(lastRemovedArr,e),lastRemovedArr=colorCache.put(t,lastRemovedArr||e.slice())}function parse(t,e){if(t){e=e||[];var r=colorCache.get(t);if(r)return copyRgba(e,r);var n,i=(t+="").replace(/ /g,"").toLowerCase();if(i in kCSSColorTable)return copyRgba(e,kCSSColorTable[i]),putToCache(t,e),e;if("#"===i.charAt(0))return 4===i.length?(n=parseInt(i.substr(1),16))>=0&&n<=4095?(setRgba(e,(3840&n)>>4|(3840&n)>>8,240&n|(240&n)>>4,15&n|(15&n)<<4,1),putToCache(t,e),e):void setRgba(e,0,0,0,1):7===i.length?(n=parseInt(i.substr(1),16))>=0&&n<=16777215?(setRgba(e,(16711680&n)>>16,(65280&n)>>8,255&n,1),putToCache(t,e),e):void setRgba(e,0,0,0,1):void 0;var a=i.indexOf("("),s=i.indexOf(")");if(-1!==a&&s+1===i.length){var o=i.substr(0,a),l=i.substr(a+1,s-(a+1)).split(","),u=1;switch(o){case"rgba":if(4!==l.length)return void setRgba(e,0,0,0,1);u=parseCssFloat(l.pop());case"rgb":return 3!==l.length?void setRgba(e,0,0,0,1):(setRgba(e,parseCssInt(l[0]),parseCssInt(l[1]),parseCssInt(l[2]),u),putToCache(t,e),e);case"hsla":return 4!==l.length?void setRgba(e,0,0,0,1):(l[3]=parseCssFloat(l[3]),hsla2rgba(l,e),putToCache(t,e),e);case"hsl":return 3!==l.length?void setRgba(e,0,0,0,1):(hsla2rgba(l,e),putToCache(t,e),e);default:return}}setRgba(e,0,0,0,1)}}function hsla2rgba(t,e){var r=(parseFloat(t[0])%360+360)%360/360,n=parseCssFloat(t[1]),i=parseCssFloat(t[2]),a=i<=.5?i*(n+1):i+n-i*n,s=2*i-a;return setRgba(e=e||[],clampCssByte(255*cssHueToRgb(s,a,r+1/3)),clampCssByte(255*cssHueToRgb(s,a,r)),clampCssByte(255*cssHueToRgb(s,a,r-1/3)),1),4===t.length&&(e[3]=t[3]),e}var arraySlice=Array.prototype.slice;function defaultGetter(t,e){return t[e]}function defaultSetter(t,e,r){t[e]=r}function interpolateNumber(t,e,r){return(e-t)*r+t}function interpolateString(t,e,r){return r>.5?e:t}function interpolateArray(t,e,r,n,i){var a=t.length;if(1===i)for(var s=0;s<a;s++)n[s]=interpolateNumber(t[s],e[s],r);else{var o=a&&t[0].length;for(s=0;s<a;s++)for(var l=0;l<o;l++)n[s][l]=interpolateNumber(t[s][l],e[s][l],r)}}function fillArr(t,e,r){var n=t.length,i=e.length;if(n!==i)if(n>i)t.length=i;else for(var a=n;a<i;a++)t.push(1===r?e[a]:arraySlice.call(e[a]));var s=t[0]&&t[0].length;for(a=0;a<t.length;a++)if(1===r)isNaN(t[a])&&(t[a]=e[a]);else for(var o=0;o<s;o++)isNaN(t[a][o])&&(t[a][o]=e[a][o])}function isArraySame(t,e,r){if(t===e)return!0;var n=t.length;if(n!==e.length)return!1;if(1===r){for(var i=0;i<n;i++)if(t[i]!==e[i])return!1}else{var a=t[0].length;for(i=0;i<n;i++)for(var s=0;s<a;s++)if(t[i][s]!==e[i][s])return!1}return!0}function catmullRomInterpolateArray(t,e,r,n,i,a,s,o,l){var u=t.length;if(1===l)for(var h=0;h<u;h++)o[h]=catmullRomInterpolate(t[h],e[h],r[h],n[h],i,a,s);else{var c=t[0].length;for(h=0;h<u;h++)for(var f=0;f<c;f++)o[h][f]=catmullRomInterpolate(t[h][f],e[h][f],r[h][f],n[h][f],i,a,s)}}function catmullRomInterpolate(t,e,r,n,i,a,s){var o=.5*(r-t),l=.5*(n-e);return(2*(e-r)+o+l)*s+(-3*(e-r)-2*o-l)*a+o*i+e}function cloneValue(t){if(isArrayLike(t)){var e=t.length;if(isArrayLike(t[0])){for(var r=[],n=0;n<e;n++)r.push(arraySlice.call(t[n]));return r}return arraySlice.call(t)}return t}function rgba2String(t){return t[0]=Math.floor(t[0]),t[1]=Math.floor(t[1]),t[2]=Math.floor(t[2]),"rgba("+t.join(",")+")"}function getArrayDim(t){var e=t[t.length-1].value;return isArrayLike(e&&e[0])?2:1}function createTrackClip(t,e,r,n,i,a){var s=t._getter,o=t._setter,l="spline"===e,u=n.length;if(u){var h,c=isArrayLike(n[0].value),f=!1,p=!1,d=c?getArrayDim(n):0;n.sort(function(t,e){return t.time-e.time}),h=n[u-1].time;for(var g=[],m=[],v=n[0].value,y=!0,_=0;_<u;_++){g.push(n[_].time/h);var b=n[_].value;if(c&&isArraySame(b,v,d)||!c&&b===v||(y=!1),v=b,"string"==typeof b){var w=parse(b);w?(b=w,f=!0):p=!0}m.push(b)}if(a||!y){var k=m[u-1];for(_=0;_<u-1;_++)c?fillArr(m[_],k,d):!isNaN(m[_])||isNaN(k)||p||f||(m[_]=k);c&&fillArr(s(t._target,i),k,d);var C,A,R,I,L,S=0,M=0;if(f)var T=[0,0,0,0];var q=new Clip({target:t._target,life:h,loop:t._loop,delay:t._delay,onframe:function(t,e){var r;if(e<0)r=0;else if(e<M){for(r=Math.min(S+1,u-1);r>=0&&!(g[r]<=e);r--);r=Math.min(r,u-2)}else{for(r=S;r<u&&!(g[r]>e);r++);r=Math.min(r-1,u-2)}S=r,M=e;var n=g[r+1]-g[r];if(0!==n)if(C=(e-g[r])/n,l)if(R=m[r],A=m[0===r?r:r-1],I=m[r>u-2?u-1:r+1],L=m[r>u-3?u-1:r+2],c)catmullRomInterpolateArray(A,R,I,L,C,C*C,C*C*C,s(t,i),d);else{if(f)a=catmullRomInterpolateArray(A,R,I,L,C,C*C,C*C*C,T,1),a=rgba2String(T);else{if(p)return interpolateString(R,I,C);a=catmullRomInterpolate(A,R,I,L,C,C*C,C*C*C)}o(t,i,a)}else if(c)interpolateArray(m[r],m[r+1],C,s(t,i),d);else{var a;if(f)interpolateArray(m[r],m[r+1],C,T,1),a=rgba2String(T);else{if(p)return interpolateString(m[r],m[r+1],C);a=interpolateNumber(m[r],m[r+1],C)}o(t,i,a)}},ondestroy:r});return e&&"spline"!==e&&(q.easing=e),q}}}var Animator=function(t,e,r,n){this._tracks={},this._target=t,this._loop=e||!1,this._getter=r||defaultGetter,this._setter=n||defaultSetter,this._clipCount=0,this._delay=0,this._doneList=[],this._onframeList=[],this._clipList=[]};Animator.prototype={when:function(t,e){var r=this._tracks;for(var n in e)if(e.hasOwnProperty(n)){if(!r[n]){r[n]=[];var i=this._getter(this._target,n);if(null==i)continue;0!==t&&r[n].push({time:0,value:cloneValue(i)})}r[n].push({time:t,value:e[n]})}return this},during:function(t){return this._onframeList.push(t),this},pause:function(){for(var t=0;t<this._clipList.length;t++)this._clipList[t].pause();this._paused=!0},resume:function(){for(var t=0;t<this._clipList.length;t++)this._clipList[t].resume();this._paused=!1},isPaused:function(){return!!this._paused},_doneCallback:function(){this._tracks={},this._clipList.length=0;for(var t=this._doneList,e=t.length,r=0;r<e;r++)t[r].call(this)},start:function(t,e){var r,n=this,i=0,a=function(){--i||n._doneCallback()};for(var s in this._tracks)if(this._tracks.hasOwnProperty(s)){var o=createTrackClip(this,t,a,this._tracks[s],s,e);o&&(this._clipList.push(o),i++,this.animation&&this.animation.addClip(o),r=o)}if(r){var l=r.onframe;r.onframe=function(t,e){l(t,e);for(var r=0;r<n._onframeList.length;r++)n._onframeList[r](t,e)}}return i||this._doneCallback(),this},stop:function(t){for(var e=this._clipList,r=this.animation,n=0;n<e.length;n++){var i=e[n];t&&i.onframe(this._target,1),r&&r.removeClip(i)}e.length=0},delay:function(t){return this._delay=t,this},done:function(t){return t&&this._doneList.push(t),this},getClips:function(){return this._clipList}};var Animation=function(t){t=t||{},this.stage=t.stage||{},this.onframe=t.onframe||function(){},this._clips=[],this._running=!1,this._time,this._pausedTime,this._pauseStart,this._paused=!1,Eventful.call(this)};Animation.prototype={constructor:Animation,addClip:function(t){this._clips.push(t)},addAnimator:function(t){t.animation=this;for(var e=t.getClips(),r=0;r<e.length;r++)this.addClip(e[r])},removeClip:function(t){var e=indexOf(this._clips,t);e>=0&&this._clips.splice(e,1)},removeAnimator:function(t){for(var e=t.getClips(),r=0;r<e.length;r++)this.removeClip(e[r]);t.animation=null},_update:function(){for(var t=(new Date).getTime()-this._pausedTime,e=t-this._time,r=this._clips,n=r.length,i=[],a=[],s=0;s<n;s++){var o=r[s],l=o.step(t,e);l&&(i.push(l),a.push(o))}for(s=0;s<n;)r[s]._needsRemove?(r[s]=r[n-1],r.pop(),n--):s++;n=i.length;for(s=0;s<n;s++)a[s].fire(i[s]);this._time=t,this.onframe(e),this.trigger("frame",e),this.stage.update&&this.stage.update()},_startLoop:function(){var t=this;this._running=!0,requestAnimationFrame(function e(){t._running&&(requestAnimationFrame(e),!t._paused&&t._update())})},start:function(){this._time=(new Date).getTime(),this._pausedTime=0,this._startLoop()},stop:function(){this._running=!1},pause:function(){this._paused||(this._pauseStart=(new Date).getTime(),this._paused=!0)},resume:function(){this._paused&&(this._pausedTime+=(new Date).getTime()-this._pauseStart,this._paused=!1)},clear:function(){this._clips=[]},isFinished:function(){return!this._clips.length},animate:function(t,e){var r=new Animator(t,(e=e||{}).loop,e.getter,e.setter);return this.addAnimator(r),r}},mixin(Animation,Eventful);var index={Animation:Animation,Animator:Animator,Clip:Clip};export default index;export{Animation,Animator,Clip};
