(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-44d6"],{RZUt:function(e,t,r){"use strict";var o=r("b/Jr");r.n(o).a},Ymk5:function(e,t,r){"use strict";var o=r("jfYX");r.n(o).a},"b/Jr":function(e,t,r){},jfYX:function(e,t,r){},rlwC:function(e,t,r){"use strict";r.r(t);var o=r("cLjf"),i=r.n(o),n=r("6ZY3"),s=r.n(n),a=r("hDQ3"),c=r.n(a),u={data:function(){return{form:{content:"",noticeType:"",isSoon:"2",expireTime:"",noticeObject:""},memberObj:[],rules:{content:[{required:!0,message:"请输入正文",trigger:"blur"}],noticeType:[{required:!0,message:"请选择通知对象",trigger:"blur"}],expireTime:[{required:!0,message:"请选择有效期",trigger:"blur"}]},guideId:"",url:"",status:"",pickerOptions:{disabledDate:function(e){return e<Date.now()-864e5}}}},methods:{submitForm:function(e,t){var r=this;return this.memberObj||"1"===this.form.noticeType?("1"!==this.form.noticeType&&(this.form.noticeObject=this.memberObj.join(",")),"1"!=this.form.isSoon||this.form.noticeTime?void this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;r.guideId?"type=2"==t?(r.status=2,r.updataPro(r.status)):"type=1"==t&&(r.status=1,r.updataPro(r.status)):"type=2"==t?(r.status=2,r.addPro(r.form,r.status)):"type=1"==t&&(r.status=1,r.addPro(r.form,r.status))}):this.$message.error("请选择提示时间")):this.$message.error("通知对象人员未勾选")},addPro:function(e,t){var r=this;return c()(i.a.mark(function o(){return i.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,r.$post("addGuide",s()({},e,{guideStatus:t}),!0);case 2:"1000"===o.sent.returnCode&&(r.$message.success("发文成功"),r.$router.push("/propaganda/guide/list"));case 4:case"end":return o.stop()}},o,r)}))()},updataPro:function(e){var t=this;return c()(i.a.mark(function r(){return i.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.$post("updataGuide",{id:t.guideId,content:t.form.content,noticeType:t.form.noticeType,noticeObject:t.form.noticeObject,isSoon:t.form.isSoon,expireTime:t.form.expireTime,guideStatus:e,noticeTime:t.form.noticeTime});case 2:"1000"===r.sent.returnCode&&(t.$message.success("修改成功"),t.$router.push("/propaganda/guide/list"));case 4:case"end":return r.stop()}},r,t)}))()},abolish:function(){this.$router.go(-1)},qeury:function(e){var t=this;return c()(i.a.mark(function r(){var o;return i.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.$post("query",{id:e});case 2:if("1000"!==(o=r.sent).returnCode){r.next=8;break}t.form=o.dataInfo,t.memberObj=t.form.noticeObject.split(","),r.next=9;break;case 8:return r.abrupt("return",t.$message(o.message));case 9:case"end":return r.stop()}},r,t)}))()},radioClick:function(e,t){this.form.noticeType!==t&&this.$refs.person.clearCheckbox()}},created:function(){this.guideId=this.$route.query.id,this.guideId&&this.qeury(this.guideId)}},l=(r("RZUt"),r("Ymk5"),r("ZrdR")),m=Object(l.a)(u,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"conduct_propaganda"},[r("div",{staticClass:"add_conduct"},[r("el-form",{ref:"ruleForm",staticClass:"form",attrs:{model:e.form,rules:e.rules}},[r("el-form-item",{staticClass:"item_label",attrs:{label:"正文:",prop:"content"}},[r("el-input",{staticStyle:{width:"30%"},attrs:{type:"textarea",rows:4},model:{value:e.form.content,callback:function(t){e.$set(e.form,"content",t)},expression:"form.content"}})],1),e._v(" "),r("el-form-item",{staticClass:"item_label",attrs:{label:"通知设置",prop:"noticeType"}},[r("span",[e._v("通知对象：")]),e._v(" "),r("el-radio-group",{model:{value:e.form.noticeType,callback:function(t){e.$set(e.form,"noticeType",t)},expression:"form.noticeType"}},[r("el-radio",{attrs:{label:"1"},nativeOn:{click:function(t){e.radioClick(t,"1")}}},[e._v("全部成员")]),e._v(" "),r("el-radio",{attrs:{label:"2"},nativeOn:{click:function(t){e.radioClick(t,"2")}}},[e._v("指定招生组")]),e._v(" "),r("el-radio",{attrs:{label:"3"},nativeOn:{click:function(t){e.radioClick(t,"3")}}},[e._v("指定角色")]),e._v(" "),r("el-radio",{attrs:{label:"4"},nativeOn:{click:function(t){e.radioClick(t,"4")}}},[e._v("自定义成员")])],1)],1),e._v(" "),r("specified-object",{ref:"person",attrs:{type:e.form.noticeType},model:{value:e.memberObj,callback:function(t){e.memberObj=t},expression:"memberObj"}}),e._v(" "),r("el-form-item",{attrs:{label:"是否及时通知:"}},[r("el-radio",{attrs:{label:"2"},model:{value:e.form.isSoon,callback:function(t){e.$set(e.form,"isSoon",t)},expression:"form.isSoon"}},[e._v("否")]),e._v(" "),r("el-radio",{attrs:{label:"1"},model:{value:e.form.isSoon,callback:function(t){e.$set(e.form,"isSoon",t)},expression:"form.isSoon"}},[e._v("是")]),e._v(" "),1==e.form.isSoon?r("div",{staticClass:"block notifytime"},[r("span",{staticClass:"demonstration"},[e._v("提示时间:")]),e._v(" "),r("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间","value-format":"timestamp"},model:{value:e.form.noticeTime,callback:function(t){e.$set(e.form,"noticeTime",t)},expression:"form.noticeTime"}})],1):e._e()],1),e._v(" "),r("el-form-item",{attrs:{label:"有效期",prop:"expireTime"}},[r("date-picker",{attrs:{pickerOptions:e.pickerOptions},model:{value:e.form.expireTime,callback:function(t){e.$set(e.form,"expireTime",t)},expression:"form.expireTime"}})],1)],1),e._v(" "),r("div",{staticClass:"btn_group"},[r("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(t){e.submitForm("ruleForm","type=2")}}},[e._v("确定")]),e._v(" "),r("el-button",{attrs:{type:"primary",plain:""},on:{click:function(t){e.submitForm("ruleForm","type=1")}}},[e._v("暂存")]),e._v(" "),r("el-button",{attrs:{type:"submit"},on:{click:e.abolish}},[e._v("取消")])],1)],1)])},[],!1,null,"0bdc4628",null);m.options.__file="addConduct.vue";t.default=m.exports}}]);