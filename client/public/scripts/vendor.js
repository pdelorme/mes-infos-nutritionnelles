(function(/*! Brunch !*/) {
  'use strict';

  var globals = typeof window !== 'undefined' ? window : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};

  var has = function(object, name) {
    return ({}).hasOwnProperty.call(object, name);
  };

  var expand = function(root, name) {
    var results = [], parts, part;
    if (/^\.\.?(\/|$)/.test(name)) {
      parts = [root, name].join('/').split('/');
    } else {
      parts = name.split('/');
    }
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function(name) {
      var dir = dirname(path);
      var absolute = expand(dir, name);
      return globals.require(absolute, path);
    };
  };

  var initModule = function(name, definition) {
    var module = {id: name, exports: {}};
    cache[name] = module;
    definition(module.exports, localRequire(name), module);
    return module.exports;
  };

  var require = function(name, loaderPath) {
    var path = expand(name, '.');
    if (loaderPath == null) loaderPath = '/';

    if (has(cache, path)) return cache[path].exports;
    if (has(modules, path)) return initModule(path, modules[path]);

    var dirIndex = expand(path, './index');
    if (has(cache, dirIndex)) return cache[dirIndex].exports;
    if (has(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

    throw new Error('Cannot find module "' + name + '" from '+ '"' + loaderPath + '"');
  };

  var define = function(bundle, fn) {
    if (typeof bundle === 'object') {
      for (var key in bundle) {
        if (has(bundle, key)) {
          modules[key] = bundle[key];
        }
      }
    } else {
      modules[bundle] = fn;
    }
  };

  var list = function() {
    var result = [];
    for (var item in modules) {
      if (has(modules, item)) {
        result.push(item);
      }
    }
    return result;
  };

  globals.require = require;
  globals.require.define = define;
  globals.require.register = define;
  globals.require.list = list;
  globals.require.brunch = true;
})();
/*! jQuery v2.0.3 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-2.0.3.min.map
*/
(function(e,undefined){var t,n,r=typeof undefined,i=e.location,o=e.document,s=o.documentElement,a=e.jQuery,u=e.$,l={},c=[],p="2.0.3",f=c.concat,h=c.push,d=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,x=function(e,n){return new x.fn.init(e,n,t)},b=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^-ms-/,N=/-([\da-z])/gi,E=function(e,t){return t.toUpperCase()},S=function(){o.removeEventListener("DOMContentLoaded",S,!1),e.removeEventListener("load",S,!1),x.ready()};x.fn=x.prototype={jquery:p,constructor:x,init:function(e,t,n){var r,i;if(!e)return this;if("string"==typeof e){if(r="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:T.exec(e),!r||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof x?t[0]:t,x.merge(this,x.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:o,!0)),C.test(r[1])&&x.isPlainObject(t))for(r in t)x.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return i=o.getElementById(r[2]),i&&i.parentNode&&(this.length=1,this[0]=i),this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?n.ready(e):(e.selector!==undefined&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return d.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,u=arguments.length,l=!1;for("boolean"==typeof s&&(l=s,s=arguments[1]||{},a=2),"object"==typeof s||x.isFunction(s)||(s={}),u===a&&(s=this,--a);u>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],r=e[t],s!==r&&(l&&r&&(x.isPlainObject(r)||(i=x.isArray(r)))?(i?(i=!1,o=n&&x.isArray(n)?n:[]):o=n&&x.isPlainObject(n)?n:{},s[t]=x.extend(l,o,r)):r!==undefined&&(s[t]=r));return s},x.extend({expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=a),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){(e===!0?--x.readyWait:x.isReady)||(x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(o,[x]),x.fn.trigger&&x(o).trigger("ready").off("ready")))},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if("object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}return!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:JSON.parse,parseXML:function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(r){t=undefined}return(!t||t.getElementsByTagName("parsererror").length)&&x.error("Invalid XML: "+e),t},noop:function(){},globalEval:function(e){var t,n=eval;e=x.trim(e),e&&(1===e.indexOf("use strict")?(t=o.createElement("script"),t.text=e,o.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(k,"ms-").replace(N,E)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,s=j(e);if(n){if(s){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(s){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:function(e){return null==e?"":v.call(e)},makeArray:function(e,t){var n=t||[];return null!=e&&(j(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:g.call(t,e,n)},merge:function(e,t){var n=t.length,r=e.length,i=0;if("number"==typeof n)for(;n>i;i++)e[r++]=t[i];else while(t[i]!==undefined)e[r++]=t[i++];return e.length=r,e},grep:function(e,t,n){var r,i=[],o=0,s=e.length;for(n=!!n;s>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,s=j(e),a=[];if(s)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(a[a.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(a[a.length]=r);return f.apply([],a)},guid:1,proxy:function(e,t){var n,r,i;return"string"==typeof t&&(n=e[t],t=e,e=n),x.isFunction(e)?(r=d.call(arguments,2),i=function(){return e.apply(t||this,r.concat(d.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):undefined},access:function(e,t,n,r,i,o,s){var a=0,u=e.length,l=null==n;if("object"===x.type(n)){i=!0;for(a in n)x.access(e,t,a,n[a],!0,o,s)}else if(r!==undefined&&(i=!0,x.isFunction(r)||(s=!0),l&&(s?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(x(e),n)})),t))for(;u>a;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)));return i?e:l?t.call(e):u?t(e[0],n):o},now:Date.now,swap:function(e,t,n,r){var i,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=s[o];return i}}),x.ready.promise=function(t){return n||(n=x.Deferred(),"complete"===o.readyState?setTimeout(x.ready):(o.addEventListener("DOMContentLoaded",S,!1),e.addEventListener("load",S,!1))),n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function j(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}t=x(o),function(e,undefined){var t,n,r,i,o,s,a,u,l,c,p,f,h,d,g,m,y,v="sizzle"+-new Date,b=e.document,w=0,T=0,C=st(),k=st(),N=st(),E=!1,S=function(e,t){return e===t?(E=!0,0):0},j=typeof undefined,D=1<<31,A={}.hasOwnProperty,L=[],q=L.pop,H=L.push,O=L.push,F=L.slice,P=L.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",W="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",$=W.replace("w","w#"),B="\\["+M+"*("+W+")"+M+"*(?:([*^$|!~]?=)"+M+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+$+")|)|)"+M+"*\\]",I=":("+W+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+B.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=RegExp("^"+M+"*,"+M+"*"),X=RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=RegExp(M+"*[+~]"),Y=RegExp("="+M+"*([^\\]'\"]*)"+M+"*\\]","g"),V=RegExp(I),G=RegExp("^"+$+"$"),J={ID:RegExp("^#("+W+")"),CLASS:RegExp("^\\.("+W+")"),TAG:RegExp("^("+W.replace("w","w*")+")"),ATTR:RegExp("^"+B),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:RegExp("^(?:"+R+")$","i"),needsContext:RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Q=/^[^{]+\{\s*\[native \w/,K=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Z=/^(?:input|select|textarea|button)$/i,et=/^h\d$/i,tt=/'|\\/g,nt=RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),rt=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{O.apply(L=F.call(b.childNodes),b.childNodes),L[b.childNodes.length].nodeType}catch(it){O={apply:L.length?function(e,t){H.apply(e,F.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function ot(e,t,r,i){var o,s,a,u,l,f,g,m,x,w;if((t?t.ownerDocument||t:b)!==p&&c(t),t=t||p,r=r||[],!e||"string"!=typeof e)return r;if(1!==(u=t.nodeType)&&9!==u)return[];if(h&&!i){if(o=K.exec(e))if(a=o[1]){if(9===u){if(s=t.getElementById(a),!s||!s.parentNode)return r;if(s.id===a)return r.push(s),r}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(a))&&y(t,s)&&s.id===a)return r.push(s),r}else{if(o[2])return O.apply(r,t.getElementsByTagName(e)),r;if((a=o[3])&&n.getElementsByClassName&&t.getElementsByClassName)return O.apply(r,t.getElementsByClassName(a)),r}if(n.qsa&&(!d||!d.test(e))){if(m=g=v,x=t,w=9===u&&e,1===u&&"object"!==t.nodeName.toLowerCase()){f=gt(e),(g=t.getAttribute("id"))?m=g.replace(tt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",l=f.length;while(l--)f[l]=m+mt(f[l]);x=U.test(e)&&t.parentNode||t,w=f.join(",")}if(w)try{return O.apply(r,x.querySelectorAll(w)),r}catch(T){}finally{g||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,r,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>i.cacheLength&&delete t[e.shift()],t[n]=r}return t}function at(e){return e[v]=!0,e}function ut(e){var t=p.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function lt(e,t){var n=e.split("|"),r=e.length;while(r--)i.attrHandle[n[r]]=t}function ct(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function pt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return at(function(t){return t=+t,at(function(n,r){var i,o=e([],n.length,t),s=o.length;while(s--)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))})})}s=ot.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},n=ot.support={},c=ot.setDocument=function(e){var t=e?e.ownerDocument||e:b,r=t.defaultView;return t!==p&&9===t.nodeType&&t.documentElement?(p=t,f=t.documentElement,h=!s(t),r&&r.attachEvent&&r!==r.top&&r.attachEvent("onbeforeunload",function(){c()}),n.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ut(function(e){return e.appendChild(t.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),n.getById=ut(function(e){return f.appendChild(e).id=v,!t.getElementsByName||!t.getElementsByName(v).length}),n.getById?(i.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){return e.getAttribute("id")===t}}):(delete i.find.ID,i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=n.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==j?t.getElementsByTagName(e):undefined}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.CLASS=n.getElementsByClassName&&function(e,t){return typeof t.getElementsByClassName!==j&&h?t.getElementsByClassName(e):undefined},g=[],d=[],(n.qsa=Q.test(t.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll(":checked").length||d.push(":checked")}),ut(function(e){var n=t.createElement("input");n.setAttribute("type","hidden"),e.appendChild(n).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&d.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||d.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),d.push(",.*:")})),(n.matchesSelector=Q.test(m=f.webkitMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&ut(function(e){n.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",I)}),d=d.length&&RegExp(d.join("|")),g=g.length&&RegExp(g.join("|")),y=Q.test(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},S=f.compareDocumentPosition?function(e,r){if(e===r)return E=!0,0;var i=r.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(r);return i?1&i||!n.sortDetached&&r.compareDocumentPosition(e)===i?e===t||y(b,e)?-1:r===t||y(b,r)?1:l?P.call(l,e)-P.call(l,r):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,n){var r,i=0,o=e.parentNode,s=n.parentNode,a=[e],u=[n];if(e===n)return E=!0,0;if(!o||!s)return e===t?-1:n===t?1:o?-1:s?1:l?P.call(l,e)-P.call(l,n):0;if(o===s)return ct(e,n);r=e;while(r=r.parentNode)a.unshift(r);r=n;while(r=r.parentNode)u.unshift(r);while(a[i]===u[i])i++;return i?ct(a[i],u[i]):a[i]===b?-1:u[i]===b?1:0},t):p},ot.matches=function(e,t){return ot(e,null,null,t)},ot.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Y,"='$1']"),!(!n.matchesSelector||!h||g&&g.test(t)||d&&d.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return ot(t,p,null,[e]).length>0},ot.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},ot.attr=function(e,t){(e.ownerDocument||e)!==p&&c(e);var r=i.attrHandle[t.toLowerCase()],o=r&&A.call(i.attrHandle,t.toLowerCase())?r(e,t,!h):undefined;return o===undefined?n.attributes||!h?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null:o},ot.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},ot.uniqueSort=function(e){var t,r=[],i=0,o=0;if(E=!n.detectDuplicates,l=!n.sortStable&&e.slice(0),e.sort(S),E){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return e},o=ot.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=ot.selectors={cacheLength:50,createPseudo:at,match:J,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(nt,rt),e[3]=(e[4]||e[5]||"").replace(nt,rt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ot.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ot.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return J.CHILD.test(e[0])?null:(e[3]&&e[4]!==undefined?e[2]=e[4]:n&&V.test(n)&&(t=gt(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(nt,rt).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=C[e+" "];return t||(t=RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&C(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=ot.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,h,d,g=o!==s?"nextSibling":"previousSibling",m=t.parentNode,y=a&&t.nodeName.toLowerCase(),x=!u&&!a;if(m){if(o){while(g){p=t;while(p=p[g])if(a?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;d=g="only"===e&&!d&&"nextSibling"}return!0}if(d=[s?m.firstChild:m.lastChild],s&&x){c=m[v]||(m[v]={}),l=c[e]||[],h=l[0]===w&&l[1],f=l[0]===w&&l[2],p=h&&m.childNodes[h];while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[w,h,f];break}}else if(x&&(l=(t[v]||(t[v]={}))[e])&&l[0]===w)f=l[1];else while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if((a?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(x&&((p[v]||(p[v]={}))[e]=[w,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||ot.error("unsupported pseudo: "+e);return r[v]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?at(function(e,n){var i,o=r(e,t),s=o.length;while(s--)i=P.call(e,o[s]),e[i]=!(n[i]=o[s])}):function(e){return r(e,0,n)}):r}},pseudos:{not:at(function(e){var t=[],n=[],r=a(e.replace(z,"$1"));return r[v]?at(function(e,t,n,i){var o,s=r(e,null,i,[]),a=e.length;while(a--)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:at(function(e){return function(t){return ot(e,t).length>0}}),contains:at(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:at(function(e){return G.test(e||"")||ot.error("unsupported lang: "+e),e=e.replace(nt,rt).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return et.test(e.nodeName)},input:function(e){return Z.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},i.pseudos.nth=i.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[t]=pt(t);for(t in{submit:!0,reset:!0})i.pseudos[t]=ft(t);function dt(){}dt.prototype=i.filters=i.pseudos,i.setFilters=new dt;function gt(e,t){var n,r,o,s,a,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);a=e,u=[],l=i.preFilter;while(a){(!n||(r=_.exec(a)))&&(r&&(a=a.slice(r[0].length)||a),u.push(o=[])),n=!1,(r=X.exec(a))&&(n=r.shift(),o.push({value:n,type:r[0].replace(z," ")}),a=a.slice(n.length));for(s in i.filter)!(r=J[s].exec(a))||l[s]&&!(r=l[s](r))||(n=r.shift(),o.push({value:n,type:s,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?ot.error(e):k(e,u).slice(0)}function mt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function yt(e,t,n){var i=t.dir,o=n&&"parentNode"===i,s=T++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,a){var u,l,c,p=w+" "+s;if(a){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,a))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[v]||(t[v]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,a)||r,l[1]===!0)return!0}}function vt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,s=[],a=0,u=e.length,l=null!=t;for(;u>a;a++)(o=e[a])&&(!n||n(o,r,i))&&(s.push(o),l&&t.push(a));return s}function bt(e,t,n,r,i,o){return r&&!r[v]&&(r=bt(r)),i&&!i[v]&&(i=bt(i,o)),at(function(o,s,a,u){var l,c,p,f=[],h=[],d=s.length,g=o||Ct(t||"*",a.nodeType?[a]:a,[]),m=!e||!o&&t?g:xt(g,f,e,a,u),y=n?i||(o?e:d||r)?[]:s:m;if(n&&n(m,y,a,u),r){l=xt(y,h),r(l,[],a,u),c=l.length;while(c--)(p=l[c])&&(y[h[c]]=!(m[h[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?P.call(o,p):f[c])>-1&&(o[l]=!(s[l]=p))}}else y=xt(y===s?y.splice(d,y.length):y),i?i(null,s,y,u):O.apply(s,y)})}function wt(e){var t,n,r,o=e.length,s=i.relative[e[0].type],a=s||i.relative[" "],l=s?1:0,c=yt(function(e){return e===t},a,!0),p=yt(function(e){return P.call(t,e)>-1},a,!0),f=[function(e,n,r){return!s&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>l;l++)if(n=i.relative[e[l].type])f=[yt(vt(f),n)];else{if(n=i.filter[e[l].type].apply(null,e[l].matches),n[v]){for(r=++l;o>r;r++)if(i.relative[e[r].type])break;return bt(l>1&&vt(f),l>1&&mt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&wt(e.slice(l,r)),o>r&&wt(e=e.slice(r)),o>r&&mt(e))}f.push(n)}return vt(f)}function Tt(e,t){var n=0,o=t.length>0,s=e.length>0,a=function(a,l,c,f,h){var d,g,m,y=[],v=0,x="0",b=a&&[],T=null!=h,C=u,k=a||s&&i.find.TAG("*",h&&l.parentNode||l),N=w+=null==C?1:Math.random()||.1;for(T&&(u=l!==p&&l,r=n);null!=(d=k[x]);x++){if(s&&d){g=0;while(m=e[g++])if(m(d,l,c)){f.push(d);break}T&&(w=N,r=++n)}o&&((d=!m&&d)&&v--,a&&b.push(d))}if(v+=x,o&&x!==v){g=0;while(m=t[g++])m(b,y,l,c);if(a){if(v>0)while(x--)b[x]||y[x]||(y[x]=q.call(f));y=xt(y)}O.apply(f,y),T&&!a&&y.length>0&&v+t.length>1&&ot.uniqueSort(f)}return T&&(w=N,u=C),b};return o?at(a):a}a=ot.compile=function(e,t){var n,r=[],i=[],o=N[e+" "];if(!o){t||(t=gt(e)),n=t.length;while(n--)o=wt(t[n]),o[v]?r.push(o):i.push(o);o=N(e,Tt(i,r))}return o};function Ct(e,t,n){var r=0,i=t.length;for(;i>r;r++)ot(e,t[r],n);return n}function kt(e,t,r,o){var s,u,l,c,p,f=gt(e);if(!o&&1===f.length){if(u=f[0]=f[0].slice(0),u.length>2&&"ID"===(l=u[0]).type&&n.getById&&9===t.nodeType&&h&&i.relative[u[1].type]){if(t=(i.find.ID(l.matches[0].replace(nt,rt),t)||[])[0],!t)return r;e=e.slice(u.shift().value.length)}s=J.needsContext.test(e)?0:u.length;while(s--){if(l=u[s],i.relative[c=l.type])break;if((p=i.find[c])&&(o=p(l.matches[0].replace(nt,rt),U.test(u[0].type)&&t.parentNode||t))){if(u.splice(s,1),e=o.length&&mt(u),!e)return O.apply(r,o),r;break}}}return a(e,f)(o,t,!h,r,U.test(e)),r}n.sortStable=v.split("").sort(S).join("")===v,n.detectDuplicates=E,c(),n.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(p.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||lt("type|href|height|width",function(e,t,n){return n?undefined:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||lt("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?undefined:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||lt(R,function(e,t,n){var r;return n?undefined:(r=e.getAttributeNode(t))&&r.specified?r.value:e[t]===!0?t.toLowerCase():null}),x.find=ot,x.expr=ot.selectors,x.expr[":"]=x.expr.pseudos,x.unique=ot.uniqueSort,x.text=ot.getText,x.isXMLDoc=ot.isXML,x.contains=ot.contains}(e);var D={};function A(e){var t=D[e]={};return x.each(e.match(w)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?D[e]||A(e):x.extend({},e);var t,n,r,i,o,s,a=[],u=!e.once&&[],l=function(p){for(t=e.memory&&p,n=!0,s=i||0,i=0,o=a.length,r=!0;a&&o>s;s++)if(a[s].apply(p[0],p[1])===!1&&e.stopOnFalse){t=!1;break}r=!1,a&&(u?u.length&&l(u.shift()):t?a=[]:c.disable())},c={add:function(){if(a){var n=a.length;(function s(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&c.has(n)||a.push(n):n&&n.length&&"string"!==r&&s(n)})})(arguments),r?o=a.length:t&&(i=n,l(t))}return this},remove:function(){return a&&x.each(arguments,function(e,t){var n;while((n=x.inArray(t,a,n))>-1)a.splice(n,1),r&&(o>=n&&o--,s>=n&&s--)}),this},has:function(e){return e?x.inArray(e,a)>-1:!(!a||!a.length)},empty:function(){return a=[],o=0,this},disable:function(){return a=u=t=undefined,this},disabled:function(){return!a},lock:function(){return u=undefined,t||c.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!a||n&&!u||(t=t||[],t=[e,t.slice?t.slice():t],r?u.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!n}};return c},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var s=o[0],a=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var s=o[2],a=o[3];r[o[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=s.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=d.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),s=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?d.call(arguments):r,n===a?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},a,u,l;if(r>1)for(a=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(s(t,l,n)).fail(o.reject).progress(s(t,u,a)):--i;return i||o.resolveWith(l,n),o.promise()}}),x.support=function(t){var n=o.createElement("input"),r=o.createDocumentFragment(),i=o.createElement("div"),s=o.createElement("select"),a=s.appendChild(o.createElement("option"));return n.type?(n.type="checkbox",t.checkOn=""!==n.value,t.optSelected=a.selected,t.reliableMarginRight=!0,t.boxSizingReliable=!0,t.pixelPosition=!1,n.checked=!0,t.noCloneChecked=n.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!a.disabled,n=o.createElement("input"),n.value="t",n.type="radio",t.radioValue="t"===n.value,n.setAttribute("checked","t"),n.setAttribute("name","t"),r.appendChild(n),t.checkClone=r.cloneNode(!0).cloneNode(!0).lastChild.checked,t.focusinBubbles="onfocusin"in e,i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===i.style.backgroundClip,x(function(){var n,r,s="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",a=o.getElementsByTagName("body")[0];a&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",a.appendChild(n).appendChild(i),i.innerHTML="",i.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",x.swap(a,null!=a.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===i.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(i,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(i,null)||{width:"4px"}).width,r=i.appendChild(o.createElement("div")),r.style.cssText=i.style.cssText=s,r.style.marginRight=r.style.width="0",i.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),a.removeChild(n))}),t):t}({});var L,q,H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,O=/([A-Z])/g;function F(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=x.expando+Math.random()}F.uid=1,F.accepts=function(e){return e.nodeType?1===e.nodeType||9===e.nodeType:!0},F.prototype={key:function(e){if(!F.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=F.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,x.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if("string"==typeof t)o[t]=n;else if(x.isEmptyObject(o))x.extend(this.cache[i],t);else for(r in t)o[r]=t[r];return o},get:function(e,t){var n=this.cache[this.key(e)];return t===undefined?n:n[t]},access:function(e,t,n){var r;return t===undefined||t&&"string"==typeof t&&n===undefined?(r=this.get(e,t),r!==undefined?r:this.get(e,x.camelCase(t))):(this.set(e,t,n),n!==undefined?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),s=this.cache[o];if(t===undefined)this.cache[o]={};else{x.isArray(t)?r=t.concat(t.map(x.camelCase)):(i=x.camelCase(t),t in s?r=[t,i]:(r=i,r=r in s?[r]:r.match(w)||[])),n=r.length;while(n--)delete s[r[n]]}},hasData:function(e){return!x.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}},L=new F,q=new F,x.extend({acceptData:F.accepts,hasData:function(e){return L.hasData(e)||q.hasData(e)},data:function(e,t,n){return L.access(e,t,n)},removeData:function(e,t){L.remove(e,t)},_data:function(e,t,n){return q.access(e,t,n)},_removeData:function(e,t){q.remove(e,t)}}),x.fn.extend({data:function(e,t){var n,r,i=this[0],o=0,s=null;if(e===undefined){if(this.length&&(s=L.get(i),1===i.nodeType&&!q.get(i,"hasDataAttrs"))){for(n=i.attributes;n.length>o;o++)r=n[o].name,0===r.indexOf("data-")&&(r=x.camelCase(r.slice(5)),P(i,r,s[r]));q.set(i,"hasDataAttrs",!0)}return s}return"object"==typeof e?this.each(function(){L.set(this,e)}):x.access(this,function(t){var n,r=x.camelCase(e);if(i&&t===undefined){if(n=L.get(i,e),n!==undefined)return n;if(n=L.get(i,r),n!==undefined)return n;if(n=P(i,r,undefined),n!==undefined)return n}else this.each(function(){var n=L.get(this,r);L.set(this,r,t),-1!==e.indexOf("-")&&n!==undefined&&L.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){L.remove(this,e)})}});function P(e,t,n){var r;if(n===undefined&&1===e.nodeType)if(r="data-"+t.replace(O,"-$1").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:H.test(n)?JSON.parse(n):n}catch(i){}L.set(e,t,n)}else n=undefined;return n}x.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=q.get(e,t),n&&(!r||x.isArray(n)?r=q.access(e,t,x.makeArray(n)):r.push(n)),r||[]):undefined},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),s=function(){x.dequeue(e,t)
};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,s,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return q.get(e,n)||q.access(e,n,{empty:x.Callbacks("once memory").add(function(){q.remove(e,[t+"queue",n])})})}}),x.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),n>arguments.length?x.queue(this[0],e):t===undefined?this:this.each(function(){var n=x.queue(this,e,t);x._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=x.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=undefined),e=e||"fx";while(s--)n=q.get(o[s],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var R,M,W=/[\t\r\n\f]/g,$=/\r/g,B=/^(?:input|select|textarea|button)$/i;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[x.propFix[e]||e]})},addClass:function(e){var t,n,r,i,o,s=0,a=this.length,u="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,s=0,a=this.length,u=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,i=0,o=x(this),s=e.match(w)||[];while(t=s[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===r||"boolean"===n)&&(this.className&&q.set(this,"__className__",this.className),this.className=this.className||e===!1?"":q.get(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(W," ").indexOf(t)>=0)return!0;return!1},val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=x.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,x(this).val()):e,null==i?i="":"number"==typeof i?i+="":x.isArray(i)&&(i=x.map(i,function(e){return null==e?"":e+""})),t=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&t.set(this,i,"value")!==undefined||(this.value=i))});if(i)return t=x.valHooks[i.type]||x.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&(n=t.get(i,"value"))!==undefined?n:(n=i.value,"string"==typeof n?n.replace($,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,s=o?null:[],a=o?i+1:r.length,u=0>i?a:o?i:0;for(;a>u;u++)if(n=r[u],!(!n.selected&&u!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),s=i.length;while(s--)r=i[s],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,t,n){var i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===r?x.prop(e,t,n):(1===s&&x.isXMLDoc(e)||(t=t.toLowerCase(),i=x.attrHooks[t]||(x.expr.match.bool.test(t)?M:R)),n===undefined?i&&"get"in i&&null!==(o=i.get(e,t))?o:(o=x.find.attr(e,t),null==o?undefined:o):null!==n?i&&"set"in i&&(o=i.set(e,n,t))!==undefined?o:(e.setAttribute(t,n+""),n):(x.removeAttr(e,t),undefined))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return o=1!==s||!x.isXMLDoc(e),o&&(t=x.propFix[t]||t,i=x.propHooks[t]),n!==undefined?i&&"set"in i&&(r=i.set(e,n,t))!==undefined?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||B.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),M={set:function(e,t,n){return t===!1?x.removeAttr(e,n):e.setAttribute(n,n),n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,t){var n=x.expr.attrHandle[t]||x.find.attr;x.expr.attrHandle[t]=function(e,t,r){var i=x.expr.attrHandle[t],o=r?undefined:(x.expr.attrHandle[t]=undefined)!=n(e,t,r)?t.toLowerCase():null;return x.expr.attrHandle[t]=i,o}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,t){return x.isArray(t)?e.checked=x.inArray(x(e).val(),t)>=0:undefined}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var I=/^key/,z=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,X=/^([^.]*)(?:\.(.+)|)$/;function U(){return!0}function Y(){return!1}function V(){try{return o.activeElement}catch(e){}}x.event={global:{},add:function(e,t,n,i,o){var s,a,u,l,c,p,f,h,d,g,m,y=q.get(e);if(y){n.handler&&(s=n,n=s.handler,o=s.selector),n.guid||(n.guid=x.guid++),(l=y.events)||(l=y.events={}),(a=y.handle)||(a=y.handle=function(e){return typeof x===r||e&&x.event.triggered===e.type?undefined:x.event.dispatch.apply(a.elem,arguments)},a.elem=e),t=(t||"").match(w)||[""],c=t.length;while(c--)u=X.exec(t[c])||[],d=m=u[1],g=(u[2]||"").split(".").sort(),d&&(f=x.event.special[d]||{},d=(o?f.delegateType:f.bindType)||d,f=x.event.special[d]||{},p=x.extend({type:d,origType:m,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&x.expr.match.needsContext.test(o),namespace:g.join(".")},s),(h=l[d])||(h=l[d]=[],h.delegateCount=0,f.setup&&f.setup.call(e,i,g,a)!==!1||e.addEventListener&&e.addEventListener(d,a,!1)),f.add&&(f.add.call(e,p),p.handler.guid||(p.handler.guid=n.guid)),o?h.splice(h.delegateCount++,0,p):h.push(p),x.event.global[d]=!0);e=null}},remove:function(e,t,n,r,i){var o,s,a,u,l,c,p,f,h,d,g,m=q.hasData(e)&&q.get(e);if(m&&(u=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(a=X.exec(t[l])||[],h=g=a[1],d=(a[2]||"").split(".").sort(),h){p=x.event.special[h]||{},h=(r?p.delegateType:p.bindType)||h,f=u[h]||[],a=a[2]&&RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=f.length;while(o--)c=f[o],!i&&g!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(f.splice(o,1),c.selector&&f.delegateCount--,p.remove&&p.remove.call(e,c));s&&!f.length&&(p.teardown&&p.teardown.call(e,d,m.handle)!==!1||x.removeEvent(e,h,m.handle),delete u[h])}else for(h in u)x.event.remove(e,h+t[l],n,r,!0);x.isEmptyObject(u)&&(delete m.handle,q.remove(e,"events"))}},trigger:function(t,n,r,i){var s,a,u,l,c,p,f,h=[r||o],d=y.call(t,"type")?t.type:t,g=y.call(t,"namespace")?t.namespace.split("."):[];if(a=u=r=r||o,3!==r.nodeType&&8!==r.nodeType&&!_.test(d+x.event.triggered)&&(d.indexOf(".")>=0&&(g=d.split("."),d=g.shift(),g.sort()),c=0>d.indexOf(":")&&"on"+d,t=t[x.expando]?t:new x.Event(d,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=g.join("."),t.namespace_re=t.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=undefined,t.target||(t.target=r),n=null==n?[t]:x.makeArray(n,[t]),f=x.event.special[d]||{},i||!f.trigger||f.trigger.apply(r,n)!==!1)){if(!i&&!f.noBubble&&!x.isWindow(r)){for(l=f.delegateType||d,_.test(l+d)||(a=a.parentNode);a;a=a.parentNode)h.push(a),u=a;u===(r.ownerDocument||o)&&h.push(u.defaultView||u.parentWindow||e)}s=0;while((a=h[s++])&&!t.isPropagationStopped())t.type=s>1?l:f.bindType||d,p=(q.get(a,"events")||{})[t.type]&&q.get(a,"handle"),p&&p.apply(a,n),p=c&&a[c],p&&x.acceptData(a)&&p.apply&&p.apply(a,n)===!1&&t.preventDefault();return t.type=d,i||t.isDefaultPrevented()||f._default&&f._default.apply(h.pop(),n)!==!1||!x.acceptData(r)||c&&x.isFunction(r[d])&&!x.isWindow(r)&&(u=r[c],u&&(r[c]=null),x.event.triggered=d,r[d](),x.event.triggered=undefined,u&&(r[c]=u)),t.result}},dispatch:function(e){e=x.event.fix(e);var t,n,r,i,o,s=[],a=d.call(arguments),u=(q.get(this,"events")||{})[e.type]||[],l=x.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),t=0;while((i=s[t++])&&!e.isPropagationStopped()){e.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(o.namespace))&&(e.handleObj=o,e.data=o.data,r=((x.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a),r!==undefined&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,s=[],a=t.delegateCount,u=e.target;if(a&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!==this;u=u.parentNode||this)if(u.disabled!==!0||"click"!==e.type){for(r=[],n=0;a>n;n++)o=t[n],i=o.selector+" ",r[i]===undefined&&(r[i]=o.needsContext?x(i,this).index(u)>=0:x.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&s.push({elem:u,handlers:r})}return t.length>a&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,s=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||o,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||s===undefined||(e.which=1&s?1:2&s?3:4&s?2:0),e}},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,s=e,a=this.fixHooks[i];a||(this.fixHooks[i]=a=z.test(i)?this.mouseHooks:I.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new x.Event(s),t=r.length;while(t--)n=r[t],e[n]=s[n];return e.target||(e.target=o),3===e.target.nodeType&&(e.target=e.target.parentNode),a.filter?a.filter(e,s):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==V()&&this.focus?(this.focus(),!1):undefined},delegateType:"focusin"},blur:{trigger:function(){return this===V()&&this.blur?(this.blur(),!1):undefined},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&x.nodeName(this,"input")?(this.click(),!1):undefined},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==undefined&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},x.Event=function(e,t){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.getPreventDefault&&e.getPreventDefault()?U:Y):this.type=e,t&&x.extend(this,t),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,undefined):new x.Event(e,t)},x.Event.prototype={isDefaultPrevented:Y,isPropagationStopped:Y,isImmediatePropagationStopped:Y,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=U,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=U,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=U,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,t,n,r,i){var o,s;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=undefined);for(s in e)this.on(s,t,n,e[s],i);return this}if(null==n&&null==r?(r=t,n=t=undefined):null==r&&("string"==typeof t?(r=n,n=undefined):(r=n,n=t,t=undefined)),r===!1)r=Y;else if(!r)return this;return 1===i&&(o=r,r=function(e){return x().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=x.guid++)),this.each(function(){x.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,x(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=undefined),n===!1&&(n=Y),this.each(function(){x.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?x.event.trigger(e,t,n,!0):undefined}});var G=/^.[^:#\[\.,]*$/,J=/^(?:parents|prev(?:Until|All))/,Q=x.expr.match.needsContext,K={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t=x(e,this),n=t.length;return this.filter(function(){var e=0;for(;n>e;e++)if(x.contains(this,t[e]))return!0})},not:function(e){return this.pushStack(et(this,e||[],!0))},filter:function(e){return this.pushStack(et(this,e||[],!1))},is:function(e){return!!et(this,"string"==typeof e&&Q.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],s=Q.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(s?s.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?g.call(x(e),this[0]):g.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function Z(e,t){while((e=e[t])&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return Z(e,"nextSibling")},prev:function(e){return Z(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return e.contentDocument||x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(K[e]||x.unique(i),J.test(e)&&i.reverse()),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,t,n){var r=[],i=n!==undefined;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&x(e).is(n))break;r.push(e)}return r},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function et(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(G.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return g.call(t,e)>=0!==n})}var tt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,nt=/<([\w:]+)/,rt=/<|&#?\w+;/,it=/<(?:script|style|link)/i,ot=/^(?:checkbox|radio)$/i,st=/checked\s*(?:[^=]|=\s*.checked.)/i,at=/^$|\/(?:java|ecma)script/i,ut=/^true\/(.*)/,lt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ct={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ct.optgroup=ct.option,ct.tbody=ct.tfoot=ct.colgroup=ct.caption=ct.thead,ct.th=ct.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===undefined?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(mt(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&dt(mt(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++)1===e.nodeType&&(x.cleanData(mt(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var t=this[0]||{},n=0,r=this.length;if(e===undefined&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!it.test(e)&&!ct[(nt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(tt,"<$1></$2>");try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(x.cleanData(mt(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=f.apply([],e);var r,i,o,s,a,u,l=0,c=this.length,p=this,h=c-1,d=e[0],g=x.isFunction(d);if(g||!(1>=c||"string"!=typeof d||x.support.checkClone)&&st.test(d))return this.each(function(r){var i=p.eq(r);g&&(e[0]=d.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(r=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),i=r.firstChild,1===r.childNodes.length&&(r=i),i)){for(o=x.map(mt(r,"script"),ft),s=o.length;c>l;l++)a=r,l!==h&&(a=x.clone(a,!0,!0),s&&x.merge(o,mt(a,"script"))),t.call(this[l],a,l);if(s)for(u=o[o.length-1].ownerDocument,x.map(o,ht),l=0;s>l;l++)a=o[l],at.test(a.type||"")&&!q.access(a,"globalEval")&&x.contains(u,a)&&(a.src?x._evalUrl(a.src):x.globalEval(a.textContent.replace(lt,"")))}return this}}),x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=[],i=x(e),o=i.length-1,s=0;for(;o>=s;s++)n=s===o?this:this.clone(!0),x(i[s])[t](n),h.apply(r,n.get());return this.pushStack(r)}}),x.extend({clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),u=x.contains(e.ownerDocument,e);if(!(x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(s=mt(a),o=mt(e),r=0,i=o.length;i>r;r++)yt(o[r],s[r]);if(t)if(n)for(o=o||mt(e),s=s||mt(a),r=0,i=o.length;i>r;r++)gt(o[r],s[r]);else gt(e,a);return s=mt(a,"script"),s.length>0&&dt(s,!u&&mt(e,"script")),a},buildFragment:function(e,t,n,r){var i,o,s,a,u,l,c=0,p=e.length,f=t.createDocumentFragment(),h=[];for(;p>c;c++)if(i=e[c],i||0===i)if("object"===x.type(i))x.merge(h,i.nodeType?[i]:i);else if(rt.test(i)){o=o||f.appendChild(t.createElement("div")),s=(nt.exec(i)||["",""])[1].toLowerCase(),a=ct[s]||ct._default,o.innerHTML=a[1]+i.replace(tt,"<$1></$2>")+a[2],l=a[0];while(l--)o=o.lastChild;x.merge(h,o.childNodes),o=f.firstChild,o.textContent=""}else h.push(t.createTextNode(i));f.textContent="",c=0;while(i=h[c++])if((!r||-1===x.inArray(i,r))&&(u=x.contains(i.ownerDocument,i),o=mt(f.appendChild(i),"script"),u&&dt(o),n)){l=0;while(i=o[l++])at.test(i.type||"")&&n.push(i)}return f},cleanData:function(e){var t,n,r,i,o,s,a=x.event.special,u=0;for(;(n=e[u])!==undefined;u++){if(F.accepts(n)&&(o=n[q.expando],o&&(t=q.cache[o]))){if(r=Object.keys(t.events||{}),r.length)for(s=0;(i=r[s])!==undefined;s++)a[i]?x.event.remove(n,i):x.removeEvent(n,i,t.handle);q.cache[o]&&delete q.cache[o]}delete L.cache[n[L.expando]]}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}});function pt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function ft(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function ht(e){var t=ut.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function dt(e,t){var n=e.length,r=0;for(;n>r;r++)q.set(e[r],"globalEval",!t||q.get(t[r],"globalEval"))}function gt(e,t){var n,r,i,o,s,a,u,l;if(1===t.nodeType){if(q.hasData(e)&&(o=q.access(e),s=q.set(t,o),l=o.events)){delete s.handle,s.events={};for(i in l)for(n=0,r=l[i].length;r>n;n++)x.event.add(t,i,l[i][n])}L.hasData(e)&&(a=L.access(e),u=x.extend({},a),L.set(t,u))}}function mt(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return t===undefined||t&&x.nodeName(e,t)?x.merge([e],n):n}function yt(e,t){var n=t.nodeName.toLowerCase();"input"===n&&ot.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}x.fn.extend({wrapAll:function(e){var t;return x.isFunction(e)?this.each(function(t){x(this).wrapAll(e.call(this,t))}):(this[0]&&(t=x(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var vt,xt,bt=/^(none|table(?!-c[ea]).+)/,wt=/^margin/,Tt=RegExp("^("+b+")(.*)$","i"),Ct=RegExp("^("+b+")(?!px)[a-z%]+$","i"),kt=RegExp("^([+-])=("+b+")","i"),Nt={BODY:"block"},Et={position:"absolute",visibility:"hidden",display:"block"},St={letterSpacing:0,fontWeight:400},jt=["Top","Right","Bottom","Left"],Dt=["Webkit","O","Moz","ms"];function At(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Dt.length;while(i--)if(t=Dt[i]+n,t in e)return t;return r}function Lt(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function qt(t){return e.getComputedStyle(t,null)}function Ht(e,t){var n,r,i,o=[],s=0,a=e.length;for(;a>s;s++)r=e[s],r.style&&(o[s]=q.get(r,"olddisplay"),n=r.style.display,t?(o[s]||"none"!==n||(r.style.display=""),""===r.style.display&&Lt(r)&&(o[s]=q.access(r,"olddisplay",Rt(r.nodeName)))):o[s]||(i=Lt(r),(n&&"none"!==n||!i)&&q.set(r,"olddisplay",i?n:x.css(r,"display"))));for(s=0;a>s;s++)r=e[s],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[s]||"":"none"));return e}x.fn.extend({css:function(e,t){return x.access(this,function(e,t,n){var r,i,o={},s=0;if(x.isArray(t)){for(r=qt(e),i=t.length;i>s;s++)o[t[s]]=x.css(e,t[s],!1,r);return o}return n!==undefined?x.style(e,t,n):x.css(e,t)},e,t,arguments.length>1)},show:function(){return Ht(this,!0)},hide:function(){return Ht(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Lt(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=vt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=x.camelCase(t),u=e.style;return t=x.cssProps[a]||(x.cssProps[a]=At(u,a)),s=x.cssHooks[t]||x.cssHooks[a],n===undefined?s&&"get"in s&&(i=s.get(e,!1,r))!==undefined?i:u[t]:(o=typeof n,"string"===o&&(i=kt.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(x.css(e,t)),o="number"),null==n||"number"===o&&isNaN(n)||("number"!==o||x.cssNumber[a]||(n+="px"),x.support.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),s&&"set"in s&&(n=s.set(e,n,r))===undefined||(u[t]=n)),undefined)}},css:function(e,t,n,r){var i,o,s,a=x.camelCase(t);return t=x.cssProps[a]||(x.cssProps[a]=At(e.style,a)),s=x.cssHooks[t]||x.cssHooks[a],s&&"get"in s&&(i=s.get(e,!0,n)),i===undefined&&(i=vt(e,t,r)),"normal"===i&&t in St&&(i=St[t]),""===n||n?(o=parseFloat(i),n===!0||x.isNumeric(o)?o||0:i):i}}),vt=function(e,t,n){var r,i,o,s=n||qt(e),a=s?s.getPropertyValue(t)||s[t]:undefined,u=e.style;return s&&(""!==a||x.contains(e.ownerDocument,e)||(a=x.style(e,t)),Ct.test(a)&&wt.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=s.width,u.width=r,u.minWidth=i,u.maxWidth=o)),a};function Ot(e,t,n){var r=Tt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function Ft(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,s=0;for(;4>o;o+=2)"margin"===n&&(s+=x.css(e,n+jt[o],!0,i)),r?("content"===n&&(s-=x.css(e,"padding"+jt[o],!0,i)),"margin"!==n&&(s-=x.css(e,"border"+jt[o]+"Width",!0,i))):(s+=x.css(e,"padding"+jt[o],!0,i),"padding"!==n&&(s+=x.css(e,"border"+jt[o]+"Width",!0,i)));return s}function Pt(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=qt(e),s=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=vt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Ct.test(i))return i;r=s&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+Ft(e,t,n||(s?"border":"content"),r,o)+"px"}function Rt(e){var t=o,n=Nt[e];return n||(n=Mt(e,t),"none"!==n&&n||(xt=(xt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(xt[0].contentWindow||xt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=Mt(e,t),xt.detach()),Nt[e]=n),n}function Mt(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,t){x.cssHooks[t]={get:function(e,n,r){return n?0===e.offsetWidth&&bt.test(x.css(e,"display"))?x.swap(e,Et,function(){return Pt(e,t,r)}):Pt(e,t,r):undefined},set:function(e,n,r){var i=r&&qt(e);return Ot(e,n,r?Ft(e,t,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,t){return t?x.swap(e,{display:"inline-block"},vt,[e,"marginRight"]):undefined}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,t){x.cssHooks[t]={get:function(e,n){return n?(n=vt(e,t),Ct.test(n)?x(e).position()[t]+"px":n):undefined}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+jt[r]+t]=o[r]||o[r-2]||o[0];return i}},wt.test(e)||(x.cssHooks[e+t].set=Ot)});var Wt=/%20/g,$t=/\[\]$/,Bt=/\r?\n/g,It=/^(?:submit|button|image|reset|file)$/i,zt=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&zt.test(this.nodeName)&&!It.test(e)&&(this.checked||!ot.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(Bt,"\r\n")}}):{name:t.name,value:n.replace(Bt,"\r\n")}}).get()}}),x.param=function(e,t){var n,r=[],i=function(e,t){t=x.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(t===undefined&&(t=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){i(this.name,this.value)});else for(n in e)_t(n,e[n],t,i);return r.join("&").replace(Wt,"+")};function _t(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||$t.test(e)?r(e,i):_t(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)_t(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)
},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var Xt,Ut,Yt=x.now(),Vt=/\?/,Gt=/#.*$/,Jt=/([?&])_=[^&]*/,Qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Kt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Zt=/^(?:GET|HEAD)$/,en=/^\/\//,tn=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,nn=x.fn.load,rn={},on={},sn="*/".concat("*");try{Ut=i.href}catch(an){Ut=o.createElement("a"),Ut.href="",Ut=Ut.href}Xt=tn.exec(Ut.toLowerCase())||[];function un(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function ln(e,t,n,r){var i={},o=e===on;function s(a){var u;return i[a]=!0,x.each(e[a]||[],function(e,a){var l=a(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):undefined:(t.dataTypes.unshift(l),s(l),!1)}),u}return s(t.dataTypes[0])||!i["*"]&&s("*")}function cn(e,t){var n,r,i=x.ajaxSettings.flatOptions||{};for(n in t)t[n]!==undefined&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,t,n){if("string"!=typeof e&&nn)return nn.apply(this,arguments);var r,i,o,s=this,a=e.indexOf(" ");return a>=0&&(r=e.slice(a),e=e.slice(0,a)),x.isFunction(t)?(n=t,t=undefined):t&&"object"==typeof t&&(i="POST"),s.length>0&&x.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){o=arguments,s.html(r?x("<div>").append(x.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){s.each(n,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ut,type:"GET",isLocal:Kt.test(Xt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":sn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?cn(cn(e,x.ajaxSettings),t):cn(x.ajaxSettings,e)},ajaxPrefilter:un(rn),ajaxTransport:un(on),ajax:function(e,t){"object"==typeof e&&(t=e,e=undefined),t=t||{};var n,r,i,o,s,a,u,l,c=x.ajaxSetup({},t),p=c.context||c,f=c.context&&(p.nodeType||p.jquery)?x(p):x.event,h=x.Deferred(),d=x.Callbacks("once memory"),g=c.statusCode||{},m={},y={},v=0,b="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(2===v){if(!o){o={};while(t=Qt.exec(i))o[t[1].toLowerCase()]=t[2]}t=o[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===v?i:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return v||(e=y[n]=y[n]||e,m[e]=t),this},overrideMimeType:function(e){return v||(c.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>v)for(t in e)g[t]=[g[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||b;return n&&n.abort(t),k(0,t),this}};if(h.promise(T).complete=d.add,T.success=T.done,T.error=T.fail,c.url=((e||c.url||Ut)+"").replace(Gt,"").replace(en,Xt[1]+"//"),c.type=t.method||t.type||c.method||c.type,c.dataTypes=x.trim(c.dataType||"*").toLowerCase().match(w)||[""],null==c.crossDomain&&(a=tn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===Xt[1]&&a[2]===Xt[2]&&(a[3]||("http:"===a[1]?"80":"443"))===(Xt[3]||("http:"===Xt[1]?"80":"443")))),c.data&&c.processData&&"string"!=typeof c.data&&(c.data=x.param(c.data,c.traditional)),ln(rn,c,t,T),2===v)return T;u=c.global,u&&0===x.active++&&x.event.trigger("ajaxStart"),c.type=c.type.toUpperCase(),c.hasContent=!Zt.test(c.type),r=c.url,c.hasContent||(c.data&&(r=c.url+=(Vt.test(r)?"&":"?")+c.data,delete c.data),c.cache===!1&&(c.url=Jt.test(r)?r.replace(Jt,"$1_="+Yt++):r+(Vt.test(r)?"&":"?")+"_="+Yt++)),c.ifModified&&(x.lastModified[r]&&T.setRequestHeader("If-Modified-Since",x.lastModified[r]),x.etag[r]&&T.setRequestHeader("If-None-Match",x.etag[r])),(c.data&&c.hasContent&&c.contentType!==!1||t.contentType)&&T.setRequestHeader("Content-Type",c.contentType),T.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+("*"!==c.dataTypes[0]?", "+sn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)T.setRequestHeader(l,c.headers[l]);if(c.beforeSend&&(c.beforeSend.call(p,T,c)===!1||2===v))return T.abort();b="abort";for(l in{success:1,error:1,complete:1})T[l](c[l]);if(n=ln(on,c,t,T)){T.readyState=1,u&&f.trigger("ajaxSend",[T,c]),c.async&&c.timeout>0&&(s=setTimeout(function(){T.abort("timeout")},c.timeout));try{v=1,n.send(m,k)}catch(C){if(!(2>v))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,t,o,a){var l,m,y,b,w,C=t;2!==v&&(v=2,s&&clearTimeout(s),n=undefined,i=a||"",T.readyState=e>0?4:0,l=e>=200&&300>e||304===e,o&&(b=pn(c,T,o)),b=fn(c,b,T,l),l?(c.ifModified&&(w=T.getResponseHeader("Last-Modified"),w&&(x.lastModified[r]=w),w=T.getResponseHeader("etag"),w&&(x.etag[r]=w)),204===e||"HEAD"===c.type?C="nocontent":304===e?C="notmodified":(C=b.state,m=b.data,y=b.error,l=!y)):(y=C,(e||!C)&&(C="error",0>e&&(e=0))),T.status=e,T.statusText=(t||C)+"",l?h.resolveWith(p,[m,C,T]):h.rejectWith(p,[T,C,y]),T.statusCode(g),g=undefined,u&&f.trigger(l?"ajaxSuccess":"ajaxError",[T,c,l?m:y]),d.fireWith(p,[T,C]),u&&(f.trigger("ajaxComplete",[T,c]),--x.active||x.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,t){return x.get(e,undefined,t,"script")}}),x.each(["get","post"],function(e,t){x[t]=function(e,n,r,i){return x.isFunction(n)&&(i=i||r,r=n,n=undefined),x.ajax({url:e,type:t,dataType:i,data:n,success:r})}});function pn(e,t,n){var r,i,o,s,a=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),r===undefined&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}s||(s=i)}o=o||s}return o?(o!==u[0]&&u.unshift(o),n[o]):undefined}function fn(e,t,n,r){var i,o,s,a,u,l={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(s=l[u+" "+o]||l["* "+o],!s)for(i in l)if(a=i.split(" "),a[1]===o&&(s=l[u+" "+a[0]]||l["* "+a[0]])){s===!0?s=l[i]:l[i]!==!0&&(o=a[0],c.unshift(a[1]));break}if(s!==!0)if(s&&e["throws"])t=s(t);else try{t=s(t)}catch(p){return{state:"parsererror",error:s?p:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===undefined&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),x.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=x("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),o.head.appendChild(t[0])},abort:function(){n&&n()}}}});var hn=[],dn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=hn.pop()||x.expando+"_"+Yt++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,s,a=t.jsonp!==!1&&(dn.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&dn.test(t.data)&&"data");return a||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=x.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(dn,"$1"+i):t.jsonp!==!1&&(t.url+=(Vt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return s||x.error(i+" was not called"),s[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){s=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,hn.push(i)),s&&x.isFunction(o)&&o(s[0]),s=o=undefined}),"script"):undefined}),x.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var gn=x.ajaxSettings.xhr(),mn={0:200,1223:204},yn=0,vn={};e.ActiveXObject&&x(e).on("unload",function(){for(var e in vn)vn[e]();vn=undefined}),x.support.cors=!!gn&&"withCredentials"in gn,x.support.ajax=gn=!!gn,x.ajaxTransport(function(e){var t;return x.support.cors||gn&&!e.crossDomain?{send:function(n,r){var i,o,s=e.xhr();if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)s[i]=e.xhrFields[i];e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)s.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(delete vn[o],t=s.onload=s.onerror=null,"abort"===e?s.abort():"error"===e?r(s.status||404,s.statusText):r(mn[s.status]||s.status,s.statusText,"string"==typeof s.responseText?{text:s.responseText}:undefined,s.getAllResponseHeaders()))}},s.onload=t(),s.onerror=t("error"),t=vn[o=yn++]=t("abort"),s.send(e.hasContent&&e.data||null)},abort:function(){t&&t()}}:undefined});var xn,bn,wn=/^(?:toggle|show|hide)$/,Tn=RegExp("^(?:([+-])=|)("+b+")([a-z%]*)$","i"),Cn=/queueHooks$/,kn=[An],Nn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Tn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),s=(x.cssNumber[e]||"px"!==o&&+r)&&Tn.exec(x.css(n.elem,e)),a=1,u=20;if(s&&s[3]!==o){o=o||s[3],i=i||[],s=+r||1;do a=a||".5",s/=a,x.style(n.elem,e,s+o);while(a!==(a=n.cur()/r)&&1!==a&&--u)}return i&&(s=n.start=+s||+r||0,n.unit=o,n.end=i[1]?s+(i[1]+1)*i[2]:+i[2]),n}]};function En(){return setTimeout(function(){xn=undefined}),xn=x.now()}function Sn(e,t,n){var r,i=(Nn[t]||[]).concat(Nn["*"]),o=0,s=i.length;for(;s>o;o++)if(r=i[o].call(n,t,e))return r}function jn(e,t,n){var r,i,o=0,s=kn.length,a=x.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=xn||En(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,s=0,u=l.tweens.length;for(;u>s;s++)l.tweens[s].run(o);return a.notifyWith(e,[l,o,n]),1>o&&u?n:(a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:xn||En(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?a.resolveWith(e,[l,t]):a.rejectWith(e,[l,t]),this}}),c=l.props;for(Dn(c,l.opts.specialEasing);s>o;o++)if(r=kn[o].call(l,e,c,l.opts))return r;return x.map(c,Sn,l),x.isFunction(l.opts.start)&&l.opts.start.call(e,l),x.fx.timer(x.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function Dn(e,t){var n,r,i,o,s;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),s=x.cssHooks[r],s&&"expand"in s){o=s.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(jn,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Nn[n]=Nn[n]||[],Nn[n].unshift(t)},prefilter:function(e,t){t?kn.unshift(e):kn.push(e)}});function An(e,t,n){var r,i,o,s,a,u,l=this,c={},p=e.style,f=e.nodeType&&Lt(e),h=q.get(e,"fxshow");n.queue||(a=x._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,u=a.empty.fire,a.empty.fire=function(){a.unqueued||u()}),a.unqueued++,l.always(function(){l.always(function(){a.unqueued--,x.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(p.display="inline-block")),n.overflow&&(p.overflow="hidden",l.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],wn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show")){if("show"!==i||!h||h[r]===undefined)continue;f=!0}c[r]=h&&h[r]||x.style(e,r)}if(!x.isEmptyObject(c)){h?"hidden"in h&&(f=h.hidden):h=q.access(e,"fxshow",{}),o&&(h.hidden=!f),f?x(e).show():l.done(function(){x(e).hide()}),l.done(function(){var t;q.remove(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)s=Sn(f?h[r]:0,r,l),r in h||(h[r]=s.start,f&&(s.end=s.start,s.start="width"===r||"height"===r?1:0))}}function Ln(e,t,n,r,i){return new Ln.prototype.init(e,t,n,r,i)}x.Tween=Ln,Ln.prototype={constructor:Ln,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=Ln.propHooks[this.prop];return e&&e.get?e.get(this):Ln.propHooks._default.get(this)},run:function(e){var t,n=Ln.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ln.propHooks._default.set(this),this}},Ln.prototype.init.prototype=Ln.prototype,Ln.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Ln.propHooks.scrollTop=Ln.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(qn(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Lt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),s=function(){var t=jn(this,x.extend({},e),o);(i||q.get(this,"finish"))&&t.stop(!0)};return s.finish=s,i||o.queue===!1?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=undefined),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=x.timers,s=q.get(this);if(i)s[i]&&s[i].stop&&r(s[i]);else for(i in s)s[i]&&s[i].stop&&Cn.test(i)&&r(s[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=q.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,s=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;s>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function qn(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=jt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:qn("show"),slideUp:qn("hide"),slideToggle:qn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=Ln.prototype.init,x.fx.tick=function(){var e,t=x.timers,n=0;for(xn=x.now();t.length>n;n++)e=t[n],e()||t[n]!==e||t.splice(n--,1);t.length||x.fx.stop(),xn=undefined},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){bn||(bn=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(bn),bn=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===undefined?this:this.each(function(t){x.offset.setOffset(this,e,t)});var t,n,i=this[0],o={top:0,left:0},s=i&&i.ownerDocument;if(s)return t=s.documentElement,x.contains(t,i)?(typeof i.getBoundingClientRect!==r&&(o=i.getBoundingClientRect()),n=Hn(s),{top:o.top+n.pageYOffset-t.clientTop,left:o.left+n.pageXOffset-t.clientLeft}):o},x.offset={setOffset:function(e,t,n){var r,i,o,s,a,u,l,c=x.css(e,"position"),p=x(e),f={};"static"===c&&(e.style.position="relative"),a=p.offset(),o=x.css(e,"top"),u=x.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1,l?(r=p.position(),s=r.top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(u)||0),x.isFunction(t)&&(t=t.call(e,n,a)),null!=t.top&&(f.top=t.top-a.top+s),null!=t.left&&(f.left=t.left-a.left+i),"using"in t?t.using.call(e,f):p.css(f)}},x.fn.extend({position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===x.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(r=e.offset()),r.top+=x.css(e[0],"borderTopWidth",!0),r.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-x.css(n,"marginTop",!0),left:t.left-r.left-x.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var r="pageYOffset"===n;x.fn[t]=function(i){return x.access(this,function(t,i,o){var s=Hn(t);return o===undefined?s?s[n]:t[i]:(s?s.scrollTo(r?e.pageXOffset:o,r?o:e.pageYOffset):t[i]=o,undefined)},t,i,arguments.length,null)}});function Hn(e){return x.isWindow(e)?e:9===e.nodeType&&e.defaultView}x.each({Height:"height",Width:"width"},function(e,t){x.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){x.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),s=n||(r===!0||i===!0?"margin":"border");return x.access(this,function(t,n,r){var i;return x.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):r===undefined?x.css(t,n,s):x.style(t,n,r,s)},t,o?r:undefined,o,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}),"object"==typeof e&&"object"==typeof e.document&&(e.jQuery=e.$=x)})(window);

;//     Underscore.js 1.5.2
//     http://underscorejs.org
//     (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,g=e.filter,d=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,w=Object.keys,_=i.bind,j=function(n){return n instanceof j?n:this instanceof j?(this._wrapped=n,void 0):new j(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=j),exports._=j):n._=j,j.VERSION="1.5.2";var A=j.each=j.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a=j.keys(n),u=0,i=a.length;i>u;u++)if(t.call(e,n[a[u]],a[u],n)===r)return};j.map=j.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e.push(t.call(r,n,u,i))}),e)};var E="Reduce of empty array with no initial value";j.reduce=j.foldl=j.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=j.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(E);return r},j.reduceRight=j.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=j.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=j.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(E);return r},j.find=j.detect=function(n,t,r){var e;return O(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},j.filter=j.select=function(n,t,r){var e=[];return null==n?e:g&&n.filter===g?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&e.push(n)}),e)},j.reject=function(n,t,r){return j.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},j.every=j.all=function(n,t,e){t||(t=j.identity);var u=!0;return null==n?u:d&&n.every===d?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var O=j.some=j.any=function(n,t,e){t||(t=j.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};j.contains=j.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:O(n,function(n){return n===t})},j.invoke=function(n,t){var r=o.call(arguments,2),e=j.isFunction(t);return j.map(n,function(n){return(e?t:n[t]).apply(n,r)})},j.pluck=function(n,t){return j.map(n,function(n){return n[t]})},j.where=function(n,t,r){return j.isEmpty(t)?r?void 0:[]:j[r?"find":"filter"](n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},j.findWhere=function(n,t){return j.where(n,t,!0)},j.max=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.max.apply(Math,n);if(!t&&j.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>e.computed&&(e={value:n,computed:a})}),e.value},j.min=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.min.apply(Math,n);if(!t&&j.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a<e.computed&&(e={value:n,computed:a})}),e.value},j.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=j.random(r++),e[r-1]=e[t],e[t]=n}),e},j.sample=function(n,t,r){return arguments.length<2||r?n[j.random(n.length-1)]:j.shuffle(n).slice(0,Math.max(0,t))};var k=function(n){return j.isFunction(n)?n:function(t){return t[n]}};j.sortBy=function(n,t,r){var e=k(t);return j.pluck(j.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={},i=null==r?j.identity:k(r);return A(t,function(r,a){var o=i.call(e,r,a,t);n(u,o,r)}),u}};j.groupBy=F(function(n,t,r){(j.has(n,t)?n[t]:n[t]=[]).push(r)}),j.indexBy=F(function(n,t,r){n[t]=r}),j.countBy=F(function(n,t){j.has(n,t)?n[t]++:n[t]=1}),j.sortedIndex=function(n,t,r,e){r=null==r?j.identity:k(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;r.call(e,n[o])<u?i=o+1:a=o}return i},j.toArray=function(n){return n?j.isArray(n)?o.call(n):n.length===+n.length?j.map(n,j.identity):j.values(n):[]},j.size=function(n){return null==n?0:n.length===+n.length?n.length:j.keys(n).length},j.first=j.head=j.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},j.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},j.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},j.rest=j.tail=j.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},j.compact=function(n){return j.filter(n,j.identity)};var M=function(n,t,r){return t&&j.every(n,j.isArray)?c.apply(r,n):(A(n,function(n){j.isArray(n)||j.isArguments(n)?t?a.apply(r,n):M(n,t,r):r.push(n)}),r)};j.flatten=function(n,t){return M(n,t,[])},j.without=function(n){return j.difference(n,o.call(arguments,1))},j.uniq=j.unique=function(n,t,r,e){j.isFunction(t)&&(e=r,r=t,t=!1);var u=r?j.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:j.contains(a,r))||(a.push(r),i.push(n[e]))}),i},j.union=function(){return j.uniq(j.flatten(arguments,!0))},j.intersection=function(n){var t=o.call(arguments,1);return j.filter(j.uniq(n),function(n){return j.every(t,function(t){return j.indexOf(t,n)>=0})})},j.difference=function(n){var t=c.apply(e,o.call(arguments,1));return j.filter(n,function(n){return!j.contains(t,n)})},j.zip=function(){for(var n=j.max(j.pluck(arguments,"length").concat(0)),t=new Array(n),r=0;n>r;r++)t[r]=j.pluck(arguments,""+r);return t},j.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},j.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=j.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},j.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},j.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=new Array(e);e>u;)i[u++]=n,n+=r;return i};var R=function(){};j.bind=function(n,t){var r,e;if(_&&n.bind===_)return _.apply(n,o.call(arguments,1));if(!j.isFunction(n))throw new TypeError;return r=o.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(o.call(arguments)));R.prototype=n.prototype;var u=new R;R.prototype=null;var i=n.apply(u,r.concat(o.call(arguments)));return Object(i)===i?i:u}},j.partial=function(n){var t=o.call(arguments,1);return function(){return n.apply(this,t.concat(o.call(arguments)))}},j.bindAll=function(n){var t=o.call(arguments,1);if(0===t.length)throw new Error("bindAll must be passed function names");return A(t,function(t){n[t]=j.bind(n[t],n)}),n},j.memoize=function(n,t){var r={};return t||(t=j.identity),function(){var e=t.apply(this,arguments);return j.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},j.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},j.defer=function(n){return j.delay.apply(j,[n,1].concat(o.call(arguments,1)))},j.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var c=function(){o=r.leading===!1?0:new Date,a=null,i=n.apply(e,u)};return function(){var l=new Date;o||r.leading!==!1||(o=l);var f=t-(l-o);return e=this,u=arguments,0>=f?(clearTimeout(a),a=null,o=l,i=n.apply(e,u)):a||r.trailing===!1||(a=setTimeout(c,f)),i}},j.debounce=function(n,t,r){var e,u,i,a,o;return function(){i=this,u=arguments,a=new Date;var c=function(){var l=new Date-a;t>l?e=setTimeout(c,t-l):(e=null,r||(o=n.apply(i,u)))},l=r&&!e;return e||(e=setTimeout(c,t)),l&&(o=n.apply(i,u)),o}},j.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},j.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},j.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},j.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},j.keys=w||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)j.has(n,r)&&t.push(r);return t},j.values=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},j.pairs=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},j.invert=function(n){for(var t={},r=j.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},j.functions=j.methods=function(n){var t=[];for(var r in n)j.isFunction(n[r])&&t.push(r);return t.sort()},j.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},j.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},j.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)j.contains(r,u)||(t[u]=n[u]);return t},j.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]===void 0&&(n[r]=t[r])}),n},j.clone=function(n){return j.isObject(n)?j.isArray(n)?n.slice():j.extend({},n):n},j.tap=function(n,t){return t(n),n};var S=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof j&&(n=n._wrapped),t instanceof j&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==String(t);case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;var a=n.constructor,o=t.constructor;if(a!==o&&!(j.isFunction(a)&&a instanceof a&&j.isFunction(o)&&o instanceof o))return!1;r.push(n),e.push(t);var c=0,f=!0;if("[object Array]"==u){if(c=n.length,f=c==t.length)for(;c--&&(f=S(n[c],t[c],r,e)););}else{for(var s in n)if(j.has(n,s)&&(c++,!(f=j.has(t,s)&&S(n[s],t[s],r,e))))break;if(f){for(s in t)if(j.has(t,s)&&!c--)break;f=!c}}return r.pop(),e.pop(),f};j.isEqual=function(n,t){return S(n,t,[],[])},j.isEmpty=function(n){if(null==n)return!0;if(j.isArray(n)||j.isString(n))return 0===n.length;for(var t in n)if(j.has(n,t))return!1;return!0},j.isElement=function(n){return!(!n||1!==n.nodeType)},j.isArray=x||function(n){return"[object Array]"==l.call(n)},j.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){j["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),j.isArguments(arguments)||(j.isArguments=function(n){return!(!n||!j.has(n,"callee"))}),"function"!=typeof/./&&(j.isFunction=function(n){return"function"==typeof n}),j.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},j.isNaN=function(n){return j.isNumber(n)&&n!=+n},j.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},j.isNull=function(n){return null===n},j.isUndefined=function(n){return n===void 0},j.has=function(n,t){return f.call(n,t)},j.noConflict=function(){return n._=t,this},j.identity=function(n){return n},j.times=function(n,t,r){for(var e=Array(Math.max(0,n)),u=0;n>u;u++)e[u]=t.call(r,u);return e},j.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))};var I={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};I.unescape=j.invert(I.escape);var T={escape:new RegExp("["+j.keys(I.escape).join("")+"]","g"),unescape:new RegExp("("+j.keys(I.unescape).join("|")+")","g")};j.each(["escape","unescape"],function(n){j[n]=function(t){return null==t?"":(""+t).replace(T[n],function(t){return I[n][t]})}}),j.result=function(n,t){if(null==n)return void 0;var r=n[t];return j.isFunction(r)?r.call(n):r},j.mixin=function(n){A(j.functions(n),function(t){var r=j[t]=n[t];j.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),z.call(this,r.apply(j,n))}})};var N=0;j.uniqueId=function(n){var t=++N+"";return n?n+t:t},j.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var q=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\t|\u2028|\u2029/g;j.template=function(n,t,r){var e;r=j.defaults({},r,j.templateSettings);var u=new RegExp([(r.escape||q).source,(r.interpolate||q).source,(r.evaluate||q).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(D,function(n){return"\\"+B[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=new Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,j);var c=function(n){return e.call(this,n,j)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},j.chain=function(n){return j(n).chain()};var z=function(n){return this._chain?j(n).chain():n};j.mixin(j),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];j.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],z.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];j.prototype[n]=function(){return z.call(this,t.apply(this._wrapped,arguments))}}),j.extend(j.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);
//# sourceMappingURL=underscore-min.map
;(function(){var t=this;var e=t.Backbone;var i=[];var r=i.push;var s=i.slice;var n=i.splice;var a;if(typeof exports!=="undefined"){a=exports}else{a=t.Backbone={}}a.VERSION="1.0.0";var h=t._;if(!h&&typeof require!=="undefined")h=require("underscore");a.$=t.jQuery||t.Zepto||t.ender||t.$;a.noConflict=function(){t.Backbone=e;return this};a.emulateHTTP=false;a.emulateJSON=false;var o=a.Events={on:function(t,e,i){if(!l(this,"on",t,[e,i])||!e)return this;this._events||(this._events={});var r=this._events[t]||(this._events[t]=[]);r.push({callback:e,context:i,ctx:i||this});return this},once:function(t,e,i){if(!l(this,"once",t,[e,i])||!e)return this;var r=this;var s=h.once(function(){r.off(t,s);e.apply(this,arguments)});s._callback=e;return this.on(t,s,i)},off:function(t,e,i){var r,s,n,a,o,u,c,f;if(!this._events||!l(this,"off",t,[e,i]))return this;if(!t&&!e&&!i){this._events={};return this}a=t?[t]:h.keys(this._events);for(o=0,u=a.length;o<u;o++){t=a[o];if(n=this._events[t]){this._events[t]=r=[];if(e||i){for(c=0,f=n.length;c<f;c++){s=n[c];if(e&&e!==s.callback&&e!==s.callback._callback||i&&i!==s.context){r.push(s)}}}if(!r.length)delete this._events[t]}}return this},trigger:function(t){if(!this._events)return this;var e=s.call(arguments,1);if(!l(this,"trigger",t,e))return this;var i=this._events[t];var r=this._events.all;if(i)c(i,e);if(r)c(r,arguments);return this},stopListening:function(t,e,i){var r=this._listeners;if(!r)return this;var s=!e&&!i;if(typeof e==="object")i=this;if(t)(r={})[t._listenerId]=t;for(var n in r){r[n].off(e,i,this);if(s)delete this._listeners[n]}return this}};var u=/\s+/;var l=function(t,e,i,r){if(!i)return true;if(typeof i==="object"){for(var s in i){t[e].apply(t,[s,i[s]].concat(r))}return false}if(u.test(i)){var n=i.split(u);for(var a=0,h=n.length;a<h;a++){t[e].apply(t,[n[a]].concat(r))}return false}return true};var c=function(t,e){var i,r=-1,s=t.length,n=e[0],a=e[1],h=e[2];switch(e.length){case 0:while(++r<s)(i=t[r]).callback.call(i.ctx);return;case 1:while(++r<s)(i=t[r]).callback.call(i.ctx,n);return;case 2:while(++r<s)(i=t[r]).callback.call(i.ctx,n,a);return;case 3:while(++r<s)(i=t[r]).callback.call(i.ctx,n,a,h);return;default:while(++r<s)(i=t[r]).callback.apply(i.ctx,e)}};var f={listenTo:"on",listenToOnce:"once"};h.each(f,function(t,e){o[e]=function(e,i,r){var s=this._listeners||(this._listeners={});var n=e._listenerId||(e._listenerId=h.uniqueId("l"));s[n]=e;if(typeof i==="object")r=this;e[t](i,r,this);return this}});o.bind=o.on;o.unbind=o.off;h.extend(a,o);var d=a.Model=function(t,e){var i;var r=t||{};e||(e={});this.cid=h.uniqueId("c");this.attributes={};h.extend(this,h.pick(e,p));if(e.parse)r=this.parse(r,e)||{};if(i=h.result(this,"defaults")){r=h.defaults({},r,i)}this.set(r,e);this.changed={};this.initialize.apply(this,arguments)};var p=["url","urlRoot","collection"];h.extend(d.prototype,o,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(t){return h.clone(this.attributes)},sync:function(){return a.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return h.escape(this.get(t))},has:function(t){return this.get(t)!=null},set:function(t,e,i){var r,s,n,a,o,u,l,c;if(t==null)return this;if(typeof t==="object"){s=t;i=e}else{(s={})[t]=e}i||(i={});if(!this._validate(s,i))return false;n=i.unset;o=i.silent;a=[];u=this._changing;this._changing=true;if(!u){this._previousAttributes=h.clone(this.attributes);this.changed={}}c=this.attributes,l=this._previousAttributes;if(this.idAttribute in s)this.id=s[this.idAttribute];for(r in s){e=s[r];if(!h.isEqual(c[r],e))a.push(r);if(!h.isEqual(l[r],e)){this.changed[r]=e}else{delete this.changed[r]}n?delete c[r]:c[r]=e}if(!o){if(a.length)this._pending=true;for(var f=0,d=a.length;f<d;f++){this.trigger("change:"+a[f],this,c[a[f]],i)}}if(u)return this;if(!o){while(this._pending){this._pending=false;this.trigger("change",this,i)}}this._pending=false;this._changing=false;return this},unset:function(t,e){return this.set(t,void 0,h.extend({},e,{unset:true}))},clear:function(t){var e={};for(var i in this.attributes)e[i]=void 0;return this.set(e,h.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!h.isEmpty(this.changed);return h.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?h.clone(this.changed):false;var e,i=false;var r=this._changing?this._previousAttributes:this.attributes;for(var s in t){if(h.isEqual(r[s],e=t[s]))continue;(i||(i={}))[s]=e}return i},previous:function(t){if(t==null||!this._previousAttributes)return null;return this._previousAttributes[t]},previousAttributes:function(){return h.clone(this._previousAttributes)},fetch:function(t){t=t?h.clone(t):{};if(t.parse===void 0)t.parse=true;var e=this;var i=t.success;t.success=function(r){if(!e.set(e.parse(r,t),t))return false;if(i)i(e,r,t);e.trigger("sync",e,r,t)};R(this,t);return this.sync("read",this,t)},save:function(t,e,i){var r,s,n,a=this.attributes;if(t==null||typeof t==="object"){r=t;i=e}else{(r={})[t]=e}if(r&&(!i||!i.wait)&&!this.set(r,i))return false;i=h.extend({validate:true},i);if(!this._validate(r,i))return false;if(r&&i.wait){this.attributes=h.extend({},a,r)}if(i.parse===void 0)i.parse=true;var o=this;var u=i.success;i.success=function(t){o.attributes=a;var e=o.parse(t,i);if(i.wait)e=h.extend(r||{},e);if(h.isObject(e)&&!o.set(e,i)){return false}if(u)u(o,t,i);o.trigger("sync",o,t,i)};R(this,i);s=this.isNew()?"create":i.patch?"patch":"update";if(s==="patch")i.attrs=r;n=this.sync(s,this,i);if(r&&i.wait)this.attributes=a;return n},destroy:function(t){t=t?h.clone(t):{};var e=this;var i=t.success;var r=function(){e.trigger("destroy",e,e.collection,t)};t.success=function(s){if(t.wait||e.isNew())r();if(i)i(e,s,t);if(!e.isNew())e.trigger("sync",e,s,t)};if(this.isNew()){t.success();return false}R(this,t);var s=this.sync("delete",this,t);if(!t.wait)r();return s},url:function(){var t=h.result(this,"urlRoot")||h.result(this.collection,"url")||U();if(this.isNew())return t;return t+(t.charAt(t.length-1)==="/"?"":"/")+encodeURIComponent(this.id)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return this.id==null},isValid:function(t){return this._validate({},h.extend(t||{},{validate:true}))},_validate:function(t,e){if(!e.validate||!this.validate)return true;t=h.extend({},this.attributes,t);var i=this.validationError=this.validate(t,e)||null;if(!i)return true;this.trigger("invalid",this,i,h.extend(e||{},{validationError:i}));return false}});var v=["keys","values","pairs","invert","pick","omit"];h.each(v,function(t){d.prototype[t]=function(){var e=s.call(arguments);e.unshift(this.attributes);return h[t].apply(h,e)}});var g=a.Collection=function(t,e){e||(e={});if(e.url)this.url=e.url;if(e.model)this.model=e.model;if(e.comparator!==void 0)this.comparator=e.comparator;this._reset();this.initialize.apply(this,arguments);if(t)this.reset(t,h.extend({silent:true},e))};var m={add:true,remove:true,merge:true};var y={add:true,merge:false,remove:false};h.extend(g.prototype,o,{model:d,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return a.sync.apply(this,arguments)},add:function(t,e){return this.set(t,h.defaults(e||{},y))},remove:function(t,e){t=h.isArray(t)?t.slice():[t];e||(e={});var i,r,s,n;for(i=0,r=t.length;i<r;i++){n=this.get(t[i]);if(!n)continue;delete this._byId[n.id];delete this._byId[n.cid];s=this.indexOf(n);this.models.splice(s,1);this.length--;if(!e.silent){e.index=s;n.trigger("remove",n,this,e)}this._removeReference(n)}return this},set:function(t,e){e=h.defaults(e||{},m);if(e.parse)t=this.parse(t,e);if(!h.isArray(t))t=t?[t]:[];var i,s,a,o,u,l;var c=e.at;var f=this.comparator&&c==null&&e.sort!==false;var d=h.isString(this.comparator)?this.comparator:null;var p=[],v=[],g={};for(i=0,s=t.length;i<s;i++){if(!(a=this._prepareModel(t[i],e)))continue;if(u=this.get(a)){if(e.remove)g[u.cid]=true;if(e.merge){u.set(a.attributes,e);if(f&&!l&&u.hasChanged(d))l=true}}else if(e.add){p.push(a);a.on("all",this._onModelEvent,this);this._byId[a.cid]=a;if(a.id!=null)this._byId[a.id]=a}}if(e.remove){for(i=0,s=this.length;i<s;++i){if(!g[(a=this.models[i]).cid])v.push(a)}if(v.length)this.remove(v,e)}if(p.length){if(f)l=true;this.length+=p.length;if(c!=null){n.apply(this.models,[c,0].concat(p))}else{r.apply(this.models,p)}}if(l)this.sort({silent:true});if(e.silent)return this;for(i=0,s=p.length;i<s;i++){(a=p[i]).trigger("add",a,this,e)}if(l)this.trigger("sort",this,e);return this},reset:function(t,e){e||(e={});for(var i=0,r=this.models.length;i<r;i++){this._removeReference(this.models[i])}e.previousModels=this.models;this._reset();this.add(t,h.extend({silent:true},e));if(!e.silent)this.trigger("reset",this,e);return this},push:function(t,e){t=this._prepareModel(t,e);this.add(t,h.extend({at:this.length},e));return t},pop:function(t){var e=this.at(this.length-1);this.remove(e,t);return e},unshift:function(t,e){t=this._prepareModel(t,e);this.add(t,h.extend({at:0},e));return t},shift:function(t){var e=this.at(0);this.remove(e,t);return e},slice:function(t,e){return this.models.slice(t,e)},get:function(t){if(t==null)return void 0;return this._byId[t.id!=null?t.id:t.cid||t]},at:function(t){return this.models[t]},where:function(t,e){if(h.isEmpty(t))return e?void 0:[];return this[e?"find":"filter"](function(e){for(var i in t){if(t[i]!==e.get(i))return false}return true})},findWhere:function(t){return this.where(t,true)},sort:function(t){if(!this.comparator)throw new Error("Cannot sort a set without a comparator");t||(t={});if(h.isString(this.comparator)||this.comparator.length===1){this.models=this.sortBy(this.comparator,this)}else{this.models.sort(h.bind(this.comparator,this))}if(!t.silent)this.trigger("sort",this,t);return this},sortedIndex:function(t,e,i){e||(e=this.comparator);var r=h.isFunction(e)?e:function(t){return t.get(e)};return h.sortedIndex(this.models,t,r,i)},pluck:function(t){return h.invoke(this.models,"get",t)},fetch:function(t){t=t?h.clone(t):{};if(t.parse===void 0)t.parse=true;var e=t.success;var i=this;t.success=function(r){var s=t.reset?"reset":"set";i[s](r,t);if(e)e(i,r,t);i.trigger("sync",i,r,t)};R(this,t);return this.sync("read",this,t)},create:function(t,e){e=e?h.clone(e):{};if(!(t=this._prepareModel(t,e)))return false;if(!e.wait)this.add(t,e);var i=this;var r=e.success;e.success=function(s){if(e.wait)i.add(t,e);if(r)r(t,s,e)};t.save(null,e);return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(t,e){if(t instanceof d){if(!t.collection)t.collection=this;return t}e||(e={});e.collection=this;var i=new this.model(t,e);if(!i._validate(t,e)){this.trigger("invalid",this,t,e);return false}return i},_removeReference:function(t){if(this===t.collection)delete t.collection;t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,r){if((t==="add"||t==="remove")&&i!==this)return;if(t==="destroy")this.remove(e,r);if(e&&t==="change:"+e.idAttribute){delete this._byId[e.previous(e.idAttribute)];if(e.id!=null)this._byId[e.id]=e}this.trigger.apply(this,arguments)}});var _=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","indexOf","shuffle","lastIndexOf","isEmpty","chain"];h.each(_,function(t){g.prototype[t]=function(){var e=s.call(arguments);e.unshift(this.models);return h[t].apply(h,e)}});var w=["groupBy","countBy","sortBy"];h.each(w,function(t){g.prototype[t]=function(e,i){var r=h.isFunction(e)?e:function(t){return t.get(e)};return h[t](this.models,r,i)}});var b=a.View=function(t){this.cid=h.uniqueId("view");this._configure(t||{});this._ensureElement();this.initialize.apply(this,arguments);this.delegateEvents()};var x=/^(\S+)\s*(.*)$/;var E=["model","collection","el","id","attributes","className","tagName","events"];h.extend(b.prototype,o,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){this.$el.remove();this.stopListening();return this},setElement:function(t,e){if(this.$el)this.undelegateEvents();this.$el=t instanceof a.$?t:a.$(t);this.el=this.$el[0];if(e!==false)this.delegateEvents();return this},delegateEvents:function(t){if(!(t||(t=h.result(this,"events"))))return this;this.undelegateEvents();for(var e in t){var i=t[e];if(!h.isFunction(i))i=this[t[e]];if(!i)continue;var r=e.match(x);var s=r[1],n=r[2];i=h.bind(i,this);s+=".delegateEvents"+this.cid;if(n===""){this.$el.on(s,i)}else{this.$el.on(s,n,i)}}return this},undelegateEvents:function(){this.$el.off(".delegateEvents"+this.cid);return this},_configure:function(t){if(this.options)t=h.extend({},h.result(this,"options"),t);h.extend(this,h.pick(t,E));this.options=t},_ensureElement:function(){if(!this.el){var t=h.extend({},h.result(this,"attributes"));if(this.id)t.id=h.result(this,"id");if(this.className)t["class"]=h.result(this,"className");var e=a.$("<"+h.result(this,"tagName")+">").attr(t);this.setElement(e,false)}else{this.setElement(h.result(this,"el"),false)}}});a.sync=function(t,e,i){var r=k[t];h.defaults(i||(i={}),{emulateHTTP:a.emulateHTTP,emulateJSON:a.emulateJSON});var s={type:r,dataType:"json"};if(!i.url){s.url=h.result(e,"url")||U()}if(i.data==null&&e&&(t==="create"||t==="update"||t==="patch")){s.contentType="application/json";s.data=JSON.stringify(i.attrs||e.toJSON(i))}if(i.emulateJSON){s.contentType="application/x-www-form-urlencoded";s.data=s.data?{model:s.data}:{}}if(i.emulateHTTP&&(r==="PUT"||r==="DELETE"||r==="PATCH")){s.type="POST";if(i.emulateJSON)s.data._method=r;var n=i.beforeSend;i.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",r);if(n)return n.apply(this,arguments)}}if(s.type!=="GET"&&!i.emulateJSON){s.processData=false}if(s.type==="PATCH"&&window.ActiveXObject&&!(window.external&&window.external.msActiveXFilteringEnabled)){s.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")}}var o=i.xhr=a.ajax(h.extend(s,i));e.trigger("request",e,o,i);return o};var k={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};a.ajax=function(){return a.$.ajax.apply(a.$,arguments)};var S=a.Router=function(t){t||(t={});if(t.routes)this.routes=t.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var $=/\((.*?)\)/g;var T=/(\(\?)?:\w+/g;var H=/\*\w+/g;var A=/[\-{}\[\]+?.,\\\^$|#\s]/g;h.extend(S.prototype,o,{initialize:function(){},route:function(t,e,i){if(!h.isRegExp(t))t=this._routeToRegExp(t);if(h.isFunction(e)){i=e;e=""}if(!i)i=this[e];var r=this;a.history.route(t,function(s){var n=r._extractParameters(t,s);i&&i.apply(r,n);r.trigger.apply(r,["route:"+e].concat(n));r.trigger("route",e,n);a.history.trigger("route",r,e,n)});return this},navigate:function(t,e){a.history.navigate(t,e);return this},_bindRoutes:function(){if(!this.routes)return;this.routes=h.result(this,"routes");var t,e=h.keys(this.routes);while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(A,"\\$&").replace($,"(?:$1)?").replace(T,function(t,e){return e?t:"([^/]+)"}).replace(H,"(.*?)");return new RegExp("^"+t+"$")},_extractParameters:function(t,e){var i=t.exec(e).slice(1);return h.map(i,function(t){return t?decodeURIComponent(t):null})}});var I=a.History=function(){this.handlers=[];h.bindAll(this,"checkUrl");if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var N=/^[#\/]|\s+$/g;var P=/^\/+|\/+$/g;var O=/msie [\w.]+/;var C=/\/$/;I.started=false;h.extend(I.prototype,o,{interval:50,getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getFragment:function(t,e){if(t==null){if(this._hasPushState||!this._wantsHashChange||e){t=this.location.pathname;var i=this.root.replace(C,"");if(!t.indexOf(i))t=t.substr(i.length)}else{t=this.getHash()}}return t.replace(N,"")},start:function(t){if(I.started)throw new Error("Backbone.history has already been started");I.started=true;this.options=h.extend({},{root:"/"},this.options,t);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);var e=this.getFragment();var i=document.documentMode;var r=O.exec(navigator.userAgent.toLowerCase())&&(!i||i<=7);this.root=("/"+this.root+"/").replace(P,"/");if(r&&this._wantsHashChange){this.iframe=a.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow;this.navigate(e)}if(this._hasPushState){a.$(window).on("popstate",this.checkUrl)}else if(this._wantsHashChange&&"onhashchange"in window&&!r){a.$(window).on("hashchange",this.checkUrl)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}this.fragment=e;var s=this.location;var n=s.pathname.replace(/[^\/]$/,"$&/")===this.root;if(this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!n){this.fragment=this.getFragment(null,true);this.location.replace(this.root+this.location.search+"#"+this.fragment);return true}else if(this._wantsPushState&&this._hasPushState&&n&&s.hash){this.fragment=this.getHash().replace(N,"");this.history.replaceState({},document.title,this.root+this.fragment+s.search)}if(!this.options.silent)return this.loadUrl()},stop:function(){a.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl);clearInterval(this._checkUrlInterval);I.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe){e=this.getFragment(this.getHash(this.iframe))}if(e===this.fragment)return false;if(this.iframe)this.navigate(e);this.loadUrl()||this.loadUrl(this.getHash())},loadUrl:function(t){var e=this.fragment=this.getFragment(t);var i=h.any(this.handlers,function(t){if(t.route.test(e)){t.callback(e);return true}});return i},navigate:function(t,e){if(!I.started)return false;if(!e||e===true)e={trigger:e};t=this.getFragment(t||"");if(this.fragment===t)return;this.fragment=t;var i=this.root+t;if(this._hasPushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,i)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace);if(this.iframe&&t!==this.getFragment(this.getHash(this.iframe))){if(!e.replace)this.iframe.document.open().close();this._updateHash(this.iframe.location,t,e.replace)}}else{return this.location.assign(i)}if(e.trigger)this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var r=t.href.replace(/(javascript:|#).*$/,"");t.replace(r+"#"+e)}else{t.hash="#"+e}}});a.history=new I;var j=function(t,e){var i=this;var r;if(t&&h.has(t,"constructor")){r=t.constructor}else{r=function(){return i.apply(this,arguments)}}h.extend(r,i,e);var s=function(){this.constructor=r};s.prototype=i.prototype;r.prototype=new s;if(t)h.extend(r.prototype,t);r.__super__=i.prototype;return r};d.extend=g.extend=S.extend=b.extend=I.extend=j;var U=function(){throw new Error('A "url" property or function must be specified')};var R=function(t,e){var i=e.error;e.error=function(r){if(i)i(t,r,e);t.trigger("error",t,r,e)}}}).call(this);
/*
//@ sourceMappingURL=backbone-min.map
*/
;
jade = (function(exports){
/*!
 * Jade - runtime
 * Copyright(c) 2010 TJ Holowaychuk <tj@vision-media.ca>
 * MIT Licensed
 */

/**
 * Lame Array.isArray() polyfill for now.
 */

if (!Array.isArray) {
  Array.isArray = function(arr){
    return '[object Array]' == Object.prototype.toString.call(arr);
  };
}

/**
 * Lame Object.keys() polyfill for now.
 */

if (!Object.keys) {
  Object.keys = function(obj){
    var arr = [];
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        arr.push(key);
      }
    }
    return arr;
  }
}

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = function merge(a, b) {
  var ac = a['class'];
  var bc = b['class'];

  if (ac || bc) {
    ac = ac || [];
    bc = bc || [];
    if (!Array.isArray(ac)) ac = [ac];
    if (!Array.isArray(bc)) bc = [bc];
    ac = ac.filter(nulls);
    bc = bc.filter(nulls);
    a['class'] = ac.concat(bc).join(' ');
  }

  for (var key in b) {
    if (key != 'class') {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Filter null `val`s.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function nulls(val) {
  return val != null;
}

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} escaped
 * @return {String}
 * @api private
 */

exports.attrs = function attrs(obj, escaped){
  var buf = []
    , terse = obj.terse;

  delete obj.terse;
  var keys = Object.keys(obj)
    , len = keys.length;

  if (len) {
    buf.push('');
    for (var i = 0; i < len; ++i) {
      var key = keys[i]
        , val = obj[key];

      if ('boolean' == typeof val || null == val) {
        if (val) {
          terse
            ? buf.push(key)
            : buf.push(key + '="' + key + '"');
        }
      } else if (0 == key.indexOf('data') && 'string' != typeof val) {
        buf.push(key + "='" + JSON.stringify(val) + "'");
      } else if ('class' == key && Array.isArray(val)) {
        buf.push(key + '="' + exports.escape(val.join(' ')) + '"');
      } else if (escaped && escaped[key]) {
        buf.push(key + '="' + exports.escape(val) + '"');
      } else {
        buf.push(key + '="' + val + '"');
      }
    }
  }

  return buf.join(' ');
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

exports.escape = function escape(html){
  return String(html)
    .replace(/&(?!(\w+|\#\d+);)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
};

/**
 * Re-throw the given `err` in context to the
 * the jade in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @api private
 */

exports.rethrow = function rethrow(err, filename, lineno){
  if (!filename) throw err;

  var context = 3
    , str = require('fs').readFileSync(filename, 'utf8')
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Jade') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};

  return exports;

})({});

;/*!
 * Bootstrap v3.0.3 (http://getbootstrap.com)
 * Copyright 2013 Twitter, Inc.
 * Licensed under http://www.apache.org/licenses/LICENSE-2.0
 */

if("undefined"==typeof jQuery)throw new Error("Bootstrap requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]}}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d)};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(a){var b="disabled",c=this.$element,d=c.is("input")?"val":"html",e=c.data();a+="Text",e.resetText||c.data("resetText",c[d]()),c[d](e[a]||this.options[a]),setTimeout(function(){"loadingText"==a?c.addClass(b).attr(b,b):c.removeClass(b).removeAttr(b)},0)},b.prototype.toggle=function(){var a=this.$element.closest('[data-toggle="buttons"]'),b=!0;if(a.length){var c=this.$element.find("input");"radio"===c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?b=!1:a.find(".active").removeClass("active")),b&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}b&&this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition.end&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}this.sliding=!0,f&&this.pause();var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});if(!e.hasClass("active")){if(this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid.bs.carousel",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")){if(this.$element.trigger(j),j.isDefaultPrevented())return;e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid.bs.carousel")},0)}).emulateTransitionEnd(600)}else{if(this.$element.trigger(j),j.isDefaultPrevented())return;d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid.bs.carousel")}return f&&this.cycle(),this}};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?(this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350),void 0):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(jQuery),+function(a){"use strict";function b(){a(d).remove(),a(e).each(function(b){var d=c(a(this));d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown")),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown"))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){if("ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b),f.trigger(d=a.Event("show.bs.dropdown")),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown"),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=a("[role=menu] li:not(.divider):visible a",f);if(h.length){var i=h.index(h.filter(":focus"));38==b.keyCode&&i>0&&i--,40==b.keyCode&&i<h.length-1&&i++,~i||(i=0),h.eq(i).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu]",f.prototype.keydown)}(jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.load(this.options.remote)};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show(),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focus",i="hover"==g?"mouseleave":"blur";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show),void 0):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide),void 0):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this.tip();this.setContent(),this.options.animation&&c.addClass("fade");var d="function"==typeof this.options.placement?this.options.placement.call(this,c[0],this.$element[0]):this.options.placement,e=/\s?auto?\s?/i,f=e.test(d);f&&(d=d.replace(e,"")||"top"),c.detach().css({top:0,left:0,display:"block"}).addClass(d),this.options.container?c.appendTo(this.options.container):c.insertAfter(this.$element);var g=this.getPosition(),h=c[0].offsetWidth,i=c[0].offsetHeight;if(f){var j=this.$element.parent(),k=d,l=document.documentElement.scrollTop||document.body.scrollTop,m="body"==this.options.container?window.innerWidth:j.outerWidth(),n="body"==this.options.container?window.innerHeight:j.outerHeight(),o="body"==this.options.container?0:j.offset().left;d="bottom"==d&&g.top+g.height+i-l>n?"top":"top"==d&&g.top-l-i<0?"bottom":"right"==d&&g.right+h>m?"left":"left"==d&&g.left-h<o?"right":d,c.removeClass(k).addClass(d)}var p=this.getCalculatedOffset(d,g,h,i);this.applyPlacement(p,d),this.$element.trigger("shown.bs."+this.type)}},b.prototype.applyPlacement=function(a,b){var c,d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),a.top=a.top+g,a.left=a.left+h,d.offset(a).addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;if("top"==b&&j!=f&&(c=!0,a.top=a.top+f-j),/bottom|top/.test(b)){var k=0;a.left<0&&(k=-2*a.left,a.left=0,d.offset(a),i=d[0].offsetWidth,j=d[0].offsetHeight),this.replaceArrow(k-e+i,i,"left")}else this.replaceArrow(j-f,j,"top");c&&d.offset(a)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach()}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.$element.trigger("hidden.bs."+this.type),this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"html":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(c).is("body")?a(window):a(c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#\w/.test(e)&&a(e);return f&&f.length&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parents(".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top()),"function"==typeof h&&(h=f.bottom());var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;this.affixed!==i&&(this.unpin&&this.$element.css("top",""),this.affixed=i,this.unpin="bottom"==i?e.top-d:null,this.$element.removeClass(b.RESET).addClass("affix"+(i?"-"+i:"")),"bottom"==i&&this.$element.offset({top:document.body.offsetHeight-h-this.$element.height()}))}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(jQuery);
;/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function D(a){j.cssText=a}function E(a,b){return D(n.join(a+";")+(b||""))}function F(a,b){return typeof a===b}function G(a,b){return!!~(""+a).indexOf(b)}function H(a,b){for(var d in a){var e=a[d];if(!G(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function I(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:F(f,"function")?f.bind(d||b):f}return!1}function J(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return F(b,"string")||F(b,"undefined")?H(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),I(e,b,c))}function K(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return y("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},A=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=F(e[d],"function"),F(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),B={}.hasOwnProperty,C;!F(B,"undefined")&&!F(B.call,"undefined")?C=function(a,b){return B.call(a,b)}:C=function(a,b){return b in a&&F(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return J("flexWrap")},s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=function(){return!!e.canvas&&!!F(b.createElement("canvas").getContext("2d").fillText,"function")},s.webgl=function(){return!!a.WebGLRenderingContext},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.geolocation=function(){return"geolocation"in navigator},s.postmessage=function(){return!!a.postMessage},s.websqldatabase=function(){return!!a.openDatabase},s.indexedDB=function(){return!!J("indexedDB",a)},s.hashchange=function(){return A("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},s.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},s.rgba=function(){return D("background-color:rgba(150,255,150,.5)"),G(j.backgroundColor,"rgba")},s.hsla=function(){return D("background-color:hsla(120,40%,100%,.5)"),G(j.backgroundColor,"rgba")||G(j.backgroundColor,"hsla")},s.multiplebgs=function(){return D("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return J("backgroundSize")},s.borderimage=function(){return J("borderImage")},s.borderradius=function(){return J("borderRadius")},s.boxshadow=function(){return J("boxShadow")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return E("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return J("animationName")},s.csscolumns=function(){return J("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return D((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),G(j.backgroundImage,"gradient")},s.cssreflections=function(){return J("boxReflect")},s.csstransforms=function(){return!!J("transform")},s.csstransforms3d=function(){var a=!!J("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},s.csstransitions=function(){return J("transition")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.webworkers=function(){return!!a.Worker},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate")))},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var L in s)C(s,L)&&(x=L.toLowerCase(),e[x]=s[L](),v.push((e[x]?"":"no-")+x));return e.input||K(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)C(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},D(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.mq=z,e.hasEvent=A,e.testProp=function(a){return H([a])},e.testAllProps=J,e.testStyles=y,e.prefixed=function(a,b,c){return b?J(a,b,c):J(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
/*! NOTE: If you're already including a window.matchMedia polyfill via Modernizr or otherwise, you don't need this part */
window.matchMedia=window.matchMedia||(function(e,f){var c,a=e.documentElement,b=a.firstElementChild||a.firstChild,d=e.createElement("body"),g=e.createElement("div");g.id="mq-test-1";g.style.cssText="position:absolute;top:-100em";d.style.background="none";d.appendChild(g);return function(h){g.innerHTML='&shy;<style media="'+h+'"> #mq-test-1 { width: 42px; }</style>';a.insertBefore(d,b);c=g.offsetWidth==42;a.removeChild(d);return{matches:c,media:h}}})(document);

/*! Respond.js v1.1.0: min/max-width media query polyfill. (c) Scott Jehl. MIT/GPLv2 Lic. j.mp/respondjs  */
(function(e){e.respond={};respond.update=function(){};respond.mediaQueriesSupported=e.matchMedia&&e.matchMedia("only all").matches;if(respond.mediaQueriesSupported){return}var w=e.document,s=w.documentElement,i=[],k=[],q=[],o={},h=30,f=w.getElementsByTagName("head")[0]||s,g=w.getElementsByTagName("base")[0],b=f.getElementsByTagName("link"),d=[],a=function(){var D=b,y=D.length,B=0,A,z,C,x;for(;B<y;B++){A=D[B],z=A.href,C=A.media,x=A.rel&&A.rel.toLowerCase()==="stylesheet";if(!!z&&x&&!o[z]){if(A.styleSheet&&A.styleSheet.rawCssText){m(A.styleSheet.rawCssText,z,C);o[z]=true}else{if((!/^([a-zA-Z:]*\/\/)/.test(z)&&!g)||z.replace(RegExp.$1,"").split("/")[0]===e.location.host){d.push({href:z,media:C})}}}}u()},u=function(){if(d.length){var x=d.shift();n(x.href,function(y){m(y,x.href,x.media);o[x.href]=true;u()})}},m=function(I,x,z){var G=I.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),J=G&&G.length||0,x=x.substring(0,x.lastIndexOf("/")),y=function(K){return K.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+x+"$2$3")},A=!J&&z,D=0,C,E,F,B,H;if(x.length){x+="/"}if(A){J=1}for(;D<J;D++){C=0;if(A){E=z;k.push(y(I))}else{E=G[D].match(/@media *([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1;k.push(RegExp.$2&&y(RegExp.$2))}B=E.split(",");H=B.length;for(;C<H;C++){F=B[C];i.push({media:F.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/)&&RegExp.$2||"all",rules:k.length-1,hasquery:F.indexOf("(")>-1,minw:F.match(/\(min\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:F.match(/\(max\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}}j()},l,r,v=function(){var z,A=w.createElement("div"),x=w.body,y=false;A.style.cssText="position:absolute;font-size:1em;width:1em";if(!x){x=y=w.createElement("body");x.style.background="none"}x.appendChild(A);s.insertBefore(x,s.firstChild);z=A.offsetWidth;if(y){s.removeChild(x)}else{x.removeChild(A)}z=p=parseFloat(z);return z},p,j=function(I){var x="clientWidth",B=s[x],H=w.compatMode==="CSS1Compat"&&B||w.body[x]||B,D={},G=b[b.length-1],z=(new Date()).getTime();if(I&&l&&z-l<h){clearTimeout(r);r=setTimeout(j,h);return}else{l=z}for(var E in i){var K=i[E],C=K.minw,J=K.maxw,A=C===null,L=J===null,y="em";if(!!C){C=parseFloat(C)*(C.indexOf(y)>-1?(p||v()):1)}if(!!J){J=parseFloat(J)*(J.indexOf(y)>-1?(p||v()):1)}if(!K.hasquery||(!A||!L)&&(A||H>=C)&&(L||H<=J)){if(!D[K.media]){D[K.media]=[]}D[K.media].push(k[K.rules])}}for(var E in q){if(q[E]&&q[E].parentNode===f){f.removeChild(q[E])}}for(var E in D){var M=w.createElement("style"),F=D[E].join("\n");M.type="text/css";M.media=E;f.insertBefore(M,G.nextSibling);if(M.styleSheet){M.styleSheet.cssText=F}else{M.appendChild(w.createTextNode(F))}q.push(M)}},n=function(x,z){var y=c();if(!y){return}y.open("GET",x,true);y.onreadystatechange=function(){if(y.readyState!=4||y.status!=200&&y.status!=304){return}z(y.responseText)};if(y.readyState==4){return}y.send(null)},c=(function(){var x=false;try{x=new XMLHttpRequest()}catch(y){x=new ActiveXObject("Microsoft.XMLHTTP")}return function(){return x}})();a();respond.update=a;function t(){j(true)}if(e.addEventListener){e.addEventListener("resize",t,false)}else{if(e.attachEvent){e.attachEvent("onresize",t)}}})(this);
;﻿/**
* @preserve CanvasJS HTML5 & JavaScript Charts - v1.3.0 GA - http://canvasjs.com/ 
* Copyright 2013 fenopix
*/

/*
* CanvasJS Charts follows Dual Licensing Model as mentioned below. 
* 
* ---------------------Free for Non-Commercial Use--------------------
* 
* For non-commercial purposes you can use the software for free under Creative Commons Attribution-NonCommercial 3.0 License. Refer to the following link for further details on the same.
*     http://creativecommons.org/licenses/by-nc/3.0/deed.en_US
* 
* ---------------------Commercial License--------------------
* Commercial use of CanvasJS requires you to purchase a license. Without a commercial license you can use it for evaluation purposes only. Please refer to the following link for further details.
*     http://canvasjs.com/
* 
*/

/* jshint -W099 */ //Ignore warning "Mixed Spaces and Tabs"

(function () {

	var isDebugMode = false;

	var isCanvasSupported = !!document.createElement("canvas").getContext;
	//isCanvasSupported = false;

	//Default values for all Chart Elements that can be set by the user. CanvasJSObject.setOptions looks into this while setting the default/user-defined values.
	var defaultOptions = {
		Chart: {
			width: 500,
			height: 400,
			zoomEnabled: false,
			backgroundColor: "white",
			theme: "theme1",
			animationEnabled: isCanvasSupported ? true : false,
			colorSet: "colorSet1",
			culture: "en",
			creditHref: "http://canvasjs.com/",
			creditText: "CanvasJS.com"
		},

		CultureInfo: {
			decimalSeparator: ".",
			digitGroupSeparator: ",",
			zoomText: "Zoom",
			panText: "Pan",
			resetText: "Reset",
			days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],

			months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
		},

		Title: {
			padding: 0,
			text: null,
			verticalAlign: "top",//top, center, bottom
			horizontalAlign: "center",//left, center, right
			fontSize: 20,//in pixels
			fontFamily: "Calibri",
			fontWeight: "normal", //normal, bold, bolder, lighter,
			fontColor: "black",
			fontStyle: "normal", // normal, italic, oblique

			borderThickness: 0,
			borderColor: "black",
			cornerRadius: 0,
			backgroundColor: null,
			margin: 5
			//toolTipContent: null//string - To be implemented (TBI)
		},
		DataSeries: {
			name: null,
			dataPoints: null,
			label: "",
			bevelEnabled: false,

			cursor: null,

			indexLabel: "",
			indexLabelPlacement: "outside",  //inside, outside       
			indexLabelOrientation: "horizontal",
			indexLabelFontColor: "black",
			indexLabelFontSize: 12,
			indexLabelFontStyle: "normal", //   italic ,oblique, normal 
			indexLabelFontFamily: "Arial", 	// fx: Arial Verdana "Courier New" Serif 
			indexLabelFontWeight: "normal", 	// bold ,bolder, lighter, normal 
			indexLabelBackgroundColor: null,
			indexLabelLineColor: null,
			indexLabelLineThickness: 1,
			indexLabelMaxWidth: null,
			indexLabelWrap: true,

			lineThickness: 2,

			color: null,

			startAngle: 0,

			type: "column", //line, column, bar, area, scatter stackedColumn, stackedBar, stackedArea, stackedColumn100, stackedBar100, stackedArea100, pie, doughnut
			xValueType: "number", //number, dateTime
			axisYType: "primary",

			xValueFormatString: null,
			yValueFormatString: null,

			showInLegend: null,
			legendMarkerType: null,
			legendMarkerColor: null,
			legendText: null,

			markerType: "circle", //none, circle, square, cross, triangle, line
			markerColor: null,
			markerSize: null,
			markerBorderColor: null,
			markerBorderThickness: null,
			//animationEnabled: true,
			mouseover: null,
			mouseout: null,
			mousemove: null,
			click: null,
			toolTipContent: null
		},

		Axis: {
			minimum: null, //Minimum value to be shown on the Axis
			maximum: null, //Minimum value to be shown on the Axis
			interval: null, // Interval for tick marks and grid lines
			intervalType: null, //number, millisecond, second, minute, hour, day, month, year

			title: null, // string
			titleFontColor: "black",
			titleFontSize: 20,
			titleFontFamily: "arial",
			titleFontWeight: "normal",
			titleFontStyle: "normal",

			labelAngle: 0,
			labelFontFamily: "arial",
			labelFontColor: "black",
			labelFontSize: 12,
			labelFontWeight: "normal",
			labelFontStyle: "normal",
			labelAutoFit: false,
			labelWrap: true,
			labelMaxWidth: null,//null for auto

			prefix: "",
			suffix: "",

			includeZero: true, //Applies only for axisY. Ignored in axisX.

			tickLength: 5,
			tickColor: "black",
			tickThickness: 1,

			lineColor: "black",
			lineThickness: 1,

			gridColor: "A0A0A0",
			gridThickness: 0,

			interlacedColor: null,

			valueFormatString: null,

			margin: 2
		},

		Legend: {
			name: null,
			borderThickness: 0,
			borderColor: "black",
			cornerRadius: 0,
			verticalAlign: "center",
			horizontalAlign: "right",
			//dockInsidePlotArea: false,

			fontSize: 14,//in pixels
			fontFamily: "calibri",
			fontWeight: "normal", //normal, bold, bolder, lighter,
			fontColor: "black",
			fontStyle: "normal" // normal, italic, oblique
		},

		ToolTip: {
			enabled: true,
			borderColor: null,
			shared: false,
			animationEnabled: true,
			content: null
		},

		//Private
		TextBlock: {
			x: 0,
			y: 0,
			width: null,//read only
			height: null,//read only
			maxWidth: null,
			maxHeight: null,
			padding: 0,
			angle: 0,
			text: "",
			horizontalAlign: "center",//left, center, right
			fontSize: 12,//in pixels
			fontFamily: "calibri",
			fontWeight: "normal", //normal, bold, bolder, lighter,
			fontColor: "black",
			fontStyle: "normal", // normal, italic, oblique

			borderThickness: 0,
			borderColor: "black",
			cornerRadius: 0,
			backgroundColor: null,
			textBaseline: "top"
		}
	}

	//#region Cultures

	var cultures = {
		"en": {
			//Derives from the default options
		}//,
		//"es": {
		//    decimalSeparator: ",",
		//    digitGroupSeparator: ".",
		//    zoomText: "zoom",
		//    panText: "pan",
		//    resetText: "reset",
		//    days: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
		//}
	}

	//#endregion Cultures

	//#region Themes

	var colorSets = {

		"colorSet1": [
			"#369EAD",
			"#C24642",
			"#7F6084",
			//"#96C412",
			"#86B402",
			"#A2D1CF",
			//"#D8C641",
			"#C8B631",
			"#6DBCEB",
			//"#4A4946",
			"#52514E",
			"#4F81BC",
			"#A064A1",
			"#F79647"
		],
		"colorSet2": [
			"#4F81BC",
			"#C0504E",
			"#9BBB58",
			"#23BFAA",
			//"#FAA586",
			"#8064A1",
			"#4AACC5",
			"#F79647",
			//"#77AA33",
			//"#7F6084"
			"#33558B"
		],
		"colorSet3": [
			"#8CA1BC",
			"#36845C",
			"#017E82",
			"#8CB9D0",
			"#708C98",
			"#94838D",
			"#F08891",
			"#0366A7",
			"#008276",
			"#EE7757",
			"#E5BA3A",
			"#F2990B",
			"#03557B",
			"#782970"
		]//,
		//"colorSet4": [
		//    "#3698C5",
		//    "#009B8D",
		//    "#F1D691",
		//    "#F8B90C",
		//    "#0081B8",
		//    "#5B5A96",
		//    "#ACBDD1",
		//    "#88A891",
		//    "#39969D",
		//    "#AECEDD",
		//    "#A0B2BC",
		//    "#BBAEB7",
		//    "#A0C65F",
		//    "#EEA6AA",
		//    "#3798C5"
		//],
		//"colorSet5": [
		//    "#88ADBF",
		//    "#84C336",
		//    "#7B91C3",
		//    "#4661EE",
		//    "#EC5657",
		//    "#1BCDD1",
		//    "#8FAABB",
		//    "#B08BEB",
		//    "#3EA0DD",
		//    "#F5A52A",
		//    "#23BFAA",
		//    "#FAA586",
		//    "#EB8CC6"
		//]

	};

	var themes =
		{
			"theme1": {
				Chart:
					{
						colorSet: colorSets[0]
					},
				Title: {
					fontFamily: isCanvasSupported ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
					fontSize: 33,
					fontColor: "#3A3A3A",
					fontWeight: "bold",
					verticalAlign: "top",
					margin: 10
				},
				Axis: {
					titleFontSize: 26,
					//titleFontColor: "rgb(98,98,98)",
					titleFontColor: "#666666",
					//titleFontFamily: "arial black",
					//titleFontFamily: "Verdana, Geneva, Calibri, sans-serif",
					titleFontFamily: isCanvasSupported ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
					//titleFontWeight: "bold",

					//labelFontFamily: "Times New Roman, Times, serif",
					labelFontFamily: isCanvasSupported ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
					//labelFontFamily: "Helvetica Neue, Helvetica",
					labelFontSize: 18,
					labelFontColor: "grey",
					//labelFontWeight: "bold",
					tickColor: "#BBBBBB",
					tickThickness: 2,
					gridThickness: 2,
					gridColor: "#BBBBBB",
					lineThickness: 2,
					lineColor: "#BBBBBB"
				},
				Legend: {
					verticalAlign: "bottom",
					horizontalAlign: "center",
					fontFamily: isCanvasSupported ? "monospace, sans-serif,arial black" : "calibri"
				},
				DataSeries: {
					//bevelEnabled: true,
					indexLabelFontColor: "grey",
					//indexLabelFontFamily: "Trebuchet MS, monospace, Courier New, Courier",
					indexLabelFontFamily: isCanvasSupported ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
					//indexLabelFontWeight: "bold",
					indexLabelFontSize: 18,
					//indexLabelLineColor: "lightgrey",
					indexLabelLineThickness: 1
				}
			},

			"theme2": {
				Chart:
					{
						colorSet: "colorSet2"
					},
				Title: {
					fontFamily: "impact, charcoal, arial black, sans-serif",
					fontSize: 32,//fontColor: "rgb(58,58,58)",
					fontColor: "#333333",
					//fontFamily: "arial black", fontSize: 30,//fontColor: "rgb(58,58,58)",
					//fontFamily: "arial black",
					//fontFamily: "Helvetica Neue, Helvetica", fontSize: 35,// fontColor: "rgb(58,58,58)",
					//fontWeight: "bold",
					verticalAlign: "top",
					margin: 10
				},
				Axis: {
					titleFontSize: 22,
					titleFontColor: "rgb(98,98,98)",
					//titleFontFamily: "arial black",
					titleFontFamily: isCanvasSupported ? "monospace, sans-serif,arial black" : "arial",
					titleFontWeight: "bold",


					labelFontFamily: isCanvasSupported ? "monospace, Courier New, Courier" : "arial",
					//labelFontFamily: "Helvetica Neue, Helvetica",
					labelFontSize: 16,
					labelFontColor: "grey",
					labelFontWeight: "bold",
					tickColor: "grey",
					tickThickness: 2,
					gridThickness: 2,
					gridColor: "grey",
					lineThickness: 0
				},
				Legend: {
					verticalAlign: "bottom",
					horizontalAlign: "center",
					fontFamily: isCanvasSupported ? "monospace, sans-serif,arial black" : "arial"
				},
				DataSeries: {
					indexLabelFontColor: "grey",
					//indexLabelFontFamily: "Trebuchet MS, monospace, Courier New, Courier",
					indexLabelFontFamily: isCanvasSupported ? "Courier New, Courier, monospace" : "arial",
					indexLabelFontWeight: "bold",
					indexLabelFontSize: 18,
					//indexLabelLineColor: "lightgrey",
					indexLabelLineThickness: 1
				}
			},

			"theme3": {
				Chart:
					{
						colorSet: "colorSet1"
					},
				Title: {
					//fontFamily: "impact, charcoal, arial black, sans-serif", fontSize: 30,//fontColor: "rgb(58,58,58)",
					//fontFamily: "arial black", fontSize: 30,//fontColor: "rgb(58,58,58)",
					//fontFamily: "arial black",
					fontFamily: isCanvasSupported ? "Candara, Optima, Trebuchet MS, Helvetica Neue, Helvetica, Trebuchet MS, serif" : "calibri",
					fontSize: 32,
					//fontFamily: "Palatino Linotype, Book Antiqua, Palatino, serif", fontSize: 30,
					//fontFamily: "Lucida Sans Unicode, Lucida Grande, Trebuchet MS, sans-serif", fontSize: 30,
					fontColor: "rgb(68,78,58)",
					fontColor: "#3A3A3A",
					fontWeight: "bold",
					verticalAlign: "top",
					margin: 10
				},
				Axis: {
					titleFontSize: 22,
					titleFontColor: "rgb(98,98,98)",
					//titleFontFamily: "arial black",
					titleFontFamily: isCanvasSupported ? "Verdana, Geneva, Calibri, sans-serif" : "calibri",
					//titleFontWeight: "bold",

					//labelFontFamily: "Times New Roman, Times, serif",
					labelFontFamily: isCanvasSupported ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
					//labelFontFamily: "Helvetica Neue, Helvetica",
					labelFontSize: 18,
					labelFontColor: "grey",
					//labelFontWeight: "bold",
					tickColor: "grey",
					tickThickness: 2,
					gridThickness: 2,
					gridColor: "grey",
					lineThickness: 2,
					lineColor: "grey"
				},
				Legend: {
					verticalAlign: "bottom",
					horizontalAlign: "center",
					fontFamily: isCanvasSupported ? "monospace, sans-serif,arial black" : "calibri"
				},
				DataSeries: {
					bevelEnabled: true,
					indexLabelFontColor: "grey",
					//indexLabelFontFamily: "Trebuchet MS, monospace, Courier New, Courier",
					indexLabelFontFamily: isCanvasSupported ? "Candara, Optima, Calibri, Verdana, Geneva, sans-serif" : "calibri",
					//indexLabelFontWeight: "bold",
					indexLabelFontSize: 18,
					indexLabelLineColor: "lightgrey",
					indexLabelLineThickness: 2
				}
			}
		}

	//#endregion Themes

	var constants = {
		numberDuration: 1,
		yearDuration: 1000 * 60 * 60 * 24 * 364,
		monthDuration: 1000 * 60 * 60 * 24 * 30,
		weekDuration: 1000 * 60 * 60 * 24 * 7,
		dayDuration: 1000 * 60 * 60 * 24,
		hourDuration: 1000 * 60 * 60,
		minuteDuration: 1000 * 60,
		secondDuration: 1000,
		millisecondDuration: 1,

		dayOfWeekFromInt: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
	};

	//#region Static Methods

	function extend(Child, Parent) {
		Child.prototype = inherit(Parent.prototype)
		Child.prototype.constructor = Child
		Child.parent = Parent.prototype
	}

	function inherit(proto) {
		function F() { }
		F.prototype = proto
		return new F
	}

	function addToDateTime(dateTime, num, type) {

		if (type === "millisecond")
			dateTime.setMilliseconds(dateTime.getMilliseconds() + 1 * num);
		else if (type === "second")
			dateTime.setSeconds(dateTime.getSeconds() + 1 * num);
		else if (type === "minute")
			dateTime.setMinutes(dateTime.getMinutes() + 1 * num);
		else if (type === "hour")
			dateTime.setHours(dateTime.getHours() + 1 * num);
		else if (type === "day")
			dateTime.setDate(dateTime.getDate() + 1 * num);
		else if (type === "week")
			dateTime.setDate(dateTime.getDate() + 7 * num);
		else if (type === "month")
			dateTime.setMonth(dateTime.getMonth() + 1 * num);
		else if (type === "year")
			dateTime.setFullYear(dateTime.getFullYear() + 1 * num);

		return dateTime;
	}

	function convertToNumber(num, type) {
		return constants[type + "Duration"] * num;
	}

	function pad(value, length) {
		var isNegative = false;
		if (value < 0) {
			isNegative = true;
			value *= -1;
		}

		value = "" + value;
		length = !length ? 1 : length;

		while (value.length < length) value = "0" + value;

		return isNegative ? "-" + value : value;
	}

	function trimString(str) {
		var str = str.replace(/^\s\s*/, ''),
			ws = /\s/,
			i = str.length;
		while (ws.test(str.charAt(--i))) { };
		return str.slice(0, i + 1);
	}

	function extendCtx(context) {
		context.roundRect = function (x, y, width, height, radius, borderThickness, backgroundColor, borderColor) {
			///<signature>
			///<summary>Creates a rounded rectangle with given fill/stroke parameters</summary>
			///<param name="x" type="number">x value</param>
			///<param name="y" type="number">y value</param>
			///<param name="width" type="number">Border Width</param>
			///<param name="height" type="number">Border Height</param>
			///<param name="radius" type="number">Border CornerRadius</param>
			///<param name="borderThickness" type="number">Border Thickess</param>
			///<param name="backgroundColor" type="number">Background Color</param>
			///<param name="borderColor" type="number">Border Color</param>
			///</signature>

			if (backgroundColor) {
				this.fillStyle = backgroundColor;
			}

			if (borderColor) {
				this.strokeStyle = borderColor
			}

			if (typeof stroke == "undefined") {
				stroke = true;
			}
			if (typeof radius === "undefined") {
				radius = 5;
			}

			this.lineWidth = borderThickness;

			this.beginPath();
			this.moveTo(x + radius, y);
			this.lineTo(x + width - radius, y);
			this.quadraticCurveTo(x + width, y, x + width, y + radius);
			this.lineTo(x + width, y + height - radius);
			this.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
			this.lineTo(x + radius, y + height);
			this.quadraticCurveTo(x, y + height, x, y + height - radius);
			this.lineTo(x, y + radius);
			this.quadraticCurveTo(x, y, x + radius, y);
			this.closePath();

			if (backgroundColor) {
				this.fill();
			}

			if (borderColor && borderThickness > 0) {
				this.stroke();
			}
		}
	}

	function compareNumbers(a, b) {
		return a - b;
	}

	function compareDataPointX(dataPoint1, dataPoint2) {
		return dataPoint1.x - dataPoint2.x;
	}

	function intToHexColorString(num) {
		var r = ((num & 0xFF0000) >> 16).toString(16);
		var g = ((num & 0x00FF00) >> 8).toString(16);
		var b = ((num & 0x0000FF) >> 0).toString(16);

		r = r.length < 2 ? "0" + r : r;
		g = g.length < 2 ? "0" + g : g;
		b = b.length < 2 ? "0" + b : b;

		return "#" + r + g + b;
	}

	function RGBToInt(r, g, b) {
		var num = (r << 16) | (g << 8) | (b);

		return num;
	}

	function intToRGB(num) {
		var rgb = [];
		var r = ((num & 0xFF0000) >> 16);
		var g = ((num & 0x00FF00) >> 8);
		var b = ((num & 0x0000FF) >> 0);

		//r = r.length < 2 ? "0" + r : r;
		//g = g.length < 2 ? "0" + g : g;
		//b = b.length < 2 ? "0" + b : b;

		rgb[0] = r;
		rgb[1] = g
		rgb[2] = b;

		return rgb;
	}

	var fontHeightInPixels = {};
	var textMeasureEl = null;
	function getFontHeightInPixels(fontFamily, fontSize, fontWeight) {

		//return fontSize;

		fontWeight = fontWeight || "normal";

		var entry = fontFamily + "_" + fontSize + "_" + fontWeight;
		var height = fontHeightInPixels[entry];

		if (isNaN(height)) {
			try {
				var style = "position:absolute; left:0px; top:-20000px; padding:0px;margin:0px;border:none;white-space:pre;line-height:normal;" + "font-family:" + fontFamily + "; " + "font-size:" + fontSize + "px; font-weight:" + fontWeight + ";";
				//console.log(style);
				if (!textMeasureEl) {
					var body = document.body;
					textMeasureEl = document.createElement("span");
					textMeasureEl.innerHTML = "";
					var textNode = document.createTextNode("Mpgyi");
					textMeasureEl.appendChild(textNode);
					body.appendChild(textMeasureEl);
				}

				textMeasureEl.style.display = "";
				textMeasureEl.setAttribute("style", style);

				height = Math.round(textMeasureEl.offsetHeight);
				textMeasureEl.style.display = "none";
				//body.removeChild(tempDiv);

				//if (window.console)
				//	window.console.log(fontSize + ": " + height);
			}
			catch (e) {
				height = Math.ceil(fontSize * 1.1);
			}

			height = Math.max(height, fontSize);

			fontHeightInPixels[entry] = height;
		}

		return height;
	}

	//userCapture is optional. Defaults to false
	function addEvent(obj, eventType, fn, useCapture) {
		if (obj.addEventListener) {
			obj.addEventListener(eventType, fn, useCapture || false);
		}
		else if (obj.attachEvent) {
			obj.attachEvent("on" + eventType, function (e) {
				var e = e || window.event;
				e.preventDefault = e.preventDefault || function () { e.returnValue = false }
				e.stopPropagation = e.stopPropagation || function () { e.cancelBubble = true }
				fn.call(obj, e);
			});
		} else
			return false;
	}

	//#region formatting functions/methods
	var dateFormat = function () {
		var reg = /D{1,4}|M{1,4}|Y{1,4}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|f{1,3}|t{1,2}|T{1,2}|K|z{1,3}|"[^"]*"|'[^']*'/g;

		var defDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		var defShortDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

		var defMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		var defShortMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

		var timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g;
		var timezoneClip = /[^-+\dA-Z]/g;

		return function (dt, formatString, cultureInfo) {

			var days = cultureInfo ? cultureInfo.days : defDays;
			var months = cultureInfo ? cultureInfo.months : defMonths;

			var shortDays = cultureInfo ? cultureInfo.shortDays : defShortDays;
			var shortMonths = cultureInfo ? cultureInfo.shortMonths : defShortMonths;

			var result = "";
			var utc = false;

			dt = dt && dt.getTime ? dt : dt ? new Date(dt) : new Date;
			if (isNaN(dt)) throw SyntaxError("invalid date");

			if (formatString.slice(0, 4) == "UTC:") {
				formatString = formatString.slice(4);
				utc = true;
			}

			var pre = utc ? "getUTC" : "get";
			var date = dt[pre + "Date"]();
			var day = dt[pre + "Day"]();
			var month = dt[pre + "Month"]();
			var year = dt[pre + "FullYear"]();
			var hours = dt[pre + "Hours"]();
			var minutes = dt[pre + "Minutes"]();
			var seconds = dt[pre + "Seconds"]();
			var milliseconds = dt[pre + "Milliseconds"]();
			var offset = utc ? 0 : dt.getTimezoneOffset();

			result = formatString.replace(reg, function (key) {

				switch (key) {

					case "D":
						return date;
					case "DD":
						return pad(date, 2);
					case "DDD":
						return shortDays[day];
					case "DDDD":
						return days[day];


					case "M":
						return month + 1;
					case "MM":
						return pad(month + 1, 2);
					case "MMM":
						return shortMonths[month];
					case "MMMM":
						return months[month];


					case "Y":
						return parseInt(String(year).slice(-2));
					case "YY":
						return pad(String(year).slice(-2), 2);
					case "YYY":
						return pad(String(year).slice(-3), 3);
					case "YYYY":
						return pad(year, 4);


					case "h":
						return hours % 12 || 12;
					case "hh":
						return pad(hours % 12 || 12, 2);


					case "H":
						return hours;
					case "HH":
						return pad(hours, 2);

					case "m":
						return minutes;
					case "mm":
						return pad(minutes, 2);


					case "s":
						return seconds;
					case "ss":
						return pad(seconds, 2);

					case "f":
						return String(milliseconds).slice(0, 1);
					case "ff":
						return pad(String(milliseconds).slice(0, 2), 2);
					case "fff":
						return pad(String(milliseconds).slice(0, 3), 3);


					case "t":
						return hours < 12 ? "a" : "p";
					case "tt":
						return hours < 12 ? "am" : "pm";
					case "T":
						return hours < 12 ? "A" : "P";
					case "TT":
						return hours < 12 ? "AM" : "PM";


					case "K":
						return utc ? "UTC" : (String(dt).match(timezone) || [""]).pop().replace(timezoneClip, ""); // Time Zone;
					case "z":
						return (offset > 0 ? "-" : "+") + Math.floor(Math.abs(offset) / 60); // Hour Offset from UTC without padding
					case "zz":
						return (offset > 0 ? "-" : "+") + pad(Math.floor(Math.abs(offset) / 60), 2); // Hour Offset from UTC with padding
					case "zzz":
						return (offset > 0 ? "-" : "+") + pad(Math.floor(Math.abs(offset) / 60), 2) + pad(Math.abs(offset) % 60, 2) // Hour and Minute Offset from UTC with padding

					default:
						return key.slice(1, key.length - 1);

				}
			});

			return result;
		}
	}();


	var numberFormat = function (v, fs, cultureInfo) {
		v = Number(v);
		var isNegative = v < 0 ? true : false;
		if (isNegative) v *= -1;

		decimalSeparator = cultureInfo ? cultureInfo.decimalSeparator : ".";
		digitGroupSeparator = cultureInfo ? cultureInfo.digitGroupSeparator : ",";

		var vString = "";
		fs = String(fs);
		var multiplier = 1;
		var temp;
		var result = "";

		var matches = "";
		var decimalPosition = -1;
		var fsBeforeDecimal = [];
		var fsAfterDecimal = [];
		var noPhBeforeDecimal = 0; // Number of Placeholders before Decimal
		var noPhAfterDecimal = 0; // Number of Placeholders after Decimal
		var noComma = 0;
		var multiplier = 1;
		var isScientificNotation = false;
		var exponent = 0;

		var matches = fs.match(/"[^"]*"|'[^']*'|[eE][+-]*[0]+|[,]+[.]|‰|./g);
		//window.console.log(matches + " = " + matches.length);

		for (var i = 0; matches && i < matches.length; i++) {
			var match = matches[i];

			if (match === "." && decimalPosition < 0) {
				decimalPosition = i;
				continue;
			} else if (match === "%") {
				multiplier *= 100;
			} else if (match === "‰") {
				multiplier *= 1000;
				continue;
			} else if (match[0] === "," && match[match.length - 1] === ".") {
				multiplier /= Math.pow(1000, match.length - 1);
				decimalPosition = i + match.length - 1;
				continue;
			} else if ((match[0] === "E" || match[0] === "e") && match[match.length - 1] === "0") {
				isScientificNotation = true;
			}

			if (decimalPosition < 0) {
				fsBeforeDecimal.push(match);
				if (match === "#" || match === "0")
					noPhBeforeDecimal++;
				else if (match === ",")
					noComma++;
			}
			else {
				fsAfterDecimal.push(match);
				if (match === "#" || match === "0")
					noPhAfterDecimal++;
			}
		}

		if (isScientificNotation) {
			var integer = Math.floor(v);
			exponent = (integer === 0 ? "" : String(integer)).length - noPhBeforeDecimal;
			multiplier /= Math.pow(10, exponent);
		}

		v *= multiplier;

		if (decimalPosition < 0)
			decimalPosition = i;

		vString = v.toFixed(noPhAfterDecimal);
		var split = vString.split(".");
		//window.console.log(split);
		var vStringBeforeDecimal = (split[0] + "").split("");
		var vStringAfterDecimal = (split[1] + "").split("");

		if (vStringBeforeDecimal && vStringBeforeDecimal[0] === "0")
			vStringBeforeDecimal.shift();

		//window.console.log(fsBeforeDecimal + "<---------->" + fsAfterDecimal + " &        " + vStringBeforeDecimal + "<---------->" + vStringAfterDecimal);

		var noPhProcessed = 0;
		var noDigitsAdded = 0;
		var noCommaAdded = 0;
		var commaDistance = 0;
		var distanceFromLastComma = 0;

		while (fsBeforeDecimal.length > 0) {
			var match = fsBeforeDecimal.pop();

			if (match === "#" || match === "0") {
				noPhProcessed++;

				if (noPhProcessed === noPhBeforeDecimal) {
					var digits = vStringBeforeDecimal;
					vStringBeforeDecimal = [];

					if (match === "0") {
						//var totalDigits = result.match(/[0-9]/g).length;
						var toPad = noPhBeforeDecimal - noDigitsAdded - (digits ? digits.length : 0);

						while (toPad > 0) {
							digits.unshift("0");
							toPad--;
						}
					}

					while (digits.length > 0) {
						result = digits.pop() + result;
						distanceFromLastComma++;

						if (distanceFromLastComma % commaDistance === 0 && noCommaAdded === noComma && digits.length > 0)
							result = digitGroupSeparator + result;
					}

					if (isNegative)
						result = "-" + result;

				} else {
					if (vStringBeforeDecimal.length > 0) {
						result = vStringBeforeDecimal.pop() + result;
						noDigitsAdded++;
						distanceFromLastComma++;
					}
					else if (match === "0") {
						result = "0" + result;
						noDigitsAdded++;
						distanceFromLastComma++;
					}

					if (distanceFromLastComma % commaDistance === 0 && noCommaAdded === noComma && vStringBeforeDecimal.length > 0)
						result = digitGroupSeparator + result;
				}


			} else if ((match[0] === "E" || match[0] === "e") && match[match.length - 1] === "0" && /[eE][+-]*[0]+/.test(match)) {
				if (exponent < 0)
					match = match.replace("+", "").replace("-", "");
				else
					match = match.replace("-", "")

				result += match.replace(/[0]+/, function ($0) {
					return pad(exponent, $0.length);
				});


			} else {
				if (match === ",") {
					noCommaAdded++;
					commaDistance = distanceFromLastComma;
					distanceFromLastComma = 0;

					if (vStringBeforeDecimal.length > 0)
						result = digitGroupSeparator + result;
				} else if (match.length > 1 && ((match[0] === "\"" && match[match.length - 1] === "\"") || (match[0] === "'" && match[match.length - 1] === "'"))) {
					result = match.slice(1, match.length - 1) + result;
				}
				else
					result = match + result;
			}
		}

		var charCount = 0;

		while (fsAfterDecimal.length > 0) {
			match = fsAfterDecimal.shift();

			if (match === "#" || match === "0") {
				if (vStringAfterDecimal.length > 0 && Number(vStringAfterDecimal.join("")) !== 0) {
					result += (charCount++ === 0 ? decimalSeparator : "") + vStringAfterDecimal.shift();
				}
				else if (match === "0") {
					result += (charCount++ === 0 ? decimalSeparator : "") + "0";
				}
			} else if (match.length > 1 && ((match[0] === "\"" && match[match.length - 1] === "\"") || (match[0] === "'" && match[match.length - 1] === "'"))) {
				result += (charCount++ === 0 ? decimalSeparator : "") + match.slice(1, match.length - 1);
			} else if ((match[0] === "E" || match[0] === "e") && match[match.length - 1] === "0" && /[eE][+-]*[0]+/.test(match)) {
				if (exponent < 0)
					match = match.replace("+", "").replace("-", "");
				else
					match = match.replace("-", "")
				result += match.replace(/[0]+/, function ($0) {
					return pad(exponent, $0.length);
				});
			} else {
				result += (charCount++ === 0 ? decimalSeparator : "") + match;
			}
		}

		//window.console.log(result);
		return result;
	}

	//#endregion formatting functions/methods

	function getObjectId(x, y, ctx) {
		x *= devicePixelBackingStoreRatio;
		y *= devicePixelBackingStoreRatio;
		var pixels = ctx.getImageData(x, y, 2, 2).data;
		var isObject = true;

		for (var i = 0; i < 4; i++) {

			if (pixels[i] !== pixels[i + 4] | pixels[i] !== pixels[i + 8] | pixels[i] !== pixels[i + 12]) {
				isObject = false;
				break;
			}
		}

		if (isObject) {
			return RGBToInt(pixels[0], pixels[1], pixels[2]);
		} else {
			return 0;
		}

		//window.console.log(pixels);
	}

	//extracts mouse coordinates from the event parameters
	var getMouseCoordinates = function (ev) {
		var x = 0;
		var y = 0;

		if (!ev) var ev = window.event;

		if (ev.offsetX || ev.offsetX === 0) {
			x = ev.offsetX;
			y = ev.offsetY;
		} else if (ev.layerX || ev.layerX == 0) { // Firefox
			x = ev.layerX;
			y = ev.layerY;
		}
		else {
			x = ev.pageX - ev.target.offsetLeft;
			y = ev.pageY - ev.target.offsetTop;
		}

		return { x: x, y: y };
	}

	function getFontString(prefix, object, fallbackObject) {
		var fontString = "";

		var fontStyleString = prefix ? prefix + "FontStyle" : "fontStyle";
		var fontWeightString = prefix ? prefix + "FontWeight" : "fontWeight";
		var fontSizeString = prefix ? prefix + "FontSize" : "fontSize";
		var fontFamilyString = prefix ? prefix + "FontFamily" : "fontFamily";



		fontString += object[fontStyleString] ? object[fontStyleString] + " " : (fallbackObject && fallbackObject[fontStyleString]) ? (fallbackObject[fontStyleString] + " ") : "";
		fontString += object[fontWeightString] ? object[fontWeightString] + " " : (fallbackObject && fallbackObject[fontWeightString]) ? (fallbackObject[fontWeightString] + " ") : "";
		fontString += object[fontSizeString] ? object[fontSizeString] + "px " : (fallbackObject && fallbackObject[fontSizeString]) ? (fallbackObject[fontSizeString] + "px ") : "";


		var fontFamily = object[fontFamilyString] ? object[fontFamilyString] + "" : (fallbackObject && fallbackObject[fontFamilyString]) ? (fallbackObject[fontFamilyString] + "") : "";

		if (!isCanvasSupported && fontFamily) {
			var firstFontFamily = fontFamily.split(",")[0];

			if (firstFontFamily[0] !== "'" && firstFontFamily[0] !== "\"")
				firstFontFamily = "'" + firstFontFamily + "'";

			fontString += firstFontFamily;
		} else
			fontString += fontFamily;

		return fontString;
	}

	function getProperty(propertyName, object, fallbackObject) {

		var value = propertyName in object ? object[propertyName] : fallbackObject[propertyName];

		return value;
	}

	var optimizeForHiDPI = true;
	//optimizeForHiDPI = false;

	var devicePixelRatio = window.devicePixelRatio || 1;
	var backingStoreRatio = 1;
	var devicePixelBackingStoreRatio = optimizeForHiDPI ? devicePixelRatio / backingStoreRatio : 1;



	function setCanvasSize(canvas, width, height) {

		if (isCanvasSupported && !!optimizeForHiDPI) {
			var ctx = canvas.getContext("2d");
			backingStoreRatio = ctx.webkitBackingStorePixelRatio ||
								ctx.mozBackingStorePixelRatio ||
								ctx.msBackingStorePixelRatio ||
								ctx.oBackingStorePixelRatio ||
								ctx.backingStorePixelRatio || 1;


			devicePixelBackingStoreRatio = devicePixelRatio / backingStoreRatio;

			canvas.width = width * devicePixelBackingStoreRatio;
			canvas.height = height * devicePixelBackingStoreRatio;

			if (devicePixelRatio !== backingStoreRatio) {

				canvas.style.width = width + 'px';
				canvas.style.height = height + 'px';

				ctx.scale(devicePixelBackingStoreRatio, devicePixelBackingStoreRatio);

			}

			//window.alert(backingStoreRatio);
			//window.alert(devicePixelRatio);

		} else {
			canvas.width = width;
			canvas.height = height;
		}

	}


	function createCanvas(width, height) {
		var canvas = document.createElement("canvas");
		canvas.setAttribute("class", "canvasjs-chart-canvas");

		setCanvasSize(canvas, width, height);

		if (!isCanvasSupported && typeof (G_vmlCanvasManager) !== "undefined") {
			G_vmlCanvasManager.initElement(canvas);
		}

		return canvas;
	}
	//#endregion Static Methods

	//#region Class Definitions

	//#region Class CanvasJSObject
	function CanvasJSObject(defaultsKey, options, theme) {
		this._defaultsKey = defaultsKey;

		currentTheme = {};

		if (theme && themes[theme] && themes[theme][defaultsKey])
			currentTheme = themes[theme][defaultsKey];

		this._options = options ? options : {};
		this.setOptions(this._options, currentTheme);
	};
	CanvasJSObject.prototype.setOptions = function (options, currentTheme) {

		if (!defaultOptions[this._defaultsKey]) {
			if (isDebugMode && window.console)
				console.log("defaults not set");
		}
		else {
			var defaults = defaultOptions[this._defaultsKey];

			for (prop in defaults) {
				if (options && prop in options)
					this[prop] = options[prop];
				else if (currentTheme && prop in currentTheme)
					this[prop] = currentTheme[prop]
				else this[prop] = defaults[prop];

				//if (typeof this[prop] === "function") {
				//    alert("function");
				//    this[prop] = this[prop]();
				//}
			}
		}
	}

	//Stores values in _oldOptions so that it can be tracked for any changes
	CanvasJSObject.prototype.trackChanges = function (option) {
		if (!this._options._oldOptions)
			this._options._oldOptions = {};

		this._options._oldOptions[option] = this._options[option];
	}

	CanvasJSObject.prototype.isBeingTracked = function (option) {
		if (!this._options._oldOptions)
			this._options._oldOptions = {};

		if (this._options._oldOptions[option])
			return true;
		else
			return false;
	}

	CanvasJSObject.prototype.hasOptionChanged = function (option) {
		if (!this._options._oldOptions)
			this._options._oldOptions = {};

		//if (!this._options._oldOptions[option])
		//    this._options._oldOptions[option] = null;

		var hasChanged = !(this._options._oldOptions[option] === this._options[option]);

		return hasChanged;
	}
	//#endregion Class CanvasJSObject

	//#region Class Chart
	function Chart(containerId, options) {
		options = options || {};

		Chart.parent.constructor.call(this, "Chart", options, options.theme ? options.theme : "theme1");

		var _this = this;


		this._containerId = containerId;
		this._objectsInitialized = false;
		this.ctx = null;
		this.overlaidCanvasCtx = null;
		this._indexLabels = [];
		this._panTimerId = 0;
		this._lastTouchEventType = "";
		this.panEnabled = false;
		this._defaultCursor = "default";
		this.plotArea = { canvas: null, ctx: null, x1: 0, y1: 0, x2: 0, y2: 0, width: 0, height: 0 };
		this._dataInRenderedOrder = [];

		//this._maxZIndex = 0;

		this._container = $(this._containerId)[0];

		if (!this._container) {
			if (window.console)
				window.console.log("CanvasJS Error: Chart Container with id \"" + this._containerId + "\" was not found");
			return;
		}

		this._container.innerHTML = "";

		var width = 0;
		var height = 0;

		if (this._options.width)
			width = this.width;
		else
			width = this._container.clientWidth > 0 ? this._container.clientWidth : this.width;

		if (this._options.height)
			height = this.height;
		else
			height = this._container.clientHeight > 0 ? this._container.clientHeight : this.height;

		this.width = width;
		this.height = height;

		this._canvasJSContainer = document.createElement("div");
		this._canvasJSContainer.setAttribute("class", "canvasjs-chart-container");

		this._canvasJSContainer.style.position = "relative";
		if (!isCanvasSupported) {
			this._canvasJSContainer.style.height = "0px";//In IE6 toolTip doesn't show at proper position if not set.
		}
		this._container.appendChild(this._canvasJSContainer);


		this.canvas = createCanvas(width, height);

		this.canvas.style.position = "absolute";
		if (this.canvas.getContext) {
			try {
				this.canvas.style.background = this.backgroundColor;
			} catch (e) { };
			this._canvasJSContainer.appendChild(this.canvas);
			this.ctx = this.canvas.getContext("2d");
			this.ctx.textBaseline = "top";
			extendCtx(this.ctx);
		} else
			return;

		//this.canvas.style.cursor = "pointer";

		if (!isCanvasSupported) {
			this.plotArea.canvas = createCanvas(width, height);
			this.plotArea.canvas.style.position = "absolute";
			this.plotArea.canvas.setAttribute("class", "plotAreaCanvas");
			this._canvasJSContainer.appendChild(this.plotArea.canvas);

			this.plotArea.ctx = this.plotArea.canvas.getContext("2d");
		} else {
			this.plotArea.ctx = this.ctx;
		}

		this.overlaidCanvas = createCanvas(width, height);
		this.overlaidCanvas.style.position = "absolute";
		this._canvasJSContainer.appendChild(this.overlaidCanvas);
		this.overlaidCanvasCtx = this.overlaidCanvas.getContext("2d");
		this.overlaidCanvasCtx.textBaseline = "top";

		this._eventManager = new EventManager(this);

		this._toolBar = document.createElement("div");
		this._toolBar.setAttribute("class", "canvasjs-chart-toolbar");
		this._toolBar.style.position = "absolute";
		this._toolBar.style.top = "0px";
		this._toolBar.style.right = "0px";
		this._canvasJSContainer.appendChild(this._toolBar);

		if (this.zoomEnabled) {
			this._zoomButton = document.createElement("button");
			this._zoomButton.appendChild(document.createTextNode("Pan"));
			this._toolBar.appendChild(this._zoomButton);
			addEvent(this._zoomButton, "click", function () {
				if (_this.zoomEnabled) {
					_this.zoomEnabled = false;
					_this.panEnabled = true;

					_this._zoomButton.innerHTML = _this._cultureInfo.zoomText;

					//_this._defaultCursor = "move";
					//_this.overlaidCanvas.style.cursor = _this._defaultCursor;
				} else {
					_this.zoomEnabled = true;
					_this.panEnabled = false;

					_this._zoomButton.innerHTML = _this._cultureInfo.panText;

					//_this._defaultCursor = "default";
					//_this.overlaidCanvas.style.cursor = _this._defaultCursor;
				}
				_this.render();
			});


			//this._panButton = document.createElement("button");
			//this._panButton.appendChild(document.createTextNode("Pan"));
			//this._toolBar.appendChild(this._panButton);
			//this._panButton.addEventListener("click", function () {
			//    _this.zoomEnabled = false;
			//    _this.panEnabled = true;
			//    _this.render();
			//}, false);
		}

		if (this.zoomEnabled) {

			this._resetButton = document.createElement("button");
			this._resetButton.appendChild(document.createTextNode("Reset"));
			this._toolBar.appendChild(this._resetButton);

			if (this._options.zoomEnabled) {
				this.zoomEnabled = true;
				this.panEnabled = false;
			} else {
				this.zoomEnabled = false;
				this.panEnabled = false;
			}

			this.overlaidCanvas.style.cursor = _this._defaultCursor;

			addEvent(this._resetButton, "click", function () {

				_this._toolTip.hide();

				if (_this.zoomEnabled || _this.panEnabled) {
					_this.zoomEnabled = true;
					_this.panEnabled = false;
					_this._zoomButton.innerHTML = _this._cultureInfo.panText;

					_this._defaultCursor = "default";
					_this.overlaidCanvas.style.cursor = _this._defaultCursor;
				} else {
					_this.zoomEnabled = false;
					_this.panEnabled = false;
				}

				if (_this._options.axisX && _this._options.axisX.minimum)
					_this.sessionVariables.axisX.internalMinimum = _this._options.axisX.minimum;
				else
					_this.sessionVariables.axisX.internalMinimum = null;

				if (_this._options.axisX && _this._options.axisX.maximum)
					_this.sessionVariables.axisX.internalMaximum = _this._options.axisX.maximum;
				else
					_this.sessionVariables.axisX.internalMaximum = null;

				_this.resetOverlayedCanvas();

				_this._toolBar.style.display = "none";

				_this.render();
			});
		}

		addEvent(window, "resize", function () {
			//this._container.addEventListener("DOMSubtreeModified", function () {

			var width = 0;
			var height = 0;

			if (_this._options.width)
				width = _this.width;
			else
				_this.width = width = _this._container.clientWidth > 0 ? _this._container.clientWidth : _this.width;

			if (_this._options.height)
				height = _this.height;
			else
				_this.height = height = _this._container.clientHeight > 0 ? _this._container.clientHeight : _this.height;

			if (_this.canvas.width !== width * devicePixelBackingStoreRatio || _this.canvas.height !== height * devicePixelBackingStoreRatio) {
				//_this.renderCount--;

				//_this.canvas.width = width;
				//_this.canvas.height = height;
				setCanvasSize(_this.canvas, width, height);

				//_this.overlaidCanvas.width = width;
				//_this.overlaidCanvas.height = height;
				setCanvasSize(_this.overlaidCanvas, width, height);
				setCanvasSize(_this._eventManager.ghostCanvas, width, height);


				_this.render();
			}
		});

		this._toolBar.style.display = "none";

		this.bounds = { x1: 0, y1: 0, x2: this.width, y2: this.height };

		var _this = this;

		addEvent(this.overlaidCanvas, 'click', function (e) {
			_this._mouseEventHandler(e);
		});

		addEvent(this.overlaidCanvas, 'mousemove', function (e) {
			_this._mouseEventHandler(e);
		});

		addEvent(this.overlaidCanvas, 'mouseup', function (e) {
			_this._mouseEventHandler(e);
		});

		addEvent(this.overlaidCanvas, 'mousedown', function (e) {
			_this._mouseEventHandler(e);
		});

		addEvent(this.overlaidCanvas, 'mouseout', function (e) {
			_this._mouseEventHandler(e);
		});


		addEvent(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerDown" : "touchstart", function (e) {
			_this._touchEventHandler(e);
		});

		addEvent(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerMove" : 'touchmove', function (e) {
			_this._touchEventHandler(e);
		});

		addEvent(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerUp" : 'touchend', function (e) {
			_this._touchEventHandler(e);
		});

		addEvent(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerCancel" : 'touchcancel', function (e) {
			_this._touchEventHandler(e);
		});



		this._toolTip = new ToolTip(this, this._options.toolTip, this.theme);

		this.layoutManager = new LayoutManager(this);
		this.data = null;
		this.axisX = null;
		this.axisY = null;
		this.axisY2 = null;
		this.renderCount = 0;

		if (this.creditText && this.creditHref) {
			this._creditLink = document.createElement("a");
			this._creditLink.setAttribute("class", "canvasjs-chart-credit");
			this._creditLink.setAttribute("style", "outline:none;margin:0px;position:absolute;right:3px;top:" + (height - 14) + "px;color:dimgrey;text-decoration:none;font-size:10px;font-family:Lucida Grande, Lucida Sans Unicode, Arial, sans-serif");

			this._creditLink.setAttribute("tabIndex", -1);
			this._creditLink.setAttribute("href", this.creditHref);
			this._creditLink.innerHTML = this.creditText;
			this._creditLink.setAttribute("target", "_blank");

			//this._creditLink.style.


			//var creditLinkString = "<a style='' href='" + (this.creditHref.indexOf("http://") === 0 ? this.creditHref : "http://" + this.creditHref) + "'>" + this.creditHref + "</a>";
			//var xmlDoc;


			//if (window.DOMParser) {
			//    var parser = new DOMParser();
			//    xmlDoc = parser.parseFromString(creditLinkString, "text/xml");
			//    this._creditLink = xmlDoc.firstChild;
			//}
			//else // Internet Explorer
			//{
			//    xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
			//    xmlDoc.async = false;
			//    xmlDoc.loadXML(creditLinkString);
			//    this._creditLink = xmlDoc.firstChild;
			//}
			this._canvasJSContainer.appendChild(this._creditLink);
		}


		this.sessionVariables = {
			axisX: {
				internalMinimum: null,
				internalMaximum: null
			},
			axisY: {
				internalMinimum: null,
				internalMaximum: null
			},
			axisY2: {
				internalMinimum: null,
				internalMaximum: null
			}
		};
	};
	extend(Chart, CanvasJSObject);

	// initialize chart objects
	Chart.prototype._initialize = function () {
		///<signature>
		///<summary>Initializes Chart objects/state. Creates DataSeries class instance for each DataSeries provided by ther user. Sets the Axis Type based on the user data</summary>
		///</signature>
		//this.width = this.width;

		this._selectedColorSet = typeof (colorSets[this.colorSet]) !== "undefined" ? colorSets[this.colorSet] : colorSets["colorSet1"];

		this.ctx.clearRect(0, 0, this.width, this.height);
		this.ctx.beginPath();

		this.axisX = null;
		this.axisY = null;
		this.axisY2 = null;
		this._indexLabels = [];
		this._dataInRenderedOrder = [];

		this._events = [];
		if (this._eventManager)
			this._eventManager.reset();

		this.plotInfo = {
			//xMin: Infinity, xMax: -Infinity,
			//yMin: Infinity, yMax: -Infinity,
			//viewPortXMin: Infinity, viewPortXMax: -Infinity,
			//viewPortYMin: Infinity, viewPortYMax: -Infinity,
			//xMinDiff: Infinity,
			axisPlacement: null,
			axisXValueType: null,
			plotTypes: []//array of plotType: {type:"", axisYType: "primary", dataSeriesIndexes:[]}
		};

		this.layoutManager.reset();

		this._cultureInfo = new CultureInfo(this, this._options.culture);

		this.data = [];
		var dataSeriesIndex = 0;

		for (var series = 0; series < this._options.data.length; series++) {
			//for (series in this._options.data) {

			dataSeriesIndex++;

			if (!(!this._options.data[series].type || Chart._supportedChartTypes.indexOf(this._options.data[series].type) >= 0))
				continue;

			var dataSeries = new DataSeries(this, this._options.data[series], this.theme, dataSeriesIndex - 1, ++this._eventManager.lastObjectId);
			if (dataSeries.name === null)
				dataSeries.name = "DataSeries " + (dataSeriesIndex);

			if (dataSeries.color === null) {
				if (this._options.data.length > 1) {
					dataSeries._colorSet = [this._selectedColorSet[dataSeries.index % this._selectedColorSet.length]];
					dataSeries.color = this._selectedColorSet[dataSeries.index % this._selectedColorSet.length];
				} else {
					if (dataSeries.type === "line" || dataSeries.type === "stepLine" || dataSeries.type === "spline" || dataSeries.type === "area" || dataSeries.type === "stepArea" || dataSeries.type === "splineArea" || dataSeries.type === "stackedArea" || dataSeries.type === "stackedArea100") {
						dataSeries._colorSet = [this._selectedColorSet[0]];
					}
					else
						dataSeries._colorSet = this._selectedColorSet;
				}
			} else {
				dataSeries._colorSet = [dataSeries.color];
			}

			if (dataSeries.markerSize === null) {
				if (((dataSeries.type === "line" || dataSeries.type === "stepLine" || dataSeries.type === "spline") && dataSeries.dataPoints && dataSeries.dataPoints.length < this.width / 16) || dataSeries.type === "scatter") {
					//if (dataSeries.type === "line") {
					dataSeries.markerSize = 8;
				}
			}

			if ((dataSeries.type === "bubble" || dataSeries.type === "scatter") && dataSeries.dataPoints) {
				dataSeries.dataPoints.sort(compareDataPointX)
			}

			//if (dataSeries.markerBorderThickness === null && dataSeries.type === "scatter") {
			//    dataSeries.markerBorderThickness = 2;
			//}

			//if (dataSeries.markerType === null) {
			//    if (dataSeries.type === "line" & dataSeries.dataPoints.length < 500) {
			//        dataSeries.markerType = "circle";
			//    }
			//}

			this.data.push(dataSeries);

			var seriesAxisPlacement = dataSeries.axisPlacement;

			//if (isDebugMode && window.console)
			//    window.console.log(dataSeries.type);

			var errorMessage;

			if (seriesAxisPlacement === "normal") {

				if (this.plotInfo.axisPlacement === "xySwapped") {
					errorMessage = "You cannot combine \"" + dataSeries.type + "\" with bar chart";
				} else if (this.plotInfo.axisPlacement === "none") {
					errorMessage = "You cannot combine \"" + dataSeries.type + "\" with pie chart";
				} else if (this.plotInfo.axisPlacement === null)
					this.plotInfo.axisPlacement = "normal";
			}
			else if (seriesAxisPlacement === "xySwapped") {

				if (this.plotInfo.axisPlacement === "normal") {
					errorMessage = "You cannot combine \"" + dataSeries.type + "\" with line, area, column or pie chart";
				} else if (this.plotInfo.axisPlacement === "none") {
					errorMessage = "You cannot combine \"" + dataSeries.type + "\" with pie chart";
				} else if (this.plotInfo.axisPlacement === null)
					this.plotInfo.axisPlacement = "xySwapped";
			}
			else if (seriesAxisPlacement == "none") {

				if (this.plotInfo.axisPlacement === "normal") {
					errorMessage = "You cannot combine \"" + dataSeries.type + "\" with line, area, column or bar chart";
				} else if (this.plotInfo.axisPlacement === "xySwapped") {
					errorMessage = "You cannot combine \"" + dataSeries.type + "\" with bar chart";
				} else if (this.plotInfo.axisPlacement === null)
					this.plotInfo.axisPlacement = "none";
			}

			if (errorMessage && window.console) {
				window.console.log(errorMessage);
				return;
			}
		}

		//if (isDebugMode && window.console) {
		//    window.console.log("xMin: " + this.plotInfo.viewPortXMin + "; xMax: " + this.plotInfo.viewPortXMax + "; yMin: " + this.plotInfo.yMin + "; yMax: " + this.plotInfo.yMax);
		//}

		this._objectsInitialized = true;
	}

	Chart._supportedChartTypes = ["line", "stepLine", "spline", "column", "area", "stepArea", "splineArea", "bar", "bubble", "scatter",
		"stackedColumn", "stackedColumn100", "stackedBar", "stackedBar100",
		"stackedArea", "stackedArea100",
		"pie", "doughnut"
	];

	//indexOf is not supported in IE8-
	if (!Chart._supportedChartTypes.indexOf) {
		Chart._supportedChartTypes.indexOf = function (elt /*, from*/) {
			var len = this.length >>> 0;

			var from = Number(arguments[1]) || 0;
			from = (from < 0)
				 ? Math.ceil(from)
				 : Math.floor(from);
			if (from < 0)
				from += len;

			for (; from < len; from++) {
				if (from in this &&
					this[from] === elt)
					return from;
			}
			return -1;
		};
	}

	Chart.prototype.render = function () {
		//var dt = Date.now();

		//var fontHeight = getFontHeightInPixels("'Nato Sans'", 18, false);

		//console.log(fontHeight);

		this._initialize();

		//Create Primary and Secondary axis and assign them to the series
		for (var i = 0; i < this.data.length; i++) {

			if (this.plotInfo.axisPlacement === "normal" || this.plotInfo.axisPlacement === "xySwapped") {
				if (!this.data[i].axisYType || this.data[i].axisYType === "primary") {
					if (!this.axisY) {

						if (this.plotInfo.axisPlacement === "normal") {
							this.axisY = new Axis(this, this._options.axisY, "axisY", "left");
						}
						else if (this.plotInfo.axisPlacement === "xySwapped") {
							this.axisY = new Axis(this, this._options.axisY, "axisY", "bottom");
						}
					}
					this.data[i].axisY = this.axisY;
				}
				else if (this.data[i].axisYType === "secondary") {
					if (!this.axisY2) {
						if (this.plotInfo.axisPlacement === "normal") {
							this.axisY2 = new Axis(this, this._options.axisY2, "axisY", "right");
						}
						else if (this.plotInfo.axisPlacement === "xySwapped") {
							this.axisY2 = new Axis(this, this._options.axisY2, "axisY", "top");
						}
					}
					this.data[i].axisY = this.axisY2;
				}

				if (!this.axisX) {
					if (this.plotInfo.axisPlacement === "normal") {
						this.axisX = new Axis(this, this._options.axisX, "axisX", "bottom");
					} else if (this.plotInfo.axisPlacement === "xySwapped") {
						this.axisX = new Axis(this, this._options.axisX, "axisX", "left");
					}
				}

				this.data[i].axisX = this.axisX;
			}
		}

		this._processData();// Categorises the dataSeries and calculates min, max and other values

		if (this._options.title) {
			this._title = new Title(this, this._options.title);
			this._title.render();
		}

		this.legend = new Legend(this, this._options.legend, this.theme);
		for (var i = 0; i < this.data.length; i++) {
			if (this.data[i].showInLegend)
				this.legend.dataSeries.push(this.data[i]);
		}
		this.legend.render();

		//TBI: Revisit and check if the functionality is enough.
		if (this.plotInfo.axisPlacement === "normal" || this.plotInfo.axisPlacement === "xySwapped") {
			var freeSpace = this.layoutManager.getFreeSpace();

			//window.alert(freeSpace.width + "; " + freeSpace.height);
			//window.alert(this.width + "; " + this.height);
			//window.alert(this._canvasJSContainer.clientWidth + "; " + this._canvasJSContainer.clientHeight);


			Axis.setLayoutAndRender(this.axisX, this.axisY, this.axisY2, this.plotInfo.axisPlacement, this.layoutManager.getFreeSpace());
		} else if (this.plotInfo.axisPlacement === "none") {
			//In case of charts with axis this method is called inside setLayoutAndRender
			this.preparePlotArea();
		}
		else {
			return;
		}

		for (var i = 0; i < this.plotInfo.plotTypes.length; i++) {
			var plotType = this.plotInfo.plotTypes[i];

			for (var j = 0; j < plotType.plotUnits.length; j++) {

				var plotUnit = plotType.plotUnits[j];

				if (plotUnit.type === "line")
					this.renderLine(plotUnit);
				else if (plotUnit.type === "stepLine")
					this.renderStepLine(plotUnit);
				else if (plotUnit.type === "spline")
					this.renderSpline(plotUnit);
				else if (plotUnit.type === "column")
					this.renderColumn(plotUnit);
				else if (plotUnit.type === "bar")
					this.renderBar(plotUnit);
				else if (plotUnit.type === "area")
					this.renderArea(plotUnit);
				else if (plotUnit.type === "stepArea")
					this.renderStepArea(plotUnit);
				else if (plotUnit.type === "splineArea")
					this.renderSplineArea(plotUnit);
				else if (plotUnit.type === "stackedColumn")
					this.renderStackedColumn(plotUnit);
				else if (plotUnit.type === "stackedColumn100")
					this.renderStackedColumn100(plotUnit);
				else if (plotUnit.type === "stackedBar")
					this.renderStackedBar(plotUnit);
				else if (plotUnit.type === "stackedBar100")
					this.renderStackedBar100(plotUnit);
				else if (plotUnit.type === "stackedArea")
					this.renderStackedArea(plotUnit);
				else if (plotUnit.type === "stackedArea100")
					this.renderStackedArea100(plotUnit);
				else if (plotUnit.type === "bubble")
					this.renderBubble(plotUnit);
				else if (plotUnit.type === "scatter")
					this.renderScatter(plotUnit);
				else if (plotUnit.type === "pie")
					this.renderPie(plotUnit);
				else if (plotUnit.type === "doughnut")
					this.renderPie(plotUnit);

				for (var k = 0; k < plotUnit.dataSeriesIndexes.length; k++) {
					this._dataInRenderedOrder.push(this.data[plotUnit.dataSeriesIndexes[k]]);
				}
			}
		}

		if (this._indexLabels.length > 0)
			this.renderIndexLabels();

		this.attachPlotAreaEventHandlers();

		if (!this.zoomEnabled && !this.panEnabled && this._toolBar.style.display !== "none") {
			this._toolBar.style.display = "none";
		}

		this._toolTip._updateToolTip();

		this.renderCount++;

		//if (window.console) {
		//    window.console.log(new Date().getTime() - dt);
		//}

		if (isDebugMode) {

			var _this = this;
			setTimeout(function () {
				var ghostCanvasCopy = document.getElementById("ghostCanvasCopy");

				if (ghostCanvasCopy) {
					//console.log(ghostCanvasCopy.clientWidth);
					setCanvasSize(ghostCanvasCopy, _this.width, _this.height);
					var ghostCanvasCopyCtx = ghostCanvasCopy.getContext("2d");

					//ghostCanvasCopyCtx.scale(1, 1);
					//var imageData = this._eventManager.ghostCtx.getImageData(0, 0, this._container.clientWidth, this._container.clientHeight);
					//this._eventManager.ghostCtx.drawImage(this._eventManager.ghostCanvas, 0, 0);
					//this.ctx.drawImage(this._eventManager.ghostCanvas, 0, 0);

					ghostCanvasCopyCtx.drawImage(_this._eventManager.ghostCanvas, 0, 0);
					//_this._canvasJSContainer.appendChild(_this._eventManager.ghostCanvas);
					//_this.overlaidCanvasCtx.drawImage(_this._eventManager.ghostCanvas, 0, 0);
				}
			}, 2000);
		}
	}

	Chart.prototype.attachPlotAreaEventHandlers = function () {

		//this._toolBar.style.display = "inline";

		this.attachEvent({
			context: this,
			chart: this,
			mousedown: this._plotAreaMouseDown,
			mouseup: this._plotAreaMouseUp,
			mousemove: this._plotAreaMouseMove,
			cursor: this.zoomEnabled ? "col-resize" : "move",
			cursor: this.panEnabled ? "move" : "default",
			capture: true,
			bounds: this.plotArea
		});

	}

	Chart.prototype.categoriseDataSeries = function () {
		var dataSeries = "";

		for (var i = 0; i < this.data.length; i++) {
			dataSeries = this.data[i]
			if (!dataSeries.dataPoints || dataSeries.dataPoints.length === 0)
				continue;

			if (Chart._supportedChartTypes.indexOf(dataSeries.type) >= 0) {

				var plotType = null;
				var plotTypeExists = false;

				var plotUnit = null;
				var plotUnitExists = false;

				for (var j = 0; j < this.plotInfo.plotTypes.length; j++) {
					if (this.plotInfo.plotTypes[j].type === dataSeries.type) {
						plotTypeExists = true;
						var plotType = this.plotInfo.plotTypes[j];
						break;
					}
				}

				if (!plotTypeExists) {
					plotType = {
						type: dataSeries.type,
						totalDataSeries: 0,
						plotUnits: []
					};
					this.plotInfo.plotTypes.push(plotType)
				}

				for (var j = 0; j < plotType.plotUnits.length; j++) {
					if (plotType.plotUnits[j].axisYType === dataSeries.axisYType) {
						plotUnitExists = true;
						var plotUnit = plotType.plotUnits[j];
						break;
					}
				}

				if (!plotUnitExists) {
					plotUnit = {
						type: dataSeries.type,
						previousDataSeriesCount: 0, //to be set next
						index: plotType.plotUnits.length,
						plotType: plotType,
						axisYType: dataSeries.axisYType,
						axisY: dataSeries.axisYType === "primary" ? this.axisY : this.axisY2,
						axisX: this.axisX,
						dataSeriesIndexes: [] //index of dataSeries
					}
					plotType.plotUnits.push(plotUnit);
				}

				plotType.totalDataSeries++;

				plotUnit.dataSeriesIndexes.push(i);
			}
		}

		for (var i = 0; i < this.plotInfo.plotTypes.length; i++) {
			var plotType = this.plotInfo.plotTypes[i];
			var previousDataSeriesCount = 0;

			for (var j = 0; j < plotType.plotUnits.length; j++) {

				plotType.plotUnits[j].previousDataSeriesCount = previousDataSeriesCount;

				previousDataSeriesCount += plotType.plotUnits[j].dataSeriesIndexes.length;
			}
		}
	}

	Chart.prototype.assignIdToDataPoints = function () {

		for (var i = 0; i < this.data.length; i++) {
			var dataSeries = this.data[i];

			if (!dataSeries.dataPoints)
				continue;

			var length = dataSeries.dataPoints.length;

			for (var j = 0; j < length; j++) {
				dataSeries.dataPointIds[j] = ++this._eventManager.lastObjectId;
			}
		}
	}

	Chart.prototype._processData = function () {
		this.assignIdToDataPoints();
		this.categoriseDataSeries();

		for (var i = 0; i < this.plotInfo.plotTypes.length; i++) {
			var plotType = this.plotInfo.plotTypes[i];

			for (var j = 0; j < plotType.plotUnits.length; j++) {

				var plotUnit = plotType.plotUnits[j];

				if (plotUnit.type === "line" || plotUnit.type === "stepLine" || plotUnit.type === "spline" || plotUnit.type === "column" || plotUnit.type === "area" || plotUnit.type === "stepArea" || plotUnit.type === "splineArea" || plotUnit.type === "bar" || plotUnit.type === "bubble" || plotUnit.type === "scatter")
					this._processMultiseriesPlotUnit(plotUnit);
				else if (plotUnit.type === "stackedColumn" || plotUnit.type === "stackedBar" || plotUnit.type === "stackedArea")
					this._processStackedPlotUnit(plotUnit);
				else if (plotUnit.type === "stackedColumn100" || plotUnit.type === "stackedBar100" || plotUnit.type === "stackedArea100")
					this._processStacked100PlotUnit(plotUnit);
			}
		}

	}

	Chart.prototype._processMultiseriesPlotUnit = function (plotUnit) {
		if (!plotUnit.dataSeriesIndexes || plotUnit.dataSeriesIndexes.length < 1)
			return;

		var axisYDataInfo = plotUnit.axisY.dataInfo;
		var axisXDataInfo = plotUnit.axisX.dataInfo;
		var dataPointX, dataPointY;
		var isDateTime = false;


		for (var j = 0; j < plotUnit.dataSeriesIndexes.length; j++) {
			var dataSeries = this.data[plotUnit.dataSeriesIndexes[j]];
			var i = 0;
			var isFirstDPInViewPort = false;
			var isLastDPInViewPort = false;

			if (dataSeries.axisPlacement === "normal" || dataSeries.axisPlacement === "xySwapped") {

				var plotAreaXMin = this.sessionVariables.axisX.internalMinimum ? this.sessionVariables.axisX.internalMinimum : (this._options.axisX && this._options.axisX.minimum) ? this._options.axisX.minimum : -Infinity;
				var plotAreaXMax = this.sessionVariables.axisX.internalMaximum ? this.sessionVariables.axisX.internalMaximum : (this._options.axisX && this._options.axisX.maximum) ? this._options.axisX.maximum : Infinity;
			}


			if (dataSeries.dataPoints[i].x && dataSeries.dataPoints[i].x.getTime || dataSeries.xValueType === "dateTime") {
				isDateTime = true;
			}

			for (i = 0; i < dataSeries.dataPoints.length; i++) {

				if (typeof dataSeries.dataPoints[i].x === "undefined") {
					dataSeries.dataPoints[i].x = i;
				}

				if (dataSeries.dataPoints[i].x.getTime) {
					isDateTime = true;
					dataPointX = dataSeries.dataPoints[i].x.getTime();//dataPointX is used so that getTime is called only once in case of dateTime values
				}
				else
					dataPointX = dataSeries.dataPoints[i].x;

				dataPointY = dataSeries.dataPoints[i].y;


				if (dataPointX < axisXDataInfo.min)
					axisXDataInfo.min = dataPointX;
				if (dataPointX > axisXDataInfo.max)
					axisXDataInfo.max = dataPointX;

				if (dataPointY < axisYDataInfo.min)
					axisYDataInfo.min = dataPointY;

				if (dataPointY > axisYDataInfo.max)
					axisYDataInfo.max = dataPointY;


				if (i > 0) {
					var xDiff = dataPointX - dataSeries.dataPoints[i - 1].x;
					xDiff < 0 && (xDiff = xDiff * -1); //If Condition shortcut

					if (axisXDataInfo.minDiff > xDiff && xDiff !== 0) {
						axisXDataInfo.minDiff = xDiff;
					}
				}

				// This section makes sure that partially visible dataPoints are included in the begining
				if (dataPointX < plotAreaXMin && !isFirstDPInViewPort) {
					continue;
				} else if (!isFirstDPInViewPort) {
					isFirstDPInViewPort = true;

					if (i > 0) {
						i -= 2;
						continue;
					}
				}

				// This section makes sure that partially visible dataPoints are included at the end
				if (dataPointX > plotAreaXMax && !isLastDPInViewPort) {
					isLastDPInViewPort = true;
				} else if (dataPointX > plotAreaXMax && isLastDPInViewPort) {
					continue;
				}

				if (dataSeries.dataPoints[i].label)
					plotUnit.axisX.labels[dataPointX] = dataSeries.dataPoints[i].label;


				if (dataPointX < axisXDataInfo.viewPortMin)
					axisXDataInfo.viewPortMin = dataPointX;
				if (dataPointX > axisXDataInfo.viewPortMax)
					axisXDataInfo.viewPortMax = dataPointX;

				if (dataPointY < axisYDataInfo.viewPortMin)
					axisYDataInfo.viewPortMin = dataPointY;
				if (dataPointY > axisYDataInfo.viewPortMax)
					axisYDataInfo.viewPortMax = dataPointY;
			}

			this.plotInfo.axisXValueType = dataSeries.xValueType = isDateTime ? "dateTime" : "number";
		}

		//this.dataPoints.sort(compareDataPointX);
		//this.dataPoints.sort(function (dataPoint1, dataPoint2) { return dataPoint1.x - dataPoint2.x; });
	}

	Chart.prototype._processStackedPlotUnit = function (plotUnit) {
		if (!plotUnit.dataSeriesIndexes || plotUnit.dataSeriesIndexes.length < 1)
			return;

		var axisYDataInfo = plotUnit.axisY.dataInfo;
		var axisXDataInfo = plotUnit.axisX.dataInfo;

		var dataPointX, dataPointY;
		var isDateTime = false;

		var dataPointYPositiveSums = [];
		var dataPointYNegativeSums = [];

		for (var j = 0; j < plotUnit.dataSeriesIndexes.length; j++) {
			var dataSeries = this.data[plotUnit.dataSeriesIndexes[j]];
			var i = 0;
			var isFirstDPInViewPort = false;
			var isLastDPInViewPort = false;

			if (dataSeries.axisPlacement === "normal" || dataSeries.axisPlacement === "xySwapped") {

				var plotAreaXMin = this.sessionVariables.axisX.internalMinimum ? this.sessionVariables.axisX.internalMinimum : (this._options.axisX && this._options.axisX.minimum) ? this._options.axisX.minimum : -Infinity;
				var plotAreaXMax = this.sessionVariables.axisX.internalMaximum ? this.sessionVariables.axisX.internalMaximum : (this._options.axisX && this._options.axisX.maximum) ? this._options.axisX.maximum : Infinity;
			}


			if (dataSeries.dataPoints[i].x && dataSeries.dataPoints[i].x.getTime || dataSeries.xValueType === "dateTime") {
				isDateTime = true;
			}

			for (i = 0; i < dataSeries.dataPoints.length; i++) {

				// Requird when no x values are provided 
				if (typeof dataSeries.dataPoints[i].x === "undefined") {
					dataSeries.dataPoints[i].x = i;
				}

				if (dataSeries.dataPoints[i].x.getTime) {
					isDateTime = true;
					dataPointX = dataSeries.dataPoints[i].x.getTime();//dataPointX is used so that getTime is called only once in case of dateTime values
				}
				else
					dataPointX = dataSeries.dataPoints[i].x;

				dataPointY = dataSeries.dataPoints[i].y;



				if (dataPointX < axisXDataInfo.min)
					axisXDataInfo.min = dataPointX;
				if (dataPointX > axisXDataInfo.max)
					axisXDataInfo.max = dataPointX;

				if (i > 0) {
					var xDiff = dataPointX - dataSeries.dataPoints[i - 1].x;
					xDiff < 0 && (xDiff = xDiff * -1); //If Condition shortcut

					if (axisXDataInfo.minDiff > xDiff && xDiff !== 0) {
						axisXDataInfo.minDiff = xDiff;
					}
				}

				// This section makes sure that partially visible dataPoints are included in the begining
				if (dataPointX < plotAreaXMin && !isFirstDPInViewPort) {
					continue;
				} else if (!isFirstDPInViewPort) {
					isFirstDPInViewPort = true;

					if (i > 0) {
						i -= 2;
						continue;
					}
				}

				// This section makes sure that partially visible dataPoints are included at the end
				if (dataPointX > plotAreaXMax && !isLastDPInViewPort) {
					isLastDPInViewPort = true;
				} else if (dataPointX > plotAreaXMax && isLastDPInViewPort) {
					continue;
				}


				if (dataSeries.dataPoints[i].label)
					plotUnit.axisX.labels[dataPointX] = dataSeries.dataPoints[i].label;

				if (dataPointX < axisXDataInfo.viewPortMin)
					axisXDataInfo.viewPortMin = dataPointX;
				if (dataPointX > axisXDataInfo.viewPortMax)
					axisXDataInfo.viewPortMax = dataPointX;

				if (dataPointY >= 0) {
					if (dataPointYPositiveSums[dataPointX])
						dataPointYPositiveSums[dataPointX] += dataPointY;
					else
						dataPointYPositiveSums[dataPointX] = dataPointY;
				} else {
					if (dataPointYNegativeSums[dataPointX])
						dataPointYNegativeSums[dataPointX] += dataPointY;
					else
						dataPointYNegativeSums[dataPointX] = dataPointY;
				}
			}

			this.plotInfo.axisXValueType = dataSeries.xValueType = isDateTime ? "dateTime" : "number";
		}

		for (i in dataPointYPositiveSums) {

			if (isNaN(i)) {
				continue;
			}
			var ySum = dataPointYPositiveSums[i];

			if (ySum < axisYDataInfo.min)
				axisYDataInfo.min = ySum;

			if (ySum > axisYDataInfo.max)
				axisYDataInfo.max = ySum;

			if (i < axisXDataInfo.viewPortMin || i > axisXDataInfo.viewPortMax)
				continue;

			if (ySum < axisYDataInfo.viewPortMin)
				axisYDataInfo.viewPortMin = ySum;
			if (ySum > axisYDataInfo.viewPortMax)
				axisYDataInfo.viewPortMax = ySum;
		}

		for (i in dataPointYNegativeSums) {

			if (isNaN(i)) {
				continue;
			}

			var ySum = dataPointYNegativeSums[i];

			if (ySum < axisYDataInfo.min)
				axisYDataInfo.min = ySum;

			if (ySum > axisYDataInfo.max)
				axisYDataInfo.max = ySum;

			if (i < axisXDataInfo.viewPortMin || i > axisXDataInfo.viewPortMax)
				continue;

			if (ySum < axisYDataInfo.viewPortMin)
				axisYDataInfo.viewPortMin = ySum;
			if (ySum > axisYDataInfo.viewPortMax)
				axisYDataInfo.viewPortMax = ySum;
		}


		//this.dataPoints.sort(compareDataPointX);
		//this.dataPoints.sort(function (dataPoint1, dataPoint2) { return dataPoint1.x - dataPoint2.x; });

		//window.console.log("viewPortYMin: " + plotInfo.viewPortYMin + "; viewPortYMax: " + plotInfo.viewPortYMax);
	}

	Chart.prototype._processStacked100PlotUnit = function (plotUnit) {
		if (!plotUnit.dataSeriesIndexes || plotUnit.dataSeriesIndexes.length < 1)
			return;

		var axisYDataInfo = plotUnit.axisY.dataInfo;
		var axisXDataInfo = plotUnit.axisX.dataInfo;

		var dataPointX, dataPointY;
		var isDateTime = false;
		var containsPositiveY = false;
		var containsNegativeY = false;

		var dataPointYSums = [];

		for (var j = 0; j < plotUnit.dataSeriesIndexes.length; j++) {
			var dataSeries = this.data[plotUnit.dataSeriesIndexes[j]];
			var i = 0;
			var isFirstDPInViewPort = false;
			var isLastDPInViewPort = false;

			if (dataSeries.axisPlacement === "normal" || dataSeries.axisPlacement === "xySwapped") {

				var plotAreaXMin = this.sessionVariables.axisX.internalMinimum ? this.sessionVariables.axisX.internalMinimum : (this._options.axisX && this._options.axisX.minimum) ? this._options.axisX.minimum : -Infinity;
				var plotAreaXMax = this.sessionVariables.axisX.internalMaximum ? this.sessionVariables.axisX.internalMaximum : (this._options.axisX && this._options.axisX.maximum) ? this._options.axisX.maximum : Infinity;
			}


			if (dataSeries.dataPoints[i].x && dataSeries.dataPoints[i].x.getTime || dataSeries.xValueType === "dateTime") {
				isDateTime = true;
			}

			for (i = 0; i < dataSeries.dataPoints.length; i++) {

				// Requird when no x values are provided 
				if (typeof dataSeries.dataPoints[i].x === "undefined") {
					dataSeries.dataPoints[i].x = i;
				}

				if (dataSeries.dataPoints[i].x.getTime) {
					isDateTime = true;
					dataPointX = dataSeries.dataPoints[i].x.getTime();//dataPointX is used so that getTime is called only once in case of dateTime values
				}
				else
					dataPointX = dataSeries.dataPoints[i].x;

				dataPointY = dataSeries.dataPoints[i].y;



				if (dataPointX < axisXDataInfo.min)
					axisXDataInfo.min = dataPointX;
				if (dataPointX > axisXDataInfo.max)
					axisXDataInfo.max = dataPointX;

				if (i > 0) {
					var xDiff = dataPointX - dataSeries.dataPoints[i - 1].x;
					xDiff < 0 && (xDiff = xDiff * -1); //If Condition shortcut

					if (axisXDataInfo.minDiff > xDiff && xDiff !== 0) {
						axisXDataInfo.minDiff = xDiff;
					}
				}

				// This section makes sure that partially visible dataPoints are included in the begining
				if (dataPointX < plotAreaXMin && !isFirstDPInViewPort) {
					continue;
				} else if (!isFirstDPInViewPort) {
					isFirstDPInViewPort = true;

					if (i > 0) {
						i -= 2;
						continue;
					}
				}

				// This section makes sure that partially visible dataPoints are included at the end
				if (dataPointX > plotAreaXMax && !isLastDPInViewPort) {
					isLastDPInViewPort = true;
				} else if (dataPointX > plotAreaXMax && isLastDPInViewPort) {
					continue;
				}

				if (dataSeries.dataPoints[i].label)
					plotUnit.axisX.labels[dataPointX] = dataSeries.dataPoints[i].label;

				if (dataPointX < axisXDataInfo.viewPortMin)
					axisXDataInfo.viewPortMin = dataPointX;
				if (dataPointX > axisXDataInfo.viewPortMax)
					axisXDataInfo.viewPortMax = dataPointX;

				if (dataPointY >= 0) {
					containsPositiveY = true;
				} else {
					containsNegativeY = true;
				}

				if (dataPointYSums[dataPointX])
					dataPointYSums[dataPointX] += Math.abs(dataPointY);
				else
					dataPointYSums[dataPointX] = Math.abs(dataPointY);
			}

			this.plotInfo.axisXValueType = dataSeries.xValueType = isDateTime ? "dateTime" : "number";
		}


		if (containsPositiveY && !containsNegativeY) {
			axisYDataInfo.max = 99;
			axisYDataInfo.min = 1;
		} else if (containsPositiveY && containsNegativeY) {
			axisYDataInfo.max = 99;
			axisYDataInfo.min = -99;
		} else if (!containsPositiveY && containsNegativeY) {
			axisYDataInfo.max = -1;
			axisYDataInfo.min = -99;
		}

		axisYDataInfo.viewPortMin = axisYDataInfo.min;
		axisYDataInfo.viewPortMax = axisYDataInfo.max;

		plotUnit.dataPointYSums = dataPointYSums;

		//this.dataPoints.sort(compareDataPointX);
		//this.dataPoints.sort(function (dataPoint1, dataPoint2) { return dataPoint1.x - dataPoint2.x; });

		//window.console.log("viewPortYMin: " + plotInfo.viewPortYMin + "; viewPortYMax: " + plotInfo.viewPortYMax);
	}

	Chart.prototype.getDataPointAtXY = function (mouseX, mouseY, getClosest) {

		getClosest = getClosest || false;
		var results = [];

		for (var i = this._dataInRenderedOrder.length - 1; i >= 0; i--) {
			var dataSeries = this._dataInRenderedOrder[i];

			var result = null;

			result = dataSeries.getDataPointAtXY(mouseX, mouseY, getClosest);
			if (result)
				results.push(result);
		}

		var closestResult = null;
		var onlyLineAreaTypes = false;

		for (var m = 0; m < results.length; m++) {

			if (results[m].dataSeries.type === "line" || results[m].dataSeries.type === "stepLine" || results[m].dataSeries.type === "area" || results[m].dataSeries.type === "stepArea") {
				var markerSize = getProperty("markerSize", results[m].dataPoint, results[m].dataSeries) || 8;
				if (results[m].distance <= markerSize / 2) {
					onlyLineAreaTypes = true;
					break;
				}
			}
		}

		for (m = 0; m < results.length; m++) {

			if (onlyLineAreaTypes && results[m].dataSeries.type !== "line" && results[m].dataSeries.type !== "stepLine" && results[m].dataSeries.type !== "area" && results[m].dataSeries.type !== "stepArea")
				continue;

			if (!closestResult) {
				closestResult = results[m];
			} else if (results[m].distance <= closestResult.distance) {
				closestResult = results[m];
			}
		}

		return closestResult;
	}


	/// <summary>Calculates Font Size based on standardSize and Chart Size</summary>
	/// <param name="standardSize" type="Number">Standard font size for a Chart with min(width,height) = 400px</param>
	/// <returns type="Number">The area.</returns>	
	Chart.prototype.getAutoFontSize = function (standardSize, width, height) {

		width = width || this.width;
		height = height || this.height;

		var fontSizeScaleFactor = standardSize / 400;

		return Math.round(Math.min(this.width, this.height) * fontSizeScaleFactor);
	}

	//#region Events

	Chart.prototype.resetOverlayedCanvas = function () {
		//var width = this.overlaidCanvas.width;
		//this.overlaidCanvas.width = 0;
		//this.overlaidCanvas.width = width;
		this.overlaidCanvasCtx.clearRect(0, 0, this.width, this.height);
	}

	Chart.prototype.attachEvent = function (param) {
		this._events.push(param);
	}

	Chart.prototype._touchEventHandler = function (ev) {
		if (!ev.changedTouches)
			return;

		var mouseEvents = [];
		var touches = ev.changedTouches;
		first = touches ? touches[0] : ev;

		switch (ev.type) {
			case "touchstart": case "MSPointerDown": mouseEvents = ["mousemove", "mousedown"]; break;
			case "touchmove": case "MSPointerMove": mouseEvents = ["mousemove"]; break;
			case "touchend": case "MSPointerUp": mouseEvents = (this._lastTouchEventType === "touchstart" || this._lastTouchEventType === "MSPointerDown") ? ["mouseup", "click"] : ["mouseup"];
				break;
			default: return;
		}

		this._lastTouchEventType = ev.type;

		for (var i = 0; i < mouseEvents.length; i++) {

			var type = mouseEvents[i];
			var simulatedEvent = document.createEvent("MouseEvent");
			simulatedEvent.initMouseEvent(type, true, true, window, 1,
									  first.screenX, first.screenY,
									  first.clientX, first.clientY, false,
									  false, false, false, 0/*left*/, null);

			first.target.dispatchEvent(simulatedEvent);

			if (ev.preventManipulation) {
				//alert("preventManipulation");
				ev.preventManipulation();
			}

			if (ev.preventDefault) {
				//alert("preventDefault");
				ev.preventDefault();
			}
		}
	}

	Chart.prototype._mouseEventHandler = function (ev) {
		// stop panning and zooming so we can draw
		if (ev.preventManipulation) {
			//alert("preventManipulation");
			ev.preventManipulation();
		}

		// we are handling this event
		if (ev.preventDefault) {
			//alert("preventDefault");
			ev.preventDefault();
		}

		//IE8- uses srcElement instead of target. So instead of checking this condition everytime, its better to create a reference called target.
		if (typeof (ev.target) === "undefined" && ev.srcElement)
			ev.target = ev.srcElement;

		//console.log(ev.type);

		var xy = getMouseCoordinates(ev);
		var type = ev.type;
		var eventParam;
		var rightclick;

		if (!ev) var e = window.event;
		if (ev.which) rightclick = (ev.which == 3);
		else if (ev.button) rightclick = (ev.button == 2);

		//window.console.log(type + " --> x: " + xy.x + "; y:" + xy.y);

		//if (type === "mouseout") {
		//    this._toolTip.hide();
		//}

		if (isDebugMode && window.console) {
			window.console.log(type + " --> x: " + xy.x + "; y:" + xy.y);
			if (rightclick)
				window.console.log(ev.which);

			if (type === "mouseup")
				window.console.log("mouseup");
		}

		if (rightclick)
			return;

		//if (this.plotInfo.axisPlacement === "xySwapped") {
		//    //var temp = xy.x;
		//    //xy.x = xy.y;
		//    //xy.y = temp;
		//    xy = {x: xy.y, y: xy.x};
		//}

		if (Chart.capturedEventParam) {
			eventParam = Chart.capturedEventParam;

			if (type === "mouseup") {
				Chart.capturedEventParam = null;

				if (eventParam.chart.overlaidCanvas.releaseCapture)
					eventParam.chart.overlaidCanvas.releaseCapture();
				else
					document.body.removeEventListener("mouseup", eventParam.chart._mouseEventHandler, false);

			}

			if (eventParam.hasOwnProperty(type))
				eventParam[type].call(eventParam.context, xy.x, xy.y);



		}
		else if (this._events) {

			for (var i = 0; i < this._events.length; i++) {
				if (!this._events[i].hasOwnProperty(type))
					continue;

				eventParam = this._events[i];
				var bounds = eventParam.bounds;

				if (xy.x >= bounds.x1 && xy.x <= bounds.x2 && xy.y >= bounds.y1 && xy.y <= bounds.y2) {
					eventParam[type].call(eventParam.context, xy.x, xy.y);

					if (type === "mousedown" && eventParam.capture === true) {
						Chart.capturedEventParam = eventParam;

						if (this.overlaidCanvas.setCapture)
							this.overlaidCanvas.setCapture();
						else {
							document.body.addEventListener("mouseup", this._mouseEventHandler, false);
							//addEvent(document.body, "mouseup", this._mouseEventHandler);
						}
					} else if (type === "mouseup") {
						if (eventParam.chart.overlaidCanvas.releaseCapture)
							eventParam.chart.overlaidCanvas.releaseCapture();
						else
							document.body.removeEventListener("mouseup", this._mouseEventHandler, false);
					}

					break;
				}
				else
					eventParam = null;
			}

			if (eventParam && eventParam.cursor) {
				ev.target.style.cursor = eventParam.cursor;
			}
			else
				ev.target.style.cursor = this._defaultCursor;

			//eventParam = 
		}

		if (this._toolTip && this._toolTip.enabled) {

			var plotArea = this.plotArea;

			if (xy.x < plotArea.x1 || xy.x > plotArea.x2 || xy.y < plotArea.y1 || xy.y > plotArea.y2)
				this._toolTip.hide();
		}


		if ((!this.isDrag || !this.zoomEnabled) && this._eventManager) {
			this._eventManager.mouseEventHandler(ev);
			//this._updateToolTip(ev.x, ev.y);            
		}

		//if (this._toolTip.enabled)
		//    this._toolTip.mouseMoveHandler(ev.x, ev.y);
	}

	Chart.prototype._plotAreaMouseDown = function (x, y) {
		this.isDrag = true;

		if (this.plotInfo.axisPlacement !== "none") {
			this.dragStartPoint = { x: x, y: y, xMinimum: this.axisX.minimum, xMaximum: this.axisX.maximum };
		} else {
			this.dragStartPoint = { x: x, y: y };
		}

	}

	Chart.prototype._plotAreaMouseUp = function (x, y) {

		if (this.plotInfo.axisPlacement === "normal" || this.plotInfo.axisPlacement === "xySwapped") {
			if (this.isDrag) {

				var dragDelta = 0;
				var dragValue = 0;
				var axisXProps = this.axisX.lineCoordinates;

				if (this.plotInfo.axisPlacement === "xySwapped") {
					dragDelta = y - this.dragStartPoint.y;
					dragValue = Math.abs(this.axisX.maximum - this.axisX.minimum) / axisXProps.height * dragDelta;
				}
				else {
					dragDelta = this.dragStartPoint.x - x;
					dragValue = Math.abs(this.axisX.maximum - this.axisX.minimum) / axisXProps.width * dragDelta;
				}

				if (Math.abs(dragDelta) > 2) {
					if (this.panEnabled) {

						var reRender = false;
						var overFlow = 0;

						//If the user has panned beyond the minimum/maximum value of axisX, then take it back to minimum/maximum.
						if (this.axisX.sessionVariables.internalMinimum < this.axisX._absoluteMinimum) {

							overFlow = this.axisX._absoluteMinimum - this.axisX.sessionVariables.internalMinimum;

							this.axisX.sessionVariables.internalMinimum += overFlow;
							this.axisX.sessionVariables.internalMaximum += overFlow;
							reRender = true;
						} else if (this.axisX.sessionVariables.internalMaximum > this.axisX._absoluteMaximum) {

							overFlow = this.axisX.sessionVariables.internalMaximum - this.axisX._absoluteMaximum;
							this.axisX.sessionVariables.internalMaximum -= overFlow;
							this.axisX.sessionVariables.internalMinimum -= overFlow;

							reRender = true;
						}
						//}


						//this.overlaidCanvas.style.cursor = this._defaultCursor;


						if (reRender)
							this.render();

					} else if (this.zoomEnabled) {

						this.resetOverlayedCanvas();

						//alert("mouse UP");
						if (!this.dragStartPoint)
							return;

						if (this.plotInfo.axisPlacement === "xySwapped") {
							//In Pixels
							var selectedRegion = { y1: Math.min(this.dragStartPoint.y, y), y2: Math.max(this.dragStartPoint.y, y) };

							if (Math.abs(selectedRegion.y1 - selectedRegion.y2) > 1) {
								var axisXProps = this.axisX.lineCoordinates;

								var minX = this.axisX.maximum - (this.axisX.maximum - this.axisX.minimum) / axisXProps.height * (selectedRegion.y2 - axisXProps.y1);
								var maxX = this.axisX.maximum - (this.axisX.maximum - this.axisX.minimum) / axisXProps.height * (selectedRegion.y1 - axisXProps.y1);

								minX = Math.max(minX, this.axisX.dataInfo.min);
								maxX = Math.min(maxX, this.axisX.dataInfo.max);

								if (Math.abs((maxX - minX) / this.axisX.dataInfo.minDiff) >= 4 / 500 * this.height) {

									this.axisX.sessionVariables.internalMinimum = minX;
									this.axisX.sessionVariables.internalMaximum = maxX;

									this.render();
								}
							}
						} else if (this.plotInfo.axisPlacement === "normal") {
							var selectedRegion = { x1: Math.min(this.dragStartPoint.x, x), x2: Math.max(this.dragStartPoint.x, x) };

							if (Math.abs(selectedRegion.x1 - selectedRegion.x2) > 1) {
								var axisXProps = this.axisX.lineCoordinates;

								var minX = (this.axisX.maximum - this.axisX.minimum) / axisXProps.width * (selectedRegion.x1 - axisXProps.x1) + this.axisX.minimum;
								var maxX = (this.axisX.maximum - this.axisX.minimum) / axisXProps.width * (selectedRegion.x2 - axisXProps.x1) + this.axisX.minimum;

								minX = Math.max(minX, this.axisX.dataInfo.min);
								maxX = Math.min(maxX, this.axisX.dataInfo.max);

								if (Math.abs((maxX - minX) / this.axisX.dataInfo.minDiff) >= 5 / 500 * this.width) {

									this.axisX.sessionVariables.internalMinimum = minX;
									this.axisX.sessionVariables.internalMaximum = maxX;

									this.render();
								}
							}
						}
					}

					if (this.zoomEnabled && this._toolBar.style.display === "none") {
						this._toolBar.style.display = "inline";
						this._zoomButton.innerHTML = this._cultureInfo.panText;
						this._resetButton.innerHTML = this._cultureInfo.resetText;
					}
				}
			}

		}

		this.isDrag = false;

		//this.dragStartPoint = null;
	}

	Chart.prototype._plotAreaMouseMove = function (x, y) {
		if (this.isDrag && this.plotInfo.axisPlacement !== "none") {

			var dragDelta = 0;
			var dragValue = 0;
			var axisXProps = this.axisX.lineCoordinates;

			if (this.plotInfo.axisPlacement === "xySwapped") {
				dragDelta = y - this.dragStartPoint.y;
				dragValue = Math.abs(this.axisX.maximum - this.axisX.minimum) / axisXProps.height * dragDelta;
			}
			else {
				dragDelta = this.dragStartPoint.x - x;
				dragValue = Math.abs(this.axisX.maximum - this.axisX.minimum) / axisXProps.width * dragDelta;
			}

			if (Math.abs(dragDelta) > 2 && Math.abs(dragDelta) < 8 && (this.panEnabled || this.zoomEnabled)) {
				this._toolTip.hide();
			} else if (this._toolTip.enabled && !this.panEnabled && !this.zoomEnabled) {
				this._toolTip.mouseMoveHandler(x, y);
			}

			if (Math.abs(dragDelta) > 2 && (this.panEnabled || this.zoomEnabled)) {
				if (this.panEnabled) {

					this.axisX.sessionVariables.internalMinimum = this.dragStartPoint.xMinimum + dragValue;
					this.axisX.sessionVariables.internalMaximum = this.dragStartPoint.xMaximum + dragValue;

					var overFlow = 0;

					// This is to stop the user from dragging chart beyond some limit (this.axisX._absoluteMinimum - this.axisX.interval)
					if (this.axisX.sessionVariables.internalMinimum < this.axisX._absoluteMinimum - convertToNumber(this.axisX.interval, this.axisX.intervalType)) {

						overFlow = (this.axisX._absoluteMinimum - convertToNumber(this.axisX.interval, this.axisX.intervalType)) - this.axisX.sessionVariables.internalMinimum;
						this.axisX.sessionVariables.internalMinimum += overFlow;
						this.axisX.sessionVariables.internalMaximum += overFlow;
					} else if (this.axisX.sessionVariables.internalMaximum > this.axisX._absoluteMaximum + convertToNumber(this.axisX.interval, this.axisX.intervalType)) {
						overFlow = this.axisX.sessionVariables.internalMaximum - (this.axisX._absoluteMaximum + convertToNumber(this.axisX.interval, this.axisX.intervalType));
						this.axisX.sessionVariables.internalMaximum -= overFlow;
						this.axisX.sessionVariables.internalMinimum -= overFlow;
					}

					//this.dragStartPoint.x = x;

					//this.render();
					var _this = this;

					clearTimeout(this._panTimerId);
					this._panTimerId = setTimeout(function () {
						_this.render();
					}, 0);

				} else if (this.zoomEnabled) {
					var plotAreaBounds = this.plotArea;

					this.resetOverlayedCanvas();

					var alpha = this.overlaidCanvasCtx.globalAlpha;

					this.overlaidCanvasCtx.globalAlpha = .7;
					this.overlaidCanvasCtx.fillStyle = "#A0ABB8";

					if (this.plotInfo.axisPlacement === "xySwapped") {
						this.overlaidCanvasCtx.fillRect(plotAreaBounds.x1, this.dragStartPoint.y, plotAreaBounds.x2 - plotAreaBounds.x1, y - this.dragStartPoint.y);
					}
					else if (this.plotInfo.axisPlacement === "normal") {
						this.overlaidCanvasCtx.fillRect(this.dragStartPoint.x, plotAreaBounds.y1, x - this.dragStartPoint.x, plotAreaBounds.y2 - plotAreaBounds.y1);
					}

					this.overlaidCanvasCtx.globalAlpha = alpha;
				}
			}

			//if (dragDelta > 5) {
			//    this._toolTip.hide();
			//    return;
			//} else if (this._toolTip.enabled)
			//    this._toolTip.mouseMoveHandler(x, y);

		} else if (this._toolTip.enabled)
			this._toolTip.mouseMoveHandler(x, y);
	}

	//#endregion Events

	Chart.prototype.preparePlotArea = function () {

		var plotArea = this.plotArea;

		var yAxis = this.axisY ? this.axisY : this.axisY2;

		if (!isCanvasSupported && (plotArea.x1 > 0 || plotArea.y1 > 0)) {
			plotArea.ctx.translate(plotArea.x1, plotArea.y1);
		}

		if (this.axisX && yAxis) {
			plotArea.x1 = this.axisX.lineCoordinates.x1 < this.axisX.lineCoordinates.x2 ? this.axisX.lineCoordinates.x1 : yAxis.lineCoordinates.x1;
			plotArea.y1 = (this.axisX.lineCoordinates.y1 < yAxis.lineCoordinates.y1 ? this.axisX.lineCoordinates.y1 : yAxis.lineCoordinates.y1);

			plotArea.x2 = (this.axisX.lineCoordinates.x2 > yAxis.lineCoordinates.x2 ? this.axisX.lineCoordinates.x2 : yAxis.lineCoordinates.x2);
			plotArea.y2 = this.axisX.lineCoordinates.y2 > this.axisX.lineCoordinates.y1 ? this.axisX.lineCoordinates.y2 : yAxis.lineCoordinates.y2;

			plotArea.width = plotArea.x2 - plotArea.x1;
			plotArea.height = plotArea.y2 - plotArea.y1;
			//plotArea = { x1: x1, y1: y1, x2: x2, y2: y2, width: x2 - x1, height: y2 - y1 };
		} else {
			//ToDo: @sunil
			var freeSpace = this.layoutManager.getFreeSpace();
			plotArea.x1 = freeSpace.x1;
			plotArea.x2 = freeSpace.x2;
			plotArea.y1 = freeSpace.y1;
			plotArea.y2 = freeSpace.y2;

			plotArea.width = freeSpace.width;
			plotArea.height = freeSpace.height;
		}

		if (!isCanvasSupported) {

			plotArea.canvas.width = plotArea.width;
			plotArea.canvas.height = plotArea.height;

			plotArea.canvas.style.left = plotArea.x1 + "px";
			plotArea.canvas.style.top = plotArea.y1 + "px";

			if (plotArea.x1 > 0 || plotArea.y1 > 0) {
				plotArea.ctx.translate(-plotArea.x1, -plotArea.y1);
			}
		}
	}

	Chart.prototype.getPixelCoordinatesOnPlotArea = function (x, y) {
		return { x: this.axisX.getPixelCoordinatesOnAxis(x).x, y: this.axisY.getPixelCoordinatesOnAxis(y).y }
		//return { x: 5, y: 10 };
	}

	//#region Render Methods

	Chart.prototype.renderIndexLabels = function () {
		var ctx = this.plotArea.ctx;

		ctx.textBaseline = "middle";
		var plotArea = this.plotArea;

		for (var i = 0; i < this._indexLabels.length; i++) {

			var indexLabel = this._indexLabels[i];

			var x, y, angle;

			ctx.fillStyle = getProperty("indexLabelFontColor", indexLabel.dataPoint, indexLabel.dataSeries);
			ctx.font = getFontString("indexLabel", indexLabel.dataPoint, indexLabel.dataSeries);
			var indexLabelText = this.replaceKeywordsWithValue(getProperty("indexLabel", indexLabel.dataPoint, indexLabel.dataSeries), indexLabel.dataPoint, indexLabel.dataSeries);
			var textSize = { width: ctx.measureText(indexLabelText).width, height: getProperty("indexLabelFontSize", indexLabel.dataPoint, indexLabel.dataSeries) };
			var placement = getProperty("indexLabelPlacement", indexLabel.dataPoint, indexLabel.dataSeries);
			var orientation = getProperty("indexLabelOrientation", indexLabel.dataPoint, indexLabel.dataSeries);
			var angle = 0;

			var yMinLimit = 0;
			var yMaxLimit = 0;
			var xMinLimit = 0;
			var xMaxLimit = 0;

			//So that indexLabel is skipped once the point is outside of plotArea
			if (indexLabel.point.x < plotArea.x1 || indexLabel.point.x > plotArea.x2 || indexLabel.point.y < plotArea.y1 || indexLabel.point.y > plotArea.y2)
				continue;

			if (indexLabel.chartType === "column" || indexLabel.chartType === "stackedColumn" || indexLabel.chartType === "stackedColumn100"
				|| indexLabel.chartType === "bar" || indexLabel.chartType === "stackedBar" || indexLabel.chartType === "stackedBar100") {

				var width = Math.abs(indexLabel.bounds.x1, indexLabel.bounds.x2)
				var height = Math.abs(indexLabel.bounds.y1, indexLabel.bounds.y2)

				if (this.plotInfo.axisPlacement === "normal") {

					if (placement === "outside") {

						yMinLimit = plotArea.y1;
						yMaxLimit = plotArea.y2;

					} else if (placement === "inside") {

						yMinLimit = indexLabel.bounds.y1;
						yMaxLimit = indexLabel.bounds.y2;

					}

					if (orientation === "horizontal") {
						x = indexLabel.point.x - textSize.width / 2;

						if (indexLabel.dataPoint.y >= 0)
							y = Math.min((Math.max(indexLabel.point.y - textSize.height / 2 - 5, yMinLimit + textSize.height / 2 + 5)), yMaxLimit - textSize.height / 2 - 5);
						else
							y = Math.max((Math.min(indexLabel.point.y + textSize.height / 2 + 5, yMaxLimit - textSize.height / 2)), yMinLimit + textSize.height / 2 + 5);
					}
					else if (orientation === "vertical") {
						x = indexLabel.point.x;
						if (indexLabel.dataPoint.y >= 0)
							y = Math.min(Math.max(indexLabel.point.y - 5, yMinLimit + textSize.width + 5), yMaxLimit);
						else
							y = Math.max(Math.min(indexLabel.point.y + textSize.width + 5, yMaxLimit - 5), yMinLimit);

						angle = -90;
					}

				} else if (this.plotInfo.axisPlacement === "xySwapped") {

					if (placement === "outside") {

						xMinLimit = plotArea.x1;
						xMaxLimit = plotArea.x2;

					} else if (placement === "inside") {

						xMinLimit = indexLabel.bounds.x1;
						xMaxLimit = indexLabel.bounds.x2;

					}

					if (orientation === "horizontal") {
						y = indexLabel.point.y;

						if (indexLabel.dataPoint.y >= 0)
							x = Math.max((Math.min(indexLabel.point.x + 5, xMaxLimit - textSize.width)), xMinLimit);
						else
							x = Math.min((Math.max(indexLabel.point.x - textSize.width - 5, xMinLimit)), xMaxLimit);
					}
					else if (orientation === "vertical") {
						y = indexLabel.point.y + textSize.width / 2;

						if (indexLabel.dataPoint.y >= 0)
							x = Math.max(Math.min(indexLabel.point.x + textSize.height / 2 + 5, xMaxLimit - textSize.height / 2), xMinLimit);
						else
							x = Math.min(Math.max(indexLabel.point.x - textSize.height / 2 - 5, xMinLimit + textSize.height / 2), xMaxLimit + textSize.height / 2);

						angle = -90;
					}

				}

			} else {

				if (orientation === "horizontal") {

					x = indexLabel.point.x - textSize.width / 2;

					if (indexLabel.dataPoint.y >= 0)
						y = Math.max(indexLabel.point.y - textSize.height / 2 - 5, plotArea.y1 + textSize.height / 2);
					else
						y = Math.min(indexLabel.point.y + textSize.height / 2 + 5, plotArea.y2 - textSize.height / 2);

				} else if (orientation === "vertical") {

					x = indexLabel.point.x;

					if (indexLabel.dataPoint.y >= 0)
						y = Math.max(indexLabel.point.y - 5, plotArea.y1 + textSize.width);
					else
						y = Math.min(indexLabel.point.y + textSize.width + 5, plotArea.y2);

					angle = -90;
				}

			}

			ctx.save();

			ctx.translate(x, y);
			ctx.rotate(Math.PI / 180 * angle);

			ctx.fillText(indexLabelText, 0, 0);

			ctx.restore();
		}
	}

	Chart.prototype.renderLine = function (plotUnit) {

		var ctx = this.plotArea.ctx;
		var totalDataSeries = plotUnit.dataSeriesIndexes.length;
		if (totalDataSeries <= 0)
			return;

		var ghostCtx = this._eventManager.ghostCtx;
		//var ghostCtx = this.overlaidCanvasCtx;

		ctx.save();

		var plotArea = this.plotArea;

		ctx.beginPath();
		ctx.rect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);
		ctx.clip();

		var markers = [];

		for (var j = 0; j < plotUnit.dataSeriesIndexes.length; j++) {

			var dataSeriesIndex = plotUnit.dataSeriesIndexes[j];

			var dataSeries = this.data[dataSeriesIndex];
			ctx.lineWidth = dataSeries.lineThickness;
			var dataPoints = dataSeries.dataPoints;

			var seriesId = dataSeries.id;
			this._eventManager.objectMap[seriesId] = { objectType: "dataSeries", dataSeriesIndex: dataSeriesIndex };
			var hexColor = intToHexColorString(seriesId);
			ghostCtx.strokeStyle = hexColor;
			//ghostCtx.lineWidth = dataSeries.lineThickness;
			ghostCtx.lineWidth = dataSeries.lineThickness > 0 ? Math.max(dataSeries.lineThickness, 4) : 0;

			colorSet = dataSeries._colorSet;
			color = colorSet[0];
			ctx.strokeStyle = color;

			var isFirstDataPointInPlotArea = true;
			var i = 0, x, y;
			var dataPointX; //Used so that when dataPoint.x is a DateTime value, it doesn't get converted to number back and forth.

			//if (!dataSeries._options.markerSize && dataSeries.dataPoints.length < 1000)
			//    dataSeries.markerSize = 8;

			if (dataPoints.length > 0) {
				//var xy = this.getPixelCoordinatesOnPlotArea(dataPoints[0].x, dataPoints[0].y);

				//dataSeries.noDataPointsInPlotArea = 0

				for (i = 0; i < dataPoints.length; i++) {

					dataPointX = dataPoints[i].getTime ? dataPoints[i].x.getTime() : dataPoints[i].x;

					if (dataPointX < plotUnit.axisX.dataInfo.viewPortMin || dataPointX > plotUnit.axisX.dataInfo.viewPortMax)
						continue;

					//if (!isFinite(dataPoints[i].y))
					//    continue;

					if (typeof (dataPoints[i].y) !== "number")
						continue;

					x = (plotUnit.axisX.convertionParameters.reference + plotUnit.axisX.convertionParameters.pixelPerUnit * (dataPointX - plotUnit.axisX.convertionParameters.minimum) + .5) << 0;
					y = (plotUnit.axisY.convertionParameters.reference + plotUnit.axisY.convertionParameters.pixelPerUnit * (dataPoints[i].y - plotUnit.axisY.convertionParameters.minimum) + .5) << 0;

					var id = dataSeries.dataPointIds[i];
					this._eventManager.objectMap[id] = { objectType: "dataPoint", dataSeriesIndex: dataSeriesIndex, dataPointIndex: i, x1: x, y1: y };


					//dataSeries.noDataPointsInPlotArea++;

					if (isFirstDataPointInPlotArea) {
						ctx.beginPath();
						ctx.moveTo(x, y);

						if (isCanvasSupported) {
							ghostCtx.beginPath();
							ghostCtx.moveTo(x, y);
						}

						isFirstDataPointInPlotArea = false;
					} else {

						ctx.lineTo(x, y);

						if (isCanvasSupported)
							ghostCtx.lineTo(x, y);

						if (i % 500 == 0) {
							ctx.stroke();
							ctx.beginPath();
							ctx.moveTo(x, y);

							if (isCanvasSupported) {
								ghostCtx.stroke();
								ghostCtx.beginPath();
								ghostCtx.moveTo(x, y);
							}
						}
					}

					//Render Marker
					if (dataPoints[i].markerSize > 0 || dataSeries.markerSize > 0) {

						var markerProps = dataSeries.getMarkerProperties(i, x, y, ctx);
						markers.push(markerProps);

						if (!dataSeries.maxWidthInX || markerProps.size > dataSeries.maxWidthInX) {
							dataSeries.maxWidthInX = markerProps.size / (plotUnit.axisX.convertionParameters.pixelPerUnit > 1 ? plotUnit.axisX.convertionParameters.pixelPerUnit - 1 : plotUnit.axisX.convertionParameters.pixelPerUnit);
						}

						var markerColor = intToHexColorString(id);

						//window.console.log("index: " + i + "; id: " + id + "; hex: " + markerColor);

						if (isCanvasSupported) {
							markers.push({
								x: x, y: y, ctx: ghostCtx,
								type: markerProps.type,
								size: markerProps.size,
								color: markerColor,
								borderColor: markerColor,
								borderThickness: markerProps.borderThickness
							});
						}
					}

					if (dataPoints[i].indexLabel || dataSeries.indexLabel) {

						this._indexLabels.push({
							chartType: "line",
							dataPoint: dataPoints[i],
							dataSeries: dataSeries,
							point: { x: x, y: y },
							color: color
						});

					}

				}

				ctx.stroke();

				if (isCanvasSupported)
					ghostCtx.stroke();

				//if (!dataSeries._options.markerSize && dataSeries.noDataPointsInPlotArea > plotArea.width / 16)
				//    continue;

				//if (dataSeries.markerType && dataSeries.markerSize > 0) {
				//    for (i = 0; i < dataPoints.length; i++) {

				//        dataPoints[i].getTime ? dataPointX = dataPoints[i].x.getTime() : dataPointX = dataPoints[i].x;

				//        if (dataPointX < this.plotInfo.viewPortXMin || dataPointX > this.plotInfo.viewPortXMax)
				//            continue;

				//        x = (plotUnit.axisX.convertionParameters.reference + plotUnit.axisX.convertionParameters.pixelPerUnit * (dataPointX - plotUnit.axisX.convertionParameters.minimum) + .5) << 0;
				//        y = (plotUnit.axisY.convertionParameters.reference + plotUnit.axisY.convertionParameters.pixelPerUnit * (dataPoints[i].y - plotUnit.axisY.convertionParameters.minimum) + .5) << 0;

				//        markers.push({ x: x, y: y, ctx: ctx, type: dataSeries.markerType, size: dataSeries.markerSize, color: color, borderColor: dataSeries.markerBorderColor, borderThickness: dataSeries.markerBorderThickness });
				//    }
				//}
			}

		}


		RenderHelper.drawMarkers(markers);
		ctx.restore();

		ctx.beginPath();

		if (isCanvasSupported)
			ghostCtx.beginPath();
	}

	Chart.prototype.renderStepLine = function (plotUnit) {
		var ctx = this.plotArea.ctx;
		var totalDataSeries = plotUnit.dataSeriesIndexes.length;
		if (totalDataSeries <= 0)
			return;

		var ghostCtx = this._eventManager.ghostCtx;
		//var ghostCtx = this.overlaidCanvasCtx;

		ctx.save();

		var plotArea = this.plotArea;

		ctx.beginPath();
		ctx.rect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);
		ctx.clip();

		var markers = [];

		for (var j = 0; j < plotUnit.dataSeriesIndexes.length; j++) {

			var dataSeriesIndex = plotUnit.dataSeriesIndexes[j];

			var dataSeries = this.data[dataSeriesIndex];
			ctx.lineWidth = dataSeries.lineThickness;
			var dataPoints = dataSeries.dataPoints;

			var seriesId = dataSeries.id;
			this._eventManager.objectMap[seriesId] = { objectType: "dataSeries", dataSeriesIndex: dataSeriesIndex };
			var hexColor = intToHexColorString(seriesId);
			ghostCtx.strokeStyle = hexColor;
			//ghostCtx.lineWidth = dataSeries.lineThickness;
			ghostCtx.lineWidth = dataSeries.lineThickness > 0 ? Math.max(dataSeries.lineThickness, 4) : 0;

			colorSet = dataSeries._colorSet;
			color = colorSet[0];
			ctx.strokeStyle = color;

			var isFirstDataPointInPlotArea = true;
			var i = 0, x, y;
			var dataPointX; //Used so that when dataPoint.x is a DateTime value, it doesn't get converted to number back and forth.

			//if (!dataSeries._options.markerSize && dataSeries.dataPoints.length < 1000)
			//    dataSeries.markerSize = 8;

			if (dataPoints.length > 0) {
				//var xy = this.getPixelCoordinatesOnPlotArea(dataPoints[0].x, dataPoints[0].y);

				//dataSeries.noDataPointsInPlotArea = 0

				for (i = 0; i < dataPoints.length; i++) {

					dataPointX = dataPoints[i].getTime ? dataPoints[i].x.getTime() : dataPoints[i].x;

					if (dataPointX < plotUnit.axisX.dataInfo.viewPortMin || dataPointX > plotUnit.axisX.dataInfo.viewPortMax)
						continue;

					//if (!isFinite(dataPoints[i].y))
					//    continue;

					if (typeof (dataPoints[i].y) !== "number")
						continue;

					var prevY = y;

					x = (plotUnit.axisX.convertionParameters.reference + plotUnit.axisX.convertionParameters.pixelPerUnit * (dataPointX - plotUnit.axisX.convertionParameters.minimum) + .5) << 0;
					y = (plotUnit.axisY.convertionParameters.reference + plotUnit.axisY.convertionParameters.pixelPerUnit * (dataPoints[i].y - plotUnit.axisY.convertionParameters.minimum) + .5) << 0;

					var id = dataSeries.dataPointIds[i];
					this._eventManager.objectMap[id] = { objectType: "dataPoint", dataSeriesIndex: dataSeriesIndex, dataPointIndex: i, x1: x, y1: y };


					//dataSeries.noDataPointsInPlotArea++;

					if (isFirstDataPointInPlotArea) {
						ctx.beginPath();
						ctx.moveTo(x, y);

						if (isCanvasSupported) {
							ghostCtx.beginPath();
							ghostCtx.moveTo(x, y);
						}

						isFirstDataPointInPlotArea = false;
					} else {

						ctx.lineTo(x, prevY);
						if (isCanvasSupported)
							ghostCtx.lineTo(x, prevY);

						ctx.lineTo(x, y);
						if (isCanvasSupported)
							ghostCtx.lineTo(x, y);

						if (i % 500 == 0) {
							ctx.stroke();
							ctx.beginPath();
							ctx.moveTo(x, y);

							if (isCanvasSupported) {
								ghostCtx.stroke();
								ghostCtx.beginPath();
								ghostCtx.moveTo(x, y);
							}
						}
					}

					//Render Marker
					if (dataPoints[i].markerSize > 0 || dataSeries.markerSize > 0) {

						var markerProps = dataSeries.getMarkerProperties(i, x, y, ctx);
						markers.push(markerProps);

						if (!dataSeries.maxWidthInX || markerProps.size > dataSeries.maxWidthInX) {
							dataSeries.maxWidthInX = markerProps.size / (plotUnit.axisX.convertionParameters.pixelPerUnit > 1 ? plotUnit.axisX.convertionParameters.pixelPerUnit - 1 : plotUnit.axisX.convertionParameters.pixelPerUnit);
						}

						var markerColor = intToHexColorString(id);

						//window.console.log("index: " + i + "; id: " + id + "; hex: " + markerColor);
						if (isCanvasSupported) {
							markers.push({
								x: x, y: y, ctx: ghostCtx,
								type: markerProps.type,
								size: markerProps.size,
								color: markerColor,
								borderColor: markerColor,
								borderThickness: markerProps.borderThickness
							});
						}
					}

					if (dataPoints[i].indexLabel || dataSeries.indexLabel) {

						this._indexLabels.push({
							chartType: "stepLine",
							dataPoint: dataPoints[i],
							dataSeries: dataSeries,
							point: { x: x, y: y },
							color: color
						});

					}

				}

				ctx.stroke();
				if (isCanvasSupported)
					ghostCtx.stroke();
			}
		}


		RenderHelper.drawMarkers(markers);
		ctx.restore();

		ctx.beginPath();

		if (isCanvasSupported)
			ghostCtx.beginPath();
	}

	function getBezierPoints(points, tension) {
		var bezierPoints = [];

		for (var i = 0; i < points.length; i++) {

			if (i == 0) {
				bezierPoints.push(points[0]);
				continue;
			}

			var i1, i2, pointIndex;

			pointIndex = i - 1;
			i1 = pointIndex === 0 ? 0 : pointIndex - 1;
			i2 = pointIndex === points.length - 1 ? pointIndex : pointIndex + 1;

			var drv1 = { x: (points[i2].x - points[i1].x) / tension, y: (points[i2].y - points[i1].y) / tension }
			var cp1 = { x: points[pointIndex].x + drv1.x / 3, y: points[pointIndex].y + drv1.y / 3 }
			bezierPoints[bezierPoints.length] = cp1;


			pointIndex = i;
			i1 = pointIndex === 0 ? 0 : pointIndex - 1;
			i2 = pointIndex === points.length - 1 ? pointIndex : pointIndex + 1;

			var drv2 = { x: (points[i2].x - points[i1].x) / tension, y: (points[i2].y - points[i1].y) / tension }
			var cp2 = { x: points[pointIndex].x - drv2.x / 3, y: points[pointIndex].y - drv2.y / 3 }
			bezierPoints[bezierPoints.length] = cp2;

			bezierPoints[bezierPoints.length] = points[i];
		}

		return bezierPoints;
	}

	Chart.prototype.renderSpline = function (plotUnit) {
		var ctx = this.plotArea.ctx;
		var totalDataSeries = plotUnit.dataSeriesIndexes.length;
		if (totalDataSeries <= 0)
			return;

		var ghostCtx = this._eventManager.ghostCtx;

		ctx.save();

		var plotArea = this.plotArea;

		ctx.beginPath();
		ctx.rect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);
		ctx.clip();

		var markers = [];

		for (var j = 0; j < plotUnit.dataSeriesIndexes.length; j++) {

			var dataSeriesIndex = plotUnit.dataSeriesIndexes[j];

			var dataSeries = this.data[dataSeriesIndex];
			ctx.lineWidth = dataSeries.lineThickness;
			var dataPoints = dataSeries.dataPoints;

			var seriesId = dataSeries.id;
			this._eventManager.objectMap[seriesId] = { objectType: "dataSeries", dataSeriesIndex: dataSeriesIndex };
			var hexColor = intToHexColorString(seriesId);
			ghostCtx.strokeStyle = hexColor;
			//ghostCtx.lineWidth = dataSeries.lineThickness;
			ghostCtx.lineWidth = dataSeries.lineThickness > 0 ? Math.max(dataSeries.lineThickness, 4) : 0;

			colorSet = dataSeries._colorSet;
			color = colorSet[0];
			ctx.strokeStyle = color;

			var isFirstDataPointInPlotArea = true;
			var i = 0, x, y;
			var dataPointX; //Used so that when dataPoint.x is a DateTime value, it doesn't get converted to number back and forth.

			//if (!dataSeries._options.markerSize && dataSeries.dataPoints.length < 1000)
			//    dataSeries.markerSize = 8;

			var pixels = [];

			if (dataPoints.length > 0) {

				for (i = 0; i < dataPoints.length; i++) {

					dataPointX = dataPoints[i].getTime ? dataPoints[i].x.getTime() : dataPoints[i].x;

					if (dataPointX < plotUnit.axisX.dataInfo.viewPortMin || dataPointX > plotUnit.axisX.dataInfo.viewPortMax)
						continue;

					//if (!isFinite(dataPoints[i].y))
					//    continue;

					if (typeof (dataPoints[i].y) !== "number")
						continue;

					x = (plotUnit.axisX.convertionParameters.reference + plotUnit.axisX.convertionParameters.pixelPerUnit * (dataPointX - plotUnit.axisX.convertionParameters.minimum) + .5) << 0;
					y = (plotUnit.axisY.convertionParameters.reference + plotUnit.axisY.convertionParameters.pixelPerUnit * (dataPoints[i].y - plotUnit.axisY.convertionParameters.minimum) + .5) << 0;

					var id = dataSeries.dataPointIds[i];
					this._eventManager.objectMap[id] = { objectType: "dataPoint", dataSeriesIndex: dataSeriesIndex, dataPointIndex: i, x1: x, y1: y };


					pixels[pixels.length] = { x: x, y: y };


					//Add Markers
					if (dataPoints[i].markerSize > 0 || dataSeries.markerSize > 0) {

						var markerProps = dataSeries.getMarkerProperties(i, x, y, ctx);
						markers.push(markerProps);

						if (!dataSeries.maxWidthInX || markerProps.size > dataSeries.maxWidthInX) {
							dataSeries.maxWidthInX = markerProps.size / (plotUnit.axisX.convertionParameters.pixelPerUnit > 1 ? plotUnit.axisX.convertionParameters.pixelPerUnit - 1 : plotUnit.axisX.convertionParameters.pixelPerUnit);
						}

						var markerColor = intToHexColorString(id);

						//window.console.log("index: " + i + "; id: " + id + "; hex: " + markerColor);
						if (isCanvasSupported) {
							markers.push({
								x: x, y: y, ctx: ghostCtx,
								type: markerProps.type,
								size: markerProps.size,
								color: markerColor,
								borderColor: markerColor,
								borderThickness: markerProps.borderThickness
							});
						}
					}

					//Add Labels
					if (dataPoints[i].indexLabel || dataSeries.indexLabel) {

						this._indexLabels.push({
							chartType: "spline",
							dataPoint: dataPoints[i],
							dataSeries: dataSeries,
							point: { x: x, y: y },
							color: color
						});

					}

				}
			}

			var bp = getBezierPoints(pixels, 2);

			if (bp.length > 0) {
				ctx.beginPath();
				if (isCanvasSupported)
					ghostCtx.beginPath();

				ctx.moveTo(bp[0].x, bp[0].y);
				if (isCanvasSupported)
					ghostCtx.moveTo(bp[0].x, bp[0].y);

				for (var i = 0; i < bp.length - 3; i += 3) {

					ctx.bezierCurveTo(bp[i + 1].x, bp[i + 1].y, bp[i + 2].x, bp[i + 2].y, bp[i + 3].x, bp[i + 3].y);

					if (isCanvasSupported)
						ghostCtx.bezierCurveTo(bp[i + 1].x, bp[i + 1].y, bp[i + 2].x, bp[i + 2].y, bp[i + 3].x, bp[i + 3].y);

					if (i > 0 && i % 3000 === 0) {
						ctx.stroke();
						ctx.beginPath();
						ctx.moveTo(bp[i + 3].x, bp[i + 3].y);

						if (isCanvasSupported) {
							ghostCtx.stroke();
							ghostCtx.beginPath();
							ghostCtx.moveTo(bp[i + 3].x, bp[i + 3].y);
						}
					}
				}

				ctx.stroke();

				if (isCanvasSupported)
					ghostCtx.stroke();
			}

		}


		RenderHelper.drawMarkers(markers);
		ctx.restore();

		ctx.beginPath();

		if (isCanvasSupported)
			ghostCtx.beginPath();
	}

	var drawRect = function (ctx, x1, y1, x2, y2, color, top, bottom, left, right) {
		//alert("top"+ top + "bottom" + bottom + " lt" + left+ "rt" + right )
		var a1 = x1, a2 = x2, b1 = y1, b2 = y2, edgeY, edgeX;
		if (x2 - x1 > 15 && y2 - y1 > 15)
			var bevelDepth = 8;
		else
			var bevelDepth = 0.35 * Math.min((x2 - x1), (y2 - y1));
		//alert(a1 + "" + a2);
		color2 = "rgba(255, 255, 255, .4)";
		color3 = "rgba(255, 255, 255, 0.1)";
		//color1 = "rgba(" + r + "," + g + ", " + b + ",1)";
		color1 = color;

		ctx.beginPath();
		ctx.moveTo(x1, y1);
		ctx.save();
		ctx.fillStyle = color1;
		//  ctx.moveTo(x1, y1);
		ctx.fillRect(x1, y1, x2 - x1, y2 - y1)
		ctx.restore();
		//   ctx.beginPath();
		if (top === true) {
			// alert(x1 + "" + x2 + " " + bevelDepth);
			ctx.save();
			ctx.beginPath();
			ctx.moveTo(x1, y1);
			ctx.lineTo(x1 + bevelDepth, y1 + bevelDepth);
			ctx.lineTo(x2 - bevelDepth, y1 + bevelDepth);
			ctx.lineTo(x2, y1);
			ctx.closePath();
			var grd = ctx.createLinearGradient((x2 + x1) / 2, b1 + bevelDepth, (x2 + x1) / 2, b1);
			grd.addColorStop(0, color1);
			grd.addColorStop(1, color2);
			ctx.fillStyle = grd;
			ctx.fill();
			//              ctx.stroke();
			ctx.restore();
		}


		if (bottom === true) {
			ctx.save();
			ctx.beginPath();
			ctx.moveTo(x1, y2);
			ctx.lineTo(x1 + bevelDepth, y2 - bevelDepth);
			ctx.lineTo(x2 - bevelDepth, y2 - bevelDepth);
			ctx.lineTo(x2, y2);
			ctx.closePath();
			var grd = ctx.createLinearGradient((x2 + x1) / 2, b2 - bevelDepth, (x2 + x1) / 2, b2);
			grd.addColorStop(0, color1);
			grd.addColorStop(1, color2);
			ctx.fillStyle = grd;
			//       ctx.stroke();
			ctx.fill();
			ctx.restore();
		}

		if (left === true) {
			//   alert(x1)
			ctx.save();
			ctx.beginPath();
			ctx.moveTo(x1, y1)
			ctx.lineTo(x1 + bevelDepth, y1 + bevelDepth);
			ctx.lineTo(x1 + bevelDepth, y2 - bevelDepth);
			ctx.lineTo(x1, y2);
			ctx.closePath();
			var grd = ctx.createLinearGradient(a1 + bevelDepth, (y2 + y1) / 2, a1, (y2 + y1) / 2);
			grd.addColorStop(0, color1);
			grd.addColorStop(1, color3);
			ctx.fillStyle = grd;
			ctx.fill();
			//     ctx.stroke();
			ctx.restore();
		}


		if (right === true) {
			ctx.save();
			ctx.beginPath();
			ctx.moveTo(x2, y1)
			ctx.lineTo(x2 - bevelDepth, y1 + bevelDepth);
			ctx.lineTo(x2 - bevelDepth, y2 - bevelDepth);
			ctx.lineTo(x2, y2);
			var grd = ctx.createLinearGradient(a2 - bevelDepth, (y2 + y1) / 2, a2, (y2 + y1) / 2);
			grd.addColorStop(0, color1);
			grd.addColorStop(1, color3);
			ctx.fillStyle = grd;
			grd.addColorStop(0, color1);
			grd.addColorStop(1, color3);
			ctx.fillStyle = grd;
			ctx.fill();
			ctx.closePath();
			//          ctx.stroke();
			ctx.restore();
		}
		//	

	}

	Chart.prototype.renderColumn = function (plotUnit) {
		var ctx = this.plotArea.ctx;
		var totalDataSeries = plotUnit.dataSeriesIndexes.length;

		if (totalDataSeries <= 0)
			return;

		var color = null;

		var plotArea = this.plotArea;

		var i = 0, x, y;
		var dataPointX; //Used so that when dataPoint.x is a DateTime value, it doesn't get converted to number from dataTime everytime it is used.

		var yZeroToPixel = (plotUnit.axisY.convertionParameters.reference + plotUnit.axisY.convertionParameters.pixelPerUnit * (0 - plotUnit.axisY.convertionParameters.minimum)) << 0;

		var maxBarWidth = (this.width * .15);
		var xMinDiff = plotUnit.axisX.dataInfo.minDiff;
		var barWidth = (((plotArea.width / Math.abs(plotUnit.axisX.maximum - plotUnit.axisX.minimum)) * Math.abs(xMinDiff)) / plotUnit.plotType.totalDataSeries * .9) << 0;

		if (barWidth > maxBarWidth)
			barWidth = maxBarWidth;
		else if (xMinDiff === Infinity) {
			barWidth = maxBarWidth;
		} else if (barWidth < 1)
			barWidth = 1;

		ctx.save();
		if (isCanvasSupported)
			this._eventManager.ghostCtx.save();

		ctx.beginPath();
		ctx.rect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);
		ctx.clip();

		if (isCanvasSupported) {
			this._eventManager.ghostCtx.rect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);
			this._eventManager.ghostCtx.clip();
		}
		//ctx.beginPath();

		for (var j = 0; j < plotUnit.dataSeriesIndexes.length; j++) {

			var dataSeriesIndex = plotUnit.dataSeriesIndexes[j];

			var dataSeries = this.data[dataSeriesIndex];
			var dataPoints = dataSeries.dataPoints;
			var isFirstDataPointInPlotArea = true;
						

			// Reducing pixelPerUnit by 1 just to overcome any problems due to rounding off of pixels.
			dataSeries.maxWidthInX = barWidth / (plotUnit.axisX.convertionParameters.pixelPerUnit > 1 ? plotUnit.axisX.convertionParameters.pixelPerUnit - 1 : plotUnit.axisX.convertionParameters.pixelPerUnit);

			//var offsetX = barWidth * plotUnit.index << 0;


			if (dataPoints.length > 0) {
				//var xy = this.getPixelCoordinatesOnPlotArea(dataPoints[0].x, dataPoints[0].y);

				var bevelEnabled = (barWidth > 5) && dataSeries.bevelEnabled ? true : false;

				for (i = 0; i < dataPoints.length; i++) {

					dataPoints[i].getTime ? dataPointX = dataPoints[i].x.getTime() : dataPointX = dataPoints[i].x;

					if (dataPointX < plotUnit.axisX.dataInfo.viewPortMin || dataPointX > plotUnit.axisX.dataInfo.viewPortMax) {
						continue;
					}

					if (typeof (dataPoints[i].y) !== "number")
						continue;

					x = (plotUnit.axisX.convertionParameters.reference + plotUnit.axisX.convertionParameters.pixelPerUnit * (dataPointX - plotUnit.axisX.convertionParameters.minimum) + .5) << 0;
					y = (plotUnit.axisY.convertionParameters.reference + plotUnit.axisY.convertionParameters.pixelPerUnit * (dataPoints[i].y - plotUnit.axisY.convertionParameters.minimum) + .5) << 0;

					var x1 = x - (plotUnit.plotType.totalDataSeries * barWidth / 2) + ((plotUnit.previousDataSeriesCount + j) * barWidth) << 0;
					var x2 = x1 + barWidth << 0;
					var y1;
					var y2;

					if (dataPoints[i].y >= 0) {
						y1 = y;

						y2 = yZeroToPixel;

						if (y1 > y2) {
							var temp = y1;
							y1 = y2;
							y2 = y1;
						}

					} else {
						y2 = y;

						y1 = yZeroToPixel;

						if (y1 > y2) {
							var temp = y1;
							y1 = y2;
							y2 = y1;
						}
					}

					color = dataPoints[i].color ? dataPoints[i].color : dataSeries._colorSet[i % dataSeries._colorSet.length];
					drawRect(ctx, x1, y1, x2, y2, color, bevelEnabled && (dataPoints[i].y >= 0), (dataPoints[i].y < 0) && bevelEnabled, false, false);

					//if (dataSeries.markerType && dataSeries.markerSize > 0) {
					//    RenderHelper.drawMarker(x1 + (x2 - x1) / 2, y, ctx, dataSeries.markerType, dataSeries.markerSize, color, dataSeries.markerBorderColor, dataSeries.markerBorderThickness ? dataSeries.markerBorderThickness : 1);
					//}

					var id = dataSeries.dataPointIds[i];
					this._eventManager.objectMap[id] = { objectType: "dataPoint", dataSeriesIndex: dataSeriesIndex, dataPointIndex: i, x1: x1, y1: y1, x2: x2, y2: y2 };

					color = intToHexColorString(id);
					if (isCanvasSupported)
						drawRect(this._eventManager.ghostCtx, x1, y1, x2, y2, color, false, false, false, false);

					if (dataPoints[i].indexLabel || dataSeries.indexLabel) {

						this._indexLabels.push({
							chartType: "column",
							dataPoint: dataPoints[i],
							dataSeries: dataSeries,
							point: { x: x1 + (x2 - x1) / 2, y: dataPoints[i].y >= 0 ? y1 : y2 },
							bounds: { x1: x1, y1: Math.min(y1, y2), x2: x2, y2: Math.max(y1, y2) },
							color: color
						});

					}
				}
			}
		}

		ctx.restore();

		if (isCanvasSupported)
			this._eventManager.ghostCtx.restore();
	}

	Chart.prototype.renderStackedColumn = function (plotUnit) {
		var ctx = this.plotArea.ctx;
		var totalDataSeries = plotUnit.dataSeriesIndexes.length;

		if (totalDataSeries <= 0)
			return;

		var color = null;

		var plotArea = this.plotArea;

		var offsetPositiveY = [];
		var offsetNegativeY = [];

		var i = 0, x, y;
		var dataPointX; //Used so that when dataPoint.x is a DateTime value, it doesn't get converted to number everytime it is accessed.

		//var yZeroToPixel = (axisYProps.y2 - axisYProps.height / rangeY * Math.abs(0 - plotUnit.axisY.minimum) + .5) << 0;
		var yZeroToPixel = (plotUnit.axisY.convertionParameters.reference + plotUnit.axisY.convertionParameters.pixelPerUnit * (0 - plotUnit.axisY.convertionParameters.minimum)) << 0;

		var maxBarWidth = this.width * .15;
		var xMinDiff = plotUnit.axisX.dataInfo.minDiff;
		var barWidth = (((plotArea.width / Math.abs(plotUnit.axisX.maximum - plotUnit.axisX.minimum)) * Math.abs(xMinDiff)) / plotUnit.plotType.plotUnits.length * .9) << 0;

		if (barWidth > maxBarWidth)
			barWidth = maxBarWidth;
		else if (xMinDiff === Infinity) {
			barWidth = maxBarWidth;
		} else if (barWidth < 1)
			barWidth = 1;



		ctx.save();
		if (isCanvasSupported)
			this._eventManager.ghostCtx.save();

		ctx.beginPath();
		ctx.rect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);
		ctx.clip();

		if (isCanvasSupported) {
			this._eventManager.ghostCtx.rect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);
			this._eventManager.ghostCtx.clip();
		}

		for (var j = 0; j < plotUnit.dataSeriesIndexes.length; j++) {

			var dataSeriesIndex = plotUnit.dataSeriesIndexes[j];
			var dataSeries = this.data[dataSeriesIndex];
			var dataPoints = dataSeries.dataPoints;
			var isFirstDataPointInPlotArea = true;

			// Reducing pixelPerUnit by 1 just to overcome any problems due to rounding off of pixels.
			dataSeries.maxWidthInX = barWidth / (plotUnit.axisX.convertionParameters.pixelPerUnit > 1 ? plotUnit.axisX.convertionParameters.pixelPerUnit - 1 : plotUnit.axisX.convertionParameters.pixelPerUnit);


			if (dataPoints.length > 0) {
				//var xy = this.getPixelCoordinatesOnPlotArea(dataPoints[0].x, dataPoints[0].y);

				var bevelEnabled = (barWidth > 5) && dataSeries.bevelEnabled ? true : false;

				ctx.strokeStyle = "#4572A7 ";

				for (i = 0; i < dataPoints.length; i++) {

					dataPointX = dataPoints[i].x.getTime ? dataPoints[i].x.getTime() : dataPoints[i].x;


					if (dataPointX < plotUnit.axisX.dataInfo.viewPortMin || dataPointX > plotUnit.axisX.dataInfo.viewPortMax) {
						continue;
					}

					if (typeof (dataPoints[i].y) !== "number")
						continue;

					x = (plotUnit.axisX.convertionParameters.reference + plotUnit.axisX.convertionParameters.pixelPerUnit * (dataPointX - plotUnit.axisX.convertionParameters.minimum) + .5) << 0;
					y = (plotUnit.axisY.convertionParameters.reference + plotUnit.axisY.convertionParameters.pixelPerUnit * (dataPoints[i].y - plotUnit.axisY.convertionParameters.minimum) + .5) << 0;

					var x1 = x - (plotUnit.plotType.plotUnits.length * barWidth / 2) + (plotUnit.index * barWidth) << 0;
					var x2 = x1 + barWidth << 0;
					var y1;
					var y2;


					if (dataPoints[i].y >= 0) {
						var offset = offsetPositiveY[dataPointX] ? offsetPositiveY[dataPointX] : 0;

						y1 = y - offset;
						y2 = yZeroToPixel - offset;

						offsetPositiveY[dataPointX] = offset + (y2 - y1);

					} else {
						var offset = offsetNegativeY[dataPointX] ? offsetNegativeY[dataPointX] : 0;

						y2 = y + offset;
						y1 = yZeroToPixel + offset;

						offsetNegativeY[dataPointX] = offset + (y2 - y1);
					}

					color = dataPoints[i].color ? dataPoints[i].color : dataSeries._colorSet[i % dataSeries._colorSet.length];

					drawRect(ctx, x1, y1, x2, y2, color, bevelEnabled && (dataPoints[i].y >= 0), (dataPoints[i].y < 0) && bevelEnabled, false, false);

					//if (dataSeries.markerType && dataSeries.markerSize > 0) {
					//    RenderHelper.drawMarker(x1 + (x2 - x1)/2, y1, ctx, dataSeries.markerType, dataSeries.markerSize, color, dataSeries.markerBorderColor, dataSeries.markerBorderThickness ? dataSeries.markerBorderThickness : 1);
					//}

					var id = dataSeries.dataPointIds[i];
					this._eventManager.objectMap[id] = { objectType: "dataPoint", dataSeriesIndex: dataSeriesIndex, dataPointIndex: i, x1: x1, y1: y1, x2: x2, y2: y2 };
					color = intToHexColorString(id);

					if (isCanvasSupported)
						drawRect(this._eventManager.ghostCtx, x1, y1, x2, y2, color, false, false, false, false);


					if (dataPoints[i].indexLabel || dataSeries.indexLabel) {

						this._indexLabels.push({
							chartType: "stackedColumn",
							dataPoint: dataPoints[i],
							dataSeries: dataSeries,
							point: { x: x, y: dataPoints[i].y >= 0 ? y1 : y2 },
							bounds: { x1: x1, y1: Math.min(y1, y2), x2: x2, y2: Math.max(y1, y2) },
							color: color
						});

					}
				}
			}
		}

		ctx.restore();

		if (isCanvasSupported)
			this._eventManager.ghostCtx.restore();
	}

	Chart.prototype.renderStackedColumn100 = function (plotUnit) {
		var ctx = this.plotArea.ctx;
		var totalDataSeries = plotUnit.dataSeriesIndexes.length;

		if (totalDataSeries <= 0)
			return;

		var color = null;

		var plotArea = this.plotArea;

		var offsetPositiveY = [];
		var offsetNegativeY = [];

		var i = 0, x, y;
		var dataPointX; //Used so that when dataPoint.x is a DateTime value, it doesn't get converted to number everytime it is accessed.

		//var yZeroToPixel = (axisYProps.y2 - axisYProps.height / rangeY * Math.abs(0 - plotUnit.axisY.minimum) + .5) << 0;
		var yZeroToPixel = (plotUnit.axisY.convertionParameters.reference + plotUnit.axisY.convertionParameters.pixelPerUnit * (0 - plotUnit.axisY.convertionParameters.minimum)) << 0;

		var maxBarWidth = this.width * .15;
		var xMinDiff = plotUnit.axisX.dataInfo.minDiff;
		var barWidth = (((plotArea.width / Math.abs(plotUnit.axisX.maximum - plotUnit.axisX.minimum)) * Math.abs(xMinDiff)) / plotUnit.plotType.plotUnits.length * .9) << 0;

		if (barWidth > maxBarWidth)
			barWidth = maxBarWidth;
		else if (xMinDiff === Infinity) {
			barWidth = maxBarWidth;
		} else if (barWidth < 1)
			barWidth = 1;

		ctx.save();
		if (isCanvasSupported)
			this._eventManager.ghostCtx.save();

		ctx.beginPath();
		ctx.rect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);
		ctx.clip();

		if (isCanvasSupported) {
			this._eventManager.ghostCtx.rect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);
			this._eventManager.ghostCtx.clip();
		}

		for (var j = 0; j < plotUnit.dataSeriesIndexes.length; j++) {

			var dataSeriesIndex = plotUnit.dataSeriesIndexes[j];

			var dataSeries = this.data[dataSeriesIndex];
			var dataPoints = dataSeries.dataPoints;
			var isFirstDataPointInPlotArea = true;


			dataSeries.maxWidthInX = barWidth / (plotUnit.axisX.convertionParameters.pixelPerUnit > 1 ? plotUnit.axisX.convertionParameters.pixelPerUnit - 1 : plotUnit.axisX.convertionParameters.pixelPerUnit);


			if (dataPoints.length > 0) {
				//var xy = this.getPixelCoordinatesOnPlotArea(dataPoints[0].x, dataPoints[0].y);

				var bevelEnabled = (barWidth > 5) && dataSeries.bevelEnabled ? true : false;

				//ctx.strokeStyle = "#4572A7 ";

				for (i = 0; i < dataPoints.length; i++) {

					dataPointX = dataPoints[i].x.getTime ? dataPoints[i].x.getTime() : dataPoints[i].x;


					if (dataPointX < plotUnit.axisX.dataInfo.viewPortMin || dataPointX > plotUnit.axisX.dataInfo.viewPortMax) {
						continue;
					}

					if (typeof (dataPoints[i].y) !== "number")
						continue;

					x = (plotUnit.axisX.convertionParameters.reference + plotUnit.axisX.convertionParameters.pixelPerUnit * (dataPointX - plotUnit.axisX.convertionParameters.minimum) + .5) << 0;

					var yPercent;
					if (plotUnit.dataPointYSums[dataPointX] !== 0)
						yPercent = dataPoints[i].y / plotUnit.dataPointYSums[dataPointX] * 100;
					else
						yPercent = 0;

					y = (plotUnit.axisY.convertionParameters.reference + plotUnit.axisY.convertionParameters.pixelPerUnit * (yPercent - plotUnit.axisY.convertionParameters.minimum) + .5) << 0;

					var x1 = x - (plotUnit.plotType.plotUnits.length * barWidth / 2) + (plotUnit.index * barWidth) << 0;
					var x2 = x1 + barWidth << 0;
					var y1;
					var y2;


					if (dataPoints[i].y >= 0) {
						var offset = offsetPositiveY[dataPointX] ? offsetPositiveY[dataPointX] : 0;

						y1 = y - offset;
						y2 = yZeroToPixel - offset;

						offsetPositiveY[dataPointX] = offset + (y2 - y1);

					} else {
						var offset = offsetNegativeY[dataPointX] ? offsetNegativeY[dataPointX] : 0;

						y2 = y + offset;
						y1 = yZeroToPixel + offset;

						offsetNegativeY[dataPointX] = offset + (y2 - y1);
					}


					color = dataPoints[i].color ? dataPoints[i].color : dataSeries._colorSet[i % dataSeries._colorSet.length];
					drawRect(ctx, x1, y1, x2, y2, color, bevelEnabled && (dataPoints[i].y >= 0), (dataPoints[i].y < 0) && bevelEnabled, false, false);

					var id = dataSeries.dataPointIds[i];
					this._eventManager.objectMap[id] = { objectType: "dataPoint", dataSeriesIndex: dataSeriesIndex, dataPointIndex: i, x1: x1, y1: y1, x2: x2, y2: y2 };
					color = intToHexColorString(id);

					if (isCanvasSupported)
						drawRect(this._eventManager.ghostCtx, x1, y1, x2, y2, color, false, false, false, false);


					if (dataPoints[i].indexLabel || dataSeries.indexLabel) {

						this._indexLabels.push({
							chartType: "stackedColumn100",
							dataPoint: dataPoints[i],
							dataSeries: dataSeries,
							point: { x: x, y: dataPoints[i].y >= 0 ? y1 : y2 },
							bounds: { x1: x1, y1: Math.min(y1, y2), x2: x2, y2: Math.max(y1, y2) },
							color: color
						});

					}
				}
			}
		}

		ctx.restore();

		if (isCanvasSupported)
			this._eventManager.ghostCtx.restore();
	}

	Chart.prototype.renderBar = function (plotUnit) {
		var ctx = this.plotArea.ctx;
		var totalDataSeries = plotUnit.dataSeriesIndexes.length;

		if (totalDataSeries <= 0)
			return;

		var color = null;

		var plotArea = this.plotArea;

		var i = 0, x, y;
		var dataPointX; //Used so that when dataPoint.x is a DateTime value, it doesn't get converted to number from dataTime everytime it is used.

		//In case of Bar Chart, yZeroToPixel is x co-ordinate!
		var yZeroToPixel = (plotUnit.axisY.convertionParameters.reference + plotUnit.axisY.convertionParameters.pixelPerUnit * (0 - plotUnit.axisY.convertionParameters.minimum)) << 0;

		var maxBarWidth = this.height * .15;
		var xMinDiff = plotUnit.axisX.dataInfo.minDiff;
		//var barWidth = (((plotArea.height / Math.abs(plotUnit.axisX.maximum - plotUnit.axisX.minimum)) * Math.abs(xMinDiff)) / totalDataSeries * .9) << 0;

		var barWidth = (((plotArea.height / Math.abs(plotUnit.axisX.maximum - plotUnit.axisX.minimum)) * Math.abs(xMinDiff)) / plotUnit.plotType.totalDataSeries * .9) << 0;

		if (barWidth > maxBarWidth)
			barWidth = maxBarWidth;
		else if (xMinDiff === Infinity) {
			barWidth = maxBarWidth;
		} else if (barWidth < 1)
			barWidth = 1;

		ctx.save();

		if (isCanvasSupported)
			this._eventManager.ghostCtx.save();

		ctx.beginPath();
		ctx.rect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);
		ctx.clip();

		if (isCanvasSupported) {
			this._eventManager.ghostCtx.rect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);
			this._eventManager.ghostCtx.clip();
		}

		for (var j = 0; j < plotUnit.dataSeriesIndexes.length; j++) {

			var dataSeriesIndex = plotUnit.dataSeriesIndexes[j];

			var dataSeries = this.data[dataSeriesIndex];
			var dataPoints = dataSeries.dataPoints;
			var isFirstDataPointInPlotArea = true;


			dataSeries.maxWidthInX = barWidth / (plotUnit.axisX.convertionParameters.pixelPerUnit > 1 ? plotUnit.axisX.convertionParameters.pixelPerUnit - 1 : plotUnit.axisX.convertionParameters.pixelPerUnit);


			if (dataPoints.length > 0) {
				//var xy = this.getPixelCoordinatesOnPlotArea(dataPoints[0].x, dataPoints[0].y);

				var bevelEnabled = (barWidth > 5) && dataSeries.bevelEnabled ? true : false;

				ctx.strokeStyle = "#4572A7 ";

				for (i = 0; i < dataPoints.length; i++) {

					dataPoints[i].getTime ? dataPointX = dataPoints[i].x.getTime() : dataPointX = dataPoints[i].x;

					if (dataPointX < plotUnit.axisX.dataInfo.viewPortMin || dataPointX > plotUnit.axisX.dataInfo.viewPortMax) {
						continue;
					}

					if (typeof (dataPoints[i].y) !== "number")
						continue;

					//x and y are pixel co-ordinates of point and should not be confused with X and Y values
					y = (plotUnit.axisX.convertionParameters.reference + plotUnit.axisX.convertionParameters.pixelPerUnit * (dataPointX - plotUnit.axisX.convertionParameters.minimum) + .5) << 0;
					x = (plotUnit.axisY.convertionParameters.reference + plotUnit.axisY.convertionParameters.pixelPerUnit * (dataPoints[i].y - plotUnit.axisY.convertionParameters.minimum) + .5) << 0;


					var y1 = (y - (plotUnit.plotType.totalDataSeries * barWidth / 2) + ((plotUnit.previousDataSeriesCount + j) * barWidth)) << 0;
					var y2 = y1 + barWidth << 0;
					var x1;
					var x2;

					if (dataPoints[i].y >= 0) {
						x1 = yZeroToPixel;
						x2 = x;
					} else {
						x1 = x;
						x2 = yZeroToPixel;
					}

					//drawRect(ctx, x1, y1, plotArea.x2, y2, "#EEEEEE", false, false, false, false);
					//drawRect(ctx, x1, y1, plotArea.x2, y2, "#BDCED3", false, false, false, false);

					color = dataPoints[i].color ? dataPoints[i].color : dataSeries._colorSet[i % dataSeries._colorSet.length];
					//color = "#1B4962";
					drawRect(ctx, x1, y1, x2, y2, color, bevelEnabled, false, false, false);


					var id = dataSeries.dataPointIds[i];
					this._eventManager.objectMap[id] = { objectType: "dataPoint", dataSeriesIndex: dataSeriesIndex, dataPointIndex: i, x1: x1, y1: y1, x2: x2, y2: y2 };
					color = intToHexColorString(id);

					if (isCanvasSupported)
						drawRect(this._eventManager.ghostCtx, x1, y1, x2, y2, color, false, false, false, false);


					this._indexLabels.push({
						chartType: "bar",
						dataPoint: dataPoints[i],
						dataSeries: dataSeries,
						point: { x: dataPoints[i].y >= 0 ? x2 : x1, y: y1 + (y2 - y1) / 2 },
						bounds: { x1: Math.min(x1, x2), y1: y1, x2: Math.max(x1, x2), y2: y2 },
						color: color
					});
				}
			}
		}

		ctx.restore();

		if (isCanvasSupported)
			this._eventManager.ghostCtx.restore();
	}

	Chart.prototype.renderStackedBar = function (plotUnit) {
		var ctx = this.plotArea.ctx;
		var totalDataSeries = plotUnit.dataSeriesIndexes.length;

		if (totalDataSeries <= 0)
			return;

		var color = null;

		var plotArea = this.plotArea;

		var offsetPositiveY = [];
		var offsetNegativeY = [];

		var i = 0, x, y;
		var dataPointX; //Used so that when dataPoint.x is a DateTime value, it doesn't get converted to number everytime it is accessed.

		//var yZeroToPixel = (axisYProps.y2 - axisYProps.height / rangeY * Math.abs(0 - plotUnit.axisY.minimum) + .5) << 0;
		var yZeroToPixel = (plotUnit.axisY.convertionParameters.reference + plotUnit.axisY.convertionParameters.pixelPerUnit * (0 - plotUnit.axisY.convertionParameters.minimum)) << 0;

		var maxBarWidth = this.width * .15;
		var xMinDiff = plotUnit.axisX.dataInfo.minDiff;
		var barWidth = (((plotArea.height / Math.abs(plotUnit.axisX.maximum - plotUnit.axisX.minimum)) * Math.abs(xMinDiff)) / plotUnit.plotType.plotUnits.length * .9) << 0;

		if (barWidth > maxBarWidth)
			barWidth = maxBarWidth;
		else if (xMinDiff === Infinity) {
			barWidth = maxBarWidth;
		} else if (barWidth < 1)
			barWidth = 1;

		ctx.save();

		if (isCanvasSupported)
			this._eventManager.ghostCtx.save();

		ctx.beginPath();
		ctx.rect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);
		ctx.clip();

		if (isCanvasSupported) {
			this._eventManager.ghostCtx.rect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);
			this._eventManager.ghostCtx.clip();
		}

		for (var j = 0; j < plotUnit.dataSeriesIndexes.length; j++) {

			var dataSeriesIndex = plotUnit.dataSeriesIndexes[j];

			var dataSeries = this.data[dataSeriesIndex];
			var dataPoints = dataSeries.dataPoints;
			var isFirstDataPointInPlotArea = true;

			dataSeries.maxWidthInX = barWidth / (plotUnit.axisX.convertionParameters.pixelPerUnit > 1 ? plotUnit.axisX.convertionParameters.pixelPerUnit - 1 : plotUnit.axisX.convertionParameters.pixelPerUnit);

			if (dataPoints.length > 0) {
				//var xy = this.getPixelCoordinatesOnPlotArea(dataPoints[0].x, dataPoints[0].y);

				var bevelEnabled = (barWidth > 5) && dataSeries.bevelEnabled ? true : false;

				ctx.strokeStyle = "#4572A7 ";

				for (i = 0; i < dataPoints.length; i++) {

					dataPointX = dataPoints[i].x.getTime ? dataPoints[i].x.getTime() : dataPoints[i].x;


					if (dataPointX < plotUnit.axisX.dataInfo.viewPortMin || dataPointX > plotUnit.axisX.dataInfo.viewPortMax) {
						continue;
					}

					if (typeof (dataPoints[i].y) !== "number")
						continue;

					y = (plotUnit.axisX.convertionParameters.reference + plotUnit.axisX.convertionParameters.pixelPerUnit * (dataPointX - plotUnit.axisX.convertionParameters.minimum) + .5) << 0;
					x = (plotUnit.axisY.convertionParameters.reference + plotUnit.axisY.convertionParameters.pixelPerUnit * (dataPoints[i].y - plotUnit.axisY.convertionParameters.minimum) + .5) << 0;

					//var x1 = x - (plotUnit.plotType.plotUnits.length * barWidth / 2) + (plotUnit.index * barWidth) << 0;

					var y1 = y - (plotUnit.plotType.plotUnits.length * barWidth / 2) + (plotUnit.index * barWidth) << 0;
					var y2 = y1 + barWidth << 0;
					var x1;
					var x2;

					if (dataPoints[i].y >= 0) {
						var offset = offsetPositiveY[dataPointX] ? offsetPositiveY[dataPointX] : 0;

						x1 = yZeroToPixel + offset;
						x2 = x + offset;

						offsetPositiveY[dataPointX] = offset + (x2 - x1);

					} else {
						var offset = offsetNegativeY[dataPointX] ? offsetNegativeY[dataPointX] : 0;

						x1 = x - offset;
						x2 = yZeroToPixel - offset;

						offsetNegativeY[dataPointX] = offset + (x2 - x1);
					}


					color = dataPoints[i].color ? dataPoints[i].color : dataSeries._colorSet[i % dataSeries._colorSet.length];
					drawRect(ctx, x1, y1, x2, y2, color, bevelEnabled, false, false, false);

					var id = dataSeries.dataPointIds[i];
					this._eventManager.objectMap[id] = { objectType: "dataPoint", dataSeriesIndex: dataSeriesIndex, dataPointIndex: i, x1: x1, y1: y1, x2: x2, y2: y2 };
					color = intToHexColorString(id);

					if (isCanvasSupported)
						drawRect(this._eventManager.ghostCtx, x1, y1, x2, y2, color, false, false, false, false);


					this._indexLabels.push({
						chartType: "stackedBar",
						dataPoint: dataPoints[i],
						dataSeries: dataSeries,
						point: { x: dataPoints[i].y >= 0 ? x2 : x1, y: y },
						bounds: { x1: Math.min(x1, x2), y1: y1, x2: Math.max(x1, x2), y2: y2 },
						color: color
					});
				}
			}
		}

		ctx.restore();

		if (isCanvasSupported)
			this._eventManager.ghostCtx.restore();
	}

	Chart.prototype.renderStackedBar100 = function (plotUnit) {
		var ctx = this.plotArea.ctx;
		var totalDataSeries = plotUnit.dataSeriesIndexes.length;

		if (totalDataSeries <= 0)
			return;

		var color = null;

		var plotArea = this.plotArea;

		var offsetPositiveY = [];
		var offsetNegativeY = [];

		var i = 0, x, y;
		var dataPointX; //Used so that when dataPoint.x is a DateTime value, it doesn't get converted to number everytime it is accessed.

		//var yZeroToPixel = (axisYProps.y2 - axisYProps.height / rangeY * Math.abs(0 - plotUnit.axisY.minimum) + .5) << 0;
		var yZeroToPixel = (plotUnit.axisY.convertionParameters.reference + plotUnit.axisY.convertionParameters.pixelPerUnit * (0 - plotUnit.axisY.convertionParameters.minimum)) << 0;

		var maxBarWidth = this.width * .15;
		var xMinDiff = plotUnit.axisX.dataInfo.minDiff;
		var barWidth = (((plotArea.height / Math.abs(plotUnit.axisX.maximum - plotUnit.axisX.minimum)) * Math.abs(xMinDiff)) / plotUnit.plotType.plotUnits.length * .9) << 0;

		if (barWidth > maxBarWidth)
			barWidth = maxBarWidth;
		else if (xMinDiff === Infinity) {
			barWidth = maxBarWidth;
		} else if (barWidth < 1)
			barWidth = 1;

		ctx.save();

		if (isCanvasSupported)
			this._eventManager.ghostCtx.save();

		ctx.beginPath();
		ctx.rect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);
		ctx.clip();

		if (isCanvasSupported) {
			this._eventManager.ghostCtx.rect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);
			this._eventManager.ghostCtx.clip();
		}

		for (var j = 0; j < plotUnit.dataSeriesIndexes.length; j++) {

			var dataSeriesIndex = plotUnit.dataSeriesIndexes[j];

			var dataSeries = this.data[dataSeriesIndex];
			var dataPoints = dataSeries.dataPoints;
			var isFirstDataPointInPlotArea = true;

			dataSeries.maxWidthInX = barWidth / (plotUnit.axisX.convertionParameters.pixelPerUnit > 1 ? plotUnit.axisX.convertionParameters.pixelPerUnit - 1 : plotUnit.axisX.convertionParameters.pixelPerUnit);

			if (dataPoints.length > 0) {
				//var xy = this.getPixelCoordinatesOnPlotArea(dataPoints[0].x, dataPoints[0].y);

				var bevelEnabled = (barWidth > 5) && dataSeries.bevelEnabled ? true : false;

				ctx.strokeStyle = "#4572A7 ";

				for (i = 0; i < dataPoints.length; i++) {

					dataPointX = dataPoints[i].x.getTime ? dataPoints[i].x.getTime() : dataPoints[i].x;


					if (dataPointX < plotUnit.axisX.dataInfo.viewPortMin || dataPointX > plotUnit.axisX.dataInfo.viewPortMax) {
						continue;
					}

					if (typeof (dataPoints[i].y) !== "number")
						continue;

					y = (plotUnit.axisX.convertionParameters.reference + plotUnit.axisX.convertionParameters.pixelPerUnit * (dataPointX - plotUnit.axisX.convertionParameters.minimum) + .5) << 0;

					var yPercent;
					if (plotUnit.dataPointYSums[dataPointX] !== 0)
						yPercent = dataPoints[i].y / plotUnit.dataPointYSums[dataPointX] * 100;
					else
						yPercent = 0;

					x = (plotUnit.axisY.convertionParameters.reference + plotUnit.axisY.convertionParameters.pixelPerUnit * (yPercent - plotUnit.axisY.convertionParameters.minimum) + .5) << 0;

					var y1 = y - (plotUnit.plotType.plotUnits.length * barWidth / 2) + (plotUnit.index * barWidth) << 0;
					var y2 = y1 + barWidth << 0;
					var x1;
					var x2;


					if (dataPoints[i].y >= 0) {
						var offset = offsetPositiveY[dataPointX] ? offsetPositiveY[dataPointX] : 0;

						x1 = yZeroToPixel + offset;
						x2 = x + offset;

						offsetPositiveY[dataPointX] = offset + (x2 - x1);

					} else {
						var offset = offsetNegativeY[dataPointX] ? offsetNegativeY[dataPointX] : 0;

						x1 = x - offset;
						x2 = yZeroToPixel - offset;

						offsetNegativeY[dataPointX] = offset + (x2 - x1);
					}


					color = dataPoints[i].color ? dataPoints[i].color : dataSeries._colorSet[i % dataSeries._colorSet.length];
					drawRect(ctx, x1, y1, x2, y2, color, bevelEnabled, false, false, false);

					var id = dataSeries.dataPointIds[i];
					this._eventManager.objectMap[id] = { objectType: "dataPoint", dataSeriesIndex: dataSeriesIndex, dataPointIndex: i, x1: x1, y1: y1, x2: x2, y2: y2 };
					color = intToHexColorString(id);

					if (isCanvasSupported)
						drawRect(this._eventManager.ghostCtx, x1, y1, x2, y2, color, false, false, false, false);


					this._indexLabels.push({
						chartType: "stackedBar100",
						dataPoint: dataPoints[i],
						dataSeries: dataSeries,
						point: { x: dataPoints[i].y >= 0 ? x2 : x1, y: y },
						bounds: { x1: Math.min(x1, x2), y1: y1, x2: Math.max(x1, x2), y2: y2 },
						color: color
					});
				}
			}
		}

		ctx.restore();

		if (isCanvasSupported)
			this._eventManager.ghostCtx.restore();
	}

	Chart.prototype.renderArea = function (plotUnit) {
		var ctx = this.plotArea.ctx;
		var totalDataSeries = plotUnit.dataSeriesIndexes.length;

		if (totalDataSeries <= 0)
			return;

		var ghostCtx = this._eventManager.ghostCtx;

		var axisXProps = plotUnit.axisX.lineCoordinates;
		var axisYProps = plotUnit.axisY.lineCoordinates;
		var markers = [];

		var plotArea = this.plotArea;
		ctx.save();

		if (isCanvasSupported)
			ghostCtx.save();

		ctx.beginPath();
		ctx.rect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);
		ctx.clip();

		if (isCanvasSupported) {
			ghostCtx.beginPath();
			ghostCtx.rect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);
			ghostCtx.clip();
		}

		for (var j = 0; j < plotUnit.dataSeriesIndexes.length; j++) {

			var dataSeriesIndex = plotUnit.dataSeriesIndexes[j];

			var dataSeries = this.data[dataSeriesIndex];

			var dataPoints = dataSeries.dataPoints;

			var seriesId = dataSeries.id;
			this._eventManager.objectMap[seriesId] = { objectType: "dataSeries", dataSeriesIndex: dataSeriesIndex };

			var hexColor = intToHexColorString(seriesId);
			ghostCtx.fillStyle = hexColor;
			//ghostCtx.lineWidth = dataSeries.lineThickness;
			//ghostCtx.lineWidth = 20;

			markers = [];

			var isFirstDataPointInPlotArea = true;
			var i = 0, x, y;
			var dataPointX; //Used so that when dataPoint.x is a DateTime value, it doesn't get converted to number back and forth.

			var yZeroToPixel = (plotUnit.axisY.convertionParameters.reference + plotUnit.axisY.convertionParameters.pixelPerUnit * (0 - plotUnit.axisY.convertionParameters.minimum) + .5) << 0;
			var baseY;

			var startPoint = null;

			if (dataPoints.length > 0) {
				//ctx.strokeStyle = "#4572A7 ";                
				color = dataSeries._colorSet[i % dataSeries._colorSet.length];
				//ctx.strokeStyle = "red";
				ctx.fillStyle = color;

				for (; i < dataPoints.length; i++) {

					dataPointX = dataPoints[i].x.getTime ? dataPoints[i].x.getTime() : dataPoints[i].x;

					if (dataPointX < plotUnit.axisX.dataInfo.viewPortMin || dataPointX > plotUnit.axisX.dataInfo.viewPortMax) {
						continue;
					}

					x = (plotUnit.axisX.convertionParameters.reference + plotUnit.axisX.convertionParameters.pixelPerUnit * (dataPointX - plotUnit.axisX.convertionParameters.minimum) + .5) << 0;
					y = (plotUnit.axisY.convertionParameters.reference + plotUnit.axisY.convertionParameters.pixelPerUnit * (dataPoints[i].y - plotUnit.axisY.convertionParameters.minimum) + .5) << 0;

					if (typeof (dataPoints[i].y) !== "number")
						continue;

					if (isFirstDataPointInPlotArea) {
						ctx.beginPath();
						ctx.moveTo(x, y);
						startPoint = { x: x, y: y };

						if (isCanvasSupported) {
							ghostCtx.beginPath();
							ghostCtx.moveTo(x, y);
						}

						isFirstDataPointInPlotArea = false;
					}
					else {

						ctx.lineTo(x, y);

						if (isCanvasSupported)
							ghostCtx.lineTo(x, y);

						if (i % 250 == 0) {

							if (plotUnit.axisY.minimum <= 0 && plotUnit.axisY.maximum >= 0) {
								baseY = yZeroToPixel;
							}
							else if (plotUnit.axisY.maximum < 0)
								baseY = axisYProps.y1;
							else if (plotUnit.axisY.minimum > 0)
								baseY = axisXProps.y2;

							ctx.lineTo(x, baseY);
							ctx.lineTo(startPoint.x, baseY);
							ctx.closePath();
							ctx.fill();
							ctx.beginPath();
							ctx.moveTo(x, y);

							if (isCanvasSupported) {
								ghostCtx.lineTo(x, baseY);
								ghostCtx.lineTo(startPoint.x, baseY);
								ghostCtx.closePath();
								ghostCtx.fill();
								ghostCtx.beginPath();
								ghostCtx.moveTo(x, y);
							}

							startPoint = { x: x, y: y };
						}
					}


					var id = dataSeries.dataPointIds[i];
					this._eventManager.objectMap[id] = { objectType: "dataPoint", dataSeriesIndex: dataSeriesIndex, dataPointIndex: i, x1: x, y1: y };

					//Render Marker
					if (dataPoints[i].markerSize !== 0) {
						if (dataPoints[i].markerSize > 0 || dataSeries.markerSize > 0) {
							var markerProps = dataSeries.getMarkerProperties(i, x, y, ctx);
							markers.push(markerProps);

							if (!dataSeries.maxWidthInX || markerProps.size > dataSeries.maxWidthInX) {
								dataSeries.maxWidthInX = markerProps.size / (plotUnit.axisX.convertionParameters.pixelPerUnit > 1 ? plotUnit.axisX.convertionParameters.pixelPerUnit - 1 : plotUnit.axisX.convertionParameters.pixelPerUnit);
							}

							markerColor = intToHexColorString(id);

							if (isCanvasSupported) {
								markers.push({
									x: x, y: y, ctx: ghostCtx,
									type: markerProps.type,
									size: markerProps.size,
									color: markerColor,
									borderColor: markerColor,
									borderThickness: markerProps.borderThickness
								});
							}
						}
					}

					if (dataPoints[i].indexLabel || dataSeries.indexLabel) {

						this._indexLabels.push({
							chartType: "area",
							dataPoint: dataPoints[i],
							dataSeries: dataSeries,
							point: { x: x, y: y },
							color: color
						});

					}
				}

				if (plotUnit.axisY.minimum <= 0 && plotUnit.axisY.maximum >= 0) {
					baseY = yZeroToPixel;
				}
				else if (plotUnit.axisY.maximum < 0)
					baseY = axisYProps.y1;
				else if (plotUnit.axisY.minimum > 0)
					baseY = axisXProps.y2;

				ctx.lineTo(x, baseY);
				ctx.lineTo(startPoint.x, baseY);
				ctx.closePath();
				ctx.fill();

				if (isCanvasSupported) {
					ghostCtx.lineTo(x, baseY);
					ghostCtx.lineTo(startPoint.x, baseY);
					ghostCtx.closePath();
					ghostCtx.fill();
				}

				startPoint = { x: x, y: y };
				RenderHelper.drawMarkers(markers);
			}
		}

		ctx.restore();
		if (isCanvasSupported)
			this._eventManager.ghostCtx.restore();
	}

	Chart.prototype.renderSplineArea = function (plotUnit) {
		var ctx = this.plotArea.ctx;
		var totalDataSeries = plotUnit.dataSeriesIndexes.length;

		if (totalDataSeries <= 0)
			return;

		var ghostCtx = this._eventManager.ghostCtx;

		var axisXProps = plotUnit.axisX.lineCoordinates;
		var axisYProps = plotUnit.axisY.lineCoordinates;
		var markers = [];

		var plotArea = this.plotArea;
		ctx.save();

		if (isCanvasSupported)
			ghostCtx.save();

		ctx.beginPath();
		ctx.rect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);
		ctx.clip();

		if (isCanvasSupported) {
			ghostCtx.beginPath();
			ghostCtx.rect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);
			ghostCtx.clip();
		}

		for (var j = 0; j < plotUnit.dataSeriesIndexes.length; j++) {

			var dataSeriesIndex = plotUnit.dataSeriesIndexes[j];

			var dataSeries = this.data[dataSeriesIndex];

			var dataPoints = dataSeries.dataPoints;

			var seriesId = dataSeries.id;
			this._eventManager.objectMap[seriesId] = { objectType: "dataSeries", dataSeriesIndex: dataSeriesIndex };

			var hexColor = intToHexColorString(seriesId);
			ghostCtx.fillStyle = hexColor;
			//ghostCtx.lineWidth = dataSeries.lineThickness;
			//ghostCtx.lineWidth = 20;

			markers = [];

			var isFirstDataPointInPlotArea = true;
			var i = 0, x, y;
			var dataPointX; //Used so that when dataPoint.x is a DateTime value, it doesn't get converted to number back and forth.

			var yZeroToPixel = (plotUnit.axisY.convertionParameters.reference + plotUnit.axisY.convertionParameters.pixelPerUnit * (0 - plotUnit.axisY.convertionParameters.minimum) + .5) << 0;
			var baseY;

			var startPoint = null;

			var pixels = [];

			if (dataPoints.length > 0) {
				//ctx.strokeStyle = "#4572A7 ";                
				color = dataSeries._colorSet[i % dataSeries._colorSet.length];
				//ctx.strokeStyle = "red";
				ctx.fillStyle = color;

				for (; i < dataPoints.length; i++) {

					dataPointX = dataPoints[i].x.getTime ? dataPoints[i].x.getTime() : dataPoints[i].x;

					if (dataPointX < plotUnit.axisX.dataInfo.viewPortMin || dataPointX > plotUnit.axisX.dataInfo.viewPortMax) {
						continue;
					}

					x = (plotUnit.axisX.convertionParameters.reference + plotUnit.axisX.convertionParameters.pixelPerUnit * (dataPointX - plotUnit.axisX.convertionParameters.minimum) + .5) << 0;
					y = (plotUnit.axisY.convertionParameters.reference + plotUnit.axisY.convertionParameters.pixelPerUnit * (dataPoints[i].y - plotUnit.axisY.convertionParameters.minimum) + .5) << 0;

					if (typeof (dataPoints[i].y) !== "number")
						continue;

					//if (isFirstDataPointInPlotArea) {
					//    ctx.beginPath();
					//    ctx.moveTo(x, y);
					//    startPoint = { x: x, y: y };

					//    ghostCtx.beginPath();
					//    ghostCtx.moveTo(x, y);

					//    isFirstDataPointInPlotArea = false;
					//}
					//else {

					//    ctx.lineTo(x, y);
					//    ghostCtx.lineTo(x, y);

					//    if (i % 250 == 0) {

					//        if (plotUnit.axisY.minimum <= 0 && plotUnit.axisY.maximum >= 0) {
					//            baseY = yZeroToPixel;
					//        }
					//        else if (plotUnit.axisY.maximum < 0)
					//            baseY = axisYProps.y1;
					//        else if (plotUnit.axisY.minimum > 0)
					//            baseY = axisXProps.y2;

					//        ctx.lineTo(x, baseY);
					//        ctx.lineTo(startPoint.x, baseY);
					//        ctx.closePath();
					//        ctx.fill();
					//        ctx.beginPath();
					//        ctx.moveTo(x, y);


					//        ghostCtx.lineTo(x, baseY);
					//        ghostCtx.lineTo(startPoint.x, baseY);
					//        ghostCtx.closePath();
					//        ghostCtx.fill();
					//        ghostCtx.beginPath();
					//        ghostCtx.moveTo(x, y);

					//        startPoint = { x: x, y: y };
					//    }
					//}


					var id = dataSeries.dataPointIds[i];
					this._eventManager.objectMap[id] = { objectType: "dataPoint", dataSeriesIndex: dataSeriesIndex, dataPointIndex: i, x1: x, y1: y };

					pixels[pixels.length] = { x: x, y: y };

					//Render Marker
					if (dataPoints[i].markerSize !== 0) {
						if (dataPoints[i].markerSize > 0 || dataSeries.markerSize > 0) {
							var markerProps = dataSeries.getMarkerProperties(i, x, y, ctx);
							markers.push(markerProps);

							if (!dataSeries.maxWidthInX || markerProps.size > dataSeries.maxWidthInX) {
								dataSeries.maxWidthInX = markerProps.size / (plotUnit.axisX.convertionParameters.pixelPerUnit > 1 ? plotUnit.axisX.convertionParameters.pixelPerUnit - 1 : plotUnit.axisX.convertionParameters.pixelPerUnit);
							}

							markerColor = intToHexColorString(id);

							if (isCanvasSupported) {
								markers.push({
									x: x, y: y, ctx: ghostCtx,
									type: markerProps.type,
									size: markerProps.size,
									color: markerColor,
									borderColor: markerColor,
									borderThickness: markerProps.borderThickness
								});
							}
						}
					}


					//Render Index Labels
					if (dataPoints[i].indexLabel || dataSeries.indexLabel) {

						this._indexLabels.push({
							chartType: "splineArea",
							dataPoint: dataPoints[i],
							dataSeries: dataSeries,
							point: { x: x, y: y },
							color: color
						});

					}
				}

				var bp = getBezierPoints(pixels, 2);

				if (bp.length > 0) {
					ctx.beginPath();
					ctx.moveTo(bp[0].x, bp[0].y);

					if (isCanvasSupported) {
						ghostCtx.beginPath();
						ghostCtx.moveTo(bp[0].x, bp[0].y);
					}


					for (var i = 0; i < bp.length - 3; i += 3) {

						ctx.bezierCurveTo(bp[i + 1].x, bp[i + 1].y, bp[i + 2].x, bp[i + 2].y, bp[i + 3].x, bp[i + 3].y);

						if (isCanvasSupported)
							ghostCtx.bezierCurveTo(bp[i + 1].x, bp[i + 1].y, bp[i + 2].x, bp[i + 2].y, bp[i + 3].x, bp[i + 3].y);

					}

					if (plotUnit.axisY.minimum <= 0 && plotUnit.axisY.maximum >= 0) {
						baseY = yZeroToPixel;
					}
					else if (plotUnit.axisY.maximum < 0)
						baseY = axisYProps.y1;
					else if (plotUnit.axisY.minimum > 0)
						baseY = axisXProps.y2;

					startPoint = { x: bp[0].x, y: bp[0].y };

					ctx.lineTo(bp[bp.length - 1].x, baseY);
					ctx.lineTo(startPoint.x, baseY);
					ctx.closePath();
					ctx.fill();

					if (isCanvasSupported) {
						ghostCtx.lineTo(bp[bp.length - 1].x, baseY);
						ghostCtx.lineTo(startPoint.x, baseY);
						ghostCtx.closePath();
						ghostCtx.fill();
					}
				}


				RenderHelper.drawMarkers(markers);
			}
		}

		ctx.restore();

		if (isCanvasSupported)
			this._eventManager.ghostCtx.restore();
	}

	Chart.prototype.renderStepArea = function (plotUnit) {
		var ctx = this.plotArea.ctx;
		var totalDataSeries = plotUnit.dataSeriesIndexes.length;

		if (totalDataSeries <= 0)
			return;

		var ghostCtx = this._eventManager.ghostCtx;

		var axisXProps = plotUnit.axisX.lineCoordinates;
		var axisYProps = plotUnit.axisY.lineCoordinates;
		var markers = [];

		var plotArea = this.plotArea;
		ctx.save();

		if (isCanvasSupported)
			ghostCtx.save();

		ctx.beginPath();
		ctx.rect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);
		ctx.clip();

		if (isCanvasSupported) {
			ghostCtx.beginPath();
			ghostCtx.rect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);
			ghostCtx.clip();
		}

		for (var j = 0; j < plotUnit.dataSeriesIndexes.length; j++) {

			var dataSeriesIndex = plotUnit.dataSeriesIndexes[j];

			var dataSeries = this.data[dataSeriesIndex];

			var dataPoints = dataSeries.dataPoints;

			var seriesId = dataSeries.id;
			this._eventManager.objectMap[seriesId] = { objectType: "dataSeries", dataSeriesIndex: dataSeriesIndex };

			var hexColor = intToHexColorString(seriesId);
			ghostCtx.fillStyle = hexColor;
			//ghostCtx.lineWidth = dataSeries.lineThickness;
			//ghostCtx.lineWidth = 20;

			markers = [];

			var isFirstDataPointInPlotArea = true;
			var i = 0, x, y;
			var dataPointX; //Used so that when dataPoint.x is a DateTime value, it doesn't get converted to number back and forth.

			var yZeroToPixel = (plotUnit.axisY.convertionParameters.reference + plotUnit.axisY.convertionParameters.pixelPerUnit * (0 - plotUnit.axisY.convertionParameters.minimum) + .5) << 0;
			var baseY;

			var startPoint = null;

			if (dataPoints.length > 0) {
				//ctx.strokeStyle = "#4572A7 ";                
				color = dataSeries._colorSet[i % dataSeries._colorSet.length];
				//ctx.strokeStyle = "red";
				ctx.fillStyle = color;

				for (; i < dataPoints.length; i++) {

					dataPointX = dataPoints[i].x.getTime ? dataPoints[i].x.getTime() : dataPoints[i].x;

					if (dataPointX < plotUnit.axisX.dataInfo.viewPortMin || dataPointX > plotUnit.axisX.dataInfo.viewPortMax) {
						continue;
					}

					var prevY = y;

					x = (plotUnit.axisX.convertionParameters.reference + plotUnit.axisX.convertionParameters.pixelPerUnit * (dataPointX - plotUnit.axisX.convertionParameters.minimum) + .5) << 0;
					y = (plotUnit.axisY.convertionParameters.reference + plotUnit.axisY.convertionParameters.pixelPerUnit * (dataPoints[i].y - plotUnit.axisY.convertionParameters.minimum) + .5) << 0;

					if (typeof (dataPoints[i].y) !== "number")
						continue;

					if (isFirstDataPointInPlotArea) {
						ctx.beginPath();
						ctx.moveTo(x, y);
						startPoint = { x: x, y: y };

						if (isCanvasSupported) {
							ghostCtx.beginPath();
							ghostCtx.moveTo(x, y);
						}

						isFirstDataPointInPlotArea = false;
					}
					else {

						ctx.lineTo(x, prevY);
						if (isCanvasSupported)
							ghostCtx.lineTo(x, prevY);

						ctx.lineTo(x, y);

						if (isCanvasSupported)
							ghostCtx.lineTo(x, y);

						if (i % 250 == 0) {

							if (plotUnit.axisY.minimum <= 0 && plotUnit.axisY.maximum >= 0) {
								baseY = yZeroToPixel;
							}
							else if (plotUnit.axisY.maximum < 0)
								baseY = axisYProps.y1;
							else if (plotUnit.axisY.minimum > 0)
								baseY = axisXProps.y2;

							ctx.lineTo(x, baseY);
							ctx.lineTo(startPoint.x, baseY);
							ctx.closePath();
							ctx.fill();
							ctx.beginPath();
							ctx.moveTo(x, y);

							if (isCanvasSupported) {
								ghostCtx.lineTo(x, baseY);
								ghostCtx.lineTo(startPoint.x, baseY);
								ghostCtx.closePath();
								ghostCtx.fill();
								ghostCtx.beginPath();
								ghostCtx.moveTo(x, y);
							}

							startPoint = { x: x, y: y };
						}
					}


					var id = dataSeries.dataPointIds[i];
					this._eventManager.objectMap[id] = { objectType: "dataPoint", dataSeriesIndex: dataSeriesIndex, dataPointIndex: i, x1: x, y1: y };

					//Render Marker
					if (dataPoints[i].markerSize !== 0) {
						if (dataPoints[i].markerSize > 0 || dataSeries.markerSize > 0) {
							var markerProps = dataSeries.getMarkerProperties(i, x, y, ctx);
							markers.push(markerProps);

							if (!dataSeries.maxWidthInX || markerProps.size > dataSeries.maxWidthInX) {
								dataSeries.maxWidthInX = markerProps.size / (plotUnit.axisX.convertionParameters.pixelPerUnit > 1 ? plotUnit.axisX.convertionParameters.pixelPerUnit - 1 : plotUnit.axisX.convertionParameters.pixelPerUnit);
							}

							markerColor = intToHexColorString(id);

							if (isCanvasSupported) {
								markers.push({
									x: x, y: y, ctx: ghostCtx,
									type: markerProps.type,
									size: markerProps.size,
									color: markerColor,
									borderColor: markerColor,
									borderThickness: markerProps.borderThickness
								});
							}
						}
					}

					if (dataPoints[i].indexLabel || dataSeries.indexLabel) {

						this._indexLabels.push({
							chartType: "stepArea",
							dataPoint: dataPoints[i],
							dataSeries: dataSeries,
							point: { x: x, y: y },
							color: color
						});

					}
				}

				if (plotUnit.axisY.minimum <= 0 && plotUnit.axisY.maximum >= 0) {
					baseY = yZeroToPixel;
				}
				else if (plotUnit.axisY.maximum < 0)
					baseY = axisYProps.y1;
				else if (plotUnit.axisY.minimum > 0)
					baseY = axisXProps.y2;

				ctx.lineTo(x, baseY);
				ctx.lineTo(startPoint.x, baseY);
				ctx.closePath();
				ctx.fill();

				if (isCanvasSupported) {
					ghostCtx.lineTo(x, baseY);
					ghostCtx.lineTo(startPoint.x, baseY);
					ghostCtx.closePath();
					ghostCtx.fill();
				}

				startPoint = { x: x, y: y };
				RenderHelper.drawMarkers(markers);
			}
		}

		ctx.restore();
		if (isCanvasSupported)
			this._eventManager.ghostCtx.restore();
	}

	Chart.prototype.renderStackedArea = function (plotUnit) {
		var ctx = this.plotArea.ctx;
		var totalDataSeries = plotUnit.dataSeriesIndexes.length;

		if (totalDataSeries <= 0)
			return;

		var color = null;
		var markers = [];

		var plotArea = this.plotArea;

		var offsetY = [];

		var allXValues = [];
		//var offsetNegativeY = [];

		var i = 0, x, y;
		var dataPointX; //Used so that when dataPoint.x is a DateTime value, it doesn't get converted to number everytime it is accessed.

		//var yZeroToPixel = (axisYProps.y2 - axisYProps.height / rangeY * Math.abs(0 - plotUnit.axisY.minimum) + .5) << 0;
		var yZeroToPixel = (plotUnit.axisY.convertionParameters.reference + plotUnit.axisY.convertionParameters.pixelPerUnit * (0 - plotUnit.axisY.convertionParameters.minimum)) << 0;

		var xMinDiff = plotUnit.axisX.dataInfo.minDiff;

		var ghostCtx = this._eventManager.ghostCtx;

		if (isCanvasSupported)
			ghostCtx.beginPath();

		ctx.save();

		if (isCanvasSupported)
			ghostCtx.save();

		ctx.beginPath();
		ctx.rect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);
		ctx.clip();

		if (isCanvasSupported) {
			ghostCtx.beginPath();
			ghostCtx.rect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);
			ghostCtx.clip();
		}

		xValuePresent = [];
		for (var j = 0; j < plotUnit.dataSeriesIndexes.length; j++) {

			var dataSeriesIndex = plotUnit.dataSeriesIndexes[j];
			var dataSeries = this.data[dataSeriesIndex];
			var dataPoints = dataSeries.dataPoints;
			var xValue;

			dataSeries.dataPointIndexes = [];

			for (i = 0; i < dataPoints.length; i++) {
				xValue = dataPoints[i].x.getTime ? dataPoints[i].x.getTime() : dataPoints[i].x;
				dataSeries.dataPointIndexes[xValue] = i;

				if (!xValuePresent[xValue]) {
					allXValues.push(xValue);
					xValuePresent[xValue] = true;
				}
			}

			allXValues.sort(compareNumbers);
		}

		for (var j = 0; j < plotUnit.dataSeriesIndexes.length; j++) {

			var dataSeriesIndex = plotUnit.dataSeriesIndexes[j];

			var dataSeries = this.data[dataSeriesIndex];
			var dataPoints = dataSeries.dataPoints;
			var isFirstDataPointInPlotArea = true;

			var currentBaseValues = [];


			var seriesId = dataSeries.id;
			this._eventManager.objectMap[seriesId] = { objectType: "dataSeries", dataSeriesIndex: dataSeriesIndex };
			var hexColor = intToHexColorString(seriesId);
			ghostCtx.fillStyle = hexColor;



			if (allXValues.length > 0) {

				color = dataSeries._colorSet[0];
				//ctx.strokeStyle = "red";
				ctx.fillStyle = color;

				for (i = 0; i < allXValues.length; i++) {

					dataPointX = allXValues[i];
					var dataPoint = null;

					if (dataSeries.dataPointIndexes[dataPointX] >= 0)
						dataPoint = dataPoints[dataSeries.dataPointIndexes[dataPointX]];
					else
						dataPoint = { x: dataPointX, y: 0 };

					if (dataPointX < plotUnit.axisX.dataInfo.viewPortMin || dataPointX > plotUnit.axisX.dataInfo.viewPortMax) {
						continue;
					}

					if (typeof (dataPoint.y) !== "number")
						continue;

					var x = (plotUnit.axisX.convertionParameters.reference + plotUnit.axisX.convertionParameters.pixelPerUnit * (dataPointX - plotUnit.axisX.convertionParameters.minimum) + .5) << 0;
					var y = (plotUnit.axisY.convertionParameters.reference + plotUnit.axisY.convertionParameters.pixelPerUnit * (dataPoint.y - plotUnit.axisY.convertionParameters.minimum) + .5) << 0;

					var offset = offsetY[dataPointX] ? offsetY[dataPointX] : 0;

					y = y - offset;
					currentBaseValues.push({ x: x, y: yZeroToPixel - offset });
					offsetY[dataPointX] = yZeroToPixel - y;

					if (isFirstDataPointInPlotArea) {
						ctx.beginPath();
						ctx.moveTo(x, y);

						if (isCanvasSupported) {
							ghostCtx.beginPath();
							ghostCtx.moveTo(x, y);
						}

						isFirstDataPointInPlotArea = false;
					}
					else {

						ctx.lineTo(x, y);

						if (isCanvasSupported)
							ghostCtx.lineTo(x, y);

						if (i % 250 == 0) {

							while (currentBaseValues.length > 0) {
								var point = currentBaseValues.pop();
								ctx.lineTo(point.x, point.y);

								if (isCanvasSupported)
									ghostCtx.lineTo(point.x, point.y);

							}

							ctx.closePath();
							ctx.fill();

							ctx.beginPath();
							ctx.moveTo(x, y);

							if (isCanvasSupported) {
								ghostCtx.closePath();
								ghostCtx.fill();

								ghostCtx.beginPath();
								ghostCtx.moveTo(x, y);
							}

							currentBaseValues.push({ x: x, y: yZeroToPixel - offset });
						}

					}

					if (dataSeries.dataPointIndexes[dataPointX] >= 0) {
						var id = dataSeries.dataPointIds[dataSeries.dataPointIndexes[dataPointX]];
						this._eventManager.objectMap[id] = { objectType: "dataPoint", dataSeriesIndex: dataSeriesIndex, dataPointIndex: dataSeries.dataPointIndexes[dataPointX], x1: x, y1: y };
					}

					//Render Marker
					if (dataSeries.dataPointIndexes[dataPointX] >= 0 && dataPoint.markerSize !== 0) {
						if (dataPoint.markerSize > 0 || dataSeries.markerSize > 0) {

							var markerProps = dataSeries.getMarkerProperties(i, x, y, ctx);
							markers.push(markerProps);

							if (!dataSeries.maxWidthInX || markerProps.size > dataSeries.maxWidthInX) {
								dataSeries.maxWidthInX = markerProps.size / (plotUnit.axisX.convertionParameters.pixelPerUnit > 1 ? plotUnit.axisX.convertionParameters.pixelPerUnit - 1 : plotUnit.axisX.convertionParameters.pixelPerUnit);
							}

							markerColor = intToHexColorString(id);

							if (isCanvasSupported) {
								markers.push({
									x: x, y: y, ctx: ghostCtx,
									type: markerProps.type,
									size: markerProps.size,
									color: markerColor,
									borderColor: markerColor,
									borderThickness: markerProps.borderThickness
								});
							}
						}
					}

					if (dataPoint.indexLabel || dataSeries.indexLabel) {

						this._indexLabels.push({
							chartType: "stackedArea",
							dataPoint: dataPoint,
							dataSeries: dataSeries,
							point: { x: x, y: y },
							color: color
						});

					}
				}

				while (currentBaseValues.length > 0) {
					var point = currentBaseValues.pop();
					ctx.lineTo(point.x, point.y);

					if (isCanvasSupported)
						ghostCtx.lineTo(point.x, point.y);
				}

				ctx.closePath();
				ctx.fill();
				ctx.beginPath();
				ctx.moveTo(x, y);

				if (isCanvasSupported) {
					ghostCtx.closePath();
					ghostCtx.fill();
					ghostCtx.beginPath();
					ghostCtx.moveTo(x, y);
				}
			}

			delete (dataSeries.dataPointIndexes);
		}

		RenderHelper.drawMarkers(markers);


		ctx.restore();

		if (isCanvasSupported)
			ghostCtx.restore();
	}

	Chart.prototype.renderStackedArea100 = function (plotUnit) {
		var ctx = this.plotArea.ctx;
		var totalDataSeries = plotUnit.dataSeriesIndexes.length;

		if (totalDataSeries <= 0)
			return;

		var color = null;

		var plotArea = this.plotArea;
		var markers = [];

		var offsetY = [];

		var allXValues = [];
		//var offsetNegativeY = [];

		var i = 0, x, y;
		var dataPointX; //Used so that when dataPoint.x is a DateTime value, it doesn't get converted to number everytime it is accessed.


		//var yZeroToPixel = (axisYProps.y2 - axisYProps.height / rangeY * Math.abs(0 - plotUnit.axisY.minimum) + .5) << 0;
		var yZeroToPixel = (plotUnit.axisY.convertionParameters.reference + plotUnit.axisY.convertionParameters.pixelPerUnit * (0 - plotUnit.axisY.convertionParameters.minimum)) << 0;

		var maxBarWidth = this.width * .15;
		var xMinDiff = plotUnit.axisX.dataInfo.minDiff;
		var barWidth = (((plotArea.width / Math.abs(plotUnit.axisX.maximum - plotUnit.axisX.minimum)) * Math.abs(xMinDiff)) * .9) << 0;

		var ghostCtx = this._eventManager.ghostCtx;

		ctx.save();

		if (isCanvasSupported)
			ghostCtx.save();


		ctx.beginPath();
		ctx.rect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);
		ctx.clip();

		if (isCanvasSupported) {
			ghostCtx.beginPath();
			ghostCtx.rect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);
			ghostCtx.clip();
		}

		xValuePresent = [];
		for (var j = 0; j < plotUnit.dataSeriesIndexes.length; j++) {

			var dataSeriesIndex = plotUnit.dataSeriesIndexes[j];
			var dataSeries = this.data[dataSeriesIndex];
			var dataPoints = dataSeries.dataPoints;
			var xValue;

			dataSeries.dataPointIndexes = [];

			for (i = 0; i < dataPoints.length; i++) {
				xValue = dataPoints[i].x.getTime ? dataPoints[i].x.getTime() : dataPoints[i].x;
				dataSeries.dataPointIndexes[xValue] = i;

				if (!xValuePresent[xValue]) {
					allXValues.push(xValue);
					xValuePresent[xValue] = true;
				}
			}

			allXValues.sort(compareNumbers);
		}

		for (var j = 0; j < plotUnit.dataSeriesIndexes.length; j++) {

			var dataSeriesIndex = plotUnit.dataSeriesIndexes[j];

			var dataSeries = this.data[dataSeriesIndex];
			var dataPoints = dataSeries.dataPoints;
			var isFirstDataPointInPlotArea = true;


			var seriesId = dataSeries.id;
			this._eventManager.objectMap[seriesId] = { objectType: "dataSeries", dataSeriesIndex: dataSeriesIndex };
			var hexColor = intToHexColorString(seriesId);
			ghostCtx.fillStyle = hexColor;

			if (dataPoints.length == 1)
				barWidth = maxBarWidth;

			if (barWidth < 1)
				barWidth = 1;
			else if (barWidth > maxBarWidth)
				barWidth = maxBarWidth;

			var currentBaseValues = [];

			if (allXValues.length > 0) {

				color = dataSeries._colorSet[i % dataSeries._colorSet.length];
				//ctx.strokeStyle = "red";
				ctx.fillStyle = color;

				var bevelEnabled = (barWidth > 5) ? false : false;

				//ctx.strokeStyle = "#4572A7 ";

				for (i = 0; i < allXValues.length; i++) {

					dataPointX = allXValues[i];
					var dataPoint = null;

					if (dataSeries.dataPointIndexes[dataPointX] >= 0)
						dataPoint = dataPoints[dataSeries.dataPointIndexes[dataPointX]];
					else
						dataPoint = { x: dataPointX, y: 0 };

					if (dataPointX < plotUnit.axisX.dataInfo.viewPortMin || dataPointX > plotUnit.axisX.dataInfo.viewPortMax) {
						continue;
					}

					if (typeof (dataPoint.y) !== "number")
						continue;

					var yPercent;
					if (plotUnit.dataPointYSums[dataPointX] !== 0)
						yPercent = dataPoint.y / plotUnit.dataPointYSums[dataPointX] * 100;
					else
						yPercent = 0;

					var x = (plotUnit.axisX.convertionParameters.reference + plotUnit.axisX.convertionParameters.pixelPerUnit * (dataPointX - plotUnit.axisX.convertionParameters.minimum) + .5) << 0;
					var y = (plotUnit.axisY.convertionParameters.reference + plotUnit.axisY.convertionParameters.pixelPerUnit * (yPercent - plotUnit.axisY.convertionParameters.minimum) + .5) << 0;

					var offset = offsetY[dataPointX] ? offsetY[dataPointX] : 0;

					y = y - offset;
					currentBaseValues.push({ x: x, y: yZeroToPixel - offset });
					offsetY[dataPointX] = yZeroToPixel - y;

					if (isFirstDataPointInPlotArea) {
						ctx.beginPath();
						ctx.moveTo(x, y);

						if (isCanvasSupported) {
							ghostCtx.beginPath();
							ghostCtx.moveTo(x, y);
						}

						isFirstDataPointInPlotArea = false;
					}
					else {

						ctx.lineTo(x, y);

						if (isCanvasSupported)
							ghostCtx.lineTo(x, y);

						if (i % 250 == 0) {

							while (currentBaseValues.length > 0) {
								var point = currentBaseValues.pop();
								ctx.lineTo(point.x, point.y);

								if (isCanvasSupported)
									ghostCtx.lineTo(point.x, point.y);
							}

							ctx.closePath();
							ctx.fill();
							ctx.beginPath();
							ctx.moveTo(x, y);

							if (isCanvasSupported) {
								ghostCtx.closePath();
								ghostCtx.fill();
								ghostCtx.beginPath();
								ghostCtx.moveTo(x, y);
							}

							currentBaseValues.push({ x: x, y: yZeroToPixel - offset });
						}
					}


					if (dataSeries.dataPointIndexes[dataPointX] >= 0) {
						var id = dataSeries.dataPointIds[dataSeries.dataPointIndexes[dataPointX]];
						this._eventManager.objectMap[id] = { objectType: "dataPoint", dataSeriesIndex: dataSeriesIndex, dataPointIndex: dataSeries.dataPointIndexes[dataPointX], x1: x, y1: y };
					}

					//Render Marker
					if (dataSeries.dataPointIndexes[dataPointX] >= 0 && dataPoint.markerSize !== 0) {
						if (dataPoint.markerSize > 0 || dataSeries.markerSize > 0) {
							var markerProps = dataSeries.getMarkerProperties(i, x, y, ctx);
							markers.push(markerProps);

							if (!dataSeries.maxWidthInX || markerProps.size > dataSeries.maxWidthInX) {
								dataSeries.maxWidthInX = markerProps.size / (plotUnit.axisX.convertionParameters.pixelPerUnit > 1 ? plotUnit.axisX.convertionParameters.pixelPerUnit - 1 : plotUnit.axisX.convertionParameters.pixelPerUnit);
							}

							markerColor = intToHexColorString(id);

							if (isCanvasSupported) {
								markers.push({
									x: x, y: y, ctx: ghostCtx,
									type: markerProps.type,
									size: markerProps.size,
									color: markerColor,
									borderColor: markerColor,
									borderThickness: markerProps.borderThickness
								});
							}
						}
					}

					if (dataPoint.indexLabel || dataSeries.indexLabel) {

						this._indexLabels.push({
							chartType: "stackedArea100",
							dataPoint: dataPoint,
							dataSeries: dataSeries,
							point: { x: x, y: y },
							color: color
						});

					}
				}

				while (currentBaseValues.length > 0) {
					var point = currentBaseValues.pop();
					ctx.lineTo(point.x, point.y);

					if (isCanvasSupported)
						ghostCtx.lineTo(point.x, point.y);
				}

				ctx.closePath();
				ctx.fill();
				ctx.beginPath();
				ctx.moveTo(x, y);

				if (isCanvasSupported) {
					ghostCtx.closePath();
					ghostCtx.fill();
					ghostCtx.beginPath();
					ghostCtx.moveTo(x, y);
				}
			}

			delete (dataSeries.dataPointIndexes);
		}

		RenderHelper.drawMarkers(markers);

		ctx.restore();

		if (isCanvasSupported)
			ghostCtx.restore();
	}

	Chart.prototype.renderBubble = function (plotUnit) {
		var ctx = this.plotArea.ctx;
		var totalDataSeries = plotUnit.dataSeriesIndexes.length;

		if (totalDataSeries <= 0)
			return;

		var color = null;

		var plotArea = this.plotArea;

		var i = 0, x, y;
		var dataPointX; //Used so that when dataPoint.x is a DateTime value, it doesn't get converted to number from dataTime everytime it is used.

		var yZeroToPixel = (plotUnit.axisY.convertionParameters.reference + plotUnit.axisY.convertionParameters.pixelPerUnit * (0 - plotUnit.axisY.convertionParameters.minimum)) << 0;

		var maxBarWidth = this.width * .15;
		var xMinDiff = plotUnit.axisX.dataInfo.minDiff;
		var barWidth = (((plotArea.width / Math.abs(plotUnit.axisX.maximum - plotUnit.axisX.minimum)) * Math.abs(xMinDiff)) / totalDataSeries * .9) << 0;


		ctx.save();

		if (isCanvasSupported)
			this._eventManager.ghostCtx.save();

		ctx.beginPath();
		ctx.rect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);
		ctx.clip();

		if (isCanvasSupported) {
			this._eventManager.ghostCtx.rect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);
			this._eventManager.ghostCtx.clip();
		}

		var maxZ = -Infinity;
		var minZ = Infinity;

		for (var j = 0; j < plotUnit.dataSeriesIndexes.length; j++) {

			var dataSeriesIndex = plotUnit.dataSeriesIndexes[j];
			var dataSeries = this.data[dataSeriesIndex];
			var dataPoints = dataSeries.dataPoints;
			var z = 0;

			for (var i = 0; i < dataPoints.length; i++) {

				dataPointX = dataPoints[i].getTime ? dataPointX = dataPoints[i].x.getTime() : dataPointX = dataPoints[i].x;

				if (dataPointX < plotUnit.axisX.dataInfo.viewPortMin || dataPointX > plotUnit.axisX.dataInfo.viewPortMax) {
					continue;
				}

				if (typeof (dataPoints[i].z) !== "undefined") {

					z = dataPoints[i].z;

					if (z > maxZ)
						maxZ = z;

					if (z < minZ)
						minZ = z;
				}
			}
		}

		var minArea = Math.PI * 5 * 5;
		var maxArea = Math.max(Math.pow(Math.min(plotArea.height, plotArea.width) * .25 / 2, 2) * Math.PI, minArea);

		for (var j = 0; j < plotUnit.dataSeriesIndexes.length; j++) {

			var dataSeriesIndex = plotUnit.dataSeriesIndexes[j];

			var dataSeries = this.data[dataSeriesIndex];
			var dataPoints = dataSeries.dataPoints;
			var isFirstDataPointInPlotArea = true;

			if (dataPoints.length == 1)
				barWidth = maxBarWidth;

			if (barWidth < 1)
				barWidth = 1;
			else if (barWidth > maxBarWidth)
				barWidth = maxBarWidth;

			if (dataPoints.length > 0) {
				//var xy = this.getPixelCoordinatesOnPlotArea(dataPoints[0].x, dataPoints[0].y);
				//var bevelEnabled = (barWidth > 5) ? false : false;

				ctx.strokeStyle = "#4572A7 ";



				for (var i = 0; i < dataPoints.length; i++) {

					dataPointX = dataPoints[i].getTime ? dataPointX = dataPoints[i].x.getTime() : dataPointX = dataPoints[i].x;

					if (dataPointX < plotUnit.axisX.dataInfo.viewPortMin || dataPointX > plotUnit.axisX.dataInfo.viewPortMax) {
						continue;
					}

					if (typeof (dataPoints[i].y) !== "number")
						continue;

					x = (plotUnit.axisX.convertionParameters.reference + plotUnit.axisX.convertionParameters.pixelPerUnit * (dataPointX - plotUnit.axisX.convertionParameters.minimum) + .5) << 0;
					y = (plotUnit.axisY.convertionParameters.reference + plotUnit.axisY.convertionParameters.pixelPerUnit * (dataPoints[i].y - plotUnit.axisY.convertionParameters.minimum) + .5) << 0;

					var z = dataPoints[i].z;

					var area = minArea + (maxArea - minArea) / (maxZ - minZ) * (z - minZ);
					var radius = Math.max(Math.sqrt(area / Math.PI) << 0, 1);

					var markerSize = radius * 2;
					var markerProps = dataSeries.getMarkerProperties(i, ctx);
					markerProps.size = markerSize;
					//markers.push(markerProps);

					//color = dataSeries._colorSet[i % dataSeries._colorSet.length];

					//var markerType = dataSeries.markerType ? dataSeries.markerType : "circle";


					RenderHelper.drawMarker(x, y, ctx, markerProps.type, markerProps.size, markerProps.color, markerProps.borderColor, markerProps.borderThickness);
					//RenderHelper.drawMarker(x, y, ctx, "square", radius * 2, color);
					//RenderHelper.drawMarker(x, y, ctx, "triangle", radius * 2, color, "#000000", 0);
					//RenderHelper.drawMarker(x, y, ctx, "cross", radius * 2, color, "#000000", 2);

					//ctx.moveTo(x, y);
					//ctx.beginPath();
					//ctx.arc(x, y, radius, 0, 360, false);
					//ctx.fill();

					if (!dataSeries.maxWidthInX || markerProps.size > dataSeries.maxWidthInX) {
						dataSeries.maxWidthInX = markerProps.size / (plotUnit.axisX.convertionParameters.pixelPerUnit > 1 ? plotUnit.axisX.convertionParameters.pixelPerUnit - 1 : plotUnit.axisX.convertionParameters.pixelPerUnit);
					}


					var id = dataSeries.dataPointIds[i];
					this._eventManager.objectMap[id] = { objectType: "dataPoint", dataSeriesIndex: dataSeriesIndex, dataPointIndex: i, x1: x, y1: y, size: markerSize };
					var markerColor = intToHexColorString(id);
					//RenderHelper.drawMarker(x, y, this._eventManager.ghostCtx, markerType, markerSize, markerColor, markerColor, dataSeries.markerBorderThickness);
					if (isCanvasSupported)
						RenderHelper.drawMarker(x, y, this._eventManager.ghostCtx, markerProps.type, markerProps.size, markerColor, markerColor, markerProps.borderThickness);

				}
			}
		}

		ctx.restore();

		if (isCanvasSupported)
			this._eventManager.ghostCtx.restore();
	}

	Chart.prototype.renderScatter = function (plotUnit) {
		var ctx = this.plotArea.ctx;
		var totalDataSeries = plotUnit.dataSeriesIndexes.length;

		if (totalDataSeries <= 0)
			return;

		var color = null;

		var plotArea = this.plotArea;

		var i = 0, x, y;
		var dataPointX; //Used so that when dataPoint.x is a DateTime value, it doesn't get converted to number from dataTime everytime it is used.

		var yZeroToPixel = (plotUnit.axisY.convertionParameters.reference + plotUnit.axisY.convertionParameters.pixelPerUnit * (0 - plotUnit.axisY.convertionParameters.minimum)) << 0;

		var maxBarWidth = this.width * .15;
		var xMinDiff = plotUnit.axisX.dataInfo.minDiff;
		var barWidth = (((plotArea.width / Math.abs(plotUnit.axisX.maximum - plotUnit.axisX.minimum)) * Math.abs(xMinDiff)) / totalDataSeries * .9) << 0;


		ctx.save();
		if (isCanvasSupported)
			this._eventManager.ghostCtx.save();

		ctx.beginPath();
		ctx.rect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);
		ctx.clip();

		if (isCanvasSupported) {
			this._eventManager.ghostCtx.rect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);
			this._eventManager.ghostCtx.clip();
		}

		for (var j = 0; j < plotUnit.dataSeriesIndexes.length; j++) {

			var dataSeriesIndex = plotUnit.dataSeriesIndexes[j];

			var dataSeries = this.data[dataSeriesIndex];
			var dataPoints = dataSeries.dataPoints;
			var isFirstDataPointInPlotArea = true;

			if (dataPoints.length == 1)
				barWidth = maxBarWidth;

			if (barWidth < 1)
				barWidth = 1;
			else if (barWidth > maxBarWidth)
				barWidth = maxBarWidth;

			if (dataPoints.length > 0) {
				//var bevelEnabled = (barWidth > 5) ? false : false;

				ctx.strokeStyle = "#4572A7 ";

				var maxArea = Math.pow(Math.min(plotArea.height, plotArea.width) * .3 / 2, 2) * Math.PI;

				var prevDataPointX = 0;
				var prevDataPointY = 0;

				for (var i = 0; i < dataPoints.length; i++) {

					dataPointX = dataPoints[i].getTime ? dataPointX = dataPoints[i].x.getTime() : dataPointX = dataPoints[i].x;

					if (dataPointX < plotUnit.axisX.dataInfo.viewPortMin || dataPointX > plotUnit.axisX.dataInfo.viewPortMax) {
						continue;
					}

					if (typeof (dataPoints[i].y) !== "number")
						continue;

					x = (plotUnit.axisX.convertionParameters.reference + plotUnit.axisX.convertionParameters.pixelPerUnit * (dataPointX - plotUnit.axisX.convertionParameters.minimum) + .5) << 0;
					y = (plotUnit.axisY.convertionParameters.reference + plotUnit.axisY.convertionParameters.pixelPerUnit * (dataPoints[i].y - plotUnit.axisY.convertionParameters.minimum) + .5) << 0;

					var markerProps = dataSeries.getMarkerProperties(i, x, y, ctx);
					RenderHelper.drawMarker(markerProps.x, markerProps.y, markerProps.ctx, markerProps.type, markerProps.size, markerProps.color, markerProps.color, markerProps.thickness);

					//if (Math.abs(prevDataPointX - x) < markerProps.size / 2 && Math.abs(prevDataPointY - y) < markerProps.size / 2) {
					//    continue;
					//}

					if (!dataSeries.maxWidthInX || markerProps.size > dataSeries.maxWidthInX) {
						dataSeries.maxWidthInX = markerProps.size / (plotUnit.axisX.convertionParameters.pixelPerUnit > 1 ? plotUnit.axisX.convertionParameters.pixelPerUnit - 1 : plotUnit.axisX.convertionParameters.pixelPerUnit);
					}

					if (Math.sqrt((prevDataPointX - x) * (prevDataPointX - x) + (prevDataPointY - y) * (prevDataPointY - y)) < Math.min(markerProps.size, 5)) {
						continue;
					}

					//Render ID on Ghost Canvas - for event handling
					var id = dataSeries.dataPointIds[i];
					this._eventManager.objectMap[id] = { objectType: "dataPoint", dataSeriesIndex: dataSeriesIndex, dataPointIndex: i, x1: x, y1: y };
					var markerColor = intToHexColorString(id);

					if (isCanvasSupported) {
						RenderHelper.drawMarker(
								markerProps.x, markerProps.y, this._eventManager.ghostCtx,
								markerProps.type,
								markerProps.size,
								markerColor,
								markerColor,
								markerProps.borderThickness
							);
					}
					//markers.push();

					prevDataPointX = x;
					prevDataPointY = y;
				}
			}
		}

		ctx.restore();

		if (isCanvasSupported)
			this._eventManager.ghostCtx.restore();
	}

	//#region pieChart

	var drawSegment = function (ctx, center, radius, color, type, theta1, theta2) {


		ctx.save();

		if (type === "pie") {
			ctx.beginPath();
			ctx.moveTo(center.x, center.y);
			ctx.arc(center.x, center.y, radius, theta1, theta2, false);
			ctx.fillStyle = color;
			ctx.strokeStyle = "white";
			ctx.lineWidth = 2;
			//    ctx.shadowOffsetX = 2;
			//    ctx.shadowOffsetY = 1;
			//     ctx.shadowBlur = 2;
			//    ctx.shadowColor = '#BFBFBF';
			ctx.closePath();
			ctx.stroke();
			ctx.fill();
		}
		else if (type === "doughnut") {
			var widthPercentage = 0.60;
			ctx.beginPath();
			ctx.arc(center.x, center.y, radius, theta1, theta2, false);
			ctx.arc(center.x, center.y, widthPercentage * radius, theta2, theta1, true);
			ctx.closePath();
			ctx.fillStyle = color;
			ctx.strokeStyle = "white";
			ctx.lineWidth = 2;
			// shadow properties
			//     ctx.shadowOffsetX = 1;
			//    ctx.shadowOffsetY = 1;
			//     ctx.shadowBlur = 1;
			//    ctx.shadowColor = '#BFBFBF';  //grey shadow
			ctx.stroke();
			ctx.fill();
		}

		ctx.restore();
	};

	Chart.prototype.renderPie = function (plotUnit) {

		var _this = this;
		var totalDataSeries = plotUnit.dataSeriesIndexes.length;

		if (totalDataSeries <= 0)
			return;

		var dataSeriesIndex = plotUnit.dataSeriesIndexes[0];
		var dataSeries = this.data[dataSeriesIndex];
		var dataPoints = dataSeries.dataPoints;
		var indexLabelLineEdgeLength = 10;

		var plotArea = this.plotArea;

		//var maxFrame = isCanvasSupported ? 300 : 4;
		var totalRecursions = 0;
		var animationParameter = { frame: 0, maxFrames: 1 };
		var dataPointEOs = []; //dataPoint Extension Objects Behaves like a storage place for all additional data relating to dataPoints. Requred because actual dataPoints should not be modified.


		var minDistanceBetweenLabels = 2;
		var indexLabelRadiusToRadiusRatio = 1.3;
		var poleAnglularDistance = (20 / 180) * Math.PI; //Anglular Distance from 90 & 270 to be considered pole
		var precision = 6;

		var center = { x: (plotArea.x2 + plotArea.x1) / 2, y: (plotArea.y2 + plotArea.y1) / 2 };
		var outerRadius = dataSeries.indexLabelPlacement === "inside" ? (Math.min(plotArea.width, plotArea.height) * 0.95) / 2 : (Math.min(plotArea.width, plotArea.height) * 0.8) / 2;
		var innerRadius = outerRadius * .6;

		var indexLabelRadius = outerRadius * indexLabelRadiusToRadiusRatio;
		var newPieRadius = outerRadius;

		function resetAnimationFrame(maxFrames) {
			maxFrames = maxFrames || 1;

			animationParameter.frame = 0;
			animationParameter.maxFrames = maxFrames;
		}

		function initLabels() {

			if (!dataSeries || !dataPoints)
				return;

			var sum = 0;
			for (var j = 0; j < dataPoints.length; j++) {
				sum += Math.abs(dataPoints[j].y);
			}

			var noDPNearSouthPole = 0;
			var noDPNearNorthPole = 0;
			var firstDPCloseToSouth = 0;
			var firstDPCloseToNorth = 0;

			for (j = 0; j < dataPoints.length; j++) {

				var dataPoint = dataPoints[j];
				var dataPointEO = { objectType: "dataPoint", dataPointIndex: j, dataSeriesIndex: 0 };
				dataPointEOs.push(dataPointEO);
				var indexLabelText = dataPoint.indexLabel ? dataPoint.indexLabel : dataSeries.indexLabel ? dataSeries.indexLabel : dataPoint.label ? dataPoint.label : dataSeries.label ? dataSeries.label : '';

				var id = dataSeries.dataPointIds[j];

				_this._eventManager.objectMap[id] = dataPointEO;

				//dataPointEO.indexLabelText = j.toString() + " " + "kingfisher: " + dataPoint.y.toString();;
				dataPointEO.center = { x: center.x, y: center.y };
				dataPointEO.y = dataPoint.y;
				dataPointEO.radius = outerRadius;
				dataPointEO.indexLabelText = _this.replaceKeywordsWithValue(indexLabelText, dataPoint, dataSeries, j)
				dataPointEO.indexLabelPlacement = dataSeries.indexLabelPlacement;
				dataPointEO.indexLabelLineColor = dataPoint.indexLabelLineColor ? dataPoint.indexLabelLineColor : dataSeries.indexLabelLineColor ? dataSeries.indexLabelLineColor : dataPoint.color ? dataPoint.color : dataSeries._colorSet[j % dataSeries._colorSet.length];
				dataPointEO.indexLabelLineThickness = dataPoint.indexLabelLineThickness ? dataPoint.indexLabelLineThickness : dataSeries.indexLabelLineThickness;
				dataPointEO.indexLabelFontColor = dataPoint.indexLabelFontColor ? dataPoint.indexLabelFontColor : dataSeries.indexLabelFontColor;
				dataPointEO.indexLabelFontStyle = dataPoint.indexLabelFontStyle ? dataPoint.indexLabelFontStyle : dataSeries.indexLabelFontStyle;
				dataPointEO.indexLabelFontWeight = dataPoint.indexLabelFontWeight ? dataPoint.indexLabelFontWeight : dataSeries.indexLabelFontWeight;
				dataPointEO.indexLabelFontSize = dataPoint.indexLabelFontSize ? dataPoint.indexLabelFontSize : dataSeries.indexLabelFontSize;
				dataPointEO.indexLabelFontFamily = dataPoint.indexLabelFontFamily ? dataPoint.indexLabelFontFamily : dataSeries.indexLabelFontFamily;
				dataPointEO.indexLabelBackgroundColor = dataPoint.indexLabelBackgroundColor ? dataPoint.indexLabelBackgroundColor : dataSeries.indexLabelBackgroundColor ? dataSeries.indexLabelBackgroundColor : null;
				dataPointEO.indexLabelMaxWidth = dataPoint.indexLabelMaxWidth ? dataPoint.indexLabelMaxWidth : dataSeries.indexLabelMaxWidth ? dataSeries.indexLabelMaxWidth : plotArea.width * .33;
				dataPointEO.indexLabelWrap = dataPoint.indexLabelWrap ? dataPoint.indexLabelWrap : dataSeries.indexLabelWrap;

				dataPointEO.startAngle = j === 0 ? dataSeries.startAngle ? (dataSeries.startAngle / 180) * Math.PI : 0 : dataPointEOs[j - 1].endAngle;

				dataPointEO.startAngle = (dataPointEO.startAngle + (2 * Math.PI)) % (2 * Math.PI);

				dataPointEO.endAngle = dataPointEO.startAngle + ((2 * Math.PI / sum) * Math.abs(dataPoint.y));

				//var midAngle = dataPointEO.startAngle + Math.abs(dataPointEO.endAngle - dataPointEO.startAngle) / 2;
				var midAngle = (dataPointEO.endAngle + dataPointEO.startAngle) / 2;

				//var midAngle = (180 / Math.PI * midAngle);

				midAngle = (midAngle + (2 * Math.PI)) % (2 * Math.PI);

				dataPointEO.midAngle = midAngle;

				if (dataPointEO.midAngle > (Math.PI / 2) - poleAnglularDistance && dataPointEO.midAngle < (Math.PI / 2) + poleAnglularDistance) {
					if (noDPNearSouthPole === 0 || dataPointEOs[firstDPCloseToSouth].midAngle > dataPointEO.midAngle)
						firstDPCloseToSouth = j;

					noDPNearSouthPole++;
				}
				else if (dataPointEO.midAngle > (3 * Math.PI / 2) - poleAnglularDistance && dataPointEO.midAngle < (3 * Math.PI / 2) + poleAnglularDistance) {
					if (noDPNearNorthPole === 0 || dataPointEOs[firstDPCloseToNorth].midAngle > dataPointEO.midAngle)
						firstDPCloseToNorth = j;

					noDPNearNorthPole++;
				}


				if (midAngle > (Math.PI / 2) && midAngle <= (3 * Math.PI / 2))
					dataPointEO.hemisphere = "left";
				else
					dataPointEO.hemisphere = "right";

				//dataPointEO.indexLabelText = j.toString() + "; " + dataPoint.y.toString() + "; " + midAngle.toString() + "; junk";				
				dataPointEO.indexLabelTextBlock = new TextBlock(_this.plotArea.ctx, {
					fontSize: dataPointEO.indexLabelFontSize, fontFamily: dataPointEO.indexLabelFontFamily, fontColor: dataPointEO.indexLabelFontColor,
					fontStyle: dataPointEO.indexLabelFontStyle, fontWeight: dataPointEO.indexLabelFontWeight,
					horizontalAlign: "left",
					backgroundColor: dataPointEO.indexLabelBackgroundColor,
					maxWidth: dataPointEO.indexLabelMaxWidth, maxHeight: dataPointEO.indexLabelWrap ? dataPointEO.indexLabelFontSize * 5 : dataPointEO.indexLabelFontSize * 1.5,
					text: dataPointEO.indexLabelText,
					padding: 0,
					textBaseline: dataPointEO.indexLabelBackgroundColor ? "middle" : "top"
				});

				dataPointEO.indexLabelTextBlock.measureText();

				//dataPoint.labelWidth = ctx.measureText(j.toString() + "; " + dataPoint.label).width;

				//console.log(dataPoint.label);
			}

			var noOfDPToRightOfSouthPole = 0;
			var noOfDPToLeftOfNorthPole = 0;
			var keepSameDirection = false; // once a dataPoint's hemisphere is changed, others should follow the same so that there are no labes near pole pointing in opposite direction.

			for (j = 0; j < dataPoints.length; j++) {

				var dataPointEO = dataPointEOs[(firstDPCloseToSouth + j) % dataPoints.length];

				if (noDPNearSouthPole > 1 && dataPointEO.midAngle > (Math.PI / 2) - poleAnglularDistance && dataPointEO.midAngle < (Math.PI / 2) + poleAnglularDistance) {

					if (noOfDPToRightOfSouthPole <= noDPNearSouthPole / 2 && !keepSameDirection) {
						dataPointEO.hemisphere = "right";
						noOfDPToRightOfSouthPole++;
					}
					else {
						dataPointEO.hemisphere = "left";
						keepSameDirection = true;
					}
				}
			}

			keepSameDirection = false;
			for (j = 0; j < dataPoints.length; j++) {

				var dataPointEO = dataPointEOs[(firstDPCloseToNorth + j) % dataPoints.length];

				//if (dataPoint.hemisphere = "right")
				//	break;

				if (noDPNearNorthPole > 1 && dataPointEO.midAngle > (3 * Math.PI / 2) - poleAnglularDistance && dataPointEO.midAngle < (3 * Math.PI / 2) + poleAnglularDistance) {

					if (noOfDPToLeftOfNorthPole <= noDPNearNorthPole / 2 && !keepSameDirection) {
						dataPointEO.hemisphere = "left";
						noOfDPToLeftOfNorthPole++;
					}
					else {
						dataPointEO.hemisphere = "right";
						keepSameDirection = true;
					}
				}
			}
		}//End of initLabels()

		function renderLabels() {

			var ctx = _this.plotArea.ctx;
			ctx.fillStyle = "black";
			ctx.strokeStyle = "grey";
			var fontSize = 16;
			//ctx.font = fontSize + "px Arial";
			ctx.textBaseline = "middle";
			ctx.lineJoin = "round";
			var i = 0, j = 0;

			for (i = 0; i < dataPoints.length; i++) {
				var dataPointEO = dataPointEOs[i];

				if (!dataPointEO.indexLabelText)
					continue;

				dataPointEO.indexLabelTextBlock.y -= dataPointEO.indexLabelTextBlock.height / 2;

				var xOffset = 0;

				if (dataPointEO.hemisphere === "left") {
					var xOffset = dataSeries.indexLabelPlacement === "outside" ? -(dataPointEO.indexLabelTextBlock.width + indexLabelLineEdgeLength) : -dataPointEO.indexLabelTextBlock.width / 2;
				}
				else {
					var xOffset = dataSeries.indexLabelPlacement === "outside" ? indexLabelLineEdgeLength : -dataPointEO.indexLabelTextBlock.width / 2;
				}

				dataPointEO.indexLabelTextBlock.x += xOffset;
				dataPointEO.indexLabelTextBlock.render(true);
				dataPointEO.indexLabelTextBlock.x -= xOffset;

				//if (i < 4)
				//	customPrompt(i + "; " + center.y + "; " + dataPointEO.indexLabelTextBlock.y.toFixed(2));

				dataPointEO.indexLabelTextBlock.y += dataPointEO.indexLabelTextBlock.height / 2;

				if (dataPointEO.indexLabelPlacement === "outside") {
					var indexLabelLineStartX = dataPointEO.center.x + outerRadius * Math.cos(dataPointEO.midAngle);
					var indexLabelLineStartY = dataPointEO.center.y + outerRadius * Math.sin(dataPointEO.midAngle);

					//ctx.strokeStyle = dataPoints[i].color ? dataPoints[i].color : dataSeries._colorSet[i % dataSeries._colorSet.length];
					ctx.strokeStyle = dataPointEO.indexLabelLineColor;
					ctx.lineWidth = dataPointEO.indexLabelLineThickness;
					//ctx.lineWidth = 4;
					ctx.beginPath();
					ctx.moveTo(indexLabelLineStartX, indexLabelLineStartY);
					ctx.lineTo(dataPointEO.indexLabelTextBlock.x, dataPointEO.indexLabelTextBlock.y);
					ctx.lineTo(dataPointEO.indexLabelTextBlock.x + (dataPointEO.hemisphere === "left" ? -indexLabelLineEdgeLength : indexLabelLineEdgeLength), dataPointEO.indexLabelTextBlock.y);
					ctx.stroke();
					//ctx.closePath();
					//window.alert("contine??");
					//animate();
				}

				ctx.lineJoin = "miter";
			}
		}

		function animate() {

			var ctx = _this.plotArea.ctx;

			if (animationParameter !== null && animationParameter.frame < animationParameter.maxFrames) {
				if (animationParameter.frame === 0)
					animationParameter.prevMaxAngle = dataPointEOs[0].startAngle;

				ctx.clearRect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);

				var maxAngle = animationParameter.prevMaxAngle + (2 * Math.PI / animationParameter.maxFrames);

				for (var i = 0; i < dataPoints.length; i++) {

					var startAngle = i === 0 ? dataPointEOs[i].startAngle : endAngle;
					var endAngle = startAngle + (dataPointEOs[i].endAngle - dataPointEOs[i].startAngle);

					var shouldBreak = false;

					if (endAngle > maxAngle) {
						endAngle = maxAngle;
						shouldBreak = true;
					}

					var color = dataPoints[i].color ? dataPoints[i].color : dataSeries._colorSet[i % dataSeries._colorSet.length];

					if (endAngle > startAngle)
						drawSegment(_this.plotArea.ctx, dataPointEOs[i].center, dataPointEOs[i].radius, color, dataSeries.type, startAngle, endAngle);

					if (shouldBreak)
						break;
				}

				animationParameter.frame++;
				animationParameter.prevMaxAngle = maxAngle;

				if (animationParameter.frame < animationParameter.maxFrames) {
					_this.requestAnimFrame.call(window, animate);
				} else {
					//renderLabels();
					resetAnimationFrame(isCanvasSupported ? 15 : 4);
					explodeToggle();
				}

				//console.log(animationParameter.frame);

			}
		}

		function explodeToggle() {

			var ctx = _this.plotArea.ctx;
			var prevEndAngle = 0;

			if (animationParameter !== null && animationParameter.frame < animationParameter.maxFrames) {

				ctx.clearRect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);

				//var maxAngle = animationParameter.prevMaxAngle + (2 * Math.PI / animationParameter.maxFrames);

				for (var i = 0; i < dataPoints.length; i++) {

					var startAngle = dataPointEOs[i].startAngle;
					var endAngle = dataPointEOs[i].endAngle;

					if (endAngle > startAngle) {


						var offsetX = (outerRadius * .07 * Math.cos(dataPointEOs[i].midAngle));
						var offsetY = (outerRadius * .07 * Math.sin(dataPointEOs[i].midAngle));
						var isInTransition = false;

						if (dataPoints[i].exploded) {
							if (Math.abs(dataPointEOs[i].center.x - (center.x + offsetX)) > Math.abs(.5 * offsetX / animationParameter.maxFrames) || Math.abs(dataPointEOs[i].center.y - (center.y + offsetY)) > Math.abs(.5 * offsetY / animationParameter.maxFrames)) {
								dataPointEOs[i].center.x += (offsetX / animationParameter.maxFrames);
								dataPointEOs[i].center.y += (offsetY / animationParameter.maxFrames);

								isInTransition = true;
							}
						} else if (Math.abs(dataPointEOs[i].center.x - center.x) >= Math.abs(.5 * offsetX / animationParameter.maxFrames) || Math.abs(dataPointEOs[i].center.y - center.y) >= Math.abs(.5 * offsetY / animationParameter.maxFrames)) {
							dataPointEOs[i].center.x -= (offsetX / animationParameter.maxFrames);
							dataPointEOs[i].center.y -= (offsetY / animationParameter.maxFrames);
							isInTransition = true;
						}

						if (isInTransition) {
							var entry = {};
							entry.dataSeries = dataSeries;
							entry.dataPoint = dataSeries.dataPoints[i];
							entry.index = i;
							_this._toolTip.highlightObjects([entry]);
						}

						var color = dataPoints[i].color ? dataPoints[i].color : dataSeries._colorSet[i % dataSeries._colorSet.length];

						drawSegment(_this.plotArea.ctx, dataPointEOs[i].center, dataPointEOs[i].radius, color, dataSeries.type, startAngle, endAngle);
					}
				}

				animationParameter.frame++;

				//window.alert("next??");
				renderLabels();

				//ctx.lineWidth = 4;

				if (animationParameter.frame < animationParameter.maxFrames) {
					_this.requestAnimFrame.call(window, explodeToggle);
				}


				//console.log(animationParameter.frame);

			}
		}

		function getVerticalDistanceBetweenLabels(first, second) {

			var distance = 0;
			var label1 = { y: first.indexLabelTextBlock.y, y1: first.indexLabelTextBlock.y - first.indexLabelTextBlock.height / 2, y2: first.indexLabelTextBlock.y + first.indexLabelTextBlock.height / 2 };
			var label2 = { y: second.indexLabelTextBlock.y, y1: second.indexLabelTextBlock.y - second.indexLabelTextBlock.height / 2, y2: second.indexLabelTextBlock.y + second.indexLabelTextBlock.height / 2 };

			if (label2.y > label1.y) {
				distance = label2.y1 - label1.y2;
			}
			else {
				distance = label1.y1 - label2.y2;
			}

			return distance;
		}

		function getNextLabelIndex(currentLabelIndex) {
			var nextLabelIndex = null;

			for (var i = 1; i < dataPoints.length; i++) {

				nextLabelIndex = (currentLabelIndex + i + dataPointEOs.length) % dataPointEOs.length;

				if (dataPointEOs[nextLabelIndex].hemisphere !== dataPointEOs[currentLabelIndex].hemisphere) {
					nextLabelIndex = null;
					break;
				}
				else if ((dataPointEOs[nextLabelIndex].indexLabelText) && (nextLabelIndex !== currentLabelIndex)
					&& ((getVerticalDistanceBetweenLabels(dataPointEOs[nextLabelIndex], dataPointEOs[currentLabelIndex]) < 0) || (dataPointEOs[currentLabelIndex].hemisphere === "right" ? dataPointEOs[nextLabelIndex].indexLabelTextBlock.y >= dataPointEOs[currentLabelIndex].indexLabelTextBlock.y : dataPointEOs[nextLabelIndex].indexLabelTextBlock.y <= dataPointEOs[currentLabelIndex].indexLabelTextBlock.y)))
					break;
				else {
					nextLabelIndex = null;
				}
			}

			return nextLabelIndex;
		}

		function getPreviousLabelIndex(currentLabelIndex) {
			var prevLabelIndex = null;

			for (var i = 1; i < dataPoints.length; i++) {

				prevLabelIndex = (currentLabelIndex - i + dataPointEOs.length) % dataPointEOs.length;

				if (dataPointEOs[prevLabelIndex].hemisphere !== dataPointEOs[currentLabelIndex].hemisphere) {
					prevLabelIndex = null;
					break;
				}
				else if ((dataPointEOs[prevLabelIndex].indexLabelText) && (dataPointEOs[prevLabelIndex].hemisphere === dataPointEOs[currentLabelIndex].hemisphere) && (prevLabelIndex !== currentLabelIndex)
					&& ((getVerticalDistanceBetweenLabels(dataPointEOs[prevLabelIndex], dataPointEOs[currentLabelIndex]) < 0) || (dataPointEOs[currentLabelIndex].hemisphere === "right" ? dataPointEOs[prevLabelIndex].indexLabelTextBlock.y <= dataPointEOs[currentLabelIndex].indexLabelTextBlock.y : dataPointEOs[prevLabelIndex].indexLabelTextBlock.y >= dataPointEOs[currentLabelIndex].indexLabelTextBlock.y)))
					break;
				else {
					prevLabelIndex = null;
				}

			}

			return prevLabelIndex;
		}

		function rePositionLabels(dataPointIndex, offset) {

			offset = offset || 0;

			var actualOffset = 0;

			//var labelYMin = 2;
			//var labelYMax = ctx.canvas.height - 2;
			//var labelYMin = _this.plotArea.ctx.canvas.height / 2 - indexLabelRadius * 1;
			//var labelYMax = _this.plotArea.ctx.canvas.height / 2 + indexLabelRadius * 1;

			var labelYMin = center.y - indexLabelRadius * 1;
			var labelYMax = center.y + indexLabelRadius * 1;

			//console.log(totalRecursions);

			if (dataPointIndex >= 0 && dataPointIndex < dataPoints.length) {

				var dataPointEO = dataPointEOs[dataPointIndex];

				//if (dataPointIndex === 0)
				//	customPrompt(labelYMin.toFixed(2) + "; " + labelYMax.toFixed(2) + "; " + dataPointEO.indexLabelTextBlock.y.toFixed(2));

				// If label is already outside the bounds, return
				if ((offset < 0 && dataPointEO.indexLabelTextBlock.y < labelYMin) || (offset > 0 && dataPointEO.indexLabelTextBlock.y > labelYMax))
					return 0;


				var validOffset = offset;


				//Check if the offset falls within the bounds (labelYMin, labelYMax, tangential bounds) without considering overlap. Else use the closest offset that is possible - validOffset.
				{
					var distFromIndexLineStart = 0;
					var indexLabelLineStartX = 0;
					var indexLabelLineStartY = 0;
					var indexLabelAngle = 0;
					var indexLabelAngleWhenTangent = 0;

					if (validOffset < 0) {
						if (dataPointEO.indexLabelTextBlock.y - dataPointEO.indexLabelTextBlock.height / 2 > labelYMin && dataPointEO.indexLabelTextBlock.y - dataPointEO.indexLabelTextBlock.height / 2 + validOffset < labelYMin)
							validOffset = -(labelYMin - (dataPointEO.indexLabelTextBlock.y - dataPointEO.indexLabelTextBlock.height / 2 + validOffset));
					} else {
						if (dataPointEO.indexLabelTextBlock.y + dataPointEO.indexLabelTextBlock.height / 2 < labelYMin && dataPointEO.indexLabelTextBlock.y + dataPointEO.indexLabelTextBlock.height / 2 + validOffset > labelYMax)
							validOffset = (dataPointEO.indexLabelTextBlock.y + dataPointEO.indexLabelTextBlock.height / 2 + validOffset) - labelYMax;
					}

					var newlabelY = dataPointEO.indexLabelTextBlock.y + validOffset;
					var newlabelX = 0;

					if (dataPointEO.hemisphere === "right") {
						newlabelX = center.x + Math.sqrt(Math.pow(indexLabelRadius, 2) - Math.pow(newlabelY - center.y, 2));
					}
					else
						newlabelX = center.x - Math.sqrt(Math.pow(indexLabelRadius, 2) - Math.pow(newlabelY - center.y, 2));


					indexLabelLineStartX = center.x + outerRadius * Math.cos(dataPointEO.midAngle);
					indexLabelLineStartY = center.y + outerRadius * Math.sin(dataPointEO.midAngle);

					distFromIndexLineStart = Math.sqrt(Math.pow(newlabelX - indexLabelLineStartX, 2) + Math.pow(newlabelY - indexLabelLineStartY, 2));

					indexLabelAngleWhenTangent = Math.acos(outerRadius / indexLabelRadius);

					//indexLabelAngle = Math.acos((outerRadius * outerRadius + distFromIndexLineStart * distFromIndexLineStart - indexLabelRadius * indexLabelRadius) / (2 * outerRadius * distFromIndexLineStart));
					indexLabelAngle = Math.acos((indexLabelRadius * indexLabelRadius + outerRadius * outerRadius - distFromIndexLineStart * distFromIndexLineStart) / (2 * outerRadius * indexLabelRadius));

					if (indexLabelAngle < indexLabelAngleWhenTangent) {
						validOffset = newlabelY - dataPointEO.indexLabelTextBlock.y;
						//dataPointEO.indexLabelTextBlock.x = newlabelX;
					}
					else {

						validOffset = 0;

						//dataPointEO.indexLabelTextBlock.x = newlabelX;

						//Index Line is overlapping the pie. So lets find out the point where indexline becomes a tangent.

						//distFromIndexLineStart = Math.sqrt(indexLabelRadius * indexLabelRadius - outerRadius * outerRadius);
						////distFromIndexLineStart *= offset < 0 ? -1 : 1;
						////indexLabelAngle = Math.acos((indexLabelRadius * indexLabelRadius + outerRadius * outerRadius - distFromIndexLineStart * distFromIndexLineStart) / (2 * outerRadius * indexLabelRadius));
						//indexLabelAngle = Math.atan2(distFromIndexLineStart, outerRadius);

						//newlabelX = center.x + indexLabelRadius * Math.cos(indexLabelAngle);
						//newlabelY = center.y + indexLabelRadius * Math.sin(indexLabelAngle);

						//actualOffset = newlabelY - dataPointEO.indexLabelTextBlock.y;

						//dataPointEO.indexLabelTextBlock.y = newlabelY;
						//dataPointEO.indexLabelTextBlock.x = newlabelX;

					}
				}

				//var tempIndex = (dataPointIndex + dataPointEOs.length - 1) % dataPointEOs.length;

				//var prevDataPointIndex = dataPointEOs[tempIndex].hemisphere === dataPointEO.hemisphere ? tempIndex : null;

				var prevDataPointIndex = getPreviousLabelIndex(dataPointIndex);

				//tempIndex = (dataPointIndex + dataPointEOs.length + 1) % dataPointEOs.length;

				//var nextDataPointIndex = dataPointEOs[tempIndex].hemisphere === dataPointEO.hemisphere ? tempIndex : null;

				var nextDataPointIndex = getNextLabelIndex(dataPointIndex);

				var otherdataPointEO, otherDataPointIndex, distanceFromOtherLabel;
				var otherDataPointOffset = 0;
				var otherDataPointActualOffset = 0;


				if (validOffset < 0) {

					otherDataPointIndex = dataPointEO.hemisphere === "right" ? prevDataPointIndex : nextDataPointIndex;

					actualOffset = validOffset;

					if (otherDataPointIndex !== null) {

						//if (dataPointIndex < 4)
						//	customPrompt("valid: " + validOffset);

						var tempOffset = -validOffset;

						var distanceFromOtherLabel = (dataPointEO.indexLabelTextBlock.y - dataPointEO.indexLabelTextBlock.height / 2) - (dataPointEOs[otherDataPointIndex].indexLabelTextBlock.y + dataPointEOs[otherDataPointIndex].indexLabelTextBlock.height / 2);

						if (distanceFromOtherLabel - tempOffset < minDistanceBetweenLabels) {
							otherDataPointOffset = -tempOffset;
							totalRecursions++;
							otherDataPointActualOffset = rePositionLabels(otherDataPointIndex, otherDataPointOffset);

							//if (dataPointIndex < 4)
							//	customPrompt(dataPointIndex + "; " + "offset: " + otherDataPointOffset);


							if (+otherDataPointActualOffset.toFixed(precision) > +otherDataPointOffset.toFixed(precision)) {

								if (distanceFromOtherLabel > minDistanceBetweenLabels)
									actualOffset = -(distanceFromOtherLabel - minDistanceBetweenLabels);
									//else
									//	actualOffset = 0;
								else
									actualOffset = -(tempOffset - (otherDataPointActualOffset - otherDataPointOffset));
							}

							//if (dataPointIndex < 4)
							//	customPrompt("actual: " + actualOffset);
						}

					}

				} else if (validOffset > 0) {

					otherDataPointIndex = dataPointEO.hemisphere === "right" ? nextDataPointIndex : prevDataPointIndex;

					actualOffset = validOffset;

					if (otherDataPointIndex !== null) {

						var tempOffset = validOffset;

						var distanceFromOtherLabel = (dataPointEOs[otherDataPointIndex].indexLabelTextBlock.y - dataPointEOs[otherDataPointIndex].indexLabelTextBlock.height / 2) - (dataPointEO.indexLabelTextBlock.y + dataPointEO.indexLabelTextBlock.height / 2);

						if (distanceFromOtherLabel - tempOffset < minDistanceBetweenLabels) {
							otherDataPointOffset = tempOffset;
							totalRecursions++;
							otherDataPointActualOffset = rePositionLabels(otherDataPointIndex, otherDataPointOffset);

							if (+otherDataPointActualOffset.toFixed(precision) < +otherDataPointOffset.toFixed(precision)) {

								if (distanceFromOtherLabel > minDistanceBetweenLabels)
									actualOffset = distanceFromOtherLabel - minDistanceBetweenLabels;
									//else
									//	actualOffset = 0;
								else
									actualOffset = tempOffset - (otherDataPointOffset - otherDataPointActualOffset);
							}
						}

					}

					//if (!(dataPointEO.indexLabelTextBlock.y + dataPointEO.indexLabelTextBlock.height / 2 + actualOffset < labelYMax)) {
					//	if (dataPointEO.indexLabelTextBlock.y + dataPointEO.indexLabelTextBlock.height / 2 < labelYMax) {
					//		actualOffset = labelYMax - (dataPointEO.indexLabelTextBlock.y + dataPointEO.indexLabelTextBlock.height / 2);
					//	}
					//	else {
					//		actualOffset = 0;
					//	}
					//}

				}

				if (actualOffset) {

					var newLabelY = dataPointEO.indexLabelTextBlock.y + actualOffset;




					var newLabelX = 0;

					if (dataPointEO.hemisphere === "right") {
						newLabelX = center.x + Math.sqrt(Math.pow(indexLabelRadius, 2) - Math.pow(newLabelY - center.y, 2));
					}
					else
						newLabelX = center.x - Math.sqrt(Math.pow(indexLabelRadius, 2) - Math.pow(newLabelY - center.y, 2));

					if (dataPointEO.midAngle > (Math.PI / 2) - poleAnglularDistance && dataPointEO.midAngle < (Math.PI / 2) + poleAnglularDistance) {

						var prevDPIndex = (dataPointIndex - 1 + dataPointEOs.length) % dataPointEOs.length;
						var prevDP = dataPointEOs[prevDPIndex];
						var nextDP = dataPointEOs[(dataPointIndex + 1 + dataPointEOs.length) % dataPointEOs.length];

						if (dataPointEO.hemisphere === "left" && prevDP.hemisphere === "right" && newLabelX > prevDP.indexLabelTextBlock.x) {
							newLabelX = prevDP.indexLabelTextBlock.x - 15;
						} else if (dataPointEO.hemisphere === "right" && nextDP.hemisphere === "left" && newLabelX < nextDP.indexLabelTextBlock.x) {
							newLabelX = nextDP.indexLabelTextBlock.x + 15;
						}
					} else if (dataPointEO.midAngle > (3 * Math.PI / 2) - poleAnglularDistance && dataPointEO.midAngle < (3 * Math.PI / 2) + poleAnglularDistance) {

						var prevDPIndex = (dataPointIndex - 1 + dataPointEOs.length) % dataPointEOs.length;
						var prevDP = dataPointEOs[prevDPIndex];
						var nextDP = dataPointEOs[(dataPointIndex + 1 + dataPointEOs.length) % dataPointEOs.length];

						if (dataPointEO.hemisphere === "right" && prevDP.hemisphere === "left" && newLabelX < prevDP.indexLabelTextBlock.x) {
							newLabelX = prevDP.indexLabelTextBlock.x + 15;
						} else if (dataPointEO.hemisphere === "left" && nextDP.hemisphere === "right" && newLabelX > nextDP.indexLabelTextBlock.x) {
							newLabelX = nextDP.indexLabelTextBlock.x - 15;
						}
					}

					//if (actualOffset < 0 && dataPointIndex < 4)
					//	customPrompt(actualOffset.toFixed(2) + "; " + dataPointEO.indexLabelTextBlock.y.toFixed(2) + "; " + newLabelY.toFixed(2));

					dataPointEO.indexLabelTextBlock.y = newLabelY;

					dataPointEO.indexLabelTextBlock.x = newLabelX;

					dataPointEO.indexLabelAngle = Math.atan2((dataPointEO.indexLabelTextBlock.y - center.y), (dataPointEO.indexLabelTextBlock.x - center.x));

				}


			}

			return actualOffset;
		}


		function positionLabels() {
			var ctx = _this.plotArea.ctx;

			ctx.fillStyle = "grey";
			ctx.strokeStyle = "grey";
			var fontSize = 16;
			ctx.font = fontSize + "px Arial";
			ctx.textBaseline = "middle";
			var i = 0, j = 0;
			var deltaR = 0;

			for (j = 0; j < 10 && (j < 1 || deltaR > 0) ; j++) {

				//console.log(j);
				outerRadius -= deltaR;
				//indexLabelRadius -= deltaR + deltaR;

				deltaR = 0;

				if (dataSeries.indexLabelPlacement === "outside") {

					indexLabelRadius = outerRadius * indexLabelRadiusToRadiusRatio;

					for (i = 0; i < dataPoints.length; i++) {
						var dataPointEO = dataPointEOs[i];

						dataPointEO.indexLabelTextBlock.x = center.x + indexLabelRadius * Math.cos(dataPointEO.midAngle);
						dataPointEO.indexLabelTextBlock.y = center.y + indexLabelRadius * Math.sin(dataPointEO.midAngle);

						dataPointEO.indexLabelAngle = dataPointEO.midAngle;
						dataPointEO.radius = outerRadius;
						//dataPointEO.indexLabelFontSize = dataPoint.indexLabelFontSize ? dataPoint.indexLabelFontSize : dataSeries.indexLabelFontSize;
					}

					var currentDataPoint, nextDataPoint;
					for (i = 0; i < dataPoints.length; i++) {

						var dataPointEO = dataPointEOs[i];
						//dataPointEO.lab
						//resetAnimationFrame();
						//animate();
						//renderLabels();

						//var prevDataPointIndex = (i - 1 + dataPointEOs.length) % dataPointEOs.length;

						//var nextDataPointIndex = (i + 1 + dataPointEOs.length) % dataPointEOs.length;
						//nextDataPointIndex = dataPointEOs[nextDataPointIndex].hemisphere === dataPointEO.hemisphere && nextDataPointIndex !== i ? nextDataPointIndex : null;

						var nextDataPointIndex = getNextLabelIndex(i);

						if (nextDataPointIndex === null)
							continue;

						currentDataPoint = dataPointEOs[i];
						nextDataPoint = dataPointEOs[nextDataPointIndex];


						var distanceFromNextLabel = 0;

						//if (dataPointEO.hemisphere === "right")
						//	distanceFromNextLabel = (nextDataPoint.indexLabelTextBlock.y - nextDataPoint.indexLabelTextBlock.height / 2) - (currentDataPoint.indexLabelTextBlock.y + currentDataPoint.indexLabelTextBlock.height / 2) - minDistanceBetweenLabels;
						//else
						//	distanceFromNextLabel = (currentDataPoint.indexLabelTextBlock.y - currentDataPoint.indexLabelTextBlock.height / 2) - (nextDataPoint.indexLabelTextBlock.y + nextDataPoint.indexLabelTextBlock.height / 2) - minDistanceBetweenLabels;

						distanceFromNextLabel = getVerticalDistanceBetweenLabels(currentDataPoint, nextDataPoint) - minDistanceBetweenLabels;


						if (distanceFromNextLabel < 0) {

							var dataPointsAbove = 0;
							var dataPointsBelow = 0;
							//var indexLabelAngleWhenTangent = Math.acos(outerRadius / indexLabelRadius) / Math.PI * 180;


							for (var k = 0; k < dataPoints.length; k++) {

								if (k === i)
									continue;

								//if (dataPointEOs[k].hemisphere !== dataPointEO.hemisphere || Math.abs(dataPointEOs[k].midAngle - dataPointEO.midAngle) > 30)
								//	continue;
								//if (dataPointEOs[k].hemisphere !== dataPointEO.hemisphere || Math.abs(dataPointEOs[k].labelAngle - dataPointEO.indexLabelAngle) > 30)
								//	continue;
								//if (dataPointEOs[k].hemisphere !== dataPointEO.hemisphere || Math.abs(dataPointEOs[k].midAngle - dataPointEO.midAngle) > indexLabelAngleWhenTangent)
								//	continue;
								if (dataPointEOs[k].hemisphere !== dataPointEO.hemisphere)
									continue;

								if (dataPointEOs[k].indexLabelTextBlock.y < dataPointEO.indexLabelTextBlock.y)
									dataPointsAbove++;
								else
									dataPointsBelow++;
							}

							//var upWardsOffset = (distanceFromNextLabel) / dataPoints.length * (dataPointsBelow);
							var upWardsOffset = (distanceFromNextLabel) / (dataPointsAbove + dataPointsBelow || 1) * (dataPointsBelow);
							var downWardsOffset = -1 * (distanceFromNextLabel - upWardsOffset);

							var actualUpwardOffset = 0;
							var actualDownwardOffset = 0;

							if (dataPointEO.hemisphere === "right") {
								actualUpwardOffset = rePositionLabels(i, upWardsOffset);

								//if (i < 4 && actualDownwardOffset !== upWardsOffset)
								//	customPrompt(i + "; " + upWardsOffset.toFixed(2) + "; " + actualUpwardOffset.toFixed(2));


								downWardsOffset = -1 * (distanceFromNextLabel - actualUpwardOffset);

								actualDownwardOffset = rePositionLabels(nextDataPointIndex, downWardsOffset);

								//window.alert(typeof +downWardsOffset.toFixed(precision));
								//Setting precision to make sure that they don't become not equal become of minor differences - like a difference of .000001
								if (+actualDownwardOffset.toFixed(precision) < +downWardsOffset.toFixed(precision) && +actualUpwardOffset.toFixed(precision) <= +upWardsOffset.toFixed(precision))
									rePositionLabels(i, -(downWardsOffset - actualDownwardOffset));

							} else {
								actualUpwardOffset = rePositionLabels(nextDataPointIndex, upWardsOffset);

								downWardsOffset = -1 * (distanceFromNextLabel - actualUpwardOffset);

								actualDownwardOffset = rePositionLabels(i, downWardsOffset);

								//Setting precision to make sure that they don't become not equal become of minor differences - like a difference of .000001
								if (+actualDownwardOffset.toFixed(precision) < +downWardsOffset.toFixed(precision) && +actualUpwardOffset.toFixed(precision) <= +upWardsOffset.toFixed(precision))
									rePositionLabels(nextDataPointIndex, -(downWardsOffset - actualDownwardOffset));
							}
						}


						//resetAnimationFrame();
						//animate();
						//renderLabels();
						//window.alert("next??");
					}
				} else {
					for (i = 0; i < dataPoints.length; i++) {

						var dataPointEO = dataPointEOs[i];
						indexLabelRadius = dataSeries.type === "pie" ? outerRadius * .7 : outerRadius * .8;


						var dx = center.x + indexLabelRadius * (Math.cos((dataPointEO.midAngle)));
						var dy = center.y + indexLabelRadius * (Math.sin((dataPointEO.midAngle)));

						dataPointEO.indexLabelTextBlock.x = dx;
						dataPointEO.indexLabelTextBlock.y = dy;
					}
				}

				// Resize Pie based on the label length.
				for (i = 0; i < dataPoints.length; i++) {

					dataPointEO = dataPointEOs[i];

					var size = dataPointEO.indexLabelTextBlock.measureText();

					var xOverFlow = 0;
					var xdr = 0;

					if (dataPointEO.hemisphere === "right") {
						xOverFlow = plotArea.x2 - (dataPointEO.indexLabelTextBlock.x + dataPointEO.indexLabelTextBlock.width + indexLabelLineEdgeLength);
						xOverFlow *= -1;
					} else {
						xOverFlow = plotArea.x1 - (dataPointEO.indexLabelTextBlock.x - dataPointEO.indexLabelTextBlock.width - indexLabelLineEdgeLength);
					}

					if (xOverFlow > 0) {
						if (Math.abs(dataPointEO.indexLabelTextBlock.y - dataPointEO.indexLabelTextBlock.height / 2 - center.y) < outerRadius
							|| Math.abs(dataPointEO.indexLabelTextBlock.y + dataPointEO.indexLabelTextBlock.height / 2 - center.y) < outerRadius) {

							xdr = xOverFlow / Math.abs(Math.cos(dataPointEO.indexLabelAngle));

							if (xdr > 9)
								xdr = xdr * .3;

							if (xdr > deltaR)
								deltaR = xdr;

						} else {

						}
					}

					var yOverFlow = 0;
					var ydr = 0;

					if (dataPointEO.indexLabelAngle > 0 && dataPointEO.indexLabelAngle < Math.PI) {
						yOverFlow = plotArea.y2 - (dataPointEO.indexLabelTextBlock.y + dataPointEO.indexLabelTextBlock.height / 2 + 5);
						yOverFlow *= -1;
					} else {
						yOverFlow = plotArea.y1 - (dataPointEO.indexLabelTextBlock.y - dataPointEO.indexLabelTextBlock.height / 2 - 5);
					}

					if (yOverFlow > 0) {
						if (Math.abs(dataPointEO.indexLabelTextBlock.x - center.x) < outerRadius) {

							ydr = yOverFlow / Math.abs(Math.sin(dataPointEO.indexLabelAngle));

							if (ydr > 9)
								ydr = ydr * .3;

							if (ydr > deltaR)
								deltaR = ydr;

						} else {

						}
					} else {
						//if (i < 4)
						//	customPrompt(i + "; " + center.y + "; " + dataPointEO.indexLabelTextBlock.y.toFixed(2));
					}

				}

				function removeLabelsForSmallSegments(totalOverlap, startIndex, endIndex) {

					//return;

					var dpEOs = [];
					var totalRemovedLabelHeight = 0;

					for (var i = startIndex; true; i = (i + 1 + dataPoints.length) % dataPoints.length) {
						dpEOs.push(dataPointEOs[i]);

						if (i === endIndex)
							break;
					}

					dpEOs.sort(function (entry1, entry2) {
						return entry1.y - entry2.y;
					});

					for (i = 0; i < dpEOs.length; i++) {
						var dpEO = dpEOs[i];

						if (totalRemovedLabelHeight < totalOverlap) {
							totalRemovedLabelHeight += dpEO.indexLabelTextBlock.height;
							dpEO.indexLabelTextBlock.text = "";
							dpEO.indexLabelText = "";
							dpEO.indexLabelTextBlock.measureText();
						} else
							break;
					}

				}

				//resetAnimationFrame(1);
				//animate();
				//window.alert("next??");

				var overlapStartIndex = -1;
				var overlapEndIndex = -1;
				var totalOverlap = 0;

				for (var k = 0; k < dataPoints.length; k++) {
					currentDataPoint = dataPointEOs[k];

					if (!currentDataPoint.indexLabelText)
						continue;

					var nextLabelIndex = getNextLabelIndex(k);
					if (nextLabelIndex === null)
						continue;

					var nextDataPoint = dataPointEOs[nextLabelIndex];

					distanceFromNextLabel = 0;

					//if (nextDataPoint.indexLabelTextBlock.y > currentDataPoint.indexLabelTextBlock.y)
					//	distanceFromNextLabel = (nextDataPoint.indexLabelTextBlock.y - (nextDataPoint.indexLabelTextBlock.height / 2)) - (currentDataPoint.indexLabelTextBlock.y + (currentDataPoint.indexLabelTextBlock.height / 2));
					//else
					//	distanceFromNextLabel = (currentDataPoint.indexLabelTextBlock.y - (currentDataPoint.indexLabelTextBlock.height / 2)) - (nextDataPoint.indexLabelTextBlock.y + (nextDataPoint.indexLabelTextBlock.height / 2));

					distanceFromNextLabel = getVerticalDistanceBetweenLabels(currentDataPoint, nextDataPoint);

					if (distanceFromNextLabel < 0) {

						if (overlapStartIndex < 0)
							overlapStartIndex = k;

						if (nextLabelIndex !== overlapStartIndex)
							overlapEndIndex = nextLabelIndex;

						totalOverlap += -distanceFromNextLabel;

						//nextDataPoint.indexLabelText = "";
						//nextDataPoint.indexLabelTextBlock.text = "";
						//nextDataPoint.indexLabelTextBlock.measureText();
					} else {

						if (totalOverlap > 0) {
							removeLabelsForSmallSegments(totalOverlap, overlapStartIndex, overlapEndIndex);

							overlapStartIndex = -1;
							overlapEndIndex = -1;
							totalOverlap = 0;
						}
					}

				}

				if (totalOverlap > 0)
					removeLabelsForSmallSegments(totalOverlap, overlapStartIndex, overlapEndIndex);

			}
			//window.alert("next??");

			//maxFrame = 50;
			resetAnimationFrame(_this.animationEnabled && _this.renderCount === 0 ? isCanvasSupported ? 60 : 30 : 1);
			//resetAnimationFrame(1);
			animate();
			//window.alert("next?");
			//renderLabels();

			//console.log("totalRecursions: " + totalRecursions);
		}

		this.pieDoughnutClickHandler = function (e) {

			if (animationParameter.frame !== animationParameter.maxFrames) {
				return;
			}

			var i = e.dataPointIndex;
			var dataPoint = e.dataPoint;


			var id = e.dataSeries.dataPointIds[i];

			//dataPointEO = _this._eventManager.objectMap[id];

			if (dataPoint.exploded)
				dataPoint.exploded = false;
			else
				dataPoint.exploded = true;

			//resetAnimationFrame(_this.animationEnabled ? isCanvasSupported ? 15 : 4 : 1);
			resetAnimationFrame(isCanvasSupported ? 15 : 4);

			explodeToggle();

			return;
		}

		initLabels();

		//resetAnimationFrame();
		positionLabels();

		//this.ctx.strokeRect(plotArea.x1 + 1, plotArea.y1, plotArea.width - 2, plotArea.height);
	}

	//var continuePrompt = true;
	//function customPrompt(msg) {
	//	if (!continuePrompt)
	//		return;

	//	var result = prompt("Custom Prompt", msg);

	//	if (result !== null)
	//		continuePrompt = true;
	//	else
	//		continuePrompt = false;
	//}

	//#endregion pieChart

	//#endregion Render Methods

	Chart.prototype.requestAnimFrame = (function () {
		return window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				window.oRequestAnimationFrame ||
				window.msRequestAnimationFrame ||
				function (callback) {
					window.setTimeout(callback, 1000 / 60);
				};
	})();

	//#endregion Class Chart

	//#region Class LayoutManager
	function LayoutManager(chart) {

		this._topOccupied = 0;
		this._bottomOccupied = 0;
		this._leftOccupied = 0;
		this._rightOccupied = 0;
		this.chart = chart;
	}

	LayoutManager.prototype.registerSpace = function (position, size) {
		if (position === "top") {
			this._topOccupied += size.height;
		}
		else if (position === "bottom") {
			this._bottomOccupied += size.height;
		} else if (position === "left") {
			this._leftOccupied += size.width; // this is width when seen upright/vertically
		} else if (position === "right") {
			this._rightOccupied += size.width;// this is width when seen upright/vertically
		}
	}

	LayoutManager.prototype.unRegisterSpace = function (position, size) {
		if (position === "top") {
			this._topOccupied -= size.height;
		}
		else if (position === "bottom") {
			this._bottomOccupied -= size.height;
		} else if (position === "left") {
			this._leftOccupied -= size.width;// this is width when seen upright/vertically
		} else if (position === "right") {
			this._rightOccupied -= size.width;// this is width when seen upright/vertically
		}
	}

	LayoutManager.prototype.getFreeSpace = function () {
		///<signature>
		///<summary>Returns available free space {x1:number, y1:number, x2:number, y2:number}</summary>
		///</signature>

		return {
			x1: this._leftOccupied,
			y1: this._topOccupied,
			x2: this.chart.width - this._rightOccupied,
			y2: this.chart.height - this._bottomOccupied,
			width: (this.chart.width - this._rightOccupied) - this._leftOccupied,
			height: (this.chart.height - this._bottomOccupied) - this._topOccupied
		};
	}

	LayoutManager.prototype.reset = function () {
		this._topOccupied = 0;
		this._bottomOccupied = 3;//so that there is enough padding in the bottom.
		this._leftOccupied = 0;
		this._rightOccupied = 0;
	}
	//#endregion Class LayoutManager

	//#region Class TextBlock
	function TextBlock(ctx, options) {
		TextBlock.parent.constructor.call(this, "TextBlock", options);

		this.ctx = ctx;
		this._isDirty = true;
		this._wrappedText = null;
		this._lineHeight = getFontHeightInPixels(this.fontFamily, this.fontSize, this.fontWeight);
	}
	extend(TextBlock, CanvasJSObject);
	TextBlock.prototype.render = function (preserveContext) {
		if (preserveContext)
			this.ctx.save();

		var font = this.ctx.font;
		this.ctx.textBaseline = this.textBaseline;

		if (this._isDirty)
			this.measureText(this.ctx);

		this.ctx.translate(this.x, this.y);
		this.ctx.font = this._getFontString();

		this.ctx.rotate(Math.PI / 180 * this.angle);

		var textLeft = 0;
		//var textTop = this.textBaseline === "middle" ? this.fontSize / 2 + this.padding : this.padding;
		var textTop = this.padding;
		var line = null;

		if ((this.borderThickness > 0 && this.borderColor) || this.backgroundColor) {
			this.ctx.roundRect(0, 0, this.width, this.height, this.cornerRadius, this.borderThickness, this.backgroundColor, this.borderColor);

			if (this.textBaseline === "middle")
				textTop += this.fontSize / 2;
			//textTop += this._lineHeight / 2;
		}

		this.ctx.fillStyle = this.fontColor;

		for (var i = 0; i < this._wrappedText.lines.length; i++) {

			line = this._wrappedText.lines[i];
			if (this.horizontalAlign === "right")
				textLeft = this.width - line.width - this.padding;
			else if (this.horizontalAlign === "left")
				textLeft = this.padding;
			else if (this.horizontalAlign === "center")
				textLeft = (this.width - this.padding * 2) / 2 - line.width / 2 + this.padding;

			this.ctx.fillText(line.text, textLeft, textTop);

			textTop += line.height;
		}

		this.ctx.font = font;

		if (preserveContext)
			this.ctx.restore();
	}

	TextBlock.prototype.setText = function (text) {
		this.text = text;
		this._isDirty = true;
		this._wrappedText = null;
	}

	TextBlock.prototype.measureText = function () {
		if (this.maxWidth === null) {
			throw ("Please set maxWidth and height for TextBlock");
		}

		this._wrapText(this.ctx);
		this._isDirty = false;

		return { width: this.width, height: this.height }
	}

	TextBlock.prototype._getLineWithWidth = function (text, width, clipWord) {
		text = String(text);
		clipWord = clipWord || false;

		if (!text)
			return { text: "", width: 0 };

		var textWidth = 0,
			min = 0,
			max = text.length - 1,
			mid = Infinity;

		this.ctx.font = this._getFontString();

		while (min <= max) {
			mid = Math.floor((min + max) / 2);
			var tempText = text.substr(0, mid + 1);

			textWidth = this.ctx.measureText(tempText).width;

			if (textWidth < width) {
				min = mid + 1;
			} else if (textWidth > width) {
				max = mid - 1;
			} else {
				break;
			}
		}

		//edge cases
		if (textWidth > width && tempText.length > 1) {
			tempText = tempText.substr(0, tempText.length - 1);
			textWidth = this.ctx.measureText(tempText).width;
		}

		var isClipped = true;

		if (tempText.length === text.length || text[tempText.length] === " ")
			isClipped = false;

		if (isClipped) {
			var resultWords = tempText.split(" ");
			if (resultWords.length > 1)
				resultWords.pop();

			tempText = resultWords.join(" ");
			textWidth = this.ctx.measureText(tempText).width;
		}

		return { text: tempText, width: textWidth };
	}

	TextBlock.prototype._wrapText = function wrapText() {
		//this.ctx.save();
		text = new String(trimString(this.text));
		var lines = [];
		var font = this.ctx.font; // Save the current Font
		var height = 0;
		var width = 0;

		this.ctx.font = this._getFontString();

		while (text.length > 0) {

			var maxWidth = this.maxWidth - this.padding * 2;
			var maxHeight = this.maxHeight - this.padding * 2;

			var line = this._getLineWithWidth(text, maxWidth, false);
			line.height = this._lineHeight;

			lines.push(line);

			width = Math.max(width, line.width);
			height += line.height;
			text = trimString(text.slice(line.text.length, text.length));

			if (maxHeight && height > maxHeight) {
				var line = lines.pop();
				height -= line.height;
			}
		}

		this._wrappedText = { lines: lines, width: width, height: height };
		this.width = width + this.padding * 2;
		this.height = height + this.padding * 2;

		this.ctx.font = font; // Restore the font
	}

	TextBlock.prototype._getFontString = function () {
		//return this.fontStyle + " " + this.fontWeight + " " + this.fontSize + "px " + this.fontFamily
		return getFontString("", this, null);
	}

	//#endregion Class TextBlock

	//#region Class Title

	function Title(chart, options) {
		Title.parent.constructor.call(this, "Title", options, chart.theme);

		this.chart = chart;
		this.canvas = chart.canvas;
		this.ctx = this.chart.ctx;


		if (typeof (this._options.fontSize) === "undefined") {

			this.fontSize = this.chart.getAutoFontSize(this.fontSize);

			//window.console.log("Chart Title fontSize: " + this.fontSize);
		}

		this.width = null,//read only
		this.height = null//read only
		this.bounds = { x1: null, y1: null, x2: null, y2: null };
	}

	extend(Title, CanvasJSObject);
	Title.prototype.render = function () {

		if (!this.text)
			return;

		var freespace = this.chart.layoutManager.getFreeSpace();
		var left = 0;
		var top = 0;
		var angle = 0;
		var maxWidth = 0;
		var maxHeight = 0;

		var textBlockHorizontalAlign;
		var position;

		if (this.verticalAlign === "top" || this.verticalAlign === "bottom") {
			maxWidth = freespace.width - this.margin * 2;
			maxHeight = freespace.height * .5 - this.margin * 2;
			angle = 0;
		}
		else if (this.verticalAlign === "center") {

			if (this.horizontalAlign === "left" || this.horizontalAlign === "right") {
				maxWidth = freespace.height - this.margin * 2;
				maxHeight = freespace.width * .5 - this.margin * 2;
			} else if (this.horizontalAlign === "center") {
				maxWidth = freespace.width - this.margin * 2;
				maxHeight = freespace.height * .5 - this.margin * 2;
			}
		}

		var textBlock = new TextBlock(this.ctx, {
			fontSize: this.fontSize, fontFamily: this.fontFamily, fontColor: this.fontColor,
			fontStyle: this.fontStyle, fontWeight: this.fontWeight,
			horizontalAlign: this.horizontalAlign, verticalAlign: this.verticalAlign,
			borderColor: this.borderColor, borderThickness: this.borderThickness,
			backgroundColor: this.backgroundColor,
			maxWidth: maxWidth, maxHeight: maxHeight,
			cornerRadius: this.cornerRadius,
			text: this.text,
			padding: this.padding,
			textBaseline: (this.borderColor && this.borderThickness > 0) ? "middle" : "top"
		});

		var textBlockSize = textBlock.measureText();

		if (this.verticalAlign === "top" || this.verticalAlign === "bottom") {

			if (this.verticalAlign === "top") {
				top = this.margin;
				position = "top";
			}
			else if (this.verticalAlign === "bottom") {
				top = freespace.y2 - this.margin - textBlockSize.height;
				position = "bottom";
			}

			if (this.horizontalAlign === "left") {
				left = freespace.x1 + this.margin;
			}
			else if (this.horizontalAlign === "center") {
				left = freespace.x1 + (maxWidth / 2 - textBlockSize.width / 2) + this.margin;
			}
			else if (this.horizontalAlign === "right") {
				left = freespace.x2 - this.margin - textBlockSize.width;
			}

			textBlockHorizontalAlign = this.horizontalAlign;

			this.width = textBlockSize.width;
			this.height = textBlockSize.height;
		}
		else if (this.verticalAlign === "center") {

			if (this.horizontalAlign === "left") {

				left = freespace.x1 + this.margin;
				top = freespace.y2 - this.margin - (maxWidth / 2 - textBlockSize.width / 2);
				angle = -90;

				position = "left";
				this.width = textBlockSize.height;
				this.height = textBlockSize.width;
			}
			else if (this.horizontalAlign === "right") {
				left = freespace.x2 - this.margin;
				top = freespace.y1 + this.margin + (maxWidth / 2 - textBlockSize.width / 2);
				angle = 90;

				position = "right";
				this.width = textBlockSize.height;
				this.height = textBlockSize.width;
			}
			else if (this.horizontalAlign === "center") {
				top = freespace.y1 + (freespace.height / 2 - textBlockSize.height / 2);
				left = freespace.x1 + (freespace.width / 2 - textBlockSize.width / 2);

				position = "center";
				this.width = textBlockSize.width;
				this.height = textBlockSize.height;
			}

			textBlockHorizontalAlign = "center";
		}

		textBlock.x = left;
		textBlock.y = top;
		textBlock.angle = angle;
		textBlock.horizontalAlign = textBlockHorizontalAlign;
		textBlock.render(true);

		this.chart.layoutManager.registerSpace(position, { width: this.width + this.margin * 2, height: this.height + this.margin * 2 });

		this.bounds = { x1: left, y1: top, x2: left + this.width, y2: top + this.height };

		this.ctx.textBaseline = "top";
	}


	//#endregion Class Title

	//#region Legend

	//TBI: Implement Markes for Legend
	function Legend(chart, options, theme) {
		Legend.parent.constructor.call(this, "Legend", options, theme);

		this.chart = chart;
		this.canvas = chart.canvas;
		this.ctx = this.chart.ctx;

		this.width = 0,
		//this.fontSize = 12,
		this.height = 0,
		this.orientation = null,
		this.horizontalSpacing = 10;
		this.dataSeries = [];
		this.bounds = { x1: null, y1: null, x2: null, y2: null };

		if (typeof (this._options.fontSize) === "undefined") {
			this.fontSize = this.chart.getAutoFontSize(this.fontSize);
			//window.console.log("fontSize: " + this.fontSize);
		}

		this.lineHeight = getFontHeightInPixels(this.fontFamily, this.fontSize, this.fontWeight);
	}
	extend(Legend, CanvasJSObject);

	Legend.prototype.render = function () {
		var freeSpace = this.chart.layoutManager.getFreeSpace();
		var position = null;
		var top = 0;
		var left = 0;
		var maxWidth = 0;
		var maxHeight = 0;
		var entryMargin = 5;

		var entries = [];
		var rows = [];



		//this.ctx.font = getFontString("", this, null);
		//this.ctx.fontColor = this.fontColor;

		if (this.verticalAlign === "top" || this.verticalAlign === "bottom") {
			this.orientation = "horizontal";
			position = this.verticalAlign;
			maxWidth = freeSpace.width * .9;
			maxHeight = freeSpace.height * .5;
		}
		else if (this.verticalAlign === "center") {
			this.orientation = "vertical";
			position = this.horizontalAlign;

			maxWidth = freeSpace.width * .5;
			maxHeight = freeSpace.height * .9;
		}

		for (var i = 0; i < this.dataSeries.length; i++) {
			var dataSeries = this.dataSeries[i];

			var markerType = dataSeries.legendMarkerType ? dataSeries.legendMarkerType : (dataSeries.type === "line" || dataSeries.type === "stepLine" || dataSeries.type === "spline" || dataSeries.type === "scatter" || dataSeries.type === "bubble") && dataSeries.markerType ? dataSeries.markerType : DataSeries.getDefaultLegendMarker(dataSeries.type);
			var legendText = dataSeries.legendText ? dataSeries.legendText : dataSeries.name;
			var markerColor = dataSeries.legendMarkerColor ? dataSeries.legendMarkerColor : dataSeries.markerColor ? dataSeries.markerColor : dataSeries._colorSet[0];
			var markerSize = (!dataSeries.markerSize && (dataSeries.type === "line" || dataSeries.type === "stepLine" || dataSeries.type === "spline")) ? 0 : this.lineHeight * .6;
			var lineColor = dataSeries._colorSet[0];

			if (dataSeries.type !== "pie" && dataSeries.type !== "doughnut") {
				var entry = { markerType: markerType, markerColor: markerColor, text: legendText, textBlock: null, chartType: dataSeries.type, markerSize: markerSize, lineColor: dataSeries._colorSet[0] };

				entries.push(entry);
			} else {
				for (var dataPointIndex = 0; dataPointIndex < dataSeries.dataPoints.length; dataPointIndex++) {

					var dataPoint = dataSeries.dataPoints[dataPointIndex];

					markerType = dataPoint.legendMarkerType ? dataPoint.legendMarkerType : dataSeries.legendMarkerType ? dataSeries.legendMarkerType : DataSeries.getDefaultLegendMarker(dataSeries.type);
					var legendText = dataPoint.legendText ? dataPoint.legendText : dataSeries.legendText ? dataSeries.legendText : dataPoint.name ? dataPoint.name : "DataPoint: " + (dataPointIndex + 1);
					var markerColor = dataPoint.markerColor ? dataPoint.markerColor : dataSeries.markerColor ? dataSeries.markerColor : dataPoint.color ? dataPoint.color : dataSeries.color ? dataSeries.color : dataSeries._colorSet[dataPointIndex % dataSeries._colorSet.length];
					var markerSize = ((dataPoint.markerSize === 0 || (dataSeries.markerSize === 0 && !dataPoint.markerSize)) && (dataSeries.type === "line" || dataSeries.type === "stepLine" || dataSeries.type === "spline")) ? 0 : this.lineHeight * .6;

					var entry = { markerType: markerType, markerColor: markerColor, text: legendText, textBlock: null, chartType: dataSeries.type, markerSize: markerSize };

					entries.push(entry);
				}
			}

			entry = null;
		}


		// Find out the required width and height of Legend and position the entries relative to the container
		if (entries.length > 0) {
			var row = null;
			var rowIndex = 0; // required for vertical orientation
			for (var i = 0; i < entries.length; i++) {
				var entry = entries[i];

				if (this.orientation === "horizontal") {
					entry.textBlock = new TextBlock(this.ctx, {
						x: 0,
						y: 0,//TBI
						maxWidth: maxWidth,
						maxHeight: this.lineHeight, //TBI: FontSize
						angle: 0,
						text: entry.text,
						horizontalAlign: "left",//left, center, right
						fontSize: this.fontSize,//in pixels
						fontFamily: this.fontFamily,
						fontWeight: this.fontWeight, //normal, bold, bolder, lighter,
						fontColor: this.fontColor,
						fontStyle: this.fontStyle, // normal, italic, oblique
						textBaseline: "top"
					});
					entry.textBlock.measureText();


					if (!row || row.width + entry.textBlock.width + (row.width === 0 ? 0 : this.horizontalSpacing) > maxWidth) {
						row = { entries: [], width: 0 };
						rows.push(row);
						this.height = rows.length * (entry.textBlock.height + 5);
					}

					entry.textBlock.x = row.width;
					entry.textBlock.y = 0;

					row.width += Math.round(entry.textBlock.width + entry.textBlock._lineHeight + (row.width === 0 ? 0 : entry.textBlock._lineHeight * .5));
					row.entries.push(entry);

					this.width = Math.max(row.width, this.width);

				} else {
					if (this.height + this.lineHeight < maxHeight) {
						row = { entries: [], width: 0 };
						rows.push(row);
						this.height = rows.length * (this.lineHeight);
					} else {
						row = rows[rowIndex];
						rowIndex = (rowIndex + 1) % rows.length
					}

					entry.textBlock = new TextBlock(this.ctx, {
						x: 0,
						y: 0,//TBI
						maxWidth: maxWidth,
						maxHeight: this.fontSize * 1.5, //TBI: FontSize
						angle: 0,
						text: entry.text,
						horizontalAlign: "left",//left, center, right
						fontSize: this.fontSize,//in pixels
						fontFamily: this.fontFamily,
						fontWeight: this.fontWeight, //normal, bold, bolder, lighter,
						fontColor: this.fontColor,
						fontStyle: this.fontStyle, // normal, italic, oblique
						textBaseline: "top"
					});

					entry.textBlock.measureText();

					entry.textBlock.x = row.width; // relative to the row
					entry.textBlock.y = 0; // relative to the row

					row.width += entry.textBlock.width + entry.textBlock._lineHeight + (row.width === 0 ? 0 : entry.textBlock._lineHeight * .5);
					row.entries.push(entry);

					this.width = Math.max(row.width, this.width);
				}
			}

			this.height = rows.length * (this.lineHeight);

		}

		if (this.verticalAlign === "top") {
			if (this.horizontalAlign === "left")
				left = freeSpace.x1 + 2;
			else if (this.horizontalAlign === "right")
				left = freeSpace.x2 - this.width - 2;
			else
				left = freeSpace.x1 + freeSpace.width / 2 - this.width / 2;

			top = freeSpace.y1;
		} else if (this.verticalAlign === "center") {
			if (this.horizontalAlign === "left")
				left = freeSpace.x1 + 2;
			else if (this.horizontalAlign === "right")
				left = freeSpace.x2 - this.width - 2;
			else
				left = freeSpace.x1 + freeSpace.width / 2 - this.width / 2;

			top = freeSpace.y1 + freeSpace.height / 2 - this.height / 2;
		} else if (this.verticalAlign === "bottom") {
			if (this.horizontalAlign === "left")
				left = freeSpace.x1 + 2;
			else if (this.horizontalAlign === "right")
				left = freeSpace.x2 - this.width - 2;
			else
				left = freeSpace.x1 + freeSpace.width / 2 - this.width / 2;


			top = freeSpace.y2 - this.height - 5;
		}

		for (var i = 0; i < rows.length; i++) {
			var row = rows[i];
			for (var entryIndex = 0; entryIndex < row.entries.length; entryIndex++) {
				var entry = row.entries[entryIndex];

				var legendX = entry.textBlock.x + left + (entryIndex === 0 ? markerSize * .2 : (this.lineHeight * .4) + (markerSize * .2));
				var legendY = top + (i * this.lineHeight);

				if (entry.chartType === "line" || entry.chartType === "stepLine" || entry.chartType === "spline") {
					this.ctx.strokeStyle = entry.lineColor;
					this.ctx.lineWidth = Math.ceil(this.lineHeight / 8);
					this.ctx.beginPath();
					this.ctx.moveTo(legendX - this.lineHeight * .1, legendY + this.lineHeight / 2);
					this.ctx.lineTo(legendX + this.lineHeight * .7, legendY + this.lineHeight / 2);
					this.ctx.stroke();
				}

				RenderHelper.drawMarker(legendX + markerSize / 2, legendY + (this.lineHeight / 2), this.ctx, entry.markerType, markerSize, entry.markerColor, null, 0);

				entry.textBlock.x = legendX + Math.round(this.lineHeight * .9);
				entry.textBlock.y = legendY;
				entry.textBlock.render(true);
			}
		}

		//this.ctx.beginPath();
		//this.ctx.lineWidth = 2;
		//this.ctx.strokeStyle = "red";
		//this.ctx.rect(left, top, this.width, this.height);
		//this.ctx.stroke();


		this.chart.layoutManager.registerSpace(position, { width: this.width + 2 + 2, height: this.height + 5 + 5 });

		this.bounds = { x1: left, y1: top, x2: left + this.width, y2: top + this.height };
	}

	//#endregion Legend

	//#region Class PlotArea
	function PlotArea(chart, options) {
		PlotArea.parent.constructor.call(this, options);

		this.chart = chart;
		this.canvas = chart.canvas;
		this.ctx = this.chart.ctx;
	}
	extend(PlotArea, CanvasJSObject);

	PlotArea.prototype.render = function () {
		var freeSpace = this.chart.layoutManager.getFreeSpace();

		this.ctx.fillStyle = "red";
		this.ctx.fillRect(freeSpace.x1, freeSpace.y1, freeSpace.x2, freeSpace.y2);
	}
	//#endregion Class PlotArea

	//#region DataSeries

	function DataSeries(chart, options, theme, index, id) {
		DataSeries.parent.constructor.call(this, "DataSeries", options, theme);

		this.chart = chart;
		this.canvas = chart.canvas;
		this._ctx = chart.canvas.ctx;
		this.index = index;
		this.noDataPointsInPlotArea = 0;
		this.maxWidthInX = 0;
		this.id = id;
		this.dataPointIds = [];

		this.axisX = null;
		this.axisY = null;

		this.axisPlacement = this.getDefaultAxisPlacement();

		if (typeof (this._options.indexLabelFontSize) === "undefined") {

			this.indexLabelFontSize = this.chart.getAutoFontSize(this.indexLabelFontSize);
		}
	}
	extend(DataSeries, CanvasJSObject);

	//Static Method that returns the axisPlacement for a given ChartType. Returns one of "normal", "xySwapped", "none"
	DataSeries.prototype.getDefaultAxisPlacement = function () {

		//type = this.type.toLowerCase();
		type = this.type;

		if (type === "column" || type === "line" || type === "stepLine" || type === "spline" || type === "area" || type === "stepArea" || type === "splineArea" || type === "stackedColumn" || type === "stackedLine" || type === "bubble" || type === "scatter"
			|| type === "stackedArea" || type === "stackedColumn100" || type === "stackedLine100" || type === "stackedArea100") {
			return "normal";
		}
		else if (type === "bar" || type === "stackedBar" || type === "stackedBar100") {

			return "xySwapped";
		}
		else if (type === "pie" || type === "doughnut") {
			return "none";
		} else {
			window.console.log("Unknown Chart Type: " + type);
			return null;
		}
	}

	DataSeries.getDefaultLegendMarker = function (type) {

		//type = type.toLowerCase();

		if (type === "column" || type === "stackedColumn" || type === "stackedLine" || type === "bar" || type === "stackedBar" || type === "stackedBar100"
			|| type === "bubble" || type === "scatter"
			|| type === "stackedColumn100" || type === "stackedLine100" || type === "stepArea") {
			return "square";
		}
		else if (type === "line" || type === "stepLine" || type === "spline" || type === "pie" || type === "doughnut") {
			return "circle";
		} else if (type === "area" || type === "splineArea" || type === "stackedArea" || type === "stackedArea100") {
			return "triangle"
		} else {
			window.console.log("Unknown Chart Type: " + type);
			return null;
		}
	}

	//Finds dataPoint with the given x value. If findClosest is set, finds dataPoint with closest x value. 
	//Returns searchResult object if found, else returns null
	DataSeries.prototype.getDataPointAtX = function (x, findClosest) {

		if (!this.dataPoints || this.dataPoints.length === 0) return null;

		var searchResult = { dataPoint: null, distance: Infinity, index: NaN };
		var dataPoint = null;

		var j = 0;
		var i = 0;
		var direction = 1; // +1 for foward and -1 for backward.

		var minimumXDistance = Infinity;
		var forwardMissCount = 0, backwardMissCount = 0;
		var maxMissCount = 1000;
		var searchStartIndex = 0;

		if (this.chart.plotInfo.axisPlacement !== "none") {
			var xRange = (this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x);

			if (xRange > 0)
				searchStartIndex = ((this.dataPoints.length - 1) / xRange * (x - this.dataPoints[0].x)) >> 0;
			else
				searchStartIndex = 0;

			//searchStartIndex = ((this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x) / this.dataPoints.length * (x - this.dataPoints[0].x)) >> 0;
		}

		while (true) {

			i = (direction > 0) ? searchStartIndex + j : searchStartIndex - j;

			if (i >= 0 && i < this.dataPoints.length) {

				dataPoint = this.dataPoints[i];

				var distance = Math.abs(dataPoint.x - x);

				if (distance < searchResult.distance) {
					searchResult.dataPoint = dataPoint;
					searchResult.distance = distance;
					searchResult.index = i;
				}

				var xDistance = Math.abs(dataPoint.x - x);
				if (xDistance <= minimumXDistance)
					minimumXDistance = xDistance;
				else {
					if (direction > 0)
						forwardMissCount++;
					else
						backwardMissCount++;
				}

				if (forwardMissCount > maxMissCount && backwardMissCount > maxMissCount)
					break;


			} else if (searchStartIndex - j < 0 && searchStartIndex + j >= this.dataPoints.length)
				break;

			if (direction === -1) {
				j++;
				direction = 1;
			} else
				direction = -1;
		}


		if (!findClosest && searchResult.dataPoint.x === x)
			return searchResult;
		else if (findClosest && searchResult.dataPoint !== null)
			return searchResult;
		else
			return null;
	}

	// x & y should be in pixels. Can be used only after rendering the chart.
	DataSeries.prototype.getDataPointAtXY = function (x, y, getClosest) {

		if (!this.dataPoints || this.dataPoints.length === 0) return null;

		getClosest = getClosest || false;
		var results = [];
		var j = 0, i = 0;
		var direction = 1; // +1 for foward and -1 for backward.
		var foundDataPoint = false;
		var minimumXDistance = Infinity;
		var forwardMissCount = 0, backwardMissCount = 0;
		var maxMissCount = 1000;
		var searchStartIndex = 0;

		if (this.chart.plotInfo.axisPlacement !== "none") {
			var xval = this.chart.axisX.getXValueAt({ x: x, y: y });
			var xRange = (this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x);

			if (xRange > 0)
				searchStartIndex = ((this.dataPoints.length - 1) / xRange * (xval - this.dataPoints[0].x)) >> 0;
			else
				searchStartIndex = 0;
		}

		while (true) {

			//i = searchStartIndex + (j * direction);
			i = (direction > 0) ? searchStartIndex + j : searchStartIndex - j;

			if (i >= 0 && i < this.dataPoints.length) {

				var id = this.dataPointIds[i];
				var visualInfo = this.chart._eventManager.objectMap[id];
				var dataPoint = this.dataPoints[i];

				if (visualInfo) {

					switch (this.type) {

						case "column":
						case "stackedColumn":
						case "stackedColumn100":
						case "bar":
						case "stackedBar":
						case "stackedBar100":
							if (x >= visualInfo.x1 && x <= visualInfo.x2 && y >= visualInfo.y1 && y <= visualInfo.y2) {
								results.push({
									dataPoint: dataPoint,
									dataPointIndex: i,
									dataSeries: this,
									distance: Math.min(Math.abs(visualInfo.x1 - x), Math.abs(visualInfo.x2 - x), Math.abs(visualInfo.y1 - y), Math.abs(visualInfo.y2 - y))
									//distance:0
								});

								foundDataPoint = true;
							}
							break;

						case "line":
						case "stepLine":
						case "spline":
						case "area":
						case "stepArea":
						case "stackedArea":
						case "stackedArea100":
						case "splineArea":
						case "scatter":
							var markerSize = getProperty("markerSize", dataPoint, this) || 4;
							var snapDistance = getClosest ? 20 : markerSize;

							var distance = Math.sqrt(Math.pow(visualInfo.x1 - x, 2) + Math.pow(visualInfo.y1 - y, 2));
							if (distance <= snapDistance) {
								results.push({
									dataPoint: dataPoint,
									dataPointIndex: i,
									dataSeries: this,
									distance: distance
								});
							}

							var xDistance = Math.abs(visualInfo.x1 - x);
							if (xDistance <= minimumXDistance)
								minimumXDistance = xDistance;
							else {
								if (direction > 0)
									forwardMissCount++;
								else
									backwardMissCount++;
							}

							if (distance <= markerSize / 2) {
								foundDataPoint = true;
							}

							break;

						case "bubble":
							var markerSize = visualInfo.size;
							var distance = Math.sqrt(Math.pow(visualInfo.x1 - x, 2) + Math.pow(visualInfo.y1 - y, 2));
							if (distance <= markerSize / 2) {
								results.push({
									dataPoint: dataPoint,
									dataPointIndex: i,
									dataSeries: this,
									distance: distance
								});

								foundDataPoint = true;
							}
							break;

						case "pie":
						case "doughnut":
							var center = visualInfo.center;
							var innerRadius = this.type === "doughnut" ? .6 * visualInfo.radius : 0;

							var distance = Math.sqrt(Math.pow(center.x - x, 2) + Math.pow(center.y - y, 2));
							if (distance < visualInfo.radius && distance > innerRadius) {

								var deltaY = y - center.y;
								var deltaX = x - center.x;
								var angle = Math.atan2(deltaY, deltaX);

								if (angle < 0)
									angle += Math.PI * 2;

								angle = ((angle / Math.PI * 180 % 360) + 360) % 360;
								var startAngle = ((visualInfo.startAngle / Math.PI * 180 % 360) + 360) % 360;
								var endAngle = ((visualInfo.endAngle / Math.PI * 180 % 360) + 360) % 360;

								if (startAngle > endAngle) {
									endAngle += 360;

									if (angle < startAngle)
										angle += 360;
								}

								if (angle > startAngle && angle < endAngle) {
									results.push({
										dataPoint: dataPoint,
										dataPointIndex: i,
										dataSeries: this,
										distance: 0
									});

									foundDataPoint = true;
								}

							}

							break;

					}

					if (foundDataPoint || (forwardMissCount > maxMissCount && backwardMissCount > maxMissCount))
						break;
				}

			} else if (searchStartIndex - j < 0 && searchStartIndex + j >= this.dataPoints.length)
				break;

			if (direction === -1) {
				j++;
				direction = 1;
			} else
				direction = -1;

		}



		var closestResult = null;

		for (var m = 0; m < results.length; m++) {
			if (!closestResult) {
				closestResult = results[m];
			} else if (results[m].distance <= closestResult.distance) {
				closestResult = results[m];
			}
		}

		//if (window.console && closestResult)
		//    window.console.log(j + ": distance = " + closestResult.distance);

		return closestResult;
	}

	DataSeries.prototype.getMarkerProperties = function (index, x, y, ctx) {
		var dataPoints = this.dataPoints;
		var dataSeries = this;

		var markerColor = dataPoints[index].markerColor ? dataPoints[index].markerColor : dataSeries.markerColor ? dataSeries.markerColor : dataPoints[index].color ? dataPoints[index].color : dataSeries.color ? dataSeries.color : dataSeries._colorSet[index % dataSeries._colorSet.length];
		var markerBorderColor = dataPoints[index].markerBorderColor ? dataPoints[index].markerBorderColor : dataSeries.markerBorderColor ? dataSeries.markerBorderColor : null;
		var markerBorderThickness = dataPoints[index].markerBorderThickness ? dataPoints[index].markerBorderThickness : dataSeries.markerBorderThickness ? dataSeries.markerBorderThickness : null;
		var markerType = dataPoints[index].markerType ? dataPoints[index].markerType : dataSeries.markerType;
		var markerSize = dataPoints[index].markerSize ? dataPoints[index].markerSize : dataSeries.markerSize;


		return {
			x: x, y: y, ctx: ctx,
			type: markerType,
			size: markerSize,
			color: markerColor,
			borderColor: markerBorderColor,
			borderThickness: markerBorderThickness
		}
	}
	//#endregion DataSeries

	//#region Axis

	function Axis(chart, options, type, position) {
		Axis.parent.constructor.call(this, "Axis", options, chart.theme);

		this.chart = chart;
		this.canvas = chart.canvas;
		this.ctx = chart.ctx;
		this.maxWidth = 0;
		this.maxHeight = 0;
		this.intervalStartPosition = 0;
		this.labels = [];
		this._labels = null;

		//Processed information about the data that gets plotted against this axis
		this.dataInfo = {
			min: Infinity,
			max: -Infinity,
			viewPortMin: Infinity,
			viewPortMax: -Infinity,
			minDiff: Infinity // Used only in case of axisX
		};

		if (type === "axisX") {
			this.sessionVariables = this.chart.sessionVariables[type];

			if (!this._options.interval)
				this.intervalType = null;
		} else {
			if (position === "left" || position === "top")
				this.sessionVariables = this.chart.sessionVariables["axisY"];
			else {
				this.sessionVariables = this.chart.sessionVariables["axisY2"];
			}
		}



		if (typeof (this._options.titleFontSize) === "undefined") {

			this.titleFontSize = this.chart.getAutoFontSize(this.titleFontSize);

			//window.console.log("titleFontSize: " + this.titleFontSize);
		}

		if (typeof (this._options.labelFontSize) === "undefined") {

			this.labelFontSize = this.chart.getAutoFontSize(this.labelFontSize);

			//window.console.log("labelFontSize: " + this.labelFontSize);

		}

		//Axis Type : axisX, axisY
		this.type = type;
		if (type === "axisX" && (!options || typeof (options.gridThickness) === "undefined"))
			this.gridThickness = 0;

		this._position = position;

		this.lineCoordinates = { x1: null, y1: null, x2: null, y2: null, width: null };//{x1:, y1:, x2:, y2:, width:}
		//
		{
			this.labelAngle = ((this.labelAngle % 360) + 360) % 360;

			if (this.labelAngle > 90 && this.labelAngle <= 270)
				this.labelAngle -= 180;
			else if (this.labelAngle > 180 && this.labelAngle <= 270)
				this.labelAngle -= 180
			else if (this.labelAngle > 270 && this.labelAngle <= 360)
				this.labelAngle -= 360
		}

		this._titleTextBlock = null;
		this._absoluteMinimum = null;// Used to determine boundaries while Zooming/Panning
		this._absoluteMaximum = null;// Used to determine boundaries while Zooming/Panning

		if (this.hasOptionChanged("minimum"))
			this.sessionVariables.internalMinimum = this.minimum;

		if (this.hasOptionChanged("maximum"))
			this.sessionVariables.internalMaximum = this.maximum;

		this.trackChanges("minimum");
		this.trackChanges("maximum");
	}
	extend(Axis, CanvasJSObject);

	Axis.prototype.createLabels = function () {
		var textBlock;
		var i = 0;
		var endPoint;

		var labelMaxWidth = 0;
		var labelMaxHeight = 0;
		var intervalInPixels = 0;

		//var intervalInPixels = this.convertionParameters.pixelPerUnit * this.interval;


		if (this._position === "bottom" || this._position === "top") {
			intervalInPixels = this.lineCoordinates.width / Math.abs(this.maximum - this.minimum) * this.interval;

			if (this.labelAutoFit) {
				labelMaxWidth = typeof (this._options.labelMaxWidth) === "undefined" ? intervalInPixels * .9 >> 0 : this.labelMaxWidth;
			}
			else {
				labelMaxWidth = typeof (this._options.labelMaxWidth) === "undefined" ? this.chart.width * .7 >> 0 : this.labelMaxWidth;
			}

			labelMaxHeight = typeof (this._options.labelWrap) === "undefined" || this.labelWrap ? this.chart.height * .5 >> 0 : this.labelFontSize * 1.5;
		}
		else if (this._position === "left" || this._position === "right") {

			intervalInPixels = this.lineCoordinates.height / Math.abs(this.maximum - this.minimum) * this.interval;


			if (this.labelAutoFit) {
				labelMaxWidth = typeof (this._options.labelMaxWidth) === "undefined" ? this.chart.width * .3 >> 0 : this.labelMaxWidth;
			}
			else {
				labelMaxWidth = typeof (this._options.labelMaxWidth) === "undefined" ? this.chart.width * .5 >> 0 : this.labelMaxWidth;
			}

			labelMaxHeight = typeof (this._options.labelWrap) === "undefined" || this.labelWrap ? intervalInPixels * 2 >> 0 : this.labelFontSize * 1.5;
		}

		if (this.type === "axisX" && this.chart.plotInfo.axisXValueType === "dateTime") {
			endPoint = addToDateTime(new Date(this.maximum), this.interval, this.intervalType)
			//endPoint = this.maximum;

			for (i = this.intervalStartPosition; i < endPoint; addToDateTime(i, this.interval, this.intervalType)) {

				//var text = dateFormat(i, this.valueFormatString);
				var text = this.type === "axisX" && this.labels[i] ? this.labels[i] : dateFormat(i, this.valueFormatString, this.chart._cultureInfo);

				textBlock = new TextBlock(this.ctx, {
					x: 0,
					y: 0,
					//maxWidth: this.maxHeight,
					//maxHeight: this.labelFontSize,
					maxWidth: labelMaxWidth,
					maxHeight: labelMaxHeight,
					angle: this.labelAngle,
					text: this.prefix + text + this.suffix,
					horizontalAlign: "left",//left, center, right
					fontSize: this.labelFontSize,//in pixels
					fontFamily: this.labelFontFamily,
					fontWeight: this.labelFontWeight, //normal, bold, bolder, lighter,
					fontColor: this.labelFontColor,
					fontStyle: this.labelFontStyle, // normal, italic, oblique
					textBaseline: "middle"
				});

				this._labels.push({ position: i.getTime(), textBlock: textBlock, effectiveHeight: null });
			}

		}
		else {
			endPoint = this.maximum;

			//if ((Math.floor(this.interval) < this.interval && !this._options.interval) || true) {

			//Check if it should be rendered as a category axis. If yes, then ceil the interval
			if (this.labels && this.labels.length) {
				var tempInterval = Math.ceil(this.interval);
				var tempStartPoint = Math.ceil(this.intervalStartPosition);
				var hasAllLabels = false;
				for (i = tempStartPoint; i < this.maximum; i += tempInterval) {
					if (this.labels[i]) {
						hasAllLabels = true;
					} else {
						hasAllLabels = false;
						break;
					}
				}

				if (hasAllLabels) {
					this.interval = tempInterval;
					this.intervalStartPosition = tempStartPoint;
				}
			}

			for (i = this.intervalStartPosition; i <= endPoint; i += this.interval) {

				var text = this.type === "axisX" && this.labels[i] ? this.labels[i] : numberFormat(i, this.valueFormatString, this.chart._cultureInfo);

				textBlock = new TextBlock(this.ctx, {
					x: 0,
					y: 0,
					//maxWidth: this.maxHeight,
					//maxHeight: this.labelFontSize,
					maxWidth: labelMaxWidth,
					maxHeight: labelMaxHeight,
					angle: this.labelAngle,
					text: this.prefix + text + this.suffix,
					horizontalAlign: "left",//left, center, right
					fontSize: this.labelFontSize,//in pixels
					fontFamily: this.labelFontFamily,
					fontWeight: this.labelFontWeight, //normal, bold, bolder, lighter,
					fontColor: this.labelFontColor,
					fontStyle: this.labelFontStyle, // normal, italic, oblique
					textBaseline: "middle",
					borderThickness: 0
				});

				this._labels.push({ position: i, textBlock: textBlock, effectiveHeight: null });
			}
		}
	}

	Axis.prototype.createLabelsAndCalculateWidth = function () {

		var maxLabelEffectiveWidth = 0;
		this._labels = [];

		if (this._position === "left" || this._position === "right") {

			this.createLabels();

			for (i = 0; i < this._labels.length; i++) {

				textBlock = this._labels[i].textBlock;

				var size = textBlock.measureText();

				//var hypotenuse = Math.sqrt(Math.pow(size.height / 2, 2) + Math.pow(size.width, 2));
				//labelEffectiveWidth = hypotenuse * Math.cos(Math.abs(Math.PI / 180 * this.labelAngle) - Math.abs(Math.acos(size.width / hypotenuse)));

				if (this.labelAngle === 0)
					labelEffectiveWidth = size.width;
				else
					labelEffectiveWidth = (size.width * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) + (size.height / 2 * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)));


				if (maxLabelEffectiveWidth < labelEffectiveWidth)
					maxLabelEffectiveWidth = labelEffectiveWidth;

				this._labels[i].effectiveWidth = labelEffectiveWidth;
			}
		}

		//if (isDebugMode && window.console) {
		//    window.console.log(this.type + " --- axisWidth : " + (maxLabelEffectiveWidth + this.tickLength));
		//}

		var titleHeight = this.title ? getFontHeightInPixels(this.titleFontFamily, this.titleFontSize, this.titleFontWeight) + 2 : 0;

		return titleHeight + maxLabelEffectiveWidth + this.tickLength + 10;
	}

	Axis.prototype.createLabelsAndCalculateHeight = function () {
		var maxLabelEffectiveHeight = 0;
		this._labels = [];
		var textBlock;
		var i = 0;

		this.createLabels();

		if (this._position === "bottom" || this._position === "top") {

			for (i = 0; i < this._labels.length; i++) {

				textBlock = this._labels[i].textBlock;

				var size = textBlock.measureText();
				//var diagonal = Math.sqrt(Math.pow(size.height, 2) + Math.pow(size.width, 2));

				//var hypotenuse = Math.sqrt(Math.pow(size.height / 2, 2) + Math.pow(size.width, 2));
				//var labelEffectiveHeight = hypotenuse * Math.cos(Math.PI / 2 - (Math.abs(Math.PI / 180 * this.labelAngle) + Math.abs(Math.acos(size.width / hypotenuse))));

				var labelEffectiveHeight = 0;

				if (this.labelAngle === 0)
					labelEffectiveHeight = size.height;
				else
					labelEffectiveHeight = (size.width * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle))) + (size.height / 2 * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)));

				if (maxLabelEffectiveHeight < labelEffectiveHeight)
					maxLabelEffectiveHeight = labelEffectiveHeight;

				this._labels[i].effectiveHeight = labelEffectiveHeight;
			}
		}

		//var titleHeight = this.title ? this.titleFontSize + 5 : 0;
		var titleHeight = this.title ? getFontHeightInPixels(this.titleFontFamily, this.titleFontSize, this.titleFontWeight) + 2 : 0;

		return titleHeight + maxLabelEffectiveHeight + this.tickLength;
	}

	//Static Method that co-ordinates between axisX, axisY and renders them
	Axis.setLayoutAndRender = function (axisX, axisY, axisY2, axisPlacement, freeSpace) {
		var x1, y1, x2, y2;
		var chart = axisX.chart;
		var ctx = chart.ctx;

		axisX.calculateAxisParameters();

		if (axisY)
			axisY.calculateAxisParameters();

		if (axisY2)
			axisY2.calculateAxisParameters();

		if (axisY && axisY2 && typeof (axisY._options.maximum) === "undefined" && typeof (axisY._options.minimum) === "undefined" && typeof (axisY._options.interval) === "undefined"
				&& typeof (axisY2._options.maximum) === "undefined" && typeof (axisY2._options.minimum) === "undefined" && typeof (axisY2._options.interval) === "undefined") {

			var noTicksY = (axisY.maximum - axisY.minimum) / axisY.interval;

			var noTicksY2 = (axisY2.maximum - axisY2.minimum) / axisY2.interval;

			if (noTicksY > noTicksY2) {
				axisY2.maximum = axisY2.interval * noTicksY + axisY2.minimum;
			} else if (noTicksY2 > noTicksY) {
				axisY.maximum = axisY.interval * noTicksY2 + axisY.minimum;
			}
		}

		var axisYlineThickness = axisY ? axisY.lineThickness ? axisY.lineThickness : 0 : 0;
		var axisY2lineThickness = axisY2 ? axisY2.lineThickness ? axisY2.lineThickness : 0 : 0;

		var axisYGridThickness = axisY ? axisY.gridThickness ? axisY.gridThickness : 0 : 0;
		var axisY2GridThickness = axisY2 ? axisY2.gridThickness ? axisY2.gridThickness : 0 : 0;

		var axisYMargin = axisY ? axisY.margin : 0;
		var axisY2Margin = axisY ? axisY.margin : 0;

		if (axisPlacement === "normal") {

			axisX.lineCoordinates = {};

			var axisYWidth = Math.ceil(axisY ? axisY.createLabelsAndCalculateWidth() : 0);
			x1 = Math.round(freeSpace.x1 + axisYWidth + axisYMargin);
			axisX.lineCoordinates.x1 = x1;

			var axisY2Width = Math.ceil(axisY2 ? axisY2.createLabelsAndCalculateWidth() : 0);
			x2 = Math.round(freeSpace.x2 - axisY2Width > axisX.chart.width - 10 ? axisX.chart.width - 10 : freeSpace.x2 - axisY2Width);
			axisX.lineCoordinates.x2 = x2;

			axisX.lineCoordinates.width = Math.abs(x2 - x1); // required early on inside createLabels of axisX

			var axisXHeight = Math.ceil(axisX.createLabelsAndCalculateHeight());

			// Position axisX based on the available free space, Margin and its height
			//x1 = freeSpace.x1 + axisYWidth + axisYMargin + axisYlineThickness / 2;
			y1 = Math.round(freeSpace.y2 - axisXHeight - axisX.margin);
			y2 = Math.round(freeSpace.y2 - axisX.margin);

			//axisX.lineCoordinates = { x1: x1, y1: y1, x2: x2, y2: y1, width: Math.abs(x2 - x1) }
			axisX.lineCoordinates.y1 = y1;
			axisX.lineCoordinates.y2 = y1;

			axisX.boundingRect = { x1: x1, y1: y1, x2: x2, y2: y2, width: x2 - x1, height: y2 - y1 };

			//axisX.ctx.rect(axisX.boundingRect.x1, axisX.boundingRect.y1, axisX.boundingRect.width, axisX.boundingRect.height);
			//axisX.ctx.stroke();

			// Position axisY based on the available free space, Margin and its height
			if (axisY) {
				x1 = Math.round(freeSpace.x1 + axisY.margin);
				y1 = Math.round(freeSpace.y1 < 10 ? 10 : freeSpace.y1);
				x2 = Math.round(freeSpace.x1 + axisYWidth + axisY.margin);
				//y2 = freeSpace.y2 - axisXHeight - axisX.margin - axisX.lineThickness / 2;
				y2 = Math.round(freeSpace.y2 - axisXHeight - axisX.margin);

				axisY.lineCoordinates = { x1: x2, y1: y1, x2: x2, y2: y2, height: Math.abs(y2 - y1) }

				axisY.boundingRect = { x1: x1, y1: y1, x2: x2, y2: y2, width: x2 - x1, height: y2 - y1 };
			}

			//axisY.ctx.rect(axisY.boundingRect.x1, axisY.boundingRect.y1, axisY.boundingRect.width, axisY.boundingRect.height);
			//axisY.ctx.stroke();

			// Position axisY2 based on the available free space, Margin and its height
			if (axisY2) {
				x1 = Math.round(axisX.lineCoordinates.x2);
				y1 = Math.round(freeSpace.y1 < 10 ? 10 : freeSpace.y1);
				x2 = Math.round(x1 + axisY2Width + axisY2.margin);
				//y2 = freeSpace.y2 - axisXHeight - axisX.margin - axisX.lineThickness / 2;
				y2 = Math.round(freeSpace.y2 - axisXHeight - axisX.margin);

				axisY2.lineCoordinates = { x1: x1, y1: y1, x2: x1, y2: y2, height: Math.abs(y2 - y1) }

				axisY2.boundingRect = { x1: x1, y1: y1, x2: x2, y2: y2, width: x2 - x1, height: y2 - y1 };
			}


			axisX.calculateValueToPixelConvertionParameters();

			if (axisY)
				axisY.calculateValueToPixelConvertionParameters();

			if (axisY2)
				axisY2.calculateValueToPixelConvertionParameters();


			ctx.save();
			ctx.rect(axisX.boundingRect.x1 - 40, axisX.boundingRect.y1, axisX.boundingRect.width + 80, axisX.boundingRect.height);
			ctx.clip();

			axisX.renderLabelsTicksAndTitle();
			ctx.restore();

			if (axisY)
				axisY.renderLabelsTicksAndTitle();

			if (axisY2)
				axisY2.renderLabelsTicksAndTitle();


			chart.preparePlotArea();
			var plotArea = axisX.chart.plotArea;

			ctx.save();

			ctx.rect(plotArea.x1,
				plotArea.y1 - Math.max(axisY2GridThickness, axisYGridThickness) / 2,
				Math.abs(plotArea.x2 - plotArea.x1),
				Math.abs(plotArea.y2 - plotArea.y1 + Math.max(axisY2GridThickness, axisYGridThickness) / 2 + Math.max(axisY2GridThickness, axisYGridThickness, axisX.lineThickness) / 2));

			ctx.clip();

			axisX.renderInterlacedColors();

			if (axisY)
				axisY.renderInterlacedColors();

			if (axisY2)
				axisY2.renderInterlacedColors();

			ctx.restore();


			axisX.renderGrid();

			if (axisY)
				axisY.renderGrid();

			if (axisY2)
				axisY2.renderGrid();


			axisX.renderAxisLine();

			if (axisY)
				axisY.renderAxisLine();

			if (axisY2)
				axisY2.renderAxisLine();
		}
		else {
			var axisXWidth = Math.ceil(axisX.createLabelsAndCalculateWidth());

			if (axisY) {
				axisY.lineCoordinates = {};

				x1 = Math.round(freeSpace.x1 + axisXWidth + axisX.margin);
				x2 = Math.round(freeSpace.x2 > axisY.chart.width - 10 ? axisY.chart.width - 10 : freeSpace.x2);

				axisY.lineCoordinates.x1 = x1;
				axisY.lineCoordinates.x2 = x2;
				axisY.lineCoordinates.width = Math.abs(x2 - x1);
			}

			if (axisY2) {
				axisY2.lineCoordinates = {};
				x1 = Math.round(freeSpace.x1 + axisXWidth + axisX.margin);
				x2 = Math.round(freeSpace.x2 > axisY2.chart.width - 10 ? axisY2.chart.width - 10 : freeSpace.x2);

				axisY2.lineCoordinates.x1 = x1;
				axisY2.lineCoordinates.x2 = x2;
				axisY2.lineCoordinates.width = Math.abs(x2 - x1);
			}



			var axisYHeight = Math.ceil(axisY ? axisY.createLabelsAndCalculateHeight() : 0);
			var axisY2Height = Math.ceil(axisY2 ? axisY2.createLabelsAndCalculateHeight() : 0);


			// Position axisY based on the available free space, Margin and its height
			if (axisY) {
				//x1 = freeSpace.x1 + axisXWidth + axisX.margin + axisX.lineThickness / 2;
				//x2 = freeSpace.x2 > axisY.chart.width - 10 ? axisY.chart.width - 10 : freeSpace.x2;

				y1 = Math.round(freeSpace.y2 - axisYHeight - axisY.margin);
				y2 = Math.round(freeSpace.y2 - axisYMargin > axisY.chart.height - 10 ? axisY.chart.height - 10 : freeSpace.y2 - axisYMargin);

				//axisY.lineCoordinates = { x1: x1, y1: y1, x2: x2, y2: y1, width: Math.abs(x2 - x1) }
				axisY.lineCoordinates.y1 = y1;
				axisY.lineCoordinates.y2 = y1;

				axisY.boundingRect = { x1: x1, y1: y1, x2: x2, y2: y2, width: x2 - x1, height: axisYHeight };
			}

			// Position axisY based on the available free space, Margin and its height
			if (axisY2) {
				//x1 = freeSpace.x1 + axisXWidth + axisX.margin + axisX.lineThickness / 2;
				//x2 = freeSpace.x2 > axisY2.chart.width - 10 ? axisY2.chart.width - 10 : freeSpace.x2;

				y1 = Math.round(freeSpace.y1 + axisY2.margin);
				y2 = (freeSpace.y1 + axisY2.margin + axisY2Height);

				//axisY2.lineCoordinates = { x1: x1, y1: y2, x2: x2, y2: y2, width: Math.abs(x2 - x1) }
				axisY2.lineCoordinates.y1 = y2;
				axisY2.lineCoordinates.y2 = y2;

				axisY2.boundingRect = { x1: x1, y1: y1, x2: x2, y2: y2, width: x2 - x1, height: axisY2Height };
			}

			//axisY.ctx.rect(axisY.boundingRect.x1, axisY.boundingRect.y1, axisY.boundingRect.width, axisY.boundingRect.height);
			//axisY.ctx.stroke();

			// Position axisX based on the available free space, Margin and its height
			x1 = Math.round(freeSpace.x1 + axisX.margin);
			y1 = Math.round(axisY2 ? axisY2.lineCoordinates.y2 : (freeSpace.y1 < 10 ? 10 : freeSpace.y1));
			x2 = Math.round(freeSpace.x1 + axisXWidth + axisX.margin);
			y2 = Math.round(axisY ? axisY.lineCoordinates.y1 : (freeSpace.y2 - axisYMargin > axisX.chart.height - 10 ? axisX.chart.height - 10 : freeSpace.y2 - axisYMargin));


			axisX.lineCoordinates = { x1: x2, y1: y1, x2: x2, y2: y2, height: Math.abs(y2 - y1) };

			axisX.boundingRect = { x1: x1, y1: y1, x2: x2, y2: y2, width: x2 - x1, height: y2 - y1 };

			//axisX.ctx.rect(axisX.boundingRect.x1, axisX.boundingRect.y1, axisX.boundingRect.width, axisX.boundingRect.height);
			//axisX.ctx.stroke();

			axisX.calculateValueToPixelConvertionParameters();

			if (axisY)
				axisY.calculateValueToPixelConvertionParameters();
			if (axisY2)
				axisY2.calculateValueToPixelConvertionParameters();


			//ctx.save();
			//ctx.rect(axisY.boundingRect.x1 - 30, axisY.boundingRect.y1, axisY.boundingRect.width + 60, axisY.boundingRect.height);
			//ctx.clip();

			if (axisY)
				axisY.renderLabelsTicksAndTitle();

			if (axisY2)
				axisY2.renderLabelsTicksAndTitle();

			//ctx.restore();

			axisX.renderLabelsTicksAndTitle();

			chart.preparePlotArea();
			var plotArea = axisX.chart.plotArea;

			ctx.save();
			ctx.rect(plotArea.x1 - Math.max(axisX.lineThickness, axisYGridThickness, axisY2GridThickness) / 2,
				plotArea.y1,
				Math.abs(plotArea.x2 - plotArea.x1 + Math.max(axisX.lineThickness, axisYGridThickness, axisY2GridThickness) / 2 + Math.max(axisYGridThickness, axisY2GridThickness) / 2),
				Math.abs(plotArea.y2 - plotArea.y1));

			ctx.clip();

			axisX.renderInterlacedColors();

			if (axisY)
				axisY.renderInterlacedColors();
			if (axisY2)
				axisY2.renderInterlacedColors();

			ctx.restore();


			axisX.renderGrid();


			if (axisY)
				axisY.renderGrid();

			if (axisY2)
				axisY2.renderGrid();


			axisX.renderAxisLine();

			if (axisY)
				axisY.renderAxisLine();

			if (axisY2)
				axisY2.renderAxisLine();
		}

	}

	Axis.prototype.renderLabelsTicksAndTitle = function () {

		var skipLabels = false;
		var totalLabelWidth = 0;
		var thresholdRatio = 1;
		var labelCount = 0;

		var intervalInPixels = this.convertionParameters.pixelPerUnit * this.interval;

		if (this.labelAngle !== 0 && this.labelAngle !== 360)
			thresholdRatio = 1.2;

		//Don't skip labels when interval is explicitely set
		if (typeof (this._options.interval) === "undefined") {
			if (this._position === "bottom" || this._position === "top") {

				//thresholdRatio = .9;// More space is preferred between labels when axis is horizontally aligned

				for (i = 0; i < this._labels.length; i++) {
					label = this._labels[i];
					if (label.position < this.minimum)
						continue;

					var width = label.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + label.textBlock.height * Math.sin(Math.PI / 180 * this.labelAngle);

					totalLabelWidth += width;
				}

				if (totalLabelWidth > this.lineCoordinates.width * thresholdRatio) {
					skipLabels = true;
				}
			} if (this._position === "left" || this._position === "right") {
				for (i = 0; i < this._labels.length; i++) {
					label = this._labels[i];
					if (label.position < this.minimum)
						continue;

					var width = label.textBlock.height * Math.cos(Math.PI / 180 * this.labelAngle) + label.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle);

					totalLabelWidth += width;
				}

				if (totalLabelWidth > this.lineCoordinates.height * thresholdRatio) {
					skipLabels = true;
				}
			}
		}

		if (this._position === "bottom") {
			var i = 0;

			this.ctx.lineWidth = this.tickThickness;
			this.ctx.strokeStyle = this.tickColor;

			var label;
			var xy;

			for (i = 0; i < this._labels.length; i++) {

				label = this._labels[i];
				if (label.position < this.minimum || label.position > this.maximum)
					continue;

				xy = this.getPixelCoordinatesOnAxis(label.position);

				if (this.tickThickness) {
					var tickX = (this.tickThickness % 2 === 1) ? (xy.x << 0) + .5 : (xy.x << 0);
					this.ctx.beginPath();
					this.ctx.moveTo(tickX, xy.y << 0);
					this.ctx.lineTo(tickX, (xy.y + this.tickLength) << 0);
					this.ctx.stroke();
				}

				if (skipLabels && labelCount++ % 2 !== 0)
					continue;

				if (label.textBlock.angle === 0) {
					xy.x -= label.textBlock.width / 2;
					//xy.y += this.tickLength + label.textBlock.height / 2;
					xy.y += this.tickLength + label.textBlock.fontSize / 2;

				} else {
					xy.x -= (this.labelAngle < 0 ? (label.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle)) : 0);
					xy.y += this.tickLength + Math.abs((this.labelAngle < 0 ? label.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : 0));
				}
				label.textBlock.x = xy.x;
				label.textBlock.y = xy.y;

				label.textBlock.render(true);
			}

			if (this.title) {

				this._titleTextBlock = new TextBlock(this.ctx, {
					x: this.lineCoordinates.x1,// This is recalculated again
					y: this.boundingRect.y2 - this.titleFontSize - 5,
					maxWidth: this.lineCoordinates.width,
					maxHeight: this.titleFontSize * 1.5,
					angle: 0,
					text: this.title,
					horizontalAlign: "center",//left, center, right
					fontSize: this.titleFontSize,//in pixels
					fontFamily: this.titleFontFamily,
					fontWeight: this.titleFontWeight, //normal, bold, bolder, lighter,
					fontColor: this.titleFontColor,
					fontStyle: this.titleFontStyle, // normal, italic, oblique
					textBaseline: "top"
				});

				this._titleTextBlock.measureText();
				this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2;
				this._titleTextBlock.y = this.boundingRect.y2 - this._titleTextBlock.height - 2;
				this._titleTextBlock.render(true);
			}
		} else if (this._position === "top") {
			var i = 0;

			this.ctx.lineWidth = this.tickThickness;
			this.ctx.strokeStyle = this.tickColor;

			var label;
			var xy;

			for (i = 0; i < this._labels.length; i++) {
				label = this._labels[i];
				if (label.position < this.minimum || label.position > this.maximum)
					continue;

				xy = this.getPixelCoordinatesOnAxis(label.position);

				if (this.tickThickness) {
					var tickX = (this.tickThickness % 2 === 1) ? (xy.x << 0) + .5 : (xy.x << 0);
					this.ctx.beginPath();
					this.ctx.moveTo(tickX, xy.y << 0);
					this.ctx.lineTo(tickX, (xy.y - this.tickLength) << 0);
					this.ctx.stroke();
				}

				if (skipLabels && labelCount++ % 2 !== 0)
					continue;

				if (label.textBlock.angle === 0) {
					xy.x -= label.textBlock.width / 2;
					xy.y -= this.tickLength + label.textBlock.height / 2;
				} else {
					xy.x -= (this.labelAngle > 0 ? (label.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle)) : 0);
					xy.y -= this.tickLength + Math.abs((this.labelAngle > 0 ? label.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) + 5 : 5));
				}
				label.textBlock.x = xy.x;
				label.textBlock.y = xy.y;

				label.textBlock.render(true);
			}

			if (this.title) {

				this._titleTextBlock = new TextBlock(this.ctx, {
					x: this.lineCoordinates.x1,// This is recalculated again
					y: this.boundingRect.y1,
					maxWidth: this.lineCoordinates.width,
					maxHeight: this.titleFontSize * 1.5,
					angle: 0,
					text: this.title,
					horizontalAlign: "center",//left, center, right
					fontSize: this.titleFontSize,//in pixels
					fontFamily: this.titleFontFamily,
					fontWeight: this.titleFontWeight, //normal, bold, bolder, lighter,
					fontColor: this.titleFontColor,
					fontStyle: this.titleFontStyle, // normal, italic, oblique
					textBaseline: "top"
				});

				this._titleTextBlock.measureText();
				this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2;
				this._titleTextBlock.render(true);
			}
		} else if (this._position === "left") {
			this.ctx.lineWidth = this.tickThickness;
			this.ctx.strokeStyle = this.tickColor;

			var label;
			var xy;
			for (var i = 0; i < this._labels.length; i++) {
				label = this._labels[i];
				if (label.position < this.minimum || label.position > this.maximum)
					continue;

				xy = this.getPixelCoordinatesOnAxis(label.position);

				if (this.tickThickness) {
					var tickY = (this.tickThickness % 2 === 1) ? (xy.y << 0) + .5 : (xy.y << 0);
					//var tickY = xy.y;
					this.ctx.beginPath();
					this.ctx.moveTo(xy.x << 0, tickY);
					this.ctx.lineTo((xy.x - this.tickLength) << 0, tickY);
					this.ctx.stroke();
				}

				if (skipLabels && labelCount++ % 2 !== 0)
					continue;

				label.textBlock.x = xy.x - (label.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle)) - this.tickLength - 5;

				if (this.labelAngle === 0) {
					label.textBlock.y = xy.y - label.textBlock.height / 2 + this.labelFontSize / 2;
				} else
					label.textBlock.y = xy.y - (label.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle));

				label.textBlock.render(true);
			}

			if (this.title) {

				this._titleTextBlock = new TextBlock(this.ctx, {
					x: this.boundingRect.x1 + 5,
					y: this.lineCoordinates.y2,
					maxWidth: this.lineCoordinates.height,
					maxHeight: this.titleFontSize * 1.5,
					angle: -90,
					text: this.title,
					horizontalAlign: "center",//left, center, right
					fontSize: this.titleFontSize,//in pixels
					fontFamily: this.titleFontFamily,
					fontWeight: this.titleFontWeight, //normal, bold, bolder, lighter,
					fontColor: this.titleFontColor,
					fontStyle: this.titleFontStyle, // normal, italic, oblique
					textBaseline: "top"
				});

				this._titleTextBlock.measureText();
				this._titleTextBlock.y = (this.lineCoordinates.height / 2 + this._titleTextBlock.width / 2 + this.lineCoordinates.y1);
				this._titleTextBlock.render(true);

			}
		} else if (this._position === "right") {
			this.ctx.lineWidth = this.tickThickness;
			this.ctx.strokeStyle = this.tickColor;

			var label;
			var xy;

			for (var i = 0; i < this._labels.length; i++) {
				label = this._labels[i];
				if (label.position < this.minimum || label.position > this.maximum)
					continue;

				xy = this.getPixelCoordinatesOnAxis(label.position);

				if (this.tickThickness) {
					var tickY = (this.tickThickness % 2 === 1) ? (xy.y << 0) + .5 : (xy.y << 0);
					//tickY = xy.y;
					this.ctx.beginPath();
					this.ctx.moveTo(xy.x << 0, tickY);
					this.ctx.lineTo((xy.x + this.tickLength) << 0, tickY);
					this.ctx.stroke();
				}

				if (skipLabels && labelCount++ % 2 !== 0)
					continue;

				label.textBlock.x = xy.x + this.tickLength + 5;
				//label.textBlock.y = xy.y - (label.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle));
				if (this.labelAngle === 0) {
					label.textBlock.y = xy.y - label.textBlock.height / 2 + this.labelFontSize / 2;
				}
				else
					label.textBlock.y = xy.y;

				label.textBlock.render(true);
			}

			if (this.title) {

				this._titleTextBlock = new TextBlock(this.ctx, {
					x: this.boundingRect.x2 - 5,
					y: this.lineCoordinates.y2,
					maxWidth: this.lineCoordinates.height,
					maxHeight: this.titleFontSize * 1.5,
					angle: 90,
					text: this.title,
					horizontalAlign: "center",//left, center, right
					fontSize: this.titleFontSize,//in pixels
					fontFamily: this.titleFontFamily,
					fontWeight: this.titleFontWeight, //normal, bold, bolder, lighter,
					fontColor: this.titleFontColor,
					fontStyle: this.titleFontStyle, // normal, italic, oblique
					textBaseline: "top"
				});

				this._titleTextBlock.measureText();
				this._titleTextBlock.y = (this.lineCoordinates.height / 2 - this._titleTextBlock.width / 2 + this.lineCoordinates.y1);
				this._titleTextBlock.render(true);

			}
		}
	}

	Axis.prototype.renderInterlacedColors = function () {
		var ctx = this.chart.plotArea.ctx;
		//return;

		var interlacedGridStartPoint;
		var interlacedGridEndPoint;
		var plotAreaCoordinates = this.chart.plotArea;
		if ((this._position === "bottom" || this._position === "top") && this.interlacedColor) {
			var i = 0;

			ctx.fillStyle = this.interlacedColor;

			for (i = 0; i < this._labels.length; i += 2) {
				interlacedGridStartPoint = this.getPixelCoordinatesOnAxis(this._labels[i].position);

				if (i + 1 >= this._labels.length)
					interlacedGridEndPoint = this.getPixelCoordinatesOnAxis(this.maximum);
				else
					interlacedGridEndPoint = this.getPixelCoordinatesOnAxis(this._labels[i + 1].position);

				ctx.fillRect(interlacedGridStartPoint.x, plotAreaCoordinates.y1, Math.abs(interlacedGridEndPoint.x - interlacedGridStartPoint.x), Math.abs(plotAreaCoordinates.y1 - plotAreaCoordinates.y2));
			}

		} else if ((this._position === "left" || this._position === "right") && this.interlacedColor) {

			ctx.fillStyle = this.interlacedColor;

			for (i = 0; i < this._labels.length; i += 2) {
				interlacedGridEndPoint = this.getPixelCoordinatesOnAxis(this._labels[i].position);

				if (i + 1 >= this._labels.length)
					interlacedGridStartPoint = this.getPixelCoordinatesOnAxis(this.maximum);
				else
					interlacedGridStartPoint = this.getPixelCoordinatesOnAxis(this._labels[i + 1].position);

				ctx.fillRect(plotAreaCoordinates.x1, interlacedGridStartPoint.y, Math.abs(plotAreaCoordinates.x1 - plotAreaCoordinates.x2), Math.abs(interlacedGridStartPoint.y - interlacedGridEndPoint.y));
			}
			//throw "123";
		}
	}

	Axis.prototype.renderGrid = function () {
		//var ctx = this.chart.plotArea.ctx;
		var ctx = this.chart.ctx;

		var xy;
		var plotAreaCoordinates = this.chart.plotArea;

		//return;

		if (this._position === "bottom" || this._position === "top") {

			if (this.gridThickness && this.gridThickness > 0) {
				ctx.lineWidth = this.gridThickness;
				ctx.strokeStyle = this.gridColor;

				ctx.beginPath();
				for (i = 0; i < this._labels.length; i++) {

					if (this._labels[i].position < this.minimum || this._labels[i].position > this.maximum)
						continue;

					xy = this.getPixelCoordinatesOnAxis(this._labels[i].position);

					var gridX = (this.gridThickness % 2 === 1) ? (xy.x << 0) + .5 : (xy.x << 0);


					ctx.moveTo(gridX, plotAreaCoordinates.y1 << 0);
					ctx.lineTo(gridX, plotAreaCoordinates.y2 << 0);
					ctx.stroke();

				}
			}

		}
		else if (this._position === "left" || this._position === "right") {

			if (this.gridThickness && this.gridThickness > 0) {
				ctx.lineWidth = this.gridThickness;
				ctx.strokeStyle = this.gridColor;

				ctx.beginPath();
				for (var i = 0; i < this._labels.length; i++) {

					if (this._labels[i].position < this.minimum || this._labels[i].position > this.maximum)
						continue;

					xy = this.getPixelCoordinatesOnAxis(this._labels[i].position);

					var gridY = (this.gridThickness % 2 === 1) ? (xy.y << 0) + .5 : (xy.y << 0);

					ctx.moveTo(plotAreaCoordinates.x1 << 0, gridY);
					ctx.lineTo(plotAreaCoordinates.x2 << 0, gridY);
					ctx.stroke();
				}
			}

		}
	}

	Axis.prototype.renderAxisLine = function () {
		//var ctx = this.chart.plotArea.ctx;
		var ctx = this.chart.ctx;

		if (this._position === "bottom" || this._position === "top") {
			if (this.lineThickness) {
				ctx.lineWidth = this.lineThickness;
				ctx.strokeStyle = this.lineColor ? this.lineColor : "black";

				var lineY = (this.lineThickness % 2 === 1) ? (this.lineCoordinates.y1 << 0) + .5 : (this.lineCoordinates.y1 << 0);

				ctx.beginPath();
				ctx.moveTo(this.lineCoordinates.x1, lineY);
				ctx.lineTo(this.lineCoordinates.x2, lineY);
				ctx.stroke();
			}

		} else if (this._position === "left" || this._position === "right") {
			if (this.lineThickness) {
				ctx.lineWidth = this.lineThickness;
				ctx.strokeStyle = this.lineColor;

				var lineX = (this.lineThickness % 2 === 1) ? (this.lineCoordinates.x1 << 0) + .5 : (this.lineCoordinates.x1 << 0);

				ctx.beginPath();
				ctx.moveTo(lineX, this.lineCoordinates.y1);
				ctx.lineTo(lineX, this.lineCoordinates.y2);
				ctx.stroke();
			}

		}
	}

	Axis.prototype.getPixelCoordinatesOnAxis = function (value) {
		var xy = {};
		var width = this.lineCoordinates.width;
		var height = this.lineCoordinates.height;

		if (this._position === "bottom" || this._position === "top") {
			var pixelPerUnit = width / Math.abs(this.maximum - this.minimum);

			xy.x = this.lineCoordinates.x1 + (pixelPerUnit * (value - this.minimum));
			xy.y = this.lineCoordinates.y1;
		}
		if (this._position === "left" || this._position === "right") {
			var pixelPerUnit = height / Math.abs(this.maximum - this.minimum);

			xy.y = this.lineCoordinates.y2 - (pixelPerUnit * (value - this.minimum));
			xy.x = this.lineCoordinates.x2;
		}

		return xy;
	}

	Axis.prototype.getXValueAt = function (pixel) {
		if (!pixel)
			return null;

		var xval = null;

		if (this._position === "left") {
			xval = (this.chart.axisX.maximum - this.chart.axisX.minimum) / this.chart.axisX.lineCoordinates.height * ((this.chart.axisX.lineCoordinates.y2 - pixel.y)) + this.chart.axisX.minimum;
		}
		else if (this._position === "bottom") {
			xval = (this.chart.axisX.maximum - this.chart.axisX.minimum) / this.chart.axisX.lineCoordinates.width * (pixel.x - this.chart.axisX.lineCoordinates.x1) + this.chart.axisX.minimum;
		}

		return xval;
	}

	Axis.prototype.calculateValueToPixelConvertionParameters = function (value) {
		var xy = {};
		var convertionParameters = { pixelPerUnit: null, minimum: null, reference: null };

		var width = this.lineCoordinates.width;
		var height = this.lineCoordinates.height;

		convertionParameters.minimum = this.minimum;

		if (this._position === "bottom" || this._position === "top") {
			convertionParameters.pixelPerUnit = width / Math.abs(this.maximum - this.minimum);
			convertionParameters.reference = this.lineCoordinates.x1;

			//xy.x = this.lineCoordinates.x1 + (pixelPerUnit * (value - this.minimum));
			//xy.y = this.lineCoordinates.y1;
		}
		if (this._position === "left" || this._position === "right") {
			convertionParameters.pixelPerUnit = -1 * height / Math.abs(this.maximum - this.minimum);
			convertionParameters.reference = this.lineCoordinates.y2;

			//xy.y = this.lineCoordinates.y2 + (pixelPerUnit * (value - this.minimum));
			//xy.x = this.lineCoordinates.x2;
		}


		this.convertionParameters = convertionParameters;
	}

	Axis.prototype.calculateAxisParameters = function () {

		var freeSpace = this.chart.layoutManager.getFreeSpace();
		var availableWidth = 0;
		var availableHeight = 0;

		if (this._position === "bottom" || this._position === "top") {
			this.maxWidth = freeSpace.width;
			this.maxHeight = freeSpace.height;
		} else {
			this.maxWidth = freeSpace.height;
			this.maxHeight = freeSpace.width;
		}

		var noTicks = this.type === "axisX" ? (this.maxWidth < 500 ? 8 : Math.max(6, Math.floor(this.maxWidth / 62))) : Math.floor(this.maxWidth / 40);
		//var noTicks = 8;
		var min, max;
		var minDiff;
		var range;

		if (this.type === "axisX") {
			min = (this.sessionVariables.internalMinimum !== null) ? this.sessionVariables.internalMinimum : this.dataInfo.viewPortMin;
			max = (this.sessionVariables.internalMaximum !== null) ? this.sessionVariables.internalMaximum : this.dataInfo.viewPortMax;

			if (max - min === 0) {
				//max += 1;
				max += .4;
				min -= .4;
			}

			if (this.dataInfo.minDiff !== Infinity)
				minDiff = this.dataInfo.minDiff;
			else
				minDiff = 1;

		} else if (this.type === "axisY") {

			min = typeof (this._options.minimum) === "undefined" ? this.dataInfo.viewPortMin : this._options.minimum;
			max = typeof (this._options.maximum) === "undefined" ? this.dataInfo.viewPortMax : this._options.maximum;

			// When there is only a single dataPoint or when all dapoints have same Y Value
			if (max - min === 0) {
				max += 5;
				min -= 5;
			}
			else {
				//var scaleFactor = Math.abs(max - min) * .01;
				if (max !== 0)
					max += Math.abs(.05);
				if (min !== 0)
					min -= Math.abs(.05);
			}


			//Apply includeZero
			if (this.includeZero && typeof (this._options.minimum) === "undefined") {
				if (min > 0)
					min = 0;
			}
			if (this.includeZero && typeof (this._options.maximum) === "undefined") {
				if (max < 0)
					max = 0;
			}
		}

		if (this.type === "axisX" && this.chart.plotInfo.axisXValueType === "dateTime") {

			range = max - min;

			if (!this.intervalType) {

				if (range / (1 * 1) <= noTicks) {
					this.interval = 1;
					this.intervalType = "millisecond";
				} else if (range / (1 * 2) <= noTicks) {
					this.interval = 2;
					this.intervalType = "millisecond";
				} else if (range / (1 * 5) <= noTicks) {
					this.interval = 5;
					this.intervalType = "millisecond";
				} else if (range / (1 * 10) <= noTicks) {
					this.interval = 10;
					this.intervalType = "millisecond";
				} else if (range / (1 * 20) <= noTicks) {
					this.interval = 20;
					this.intervalType = "millisecond";
				} else if (range / (1 * 50) <= noTicks) {
					this.interval = 50;
					this.intervalType = "millisecond";
				} else if (range / (1 * 100) <= noTicks) {
					this.interval = 100;
					this.intervalType = "millisecond";
				} else if (range / (1 * 200) <= noTicks) {
					this.interval = 200;
					this.intervalType = "millisecond";
				} else if (range / (1 * 250) <= noTicks) {
					this.interval = 250;
					this.intervalType = "millisecond";
				} else if (range / (1 * 300) <= noTicks) {
					this.interval = 300;
					this.intervalType = "millisecond";
				} else if (range / (1 * 400) <= noTicks) {
					this.interval = 400;
					this.intervalType = "millisecond";
				} else if (range / (1 * 500) <= noTicks) {
					this.interval = 500;
					this.intervalType = "millisecond";
				} else if (range / (constants.secondDuration * 1) <= noTicks) {
					this.interval = 1;
					this.intervalType = "second";
				} else if (range / (constants.secondDuration * 2) <= noTicks) {
					this.interval = 2;
					this.intervalType = "second";
				} else if (range / (constants.secondDuration * 5) <= noTicks) {
					this.interval = 5;
					this.intervalType = "second";
				} else if (range / (constants.secondDuration * 10) <= noTicks) {
					this.interval = 10;
					this.intervalType = "second";
				} else if (range / (constants.secondDuration * 15) <= noTicks) {
					this.interval = 15;
					this.intervalType = "second";
				} else if (range / (constants.secondDuration * 20) <= noTicks) {
					this.interval = 20;
					this.intervalType = "second";
				} else if (range / (constants.secondDuration * 30) <= noTicks) {
					this.interval = 30;
					this.intervalType = "second";
				} else if (range / (constants.minuteDuration * 1) <= noTicks) {
					this.interval = 1;
					this.intervalType = "minute";
				} else if (range / (constants.minuteDuration * 2) <= noTicks) {
					this.interval = 2;
					this.intervalType = "minute";
				} else if (range / (constants.minuteDuration * 5) <= noTicks) {
					this.interval = 5;
					this.intervalType = "minute";
				} else if (range / (constants.minuteDuration * 10) <= noTicks) {
					this.interval = 10;
					this.intervalType = "minute";
				} else if (range / (constants.minuteDuration * 15) <= noTicks) {
					this.interval = 15;
					this.intervalType = "minute";
				} else if (range / (constants.minuteDuration * 20) <= noTicks) {
					this.interval = 20;
					this.intervalType = "minute";
				} else if (range / (constants.minuteDuration * 30) <= noTicks) {
					this.interval = 30;
					this.intervalType = "minute";
				} else if (range / (constants.hourDuration * 1) <= noTicks) {
					this.interval = 1;
					this.intervalType = "hour";
				} else if (range / (constants.hourDuration * 2) <= noTicks) {
					this.interval = 2;
					this.intervalType = "hour";
				} else if (range / (constants.hourDuration * 3) <= noTicks) {
					this.interval = 3;
					this.intervalType = "hour";
				} else if (range / (constants.hourDuration * 6) <= noTicks) {
					this.interval = 6;
					this.intervalType = "hour";
				} else if (range / (constants.dayDuration * 1) <= noTicks) {
					this.interval = 1;
					this.intervalType = "day";
				} else if (range / (constants.dayDuration * 2) <= noTicks) {
					this.interval = 2;
					this.intervalType = "day";
				} else if (range / (constants.dayDuration * 4) <= noTicks) {
					this.interval = 4;
					this.intervalType = "day";
				} else if (range / (constants.weekDuration * 1) <= noTicks) {
					this.interval = 1;
					this.intervalType = "week";
				} else if (range / (constants.weekDuration * 2) <= noTicks) {
					this.interval = 2;
					this.intervalType = "week";
				} else if (range / (constants.weekDuration * 3) <= noTicks) {
					this.interval = 3;
					this.intervalType = "week";
				} else if (range / (constants.monthDuration * 1) <= noTicks) {
					this.interval = 1;
					this.intervalType = "month";
				} else if (range / (constants.monthDuration * 2) <= noTicks) {
					this.interval = 2;
					this.intervalType = "month";
				} else if (range / (constants.monthDuration * 3) <= noTicks) {
					this.interval = 3;
					this.intervalType = "month";
				} else if (range / (constants.monthDuration * 6) <= noTicks) {
					this.interval = 6;
					this.intervalType = "month";
				} else if (range / (constants.yearDuration * 1) <= noTicks) {
					this.interval = 1;
					this.intervalType = "year";
				} else if (range / (constants.yearDuration * 2) <= noTicks) {
					this.interval = 2;
					this.intervalType = "year";
				} else if (range / (constants.yearDuration * 4) <= noTicks) {
					this.interval = 4;
					this.intervalType = "year";
				} else {
					this.interval = Math.floor(Axis.getNiceNumber(range / (noTicks - 1), true) / constants.yearDuration);
					this.intervalType = "year";
				}

			}

			if (this.sessionVariables.internalMinimum !== null)
				this.minimum = this.sessionVariables.internalMinimum;
			else {
				this.minimum = min - minDiff / 2;
			}

			if (this.sessionVariables.internalMaximum)
				this.maximum = this.sessionVariables.internalMaximum;
			else
				this.maximum = max + minDiff / 2;

			if (!this.valueFormatString) {
				if (this.intervalType === "year") {
					this.valueFormatString = "YYYY";
				} else if (this.intervalType === "month") {
					this.valueFormatString = "MMM YYYY";
				} else if (this.intervalType === "week") {
					this.valueFormatString = "MMM DD YYYY";
				} else if (this.intervalType === "day") {
					this.valueFormatString = "MMM DD YYYY";
				} else if (this.intervalType === "hour") {
					this.valueFormatString = "hh:mm TT";
				} else if (this.intervalType === "minute") {
					this.valueFormatString = "hh:mm TT";
				} else if (this.intervalType === "second") {
					this.valueFormatString = "hh:mm:ss TT";
				} else if (this.intervalType === "millisecond") {
					this.valueFormatString = "fff'ms'";
				}
			}

			this.intervalStartPosition = this.getLabelStartPoint(new Date(this.minimum), this.intervalType, this.interval);

		} else {

			this.intervalType = "number";

			range = Axis.getNiceNumber(max - min, false);

			if (this._options && this._options.interval)
				this.interval = this._options.interval;
			else {
				this.interval = Axis.getNiceNumber(range / (noTicks - 1), true);
			}

			if (this.sessionVariables.internalMinimum !== null)
				this.minimum = this.sessionVariables.internalMinimum;
			else
				this.minimum = Math.floor(min / this.interval) * this.interval;

			if (this.sessionVariables.internalMaximum !== null)
				this.maximum = this.sessionVariables.internalMaximum;
			else
				this.maximum = Math.ceil(max / this.interval) * this.interval;

			//var nfrac = Math.max(-Math.floor(Math.log(d)/Math.LN10), 0); //number of fractional digits to show

			if (this.type === "axisX") {
				if (!(this.sessionVariables.internalMinimum !== null)) {
					this.minimum = min - minDiff / 2;
				}
				if (!this.sessionVariables.internalMaximum) {

					this.maximum = max + minDiff / 2;
				}

				this.intervalStartPosition = Math.floor((this.minimum + (this.interval * .2)) / this.interval) * this.interval;
			} else if (this.type === "axisY") {
				this.intervalStartPosition = this.minimum;
				//Apply includeZero
				//if (!(this._options && this._options.minimum) && this.includeZero) {
				//if (this.includeZero) {
				//    if (this.minimum > 0)
				//        this.minimum = 0;
				//}

				////if (!(this._options && this._options.maximum) && this.includeZero) {
				//if (this.includeZero) {
				//    if (this.maximum < 0)
				//        this.maximum = 0;
				//}
			}


		}

		if (this.type === "axisX") {
			this._absoluteMinimum = this._options && typeof (this._options.minimum) !== "undefined" ? this._options.minimum : this.dataInfo.min - minDiff / 2;
			this._absoluteMaximum = this._options && typeof (this._options.maximum) !== "undefined" ? this._options.maximum : this.dataInfo.max + minDiff / 2;
		}

		//Set valueFormatString
		if (!this.valueFormatString) {
			this.valueFormatString = "#,##0.##";

			range = Math.abs(this.maximum - this.minimum);

			if (range < 1) {
				var numberOfDecimals = Math.floor(Math.abs(Math.log(range) / Math.LN10)) + 2;

				if (numberOfDecimals > 2) {
					for (var i = 0; i < numberOfDecimals - 2; i++)
						this.valueFormatString += "#";
				}
			}

		}

		//if (isDebugMode && window.console) {
		//    window.console.log(this.type + ": Min = " + this.minimum);
		//    window.console.log(this.type + ": Max = " + this.maximum);
		//    window.console.log(this.type + ": Interval = " + this.interval);
		//}
	}

	Axis.getNiceNumber = function (x, round) {

		var exp = Math.floor(Math.log(x) / Math.LN10);
		var f = x / Math.pow(10, exp);
		var nf;

		if (round) {
			if (f < 1.5)
				nf = 1;
			else if (f < 3)
				nf = 2;
			else if (f < 7)
				nf = 5;
			else
				nf = 10;
		}
		else {
			if (f <= 1)
				nf = 1;
			else if (f <= 2)
				nf = 2;
			else if (f <= 5)
				nf = 5;
			else nf = 10;
		}

		return nf * Math.pow(10, exp);
	}

	Axis.prototype.getLabelStartPoint = function () {

		var intervalInMilliseconds = convertToNumber(this.interval, this.intervalType);
		var minimum = Math.floor((this.minimum) / intervalInMilliseconds) * intervalInMilliseconds;
		var dateTime = new Date(minimum);

		if (this.intervalType === "millisecond") {
			//millisecond = dateTime.getMilliSecond();
			//millisecond = Math.floor((millisecond + this.interval) / this.interval) * this.interval;
		}
		else if (this.intervalType === "second") {
			if (dateTime.getMilliseconds() > 0) {
				dateTime.setSeconds(dateTime.getSeconds() + 1);
				dateTime.setMilliseconds(0);
			}
		}
		else if (this.intervalType === "minute") {
			if (dateTime.getSeconds() > 0 || dateTime.getMilliseconds() > 0) {
				dateTime.setMinutes(dateTime.getMinutes() + 1);
				dateTime.setSeconds(0);
				dateTime.setMilliseconds(0);
			}
		}
		else if (this.intervalType === "hour") {
			if (dateTime.getMinutes() > 0 || dateTime.getSeconds() > 0 || dateTime.getMilliseconds() > 0) {
				dateTime.setHours(dateTime.getHours() + 1);
				dateTime.setMinutes(0);
				dateTime.setSeconds(0);
				dateTime.setMilliseconds(0);
			}
		}
		else if (this.intervalType === "day") {
			if (dateTime.getHours() > 0 || dateTime.getMinutes() > 0 || dateTime.getSeconds() > 0 || dateTime.getMilliseconds() > 0) {
				dateTime.setDate(dateTime.getDate() + 1);
				dateTime.setHours(0);
				dateTime.setMinutes(0);
				dateTime.setSeconds(0);
				dateTime.setMilliseconds(0);
			}
		}
		else if (this.intervalType === "week") {
			if (dateTime.getDay() > 0 || dateTime.getHours() > 0 || dateTime.getMinutes() > 0 || dateTime.getSeconds() > 0 || dateTime.getMilliseconds() > 0) {
				dateTime.setDate(dateTime.getDate() + (7 - dateTime.getDay()));
				dateTime.setHours(0);
				dateTime.setMinutes(0);
				dateTime.setSeconds(0);
				dateTime.setMilliseconds(0);
			}
		}
		else if (this.intervalType === "month") {
			if (dateTime.getDate() > 1 || dateTime.getHours() > 0 || dateTime.getMinutes() > 0 || dateTime.getSeconds() > 0 || dateTime.getMilliseconds() > 0) {
				dateTime.setMonth(dateTime.getMonth() + 1);
				dateTime.setDate(1);
				dateTime.setHours(0);
				dateTime.setMinutes(0);
				dateTime.setSeconds(0);
				dateTime.setMilliseconds(0);
			}
		}
		else if (this.intervalType === "year") {
			if (dateTime.getMonth() > 0 || dateTime.getDate() > 1 || dateTime.getHours() > 0 || dateTime.getMinutes() > 0 || dateTime.getSeconds() > 0 || dateTime.getMilliseconds() > 0) {
				dateTime.setFullYear(dateTime.getFullYear() + 1);
				dateTime.setMonth(0);
				dateTime.setDate(1);
				dateTime.setHours(0);
				dateTime.setMinutes(0);
				dateTime.setSeconds(0);
				dateTime.setMilliseconds(0);
			}
		}

		return dateTime;
	}

	//#endregion Axis

	//#region ToolTip

	function ToolTip(chart, options, theme) {
		ToolTip.parent.constructor.call(this, "ToolTip", options, theme);

		this.chart = chart;
		this.canvas = chart.canvas;
		this.ctx = this.chart.ctx;
		this.currentSeriesIndex = -1;
		this.currentDataPointIndex = -1;
		this._timerId = 0;
		this._prevX = NaN;
		this._prevY = NaN;

		this._initialize();
	}
	extend(ToolTip, CanvasJSObject);

	ToolTip.prototype._initialize = function () {

		if (this.enabled) {
			this.container = document.createElement("div");
			this.container.setAttribute("class", "canvasjs-chart-tooltip");
			this.container.style.position = "absolute";
			this.container.style.height = "auto";
			this.container.style.boxShadow = "1px 1px 2px 2px rgba(0,0,0,0.1)";
			this.container.style.zIndex = "1000";
			//this.container.style.pointerEvents = "none";
			this.container.style.display = "none";
			//this.container.style.whiteSpace = "no-wrap";

			var toolTipHtml = "<div style=\" width: auto;";
			toolTipHtml += "height: auto;";
			toolTipHtml += "min-width: 50px;";
			toolTipHtml += "line-height: 20px;";
			toolTipHtml += "padding: 5px;";
			toolTipHtml += "font-family: Calibri, Arial, Georgia, serif;";
			toolTipHtml += "font-weight: 400;";
			toolTipHtml += "font-style: " + (isCanvasSupported ? "italic;" : "normal;");
			toolTipHtml += "font-size: 14px;";
			toolTipHtml += "color: #000000;";
			toolTipHtml += "text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);";
			toolTipHtml += "text-align: left;";
			toolTipHtml += "border: 2px solid gray;";

			//Older browsers like IE8- don't support alpha values
			toolTipHtml += isCanvasSupported ? "background: rgba(255,255,255,.9);" : "background: rgb(255,255,255);";

			toolTipHtml += "text-indent: 0px;";
			toolTipHtml += "white-space: nowrap;";
			//toolTipHtml += "pointer-events:none;";
			toolTipHtml += "border-radius: 10px;";
			//toolTipHtml += "opacity: 0;";
			//toolTipHtml += "filter: progid: DXImageTransform.Microsoft.gradient(GradientType = 0, startColorstr = '#4cffffff', endColorstr = '#4cffffff');";

			if (!isCanvasSupported) {
				//toolTipHtml += "-ms-filter:'progid:DXImageTransform.Microsoft.Alpha(Opacity=90)'";
				//-ms-filter: "progid:DXImageTransform.Microsoft.Shadow(Strength=4, Direction=135, Color='#000000')";
				/* For IE 5.5 - 7 */
				toolTipHtml += "filter: alpha(opacity = 90);";
				toolTipHtml += "filter: progid:DXImageTransform.Microsoft.Shadow(Strength=3, Direction=135, Color='#666666');";
			}

			toolTipHtml += "} \"> Sample Tooltip</div>";

			this.container.innerHTML = toolTipHtml;
			this.contentDiv = this.container.firstChild;


			this.container.style.borderRadius = this.contentDiv.style.borderRadius;
			this.chart._canvasJSContainer.appendChild(this.container);
		}
	}

	ToolTip.prototype.mouseMoveHandler = function (x, y) {

		if (!(this._lastUpdated && (new Date().getTime() - this._lastUpdated) < 40)) {
			this._lastUpdated = new Date().getTime();
			this._updateToolTip(x, y);
		}
	}

	ToolTip.prototype._updateToolTip = function (mouseX, mouseY) {
		//return;

		if (!this.enabled)
			return;

		if (typeof (mouseX) === "undefined" || typeof (mouseY) === "undefined") {
			if (isNaN(this._prevX) || isNaN(this._prevY))
				return;
			else {
				mouseX = this._prevX;
				mouseY = this._prevY;
			}
		} else {
			this._prevX = mouseX;
			this._prevY = mouseY;
		}


		var dataPoint = null;
		var dataSeries = null;
		var toolTipContent = "";
		var entries = [];
		var toolTipRight;
		var toolTipBottom;
		var x = 0;

		if (this.shared && this.chart.plotInfo.axisPlacement !== "none") {
			// && this.chart.plotInfo.axisPlacement !== "none"
			if (this.chart.plotInfo.axisPlacement === "xySwapped") {
				x = (this.chart.axisX.maximum - this.chart.axisX.minimum) / this.chart.axisX.lineCoordinates.height * ((this.chart.axisX.lineCoordinates.y2 - mouseY)) + this.chart.axisX.minimum;
			}
			else {
				x = (this.chart.axisX.maximum - this.chart.axisX.minimum) / this.chart.axisX.lineCoordinates.width * (mouseX - this.chart.axisX.lineCoordinates.x1) + this.chart.axisX.minimum;
			}

			var nearbyEntries = [];

			for (var i = 0; i < this.chart.data.length; i++) {
				var entry = this.chart.data[i].getDataPointAtX(x, true);

				if (entry && entry.index >= 0) {
					entry.dataSeries = this.chart.data[i];

					nearbyEntries.push(entry);
				}
			}

			if (nearbyEntries.length === 0)
				return;

			nearbyEntries.sort(function (entry1, entry2) {
				return entry1.distance - entry2.distance;
			});

			var closest = nearbyEntries[0];

			for (i = 0; i < nearbyEntries.length; i++) {

				if (nearbyEntries[i].dataPoint.x.valueOf() === closest.dataPoint.x.valueOf())
					entries.push(nearbyEntries[i]);
			}

			nearbyEntries = null;

		} else {

			var dataPointInfo = this.chart.getDataPointAtXY(mouseX, mouseY, true);
			//dataPointInfo = null;

			if (dataPointInfo) {
				this.currentDataPointIndex = dataPointInfo.dataPointIndex;
				this.currentSeriesIndex = dataPointInfo.dataSeries.index;
			} else if (isCanvasSupported) {

				var id = getObjectId(mouseX, mouseY, this.chart._eventManager.ghostCtx);
				if (id > 0 && typeof this.chart._eventManager.objectMap[id] !== "undefined") {//DataPoint/DataSeries event
					eventObject = this.chart._eventManager.objectMap[id];

					//if (this.currentSeriesIndex === eventObject.dataSeriesIndex && this.currentDataPointIndex === eventObject.dataPointIndex)
					//  return;
					//else {
					this.currentSeriesIndex = eventObject.dataSeriesIndex;
					this.currentDataPointIndex = eventObject.dataPointIndex >= 0 ? eventObject.dataPointIndex : -1;
					//}

					//window.console.log("id: " + id + "; hex: " + intToHexColorString(id));
				} else
					this.currentDataPointIndex = -1;

			} else
				this.currentDataPointIndex = -1;


			if (this.currentSeriesIndex >= 0) {

				dataSeries = this.chart.data[this.currentSeriesIndex];

				var entry = {};

				if (this.currentDataPointIndex >= 0) {
					dataPoint = dataSeries.dataPoints[this.currentDataPointIndex];

					entry.dataSeries = dataSeries;
					entry.dataPoint = dataPoint;
					entry.index = this.currentDataPointIndex;
					entry.distance = Math.abs(dataPoint.x - x);
				} else if (dataSeries.type === "line" || dataSeries.type === "stepLine" || dataSeries.type === "spline" || dataSeries.type === "area" || dataSeries.type === "stepArea" || dataSeries.type === "splineArea" || dataSeries.type === "stackedArea" || dataSeries.type === "stackedArea100") {
					var x = (this.chart.axisX.maximum - this.chart.axisX.minimum) / this.chart.axisX.lineCoordinates.width * (mouseX - this.chart.axisX.lineCoordinates.x1) + this.chart.axisX.minimum.valueOf();

					entry = dataSeries.getDataPointAtX(x, true);
					entry.dataSeries = dataSeries;
					this.currentDataPointIndex = entry.index;
					dataPoint = entry.dataPoint;
				} else {
					//this.hide();
					return;
				}

				entries.push(entry);
			}
		}


		if (entries.length > 0) {

			this.highlightObjects(entries);


			var toolTipInnerHtml = "";

			toolTipInnerHtml = this.getToolTipInnerHTML({ entries: entries });

			this.contentDiv.innerHTML = toolTipInnerHtml;

			this.contentDiv.innerHTML = toolTipInnerHtml;

			var previouslyHidden = false;
			if (this.container.style.display === "none") {
				previouslyHidden = true;
				this.container.style.display = "block";
			}

			try {
				this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.borderColor ? this.borderColor : entries[0].dataPoint.color ? entries[0].dataPoint.color : entries[0].dataSeries.color ? entries[0].dataSeries.color : entries[0].dataSeries._colorSet[entries[0].index % entries[0].dataSeries._colorSet.length];
			} catch (e) { }

			//var toolTipContent = dataSeries.toolTipContent ? dataSeries.toolTipContent : dataPoint.toolTipContent ? dataPoint.toolTipContent : "<strong>{x}</strong><br/><strong style='\"'color:{color};'\"'>{name}</strong>,&nbsp;&nbsp;<strong>y</strong>:{y}";

			//var toolTipInnerHtml = " x: " + (this.chart.plotInfo.axisXValueType === "dateTime" ? dateFormat(searchResult.dataPoint.x, this.chart.axisX.valueFormatString) : numberFormat(searchResult.dataPoint.x, this.chart.axisX.valueFormatString)) + ", y: " + numberFormat(searchResult.dataPoint.y, "#,###0.##");
			if (entries[0].dataSeries.type === "pie" || entries[0].dataSeries.type === "doughnut" || entries[0].dataSeries.type === "bar" || entries[0].dataSeries.type === "stackedBar" || entries[0].dataSeries.type === "stackedBar100") {
				//toolTipRight = mouseX - 10;
				toolTipLeft = mouseX - 10 - this.container.clientWidth;
			} else {
				//toolTipRight = (((this.chart.axisX.lineCoordinates.width / Math.abs(this.chart.axisX.maximum - this.chart.axisX.minimum)) * Math.abs(entries[0].dataPoint.x - this.chart.axisX.minimum)) + this.chart.axisX.lineCoordinates.x1 + .5) << 0;
				toolTipLeft = (((this.chart.axisX.lineCoordinates.width / Math.abs(this.chart.axisX.maximum - this.chart.axisX.minimum)) * Math.abs(entries[0].dataPoint.x - this.chart.axisX.minimum)) + this.chart.axisX.lineCoordinates.x1 + .5) - this.container.clientWidth << 0;
				toolTipLeft -= 10;
			}

			//toolTipRight = (toolTipRight - 10 - this.container.clientWidth) > 0 ? (this.chart.width - toolTipRight + 10) + "px" : (this.chart.width - toolTipRight + (toolTipRight - 10 - this.container.clientWidth)) + "px";
			//toolTipRight = (toolTipRight - 10 - this.container.clientWidth) > 0 ? (this.chart.width - toolTipRight + 10) + "px" : (this.chart.width - toolTipRight + (toolTipRight - 10 - this.container.clientWidth)) + "px";
			toolTipLeft = toolTipLeft > 0 ? toolTipLeft + "px" : toolTipLeft + this.container.clientWidth + 20 + "px";


			if (entries.length === 1 && !this.shared && (entries[0].dataSeries.type === "line" || entries[0].dataSeries.type === "stepLine" || entries[0].dataSeries.type === "spline" || entries[0].dataSeries.type === "area" || entries[0].dataSeries.type === "stepArea" || entries[0].dataSeries.type === "splineArea" || entries[0].dataSeries.type === "stackedArea" || entries[0].dataSeries.type === "stackedArea100")) {
				toolTipBottom = (entries[0].dataSeries.axisY.lineCoordinates.y2 - entries[0].dataSeries.axisY.lineCoordinates.height / Math.abs(entries[0].dataSeries.axisY.maximum - entries[0].dataSeries.axisY.minimum) * Math.abs(entries[0].dataPoint.y - entries[0].dataSeries.axisY.minimum) + .5) << 0;
			} else if (entries[0].dataSeries.type === "bar" || entries[0].dataSeries.type === "stackedBar" || entries[0].dataSeries.type === "stackedBar100") {
				toolTipBottom = (entries[0].dataSeries.axisX.lineCoordinates.y2 - entries[0].dataSeries.axisX.lineCoordinates.height / Math.abs(entries[0].dataSeries.axisX.maximum - entries[0].dataSeries.axisX.minimum) * Math.abs(entries[0].dataPoint.x - entries[0].dataSeries.axisX.minimum) + .5) << 0;
			}
			else {
				toolTipBottom = mouseY;
			}

			toolTipBottom = (-toolTipBottom + 10);

			if (toolTipBottom + this.container.clientHeight + 5 > 0) {
				toolTipBottom -= toolTipBottom + this.container.clientHeight + 5 - 0
			}

			toolTipBottom += "px";

			//this.container.style.right = toolTipRight;
			this.container.style.left = toolTipLeft;
			this.container.style.bottom = toolTipBottom;

			if (!this.animationEnabled || previouslyHidden) {
				this.disableAnimation();
			}
			else
				this.enableAnimation();

			//if (isDebugMode)
			//  console.log("searchX: " + x + " x: " + searchResult.dataPoint.x + "; y: " + searchResult.dataPoint.y + "; distance: " + searchResult.distance + "; steps: " + steps);
		}
	}


	ToolTip.prototype.highlightObjects = function (entries) {

		if (!this.enabled)
			return;

		//this.chart.overlaidCanvasCtx.clearRect(0, 0, this.chart.overlaidCanvas.width, this.chart.overlaidCanvas.height);
		var overlaidCanvasCtx = this.chart.overlaidCanvasCtx;
		this.chart.resetOverlayedCanvas();

		overlaidCanvasCtx.save();


		var plotArea = this.chart.plotArea;
		overlaidCanvasCtx.rect(plotArea.x1, plotArea.y1, plotArea.width, plotArea.height);
		overlaidCanvasCtx.clip();
		overlaidCanvasCtx.beginPath();


		for (var i = 0; i < entries.length; i++) {

			var entry = entries[i];

			var eventObject = this.chart._eventManager.objectMap[entry.dataSeries.dataPointIds[entry.index]];

			if (!eventObject || !eventObject.objectType || eventObject.objectType !== "dataPoint")
				continue;

			var dataSeries = this.chart.data[eventObject.dataSeriesIndex];
			var dataPoint = this.chart.data[eventObject.dataPointIndex];
			var index = eventObject.dataPointIndex;

			if (dataSeries.type === "line" || dataSeries.type === "stepLine" || dataSeries.type === "spline" || dataSeries.type === "scatter"
				|| dataSeries.type === "area" || dataSeries.type === "stepArea" || dataSeries.type === "splineArea" || dataSeries.type === "stackedArea" || dataSeries.type === "stackedArea100") {
				var markerProps = dataSeries.getMarkerProperties(index, eventObject.x1, eventObject.y1, this.chart.overlaidCanvasCtx);
				markerProps.size = Math.max(markerProps.size * 1.5 << 0, 10);

				markerProps.borderColor = markerProps.borderColor || "#FFFFFF";
				markerProps.borderThickness = markerProps.borderThickness || Math.ceil(markerProps.size * .1);

				//overlaidCanvasCtx.globalAlpha = .8;
				RenderHelper.drawMarkers([markerProps]);
				//overlaidCanvasCtx.globalAlpha = .8;
			} else if (dataSeries.type === "bubble") {
				var markerProps = dataSeries.getMarkerProperties(index, eventObject.x1, eventObject.y1, this.chart.overlaidCanvasCtx);
				markerProps.size = eventObject.size;
				markerProps.color = "white";
				markerProps.borderColor = "white";
				//markerProps.borderThickness = 2;
				overlaidCanvasCtx.globalAlpha = .3;
				RenderHelper.drawMarkers([markerProps]);
				overlaidCanvasCtx.globalAlpha = 1;
			} else if (dataSeries.type === "column" || dataSeries.type === "stackedColumn" || dataSeries.type === "stackedColumn100"
				|| dataSeries.type === "bar" || dataSeries.type === "stackedBar" || dataSeries.type === "stackedBar100") {
				overlaidCanvasCtx.globalAlpha = .3;
				drawRect(overlaidCanvasCtx, eventObject.x1, eventObject.y1, eventObject.x2, eventObject.y2, "white", false, false, false, false);
				overlaidCanvasCtx.globalAlpha = 1;
			}
			else if (dataSeries.type === "pie" || dataSeries.type === "doughnut") {
				overlaidCanvasCtx.globalAlpha = .3;
				drawSegment(overlaidCanvasCtx, eventObject.center, eventObject.radius, "white", dataSeries.type, eventObject.startAngle, eventObject.endAngle);
				overlaidCanvasCtx.globalAlpha = 1;
			}
			continue;
		}

		overlaidCanvasCtx.globalAlpha = 1;

		overlaidCanvasCtx.restore();
		return;
	}

	ToolTip.prototype.getToolTipInnerHTML = function (e) {
		var entries = e.entries;
		var toolTipInnerHtml = "";
		var dataSeries = null;
		var dataPoint = null;
		var index = 0;
		var color = null;
		var toolTipContent = "";

		var isToolTipDefinedInData = true;
		for (var i = 0; i < entries.length; i++) {
			if (entries[i].dataSeries.toolTipContent || entries[i].dataPoint.toolTipContent) {
				isToolTipDefinedInData = false;
				break;
			}
		}

		if (isToolTipDefinedInData && this.content && typeof (this.content) === "function") {

			toolTipInnerHtml = this.content({ entries: entries });

		} else {

			if (entries.length > 1) {

				for (var i = 0; i < entries.length; i++) {
					dataSeries = entries[i].dataSeries;
					dataPoint = entries[i].dataPoint;
					index = entries[i].index;

					toolTipContent = "";

					if (i === 0 && isToolTipDefinedInData && !this.content) {
						toolTipContent += typeof (this.chart.axisX.labels[dataPoint.x]) !== "undefined" ? this.chart.axisX.labels[dataPoint.x] : "{x}";
						toolTipContent += "</br>";
					}

					if (dataSeries.type === "line" || dataSeries.type === "stepLine" || dataSeries.type === "spline" || dataSeries.type === "area" || dataSeries.type === "stepArea" || dataSeries.type === "splineArea" || dataSeries.type === "column" || dataSeries.type === "bar" || dataSeries.type === "scatter"
					|| dataSeries.type === "stackedColumn" || dataSeries.type === "stackedColumn100" || dataSeries.type === "stackedBar" || dataSeries.type === "stackedBar100"
					|| dataSeries.type === "stackedArea" || dataSeries.type === "stackedArea100") {
						toolTipContent += dataPoint.toolTipContent ? dataPoint.toolTipContent : dataSeries.toolTipContent ? dataSeries.toolTipContent : this.content && typeof (this.content) !== "function" ? this.content : "<span style='\"'color:{color};'\"'>{name}:</span>&nbsp;&nbsp;{y}";
					} else if (dataSeries.type === "bubble") {
						toolTipContent += dataPoint.toolTipContent ? dataPoint.toolTipContent : dataSeries.toolTipContent ? dataSeries.toolTipContent : this.content && typeof (this.content) !== "function" ? this.content : "<span style='\"'color:{color};'\"'>{name}:</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}";
					} else if (dataSeries.type === "pie" || dataSeries.type === "doughnut") {
						toolTipContent += dataPoint.toolTipContent ? dataPoint.toolTipContent : dataSeries.toolTipContent ? dataSeries.toolTipContent : this.content && typeof (this.content) !== "function" ? this.content : "&nbsp;&nbsp;{y}";
					}

					toolTipInnerHtml += this.chart.replaceKeywordsWithValue(toolTipContent, dataPoint, dataSeries, index);

					if (i < entries.length - 1)
						toolTipInnerHtml += "</br>";
				}
			} else {

				dataSeries = entries[0].dataSeries;
				dataPoint = entries[0].dataPoint;
				index = entries[0].index;

				//color = dataPoint.color ? dataPoint.color : dataSeries.color ? dataSeries.color : dataSeries._colorSet[index % dataSeries._colorSet.length];

				if (dataSeries.type === "line" || dataSeries.type === "stepLine" || dataSeries.type === "spline" || dataSeries.type === "area" || dataSeries.type === "stepArea" || dataSeries.type === "splineArea" || dataSeries.type === "column" || dataSeries.type === "bar" || dataSeries.type === "scatter"
					|| dataSeries.type === "stackedColumn" || dataSeries.type === "stackedColumn100" || dataSeries.type === "stackedBar" || dataSeries.type === "stackedBar100"
					|| dataSeries.type === "stackedArea" || dataSeries.type === "stackedArea100") {
					toolTipContent = dataPoint.toolTipContent ? dataPoint.toolTipContent : dataSeries.toolTipContent ? dataSeries.toolTipContent : this.content && typeof (this.content) !== "function" ? this.content : "<span style='\"'color:{color};'\"'>" + (dataPoint.label ? "{label}" : "{x}") + " :</span>&nbsp;&nbsp;{y}";
				} else if (dataSeries.type === "bubble") {
					toolTipContent = dataPoint.toolTipContent ? dataPoint.toolTipContent : dataSeries.toolTipContent ? dataSeries.toolTipContent : this.content && typeof (this.content) !== "function" ? this.content : "<span style='\"'color:{color};'\"'>" + (dataPoint.label ? "{label}" : "{x}") + ":</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}";
				} else if (dataSeries.type === "pie" || dataSeries.type === "doughnut") {
					toolTipContent = dataPoint.toolTipContent ? dataPoint.toolTipContent : dataSeries.toolTipContent ? dataSeries.toolTipContent : this.content && typeof (this.content) !== "function" ? this.content : (dataPoint.name ? "{name}:&nbsp;&nbsp;" : dataPoint.label ? "{label}:&nbsp;&nbsp;" : "") + "{y}";
				}

				toolTipInnerHtml += this.chart.replaceKeywordsWithValue(toolTipContent, dataPoint, dataSeries, index);
			}
		}

		return toolTipInnerHtml;
	}

	ToolTip.prototype.enableAnimation = function () {
		if (this.container.style.WebkitTransition)
			return;

		//this.container.style.WebkitTransition = "right .2s ease-out, bottom .2s ease-out";
		//this.container.style.MozTransition = "right .2s ease-out, bottom .2s ease-out";
		//this.container.style.MsTransition = "right .2s ease-out, bottom .2s ease-out";
		//this.container.style.transition = "right .2s ease-out, bottom .2s ease-out";
		this.container.style.WebkitTransition = "left .2s ease-out, bottom .2s ease-out";
		this.container.style.MozTransition = "left .2s ease-out, bottom .2s ease-out";
		this.container.style.MsTransition = "left .2s ease-out, bottom .2s ease-out";
		this.container.style.transition = "left .2s ease-out, bottom .2s ease-out";
	}

	ToolTip.prototype.disableAnimation = function () {
		if (!this.container.style.WebkitTransition)
			return;

		this.container.style.WebkitTransition = "";
		this.container.style.MozTransition = "";
		this.container.style.MsTransition = "";
		this.container.style.transition = "";
	}

	ToolTip.prototype.hide = function () {
		if (!this.enabled)
			return;

		this.container.style.display = "none";
		this.currentSeriesIndex = -1;
		this._prevX = NaN;
		this._prevY = NaN;
		//this.chart.overlaidCanvasCtx.clearRect(0, 0, this.chart.overlaidCanvas.width, this.chart.overlaidCanvas.height);
		this.chart.resetOverlayedCanvas();
	}

	Chart.prototype.replaceKeywordsWithValue = function (str, dp, ds, index) {
		var regex = /\{\s*[a-zA-Z]+\s*\}|"[^"]*"|'[^']*'/g;
		var chart = this;

		var fcn = function ($0) {
			if (($0[0] === "\"" && $0[$0.length - 1] === "\"") || ($0[0] === "\'" && $0[$0.length - 1] === "\'"))
				return $0.slice(1, $0.length - 1);

			var key = trimString($0.slice(1, $0.length - 1));
			var obj = null;

			if (key === "color") {
				return dp.color ? dp.color : ds.color ? ds.color : ds._colorSet[index % ds._colorSet.length];
			}

			if (dp.hasOwnProperty(key))
				obj = dp;
			else if (ds.hasOwnProperty(key))
				obj = ds;
			else return "";

			if (key === "x") {
				if (chart.axisX && chart.plotInfo.axisXValueType === "dateTime")
					return dateFormat(obj[key], dp.xValueFormatString ? dp.xValueFormatString : ds.xValueFormatString ? ds.xValueFormatString : chart.axisX && chart.axisX.valueFormatString ? chart.axisX.valueFormatString : "DD MMM YY", chart._cultureInfo);
				else
					return numberFormat(obj[key], dp.xValueFormatString ? dp.xValueFormatString : ds.xValueFormatString ? ds.xValueFormatString : "#,##0.########", chart._cultureInfo);
			} else if (key === "y")
				return numberFormat(obj[key], dp.yValueFormatString ? dp.yValueFormatString : ds.yValueFormatString ? ds.yValueFormatString : "#,##0.########", chart._cultureInfo);
			else
				return obj[key];
		}

		return str.replace(regex, fcn);
	}


	//#endregion ToolTip

	//#region Event Manager

	function EventManager(chart) {
		this.chart = chart;
		this.lastObjectId = 0;
		var _this = this;
		this.objectMap = [];
		this.rectangularRegionEventSubscriptions = [];
		this.previousDataPointEventObject = null;
		//this.previousDataSeriesEventObject = null;

		this.ghostCanvas = createCanvas(this.chart.width, this.chart.height);
		//this.ghostCanvas.width = this.chart.width;
		//this.ghostCanvas.height = this.chart.height;

		this.ghostCtx = this.ghostCanvas.getContext("2d");

		var eventHandler = function (ev) {
			_this.mouseEventHandler.call(_this, ev);
		};

		//this.chart.canvas.addEventListener("mouseover", eventHandler);
		//this.chart.canvas.addEventListener("mousemove", eventHandler);
		//this.chart.canvas.addEventListener("mouseout", eventHandler);
		//this.chart.canvas.addEventListener("click", eventHandler);
	}

	EventManager.prototype.reset = function () {
		this.lastObjectId = 0;
		this.objectMap = [];
		this.rectangularRegionEventSubscriptions = [];
		this.previousDataPointEventObject = null;

		//this.ghostCanvas.width = this.chart.width;
		//this.ghostCanvas.height = this.chart.height;

		if (isCanvasSupported) {
			this.ghostCtx.clearRect(0, 0, this.chart.width, this.chart.height);
			this.ghostCtx.beginPath();
		}
	}

	EventManager.prototype.getNewObjectTrackingId = function () {
		return ++this.lastObjectId;
	}

	EventManager.prototype.mouseEventHandler = function (ev) {

		//return;

		if (ev.type !== "mousemove" && ev.type !== "click")
			return;

		var eventObject = null;
		var dataSeries = null;
		var dataPoint = null;
		var dataPointIndex = -1;
		var mouseOutPreviousDataPoint = false;
		var mouseOutPreviousDataSeries = false;
		var xy = getMouseCoordinates(ev);
		var id = null;

		//console.log(ev.type);

		//var imageData = this.ghostCtx.getImageData(xy.x, xy.y, 1, 1);
		//var pix = imageData.data;
		var dataPointInfo = null;

		dataPointInfo = this.chart.getDataPointAtXY(xy.x, xy.y, false);

		if (dataPointInfo) {
			id = dataPointInfo.dataSeries.dataPointIds[dataPointInfo.dataPointIndex];
		}
		else if (isCanvasSupported) {//IE9+
			id = getObjectId(xy.x, xy.y, this.ghostCtx);
		}

		var plotArea = this.chart.plotArea;

		//Enter only if mouse is inside plotArea. Else file mouseout event for previous dataPoints
		if (id && (xy.x > plotArea.x1 && xy.x < plotArea.x2 && xy.y > plotArea.y1 && xy.y < plotArea.y2)) {//DataPoint/DataSeries event
			//var id = RGBToInt(pix[0], pix[1], pix[2]);

			if (typeof this.objectMap[id] !== "undefined" && (this.objectMap[id].objectType === "dataPoint")) {
				eventObject = this.objectMap[id];
				dataSeries = this.chart.data[eventObject.dataSeriesIndex];
				dataPoint = dataSeries.dataPoints[eventObject.dataPointIndex];
				dataPointIndex = eventObject.dataPointIndex;

				//var logString = xy.x.toString() + ", " + xy.y.toString() + " RGB:" + pix[0].toString() + ", " + pix[1].toString() + ", " + pix[2].toString() + ", " + pix[3].toString()
				//    + " hex: " + intToHexColorString(id) + " dataPoint: [" + dataPoint.x.toString() + ", " + dataPoint.y.toString() + ", " + dataPoint.hexColor + "]";

				//if (this.previousDataPointEventObject) {
				//    logString += "  ds: " + this.previousDataPointEventObject.dataSeriesIndex + " dp: " + this.previousDataPointEventObject.dataPointIndex;
				//}
				//console.log(logString);

				if (this.previousDataPointEventObject === null
					|| this.previousDataPointEventObject.dataSeriesIndex !== eventObject.dataSeriesIndex
					|| this.previousDataPointEventObject.dataPointIndex !== eventObject.dataPointIndex) {

					if (this.previousDataPointEventObject) {
						mouseOutPreviousDataPoint = true;
					}

					if (dataPoint.mouseover) {

						dataPoint.mouseover.call(dataPoint, { x: xy.x, y: xy.y, dataPoint: dataPoint, dataSeries: dataSeries, dataPointIndex: dataPointIndex });
					}

					if (dataSeries.mouseover && (this.previousDataPointEventObject === null || this.previousDataPointEventObject.dataSeriesIndex !== eventObject.dataSeriesIndex)) {

						if (dataSeries.mouseover)
							dataSeries.mouseover.call(dataSeries, { x: xy.x, y: xy.y, dataPoint: dataPoint, dataSeries: dataSeries, dataPointIndex: dataPointIndex });

						if (this.previousDataPointEventObject)
							mouseOutPreviousDataSeries = true;
					}
				}


				if (ev.type === "mousemove") {
					if (dataPoint.cursor && dataPoint.cursor !== ev.target.style.cursor) {
						ev.target.style.cursor = dataPoint.cursor;
					} else if (dataSeries.cursor && dataSeries.cursor !== ev.target.style.cursor) {
						ev.target.style.cursor = dataSeries.cursor;
					}

					if (dataPoint.mousemove)
						dataPoint.mousemove.call(dataPoint, { x: xy.x, y: xy.y, dataPoint: dataPoint, dataSeries: dataSeries, dataPointIndex: dataPointIndex });

					if (dataSeries.mousemove)
						dataSeries.mousemove.call(dataSeries, { x: xy.x, y: xy.y, dataPoint: dataPoint, dataSeries: dataSeries, dataPointIndex: dataPointIndex });

				} else if (ev.type === "click") {

					var distanceTravelled = Math.sqrt(Math.pow(this.chart.dragStartPoint.x - xy.x, 2) + Math.pow(this.chart.dragStartPoint.y - xy.y, 2));
					if (distanceTravelled < 5) {

						if (dataPoint.click)
							dataPoint.click.call(dataPoint, { x: xy.x, y: xy.y, dataPoint: dataPoint, dataSeries: dataSeries, dataPointIndex: dataPointIndex });

						if (dataSeries.click)
							dataSeries.click.call(dataSeries, { x: xy.x, y: xy.y, dataPoint: dataPoint, dataSeries: dataSeries, dataPointIndex: dataPointIndex });

						if (this.chart.pieDoughnutClickHandler) {
							this.chart.pieDoughnutClickHandler.call(dataSeries, { x: xy.x, y: xy.y, dataPoint: dataPoint, dataSeries: dataSeries, dataPointIndex: dataPointIndex });
						}
					}

				}

			} else if (this.previousDataPointEventObject) {
				mouseOutPreviousDataPoint = true;
				mouseOutPreviousDataSeries = true;
			}
		} else if (this.previousDataPointEventObject) {
			mouseOutPreviousDataPoint = true;
			mouseOutPreviousDataSeries = true;
		}


		if (mouseOutPreviousDataPoint || mouseOutPreviousDataSeries) {

			ev.target.style.cursor = this.chart._defaultCursor;

			var previousDataSeries = this.chart.data[this.previousDataPointEventObject.dataSeriesIndex];
			var previousDataPoint = previousDataSeries.dataPoints[this.previousDataPointEventObject.dataPointIndex];
			var previousDataPointIndex = this.previousDataPointEventObject.dataPointIndex;

			if (mouseOutPreviousDataPoint && previousDataPoint.mouseout)
				previousDataPoint.mouseout.call(previousDataPoint, { x: xy.x, y: xy.y, dataPoint: previousDataPoint, dataSeries: previousDataSeries, dataPointIndex: previousDataPointIndex });

			if (mouseOutPreviousDataSeries && previousDataSeries.mouseout)
				previousDataSeries.mouseout.call(previousDataSeries, { x: xy.x, y: xy.y, dataPoint: previousDataPoint, dataSeries: previousDataSeries, dataPointIndex: previousDataPointIndex });
		}

		this.previousDataPointEventObject = eventObject;
	}


	//#endregion Event Manager

	//#region Class CultureInfo

	function CultureInfo(chart, culture) {

		var cultureInfo;

		if (culture && cultures[culture])
			cultureInfo = cultures[culture];


		Title.parent.constructor.call(this, "CultureInfo", cultureInfo, chart.theme);

		this.chart = chart;
		this.canvas = chart.canvas;
		this.ctx = this.chart.ctx;
	}

	extend(CultureInfo, CanvasJSObject);

	//#endregion Class CultureInfo

	//#region Render Helper

	var RenderHelper = {
		drawMarker: function (x, y, ctx, markerType, markerSize, markerColor, markerBorderColor, markerBorderThickness) {

			if (!ctx)
				return;

			var alpha = 1;

			ctx.fillStyle = markerColor ? markerColor : "#000000";
			ctx.strokeStyle = markerBorderColor ? markerBorderColor : "#000000";
			ctx.lineWidth = markerBorderThickness ? markerBorderThickness : 0;


			if (markerType === "circle") {

				ctx.moveTo(x, y);
				ctx.beginPath();
				//return;

				ctx.arc(x, y, markerSize / 2, 0, Math.PI * 2, false);

				if (markerColor)
					ctx.fill();

				if (markerBorderThickness) {

					if (!markerBorderColor) {
						alpha = ctx.globalAlpha;
						ctx.globalAlpha = .15;
						ctx.strokeStyle = "black";
						ctx.stroke();
						ctx.globalAlpha = alpha;
					} else
						ctx.stroke();

				}
			}
			else if (markerType === "square") {

				//ctx.moveTo(x - markerSize / 2, y - markerSize / 2);
				ctx.beginPath();
				ctx.rect(x - markerSize / 2, y - markerSize / 2, markerSize, markerSize);

				if (markerColor)
					ctx.fill();

				if (markerBorderThickness) {

					if (!markerBorderColor) {
						alpha = ctx.globalAlpha;
						ctx.globalAlpha = .15;
						ctx.strokeStyle = "black";
						ctx.stroke();
						ctx.globalAlpha = alpha;
					} else
						ctx.stroke();

				}
			} else if (markerType === "triangle") {

				ctx.beginPath();
				ctx.moveTo(x - markerSize / 2, y + markerSize / 2);
				ctx.lineTo(x + markerSize / 2, y + markerSize / 2);
				ctx.lineTo(x, y - markerSize / 2);
				ctx.closePath();

				if (markerColor)
					ctx.fill();

				if (markerBorderThickness) {

					if (!markerBorderColor) {
						alpha = ctx.globalAlpha;
						ctx.globalAlpha = .15;
						ctx.strokeStyle = "black";
						ctx.stroke();
						ctx.globalAlpha = alpha;
					} else
						ctx.stroke();

				}
				ctx.beginPath();
			} else if (markerType === "cross") {

				ctx.strokeStyle = markerColor;
				markerBorderThickness = markerSize / 4;
				ctx.lineWidth = markerBorderThickness;

				ctx.beginPath();
				ctx.moveTo(x - markerSize / 2, y - markerSize / 2);
				ctx.lineTo(x + markerSize / 2, y + markerSize / 2);
				ctx.stroke();

				ctx.moveTo(x + markerSize / 2, y - markerSize / 2);
				ctx.lineTo(x - markerSize / 2, y + markerSize / 2);
				ctx.stroke();

			}


		},
		drawMarkers: function (markers) {
			for (var i = 0; i < markers.length; i++) {
				var marker = markers[i];

				RenderHelper.drawMarker(marker.x, marker.y, marker.ctx, marker.type, marker.size, marker.color, marker.borderColor, marker.borderThickness);
			}
		}
		//,
		//draw1pxLine: function (x1, y1, x2, y2, color, ctx) {
		//	ctx.beginPath();
		//	ctx.drawRect(x1, y1, x2 - x1, y2 - y1);
		//	ctx.stroke();
		//}
	}

	//#endregion Render Helper

	//#endregion Class Definitions

	//#region Public API
	var CanvasJS = {

		Chart: function (containerId, options) {
			var _chart = new Chart(containerId, options, this);

			this.render = function () { _chart.render() };
			this.options = _chart._options;
		},
		addColorSet: function (name, colorSet) {
			colorSets[name] = colorSet;
		},
		addCultureInfo: function (name, cultureInfo) {
			cultures[name] = cultureInfo;
		}
	}

	CanvasJS.Chart.version = "1.3.0 GA";
	window.CanvasJS = CanvasJS;
	//#endregion Public API

})();
;//     (c) 2012 Airbnb, Inc.
//
//     polyglot.js may be freely distributed under the terms of the BSD
//     license. For all licensing information, details, and documention:
//     http://airbnb.github.com/polyglot.js
//
//
// Polyglot.js is an I18n helper library written in JavaScript, made to
// work both in the browser and in Node. It provides a simple solution for
// interpolation and pluralization, based off of Airbnb's
// experience adding I18n functionality to its Backbone.js and Node apps.
//
// Polylglot is agnostic to your translation backend. It doesn't perform any
// translation; it simply gives you a way to manage translated phrases from
// your client- or server-side JavaScript application.
//
!function(e){"use strict";function t(e){e=e||{},this.phrases=e.phrases||{},this.currentLocale=e.locale||"en",this.allowMissing=!!e.allowMissing}function s(e){var t,n,r,i={};for(t in e)if(e.hasOwnProperty(t)){n=e[t];for(r in n)i[n[r]]=t}return i}function o(e){var t=/^\s+|\s+$/g;return e.replace(t,"")}function u(e,t,r){var i,s,u;return r!=null&&e?(s=e.split(n),u=s[f(t,r)]||s[0],i=o(u)):i=e,i}function a(e){var t=s(i);return t[e]||t.en}function f(e,t){return r[a(e)](t)}function l(e,t){for(var n in t)n!=="_"&&t.hasOwnProperty(n)&&(e=e.replace(new RegExp("%\\{"+n+"\\}","g"),t[n]));return e}function c(t){e.console&&e.console.warn&&e.console.warn("WARNING: "+t)}function h(e){var t={};for(var n in e)t[n]=e[n];return t}t.VERSION="0.2.0",t.prototype.locale=function(e){return e&&(this.currentLocale=e),this.currentLocale},t.prototype.extend=function(e){for(var t in e)e.hasOwnProperty(t)&&(this.phrases[t]=e[t])},t.prototype.clear=function(){this.phrases={}},t.prototype.replace=function(e){this.clear(),this.extend(e)},t.prototype.t=function(e,t){var n;t=t==null?{}:t,typeof t=="number"&&(t={smart_count:t});var r=this.phrases[e]||t._||(this.allowMissing?e:"");return r===""?(c('Missing translation for key: "'+e+'"'),n=e):(t=h(t),n=u(r,this.currentLocale,t.smart_count),n=l(n,t)),n};var n="||||",r={chinese:function(e){return 0},german:function(e){return e!==1?1:0},french:function(e){return e>1?1:0},russian:function(e){return e%10===1&&e%100!==11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2},czech:function(e){return e===1?0:e>=2&&e<=4?1:2},polish:function(e){return e===1?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2},icelandic:function(e){return e%10!==1||e%100===11?1:0}},i={chinese:["id","ja","ko","ms","th","tr","zh"],german:["da","de","en","es","fi","el","he","hu","it","nl","no","pt","sv"],french:["fr","tl"],russian:["hr","ru"],czech:["cs"],polish:["pl"],icelandic:["is"]};typeof module!="undefined"&&module.exports?module.exports=t:e.Polyglot=t}(this);
;
//# sourceMappingURL=vendor.js.map