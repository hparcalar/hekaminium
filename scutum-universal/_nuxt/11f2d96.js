(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{1670:function(t,e,o){"use strict";o.r(e);var l={name:"ComponentsModalsDialogs",data:function(){return{promptName:""}},computed:{bgImage:function(){return o(492)},modalImage:function(){return o(479)}},methods:{openDialog:function(t){var e=this;"dialog"===t&&UIkit.modal.dialog('<p class="uk-modal-body">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate enim consequuntur, saepe mollitia aliquam quia, delectus cum, nobis quisquam ipsam rerum excepturi repellendus explicabo perspiciatis dolor accusantium! Voluptates, asperiores rerum.</p>'),"alert"===t&&UIkit.modal.alert("UIkit alert!").then((function(){console.log("Alert closed.")})),"confirm"===t&&UIkit.modal.confirm("UIkit confirm!").then((function(){console.log("Confirmed.")}),(function(){console.log("Rejected.")})),"prompt"===t&&UIkit.modal.prompt("Name:",e.promptName).then((function(t){e.promptName=t}))}}},n=o(3),component=Object(n.a)(l,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"sc-page-wrapper"}},[e("div",{attrs:{id:"sc-page-content"}},[e("ScCard",[e("ScCardBody",[e("div",{staticClass:"uk-child-width-1-3@l uk-child-width-1-2@s uk-grid-divider uk-grid",attrs:{"data-uk-grid":""}},[e("div",[e("p",{staticClass:"uk-text-large uk-margin-medium-bottom"},[t._v("\n\t\t\t\t\t\t\t\tDefault\n\t\t\t\t\t\t\t")]),t._v(" "),e("button",{staticClass:"sc-button",attrs:{type:"button","data-uk-toggle":"target: #modal-default"}},[t._v("\n\t\t\t\t\t\t\t\tOpen\n\t\t\t\t\t\t\t")]),t._v(" "),e("div",{attrs:{id:"modal-default","data-uk-modal":""}},[e("div",{staticClass:"uk-modal-dialog uk-modal-body"},[e("h2",{staticClass:"uk-modal-title"},[t._v("\n\t\t\t\t\t\t\t\t\t\tHeadline\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")]),t._v(" "),e("p",{staticClass:"uk-text-right"},[e("button",{staticClass:"sc-button sc-button-default sc-button-flat uk-modal-close",attrs:{type:"button"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("button",{staticClass:"sc-button sc-button-primary",attrs:{type:"button"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tSave\n\t\t\t\t\t\t\t\t\t\t")])])])])]),t._v(" "),e("div",[e("p",{staticClass:"uk-text-large uk-margin-medium-bottom"},[t._v("\n\t\t\t\t\t\t\t\tClose button\n\t\t\t\t\t\t\t")]),t._v(" "),e("button",{staticClass:"sc-button uk-margin-small-right",attrs:{type:"button","data-uk-toggle":"target: #modal-close-default"}},[t._v("\n\t\t\t\t\t\t\t\tDefault\n\t\t\t\t\t\t\t")]),t._v(" "),e("button",{staticClass:"sc-button",attrs:{type:"button","data-uk-toggle":"target: #modal-close-outside"}},[t._v("\n\t\t\t\t\t\t\t\tOutside\n\t\t\t\t\t\t\t")]),t._v(" "),e("div",{staticClass:"uk-modal",attrs:{id:"modal-close-default","data-uk-modal":""}},[e("div",{staticClass:"uk-modal-dialog uk-modal-body"},[e("button",{staticClass:"uk-modal-close-default",attrs:{type:"button","data-uk-close":""}}),t._v(" "),e("h2",{staticClass:"uk-modal-title"},[t._v("\n\t\t\t\t\t\t\t\t\t\tHeadline\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")]),t._v(" "),e("p",{staticClass:"uk-text-right"},[e("button",{staticClass:"sc-button sc-button-primary",attrs:{type:"button"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tSave\n\t\t\t\t\t\t\t\t\t\t")])])])]),t._v(" "),e("div",{staticClass:"uk-modal",attrs:{id:"modal-close-outside","data-uk-modal":""}},[e("div",{staticClass:"uk-modal-dialog uk-modal-body"},[e("button",{staticClass:"uk-modal-close-outside",attrs:{type:"button","data-uk-close":""}}),t._v(" "),e("h2",{staticClass:"uk-modal-title"},[t._v("\n\t\t\t\t\t\t\t\t\t\tHeadline\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")]),t._v(" "),e("p",{staticClass:"uk-text-right"},[e("button",{staticClass:"sc-button sc-button-primary",attrs:{type:"button"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tSave\n\t\t\t\t\t\t\t\t\t\t")])])])])]),t._v(" "),e("div",[e("p",{staticClass:"uk-text-large uk-margin-medium-bottom"},[t._v("\n\t\t\t\t\t\t\t\tCenter modal\n\t\t\t\t\t\t\t")]),t._v(" "),e("button",{staticClass:"sc-button",attrs:{type:"button","data-uk-toggle":"target: #modal-center"}},[t._v("\n\t\t\t\t\t\t\t\tOpen\n\t\t\t\t\t\t\t")]),t._v(" "),e("div",{staticClass:"uk-flex-top uk-modal",attrs:{id:"modal-center","data-uk-modal":""}},[e("div",{staticClass:"uk-modal-dialog uk-modal-body uk-margin-auto-vertical"},[t._v("\n\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit, amet consectetur adipisicing elit. Libero ab illo maiores, incidunt delectus qui in, vitae laboriosam minus nihil, quibusdam quidem magnam minima veniam aut nulla aperiam voluptas deleniti quo rem ipsa fugiat! Hic excepturi, cupiditate doloremque sed perferendis dolor, atque reprehenderit possimus officia vitae cum laborum quo! Alias cum, at minima illo corrupti rem quae quos! In, molestiae.\n\t\t\t\t\t\t\t\t")])])])]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"uk-child-width-1-3@l uk-child-width-1-2@s uk-grid-divider uk-grid",attrs:{"data-uk-grid":""}},[e("div",[e("p",{staticClass:"uk-text-large uk-margin-medium-bottom"},[t._v("\n\t\t\t\t\t\t\t\tHeader and footer\n\t\t\t\t\t\t\t")]),t._v(" "),e("a",{staticClass:"sc-button",attrs:{href:"#modal-header-footer","data-uk-toggle":""}},[t._v("\n\t\t\t\t\t\t\t\tOpen\n\t\t\t\t\t\t\t")]),t._v(" "),e("div",{staticClass:"uk-modal",attrs:{id:"modal-header-footer","data-uk-modal":""}},[e("div",{staticClass:"uk-modal-dialog"},[e("button",{staticClass:"uk-modal-close-default",attrs:{type:"button","data-uk-close":""}}),t._v(" "),e("div",{staticClass:"uk-modal-header"},[e("h2",{staticClass:"uk-modal-title"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tModal Title\n\t\t\t\t\t\t\t\t\t\t")])]),t._v(" "),e("div",{staticClass:"uk-modal-body"},[e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")])]),t._v(" "),e("div",{staticClass:"uk-modal-footer uk-text-right"},[e("button",{staticClass:"sc-button sc-button-flat sc-button-flat-danger uk-modal-close",attrs:{type:"button"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("button",{staticClass:"sc-button",attrs:{type:"button"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tSave\n\t\t\t\t\t\t\t\t\t\t")])])])])]),t._v(" "),e("div",[e("p",{staticClass:"uk-text-large uk-margin-medium-bottom"},[t._v("\n\t\t\t\t\t\t\t\tContainer modifier\n\t\t\t\t\t\t\t")]),t._v(" "),e("a",{staticClass:"sc-button",attrs:{href:"#modal-container","data-uk-toggle":""}},[t._v("\n\t\t\t\t\t\t\t\tOpen\n\t\t\t\t\t\t\t")]),t._v(" "),e("div",{staticClass:"uk-modal-container uk-modal",attrs:{id:"modal-container","data-uk-modal":""}},[e("div",{staticClass:"uk-modal-dialog uk-modal-body"},[e("button",{staticClass:"uk-modal-close-default",attrs:{type:"button","data-uk-close":""}}),t._v(" "),e("h2",{staticClass:"uk-modal-title"},[t._v("\n\t\t\t\t\t\t\t\t\t\tHeadline\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")])])])]),t._v(" "),e("div",[e("p",{staticClass:"uk-text-large uk-margin-medium-bottom"},[t._v("\n\t\t\t\t\t\t\t\tFull modifier\n\t\t\t\t\t\t\t")]),t._v(" "),e("a",{staticClass:"sc-button",attrs:{href:"#modal-full","data-uk-toggle":""}},[t._v("\n\t\t\t\t\t\t\t\tOpen\n\t\t\t\t\t\t\t")]),t._v(" "),e("div",{staticClass:"uk-modal-full uk-modal",attrs:{id:"modal-full","data-uk-modal":""}},[e("div",{staticClass:"uk-modal-dialog"},[e("button",{staticClass:"uk-modal-close-full uk-close-large",attrs:{type:"button","data-uk-close":""}}),t._v(" "),e("div",{staticClass:"uk-grid-collapse uk-child-width-1-2@s uk-flex-middle",attrs:{"data-uk-grid":""}},[e("div",{staticClass:"uk-background-cover",style:{"background-image":"url("+t.bgImage+")"},attrs:{"data-uk-height-viewport":""}}),t._v(" "),e("div",[e("div",{staticClass:"sc-padding-large"},[e("h1",[t._v("Headline")]),t._v(" "),e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")])])])])])])])]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"uk-child-width-1-3@l uk-child-width-1-2@s uk-grid-divider uk-grid",attrs:{"data-uk-grid":""}},[e("div",[e("p",{staticClass:"uk-text-large uk-margin-medium-bottom"},[t._v("\n\t\t\t\t\t\t\t\tOverflow\n\t\t\t\t\t\t\t")]),t._v(" "),e("a",{staticClass:"sc-button",attrs:{href:"#modal-overflow","data-uk-toggle":""}},[t._v("\n\t\t\t\t\t\t\t\tOpen\n\t\t\t\t\t\t\t")]),t._v(" "),e("div",{staticClass:"uk-modal",attrs:{id:"modal-overflow","data-uk-modal":""}},[e("div",{staticClass:"uk-modal-dialog"},[e("button",{staticClass:"uk-modal-close-default",attrs:{type:"button","data-uk-close":""}}),t._v(" "),e("div",{staticClass:"uk-modal-header"},[e("h2",{staticClass:"uk-modal-title"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tHeadline\n\t\t\t\t\t\t\t\t\t\t")])]),t._v(" "),e("div",{staticClass:"uk-modal-body",attrs:{"data-uk-overflow-auto":""}},[e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam nam, molestiae at consequuntur quasi excepturi? Dolor odit assumenda architecto adipisci itaque aut natus suscipit facere nihil vero vitae reiciendis, voluptatum minus non explicabo possimus, recusandae ullam quas magnam enim voluptas!")]),t._v(" "),e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam nam, molestiae at consequuntur quasi excepturi? Dolor odit assumenda architecto adipisci itaque aut natus suscipit facere nihil vero vitae reiciendis, voluptatum minus non explicabo possimus, recusandae ullam quas magnam enim voluptas!")]),t._v(" "),e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam nam, molestiae at consequuntur quasi excepturi? Dolor odit assumenda architecto adipisci itaque aut natus suscipit facere nihil vero vitae reiciendis, voluptatum minus non explicabo possimus, recusandae ullam quas magnam enim voluptas!")]),t._v(" "),e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam nam, molestiae at consequuntur quasi excepturi? Dolor odit assumenda architecto adipisci itaque aut natus suscipit facere nihil vero vitae reiciendis, voluptatum minus non explicabo possimus, recusandae ullam quas magnam enim voluptas!")]),t._v(" "),e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam nam, molestiae at consequuntur quasi excepturi? Dolor odit assumenda architecto adipisci itaque aut natus suscipit facere nihil vero vitae reiciendis, voluptatum minus non explicabo possimus, recusandae ullam quas magnam enim voluptas!")]),t._v(" "),e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam nam, molestiae at consequuntur quasi excepturi? Dolor odit assumenda architecto adipisci itaque aut natus suscipit facere nihil vero vitae reiciendis, voluptatum minus non explicabo possimus, recusandae ullam quas magnam enim voluptas!")]),t._v(" "),e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam nam, molestiae at consequuntur quasi excepturi? Dolor odit assumenda architecto adipisci itaque aut natus suscipit facere nihil vero vitae reiciendis, voluptatum minus non explicabo possimus, recusandae ullam quas magnam enim voluptas!")]),t._v(" "),e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam nam, molestiae at consequuntur quasi excepturi? Dolor odit assumenda architecto adipisci itaque aut natus suscipit facere nihil vero vitae reiciendis, voluptatum minus non explicabo possimus, recusandae ullam quas magnam enim voluptas!")]),t._v(" "),e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam nam, molestiae at consequuntur quasi excepturi? Dolor odit assumenda architecto adipisci itaque aut natus suscipit facere nihil vero vitae reiciendis, voluptatum minus non explicabo possimus, recusandae ullam quas magnam enim voluptas!")]),t._v(" "),e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam nam, molestiae at consequuntur quasi excepturi? Dolor odit assumenda architecto adipisci itaque aut natus suscipit facere nihil vero vitae reiciendis, voluptatum minus non explicabo possimus, recusandae ullam quas magnam enim voluptas!")]),t._v(" "),e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam nam, molestiae at consequuntur quasi excepturi? Dolor odit assumenda architecto adipisci itaque aut natus suscipit facere nihil vero vitae reiciendis, voluptatum minus non explicabo possimus, recusandae ullam quas magnam enim voluptas!")]),t._v(" "),e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam nam, molestiae at consequuntur quasi excepturi? Dolor odit assumenda architecto adipisci itaque aut natus suscipit facere nihil vero vitae reiciendis, voluptatum minus non explicabo possimus, recusandae ullam quas magnam enim voluptas!")]),t._v(" "),e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam nam, molestiae at consequuntur quasi excepturi? Dolor odit assumenda architecto adipisci itaque aut natus suscipit facere nihil vero vitae reiciendis, voluptatum minus non explicabo possimus, recusandae ullam quas magnam enim voluptas!")]),t._v(" "),e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam nam, molestiae at consequuntur quasi excepturi? Dolor odit assumenda architecto adipisci itaque aut natus suscipit facere nihil vero vitae reiciendis, voluptatum minus non explicabo possimus, recusandae ullam quas magnam enim voluptas!")])]),t._v(" "),e("hr",{staticClass:"uk-margin-remove"}),t._v(" "),e("div",{staticClass:"uk-modal-footer"},[e("button",{staticClass:"sc-button sc-button-primary",attrs:{type:"button"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tSave\n\t\t\t\t\t\t\t\t\t\t")])])])])]),t._v(" "),e("div",[e("p",{staticClass:"uk-text-large uk-margin-medium-bottom"},[t._v("\n\t\t\t\t\t\t\t\tMedia\n\t\t\t\t\t\t\t")]),t._v(" "),e("div",{attrs:{"data-uk-margin":""}},[e("a",{staticClass:"sc-button",attrs:{href:"#modal-media-image","data-uk-toggle":""}},[t._v("\n\t\t\t\t\t\t\t\t\tImage\n\t\t\t\t\t\t\t\t")]),t._v(" "),e("a",{staticClass:"sc-button",attrs:{href:"#modal-media-youtube","data-uk-toggle":""}},[t._v("\n\t\t\t\t\t\t\t\t\tYouTube\n\t\t\t\t\t\t\t\t")]),t._v(" "),e("a",{staticClass:"sc-button",attrs:{href:"#modal-media-vimeo","data-uk-toggle":""}},[t._v("\n\t\t\t\t\t\t\t\t\tVimeo\n\t\t\t\t\t\t\t\t")])]),t._v(" "),e("div",{staticClass:"uk-flex-top uk-modal",attrs:{id:"modal-media-image","data-uk-modal":""}},[e("div",{staticClass:"uk-modal-dialog uk-width-auto uk-margin-auto-vertical"},[e("button",{staticClass:"uk-modal-close-outside",attrs:{type:"button","data-uk-close":""}}),t._v(" "),e("img",{directives:[{name:"rjs",rawName:"v-rjs",value:o(479),expression:"require('~/assets/img/photos/ray-hennessy-763310-unsplash.jpg')"}],attrs:{src:t.modalImage,alt:""}})])]),t._v(" "),e("div",{staticClass:"uk-flex-top uk-modal",attrs:{id:"modal-media-youtube","data-uk-modal":""}},[e("div",{staticClass:"uk-modal-dialog uk-width-auto uk-margin-auto-vertical"},[e("button",{staticClass:"uk-modal-close-outside",attrs:{type:"button","data-uk-close":""}}),t._v(" "),e("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/By6sZ6RGCEQ",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:"","data-uk-video":""}})])]),t._v(" "),e("div",{staticClass:"uk-flex-top uk-modal",attrs:{id:"modal-media-vimeo","data-uk-modal":""}},[e("div",{staticClass:"uk-modal-dialog uk-width-auto uk-margin-auto-vertical"},[e("button",{staticClass:"uk-modal-close-outside",attrs:{type:"button","data-uk-close":""}}),t._v(" "),e("iframe",{attrs:{src:"https://player.vimeo.com/video/289371414",width:"530",height:"315",frameborder:"0","data-uk-video":""}})])])]),t._v(" "),e("div",[e("p",{staticClass:"uk-text-large uk-margin-medium-bottom"},[t._v("\n\t\t\t\t\t\t\t\tGroups\n\t\t\t\t\t\t\t")]),t._v(" "),e("div",{attrs:{"data-uk-margin":""}},[e("a",{staticClass:"sc-button",attrs:{href:"#modal-group-1","data-uk-toggle":""}},[t._v("\n\t\t\t\t\t\t\t\t\tModal 1\n\t\t\t\t\t\t\t\t")]),t._v(" "),e("a",{staticClass:"sc-button",attrs:{href:"#modal-group-2","data-uk-toggle":""}},[t._v("\n\t\t\t\t\t\t\t\t\tModal 2\n\t\t\t\t\t\t\t\t")])]),t._v(" "),e("div",{staticClass:"uk-modal",attrs:{id:"modal-group-1","data-uk-modal":""}},[e("div",{staticClass:"uk-modal-dialog"},[e("div",{staticClass:"uk-modal-header"},[e("h2",{staticClass:"uk-modal-title"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tModal 1\n\t\t\t\t\t\t\t\t\t\t")])]),t._v(" "),e("div",{staticClass:"uk-modal-body"},[e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")])]),t._v(" "),e("div",{staticClass:"uk-modal-footer uk-text-right"},[e("button",{staticClass:"sc-button sc-button-flat sc-button-flat-danger uk-modal-close",attrs:{type:"button"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("a",{staticClass:"sc-button sc-button-secondary",attrs:{href:"#modal-group-2","data-uk-toggle":""}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tModal 2\n\t\t\t\t\t\t\t\t\t\t")])])])]),t._v(" "),e("div",{staticClass:"uk-modal",attrs:{id:"modal-group-2","data-uk-modal":""}},[e("div",{staticClass:"uk-modal-dialog"},[e("div",{staticClass:"uk-modal-header"},[e("h2",{staticClass:"uk-modal-title"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tModal 2\n\t\t\t\t\t\t\t\t\t\t")])]),t._v(" "),e("div",{staticClass:"uk-modal-body"},[e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")])]),t._v(" "),e("div",{staticClass:"uk-modal-footer uk-text-right"},[e("button",{staticClass:"sc-button sc-button-flat sc-button-flat-danger uk-modal-close",attrs:{type:"button"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("a",{staticClass:"sc-button sc-button-secondary",attrs:{href:"#modal-group-1","data-uk-toggle":""}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tModal 1\n\t\t\t\t\t\t\t\t\t\t")])])])])])])])],1),t._v(" "),t._m(0),t._v(" "),e("ScCard",[e("ScCardBody",[e("div",{staticClass:"uk-child-width-1-4@l uk-child-width-1-2@m uk-grid-divider uk-grid",attrs:{"data-uk-grid":""}},[e("div",[e("p",{staticClass:"uk-text-large uk-margin-medium-bottom"},[t._v("\n\t\t\t\t\t\t\t\tDialog\n\t\t\t\t\t\t\t")]),t._v(" "),e("a",{staticClass:"sc-button",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.openDialog("dialog")}}},[t._v("\n\t\t\t\t\t\t\t\tOpen\n\t\t\t\t\t\t\t")])]),t._v(" "),e("div",[e("p",{staticClass:"uk-text-large uk-margin-medium-bottom"},[t._v("\n\t\t\t\t\t\t\t\tAlert\n\t\t\t\t\t\t\t")]),t._v(" "),e("a",{staticClass:"sc-button",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.openDialog("alert")}}},[t._v("\n\t\t\t\t\t\t\t\tOpen\n\t\t\t\t\t\t\t")])]),t._v(" "),e("div",[e("p",{staticClass:"uk-text-large uk-margin-medium-bottom"},[t._v("\n\t\t\t\t\t\t\t\tConfirm\n\t\t\t\t\t\t\t")]),t._v(" "),e("a",{staticClass:"sc-button",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.openDialog("confirm")}}},[t._v("\n\t\t\t\t\t\t\t\tOpen\n\t\t\t\t\t\t\t")])]),t._v(" "),e("div",[e("p",{staticClass:"uk-text-large uk-margin-medium-bottom"},[t._v("\n\t\t\t\t\t\t\t\tPrompt\n\t\t\t\t\t\t\t")]),t._v(" "),e("a",{staticClass:"sc-button",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.openDialog("prompt")}}},[t._v("\n\t\t\t\t\t\t\t\tOpen\n\t\t\t\t\t\t\t")]),t._v(" "),e("div",{staticClass:"uk-margin-small-top"},[e("span",{staticClass:"uk-text-muted"},[t._v("Your Name:")]),t._v(" "+t._s(t.promptName)+"\n\t\t\t\t\t\t\t")])])])])],1)],1)])}),[function(){var t=this._self._c;return t("h4",{staticClass:"uk-heading-line uk-margin-large-top"},[t("span",[this._v("Modal dialogs")])])}],!1,null,null,null);e.default=component.exports},479:function(t,e,o){t.exports=o.p+"img/ray-hennessy-763310-unsplash.cdff1eb.jpg"},492:function(t,e,o){t.exports=o.p+"img/briana-tozour-756151-unsplash.f4508bb.jpg"}}]);