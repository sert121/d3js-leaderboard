(this["webpackJsonpd3js-leaderboard"]=this["webpackJsonpd3js-leaderboard"]||[]).push([[0],{116:function(e,a,t){},119:function(e,a,t){},120:function(e,a,t){"use strict";t.r(a);var l=t(1),r=t.n(l),i=t(33),n=t.n(i),d=t(3),u=(t(116),t(4)),c=t(0);var s=function(e){var a,t=e.data,r=e.width,i=Object(l.useRef)(null),n=Object(l.useState)(null!==(a=60*t.length)&&void 0!==a?a:0),s=Object(d.a)(n,2),b=s[0],o=s[1];return Object(l.useEffect)((function(){var e;o(60*t.length);var a=60*t.length,l=u.f(i.current),n=null!==(e=u.d(t.map((function(e){return+e.value}))))&&void 0!==e?e:1,d=u.e().domain([0,n]).range([5,r]),c=u.e().domain([0,t.length]).range([0,a]),s="1.1rem",b="#000000",v=l.selectAll("g").data(t,(function(e){return e.id})),h=v.enter().append("g").attr("transform","translate(0, ".concat(c(t.length)+500,")"));h.append("rect").attr("class","bg").attr("fill","#d4d8df").attr("x",0).attr("y",2).attr("rx",5).attr("ry",5).attr("height",10),h.append("rect").attr("class","main").attr("fill","#3d76c1").attr("x",0).attr("y",2).attr("rx",5).attr("ry",5).attr("height",10),h.append("text").attr("class","label").attr("font-size",s).attr("fill",b).attr("x",0).attr("y",-5).text((function(e){return e.label})),h.append("text").attr("class","value").attr("text-anchor","end").attr("fill",b).attr("font-size",s).attr("y",-5);var j=v.merge(h);j.transition().ease(u.b).duration(500).attr("transform",(function(e,a){return"translate(0, ".concat(c(a)+30,")")})),j.select("rect.bg").attr("width",d(n)),j.select("rect.main").transition().ease(u.c).duration(1e3).attr("width",(function(e){return d(e.value)})),j.select("text.value").text((function(e){return e.value})).attr("x",d(n)),v.exit().attr("opacity",1).transition().ease(u.a).duration(200).attr("transform",(function(e,a){return"translate(-50, ".concat(c(a),")")})).attr("opacity",0).remove()}),[i,t,r,2,60,10]),Object(c.jsx)("svg",{width:r,height:b,ref:i})},b=[{id:1,value:6,label:"United States"},{id:2,value:83,label:"Sweden"},{id:3,value:31,label:"Belarus"},{id:4,value:28,label:"Iran"},{id:5,value:6,label:"Philippines"},{id:8,value:46,label:"Malaysia"},{id:9,value:34,label:"Czech Republic"},{id:11,value:48,label:"France"},{id:14,value:5,label:"Moldova"},{id:15,value:33,label:"Indonesia"},{id:17,value:33,label:"Ukraine"},{id:21,value:7,label:"Germany"},{id:23,value:38,label:"Argentina"},{id:25,value:92,label:"Peru"},{id:26,value:37,label:"Brazil"},{id:32,value:29,label:"Kyrgyzstan"},{id:33,value:85,label:"Afghanistan"},{id:35,value:17,label:"Japan"},{id:36,value:57,label:"Indonesia"},{id:37,value:50,label:"Nigeria"},{id:39,value:8,label:"Tunisia"},{id:41,value:67,label:"Armenia"},{id:42,value:92,label:"Russia"},{id:43,value:1,label:"Colombia"},{id:45,value:74,label:"Vietnam"},{id:48,value:21,label:"Poland"},{id:51,value:96,label:"Brazil"},{id:54,value:95,label:"Germany"},{id:58,value:41,label:"Belarus"},{id:61,value:77,label:"Ecuador"},{id:68,value:33,label:"Portugal"},{id:71,value:70,label:"Philippines"},{id:74,value:58,label:"United States"},{id:75,value:65,label:"Sri Lanka"},{id:77,value:74,label:"Russia"},{id:81,value:96,label:"Comoros"},{id:82,value:57,label:"Greece"},{id:83,value:32,label:"Vietnam"},{id:84,value:81,label:"Sweden"},{id:85,value:35,label:"Ivory Coast"},{id:86,value:49,label:"Slovenia"},{id:87,value:63,label:"Finland"},{id:90,value:36,label:"Portugal"},{id:91,value:60,label:"Macedonia"},{id:93,value:99,label:"Netherlands"},{id:97,value:19,label:"Croatia"},{id:98,value:28,label:"Luxembourg"},{id:99,value:59,label:"France"},{id:100,value:76,label:"Marshall Islands"}];var o=t(34);var v=function(){var e=Object(o.a)({debounce:100}),a=Object(d.a)(e,2),t=a[0],r=a[1].width,i=Object(l.useState)([]),n=Object(d.a)(i,2),u=n[0],v=n[1],h=Object(l.useCallback)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:7;return new Promise((function(a){a(b.sort((function(){return.5-Math.random()})).slice(0,e))}))}().then((function(e){return v(e)}))}),[]);return Object(l.useEffect)((function(){return h()}),[h]),Object(c.jsxs)("div",{className:"app",children:[Object(c.jsx)("div",{className:"leaderboard-container",ref:t,children:Object(c.jsx)(s,{data:u,width:r})}),Object(c.jsx)("div",{className:"button",children:Object(c.jsx)("button",{onClick:function(){return h()},children:"Refresh Data"})})]})};t(119);var h=function(){return Object(c.jsxs)("div",{className:"intro",children:[Object(c.jsx)("h1",{children:"D3.js Leaderboard"}),Object(c.jsx)("p",{children:"Here is a small leaderboard made with D3.js. It is responsive, updates in real-time and can be easily customized."}),Object(c.jsxs)("p",{children:["Check out the ",Object(c.jsx)("a",{href:"https://github.com/rhidra/d3js-leaderboard",target:"_blank",children:"source code here"}),", and the original ",Object(c.jsx)("a",{href:"https://blog.remyhidra.dev/",target:"_blank",children:"blog post here"}),"."]})]})};n.a.render(Object(c.jsxs)(r.a.StrictMode,{children:[Object(c.jsx)(h,{}),Object(c.jsx)("div",{className:"wrapper",children:Object(c.jsx)(v,{})})]}),document.getElementById("root"))}},[[120,1,2]]]);
//# sourceMappingURL=main.3057f44a.chunk.js.map