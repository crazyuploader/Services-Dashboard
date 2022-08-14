import{s as l}from"./service.b55ec95b.js";import{_ as d,G as C,r as y,o as i,c as _,w as a,a as r,t as o,b as n,d as u,F as c,n as f,e as p}from"./index.f7d8c341.js";const b={name:"Emby",mixins:[l],props:{item:Object},components:{Generic:C},data:()=>({status:"",albumCount:0,songCount:0,movieCount:0,seriesCount:0,episodeCount:0}),computed:{embyCount:function(){return this.item.libraryType==="music"?`${this.songCount} songs, ${this.albumCount} albums`:this.item.libraryType==="movies"?`${this.movieCount} movies`:this.item.libraryType==="series"?`${this.episodeCount} eps, ${this.seriesCount} series`:"wrong library type \u{1F480}"}},created(){this.fetchServerStatus(),!this.item.subtitle&&this.status!=="dead"&&this.fetchServerMediaStats()},methods:{fetchServerStatus:async function(){this.fetch("/System/info/public").then(t=>{if(t.Id)this.status="running";else throw new Error}).catch(t=>{console.log(t),this.status="dead"})},fetchServerMediaStats:async function(){const t={"X-Emby-Token":this.item.apikey};var e=await this.fetch("/items/counts",{headers:t}).catch(s=>{console.log(s)});this.albumCount=e.AlbumCount,this.songCount=e.SongCount,this.movieCount=e.MovieCount,this.seriesCount=e.SeriesCount,this.episodeCount=e.EpisodeCount}}},v={class:"title is-4"},g={class:"subtitle is-6"};function S(t,e,s,k,E,m){const h=y("Generic");return i(),_(h,{item:s.item},{content:a(()=>[r("p",v,o(s.item.name),1),r("p",g,[s.item.subtitle?(i(),n(c,{key:0},[u(o(s.item.subtitle),1)],64)):(i(),n(c,{key:1},[u(o(m.embyCount),1)],64))])]),indicator:a(()=>[t.status?(i(),n("div",{key:0,class:f(["status",t.status])},o(t.status),3)):p("",!0)]),_:1},8,["item"])}var x=d(b,[["render",S],["__scopeId","data-v-6f255606"]]);export{x as default};
