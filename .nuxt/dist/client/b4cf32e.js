(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{1793:function(t,e,r){"use strict";r.r(e);r(22);var o=r(6),n=r(776),l=r(704),d={name:"ChartJsBar",extends:l.a,props:{data:{type:Object,default:function(){return{}}},options:{type:Object,default:function(){return{}}}},mounted:function(){this.renderChart(this.data,this.options)}},c=r(2),h=Object(c.a)(d,undefined,undefined,!1,null,null,null).exports,C=r(846),m=r(844),f=r(845),j={name:"ChartJsPolarArea",extends:l.e,props:{data:{type:Object,default:function(){return{}}},options:{type:Object,default:function(){return{}}}},mounted:function(){this.renderChart(this.data,this.options)}},v=Object(c.a)(j,undefined,undefined,!1,null,null,null).exports,y={name:"PluginsCharts",components:{BillboardChart:function(){return Promise.all([r.e(20),r.e(19),r.e(33)]).then(r.bind(null,1077))},ChartJsBar:h,ChartJsLine:C.a,ChartJsDoughnut:m.a,ChartJsPie:f.a,ChartJsPolarArea:v},data:function(){return{bb:{areaChart:{data:{columns:[["data1",300,350,300,0,0,0],["data2",130,100,140,200,150,50]],types:{data1:"area-spline",data2:"area"}},area:{linearGradient:!0},color:{pattern:o.a.multi}},barChart:{data:{columns:[["data1",30,200,100,400,150,250],["data2",130,100,140,200,150,50]],type:"bar"},bar:{width:{ratio:.5}},color:{pattern:o.a.multi},grid:{y:{show:!0}}},donutChart:{data:{columns:[["data1",30],["data2",120]],type:"donut",onclick:function(t,i){console.log("onclick",t,i)},onover:function(t,i){console.log("onover",t,i)},onout:function(t,i){console.log("onout",t,i)}},donut:{title:"Iris Petal Width"},color:{pattern:o.a.multi}},lineChart:{data:{columns:[["data1",30,200,100,400,150,250],["data2",50,20,10,40,15,25]]},color:{pattern:o.a.multi},grid:{x:{show:!0},y:{show:!0}}},radarChart:{data:{x:"x",columns:[["x","Data A","Data B","Data C","Data D","Data E"],["data1",330,350,200,380,150],["data2",130,100,30,200,80],["data3",230,153,85,300,250]],type:"radar",labels:!0},radar:{axis:{max:400},level:{depth:4},direction:{clockwise:!0}},color:{pattern:o.a.multi}},scatterChart:{data:{xs:{setosa:"setosa_x",versicolor:"versicolor_x",virginica:"virginica_x"},columns:[["setosa_x",3.5,3,3.2,3.1,3.6,3.9,3.4,3.4,2.9,3.1,3.7,3.4,3,3,4,4.4,3.9,3.5,3.8,3.8,3.4,3.7,3.6,3.3,3.4,3,3.4,3.5,3.4,3.2,3.1,3.4,4.1,4.2,3.1,3.2,3.5,3.6,3,3.4,3.5,2.3,3.2,3.5,3.8,3,3.8,3.2,3.7,3.3],["versicolor_x",3.2,3.2,3.1,2.3,2.8,2.8,3.3,2.4,2.9,2.7,2,3,2.2,2.9,2.9,3.1,3,2.7,2.2,2.5,3.2,2.8,2.5,2.8,2.9,3,2.8,3,2.9,2.6,2.4,2.4,2.7,2.7,3,3.4,3.1,2.3,3,2.5,2.6,3,2.6,2.3,2.7,3,2.9,2.9,2.5,2.8],["setosa",.2,.2,.2,.2,.2,.4,.3,.2,.2,.1,.2,.2,.1,.1,.2,.4,.4,.3,.3,.3,.2,.4,.2,.5,.2,.2,.4,.2,.2,.2,.2,.4,.1,.2,.2,.2,.2,.1,.2,.2,.3,.3,.2,.6,.4,.3,.2,.2,.2,.2],["versicolor",1.4,1.5,1.5,1.3,1.5,1.3,1.6,1,1.3,1.4,1,1.5,1,1.4,1.3,1.4,1.5,1,1.5,1.1,1.8,1.3,1.5,1.2,1.3,1.4,1.4,1.7,1.5,1,1.1,1,1.2,1.6,1.5,1.6,1.5,1.3,1.3,1.3,1.2,1.4,1.2,1,1.3,1.2,1.3,1.3,1.1,1.3]],type:"scatter"},axis:{x:{label:"Sepal.Width",tick:{fit:!1}},y:{label:"Petal.Width"}},color:{pattern:o.a.multi}}},cjs:{barChart:{options:{responsive:!0,maintainAspectRatio:!1,legend:{position:"top"},title:{display:!0,text:"Chart.js Bar Chart"}}},barStackedChart:{options:{title:{display:!0,text:"Chart.js Bar Chart - Stacked"},tooltips:{mode:"index",intersect:!1},responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{stacked:!0}],yAxes:[{stacked:!0}]}}},lineChart:{options:{responsive:!0,maintainAspectRatio:!1,title:{display:!0,text:"Chart.js Line Chart"},tooltips:{mode:"index",intersect:!1},hover:{mode:"nearest",intersect:!0},scales:{xAxes:[{display:!0,scaleLabel:{display:!0,labelString:"Month"}}],yAxes:[{display:!0,scaleLabel:{display:!0,labelString:"Value"}}]}}},lineInterpolationChart:{options:{responsive:!0,maintainAspectRatio:!1,title:{display:!0,text:"Chart.js Line Chart - Cubic interpolation mode"},tooltips:{mode:"index"},scales:{xAxes:[{display:!0,scaleLabel:{display:!0}}],yAxes:[{display:!0,scaleLabel:{display:!0,labelString:"Value"},ticks:{suggestedMin:-10,suggestedMax:200}}]}}},lineSteppedChart:{options:{responsive:!0,maintainAspectRatio:!1,title:{display:!0,text:"Step Before Interpolation"}}},linePointsChart:{options:{responsive:!0,maintainAspectRatio:!1,legend:{position:"bottom"},hover:{mode:"index"},scales:{xAxes:[{display:!0,scaleLabel:{display:!0,labelString:"Month"}}],yAxes:[{display:!0,scaleLabel:{display:!0,labelString:"Value"}}]},title:{display:!0,text:"Chart.js Line Chart - Different point sizes"}}},areaChart:{options:{responsive:!0,maintainAspectRatio:!1,title:{display:!0,text:"Chart.js - fill: start"}}},areaStackedChart:{options:{responsive:!0,maintainAspectRatio:!1,title:{display:!0,text:"Chart.js Line Chart - Stacked Area"},tooltips:{mode:"index"},hover:{mode:"index"},scales:{xAxes:[{scaleLabel:{display:!0,labelString:"Month"}}],yAxes:[{stacked:!0,scaleLabel:{display:!0,labelString:"Value"}}]}}},doughnutChart:{options:{responsive:!0,maintainAspectRatio:!1,legend:{position:"right"},title:{display:!0,text:"Chart.js Doughnut Chart"},animation:{animateScale:!0,animateRotate:!0}}},pieChart:{options:{responsive:!0,maintainAspectRatio:!1,legend:{position:"right"},title:{display:!0,text:"Chart.js Pie Chart"}}},polarAreaChart:{options:{responsive:!0,maintainAspectRatio:!1,legend:{position:"right"},title:{display:!0,text:"Chart.js Polar Area Chart"},scale:{ticks:{beginAtZero:!0},reverse:!1},animation:{animateRotate:!1,animateScale:!0}}}},seed:Date.now(),color:n.a.helpers.color,cjsDatatpoints:[0,20,20,60,60,120,NaN,180,120,125,105,110,170]}},computed:{cjsRandData:function(){return[this.cjsGenerateData(6),this.cjsGenerateData(6),this.cjsGenerateData(6),this.cjsGenerateData(6),this.cjsGenerateData(6),this.cjsGenerateData(6),this.cjsGenerateData(6),this.cjsGenerateData(6),this.cjsGenerateData(6),this.cjsGenerateData(6),this.cjsGenerateData(6),this.cjsGenerateData(6),this.cjsGenerateData(6),this.cjsGenerateData(6),this.cjsGenerateData(6),this.cjsGenerateData(6),this.cjsGenerateData(6),this.cjsGenerateData(5),this.cjsGenerateData(5)]},cjsBarChartData:function(){return{labels:["January","February","March","April","May","June"],datasets:[{label:"Dataset 1",backgroundColor:this.color(o.a.multi[0]).alpha(.8).rgbString(),borderColor:o.a.multi[0],borderWidth:1,data:this.cjsRandData[0]},{label:"Dataset 2",backgroundColor:this.color(o.a.multi[1]).alpha(.8).rgbString(),borderColor:o.a.multi[1],borderWidth:1,data:this.cjsRandData[1]}]}},cjsBarStackedChartData:function(){return{labels:["January","February","March","April","May","June"],datasets:[{label:"Dataset 1",backgroundColor:o.a.multi[1],stack:"Stack 0",data:this.cjsRandData[2]},{label:"Dataset 2",backgroundColor:o.a.multi[3],stack:"Stack 0",data:this.cjsRandData[3]},{label:"Dataset 3",backgroundColor:o.a.multi[0],stack:"Stack 1",data:this.cjsRandData[4]}]}},cjsLineChartData:function(){return{labels:["January","February","March","April","May","June"],datasets:[{label:"My First dataset",backgroundColor:o.a.multi[4],borderColor:o.a.multi[4],data:this.cjsRandData[5],fill:!1},{label:"My Second dataset",fill:!1,backgroundColor:o.a.multi[5],borderColor:o.a.multi[5],data:this.cjsRandData[6]}]}},cjsLineInterpolationChartData:function(){var t=this;return{labels:["0","1","2","3","4","5","6","7","8","9","10","11","12"],datasets:[{label:"Cubic interpolation (monotone)",data:t.cjsDatatpoints,borderColor:o.a.multi[0],backgroundColor:"rgba(0, 0, 0, 0)",fill:!1,cubicInterpolationMode:"monotone"},{label:"Cubic interpolation (default)",data:t.cjsDatatpoints,borderColor:o.a.multi[1],backgroundColor:"rgba(0, 0, 0, 0)",fill:!1},{label:"Linear interpolation",data:t.cjsDatatpoints,borderColor:o.a.multi[2],backgroundColor:"rgba(0, 0, 0, 0)",fill:!1,lineTension:0}]}},cjsLineSteppedChartData:function(){return{labels:["Day 1","Day 2","Day 3","Day 4","Day 5","Day 6"],datasets:[{label:"steppedLine: true",steppedLine:!0,data:this.cjsRandData[7],borderColor:o.a.multi[5],fill:!1}]}},cjsLinePointsChartData:function(){return{labels:["January","February","March","April","May","June"],datasets:[{label:"dataset - big points",data:this.cjsRandData[8],backgroundColor:o.a.multi[0],borderColor:o.a.multi[0],fill:!1,borderDash:[5,5],pointRadius:15,pointHoverRadius:25},{label:"dataset - individual point sizes",data:this.cjsRandData[9],backgroundColor:o.a.multi[1],borderColor:o.a.multi[1],fill:!1,borderDash:[5,5],pointRadius:[2,4,6,18,0,12,20]},{label:"dataset - large pointHoverRadius",data:this.cjsRandData[10],backgroundColor:o.a.multi[2],borderColor:o.a.multi[2],fill:!1,pointHoverRadius:30},{label:"dataset - large pointHitRadius",data:this.cjsRandData[11],backgroundColor:o.a.multi[3],borderColor:o.a.multi[3],fill:!1,pointHitRadius:20}]}},cjsAreaChartData:function(){return{labels:["Jan","Feb","Mar","Apr","May","Jun"],datasets:[{label:"My First dataset",backgroundColor:this.transparentize(o.a.multi[3]),borderColor:this.transparentize(o.a.multi[3]),data:this.cjsRandData[12],fill:"start"}]}},cjsAreaStackedChartData:function(){return{labels:["January","February","March","April","May","June"],datasets:[{label:"My First dataset",borderColor:o.a.multi[0],backgroundColor:o.a.multi[0],data:this.cjsRandData[13]},{label:"My Second dataset",borderColor:o.a.multi[1],backgroundColor:o.a.multi[1],data:this.cjsRandData[14]},{label:"My Third dataset",borderColor:o.a.multi[2],backgroundColor:o.a.multi[2],data:this.cjsRandData[15]},{label:"My Third dataset",borderColor:o.a.multi[3],backgroundColor:o.a.multi[3],data:this.cjsRandData[16]}]}},cjsDoughnutChartData:function(){return{datasets:[{data:this.cjsRandData[17],backgroundColor:[o.a.multi[0],o.a.multi[1],o.a.multi[2],o.a.multi[3],o.a.multi[4]],label:"Dataset 1"}],labels:["Blue","Orange","Green","Purple","Red"]}},cjsPieChartData:function(){return{datasets:[{data:this.cjsRandData[18],backgroundColor:[o.a.multi[0],o.a.multi[1],o.a.multi[2],o.a.multi[3],o.a.multi[4]],label:"Dataset 1"}],labels:["Blue","Orange","Green","Purple","Red"]}},cjsPolarAreaChart:function(){var t=function(){return Math.round(100*Math.random())};return{datasets:[{data:[t(),t(),t(),t(),t()],backgroundColor:[this.color(o.a.multi[0]).alpha(.6).rgbString(),this.color(o.a.multi[1]).alpha(.6).rgbString(),this.color(o.a.multi[2]).alpha(.6).rgbString(),this.color(o.a.multi[3]).alpha(.6).rgbString(),this.color(o.a.multi[4]).alpha(.6).rgbString()],label:"My dataset"}],labels:["Blue","Orange","Green","Purple","Red"]}}},mounted:function(){var t=this;setTimeout((function(){t.bb.barChart.data.columns.push(["data3",130,-150,200,300,-200,100])}),1e3),setTimeout((function(){t.bb.donutChart.data.columns.push(["setosa",.2,.2,.2,.2,.2,.4,.3,.2,.2,.1,.2,.2,.1,.1,.2,.4,.4,.3,.3,.3,.2,.4,.2,.5,.2,.2,.4,.2,.2,.2,.2,.4,.1,.2,.2,.2,.2,.1,.2,.2,.3,.3,.2,.6,.4,.3,.2,.2,.2,.2]),t.bb.donutChart.data.columns.push(["versicolor",1.4,1.5,1.5,1.3,1.5,1.3,1.6,1,1.3,1.4,1,1.5,1,1.4,1.3,1.4,1.5,1,1.5,1.1,1.8,1.3,1.5,1.2,1.3,1.4,1.4,1.7,1.5,1,1.1,1,1.2,1.6,1.5,1.6,1.5,1.3,1.3,1.3,1.2,1.4,1.2,1,1.3,1.2,1.3,1.3,1.1,1.3]),t.bb.donutChart.data.columns.push(["virginica",2.5,1.9,2.1,1.8,2.2,2.1,1.7,1.8,1.8,2.5,2,1.9,2.1,2,2.4,2.3,1.8,2.2,2.3,1.5,2.3,2,2,1.8,2.1,1.8,1.8,1.8,2.1,1.6,1.9,2,2.2,1.5,1.4,2.3,2.4,1.8,1.8,2.1,2.4,2.3,1.9,2.3,2.5,2.3,1.9,2,2.3,1.8])}),1500),setTimeout((function(){t.bb.donutChart.data.columns.splice(0,2)}),2500),setTimeout((function(){}),1e3),setTimeout((function(){t.bb.lineChart.data.columns.push(["data3",130,150,200,300,200,100])}),1500),setTimeout((function(){t.bb.lineChart.data.columns.splice(0,1)}),1500),setTimeout((function(){t.bb.scatterChart.data.columns.push(["virginica_x",3.3,2.7,3,2.9,3,3,2.5,2.9,2.5,3.6,3.2,2.7,3,2.5,2.8,3.2,3,3.8,2.6,2.2,3.2,2.8,2.8,2.7,3.3,3.2,2.8,3,2.8,3,2.8,3.8,2.8,2.8,2.6,3,3.4,3.1,3,3.1,3.1,3.1,2.7,3.2,3.3,3,2.5,3,3.4,3]),t.bb.scatterChart.data.columns.push(["virginica",2.5,1.9,2.1,1.8,2.2,2.1,1.7,1.8,1.8,2.5,2,1.9,2.1,2,2.4,2.3,1.8,2.2,2.3,1.5,2.3,2,2,1.8,2.1,1.8,1.8,1.8,2.1,1.6,1.9,2,2.2,1.5,1.4,2.3,2.4,1.8,1.8,2.1,2.4,2.3,1.9,2.3,2.5,2.3,1.9,2,2.3,1.8])}),1e3),setTimeout((function(){var e=t.bb.scatterChart.data.columns.map((function(t){return t[0]})).indexOf("setosa");t.bb.scatterChart.data.columns.splice(e,1)}),2e3),setTimeout((function(){t.bb.scatterChart.data.columns.push(["virginica",.2,.2,.2,.2,.2,.4,.3,.2,.2,.1,.2,.2,.1,.1,.2,.4,.4,.3,.3,.3,.2,.4,.2,.5,.2,.2,.4,.2,.2,.2,.2,.4,.1,.2,.2,.2,.2,.1,.2,.2,.3,.3,.2,.6,.4,.3,.2,.2,.2,.2])}),3e3)},methods:{cjsRandomizeData:function(t,e){var r=this.seed;return t=void 0===t?0:t,e=void 0===e?1:e,this.seed=(9301*r+49297)%233280,t+this.seed/233280*(e-t)},cjsGenerateData:function(t){for(var data=[],i=0;i<t;i++)data.push(Math.round(this.cjsRandomizeData(-100,100)));return data},transparentize:function(t,e){var r=void 0===e?.5:1-e;return this.color(t).alpha(r).rgbString()}}},D=Object(c.a)(y,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"sc-page-wrapper"}},[e("div",{attrs:{id:"sc-page-content"}},[t._m(0),t._v(" "),e("div",{staticClass:"uk-child-width-1-2@m uk-grid",attrs:{"data-uk-grid":""}},[e("div",[e("ScCard",[e("ScCardTitle",[t._v("\n\t\t\t\t\t\t\tArea Chart\n\t\t\t\t\t\t")]),t._v(" "),e("ScCardBody",[e("client-only",[e("BillboardChart",{attrs:{options:t.bb.areaChart}})],1)],1)],1)],1),t._v(" "),e("div",[e("ScCard",[e("ScCardTitle",[t._v("\n\t\t\t\t\t\t\tBar Chart\n\t\t\t\t\t\t")]),t._v(" "),e("ScCardBody",[e("client-only",[e("BillboardChart",{attrs:{options:t.bb.barChart}})],1)],1)],1)],1),t._v(" "),e("div",[e("ScCard",[e("ScCardTitle",[t._v("\n\t\t\t\t\t\t\tDonut Chart\n\t\t\t\t\t\t")]),t._v(" "),e("ScCardBody",[e("client-only",[e("BillboardChart",{attrs:{options:t.bb.donutChart}})],1)],1)],1)],1),t._v(" "),e("div",[e("ScCard",[e("ScCardTitle",[t._v("\n\t\t\t\t\t\t\tLine Chart\n\t\t\t\t\t\t")]),t._v(" "),e("ScCardBody",[e("client-only",[e("BillboardChart",{attrs:{options:t.bb.lineChart}})],1)],1)],1)],1),t._v(" "),e("div",[e("ScCard",[e("ScCardTitle",[t._v("\n\t\t\t\t\t\t\tRadar Chart\n\t\t\t\t\t\t")]),t._v(" "),e("ScCardBody",[e("client-only",[e("BillboardChart",{attrs:{options:t.bb.radarChart}})],1)],1)],1)],1),t._v(" "),e("div",[e("ScCard",[e("ScCardTitle",[t._v("\n\t\t\t\t\t\t\tScatter Chart\n\t\t\t\t\t\t")]),t._v(" "),e("ScCardBody",[e("client-only",[e("BillboardChart",{attrs:{options:t.bb.scatterChart}})],1)],1)],1)],1)]),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"uk-child-width-1-2@m uk-grid",attrs:{"data-uk-grid":""}},[e("div",[e("ScCard",[e("ScCardBody",{staticClass:"sc-chart-chartjs"},[e("ChartJsBar",{attrs:{"chart-id":"cjsBarChartData",data:t.cjsBarChartData,options:t.cjs.barChart.options}})],1)],1)],1),t._v(" "),e("div",[e("ScCard",[e("ScCardBody",{staticClass:"sc-chart-chartjs"},[e("ChartJsBar",{attrs:{"chart-id":"cjsBarStackedChartData",data:t.cjsBarStackedChartData,options:t.cjs.barStackedChart.options}})],1)],1)],1)]),t._v(" "),e("div",{staticClass:"uk-child-width-1-2@m uk-grid",attrs:{"data-uk-grid":""}},[e("div",[e("ScCard",[e("ScCardBody",{staticClass:"sc-chart-chartjs"},[e("ChartJsLine",{attrs:{"chart-id":"cjsLineChartData",data:t.cjsLineChartData,options:t.cjs.lineChart.options}})],1)],1)],1),t._v(" "),e("div",[e("ScCard",[e("ScCardBody",{staticClass:"sc-chart-chartjs"},[e("ChartJsLine",{attrs:{"chart-id":"cjsLineInterpolationChartData",data:t.cjsLineInterpolationChartData,options:t.cjs.lineInterpolationChart.options}})],1)],1)],1),t._v(" "),e("div",[e("ScCard",[e("ScCardBody",{staticClass:"sc-chart-chartjs"},[e("ChartJsLine",{attrs:{"chart-id":"cjsLineSteppedChartData",data:t.cjsLineSteppedChartData,options:t.cjs.lineSteppedChart.options}})],1)],1)],1),t._v(" "),e("div",[e("ScCard",[e("ScCardBody",{staticClass:"sc-chart-chartjs"},[e("ChartJsLine",{attrs:{"chart-id":"cjsLinePointsChartData",data:t.cjsLinePointsChartData,options:t.cjs.linePointsChart.options}})],1)],1)],1)]),t._v(" "),e("div",{staticClass:"uk-child-width-1-2@m uk-grid",attrs:{"data-uk-grid":""}},[e("div",[e("ScCard",[e("ScCardBody",{staticClass:"sc-chart-chartjs"},[e("ChartJsLine",{attrs:{"chart-id":"cjsAreaChartData",data:t.cjsAreaChartData,options:t.cjs.areaChart.options}})],1)],1)],1),t._v(" "),e("div",[e("ScCard",[e("ScCardBody",{staticClass:"sc-chart-chartjs"},[e("ChartJsLine",{attrs:{"chart-id":"cjsAreaStackedChartData",data:t.cjsAreaStackedChartData,options:t.cjs.areaStackedChart.options}})],1)],1)],1)]),t._v(" "),e("div",{staticClass:"uk-child-width-1-3@l uk-child-width-1-2@m uk-grid",attrs:{"data-uk-grid":""}},[e("div",[e("ScCard",[e("ScCardBody",{staticClass:"sc-chart-chartjs"},[e("ChartJsDoughnut",{attrs:{"chart-id":"cjsDoughnutChartData",data:t.cjsDoughnutChartData,options:t.cjs.doughnutChart.options}})],1)],1)],1),t._v(" "),e("div",[e("ScCard",[e("ScCardBody",{staticClass:"sc-chart-chartjs"},[e("ChartJsPie",{attrs:{"chart-id":"cjsPieChartData",data:t.cjsPieChartData,options:t.cjs.pieChart.options}})],1)],1)],1),t._v(" "),e("div",[e("ScCard",[e("ScCardBody",{staticClass:"sc-chart-chartjs"},[e("ChartJsPolarArea",{attrs:{"chart-id":"cjsPolarAreaChart",data:t.cjsPolarAreaChart,options:t.cjs.polarAreaChart.options}})],1)],1)],1)])])])}),[function(){var t=this._self._c;return t("h3",{staticClass:"uk-heading-line"},[t("span",[this._v("Billboard.js")])])},function(){var t=this._self._c;return t("h3",{staticClass:"uk-heading-line uk-margin-large-top"},[t("span",[this._v("Chart.js")])])}],!1,null,null,null);e.default=D.exports},776:function(t,e,r){"use strict";var o=r(365),n={};(n=r(753)).defaults.global.defaultFontFamily="'Roboto', 'Helvetica', 'Arial', sans-serif",n.defaults.global.defaultFontColor="rgba(0,0,0,.87)",n.defaults.global.title.fontFamily="'Roboto', 'Helvetica', 'Arial', sans-serif",n.defaults.global.title.fontColor="rgba(0,0,0,.87)",n.defaults.global.title.fontSize=14,n.defaults.global.title.fontStyle="500",n.defaults.global.tooltips.titleMarginBottom=10,n.defaults.global.tooltips.titleFontFamily="'Roboto', 'Helvetica', 'Arial', sans-serif",n.defaults.global.tooltips.bodyFontFamily="'Roboto', 'Helvetica', 'Arial', sans-serif",n.defaults.global.tooltips.footerFontFamily="'Roboto', 'Helvetica', 'Arial', sans-serif",n.defaults.global.tooltips.cornerRadius=4,n.defaults.global.tooltips.bodySpacing=8,n.defaults.global.tooltips.caretSize=4,n.defaults.global.tooltips.xPadding=8,n.defaults.global.tooltips.yPadding=8,n.defaults.global.legend.labels.boxWidth=24,n.defaults.global.legend.labels.fontFamily="'Roboto', 'Helvetica', 'Arial', sans-serif",n.defaults.global.legend.labels.fontColor="rgba(0,0,0,.87)","theme-dark"===Object(o.state)().vxAppTheme&&(n.defaults.global.defaultFontColor="rgba(255,255,255,.87)",n.defaults.global.title.fontColor="rgba(255,255,255,.87)",n.defaults.global.legend.labels.fontColor="rgba(255,255,255,.87)",n.defaults.scale.gridLines.color="rgba(255,255,255,.2)"),e.a=n},844:function(t,e,r){"use strict";var o={name:"ChartJsDoughnut",extends:r(704).b,props:{data:{type:Object,default:function(){return{}}},options:{type:Object,default:function(){return{}}}},mounted:function(){this.renderChart(this.data,this.options)}},n=r(2),component=Object(n.a)(o,undefined,undefined,!1,null,null,null);e.a=component.exports},845:function(t,e,r){"use strict";var o={name:"ChartJsPie",extends:r(704).d,props:{data:{type:Object,default:function(){return{}}},options:{type:Object,default:function(){return{}}}},mounted:function(){this.renderChart(this.data,this.options)}},n=r(2),component=Object(n.a)(o,undefined,undefined,!1,null,null,null);e.a=component.exports},846:function(t,e,r){"use strict";var o={name:"ChartJsLine",extends:r(704).c,props:{data:{type:Object,default:function(){return{}}},options:{type:Object,default:function(){return{}}}},mounted:function(){this.renderChart(this.data,this.options)}},n=r(2),component=Object(n.a)(o,undefined,undefined,!1,null,null,null);e.a=component.exports}}]);