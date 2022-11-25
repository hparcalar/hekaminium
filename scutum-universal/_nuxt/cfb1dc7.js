(window.webpackJsonp=window.webpackJsonp||[]).push([[124,16],{1706:function(t,e,n){"use strict";n.r(e);n(19),n(553),n(556);var o=n(753),r=n(607),c=n(617),m={name:"PagesInvoices",components:{ColumnToggle:r.a,ScOffcanvas:c.default},data:function(){return{findInvoice:"",invoices:o,columnCollapsed:!1,columnTransform:!1,invoicesOffcanvas:!0}},computed:{filteredInvoices:function(){var t=this;return this.invoices.filter((function(e){return e.number.toLowerCase().includes(t.findInvoice.toLowerCase())||e.to_company.toLowerCase().includes(t.findInvoice.toLowerCase())}))}},mounted:function(){this.$store.commit("setCardFixed",!0),this.$store.commit("setHeaderExpanded",!0)},beforeDestroy:function(){this.$store.commit("setCardFixed",!1),this.$store.commit("setHeaderExpanded",!1)},methods:{onColumnCollapsing:function(t){this.columnCollapsed=t,this.columnTransform=!0},onColumnToggle:function(){this.columnTransform=!1}}},d=n(2),component=Object(d.a)(m,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"sc-page-wrapper"}},[e("div",{staticClass:"uk-height-1-1 uk-flex uk-flex-center sc-page-over-header",attrs:{id:"sc-page-content"}},[e("div",{staticClass:"uk-width-5-6@m uk-height-1-1"},[e("ScCard",{staticClass:"uk-height-1-1"},[e("div",{staticClass:"uk-grid-divider uk-grid-collapse uk-height-1-1 uk-grid",attrs:{"data-uk-grid":""}},[e("div",{staticClass:"uk-width-expand@l uk-height-1-1"},[e("nuxt-child",{key:t.$route.params.id})],1),t._v(" "),e("div",{staticClass:"uk-width-1-4@m uk-height-1-1 uk-visible@l sc-column-transition",class:{"sc-column-collapsed":t.columnCollapsed,"sc-js-el-transform":t.columnTransform}},[e("div",{staticClass:"uk-flex uk-flex-column uk-height-1-1"},[e("ScCardHeader",{staticClass:"md-bg-grey-200 sc-js-el-transform-visible",attrs:{separator:""}},[e("div",{staticClass:"uk-flex uk-flex-middle uk-flex-center"},[e("div",{staticClass:"sc-js-el-hide uk-margin-medium-right uk-flex-1"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.findInvoice,expression:"findInvoice"}],staticClass:"uk-input sc-js-list-search sc-js-search uk-form-small",attrs:{type:"text",placeholder:"Find invoice..."},domProps:{value:t.findInvoice},on:{input:function(e){e.target.composing||(t.findInvoice=e.target.value)}}})]),t._v(" "),e("client-only",[e("ColumnToggle",{attrs:{"show-icon":"mdi-receipt","hide-title":"Hide invoices","show-title":"Show invoices",collapsed:t.columnCollapsed},on:{columnCollapsing:t.onColumnCollapsing,columnShown:t.onColumnToggle,columnHidden:t.onColumnToggle}})],1)],1)]),t._v(" "),e("ScCardBody",{staticClass:"sc-js-el-hide uk-flex-1"},[e("ul",{staticClass:"uk-list uk-list-divider sc-list-clickable"},t._l(t.filteredInvoices,(function(n){return e("li",{key:n.id,class:{"uk-active":t.$nuxt.$route.path==="/pages/invoices/"+n.id}},[e("nuxt-link",{staticClass:"uk-flex uk-flex-middle uk-width-1-1",attrs:{to:"/pages/invoices/"+n.id}},[e("span",{staticClass:"uk-display-block uk-flex-1 uk-text-truncate"},[e("span",{staticClass:"sc-text-semibold sc-js-list-number"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(n.number)+" "),e("span",{directives:[{name:"show",rawName:"v-show",value:"EUR"===n.currency,expression:"invoice.currency === 'EUR'"}],staticClass:"md-color-light-blue-500"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(EUR)\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])]),t._v(" "),e("span",{staticClass:"uk-display-block sc-list-secondary-text"},[e("span",{staticClass:"uk-text-muted uk-text-small"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tTo:\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "+t._s(n.to_company)+"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("span",{staticClass:"uk-display-block sc-list-secondary-text"},[e("span",{staticClass:"uk-text-muted uk-text-small"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDate:\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "+t._s(n.date)+"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t")])]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:!n.paid,expression:"!invoice.paid"}],staticClass:"uk-label md-bg-red-500 sc-flex-no-shrink uk-margin-small-left"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tUnpaid\r\n\t\t\t\t\t\t\t\t\t\t\t\t")])])],1)})),0)])],1)])])])],1)]),t._v(" "),e("div",{staticClass:"sc-fab-page-wrapper"},[e("nuxt-link",{staticClass:"sc-fab sc-fab-large sc-fab-primary",attrs:{to:"/pages/invoices/new"}},[e("i",{staticClass:"mdi mdi-plus"})])],1),t._v(" "),e("client-only",[e("ScOffcanvas",[e("ul",{staticClass:"uk-list uk-list-divider sc-list-clickable"},t._l(t.filteredInvoices,(function(n){return e("li",{key:n.id,class:{"uk-active":t.$nuxt.$route.path==="/pages/invoices/"+n.id}},[e("nuxt-link",{staticClass:"uk-flex uk-flex-middle uk-width-1-1",attrs:{to:"/pages/invoices/"+n.id}},[e("span",{staticClass:"uk-display-block uk-flex-1 uk-text-truncate"},[e("span",{staticClass:"sc-text-semibold sc-js-list-number"},[t._v("\r\n\t\t\t\t\t\t\t\t\t"+t._s(n.number)+" "),e("span",{directives:[{name:"show",rawName:"v-show",value:"EUR"===n.currency,expression:"invoice.currency === 'EUR'"}],staticClass:"md-color-light-blue-500"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\t(EUR)\r\n\t\t\t\t\t\t\t\t\t")])]),t._v(" "),e("span",{staticClass:"uk-display-block sc-list-secondary-text"},[e("span",{staticClass:"uk-text-muted uk-text-small"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tTo:\r\n\t\t\t\t\t\t\t\t\t")]),t._v(" "+t._s(n.to_company)+"\r\n\t\t\t\t\t\t\t\t")]),t._v(" "),e("span",{staticClass:"uk-display-block sc-list-secondary-text"},[e("span",{staticClass:"uk-text-muted uk-text-small"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tDate:\r\n\t\t\t\t\t\t\t\t\t")]),t._v(" "+t._s(n.date)+"\r\n\t\t\t\t\t\t\t\t")])]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:!n.paid,expression:"!invoice.paid"}],staticClass:"uk-label md-bg-red-500 sc-flex-no-shrink uk-margin-small-left"},[t._v("\r\n\t\t\t\t\t\t\t\tUnpaid\r\n\t\t\t\t\t\t\t")])])],1)})),0)])],1)],1)}),[],!1,null,null,null);e.default=component.exports},553:function(t,e,n){"use strict";var o=n(13),r=n(554),c="includes";o(o.P+o.F*n(555)(c),"String",{includes:function(t){return!!~r(this,t,c).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},554:function(t,e,n){var o=n(101),r=n(45);t.exports=function(t,e,n){if(o(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(r(t))}},555:function(t,e,n){var o=n(4)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[o]=!1,!"/./"[t](e)}catch(t){}}return!0}},556:function(t,e,n){"use strict";var o=n(13),r=n(155)(!0);o(o.P,"Array",{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),n(150)("includes")},607:function(t,e,n){"use strict";var o={props:{hideTitle:{type:String,default:"Hide List"},hideIcon:{type:String,default:"mdi-arrow-collapse-horizontal"},showTitle:{type:String,default:"Show List"},showIcon:{type:String,default:"mdi-arrow-expand-horizontal"},collapsed:{type:Boolean,default:!1}},computed:{columnCollapsed:{get:function(){return this.collapsed},set:function(t){var e=this;return this.$emit("columnCollapsing",t),setTimeout((function(){e.$emit(t?"columnHidden":"columnShown")}),300),t}}},methods:{columnToggle:function(){this.columnCollapsed=!this.columnCollapsed}}},r=n(2),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"uk-flex uk-flex-center",class:{"uk-flex-1":t.columnCollapsed}},[e("a",{directives:[{name:"show",rawName:"v-show",value:!t.columnCollapsed,expression:"!columnCollapsed"}],staticClass:"sc-column-hide sc-actions-icon mdi",class:[t.hideIcon],attrs:{href:"javascript:void(0)","data-uk-tooltip":"",title:t.hideTitle},on:{click:function(e){return e.stopPropagation(),t.columnToggle()}}}),t._v(" "),e("a",{directives:[{name:"show",rawName:"v-show",value:t.columnCollapsed,expression:"columnCollapsed"}],staticClass:"sc-column-show sc-actions-icon mdi",class:[t.showIcon],attrs:{href:"javascript:void(0)","data-uk-tooltip":"",title:t.showTitle},on:{click:function(e){return e.stopPropagation(),t.columnToggle()}}})])}),[],!1,null,null,null);e.a=component.exports},617:function(t,e,n){"use strict";n.r(e);n(31),n(42),n(19),n(43),n(44);var o=n(15),r=n(8),c=n(3);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d={name:"ScOffcanvas",props:{extraClass:{type:String,default:""}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(r.c)(["vxOffcanvasPresent","vxOffcanvasExpanded"])),watch:{vxOffcanvasExpanded:function(t){c.e.mediumMax()&&(t?(UIkit.offcanvas("#sc-offcanvas").show(),this.$store.getters.sidebarMainState&&this.$store.commit("sidebarMainToggle",!1)):UIkit.offcanvas("#sc-offcanvas").hide())},$route:function(){this.$store.getters.offcanvasState&&this.$store.commit("offcanvasToggle",!1)}},mounted:function(){var t=this;c.e.mediumMax()&&t.$nextTick((function(){t.$store.commit("setOffcanvasPresent",!0)}))},beforeDestroy:function(){this.$store.commit("offcanvasToggle",!1),this.$store.commit("setOffcanvasPresent",!1)},methods:{hide:function(){this.$store.commit("offcanvasToggle",!1)}}},l=d,f=n(2),component=Object(f.a)(l,(function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.vxOffcanvasPresent,expression:"vxOffcanvasPresent"}],attrs:{id:"sc-offcanvas","data-uk-offcanvas":"flip: true; container: '#nuxt-wrapper'"}},[e("div",{staticClass:"uk-offcanvas-bar",class:t.extraClass},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports},753:function(t){t.exports=JSON.parse('[{"id":"99a6ebbc-ab55-3354-83d2-a9bf9a402ff6","locales":"en-US","currency":"USD","number":"84/envato/2020","date":"13/08/2018","to_company":"Hartmann, Purdy and Kuvalis","to_address_1":"95764 Winona Centers","to_address_2":"South Carolynmouth","phone":"1-618-486-3485","paid":true,"items":[{"name":"Item 71 Name","description":"Molestias corporis velit aut consequatur id omnis quam minus.","quantity":6,"price":273.32,"VAT":23,"total":1787.52},{"name":"Item 67 Name","description":"Non odio est quaerat ratione recusandae ex mollitia beatae distinctio quas nam neque magni.","quantity":5,"price":263.5,"VAT":23,"total":1620.55},{"name":"Item 49 Name","description":"Totam beatae molestiae hic aliquid qui similique.","quantity":2,"price":199.34,"VAT":9,"total":490.38},{"name":"Item 80 Name","description":"Impedit est a maxime quisquam distinctio doloribus labore unde perspiciatis expedita commodi.","quantity":5,"price":255.54,"VAT":23,"total":1392.7}]},{"id":"c35492c0-1359-3a50-a827-4a7db54e29fc","locales":"en-US","currency":"USD","number":"83/envato/2020","date":"12/08/2018","to_company":"Lueilwitz, O\'Keefe and Dibbert","to_address_1":"1493 Carson Mission","to_address_2":"Mabelleport","phone":"1-681-262-9211 x338","paid":true,"items":[{"name":"Item 47 Name","description":"Et eum vel sed hic perferendis et assumenda.","quantity":5,"price":131.5,"VAT":9,"total":716.7},{"name":"Item 70 Name","description":"Voluptas facere porro debitis vero sapiente optio.","quantity":6,"price":235.93,"VAT":9,"total":1542.96},{"name":"Item 35 Name","description":"Nemo rerum accusamus qui nihil est harum aliquid suscipit.","quantity":1,"price":151.35,"VAT":23,"total":164.97}]},{"id":"320a9171-9e92-3406-ba1f-0e686d914f73","locales":"en-US","currency":"USD","number":"82/envato/2020","date":"11/08/2018","to_company":"Pfannerstill and Sons","to_address_1":"484 Gaylord Locks Apt. 887","to_address_2":"South Manuel","phone":"1-621-670-5570","paid":true,"items":[{"name":"Item 49 Name","description":"Totam beatae molestiae hic aliquid qui similique.","quantity":2,"price":199.34,"VAT":9,"total":490.38},{"name":"Item 76 Name","description":"Iste sint qui odit molestias sed non alias iure molestias dolorem non neque.","quantity":2,"price":244.76,"VAT":23,"total":602.1},{"name":"Item 28 Name","description":"Officia explicabo aperiam eos nihil eum reprehenderit commodi est natus.","quantity":4,"price":68.97,"VAT":23,"total":300.72}]},{"id":"939b7e44-03d6-3513-b66c-fd8f7f370a03","locales":"en-US","currency":"USD","number":"81/envato/2020","date":"10/08/2018","to_company":"Berge, Senger and Hackett","to_address_1":"8931 Botsford Spurs","to_address_2":"North Noemy","phone":"439-962-8253","paid":false,"items":[{"name":"Item 35 Name","description":"Nemo rerum accusamus qui nihil est harum aliquid suscipit.","quantity":1,"price":151.35,"VAT":23,"total":164.97},{"name":"Item 80 Name","description":"Impedit est a maxime quisquam distinctio doloribus labore unde perspiciatis expedita commodi.","quantity":5,"price":255.54,"VAT":23,"total":1392.7}]},{"id":"0035f098-4283-3cb8-a5c1-988517331dfb","locales":"fr-FR","currency":"EUR","number":"80/envato/2020","date":"09/08/2018","to_company":"Miller, Dickinson and Aufderhar","to_address_1":"21795 Homenick Via Apt. 035","to_address_2":"North Lenora","phone":"(831) 551-1545","paid":true,"items":[{"name":"Item 70 Name","description":"Voluptas facere porro debitis vero sapiente optio.","quantity":6,"price":235.93,"VAT":9,"total":1542.96},{"name":"Item 47 Name","description":"Et eum vel sed hic perferendis et assumenda.","quantity":5,"price":131.5,"VAT":9,"total":716.7},{"name":"Item 35 Name","description":"Nemo rerum accusamus qui nihil est harum aliquid suscipit.","quantity":1,"price":151.35,"VAT":23,"total":164.97},{"name":"Item 80 Name","description":"Impedit est a maxime quisquam distinctio doloribus labore unde perspiciatis expedita commodi.","quantity":5,"price":255.54,"VAT":23,"total":1392.7}]},{"id":"04eef1ca-e6db-32f6-be3a-f8779698cf65","locales":"en-US","currency":"USD","number":"79/envato/2020","date":"08/08/2018","to_company":"O\'Kon Group","to_address_1":"890 Trisha Skyway Suite 044","to_address_2":"Markshaven","phone":"454.501.1240 x8459","paid":true,"items":[{"name":"Item 23 Name","description":"Deleniti ducimus id rerum dolor consequatur nisi necessitatibus molestias numquam.","quantity":1,"price":149.61,"VAT":23,"total":184.02},{"name":"Item 70 Name","description":"Voluptas facere porro debitis vero sapiente optio.","quantity":6,"price":235.93,"VAT":9,"total":1542.96},{"name":"Item 47 Name","description":"Et eum vel sed hic perferendis et assumenda.","quantity":5,"price":131.5,"VAT":9,"total":716.7},{"name":"Item 49 Name","description":"Totam beatae molestiae hic aliquid qui similique.","quantity":2,"price":199.34,"VAT":9,"total":490.38}]},{"id":"5d085ecf-777d-3ded-9fbb-7bf8a2393196","locales":"en-US","currency":"USD","number":"78/envato/2020","date":"07/08/2018","to_company":"Towne-Schamberger","to_address_1":"55075 Marvin Wells Apt. 668","to_address_2":"North Hellenhaven","phone":"1-987-319-6703 x75564","paid":true,"items":[{"name":"Item 67 Name","description":"Non odio est quaerat ratione recusandae ex mollitia beatae distinctio quas nam neque magni.","quantity":5,"price":263.5,"VAT":23,"total":1620.55},{"name":"Item 71 Name","description":"Molestias corporis velit aut consequatur id omnis quam minus.","quantity":6,"price":273.32,"VAT":23,"total":1787.52},{"name":"Item 23 Name","description":"Deleniti ducimus id rerum dolor consequatur nisi necessitatibus molestias numquam.","quantity":1,"price":149.61,"VAT":23,"total":184.02}]},{"id":"a8d12525-731b-3628-bb56-6076dadbb97d","locales":"en-US","currency":"USD","number":"77/envato/2020","date":"06/08/2018","to_company":"Hilll Ltd","to_address_1":"106 Heaney Vista Apt. 058","to_address_2":"South Octavia","phone":"+14269770876","paid":true,"items":[{"name":"Item 49 Name","description":"Totam beatae molestiae hic aliquid qui similique.","quantity":2,"price":199.34,"VAT":9,"total":490.38},{"name":"Item 80 Name","description":"Impedit est a maxime quisquam distinctio doloribus labore unde perspiciatis expedita commodi.","quantity":5,"price":255.54,"VAT":23,"total":1392.7},{"name":"Item 23 Name","description":"Deleniti ducimus id rerum dolor consequatur nisi necessitatibus molestias numquam.","quantity":1,"price":149.61,"VAT":23,"total":184.02}]},{"id":"c38e8f77-889c-3d6f-8812-e52d2f769982","locales":"en-US","currency":"USD","number":"76/envato/2020","date":"05/08/2018","to_company":"Schroeder, Cummings and Stracke","to_address_1":"322 Marvin Rest Suite 641","to_address_2":"Shieldstown","phone":"+18932873187","paid":true,"items":[{"name":"Item 70 Name","description":"Voluptas facere porro debitis vero sapiente optio.","quantity":6,"price":235.93,"VAT":9,"total":1542.96},{"name":"Item 35 Name","description":"Nemo rerum accusamus qui nihil est harum aliquid suscipit.","quantity":1,"price":151.35,"VAT":23,"total":164.97}]},{"id":"975cf334-3b27-3248-931f-ae07b6dbd585","locales":"en-US","currency":"USD","number":"75/envato/2020","date":"04/08/2018","to_company":"Rodriguez-Little","to_address_1":"20032 Pouros Plaza Suite 514","to_address_2":"East Jamalmouth","phone":"+1 (392) 893-9899","paid":true,"items":[{"name":"Item 49 Name","description":"Totam beatae molestiae hic aliquid qui similique.","quantity":2,"price":199.34,"VAT":9,"total":490.38},{"name":"Item 76 Name","description":"Iste sint qui odit molestias sed non alias iure molestias dolorem non neque.","quantity":2,"price":244.76,"VAT":23,"total":602.1},{"name":"Item 71 Name","description":"Molestias corporis velit aut consequatur id omnis quam minus.","quantity":6,"price":273.32,"VAT":23,"total":1787.52}]},{"id":"93580474-0f21-3ade-882c-440c83605ab5","locales":"en-US","currency":"USD","number":"74/envato/2020","date":"03/08/2018","to_company":"Kautzer, Blanda and Beier","to_address_1":"11426 Morissette Knolls","to_address_2":"New Alyciaburgh","phone":"(761) 890-8727","paid":true,"items":[{"name":"Item 70 Name","description":"Voluptas facere porro debitis vero sapiente optio.","quantity":6,"price":235.93,"VAT":9,"total":1542.96},{"name":"Item 47 Name","description":"Et eum vel sed hic perferendis et assumenda.","quantity":5,"price":131.5,"VAT":9,"total":716.7},{"name":"Item 28 Name","description":"Officia explicabo aperiam eos nihil eum reprehenderit commodi est natus.","quantity":4,"price":68.97,"VAT":23,"total":300.72},{"name":"Item 35 Name","description":"Nemo rerum accusamus qui nihil est harum aliquid suscipit.","quantity":1,"price":151.35,"VAT":23,"total":164.97},{"name":"Item 23 Name","description":"Deleniti ducimus id rerum dolor consequatur nisi necessitatibus molestias numquam.","quantity":1,"price":149.61,"VAT":23,"total":184.02},{"name":"Item 76 Name","description":"Iste sint qui odit molestias sed non alias iure molestias dolorem non neque.","quantity":2,"price":244.76,"VAT":23,"total":602.1}]},{"id":"73bb3070-cebd-3264-b8ef-70d2dbd0d65f","locales":"en-US","currency":"USD","number":"73/envato/2020","date":"02/08/2018","to_company":"Hahn-Runolfsdottir","to_address_1":"857 Metz Ridges Suite 666","to_address_2":"Wandachester","phone":"+1-264-467-0673","paid":false,"items":[{"name":"Item 76 Name","description":"Iste sint qui odit molestias sed non alias iure molestias dolorem non neque.","quantity":2,"price":244.76,"VAT":23,"total":602.1},{"name":"Item 71 Name","description":"Molestias corporis velit aut consequatur id omnis quam minus.","quantity":6,"price":273.32,"VAT":23,"total":1787.52},{"name":"Item 23 Name","description":"Deleniti ducimus id rerum dolor consequatur nisi necessitatibus molestias numquam.","quantity":1,"price":149.61,"VAT":23,"total":184.02},{"name":"Item 35 Name","description":"Nemo rerum accusamus qui nihil est harum aliquid suscipit.","quantity":1,"price":151.35,"VAT":23,"total":164.97},{"name":"Item 49 Name","description":"Totam beatae molestiae hic aliquid qui similique.","quantity":2,"price":199.34,"VAT":9,"total":490.38}]},{"id":"2998fb13-0dbc-3859-8593-3e293754ec14","locales":"fr-FR","currency":"EUR","number":"72/envato/2020","date":"01/08/2018","to_company":"Feeney, Ferry and Eichmann","to_address_1":"7711 Fritsch Points","to_address_2":"Blockport","phone":"872.626.1190 x50670","paid":true,"items":[{"name":"Item 35 Name","description":"Nemo rerum accusamus qui nihil est harum aliquid suscipit.","quantity":1,"price":151.35,"VAT":23,"total":164.97},{"name":"Item 47 Name","description":"Et eum vel sed hic perferendis et assumenda.","quantity":5,"price":131.5,"VAT":9,"total":716.7},{"name":"Item 76 Name","description":"Iste sint qui odit molestias sed non alias iure molestias dolorem non neque.","quantity":2,"price":244.76,"VAT":23,"total":602.1}]},{"id":"c7bf6b47-0911-35d3-a34e-a457f32abc71","locales":"en-US","currency":"USD","number":"71/envato/2020","date":"31/07/2018","to_company":"Dooley-Hills","to_address_1":"794 Isac Ville Apt. 987","to_address_2":"Norvalfurt","phone":"(886) 818-7245","paid":true,"items":[{"name":"Item 23 Name","description":"Deleniti ducimus id rerum dolor consequatur nisi necessitatibus molestias numquam.","quantity":1,"price":149.61,"VAT":23,"total":184.02},{"name":"Item 70 Name","description":"Voluptas facere porro debitis vero sapiente optio.","quantity":6,"price":235.93,"VAT":9,"total":1542.96}]},{"id":"6b1a69c3-09f2-32c9-baf0-03f2b8879599","locales":"en-US","currency":"USD","number":"70/envato/2020","date":"30/07/2018","to_company":"Strosin-Fadel","to_address_1":"569 Halvorson Fort Suite 648","to_address_2":"East Declan","phone":"+1-203-656-1869","paid":true,"items":[{"name":"Item 70 Name","description":"Voluptas facere porro debitis vero sapiente optio.","quantity":6,"price":235.93,"VAT":9,"total":1542.96},{"name":"Item 80 Name","description":"Impedit est a maxime quisquam distinctio doloribus labore unde perspiciatis expedita commodi.","quantity":5,"price":255.54,"VAT":23,"total":1392.7}]},{"id":"428abfef-430e-3887-9b1e-cc9abefa6691","locales":"en-US","currency":"USD","number":"69/envato/2020","date":"29/07/2018","to_company":"Yundt-Parisian","to_address_1":"829 Orlando Views Apt. 786","to_address_2":"North Petehaven","phone":"1-475-536-4853 x348","paid":true,"items":[{"name":"Item 71 Name","description":"Molestias corporis velit aut consequatur id omnis quam minus.","quantity":6,"price":273.32,"VAT":23,"total":1787.52},{"name":"Item 80 Name","description":"Impedit est a maxime quisquam distinctio doloribus labore unde perspiciatis expedita commodi.","quantity":5,"price":255.54,"VAT":23,"total":1392.7},{"name":"Item 76 Name","description":"Iste sint qui odit molestias sed non alias iure molestias dolorem non neque.","quantity":2,"price":244.76,"VAT":23,"total":602.1}]},{"id":"ace6f975-95ed-3815-9382-b085b77f6d6a","locales":"en-US","currency":"USD","number":"68/envato/2020","date":"28/07/2018","to_company":"Fay Group","to_address_1":"340 Britney Radial","to_address_2":"Port Emoryshire","phone":"453.718.6257","paid":true,"items":[{"name":"Item 35 Name","description":"Nemo rerum accusamus qui nihil est harum aliquid suscipit.","quantity":1,"price":151.35,"VAT":23,"total":164.97},{"name":"Item 28 Name","description":"Officia explicabo aperiam eos nihil eum reprehenderit commodi est natus.","quantity":4,"price":68.97,"VAT":23,"total":300.72}]},{"id":"1fc7b051-e70a-3019-84d5-bbe36a56f96d","locales":"en-US","currency":"USD","number":"67/envato/2020","date":"27/07/2018","to_company":"Fay, Hilll and Price","to_address_1":"4020 Tillman Mount Apt. 032","to_address_2":"West Albertfurt","phone":"505.617.7112 x92470","paid":true,"items":[{"name":"Item 47 Name","description":"Et eum vel sed hic perferendis et assumenda.","quantity":5,"price":131.5,"VAT":9,"total":716.7},{"name":"Item 76 Name","description":"Iste sint qui odit molestias sed non alias iure molestias dolorem non neque.","quantity":2,"price":244.76,"VAT":23,"total":602.1},{"name":"Item 71 Name","description":"Molestias corporis velit aut consequatur id omnis quam minus.","quantity":6,"price":273.32,"VAT":23,"total":1787.52},{"name":"Item 49 Name","description":"Totam beatae molestiae hic aliquid qui similique.","quantity":2,"price":199.34,"VAT":9,"total":490.38},{"name":"Item 70 Name","description":"Voluptas facere porro debitis vero sapiente optio.","quantity":6,"price":235.93,"VAT":9,"total":1542.96}]},{"id":"c8087fef-0ec6-3edf-9520-582ed5c4648c","locales":"en-US","currency":"USD","number":"66/envato/2020","date":"26/07/2018","to_company":"Abbott-Klein","to_address_1":"5118 Ferry Path Apt. 249","to_address_2":"North Eda","phone":"+1.924.235.3761","paid":true,"items":[{"name":"Item 76 Name","description":"Iste sint qui odit molestias sed non alias iure molestias dolorem non neque.","quantity":2,"price":244.76,"VAT":23,"total":602.1},{"name":"Item 23 Name","description":"Deleniti ducimus id rerum dolor consequatur nisi necessitatibus molestias numquam.","quantity":1,"price":149.61,"VAT":23,"total":184.02},{"name":"Item 80 Name","description":"Impedit est a maxime quisquam distinctio doloribus labore unde perspiciatis expedita commodi.","quantity":5,"price":255.54,"VAT":23,"total":1392.7},{"name":"Item 28 Name","description":"Officia explicabo aperiam eos nihil eum reprehenderit commodi est natus.","quantity":4,"price":68.97,"VAT":23,"total":300.72}]},{"id":"0b38dd86-e25a-383c-a63e-0f9b4c1b8817","locales":"en-US","currency":"USD","number":"65/envato/2020","date":"25/07/2018","to_company":"Fisher-Feest","to_address_1":"66557 Schmidt Camp","to_address_2":"Lake Gilbertoburgh","phone":"505-969-0952 x815","paid":true,"items":[{"name":"Item 47 Name","description":"Et eum vel sed hic perferendis et assumenda.","quantity":5,"price":131.5,"VAT":9,"total":716.7},{"name":"Item 80 Name","description":"Impedit est a maxime quisquam distinctio doloribus labore unde perspiciatis expedita commodi.","quantity":5,"price":255.54,"VAT":23,"total":1392.7}]}]')}}]);