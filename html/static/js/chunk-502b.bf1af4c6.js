(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-502b"],{"14zA":function(t,e,a){"use strict";a.r(e);var n={components:{commonDetail:a("eFKf").a},data:function(){return{}}},o=a("ZrdR"),i=Object(o.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("common-detail",{attrs:{type:"3"}})],1)},[],!1,null,null,null);i.options.__file="detail.vue";e.default=i.exports},"75oV":function(t,e,a){"use strict";var n=a("G48b");a.n(n).a},G48b:function(t,e,a){},cIMB:function(t,e,a){"use strict";var n=a("d8x/");a.n(n).a},"d8x/":function(t,e,a){},eFKf:function(t,e,a){"use strict";var n=a("6ZY3"),o=a.n(n),i=a("cLjf"),s=a.n(i),r=a("hDQ3"),l=a.n(r),c=a("8SHQ"),m={data:function(){return{imageBaseUrl:c.b,Host:c.a,id:"",formData:{informType:"",needReply:"",optionList:[],informTimely:"",needSignIn:"",scop:""},coupelForm:{username:"",organization:"",readStatus:"",signInStatus:"",pageSize:20,pageNumber:1},content:"",elIconTop:!0,rlIconBottom:!1,spreadShow:!0,tableData:[],total:0,feedRetraction:!0,FeedExpansion:!1,readingSituation:!0,fileSetting:!0,setTxt:"通知对象:",fileList:[],ids:[],setObjId:[],echoData:{},signatureId:[]}},props:{type:{type:String,default:"1"}},methods:{handleData:function(){console.log("ids:",this.ids)},getDetail:function(){var t=this;return l()(s.a.mark(function e(){var a,n,o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$post("queryCheck",{id:t.id});case 2:"1000"===(a=e.sent).returnCode?(t.formData=a.dataInfo,t.formData.scop=t.formData.scop/1e3,t.content=t.$base64.decode(t.formData.content),t.formData.fileName&&(n=t.formData.fileName.split(","),o=t.formData.filePath.split(","),n.forEach(function(e,a){t.fileList.push({name:e,url:o[a]})})),"2"===t.formData.informType?t.setObjId=t.formData.orgList:"3"===t.formData.informType?t.setObjId=t.formData.roleList:"4"===t.formData.informType&&(t.setObjId=t.formData.userList),"1"===t.formData.needSignIn&&(t.echoData={center:[a.dataInfo.longitude,a.dataInfo.dimensionality],radius:a.dataInfo.scop,searchText:a.dataInfo.searchSite,address:a.dataInfo.site})):t.$message.error(a.message);case 4:case"end":return e.stop()}},e,t)}))()},returnBtn:function(){this.$router.go(-1)},iconTop:function(){this.elIconTop=!1,this.rlIconBottom=!0},iconBottom:function(){this.rlIconBottom=!1,this.elIconTop=!0},retractSearch:function(){this.spreadShow=!1},launchSearch:function(){this.spreadShow=!0},signature:function(t){var e=[];e.push(t),this.supplementarySignature(e)},handleSelectionChange:function(t){var e=[];t.forEach(function(t){e.push(t.id)}),this.ids=e},allSign:function(){0!==this.ids.length?this.supplementarySignature(this.ids):this.supplementarySignature(this.signatureId)},supplementarySignature:function(t){var e=this;return l()(s.a.mark(function a(){var n;return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.$post("retroactive",{replyIds:t});case 2:"1000"===(n=a.sent).returnCode?(e.$message.success("补签成功"),e.getTableData(),e.signatureId=[]):e.$message.warning(n.msg);case 4:case"end":return a.stop()}},a,e)}))()},searchBtn:function(){this.getTableData()},getTableData:function(){var t=this;return l()(s.a.mark(function e(){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$post("replayInfo",o()({},t.coupelForm,{announcementId:t.id}));case 2:"1000"===(a=e.sent).returnCode&&(t.tableData=a.records,t.tableData.forEach(function(e){t.signatureId.push(e.id)}),t.total=+a.total);case 4:case"end":return e.stop()}},e,t)}))()},launchBtn:function(){this.feedRetraction=!1,this.FeedExpansion=!0},retractBtn:function(){this.FeedExpansion=!1,this.feedRetraction=!0},paginationChange:function(t){this.coupelForm.pageNumber=t.page,this.coupelForm.pageSize=t.limit,this.getTableData()}},created:function(){this.id=this.$route.query.id,this.id&&(this.getDetail(),this.getTableData()),"3"==this.type&&(this.readingSituation=!1),"4"==this.type&&(this.fileSetting=!1,this.readingSituation=!1,this.setTxt="公示对象：")}},d=(a("75oV"),a("cIMB"),a("ZrdR")),p=Object(d.a)(m,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"notidetails"},[a("div",{staticClass:"particulars"},[a("div",{staticClass:"container"},[4!=t.type?a("div",{staticClass:"content"},[a("h4",[t._v(t._s(t.formData.title))]),t._v(" "),t.readingSituation?a("p",{directives:[{name:"show",rawName:"v-show",value:t.fileSetting,expression:"fileSetting"}],staticClass:"createime"},[t._v("发布时间:"+t._s(t._f("filterTime")(t.formData.createdTime,"YYYY-MM-DD hh:mm:ss")))]):t._e(),t._v(" "),t.readingSituation?t._e():a("p",{staticClass:"createime"},[t._v("更新时间:"+t._s(t._f("filterTime")(t.formData.updatedTime,"YYYY-MM-DD hh:mm:ss")))]),t._v(" "),"2"==t.formData.sysInformType?a("div",{staticClass:"activity createime"},[a("span",[t._v("活动对象："+t._s("1"==t.formData.eventObject?"招生干部":"招生组"))]),t._v(" "),a("span",[t._v("活动开始时间："+t._s(t._f("filterTime")(t.formData.eventBegin,"YYYY-MM-DD hh:mm:ss")))]),t._v(" "),a("span",[t._v("活动结束时间："+t._s(t._f("filterTime")(t.formData.eventEnd,"YYYY-MM-DD hh:mm:ss")))])]):t._e(),t._v(" "),a("div",{staticClass:"conshow"},["3"==t.formData.sysInformType||"4"==t.formData.sysInformType?a("p",[t._v(t._s(t.formData.content))]):a("p",{domProps:{innerHTML:t._s(t.content)}})])]):t._e(),t._v(" "),4==t.type?a("div",{staticClass:"downloadfile"},[a("embed",{staticClass:"embed",attrs:{src:t.imageBaseUrl+t.formData.filePath,type:"application/pdf"}})]):t._e(),t._v(" "),"3"!=t.formData.sysInformType&&"4"!=t.formData.sysInformType?a("div",{staticClass:"notifisettings"},[a("p",{staticClass:"title"},[4==t.type?a("span",[t._v("公告设置:")]):a("span",[t._v("通知设置:")]),t._v(" "),t.elIconTop?a("i",{staticClass:"el-icon-caret-top",staticStyle:{"font-size":"20px"},on:{click:t.iconTop}}):t._e(),t._v(" "),t.rlIconBottom?a("i",{staticClass:"el-icon-caret-bottom",staticStyle:{"font-size":"20px"},on:{click:t.iconBottom}}):t._e()]),t._v(" "),a("el-form",{directives:[{name:"show",rawName:"v-show",value:t.rlIconBottom,expression:"rlIconBottom"}],ref:"ruleForm",attrs:{model:t.formData,"label-width":"110px"}},[a("el-form-item",{staticClass:"item_label notify_object",attrs:{label:t.setTxt,prop:"informType"}},[a("el-radio-group",{attrs:{disabled:"disabled"},model:{value:t.formData.informType,callback:function(e){t.$set(t.formData,"informType",e)},expression:"formData.informType"}},[a("el-radio",{attrs:{label:"1"}},[t._v("全部成员")]),t._v(" "),a("el-radio",{attrs:{label:"2"}},[t._v("指定招生组")]),t._v(" "),a("el-radio",{attrs:{label:"3"}},[t._v("指定角色")]),t._v(" "),a("el-radio",{attrs:{label:"4"}},[t._v("自定义成员")])],1)],1),t._v(" "),a("specified-object",{ref:"person",attrs:{type:t.formData.informType,disabled:"disabled"},model:{value:t.setObjId,callback:function(e){t.setObjId=e},expression:"setObjId"}}),t._v(" "),t.readingSituation?a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:4!=t.type,expression:"type != 4"}],attrs:{label:"是否需反馈:"}},[a("el-radio",{attrs:{label:"2",disabled:"disabled"},model:{value:t.formData.needReply,callback:function(e){t.$set(t.formData,"needReply",e)},expression:"formData.needReply"}},[t._v("否")]),t._v(" "),a("el-radio",{attrs:{label:"1",disabled:"disabled"},model:{value:t.formData.needReply,callback:function(e){t.$set(t.formData,"needReply",e)},expression:"formData.needReply"}},[t._v("是")]),t._v(" "),1==t.formData.needReply?a("div",{staticClass:"feedback"},t._l(t.formData.optionList,function(e,n){return a("p",{key:n},[t._v("\n\t\t\t\t\t\t\t\t\t\t选项"+t._s(n+1)+"：\n\t\t\t\t\t\t\t\t\t\t"),a("span",{staticStyle:{width:"200px"},attrs:{type:"text"}},[t._v(t._s(e.option))])])})):t._e()],1):t._e(),t._v(" "),a("el-form-item",{attrs:{label:"是否及时通知:"}},[a("el-radio",{attrs:{label:"2",disabled:"disabled"},model:{value:t.formData.informTimely,callback:function(e){t.$set(t.formData,"informTimely",e)},expression:"formData.informTimely"}},[t._v("否")]),t._v(" "),a("el-radio",{attrs:{label:"1",disabled:"disabled"},model:{value:t.formData.informTimely,callback:function(e){t.$set(t.formData,"informTimely",e)},expression:"formData.informTimely"}},[t._v("是")])],1),t._v(" "),1==t.formData.informTimely?a("el-form-item",{attrs:{label:"提示时间:"}},[a("div",{staticClass:"block notifytime"},[a("span",{staticClass:"demonstration"},[t._v(t._s(t._f("filterTime")(t.formData.hintTime,"YYYY-MM-DD hh:mm:ss")))])])]):t._e(),t._v(" "),1==t.formData.informTimely?a("el-form-item",{attrs:{label:"提示方式:"}},[a("div",{staticClass:"block notifytime"},t._l(t.formData.informWayList,function(e,n){return a("span",{key:"val"+n,staticClass:"demonstration"},[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(1==e?"短信":2==e?"微信":"短信  微信")+"\n\t\t\t\t\t\t\t\t\t")])}))]):t._e(),t._v(" "),t.readingSituation?a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:4!=t.type,expression:"type != 4"}],attrs:{label:"是否需签到:"}},[a("el-radio",{attrs:{label:"2",disabled:"disabled"},model:{value:t.formData.needSignIn,callback:function(e){t.$set(t.formData,"needSignIn",e)},expression:"formData.needSignIn"}},[t._v("否")]),t._v(" "),a("el-radio",{attrs:{label:"1",disabled:"disabled"},model:{value:t.formData.needSignIn,callback:function(e){t.$set(t.formData,"needSignIn",e)},expression:"formData.needSignIn"}},[t._v("是")])],1):t._e(),t._v(" "),4==t.type?a("el-form-item",{attrs:{label:"是否可下载文件:","label-width":"120px"}},[a("el-radio",{attrs:{label:"2"},model:{value:t.formData.download,callback:function(e){t.$set(t.formData,"download",e)},expression:"formData.download"}},[t._v("否")]),t._v(" "),a("el-radio",{attrs:{label:"1"},model:{value:t.formData.download,callback:function(e){t.$set(t.formData,"download",e)},expression:"formData.download"}},[t._v("是")])],1):t._e(),t._v(" "),a("check-in-map",{attrs:{showMap:t.rlIconBottom&&"1"===t.formData.needSignIn,echoData:t.echoData,disabled:!0}})],1)],1):t._e(),t._v(" "),a("div",{staticClass:"retroaction"},[a("p",{staticClass:"title"},[t.readingSituation?a("span",{directives:[{name:"show",rawName:"v-show",value:4!=t.type,expression:"type !=4 "}]},[t._v("反馈情况:")]):t._e(),t._v(" "),t.readingSituation&&4!=t.type?t._e():a("span",[t._v("阅读情况:")]),t._v(" "),t.feedRetraction?a("i",{staticClass:"el-icon-caret-top",staticStyle:{"font-size":"20px"},on:{click:t.launchBtn}}):t._e(),t._v(" "),t.FeedExpansion?a("i",{staticClass:"el-icon-caret-bottom",staticStyle:{"font-size":"20px"},on:{click:t.retractBtn}}):t._e()]),t._v(" "),t.FeedExpansion?a("div",[t.spreadShow?a("el-form",{ref:"ruleForm",attrs:{model:t.coupelForm,"label-width":"90px"}},[a("el-col",{attrs:{span:5}},[a("el-form-item",{attrs:{label:"姓名:"}},[a("el-input",{model:{value:t.coupelForm.username,callback:function(e){t.$set(t.coupelForm,"username",e)},expression:"coupelForm.username"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:5}},[a("el-form-item",{attrs:{label:"所在招生组:"}},[a("el-input",{model:{value:t.coupelForm.organization,callback:function(e){t.$set(t.coupelForm,"organization",e)},expression:"coupelForm.organization"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:5}},[1==t.type||2==t.type?a("el-form-item",{attrs:{label:"阅读状态:"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择",clearable:""},model:{value:t.coupelForm.readStatus,callback:function(e){t.$set(t.coupelForm,"readStatus",e)},expression:"coupelForm.readStatus"}},[a("el-option",{attrs:{label:"已阅读",value:"1"}}),t._v(" "),a("el-option",{attrs:{label:"未阅读",value:"2"}})],1)],1):t._e()],1),t._v(" "),a("el-col",{attrs:{span:5}},[1==t.type||2==t.type?a("el-form-item",{attrs:{label:"签到状态:"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择",clearable:""},model:{value:t.coupelForm.signInStatus,callback:function(e){t.$set(t.coupelForm,"signInStatus",e)},expression:"coupelForm.signInStatus"}},[a("el-option",{attrs:{label:"已签到",value:"1"}}),t._v(" "),a("el-option",{attrs:{label:"未签到",value:"2"}})],1)],1):t._e()],1),t._v(" "),a("el-col",{attrs:{span:4}},[a("el-button",{staticClass:"searchbtn",attrs:{type:"primary"},on:{click:t.searchBtn}},[t._v("搜索")])],1)],1):t._e(),t._v(" "),a("div",{staticClass:"commondetail_container"},[a("div",{staticClass:"btn_container"},[1==t.type||2==t.type?a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.allSign}},[t._v("批量补签")]):t._e(),t._v(" "),a("a",{attrs:{href:t.Host+"/replayInfo/exportExcel?announcementId="+t.id+"&ids="+t.ids+"&username="+t.coupelForm.username+"&organization="+t.coupelForm.organization}},[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.handleData}},[t._v("批量导出")])],1),t._v(" "),t.spreadShow?a("el-button",{attrs:{size:"mini"},on:{click:t.retractSearch}},[t._v("收起搜索")]):t._e(),t._v(" "),t.spreadShow?t._e():a("el-button",{attrs:{size:"mini"},on:{click:t.launchSearch}},[t._v("展开搜索")])],1),t._v(" "),a("el-table",{ref:"roleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"","tooltip-effect":"dark"},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"username",label:"姓名",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"jobNumber",label:"工号",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"organization",label:"所在招生组",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"role",label:"角色",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"mobile",label:"联系方式",align:"center"}}),t._v(" "),t.readingSituation?a("el-table-column",{attrs:{prop:"replayOption",label:"回复反馈",align:"center"}}):t._e(),t._v(" "),t.readingSituation?a("el-table-column",{attrs:{label:"阅读状态",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(1==e.row.readStatus?" 已阅读:":"未阅读")+"\n\t\t\t\t\t\t\t\t\t")]}}])}):t._e(),t._v(" "),a("el-table-column",{attrs:{prop:"readTime",label:"阅读时间",align:"center"}}),t._v(" "),t.readingSituation?a("el-table-column",{attrs:{label:"签到状态",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(1==e.row.signInStatus?" 已签到":"未签到")+"\n\t\t\t\t\t\t\t\t\t")]}}])}):t._e(),t._v(" "),t.readingSituation?a("el-table-column",{attrs:{prop:"signInTime",label:"签到时间",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(t._f("filterTime")(e.row.signInTime,"YYYY-MM-DD hh:mm:ss"))+"\n\t\t\t\t\t\t\t\t\t")]}}])}):t._e(),t._v(" "),1==t.type||2==t.type?a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[2==e.row.signInStatus||""==e.row.signInStatus?a("span",{staticClass:"sign",on:{click:function(a){t.signature(e.row.id)}}},[t._v("补签")]):a("span",{attrs:{disabled:"disabled"}},[t._v("补签")])]}}])}):t._e()],1)],1),t._v(" "),a("div",{staticClass:"pagination"},[a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.coupelForm.pageNumber,limit:t.coupelForm.pageSize},on:{"update:page":function(e){t.$set(t.coupelForm,"pageNumber",e)},"update:limit":function(e){t.$set(t.coupelForm,"pageSize",e)},pagination:t.paginationChange}})],1)],1):t._e(),t._v(" "),a("div",{staticClass:"returnbtn"},[a("el-button",{attrs:{type:"primary"},on:{click:t.returnBtn}},[t._v("返回")])],1)])])])])},[],!1,null,"32870f5d",null);p.options.__file="commonDetail.vue";e.a=p.exports}}]);