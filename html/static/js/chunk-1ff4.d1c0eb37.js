(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1ff4"],{"0XWY":function(a,t,e){"use strict";var r=e("t+I9");e.n(r).a},"2DGe":function(a,t,e){"use strict";var r=e("bTzz");e.n(r).a},"4x4Z":function(a,t,e){"use strict";e.r(t);var r=e("cLjf"),n=e.n(r),s=e("hDQ3"),o=e.n(s),i={name:"propaganda-effect-census",data:function(){return{tableParams:{year:"",groupId:"",pageNumber:1,pageSize:6},tableData:[],tableParams2:{year:"",groupId:"",pageNumber:1,pageSize:6},tableData2:[],chartParams:{year:new Date(Date.now()).getFullYear().toString(),groupId:""},admissionsTeamList:[],chartData:[],options:{title:{text:"宣传成效统计",left:"center",textStyle:{color:"#2e2e2e",fontWeight:"normal",fontSize:20,align:"center"}},tooltip:{trigger:"axis"},legend:{x:"left",top:50,left:0,data:[{name:"宣传次数",backgroundColor:"#439CDE"},{name:"参与人数",backgroundColor:"#FF914A"}]},grid:{top:150},dataset:{source:[{month:"1月",count:0,attendance:0}]},xAxis:{type:"category",axisTick:{show:!1}},yAxis:[{name:"宣传次数",nameGap:20,offset:20,axisLine:{show:!1},axisTick:{show:!1},splitLine:{lineStyle:{type:"dashed"}}},{name:"参与人数",nameGap:20,offset:20,axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1,lineStyle:{type:"dashed"}}}],series:[{name:"宣传次数",type:"bar"},{yAxisIndex:1,name:"参与人数",type:"bar"}]}}},created:function(){this.getTableData(),this.getTableData2(),this.getChartData(),this.getAdmissionsTeamList()},methods:{getTableData:function(){var a=this;return o()(n.a.mark(function t(){var e;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.$post("propagandaDynamicStatByGroup",a.tableParams);case 2:"1000"===(e=t.sent).returnCode?a.tableData=e.dataInfo.records:a.$message.error(e.message);case 4:case"end":return t.stop()}},t,a)}))()},getTableData2:function(){var a=this;return o()(n.a.mark(function t(){var e;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.$post("propagandaDynamicStatByUser",a.tableParams2);case 2:"1000"===(e=t.sent).returnCode?a.tableData2=e.dataInfo.records:a.$message.error(e.message);case 4:case"end":return t.stop()}},t,a)}))()},getChartData:function(){var a=this;return o()(n.a.mark(function t(){var e,r;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.$post("propagandaDynamicStatByYear",a.chartParams);case 2:"1000"===(e=t.sent).returnCode?(a.chartData=e.dataInfo,r=e.dataInfo.map(function(a){return{month:a.month+"月",count:a.count,attendance:a.attendance}}),a.options.dataset.source=r):a.$message.error(e.message);case 4:case"end":return t.stop()}},t,a)}))()},getAdmissionsTeamList:function(){var a=this;return o()(n.a.mark(function t(){var e;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.$post("adminssionGroupList",a.admissionsTeamParams);case 2:"1000"===(e=t.sent).returnCode?a.admissionsTeamList=e.dataInfo:a.$message.error(e.message);case 4:case"end":return t.stop()}},t,a)}))()}}},c=(e("0XWY"),e("2DGe"),e("ZrdR")),l=Object(c.a)(i,function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"census_container"},[e("div",{staticClass:"table_container"},[e("div",{staticClass:"table_left_container"},[e("h3",[a._v("招生组年度宣传次数排名\n        "),e("router-link",{attrs:{to:"/propaganda/effect/groupRanking"}},[a._v("查看更多 > ")])],1),a._v(" "),e("el-table",{staticStyle:{width:"100%"},attrs:{data:a.tableData}},[e("el-table-column",{attrs:{prop:"groupName",label:"招生组"}}),a._v(" "),e("el-table-column",{attrs:{prop:"count",label:"次数"}}),a._v(" "),e("el-table-column",{attrs:{prop:"attendance",label:"人数"}}),a._v(" "),e("el-table-column",{scopedSlots:a._u([{key:"default",fn:function(a){return[e("el-progress",{attrs:{percentage:+a.row.percent}})]}}])})],1)],1),a._v(" "),e("div",{staticClass:"table_right_container"},[e("h3",[a._v("招生干部年度宣传次数排名\n        "),e("router-link",{attrs:{to:"/propaganda/effect/cadreRanking"}},[a._v("查看更多 > ")])],1),a._v(" "),e("el-table",{staticStyle:{width:"100%"},attrs:{data:a.tableData2}},[e("el-table-column",{attrs:{prop:"userName",label:"招生干部"}}),a._v(" "),e("el-table-column",{attrs:{prop:"groupName",label:"所在招生组"}}),a._v(" "),e("el-table-column",{attrs:{prop:"count",label:"次数"}}),a._v(" "),e("el-table-column",{scopedSlots:a._u([{key:"default",fn:function(a){return[e("el-progress",{attrs:{percentage:+a.row.percent}})]}}])})],1)],1)]),a._v(" "),e("div",{staticClass:"chart_container"},[e("echarts",{attrs:{options:a.options}}),a._v(" "),e("div",{staticClass:"slot_class"},[e("el-select",{attrs:{size:"mini",placeholder:"汇总",filterable:"",clearable:""},on:{change:a.getChartData},model:{value:a.chartParams.groupId,callback:function(t){a.$set(a.chartParams,"groupId",t)},expression:"chartParams.groupId"}},a._l(a.admissionsTeamList,function(a,t){return e("el-option",{key:t,attrs:{label:a.groupName,value:a.id}})})),a._v(" "),e("date-picker",{attrs:{size:"mini",type:"year",fullWidth:"",valueFormat:"yyyy"},on:{change:a.getChartData},model:{value:a.chartParams.year,callback:function(t){a.$set(a.chartParams,"year",t)},expression:"chartParams.year"}})],1)],1)])},[],!1,null,"ab3ff110",null);l.options.__file="census.vue";t.default=l.exports},bTzz:function(a,t,e){},"t+I9":function(a,t,e){}}]);