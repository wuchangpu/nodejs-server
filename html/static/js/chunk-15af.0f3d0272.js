(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-15af"],{"8goz":function(e,t,a){},KDrQ:function(e,t,a){"use strict";var r={props:{value:{type:String,default:""},treeData:{required:!0,type:Array},echoId:{type:String,default:""}},data:function(){return{inputValue:"",treeProps:{label:"groupName",children:"child"},showPopover:!1}},watch:{value:function(e){this.inputValue=e},inputValue:function(e){this.$emit("input",e)},echoId:function(){this.treeData.length&&!this.inputValue&&this.echoMethod(this.treeData)}},methods:{filterNodeMethod:function(e,t,a){return!e||-1!==t.groupName.indexOf(e)},nodeClick:function(e){this.showPopover=!1,this.inputValue=e.groupName,this.$emit("change",e)},echoMethod:function(e){var t=this;e.forEach(function(e){if(e.id===t.echoId)return t.inputValue=e.groupName;e.child&&e.child.length&&t.echoMethod(e.child)})}}},o=a("ZrdR"),n=Object(o.a)(r,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"choose_admissions_team_selcet"},[a("el-popover",{attrs:{trigger:"click",placement:"bottom"},model:{value:e.showPopover,callback:function(t){e.showPopover=t},expression:"showPopover"}},[a("el-input",{attrs:{slot:"reference",placeholder:"请选择"},slot:"reference",model:{value:e.inputValue,callback:function(t){e.inputValue=t},expression:"inputValue"}}),e._v(" "),a("permission-tree",{attrs:{treeData:e.treeData,defaultProps:e.treeProps,isShowCheckbox:!1,nodeKey:"id",expandOnClickNode:!1,filterNodeMethod:e.filterNodeMethod,filterText:e.inputValue},on:{nodeClick:e.nodeClick}})],1)],1)},[],!1,null,null,null);n.options.__file="chooseAdmTeamSelcet.vue";t.a=n.exports},RRb8:function(e,t,a){"use strict";var r=a("ohcz");a.n(r).a},ohcz:function(e,t,a){},pRND:function(e,t,a){"use strict";a.r(t);var r=a("cLjf"),o=a.n(r),n=a("6ZY3"),i=a.n(n),l=a("hDQ3"),s=a.n(l),p={data:function(){return{isShowDialog:!1,dialogForm:{approvalWorkIdList:"",webOrAdmin:"2",oneKeyBatch:"1",remark:""},formData:{myType:"1",myState:"1",workType:"",applyType:"",taskName:"",applyUserOrJobNum:"",applyStaTime:"",applyEndTime:"",groupName:"",company:""},timeRange:[],pageData:{pageNumber:1,pageSize:5},total:0,tableData:[],treeData:[],treeProps:{label:"groupName",children:"child"},orgName:"",pickerOptions:{disabledDate:function(e){return e.getTime()>Date.now()}},innerFormData:[],selections:[],copyForm:{}}},components:{ChooseGroupComponent:a("KDrQ").a},created:function(){this.getTreeData(),this.getTableData()},methods:{getTableData:function(){var e=this;return s()(o.a.mark(function t(){var a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.timeRange&&e.timeRange.length&&i()(e.formData,{applyStaTime:e.timeRange[0].getTime(),applyEndTime:e.timeRange[1].getTime()}),t.next=3,e.$post("approvalList",i()({},e.formData,e.pageData));case 3:if("1000"!==(a=t.sent).returnCode){t.next=11;break}e.tableData=a.records,e.total=+a.total,e.copyForm=e.$deepCopy(e.formData),e.innerFormData=e.tableData.map(function(e){return{approvalWorkIdList:[],approvalState:"",approvalExplain:"",webOrAdmin:"2",oneKeyBatch:""}}),t.next=12;break;case 11:return t.abrupt("return",e.$message.error(a.message));case 12:case"end":return t.stop()}},t,e)}))()},onSubmitSearchForm:function(e){this.pageData.pageNumber=1,this.getTableData(),e.preventDefault()},onSelectionChange:function(e){this.selections=e},onClickOneKeyApproveBtn:function(){if(!this.selections.length)return!1;this.isShowDialog=!0},onClickSaveDialogBtn:function(){var e=this.selections.map(function(e){return e.id});this.handleApproveAction(e)},onCloseDialog:function(){this.$refs.dialogForm.resetFields(),this.dialogForm={approvalWorkIdList:"",webOrAdmin:"2",oneKeyBatch:"1",remark:""},this.isShowDialog=!1},handleApproveAction:function(e){var t=this;return s()(o.a.mark(function a(){var r;return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.$post("groupApprovalSave",i()(t.dialogForm,{approvalWorkIdList:e}));case 2:if("1000"!==(r=a.sent).returnCode){a.next=9;break}t.selections=[],t.onPageChange({page:t.pageData.pageNumber,limit:t.pageData.pageSize}),t.onCloseDialog(),a.next=10;break;case 9:return a.abrupt("return",t.$message.error(r.message));case 10:case"end":return a.stop()}},a,t)}))()},getTreeData:function(){var e=this;return s()(o.a.mark(function t(){var a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$post("adminssionGroupList",e.admissionsTeamParams);case 2:"1000"===(a=t.sent).returnCode?e.treeData=a.dataInfo:e.$message.error(a.message);case 4:case"end":return t.stop()}},t,e)}))()},onMouseenterRemark:function(e){e.target.nextElementSibling.style.display="block"},onMouseleaveRemark:function(e){e.target.nextElementSibling.style.display="none"},onClickSaveBtn:function(e,t){var a=this;this.$refs["innerFormData"+e].validate(function(r){return r&&a.handleSaveAction(e,t)})},onPageChange:function(e){var t=e.page,a=e.limit;this.pageData.pageNumber=t,this.pageData.pageSize=a,this.formData=this.$deepCopy(this.copyForm),this.getTableData()},handleSaveAction:function(e,t){var a=this,r=t.row;return s()(o.a.mark(function t(){var n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.$post("groupApprovalSave",i()({},a.innerFormData[e],{approvalWorkIdList:[r.id]}));case 2:if("1000"!==(n=t.sent).returnCode){t.next=9;break}a.$message.success("操作成功"),a.onClickCancelBtn(e,r),a.onPageChange({page:a.pageData.pageNumber,limit:a.pageData.pageSize}),t.next=10;break;case 9:return t.abrupt("return",a.$message.error(n.message));case 10:case"end":return t.stop()}},t,a)}))()},onClickCancelBtn:function(e,t){var a=t.row;this.$refs["innerFormData"+e].resetFields(),this.$set(this.innerFormData,e,{approvalWorkIdList:[],approvalState:"",approvalExplain:"",webOrAdmin:"1",oneKeyBatch:""}),this.$refs.tableData.toggleRowExpansion(a,!1)},getNowStateStr:function(e){var t=e.row,a=t.nodeId,r=t.approvalInfoList.find(function(e){return e.id===a});return r?r.firstGroupName+r.nodeName:""},onClickExpandBtn:function(e){var t=e.row;this.$refs.tableData.toggleRowExpansion(t)},onClickDetailBtn:function(e){var t=e.row,a=t.createdBy,r=t.approvalWorkId;this.$router.push({name:"ApproveDetail",query:{id:a,work_id:r}})},getActive:function(e){var t=0;return this.getSortedArr(e).find(function(e,a){if("1"===e.approvalSort)return t=a,!0}),t},getSortedArr:function(e){var t=e.row.approvalInfoList.concat([]);return t.sort(function(e,t){return e.approvalSort-t.approvalSort>0?1:e.approvalSort-t.approvalSort==0?0:e.approvalSort-t.approvalSort<0?-1:void 0}),t},getFilterArr:function(e){var t=[];return e.row.approvalInfoList.forEach(function(e){"1"!==e.nodeType&&"4"!==e.nodeType&&"3"!==e.state||t.push(e)}),t.sort(function(e,t){return t.approvalSort-e.approvalSort}),t}}},c=(a("RRb8"),a("zkIT"),a("ZrdR")),u=Object(c.a)(p,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"approval-approve-list"},[a("el-form",{staticClass:"form",attrs:{model:e.formData,"label-width":"120px"},on:{submit:e.onSubmitSearchForm}},[a("el-row",[a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"标题：",prop:"taskName"}},[a("el-input",{attrs:{clearable:""},model:{value:e.formData.taskName,callback:function(t){e.$set(e.formData,"taskName",t)},expression:"formData.taskName"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"申请人/工号：",prop:"applyUserOrJobNum"}},[a("el-input",{attrs:{clearable:""},model:{value:e.formData.applyUserOrJobNum,callback:function(t){e.$set(e.formData,"applyUserOrJobNum",t)},expression:"formData.applyUserOrJobNum"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{staticClass:"date-form-item",attrs:{label:"申请时间："}},[a("el-col",{attrs:{span:11}},[a("date-picker",{attrs:{fullWidth:""},model:{value:e.formData.applyStaTime,callback:function(t){e.$set(e.formData,"applyStaTime",t)},expression:"formData.applyStaTime"}})],1),e._v(" "),a("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),e._v(" "),a("el-col",{attrs:{span:11}},[a("date-picker",{attrs:{fullWidth:"",end:""},model:{value:e.formData.applyEndTime,callback:function(t){e.$set(e.formData,"applyEndTime",t)},expression:"formData.applyEndTime"}})],1)],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"所在招生组："}},[a("el-input",{model:{value:e.formData.company,callback:function(t){e.$set(e.formData,"company",t)},expression:"formData.company"}})],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{staticStyle:{"text-align":"right"}},[a("el-button",{attrs:{type:"primary",size:"small","native-type":"submit"},on:{click:e.onSubmitSearchForm}},[e._v("搜索")])],1)],1)],1)],1),e._v(" "),a("div",{staticClass:"table__container"},[a("div",{staticClass:"btn_container",staticStyle:{"margin-bottom":"20px"}},[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.onClickOneKeyApproveBtn}},[e._v("一键审批")])],1),e._v(" "),a("el-table",{ref:"tableData",staticStyle:{width:"100%"},attrs:{data:e.tableData},on:{"selection-change":e.onSelectionChange}},[a("el-table-column",{attrs:{type:"expand",width:"20"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"table__expand-row"},[a("div",{staticClass:"steps"},[a("el-steps",{attrs:{active:e.getActive(t),"align-center":""}},e._l(e.getSortedArr(t),function(e){return a("el-step",{key:e.id,attrs:{title:e.firstGroupName+e.nodeName}},[a("i",{staticClass:"icon",attrs:{slot:"icon"},slot:"icon"})])}))],1),e._v(" "),a("div",{staticClass:"inner__table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.getFilterArr(t)}},[a("el-table-column",{attrs:{prop:"nodeName",label:"任务名称"},scopedSlots:e._u([{key:"default",fn:function(t){return["2"===t.row.nodeType?a("a",{staticClass:"link",attrs:{href:"javascript:void(0)"},on:{mouseenter:e.onMouseenterRemark,mouseleave:e.onMouseleaveRemark}},[e._v(e._s(t.row.firstGroupName+t.row.nodeName))]):a("span",[e._v(e._s(t.row.firstGroupName+t.row.nodeName))]),e._v(" "),a("div",{staticClass:"node-comment"},[e._v("\r\n                      备注："+e._s(t.row.approvalExplain)+"\r\n                    ")])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"approvalStateName",label:"状态"}}),e._v(" "),a("el-table-column",{attrs:{prop:"approvalTime",label:"办理时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.approvalTime?a("span",[e._v(e._s(e._f("filterTime")(t.row.approvalTime,"YYYY-MM-DD hh:mm")))]):a("span",[e._v("--")])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"approvalUserName",label:"办理人"},scopedSlots:e._u([{key:"default",fn:function(t){return["4"===t.row.nodeType?a("a",{staticClass:"link",on:{click:function(a){e.onClickDetailBtn(t)}}},[e._v("查看")]):a("span",[e._v(e._s(t.row.approvalUserName))])]}}])})],1)],1),e._v(" "),a("div",{staticClass:"inner__form"},[a("el-form",{ref:"innerFormData"+t.$index,attrs:{model:e.innerFormData[t.$index]}},[a("h6",{staticClass:"approve__title"},[e._v("审批结果")]),e._v(" "),a("el-form-item",{attrs:{prop:".approvalState",rules:{required:!0,message:"请选择",trigger:"change"}}},[a("el-radio-group",{staticClass:"radio__group",attrs:{"text-color":"#666666",fill:"#196EAE"},model:{value:e.innerFormData[t.$index].approvalState,callback:function(a){e.$set(e.innerFormData[t.$index],"approvalState",a)},expression:"innerFormData[scope.$index].approvalState"}},[a("div",{staticClass:"inner__radio-wrap"},[a("el-radio",{attrs:{label:"2"}},[e._v("通过")])],1),e._v(" "),a("div",{staticClass:"inner__radio-wrap"},[a("el-radio",{attrs:{label:"3"}},[e._v("不通过")])],1)])],1),e._v(" "),a("el-form-item",{attrs:{prop:".approvalExplain",label:"备注"}},[a("el-input",{attrs:{type:"textarea",rows:"4"},model:{value:e.innerFormData[t.$index].approvalExplain,callback:function(a){e.$set(e.innerFormData[t.$index],"approvalExplain",a)},expression:"innerFormData[scope.$index].approvalExplain"}})],1),e._v(" "),a("el-form-item",[a("div",{staticClass:"button-group",staticStyle:{"text-align":"right"}},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){e.onClickSaveBtn(t.$index,t)}}},[e._v("确认")]),e._v(" "),a("el-button",{attrs:{size:"small"},on:{click:function(a){e.onClickCancelBtn(t.$index,t)}}},[e._v("取消")])],1)])],1)],1)])]}}])}),e._v(" "),a("el-table-column",{attrs:{type:"selection"}}),e._v(" "),a("el-table-column",{attrs:{label:"事项",align:"left",width:"285"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"approval__cell-detail"},[a("h5",{staticClass:"title"},[e._v(e._s(t.row.taskName))]),e._v(" "),a("dl",{staticClass:"time"},[a("dt",[e._v("申请时间：")]),e._v(" "),a("dd",[e._v(e._s(e._f("filterTime")(t.row.applyTime,"YYYY-MM-DD")))])]),e._v(" "),a("div",{staticClass:"user"},[a("span",[e._v(e._s(t.row.applyUserName))]),e._v(" "),a("dl",{staticClass:"code"},[a("dt",[e._v("（工号：")]),e._v(" "),a("dd",[e._v(e._s(t.row.jobNum)+"）")])]),e._v(" "),a("dl",{staticClass:"group"},[a("dt",[e._v("所在招生组：")]),e._v(" "),a("dd",[e._v(e._s(t.row.groupName))])])])])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"serialNo",label:"排号","header-align":"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"",label:"当前步骤"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\r\n          "+e._s(e.getNowStateStr(t))+"\r\n        ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"speedProgress",label:"办理进度"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"progress-number"},[a("el-progress",{staticClass:"progress-bar",attrs:{percentage:+t.row.speedProgress}}),e._v(" "),a("span",{staticClass:"status primary"},[e._v("待办理")])],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){e.onClickExpandBtn(t)}}},[e._v("明细")])]}}])})],1)],1),e._v(" "),a("div",{staticClass:"pagination"},[a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total > 0"}],attrs:{total:e.total,page:e.pageData.pageNumber,limit:e.pageData.pageSize},on:{"update:page":function(t){e.$set(e.pageData,"pageNumber",t)},"update:limit":function(t){e.$set(e.pageData,"pageSize",t)},pagination:e.onPageChange}})],1),e._v(" "),a("el-dialog",{attrs:{visible:e.isShowDialog,title:"一键审批"},on:{close:e.onCloseDialog}},[a("el-form",{ref:"dialogForm",attrs:{"label-width":"150px",model:e.dialogForm}},[a("el-form-item",{attrs:{label:"审批结果：",prop:"oneKeyBatch",rules:{required:!0,message:"请输入",trigger:"change"}}},[a("el-radio-group",{model:{value:e.dialogForm.oneKeyBatch,callback:function(t){e.$set(e.dialogForm,"oneKeyBatch",t)},expression:"dialogForm.oneKeyBatch"}},[a("el-radio",{attrs:{label:"1"}},[e._v("通过")]),e._v(" "),a("el-radio",{attrs:{label:"2"}},[e._v("不通过")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"备注：",prop:"remark"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.dialogForm.remark,callback:function(t){e.$set(e.dialogForm,"remark",t)},expression:"dialogForm.remark"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{size:"small"},on:{click:e.onCloseDialog}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.onClickSaveDialogBtn}},[e._v("确定")])],1)],1)],1)],1)},[],!1,null,"0e8c01af",null);u.options.__file="list.vue";t.default=u.exports},zkIT:function(e,t,a){"use strict";var r=a("8goz");a.n(r).a}}]);