(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-39c2"],{"9fDZ":function(t,e,a){"use strict";a.r(e);var n=a("cLjf"),l=a.n(n),i=a("hDQ3"),s=a.n(i),o={data:function(){return{form:{title:"",status:"",timeBegin:"",timeEnd:"",pageSize:20,pageNumber:1,columnType:1},tableData:[],total:0,batchDelIds:[]}},methods:{getTableData:function(){var t=this;return s()(l.a.mark(function e(){var a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$post("announcementList",t.form);case 2:"1000"===(a=e.sent).returnCode&&(t.tableData=a.records,t.total=+a.total);case 4:case"end":return e.stop()}},e,t)}))()},search:function(){this.getTableData()},dispatch:function(){},handleSelectionChange:function(t){var e=[];t.forEach(function(t){e.push(t.id)}),this.batchDelIds=e},batchDel:function(){var t=this;0!=this.batchDelIds.length?this.$confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.delRole(t.batchDelIds)}).catch(function(){t.$message({type:"info",message:"已取消删除"})}):this.$message.warning("请选择要删除的数据")},editTableItem:function(t){this.$router.push({path:"/announcement/meeting/edit",query:{id:t.id}})},paginationChange:function(t){this.form.pageNumber=t.page,this.form.pageSize=t.limit,this.getTableData()},add:function(){this.$router.push("/announcement/meeting/add")},changeRoleStatus:function(){},delTableItem:function(t){var e=this;this.$confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.delRole([t.row.id])}).catch(function(){e.$message({type:"info",message:"已取消删除"})})},delRole:function(t){var e=this;return s()(l.a.mark(function a(){var n;return l.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.$post("announcementDel",{ids:t});case 2:"1000"===(n=a.sent).returnCode?(e.$message.success("删除成功"),e.getTableData()):e.$message.error(n.message);case 4:case"end":return a.stop()}},a,e)}))()},toDetail:function(t){this.$router.push({path:"/announcement/meeting/detail",query:{id:t}})}},created:function(){this.getTableData()}},r=(a("QCLk"),a("ZrdR")),c=Object(r.a)(o,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ann_meeting"},[a("div",{staticClass:"meeting_list"},[a("el-form",{ref:"form",staticClass:"form",attrs:{model:t.form,"label-width":"120px"}},[a("el-row",[a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"标题:"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"状态:"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择",clearable:""},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},[a("el-option",{attrs:{label:"待发布",value:"1"}}),t._v(" "),a("el-option",{attrs:{label:"已发布",value:"2"}})],1)],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"发布时间:"}},[a("el-col",{attrs:{span:11}},[a("date-picker",{attrs:{fullWidth:""},model:{value:t.form.timeBegin,callback:function(e){t.$set(t.form,"timeBegin",e)},expression:"form.timeBegin"}})],1),t._v(" "),a("el-col",{staticClass:"line",attrs:{span:2}},[t._v("-")]),t._v(" "),a("el-col",{attrs:{span:11}},[a("date-picker",{attrs:{fullWidth:"",end:""},model:{value:t.form.timeEnd,callback:function(e){t.$set(t.form,"timeEnd",e)},expression:"form.timeEnd"}})],1)],1)],1)],1),t._v(" "),a("el-row",{staticClass:"search_button_row"},[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.search}},[t._v("搜索")])],1)],1),t._v(" "),a("div",{staticClass:"meet_container"},[a("div",{staticClass:"btn_container"},[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.add}},[t._v("新增通知")]),t._v(" "),a("el-button",{attrs:{size:"mini"},on:{click:t.batchDel}},[t._v("批量删除")])],1),t._v(" "),a("el-table",{ref:"roleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"","tooltip-effect":"dark"},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"置顶",width:"80",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-switch",{attrs:{disabled:""},model:{value:e.row.stick,callback:function(a){t.$set(e.row,"stick",a)},expression:"scope.row.stick"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"标题",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"title",on:{click:function(a){t.toDetail(e.row.id)}}},[t._v(t._s(e.row.title))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"columnName",label:"栏目",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"状态",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n            "+t._s(1==e.row.status?"待发布":2==e.row.status?"已发布":"已下架")+"\n          ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"发布时间",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n            "+t._s(t._f("filterTime")(e.row.publishTime,"YYYY-MM-DD hh:mm"))+"\n          ")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"replayNumber",label:"反馈量",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"consultNumber",label:"阅读量",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"edit_item",on:{click:function(a){t.editTableItem(e.row)}}},[t._v("编辑")]),t._v(" "),a("span",{staticClass:"del_item",on:{click:function(a){t.delTableItem(e)}}},[t._v("删除")])]}}])})],1)],1),t._v(" "),a("div",{staticClass:"pagination"},[a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.form.pageNumber,limit:t.form.pageSize},on:{"update:page":function(e){t.$set(t.form,"pageNumber",e)},"update:limit":function(e){t.$set(t.form,"pageSize",e)},pagination:t.paginationChange}})],1)],1)])},[],!1,null,"db4ed17e",null);c.options.__file="list.vue";e.default=c.exports},QCLk:function(t,e,a){"use strict";var n=a("auGx");a.n(n).a},auGx:function(t,e,a){}}]);