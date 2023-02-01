(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{1822:function(t,e,n){"use strict";n.r(e);n(583);var r={name:"ComponentsBase"},v=n(2),component=Object(v.a)(r,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"sc-page-wrapper"}},[e("div",{attrs:{id:"sc-page-content"}},[e("div",{staticClass:"uk-child-width-1-2@l uk-grid",attrs:{"data-uk-grid":""}},[e("div",[e("ScCard",[e("ScCardTitle",[t._v("\r\n\t\t\t\t\t\t\tHeadings\r\n\t\t\t\t\t\t")]),t._v(" "),e("ScCardBody",[e("h1",[t._v("h1 Heading 1")]),t._v(" "),e("h2",[t._v("h2 Heading 2")]),t._v(" "),e("h3",[t._v("h3 Heading 3")]),t._v(" "),e("h4",[t._v("h4 Heading 4")]),t._v(" "),e("h5",[t._v("h5 Heading 5")]),t._v(" "),e("h6",[t._v("h6 Heading 6")]),t._v(" "),e("div",{staticClass:"uk-margin-large"},[e("h4",{staticClass:"uk-heading-line"},[e("span",[t._v("Heading line")])]),t._v(" "),e("h4",{staticClass:"uk-heading-line uk-text-center"},[e("span",[t._v("Heading line")])]),t._v(" "),e("h4",{staticClass:"uk-heading-line uk-text-right"},[e("span",[t._v("Heading line")])]),t._v(" "),e("h4",{staticClass:"uk-heading-divider"},[e("span",[t._v("Heading divider")])])])])],1),t._v(" "),e("ScCard",{staticClass:"uk-margin-top"},[e("ScCardTitle",[t._v("\r\n\t\t\t\t\t\t\tPreformatted text\r\n\t\t\t\t\t\t")]),t._v(" "),e("ScCardBody",[e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[e("code",[t._v('\x3c!-- HTML --\x3e\r\n------------------------------\r\n<!DOCTYPE html>\r\n<title>Title</title>\r\n\r\n<style>body {width: 500px;}</style>\r\n\r\n<script type="application/javascript">\r\n\tfunction $init() {return true;}\r\n<\/script>\r\n\r\n<body>\r\n\t<p checked class="title" id=\'title\'>Title</p>\r\n\t\x3c!-- here goes the rest of the page --\x3e\r\n</body>')])]),t._v(" "),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[e("code",[t._v("/* JS */\r\n------------------------------\r\nfunction $initHighlight(block, cls) {\r\n\ttry {\r\n\t\tif (cls.search(/\\bno\\-highlight\\b/) != -1)\r\n\t\treturn process(block, true, 0x0F) +\r\n\t\t` class=\"${cls}\"`;\r\n\t} catch (e) {\r\n\t\t/* handle exception */\r\n\t}\r\n\tfor (var i = 0 / 2; i < classes.length; i++) {\r\n\t\tif (checkCondition(classes[i]) === undefined)\r\n\t\tconsole.log('undefined');\r\n\t}\r\n}\r\n\r\nexport  $initHighlight;")])]),t._v(" "),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[e("code",[t._v('/* SQL */\r\n------------------------------\r\nCREATE TABLE "topic" (\r\n\t"id" serial NOT NULL PRIMARY KEY,\r\n\t"forum_id" integer NOT NULL,\r\n\t"subject" varchar(255) NOT NULL\r\n);\r\nALTER TABLE "topic"\r\nADD CONSTRAINT forum_id FOREIGN KEY ("forum_id")\r\nREFERENCES "forum" ("id");\r\n\r\n-- Initials\r\ninsert into "topic" ("forum_id", "subject")\r\nvalues (2, \'D\'\'artagnian\');')])])])],1)],1),t._v(" "),e("div",[e("ScCard",[e("ScCardTitle",[t._v("\r\n\t\t\t\t\t\t\tText-level semantics\r\n\t\t\t\t\t\t")]),t._v(" "),e("ScCardBody",[e("table",{staticClass:"uk-table uk-table-small"},[e("thead",[e("tr",[e("th",{staticClass:"uk-table-shrink"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\t\tElement\r\n\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("<abbr>")])]),t._v(" "),e("td",[t._v("\r\n\t\t\t\t\t\t\t\t\t\t\tDefine an abbreviation using the "),e("abbr",{attrs:{title:"Title Text"}},[t._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\tabbr element with a title\r\n\t\t\t\t\t\t\t\t\t\t\t")]),t._v(".\r\n\t\t\t\t\t\t\t\t\t\t")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("<b>")])]),t._v(" "),e("td",[t._v("Create bold text with the "),e("b",[t._v("b element")]),t._v(".")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("<cite>")])]),t._v(" "),e("td",[t._v("Define the title of a work with the "),e("cite",[t._v("cite element")]),t._v(".")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("<code>")])]),t._v(" "),e("td",[t._v("Define inline code snippets using the "),e("code",[t._v("code element")]),t._v(".")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("<del>")])]),t._v(" "),e("td",[t._v("Mark document changes as deleted text using the "),e("del",[t._v("del element")]),t._v(".")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("<dfn>")])]),t._v(" "),e("td",[t._v("\r\n\t\t\t\t\t\t\t\t\t\t\tCreate a definition term using the "),e("dfn",{attrs:{title:"Defines a definition term"}},[t._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\tdfn element with a title\r\n\t\t\t\t\t\t\t\t\t\t\t")]),t._v(".\r\n\t\t\t\t\t\t\t\t\t\t")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("<em>")])]),t._v(" "),e("td",[t._v("Emphasize text using the "),e("em",[t._v("em element")]),t._v(".")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("<i>")])]),t._v(" "),e("td",[t._v("Set off part of a text by using the "),e("i",[t._v("i element")]),t._v(".")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("<ins>")])]),t._v(" "),e("td",[t._v("Mark document changes as inserted text using the "),e("ins",[t._v("ins element")]),t._v(".")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("<kbd>")])]),t._v(" "),e("td",[t._v("Use a "),e("kbd",[t._v("keybord input element")]),t._v(" to display input in the browser's default monospace font.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("<mark>")])]),t._v(" "),e("td",[t._v("Highlight text with no semantic meaning using the "),e("mark",[t._v("mark element")]),t._v(".")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("<q>")])]),t._v(" "),e("td",[t._v("Define inline quotations using a "),e("q",[t._v("q element "),e("q",[t._v("inside")]),t._v(" a q element")]),t._v(".")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("<s>")])]),t._v(" "),e("td",[t._v("Define text with a strikethrough using the "),e("s",[t._v("s element")]),t._v(".")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("<samp>")])]),t._v(" "),e("td",[t._v("Define sample output with a "),e("samp",[t._v("samp element")]),t._v(".")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("<small>")])]),t._v(" "),e("td",[t._v("De-emphasize text for small print using the "),e("small",[t._v("small element")]),t._v(".")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("<span>")])]),t._v(" "),e("td",[t._v("Define an inline-container using the "),e("span",[t._v("span element")]),t._v(".")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("<strong>")])]),t._v(" "),e("td",[t._v("Imply extra importance using the "),e("strong",[t._v("strong element")]),t._v(".")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("<sub>")])]),t._v(" "),e("td",[t._v("Define subscript text using the "),e("sub",[t._v("sub element.")]),t._v(".")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("<sup>")])]),t._v(" "),e("td",[t._v("Define superscript text using the "),e("sup",[t._v("sup element.")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("<u>")])]),t._v(" "),e("td",[t._v("Define underlined text using the "),e("u",[t._v("u element")]),t._v(".")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("<var>")])]),t._v(" "),e("td",[t._v("Define a variable using the "),e("var",[t._v("var element")]),t._v(".")])])])])])],1)],1)])])])}),[],!1,null,null,null);e.default=component.exports},583:function(t,e,n){"use strict";n.r(e);var r=n(3),v=n(691);n(692),v.registerLanguage("xml",n(693)),v.registerLanguage("sql",n(694)),v.registerLanguage("javascript",n(695)),r.default.directive("highlightjs",{deep:!0,bind:function(t,e){var n,i,r=t.querySelectorAll("code");for(i=0;i<r.length;i+=1)n=r[i],"string"==typeof e.value&&(n.textContent=e.value),v.highlightBlock(t)},componentUpdated:function(t,e){var n,i,r=t.querySelectorAll("code");for(i=0;i<r.length;i+=1)n=r[i],"string"==typeof e.value&&(n.textContent=e.value,v.highlightBlock(t))}})}}]);