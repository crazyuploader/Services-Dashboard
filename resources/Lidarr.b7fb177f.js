import{s as c}from"./service.b55ec95b.js";import{_ as l,G as h,r as _,o as t,c as d,w as f,a as p,b as s,t as o,e as i}from"./index.f7d8c341.js";const u={name:"Lidarr",mixins:[c],props:{item:Object},components:{Generic:h},data:()=>({activity:null,warnings:null,errors:null,serverError:!1}),created:function(){this.fetchConfig()},methods:{fetchConfig:function(){this.fetch(`/api/v1/health?apikey=${this.item.apikey}`).then(e=>{this.warnings=0,this.errors=0;for(var r=0;r<e.length;r++)e[r].type=="warning"?this.warnings++:e[r].type=="error"&&this.errors++}).catch(e=>{console.error(e),this.serverError=!0}),this.fetch(`/api/v1/queue/status?apikey=${this.item.apikey}`).then(e=>{this.activity=e.totalCount}).catch(e=>{console.error(e),this.serverError=!0})}}},m={class:"notifs"},v={key:0,class:"notif activity",title:"Activity"},y={key:1,class:"notif warnings",title:"Warning"},g={key:2,class:"notif errors",title:"Error"},k={key:3,class:"notif errors",title:"Connection error to Lidarr API, check url and apikey in config.yml"};function w(e,r,n,C,E,$){const a=_("Generic");return t(),d(a,{item:n.item},{indicator:f(()=>[p("div",m,[e.activity>0?(t(),s("strong",v,o(e.activity),1)):i("",!0),e.warnings>0?(t(),s("strong",y,o(e.warnings),1)):i("",!0),e.errors>0?(t(),s("strong",g,o(e.errors),1)):i("",!0),e.serverError?(t(),s("strong",k,"?")):i("",!0)])]),_:1},8,["item"])}var L=l(u,[["render",w],["__scopeId","data-v-7a1acebc"]]);export{L as default};
