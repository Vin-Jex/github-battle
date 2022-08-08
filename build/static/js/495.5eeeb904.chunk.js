"use strict";(self.webpackChunkreact_practice=self.webpackChunkreact_practice||[]).push([[495],{4208:function(e,r,t){t.d(r,{Z:function(){return a}});t(2791);var n=t(8111),o=t(184);function a(e){var r=e.header,t=e.subheader,a=e.avatar,i=e.href,s=e.name,c=e.children;return(0,o.jsx)(n.S,{children:function(e){var n=e.theme;return(0,o.jsxs)("div",{className:"card bg-".concat(n),children:[(0,o.jsx)("h4",{className:"header-lg center-text",children:r}),(0,o.jsx)("img",{src:a,alt:"Avatar for ".concat(s),className:"avatar"}),t&&(0,o.jsx)("h4",{className:"center-text",children:t}),(0,o.jsx)("h2",{className:"center-text",children:(0,o.jsx)("a",{href:i,target:"_blank",rel:"noreferrer noopener",className:"link",children:s})}),c]})}})}},7495:function(e,r,t){t.r(r),t.d(r,{default:function(){return v}});var n=t(4942),o=t(5671),a=t(3144),i=t(9340),s=t(5716),c=t(2791),u=t(9086),l=t(9135),f=t(4208),h=t(9388),d=t(7847),g=t(184);function p(e){var r=e.selected,t=e.onUpdateLanguage;return(0,g.jsx)("ul",{className:"flex-center",children:["All","JavaScript","Ruby","Java","CSS","Python"].map((function(e){return(0,g.jsx)("li",{children:(0,g.jsx)("button",{onClick:function(){return t(e)},className:"btn btn-clear nav-link",style:e===r?{color:"rgb(187, 46, 31"}:null,children:e})},e)}))})}function m(e){var r=e.repos;return(0,g.jsx)("ul",{className:"grid space-around",children:r.map((function(e,r){var t=e.owner,n=e.html_url,o=e.stargazers_count,a=e.forks,i=e.open_issues,s=t.login,c=t.avatar_url;return(0,g.jsx)("li",{children:(0,g.jsx)(f.Z,{header:"#".concat(r+1),avatar:c,href:n,name:s,children:(0,g.jsxs)("ul",{className:"card-list",children:[(0,g.jsx)("li",{children:(0,g.jsxs)(d.Z,{text:"Github Username",children:[(0,g.jsx)(l.Xws,{color:"rgb(255, 191, 116)",size:22}),(0,g.jsx)("a",{href:"https://github.com/".concat(s),children:s})]})}),(0,g.jsxs)("li",{children:[(0,g.jsx)(l.QJe,{color:"rgb(255, 215, 0)",size:22}),o.toLocaleString()," stars"]}),(0,g.jsxs)("li",{children:[(0,g.jsx)(l.FEF,{color:"rgb(129, 195, 245)",size:22}),a.toLocaleString()," forks"]}),(0,g.jsxs)("li",{children:[(0,g.jsx)(l.gJy,{color:"rgb(241, 136, 147)",size:22}),i.toLocaleString()," open"]})]})})},n)}))})}var v=function(e){(0,i.Z)(t,e);var r=(0,s.Z)(t);function t(){var e;(0,o.Z)(this,t);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=r.call.apply(r,[this].concat(i))).state={selectedLanguage:"All",repos:{},error:null},e.updateLanguage=function(r){e.setState({selectedLanguage:r,error:null}),e.state.repos[r]||(0,u.Q)(r).then((function(t){e.setState((function(e){var o=e.repos;return{repos:(0,n.Z)({repos:o},r,t)}}))})).catch((function(){console.warn("\u2757 Error fetching repos ",e.error),e.setState({error:"\u2757 There was an error fetching the repositories."})}))},e.isLoading=function(){var r=e.state,t=r.selectedLanguage,n=r.repos,o=r.error;return!n[t]&&null===o},e}return(0,a.Z)(t,[{key:"componentDidMount",value:function(){this.updateLanguage(this.state.selectedLanguage)}},{key:"render",value:function(){var e=this.state,r=e.selectedLanguage,t=e.repos,n=e.error;return(0,g.jsxs)(c.Fragment,{children:[(0,g.jsx)(p,{selected:r,onUpdateLanguage:this.updateLanguage}),this.isLoading()&&(0,g.jsx)(h.Z,{text:"fetching repos",speed:500}),n&&(0,g.jsx)("p",{className:"center-text error",children:n}),t[r]&&(0,g.jsx)(m,{repos:t[r]})]})}}]),t}(c.Component)},7847:function(e,r,t){t.d(r,{Z:function(){return d}});var n=t(2791),o=t(5671),a=t(3144),i=t(9340),s=t(5716),c=t(184),u=function(e){(0,i.Z)(t,e);var r=(0,s.Z)(t);function t(){var e;(0,o.Z)(this,t);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=r.call.apply(r,[this].concat(a))).state={hovering:!1},e.mouseOver=function(){e.setState({hovering:!0})},e.mouseOut=function(){e.setState({hovering:!1})},e}return(0,a.Z)(t,[{key:"render",value:function(){return(0,c.jsx)("div",{onMouseOver:this.mouseOver,onMouseOut:this.mouseOut,children:this.props.children(this.state.hovering)})}}]),t}(n.Component),l=u,f={container:{position:"relative",display:"flex"},tooltip:{boxSizing:"border-box",position:"absolute",width:"8.5rem",bottom:"1005",left:"50%",marginLeft:"-3.5rem",borderRadius:".2rem",backgroundColor:"hsla(0, 0%, 20%, 0.9)",padding:".5rem",marginBottom:".4rem",color:"#fff",textAlign:"center",fontSize:".9rem",textTransform:"capitalize"}};function h(e){var r=e.text,t=e.children;return(0,c.jsx)(l,{children:function(e){return(0,c.jsxs)("div",{style:f.container,children:[!0===e&&(0,c.jsx)("div",{style:f.tooltip,children:r}),t]})}})}h.defaultProp={text:"User's "};var d=h},9086:function(e,r,t){t.d(r,{N:function(){return u},Q:function(){return l}});var n=t(8152),o="?client_id=".concat("YOUR_CLIENT_ID","&client_secret=").concat("YOUR_SECRET_ID");function a(e,r){return"Not Found"===e?"".concat(r," doesn't exist"):e}function i(e){return fetch("https://api.github.com/users/".concat(e,"/repos").concat(o,"&per_page=100")).then((function(e){return e.json()})).then((function(r){if(r.message)throw new Error(a(r.message,e));return r}))}function s(e,r){return 3*e+function(e){return e.reduce((function(e,r){return e+r.stargazers_count}),0)}(r)}function c(e){return Promise.all([(r=e,fetch("https://api.github.com/users/".concat(r).concat(o)).then((function(e){return e.json()})).then((function(e){if(e.message)throw new Error(a(e.message,r));return e}))),i(e)]).then((function(e){var r=(0,n.Z)(e,2),t=r[0],o=r[1];return{profile:t,score:s(t.followers,o)}}));var r}function u(e){return Promise.all([c(e[0]),c(e[1])]).then((function(e){return function(e){return e.sort((function(e,r){return r.score-e.score}))}(e)}))}function l(e){var r=window.encodeURI("https://api.github.com/search/repositories?q=stars:>1+language:".concat(e,"&sort=stars&order=desc&type=Repositories"));return fetch(r).then((function(e){return e.json()})).then((function(e){if(!e.items)throw new Error(e.message);return e.items}))}},4942:function(e,r,t){function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}t.d(r,{Z:function(){return n}})},8152:function(e,r,t){function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],i=!0,s=!1;try{for(t=t.call(e);!(i=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);i=!0);}catch(c){s=!0,o=c}finally{try{i||null==t.return||t.return()}finally{if(s)throw o}}return a}}(e,r)||function(e,r){if(e){if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.d(r,{Z:function(){return o}})}}]);
//# sourceMappingURL=495.5eeeb904.chunk.js.map