(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-636c"],{"+wto":function(e,t,a){},gijC:function(e,t,a){"use strict";a.r(t);var r=a("6ZY3"),n=a.n(r),s=a("cLjf"),o=a.n(s),i=a("hDQ3"),l=a.n(i),u={data:function(){return{formData:{question:"",createdName:"",questionValue:"",createdTime:"",explain:""},newformData:{id:"",isFrequent:"",lastQuestionReplyId:"",lastQuestionReplyContent:""}}},created:function(){this.appId=this.$route.query.id,this.appId&&this.qeury(this.appId)},methods:{qeury:function(e){var t=this;return l()(o.a.mark(function a(){var r;return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.$post("frequentQuestionQuery",{id:e});case 2:if("1000"!==(r=a.sent).returnCode){a.next=10;break}t.formData=r.dataInfo,t.newformData=r.dataInfo,console.log("回显formData",t.formData),console.log("回显newformData",t.newformData),a.next=11;break;case 10:return a.abrupt("return",t.$message(r.message));case 11:case"end":return a.stop()}},a,t)}))()},affirmBtn:function(){this.reply()},reply:function(){var e=this;return l()(o.a.mark(function t(){var a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$post("frequentQuestionUpdate",n()({id:e.formData.id,isFrequent:e.newformData.isFrequent,lastQuestionReplyId:e.newformData.replyList[e.newformData.replyList.length-1].id,lastQuestionReplyContent:e.newformData.replyList[e.newformData.replyList.length-1].replyContent}));case 2:"1000"===(a=t.sent).returnCode?(e.$message({type:"success",message:"编辑成功!"}),e.$router.push("/datum/issueVindicate/list"),console.log("newformData",e.newformData)):e.$message.error(a.message);case 4:case"end":return t.stop()}},t,e)}))()},abolish:function(){this.$router.go(-1)}}},m=(a("vKm/"),a("ZrdR")),f=Object(m.a)(u,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"issueVindicate_edit"},[a("div",{staticClass:"issue-edit"},[a("el-form",{ref:"ruleForm",attrs:{model:e.formData}},[a("el-form-item",[a("p",[e._v(e._s(e.formData.question))])]),e._v(" "),a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"提问者:"}},[a("span",[e._v(e._s(e.formData.createdName))])])],1),e._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"分类:"}},[a("span",[e._v(e._s(e.formData.questionValue))])])],1),e._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"提问时间:"}},[a("span",[e._v(e._s(e._f("filterTime")(e.formData.createdTime,"YYYY-MM-DD hh:mm")))])])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"说明:"}},[a("span",[e._v(e._s(e.formData.explain))])])],1),e._v(" "),a("div",{staticClass:"gray"}),e._v(" "),a("el-form",{ref:"ruleForm",attrs:{model:e.newformData}},[a("el-form-item",{attrs:{label:"是否设为常见问题：",rules:{required:!0,message:"请选择"}}},[a("el-radio",{attrs:{label:"1"},model:{value:e.newformData.isFrequent,callback:function(t){e.$set(e.newformData,"isFrequent",t)},expression:"newformData.isFrequent"}},[e._v("否")]),e._v(" "),a("el-radio",{attrs:{label:"2"},model:{value:e.newformData.isFrequent,callback:function(t){e.$set(e.newformData,"isFrequent",t)},expression:"newformData.isFrequent"}},[e._v("是")])],1),e._v(" "),e._l(e.newformData.replyList,function(t,r){return a("el-form-item",{key:r,attrs:{label:"回复："}},[r===e.newformData.replyList.length-1?a("tinymce",{model:{value:t.replyContent,callback:function(a){e.$set(t,"replyContent",a)},expression:"item.replyContent"}}):a("div",{domProps:{innerHTML:e._s(t.replyContent)}})],1)})],2),e._v(" "),a("div",{staticClass:"btn_group"},[a("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.affirmBtn}},[e._v("确认")]),e._v(" "),a("el-button",{attrs:{type:"submit",size:"medium"},on:{click:e.abolish}},[e._v("返回")])],1)],1)])},[],!1,null,"71c25814",null);f.options.__file="edit.vue";t.default=f.exports},"vKm/":function(e,t,a){"use strict";var r=a("+wto");a.n(r).a}}]);