(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{195:function(e,a,t){"use strict";var r=t(1),l=t(5),c=t(4),n=t(56),s=t.n(n),m=t(0),i=t.n(m),d=t(57),u=function(e){function a(){return e.apply(this,arguments)||this}return Object(c.a)(a,e),a.prototype.render=function(){var e=this.props,a=e.bsPrefix,t=e.className,c=e.striped,n=e.bordered,m=e.hover,d=e.size,u=e.variant,o=e.responsive,b=Object(l.a)(e,["bsPrefix","className","striped","bordered","hover","size","variant","responsive"]),f=s()(a,t,u&&a+"-"+u,d&&a+"-"+d,c&&a+"-striped",n&&a+"-bordered",m&&a+"-hover"),E=i.a.createElement("table",Object(r.a)({},b,{className:f}));if(o){var N=a+"-responsive";return"string"===typeof o&&(N=N+"-"+o),i.a.createElement("div",{className:N},E)}return E},a}(i.a.Component);a.a=Object(d.a)(u,"table")},199:function(e,a,t){"use strict";var r=t(1),l=t(5),c=t(4),n=t(56),s=t.n(n),m=t(0),i=t.n(m),d=t(57),u=t(81),o=function(e){return i.a.forwardRef(function(a,t){return i.a.createElement("div",Object(r.a)({},a,{ref:t,className:s()(a.className,e)}))})},b=t(89),f=function(e){function a(){return e.apply(this,arguments)||this}return Object(c.a)(a,e),a.prototype.render=function(){var e=this.props,a=e.bsPrefix,t=e.className,c=e.variant,n=e.as,m=Object(l.a)(e,["bsPrefix","className","variant","as"]),d=c?a+"-"+c:a;return i.a.createElement(n,Object(r.a)({className:s()(d,t)},m))},a}(i.a.Component);f.defaultProps={as:"img",variant:null};var E=Object(d.a)(f,"card-img"),N=Object(u.a)("card-body"),h=function(e){function a(){for(var a,t=arguments.length,r=new Array(t),l=0;l<t;l++)r[l]=arguments[l];return(a=e.call.apply(e,[this].concat(r))||this).state={},a}return Object(c.a)(a,e),a.getDerivedStateFromProps=function(e){return{cardContext:{cardHeaderBsPrefix:e.bsPrefix+"-header"}}},a.prototype.render=function(){var e=this.props,a=e.bsPrefix,t=e.className,c=e.as,n=e.bg,m=e.text,d=e.border,u=e.body,o=e.children,f=Object(l.a)(e,["bsPrefix","className","as","bg","text","border","body","children"]),E=s()(t,a,n&&"bg-"+n,m&&"text-"+m,d&&"border-"+d);return i.a.createElement(b.a.Provider,{value:this.state.cardContext},i.a.createElement(c,Object(r.a)({className:E},f),u?i.a.createElement(N,null,o):o))},a}(i.a.Component);h.defaultProps={as:"div",body:!1};var p=o("h5"),x=o("h6"),y=Object(d.a)(h,"card");y.Img=E,y.Title=Object(u.a)("card-title",{Component:p}),y.Subtitle=Object(u.a)("card-subtitle",{Component:x}),y.Body=N,y.Link=Object(u.a)("card-link",{Component:"a"}),y.Text=Object(u.a)("card-text",{Component:"p"}),y.Header=Object(u.a)("card-header"),y.Footer=Object(u.a)("card-footer"),y.ImgOverlay=Object(u.a)("card-img-overlay");a.a=y},372:function(e,a,t){"use strict";t.r(a);var r=t(17),l=t(18),c=t(19),n=t(16),s=t(20),m=t(0),i=t.n(m),d=t(199),u=t(195),o=t(61),b=t(94),f=t.n(b),E=t(79),N=t.n(E),h=t(95),p=t.n(h),x=function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(n.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(d.a,{className:"Recent-Users"},i.a.createElement(d.a.Header,null,i.a.createElement(d.a.Title,{as:"h5"},"Book List")),i.a.createElement(d.a.Body,{className:"px-0 py-2"},i.a.createElement(u.a,{responsive:!0,hover:!0},i.a.createElement("tbody",null,i.a.createElement("tr",{className:"unread"},i.a.createElement("td",null,i.a.createElement("img",{className:"rounded-circle",style:{width:"40px"},src:f.a,alt:"activity-user"})),i.a.createElement("td",null,i.a.createElement("h6",{className:"mb-1"},"Isabella Christensen"),i.a.createElement("p",{className:"m-0"},"Lorem Ipsum is simply dummy text of\u2026")),i.a.createElement("td",null,i.a.createElement("h6",{className:"text-muted"},i.a.createElement("i",{className:"fa fa-circle text-c-green f-10 m-r-15"}),"11 MAY 12:56")),i.a.createElement("td",null,i.a.createElement("a",{href:o.a.BLANK_LINK,className:"label theme-bg2 text-white f-12"},"update"),i.a.createElement("a",{href:o.a.BLANK_LINK,className:"label theme-bg text-white f-12"},"Delete"))),i.a.createElement("tr",{className:"unread"},i.a.createElement("td",null,i.a.createElement("img",{className:"rounded-circle",style:{width:"40px"},src:N.a,alt:"activity-user"})),i.a.createElement("td",null,i.a.createElement("h6",{className:"mb-1"},"Mathilde Andersen"),i.a.createElement("p",{className:"m-0"},"Lorem Ipsum is simply dummy text of\u2026")),i.a.createElement("td",null,i.a.createElement("h6",{className:"text-muted"},i.a.createElement("i",{className:"fa fa-circle text-c-red f-10 m-r-15"}),"11 MAY 10:35")),i.a.createElement("td",null,i.a.createElement("a",{href:o.a.BLANK_LINK,className:"label theme-bg2 text-white f-12"},"update"),i.a.createElement("a",{href:o.a.BLANK_LINK,className:"label theme-bg text-white f-12"},"Delete"))),i.a.createElement("tr",{className:"unread"},i.a.createElement("td",null,i.a.createElement("img",{className:"rounded-circle",style:{width:"40px"},src:p.a,alt:"activity-user"})),i.a.createElement("td",null,i.a.createElement("h6",{className:"mb-1"},"Karla Sorensen"),i.a.createElement("p",{className:"m-0"},"Lorem Ipsum is simply dummy text of\u2026")),i.a.createElement("td",null,i.a.createElement("h6",{className:"text-muted"},i.a.createElement("i",{className:"fa fa-circle text-c-green f-10 m-r-15"}),"9 MAY 17:38")),i.a.createElement("td",null,i.a.createElement("a",{href:o.a.BLANK_LINK,className:"label theme-bg2 text-white f-12"},"update"),i.a.createElement("a",{href:o.a.BLANK_LINK,className:"label theme-bg text-white f-12"},"Delete"))),i.a.createElement("tr",{className:"unread"},i.a.createElement("td",null,i.a.createElement("img",{className:"rounded-circle",style:{width:"40px"},src:f.a,alt:"activity-user"})),i.a.createElement("td",null,i.a.createElement("h6",{className:"mb-1"},"Ida Jorgensen"),i.a.createElement("p",{className:"m-0"},"Lorem Ipsum is simply dummy text of\u2026")),i.a.createElement("td",null,i.a.createElement("h6",{className:"text-muted f-w-300"},i.a.createElement("i",{className:"fa fa-circle text-c-red f-10 m-r-15"}),"19 MAY 12:56")),i.a.createElement("td",null,i.a.createElement("a",{href:o.a.BLANK_LINK,className:"label theme-bg2 text-white f-12"},"update"),i.a.createElement("a",{href:o.a.BLANK_LINK,className:"label theme-bg text-white f-12"},"Delete"))),i.a.createElement("tr",{className:"unread"},i.a.createElement("td",null,i.a.createElement("img",{className:"rounded-circle",style:{width:"40px"},src:N.a,alt:"activity-user"})),i.a.createElement("td",null,i.a.createElement("h6",{className:"mb-1"},"Albert Andersen"),i.a.createElement("p",{className:"m-0"},"Lorem Ipsum is simply dummy text of\u2026")),i.a.createElement("td",null,i.a.createElement("h6",{className:"text-muted"},i.a.createElement("i",{className:"fa fa-circle text-c-green f-10 m-r-15"}),"21 July 12:56")),i.a.createElement("td",null,i.a.createElement("a",{href:o.a.BLANK_LINK,className:"label theme-bg2 text-white f-12"},"update"),i.a.createElement("a",{href:o.a.BLANK_LINK,className:"label theme-bg text-white f-12"},"Delete"))))))))}}]),a}(m.Component);a.default=x},89:function(e,a,t){"use strict";var r=t(0),l=t.n(r);a.a=l.a.createContext(null)}}]);
//# sourceMappingURL=16.294cf725.chunk.js.map