(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{1763:function(t,e,n){"use strict";n.r(e);n(18),n(12);var c=n(637),l=n(596),r={name:"FormsAdvancedElementsSelect2",components:{Select2:function(){return Promise.all([n.e(0),n.e(1),n.e(9)]).then(n.bind(null,1605))}},data:function(){return{select2:{state:"",cities:["AK","CA","NY"]}}},computed:{usStates:function(){return c.map((function(t){return t.id=t.id||t.val,t.text=t.text||t.name,t}))},usCities:function(){return l.map((function(t){return t.id=t.id||t.rank,t.text=t.text||t.city,t}))}}},d=n(2),component=Object(d.a)(r,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"sc-page-wrapper"}},[e("div",{attrs:{id:"sc-page-content"}},[e("div",{staticClass:"uk-child-width-1-2@l uk-grid",attrs:{"data-uk-grid":""}},[e("div",[e("ScCard",[e("ScCardTitle",[t._v("\r\n\t\t\t\t\t\t\tDefault\r\n\t\t\t\t\t\t")]),t._v(" "),e("ScCardBody",[e("client-only",[e("Select2",{attrs:{options:t.usStates,settings:{width:"100%",placeholder:"Select state...",allowClear:!0}},model:{value:t.select2.state,callback:function(e){t.$set(t.select2,"state",e)},expression:"select2.state"}})],1)],1)],1)],1),t._v(" "),e("div",[e("ScCard",[e("ScCardTitle",[t._v("\r\n\t\t\t\t\t\t\tTagging\r\n\t\t\t\t\t\t")]),t._v(" "),e("ScCardBody",[e("client-only",[e("Select2",{attrs:{options:t.usCities,settings:{width:"100%",placeholder:"Select city...",closeOnSelect:!1},multiple:""},model:{value:t.select2.cities,callback:function(e){t.$set(t.select2,"cities",e)},expression:"select2.cities"}})],1)],1)],1)],1)])])])}),[],!1,null,null,null);e.default=component.exports}}]);