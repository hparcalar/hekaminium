(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{1040:function(e,t,n){var content=n(1041);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(12).default)("1a9ff9fe",content,!0,{sourceMap:!1})},1041:function(e,t,n){var o=n(11)(!1);o.push([e.i,"/*!\n * vue-swipe-actions v2.0.0-beta.20\n * (c) 2016-present eCollect\n * Released under the MIT License.\n */.swipeout{position:relative;overflow:hidden;display:flex}.swipeout .swipeout-left,.swipeout .swipeout-right{position:absolute;height:100%;display:flex;z-index:1}.swipeout .swipeout-left{left:0;transform:translateX(-100%)}.swipeout .swipeout-right{right:0;transform:translateX(100%)}.swipeout .swipeout-action,.swipeout .swipeout-content{transition:transform .2s;will-change:transform}.swipeout.swipeout--no-transition .swipeout-action,.swipeout.swipeout--no-transition .swipeout-content{transition:none!important}.swipeout .swipeout-content{width:100%}.swipeout-non-selectable{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.swipeout-no-pointer-events{pointer-events:none!important}.swipeout-list{display:flex;flex-direction:column}.swipeout-list-item{flex:1}",""]),e.exports=o},1042:function(e,t,n){"use strict";n(812)},1043:function(e,t,n){var o=n(11)(!1);o.push([e.i,".swipeout-action{padding:0 2rem;display:flex;justify-content:center;align-items:center;cursor:pointer}.sc-list-swiped .swipeout-content{padding:16px}.sc-list-swiped .swipeout-list-item+.swipeout-list-item{border-top:1px solid rgba(0,0,0,.12)}",""]),e.exports=o},1602:function(e,t,n){"use strict";function o(e){if(null==e)throw new TypeError("Cannot destructure undefined")}n.r(t);n(19);const r={};function l(e){return 0===e.button}function c(e){return e.touches&&e.touches[0]?e=e.touches[0]:e.changedTouches&&e.changedTouches[0]&&(e=e.changedTouches[0]),{top:e.clientY,left:e.clientX}}Object.defineProperty(r,"passive",{configurable:!0,get(){let e;try{const t=Object.defineProperty({},"passive",{get(){e={passive:!0}}});window.addEventListener("qtest",null,t),window.removeEventListener("qtest",null,t)}catch(e){}return r.passive=e,e},set(e){Object.defineProperty(this,"passive",{value:e})}});function d(e){void 0!==e.touchTargetObserver&&(e.touchTargetObserver.disconnect(),e.touchTargetObserver=void 0)}function h(e){const t=!0!==e.horizontal&&!0!==e.vertical,n={all:!0===t||!0===e.horizontal&&!0===e.vertical};return!0!==e.horizontal&&!0!==t||(n.horizontal=!0),!0!==e.vertical&&!0!==t||(n.vertical=!0),n}function m(e,t,n){const o=c(e);let r;const l=o.left-t.event.x,d=o.top-t.event.y,h=Math.abs(l),m=Math.abs(d);return r=t.direction.horizontal&&!t.direction.vertical?l<0?"left":"right":!t.direction.horizontal&&t.direction.vertical?d<0?"up":"down":h>=m?l<0?"left":"right":d<0?"up":"down",{evt:e,position:o,direction:r,isFirst:t.event.isFirst,isFinal:!0===n,isMouse:t.event.mouse,duration:(new Date).getTime()-t.event.time,distance:{x:h,y:m},offset:{x:l,y:d},delta:{x:o.left-t.event.lastX,y:o.top-t.event.lastY}}}function v(e){return 0===e?"":`translate3d(${e}px, 0, 0)`}function f(e){return e?e.clientWidth:0}var _={name:"SwipeOut",directives:{touchPan:{name:"touch-pan",bind(e,t){const n=!0===t.modifiers.mouse,o=!0!==t.modifiers.mouseMightPrevent&&!0!==t.modifiers.mousePrevent,v=void 0===r.passive||{passive:o,capture:!0},f=!0!==t.modifiers.mightPrevent&&!0!==t.modifiers.prevent?r.passive:null;function _(e,o){n&&o?(t.modifiers.mouseStop&&e.stopPropagation(),t.modifiers.mousePrevent&&e.preventDefault()):(t.modifiers.stop&&e.stopPropagation(),t.modifiers.prevent&&e.preventDefault())}const w={handler:t.value,direction:h(t.modifiers),mouseStart(e){l(e)&&(document.addEventListener("mousemove",w.move,v),document.addEventListener("mouseup",w.mouseEnd,v),w.start(e,!0))},mouseEnd(e){document.removeEventListener("mousemove",w.move,v),document.removeEventListener("mouseup",w.mouseEnd,v),w.end(e)},start(t,n){d(w),!0!==n&&function(e,t,n){const{target:o}=t;n.touchTargetObserver=new MutationObserver((()=>{!1===e.contains(o)&&n.end(t)})),n.touchTargetObserver.observe(e,{childList:!0,subtree:!0})}(e,t,w);const o=c(t);w.event={x:o.left,y:o.top,time:(new Date).getTime(),mouse:!0===n,detected:!1,abort:!1,isFirst:!0,isFinal:!1,lastX:o.left,lastY:o.top}},move(e){if(!w.event)return;if(!0===w.event.abort)return;if(!0===w.event.detected){_(e,w.event.mouse);const t=m(e,w,!1);return void(function(e,t){return!(!e.direction.horizontal||!e.direction.vertical)||(e.direction.horizontal&&!e.direction.vertical?Math.abs(t.delta.x)>0:!e.direction.horizontal&&e.direction.vertical?Math.abs(t.delta.y)>0:void 0)}(w,t)&&(w.handler(t),w.event.lastX=t.position.left,w.event.lastY=t.position.top,w.event.isFirst=!1))}const n=c(e),o=Math.abs(n.left-w.event.x),r=Math.abs(n.top-w.event.y);o!==r&&(w.event.detected=!0,!1!==w.direction.all||!1!==w.event.mouse&&!0===t.modifiers.mouseAllDir||(w.event.abort=w.direction.vertical?o>r:o<r),!0!==w.event.abort&&(document.documentElement.style.cursor="grabbing",document.body.classList.add("swipeout-no-pointer-events"),document.body.classList.add("swipeout-non-selectable")),w.move(e))},end(e){w.event&&(!0!==w.event.mouse&&d(w),document.documentElement.style.cursor="",document.body.classList.remove("swipeout-no-pointer-events"),document.body.classList.remove("swipeout-non-selectable"),!0!==w.event.abort&&!0===w.event.detected&&!0!==w.event.isFirst&&(_(e,w.event.mouse),w.handler(m(e,w,!0))))}};e.__qtouchpan&&(e.__qtouchpan_old=e.__qtouchpan),e.__qtouchpan=w,!0===n&&e.addEventListener("mousedown",w.mouseStart,v),e.addEventListener("touchstart",w.start,f),e.addEventListener("touchmove",w.move,f),e.addEventListener("touchcancel",w.end,f),e.addEventListener("touchend",w.end,f)},update(e,{oldValue:t,value:n,modifiers:o}){const r=e.__qtouchpan;t!==n&&(r.handler=n),o.horizontal===r.direction.horizontal&&o.vertical===r.direction.vertical||(r.direction=h(o))},unbind(e,t){const n=e.__qtouchpan_old||e.__qtouchpan;if(void 0!==n){d(n),document.documentElement.style.cursor="",document.body.classList.remove("swipeout-no-pointer-events"),document.body.classList.remove("swipeout-non-selectable");const o=!0===t.modifiers.mouse,l=!0!==t.modifiers.mouseMightPrevent&&!0!==t.modifiers.mousePrevent,c=void 0===r.passive||{passive:l,capture:!0},h=!0!==t.modifiers.mightPrevent&&!0!==t.modifiers.prevent?r.passive:null;!0===o&&(e.removeEventListener("mousedown",n.mouseStart,c),document.removeEventListener("mousemove",n.move,c),document.removeEventListener("mouseup",n.mouseEnd,c)),e.removeEventListener("touchstart",n.start,h),e.removeEventListener("touchmove",n.move,h),e.removeEventListener("touchcancel",n.end,h),e.removeEventListener("touchend",n.end,h),delete e[e.__qtouchpan_old?"__qtouchpan_old":"__qtouchpan"]}}}},props:{threshold:{type:Number,default:45},revealed:{type:[String,Boolean]},disabled:{type:Boolean,default:!1},passiveListeners:{type:Boolean,default:!1}},watch:{revealed(e){this.innerRevealed!==e&&this._reveal(e,!0)}},data(){return{innerRevealed:this.revealed||!1}},methods:{closeActions(){this.close()},close(){this._isActive||this._reveal(!1,!0)},revealLeft(){!this._isActive&&this.$refs.left&&this._reveal("left",!0)},revealRight(){!this._isActive&&this.$refs.right&&this._reveal("right",!0)},_distanceSwiped(){const e=this.$refs.content.getBoundingClientRect(),t=this.$el.getBoundingClientRect();return e.left-t.left-this.$el.clientLeft},_onPan(e){return this.disabled?null:e.isFirst?this._startListener(e):this._isActive?e.isFinal?this._stopListener(e):this._swipeListener(e):null},_startListener({distance:e}){this.$el.classList.add("swipeout--no-transition"),e.y<=5&&(this._leftActionsWidth=this.$refs.left?this.$refs.left.clientWidth:0,this._rightActionsWidth=this.$refs.right?this.$refs.right.clientWidth:0,this._startLeft=this._distanceSwiped(),this._isActive=!0,this.$emit("active",!0),clearTimeout(this._timer))},_swipeListener({offset:e}){const t=e.x+this._startLeft;return!this.$scopedSlots.left&&t>0||!this.$scopedSlots.right&&t<0?this._animateSlide(0):this._animateSlide(e.x+this._startLeft)},_stopListener({offset:e,distance:t}){this.$el.classList.remove("swipeout--no-transition"),this._isActive=!1,this.$emit("active",!1);const n=this._startLeft+e.x;return 0===this._startLeft&&Math.abs(n)<=this.threshold||t.x>=this.threshold&&(this._startLeft>0&&t.x<this._leftActionsWidth||this._startLeft<0&&t.x<this._rightActionsWidth)?this._reveal(!1):this._reveal(n>0?"left":"right")},_reveal(e,t){var a,b;if(!this._isActive||(a=this.innerRevealed,b=e,(a||b)&&a!==b))return e&&!this.$refs[e]&&(e=!1),this.innerRevealed=e,this.$emit("update:revealed",e),e?"left"===e&&this.$refs.left?(this._leftActionsWidth=t?f(this.$refs.left):this._leftActionsWidth,this._animateSlide(this._leftActionsWidth),this.$emit("revealed",{side:"left",close:this.closeActions}),void this.$emit("leftRevealed",{close:this.closeActions})):void("right"===e&&this.$refs.right&&(this._rightActionsWidth=t?f(this.$refs.right):this._rightActionsWidth,this._animateSlide(-this._rightActionsWidth),this.$emit("revealed",{side:"right",close:this.closeActions}),this.$emit("rightRevealed",{close:this.closeActions}))):(this._animateSlide(0),void this.$emit("closed"))},_shiftLeftActions(e){if(!this.$scopedSlots.left)return;e<0&&(e=0);const t=this.$refs.left,n=this._leftActionsWidth,progress=1-Math.min(e/n,1),o=Math.min(e,n),{children:r}=t,{length:l}=r;for(let i=0;i<l;i++){const e=r[i],t=n-e.offsetLeft-e.offsetWidth;e.style.transform=v(o+t*progress),l>1&&(e.style.zIndex=""+(l-i))}},_shiftRightActions(e){if(!this.$scopedSlots.right)return;e>0&&(e=0);const t=this.$refs.right,n=this._rightActionsWidth,progress=1+Math.max(e/n,-1),o=Math.max(e,-n),{children:r}=t;for(let i=0;i<r.length;i++){const e=r[i];e.style.transform=v(o-e.offsetLeft*progress)}},_animateSlide(e){cancelAnimationFrame(this._frame),this._frame=requestAnimationFrame((()=>{this.$refs.content.style.transform=v(e),this._shiftLeftActions(e),this._shiftRightActions(e)}))}},render(e){const content=[],{left:t,right:n,default:o}=this.$scopedSlots;return t&&content.push(e("div",{ref:"left",staticClass:"swipeout-left"},t({close:this.closeActions}))),n&&content.push(e("div",{ref:"right",staticClass:"swipeout-right"},n({close:this.closeActions}))),content.push(e("div",{ref:"content",staticClass:"swipeout-content",directives:this.disabled||!t&&!n?null:[{name:"touch-pan",value:this._onPan,modifiers:{horizontal:!0,mouse:!0,prevent:!this.passiveListeners,mousePrevent:!0}}]},o?o({revealLeft:this.revealLeft,revealRight:this.revealRight,disabled:this.disabled,close:this.closeActions,revealed:this.innerRevealed}):null)),e("div",{staticClass:"swipeout",class:{"swipeout--disabled":this.disabled}},content)},beforeDestroy(){clearTimeout(this._timer),cancelAnimationFrame(this._frame)}},w={name:"SwipeList",props:{items:{type:Array,required:!0},itemKey:{type:String},transitionKey:{type:String},threshold:{type:Number,default:45},revealed:{type:Object},disabled:{type:Boolean,default:!1},itemDisabled:{type:Function,default:()=>!1},passiveListeners:{type:Boolean,default:!1}},data(){return{innerRevealed:this.revealed||{},rev:this.items.map((()=>null))}},watch:{revealed(e){this.innerRevealed=e},items(){this._emitRevealed({})}},methods:{revealRight(e){this.$refs.items[e]&&this.$refs.items[e].revealRight()},revealLeft(e){this.$refs.items[e]&&this.$refs.items[e].revealLeft()},close(e){if(this.$refs.items){if(void 0===e)return this.$refs.items.forEach((i=>i.close()));if(this.$refs.items[e])return this.$refs.items[e].close()}},isRevealed(e){return this.innerRevealed[e]||!1},closeActions(e){this.close(e)},_onReveal(e,t,n){this.$emit("revealed",{index:t,item:e,side:n.side,close:n.close}),this._emitRevealed({...this.innerRevealed,[t]:n.side})},_onClose(e,t){this.$emit("closed",{index:t,item:e});const{[t]:n,...o}=this.innerRevealed;this._emitRevealed(o)},_getItemKey(e,t){return void 0!==(this.itemKey||this.transitionKey)?e[this.itemKey||this.transitionKey]:t},_emitRevealed(e){void 0===this.revealed?this.innerRevealed=e:this.$emit("update:revealed",e)},__renderItem(e,t,n){const{left:o,right:r,default:l}=this.$scopedSlots,c={};return o&&(c.left=({close:e})=>o({item:t,close:e,index:n})),r&&(c.right=({close:e})=>r({item:t,close:e,index:n})),c.default=({close:o,disabled:r,revealLeft:c,revealRight:d,revealed:h})=>e("div",{ref:"itemsContent",on:{click:()=>this.$emit("swipeout:click",t)}},l({item:t,index:n,close:o,disabled:r,revealed:h,revealLeft:c,revealRight:d})),e(_,{key:n,ref:"items",refInFor:!0,staticClass:"swipeout-list-item",props:{disabled:this.disabled||this.itemDisabled(t),threshold:this.threshold,revealed:this.innerRevealed[n],passiveListeners:this.passiveListeners},on:{revealed:e=>this._onReveal(t,n,e),leftRevealed:e=>this.$emit("leftRevealed",{index:n,item:t,close:e.close}),rightRevealed:e=>this.$emit("rightRevealed",{index:n,item:t,close:e.close}),closed:e=>this._onClose(t,n,e),active:e=>this.$emit("active",e)},scopedSlots:c})}},render(e){return e("div",{staticClass:"swipeout-list",class:{"swipeout--disabled":this.disabled}},this.items.map(((t,n)=>this.__renderItem(e,t,n))))}};n(1040);var y={name:"ComponentsSwipeList",components:{SwipeList:w},data:function(){return{enabled:!0,listA:[{id:0,user:"Liana Kerluke",email:"alize.kuvalis@gmail.com",text:"Ipsam aut commodi quibusdam."},{id:1,user:"Emelia D'Amore",email:"hbruen@yahoo.com",text:"Nihil omnis natus mollitia adipisci deleniti exercitationem."},{id:2,user:"Robbie Kub",email:"neal.hodkiewicz@gmail.com",text:"Et rerum quam eligendi mollitia consequuntur."},{id:3,user:"Tara Ratke",email:"kreiger.elian@frami.net",text:"Hic voluptatem quod eveniet magnam."},{id:4,user:"Enoch Pagac",email:"samantha.torphy@blick.com",text:"Ut neque doloribus officia autem."}],listB:[{id:0,user:"Liana Kerluke",email:"alize.kuvalis@gmail.com",text:"Ipsam aut commodi quibusdam."},{id:1,user:"Emelia D'Amore",email:"hbruen@yahoo.com",text:"Nihil omnis natus mollitia adipisci deleniti exercitationem."},{id:2,user:"Robbie Kub",email:"neal.hodkiewicz@gmail.com",text:"Et rerum quam eligendi mollitia consequuntur."},{id:3,user:"Tara Ratke",email:"kreiger.elian@frami.net",text:"Hic voluptatem quod eveniet magnam."},{id:4,user:"Enoch Pagac",email:"samantha.torphy@blick.com",text:"Ut neque doloribus officia autem."}]}},methods:{remove:function(e,t){this[e]=this[e].filter((function(i){return i!==t}))},itemClick:function(e){console.log(e,"item click")},likeClick:function(e){alert("Like clicked!")}}},L=(n(1042),n(2)),component=Object(L.a)(y,(function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"sc-page-wrapper"}},[t("div",{attrs:{id:"sc-page-content"}},[t("ScCard",[t("SwipeList",{ref:"list",staticClass:"sc-list-swiped",attrs:{disabled:!e.enabled,items:e.listA,"item-key":"id"},on:{"swipeout:click":e.itemClick},scopedSlots:e._u([{key:"default",fn:function(n){var o=n.item;return[t("div",[t("span",{staticClass:"sc-text-semibold"},[e._v("\n\t\t\t\t\t\t\t\t"+e._s(o.user)+" ("+e._s(o.email)+")\n\t\t\t\t\t\t\t")]),e._v(" "),t("p",{staticClass:"uk-margin-remove"},[e._v("\n\t\t\t\t\t\t\t\t"+e._s(o.text)+"\n\t\t\t\t\t\t\t")])])]}},{key:"left",fn:function(n){var o=n.item,r=n.close;return[t("div",{staticClass:"swipeout-action md-bg-red-800 md-color-white",attrs:{title:"remove"},on:{click:function(t){return e.remove("listA",o)}}},[t("i",{staticClass:"mdi mdi-trash-can"})]),e._v(" "),t("div",{staticClass:"swipeout-action md-bg-grey-100 uk-margin-right",on:{click:r}},[t("i",{staticClass:"mdi mdi-close"})])]}},{key:"right",fn:function(n){return o(n),[t("div",{staticClass:"swipeout-action md-bg-blue-800 md-color-white"},[t("i",{staticClass:"mdi mdi-heart"})]),e._v(" "),t("div",{staticClass:"swipeout-action md-bg-green-800 md-color-white"},[t("i",{staticClass:"mdi mdi-archive"})])]}},{key:"empty",fn:function(){return[t("div",[e._v("\n\t\t\t\t\t\t\tlist is empty ( filtered or just empty )\n\t\t\t\t\t\t")])]},proxy:!0}])})],1),e._v(" "),t("ScCard",{staticClass:"uk-margin-top"},[t("SwipeList",{ref:"list",staticClass:"sc-list-swiped",attrs:{disabled:!e.enabled,items:e.listB,"item-key":"id"},on:{"swipeout:click":e.itemClick},scopedSlots:e._u([{key:"default",fn:function(n){var o=n.item;return[t("div",[t("span",{staticClass:"sc-text-semibold"},[e._v("\n\t\t\t\t\t\t\t\t"+e._s(o.user)+" ("+e._s(o.email)+")\n\t\t\t\t\t\t\t")]),e._v(" "),t("p",{staticClass:"uk-margin-remove"},[e._v("\n\t\t\t\t\t\t\t\t"+e._s(o.text)+"\n\t\t\t\t\t\t\t")])])]}},{key:"left",fn:function(n){var o=n.item,r=n.close;return[t("div",{staticClass:"swipeout-action md-color-red-800 sc-padding-left sc-padding-right",attrs:{title:"remove"},on:{click:function(t){return e.remove("listB",o)}}},[t("i",{staticClass:"mdi mdi-trash-can"})]),e._v(" "),t("div",{staticClass:"swipeout-action sc-padding-left sc-padding-right",on:{click:r}},[t("i",{staticClass:"mdi mdi-close"})])]}},{key:"right",fn:function(n){return o(n),[t("div",{staticClass:"swipeout-action md-color-green-800 sc-padding-left sc-padding-right",on:{click:e.likeClick}},[t("i",{staticClass:"mdi mdi-thumb-up"})])]}},{key:"empty",fn:function(){return[t("div",[e._v("\n\t\t\t\t\t\t\tlist is empty ( filtered or just empty )\n\t\t\t\t\t\t")])]},proxy:!0}])})],1)],1)])}),[],!1,null,null,null);t.default=component.exports},812:function(e,t,n){var content=n(1043);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(12).default)("539aefe5",content,!0,{sourceMap:!1})}}]);