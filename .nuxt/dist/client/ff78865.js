(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1040:function(e,n,t){var r=t(23)(!1);r.push([e.i,".hljs{display:block;overflow-x:auto;padding:.5em;color:#333;background:#f8f8f8}.hljs-comment,.hljs-quote{color:#998;font-style:italic}.hljs-keyword,.hljs-selector-tag,.hljs-subst{color:#333;font-weight:700}.hljs-literal,.hljs-number,.hljs-tag .hljs-attr,.hljs-template-variable,.hljs-variable{color:teal}.hljs-doctag,.hljs-string{color:#d14}.hljs-section,.hljs-selector-id,.hljs-title{color:#900;font-weight:700}.hljs-subst{font-weight:400}.hljs-class .hljs-title,.hljs-type{color:#458;font-weight:700}.hljs-attribute,.hljs-name,.hljs-tag{color:navy;font-weight:400}.hljs-link,.hljs-regexp{color:#009926}.hljs-bullet,.hljs-symbol{color:#990073}.hljs-built_in,.hljs-builtin-name{color:#0086b3}.hljs-meta{color:#999;font-weight:700}.hljs-deletion{background:#fdd}.hljs-addition{background:#dfd}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}",""]),e.exports=r},622:function(e,n){function t(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach((function(n){var r=e[n];"object"!=typeof r||Object.isFrozen(r)||t(r)})),e}var r=t,o=t;r.default=o;class l{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function c(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function d(e,...n){const t=Object.create(null);for(const n in e)t[n]=e[n];return n.forEach((function(e){for(const n in e)t[n]=e[n]})),t}const h=e=>!!e.kind;class f{constructor(e,n){this.buffer="",this.classPrefix=n.classPrefix,e.walk(this)}addText(text){this.buffer+=c(text)}openNode(e){if(!h(e))return;let n=e.kind;e.sublanguage||(n=`${this.classPrefix}${n}`),this.span(n)}closeNode(e){h(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}class m{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const n={kind:e,children:[]};this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,n){return"string"==typeof n?e.addText(n):n.children&&(e.openNode(n),n.children.forEach((n=>this._walk(e,n))),e.closeNode(n)),e}static _collapse(e){"string"!=typeof e&&e.children&&(e.children.every((e=>"string"==typeof e))?e.children=[e.children.join("")]:e.children.forEach((e=>{m._collapse(e)})))}}class _ extends m{constructor(e){super(),this.options=e}addKeyword(text,e){""!==text&&(this.openNode(e),this.addText(text),this.closeNode())}addText(text){""!==text&&this.add(text)}addSublanguage(e,n){const t=e.root;t.kind=n,t.sublanguage=!0,this.add(t)}toHTML(){return new f(this,this.options).value()}finalize(){return!0}}function source(e){return e?"string"==typeof e?e:e.source:null}const y=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;const v="[a-zA-Z]\\w*",E="[a-zA-Z_]\\w*",w="\\b\\d+(\\.\\d+)?",x="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",N="\\b(0b[01]+)",j={begin:"\\\\[\\s\\S]",relevance:0},R={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[j]},k={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[j]},O={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},M=function(e,n,t={}){const r=d({className:"comment",begin:e,end:n,contains:[]},t);return r.contains.push(O),r.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",relevance:0}),r},A=M("//","$"),T=M("/\\*","\\*/"),I=M("#","$"),S={className:"number",begin:w,relevance:0},L={className:"number",begin:x,relevance:0},B={className:"number",begin:N,relevance:0},D={className:"number",begin:w+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},C={begin:/(?=\/[^/\n]*\/)/,contains:[{className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[j,{begin:/\[/,end:/\]/,relevance:0,contains:[j]}]}]},P={className:"title",begin:v,relevance:0},$={className:"title",begin:E,relevance:0},U={begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0};var z=Object.freeze({__proto__:null,MATCH_NOTHING_RE:/\b\B/,IDENT_RE:v,UNDERSCORE_IDENT_RE:E,NUMBER_RE:w,C_NUMBER_RE:x,BINARY_NUMBER_RE:N,RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=function(...e){return e.map((e=>source(e))).join("")}(n,/.*\b/,e.binary,/\b.*/)),d({className:"meta",begin:n,end:/$/,relevance:0,"on:begin":(e,n)=>{0!==e.index&&n.ignoreMatch()}},e)},BACKSLASH_ESCAPE:j,APOS_STRING_MODE:R,QUOTE_STRING_MODE:k,PHRASAL_WORDS_MODE:O,COMMENT:M,C_LINE_COMMENT_MODE:A,C_BLOCK_COMMENT_MODE:T,HASH_COMMENT_MODE:I,NUMBER_MODE:S,C_NUMBER_MODE:L,BINARY_NUMBER_MODE:B,CSS_NUMBER_MODE:D,REGEXP_MODE:C,TITLE_MODE:P,UNDERSCORE_TITLE_MODE:$,METHOD_GUARD:U,END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(e,n)=>{n.data._beginMatch=e[1]},"on:end":(e,n)=>{n.data._beginMatch!==e[1]&&n.ignoreMatch()}})}});function H(e,n){"."===e.input[e.index-1]&&n.ignoreMatch()}function K(e,n){n&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=H,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,void 0===e.relevance&&(e.relevance=0))}function G(e,n){Array.isArray(e.illegal)&&(e.illegal=function(...e){return"("+e.map((e=>source(e))).join("|")+")"}(...e.illegal))}function Z(e,n){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function F(e,n){void 0===e.relevance&&(e.relevance=1)}const W=["of","and","for","in","not","or","if","then","parent","list","value"];function X(e,n,t="keyword"){const r={};return"string"==typeof e?o(t,e.split(" ")):Array.isArray(e)?o(t,e):Object.keys(e).forEach((function(t){Object.assign(r,X(e[t],n,t))})),r;function o(e,t){n&&(t=t.map((e=>e.toLowerCase()))),t.forEach((function(n){const t=n.split("|");r[t[0]]=[e,V(t[0],t[1])]}))}}function V(e,n){return n?Number(n):function(e){return W.includes(e.toLowerCase())}(e)?0:1}function J(e,{plugins:n}){function t(n,t){return new RegExp(source(n),"m"+(e.case_insensitive?"i":"")+(t?"g":""))}class r{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,n){n.position=this.position++,this.matchIndexes[this.matchAt]=n,this.regexes.push([n,e]),this.matchAt+=function(e){return new RegExp(e.toString()+"|").exec("").length-1}(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);const e=this.regexes.map((e=>e[1]));this.matcherRe=t(function(e,n="|"){let t=0;return e.map((e=>{t+=1;const n=t;let r=source(e),o="";for(;r.length>0;){const e=y.exec(r);if(!e){o+=r;break}o+=r.substring(0,e.index),r=r.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?o+="\\"+String(Number(e[1])+n):(o+=e[0],"("===e[0]&&t++)}return o})).map((e=>`(${e})`)).join(n)}(e),!0),this.lastIndex=0}exec(s){this.matcherRe.lastIndex=this.lastIndex;const e=this.matcherRe.exec(s);if(!e)return null;const i=e.findIndex(((e,i)=>i>0&&void 0!==e)),n=this.matchIndexes[i];return e.splice(0,i),Object.assign(e,n)}}class o{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];const n=new r;return this.rules.slice(e).forEach((([e,t])=>n.addRule(e,t))),n.compile(),this.multiRegexes[e]=n,n}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,n){this.rules.push([e,n]),"begin"===n.type&&this.count++}exec(s){const e=this.getMatcher(this.regexIndex);e.lastIndex=this.lastIndex;let n=e.exec(s);if(this.resumingScanAtSamePosition())if(n&&n.index===this.lastIndex);else{const e=this.getMatcher(0);e.lastIndex=this.lastIndex+1,n=e.exec(s)}return n&&(this.regexIndex+=n.position+1,this.regexIndex===this.count&&this.considerAll()),n}}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=d(e.classNameAliases||{}),function n(r,l){const c=r;if(r.isCompiled)return c;[Z].forEach((e=>e(r,l))),e.compilerExtensions.forEach((e=>e(r,l))),r.__beforeBegin=null,[K,G,F].forEach((e=>e(r,l))),r.isCompiled=!0;let h=null;if("object"==typeof r.keywords&&(h=r.keywords.$pattern,delete r.keywords.$pattern),r.keywords&&(r.keywords=X(r.keywords,e.case_insensitive)),r.lexemes&&h)throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");return h=h||r.lexemes||/\w+/,c.keywordPatternRe=t(h,!0),l&&(r.begin||(r.begin=/\B|\b/),c.beginRe=t(r.begin),r.endSameAsBegin&&(r.end=r.begin),r.end||r.endsWithParent||(r.end=/\B|\b/),r.end&&(c.endRe=t(r.end)),c.terminatorEnd=source(r.end)||"",r.endsWithParent&&l.terminatorEnd&&(c.terminatorEnd+=(r.end?"|":"")+l.terminatorEnd)),r.illegal&&(c.illegalRe=t(r.illegal)),r.contains||(r.contains=[]),r.contains=[].concat(...r.contains.map((function(e){return function(e){e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map((function(n){return d(e,{variants:null},n)})));if(e.cachedVariants)return e.cachedVariants;if(Q(e))return d(e,{starts:e.starts?d(e.starts):null});if(Object.isFrozen(e))return d(e);return e}("self"===e?r:e)}))),r.contains.forEach((function(e){n(e,c)})),r.starts&&n(r.starts,l),c.matcher=function(e){const n=new o;return e.contains.forEach((e=>n.addRule(e.begin,{rule:e,type:"begin"}))),e.terminatorEnd&&n.addRule(e.terminatorEnd,{type:"end"}),e.illegal&&n.addRule(e.illegal,{type:"illegal"}),n}(c),c}(e)}function Q(e){return!!e&&(e.endsWithParent||Q(e.starts))}function Y(e){const n={props:["language","code","autodetect"],data:function(){return{detectedLanguage:"",unknownLanguage:!1}},computed:{className(){return this.unknownLanguage?"":"hljs "+this.detectedLanguage},highlighted(){if(!this.autoDetect&&!e.getLanguage(this.language))return console.warn(`The language "${this.language}" you specified could not be found.`),this.unknownLanguage=!0,c(this.code);let n={};return this.autoDetect?(n=e.highlightAuto(this.code),this.detectedLanguage=n.language):(n=e.highlight(this.language,this.code,this.ignoreIllegals),this.detectedLanguage=this.language),n.value},autoDetect(){return!this.language||(e=this.autodetect,Boolean(e||""===e));var e},ignoreIllegals:()=>!0},render(e){return e("pre",{},[e("code",{class:this.className,domProps:{innerHTML:this.highlighted}})])}};return{Component:n,VuePlugin:{install(e){e.component("highlightjs",n)}}}}const ee={"after:highlightElement":({el:e,result:n,text:text})=>{const t=te(e);if(!t.length)return;const r=document.createElement("div");r.innerHTML=n.value,n.value=function(e,n,t){let r=0,o="";const l=[];function d(){return e.length&&n.length?e[0].offset!==n[0].offset?e[0].offset<n[0].offset?e:n:"start"===n[0].event?e:n:e.length?e:n}function h(e){function n(e){return" "+e.nodeName+'="'+c(e.value)+'"'}o+="<"+ne(e)+[].map.call(e.attributes,n).join("")+">"}function f(e){o+="</"+ne(e)+">"}function m(e){("start"===e.event?h:f)(e.node)}for(;e.length||n.length;){let n=d();if(o+=c(t.substring(r,n[0].offset)),r=n[0].offset,n===e){l.reverse().forEach(f);do{m(n.splice(0,1)[0]),n=d()}while(n===e&&n.length&&n[0].offset===r);l.reverse().forEach(h)}else"start"===n[0].event?l.push(n[0].node):l.pop(),m(n.splice(0,1)[0])}return o+c(t.substr(r))}(t,te(r),text)}};function ne(e){return e.nodeName.toLowerCase()}function te(e){const n=[];return function e(t,r){for(let o=t.firstChild;o;o=o.nextSibling)3===o.nodeType?r+=o.nodeValue.length:1===o.nodeType&&(n.push({event:"start",offset:r,node:o}),r=e(o,r),ne(o).match(/br|hr|img|input/)||n.push({event:"stop",offset:r,node:o}));return r}(e,0),n}const re={},ae=e=>{console.error(e)},ie=(e,...n)=>{console.log(`WARN: ${e}`,...n)},se=(e,n)=>{re[`${e}/${n}`]||(console.log(`Deprecated as of ${e}. ${n}`),re[`${e}/${n}`]=!0)},oe=c,le=d,ce=Symbol("nomatch");var ue=function(e){const n=Object.create(null),t=Object.create(null),o=[];let c=!0;const d=/(^(<[^>]+>|\t|)+|\n)/gm,h="Could not find the language '{}', did you forget to load/include a language module?",f={disableAutodetect:!0,name:"Plain text",contains:[]};let m={noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:null,__emitter:_};function y(e){return m.noHighlightRe.test(e)}function v(e,n,t,r){let code="",o="";"object"==typeof n?(code=e,t=n.ignoreIllegals,o=n.language,r=void 0):(se("10.7.0","highlight(lang, code, ...args) has been deprecated."),se("10.7.0","Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),o=e,code=n);const l={code:code,language:o};S("before:highlight",l);const c=l.result?l.result:E(l.language,l.code,t,r);return c.code=l.code,S("after:highlight",c),c}function E(e,t,r,d){function f(e,n){const t=O.case_insensitive?n[0].toLowerCase():n[0];return Object.prototype.hasOwnProperty.call(e.keywords,t)&&e.keywords[t]}function _(){null!=I.subLanguage?function(){if(""===B)return;let e=null;if("string"==typeof I.subLanguage){if(!n[I.subLanguage])return void L.addText(B);e=E(I.subLanguage,B,!0,S[I.subLanguage]),S[I.subLanguage]=e.top}else e=w(B,I.subLanguage.length?I.subLanguage:null);I.relevance>0&&(D+=e.relevance),L.addSublanguage(e.emitter,e.language)}():function(){if(!I.keywords)return void L.addText(B);let e=0;I.keywordPatternRe.lastIndex=0;let n=I.keywordPatternRe.exec(B),t="";for(;n;){t+=B.substring(e,n.index);const data=f(I,n);if(data){const[e,r]=data;if(L.addText(t),t="",D+=r,e.startsWith("_"))t+=n[0];else{const t=O.classNameAliases[e]||e;L.addKeyword(n[0],t)}}else t+=n[0];e=I.keywordPatternRe.lastIndex,n=I.keywordPatternRe.exec(B)}t+=B.substr(e),L.addText(t)}(),B=""}function y(e){return e.className&&L.openNode(O.classNameAliases[e.className]||e.className),I=Object.create(e,{parent:{value:I}}),I}function v(e,n,t){let r=function(e,n){const t=e&&e.exec(n);return t&&0===t.index}(e.endRe,t);if(r){if(e["on:end"]){const t=new l(e);e["on:end"](n,t),t.isMatchIgnored&&(r=!1)}if(r){for(;e.endsParent&&e.parent;)e=e.parent;return e}}if(e.endsWithParent)return v(e.parent,n,t)}function x(e){return 0===I.matcher.regexIndex?(B+=e[0],1):($=!0,0)}function N(e){const n=e[0],t=e.rule,r=new l(t),o=[t.__beforeBegin,t["on:begin"]];for(const t of o)if(t&&(t(e,r),r.isMatchIgnored))return x(n);return t&&t.endSameAsBegin&&(t.endRe=new RegExp(n.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")),t.skip?B+=n:(t.excludeBegin&&(B+=n),_(),t.returnBegin||t.excludeBegin||(B=n)),y(t),t.returnBegin?0:n.length}function j(e){const n=e[0],r=t.substr(e.index),o=v(I,e,r);if(!o)return ce;const l=I;l.skip?B+=n:(l.returnEnd||l.excludeEnd||(B+=n),_(),l.excludeEnd&&(B=n));do{I.className&&L.closeNode(),I.skip||I.subLanguage||(D+=I.relevance),I=I.parent}while(I!==o.parent);return o.starts&&(o.endSameAsBegin&&(o.starts.endRe=o.endRe),y(o.starts)),l.returnEnd?0:n.length}let R={};function k(n,o){const l=o&&o[0];if(B+=n,null==l)return _(),0;if("begin"===R.type&&"end"===o.type&&R.index===o.index&&""===l){if(B+=t.slice(o.index,o.index+1),!c){const n=new Error("0 width match regex");throw n.languageName=e,n.badRule=R.rule,n}return 1}if(R=o,"begin"===o.type)return N(o);if("illegal"===o.type&&!r){const e=new Error('Illegal lexeme "'+l+'" for mode "'+(I.className||"<unnamed>")+'"');throw e.mode=I,e}if("end"===o.type){const e=j(o);if(e!==ce)return e}if("illegal"===o.type&&""===l)return 1;if(P>1e5&&P>3*o.index){throw new Error("potential infinite loop, way more iterations than matches")}return B+=l,l.length}const O=A(e);if(!O)throw ae(h.replace("{}",e)),new Error('Unknown language: "'+e+'"');const M=J(O,{plugins:o});let T="",I=d||M;const S={},L=new m.__emitter(m);!function(){const e=[];for(let n=I;n!==O;n=n.parent)n.className&&e.unshift(n.className);e.forEach((e=>L.openNode(e)))}();let B="",D=0,C=0,P=0,$=!1;try{for(I.matcher.considerAll();;){P++,$?$=!1:I.matcher.considerAll(),I.matcher.lastIndex=C;const e=I.matcher.exec(t);if(!e)break;const n=k(t.substring(C,e.index),e);C=e.index+n}return k(t.substr(C)),L.closeAllNodes(),L.finalize(),T=L.toHTML(),{relevance:Math.floor(D),value:T,language:e,illegal:!1,emitter:L,top:I}}catch(n){if(n.message&&n.message.includes("Illegal"))return{illegal:!0,illegalBy:{msg:n.message,context:t.slice(C-100,C+100),mode:n.mode},sofar:T,relevance:0,value:oe(t),emitter:L};if(c)return{illegal:!1,relevance:0,value:oe(t),emitter:L,language:e,top:I,errorRaised:n};throw n}}function w(code,e){e=e||m.languages||Object.keys(n);const t=function(code){const e={relevance:0,emitter:new m.__emitter(m),value:oe(code),illegal:!1,top:f};return e.emitter.addText(code),e}(code),r=e.filter(A).filter(I).map((e=>E(e,code,!1)));r.unshift(t);const o=r.sort(((a,b)=>{if(a.relevance!==b.relevance)return b.relevance-a.relevance;if(a.language&&b.language){if(A(a.language).supersetOf===b.language)return 1;if(A(b.language).supersetOf===a.language)return-1}return 0})),[l,c]=o,d=l;return d.second_best=c,d}const x={"before:highlightElement":({el:e})=>{m.useBR&&(e.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ /]*>/g,"\n"))},"after:highlightElement":({result:e})=>{m.useBR&&(e.value=e.value.replace(/\n/g,"<br>"))}},N=/^(<[^>]+>|\t)+/gm,j={"after:highlightElement":({result:e})=>{m.tabReplace&&(e.value=e.value.replace(N,(e=>e.replace(/\t/g,m.tabReplace))))}};function R(element){let e=null;const n=function(e){let n=e.className+" ";n+=e.parentNode?e.parentNode.className:"";const t=m.languageDetectRe.exec(n);if(t){const n=A(t[1]);return n||(ie(h.replace("{}",t[1])),ie("Falling back to no-highlight mode for this block.",e)),n?t[1]:"no-highlight"}return n.split(/\s+/).find((e=>y(e)||A(e)))}(element);if(y(n))return;S("before:highlightElement",{el:element,language:n}),e=element;const text=e.textContent,r=n?v(text,{language:n,ignoreIllegals:!0}):w(text);S("after:highlightElement",{el:element,result:r,text:text}),element.innerHTML=r.value,function(element,e,n){const r=e?t[e]:n;element.classList.add("hljs"),r&&element.classList.add(r)}(element,n,r.language),element.result={language:r.language,re:r.relevance,relavance:r.relevance},r.second_best&&(element.second_best={language:r.second_best.language,re:r.second_best.relevance,relavance:r.second_best.relevance})}const k=()=>{if(k.called)return;k.called=!0,se("10.6.0","initHighlighting() is deprecated.  Use highlightAll() instead.");document.querySelectorAll("pre code").forEach(R)};let O=!1;function M(){if("loading"===document.readyState)return void(O=!0);document.querySelectorAll("pre code").forEach(R)}function A(e){return e=(e||"").toLowerCase(),n[e]||n[t[e]]}function T(e,{languageName:n}){"string"==typeof e&&(e=[e]),e.forEach((e=>{t[e.toLowerCase()]=n}))}function I(e){const n=A(e);return n&&!n.disableAutodetect}function S(e,n){const t=e;o.forEach((function(e){e[t]&&e[t](n)}))}"undefined"!=typeof window&&window.addEventListener&&window.addEventListener("DOMContentLoaded",(function(){O&&M()}),!1),Object.assign(e,{highlight:v,highlightAuto:w,highlightAll:M,fixMarkup:function(e){return se("10.2.0","fixMarkup will be removed entirely in v11.0"),se("10.2.0","Please see https://github.com/highlightjs/highlight.js/issues/2534"),html=e,m.tabReplace||m.useBR?html.replace(d,(e=>"\n"===e?m.useBR?"<br>":e:m.tabReplace?e.replace(/\t/g,m.tabReplace):e)):html;var html},highlightElement:R,highlightBlock:function(e){return se("10.7.0","highlightBlock will be removed entirely in v12.0"),se("10.7.0","Please use highlightElement now."),R(e)},configure:function(e){e.useBR&&(se("10.3.0","'useBR' will be removed entirely in v11.0"),se("10.3.0","Please see https://github.com/highlightjs/highlight.js/issues/2559")),m=le(m,e)},initHighlighting:k,initHighlightingOnLoad:function(){se("10.6.0","initHighlightingOnLoad() is deprecated.  Use highlightAll() instead."),O=!0},registerLanguage:function(t,r){let o=null;try{o=r(e)}catch(e){if(ae("Language definition for '{}' could not be registered.".replace("{}",t)),!c)throw e;ae(e),o=f}o.name||(o.name=t),n[t]=o,o.rawDefinition=r.bind(null,e),o.aliases&&T(o.aliases,{languageName:t})},unregisterLanguage:function(e){delete n[e];for(const n of Object.keys(t))t[n]===e&&delete t[n]},listLanguages:function(){return Object.keys(n)},getLanguage:A,registerAliases:T,requireLanguage:function(e){se("10.4.0","requireLanguage will be removed entirely in v11."),se("10.4.0","Please see https://github.com/highlightjs/highlight.js/pull/2844");const n=A(e);if(n)return n;throw new Error("The '{}' language is required, but not loaded.".replace("{}",e))},autoDetection:I,inherit:le,addPlugin:function(e){!function(e){e["before:highlightBlock"]&&!e["before:highlightElement"]&&(e["before:highlightElement"]=data=>{e["before:highlightBlock"](Object.assign({block:data.el},data))}),e["after:highlightBlock"]&&!e["after:highlightElement"]&&(e["after:highlightElement"]=data=>{e["after:highlightBlock"](Object.assign({block:data.el},data))})}(e),o.push(e)},vuePlugin:Y(e).VuePlugin}),e.debugMode=function(){c=!1},e.safeMode=function(){c=!0},e.versionString="10.7.3";for(const e in z)"object"==typeof z[e]&&r(z[e]);return Object.assign(e,z),e.addPlugin(x),e.addPlugin(ee),e.addPlugin(j),e}({});e.exports=ue},623:function(e,n,t){var content=t(1040);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(24).default)("0efaf680",content,!0,{sourceMap:!1})},624:function(e,n){function source(e){return e?"string"==typeof e?e:e.source:null}function t(e){return r("(?=",e,")")}function r(...e){return e.map((e=>source(e))).join("")}function o(...e){return"("+e.map((e=>source(e))).join("|")+")"}e.exports=function(e){const n=r(/[A-Z_]/,r("(",/[A-Z0-9_.-]*:/,")?"),/[A-Z0-9_.-]*/),l={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},c={begin:/\s/,contains:[{className:"meta-keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},d=e.inherit(c,{begin:/\(/,end:/\)/}),h=e.inherit(e.APOS_STRING_MODE,{className:"meta-string"}),f=e.inherit(e.QUOTE_STRING_MODE,{className:"meta-string"}),m={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:/[A-Za-z0-9._:-]+/,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[l]},{begin:/'/,end:/'/,contains:[l]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[c,f,h,d,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[c,d,f,h]}]}]},e.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},l,{className:"meta",begin:/<\?xml/,end:/\?>/,relevance:10},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[m],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[m],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:r(/</,t(r(n,o(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:n,relevance:0,starts:m}]},{className:"tag",begin:r(/<\//,t(r(n,/>/))),contains:[{className:"name",begin:n,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}},625:function(e,n){function source(e){return e?"string"==typeof e?e:e.source:null}function t(...e){return e.map((e=>source(e))).join("")}function r(...e){return"("+e.map((e=>source(e))).join("|")+")"}e.exports=function(e){const n=e.COMMENT("--","$"),o=["true","false","unknown"],l=["bigint","binary","blob","boolean","char","character","clob","date","dec","decfloat","decimal","float","int","integer","interval","nchar","nclob","national","numeric","real","row","smallint","time","timestamp","varchar","varying","varbinary"],c=["abs","acos","array_agg","asin","atan","avg","cast","ceil","ceiling","coalesce","corr","cos","cosh","count","covar_pop","covar_samp","cume_dist","dense_rank","deref","element","exp","extract","first_value","floor","json_array","json_arrayagg","json_exists","json_object","json_objectagg","json_query","json_table","json_table_primitive","json_value","lag","last_value","lead","listagg","ln","log","log10","lower","max","min","mod","nth_value","ntile","nullif","percent_rank","percentile_cont","percentile_disc","position","position_regex","power","rank","regr_avgx","regr_avgy","regr_count","regr_intercept","regr_r2","regr_slope","regr_sxx","regr_sxy","regr_syy","row_number","sin","sinh","sqrt","stddev_pop","stddev_samp","substring","substring_regex","sum","tan","tanh","translate","translate_regex","treat","trim","trim_array","unnest","upper","value_of","var_pop","var_samp","width_bucket"],d=["create table","insert into","primary key","foreign key","not null","alter table","add constraint","grouping sets","on overflow","character set","respect nulls","ignore nulls","nulls first","nulls last","depth first","breadth first"],h=c,f=["abs","acos","all","allocate","alter","and","any","are","array","array_agg","array_max_cardinality","as","asensitive","asin","asymmetric","at","atan","atomic","authorization","avg","begin","begin_frame","begin_partition","between","bigint","binary","blob","boolean","both","by","call","called","cardinality","cascaded","case","cast","ceil","ceiling","char","char_length","character","character_length","check","classifier","clob","close","coalesce","collate","collect","column","commit","condition","connect","constraint","contains","convert","copy","corr","corresponding","cos","cosh","count","covar_pop","covar_samp","create","cross","cube","cume_dist","current","current_catalog","current_date","current_default_transform_group","current_path","current_role","current_row","current_schema","current_time","current_timestamp","current_path","current_role","current_transform_group_for_type","current_user","cursor","cycle","date","day","deallocate","dec","decimal","decfloat","declare","default","define","delete","dense_rank","deref","describe","deterministic","disconnect","distinct","double","drop","dynamic","each","element","else","empty","end","end_frame","end_partition","end-exec","equals","escape","every","except","exec","execute","exists","exp","external","extract","false","fetch","filter","first_value","float","floor","for","foreign","frame_row","free","from","full","function","fusion","get","global","grant","group","grouping","groups","having","hold","hour","identity","in","indicator","initial","inner","inout","insensitive","insert","int","integer","intersect","intersection","interval","into","is","join","json_array","json_arrayagg","json_exists","json_object","json_objectagg","json_query","json_table","json_table_primitive","json_value","lag","language","large","last_value","lateral","lead","leading","left","like","like_regex","listagg","ln","local","localtime","localtimestamp","log","log10","lower","match","match_number","match_recognize","matches","max","member","merge","method","min","minute","mod","modifies","module","month","multiset","national","natural","nchar","nclob","new","no","none","normalize","not","nth_value","ntile","null","nullif","numeric","octet_length","occurrences_regex","of","offset","old","omit","on","one","only","open","or","order","out","outer","over","overlaps","overlay","parameter","partition","pattern","per","percent","percent_rank","percentile_cont","percentile_disc","period","portion","position","position_regex","power","precedes","precision","prepare","primary","procedure","ptf","range","rank","reads","real","recursive","ref","references","referencing","regr_avgx","regr_avgy","regr_count","regr_intercept","regr_r2","regr_slope","regr_sxx","regr_sxy","regr_syy","release","result","return","returns","revoke","right","rollback","rollup","row","row_number","rows","running","savepoint","scope","scroll","search","second","seek","select","sensitive","session_user","set","show","similar","sin","sinh","skip","smallint","some","specific","specifictype","sql","sqlexception","sqlstate","sqlwarning","sqrt","start","static","stddev_pop","stddev_samp","submultiset","subset","substring","substring_regex","succeeds","sum","symmetric","system","system_time","system_user","table","tablesample","tan","tanh","then","time","timestamp","timezone_hour","timezone_minute","to","trailing","translate","translate_regex","translation","treat","trigger","trim","trim_array","true","truncate","uescape","union","unique","unknown","unnest","update   ","upper","user","using","value","values","value_of","var_pop","var_samp","varbinary","varchar","varying","versioning","when","whenever","where","width_bucket","window","with","within","without","year","add","asc","collation","desc","final","first","last","view"].filter((e=>!c.includes(e))),m={begin:t(/\b/,r(...h),/\s*\(/),keywords:{built_in:h}};return{name:"SQL",case_insensitive:!0,illegal:/[{}]|<\//,keywords:{$pattern:/\b[\w\.]+/,keyword:function(e,{exceptions:n,when:t}={}){const r=t;return n=n||[],e.map((e=>e.match(/\|\d+$/)||n.includes(e)?e:r(e)?`${e}|0`:e))}(f,{when:e=>e.length<3}),literal:o,type:l,built_in:["current_catalog","current_date","current_default_transform_group","current_path","current_role","current_schema","current_transform_group_for_type","current_user","session_user","system_time","system_user","current_time","localtime","current_timestamp","localtimestamp"]},contains:[{begin:r(...d),keywords:{$pattern:/[\w\.]+/,keyword:f.concat(d),literal:o,type:l}},{className:"type",begin:r("double precision","large object","with timezone","without timezone")},m,{className:"variable",begin:/@[a-z0-9]+/},{className:"string",variants:[{begin:/'/,end:/'/,contains:[{begin:/''/}]}]},{begin:/"/,end:/"/,contains:[{begin:/""/}]},e.C_NUMBER_MODE,e.C_BLOCK_COMMENT_MODE,n,{className:"operator",begin:/[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,relevance:0}]}}},626:function(e,n){const t="[A-Za-z$_][0-9A-Za-z$_]*",r=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],o=["true","false","null","undefined","NaN","Infinity"],l=[].concat(["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],["arguments","this","super","console","window","document","localStorage","module","global"],["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer","BigInt64Array","BigUint64Array","BigInt"],["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"]);function c(e){return d("(?=",e,")")}function d(...e){return e.map((e=>{return(n=e)?"string"==typeof n?n:n.source:null;var n})).join("")}e.exports=function(e){const n=t,h="<>",f="</>",m={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,n)=>{const t=e[0].length+e.index,r=e.input[t];"<"!==r?">"===r&&(((e,{after:n})=>{const t="</"+e[0].slice(1);return-1!==e.input.indexOf(t,n)})(e,{after:t})||n.ignoreMatch()):n.ignoreMatch()}},_={$pattern:t,keyword:r,literal:o,built_in:l},y="\\.([0-9](_?[0-9])*)",v="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",E={className:"number",variants:[{begin:`(\\b(${v})((${y})|\\.)?|(${y}))[eE][+-]?([0-9](_?[0-9])*)\\b`},{begin:`\\b(${v})\\b((${y})\\b|\\.)?|(${y})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},w={className:"subst",begin:"\\$\\{",end:"\\}",keywords:_,contains:[]},x={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,w],subLanguage:"xml"}},N={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,w],subLanguage:"css"}},j={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,w]},R={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+",contains:[{className:"type",begin:"\\{",end:"\\}",relevance:0},{className:"variable",begin:n+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},k=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,x,N,j,E,e.REGEXP_MODE];w.contains=k.concat({begin:/\{/,end:/\}/,keywords:_,contains:["self"].concat(k)});const O=[].concat(R,w.contains),M=O.concat([{begin:/\(/,end:/\)/,keywords:_,contains:["self"].concat(O)}]),A={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:_,contains:M};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:_,exports:{PARAMS_CONTAINS:M},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),{label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,x,N,j,R,E,{begin:d(/[{,\n]\s*/,c(d(/(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/,n+"\\s*:"))),relevance:0,contains:[{className:"attr",begin:n+c("\\s*:"),relevance:0}]},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[R,e.REGEXP_MODE,{className:"function",begin:"(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:_,contains:M}]}]},{begin:/,/,relevance:0},{className:"",begin:/\s/,end:/\s*/,skip:!0},{variants:[{begin:h,end:f},{begin:m.begin,"on:begin":m.isTrulyOpeningTag,end:m.end}],subLanguage:"xml",contains:[{begin:m.begin,end:m.end,skip:!0,contains:["self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/[{;]/,excludeEnd:!0,keywords:_,contains:["self",e.inherit(e.TITLE_MODE,{begin:n}),A],illegal:/%/},{beginKeywords:"while if switch catch for"},{className:"function",begin:e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,contains:[A,e.inherit(e.TITLE_MODE,{begin:n})]},{variants:[{begin:"\\."+n},{begin:"\\$"+n}],relevance:0},{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"[\]]/,contains:[{beginKeywords:"extends"},e.UNDERSCORE_TITLE_MODE]},{begin:/\b(?=constructor)/,end:/[{;]/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:n}),"self",A]},{begin:"(get|set)\\s+(?="+n+"\\()",end:/\{/,keywords:"get set",contains:[e.inherit(e.TITLE_MODE,{begin:n}),{begin:/\(\)/},A]},{begin:/\$[(.]/}]}}}}]);