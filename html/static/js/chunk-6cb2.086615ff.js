(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6cb2"],{"0b7F":function(e,t,a){"use strict";a.r(t);var s=a("6ZY3"),r=a.n(s),o=a("cLjf"),i=a.n(o),l=a("hDQ3"),n=a.n(l),c=a("bS4n"),u=a.n(c),d=a("8t5x"),m={name:"study-datum-list",data:function(){return{form:{name:"",status:"",bgnTime:"",endTime:"",pageNumber:1,pageSize:20},tableData:[],total:0,roleList:[],batchDelIds:[],dialogTitle:"",centerDialogVisible:!1,addForm:{childName:"",status:""},rules:{childName:[{required:!0,message:"请输入题库名称",trigger:"change"}],status:[{required:!0,message:"请选择状态",trigger:"change"}]},curClickItemIndex:-1,type:""}},computed:u()({},Object(d.b)(["userInfo"])),created:function(){this.getTableData()},methods:{getTableData:function(){var e=this;return n()(i.a.mark(function t(){var a;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$post("examClassifyQueryPage",e.form);case 2:"1000"===(a=t.sent).returnCode?(e.tableData=a.records,e.total=+a.total):e.$message.error(a.message);case 4:case"end":return t.stop()}},t,e)}))()},search:function(){this.form.pageNumber=1,this.getTableData()},paginationChange:function(e){this.form.pageNumber=e.page,this.form.pageSize=e.limit,this.getTableData()},addQuestionsBankBtn:function(){var e=this;r()(this.addForm,{childName:"",status:""}),this.$nextTick(function(){e.$refs.addForm.clearValidate()}),this.dialogTitle="新增题库",this.type="1",this.centerDialogVisible=!0},editTableItem:function(e){this.dialogTitle="编辑题库",this.type="2",this.centerDialogVisible=!0,this.addForm.childName=e.row.childName,this.addForm.status=e.row.status,this.curClickItemIndex=e.$index},operateStatusTableItem:function(e){var t=this,a=2==e.row.operator?"生效":3==e.row.operator?"失效":"";this.$confirm("此操作将"+a+"“"+e.row.childName+"”, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.operateStatusRequest(e.row.id,e.row.operator)}).catch(function(){})},operateStatusRequest:function(e,t){var a=this;return n()(i.a.mark(function s(){var r;return i.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,a.$post("examClassifyEffectOrInvalid",{id:e,status:t});case 2:"1000"===(r=s.sent).returnCode?(a.$message.success("操作成功"),a.getTableData()):a.$message.error(r.message);case 4:case"end":return s.stop()}},s,a)}))()},submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;t.saveRequest()})},saveRequest:function(){var e=this;return n()(i.a.mark(function t(){var a,s;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a={},"2"===e.type&&(a.id=e.tableData[e.curClickItemIndex].id),t.next=4,e.$post("examClassifySave",r()({},e.addForm,a));case 4:"1000"===(s=t.sent).returnCode?(e.centerDialogVisible=!1,e.$message.success("操作成功"),e.getTableData()):e.$message.error(s.message);case 6:case"end":return t.stop()}},t,e)}))()},closeDialog:function(e){this.centerDialogVisible=!1,this.$refs[e].clearValidate()}}},p=(a("CzGD"),a("ZrdR")),f=Object(p.a)(m,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"question_bank_list"},[a("div",{staticClass:"bank_list_wrapper"},[a("el-form",{ref:"form",staticClass:"form",attrs:{model:e.form,"label-width":"120px"}},[a("el-row",[a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"题库：","label-width":"80px"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"状态：","label-width":"80px"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择",clearable:""},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},[a("el-option",{attrs:{label:"生效",value:"2"}}),e._v(" "),a("el-option",{attrs:{label:"失效",value:"3"}})],1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"更新时间："}},[a("el-col",{attrs:{span:11}},[a("date-picker",{attrs:{fullWidth:""},model:{value:e.form.bgnTime,callback:function(t){e.$set(e.form,"bgnTime",t)},expression:"form.bgnTime"}})],1),e._v(" "),a("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),e._v(" "),a("el-col",{attrs:{span:11}},[a("date-picker",{attrs:{fullWidth:"",end:""},model:{value:e.form.endTime,callback:function(t){e.$set(e.form,"endTime",t)},expression:"form.endTime"}})],1)],1)],1)],1),e._v(" "),a("el-row",{staticClass:"search_button_row"},[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.search}},[e._v("搜索")])],1)],1),e._v(" "),a("div",{staticClass:"roles_container"},[a("div",{staticClass:"btn_container"},[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.addQuestionsBankBtn}},[e._v("新增题库")])],1),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"","tooltip-effect":"dark"}},[a("el-table-column",{attrs:{prop:"childName",label:"题库","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("router-link",{attrs:{to:{path:"/exam/questionBank/subject",query:{id:t.row.id,title:t.row.childName}}}},[e._v("\n              "+e._s(t.row.childName)+"\n            ")])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(2==t.row.status?"生效":3==t.row.status?"失效":"")+"\n          ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"quesNum",label:"题量"}}),e._v(" "),a("el-table-column",{attrs:{label:"更新时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(e._f("filterTime")(t.row.updatedTime,"YYYY-MM-DD hh:mm"))+"\n          ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"edit_item",on:{click:function(a){e.editTableItem(t)}}},[e._v("编辑")]),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:2==t.row.operator||3==t.row.operator,expression:"scope.row.operator == 2 || scope.row.operator == 3"}],staticClass:"del_item",on:{click:function(a){e.operateStatusTableItem(t)}}},[e._v("\n              "+e._s(2==t.row.operator?"生效":3==t.row.operator?"失效":"")+"\n            ")])]}}])})],1)],1),e._v(" "),a("div",{staticClass:"pagination"},[a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.form.pageNumber,limit:e.form.pageSize},on:{"update:page":function(t){e.$set(e.form,"pageNumber",t)},"update:limit":function(t){e.$set(e.form,"pageSize",t)},pagination:e.paginationChange}})],1),e._v(" "),a("div",{staticClass:"dialog-container"},[a("el-dialog",{attrs:{title:e.dialogTitle,visible:e.centerDialogVisible,center:""},on:{"update:visible":function(t){e.centerDialogVisible=t}}},[a("el-form",{ref:"addForm",attrs:{model:e.addForm,rules:e.rules,"label-width":"120px"}},[a("el-row",[a("el-col",{attrs:{span:21}},[a("el-form-item",{attrs:{label:"题库名称：",prop:"childName"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.addForm.childName,callback:function(t){e.$set(e.addForm,"childName",t)},expression:"addForm.childName"}})],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:21}},[a("el-form-item",{attrs:{label:"状态：",prop:"status"}},[a("el-radio-group",{model:{value:e.addForm.status,callback:function(t){e.$set(e.addForm,"status",t)},expression:"addForm.status"}},[a("el-radio",{attrs:{label:"2"}},[e._v("生效")]),e._v(" "),a("el-radio",{attrs:{label:"3"}},[e._v("失效")])],1)],1)],1)],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.closeDialog("addForm")}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("addForm")}}},[e._v("确 定")])],1)],1)],1)],1)])},[],!1,null,"c0d4f97c",null);f.options.__file="list.vue";t.default=f.exports},CzGD:function(e,t,a){"use strict";var s=a("Sake");a.n(s).a},Sake:function(e,t,a){}}]);