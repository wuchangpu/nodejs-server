(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7118"],{KDrQ:function(e,t,a){"use strict";var r={props:{value:{type:String,default:""},treeData:{required:!0,type:Array},echoId:{type:String,default:""}},data:function(){return{inputValue:"",treeProps:{label:"groupName",children:"child"},showPopover:!1}},watch:{value:function(e){this.inputValue=e},inputValue:function(e){this.$emit("input",e)},echoId:function(){this.treeData.length&&!this.inputValue&&this.echoMethod(this.treeData)}},methods:{filterNodeMethod:function(e,t,a){return!e||-1!==t.groupName.indexOf(e)},nodeClick:function(e){this.showPopover=!1,this.inputValue=e.groupName,this.$emit("change",e)},echoMethod:function(e){var t=this;e.forEach(function(e){if(e.id===t.echoId)return t.inputValue=e.groupName;e.child&&e.child.length&&t.echoMethod(e.child)})}}},i=a("ZrdR"),o=Object(i.a)(r,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"choose_admissions_team_selcet"},[a("el-popover",{attrs:{trigger:"click",placement:"bottom"},model:{value:e.showPopover,callback:function(t){e.showPopover=t},expression:"showPopover"}},[a("el-input",{attrs:{slot:"reference",placeholder:"请选择"},slot:"reference",model:{value:e.inputValue,callback:function(t){e.inputValue=t},expression:"inputValue"}}),e._v(" "),a("permission-tree",{attrs:{treeData:e.treeData,defaultProps:e.treeProps,isShowCheckbox:!1,nodeKey:"id",expandOnClickNode:!1,filterNodeMethod:e.filterNodeMethod,filterText:e.inputValue},on:{nodeClick:e.nodeClick}})],1)],1)},[],!1,null,null,null);o.options.__file="chooseAdmTeamSelcet.vue";t.a=o.exports},oCau:function(e,t,a){},waPo:function(e,t,a){"use strict";var r=a("oCau");a.n(r).a},xkKY:function(e,t,a){"use strict";a.r(t);var r=a("6ZY3"),i=a.n(r),o=a("cLjf"),s=a.n(o),n=a("hDQ3"),l=a.n(n),u={data:function(){return{formData:{applyUserName:"",groupName:"",taskId:""},detailData:{},copyData:{},id:"",pageData:{pageSize:5,pageNumber:1},total:0,tableData:[],treeData:[],treeProps:{label:"groupName",children:"child"},orgName:"",isShowTree:!1,workTypeList:[],selectedList:[],selectedId:[],formModelData:{appraiseId:"",informType:"",period:"",publicityList:[],orgList:[],userList:[],roleList:[]},ruler:{informType:{required:!0,message:"请选择",trigger:"change"},period:{required:!0,message:"请选择",trigger:"change"}}}},created:function(){this.$route.query.id&&(this.id=this.formData.taskId=this.$route.query.id,this.getDetailData(),this.getDictionaryList(),this.getTableData())},components:{ChooseGroupComponent:a("KDrQ").a},methods:{getDetailData:function(){var e=this;return l()(s.a.mark(function t(){var a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$post("RateDetail",{id:e.id});case 2:if("1000"!==(a=t.sent).returnCode){t.next=7;break}e.detailData=a.dataInfo,t.next=8;break;case 7:return t.abrupt("return",e.$message.error(a.message));case 8:case"end":return t.stop()}},t,e)}))()},onSelectionChange:function(e){var t=e.val,a=e.list,r=e.id;if(console.log(t,a,r),t){this.selectedId.push(r);var i=a.find(function(e){return e.userId===r});i&&this.selectedList.push({userId:i.userId,username:i.username,firstGroupId:i.firstGroupId,firstGroupName:i.firstGroupName})}else{var o=this.selectedId.indexOf(r);this.selectedId.splice(o,1);var s=0;this.selectedList.find(function(e,t){e.userId===r&&(s=t)}),this.selectedList.splice(s,1)}},onClickAddBtn:function(){this.isShowTree=!0},getDictionaryList:function(){var e=this;return l()(s.a.mark(function t(){var a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$post("sysDicGetSysDicList");case 2:if("1000"!==(a=t.sent).returnCode){t.next=7;break}e.workTypeList=a.dataInfo.find(function(e){return"1006_gdshzt"===e.dicCode}).dataEntityList,t.next=8;break;case 7:return t.abrupt("return",e.$message.error(a.message));case 8:case"end":return t.stop()}},t,e)}))()},getWorkTypeTypeStr:function(e){var t=this.workTypeList.find(function(t){return t.dataKey===e});if(t)return t.dataValue},getTableData:function(){var e=this;return l()(s.a.mark(function t(){var a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$post("RateApplyList",i()({},e.formData,{taskId:e.id},e.pageData));case 2:if("1000"!==(a=t.sent).returnCode){t.next=11;break}e.tableData=a.records,e.total=+a.total,e.selectedList=e.tableData.filter(function(e){return"2"===e.workState}).map(function(e){return{userId:e.applyUserId,username:e.applyUserName,firstGroupId:e.firstGid,firstGroupName:e.firstGname}}),e.selectedId=e.selectedList.map(function(e){return e.userId}),e.copyData=e.$deepCopy(e.formData),t.next=12;break;case 11:return t.abrupt("return",e.$message.error(a.message));case 12:case"end":return t.stop()}},t,e)}))()},getOpenValue:function(e){return!!this.selectedList.find(function(t){return t.userId===e})},onChangeSwitch:function(e,t){var a=e.row;if(t)this.selectedList.push({userId:a.applyUserId,username:a.applyUserName,firstGroupId:a.firstGid,firstGroupName:a.firstGname}),this.selectedId.push(a.applyUserId);else{var r=0;this.selectedList.find(function(e,t){if(e.userId===a.applyUserId)return r=t,!0}),this.selectedList.splice(r,1),this.selectedId.splice(r,1)}},updateSelectedList:function(){this.selectedList=this.tableData.filter(function(e){return e.isSelected}).map(function(e){return e.applyUserId})},onClickSearchBtn:function(){this.pageData.pageNumber=1,this.getTableData()},onPageChange:function(e){var t=e.page,a=e.limit;this.pageData.pageNumber=t,this.pageData.pageSize=a,this.getTableData()},onClickSaveBtn:function(){var e=this;this.$refs["form-model-data"].validate(function(t){return t&&e.handleSaveAction()})},handleSaveAction:function(){var e=this;return l()(s.a.mark(function t(){var a,r,o;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a=e.$deepCopy(e.formModelData.orgList),(r=i()(e.formModelData)).appraiseId=e.id,t.t0=r.informType,t.next="1"===t.t0?6:"2"===t.t0?10:"3"===t.t0?14:"4"===t.t0?18:22;break;case 6:return r.orgList=[],r.roleList=[],r.userList=[],t.abrupt("break",23);case 10:return r.orgList=a,r.roleList=[],r.userList=[],t.abrupt("break",23);case 14:return r.roleList=a,r.orgList=[],r.userList=[],t.abrupt("break",23);case 18:return r.userList=a,r.orgList=[],r.roleList=[],t.abrupt("break",23);case 22:return t.abrupt("break",23);case 23:return r.publicityList=e.selectedList,t.next=26,e.$post("RateOpen",r);case 26:if("1000"!==(o=t.sent).returnCode){t.next=32;break}e.$message.success("操作成功"),e.onClickCancelBtn(),t.next=33;break;case 32:return t.abrupt("return",e.$message.error(o.message));case 33:case"end":return t.stop()}},t,e)}))()},onClickCancelBtn:function(){this.$router.back()},onChangeRadio:function(){this.isShowTree=!1}}},c=(a("waPo"),a("ZrdR")),p=Object(c.a)(u,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"rate-activity-open"}},[a("div",{staticClass:"header-box"},[a("h1",[e._v("2018招生干部优秀个人评选活动")]),e._v(" "),a("ul",[a("li",[a("dl",[a("dt",[e._v("活动结束时间：")]),e._v(" "),a("dd",[e._v(e._s(e._f("filterTime")(e.detailData.eventEnd,"YYYY-MM-DD")))])])]),e._v(" "),a("li",[a("dl",[a("dt",[e._v("活动开始时间：")]),e._v(" "),a("dd",[e._v(e._s(e._f("filterTime")(e.detailData.eventBegin,"YYYY-MM-DD")))])])]),e._v(" "),a("li",[a("dl",[a("dt",[e._v("活动对象：")]),e._v(" "),a("dd",[e._v(e._s("1"===e.detailData.eventObject?"招生干部":"招生组长"))])])])])]),e._v(" "),a("div",{staticClass:"table-box"},[a("h5",[e._v("评审记录")]),e._v(" "),a("el-form",{staticClass:"form",attrs:{model:e.formData,"label-width":"120px"},on:{submit:e.onClickSearchBtn}},[a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"姓名：",prop:"applyUserName"}},[a("el-input",{attrs:{clearable:""},model:{value:e.formData.applyUserName,callback:function(t){e.$set(e.formData,"applyUserName",t)},expression:"formData.applyUserName"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"所在招生组：",prop:"groupName"}},[a("el-input",{attrs:{placeholder:"请输入模糊搜索"},model:{value:e.formData.groupName,callback:function(t){e.$set(e.formData,"groupName",t)},expression:"formData.groupName"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"评审结果：",prop:""}})],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{staticStyle:{"text-align":"right"}},[a("el-button",{attrs:{type:"primary",size:"small","native-type":"submit"},on:{click:e.onClickSearchBtn}},[e._v("搜索")])],1)],1)],1)],1),e._v(" "),a("div",{staticStyle:{"margin-bottom":"20px"}},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.onClickAddBtn}},[e._v("新增名单")]),e._v(" "),a("el-button",{attrs:{size:"small"}},[e._v("批量公示")])],1),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{prop:"applyUserName",label:"姓名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"jobNum",label:"工号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"groupName",label:"所在招生组"}}),e._v(" "),a("el-table-column",{attrs:{prop:"roleName",label:"角色"}}),e._v(" "),a("el-table-column",{attrs:{prop:"phone",label:"联系方式"}}),e._v(" "),a("el-table-column",{attrs:{prop:"workState",label:"评审状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\r\n          "+e._s(e.getWorkTypeTypeStr(t.row.workState))+"\r\n        ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"公示"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-switch",{attrs:{"active-value":!0,"inactive-value":!1,value:e.getOpenValue(t.row.applyUserId)},on:{change:function(a){e.onChangeSwitch(t,a)}}})]}}])})],1)],1),e._v(" "),a("specified-object",{directives:[{name:"show",rawName:"v-show",value:e.isShowTree,expression:"isShowTree"}],ref:"person",attrs:{type:"4"},on:{"select-change":e.onSelectionChange},model:{value:e.selectedId,callback:function(t){e.selectedId=t},expression:"selectedId"}}),e._v(" "),a("div",{staticClass:"pagination",staticStyle:{"text-align":"right"}},[a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total > 0"}],attrs:{total:e.total,page:e.pageData.pageNumber,limit:e.pageData.pageSize},on:{"update:page":function(t){e.$set(e.pageData,"pageNumber",t)},"update:limit":function(t){e.$set(e.pageData,"pageSize",t)},pagination:e.onPageChange}})],1),e._v(" "),a("el-form",{ref:"form-model-data",staticClass:"form-box",attrs:{model:e.formModelData,rules:e.ruler}},[a("h6",[e._v("公示设置：")]),e._v(" "),a("el-form-item",{attrs:{label:"公示对象：",prop:"informType"}},[a("el-radio-group",{on:{change:e.onChangeRadio},model:{value:e.formModelData.informType,callback:function(t){e.$set(e.formModelData,"informType",t)},expression:"formModelData.informType"}},[a("el-radio",{attrs:{label:"1"}},[e._v("全部成员")]),e._v(" "),a("el-radio",{attrs:{label:"2"}},[e._v("指定招生组")]),e._v(" "),a("el-radio",{attrs:{label:"3"}},[e._v("指定角色")]),e._v(" "),a("el-radio",{attrs:{label:"4"}},[e._v("自定义成员")])],1)],1),e._v(" "),a("specified-object",{directives:[{name:"show",rawName:"v-show",value:!e.isShowTree,expression:"!isShowTree"}],ref:"person",attrs:{type:e.formModelData.informType},model:{value:e.formModelData.orgList,callback:function(t){e.$set(e.formModelData,"orgList",t)},expression:"formModelData.orgList"}}),e._v(" "),a("el-form-item",{attrs:{label:"公示有效期：",prop:"period"}},[a("el-date-picker",{attrs:{type:"date","value-format":"timestamp"},model:{value:e.formModelData.period,callback:function(t){e.$set(e.formModelData,"period",t)},expression:"formModelData.period"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.onClickSaveBtn}},[e._v("发布")]),e._v(" "),a("el-button",{attrs:{size:"small"},on:{click:e.onClickCancelBtn}},[e._v("返回")])],1)],1)],1)},[],!1,null,"00c77e2d",null);p.options.__file="open.vue";t.default=p.exports}}]);