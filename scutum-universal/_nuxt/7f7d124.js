(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{1427:function(e,t,r){"use strict";r(925)},1428:function(e,t,r){var n=r(7)(!1);n.push([e.i,'div.ganttview{position:relative}div.ganttview *{box-sizing:border-box}div.ganttview-wrapper{margin:0 auto;overflow:hidden}div.ganttview-grid,div.ganttview-grid-row-cell,div.ganttview-hzheader-day,div.ganttview-hzheader-month,div.ganttview-vtheader{float:left}div.ganttview-hzheader-day,div.ganttview-hzheader-month{text-align:center}div.ganttview-grid-row-cell.last,div.ganttview-hzheader-day.last,div.ganttview-hzheader-month.last{border-right:none}div.ganttview-hzheader-month{width:60px;height:20px;border-right:1px solid rgba(0,0,0,.12);line-height:20px;font-size:11px;font-weight:700;text-transform:uppercase;color:rgba(0,0,0,.54);box-sizing:content-box}div.ganttview-hzheader-day{width:20px;height:20px;border-right:1px solid #f0f0f0;border-top:1px solid rgba(0,0,0,.12);line-height:20px;color:#999;font-size:11px}div.ganttview-hzheader-day.ganttview-weekend{background:#f8f8f8}div.ganttview-hzheader-day.ganttview-today{background:#fff9db!important}div.ganttview-vtheader{margin-top:41px;width:240px;background-color:#fff}div.ganttview-vtheader-group{color:rgba(0,0,0,.87)}div.ganttview-vtheader-group-name{line-height:24px;font-size:13px;font-weight:500;height:24px;padding:0 8px;position:relative;border-top:1px solid #e1e1e1;background:#f5f5f5;text-transform:uppercase}div.ganttview-vtheader-group-name.toggle_enabled{cursor:pointer}div.ganttview-vtheader-group-name.toggle_enabled:before{position:absolute;right:4px;top:0;display:block;content:"\\f143";font-family:"Material Design Icons";font-size:18px;color:rgba(0,0,0,.54)}div.ganttview-vtheader-group-name.toggle_enabled.projectHidden:before{content:"\\f140"}div.ganttview-vtheader-series-row{height:42px;padding:3px 8px;border-top:1px solid #e1e1e1;font-size:13px;overflow:hidden;position:relative}div.ganttview-vtheader-series-row .series-users{float:left;margin-right:8px}div.ganttview-vtheader-series-row .series-users .series-user{margin-right:0}div.ganttview-vtheader-series-row .series-users .series-user+.series-user{margin-left:-16px}div.ganttview-vtheader-series-row .series-users .series-user>span{display:inline-block}div.ganttview-vtheader-series-row .series-user{float:left;margin-right:8px}div.ganttview-vtheader-series-row .series-user img{position:relative;z-index:1;width:32px;height:32px;border-radius:50%}div.ganttview-vtheader-series-row .series-user img:hover{z-index:2}div.ganttview-vtheader-series-row .series-content{line-height:16px;padding-top:2px;overflow:hidden;white-space:nowrap}div.ganttview-vtheader-series-row .series-content .series-dates,div.ganttview-vtheader-series-row .series-content .series-name{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block}div.ganttview-vtheader-series-row .series-content .series-dates{color:rgba(0,0,0,.4);font-size:11px;text-transform:uppercase;margin-top:2px}div.ganttview-vtheader-series-row .series-content .series-dates>.date-user{display:none}div.ganttview-vtheader-series-row .series-content .date-sep{display:inline-block;margin:0 8px}div.ganttview-hzheader-days,div.ganttview-hzheader-months{overflow:hidden}div.ganttview-hzheader-days{position:relative}div.ganttview-slide-container{-webkit-user-select:none;-moz-user-select:none;user-select:none;overflow-y:auto;overflow-x:scroll;-webkit-overflow-scrolling:touch}div.ganttview-grid-row{overflow:hidden}div.ganttview-grid-row-cell{width:20px;height:42px;border-right:1px solid #f0f0f0;border-top:1px solid rgba(0,0,0,.12)}div.ganttview-grid-row-cell.ganttview-weekend{background-color:#fafafa}div.ganttview-grid-row-cell.ganttview-today{background-color:#fff9db!important}div.ganttview-grid-spacer{background:#f5f5f5;height:24px;border-top:1px solid #e1e1e1;cursor:pointer}div.ganttview-grid-spacer+.ganttview-grid-row>div.ganttview-grid-row-cell{border-top-color:#e1e1e1}div.ganttview-blocks{min-width:100%;width:auto}div.ganttview-block{height:60%;background-color:#bbb;border-radius:12px;position:absolute!important;opacity:.8;top:20%;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)}div.ganttview-block-spacer{height:24px}div.ganttview-block-container{position:relative;height:42px;width:100%}div.ganttview-block-text{position:absolute;font-size:11px;color:#fff;padding:5px 12px 2px;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block}div.ganttview-block-text>a{color:#fff;text-decoration:underline}div.ganttview-block div.ui-resizable-handle.ui-resizable-s{bottom:0}div.ganttview-block:hover{z-index:1000;opacity:1}div.ganttview .ui-resizable{position:relative}div.ganttview .ui-resizable-handle{display:block;font-size:.1px;position:absolute}div.ganttview .ui-resizable-autohide .ui-resizable-handle,div.ganttview .ui-resizable-disabled .ui-resizable-handle{display:none}div.ganttview .ui-resizable-e{cursor:e-resize;height:100%;right:-5px;top:0;width:7px}div.ganttview .ui-resizable-w{cursor:w-resize;height:100%;left:-5px;top:0;width:7px}@media (min-width:960px){div.ganttview-wrapper{width:100%}div.ganttview-slide-container{width:75%;border:1px solid rgba(0,0,0,.12)}div.ganttview-vtheader{width:25%;border-right:1px solid rgba(0,0,0,.12)}}@media (max-width:959px){div.ganttview-wrapper{position:relative}div.ganttview-vtheader{position:absolute;left:0;top:0;background:none;width:100%;z-index:10;margin-top:40px}div.ganttview-vtheader-series-name{height:22px;line-height:20px;border:none;margin-bottom:31px}div.ganttview-vtheader-series-row{margin-bottom:42px}div.ganttview-row{margin-top:21px}div.ganttview-grid-spacer{background:none;border-top:none}div.ganttview-grid-spacer+.ganttview-grid-row>div.ganttview-grid-row-cell{border-top-color:rgba(0,0,0,.12)}div.ganttview-block-container,div.ganttview-grid-row{margin-top:42px}div.ganttview-slide-container,div.ganttview-wrapper{width:100%}div.ganttview-slide-container{border-left:none;position:relative;z-index:10}div.ganttview-vtheader-group:last-child{border-bottom:none}}.animate_hide{display:none}',""]),e.exports=n},1898:function(e,t,r){"use strict";r.r(t);r(27),r(72),r(340);var n=r(6).d.isHiRes,o={name:"PluginsGanttChart",components:{GanttChart:function(){return Promise.all([r.e(0),r.e(231)]).then(r.bind(null,1801))}},data:function(){return{ganttData:[{name:"Concept",series:[{name:"Brainstorm",sub_series:[{id:1,start:"08/01/2019",end:"08/03/2019",color:"#00897B",title:"Custom title",link:"http://themeforest.com",user_name:"Bobbie Spinka",user_avatar:r(n?525:524)},{id:2,start:"08/05/2019",end:"08/08/2019",color:"#00897B"}]},{name:"Wireframes",sub_series:[{id:3,start:"08/04/2019",end:"08/07/2019",color:"#00796B",title:"lorem ipsum dolor",user_name:"Khalid Leffler",user_avatar:r(n?527:346)},{id:4,start:"08/10/2019",end:"08/14/2019",color:"#00796B"},{id:5,start:"08/18/2019",end:"08/26/2019",color:"#00695C",user_name:"Dexter Schaden",user_avatar:r(n?530:526)}]},{id:6,name:"Concept description",start:"08/06/2019",end:"08/10/2019",color:"#004D40"}]},{name:"Design",series:[{id:7,name:"Sketching",start:"08/08/2019",end:"08/16/2019",color:"#9C27B0"},{id:8,name:"Photography",start:"08/10/2019",end:"08/16/2019",color:"#8E24AA",title:"Some inspirations",link:"https://unsplash.com/",user_name:"Deion Stroman",user_avatar:r(529)},{name:"Feedback",sub_series:[{id:9,start:"08/19/2019",end:"08/21/2019",color:"#7B1FA2"},{id:10,start:"08/24/2019",end:"08/28/2019",color:"#7B1FA2"}]},{id:11,name:"Final Design",start:"08/21/2019",end:"08/29/2019",color:"#6A1B9A",user_name:"Jany Zulauf",user_avatar:r(348)}]},{name:"Implementation",series:[{id:12,name:"Specifications",start:"08/26/2019",end:"09/06/2019",color:"#8BC34A"},{id:13,name:"Templates",start:"09/04/2019",end:"09/10/2019",color:"#7CB342"},{id:14,name:"Database",start:"09/05/2019",end:"09/13/2019",color:"#689F38"},{id:15,name:"Integration",start:"09/16/2019",end:"10/10/2019",color:"#558B2F",user_name:"Orville Bogisich",user_avatar:r(345)}]},{name:"Testing & Delivery",series:[{id:16,name:"Focus Group",start:"10/17/2019",end:"10/27/2019",color:"#F57C00"},{name:"Stress Test",sub_series:[{id:17,start:"10/25/2019",end:"11/06/2019",color:"#EF6C00"},{id:18,start:"11/09/2019",end:"11/12/2019",color:"#EF6C00"}]},{id:19,name:"Delivery",start:"11/07/2019",end:"11/12/2019",color:"#E65100",user_name:"Yoshiko Shanahan",user_avatar:r(526)}]}],ganttOptions:{startDate:"07/29/2019",endDate:"11/30/2019",highlightToday:!0}}},methods:{onClick:function(data){},onDrag:function(data){var e=this;this.getTask(data).then((function(t){t.start=e.$moment(data.start).format("MM/DD/YYYY"),t.end=e.$moment(data.end).format("MM/DD/YYYY")}))},onResize:function(data){var e=this;this.getTask(data).then((function(t){t.start=e.$moment(data.start).format("MM/DD/YYYY"),t.end=e.$moment(data.end).format("MM/DD/YYYY")}))},getTask:function(data){var e,t=this;return Promise.resolve((e=null,t.ganttData.filter((function(e){return e.name===data.parent}))[0].series.forEach((function(t){t.id===data.id&&(e=t),"sub_series"in t&&t.sub_series.forEach((function(t){t.id===data.id&&(e=t)}))})),e))}}},d=(r(1427),r(2)),component=Object(d.a)(o,(function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"sc-page-wrapper"}},[t("div",{attrs:{id:"sc-page-content"}},[t("ScCard",[t("ScCardBody",[t("client-only",[t("GanttChart",{attrs:{data:e.ganttData,options:e.ganttOptions},on:{onClick:e.onClick,onResize:e.onResize,onDrag:e.onDrag}})],1)],1)],1)],1)])}),[],!1,null,null,null);t.default=component.exports},524:function(e,t,r){e.exports=r.p+"img/avatar_01_sm.f998161.png"},525:function(e,t,r){e.exports=r.p+"img/avatar_01_sm@2x.6649141.png"},526:function(e,t,r){e.exports=r.p+"img/avatar_06_sm.b0047ea.png"},527:function(e,t,r){e.exports=r.p+"img/avatar_03_sm@2x.9f5d47e.png"},529:function(e,t,r){e.exports=r.p+"img/avatar_05_sm.5b5ea5a.png"},530:function(e,t,r){e.exports=r.p+"img/avatar_06_sm@2x.b177b92.png"},925:function(e,t,r){var content=r(1428);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(8).default)("bae1f878",content,!0,{sourceMap:!1})}}]);