(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{1008:function(t,e,r){t.exports=r.p+"img/avatar_default_md@2x.5eda6a7.png"},1009:function(t,e,r){t.exports=r.p+"img/avatar_default_md.8b4f4a9.png"},1010:function(t,e,r){var map={"./alex-guillaume-769172-unsplash.jpg":565,"./alex-guillaume-769172-unsplash@2x.jpg":572,"./alex-guillaume-769172-unsplash_md.jpg":455,"./alex-guillaume-769172-unsplash_md@2x.jpg":471,"./avantgarde-concept-763896-unsplash.jpg":566,"./avantgarde-concept-763896-unsplash@2x.jpg":573,"./avantgarde-concept-763896-unsplash_md.jpg":456,"./avantgarde-concept-763896-unsplash_md@2x.jpg":472,"./briana-tozour-756151-unsplash.jpg":501,"./briana-tozour-756151-unsplash@2x.jpg":574,"./briana-tozour-756151-unsplash_md.jpg":473,"./briana-tozour-756151-unsplash_md@2x.jpg":474,"./casey-horner-768005-unsplash.jpg":575,"./casey-horner-768005-unsplash@2x.jpg":576,"./casey-horner-768005-unsplash_md.jpg":475,"./casey-horner-768005-unsplash_md@2x.jpg":476,"./ciaran-o-brien-769402-unsplash.jpg":577,"./ciaran-o-brien-769402-unsplash@2x.jpg":578,"./ciaran-o-brien-769402-unsplash_md.jpg":477,"./ciaran-o-brien-769402-unsplash_md@2x.jpg":478,"./daria-kopylova-766667-unsplash.jpg":579,"./daria-kopylova-766667-unsplash@2x.jpg":580,"./daria-kopylova-766667-unsplash_md.jpg":479,"./daria-kopylova-766667-unsplash_md@2x.jpg":480,"./eiliv-aceron-765897-unsplash.jpg":581,"./eiliv-aceron-765897-unsplash@2x.jpg":582,"./eiliv-aceron-765897-unsplash_md.jpg":481,"./eiliv-aceron-765897-unsplash_md@2x.jpg":482,"./paula-brustur-766878-unsplash.jpg":583,"./paula-brustur-766878-unsplash@2x.jpg":584,"./paula-brustur-766878-unsplash_md.jpg":483,"./paula-brustur-766878-unsplash_md@2x.jpg":484,"./pietro-mattia-764559-unsplash.jpg":567,"./pietro-mattia-764559-unsplash@2x.jpg":585,"./pietro-mattia-764559-unsplash_md.jpg":457,"./pietro-mattia-764559-unsplash_md@2x.jpg":485,"./rachel-park-366508-unsplash.jpg":458,"./rachel-park-366508-unsplash@2x.jpg":486,"./rachel-park-366508-unsplash_md.jpg":459,"./rachel-park-366508-unsplash_md@2x.jpg":487,"./ray-hennessy-763310-unsplash.jpg":488,"./ray-hennessy-763310-unsplash@2x.jpg":586,"./ray-hennessy-763310-unsplash_md.jpg":489,"./ray-hennessy-763310-unsplash_md@2x.jpg":490,"./rodion-kutsaev-760882-unsplash.jpg":568,"./rodion-kutsaev-760882-unsplash@2x.jpg":587,"./rodion-kutsaev-760882-unsplash_md.jpg":460,"./rodion-kutsaev-760882-unsplash_md@2x.jpg":491,"./san-fermin-pamplona-navarra-768251-unsplash.jpg":588,"./san-fermin-pamplona-navarra-768251-unsplash@2x.jpg":589,"./san-fermin-pamplona-navarra-768251-unsplash_md.jpg":492,"./san-fermin-pamplona-navarra-768251-unsplash_md@2x.jpg":493,"./shane-young-768821-unsplash.jpg":590,"./shane-young-768821-unsplash@2x.jpg":591,"./shane-young-768821-unsplash_md.jpg":494,"./shane-young-768821-unsplash_md@2x.jpg":495,"./steve-roe-763192-unsplash.jpg":592,"./steve-roe-763192-unsplash@2x.jpg":593,"./steve-roe-763192-unsplash_md.jpg":496,"./steve-roe-763192-unsplash_md@2x.jpg":497,"./urban-sanden-768851-unsplash.jpg":594,"./urban-sanden-768851-unsplash@2x.jpg":595,"./urban-sanden-768851-unsplash_md.jpg":498,"./urban-sanden-768851-unsplash_md@2x.jpg":499,"./wynand-van-poortvliet-761831-unsplash.jpg":569,"./wynand-van-poortvliet-761831-unsplash@2x.jpg":596,"./wynand-van-poortvliet-761831-unsplash_md.jpg":461,"./wynand-van-poortvliet-761831-unsplash_md@2x.jpg":500};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=1010},1662:function(t,e,r){"use strict";r.r(e);var n=r(4).c.sentence,o={name:"ComponentsCards",data:function(){return{cardACollapsed:!1,cardAClosed:!1,cardBFullScreen:!1,cardCLoading:!1,cardCContent:n({words:80}),cardDCollapsed:!0,cardDClosed:!1,cardFFullScreen:!1,btnDisabled:!1}},computed:{avatarImg:function(){return r(1009)},cardImgSrc:function(){return r(458)}},methods:{getBackgroundImage:function(image){return r(1010)("./"+image)},loadContent:function(){var t=this;this.btnDisabled||(this.cardCLoading=!0,this.btnDisabled=!0,setTimeout((function(){t.cardCContent=n({words:Math.floor(120*Math.random())+40}),t.cardCLoading=!1,t.btnDisabled=!1}),1200))},cardCloseCallback:function(){console.log("Card closed!")}}},d=r(3),component=Object(d.a)(o,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"sc-page-wrapper"}},[e("div",{attrs:{id:"sc-page-content"}},[e("div",{staticClass:"uk-child-width-1-2@s uk-grid",attrs:{"data-uk-grid":""}},[e("div",[e("ScCard",[e("ScCardTitle",[t._v("\r\n\t\t\t\t\t\t\tTitle\r\n\t\t\t\t\t\t")]),t._v(" "),e("ScCardBody",[e("p",[t._v("\r\n\t\t\t\t\t\t\t\tLorem ipsum "),e("a",{attrs:{href:"javascript:void(0)"}},[t._v("\r\n\t\t\t\t\t\t\t\t\tdolor\r\n\t\t\t\t\t\t\t\t")]),t._v(" sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n\t\t\t\t\t\t\t")])])],1)],1),t._v(" "),e("div",[e("ScCard",{attrs:{hover:""}},[e("ScCardTitle",[t._v("\r\n\t\t\t\t\t\t\tHover\r\n\t\t\t\t\t\t")]),t._v(" "),e("ScCardBody",[e("p",[t._v("\r\n\t\t\t\t\t\t\t\tLorem ipsum "),e("a",{attrs:{href:"javascript:void(0)"}},[t._v("\r\n\t\t\t\t\t\t\t\t\tdolor\r\n\t\t\t\t\t\t\t\t")]),t._v(" sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n\t\t\t\t\t\t\t")])])],1)],1)]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"uk-child-width-1-3@l uk-child-width-1-2@s uk-grid",attrs:{"data-uk-grid":""}},[e("div",[e("ScCard",[e("ScCardHeader",{attrs:{separator:""}},[e("div",{staticClass:"uk-flex uk-flex-middle"},[e("div",{staticClass:"uk-flex-1"},[e("ScCardTitle",[t._v("\r\n\t\t\t\t\t\t\t\t\t\tBest Sellers\r\n\t\t\t\t\t\t\t\t\t")])],1),t._v(" "),e("div",{staticClass:"sc-actions"},[e("a",{staticClass:"sc-actions-icon mdi mdi-trash-can-outline",attrs:{href:"javascript:void(0)"}}),t._v(" "),e("a",{staticClass:"sc-actions-icon mdi mdi-dots-vertical",attrs:{href:"javascript:void(0)"}})])])]),t._v(" "),e("ScCardBody",[t._v("\r\n\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem corporis est laborum molestiae nostrum officia optio pariatur perspiciatis provident quaerat ratione reprehenderit sequi similique soluta, veritatis voluptate voluptatem voluptates!\r\n\t\t\t\t\t\t")])],1)],1),t._v(" "),e("div",[e("ScCard",[e("ScCardHeader",[e("div",{staticClass:"uk-grid-small uk-flex-middle uk-grid",attrs:{"data-uk-grid":""}},[e("div",{staticClass:"uk-width-auto"},[e("img",{directives:[{name:"rjs",rawName:"v-rjs",value:r(1008),expression:"require('~/assets/img/avatars/avatar_default_md@2x.png')"}],staticClass:"uk-border-circle",attrs:{width:"48",height:"48",src:t.avatarImg,alt:""}})]),t._v(" "),e("div",{staticClass:"uk-width-expand"},[e("ScCardTitle",[t._v("\r\n\t\t\t\t\t\t\t\t\t\tTitle\r\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("ScCardMeta",[e("time",{attrs:{datetime:"2016-04-01T19:00"}},[t._v("\r\n\t\t\t\t\t\t\t\t\t\t\tApril 01, 2019\r\n\t\t\t\t\t\t\t\t\t\t")])])],1)])]),t._v(" "),e("ScCardBody",[e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.")])]),t._v(" "),e("ScCardFooter",[e("a",{staticClass:"sc-button",attrs:{href:"javascript:void(0)"}},[t._v("\r\n\t\t\t\t\t\t\t\tRead more\r\n\t\t\t\t\t\t\t")])])],1)],1),t._v(" "),e("div",[e("ScCard",[e("ScCardHeader",{staticClass:"md-bg-light-green-700 sc-light",attrs:{separator:""}},[e("ScCardTitle",[t._v("\r\n\t\t\t\t\t\t\t\tTitle\r\n\t\t\t\t\t\t\t")]),t._v(" "),e("ScCardMeta",[t._v("\r\n\t\t\t\t\t\t\t\tSubtitle\r\n\t\t\t\t\t\t\t")])],1),t._v(" "),e("ScCardBody",[e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.")])]),t._v(" "),e("ScCardFooter",{staticClass:"md-bg-grey-50",attrs:{separator:""}},[e("a",{staticClass:"sc-button",attrs:{href:"javascript:void(0)"}},[t._v("\r\n\t\t\t\t\t\t\t\tMore info\r\n\t\t\t\t\t\t\t")])])],1)],1),t._v(" "),e("div",[e("ScCard",{staticClass:"uk-position-relative"},[e("ScCardHeader",[e("div",{staticClass:"uk-flex uk-flex-middle"},[e("div",{staticClass:"uk-flex-1"},[e("ScCardTitle",[t._v("\r\n\t\t\t\t\t\t\t\t\t\tBreakfast\r\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("ScCardMeta",[e("time",{attrs:{datetime:"2019-04-01T19:00"}},[t._v("\r\n\t\t\t\t\t\t\t\t\t\t\tApril 01, 2019\r\n\t\t\t\t\t\t\t\t\t\t")])])],1),t._v(" "),e("div",{staticClass:"sc-actions"},[e("a",{staticClass:"sc-actions-icon mdi mdi-dots-vertical",attrs:{href:"javascript:void(0)"}})])])]),t._v(" "),e("div",{staticClass:"uk-cover-container uk-height-medium"},[e("img",{directives:[{name:"rjs",rawName:"v-rjs",value:r(486),expression:"require('~/assets/img/photos/rachel-park-366508-unsplash@2x.jpg')"}],attrs:{src:t.cardImgSrc,alt:"rachel-park-366508-unsplash","data-uk-cover":""}})]),t._v(" "),e("ScCardBody",[e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.")])]),t._v(" "),e("ScCardFooter",[e("a",{staticClass:"mdi mdi-heart-outline sc-icon-square-large md-color-red-600",attrs:{href:"javascript:void(0)"}}),t._v(" "),e("a",{staticClass:"mdi mdi-share-variant sc-icon-square-large",attrs:{href:"javascript:void(0)"}})])],1)],1),t._v(" "),e("div",[e("ScCard",[e("ScCardHeader",{staticClass:"sc-light uk-margin-medium-bottom uk-cover-container"},[e("img",{directives:[{name:"rjs",rawName:"v-rjs",value:t.getBackgroundImage("wynand-van-poortvliet-761831-unsplash@2x.jpg"),expression:"getBackgroundImage('wynand-van-poortvliet-761831-unsplash@2x.jpg')"}],attrs:{src:t.getBackgroundImage("wynand-van-poortvliet-761831-unsplash.jpg"),alt:"wynand-van-poortvliet-761831-unsplash","data-uk-cover":""}}),t._v(" "),e("ScCardTitle",[t._v("\r\n\t\t\t\t\t\t\t\tTitle\r\n\t\t\t\t\t\t\t")]),t._v(" "),e("ScCardMeta",[t._v("\r\n\t\t\t\t\t\t\t\tSubtitle\r\n\t\t\t\t\t\t\t")]),t._v(" "),e("canvas",{attrs:{width:"100%",height:"140px"}})],1),t._v(" "),e("ScCardBody",[t._v("\r\n\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus expedita necessitatibus omnis quasi quibusdam. Consequuntur eaque esse et eum ipsa itaque laudantium libero magnam, minima modi nulla, odio odit, omnis quibusdam quidem quod reiciendis reprehenderit sunt ullam voluptate. Aperiam nemo nobis quo quos recusandae sint sunt tempora unde vero voluptate. Ad, aliquam animi atque autem beatae cum dignissimos dolor eius ex impedit iusto laboriosam neque pariatur, provident quis repudiandae vero? Aut hic laborum nobis sint totam! A accusantium assumenda at culpa debitis dignissimos esse eveniet fugit iusto minima molestiae necessitatibus non nulla officiis perspiciatis.\r\n\t\t\t\t\t\t")]),t._v(" "),e("ScCardFooter",{attrs:{separator:""}},[e("a",{staticClass:"sc-button sc-button-default sc-button-flat",attrs:{href:"javascript:void(0)"}},[t._v("\r\n\t\t\t\t\t\t\t\tRead more\r\n\t\t\t\t\t\t\t")])])],1)],1),t._v(" "),e("div",[e("ScCard",[e("ScCardHeader",{staticClass:"sc-light uk-margin-medium-bottom uk-flex uk-cover-container uk-cover-bottom uk-flex-column"},[e("img",{directives:[{name:"rjs",rawName:"v-rjs",value:t.getBackgroundImage("shane-young-768821-unsplash@2x.jpg"),expression:"getBackgroundImage('shane-young-768821-unsplash@2x.jpg')"}],attrs:{src:t.getBackgroundImage("shane-young-768821-unsplash.jpg"),alt:"shane-young-768821-unsplash","data-uk-cover":""}}),t._v(" "),e("ScCardActions",{staticClass:"uk-flex-right"},[e("a",{staticClass:"sc-actions-icon mdi mdi-thumb-up-outline",attrs:{href:"javascript:void(0)"}})]),t._v(" "),e("canvas",{attrs:{width:"100%",height:"120px"}})],1),t._v(" "),e("ScCardBody",[e("h3",[t._v("Title")]),t._v(" "),e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.")])]),t._v(" "),e("ScCardFooter",{attrs:{separator:""}},[e("a",{staticClass:"sc-button sc-button-default sc-button-flat",attrs:{href:"javascript:void(0)"}},[t._v("\r\n\t\t\t\t\t\t\t\tMore info\r\n\t\t\t\t\t\t\t")]),t._v(" "),e("a",{staticClass:"sc-button sc-button-flat md-color-light-blue-500",attrs:{href:"javascript:void(0)"}},[t._v("\r\n\t\t\t\t\t\t\t\tShare\r\n\t\t\t\t\t\t\t")])])],1)],1)]),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"uk-child-width-1-3@l uk-child-width-1-2@m uk-grid",attrs:{"data-uk-grid":""}},[e("div",[e("Transition",{attrs:{name:"scale-up"},on:{"after-leave":t.cardCloseCallback}},[e("ScCard",{directives:[{name:"show",rawName:"v-show",value:!t.cardAClosed,expression:"!cardAClosed"}],attrs:{collapsed:!t.cardACollapsed}},[e("ScCardHeader",[e("div",{staticClass:"uk-flex uk-flex-middle"},[e("div",{staticClass:"uk-flex-1"},[e("ScCardTitle",[t._v("\r\n\t\t\t\t\t\t\t\t\t\t\tTitle\r\n\t\t\t\t\t\t\t\t\t\t")])],1),t._v(" "),e("ScCardActions",[e("a",{staticClass:"sc-actions-icon mdi",class:{"mdi-window-minimize":!t.cardACollapsed,"mdi-window-maximize":t.cardACollapsed},attrs:{href:"javascript:void(0)"},on:{click:function(e){e.preventDefault(),t.cardACollapsed=!t.cardACollapsed}}}),t._v(" "),e("a",{staticClass:"sc-actions-icon mdi mdi-close",attrs:{href:"javascript:void(0)"},on:{click:function(e){e.preventDefault(),t.cardAClosed=!0}}})])],1)]),t._v(" "),e("ScTransition",{attrs:{name:"slideUp"}},[e("ScCardContent",{directives:[{name:"show",rawName:"v-show",value:!t.cardACollapsed,expression:"!cardACollapsed"}]},[e("ScCardBody",[t._v("\r\n\t\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet animi atque aut consectetur dolor doloremque eaque eius error esse exercitationem expedita fugiat id ipsa, itaque iusto laudantium maiores modi molestiae nam nesciunt nobis non nostrum numquam obcaecati perferendis provident qui suscipit tempora tempore ut voluptates voluptatum! Ad aut excepturi, fugit harum ipsum quia reiciendis reprehenderit? Aliquam animi consectetur debitis, delectus deleniti doloribus eos eum explicabo facilis hic laudantium maxime molestias, nemo quia quisquam rerum, sapiente sunt. Accusantium, at autem consequatur dolor earum inventore ipsa ipsum, labore nam neque numquam quam quod totam ullam veritatis. Fugit modi molestias quae.\r\n\t\t\t\t\t\t\t\t\t")])],1)],1)],1)],1)],1),t._v(" "),e("div",[e("ScCard",{attrs:{loading:t.cardCLoading}},[e("ScCardHeader",{attrs:{separator:""}},[e("div",{staticClass:"uk-flex uk-flex-middle"},[e("div",{staticClass:"uk-flex-1 uk-overflow-hidden"},[e("ScCardTitle",[t._v("\r\n\t\t\t\t\t\t\t\t\t\tTitle\r\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("ScCardMeta",{staticClass:"uk-text-truncate"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, voluptatum.\r\n\t\t\t\t\t\t\t\t\t")])],1),t._v(" "),e("ScCardActions",{staticClass:"uk-margin-left"},[e("a",{staticClass:"sc-actions-icon mdi mdi-refresh",class:{"md-color-grey-400":t.btnDisabled},attrs:{href:"javascript:void(0)"},on:{click:function(e){return e.preventDefault(),t.loadContent.apply(null,arguments)}}})])],1)]),t._v(" "),e("ScCardContent",{attrs:{loading:t.cardCLoading}},[e("ScCardBody",[t._v("\r\n\t\t\t\t\t\t\t\t"+t._s(t.cardCContent)+"\r\n\t\t\t\t\t\t\t")])],1)],1)],1),t._v(" "),e("div",[e("Transition",{attrs:{name:"scale-up"},on:{"after-leave":t.cardCloseCallback}},[e("ScCard",{directives:[{name:"show",rawName:"v-show",value:!t.cardDClosed,expression:"!cardDClosed"}],attrs:{collapsed:!t.cardDCollapsed}},[e("ScCardHeader",[e("div",{staticClass:"uk-flex uk-flex-middle"},[e("div",{staticClass:"uk-flex-1"},[e("ScCardTitle",[t._v("\r\n\t\t\t\t\t\t\t\t\t\t\tTitle\r\n\t\t\t\t\t\t\t\t\t\t")])],1),t._v(" "),e("ScCardActions",[e("a",{staticClass:"sc-actions-icon mdi",class:{"mdi-window-minimize":!t.cardDCollapsed,"mdi-window-maximize":t.cardDCollapsed},attrs:{href:"javascript:void(0)"},on:{click:function(e){e.preventDefault(),t.cardDCollapsed=!t.cardDCollapsed}}}),t._v(" "),e("a",{staticClass:"sc-actions-icon mdi mdi-close",attrs:{href:"javascript:void(0)"},on:{click:function(e){e.preventDefault(),t.cardDClosed=!0}}})])],1)]),t._v(" "),e("ScTransition",{attrs:{name:"slideUp"}},[e("ScCardContent",{directives:[{name:"show",rawName:"v-show",value:!t.cardDCollapsed,expression:"!cardDCollapsed"}]},[e("ScCardBody",[t._v("\r\n\t\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet animi atque aut consectetur dolor doloremque eaque eius error esse exercitationem expedita fugiat id ipsa, itaque iusto laudantium maiores modi molestiae nam nesciunt nobis non nostrum numquam obcaecati perferendis provident qui suscipit tempora tempore ut voluptates voluptatum! Ad aut excepturi, fugit harum ipsum quia reiciendis reprehenderit? Aliquam animi consectetur debitis, delectus deleniti doloribus eos eum explicabo facilis hic laudantium maxime molestias, nemo quia quisquam rerum, sapiente sunt. Accusantium, at autem consequatur dolor earum inventore ipsa ipsum, labore nam neque numquam quam quod totam ullam veritatis. Fugit modi molestias quae.\r\n\t\t\t\t\t\t\t\t\t")])],1)],1)],1)],1)],1),t._v(" "),e("div",[e("ScCard",{attrs:{"full-screen":t.cardBFullScreen}},[e("ScCardHeader",{attrs:{separator:""}},[e("div",{staticClass:"uk-flex uk-flex-middle"},[e("div",{staticClass:"uk-flex-1"},[e("ScCardTitle",[t._v("\r\n\t\t\t\t\t\t\t\t\t\tTitle\r\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("ScCardMeta",[e("time",{attrs:{datetime:"2019-01-01"}},[t._v("\r\n\t\t\t\t\t\t\t\t\t\t\tJan 01, 2021\r\n\t\t\t\t\t\t\t\t\t\t")])])],1),t._v(" "),e("ScCardActions",[e("a",{staticClass:"sc-actions-icon mdi mdi-fullscreen",class:{"mdi-fullscreen":!t.cardBFullScreen,"mdi-fullscreen-exit":t.cardBFullScreen},attrs:{href:"javascript:void(0)"},on:{click:function(e){e.preventDefault(),t.cardBFullScreen=!t.cardBFullScreen}}})])],1)]),t._v(" "),e("ScCardContent",[e("ScCardBody",[t._v("\r\n\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet animi atque aut consectetur dolor doloremque eaque eius error esse exercitationem expedita fugiat id ipsa, itaque iusto laudantium maiores modi molestiae nam nesciunt nobis non nostrum numquam obcaecati perferendis provident qui suscipit tempora tempore ut voluptates voluptatum! Ad aut excepturi, fugit harum ipsum quia reiciendis reprehenderit? Aliquam animi consectetur debitis, delectus deleniti doloribus eos eum explicabo facilis hic laudantium maxime molestias, nemo quia quisquam rerum, sapiente sunt. Accusantium, at autem consequatur dolor earum inventore ipsa ipsum, labore nam neque numquam quam quod totam ullam veritatis. Fugit modi molestias quae.\r\n\t\t\t\t\t\t\t\t"),e("div",{staticClass:"uk-margin-top sc-card-fs-hidden"},[t._v("\r\n\t\t\t\t\t\t\t\t\tContent invisible when card is in fullscreen mode.\r\n\t\t\t\t\t\t\t\t")]),t._v(" "),e("div",{staticClass:"sc-card-content-more sc-border-top uk-margin-top sc-padding-top"},[e("h4",{staticClass:"uk-margin-bottom-small"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tContent visible when card is in fullscreen mode.\r\n\t\t\t\t\t\t\t\t\t")]),t._v("\r\n\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam at debitis inventore itaque labore nostrum? Aspernatur, consequuntur, rerum. Esse explicabo fugit illo in ipsam iusto laborum, magnam minima non odio, perspiciatis placeat possimus praesentium quidem saepe similique vel voluptatum! Aliquam aspernatur corporis deserunt doloremque est eum fugit illum ipsa maxime minus molestias numquam, obcaecati possimus quas reiciendis sint unde voluptatum? Adipisci corporis culpa delectus, dolore eaque esse hic, ipsam laboriosam, nobis quasi quod ratione repellat repellendus ullam voluptate? Ab amet, atque corporis cupiditate deleniti eaque eius est eum eveniet ex excepturi fugiat in laboriosam minima necessitatibus nemo nisi nulla odio perferendis placeat porro praesentium quae quas quibusdam repellat, rerum sint soluta vitae, voluptatem voluptatum! Consectetur culpa cupiditate, eius maxime neque nobis odit possimus qui reiciendis repellat, sed tempore tenetur veritatis! Aliquam at blanditiis distinctio doloremque eos incidunt iste perspiciatis provident quos rem, repellendus reprehenderit rerum suscipit tempora ullam vero, voluptates? Aliquid blanditiis delectus deleniti, dolor doloribus eum explicabo iste laboriosam nisi nostrum odio odit possimus quidem repellat voluptas? Ab aliquam animi architecto blanditiis delectus dicta dolor doloribus earum, eveniet excepturi expedita inventore maxime minus molestiae nesciunt nihil nisi nulla officia optio provident quasi quis quod rem repellendus soluta veniam.\r\n\t\t\t\t\t\t\t\t")])])],1)],1)],1),t._v(" "),e("div",[e("ScCard",{attrs:{"full-screen":t.cardFFullScreen}},[e("ScCardHeader",{attrs:{separator:""}},[e("div",{staticClass:"uk-flex uk-flex-middle"},[e("a",{staticClass:"sc-actions-icon mdi mdi-arrow-left sc-card-fs-visible uk-margin-right",attrs:{href:"javascript:void(0)"},on:{click:function(e){e.preventDefault(),t.cardFFullScreen=!t.cardFFullScreen}}}),t._v(" "),e("div",{staticClass:"uk-flex-1"},[e("ScCardTitle",[t._v("\r\n\t\t\t\t\t\t\t\t\t\tTitle\r\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("ScCardMeta",[e("time",{attrs:{datetime:"2019-01-01"}},[t._v("\r\n\t\t\t\t\t\t\t\t\t\t\tJan 01, 2021\r\n\t\t\t\t\t\t\t\t\t\t")])])],1)])]),t._v(" "),e("ScCardContent",[e("ScCardBody",[e("p",[t._v("\r\n\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet animi\r\n\t\t\t\t\t\t\t\t\tatque aut consectetur dolor doloremque eaque eius error esse exercitationem expedita\r\n\t\t\t\t\t\t\t\t\tfugiat id ipsa, itaque iusto laudantium maiores modi molestiae nam nesciunt nobis\r\n\t\t\t\t\t\t\t\t\tnon nostrum numquam obcaecati perferendis provident qui suscipit tempora tempore ut\r\n\t\t\t\t\t\t\t\t\tvoluptates voluptatum! Ad aut excepturi, fugit harum ipsum quia reiciendis\r\n\t\t\t\t\t\t\t\t\treprehenderit? Aliquam animi consectetur debitis, delectus deleniti doloribus eos\r\n\t\t\t\t\t\t\t\t\teum explicabo facilis hic laudantium maxime molestias, nemo quia quisquam rerum,\r\n\t\t\t\t\t\t\t\t\tsapiente sunt. Accusantium, at autem consequatur dolor earum inventore ipsa ipsum,\r\n\t\t\t\t\t\t\t\t\tlabore nam neque numquam quam quod totam ullam veritatis. Fugit modi molestias\r\n\t\t\t\t\t\t\t\t\tquae.\r\n\t\t\t\t\t\t\t\t")]),t._v(" "),e("a",{staticClass:"sc-card-fs-hidden",attrs:{href:"javascript:void(0)"},on:{click:function(e){e.preventDefault(),t.cardFFullScreen=!t.cardFFullScreen}}},[t._v("Read more")]),t._v(" "),e("div",{staticClass:"sc-card-content-more sc-border-top uk-margin-top sc-padding-top"},[e("h4",{staticClass:"uk-margin-bottom-small"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\tContent visible when card is in fullscreen mode.\r\n\t\t\t\t\t\t\t\t\t")]),t._v("\r\n\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam at debitis inventore itaque labore nostrum? Aspernatur, consequuntur, rerum. Esse explicabo fugit illo in ipsam iusto laborum, magnam minima non odio, perspiciatis placeat possimus praesentium quidem saepe similique vel voluptatum! Aliquam aspernatur corporis deserunt doloremque est eum fugit illum ipsa maxime minus molestias numquam, obcaecati possimus quas reiciendis sint unde voluptatum? Adipisci corporis culpa delectus, dolore eaque esse hic, ipsam laboriosam, nobis quasi quod ratione repellat repellendus ullam voluptate? Ab amet, atque corporis cupiditate deleniti eaque eius est eum eveniet ex excepturi fugiat in laboriosam minima necessitatibus nemo nisi nulla odio perferendis placeat porro praesentium quae quas quibusdam repellat, rerum sint soluta vitae, voluptatem voluptatum! Consectetur culpa cupiditate, eius maxime neque nobis odit possimus qui reiciendis repellat, sed tempore tenetur veritatis! Aliquam at blanditiis distinctio doloremque eos incidunt iste perspiciatis provident quos rem, repellendus reprehenderit rerum suscipit tempora ullam vero, voluptates? Aliquid blanditiis delectus deleniti, dolor doloribus eum explicabo iste laboriosam nisi nostrum odio odit possimus quidem repellat voluptas? Ab aliquam animi architecto blanditiis delectus dicta dolor doloribus earum, eveniet excepturi expedita inventore maxime minus molestiae nesciunt nihil nisi nulla officia optio provident quasi quis quod rem repellendus soluta veniam.\r\n\t\t\t\t\t\t\t\t")])])],1)],1)],1)]),t._v(" "),t._m(2),t._v(" "),e("div",{staticClass:"uk-child-width-1-3@m uk-grid",attrs:{"data-uk-grid":""}},[e("div",[e("ScCard",{staticClass:"uk-card-primary"},[e("ScCardTitle",[t._v("\r\n\t\t\t\t\t\t\tprimary\r\n\t\t\t\t\t\t")]),t._v(" "),e("ScCardBody",[e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit.")])])],1)],1),t._v(" "),e("div",[e("ScCard",{staticClass:"uk-card-secondary"},[e("ScCardTitle",[t._v("\r\n\t\t\t\t\t\t\tsecondary\r\n\t\t\t\t\t\t")]),t._v(" "),e("ScCardBody",[e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit.")])])],1)],1),t._v(" "),e("div",[e("ScCard",{staticClass:"md-bg-teal-800 uk-card-light"},[e("ScCardTitle",[t._v("\r\n\t\t\t\t\t\t\tteal\r\n\t\t\t\t\t\t")]),t._v(" "),e("ScCardBody",[e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit.")])])],1)],1),t._v(" "),e("div",[e("ScCard",{staticClass:"md-bg-light-green-800 uk-card-light"},[e("ScCardTitle",[t._v("\r\n\t\t\t\t\t\t\tlight green\r\n\t\t\t\t\t\t")]),t._v(" "),e("ScCardBody",[e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit.")])])],1)],1),t._v(" "),e("div",[e("ScCard",{staticClass:"md-bg-purple-800 uk-card-light"},[e("ScCardTitle",[t._v("\r\n\t\t\t\t\t\t\tpurple\r\n\t\t\t\t\t\t")]),t._v(" "),e("ScCardBody",[e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit.")])])],1)],1),t._v(" "),e("div",[e("ScCard",{staticClass:"md-bg-yellow-700 uk-card-light"},[e("ScCardTitle",[t._v("\r\n\t\t\t\t\t\t\tyellow\r\n\t\t\t\t\t\t")]),t._v(" "),e("ScCardBody",[e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit.")])])],1)],1)]),t._v(" "),t._m(3),t._v(" "),e("div",{staticClass:"uk-child-width-1-2@m uk-grid-medium uk-grid",attrs:{"data-uk-grid":""}},[e("div",[e("ScCard",{staticClass:"uk-card-small"},[e("ScCardTitle",[t._v("\r\n\t\t\t\t\t\t\tSmall\r\n\t\t\t\t\t\t")]),t._v(" "),e("ScCardBody",[e("pre",{staticClass:"sc-js-highlight"},[e("code",[t._v('<ScCard class="uk-card-small"></ScCard>...')])]),t._v(" "),e("p",[t._v("\r\n\t\t\t\t\t\t\t\tLorem ipsum "),e("a",{attrs:{href:"javascript:void(0)"}},[t._v("\r\n\t\t\t\t\t\t\t\t\tdolor\r\n\t\t\t\t\t\t\t\t")]),t._v(" sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n\t\t\t\t\t\t\t")])])],1)],1),t._v(" "),e("div",[e("ScCard",{staticClass:"uk-card-large"},[e("ScCardTitle",[t._v("\r\n\t\t\t\t\t\t\tLarge\r\n\t\t\t\t\t\t")]),t._v(" "),e("ScCardBody",[e("pre",{staticClass:"sc-js-highlight"},[e("code",[t._v('<ScCard class="uk-card-large">...</ScCard>')])]),t._v(" "),e("p",[t._v("\r\n\t\t\t\t\t\t\t\tLorem ipsum "),e("a",{attrs:{href:"javascript:void(0)"}},[t._v("\r\n\t\t\t\t\t\t\t\t\tdolor\r\n\t\t\t\t\t\t\t\t")]),t._v(" sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n\t\t\t\t\t\t\t")])])],1)],1)]),t._v(" "),e("div",{staticClass:"uk-child-width-1-3@l uk-child-width-1-2@m uk-grid",attrs:{"data-uk-grid":""}},[e("div",[e("ScCard",[e("ScCardTitle",{staticClass:"sc-padding-mini"},[t._v("\r\n\t\t\t\t\t\t\tMini padding\r\n\t\t\t\t\t\t")]),t._v(" "),e("ScCardBody",{staticClass:"sc-padding-mini"},[e("pre",{staticClass:"sc-js-highlight"},[e("code",[t._v('<ScCard>\r\n\t<ScCardTitle class="sc-padding-mini">...</ScCardTitle>\r\n\t<ScCardBody class="sc-padding-mini">...</ScCardBody>\r\n</ScCard>')])]),t._v(" "),e("p",[t._v("\r\n\t\t\t\t\t\t\t\tLorem ipsum "),e("a",{attrs:{href:"javascript:void(0)"}},[t._v("\r\n\t\t\t\t\t\t\t\t\tdolor\r\n\t\t\t\t\t\t\t\t")]),t._v(" sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n\t\t\t\t\t\t\t")])])],1)],1),t._v(" "),e("div",[e("ScCard",[e("ScCardTitle",{staticClass:"sc-padding-small"},[t._v("\r\n\t\t\t\t\t\t\tSmall padding\r\n\t\t\t\t\t\t")]),t._v(" "),e("ScCardBody",{staticClass:"sc-padding-small"},[e("pre",{staticClass:"sc-js-highlight"},[e("code",[t._v('<ScCard>\r\n\t<ScCardTitle class="sc-padding-small">...</ScCardTitle>\r\n\t<ScCardBody class="sc-padding-small">...</ScCardBody>\r\n</ScCard>')])]),t._v(" "),e("p",[t._v("\r\n\t\t\t\t\t\t\t\tLorem ipsum "),e("a",{attrs:{href:"javascript:void(0)"}},[t._v("\r\n\t\t\t\t\t\t\t\t\tdolor\r\n\t\t\t\t\t\t\t\t")]),t._v(" sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n\t\t\t\t\t\t\t")])])],1)],1),t._v(" "),e("div",[e("ScCard",[e("ScCardTitle",{staticClass:"sc-padding-medium"},[t._v("\r\n\t\t\t\t\t\t\tMedium padding\r\n\t\t\t\t\t\t")]),t._v(" "),e("ScCardBody",{staticClass:"sc-padding-medium"},[e("pre",{staticClass:"sc-js-highlight"},[e("code",[t._v('<ScCard>\r\n\t<ScCardTitle class="sc-padding-medium">...</ScCardTitle>\r\n\t<ScCardBody class="sc-padding-medium">...</ScCardBody>\r\n</ScCard>')])]),t._v(" "),e("p",[t._v("\r\n\t\t\t\t\t\t\t\tLorem ipsum "),e("a",{attrs:{href:"javascript:void(0)"}},[t._v("\r\n\t\t\t\t\t\t\t\t\tdolor\r\n\t\t\t\t\t\t\t\t")]),t._v(" sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n\t\t\t\t\t\t\t")])])],1)],1),t._v(" "),e("div",[e("ScCard",[e("ScCardTitle",{staticClass:"sc-padding-large"},[t._v("\r\n\t\t\t\t\t\t\tLarge padding\r\n\t\t\t\t\t\t")]),t._v(" "),e("ScCardBody",{staticClass:"sc-padding-large"},[e("pre",{staticClass:"sc-js-highlight"},[e("code",[t._v('<ScCard>\r\n\t<ScCardTitle class="sc-padding-large">...</ScCardTitle>\r\n\t<ScCardBody class="sc-padding-large">...</ScCardBody>\r\n</ScCard>')])]),t._v(" "),e("p",[t._v("\r\n\t\t\t\t\t\t\t\tLorem ipsum "),e("a",{attrs:{href:"javascript:void(0)"}},[t._v("\r\n\t\t\t\t\t\t\t\t\tdolor\r\n\t\t\t\t\t\t\t\t")]),t._v(" sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n\t\t\t\t\t\t\t")])])],1)],1),t._v(" "),e("div",[e("ScCard",[e("ScCardTitle",{staticClass:"sc-padding-ends"},[t._v("\r\n\t\t\t\t\t\t\tTop/Bottom padding\r\n\t\t\t\t\t\t")]),t._v(" "),e("ScCardBody",{staticClass:"sc-padding-bottom sc-padding-remove-left sc-padding-remove-right"},[e("pre",{staticClass:"sc-js-highlight"},[e("code",[t._v('<ScCard>\r\n\t<ScCardTitle class="sc-padding-ends">...</ScCardTitle>\r\n\t<ScCardBody class="sc-padding-bottom sc-padding-remove-left sc-padding-remove-right">...</ScCardBody>\r\n</ScCard>')])]),t._v(" "),e("p",[t._v("\r\n\t\t\t\t\t\t\t\tLorem ipsum "),e("a",{attrs:{href:"javascript:void(0)"}},[t._v("\r\n\t\t\t\t\t\t\t\t\tdolor\r\n\t\t\t\t\t\t\t\t")]),t._v(" sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n\t\t\t\t\t\t\t")])])],1)],1),t._v(" "),e("div",[e("ScCard",[e("ScCardTitle",{staticClass:"sc-padding-small sc-padding-ends"},[t._v("\r\n\t\t\t\t\t\t\tMixed padding\r\n\t\t\t\t\t\t")]),t._v(" "),e("ScCardBody",{staticClass:"sc-padding-small sc-padding-remove-top"},[e("pre",{staticClass:"sc-js-highlight"},[e("code",[t._v('<ScCard>\r\n\t<ScCardTitle class="sc-padding-small sc-padding-ends">...</ScCardTitle>\r\n\t<ScCardBody class="sc-padding-small sc-padding-remove-top">...</ScCardBody>\r\n</ScCard>')])]),t._v(" "),e("p",[t._v("\r\n\t\t\t\t\t\t\t\tLorem ipsum "),e("a",{attrs:{href:"javascript:void(0)"}},[t._v("\r\n\t\t\t\t\t\t\t\t\tdolor\r\n\t\t\t\t\t\t\t\t")]),t._v(" sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n\t\t\t\t\t\t\t")])])],1)],1)])])])}),[function(){var t=this._self._c;return t("h4",{staticClass:"uk-margin-bottom uk-margin-large-top uk-heading-line"},[t("span",[this._v("Header & footer")])])},function(){var t=this._self._c;return t("h4",{staticClass:"uk-margin-bottom uk-margin-large-top uk-heading-line"},[t("span",[this._v("Actions")])])},function(){var t=this._self._c;return t("h4",{staticClass:"uk-margin-bottom uk-margin-large-top uk-heading-line"},[t("span",[this._v("Style modifiers")])])},function(){var t=this._self._c;return t("h4",{staticClass:"uk-margin-bottom uk-margin-large-top uk-heading-line"},[t("span",[this._v("Size modifiers")])])}],!1,null,null,null);e.default=component.exports},455:function(t,e,r){t.exports=r.p+"img/alex-guillaume-769172-unsplash_md.e5ab78a.jpg"},456:function(t,e,r){t.exports=r.p+"img/avantgarde-concept-763896-unsplash_md.27954a3.jpg"},457:function(t,e,r){t.exports=r.p+"img/pietro-mattia-764559-unsplash_md.1588c89.jpg"},458:function(t,e,r){t.exports=r.p+"img/rachel-park-366508-unsplash.784fc00.jpg"},459:function(t,e,r){t.exports=r.p+"img/rachel-park-366508-unsplash_md.510c07d.jpg"},460:function(t,e,r){t.exports=r.p+"img/rodion-kutsaev-760882-unsplash_md.af2e022.jpg"},461:function(t,e,r){t.exports=r.p+"img/wynand-van-poortvliet-761831-unsplash_md.accc494.jpg"},471:function(t,e,r){t.exports=r.p+"img/alex-guillaume-769172-unsplash_md@2x.48f36b8.jpg"},472:function(t,e,r){t.exports=r.p+"img/avantgarde-concept-763896-unsplash_md@2x.9383b48.jpg"},473:function(t,e,r){t.exports=r.p+"img/briana-tozour-756151-unsplash_md.2f2aeb8.jpg"},474:function(t,e,r){t.exports=r.p+"img/briana-tozour-756151-unsplash_md@2x.e10ece4.jpg"},475:function(t,e,r){t.exports=r.p+"img/casey-horner-768005-unsplash_md.acff0fa.jpg"},476:function(t,e,r){t.exports=r.p+"img/casey-horner-768005-unsplash_md@2x.c97a5f7.jpg"},477:function(t,e,r){t.exports=r.p+"img/ciaran-o-brien-769402-unsplash_md.741d25f.jpg"},478:function(t,e,r){t.exports=r.p+"img/ciaran-o-brien-769402-unsplash_md@2x.5afb6f0.jpg"},479:function(t,e,r){t.exports=r.p+"img/daria-kopylova-766667-unsplash_md.bc46dfb.jpg"},480:function(t,e,r){t.exports=r.p+"img/daria-kopylova-766667-unsplash_md@2x.1ea0f43.jpg"},481:function(t,e,r){t.exports=r.p+"img/eiliv-aceron-765897-unsplash_md.2cbf168.jpg"},482:function(t,e,r){t.exports=r.p+"img/eiliv-aceron-765897-unsplash_md@2x.f9d99a7.jpg"},483:function(t,e,r){t.exports=r.p+"img/paula-brustur-766878-unsplash_md.569a586.jpg"},484:function(t,e,r){t.exports=r.p+"img/paula-brustur-766878-unsplash_md@2x.d2e2357.jpg"},485:function(t,e,r){t.exports=r.p+"img/pietro-mattia-764559-unsplash_md@2x.a5cabb0.jpg"},486:function(t,e,r){t.exports=r.p+"img/rachel-park-366508-unsplash@2x.2283064.jpg"},487:function(t,e,r){t.exports=r.p+"img/rachel-park-366508-unsplash_md@2x.ad9a010.jpg"},488:function(t,e,r){t.exports=r.p+"img/ray-hennessy-763310-unsplash.cdff1eb.jpg"},489:function(t,e,r){t.exports=r.p+"img/ray-hennessy-763310-unsplash_md.b92470d.jpg"},490:function(t,e,r){t.exports=r.p+"img/ray-hennessy-763310-unsplash_md@2x.ec91835.jpg"},491:function(t,e,r){t.exports=r.p+"img/rodion-kutsaev-760882-unsplash_md@2x.c5c749d.jpg"},492:function(t,e,r){t.exports=r.p+"img/san-fermin-pamplona-navarra-768251-unsplash_md.c2c866f.jpg"},493:function(t,e,r){t.exports=r.p+"img/san-fermin-pamplona-navarra-768251-unsplash_md@2x.6cbd21a.jpg"},494:function(t,e,r){t.exports=r.p+"img/shane-young-768821-unsplash_md.b91a285.jpg"},495:function(t,e,r){t.exports=r.p+"img/shane-young-768821-unsplash_md@2x.0f7512c.jpg"},496:function(t,e,r){t.exports=r.p+"img/steve-roe-763192-unsplash_md.5fb10e5.jpg"},497:function(t,e,r){t.exports=r.p+"img/steve-roe-763192-unsplash_md@2x.12a9c84.jpg"},498:function(t,e,r){t.exports=r.p+"img/urban-sanden-768851-unsplash_md.8521579.jpg"},499:function(t,e,r){t.exports=r.p+"img/urban-sanden-768851-unsplash_md@2x.7ec5701.jpg"},500:function(t,e,r){t.exports=r.p+"img/wynand-van-poortvliet-761831-unsplash_md@2x.470a287.jpg"},501:function(t,e,r){t.exports=r.p+"img/briana-tozour-756151-unsplash.f4508bb.jpg"},565:function(t,e,r){t.exports=r.p+"img/alex-guillaume-769172-unsplash.704e8ed.jpg"},566:function(t,e,r){t.exports=r.p+"img/avantgarde-concept-763896-unsplash.5ee7fa4.jpg"},567:function(t,e,r){t.exports=r.p+"img/pietro-mattia-764559-unsplash.4cf3950.jpg"},568:function(t,e,r){t.exports=r.p+"img/rodion-kutsaev-760882-unsplash.b27f3ee.jpg"},569:function(t,e,r){t.exports=r.p+"img/wynand-van-poortvliet-761831-unsplash.67caa04.jpg"},572:function(t,e,r){t.exports=r.p+"img/alex-guillaume-769172-unsplash@2x.f2b4b48.jpg"},573:function(t,e,r){t.exports=r.p+"img/avantgarde-concept-763896-unsplash@2x.44e4600.jpg"},574:function(t,e,r){t.exports=r.p+"img/briana-tozour-756151-unsplash@2x.6847485.jpg"},575:function(t,e,r){t.exports=r.p+"img/casey-horner-768005-unsplash.2b37af5.jpg"},576:function(t,e,r){t.exports=r.p+"img/casey-horner-768005-unsplash@2x.1ecbd19.jpg"},577:function(t,e,r){t.exports=r.p+"img/ciaran-o-brien-769402-unsplash.b37b7bc.jpg"},578:function(t,e,r){t.exports=r.p+"img/ciaran-o-brien-769402-unsplash@2x.a163d34.jpg"},579:function(t,e,r){t.exports=r.p+"img/daria-kopylova-766667-unsplash.794801f.jpg"},580:function(t,e,r){t.exports=r.p+"img/daria-kopylova-766667-unsplash@2x.a0a71b4.jpg"},581:function(t,e,r){t.exports=r.p+"img/eiliv-aceron-765897-unsplash.2311f74.jpg"},582:function(t,e,r){t.exports=r.p+"img/eiliv-aceron-765897-unsplash@2x.9452038.jpg"},583:function(t,e,r){t.exports=r.p+"img/paula-brustur-766878-unsplash.b247bb9.jpg"},584:function(t,e,r){t.exports=r.p+"img/paula-brustur-766878-unsplash@2x.c6537ca.jpg"},585:function(t,e,r){t.exports=r.p+"img/pietro-mattia-764559-unsplash@2x.efbe906.jpg"},586:function(t,e,r){t.exports=r.p+"img/ray-hennessy-763310-unsplash@2x.89ac6cd.jpg"},587:function(t,e,r){t.exports=r.p+"img/rodion-kutsaev-760882-unsplash@2x.b749ec3.jpg"},588:function(t,e,r){t.exports=r.p+"img/san-fermin-pamplona-navarra-768251-unsplash.33cd666.jpg"},589:function(t,e,r){t.exports=r.p+"img/san-fermin-pamplona-navarra-768251-unsplash@2x.472955e.jpg"},590:function(t,e,r){t.exports=r.p+"img/shane-young-768821-unsplash.41638b6.jpg"},591:function(t,e,r){t.exports=r.p+"img/shane-young-768821-unsplash@2x.7572756.jpg"},592:function(t,e,r){t.exports=r.p+"img/steve-roe-763192-unsplash.eb2f44d.jpg"},593:function(t,e,r){t.exports=r.p+"img/steve-roe-763192-unsplash@2x.a24d539.jpg"},594:function(t,e,r){t.exports=r.p+"img/urban-sanden-768851-unsplash.6937a3d.jpg"},595:function(t,e,r){t.exports=r.p+"img/urban-sanden-768851-unsplash@2x.0df1dd0.jpg"},596:function(t,e,r){t.exports=r.p+"img/wynand-van-poortvliet-761831-unsplash@2x.e750c34.jpg"}}]);