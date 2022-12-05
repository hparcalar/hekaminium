(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{1721:function(t,e,r){"use strict";r.r(e);var c={name:"PagesPricingTables",data:function(){return{data:[{id:1,title:"Personal",subtitle:"For Frelancers",price:"$5",features:{ram:"512MB Memory",cpu:"1 Core Processor",disk:"10GB SSD Disk",transfer:"1TB Transfer",users:"1 User",mailchimp:!1,support:!1}},{id:2,default:!0,title:"Team",subtitle:"For small teams",price:"$20",features:{ram:"4BG Memory",cpu:"2 Core Processor",disk:"20GB SSD Disk",transfer:"8TB Transfer",users:"5 Users",mailchimp:!0,support:!1}},{id:3,title:"Enterprise",subtitle:"For large teams",price:"$99",features:{ram:"32BG Memory",cpu:"8 Core Processor",disk:"1000GB SSD Disk",transfer:"<strong>Unlimited</strong> Transfer",users:"50 Users",mailchimp:!0,support:!0}}]}}},l=r(3),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"sc-page-wrapper"}},[e("div",{attrs:{id:"sc-page-content"}},[e("div",{staticClass:"uk-flex uk-flex-center"},[e("div",{staticClass:"uk-width-3-4@l"},[e("div",{staticClass:"uk-child-width-1-3@l uk-child-width-1-2@s uk-grid",attrs:{"data-uk-grid":""}},t._l(t.data,(function(table){return e("div",{key:table.id},[e("ScCard",[e("ScCardBody",{staticClass:"sc-padding-remove"},[e("div",{staticClass:"sc-padding sc-round-top",class:{"sc-light md-bg-light-blue-600":table.default}},[e("div",{staticClass:"uk-flex uk-flex-middle uk-grid-small",attrs:{"data-uk-grid":""}},[e("div",{staticClass:"uk-width-expand@s uk-text-center@xs"},[e("h3",{staticClass:"uk-margin-remove"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(table.title)+"\r\n\t\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("span",{staticClass:"uk-text-uppercase uk-text-small sc-color-secondary"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(table.subtitle)+"\r\n\t\t\t\t\t\t\t\t\t\t\t\t")])]),t._v(" "),e("div",{staticClass:"uk-width-auto@s uk-text-center@xs"},[e("h1",{staticClass:"sc-pricing-table-amount uk-margin-remove uk-display-inline-block sc-text-semibold"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(table.price)+"\r\n\t\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("span",{staticClass:"uk-text-small sc-color-secondary"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t/month\r\n\t\t\t\t\t\t\t\t\t\t\t\t")])])])]),t._v(" "),e("hr",{staticClass:"uk-margin-remove"}),t._v(" "),e("div",{staticClass:"sc-padding-large"},[e("ul",{staticClass:"uk-list uk-list-large uk-margin-bottom"},[e("li",{staticClass:"uk-text-large"},[e("i",{staticClass:"mdi mdi-check uk-margin-right md-color-green-500"}),t._v(t._s(table.features.ram)+"\r\n\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("li",{staticClass:"uk-text-large"},[e("i",{staticClass:"mdi mdi-check uk-margin-right md-color-green-500"}),t._v(t._s(table.features.cpu)+"\r\n\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("li",{staticClass:"uk-text-large"},[e("i",{staticClass:"mdi mdi-check uk-margin-right md-color-green-500"}),t._v(t._s(table.features.disk)+"\r\n\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("li",{staticClass:"uk-text-large"},[e("i",{staticClass:"mdi mdi-check uk-margin-right md-color-green-500"}),t._v(" "),e("span",{domProps:{innerHTML:t._s(table.features.transfer)}})]),t._v(" "),e("li",{staticClass:"uk-text-large"},[e("i",{staticClass:"mdi mdi-check uk-margin-right md-color-green-500"}),t._v(t._s(table.features.users)+"\r\n\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("li",{directives:[{name:"show",rawName:"v-show",value:!table.features.mailchimp,expression:"!table.features.mailchimp"}],staticClass:"uk-text-large"},[e("i",{staticClass:"mdi mdi-check uk-margin-right md-color-grey-400"}),e("span",{staticClass:"md-color-grey-400"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tMailchimp Integration\r\n\t\t\t\t\t\t\t\t\t\t\t\t")])]),t._v(" "),e("li",{directives:[{name:"show",rawName:"v-show",value:table.features.mailchimp,expression:"table.features.mailchimp"}],staticClass:"uk-text-large"},[e("i",{staticClass:"mdi mdi-check uk-margin-right md-color-green-500"}),t._v("Mailchimp Integration\r\n\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("li",{directives:[{name:"show",rawName:"v-show",value:!table.features.support,expression:"!table.features.support"}],staticClass:"uk-text-large"},[e("i",{staticClass:"mdi mdi-check uk-margin-right md-color-grey-400"}),e("span",{staticClass:"md-color-grey-400"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t24/7 Support\r\n\t\t\t\t\t\t\t\t\t\t\t\t")])]),t._v(" "),e("li",{directives:[{name:"show",rawName:"v-show",value:table.features.support,expression:"table.features.support"}],staticClass:"uk-text-large"},[e("i",{staticClass:"mdi mdi-check uk-margin-right md-color-green-500"}),t._v("24/7 Support\r\n\t\t\t\t\t\t\t\t\t\t\t")])])]),t._v(" "),e("hr",{staticClass:"uk-margin-remove"}),t._v(" "),e("div",{staticClass:"sc-padding md-bg-grey-200 uk-text-center"},[e("button",{staticClass:"sc-button sc-button-large sc-button-block",class:{"sc-button-custom md-bg-light-blue-600":table.default}},[t._v("\r\n\t\t\t\t\t\t\t\t\t\t\tSign Up\r\n\t\t\t\t\t\t\t\t\t\t")])])])],1)],1)})),0),t._v(" "),e("hr",{staticClass:"uk-margin-large"}),t._v(" "),e("ScCard",[e("ScCardBody",[e("h1",{staticClass:"uk-text-center uk-margin-small-bottom"},[t._v("\r\n\t\t\t\t\t\t\t\tPlans & Pricing\r\n\t\t\t\t\t\t\t")]),t._v(" "),e("p",{staticClass:"uk-text-center uk-margin-top-remove uk-margin-large-bottom"},[t._v("\r\n\t\t\t\t\t\t\t\tFree 14-day trial. No credit card required.\r\n\t\t\t\t\t\t\t")]),t._v(" "),e("div",{staticClass:"uk-overflow-auto"},[e("table",{staticClass:"uk-table uk-table-hover uk-table-border-inside uk-table-middle"},[e("thead",[e("tr",[e("th",{staticClass:"uk-table-border-remove"}),t._v(" "),e("th",{staticClass:"uk-width-1-6 uk-text-center md-bg-grey-100"},[e("span",{staticClass:"uk-display-block sc-text-semibold uk-text-large md-color-red-600"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tPersonal\r\n\t\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("span",[t._v("For Freelancers")])]),t._v(" "),e("th",{staticClass:"uk-width-1-6 uk-text-center md-bg-grey-100"},[e("span",{staticClass:"uk-display-block sc-text-semibold uk-text-large md-color-blue-600"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tTeam\r\n\t\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("span",[t._v("For small teams")])]),t._v(" "),e("th",{staticClass:"uk-width-1-6 uk-text-center md-bg-grey-100"},[e("span",{staticClass:"uk-display-block sc-text-semibold uk-text-large md-color-green-600"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tEnterprise\r\n\t\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("span",[t._v("For large teams")])])])]),t._v(" "),e("tbody",[e("tr",{staticClass:"uk-table-hover-disable"},[e("td",{staticClass:"uk-table-border-remove"}),t._v(" "),e("td",{staticClass:"uk-text-center"},[e("div",{staticClass:"sc-padding"},[e("h1",{staticClass:"uk-margin-remove uk-display-inline-block sc-text-semibold"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t$5\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t")]),t._v("/mo\r\n\t\t\t\t\t\t\t\t\t\t\t\t")])]),t._v(" "),e("td",{staticClass:"uk-text-center"},[e("div",{staticClass:"sc-padding"},[e("h1",{staticClass:"uk-margin-remove uk-display-inline-block sc-text-semibold"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t$20\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t")]),t._v("/mo\r\n\t\t\t\t\t\t\t\t\t\t\t\t")])]),t._v(" "),e("td",{staticClass:"uk-text-center"},[e("div",{staticClass:"sc-padding"},[e("h1",{staticClass:"uk-margin-remove uk-display-inline-block sc-text-semibold"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t$99\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t")]),t._v("/mo\r\n\t\t\t\t\t\t\t\t\t\t\t\t")])])]),t._v(" "),e("tr",{staticClass:"md-bg-grey-100"},[e("td",[e("strong",{staticClass:"uk-text-uppercase"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tFeatures\r\n\t\t\t\t\t\t\t\t\t\t\t\t")])]),t._v(" "),e("td",{attrs:{colspan:"3"}},[t._v("\r\n\t\t\t\t\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t\t\t\t\t")])]),t._v(" "),e("tr",[e("td",{staticClass:"uk-text-nowrap"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\tAPI Projects\r\n\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("td",{staticClass:"uk-text-center uk-text-large"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t3\r\n\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("td",{staticClass:"uk-text-center uk-text-large"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t10\r\n\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("td",{staticClass:"uk-text-center uk-text-large"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\tUnlimited\r\n\t\t\t\t\t\t\t\t\t\t\t")])]),t._v(" "),e("tr",[e("td",{staticClass:"uk-text-nowrap"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\tNumber of keywords\r\n\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("td",{staticClass:"uk-text-center uk-text-large"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t5\r\n\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("td",{staticClass:"uk-text-center uk-text-large"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t15\r\n\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("td",{staticClass:"uk-text-center uk-text-large"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t50\r\n\t\t\t\t\t\t\t\t\t\t\t")])]),t._v(" "),e("tr",[e("td",[t._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\tCustomization of your web page (Logo, cover, videos, photos)\r\n\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("td",{staticClass:"uk-text-center"},[e("i",{staticClass:"mdi mdi-check md-color-green-500"})]),t._v(" "),e("td",{staticClass:"uk-text-center"},[e("i",{staticClass:"mdi mdi-check md-color-green-500"})]),t._v(" "),e("td",{staticClass:"uk-text-center"},[e("i",{staticClass:"mdi mdi-check md-color-green-500"})])]),t._v(" "),e("tr",[e("td",[t._v("Email templates HTML + RWD")]),t._v(" "),e("td",{staticClass:"uk-text-center"},[e("i",{staticClass:"mdi mdi-minus md-color-grey-400"})]),t._v(" "),e("td",{staticClass:"uk-text-center"},[e("i",{staticClass:"mdi mdi-check md-color-green-500"})]),t._v(" "),e("td",{staticClass:"uk-text-center"},[e("i",{staticClass:"mdi mdi-check md-color-green-500"})])]),t._v(" "),e("tr",{staticClass:"md-bg-grey-100"},[e("td",[e("strong",{staticClass:"uk-text-uppercase"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tOther benefits\r\n\t\t\t\t\t\t\t\t\t\t\t\t")])]),t._v(" "),e("td",{attrs:{colspan:"3"}},[t._v("\r\n\t\t\t\t\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t\t\t\t\t")])]),t._v(" "),e("tr",[e("td",{staticClass:"uk-text-nowrap"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\tTeam Management\r\n\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("td",{staticClass:"uk-text-center"},[e("i",{staticClass:"mdi mdi-minus md-color-grey-400"})]),t._v(" "),e("td",{staticClass:"uk-text-center"},[e("i",{staticClass:"mdi mdi-check md-color-green-500"})]),t._v(" "),e("td",{staticClass:"uk-text-center"},[e("i",{staticClass:"mdi mdi-check md-color-green-500"})])]),t._v(" "),e("tr",[e("td",{staticClass:"uk-text-nowrap"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\tAdvanced GitHub Integration\r\n\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("td",{staticClass:"uk-text-center"},[e("i",{staticClass:"mdi mdi-check md-color-green-500"})]),t._v(" "),e("td",{staticClass:"uk-text-center"},[e("i",{staticClass:"mdi mdi-check md-color-green-500"})]),t._v(" "),e("td",{staticClass:"uk-text-center"},[e("i",{staticClass:"mdi mdi-check md-color-green-500"})])]),t._v(" "),e("tr",[e("td",{staticClass:"uk-text-nowrap"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\tMailchimp Integration\r\n\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("td",{staticClass:"uk-text-center"},[e("i",{staticClass:"mdi mdi-check md-color-green-500"})]),t._v(" "),e("td",{staticClass:"uk-text-center"},[e("i",{staticClass:"mdi mdi-check md-color-green-500"})]),t._v(" "),e("td",{staticClass:"uk-text-center"},[e("i",{staticClass:"mdi mdi-check md-color-green-500"})])]),t._v(" "),e("tr",[e("td",{staticClass:"uk-text-nowrap"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\tAnalytics Integration\r\n\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("td",{staticClass:"uk-text-center"},[e("i",{staticClass:"mdi mdi-minus md-color-grey-400"})]),t._v(" "),e("td",{staticClass:"uk-text-center"},[e("i",{staticClass:"mdi mdi-check md-color-green-500"})]),t._v(" "),e("td",{staticClass:"uk-text-center"},[e("i",{staticClass:"mdi mdi-check md-color-green-500"})])]),t._v(" "),e("tr",[e("td",{staticClass:"uk-text-nowrap"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\tSSL Security Included\r\n\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("td",{staticClass:"uk-text-center"},[e("i",{staticClass:"mdi mdi-minus md-color-grey-400"})]),t._v(" "),e("td",{staticClass:"uk-text-center"},[e("i",{staticClass:"mdi mdi-check md-color-green-500"})]),t._v(" "),e("td",{staticClass:"uk-text-center"},[e("i",{staticClass:"mdi mdi-check md-color-green-500"})])]),t._v(" "),e("tr",[e("td",{staticClass:"uk-text-nowrap"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t24/7 Support\r\n\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("td",{staticClass:"uk-text-center"},[e("i",{staticClass:"mdi mdi-minus md-color-grey-400"})]),t._v(" "),e("td",{staticClass:"uk-text-center"},[e("i",{staticClass:"mdi mdi-minus md-color-grey-400"})]),t._v(" "),e("td",{staticClass:"uk-text-center"},[e("i",{staticClass:"mdi mdi-check md-color-green-500"})])]),t._v(" "),e("tr",{staticClass:"uk-table-hover-disable"},[e("td",{staticClass:"uk-table-border-remove"}),t._v(" "),e("td",{staticClass:"uk-text-center"},[e("button",{staticClass:"sc-button sc-button-custom md-bg-red-600"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tTry it Free\r\n\t\t\t\t\t\t\t\t\t\t\t\t")])]),t._v(" "),e("td",{staticClass:"uk-text-center"},[e("button",{staticClass:"sc-button sc-button-custom md-bg-blue-600"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tTry it Free\r\n\t\t\t\t\t\t\t\t\t\t\t\t")])]),t._v(" "),e("td",{staticClass:"uk-text-center"},[e("button",{staticClass:"sc-button sc-button-custom md-bg-green-600"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tTry it Free\r\n\t\t\t\t\t\t\t\t\t\t\t\t")])])])])])])])],1)],1)])])])}),[],!1,null,null,null);e.default=component.exports}}]);