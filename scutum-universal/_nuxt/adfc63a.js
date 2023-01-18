/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{1885:function(t,e,n){"use strict";n.r(e);n(27);var o=n(511),r=(n(339),{name:"PagesMailboxId",components:{Select2:function(){return Promise.all([n.e(0),n.e(1),n.e(9)]).then(n.bind(null,1075))},ScTextarea:o.a},validate:function(t){return void 0!==t.params.id},data:function(){return{replay:{to:[]}}},head:function(){return{title:"Scutum Admin - pages/mailbox/ - "+this.$route.params.id}},computed:{message:function(){var t=this.$route.params.id,e=this.$parent.messages.filter((function(e){return e.id===t}));return e[0]},emails:function(){return[{id:"0",text:this.message.sender},{id:"1",text:"ldare@gmail.com"},{id:"2",text:"jonathon.mueller@yundt.com"},{id:"3",text:"icummings@gmail.com"}]},id:function(){return this.$route.params.id}},created:function(){this.message||this.$router.push({name:"pages-mailbox"}),this.replay.to.push(0)},mounted:function(){this.$parent.showMessages=!1},methods:{delayTransition:function(t,e){t.style.transitionDelay=e+"ms"}}}),l=n(2),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return t.message?e("div",{staticClass:"sc-message-card sc-message-expanded-single"},[e("transition",{attrs:{name:"fadeUp",appear:""},on:{enter:function(e){return t.delayTransition(e,140)}}},[e("div",{staticClass:"uk-flex uk-flex-middle sc-message-head uk-grid-collapse",attrs:{"data-uk-grid":""}},[e("div",{staticClass:"uk-flex-1 uk-text-truncate"},[e("h2",{staticClass:"sc-message-title uk-text-truncate",attrs:{title:t.message.title}},[t._v("\n\t\t\t\t\t\t"+t._s(t.message.title)+"\n\t\t\t\t\t")]),t._v(" "),t.message.tag?e("span",{staticClass:"uk-label uk-margin-small-right",class:[t.$parent.messageTagColor(t.message.tag)]},[t._v("\n\t\t\t\t\t\t"+t._s(t.message.tag)+"\n\t\t\t\t\t")]):t._e(),t._v(" "),e("span",{staticClass:"uk-text-small uk-text-muted"},[t._v("\n\t\t\t\t\t\t"+t._s(t.message.sender)+"\n\t\t\t\t\t")])]),t._v(" "),e("div",{staticClass:"sc-message-date"},[t._v("\n\t\t\t\t\t"+t._s(t._f("moment")(t.message.date,"ddd, MMM Do HH:mm"))+"\n\t\t\t\t")])])]),t._v(" "),e("transition",{attrs:{name:"fadeUp",appear:""},on:{enter:function(e){return t.delayTransition(e,300)}}},[e("div",{staticClass:"sc-message-content"},[e("p",[t._v(t._s(t.message.content))])])]),t._v(" "),e("div",{staticClass:"sc-message-footer"},[e("transition",{attrs:{name:"fadeUp",appear:""},on:{enter:function(e){return t.delayTransition(e,450)}}},[e("div",[e("span",{staticClass:"uk-display-block uk-margin-small-bottom uk-text-muted uk-text-medium uk-margin-small-left"},[t._v("\n\t\t\t\t\t\tAttachments:\n\t\t\t\t\t")]),t._v(" "),e("ul",{staticClass:"sc-message-attachments"},[e("li",{staticClass:"sc-flex-no-shrink"},[e("div",{staticClass:"sc-attachment"},[e("a",{attrs:{href:"javascript:void(0)"}},[t._v("file1.png "),e("span",[t._v("(241KB)")])]),e("a",{staticClass:"mdi mdi-close sc-attachment-remove",attrs:{href:"javascript:void(0)"}})])]),t._v(" "),e("li",{staticClass:"sc-flex-no-shrink"},[e("div",{staticClass:"sc-attachment"},[e("a",{attrs:{href:"javascript:void(0)"}},[t._v("file2.pdf "),e("span",[t._v("(1240KB)")])]),e("a",{staticClass:"mdi mdi-close sc-attachment-remove",attrs:{href:"javascript:void(0)"}})])])])])]),t._v(" "),e("transition",{attrs:{name:"fadeUp",appear:""},on:{enter:function(e){return t.delayTransition(e,600)}}},[e("div",{staticClass:"sc-message-reply uk-visible@m"},[e("div",[e("client-only",[e("Select2",{attrs:{options:t.emails,settings:{width:"100%",placeholder:"Insert valid email address...",tags:!0,tokenSeparators:[","," "],createTag:"emailAddress"},multiple:""},model:{value:t.replay.to,callback:function(e){t.$set(t.replay,"to",e)},expression:"replay.to"}})],1)],1),t._v(" "),e("ScTextarea",{attrs:{cols:30,rows:4,placeholder:"Reply message...","extra-classes":"uk-margin-top"},model:{value:t.replay.message,callback:function(e){t.$set(t.replay,"message",e)},expression:"replay.message"}}),t._v(" "),e("div",{staticClass:"uk-margin-small-top"},[e("button",{staticClass:"sc-button sc-button-primary"},[t._v("\n\t\t\t\t\t\t\tSend\n\t\t\t\t\t\t")])])],1)])],1)],1):t._e()}),[],!1,null,null,null);e.default=component.exports},511:function(t,e,n){"use strict";n(72),n(92);var o=n(512),r={name:"ScTextarea",directives:{autosize:{bind:function(t,e,n){n.context.$props.autosize&&n.context.$nextTick((function(){o(t)}))},componentUpdated:function(t,e,n){n.context.$props.autosize&&o.update(t)},unbind:function(t){o.destroy(t)}}},props:{id:{type:String,default:null},name:{type:String,default:""},value:{type:String,default:""},disabled:{type:Boolean,default:!1},readOnly:{type:Boolean,default:!1},mode:{type:String,default:""},state:{type:String,default:""},extraClasses:{type:String,default:""},successState:{type:Boolean,default:!1},errorState:{type:Boolean,default:!1},placeholder:{type:String,default:null},rows:{type:Number,default:5},cols:{type:Number,default:10},autosize:{type:Boolean,default:!1},ukTooltip:{type:Object,default:null},focus:{type:Function,default:null},blur:{type:Function,default:null},change:{type:Function,default:null},keyUp:{type:Function,default:null},validator:{type:Object,default:null}},data:function(){return{txtFocused:!1}},computed:{modeClass:function(){return"outline"===this.$props.mode?"sc-textarea-outline":""},dangerClass:function(){return this.$props.errorState?"uk-form-danger":""},successClass:function(){return this.$props.successState?"uk-form-success":""}},mounted:function(){this.ukTooltip&&UIkit.tooltip(this.$refs.teaxtarea,this.ukTooltip)},methods:{txtBlur:function(){this.txtFocused=!1,this.blur&&this.blur(),this.validator&&this.validator.$touch(),this.$emit("blur")},txtFocus:function(){this.txtFocused=!0,this.focus&&this.focus(),this.$emit("focus")},txtChange:function(){this.change&&this.change(),this.$emit("change")},txtKeyUp:function(){this.keyUp&&this.keyUp(),this.$emit("keyUp")}}},l=n(2),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"sc-input-wrapper",class:{"sc-input-wrapper-outline":"outline"===t.mode,"sc-input-wrapper-disabled":t.disabled,"sc-input-wrapper-danger":t.errorState,"sc-input-wrapper-success":t.successState,"sc-input-filled":""!==t.value||"fixed"===t.state,"sc-input-focus":t.txtFocused}},[t._t("default"),t._v(" "),e("textarea",{directives:[{name:"autosize",rawName:"v-autosize"}],ref:"textarea",class:["uk-textarea","sc-vue-input",t.modeClass,t.dangerClass,t.successClass,t.extraClasses],attrs:{id:t.id,name:t.name,placeholder:t.placeholder,rows:t.rows,disabled:t.disabled,readonly:t.readOnly},domProps:{value:t.value},on:{focus:t.txtFocus,blur:t.txtBlur,change:t.txtChange,input:function(e){return t.$emit("input",e.target.value)},keyup:t.txtKeyUp}}),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:"outline"!==t.mode,expression:"mode !== 'outline'"}],staticClass:"sc-input-bar"})],2)}),[],!1,null,null,null);e.a=component.exports},512:function(t,e,n){var o,r,l;r=[t,e],o=function(t,e){"use strict";var n,o,map="function"==typeof Map?new Map:(n=[],o=[],{has:function(t){return n.indexOf(t)>-1},get:function(t){return o[n.indexOf(t)]},set:function(t,e){-1===n.indexOf(t)&&(n.push(t),o.push(e))},delete:function(t){var e=n.indexOf(t);e>-1&&(n.splice(e,1),o.splice(e,1))}}),r=function(t){return new Event(t,{bubbles:!0})};try{new Event("test")}catch(t){r=function(t){var e=document.createEvent("Event");return e.initEvent(t,!0,!1),e}}function l(t){if(t&&t.nodeName&&"TEXTAREA"===t.nodeName&&!map.has(t)){var e=null,n=null,o=null,l=function(){t.clientWidth!==n&&v()},c=function(style){window.removeEventListener("resize",l,!1),t.removeEventListener("input",v,!1),t.removeEventListener("keyup",v,!1),t.removeEventListener("autosize:destroy",c,!1),t.removeEventListener("autosize:update",v,!1),Object.keys(style).forEach((function(e){t.style[e]=style[e]})),map.delete(t)}.bind(t,{height:t.style.height,resize:t.style.resize,overflowY:t.style.overflowY,overflowX:t.style.overflowX,wordWrap:t.style.wordWrap});t.addEventListener("autosize:destroy",c,!1),"onpropertychange"in t&&"oninput"in t&&t.addEventListener("keyup",v,!1),window.addEventListener("resize",l,!1),t.addEventListener("input",v,!1),t.addEventListener("autosize:update",v,!1),t.style.overflowX="hidden",t.style.wordWrap="break-word",map.set(t,{destroy:c,update:v}),d()}function d(){var style=window.getComputedStyle(t,null);"vertical"===style.resize?t.style.resize="none":"both"===style.resize&&(t.style.resize="horizontal"),e="content-box"===style.boxSizing?-(parseFloat(style.paddingTop)+parseFloat(style.paddingBottom)):parseFloat(style.borderTopWidth)+parseFloat(style.borderBottomWidth),isNaN(e)&&(e=0),v()}function f(e){var n=t.style.width;t.style.width="0px",t.offsetWidth,t.style.width=n,t.style.overflowY=e}function m(t){for(var e=[];t&&t.parentNode&&t.parentNode instanceof Element;)t.parentNode.scrollTop&&e.push({node:t.parentNode,scrollTop:t.parentNode.scrollTop}),t=t.parentNode;return e}function h(){if(0!==t.scrollHeight){var o=m(t),r=document.documentElement&&document.documentElement.scrollTop;t.style.height="",t.style.height=t.scrollHeight+e+"px",n=t.clientWidth,o.forEach((function(t){t.node.scrollTop=t.scrollTop})),r&&(document.documentElement.scrollTop=r)}}function v(){h();var e=Math.round(parseFloat(t.style.height)),n=window.getComputedStyle(t,null),l="content-box"===n.boxSizing?Math.round(parseFloat(n.height)):t.offsetHeight;if(l<e?"hidden"===n.overflowY&&(f("scroll"),h(),l="content-box"===n.boxSizing?Math.round(parseFloat(window.getComputedStyle(t,null).height)):t.offsetHeight):"hidden"!==n.overflowY&&(f("hidden"),h(),l="content-box"===n.boxSizing?Math.round(parseFloat(window.getComputedStyle(t,null).height)):t.offsetHeight),o!==l){o=l;var c=r("autosize:resized");try{t.dispatchEvent(c)}catch(t){}}}}function c(t){var e=map.get(t);e&&e.destroy()}function d(t){var e=map.get(t);e&&e.update()}var f=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?((f=function(t){return t}).destroy=function(t){return t},f.update=function(t){return t}):((f=function(t,e){return t&&Array.prototype.forEach.call(t.length?t:[t],(function(t){return l(t,e)})),t}).destroy=function(t){return t&&Array.prototype.forEach.call(t.length?t:[t],c),t},f.update=function(t){return t&&Array.prototype.forEach.call(t.length?t:[t],d),t}),e.default=f,t.exports=e.default},void 0===(l="function"==typeof o?o.apply(e,r):o)||(t.exports=l)}}]);