(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[451],{884:function(n,t,e){"use strict";e.d(t,{Z:function(){return v}});var r=e(7294),c=e(273),a=e.n(c),o=e(9558),u=e(29),s=e(7794),i=e.n(s),l=e(8776),f=e.n(l),d=e(4468),h=e(1664),p=e.n(h),x=e(1163),_=e(5893),j=function(){var n=(0,x.useRouter)(),t=(0,r.useState)(""),e=t[0],c=t[1],a=(0,r.useState)(!1),s=a[0],l=a[1],h=(0,r.useState)(""),j=h[0],v=h[1],g=(0,r.useState)({}),m=g[0],b=g[1],y=(0,r.useCallback)(function(){var n=(0,u.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null!==(e=t.target.files)&&void 0!==e&&e.length){n.next=2;break}return n.abrupt("return");case 2:return n.t0=b,n.next=5,d.x.user.$post({headers:{authorization:j},body:{icon:t.target.files[0]}});case 5:n.t1=n.sent,(0,n.t0)(n.t1);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),[j]),$=(0,r.useCallback)((0,u.Z)(i().mark((function n(){var t,e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=prompt("Enter the user id (See server/.env)"),e=prompt("Enter the user pass (See server/.env)"),t&&e){n.next=4;break}return n.abrupt("return",alert("Login failed"));case 4:return r="",n.prev=5,n.t0="Bearer ",n.next=9,d.x.token.$post({body:{id:t,pass:e}});case 9:n.t1=n.sent.token,r=n.t0.concat.call(n.t0,n.t1),v(r),n.next=17;break;case 14:return n.prev=14,n.t2=n.catch(5),n.abrupt("return",alert("Login failed"));case 17:return n.t3=b,n.next=20,d.x.user.$get({headers:{authorization:r}});case 20:n.t4=n.sent,(0,n.t3)(n.t4),l(!0);case 23:case"end":return n.stop()}}),n,null,[[5,14]])}))),[]),k=(0,r.useCallback)((function(){v(""),l(!1)}),[]);return(0,_.jsxs)("div",{children:[(0,_.jsxs)("div",{className:f().userBanner,children:[(0,_.jsxs)("div",{children:[(0,_.jsx)(p(),{href:o.V.$url(),children:(0,_.jsx)("a",{className:f().nav,children:"Home"})}),(0,_.jsx)(p(),{href:o.V.article.$url(),children:(0,_.jsx)("a",{className:f().nav,children:"Article"})})]}),(0,_.jsxs)("form",{onSubmit:function(t){t.preventDefault(),n.push(o.V.article.$url({query:{search:e}}))},children:[(0,_.jsx)("input",{type:"text",name:"query",onInput:function(n){return n.target instanceof HTMLInputElement&&c(n.target.value)}}),(0,_.jsx)("button",{type:"submit",children:"search"})]}),(0,_.jsx)("div",{className:f().spacing}),(0,_.jsx)("div",{children:s?(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("img",{src:m.icon,className:f().userIcon}),(0,_.jsx)("span",{children:m.name}),(0,_.jsx)("input",{type:"file",accept:"image/*",onChange:y}),(0,_.jsx)("button",{onClick:k,children:"LOGOUT"})]}):(0,_.jsx)("button",{onClick:$,children:"LOGIN"})})]}),(0,_.jsx)("div",{className:f().padding})]})},v=function(n){var t=n.children;return(0,_.jsxs)("div",{className:a().container,children:[(0,_.jsx)(j,{}),(0,_.jsx)("main",{className:a().main,children:t}),(0,_.jsx)("footer",{className:a().footer,children:(0,_.jsxs)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["Powered by"," ",(0,_.jsx)("img",{src:o.D.vercel_svg,alt:"Vercel Logo",className:a().logo})]})})]})}},4653:function(n,t,e){"use strict";e.r(t);var r=e(3301),c=e.n(r),a=e(1163),o=e(9008),u=e(884),s=e(4468),i=e(5893);t.default=function(){var n,t=(0,a.useRouter)(),e=c()(s.x.article._articleId(Number.parseInt(t.query.id,10))).data;return(0,i.jsxs)(u.Z,{children:[(0,i.jsx)(o.default,{children:(0,i.jsx)("title",{children:null!==(n=null===e||void 0===e?void 0:e.title)&&void 0!==n?n:"Loading..."})}),e?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{children:e.title}),(0,i.jsx)("pre",{children:e.body})]}):(0,i.jsx)("div",{children:"Loading..."})]})}},4468:function(n,t,e){"use strict";e.d(t,{x:function(){return o}});var r=e(8416),c=e.n(r),a=e(3928),o=function(n){var t=n.baseURL,e=n.fetch,r=(void 0===t?"":t).replace(/\/$/,""),c="/article",o="/tasks",u="/token",s="/user",i="GET",l="POST",f="DELETE",d="PATCH";return{article:{_articleId:function(n){var t="".concat(c,"/").concat(n);return{get:function(n){return e(r,t,i,n).json()},$get:function(n){return e(r,t,i,n).json().then((function(n){return n.body}))},$path:function(){return"".concat(r).concat(t)}}},get:function(n){return e(r,c,i,n).json()},$get:function(n){return e(r,c,i,n).json().then((function(n){return n.body}))},$path:function(n){return"".concat(r).concat(c).concat(n&&n.query?"?".concat((0,a.dataToURLString)(n.query)):"")}},tasks:{_taskId:function(n){var t="".concat(o,"/").concat(n);return{patch:function(n){return e(r,t,d,n).send()},$patch:function(n){return e(r,t,d,n).send().then((function(n){return n.body}))},delete:function(n){return e(r,t,f,n).send()},$delete:function(n){return e(r,t,f,n).send().then((function(n){return n.body}))},$path:function(){return"".concat(r).concat(t)}}},get:function(n){return e(r,o,i,n).json()},$get:function(n){return e(r,o,i,n).json().then((function(n){return n.body}))},post:function(n){return e(r,o,l,n).json()},$post:function(n){return e(r,o,l,n).json().then((function(n){return n.body}))},$path:function(n){return"".concat(r).concat(o).concat(n&&n.query?"?".concat((0,a.dataToURLString)(n.query)):"")}},token:{post:function(n){return e(r,u,l,n).json()},$post:function(n){return e(r,u,l,n).json().then((function(n){return n.body}))},$path:function(){return"".concat(r).concat(u)}},user:{get:function(n){return e(r,s,i,n).json()},$get:function(n){return e(r,s,i,n).json().then((function(n){return n.body}))},post:function(n){return e(r,s,l,n,"FormData").json()},$post:function(n){return e(r,s,l,n,"FormData").json().then((function(n){return n.body}))},$path:function(){return"".concat(r).concat(s)}},get:function(n){return e(r,"",i,n).text()},$get:function(n){return e(r,"",i,n).text().then((function(n){return n.body}))},$path:function(){return"".concat(r)}}}(c()())},9196:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/entry",function(){return e(4653)}])},273:function(n){n.exports={container:"Layout_container__nRe7b",main:"Layout_main__T_Jjv",footer:"Layout_footer__DSG5r",logo:"Layout_logo__Ufs6S"}},8776:function(n){n.exports={userBanner:"UserBanner_userBanner__YyrEf",userIcon:"UserBanner_userIcon__MfoIQ",spacing:"UserBanner_spacing__Kg_5Q",nav:"UserBanner_nav__c12iP",padding:"UserBanner_padding__jJ_oH"}}},function(n){n.O(0,[671,774,888,179],(function(){return t=9196,n(n.s=t);var t}));var t=n.O();_N_E=t}]);