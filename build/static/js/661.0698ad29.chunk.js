"use strict";(self.webpackChunkreact_practice=self.webpackChunkreact_practice||[]).push([[661],{4208:function(e,r,n){n.d(r,{Z:function(){return s}});n(2791);var t=n(8111),o=n(184);function s(e){var r=e.header,n=e.subheader,s=e.avatar,i=e.href,a=e.name,c=e.children;return(0,o.jsx)(t.S,{children:function(e){var t=e.theme;return(0,o.jsxs)("div",{className:"card bg-".concat(t),children:[(0,o.jsx)("h4",{className:"header-lg center-text",children:r}),(0,o.jsx)("img",{src:s,alt:"Avatar for ".concat(a),className:"avatar"}),n&&(0,o.jsx)("h4",{className:"center-text",children:n}),(0,o.jsx)("h2",{className:"center-text",children:(0,o.jsx)("a",{href:i,target:"_blank",rel:"noreferrer noopener",className:"link",children:a})}),c]})}})}},4661:function(e,r,n){n.r(r),n.d(r,{default:function(){return g}});var t=n(5671),o=n(3144),s=n(9340),i=n(5716),a=n(2791),c=n(9086),l=n(9135),u=n(4208),h=n(9388),f=n(7847),d=n(4245),p=n(8417),m=n(184);function x(e){var r=e.profile;return(0,m.jsxs)("ul",{className:"card-list",children:[(0,m.jsx)("li",{children:(0,m.jsxs)(f.Z,{text:"Github Username",children:[(0,m.jsx)(l.Xws,{color:"rgb(239, 115, 115)",size:22}),r.name]})}),r.location&&(0,m.jsx)("li",{children:(0,m.jsxs)(f.Z,{text:"User's Location",children:[(0,m.jsx)(l.Phk,{color:"#795548",size:22})," ",r.location]})}),r.company&&(0,m.jsx)("li",{children:(0,m.jsxs)(f.Z,{text:"User's Company",children:[(0,m.jsx)(l.I8D,{color:"rgb(144, 116, 255)",size:22})," ",r.company]})}),(0,m.jsxs)("li",{children:[(0,m.jsx)(l.I$,{color:"rgb(129, 195, 245)",size:22}),r.followers.toLocaleString()," followers"]}),(0,m.jsxs)("li",{children:[(0,m.jsx)(l.wN,{color:"rgb(64, 183, 95)",size:22}),r.following.toLocaleString()," following"]})]})}var g=function(e){(0,s.Z)(n,e);var r=(0,i.Z)(n);function n(){var e;(0,t.Z)(this,n);for(var o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];return(e=r.call.apply(r,[this].concat(s))).state={winner:null,loser:null,error:null,loading:!0},e}return(0,o.Z)(n,[{key:"componentDidMount",value:function(){var e=this,r=d.parse(this.props.location.search),n=r.playerOne,t=r.playerTwo;(0,c.N)([n,t]).then((function(r){e.setState({winner:r[0],loser:r[1],error:null,loading:!1})})).catch((function(r){var n=r.message;e.setState({error:n,loading:!1})}))}},{key:"render",value:function(){var e=this.state,r=e.winner,n=e.loser,t=e.error;return!0===e.loading?(0,m.jsx)(h.Z,{text:"Battling",speed:500}):t?(0,m.jsxs)("p",{className:"center-text error",children:["\u2757 ",t]}):(0,m.jsxs)(a.Fragment,{children:[(0,m.jsxs)("div",{className:"grid space-around container-sm",children:[(0,m.jsx)(u.Z,{header:r.score===n.score?"Tie":"Winner",subheader:"Score: ".concat(r.score.toLocaleString()),avatar:r.profile.avatar_url,href:r.profile.html_url,name:r.profile.login,children:(0,m.jsx)(x,{profile:r.profile})}),(0,m.jsx)(u.Z,{header:r.score===n.score?"Tie":"Loser",subheader:"Score: ".concat(n.score.toLocaleString()),avatar:n.profile.avatar_url,name:n.profile.login,href:n.profile.html_url,children:(0,m.jsx)(x,{profile:n.profile})})]}),(0,m.jsx)(p.Z,{className:"btn btn-dark btn-space",to:"/battle",children:"Reset"})]})}}]),n}(a.Component)},7847:function(e,r,n){n.d(r,{Z:function(){return d}});var t=n(2791),o=n(5671),s=n(3144),i=n(9340),a=n(5716),c=n(184),l=function(e){(0,i.Z)(n,e);var r=(0,a.Z)(n);function n(){var e;(0,o.Z)(this,n);for(var t=arguments.length,s=new Array(t),i=0;i<t;i++)s[i]=arguments[i];return(e=r.call.apply(r,[this].concat(s))).state={hovering:!1},e.mouseOver=function(){e.setState({hovering:!0})},e.mouseOut=function(){e.setState({hovering:!1})},e}return(0,s.Z)(n,[{key:"render",value:function(){return(0,c.jsx)("div",{onMouseOver:this.mouseOver,onMouseOut:this.mouseOut,children:this.props.children(this.state.hovering)})}}]),n}(t.Component),u=l,h={container:{position:"relative",display:"flex"},tooltip:{boxSizing:"border-box",position:"absolute",width:"8.5rem",bottom:"1005",left:"50%",marginLeft:"-3.5rem",borderRadius:".2rem",backgroundColor:"hsla(0, 0%, 20%, 0.9)",padding:".5rem",marginBottom:".4rem",color:"#fff",textAlign:"center",fontSize:".9rem",textTransform:"capitalize"}};function f(e){var r=e.text,n=e.children;return(0,c.jsx)(u,{children:function(e){return(0,c.jsxs)("div",{style:h.container,children:[!0===e&&(0,c.jsx)("div",{style:h.tooltip,children:r}),n]})}})}f.defaultProp={text:"User's "};var d=f},9086:function(e,r,n){n.d(r,{N:function(){return l},Q:function(){return u}});var t=n(8152),o="?client_id=".concat("YOUR_CLIENT_ID","&client_secret=").concat("YOUR_SECRET_ID");function s(e,r){return"Not Found"===e?"".concat(r," doesn't exist"):e}function i(e){return fetch("https://api.github.com/users/".concat(e,"/repos").concat(o,"&per_page=100")).then((function(e){return e.json()})).then((function(r){if(r.message)throw new Error(s(r.message,e));return r}))}function a(e,r){return 3*e+function(e){return e.reduce((function(e,r){return e+r.stargazers_count}),0)}(r)}function c(e){return Promise.all([(r=e,fetch("https://api.github.com/users/".concat(r).concat(o)).then((function(e){return e.json()})).then((function(e){if(e.message)throw new Error(s(e.message,r));return e}))),i(e)]).then((function(e){var r=(0,t.Z)(e,2),n=r[0],o=r[1];return{profile:n,score:a(n.followers,o)}}));var r}function l(e){return Promise.all([c(e[0]),c(e[1])]).then((function(e){return function(e){return e.sort((function(e,r){return r.score-e.score}))}(e)}))}function u(e){var r=window.encodeURI("https://api.github.com/search/repositories?q=stars:>1+language:".concat(e,"&sort=stars&order=desc&type=Repositories"));return fetch(r).then((function(e){return e.json()})).then((function(e){if(!e.items)throw new Error(e.message);return e.items}))}}}]);
//# sourceMappingURL=661.0698ad29.chunk.js.map