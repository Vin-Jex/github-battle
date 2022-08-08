"use strict";(self.webpackChunkreact_practice=self.webpackChunkreact_practice||[]).push([[13],{5013:function(e,n,a){a.r(n),a.d(n,{default:function(){return f}});var t=a(4942),r=a(5671),s=a(3144),l=a(9340),c=a(5716),i=a(2791),u=a(9135),o=a(8111),h=a(8417),m=a(184);function d(){return(0,m.jsx)(o.S,{children:function(e){var n=e.theme;return(0,m.jsxs)("div",{className:"instructions-container",children:[(0,m.jsx)("h1",{className:"center-text header-lg",children:"Instructions"}),(0,m.jsxs)("ul",{className:"container-sm grid center-text battle-instructions",children:[(0,m.jsxs)("li",{children:[(0,m.jsx)("h3",{className:"header-sm",children:"Enter two github users"}),(0,m.jsx)(u.wN,{className:"bg-".concat(n),color:"#ffbf74",size:140})]}),(0,m.jsxs)("li",{children:[(0,m.jsx)("h3",{className:"header-sm",children:"Battle"}),(0,m.jsx)(u.eMV,{className:"bg-".concat(n),color:"#727272",size:140})]}),(0,m.jsxs)("li",{children:[(0,m.jsx)("h3",{className:"header-sm",children:"See Winners"}),(0,m.jsx)(u.yyP,{className:"bg-".concat(n),color:"#ffd700",size:140})]})]})]})}})}var b=function(e){(0,l.Z)(a,e);var n=(0,c.Z)(a);function a(){var e;(0,r.Z)(this,a);for(var t=arguments.length,s=new Array(t),l=0;l<t;l++)s[l]=arguments[l];return(e=n.call.apply(n,[this].concat(s))).state={username:""},e.handleChange=function(n){e.setState({username:n.target.value})},e.handleSubmit=function(n){n.preventDefault(),e.props.onSubmit(e.state.username)},e}return(0,s.Z)(a,[{key:"render",value:function(){var e=this;return(0,m.jsx)(o.S,{children:function(n){var a=n.theme;return(0,m.jsxs)("form",{className:"column player",onSubmit:e.handleSubmit,children:[(0,m.jsx)("label",{htmlFor:"username",className:"player-label",children:e.props.label}),(0,m.jsxs)("div",{className:"row player-inputs sy",children:[(0,m.jsx)("input",{type:"text",id:"username",className:"input-".concat(a),placeholder:"github-username",autoComplete:"off",value:e.state.username,onChange:e.handleChange}),(0,m.jsx)("button",{className:"btn ".concat("dark"===a?"btn-light":"btn-dark"),type:"\ud83c\uddf8ubmit",disabled:!e.state.username,children:"Submit"})]})]})}})}}]),a}(i.Component);function p(e){var n=e.username,a=e.onReset,t=e.label;return(0,m.jsx)(o.S,{children:function(e){var r=e.theme;return(0,m.jsxs)("div",{className:"column player width",children:[(0,m.jsx)("h3",{className:"player-label",children:t}),(0,m.jsxs)("div",{className:"row bg-".concat(r," flex width-1"),children:[(0,m.jsxs)("div",{className:"player-info",children:[(0,m.jsx)("img",{src:"https://github.com/".concat(n,".png?size=180"),alt:"Avatar for ".concat(n),className:"avatar-small"}),(0,m.jsx)("a",{href:"https://github.com/".concat(n),className:"link",children:n})]}),(0,m.jsx)("button",{type:"button",className:"btn btn-clear flex-center",onClick:a,children:(0,m.jsx)(u.G5m,{color:"rgb(194, 57, 42)",size:26})})]})]})}})}var f=function(e){(0,l.Z)(a,e);var n=(0,c.Z)(a);function a(){var e;(0,r.Z)(this,a);for(var s=arguments.length,l=new Array(s),c=0;c<s;c++)l[c]=arguments[c];return(e=n.call.apply(n,[this].concat(l))).state={playerOne:null,playerTwo:null},e.handleSubmit=function(n,a){e.setState((0,t.Z)({},n,a))},e.handleReset=function(n){e.setState((0,t.Z)({},n,null))},e}return(0,s.Z)(a,[{key:"render",value:function(){var e=this,n=this.state,a=n.playerOne,t=n.playerTwo;return(0,m.jsxs)(i.Fragment,{children:[(0,m.jsx)(d,{}),(0,m.jsx)(o.S,{children:function(n){n.theme;return(0,m.jsxs)("div",{className:"player-container",children:[(0,m.jsx)("h1",{className:"center-text header-lg",children:"Players"}),(0,m.jsxs)("div",{className:"row space-around",children:[null===a?(0,m.jsx)(b,{label:"Player One",onSubmit:function(n){return e.handleSubmit("playerOne",n)}}):(0,m.jsx)(p,{username:a,label:"Player One",onReset:function(){return e.handleReset("playerOne")}}),null===t?(0,m.jsx)(b,{label:"Player Two",onSubmit:function(n){return e.handleSubmit("playerTwo",n)}}):(0,m.jsx)(p,{username:t,label:"Player Two",onReset:function(){return e.handleReset("playerTwo")}})]}),a&&t&&(0,m.jsx)(h.Z,{className:"btn btn-dark btn-space",to:{pathname:"/battle/result",search:"?playerOne=".concat(a,"&playerTwo=").concat(t)},children:"Battle"})]})}})]})}}]),a}(i.Component)},4942:function(e,n,a){function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}a.d(n,{Z:function(){return t}})}}]);
//# sourceMappingURL=13.29ffacca.chunk.js.map