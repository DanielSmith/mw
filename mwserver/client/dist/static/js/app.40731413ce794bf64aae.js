webpackJsonp([1],{113:function(t,e){},114:function(t,e){},115:function(t,e){},117:function(t,e,s){s(114);var o=s(29)(s(69),s(120),null,null);t.exports=o.exports},118:function(t,e,s){s(113);var o=s(29)(s(70),s(119),"data-v-0eb259cd",null);t.exports=o.exports},119:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("transition",{attrs:{name:"fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.showUploadWidget,expression:"showUploadWidget"}]},[s("h1",[t._v(t._s(t.msg))]),t._v(" "),s("multiple-file-uploader",{attrs:{postURL:"http://mwstory.dev?cmd=addPhoto",successMessagePath:"",errorMessagePath:""}})],1)]),t._v(" "),s("transition",{attrs:{name:"fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:!t.showUploadWidget,expression:"!showUploadWidget"}]},[s("h1",[t._v("Enter Attributes, then pick spot, update story...")]),t._v(" "),s("label",{attrs:{for:"location"}},[t._v("Location")]),t._v(" "),s("input",{attrs:{id:"location",type:"text"}}),t._v(" "),s("label",{attrs:{for:"description"}},[t._v("Description")]),t._v(" "),s("input",{attrs:{id:"description",type:"text",placeholder:"description"}}),t._v(" "),s("label",{attrs:{for:"tags"}},[t._v("Tags")]),t._v(" "),s("input",{attrs:{id:"tags",type:"text",placeholder:"tags"}}),t._v(" "),s("button",{on:{click:t.updateStory}},[t._v("Update Story")])])]),t._v(" "),s("div",{attrs:{id:"myStory",contenteditable:"true"},domProps:{innerHTML:t._s(t.theStory)},on:{focus:t.gotFocus}})],1)},staticRenderFns:[]}},120:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"uploadBox"},[s("form",{attrs:{role:"form",enctype:"multipart/form-data"},on:{submit:function(e){e.preventDefault(),t.onSubmit(e)}}},[t.itemsAdded?s("div",{staticClass:"uploadBoxMain"},[s("p",[s("strong",[t._v("Name")])]),t._v(" "),s("ol",t._l(t.itemsNames,function(e){return s("li",[t._v(t._s(e))])})),t._v(" "),s("p",[s("strong",[t._v("Size")])]),t._v(" "),s("ol",t._l(t.itemsSizes,function(e){return s("li",[t._v(t._s(e))])})),t._v(" "),s("p",[s("strong",[t._v("Total upload size:")]),t._v(" "+t._s(t.itemsTotalSize))]),t._v(" "),s("button",{on:{click:t.removeItems}},[t._v("Remove files")]),t._v(" "),t.isLoaderVisible?s("div",{staticClass:"loader"},[s("div",{staticClass:"loaderImg"})]):t._e()]):s("div",{staticClass:"uploadBoxMain"},[s("div",{staticClass:"form-group"},[s("div",{staticClass:"dropArea",on:{ondragover:t.onChange}},[t._v("\n                        Drop a photo here.\n                        "),s("input",{attrs:{type:"file",id:"items",name:"items[]",required:""},on:{change:t.onChange}})])])])])])},staticRenderFns:[]}},121:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("StoryEdit")],1)},staticRenderFns:[]}},123:function(t,e){},38:function(t,e,s){"use strict";var o=s(31),i=new o.a;e.a=i},50:function(t,e,s){s(115);var o=s(29)(s(68),s(121),null,null);t.exports=o.exports},68:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s(118),i=s.n(o);e.default={name:"app",components:{StoryEdit:i.a}}},69:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s(73),i=s.n(o),a=s(76),n=s.n(a),r=s(32),d=s.n(r),c=s(38);s(112).polyfill(),d.a,e.default={props:{postURL:{type:String,required:!0},minItems:{type:Number,default:1},method:{type:String,default:"post"},postMeta:{type:[String,Array,Object],default:""},successMessagePath:{type:String,required:!0},errorMessagePath:{type:String,required:!0}},data:function(){return{items:[],itemsAdded:"",itemsNames:[],itemsSizes:[],itemsTotalSize:"",formData:"",successMsg:"",errorMsg:"",isLoaderVisible:!1}},methods:{bytesToSize:function(t){var e=["Bytes","KB","MB","GB","TB"];if(0==t)return"n/a";var s=parseInt(Math.floor(Math.log(t)/Math.log(1024)));return 0==s?t+" "+e[s]:(t/Math.pow(1024,s)).toFixed(2)+" "+e[s]},onChange:function(t){this.successMsg="",this.errorMsg="",this.formData=new FormData;var e=t.target.files||t.dataTransfer.files;this.itemsAdded=e.length;var s=0;for(var o in e)isNaN(o)||(this.items=t.target.files[o]||t.dataTransfer.files[o],this.itemsNames[o]=e[o].name,this.itemsSizes[o]=this.bytesToSize(e[o].size),s+=e[o].size,this.formData.append("items[]",this.items));this.itemsTotalSize=this.bytesToSize(s),this.onSubmit()},removeItems:function(){this.items="",this.itemsAdded="",this.itemsNames=[],this.itemsSizes=[],this.itemsTotalSize=""},onSubmit:function(){var t=this;this.isLoaderVisible=!0,("string"==typeof this.postMeta&&""!==this.postMeta||"object"===n()(this.postMeta)&&i()(this.postMeta).length>0)&&this.formData.append("postMeta",this.postMeta),"put"===this.method||"post"===this.method?d()({method:this.method,url:this.postURL,data:this.formData}).then(function(e){c.a.$emit("photoUploadEvent",e),t.isLoaderVisible=!1,t.successMsg=t.successMessagePath,t.removeItems()}).catch(function(e){t.isLoaderVisible=!1,t.errorMsg=e+"."+t.errorMessagePath,t.removeItems()}):(this.errorMsg="This HTTP method is not allowed. Please use either 'put' or 'post' methods.",this.removeItems())}}}},70:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s(72),i=s.n(o),a=s(32),n=s.n(a),r=s(117),d=s.n(r),c=s(38);e.default={components:{MultipleFileUploader:d.a},name:"StoryEdit",data:function(){return{errors:[],msg:"Story Editor",theStory:"Loading...",location:"",description:"",tags:"",curImage:"",curImageURL:"",showUploadWidget:!0}},methods:{gotFocus:function(){this.updateImageParams(),this.insertHtmlAtCursor(this.curImage)},updateImageParams:function(){this.location=document.getElementById("location").value,this.description=document.getElementById("description").value,this.tags=document.getElementById("tags").value,this.curImage='<img src="http://'+this.curImageURL+"\" title='Location: "+this.location+"\nDescription: "+this.description+"\nTags: "+this.tags+"' />",console.log(this.curImage)},insertHtmlAtCursor:function(t){var e,s;window.getSelection&&window.getSelection().getRangeAt?(e=window.getSelection().getRangeAt(0),s=e.createContextualFragment(t),e.insertNode(s)):document.selection&&document.selection.createRange&&document.selection.createRange().pasteHTML(t);var o=document.getElementById("myStory");console.log(o.innerHTML)},updateStory:function(){var t=this,e=new URLSearchParams;e.append("story",i()(myStory.innerHTML)),n.a.post("http://mwstory.dev?cmd=updateStory",e).then(function(e){t.showUploadWidget=!0}).catch(function(e){t.errors.push(e)})}},created:function(){var t=this;n.a.get("http://mwstory.dev").then(function(e){e.data.story.length?t.theStory=e.data.story:t.theStory="Start a new story..."}).catch(function(e){t.errors.push(e)}),c.a.$on("photoUploadEvent",function(e){t.curImageURL=e.data.pi.photoURL,t.showUploadWidget=!1,t.updateImageParams()})}}},71:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s(31),i=s(50),a=s.n(i);o.a.config.productionTip=!1;new o.a;new o.a({el:"#app",template:"<App/>",components:{App:a.a}})}},[71]);
//# sourceMappingURL=app.40731413ce794bf64aae.js.map