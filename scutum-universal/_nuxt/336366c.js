(window.webpackJsonp=window.webpackJsonp||[]).push([[147,15],{1137:function(t,e,n){"use strict";n(803)},1138:function(t,e,n){var l=n(11)(!1);l.push([t.i,'.CodeMirror{z-index:10}.CodeMirror pre{font-family:"Source Code Pro",Consolas,monospace;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-size:14px;font-size:.875rem}.CodeMirror-fullscreen{position:fixed;left:0;top:0;right:0;bottom:0;height:100%;z-index:1500}.CodeMirror-fullscreen #sc-code-editor-fs-disable,.CodeMirror-fullscreen+#sc-code-editor-fs-disable{display:block}#sc-code-editor-fs-disable{position:absolute;top:12px;right:20px;display:none;background:hsla(0,0%,100%,.6);color:rgba(0,0,0,.87);padding:8px;border-radius:50%;cursor:pointer;z-index:1550}.CodeMirror-fullscreen-active .uk-card-body{overflow:visible}.CodeMirror+#sc-code-editor-fs-disable{position:fixed}.CodeMirror,.vue-codemirror{height:100%}',""]),t.exports=l},1399:function(t,e,n){"use strict";n.r(e);var l=n(3),progress=n(56),o=n(593),r=n(604);n(576),n(1125),n(1127),n(798),n(799),n(1130),n(801),n(800),n(1131),n(1132),n(1133),n(802),n(1134),n(1135);var c={name:"PluginsCodeEditor",components:{Codemirror:function(){return n.e(203).then(n.bind(null,1447))},ColumnToggle:o.a,ScOffcanvas:r.default,ScProgressOverlay:progress.e},data:function(){return{cm:null,code:"",activeFile:"",cmOptions:{theme:"material",lineNumbers:!0,mode:"text/html",matchTags:{bothTags:!0},scrollbarStyle:"simple",extraKeys:{F11:function(t){t.setOption("fullScreen",!t.getOption("fullScreen"))},Esc:function(t){t.getOption("fullScreen")&&t.setOption("fullScreen",!1)}}},files:{"index.html":'<!doctype html>\n<html lang="en">\n<head>\n<meta charset="UTF-8">\n <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">\n <meta http-equiv="X-UA-Compatible" content="ie=edge">\n <title>Document</title>\n</head>\n<body>\n    <div class="uk-overflow-auto">\n        <table class="uk-table uk-table-hover">\n            <caption>Table caption</caption>\n            <thead>\n                <tr>\n                    <th>Table Heading</th>\n                    <th>Table Heading</th>\n                    <th>Table Heading</th>\n                    <th>Table Heading</th>\n                </tr>\n            </thead>\n            <tfoot>\n                <tr>\n                    <td>Table Footer</td>\n                    <td>Table Footer</td>\n                    <td>Table Footer</td>\n                    <td>Table Footer</td>\n                </tr>\n            </tfoot>\n            <tbody>\n                <tr>\n                    <td>Table Data <a href="#">a element</a> <code>.uk-table</code></td>\n                    <td>Table Data <a class="uk-button uk-button-primary" href="#">Button</a></td>\n                    <td>Table Data <img src="images/photo.jpg" width="40" alt=""></td>\n                    <td>Table Data</td>\n                </tr>\n                <tr>\n                    <td>Table Data</td>\n                    <td>Table Data</td>\n                    <td>Table Data</td>\n                    <td>Table Data</td>\n                </tr>\n                <tr class="uk-active">\n                    <td>Active Row</td>\n                    <td>Active Row</td>\n                    <td>Active Row</td>\n                    <td>Active Row</td>\n                </tr>\n                <tr>\n                    <td>Table Data</td>\n                    <td>Table Data</td>\n                    <td>Table Data</td>\n                    <td>Table Data</td>\n                </tr>\n                <tr>\n                    <th>Table Sub Heading</th>\n                    <th>Table Sub Heading</th>\n                    <th>Table Sub Heading</th>\n                    <th>Table Sub Heading</th>\n                </tr>\n                <tr>\n                    <td>Table Data</td>\n                    <td>Table Data</td>\n                    <td>Table Data</td>\n                    <td>Table Data</td>\n                </tr>\n                <tr>\n                    <td>Table Data</td>\n                    <td>Table Data</td>\n                    <td>Table Data</td>\n                    <td>Table Data</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</body>\n</html>',"database.php":"<?php\nreturn [\n\n    /*\n    |--------------------------------------------------------------------------\n    | Default Database Connection Name\n    |--------------------------------------------------------------------------\n    |\n    | Here you may specify which of the database connections below you wish\n    | to use as your default connection for all database work. Of course\n    | you may use many connections at once using the Database library.\n    |\n    */\n\n    'default' => env('DB_CONNECTION', 'mysql'),\n\n    /*\n    |--------------------------------------------------------------------------\n    | Database Connections\n    |--------------------------------------------------------------------------\n    |\n    | Here are each of the database connections setup for your application.\n    | Of course, examples of configuring each database platform that is\n    | supported by Laravel is shown below to make development simple.\n    |\n    |\n    | All database work in Laravel is done through the PHP PDO facilities\n    | so make sure you have the driver for your particular database of\n    | choice installed on your machine before you begin development.\n    |\n    */\n\n    'connections' => [\n\n        'sqlite' => [\n            'driver' => 'sqlite',\n            'database' => env('DB_DATABASE', database_path('database.sqlite')),\n            'prefix' => '',\n            'foreign_key_constraints' => env('DB_FOREIGN_KEYS', true),\n        ],\n\n        'mysql' => [\n            'driver' => 'mysql',\n            'host' => env('DB_HOST', '127.0.0.1'),\n            'port' => env('DB_PORT', '3306'),\n            'database' => env('DB_DATABASE', 'forge'),\n            'username' => env('DB_USERNAME', 'forge'),\n            'password' => env('DB_PASSWORD', ''),\n            'unix_socket' => env('DB_SOCKET', ''),\n            'charset' => 'utf8mb4',\n            'collation' => 'utf8mb4_unicode_ci',\n            'prefix' => '',\n            'prefix_indexes' => true,\n            'strict' => true,\n            'engine' => null,\n        ],\n\n        'pgsql' => [\n            'driver' => 'pgsql',\n            'host' => env('DB_HOST', '127.0.0.1'),\n            'port' => env('DB_PORT', '5432'),\n            'database' => env('DB_DATABASE', 'forge'),\n            'username' => env('DB_USERNAME', 'forge'),\n            'password' => env('DB_PASSWORD', ''),\n            'charset' => 'utf8',\n            'prefix' => '',\n            'prefix_indexes' => true,\n            'schema' => 'public',\n            'sslmode' => 'prefer',\n        ],\n\n        'sqlsrv' => [\n            'driver' => 'sqlsrv',\n            'host' => env('DB_HOST', 'localhost'),\n            'port' => env('DB_PORT', '1433'),\n            'database' => env('DB_DATABASE', 'forge'),\n            'username' => env('DB_USERNAME', 'forge'),\n            'password' => env('DB_PASSWORD', ''),\n            'charset' => 'utf8',\n            'prefix' => '',\n            'prefix_indexes' => true,\n        ],\n\n    ],\n\n    /*\n    |--------------------------------------------------------------------------\n    | Migration Repository Table\n    |--------------------------------------------------------------------------\n    |\n    | This table keeps track of all the migrations that have already run for\n    | your application. Using this information, we can determine which of\n    | the migrations on disk haven't actually been run in the database.\n    |\n    */\n\n    'migrations' => 'migrations',\n\n    /*\n    |--------------------------------------------------------------------------\n    | Redis Databases\n    |--------------------------------------------------------------------------\n    |\n    | Redis is an open source, fast, and advanced key-value store that also\n    | provides a richer set of commands than a typical key-value systems\n    | such as APC or Memcached. Laravel makes it easy to dig right in.\n    |\n    */\n\n    'redis' => [\n\n        'client' => 'predis',\n\n        'default' => [\n            'host' => env('REDIS_HOST', '127.0.0.1'),\n            'password' => env('REDIS_PASSWORD', null),\n            'port' => env('REDIS_PORT', 6379),\n            'database' => env('REDIS_DB', 0),\n        ],\n\n        'cache' => [\n            'host' => env('REDIS_HOST', '127.0.0.1'),\n            'password' => env('REDIS_PASSWORD', null),\n            'port' => env('REDIS_PORT', 6379),\n            'database' => env('REDIS_CACHE_DB', 1),\n        ],\n\n    ],\n\n];\n?>","helpers.js":"/* @flow */\n\nimport { emptyObject } from 'shared/util'\nimport { parseFilters } from './parser/filter-parser'\n\nexport function baseWarn (msg: string) {\n  console.error(`[Vue compiler]: ${msg}`)\n}\n\nexport function pluckModuleFunction<F> (\n  modules: ?Array<Object>,\n  key: string\n): Array<F> {\n  return modules\n    ? modules.map(m => m[key]).filter(_ => _)\n    : []\n}\n\nexport function addProp (el: ASTElement, name: string, value: string) {\n  (el.props || (el.props = [])).push({ name, value })\n  el.plain = false\n}\n\nexport function addAttr (el: ASTElement, name: string, value: any) {\n  (el.attrs || (el.attrs = [])).push({ name, value })\n  el.plain = false\n}\n\n// add a raw attr (use this in preTransforms)\nexport function addRawAttr (el: ASTElement, name: string, value: any) {\n  el.attrsMap[name] = value\n  el.attrsList.push({ name, value })\n}\n\nexport function addDirective (\n  el: ASTElement,\n  name: string,\n  rawName: string,\n  value: string,\n  arg: ?string,\n  modifiers: ?ASTModifiers\n) {\n  (el.directives || (el.directives = [])).push({ name, rawName, value, arg, modifiers })\n  el.plain = false\n}\n\nexport function addHandler (\n  el: ASTElement,\n  name: string,\n  value: string,\n  modifiers: ?ASTModifiers,\n  important?: boolean,\n  warn?\n) {\n  modifiers = modifiers || emptyObject\n  // warn prevent and passive modifier\n  /* istanbul ignore if */\n  if (\n    process.env.NODE_ENV !== 'production' && warn &&\n    modifiers.prevent && modifiers.passive\n  ) {\n    warn(\n      'passive and prevent can\\'t be used together. ' +\n      'Passive handler can\\'t prevent default event.'\n    )\n  }\n\n  // normalize click.right and click.middle since they don't actually fire\n  // this is technically browser-specific, but at least for now browsers are\n  // the only target envs that have right/middle clicks.\n  if (name === 'click') {\n    if (modifiers.right) {\n      name = 'contextmenu'\n      delete modifiers.right\n    } else if (modifiers.middle) {\n      name = 'mouseup'\n    }\n  }\n\n  // check capture modifier\n  if (modifiers.capture) {\n    delete modifiers.capture\n    name = '!' + name // mark the event as captured\n  }\n  if (modifiers.once) {\n    delete modifiers.once\n    name = '~' + name // mark the event as once\n  }\n  /* istanbul ignore if */\n  if (modifiers.passive) {\n    delete modifiers.passive\n    name = '&' + name // mark the event as passive\n  }\n\n  let events\n  if (modifiers.native) {\n    delete modifiers.native\n    events = el.nativeEvents || (el.nativeEvents = {})\n  } else {\n    events = el.events || (el.events = {})\n  }\n\n  const newHandler: any = {\n    value: value.trim()\n  }\n  if (modifiers !== emptyObject) {\n    newHandler.modifiers = modifiers\n  }\n\n  const handlers = events[name]\n  /* istanbul ignore if */\n  if (Array.isArray(handlers)) {\n    important ? handlers.unshift(newHandler) : handlers.push(newHandler)\n  } else if (handlers) {\n    events[name] = important ? [newHandler, handlers] : [handlers, newHandler]\n  } else {\n    events[name] = newHandler\n  }\n\n  el.plain = false\n}\n\nexport function getBindingAttr (\n  el: ASTElement,\n  name: string,\n  getStatic?: boolean\n): ?string {\n  const dynamicValue =\n    getAndRemoveAttr(el, ':' + name) ||\n    getAndRemoveAttr(el, 'v-bind:' + name)\n  if (dynamicValue != null) {\n    return parseFilters(dynamicValue)\n  } else if (getStatic !== false) {\n    const staticValue = getAndRemoveAttr(el, name)\n    if (staticValue != null) {\n      return JSON.stringify(staticValue)\n    }\n  }\n}\n\n// note: this only removes the attr from the Array (attrsList) so that it\n// doesn't get processed by processAttrs.\n// By default it does NOT remove it from the map (attrsMap) because the map is\n// needed during codegen.\nexport function getAndRemoveAttr (\n  el: ASTElement,\n  name: string,\n  removeFromMap?: boolean\n): ?string {\n  let val\n  if ((val = el.attrsMap[name]) != null) {\n    const list = el.attrsList\n    for (let i = 0, l = list.length; i < l; i++) {\n      if (list[i].name === name) {\n        list.splice(i, 1)\n        break\n      }\n    }\n  }\n  if (removeFromMap) {\n    delete el.attrsMap[name]\n  }\n  return val\n}","data.json":'[{\n\t\t"id": 1,\n\t\t"first_name": "Adella",\n\t\t"last_name": "Figura",\n\t\t"email": "afigura0@opera.com",\n\t\t"gender": "Female",\n\t\t"ip_address": "205.130.124.144"\n\t}, {\n\t\t"id": 2,\n\t\t"first_name": "Addie",\n\t\t"last_name": "Vasse",\n\t\t"email": "avasse1@answers.com",\n\t\t"gender": "Female",\n\t\t"ip_address": "76.226.233.169"\n\t}, {\n\t\t"id": 3,\n\t\t"first_name": "Josee",\n\t\t"last_name": "Birkett",\n\t\t"email": "jbirkett2@mapy.cz",\n\t\t"gender": "Female",\n\t\t"ip_address": "235.147.89.150"\n\t}, {\n\t\t"id": 4,\n\t\t"first_name": "Orville",\n\t\t"last_name": "Hayler",\n\t\t"email": "ohayler3@bloomberg.com",\n\t\t"gender": "Male",\n\t\t"ip_address": "32.233.217.40"\n\t}, {\n\t\t"id": 5,\n\t\t"first_name": "Mandie",\n\t\t"last_name": "McDavid",\n\t\t"email": "mmcdavid4@homestead.com",\n\t\t"gender": "Female",\n\t\t"ip_address": "252.94.209.149"\n\t}, {\n\t\t"id": 6,\n\t\t"first_name": "Jarrod",\n\t\t"last_name": "Heis",\n\t\t"email": "jheis5@joomla.org",\n\t\t"gender": "Male",\n\t\t"ip_address": "184.37.13.87"\n\t}, {\n\t\t"id": 7,\n\t\t"first_name": "Abeu",\n\t\t"last_name": "Staziker",\n\t\t"email": "astaziker6@pen.io",\n\t\t"gender": "Male",\n\t\t"ip_address": "183.26.126.11"\n\t}, {\n\t\t"id": 8,\n\t\t"first_name": "Jenifer",\n\t\t"last_name": "Bengle",\n\t\t"email": "jbengle7@marketwatch.com",\n\t\t"gender": "Female",\n\t\t"ip_address": "65.75.112.56"\n\t}, {\n\t\t"id": 9,\n\t\t"first_name": "Gertrudis",\n\t\t"last_name": "Ashcroft",\n\t\t"email": "gashcroft8@amazon.de",\n\t\t"gender": "Female",\n\t\t"ip_address": "111.129.62.109"\n\t}, {\n\t\t"id": 10,\n\t\t"first_name": "Emmie",\n\t\t"last_name": "Paulazzi",\n\t\t"email": "epaulazzi9@lulu.com",\n\t\t"gender": "Female",\n\t\t"ip_address": "219.228.186.196"\n\t}]'},columnCollapsed:!1,columnTransform:!1,cmFullscreen:!1,cardProgress:!1}},watch:{cmFullscreen:function(t){this.cm.setOption("fullScreen",t),this.$store.commit("cmFullscreenToggle",t)}},mounted:function(){var t=this;this.$nextTick((function(){t.$store.commit("setCardFixed",!0),t.$store.commit("setHeaderExpanded",!0),t.code=t.files["index.html"],t.activeFile="index.html"}))},beforeDestroy:function(){this.$store.commit("setCardFixed",!1),this.$store.commit("setHeaderExpanded",!1),this.$store.commit("cmFullscreenToggle",!1)},methods:{onCmReady:function(t){this.cm=this.$refs.myCm.codemirror,console.log("The editor is ready!",t)},onCmFocus:function(t){console.log("The editor is focus!",t)},onCmCodeChange:function(t){},openFile:function(t,e){var n=this;this.cardProgress=!0,l.e.mediumMax()&&this.$refs.offcanvas.hide(),setTimeout((function(){"html"===e&&(n.cm.setOption("mode","text/html"),n.cm.setOption("matchTags",{bothTags:!0})),"js"===e&&(n.cm.setOption("mode","text/javascript"),n.cm.setOption("matchBrackets",!0)),"php"===e&&(n.cm.setOption("mode","application/x-httpd-php"),n.cm.setOption("matchTags",!1),n.cm.setOption("matchBrackets",!0)),"json"===e&&n.cm.setOption("mode","application/ld+json"),""!==t&&t in n.files?n.code=n.files[t]:n.code='File "'+t+'" does not exist!',n.activeFile=t,n.cardProgress=!1}),1e3)},cmFullScreenEnable:function(){this.cmFullscreen=!0},cmFullScreenDisable:function(){this.cmFullscreen=!1},onColumnCollapsing:function(t){this.columnCollapsed=t,this.columnTransform=!0},onColumnShown:function(t){this.columnTransform=!1,this.cm.refresh()},onColumnHidden:function(t){this.columnTransform=!1,this.cm.refresh()}}},d=(n(1137),n(2)),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"sc-page-wrapper"}},[e("div",{staticClass:"uk-height-1-1 uk-flex uk-flex-center sc-page-over-header",attrs:{id:"sc-page-content"}},[e("div",{staticClass:"uk-width-5-6@l uk-height-1-1"},[e("ScCard",{staticClass:"uk-height-1-1"},[e("div",{staticClass:"uk-grid-collapse uk-grid-divider uk-height-1-1 uk-grid",attrs:{"data-uk-grid":""}},[e("div",{staticClass:"uk-width-expand@s uk-height-1-1 uk-flex uk-flex-column",attrs:{id:"cm-wrapper"}},[e("ScCardHeader",{staticClass:"sc-padding sc-padding-medium-ends"},[e("div",{staticClass:"uk-flex uk-flex-middle"},[e("div",{staticClass:"uk-flex-1"},[e("ScCardTitle",[t._v("\n\t\t\t\t\t\t\t\t\t\t\tCode Editor\n\t\t\t\t\t\t\t\t\t\t")])],1),t._v(" "),e("ScCardActions",[e("a",{staticClass:"sc-actions-icon mdi mdi-content-save",attrs:{href:"javascript:void(0)"}}),t._v(" "),e("a",{staticClass:"sc-actions-icon mdi mdi-fullscreen",attrs:{id:"sc-code-editor-fs-enable",href:"javascript:void(0)"},on:{click:function(e){return e.preventDefault(),t.cmFullScreenEnable()}}})])],1)]),t._v(" "),e("ScCardBody",{staticClass:"sc-padding-remove"},[e("client-only",[e("Codemirror",{ref:"myCm",attrs:{value:t.code,options:t.cmOptions},on:{ready:t.onCmReady,focus:t.onCmFocus,input:t.onCmCodeChange}},[e("button",{staticClass:"uk-close",attrs:{id:"sc-code-editor-fs-disable",type:"button","data-uk-close":""},on:{click:function(e){return e.preventDefault(),t.cmFullScreenDisable()}}})])],1)],1),t._v(" "),e("ScProgressOverlay",{attrs:{active:t.cardProgress}})],1),t._v(" "),e("div",{staticClass:"uk-width-1-4@m sc-column-transition uk-visible@l",class:{"sc-column-collapsed":t.columnCollapsed,"sc-js-el-transform":t.columnTransform}},[e("ScCardHeader",{staticClass:"sc-padding sc-padding-medium-ends"},[e("div",{staticClass:"uk-flex uk-flex-middle"},[e("div",{staticClass:"uk-flex-1 sc-js-el-hide"},[e("ScCardTitle",[t._v("\n\t\t\t\t\t\t\t\t\t\t\tFiles\n\t\t\t\t\t\t\t\t\t\t")])],1),t._v(" "),e("client-only",[e("ColumnToggle",{attrs:{"show-icon":"mdi-file-outline","hide-title":"Hide files","show-title":"Show files",collapsed:t.columnCollapsed},on:{columnCollapsing:t.onColumnCollapsing,columnShown:t.onColumnShown,columnHidden:t.onColumnHidden}})],1)],1)]),t._v(" "),e("ScCardBody",{staticClass:"sc-js-el-hide"},[e("ul",{staticClass:"uk-list uk-list-divider sc-list-hoverable sc-code-editor-files"},[e("li",{staticClass:"sc-list-group",class:{"uk-active":"index.html"===t.activeFile}},[e("div",{staticClass:"sc-list-addon"},[e("i",{staticClass:"mdi mdi-file-outline"})]),t._v(" "),e("a",{staticClass:"sc-list-body sc-flex-items-left",attrs:{href:"javascript:void(0)"},on:{click:function(e){return e.preventDefault(),t.openFile("index.html","html")}}},[e("span",{staticClass:"sc-text-semibold sc-width-expand"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tindex.html\n\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("span",{staticClass:"sc-list-secondary-text uk-text-small"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tModified: 27/11/2019\n\t\t\t\t\t\t\t\t\t\t\t")])])]),t._v(" "),e("li",{staticClass:"sc-list-group",class:{"uk-active":"database.php"===t.activeFile}},[e("div",{staticClass:"sc-list-addon"},[e("i",{staticClass:"mdi mdi-file-outline"})]),t._v(" "),e("a",{staticClass:"sc-list-body sc-flex-items-left",attrs:{href:"javascript:void(0)"},on:{click:function(e){return e.preventDefault(),t.openFile("database.php","php")}}},[e("span",{staticClass:"sc-text-semibold sc-width-expand"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tdatabase.php\n\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("span",{staticClass:"sc-list-secondary-text uk-text-small"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tModified: 24/11/2019\n\t\t\t\t\t\t\t\t\t\t\t")])])]),t._v(" "),e("li",{staticClass:"sc-list-group",class:{"uk-active":"helpers.js"===t.activeFile}},[e("div",{staticClass:"sc-list-addon"},[e("i",{staticClass:"mdi mdi-file-outline"})]),t._v(" "),e("a",{staticClass:"sc-list-body sc-flex-items-left",attrs:{href:"javascript:void(0)"}},[e("span",{staticClass:"sc-text-semibold sc-width-expand",on:{click:function(e){return e.preventDefault(),t.openFile("helpers.js","js")}}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\thelpers.js\n\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("span",{staticClass:"sc-list-secondary-text uk-text-small"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tModified: 22/11/2019\n\t\t\t\t\t\t\t\t\t\t\t")])])]),t._v(" "),e("li",{staticClass:"sc-list-group",class:{"uk-active":"data.json"===t.activeFile}},[e("div",{staticClass:"sc-list-addon"},[e("i",{staticClass:"mdi mdi-file-outline"})]),t._v(" "),e("a",{staticClass:"sc-list-body sc-flex-items-left",attrs:{href:"javascript:void(0)"},on:{click:function(e){return e.preventDefault(),t.openFile("data.json","json")}}},[e("span",{staticClass:"sc-text-semibold sc-width-expand"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tdata.json\n\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("span",{staticClass:"sc-list-secondary-text uk-text-small"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tModified: 22/11/2019\n\t\t\t\t\t\t\t\t\t\t\t")])])]),t._v(" "),e("li",{staticClass:"sc-list-group",class:{"uk-active":"app.vue"===t.activeFile}},[e("div",{staticClass:"sc-list-addon"},[e("i",{staticClass:"mdi mdi-file-alert-outline md-color-red-500"})]),t._v(" "),e("a",{staticClass:"sc-list-body sc-flex-items-left",attrs:{href:"javascript:void(0)"},on:{click:function(e){return e.preventDefault(),t.openFile("app.vue","")}}},[e("span",{staticClass:"sc-text-semibold sc-width-expand"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tapp.vue\n\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("span",{staticClass:"sc-list-secondary-text uk-text-small"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tModified: 14/11/2019\n\t\t\t\t\t\t\t\t\t\t\t")])])])])])],1)])])],1)]),t._v(" "),e("client-only",[e("ScOffcanvas",{ref:"offcanvas"},[e("ul",{staticClass:"uk-list uk-list-divider sc-list-hoverable sc-code-editor-files"},[e("li",{staticClass:"sc-list-group",class:{"uk-active":"index.html"===t.activeFile}},[e("div",{staticClass:"sc-list-addon"},[e("i",{staticClass:"mdi mdi-file-outline"})]),t._v(" "),e("a",{staticClass:"sc-list-body sc-flex-items-left",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.openFile("index.html","html")}}},[e("span",{staticClass:"sc-text-semibold sc-width-expand"},[t._v("\n\t\t\t\t\t\t\t\tindex.html\n\t\t\t\t\t\t\t")]),t._v(" "),e("span",{staticClass:"sc-list-secondary-text uk-text-small"},[t._v("\n\t\t\t\t\t\t\t\tModified: 27/11/2019\n\t\t\t\t\t\t\t")])])]),t._v(" "),e("li",{staticClass:"sc-list-group",class:{"uk-active":"database.php"===t.activeFile}},[e("div",{staticClass:"sc-list-addon"},[e("i",{staticClass:"mdi mdi-file-outline"})]),t._v(" "),e("a",{staticClass:"sc-list-body sc-flex-items-left",attrs:{href:"javascript:void(0)"},on:{click:function(e){return e.preventDefault(),t.openFile("database.php","php")}}},[e("span",{staticClass:"sc-text-semibold sc-width-expand"},[t._v("\n\t\t\t\t\t\t\t\tdatabase.php\n\t\t\t\t\t\t\t")]),t._v(" "),e("span",{staticClass:"sc-list-secondary-text uk-text-small"},[t._v("\n\t\t\t\t\t\t\t\tModified: 24/11/2019\n\t\t\t\t\t\t\t")])])]),t._v(" "),e("li",{staticClass:"sc-list-group",class:{"uk-active":"helpers.js"===t.activeFile}},[e("div",{staticClass:"sc-list-addon"},[e("i",{staticClass:"mdi mdi-file-outline"})]),t._v(" "),e("a",{staticClass:"sc-list-body sc-flex-items-left",attrs:{href:"javascript:void(0)"}},[e("span",{staticClass:"sc-text-semibold sc-width-expand",on:{click:function(e){return e.preventDefault(),t.openFile("helpers.js","js")}}},[t._v("\n\t\t\t\t\t\t\t\thelpers.js\n\t\t\t\t\t\t\t")]),t._v(" "),e("span",{staticClass:"sc-list-secondary-text uk-text-small"},[t._v("\n\t\t\t\t\t\t\t\tModified: 22/11/2019\n\t\t\t\t\t\t\t")])])]),t._v(" "),e("li",{staticClass:"sc-list-group",class:{"uk-active":"data.json"===t.activeFile}},[e("div",{staticClass:"sc-list-addon"},[e("i",{staticClass:"mdi mdi-file-outline"})]),t._v(" "),e("a",{staticClass:"sc-list-body sc-flex-items-left",attrs:{href:"javascript:void(0)"},on:{click:function(e){return e.preventDefault(),t.openFile("data.json","json")}}},[e("span",{staticClass:"sc-text-semibold sc-width-expand"},[t._v("\n\t\t\t\t\t\t\t\tdata.json\n\t\t\t\t\t\t\t")]),t._v(" "),e("span",{staticClass:"sc-list-secondary-text uk-text-small"},[t._v("\n\t\t\t\t\t\t\t\tModified: 22/11/2019\n\t\t\t\t\t\t\t")])])]),t._v(" "),e("li",{staticClass:"sc-list-group",class:{"uk-active":"app.vue"===t.activeFile}},[e("div",{staticClass:"sc-list-addon"},[e("i",{staticClass:"mdi mdi-file-alert-outline md-color-red-500"})]),t._v(" "),e("a",{staticClass:"sc-list-body sc-flex-items-left",attrs:{href:"javascript:void(0)"},on:{click:function(e){return e.preventDefault(),t.openFile("app.vue","")}}},[e("span",{staticClass:"sc-text-semibold sc-width-expand"},[t._v("\n\t\t\t\t\t\t\t\tapp.vue\n\t\t\t\t\t\t\t")]),t._v(" "),e("span",{staticClass:"sc-list-secondary-text uk-text-small"},[t._v("\n\t\t\t\t\t\t\t\tModified: 14/11/2019\n\t\t\t\t\t\t\t")])])])])])],1)],1)}),[],!1,null,null,null);e.default=component.exports},593:function(t,e,n){"use strict";var l={props:{hideTitle:{type:String,default:"Hide List"},hideIcon:{type:String,default:"mdi-arrow-collapse-horizontal"},showTitle:{type:String,default:"Show List"},showIcon:{type:String,default:"mdi-arrow-expand-horizontal"},collapsed:{type:Boolean,default:!1}},computed:{columnCollapsed:{get:function(){return this.collapsed},set:function(t){var e=this;return this.$emit("columnCollapsing",t),setTimeout((function(){e.$emit(t?"columnHidden":"columnShown")}),300),t}}},methods:{columnToggle:function(){this.columnCollapsed=!this.columnCollapsed}}},o=n(2),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"uk-flex uk-flex-center",class:{"uk-flex-1":t.columnCollapsed}},[e("a",{directives:[{name:"show",rawName:"v-show",value:!t.columnCollapsed,expression:"!columnCollapsed"}],staticClass:"sc-column-hide sc-actions-icon mdi",class:[t.hideIcon],attrs:{href:"javascript:void(0)","data-uk-tooltip":"",title:t.hideTitle},on:{click:function(e){return e.stopPropagation(),t.columnToggle()}}}),t._v(" "),e("a",{directives:[{name:"show",rawName:"v-show",value:t.columnCollapsed,expression:"columnCollapsed"}],staticClass:"sc-column-show sc-actions-icon mdi",class:[t.showIcon],attrs:{href:"javascript:void(0)","data-uk-tooltip":"",title:t.showTitle},on:{click:function(e){return e.stopPropagation(),t.columnToggle()}}})])}),[],!1,null,null,null);e.a=component.exports},604:function(t,e,n){"use strict";n.r(e);n(30),n(42),n(19),n(43),n(44);var l=n(15),o=n(8),r=n(3);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d={name:"ScOffcanvas",props:{extraClass:{type:String,default:""}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.c)(["vxOffcanvasPresent","vxOffcanvasExpanded"])),watch:{vxOffcanvasExpanded:function(t){r.e.mediumMax()&&(t?(UIkit.offcanvas("#sc-offcanvas").show(),this.$store.getters.sidebarMainState&&this.$store.commit("sidebarMainToggle",!1)):UIkit.offcanvas("#sc-offcanvas").hide())},$route:function(){this.$store.getters.offcanvasState&&this.$store.commit("offcanvasToggle",!1)}},mounted:function(){var t=this;r.e.mediumMax()&&t.$nextTick((function(){t.$store.commit("setOffcanvasPresent",!0)}))},beforeDestroy:function(){this.$store.commit("offcanvasToggle",!1),this.$store.commit("setOffcanvasPresent",!1)},methods:{hide:function(){this.$store.commit("offcanvasToggle",!1)}}},m=d,f=n(2),component=Object(f.a)(m,(function(){var t=this,e=t._self._c;return t.vxOffcanvasPresent?e("div",{attrs:{id:"sc-offcanvas","data-uk-offcanvas":"flip: true; container: '#nuxt-wrapper'"}},[e("div",{staticClass:"uk-offcanvas-bar",class:t.extraClass},[t._t("default")],2)]):t._e()}),[],!1,null,null,null);e.default=component.exports},803:function(t,e,n){var content=n(1138);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("477b0fd5",content,!0,{sourceMap:!1})}}]);