(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-ce1d"],{"/umX":function(e,t,i){"use strict";t.__esModule=!0;var o=function(e){return e&&e.__esModule?e:{default:e}}(i("9dlP"));t.default=function(e,t,i){return t in e?(0,o.default)(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}},"5p6C":function(e,t,i){"use strict";i.r(t);var o=i("cLjf"),r=i.n(o),n=i("hDQ3"),s=i.n(n),a={components:{commonEdit:i("YuVo").a},data:function(){return{id:""}},methods:{editRequest:function(e){var t=this;return s()(r.a.mark(function i(){var o;return r.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,t.$post("updataCheck",e);case 2:if("1000"!==(o=i.sent).returnCode){i.next=8;break}t.$message.success("修改成功"),t.$router.go(-1),i.next=9;break;case 8:return i.abrupt("return",t.$message.error(o.message));case 9:case"end":return i.stop()}},i,t)}))()}},created:function(){this.id=this.$route.query.id}},l=i("ZrdR"),m=Object(l.a)(a,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"compile"},[t("common-edit",{attrs:{docId:this.id,type:"4"},on:{editRequest:this.editRequest}})],1)},[],!1,null,null,null);m.options.__file="edit.vue";t.default=m.exports},"7U5k":function(e,t,i){},"9dlP":function(e,t,i){e.exports={default:i("aA0A"),__esModule:!0}},CgQs:function(e,t,i){},EgAz:function(e,t,i){"use strict";var o=i("CgQs");i.n(o).a},McxH:function(e,t,i){var o=i("6qcy");o(o.S+o.F*!i("m4jn"),"Object",{defineProperty:i("yWpJ").f})},YuVo:function(e,t,i){"use strict";var o=i("cLjf"),r=i.n(o),n=i("hDQ3"),s=i.n(n),a=i("/umX"),l=i.n(a),m={data:function(){return{pickerOptions:{},form:{title:"",content:"",informType:"",needReply:"2",informTimely:"2",needSignIn:"2",columnName:"",columnType:"",hintTime:"",searchSite:"",site:"",scop:"",longitude:"",dimensionality:"",download:"",orgList:[],publishTime:"",informWayList:[]},optionList:[{option:""}],relus:{title:[{required:!0,message:"请输入标题",trigger:"blur"}],columnName:[{required:!0}],content:[{required:!0,message:"请输入正文",trigger:"blur"}],informType:[{required:!0,message:"请选择通知对象",trigger:"blur"}]},fileList:[],itemDisplay:!0,setTxt:"通知设置:",nameArr:[],pathArr:[],setObjId:[],echoData:{},accept:"",dataEntityList:[],publishTime:[{validator:function(e,t,i){if(t){var o=(new Date).getTime();t<(o+=36e5)?i(new Error("只能选择当前时间1个小时之后的时间")):i()}else i()},trigger:"change"}]}},props:{type:{type:String,default:"1"},docId:{type:String,required:!0}},methods:{getMapInfo:function(e){this.form.searchSite=e.searchText,this.form.site=e.address,this.form.scop=e.radius,this.form.longitude=e.center.lng,this.form.dimensionality=e.center.lat},arrTest:function(e,t){for(var i={},o=0;o<e.length;o++){if(i[e[o][t]])return!1;i[e[o][t]]=e[o]}return i},selected:function(e,t){this.dataEntityList.forEach(function(i){e==i.dataValue&&(t.id=i.dataKey)})},submitForm:function(e,t){var i=this;if(2==this.form.needReply&&(this.optionList=[{option:""}]),1==this.form.informTimely?this.form.hintTime=this.form.hintTime:this.form.hintTime="","1"==this.form.informTimely&&!this.form.hintTime)return this.$message.error("请选择提示时间");if("1"==this.form.informTimely&&0==this.form.informWayList.length)return this.$message.error("请选择提示方式");if(1==this.form.needSignIn?(this.form.site=this.form.site,this.form.scop=this.form.scop):(this.form.site="",this.form.scop=""),!this.setObjId&&"1"!==this.form.informType)return this.$message.error("通知对象人员未勾选");"2"===this.form.informType?(this.form.orgList=this.setObjId,this.form.roleList=[],this.form.userList=[]):"3"===this.form.informType?(this.form.roleList=this.setObjId,this.form.orgList=[],this.form.userList=[]):"4"===this.form.informType&&(this.form.userList=this.setObjId,this.form.roleList=[],this.form.orgList=[]);var o=(new Date).getTime();return o+=36e5,this.form.publishTime&&this.form.publishTime<o?this.$message.error("只能选择当前时间1个小时之后的时间"):this.arrTest(this.form.optionList,"id")?void this.$refs[e].validate(function(e){return e?!("1"===i.form.needSignIn&&!i.$refs.checkInMap.validate())&&void i.$emit("editRequest",(o={content:i.$base64.encode(i.form.content),columnType:i.type,status:t.status,saveStatus:t.status,id:i.form.id,title:i.form.title,columnName:i.form.columnName,informType:i.form.informType,orgList:i.form.orgList,needReply:i.form.needReply,informTimely:i.form.informTimely,needSignIn:i.form.needSignIn,fileName:i.form.fileName,filePath:i.form.filePath,optionList:i.optionList,hintTime:i.form.hintTime,site:i.form.site,scop:i.form.scop,download:i.form.download},l()(o,"orgList",i.form.orgList),l()(o,"roleList",i.form.roleList),l()(o,"userList",i.form.userList),l()(o,"longitude",i.form.longitude),l()(o,"dimensionality",i.form.dimensionality),l()(o,"searchSite",i.form.searchSite),l()(o,"publishTime",i.form.publishTime),l()(o,"informWayList",i.form.informWayList),o)):(console.log("error submit!!"),!1);var o}):this.$message.error("反馈不能有重复的选项")},radioClick:function(e,t){this.form.informType!==t&&this.$refs.person.clearCheckbox()},getFiles:function(e){var t=this;this.fileList.forEach(function(e){t.nameArr.push(e.name),t.pathArr.push(e.url)}),this.nameArr.push(e.fileName),this.pathArr.push(e.filePath);var i=this.nameArr.filter(function(e,t,i){return i.indexOf(e)===t}),o=this.pathArr.filter(function(e,t,i){return i.indexOf(e)===t});this.form.fileName=i.join(","),this.form.filePath=o.join(",")},removeFile:function(e){var t=e.file.name,i=this.form.fileName.split(","),o=i.indexOf(t);i.splice(o,1);this.form.fileName=i.join(",");var r=e.file.url,n=this.form.filePath.split(","),s=n.indexOf(r);n.splice(s,1);this.form.filePath=n.join(",")},abolish:function(){this.$router.go(-1)},columnName:function(){var e="";switch(this.type){case"1":e="会议通知";break;case"2":e="培训通知";break;case"3":e="系统通知";break;case"4":e="文件公示"}return this.form.columnName=e,e},getDetails:function(){var e=this;return s()(r.a.mark(function t(){var i,o,n,s;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$post("userCheck",{id:e.docId});case 2:if("1000"!==(i=t.sent).returnCode){t.next=17;break}e.form=i.dataInfo,e.form.content=e.$base64.decode(e.form.content),e.form.scop=e.form.scop,e.optionList=e.form.optionList,o=e.form.fileName.split(","),n=e.form.filePath.split(","),s=[],o.forEach(function(e,t){s.push({name:e,url:n[t]})}),s.forEach(function(t){""!=t.name?e.fileList=s:e.fileList=[]}),"2"===e.form.informType?e.setObjId=e.form.orgList:"3"===e.form.informType?e.setObjId=e.form.roleList:"4"===e.form.informType&&(e.setObjId=e.form.userList),"1"===e.form.needSignIn&&(e.echoData={center:[i.dataInfo.longitude,i.dataInfo.dimensionality],radius:i.dataInfo.scop,searchText:i.dataInfo.searchSite,address:i.dataInfo.site}),t.next=18;break;case 17:return t.abrupt("return",e.$message(i.message));case 18:case"end":return t.stop()}},t,e)}))()},moreOption:function(){this.optionList.push({option:"",id:""})},delopt:function(e){this.optionList.splice(e,1)},init:function(){var e=this;return s()(r.a.mark(function t(){var i;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.getDetails(),3==e.type&&(e.itemDisplay=!1),4==e.type?(e.setTxt="公告设置：",e.limit=1,e.accept="application/pdf"):e.limit=1e3,t.next=6,e.getDictionaryData(["1012_hfxx"]);case 6:i=t.sent,e.dataEntityList=i[0].dataEntityList;case 8:case"end":return t.stop()}},t,e)}))()}},created:function(){this.init()}},f=(i("EgAz"),i("zsbm"),i("ZrdR")),c=Object(f.a)(m,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"meetedit"},[i("div",{staticClass:"editann"},[i("el-form",{ref:"ruleForm",attrs:{model:e.form,rules:e.relus,"label-width":"110px"}},[i("el-row",[i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"标题:",prop:"title"}},[i("el-input",{model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1)],1),e._v(" "),i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"栏目:",prop:"columnName"}},[i("span",[e._v(e._s(e.columnName()))])])],1),e._v(" "),i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"发布时间:",prop:"publishTime"}},[i("el-date-picker",{attrs:{type:"datetime",placeholder:"请选择","value-format":"timestamp","picker-options":e.pickerOptions},model:{value:e.form.publishTime,callback:function(t){e.$set(e.form,"publishTime",t)},expression:"form.publishTime"}})],1)],1),e._v(" "),4==e.type?i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"公示有效期:",prop:"period"}},[i("el-date-picker",{attrs:{type:"datetime",placeholder:"请选择","value-format":"timestamp"},model:{value:e.form.period,callback:function(t){e.$set(e.form,"period",t)},expression:"form.period"}})],1)],1):e._e()],1),e._v(" "),4!=e.type?i("el-form-item",{staticClass:"item_label",attrs:{label:"正文:",prop:"content"}},[i("tinymce",{model:{value:e.form.content,callback:function(t){e.$set(e.form,"content",t)},expression:"form.content"}})],1):e._e(),e._v(" "),i("el-form-item",{attrs:{label:"上传文件:"}},[i("file-upload",{attrs:{fileLists:e.fileList,limit:e.limit,accept:e.accept},on:{getFiles:e.getFiles,removeFile:e.removeFile}})],1),e._v(" "),i("el-form-item",{staticClass:"item_label notify_object",attrs:{label:e.setTxt,prop:"informType"}},[4==e.type?i("span",[e._v("公示对象：")]):i("span",[e._v("通知对象：")]),e._v(" "),i("el-radio-group",{model:{value:e.form.informType,callback:function(t){e.$set(e.form,"informType",t)},expression:"form.informType"}},[i("el-radio",{attrs:{label:"1"},nativeOn:{click:function(t){e.radioClick(t,"1")}}},[e._v("全部成员")]),e._v(" "),i("el-radio",{attrs:{label:"2"},nativeOn:{click:function(t){e.radioClick(t,"2")}}},[e._v("指定招生组")]),e._v(" "),i("el-radio",{attrs:{label:"3"},nativeOn:{click:function(t){e.radioClick(t,"3")}}},[e._v("指定角色")]),e._v(" "),i("el-radio",{attrs:{label:"4"},nativeOn:{click:function(t){e.radioClick(t,"4")}}},[e._v("自定义成员")])],1)],1),e._v(" "),i("specified-object",{ref:"person",attrs:{type:e.form.informType},model:{value:e.setObjId,callback:function(t){e.setObjId=t},expression:"setObjId"}}),e._v(" "),e.itemDisplay?i("el-form-item",{directives:[{name:"show",rawName:"v-show",value:4!=e.type,expression:"type != 4"}],attrs:{label:"是否需反馈:"}},[i("el-radio",{attrs:{label:"2"},model:{value:e.form.needReply,callback:function(t){e.$set(e.form,"needReply",t)},expression:"form.needReply"}},[e._v("否")]),e._v(" "),i("el-radio",{attrs:{label:"1"},model:{value:e.form.needReply,callback:function(t){e.$set(e.form,"needReply",t)},expression:"form.needReply"}},[e._v("是")]),e._v(" "),1==e.form.needReply?i("div",{staticClass:"feedback"},[e._l(e.form.optionList,function(t,o){return i("p",{key:o},[e._v("\n            选项"+e._s(o+1)+"：\n            "),e._v(" "),i("el-select",{attrs:{placeholder:"请选择",clearable:""},on:{change:function(i){e.selected(i,t)}},model:{value:t.option,callback:function(i){e.$set(t,"option",i)},expression:"val.option"}},e._l(e.dataEntityList,function(e){return i("el-option",{key:e.dataKey,attrs:{label:e.dataValue,value:e.dataValue}})})),e._v(" "),0!=o?i("i",{staticClass:"el-icon-circle-close",staticStyle:{color:"red","margin-left":"5px"},on:{click:function(t){e.delopt(o)}}}):e._e()],1)}),e._v(" "),i("el-button",{staticStyle:{width:"250px"},attrs:{type:"submit"},on:{click:e.moreOption}},[e._v("＋添加更多选项")])],2):e._e()],1):e._e(),e._v(" "),i("el-form-item",{attrs:{label:"是否及时通知:"}},[i("el-radio",{attrs:{label:"2"},model:{value:e.form.informTimely,callback:function(t){e.$set(e.form,"informTimely",t)},expression:"form.informTimely"}},[e._v("否")]),e._v(" "),i("el-radio",{attrs:{label:"1"},model:{value:e.form.informTimely,callback:function(t){e.$set(e.form,"informTimely",t)},expression:"form.informTimely"}},[e._v("是")]),e._v(" "),1==e.form.informTimely?i("div",{staticClass:"block notifytime"},[i("span",{staticClass:"demonstration"},[e._v("提示时间:")]),e._v(" "),i("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间","value-format":"timestamp"},model:{value:e.form.hintTime,callback:function(t){e.$set(e.form,"hintTime",t)},expression:"form.hintTime"}})],1):e._e(),e._v(" "),1==e.form.informTimely?i("div",{staticClass:"block notifytime"},[i("span",{staticClass:"demonstration"},[e._v("提示方式:")]),e._v(" "),i("el-checkbox-group",{model:{value:e.form.informWayList,callback:function(t){e.$set(e.form,"informWayList",t)},expression:"form.informWayList"}},[i("el-checkbox",{attrs:{label:"1"}},[e._v("短信")]),e._v(" "),i("el-checkbox",{attrs:{label:"2"}},[e._v("微信")])],1)],1):e._e()],1),e._v(" "),e.itemDisplay?i("el-form-item",{directives:[{name:"show",rawName:"v-show",value:4!=e.type,expression:"type != 4"}],attrs:{label:"是否需签到:"}},[i("el-radio",{attrs:{label:"2"},model:{value:e.form.needSignIn,callback:function(t){e.$set(e.form,"needSignIn",t)},expression:"form.needSignIn"}},[e._v("否")]),e._v(" "),i("el-radio",{attrs:{label:"1"},model:{value:e.form.needSignIn,callback:function(t){e.$set(e.form,"needSignIn",t)},expression:"form.needSignIn"}},[e._v("是")])],1):e._e(),e._v(" "),i("check-in-map",{ref:"checkInMap",attrs:{showMap:e.itemDisplay&&"1"===e.form.needSignIn,echoData:e.echoData},on:{complete:e.getMapInfo}}),e._v(" "),4==e.type?i("el-form-item",{attrs:{label:"是否可下载文件:","label-width":"120px"}},[i("el-radio",{attrs:{label:"2"},model:{value:e.form.download,callback:function(t){e.$set(e.form,"download",t)},expression:"form.download"}},[e._v("否")]),e._v(" "),i("el-radio",{attrs:{label:"1"},model:{value:e.form.download,callback:function(t){e.$set(e.form,"download",t)},expression:"form.download"}},[e._v("是")])],1):e._e()],1),e._v(" "),i("div",{staticClass:"btn_group"},[i("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(t){e.submitForm("ruleForm",{status:2})}}},[e._v("确定")]),e._v(" "),i("el-button",{attrs:{type:"primary",plain:""},on:{click:function(t){e.submitForm("ruleForm",{status:1})}}},[e._v("暂存")]),e._v(" "),i("el-button",{attrs:{type:"submit"},on:{click:e.abolish}},[e._v("取消")])],1)],1)])},[],!1,null,"257832b0",null);c.options.__file="commonEdit.vue";t.a=c.exports},aA0A:function(e,t,i){i("McxH");var o=i("o4ww").Object;e.exports=function(e,t,i){return o.defineProperty(e,t,i)}},zsbm:function(e,t,i){"use strict";var o=i("7U5k");i.n(o).a}}]);