"use strict";(self.webpackChunkPhonebookApp=self.webpackChunkPhonebookApp||[]).push([[200],{6200:function(n,e,t){t.r(e),t.d(e,{Contacts:function(){return K},default:function(){return G}});var r,a,o,i,s,p,c,d,x,u=t(2791),l=t(9434),b=t(3634),h=function(n){return n.contacts.loading},m=function(n){return n.contacts.items},g=t(168),f=t(8789),v=f.ZP.ul(r||(r=(0,g.Z)(["\n  margin-bottom: 10px;\n  \n"]))),Z=f.ZP.li(a||(a=(0,g.Z)(["\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  margin-bottom: 8px;\n  padding: 3px 10px;\n  width: 290px;\n  margin-left: 208px;\n  height: 50px;\n  background: \trgb(248,248,248);\n  // background: linear-gradient(\n  //   90deg,\n  //   rgba(248,248,248, 1) 70%,\n  //   rgba(rgb(224,224,224), 1) 99%\n  // );\n  color: #000;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: box-shadow 200ms cubic-bezier(0.15, 0.52, 0.6, 0.69);\n  &:hover,\n  :focus {\n    box-shadow: 3px 3px 10px -1px rgba(219, 213, 213, 0.75);\n  }\n  &:last-child {\n    margin-bottom: 0;\n  }\n"]))),w=f.ZP.button(o||(o=(0,g.Z)(["\n  border-radius: 5px;\n  border: 0px;\n  height: 20px;\n  width: 50px;\n  transition: all 200ms cubic-bezier(0.15, 0.52, 0.6, 0.69);\n  &:hover,\n  :focus {\n    background-color: #C8C8C8;\n    box-shadow: 3px 3px 10px -1px rgba(219, 213, 213, 0.75);\n  }\n"]))),j=t(3329),y=function(){var n=(0,l.v9)(h),e=(0,l.I0)(),t=(0,l.v9)(m);return(0,u.useEffect)((function(){e((0,b.yF)())}),[e]),(0,j.jsxs)(j.Fragment,{children:[n&&(0,j.jsx)("p",{children:"Data is loading"}),(0,j.jsx)(v,{children:t.length>0&&t.map((function(n){var t=n.id,r=n.name,a=n.number;return(0,j.jsxs)(Z,{children:[r," : ",a,(0,j.jsx)(w,{onClick:function(){return e((0,b.GK)(t))},children:"Delete"})]},t)}))})]})},k=t(5861),C=t(4687),P=t.n(C),z=f.ZP.form(i||(i=(0,g.Z)(["\n  max-width: 1280px;\n  width: 500px;\n  border: 1px solid;\n  padding: 15px;\n  margin-left: 250px;\n"]))),A=f.ZP.input(s||(s=(0,g.Z)(["\n  display: block;\n  margin-top: 15px;\n  margin-bottom: 15px;\n"]))),F=f.ZP.label(p||(p=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  font-weight: 500;\n  font-size: 20px;\n"]))),B=f.ZP.button(c||(c=(0,g.Z)(["\n  display: block;\n  width: 100px;\n  height: 25px;\n  margin-top: 15px;\n  background-color: #fff;\n  border: 0px;\n  border-radius: 5px;\n  transition: all 200ms cubic-bezier(0.15, 0.52, 0.6, 0.69);\n  background-color: #B2BEB5;\n  box-shadow: 0px 0px 1px 1px rgba(184, 164, 184, 1);\n  &:hover,\n  :focus {\n    background-color: #C8C8C8;\n    box-shadow: 3px 3px 10px -1px rgba(219, 213, 213, 0.75);\n  }\n"]))),D=function(){var n=(0,l.v9)(m),e=(0,l.I0)(),t=function(){var t=(0,k.Z)(P().mark((function t(r){var a,o,i;return P().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r.preventDefault(),a=r.target,o=a.name.value,i=a.number.value,n.find((function(n){return n.name===o}))?alert("".concat(o," is already in contacts")):(e((0,b.uK)({name:o,number:i})),alert("".concat(o," has been added to contacts list")),a.reset());case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)(z,{onSubmit:t,children:[(0,j.jsxs)(F,{children:["Name",(0,j.jsx)(A,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,j.jsxs)(F,{children:["Number",(0,j.jsx)(A,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,j.jsx)(B,{type:"submit",children:"Add contact"})]})})},I=t(6895),q=f.ZP.input(d||(d=(0,g.Z)(["\n  display: block;\n  margin-top: 15px;\n  margin-bottom: 20px;\n  max-width: 1280px;\n  width: 520px;\n\n"]))),E=f.ZP.label(x||(x=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-left: 250px;\n  margin-top: 15px;\n  gap: 5px;\n  font-weight: 600;\n  font-size: 18px;\n"]))),N=function(){var n=(0,l.I0)();return(0,j.jsxs)(E,{children:["Find contacts by name",(0,j.jsx)(q,{type:"text",onChange:function(e){e.preventDefault();var t=e.target.value.toLowerCase();n((0,I.x)(t))}})]})},K=function(){var n=(0,l.I0)(),e=(0,l.v9)(h);return(0,u.useEffect)((function(){n((0,b.yF)())}),[n]),(0,j.jsxs)("div",{style:{display:"block",margin:"20px 80px"},children:[(0,j.jsx)(D,{}),(0,j.jsx)(N,{}),(0,j.jsx)("div",{children:e&&"Request in progress..."}),(0,j.jsx)(y,{})]})},G=K}}]);
//# sourceMappingURL=200.59d5e266.chunk.js.map