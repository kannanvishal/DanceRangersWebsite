(this["webpackJsonpmy-html-app"]=this["webpackJsonpmy-html-app"]||[]).push([[0],{19:function(e,a,t){e.exports=t(30)},30:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(17),r=t.n(c);var o=function(){return l.a.createElement("div",{className:"icons"},l.a.createElement("a",{href:"https://www.facebook.com/dancerangers04/",title:"Dance Rangers on Facebook"},l.a.createElement("i",{className:"fa fa-facebook","aria-hidden":"true"})),l.a.createElement("a",{href:"https://www.youtube.com/channel/UC85-G-adJ6PM0NDP7YWnrcg",title:"Dance Rangers on Youtube"},l.a.createElement("i",{className:"fa fa-youtube-play","aria-hidden":"true"})),l.a.createElement("a",{href:"https://www.instagram.com/dancerangers/?hl=en",title:"Dance Rangers on Instagram"},l.a.createElement("i",{className:"fa fa-instagram","aria-hidden":"true"})),l.a.createElement("a",{href:"mailto:dancerangers04@gmail.com",title:"Email  to Dance Rangers"},l.a.createElement("i",{className:"fa fa-envelope-o","aria-hidden":"true"})))},s=t(5);var m=function(){return l.a.createElement("nav",{className:"navbar"},l.a.createElement("ul",{className:"navbar-navlist"},l.a.createElement("li",null,l.a.createElement(s.b,{className:"navLink",to:"/home"},"Home")),l.a.createElement("li",null,l.a.createElement(s.b,{className:"navLink",to:"/images"},"Images")),l.a.createElement("li",null,l.a.createElement(s.b,{className:"navLink",to:"/videos"},"Videos")),l.a.createElement("li",null,l.a.createElement(s.b,{className:"navLink",to:"/contact"},"Contact"))),l.a.createElement(o,null))};var i=function(){return l.a.createElement("img",{id:"home",className:"img1",src:"./assets/cover.jpg",alt:""})};var u=function(){function e(){!0===document.querySelector(".toggler").checked&&(document.querySelector(".toggler").checked=!1)}return l.a.createElement("div",{className:"menu-wrap"},l.a.createElement("input",{type:"checkbox",className:"toggler"}),l.a.createElement("div",{className:"hamburger"},l.a.createElement("div",null)),l.a.createElement("div",{className:"menu"},l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(s.b,{to:"/home",onClick:e},"Home")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/images",onClick:e},"Images")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/videos",onClick:e},"Videos")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/contact",onClick:e},"Contact")))))))},E=t(9),d=t.n(E);var h=function(){return d()(window).scroll((function(){d()(this).scrollTop()?d()(".header").addClass("sticky"):d()(".header").removeClass("sticky")})),l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"header"},l.a.createElement(m,null),l.a.createElement(u,null)),l.a.createElement(i,null))},g=new Date;var p=function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("p",null,"Copyright \xa9 ",g.getFullYear()))};var b=function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("p",null,"Page is Under Construction"))},f=t(11),v={api_key:"AIzaSyBDgaTIYzG_5tnauHDMtBT5pgaCJRptikQ",channel_id:"UC85-G-adJ6PM0NDP7YWnrcg"},N=t(10),w=t.n(N),y=function(){var e=Object(n.useState)(),a=Object(f.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(),o=Object(f.a)(r,2),s=o[0],m=o[1],i=Object(n.useState)(),u=Object(f.a)(i,2),E=u[0],d=u[1];return Object(n.useEffect)((function(){var e=v.api_key,a="https://www.googleapis.com/youtube/v3/channels?part=statistics&id=".concat(v.channel_id,"&key=").concat(e);fetch(a).then((function(e){return e.json()})).then((function(e){console.log(e);var a=w()(e.items[0].statistics.subscriberCount).format(0,0),t=w()(e.items[0].statistics.viewCount).format(0,0),n=w()(e.items[0].statistics.videoCount).format(0,0);c(a),d(n),m(t)}))})),l.a.createElement("section",{className:"row youtubeData"},l.a.createElement("article",{className:"col-lg-4 col-md-4 .col-sm- 4 col-xs-12"},l.a.createElement("p",null,t,"+ Subscribers ")),l.a.createElement("article",{className:"col-lg-4 col-md-4 .col-sm- 4 col-xs-12"},l.a.createElement("p",null,s,"+ Views ")),l.a.createElement("article",{className:"col-lg-4 col-md-4 .col-sm- 4 col-xs-12"},l.a.createElement("p",null,E," Total Videos ")))};var k=function(){return l.a.createElement("section",null,l.a.createElement("article",{className:"about",id:"about"},l.a.createElement("p",{className:"heading"},"Dancer | Youtuber | Choreography"),l.a.createElement("p",{className:"subHeading"},"Dance Rangers is a tribe of 4 Dance Souls and we welcome you to our Dance World. We focus on showcasing various dance styles through unique choreography techniques. Do follow and be a member of our Clan in this journey ahead.")),l.a.createElement(y,null),l.a.createElement("article",{className:"about"},l.a.createElement("p",{className:"heading"},"Our Story"),l.a.createElement("p",{className:"subHeading"},"Dance Rangers is a tribe of 4 Dance Souls and we welcome you to our Dance World. We focus on showcasing various dance styles through unique choreography techniques. Do follow and be a member of our Clan in this journey ahead.")))},C=t(1),D=(t(29),l.a.createElement(s.a,null,l.a.createElement("div",null,l.a.createElement(h,null),l.a.createElement(C.d,null,l.a.createElement(C.b,{exact:!0,path:"/"},l.a.createElement(C.a,{to:"/home"})),l.a.createElement(C.b,{exact:!0,path:"/home",component:k}),l.a.createElement(C.b,{path:"/images",component:b}),l.a.createElement(C.b,{path:"/videos",component:b}),l.a.createElement(C.b,{path:"/contact",component:b})),l.a.createElement(p,null))));r.a.render(D,document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.7f85410b.chunk.js.map