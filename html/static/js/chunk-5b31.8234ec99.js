(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5b31"],{ODVt:function(t,e,a){},Px9x:function(t,e,a){"use strict";var o=a("ODVt");a.n(o).a},gp3X:function(t,e,a){"use strict";a.r(e);var o=a("cLjf"),i=a.n(o),n=a("hDQ3"),s=a.n(n),r=a("8SHQ"),c={data:function(){return{imageBaseUrl:r.b,Host:r.a,formData:{appId:"1",infoType:"1",infoTitle:"",typeKey:"",typeValue:"",sourceName:"",sourceUrl:"",noticeType:"",noticeObject:"",isDownload:""},records:[],relus:{noticeType:[{required:!0,message:"请选择",trigger:"change"}],isDownload:[{required:!0,message:"请选择",trigger:"change"}]},nameArr:[],pathArr:[],classify:[],fileList:[],list:[],elIconTop:!0,rlIconBottom:!1}},created:function(){this.appId=this.$route.query.id,this.appId&&this.qeury(this.appId)},methods:{qeury:function(t){var e=this;return s()(i.a.mark(function a(){var o;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.$post("dataInfoQuery",{id:t});case 2:if("1000"!==(o=a.sent).returnCode){a.next=10;break}e.formData=o.dataInfo,e.formData.noticeObject=e.formData.noticeObject.split(","),e.list=o.dataInfo.sourceUrl.split(","),console.log("回显formData",e.formData),a.next=11;break;case 10:return a.abrupt("return",e.$message(o.message));case 11:case"end":return a.stop()}},a,e)}))()},abolish:function(){this.$router.go(-1)},iconTop:function(){this.elIconTop=!1,this.rlIconBottom=!0},iconBottom:function(){this.elIconTop=!0,this.rlIconBottom=!1}}},l=(a("Px9x"),a("ZrdR")),d=Object(l.a)(c,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"policyVindcate_detail"},[a("div",{staticClass:"policy-box"},[a("div",{staticClass:"datum-detail"},[a("div",{staticClass:"datum-title"},[t._v(t._s(t.formData.infoTitle))]),t._v(" "),a("div",{staticClass:"page-view"},[a("span",[t._v("点击量："+t._s(t.formData.clickCount))])]),t._v(" "),t._l(t.list,function(e,o){return a("div",{key:o,staticClass:"datum-content"},[a("embed",{staticClass:"embed",attrs:{type:"application/pdf",src:t.imageBaseUrl+e}})])})],2),t._v(" "),a("div",{staticClass:"datum-buttom"},[a("p",{staticClass:"title"},[t._v("\r\n\t\t\t\t\t发布设置\r\n\t\t\t\t\t"),t.elIconTop?a("i",{staticClass:"el-icon-caret-top",staticStyle:{"font-size":"20px"},on:{click:t.iconTop}}):t._e(),t._v(" "),t.rlIconBottom?a("i",{staticClass:"el-icon-caret-bottom",staticStyle:{"font-size":"20px"},on:{click:t.iconBottom}}):t._e()]),t._v(" "),t.rlIconBottom?a("el-form",{ref:"formData",attrs:{model:t.formData,rules:t.relus,disabled:!0}},[a("el-row",[a("el-col",[a("el-form-item",{attrs:{label:"公开对象：",prop:"noticeType"}},[a("el-radio-group",{model:{value:t.formData.noticeType,callback:function(e){t.$set(t.formData,"noticeType",e)},expression:"formData.noticeType"}},[a("el-radio",{attrs:{label:"1"},nativeOn:{click:function(e){t.radioClick(e,"1")}}},[t._v("全部成员")]),t._v(" "),a("el-radio",{attrs:{label:"2"},nativeOn:{click:function(e){t.radioClick(e,"2")}}},[t._v("指定招生组")]),t._v(" "),a("el-radio",{attrs:{label:"3"},nativeOn:{click:function(e){t.radioClick(e,"3")}}},[t._v("指定角色")]),t._v(" "),a("el-radio",{attrs:{label:"4"},nativeOn:{click:function(e){t.radioClick(e,"4")}}},[t._v("自定义成员")])],1)],1),t._v(" "),a("specified-object",{ref:"person",attrs:{type:t.formData.noticeType},model:{value:t.formData.noticeObject,callback:function(e){t.$set(t.formData,"noticeObject",e)},expression:"formData.noticeObject"}})],1),t._v(" "),a("el-col",[a("el-form-item",{attrs:{label:"是否可下载：",prop:"isDownload"}},[a("el-radio",{attrs:{label:"2"},model:{value:t.formData.isDownload,callback:function(e){t.$set(t.formData,"isDownload",e)},expression:"formData.isDownload"}},[t._v("否")]),t._v(" "),a("el-radio",{attrs:{label:"1"},model:{value:t.formData.isDownload,callback:function(e){t.$set(t.formData,"isDownload",e)},expression:"formData.isDownload"}},[t._v("是")])],1)],1)],1)],1):t._e()],1),t._v(" "),a("div",{staticClass:"btn_group"},[a("el-button",{attrs:{type:"submit",size:"medium"},on:{click:t.abolish}},[t._v("返回")])],1)])])},[],!1,null,"0b8d86c0",null);d.options.__file="detail.vue";e.default=d.exports}}]);