webpackJsonp([16],{120:function(t,e,a){var r=a(3)(a(642),a(643),null,null);t.exports=r.exports},642:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(6),n=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default={name:"bughistory-table",data:function(){var t=this;return{modalinfo:!1,current:1,total:100,projectname:localStorage.projectname,projectid:localStorage.projectid,tasklist:[],searchdata:"",selectlist:[],buginfo:{},bugdata:[],tablehead:[{type:"selection",width:60,align:"center"},{title:"等级",align:"center",width:80,sortable:!0,key:"bugrank",render:function(t,e){var a=e.row.bugrank;return t("Tag",{props:{type:"border",color:"高危"===a?"red":"中危"===a?"yellow":"低危"===a?"blue":"red"}},a)}},{title:"漏洞名称",key:"bugname"},{title:"漏洞地址",key:"bugaddr"},{title:"漏洞状态",align:"center",key:"bugstate",sortable:!0,width:110},{title:"更新时间",align:"center",key:"updatedate",sortable:!0,width:180,render:function(t,e){return t("span",[t("Icon",{props:{type:"android-time"}}),t("span",n.default.formatdate(e.row.updatedate))])}},{title:"操作",align:"center",width:120,key:"action",render:function(e,a){return e("div",[e("Button",{props:{type:"info",size:"small"},on:{click:function(){var e={id:a.row.bugid};t.$router.push({name:"bug_info",query:e})}}},"详情")])}}],showCurrentTableData:!0}},methods:{bugsearch:function(t){var e=this;n.default.ajax({method:"POST",action:"bugsearch",json:{page:t,history:!0,keyword:this.searchdata}}).then(function(t){e.bugdata=t.ret,e.total=t.total}).catch(function(t){e.$Message.error(t)})},bugdelete:function(){var t=this,e=this.$refs.selection.getSelection();this.selectlist=[];for(var a in e){this.selectlist.push(e[a].bugid);for(var r in this.bugdata)e[a].bugid==this.bugdata[r].bugid&&this.bugdata.splice(r,1)}n.default.ajax({method:"POST",action:"bugdelete",json:{selectlist:this.selectlist}}).then(function(e){t.bugsearch(1),t.$Message.info("删除成功！")}).catch(function(e){t.$Message.error(e)})}},created:function(){if(this.$route.params.isadd)return this.modalinfo=!0;"null"!=localStorage.projectid&&void 0!=localStorage.projectid?this.bugsearch(1):(this.$Message.error("请先选择当前系统"),this.$router.push({name:"project_index"}))}}},643:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Card",[a("Poptip",{attrs:{confirm:"",placement:"bottom",title:"确认删除？"},on:{"on-ok":t.bugdelete}},[a("Button",{attrs:{type:"error",size:"large"}},[a("Icon",{attrs:{type:"ios-download-outline"}}),t._v("\n                删除漏洞\n            ")],1)],1),t._v(" "),a("Input",{staticStyle:{width:"300px"},attrs:{slot:"extra",icon:"search",placeholder:"请输入ID,名称,地址搜索..."},on:{"on-click":function(e){t.bugsearch(1)}},nativeOn:{keydown:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.bugsearch(1)}},slot:"extra",model:{value:t.searchdata,callback:function(e){t.searchdata=e},expression:"searchdata"}})],1),t._v(" "),a("Table",{ref:"selection",attrs:{stripe:"",border:"",columns:t.tablehead,data:t.bugdata}}),t._v(" "),a("div",{staticStyle:{margin:"10px",overflow:"hidden"}},[a("div",{staticStyle:{float:"left"}},[t._v("共 "+t._s(t.total)+" 条")]),t._v(" "),a("div",{staticStyle:{float:"right"}},[a("Page",{attrs:{"show-elevator":"",current:t.current,total:t.total,"page-size":30},on:{"on-change":t.bugsearch}})],1)])],1)},staticRenderFns:[]}}});