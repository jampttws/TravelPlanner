webpackJsonp([1],{"/626":function(t,e){},"2WXF":function(t,e){},"3TcT":function(t,e){},"4AK/":function(t,e){},"4Wrh":function(t,e){},"6DHi":function(t,e){},"6STh":function(t,e){},"6nfk":function(t,e){},"7OPg":function(t,e){},"8hCB":function(t,e){},"8tGT":function(t,e,a){t.exports=a.p+"static/img/travel-planner.8e0238f.png"},"90VL":function(t,e){},"9DHQ":function(t,e){},"A+FS":function(t,e){},ATJn:function(t,e){},BCfr:function(t,e){},FbEL:function(t,e){},"HNa/":function(t,e){},JLzs:function(t,e){},"N+IJ":function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("/5sW"),s=a("NYxO"),r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-toolbar",{staticClass:"primary",attrs:{dark:""}},[a("v-toolbar-side-icon",{staticClass:"hidden-sm-and-up ",on:{click:function(e){e.stopPropagation(),t.sideNav=!t.sideNav}}}),t._v(" "),a("v-toolbar-title",[a("router-link",{staticStyle:{cursor:"pointer"},attrs:{to:"/",tag:"span"}},[t._v("Travel planner")])],1),t._v(" "),a("v-spacer"),t._v(" "),a("v-toolbar-items",{staticClass:"hidden-xs-only"},t._l(t.menuItems,function(e){return a("v-btn",{key:e.title,attrs:{flat:"",to:e.link}},[a("v-icon",{attrs:{left:"",dark:""}},[t._v(t._s(e.icon))]),t._v("\n        "+t._s(e.title)+"\n      ")],1)}))],1),t._v(" "),a("main",[a("router-view")],1),t._v(" "),a("v-navigation-drawer",{staticClass:"side",model:{value:t.sideNav,callback:function(e){t.sideNav=e},expression:"sideNav"}},[a("v-list",t._l(t.menuItems,function(e){return a("v-list-tile",{key:e.title,attrs:{to:e.link}},[a("v-list-tile-action",[a("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),a("v-list-tile-content",[t._v(t._s(e.title))])],1)}))],1)],1)},staticRenderFns:[]};var i,o=a("VU/8")({data:function(){return{sideNav:!1,menuItems:[{icon:"supervisor_account",title:"View Planners",link:"/planners"},{icon:"room",title:"Organize Planner",link:"/planner/new"},{icon:"lock_open",title:"Account",link:"/account"}]}}},r,!1,function(t){a("7OPg")},null,null).exports,l=a("/ocq"),c=a("Xxa5"),d=a.n(c),u=a("exGp"),m=a.n(u),p=a("bOdI"),v=a.n(p),f=a("mtWM"),h=a.n(f),g=(a("Ya8g"),a("ppUw")),x=a.n(g);n.default.use(s.a),n.default.use(x.a);var _=new s.a.Store({state:{loadedPlanners:[],listId:[],user:{username:" ",email:" "},planUser:[],idPlan:"01",dataId:" ",listData:[],count:0,planner:[]},mutations:v()({createPlanner:function(t,e){t.loadedPlanners.push(e)},setUsername:function(t,e){t.user.username=e},setEmail:function(t,e){t.user.email=e},clearPlanner:function(t){t.loadedPlanners=[]},setIdPlan:function(t){t.idPlan=Math.random().toString(36).substr(2,9)},activeLoadedPlan:function(t,e){t.count=e},dataPlan:function(t,e){t.planUser=e},setDataId:function(t,e){t.dataId=e},addListData:function(t,e){t.listData.push=e},addPlan:function(t,e){t.planner.push(e)},addDivide:function(t,e){t.planner.push(e)},addDuration:function(t,e){t.planner.push(e)}},"setIdPlan",function(t){t.idPlan=Math.random().toString(36).substr(2,9)}),actions:{dataPlanner:function(t,e){var a=this,n=t.commit,s=t.getters;return m()(d.a.mark(function t(){var r,i;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(" "==s.getCookie("mail")){t.next=16;break}return r={email:s.getCookie("mail"),id:e},t.prev=2,t.next=5,h.a.post("api/plan_data/",r);case 5:i=t.sent,console.log(i.data),console.log(i.data[0].id),n("setDataId",i.data[0].id),n("dataPlan",i.data),t.next=16;break;case 12:return t.prev=12,t.t0=t.catch(2),a.$log.error(t.t0),t.abrupt("return",0);case 16:case"end":return t.stop()}},t,a,[[2,12]])}))()},fetchUserData:function(t){var e=this,a=t.commit,n=t.getters;return m()(d.a.mark(function t(){var s,r,i,o;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log(n.getCookie("mail"))," "==n.getCookie("mail")){t.next=15;break}return s={email:n.getCookie("mail")},t.prev=3,t.next=6,h.a.post("api/user_data/",s);case 6:for(r=t.sent,console.log(r.data),i=0;i<r.data.length;i++)o={topic:r.data[i].name,imageUrl:"https://wp-assets.dotproperty-kh.com/wp-content/uploads/sites/14/2016/10/28150318/Fotolia_116473721_Subscription_Monthly_M.jpg",date:r.data[i].date,id:r.data[i].id},a("addListData",r.data[i].id),a("createPlanner",o);t.next=15;break;case 11:return t.prev=11,t.t0=t.catch(3),e.$log.error(t.t0),t.abrupt("return");case 15:case"end":return t.stop()}},t,e,[[3,11]])}))()},createPlanner:function(t,e){(0,t.commit)("createPlanner",{imageUrl:e.imageUrl,id:e.id,topic:e.topic,date:e.date})},addDuration:function(t,e){(0,t.commit)("addDuration",{duration:e.duration})},addDivide:function(t,e){(0,t.commit)("addDivide",{divider:!0,inset:!0})},addPlan:function(t,e){(0,t.commit)("addPlan",{avatar:"https://static1.squarespace.com/static/5572b7b4e4b0a20071d407d4/t/58a32d06d482e9d74eecebe4/1487751950104/Location+Based+Mobile-+Advertising",time:e.time,name:e.name,spendtime:e.spendtime,completed:!1})},username:function(t,e){t.commit("setUsername",e)},email:function(t,e){t.commit("setEmail",e)},clearCreatePlanner:function(t){t.commit("clearCreatePlanner")}},getters:(i={getPlan:function(t){return t.planner},loadedPlanners:function(t){return t.loadedPlanners.sort(function(t,e){return t.date>e.date})},featuredPlanners:function(t,e){return e.loadedPlanners.slice(0,5)},loadedPlanner:function(t){return function(e){return t.loadedPlanners.find(function(t){return t.id===e})}},getUsername:function(t){return t.user.username},getEmail:function(t){return t.user.email},getId:function(t){return t.idPlan},getDataId:function(t){return t.dataId},getDataPlan:function(t){return t.planUser},getListData:function(t){return t.listData}},v()(i,"getId",function(t){return t.idPlan}),v()(i,"getCookie",function(t){return function(t){return n.default.cookie.get(t)}}),v()(i,"Cookie",function(t){return function(t,e){return n.default.cookie.set(t,e,"1h")}}),v()(i,"getCount",function(t){return t.count}),i)}),b={computed:{planners:function(){return 0==this.$store.getters.loadedPlanners.length?(console.log("in"),[{topic:"Welcome to Travel planner",imageUrl:a("8tGT")}]):this.$store.getters.featuredPlanners}},methods:{onLoadPlanner:function(t){this.$router.push(/planners/+t)}}},k={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"text-xs-center text-sm-right mb-6",attrs:{xs12:"",sm6:""}},[a("v-btn",{staticClass:"primary",attrs:{large:"",router:"",to:"/planners"}},[t._v("Explore Planners")])],1),t._v(" "),a("v-flex",{staticClass:"text-xs-center text-sm-right mb-6",attrs:{xs12:"",sm6:""}},[a("v-btn",{staticClass:"primary",attrs:{large:"",router:"",to:"/planner/new"}},[t._v("Organize Planners")])],1)],1),t._v(" "),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-carousel",t._l(t.planners,function(e){return a("v-carousel-item",{key:e.id,attrs:{src:e.imageUrl},on:{click:function(a){t.onLoadPlanner(e.id)}}},[a("div",{staticClass:"title"},[t._v("\n                "+t._s(e.topic)+"\n            ")])])}))],1)],1)},staticRenderFns:[]},w=a("VU/8")(b,k,!1,null,null,null).exports,$={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[t._l(t.planners,function(e){return a("v-layout",{key:e.id,staticClass:"mb-2",attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm10:"",md8:"","offset-sm1":"","offset-md2":""}},[a("v-card",{staticClass:"info"},[a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs5:"",sm4:"",md3:""}},[a("v-card-media",{attrs:{src:e.imageUrl,height:"130px"}})],1),t._v(" "),a("v-flex",{attrs:{xs7:"",sm8:"",md9:""}},[a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("h2",{staticClass:"white--text"},[t._v(t._s(e.topic))]),t._v(" "),a("div",[t._v(t._s(e.date))])])]),t._v(" "),a("v-card-action",[a("v-btn",{attrs:{idlink:"planner.id",flat:"",to:"/planners/"+e.id},on:{click:t.viewPlan}},[a("v-icon",{attrs:{left:"",light:""}},[t._v("arrow_forward")]),t._v("\n                                    View planner")],1)],1)],1)],1)],1)],1)],1)],1)}),t._v(" "),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs3:"",sm10:"",md8:"","offset-sm1":"","offset-md2":""}},[t.plannersIsValid?a("v-card",[a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("h3",{staticClass:"headline mb-0"},[t._v("No planner")])])])],1):t._e()],1)],1),t._v(" "),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs3:"",sm10:"",md8:"","offset-sm1":"","offset-md2":""}},[a("v-spacer"),t._v(" "),t.userIsValid?a("v-btn",{staticClass:"error",on:{click:t.deletePlan}},[t._v("\n                Delete\n            ")]):t._e()],1)],1)],2)},staticRenderFns:[]},P=a("VU/8")({computed:{planners:function(){return this.$store.getters.loadedPlanners},userIsValid:function(){return(" "==this.$store.getters.getCookie("mail")||""==this.$store.getters.getCookie("mail"))&&this.$store.getters.loadedPlanners.length>0},plannersIsValid:function(){return 0==this.$store.getters.loadedPlanners.length}},mounted:function(){0==this.$store.getters.getCount&&this.$store.dispatch("fetchUserData"),this.$store.commit("activeLoadedPlan",1)},methods:{deletePlan:function(){this.$store.commit("clearPlanner"),this.$log.info("delete plan.")}}},$,!1,null,null,null).exports,C=a("d7EF"),T=a.n(C),y={data:function(){return{topic:"",imageUrl:"https://wp-assets.dotproperty-kh.com/wp-content/uploads/sites/14/2016/10/28150318/Fotolia_116473721_Subscription_Monthly_M.jpg",date:null,dateFormatted:null,menu:!1,picker:null,landscape:!1}},computed:{disabledDates:function(){return(new Date).toISOString().slice(0,10)},formIsValid:function(){return" "==this.$store.getters.getCookie("mail")||""==this.$store.getters.getCookie("mail")?0==this.$store.getters.loadedPlanners.length&&""!==this.topic&&null!==this.date:""!==this.topic&&null!==this.date},computedDateFormatted:function(){return this.formatDate(this.date)}},watch:{date:function(t){this.dateFormatted=this.formatDate(this.date)}},methods:{onCreatePlanner:function(){if(this.formIsValid){this.$store.commit("setIdPlan");var t={imageUrl:this.imageUrl,topic:this.topic,date:this.date,id:this.$store.getters.getId};this.$store.dispatch("createPlanner",t),this.$router.push("/planners"),this.$log.info("create planner name: "+this.topic+", date: "+this.date)}},formatDate:function(t){if(!t)return null;var e=t.split("-"),a=T()(e,3),n=a[0];return a[1]+"/"+a[2]+"/"+n},parseDate:function(t){if(!t)return null;var e=t.split("/"),a=T()(e,3),n=a[0],s=a[1];return a[2]+"-"+n.padStart(2,"0")+"-"+s.padStart(2,"0")}}},D={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-container",[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[a("h1",{staticClass:"primary--text"},[t._v("Create a new planner")])])],1),t._v(" "),a("v-space"),t._v(" "),a("v-layout",{attrs:{"align-center":"","justify-center":"",row:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-form",{on:{submit:function(e){return e.preventDefault(),t.onCreatePlanner(e)}}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[a("v-text-field",{attrs:{name:"topic",label:"Topic",id:"topic",maxlength:20,required:""},model:{value:t.topic,callback:function(e){t.topic=e},expression:"topic"}})],1)],1),t._v(" "),a("v-layout",{staticClass:"mb-6",attrs:{row:""}},[a("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[a("h2",{staticClass:"grey--text"},[t._v("Choose a date")])])],1),t._v(" "),a("v-layout",{attrs:{"align-center":"","justify-center":"",row:""}},[a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"nudge-right":40,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","max-width":"290px","min-width":"290px"},model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[a("v-text-field",{attrs:{slot:"activator",label:"Date",hint:"MM/DD/YYYY format","persistent-hint":"","prepend-icon":"event"},on:{blur:function(e){t.date=t.parseDate(t.dateFormatted)}},slot:"activator",model:{value:t.dateFormatted,callback:function(e){t.dateFormatted=e},expression:"dateFormatted"}}),t._v(" "),a("v-date-picker",{attrs:{"no-title":"",min:this.disabledDates},on:{input:function(e){t.menu=!1}},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)],1)],1),t._v(" "),a("v-layout",{attrs:{"align-center":"","justify-center":"",row:""}},[a("v-flex",{staticClass:"mb-6",attrs:{xs1:""}},[a("v-btn",{staticClass:"primary",attrs:{disabled:!t.formIsValid,type:"submit"}},[t._v("Create planner")])],1)],1),t._v(" "),a("v-layout",{attrs:{"align-center":"","justify-center":"",row:"",wrap:""}},[a("v-flex",{staticClass:"mb-6",attrs:{xs5:""}},[a("v-card-text",{attrs:{right:""}},[a("div",{staticClass:"info--text"},[t._v("If you want to create many plan, please sign in.")])])],1)],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var I=a("VU/8")(y,D,!1,function(t){a("twCh")},null,null).exports,L={name:"SignIn",nameUser:!0,store:_,data:function(){return{isLoaded:!1,user:{username:" ",email:" "}}},methods:{signIn:function(){var t=this;this.$gAuth.signIn().then(function(e){t.$store.commit("setUsername",e.w3.ig),t.$store.commit("setEmail",e.w3.U3);var a=e.w3.ig,n=e.w3.U3;t.$store.getters.Cookie("name",a),t.$store.getters.Cookie("mail",n),t.$store.commit("setUsername",t.$store.getters.getCookie("name")),t.$store.commit("setEmail",t.$store.getters.getCookie("mail")),t.user.username=t.$store.getters.getCookie("name"),t.user.email=t.$store.getters.getCookie("mail"),t.$store.commit("clearPlanner")," "!=t.$store.getters.getCookie("mail")&&t.$store.dispatch("fetchUserData"),t.$log.info(t.user.username),t.$log.info(t.user.email)}).catch(function(e){t.$log.error(e)})},signOut:function(){var t=this;this.$gAuth.signOut().then(function(e){t.$store.getters.Cookie("name"," "),t.$store.getters.Cookie("mail"," "),t.$store.commit("setUsername",t.$store.getters.getCookie("name")),t.$store.commit("setEmail",t.$store.getters.getCookie("mail")),t.user.username=t.$store.getters.getCookie("name"),t.user.email=t.$store.getters.getCookie("mail"),t.$store.commit("clearPlanner"),t.$log.info(t.user.username+" sign out.")}).catch(function(e){t.$log.error(e)})}},computed:{usname:function(){return this.user.username=this.$store.getters.getCookie("name"),this.user.username},email:function(){return this.user.email=this.$store.getters.getCookie("mail"),this.user.email}},mounted:function(){var t=this,e=setInterval(function(){t.isLoaded=t.$gAuth.isLoaded(),t.isLoaded&&clearInterval(e)},1e3)}},S={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return" "==t.usname||""==t.usname||null==t.usname?a("div",[a("v-container",[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[a("v-card",[a("v-card-media",{attrs:{src:"http://www.dream-wallpaper.com/free-wallpaper/travel-wallpaper/santorini-wallpaper/1680x1050/free-wallpaper-18.jpg","aspect-ratio":"2.75"}}),t._v(" "),a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("h1",{staticClass:"headline mb-0"},[t._v("Sign in")])])]),t._v(" "),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs1:"","offset-xs3":"","offset-md2":"","offset-lg2":""}},[a("v-card-media",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2000px-Google_%22G%22_Logo.svg.png","aspect-ratio":"1",height:"50px",width:"50px"}})],1),t._v(" "),a("v-card-actions",[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{s1:"","offset-xs3":""}},[a("v-btn",{staticClass:"info",attrs:{disabled:!t.isLoaded},on:{click:t.signIn}},[t._v("sign in")])],1)],1)],1)],1)],1)],1)],1)],1)],1):a("div",[a("v-container",[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[a("v-card",[a("v-card-media",{attrs:{src:"http://www.dream-wallpaper.com/free-wallpaper/travel-wallpaper/santorini-wallpaper/1680x1050/free-wallpaper-18.jpg","aspect-ratio":"2.75"}}),t._v(" "),a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("h1",{staticClass:"headline mb-0"},[t._v("Account")])])]),t._v(" "),a("v-flex",{attrs:{"offset-xs3":"","offset-md2":"","offset-lg2":""}},[a("h2",[t._v(" name: "+t._s(t.usname)+" ")]),t._v(" "),a("h2",[t._v(" email: "+t._s(t.email))])]),t._v(" "),a("v-card-actions",[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{s1:"","offset-xs3":""}},[a("v-btn",{staticClass:"secondary",attrs:{disabled:!t.isLoaded},on:{click:t.signOut}},[t._v("sign out")])],1)],1)],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var M=a("VU/8")(L,S,!1,function(t){a("foti")},null,null).exports,V=a("BO1k"),H=a.n(V),U=a("mvHQ"),F=a.n(U),N={data:function(){return{autocompleteModel:"Some Default Location...",vueGoogleAutocompleteLink:"https://github.com/olefirenko/vue-google-autocomplete",autocomplete:"",address:{},clearable:!0,enableGeolocation:!1,list:[],addressName:"",placeData:"0",placeList:[],saveList:[],selectStartTimeHour:"00",selectStartTimeMin:"00",selectEndTimeHour:"00",selectEndTimeMin:"00",hourList:["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23"],minList:["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59"],timePicker:"",totalTime:"",spendTimeHour:"00",spendTimeMin:"00",numSpendtime:"",totalmin:"",totalhour:"",disabled:!1,numStartHour:"",numStartMin:"",alert:!1,date:""}},props:["id"],created:function(){0==this.$store.getters.loadedPlanners.length&&(this.$store.dispatch("fetchUserData"),this.$router.push("/planners")),this.$store.commit("activeLoadedPlan",1)},mounted:function(){this.$store.dispatch("dataPlanner",this.$store.getters.loadedPlanner(this.id).id)},computed:{planner:function(){if(this.$store.getters.getDataId==this.$store.getters.loadedPlanner(this.id).id){console.log(this.$store.getters.getDataPlan),this.list=[];var t=this.$store.getters.getDataPlan.length,e=this.$store.getters.getDataPlan;console.log(e[t-1].times);for(var a=0;a<t-1;a++)0==a?this.list.push({avatar:"https://static1.squarespace.com/static/5572b7b4e4b0a20071d407d4/t/58a32d06d482e9d74eecebe4/1487751950104/Location+Based+Mobile-+Advertising",time:e[a].times,name:e[a].location,spendtime:e[a].spendtime,completed:!1}):this.list.push({divider:!0,inset:!0},{duration:e[a].duration},{divider:!0,inset:!0},{avatar:"https://static1.squarespace.com/static/5572b7b4e4b0a20071d407d4/t/58a32d06d482e9d74eecebe4/1487751950104/Location+Based+Mobile-+Advertising",time:e[a].times,name:e[a].location,spendtime:e[a].spendtime,completed:!1});this.totalTime=e[t-1].remaining}return this.$store.getters.loadedPlanner(this.id)},plannerIsValid:function(){return console.log("mail"),console.log(this.$store.getters.getCookie("mail")),this.list.length>1&&this.$store.getters.getDataId!=this.$store.getters.loadedPlanner(this.id).id&&" "!=this.$store.getters.getCookie("mail")},dataIsValid:function(){return this.$store.getters.getDataId!=this.$store.getters.loadedPlanner(this.id).id},formIsValid:function(){return""!=this.addressName&&("00"!=this.spendTimeHour||"00"!=this.spendTimeMin)&&this.$store.getters.getDataId!=this.$store.getters.loadedPlanner(this.id).id},outputJsData:function(){return"\n                "+F()(this.address)+"\n            "},outputJsCallback:function(){return"methods: {\n                "+this.callbackFunction+": function (addressData, placeResultData) {\n                this.address = addressData;\n                }\n            }"},outputJs:function(){return this.outputJsData+",\n            "+this.outputJsCallback},haveDATA:function(){return 0!=this.list.length&&this.$store.getters.getDataId!=this.$store.getters.loadedPlanner(this.id).id}},methods:{getAddressData:function(t){this.address=t;var e=F()(this.address),a=JSON.parse(e);this.addressName=a.name,console.log(this.addressName)},addPlace:function(){var t=this;return m()(d.a.mark(function e(){var a,n,s,r,i,o,l,c,u,m,p,v,f,g;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.setStartTime=t.selectStartTimeHour+":"+t.selectStartTimeMin,t.placeList.push({placeName:t.addressName}),a=function(t){return t<10?"0"+t:t},function(t){var e=t.split(".");return{hour:e[0],min:e[1]}},n=function(t,e,n,s){var r=0,i=0;return e+s>60?(r=e+s-60,i=t+n+1):(r=e+s,i=t+n),{hour:a(i),min:a(r)}},s=function(t,e,n,s){var r=new Date("Jan 1, 2018 "+n+":"+s+":00"),i=new Date("Jan 1, 2018 "+t+":"+e+":00"),o=new Date("Jan 2, 2018 "+t+":"+e+":00"),l=void 0,c=void 0;if(n<t)l=r,c=i;else if(n==t){if(s==e)return{totalhour:24,totalmin:0};s<e?(l=r,c=i):(l=r,c=o)}else l=r,c=o;var d=Math.abs(l-c)/1e3,u=Math.floor(d/3600)%24,m=Math.floor(d/60)%60;return{totalhour:u,totalmin:a(m)}},r=function(t){var e=t.split(" ");return"hour"===e[1]||"hours"===e[1]&&"mins"===e[3]||"min"===e[3]?{hour:parseInt(e[0],10),min:parseInt(e[2],10)}:"hour"===e[1]||"hours"===e[1]?{hour:parseInt(e[0],10),min:0}:"mins"===e[1]||"min"===e[1]?{hour:0,min:parseInt(e[0],10)}:{hour:0,min:0}},!(t.list.length>=1)){e.next=38;break}return i=t.placeList.length-2,o=t.placeList.length-1,e.prev=10,l={place:t.placeList[o].placeName,origin:t.placeList[i].placeName},e.next=14,h.a.post("api/place/",l);case 14:c=e.sent,t.placeData=c.data,console.log(c.data),e.next=26;break;case 19:return e.prev=19,e.t0=e.catch(10),t.$log.error(e.t0),alert("These two places maybe too far or don't have in the map. Please select new places."),t.placeList.pop(),t.$refs.address.clear(),e.abrupt("return");case 26:u=n(parseInt(t.numStartHour,10),parseInt(t.numStartMin,10),r(t.placeData).hour,r(t.placeData).min),m=n(parseInt(u.hour,10),parseInt(u.min,10),parseInt(t.numSpendtimeHour,10),parseInt(t.numSpendtimeMin,10)),t.numStartHour=m.hour,t.numStartMin=m.min,t.numSpendtimeHour=t.spendTimeHour,t.numSpendtimeMin=t.spendTimeMin,t.spendtime=parseInt(t.spendTimeHour,10)+"."+t.spendTimeMin,t.timePicker=t.numStartHour+":"+t.numStartMin,t.list.push({divider:!0,inset:!0},{duration:t.placeData},{divider:!0,inset:!0},{avatar:"https://static1.squarespace.com/static/5572b7b4e4b0a20071d407d4/t/58a32d06d482e9d74eecebe4/1487751950104/Location+Based+Mobile-+Advertising",time:t.timePicker,name:t.addressName,spendtime:t.spendtime,completed:!1}),t.saveList.push({email:t.$store.getters.getCookie("mail"),location:t.addressName,spendtime:t.spendtime,times:t.timePicker,date:t.$store.getters.loadedPlanner(t.id).date,id:t.$store.getters.loadedPlanner(t.id).id,name:t.$store.getters.loadedPlanner(t.id).topic,duration:t.placeData,remaining:t.totalTime}),e.next=60;break;case 38:return e.prev=38,p={place:t.addressName},e.next=42,h.a.post("api/search/",p);case 42:e.sent,e.next=51;break;case 45:return e.prev=45,e.t1=e.catch(38),t.$log.error(e.t1),alert("This place maybe doesn't have in the map. Please select new places."),t.$refs.address.clear(),e.abrupt("return");case 51:t.numStartHour=t.selectStartTimeHour,t.numStartMin=t.selectStartTimeMin,t.numSpendtimeHour=t.spendTimeHour,t.numSpendtimeMin=t.spendTimeMin,t.spendtime=parseInt(t.spendTimeHour,10)+"."+t.spendTimeMin,t.totalTime=s(t.selectEndTimeHour,t.selectEndTimeMin,t.selectStartTimeHour,t.selectStartTimeMin).totalhour+"."+s(t.selectEndTimeHour,t.selectEndTimeMin,t.selectStartTimeHour,t.selectStartTimeMin).totalmin,t.list.push({avatar:"https://static1.squarespace.com/static/5572b7b4e4b0a20071d407d4/t/58a32d06d482e9d74eecebe4/1487751950104/Location+Based+Mobile-+Advertising",time:t.setStartTime,name:t.addressName,spendtime:t.spendtime,completed:!1}),t.disabled=!0,t.saveList.push({email:t.$store.getters.getCookie("mail"),location:t.addressName,spendtime:t.spendtime,times:t.setStartTime,date:t.$store.getters.loadedPlanner(t.id).date,id:t.$store.getters.loadedPlanner(t.id).id,name:t.$store.getters.loadedPlanner(t.id).topic,duration:"0",remaining:t.totalTime});case 60:return v=t.list.length-1,e.prev=61,f={spendtime:t.list[v].spendtime,remaining:t.totalTime,road:t.placeData},e.next=65,h.a.post("api/time-remain/",f);case 65:(g=e.sent).data<0&&(alert("Your time is over date"),t.list.splice(t.list.length-3,4),t.placeList.pop(),t.saveList.pop(),g.data=t.totalTime),t.totalTime=g.data,console.log(g.data),e.next=74;break;case 71:e.prev=71,e.t2=e.catch(61),t.$log.error(e.t2);case 74:t.addressName="",t.$refs.address.clear(),t.address="",t.spendtime="";case 78:case"end":return e.stop()}},e,t,[[10,19],[38,45],[61,71]])}))()},deletePlace:function(){console.log("remove"),console.log(this.list.length),console.log(this.saveList);var t=this.saveList[this.saveList.length-1].location;this.$log.info("remove "+t),this.totalTime=this.saveList[this.saveList.length-1].remaining,this.list.length<=4?this.list.splice(0,4):this.list.splice(this.list.length-3,4),this.saveList.pop(),this.placeList.pop()},saveplan:function(){var t=this;return m()(d.a.mark(function e(){var a,n,s,r,i,o,l;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.saveList.push({email:t.$store.getters.getCookie("mail"),location:t.addressName,spendtime:t.spendtime,times:t.setStartTime,date:t.$store.getters.loadedPlanner(t.id).date,id:t.$store.getters.loadedPlanner(t.id).id,name:t.$store.getters.loadedPlanner(t.id).topic,duration:t.placeData,remaining:t.totalTime}),e.prev=1,a=!0,n=!1,s=void 0,e.prev=5,r=H()(t.saveList);case 7:if(a=(i=r.next()).done){e.next=18;break}return o=i.value,console.log(o),e.next=12,h.a.post("api/savedata/",o);case 12:l=e.sent,console.log(l.data),t.$log.info(o+" saved!");case 15:a=!0,e.next=7;break;case 18:e.next=24;break;case 20:e.prev=20,e.t0=e.catch(5),n=!0,s=e.t0;case 24:e.prev=24,e.prev=25,!a&&r.return&&r.return();case 27:if(e.prev=27,!n){e.next=30;break}throw s;case 30:return e.finish(27);case 31:return e.finish(24);case 32:alert("Save succesful!"),t.$router.push("/planners"),e.next=39;break;case 36:e.prev=36,e.t1=e.catch(1),t.$log.error(e.t1);case 39:case"end":return e.stop()}},e,t,[[1,36],[5,20,24,32],[25,,27,31]])}))()}}},A={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card",[a("v-card-title",[a("h1",{staticClass:"primary--text"},[t._v(t._s(t.planner.topic))])]),t._v(" "),a("v-card-media",{attrs:{src:t.planner.imageUrl,height:"400px"}}),t._v(" "),a("v-card-text",[a("div",{staticClass:"info--text"},[t._v(t._s(t.planner.date))])]),t._v(" "),a("v-form",[a("v-layout",{staticClass:"pb-6",attrs:{"align-center":"","justify-center":"",row:""}},[a("v-flex",{attrs:{xs2:""}},[a("h4",[t._v("Start Time")])]),t._v(" "),a("v-flex",{attrs:{xs1:""}},[a("v-combobox",{attrs:{items:t.hourList,disabled:this.disabled},model:{value:t.selectStartTimeHour,callback:function(e){t.selectStartTimeHour=e},expression:"selectStartTimeHour"}})],1),t._v(" "),a("v-flex",{attrs:{xs1:""}},[a("h3",[t._v(":")])]),t._v(" "),a("v-flex",{attrs:{xs1:""}},[a("v-combobox",{attrs:{items:t.minList,disabled:this.disabled},model:{value:t.selectStartTimeMin,callback:function(e){t.selectStartTimeMin=e},expression:"selectStartTimeMin"}})],1)],1),t._v(" "),a("v-layout",{staticClass:"pb-6",attrs:{"align-center":"","justify-center":"",row:""}},[a("v-flex",{attrs:{xs2:""}},[a("h4",[t._v("End Time")])]),t._v(" "),a("v-flex",{attrs:{xs1:""}},[a("v-combobox",{attrs:{items:t.hourList,disabled:this.disabled},model:{value:t.selectEndTimeHour,callback:function(e){t.selectEndTimeHour=e},expression:"selectEndTimeHour"}})],1),t._v(" "),a("v-flex",{attrs:{xs1:""}},[a("h3",[t._v(":")])]),t._v(" "),a("v-flex",{attrs:{xs1:""}},[a("v-combobox",{attrs:{items:t.minList,disabled:this.disabled},model:{value:t.selectEndTimeMin,callback:function(e){t.selectEndTimeMin=e},expression:"selectEndTimeMin"}})],1)],1),t._v(" "),a("v-layout",{staticClass:"pb-6",attrs:{"align-center":"","justify-center":"",row:""}},[a("v-flex",{attrs:{xs6:"","offset-xs2":"","offset-md2":"","offset-lg2":""}},[a("vuetify-google-autocomplete",{ref:"address",attrs:{id:"address","append-icon":"search",clearable:t.clearable,country:t.country,disabled:!t.dataIsValid,"enable-":t.enableGeolocation,label:"Search Place","prepend-icon":"place",required:"true",types:"establishment",onfocus:"value = ''"},on:{placechanged:t.getAddressData,"no-results-found":t.noResultsFound}})],1)],1),t._v(" "),a("v-layout",{staticClass:"pb-6",attrs:{"align-center":"",row:""}},[a("v-flex",{attrs:{xs3:"","offset-xs3":"","offset-md2":""}},[a("h4",[t._v("Spend time")])]),t._v(" "),a("v-flex",{attrs:{xs1:""}},[a("v-combobox",{attrs:{items:t.hourList},model:{value:t.spendTimeHour,callback:function(e){t.spendTimeHour=e},expression:"spendTimeHour"}})],1),t._v(" "),a("v-flex",{attrs:{xs2:""}},[a("h4",[t._v("Hour(s)")])]),t._v(" "),a("v-flex",{attrs:{xs1:"","offset-xs3":"","offset-md1":""}},[a("v-combobox",{attrs:{items:t.minList},model:{value:t.spendTimeMin,callback:function(e){t.spendTimeMin=e},expression:"spendTimeMin"}})],1),t._v(" "),a("v-flex",{attrs:{xs2:""}},[a("h4",[t._v("Minute(s)")])])],1)],1),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{staticClass:"primary",attrs:{disabled:!t.formIsValid},on:{click:t.addPlace}},[t._v("Add place")])],1)],1)],1)],1),t._v(" "),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card",[a("v-list",{attrs:{"two-line":""}},[t._l(t.list,function(e,n){return[e.divider?a("v-divider",{key:n,attrs:{inset:e.inset}}):e.duration?a("v-list-tile",{key:e.duration,attrs:{avatar:""}},[a("v-layout",{attrs:{"justify-center":""}},[a("v-list-action",[a("v-icon",[t._v("directions_car")])],1),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[t._v(": "+t._s(e.duration))])],1)],1)],1):a("v-list-tile",{key:e.name,attrs:{avatar:""}},[a("v-list-tile-avatar",[a("img",{attrs:{src:e.avatar}})]),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",{domProps:{innerHTML:t._s(e.name)}}),t._v(" "),a("v-list-tile-sub-title",[t._v("Spend time: "+t._s(e.spendtime)+" hours")])],1),t._v(" "),a("v-list-tile-action",[a("v-list-tile-action-text",[t._v("Time: "+t._s(e.time))])],1)],1)]})],2)],1)],1)],1),t._v(" "),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card",[a("v-card-actions",[a("v-spacer"),t._v(" "),a("h2",[t._v("Time remaining: "+t._s(this.totalTime)+" hours.minute")])],1),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{staticClass:"error",attrs:{disabled:!t.haveDATA},on:{click:t.deletePlace}},[t._v("Delete")])],1),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{staticClass:"primary",attrs:{disabled:!t.plannerIsValid},on:{click:function(e){t.alert=!t.alert}}},[t._v("Save")])],1),t._v(" "),a("v-card-text",{attrs:{right:""}},[a("v-spacer"),t._v(" "),a("div",{staticClass:"info--text"},[t._v("If you want to save this plan, please sign in.")])],1),t._v(" "),a("v-card-actions",[a("v-alert",{attrs:{value:t.alert,type:"success",transition:"scale-transition"}},[t._v("Do you want to save this planner?\n            "),a("v-btn",{staticClass:"info",nativeOn:{"~click":function(e){return t.saveplan(e)}}},[t._v("OK")]),t._v(" "),a("v-btn",{staticClass:"error",on:{click:function(e){t.alert=!t.alert}}},[t._v("Close")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]},E=a("VU/8")(N,A,!1,null,null,null).exports;n.default.use(l.a);var O=new l.a({routes:[{path:"/",name:"Home",component:w},{path:"/planners",name:"Planners",component:P},{path:"/planner/new",name:"CreatePlanner",component:I},{path:"/planners/:id",name:"Planner",props:!0,component:E},{path:"/account",name:"SignIn",component:M}],mode:"hash"}),B=a("K/Lq"),j=a.n(B),J=a("pZOg"),G=a.n(J),q=a("PGcl"),R=a("fSYm"),z=a.n(R),Y=a("a96c"),W=a.n(Y),K=a("5XsB"),Q=a("M+UZ"),X=a.n(Q),Z=a("IcMm"),tt=a.n(Z),et=a("rPQa"),at=a.n(et),nt=a("TWha"),st=a.n(nt),rt=a("fYhH"),it=a.n(rt),ot=a("7Q1V"),lt=a.n(ot),ct=a("7M7f"),dt=a.n(ct),ut=a("JUsQ"),mt=a.n(ut),pt=a("+9ps"),vt=a.n(pt),ft=a("6VHA"),ht=a.n(ft),gt=a("DDBM"),xt=a.n(gt),_t=a("/yi5"),bt=a.n(_t),kt=a("f/u0"),wt=a.n(kt),$t=a("8qgm"),Pt=a.n($t),Ct=a("IzLz"),Tt=a.n(Ct),yt=a("Wj7w"),Dt=a.n(yt),It=a("DBae"),Lt=a.n(It),St=a("LmeB"),Mt=a.n(St),Vt=a("srEY"),Ht=a.n(Vt),Ut=a("ZZrt"),Ft=a.n(Ut),Nt=a("XRgG"),At=a.n(Nt),Et=a("aR6d"),Ot=a.n(Et),Bt=a("BOXn"),jt=a.n(Bt);n.default.use(K.a,{clientId:"464916650517-c62c52q1j7jhvbuksr8a16i48d62au4t.apps.googleusercontent.com",scope:"profile email https://www.googleapis.com/auth/plus.login"}),n.default.use(W.a),n.default.use(z.a),n.default.use(q.a,{apiKey:"AIzaSyBENVTYtp6UnlTVs8gmLomS1NNlJqK7-ww"}),n.default.use(s.a),n.default.use(j.a),n.default.use(X.a,{components:{VApp:tt.a,VNavigationDrawer:at.a,VFooter:st.a,VList:it.a,VBtn:lt.a,VIcon:dt.a,VGrid:mt.a,VToolbar:vt.a,transitions:ht.a,VForm:xt.a,VTextField:bt.a,VCard:wt.a,VCarousel:Pt.a,VDatePicker:Tt.a,VTimePicker:Dt.a,VMenu:Lt.a,VDataTable:Mt.a,VTimeline:Ht.a,VAutocomplete:Ft.a,VDivider:At.a,VCombobox:Ot.a,VAlert:jt.a},theme:{primary:"#FFAB00",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#81D4FA",success:"#4CAF50",warning:"#FFC107"}}),n.default.config.productionTip=!1;var Jt={isEnabled:!0,logLevel:"error",stringifyArguments:!1,showLogLevel:!0,showMethodName:!0,separator:" ",showConsoleColors:!0};n.default.use(G.a,Jt),new n.default({el:"#app",router:O,store:_,render:function(t){return t(o)}})},NOHZ:function(t,e){},P0ba:function(t,e){},PJ2A:function(t,e){},Pjg2:function(t,e){},R681:function(t,e){},RGFK:function(t,e){},Stsr:function(t,e){},V5lI:function(t,e){},WZn9:function(t,e){},"X05+":function(t,e){},XC5Q:function(t,e){},acBN:function(t,e){},bbkW:function(t,e){},"d/lB":function(t,e){},f2Ia:function(t,e){},foti:function(t,e){},hVUK:function(t,e){},jQdp:function(t,e){},kP4z:function(t,e){},kVeV:function(t,e){},lThp:function(t,e){},poOk:function(t,e){},pu2v:function(t,e){},pxzo:function(t,e){},"q/9b":function(t,e){},sBiC:function(t,e){},twCh:function(t,e){},uKc5:function(t,e){},zO0O:function(t,e){},zegt:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.c70be9c6fa2b49bf713b.js.map