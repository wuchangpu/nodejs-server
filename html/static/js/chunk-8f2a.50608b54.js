(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-8f2a"],{"40zd":function(e,a,r){},KDrQ:function(e,a,r){"use strict";var t={props:{value:{type:String,default:""},treeData:{required:!0,type:Array},echoId:{type:String,default:""}},data:function(){return{inputValue:"",treeProps:{label:"groupName",children:"child"},showPopover:!1}},watch:{value:function(e){this.inputValue=e},inputValue:function(e){this.$emit("input",e)},echoId:function(){this.treeData.length&&!this.inputValue&&this.echoMethod(this.treeData)}},methods:{filterNodeMethod:function(e,a,r){return!e||-1!==a.groupName.indexOf(e)},nodeClick:function(e){this.showPopover=!1,this.inputValue=e.groupName,this.$emit("change",e)},echoMethod:function(e){var a=this;e.forEach(function(e){if(e.id===a.echoId)return a.inputValue=e.groupName;e.child&&e.child.length&&a.echoMethod(e.child)})}}},s=r("ZrdR"),o=Object(s.a)(t,function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{staticClass:"choose_admissions_team_selcet"},[r("el-popover",{attrs:{trigger:"click",placement:"bottom"},model:{value:e.showPopover,callback:function(a){e.showPopover=a},expression:"showPopover"}},[r("el-input",{attrs:{slot:"reference",placeholder:"请选择"},slot:"reference",model:{value:e.inputValue,callback:function(a){e.inputValue=a},expression:"inputValue"}}),e._v(" "),r("permission-tree",{attrs:{treeData:e.treeData,defaultProps:e.treeProps,isShowCheckbox:!1,nodeKey:"id",expandOnClickNode:!1,filterNodeMethod:e.filterNodeMethod,filterText:e.inputValue},on:{nodeClick:e.nodeClick}})],1)],1)},[],!1,null,null,null);o.options.__file="chooseAdmTeamSelcet.vue";a.a=o.exports},gPiz:function(e,a,r){"use strict";var t=r("u7NN");r.n(t).a},j2VX:function(e,a,r){"use strict";var t=r("40zd");r.n(t).a},lltF:function(e,a,r){"use strict";r.r(a);var t=r("EPZ6"),s=r.n(t),o=r("6ZY3"),i=r.n(o),l=r("cLjf"),n=r.n(l),d=r("hDQ3"),u=r.n(d),c=r("KDrQ"),m=r("8SHQ"),p={name:"admissionsTeam-structure",components:{chooseAdmTeamSelcet:c.a},data:function(){return{Host:m.a,active:"1",groupName:"",filterText:"",admissionsTeamParams:{groupName:""},admissionsTeamList:[],allAdmissionsTeamList:[],treeProps:{label:"groupName",children:"child"},centerDialogVisible:!1,dialogType:"1",dialogTitle:"新增一级招生组",curFormName:"",addFormOne:{username:"",groupName:"",groupLevel:"1",jobNumber:"",status:""},addFormTwo:{username:"",groupName:"",groupLevel:"2",parentId:"",parentName:"",jobNumber:"",status:""},addFormThree:{jobNumber:"",username:"",idCard:"",orgId:"",orgName:"",userType:""},addFormFour:{checkBox:[],username:"",jobNumber:"",list:[{userId:"",orgId:"",orgName:"",groupLevel:"1",status:"",succeedNumber:"",succeedUser:"",organization:"",jobNumber:""},{userId:"",orgId:"",orgName:"",groupLevel:"2",status:"",succeedNumber:"",succeedUser:"",organization:"",jobNumber:""}]},addFormFive:{userId:"",orgId:"",orgName:"",groupLevel:"",status:"",succeedNumber:"",succeedUser:"",organization:"",username:"",jobNumber:"",newJobNumber:""},addFormSix:{userId:"",orgId:"",orgName:"",status:"",jobNumber:"",username:"",idCard:""},addFormSeven:{id:"",groupName:"",status:"",level:""},rules:{idCard:[{required:!0,message:"请输入身份证",trigger:"change"}],groupName:[{required:!0,message:"请输入招生组名称",trigger:"change"}],username:[{required:!0,message:"请输入组长姓名",trigger:"change"}],jobNumber:[{required:!0,message:"请搜索选择",trigger:"change"}],status:[{required:!0,message:"请选择状态",trigger:"change"}],parentId:[{required:!0,message:"请选择招生组",trigger:"change"}],userType:[{required:!0,message:"请选择账号类型",trigger:"change"}],orgName:[{required:!0,message:"请选择招生组",trigger:"change"}],checkBox:[{required:!0,message:"请选择卸任角色",trigger:"change"}],succeedNumber:[{required:!0,message:"请选择新任组长",trigger:"change"}]},tableParams:{username:"",role:"",orgId:"",pageNumber:1,pageSize:20},total:0,tableData:[],cadreList:[],batchIds:[],roleList:[{dataKey:"1",dataValue:"一级组长"},{dataKey:"2",dataValue:"二级组长"},{dataKey:"3",dataValue:"招生干部"}],perSysUserList:[]}},created:function(){this.getAllAdmissionsTeamList(),this.getTableData(),this.queryCadreList(),this.getAdmissionsTeamList()},methods:{groupSwitchBtnClick:function(){this.active="1",this.tableParams.role="",this.tableParams.orgId="",this.getTableData()},roleSwitchBtnClick:function(){this.active="2",this.tableParams.role="",this.tableParams.orgId="",this.getTableData()},roleClick:function(e){this.tableParams.role=e,this.getTableData()},queryCadreList:function(){var e=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return u()(n.a.mark(function r(){var t;return n.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.$post("adminssionCadreSelect",{username:a});case 2:"1000"===(t=r.sent).returnCode?e.cadreList=t.dataInfo:e.$message.error(t.message);case 4:case"end":return r.stop()}},r,e)}))()},querySearchAsync:function(e){var a=this;return u()(n.a.mark(function r(){var t,s;return n.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(e){r.next=2;break}return r.abrupt("return");case 2:return r.next=4,a.$post("adminssionCadreQueryStaff",{username:e});case 4:"1000"===(t=r.sent).returnCode?((s=t.dataInfo).forEach(function(e){e.label=e.username+"（"+e.jobNumber+"）"}),a.perSysUserList=s):a.$message.error(t.message);case 6:case"end":return r.stop()}},r,a)}))()},cadreChange:function(e){var a=this.perSysUserList.find(function(a){return a.jobNumber===e});this.addFormOne.username=a.username},cadreChange2:function(e){var a=this.perSysUserList.find(function(a){return a.jobNumber===e});this.addFormTwo.username=a.username},cadreChange3:function(e){var a=this.perSysUserList.find(function(a){return a.jobNumber===e});this.addFormThree.username=a.username},singleCadreChange:function(e){var a=this.cadreList.find(function(a){return a.userId===e});this.addFormFive.succeedUser=a.username,this.addFormFive.newJobNumber=a.jobNumber},multipleCadreChange:function(e,a){var r=this.cadreList.find(function(a){return a.userId===e});this.addFormFour.list[a].succeedUser=r.username,this.addFormFour.list[a].jobNumber=r.jobNumber},admiTeamChange:function(e){var a=this;e.child&&e.child.length&&this.$nextTick(function(){return a.addFormThree.orgName="",a.$message.warning("请选择二级招生组")}),this.addFormThree.orgId=e.id},adjustTeamChange:function(e){var a=this;e.child&&e.child.length&&this.$nextTick(function(){return a.addFormSix.orgName="",a.$message.warning("请选择二级招生组")}),this.addFormSix.orgId=e.id},getAdmissionsTeamList:function(){var e=this;return u()(n.a.mark(function a(){var r;return n.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.$post("adminssionGroupList",e.admissionsTeamParams);case 2:"1000"===(r=a.sent).returnCode?e.admissionsTeamList=r.dataInfo:e.$message.error(r.message);case 4:case"end":return a.stop()}},a,e)}))()},addTreeProperty:function(e,a,r,t){var s=this;e.forEach(function(e){s.$set(e,a,r),e[t]&&e[t].length&&s.addTreeProperty(e[t],a,r,t)})},getAllAdmissionsTeamList:function(){var e=this;return u()(n.a.mark(function a(){var r;return n.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.$post("adminssionGroupQueryAll",{});case 2:"1000"===(r=a.sent).returnCode?(e.allAdmissionsTeamList=r.dataInfo,e.addTreeProperty(e.allAdmissionsTeamList,"showBtn",!1,"child")):e.$message.error(r.message);case 4:case"end":return a.stop()}},a,e)}))()},editNode:function(e){console.log("val",e),this.addFormSeven.level=e.data.groupLevel,this.addFormSeven.id=e.data.id,this.addFormSeven.groupName=e.data.groupName,this.addFormSeven.status=e.data.status,this.dialogType="7",this.switchDialog()},getTableData:function(){var e=this;return u()(n.a.mark(function a(){var r;return n.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.$post("adminssionCadrePage",e.tableParams);case 2:"1000"===(r=a.sent).returnCode?(e.tableData=r.records,e.total=+r.total):e.$message.error(r.message);case 4:case"end":return a.stop()}},a,e)}))()},paginationChange:function(e){this.tableParams.pageNumber=e.page,this.tableParams.pageSize=e.limit,this.getTableData()},search:function(){this.tableParams.username=this.groupName,this.tableParams.pageNumber=1,this.getTableData()},nodeClick:function(e){this.tableParams.pageNumber=1,this.tableParams.orgId=e.id,this.getTableData()},filterNodeMethod:function(e,a,r){return!e||-1!==a.groupName.indexOf(e)},switchDialog:function(){switch(this.dialogType){case"1":this.curFormName="addFormOne",this.dialogTitle="新增一级招生组";break;case"2":this.curFormName="addFormTwo",this.dialogTitle="新增二级招生组";break;case"3":this.curFormName="addFormThree",this.dialogTitle="添加招生干部";break;case"4":this.curFormName="addFormFour",this.dialogTitle="卸任组长";break;case"5":this.curFormName="addFormFive",this.dialogTitle="卸任组长";break;case"6":this.curFormName="addFormSix",this.dialogTitle="成员调动";break;case"7":this.curFormName="addFormSeven",this.dialogTitle="编辑招生组"}this.centerDialogVisible=!0},addLevelOne:function(){this.dialogType="1",this.switchDialog()},addLevelTwo:function(){this.dialogType="2",this.switchDialog()},addCadre:function(){this.dialogType="3",this.switchDialog()},batchDelete:function(){var e=this;if(!this.batchIds.length)return this.$message.warning("请选择删除项");this.$confirm("确定删除所选项吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.adminssionCadreDelete(e.batchIds)}).catch(function(){})},closeDialog:function(){this.centerDialogVisible=!1,this.$refs[this.curFormName].clearValidate()},submitForm:function(){var e=this;this.$refs[this.curFormName].validate(function(a){if(!a)return console.log("error submit!!"),!1;switch(e.dialogType){case"1":e.addAdmissionsTeam();break;case"2":e.addAdmissionsTeamTwo();break;case"3":e.addCadreRequest();break;case"4":e.multipleResignation();break;case"5":e.resignationRequest([e.addFormFive]);break;case"6":e.adjustRequest();break;case"7":e.updateAdmissionsTeam()}})},addAdmissionsTeam:function(){var e=this;return u()(n.a.mark(function a(){var r,t;return n.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return delete(r=e.$deepCopy(e.addFormOne)).username,a.next=4,e.$post("adminssionGroupAdd",r);case 4:"1000"===(t=a.sent).returnCode?(e.centerDialogVisible=!1,e.$message.success("新增成功"),e.getAdmissionsTeamList(),i()(e.addFormOne,{username:"",groupName:"",groupLevel:"1",jobNumber:"",status:""}),e.$nextTick(function(){e.$refs.addFormOne.clearValidate()})):e.$message.error(t.message);case 6:case"end":return a.stop()}},a,e)}))()},addAdmissionsTeamTwo:function(){var e=this;return u()(n.a.mark(function a(){var r,t,s;return n.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return r=e.$deepCopy(e.addFormTwo),t=e.admissionsTeamList.find(function(e){return e.id===r.parentId}),r.parentName=t.groupName,delete r.username,a.next=6,e.$post("adminssionGroupAdd",r);case 6:"1000"===(s=a.sent).returnCode?(e.centerDialogVisible=!1,e.$message.success("新增成功"),e.getAdmissionsTeamList(),i()(e.addFormTwo,{username:"",groupName:"",groupLevel:"2",parentId:"",parentName:"",jobNumber:"",status:""}),e.$nextTick(function(){e.$refs.addFormTwo.clearValidate()})):e.$message.error(s.message);case 8:case"end":return a.stop()}},a,e)}))()},addCadreRequest:function(){var e=this;return u()(n.a.mark(function a(){var r;return n.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.$post("adminssionCadreAdd",e.addFormThree);case 2:"1000"===(r=a.sent).returnCode?(e.centerDialogVisible=!1,e.$message.success("新增成功"),e.getTableData(),i()(e.addFormThree,{jobNumber:"",username:"",idCard:"",orgId:"",orgName:"",userType:""}),e.$nextTick(function(){e.$refs.addFormThree.clearValidate()})):e.$message.error(r.message);case 4:case"end":return a.stop()}},a,e)}))()},toDetailInfo:function(e){this.$router.push({path:"/admissionsTeam/structure/personInfo",query:{userId:e.row.userId}})},changeStatus:function(e,a){var r=this;return u()(n.a.mark(function t(){var s;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.$post("adminssionCadreIsEnable",{userId:a.row.userId});case 2:"1000"===(s=t.sent).returnCode?r.$message.success("“"+a.row.username+"”状态已"+("1"===e?"启用":"2"===e?"禁用":"")):(r.tableData[a.$index].status="1"===e?"2":"2"===e?"1":"",r.$message.error(s.message));case 4:case"end":return t.stop()}},t,r)}))()},adjustTableItem:function(e){var a=this;this.dialogType="6",this.switchDialog(),i()(this.addFormSix,{userId:"",orgId:"",orgName:"",jobNumber:"",username:"",idCard:""}),this.$nextTick(function(){a.$refs.addFormSix.clearValidate()}),this.addFormSix.jobNumber=e.row.jobNumber,this.addFormSix.username=e.row.username,this.addFormSix.userId=e.row.userId,this.addFormSix.idCard=e.row.idCard,this.addFormSix.status=e.row.status,this.$nextTick(function(){a.addFormSix.orgId=e.row.orgId})},retireTableItem:function(e){var a=this;return u()(n.a.mark(function r(){return n.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if("4"!==e.row.roleType){r.next=6;break}return a.dialogType="4",r.next=4,a.getMultipleCadreInfo(e.row.userId);case 4:r.next=14;break;case 6:a.dialogType="5",a.switchDialog(),a.addFormFive.succeedNumber="",a.addFormFive.newJobNumber="",a.$nextTick(function(){a.$refs.addFormFive.clearValidate()}),s()(a.addFormFive).forEach(function(r){e.row.hasOwnProperty(r)&&(a.addFormFive[r]=e.row[r])}),a.addFormFive.status="1",a.addFormFive.groupLevel=e.row.roleType;case 14:case"end":return r.stop()}},r,a)}))()},getMultipleCadreInfo:function(e){var a=this;return u()(n.a.mark(function r(){var t;return n.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,a.$post("adminssionCadreQuery",{userId:e});case 2:"1000"===(t=r.sent).returnCode?(a.switchDialog(),a.addFormFour.checkBox=[],a.addFormFour.list[0].succeedNumber="",a.addFormFour.list[0].newJobNumber="",a.addFormFour.list[1].succeedNumber="",a.addFormFour.list[1].newJobNumber="",a.$nextTick(function(){a.$refs.addFormFour.clearValidate()}),a.addFormFour.list.forEach(function(e,a){e.orgId=t.dataInfo.cadreGroupList[a].groupId,e.organization=e.orgName=t.dataInfo.cadreGroupList[a].groupName,e.userId=t.dataInfo.userId,e.status="1"}),a.addFormFour.list[1].organization=t.dataInfo.organization,a.addFormFour.username=t.dataInfo.username,a.addFormFour.jobNumber=t.dataInfo.jobNumber,a.$forceUpdate(),console.log("addFormFour",a.addFormFour)):a.$message.error(t.message);case 4:case"end":return r.stop()}},r,a)}))()},resignationRequest:function(e){var a=this;return u()(n.a.mark(function r(){var t;return n.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,a.$post("adminssionCadreOutGoing",{list:e});case 2:"1000"===(t=r.sent).returnCode?(a.$message.success("卸任成功"),a.getTableData()):a.$message.error(t.message);case 4:case"end":return r.stop()}},r,a)}))()},adjustRequest:function(){var e=this;return u()(n.a.mark(function a(){var r;return n.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.$post("adminssionCadreUpdate",{userId:e.addFormSix.userId,orgId:e.addFormSix.orgId,orgName:e.addFormSix.orgName,status:e.addFormSix.status});case 2:"1000"===(r=a.sent).returnCode?(e.centerDialogVisible=!1,e.$message.success("成员调动成功"),e.getTableData()):e.$message.error(r.message);case 4:case"end":return a.stop()}},a,e)}))()},multipleResignation:function(){var e=this.$deepCopy(this.addFormFour.list);e.forEach(function(e){delete e.organization,delete e.jobNumber}),1===this.addFormFour.checkBox.length&&(this.addFormFour.checkBox.includes("1")?e=e.filter(function(e){return"1"===e.groupLevel}):this.addFormFour.checkBox.includes("2")&&(e=e.filter(function(e){return"2"===e.groupLevel}))),this.resignationRequest(e)},delTableItem:function(e){var a=this;this.$confirm("确定删除“"+e.row.username+"”吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.adminssionCadreDelete([e.row.userId])}).catch(function(){})},adminssionCadreDelete:function(e){var a=this;return u()(n.a.mark(function r(){var t;return n.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,a.$post("adminssionCadreDelete",{userIds:e});case 2:"1000"===(t=r.sent).returnCode?(a.$message.success("删除成功"),a.tableData=a.tableData.filter(function(a){return!e.includes(a.userId)}),a.total-=e.length):a.$message.error(t.message);case 4:case"end":return r.stop()}},r,a)}))()},updateAdmissionsTeam:function(){var e=this;return u()(n.a.mark(function a(){var r;return n.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.$post("adminssionGroupUpdate",{id:e.addFormSeven.id,groupName:e.addFormSeven.groupName,status:e.addFormSeven.status});case 2:"1000"===(r=a.sent).returnCode?(e.centerDialogVisible=!1,e.$message.success("修改成功"),e.getAllAdmissionsTeamList(),e.getAdmissionsTeamList(),i()(e.addFormSeven,{id:"",groupName:"",status:"",level:""}),e.$nextTick(function(){e.$refs.addFormSeven.clearValidate()})):e.$message.error(r.message);case 4:case"end":return a.stop()}},a,e)}))()},handleSelectionChange:function(e){this.batchIds=e.map(function(e){return e.userId})}}},h=(r("j2VX"),r("gPiz"),r("ZrdR")),b=Object(h.a)(p,function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{staticClass:"admissionsTeam_structure"},[r("el-row",{staticClass:"container"},[r("el-col",{staticClass:"left",attrs:{span:3}},[r("el-row",{staticClass:"search_row"},[r("el-input",{attrs:{placeholder:"输入姓名/工号查询",size:"small"},nativeOn:{keyup:function(a){return"button"in a||!e._k(a.keyCode,"enter",13,a.key,"Enter")?e.search(a):null}},model:{value:e.groupName,callback:function(a){e.groupName=a},expression:"groupName"}},[r("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"suffix"},on:{click:e.search},slot:"suffix"})])],1),e._v(" "),r("el-row",{staticClass:"add_btn_row"},[r("el-col",{staticClass:"btn_container",attrs:{span:12}},[r("span",{staticClass:"pointer",on:{click:e.addLevelOne}},[r("i",{staticClass:"el-icon-circle-plus-outline"}),e._v(" 新增一级组")])]),e._v(" "),r("el-col",{staticClass:"btn_container",attrs:{span:12}},[r("span",{staticClass:"pointer",on:{click:e.addLevelTwo}},[r("i",{staticClass:"el-icon-circle-plus-outline"}),e._v(" 新增二级组")])])],1),e._v(" "),r("el-row",{staticClass:"switch_btn_row"},[r("el-button-group",{staticStyle:{width:"100%"}},[r("el-button",{staticStyle:{width:"50%"},attrs:{type:"1"===e.active?"primary":"default",size:"small"},on:{click:e.groupSwitchBtnClick}},[e._v("分组结构")]),e._v(" "),r("el-button",{staticStyle:{width:"50%"},attrs:{type:"2"===e.active?"primary":"default",size:"small"},on:{click:e.roleSwitchBtnClick}},[e._v("角色")])],1)],1),e._v(" "),r("el-row",{staticClass:"left_content_row"},[r("permission-tree",{directives:[{name:"show",rawName:"v-show",value:"1"===e.active,expression:"active === '1'"}],attrs:{treeData:e.allAdmissionsTeamList,defaultProps:e.treeProps,isShowCheckbox:!1,nodeKey:"id",expandOnClickNode:!1,filterNodeMethod:e.filterNodeMethod,filterText:e.filterText,whichCustomTreeNode:"allAdmissionsTeam"},on:{nodeClick:e.nodeClick,editNode:e.editNode}}),e._v(" "),r("ul",{directives:[{name:"show",rawName:"v-show",value:"2"===e.active,expression:"active === '2'"}]},e._l(e.roleList,function(a){return r("li",{key:a.dataKey,on:{click:function(r){e.roleClick(a.dataValue)}}},[e._v(e._s(a.dataValue))])}))],1)],1),e._v(" "),r("el-col",{staticClass:"right",attrs:{span:21}},[r("el-row",{staticClass:"title_row"},[r("h3",[e._v("招生组成员")])]),e._v(" "),r("el-row",{staticClass:"operate_btn_row"},[r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.addCadre}},[r("i",{staticClass:"el-icon-circle-plus-outline"}),e._v(" 添加干部\n        ")]),e._v(" "),r("a",{attrs:{href:e.Host+"adminssionCadre/exportExcel?orgId="+e.tableParams.orgId+"&ids="+e.batchIds}},[r("el-button",{attrs:{size:"mini"}},[e._v("批量导出")])],1),e._v(" "),r("el-button",{attrs:{size:"mini"},on:{click:e.batchDelete}},[e._v("批量删除")])],1),e._v(" "),r("div",{staticClass:"dialog_container"},[r("el-dialog",{attrs:{title:e.dialogTitle,visible:e.centerDialogVisible,center:""},on:{"update:visible":function(a){e.centerDialogVisible=a}}},[r("el-form",{directives:[{name:"show",rawName:"v-show",value:"1"===e.dialogType,expression:"dialogType === '1'"}],ref:"addFormOne",attrs:{model:e.addFormOne,rules:e.rules,"label-width":"150px"}},[r("el-row",[r("el-col",{attrs:{span:21}},[r("el-form-item",{attrs:{label:"一级招生组名称：",prop:"groupName"}},[r("el-input",{attrs:{placeholder:"请输入"},model:{value:e.addFormOne.groupName,callback:function(a){e.$set(e.addFormOne,"groupName",a)},expression:"addFormOne.groupName"}})],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:21}},[r("el-form-item",{attrs:{label:"一级组长：",prop:"jobNumber"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入姓名模糊搜索",clearable:"",filterable:"",remote:"","remote-method":e.querySearchAsync},on:{change:e.cadreChange},model:{value:e.addFormOne.jobNumber,callback:function(a){e.$set(e.addFormOne,"jobNumber",a)},expression:"addFormOne.jobNumber"}},e._l(e.perSysUserList,function(e){return r("el-option",{key:e.jobNumber,attrs:{label:e.label,value:e.jobNumber}})}))],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:21}},[r("el-form-item",{attrs:{label:"组长工号：",prop:"jobNumber"}},[r("span",[e._v(e._s(e.addFormOne.jobNumber))]),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:!e.addFormOne.jobNumber,expression:"!addFormOne.jobNumber"}],staticClass:"placeholder"},[e._v("根据姓名搜索显示")])])],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:21}},[r("el-form-item",{attrs:{label:"状态：",prop:"status"}},[r("el-radio-group",{model:{value:e.addFormOne.status,callback:function(a){e.$set(e.addFormOne,"status",a)},expression:"addFormOne.status"}},[r("el-radio",{attrs:{label:1}},[e._v("启用")]),e._v(" "),r("el-radio",{attrs:{label:2}},[e._v("禁用")])],1)],1)],1)],1)],1),e._v(" "),r("el-form",{directives:[{name:"show",rawName:"v-show",value:"2"===e.dialogType,expression:"dialogType === '2'"}],ref:"addFormTwo",attrs:{model:e.addFormTwo,rules:e.rules,"label-width":"150px"}},[r("el-row",[r("el-col",{attrs:{span:21}},[r("el-form-item",{attrs:{label:"所在一级招生组：",prop:"parentId"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{filterable:"",placeholder:"请输入名称模糊搜索",clearable:""},model:{value:e.addFormTwo.parentId,callback:function(a){e.$set(e.addFormTwo,"parentId",a)},expression:"addFormTwo.parentId"}},e._l(e.admissionsTeamList,function(e){return r("el-option",{key:e.id,attrs:{label:e.groupName,value:e.id}})}))],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:21}},[r("el-form-item",{attrs:{label:"二级招生组名称：",prop:"groupName"}},[r("el-input",{attrs:{placeholder:"请输入"},model:{value:e.addFormTwo.groupName,callback:function(a){e.$set(e.addFormTwo,"groupName",a)},expression:"addFormTwo.groupName"}})],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:21}},[r("el-form-item",{attrs:{label:"二级组长：",prop:"username"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入姓名模糊搜索",clearable:"",filterable:"",remote:"","remote-method":e.querySearchAsync},on:{change:e.cadreChange2},model:{value:e.addFormTwo.jobNumber,callback:function(a){e.$set(e.addFormTwo,"jobNumber",a)},expression:"addFormTwo.jobNumber"}},e._l(e.perSysUserList,function(e){return r("el-option",{key:e.jobNumber,attrs:{label:e.label,value:e.jobNumber}})}))],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:21}},[r("el-form-item",{attrs:{label:"组长工号：",prop:"jobNumber"}},[r("span",[e._v(e._s(e.addFormTwo.jobNumber))]),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:!e.addFormTwo.jobNumber,expression:"!addFormTwo.jobNumber"}],staticClass:"placeholder"},[e._v("根据姓名搜索显示")])])],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:21}},[r("el-form-item",{attrs:{label:"状态：",prop:"status"}},[r("el-radio-group",{model:{value:e.addFormTwo.status,callback:function(a){e.$set(e.addFormTwo,"status",a)},expression:"addFormTwo.status"}},[r("el-radio",{attrs:{label:1}},[e._v("启用")]),e._v(" "),r("el-radio",{attrs:{label:2}},[e._v("禁用")])],1)],1)],1)],1)],1),e._v(" "),r("el-form",{directives:[{name:"show",rawName:"v-show",value:"3"===e.dialogType,expression:"dialogType === '3'"}],ref:"addFormThree",attrs:{model:e.addFormThree,rules:e.rules,"label-width":"120px"}},[r("el-row",[r("el-col",{attrs:{span:21}},[r("el-form-item",{attrs:{label:"账号类型：",prop:"userType"}},[r("el-radio-group",{model:{value:e.addFormThree.userType,callback:function(a){e.$set(e.addFormThree,"userType",a)},expression:"addFormThree.userType"}},[r("el-radio",{attrs:{label:2}},[e._v("普通账号")]),e._v(" "),r("el-radio",{attrs:{label:1}},[e._v("统一身份认证账号")])],1)],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:21}},[r("el-form-item",{attrs:{label:"姓名：",prop:"username"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入姓名模糊搜索",clearable:"",filterable:"",remote:"","remote-method":e.querySearchAsync},on:{change:e.cadreChange3},model:{value:e.addFormThree.jobNumber,callback:function(a){e.$set(e.addFormThree,"jobNumber",a)},expression:"addFormThree.jobNumber"}},e._l(e.perSysUserList,function(e){return r("el-option",{key:e.jobNumber,attrs:{label:e.label,value:e.jobNumber}})}))],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:21}},[r("el-form-item",{attrs:{label:"工号："}},[r("span",[e._v(e._s(e.addFormThree.jobNumber))]),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:!e.addFormThree.jobNumber,expression:"!addFormThree.jobNumber"}],staticClass:"placeholder"},[e._v("根据姓名搜索显示")])])],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:21}},[r("el-form-item",{attrs:{label:"角色："}},[r("span",[e._v(e._s("招生干部"))])])],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:21}},[r("el-form-item",{attrs:{label:"所在招生组：",prop:"orgName"}},[r("choose-adm-team-selcet",{attrs:{treeData:e.admissionsTeamList},on:{change:e.admiTeamChange},model:{value:e.addFormThree.orgName,callback:function(a){e.$set(e.addFormThree,"orgName",a)},expression:"addFormThree.orgName"}})],1)],1)],1)],1),e._v(" "),r("el-form",{directives:[{name:"show",rawName:"v-show",value:"4"===e.dialogType,expression:"dialogType === '4'"}],ref:"addFormFour",attrs:{model:e.addFormFour,rules:e.rules,"label-width":"150px"}},[r("el-row",[r("el-col",{attrs:{span:21}},[r("el-form-item",{attrs:{label:"选择卸任角色：",prop:"checkBox"}},[r("el-checkbox-group",{model:{value:e.addFormFour.checkBox,callback:function(a){e.$set(e.addFormFour,"checkBox",a)},expression:"addFormFour.checkBox"}},[r("el-checkbox",{attrs:{label:"1"}},[e._v("一级组长")]),e._v(" "),r("el-checkbox",{attrs:{label:"2"}},[e._v("二级组长")])],1)],1)],1)],1),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.addFormFour.checkBox.includes("1"),expression:"addFormFour.checkBox.includes('1')"}]},[r("el-row",[r("el-col",{attrs:{span:21}},[r("el-form-item",{attrs:{label:"所在招生组："}},[r("span",[e._v(e._s(e.addFormFour.list[0].organization))])])],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:21}},[r("el-form-item",{attrs:{label:"现任组长："}},[r("span",[e._v(e._s(e.addFormFour.username))])])],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:21}},[r("el-form-item",{attrs:{label:"现任组长工号："}},[r("span",[e._v(e._s(e.addFormFour.jobNumber))])])],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:21}},[r("el-form-item",{attrs:{label:"新任组长：",prop:"list.0.succeedNumber",rules:{required:!0,message:"请选择新任组长",trigger:"change"}}},[r("el-select",{staticStyle:{width:"100%"},attrs:{filterable:"",placeholder:"请输入姓名模糊搜索",clearable:""},on:{change:function(a){e.multipleCadreChange(a,0)}},model:{value:e.addFormFour.list[0].succeedNumber,callback:function(a){e.$set(e.addFormFour.list[0],"succeedNumber",a)},expression:"addFormFour.list[0].succeedNumber"}},e._l(e.cadreList,function(e){return r("el-option",{key:e.userId,attrs:{label:e.username+"（"+e.jobNumber+"）",value:e.userId}})}))],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:21}},[r("el-form-item",{attrs:{label:"新任组长工号："}},[r("span",[e._v(e._s(e.addFormFour.list[0].jobNumber))]),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:!e.addFormFour.list[0].jobNumber,expression:"!addFormFour.list[0].jobNumber"}],staticClass:"placeholder"},[e._v("根据姓名搜索显示")])])],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:21}},[r("el-form-item",{attrs:{label:"状态：",prop:"list[0].status",rules:{required:!0,message:"请选择状态",trigger:"change"}}},[r("el-radio-group",{model:{value:e.addFormFour.list[0].status,callback:function(a){e.$set(e.addFormFour.list[0],"status",a)},expression:"addFormFour.list[0].status"}},[r("el-radio",{attrs:{label:1}},[e._v("启用")]),e._v(" "),r("el-radio",{attrs:{label:2}},[e._v("禁用")])],1)],1)],1)],1)],1),e._v(" "),r("el-row",{directives:[{name:"show",rawName:"v-show",value:e.addFormFour.checkBox.includes("1")&&e.addFormFour.checkBox.includes("2"),expression:"addFormFour.checkBox.includes('1') && addFormFour.checkBox.includes('2')"}],staticClass:"split_line"}),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.addFormFour.checkBox.includes("2"),expression:"addFormFour.checkBox.includes('2')"}]},[r("el-row",[r("el-col",{attrs:{span:21}},[r("el-form-item",{attrs:{label:"所在招生组："}},[r("span",[e._v(e._s(e.addFormFour.list[1].organization))])])],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:21}},[r("el-form-item",{attrs:{label:"现任组长："}},[r("span",[e._v(e._s(e.addFormFour.username))])])],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:21}},[r("el-form-item",{attrs:{label:"现任组长工号："}},[r("span",[e._v(e._s(e.addFormFour.jobNumber))])])],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:21}},[r("el-form-item",{attrs:{label:"新任组长：",prop:"list[1].succeedNumber",rules:{required:!0,message:"请选择状态",trigger:"change"}}},[r("el-select",{staticStyle:{width:"100%"},attrs:{filterable:"",placeholder:"请输入姓名模糊搜索",clearable:""},on:{change:function(a){e.multipleCadreChange(a,1)}},model:{value:e.addFormFour.list[1].succeedNumber,callback:function(a){e.$set(e.addFormFour.list[1],"succeedNumber",a)},expression:"addFormFour.list[1].succeedNumber"}},e._l(e.cadreList,function(e){return r("el-option",{key:e.userId,attrs:{label:e.username+"（"+e.jobNumber+"）",value:e.userId}})}))],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:21}},[r("el-form-item",{attrs:{label:"新任组长工号："}},[r("span",[e._v(e._s(e.addFormFour.list[1].jobNumber))]),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:!e.addFormFour.list[1].jobNumber,expression:"!addFormFour.list[1].jobNumber"}],staticClass:"placeholder"},[e._v("根据姓名搜索显示")])])],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:21}},[r("el-form-item",{attrs:{label:"状态：",prop:"list[1].status",rules:{required:!0,message:"请选择状态",trigger:"change"}}},[r("el-radio-group",{model:{value:e.addFormFour.list[1].status,callback:function(a){e.$set(e.addFormFour.list[1],"status",a)},expression:"addFormFour.list[1].status"}},[r("el-radio",{attrs:{label:1}},[e._v("启用")]),e._v(" "),r("el-radio",{attrs:{label:2}},[e._v("禁用")])],1)],1)],1)],1)],1)],1),e._v(" "),r("el-form",{directives:[{name:"show",rawName:"v-show",value:"5"===e.dialogType,expression:"dialogType === '5'"}],ref:"addFormFive",attrs:{model:e.addFormFive,rules:e.rules,"label-width":"150px"}},[r("el-row",[r("el-col",{attrs:{span:21}},[r("el-form-item",{attrs:{label:"所在招生组："}},[r("span",[e._v(e._s(e.addFormFive.organization))])])],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:21}},[r("el-form-item",{attrs:{label:"现任组长："}},[r("span",[e._v(e._s(e.addFormFive.username))])])],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:21}},[r("el-form-item",{attrs:{label:"现任组长工号："}},[r("span",[e._v(e._s(e.addFormFive.jobNumber))])])],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:21}},[r("el-form-item",{attrs:{label:"新任组长：",prop:"succeedNumber"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{filterable:"",placeholder:"请输入姓名模糊搜索",clearable:""},on:{change:e.singleCadreChange},model:{value:e.addFormFive.succeedNumber,callback:function(a){e.$set(e.addFormFive,"succeedNumber",a)},expression:"addFormFive.succeedNumber"}},e._l(e.cadreList,function(e){return r("el-option",{key:e.userId,attrs:{label:e.username+"（"+e.jobNumber+"）",value:e.userId}})}))],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:21}},[r("el-form-item",{attrs:{label:"新任组长工号："}},[r("span",[e._v(e._s(e.addFormFive.newJobNumber))]),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:!e.addFormFive.newJobNumber,expression:"!addFormFive.newJobNumber"}],staticClass:"placeholder"},[e._v("根据姓名搜索显示")])])],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:21}},[r("el-form-item",{attrs:{label:"状态：",prop:"status"}},[r("el-radio-group",{model:{value:e.addFormFive.status,callback:function(a){e.$set(e.addFormFive,"status",a)},expression:"addFormFive.status"}},[r("el-radio",{attrs:{label:"1"}},[e._v("启用")]),e._v(" "),r("el-radio",{attrs:{label:"2"}},[e._v("禁用")])],1)],1)],1)],1)],1),e._v(" "),r("el-form",{directives:[{name:"show",rawName:"v-show",value:"6"===e.dialogType,expression:"dialogType === '6'"}],ref:"addFormSix",attrs:{model:e.addFormSix,rules:e.rules,"label-width":"150px"}},[r("el-row",[r("el-col",{attrs:{span:21}},[r("el-form-item",{attrs:{label:"工号："}},[r("span",[e._v(e._s(e.addFormSix.jobNumber))])])],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:21}},[r("el-form-item",{attrs:{label:"姓名："}},[r("span",[e._v(e._s(e.addFormSix.username))])])],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:21}},[r("el-form-item",{attrs:{label:"身份证号："}},[r("span",[e._v(e._s(e.addFormSix.idCard))])])],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:21}},[r("el-form-item",{attrs:{label:"所在招生组：",prop:"orgName"}},[r("choose-adm-team-selcet",{attrs:{echoId:e.addFormSix.orgId,treeData:e.admissionsTeamList},on:{change:e.adjustTeamChange},model:{value:e.addFormSix.orgName,callback:function(a){e.$set(e.addFormSix,"orgName",a)},expression:"addFormSix.orgName"}})],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:21}},[r("el-form-item",{attrs:{label:"角色："}},[r("span",[e._v(e._s("招生干部"))])])],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:21}},[r("el-form-item",{attrs:{label:"状态：",prop:"status"}},[r("el-radio-group",{model:{value:e.addFormSix.status,callback:function(a){e.$set(e.addFormSix,"status",a)},expression:"addFormSix.status"}},[r("el-radio",{attrs:{label:"1"}},[e._v("启用")]),e._v(" "),r("el-radio",{attrs:{label:"2"}},[e._v("禁用")])],1)],1)],1)],1)],1),e._v(" "),r("el-form",{directives:[{name:"show",rawName:"v-show",value:"7"===e.dialogType,expression:"dialogType === '7'"}],ref:"addFormSeven",attrs:{model:e.addFormSeven,rules:e.rules,"label-width":"150px"}},[r("el-row",[r("el-col",{attrs:{span:21}},[r("el-form-item",{attrs:{label:"级别："}},[r("span",[e._v(e._s("1"===e.addFormSeven.level?"一级招生组":"2"===e.addFormSeven.level?"二级招生组":""))])])],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:21}},[r("el-form-item",{attrs:{label:"招生组名称："}},[r("el-input",{attrs:{placeholder:"请输入"},model:{value:e.addFormSeven.groupName,callback:function(a){e.$set(e.addFormSeven,"groupName",a)},expression:"addFormSeven.groupName"}})],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:21}},[r("el-form-item",{attrs:{label:"状态：",prop:"status"}},[r("el-radio-group",{model:{value:e.addFormSeven.status,callback:function(a){e.$set(e.addFormSeven,"status",a)},expression:"addFormSeven.status"}},[r("el-radio",{attrs:{label:"1"}},[e._v("启用")]),e._v(" "),r("el-radio",{attrs:{label:"2"}},[e._v("禁用")])],1)],1)],1)],1)],1),e._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(a){e.closeDialog("addForm")}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:function(a){e.submitForm("addForm")}}},[e._v("确 定")])],1)],1)],1),e._v(" "),r("el-row",{staticClass:"table_row"},[r("el-table",{ref:"roleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,"tooltip-effect":"dark"},on:{"selection-change":e.handleSelectionChange}},[r("el-table-column",{attrs:{type:"selection"}}),e._v(" "),r("el-table-column",{attrs:{prop:"username",label:"姓名"},scopedSlots:e._u([{key:"default",fn:function(a){return[r("a",{on:{click:function(r){r.preventDefault(),e.toDetailInfo(a)}}},[e._v(e._s(a.row.username))])]}}])}),e._v(" "),r("el-table-column",{attrs:{prop:"jobNumber",label:"工号"}}),e._v(" "),r("el-table-column",{attrs:{prop:"organization",label:"所在招生组","show-overflow-tooltip":""}}),e._v(" "),r("el-table-column",{attrs:{prop:"role",label:"角色","show-overflow-tooltip":""}}),e._v(" "),r("el-table-column",{attrs:{prop:"mobile",label:"联系方式","show-overflow-tooltip":""}}),e._v(" "),r("el-table-column",{attrs:{label:"状态",width:"150"},scopedSlots:e._u([{key:"default",fn:function(a){return[r("el-switch",{staticStyle:{display:"block"},attrs:{"active-value":"1","inactive-value":"2","inactive-color":"#ccc","active-text":"启用","inactive-text":"禁用"},on:{change:function(r){e.changeStatus(r,a)}},model:{value:a.row.status,callback:function(r){e.$set(a.row,"status",r)},expression:"scope.row.status"}})]}}])}),e._v(" "),r("el-table-column",{attrs:{prop:"address",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(a){return["3"===a.row.roleType?r("a",{staticClass:"operate_item",on:{click:function(r){r.preventDefault(),e.adjustTableItem(a)}}},[e._v("调整")]):e._e(),e._v(" "),"3"!==a.row.roleType?r("a",{staticClass:"operate_item",on:{click:function(r){r.preventDefault(),e.retireTableItem(a)}}},[e._v("卸任")]):e._e(),e._v(" "),"3"===a.row.roleType?r("a",{staticClass:"operate_item",on:{click:function(r){r.preventDefault(),e.delTableItem(a)}}},[e._v("删除")]):e._e()]}}])})],1)],1),e._v(" "),r("el-row",{staticClass:"pagination_row"},[r("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.tableParams.pageNumber,limit:e.tableParams.pageSize},on:{"update:page":function(a){e.$set(e.tableParams,"pageNumber",a)},"update:limit":function(a){e.$set(e.tableParams,"pageSize",a)},pagination:e.paginationChange}})],1)],1)],1)],1)},[],!1,null,"02e53218",null);b.options.__file="list.vue";a.default=b.exports},u7NN:function(e,a,r){}}]);