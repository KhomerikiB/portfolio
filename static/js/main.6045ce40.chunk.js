(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(57)},27:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){},37:function(e,t,a){},39:function(e,t,a){},41:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){},48:function(e,t,a){},50:function(e,t,a){},52:function(e,t,a){},54:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),c=a.n(l);a(27),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(4),o=a(5),s=a(7),u=a(6),m=a(8),p=a(10),d={display:"flex",width:"80%",margin:"0 auto",paddingTop:"7rem",maxWidth:"134rem",height:"100vh"},h=function(e){return r.a.createElement("div",{style:d},e.children)},E=(a(33),function(e){return r.a.createElement("div",{className:"Left-side mobile-hide"},r.a.createElement("div",{className:"image-container "+e.imageExtra}),r.a.createElement("h1",{className:"image-title "+e.textExtra},"Web Developer"))}),v=(a(35),function(e){return r.a.createElement("div",{className:"Right-side"},r.a.createElement("div",{className:"flex-middle "+e.rightExtra},r.a.createElement("div",{className:"year"},"2019"),r.a.createElement("div",{className:"profession"},"Front end developer"),r.a.createElement("div",{className:"body"},"Hello! I am Beka, Front-end Developer from Georgia. I am a responsible and hard-working person with good communication and fast-learning skills. My highest priority when working with customers is to deliver a high-quality product."),r.a.createElement("div",{className:"Languages-home"},r.a.createElement("div",null,r.a.createElement("span",{className:"Languages-title"},"Languages:")," #HTML5 , CSS3"),r.a.createElement("div",null,"#JavaScript"),r.a.createElement("div",null,"#React"))))}),g=(a(37),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={imageExtra:"",textExtra:"",rightExtra:"",mobileImageExtra:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;"/"!==this.props.currentPage&&"/portfolio"!==this.props.currentPage&&"/portfolio/"!==this.props.currentPage||setTimeout(function(){e.setState({imageExtra:"image-extra",textExtra:"text-extra",rightExtra:"right-extra",mobileImageExtra:"mobile-imageExtra"})},100)}},{key:"shouldComponentUpdate",value:function(e,t){return"/portfolio"!==e.currentPage&&"/portfolio/"!==e.currentPage&&"image-extra"===t.imageExtra&&"text-extra"===t.textExtra&&"right-extra"===t.rightExtra&&"/"!==e.currentPage&&this.setState({imageExtra:"",textExtra:"",rightExtra:"",mobileImageExtra:""}),!0}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"image-mobile desktop-hide "+this.state.mobileImageExtra}),r.a.createElement(h,null,r.a.createElement("div",{className:"Flex-container"},r.a.createElement(E,{imageExtra:this.state.imageExtra,textExtra:this.state.textExtra}),r.a.createElement(v,{rightExtra:this.state.rightExtra}))))}}]),t}(r.a.Component)),f=(a(39),a(41),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={extra:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;"WORK"!==this.props.currentPage&&"/work"!==this.props.currentPage||setTimeout(function(){e.setState({extra:"project-extra"})},100)}},{key:"shouldComponentUpdate",value:function(e,t){return"WORK"!==e.currentPage&&"project-extra"===t.extra&&"/work"!==e.currentPage&&this.setState({extra:""}),!0}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{href:this.props.href,target:"_blank",rel:"noopener noreferrer",className:"project "+this.state.extra,style:{top:this.props.top,left:this.props.left}},r.a.createElement("span",{className:"Project-title",style:{color:this.props.color}},this.props.title),r.a.createElement("span",{className:"Languages"},r.a.createElement("span",{className:"Languages-list"},this.props.languages),r.a.createElement("span",{className:"second-title"},r.a.createElement("div",null,"Open Project")))))}}]),t}(r.a.Component)),b=(a(43),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement(f,{top:"30%",left:"0%",color:"#90feb5",title:"Hotelweb",languages:"#JavaScript #HTML5 #CSS3",currentPage:this.props.currentPage,href:"http://hotelweb.ge/"}),r.a.createElement(f,{top:"50%",left:"33.4%",color:"#dcdde1",title:"Atelier Buckley",languages:"#JavaScript #HTML5 #CSS3",currentPage:this.props.currentPage,href:"http://atelierbuckley.com/"}),r.a.createElement(f,{top:"10%",left:"33.4%",color:"#ffcb08",title:"Capital Express",languages:"#JavaScript #HTML5 #CSS3",currentPage:this.props.currentPage,href:"https://webdigital.gq/en"}))}}]),t}(r.a.Component)),x=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(h,null,r.a.createElement("div",{className:"Work"},r.a.createElement(b,{currentPage:this.props.currentPage})))}}]),t}(r.a.Component),k=(a(45),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={extra:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;"ABOUT"!==this.props.currentPage&&"/about"!==this.props.currentPage||setTimeout(function(){e.setState({extra:"extra-flexbox"})},100)}},{key:"shouldComponentUpdate",value:function(e,t){return"ABOUT"!==e.currentPage&&"extra-flexbox"===t.extra&&"/about"!==e.currentPage&&this.setState({extra:""}),!0}},{key:"render",value:function(){return r.a.createElement(h,null,r.a.createElement("div",{className:"flex"},r.a.createElement("div",{className:"flex-box "+this.state.extra},r.a.createElement("div",{className:"About-title"},"About"),r.a.createElement("div",{className:"About-description"},"I\u2019m Beka Khomeriki, Front-end Developer based in Georgia.",r.a.createElement("br",null)," My priority is to deliver a high-quality product with high-quality code. I enjoy writing code and always doing my best.")),r.a.createElement("div",{className:"flex-box "+this.state.extra},r.a.createElement("div",{className:"About-title"},"SKILLS"),r.a.createElement("div",{className:"About-skills"},r.a.createElement("span",null,"JavaScript"),r.a.createElement("span",null,"React")),r.a.createElement("div",{className:"About-skills"},r.a.createElement("span",null,"CSS3"),r.a.createElement("span",null,"SASS")),r.a.createElement("div",{className:"About-skills"},r.a.createElement("span",null,"HTML5"),r.a.createElement("span",null,"Responsive Design")),r.a.createElement("div",{className:"About-skills"})),r.a.createElement("div",{className:"flex-box "+this.state.extra},r.a.createElement("div",{className:"About-title"},"Contact"),r.a.createElement("div",{className:"About-description"},"Get In Touch ",r.a.createElement("span",{className:"line"})," khomerikibeka2@gmail.com"))))}}]),t}(r.a.Component)),y=(a(48),function(e){return{type:e,payload:e}}),N=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={active:"",activeSec:"",mobileMenu:!1},a.checkForMobileClick=function(){a.state.mobileMenu&&a.setState({mobileMenu:!a.state.mobileMenu})},a.mainPage=function(e){e.preventDefault(),"/portfolio"!==a.props.location.pathname&&(a.props.changeURL("/"),setTimeout(function(){a.props.history.push("/portfolio")},700)),a.setState({activeSec:"active"})},a.handleHome=function(e){a.activeClass(e),e.preventDefault(),a.mainPage(e),a.checkForMobileClick()},a.handleWork=function(e){a.activeClass(e),e.preventDefault(),"/portfolio/work"!==a.props.location.pathname&&(a.props.changeURL("WORK"),setTimeout(function(){a.props.history.push("/portfolio/work")},700)),a.checkForMobileClick()},a.handleAbout=function(e){a.activeClass(e),e.preventDefault(),"/portfolio/about"!==a.props.location.pathname&&(a.props.changeURL("ABOUT"),setTimeout(function(){a.props.history.push("/portfolio/about")},500)),a.checkForMobileClick()},a.activeClass=function(e){var t=document.querySelectorAll(" li a");a.setState({activeSec:""}),t.forEach(function(e){e.classList.remove("active")}),e.target.classList.add("active")},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"Menu-nav"},r.a.createElement("span",{className:"Logo"},"Portfolio"),r.a.createElement("li",{className:"mobile-hide"},r.a.createElement("a",{onClick:this.handleHome,href:"/",className:this.state.activeSec},"Home")),r.a.createElement("li",{className:"mobile-hide"},r.a.createElement("a",{onClick:this.handleWork,href:"/"},"Work")),r.a.createElement("li",{className:"mobile-hide"},r.a.createElement("a",{onClick:this.handleAbout,href:"/"},"About")),r.a.createElement("li",{className:"burger desktop-hide",onClick:function(){return e.setState({mobileMenu:!e.state.mobileMenu})}},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))),r.a.createElement("div",{className:this.state.mobileMenu?"mobile-menu desktop-hide mobileMenuActive":"mobile-menu desktop-hide"},r.a.createElement("div",{className:"x-mobileMenu",onClick:function(){return e.setState({mobileMenu:!e.state.mobileMenu})}},"close"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{onClick:this.handleHome,href:"/portfolio",className:this.state.activeSec},"Home")),r.a.createElement("li",null,r.a.createElement("a",{onClick:this.handleWork,href:"/portfolio"},"Work")),r.a.createElement("li",null,r.a.createElement("a",{onClick:this.handleAbout,href:"/portfolio"},"About")))))}}]),t}(r.a.Component),P=Object(p.b)(function(e){return{currentPage:e.currentPage}},{changeURL:y})(N),O=(a(50),function(e){return r.a.createElement("div",{className:"Lines"},r.a.createElement("div",{className:"Line"}),r.a.createElement("div",{className:"Line mobile-hide"}),r.a.createElement("div",{className:"Line"}),r.a.createElement("div",{className:"Line mobile-hide"}),r.a.createElement("div",{className:"Line"}),r.a.createElement("div",{className:"Line mobile-hide"}),r.a.createElement("div",{className:"Line"}),e.children)}),j=(a(52),function(e){var t=";";return t="/"!==e.currentPage?"Pluses visible":"Pluses",r.a.createElement("div",{className:"Plus mobile-hide-plus"},r.a.createElement("div",{className:"Pluses"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement("div",{className:"Pluses"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement("div",{className:t},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement("div",{className:"Pluses"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement("div",{className:"Pluses"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))}),S=(a(54),function(e){var t="";return t="/portfolio/"===e.currentPage||"/"===e.currentPage||"/portfolio"===e.currentPage?"Overlay overlay-extra":"Overlay",console.log(e.currentPage),r.a.createElement("div",{className:t})}),w=a(59),C=a(61),L=a(60),A=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(w.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{path:"/portfolio",render:function(e){return r.a.createElement(P,e)}}),r.a.createElement(L.a,null,r.a.createElement(C.a,{path:"/portfolio",exact:!0,render:function(){return r.a.createElement(g,{currentPage:e.props.currentPage})}}),r.a.createElement(C.a,{path:"/portfolio/work",render:function(){return r.a.createElement(x,{currentPage:e.props.currentPage})}}),r.a.createElement(C.a,{path:"/portfolio/about",render:function(){return r.a.createElement(k,{currentPage:e.props.currentPage})}}),"/>"))),r.a.createElement(O,null,r.a.createElement(j,{currentPage:this.props.currentPage})),r.a.createElement(S,{currentPage:this.props.currentPage}))}}]),t}(r.a.Component),M=Object(p.b)(function(e){return{currentPage:e.currentPage}})(A),T=a(11),W=a(13),F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{currentPage:window.location.pathname},t=arguments.length>1?arguments[1]:void 0;return"/"===t.type?e=Object(W.a)({},e,{currentPage:t.payload}):"WORK"===t.type?e=Object(W.a)({},e,{currentPage:t.payload}):"ABOUT"===t.type&&(e=Object(W.a)({},e,{currentPage:t.payload})),e},H=Object(T.b)(F);c.a.render(r.a.createElement(p.a,{store:H},r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,2,1]]]);
//# sourceMappingURL=main.6045ce40.chunk.js.map