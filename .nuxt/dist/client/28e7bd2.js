(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{1824:function(t,e,n){"use strict";n.r(e);var r={name:"FormsAdvancedElementsRangeSlider",components:{IonRangeSlider:function(){return Promise.all([n.e(0),n.e(233),n.e(227)]).then(n.bind(null,1864))}},data:function(){return{rangeSlider:{a:550,b:"200;800",c:5,d:30,e:"1000000;2000000",f:0,custom:8,customSettings:{min:1,max:10},defaultCustomSettings:!0}}},methods:{setSliderValue:function(t){this.rangeSlider.custom=t},setSliderSettings:function(){var t=this.$refs.customSlider;this.rangeSlider.defaultCustomSettings?t.changeSettings({min:1,max:20}):t.changeSettings({min:1,max:10}),this.rangeSlider.defaultCustomSettings=!this.rangeSlider.defaultCustomSettings}}},l=n(3),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"sc-page-wrapper"}},[e("div",{attrs:{id:"sc-page-content"}},[e("ScCard",[e("ScCardBody",[e("div",{staticClass:"uk-child-width-1-3@l uk-child-width-1-2@m uk-grid uk-grid-divider",attrs:{"data-uk-grid":""}},[e("div",[e("client-only",[e("IonRangeSlider",{attrs:{settings:{min:100,max:1e3}},model:{value:t.rangeSlider.a,callback:function(e){t.$set(t.rangeSlider,"a",e)},expression:"rangeSlider.a"}})],1),t._v(" "),e("span",{staticClass:"sc-color-secondary uk-text-small"},[t._v("Data: "+t._s(t.rangeSlider.a))])],1),t._v(" "),e("div",[e("client-only",[e("IonRangeSlider",{attrs:{settings:{type:"double",grid:!0,min:0,max:1e3,prefix:"$"}},model:{value:t.rangeSlider.b,callback:function(e){t.$set(t.rangeSlider,"b",e)},expression:"rangeSlider.b"}})],1),t._v(" "),e("span",{staticClass:"sc-color-secondary uk-text-small"},[t._v("Data: "+t._s(t.rangeSlider.b))])],1),t._v(" "),e("div",[e("client-only",[e("IonRangeSlider",{attrs:{settings:{grid:!0,from:5,values:["zero","one","two","three","four","five","six","seven","eight","nine","ten"]}},model:{value:t.rangeSlider.c,callback:function(e){t.$set(t.rangeSlider,"c",e)},expression:"rangeSlider.c"}})],1),t._v(" "),e("span",{staticClass:"sc-color-secondary uk-text-small"},[t._v("Data: "+t._s(t.rangeSlider.c))])],1)]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"uk-child-width-1-3@l uk-child-width-1-2@m uk-grid uk-grid-divider",attrs:{"data-uk-grid":""}},[e("div",[e("client-only",[e("IonRangeSlider",{attrs:{settings:{grid:!0,min:18,max:70,from:30,prefix:"Age ",max_postfix:"+"}},model:{value:t.rangeSlider.d,callback:function(e){t.$set(t.rangeSlider,"d",e)},expression:"rangeSlider.d"}})],1),t._v(" "),e("span",{staticClass:"sc-color-secondary uk-text-small"},[t._v("Data: "+t._s(t.rangeSlider.d))])],1),t._v(" "),e("div",[e("client-only",[e("IonRangeSlider",{attrs:{settings:{type:"double",min:1e6,max:2e6,grid:!0,force_edges:!0}},model:{value:t.rangeSlider.e,callback:function(e){t.$set(t.rangeSlider,"e",e)},expression:"rangeSlider.e"}})],1),t._v(" "),e("span",{staticClass:"sc-color-secondary uk-text-small"},[t._v("Data: "+t._s(t.rangeSlider.e))])],1),t._v(" "),e("div",[e("client-only",[e("IonRangeSlider",{attrs:{settings:{type:"single",min:0,max:10,step:2.34,grid:!0,grid_snap:!0}},model:{value:t.rangeSlider.f,callback:function(e){t.$set(t.rangeSlider,"f",e)},expression:"rangeSlider.f"}})],1),t._v(" "),e("span",{staticClass:"sc-color-secondary uk-text-small"},[t._v("Data: "+t._s(t.rangeSlider.f))])],1)])])],1),t._v(" "),e("ScCard",{staticClass:"uk-margin-top"},[e("ScCardTitle",[t._v("\n\t\t\t\t\tUpdate values and settings\n\t\t\t\t")]),t._v(" "),e("ScCardBody",[e("div",{staticClass:"uk-grid uk-margin-bottom",attrs:{"data-uk-grid":""}},[e("div",{staticClass:"uk-width-1-2@m"},[e("client-only",[e("IonRangeSlider",{ref:"customSlider",attrs:{settings:t.rangeSlider.customSettings},model:{value:t.rangeSlider.custom,callback:function(e){t.$set(t.rangeSlider,"custom",e)},expression:"rangeSlider.custom"}})],1)],1)]),t._v(" "),e("div",{attrs:{"data-uk-margin":""}},[e("button",{staticClass:"sc-button",attrs:{disabled:2===t.rangeSlider.custom},on:{click:function(e){return t.setSliderValue(2)}}},[t._v("\n\t\t\t\t\t\t\tSet to 2\n\t\t\t\t\t\t")]),t._v(" "),e("button",{staticClass:"sc-button",attrs:{disabled:4===t.rangeSlider.custom},on:{click:function(e){return t.setSliderValue(4)}}},[t._v("\n\t\t\t\t\t\t\tSet to 4\n\t\t\t\t\t\t")]),t._v(" "),e("button",{staticClass:"sc-button uk-margin-right",attrs:{disabled:8===t.rangeSlider.custom},on:{click:function(e){return t.setSliderValue(8)}}},[t._v("\n\t\t\t\t\t\t\tSet to 8\n\t\t\t\t\t\t")]),t._v(" "),e("button",{staticClass:"sc-button",on:{click:function(e){return t.setSliderSettings()}}},[e("span",{directives:[{name:"show",rawName:"v-show",value:t.rangeSlider.defaultCustomSettings,expression:"rangeSlider.defaultCustomSettings"}]},[t._v("Change")]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:!t.rangeSlider.defaultCustomSettings,expression:"!rangeSlider.defaultCustomSettings"}]},[t._v("Restore")]),t._v("\n\t\t\t\t\t\t\tsettings\n\t\t\t\t\t\t")])])])],1)],1)])}),[],!1,null,null,null);e.default=component.exports}}]);