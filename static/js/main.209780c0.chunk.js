(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{17:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var c,a,r,i,o,s,d=n(1),b=n.n(d),j=n(5),l=n.n(j),u=(n(17),n(6)),h=n(7),x=n(8),O=n(11),p=n(10),f=n(2),g=n(3),v=g.a.p(c||(c=Object(f.a)(["\n  margin: 3px 0 3px 25px;\n\n  font-size: 20px;\n"]))),k=g.a.span(a||(a=Object(f.a)(["\n  font-size: 20px;\n"]))),m=g.a.span(r||(r=Object(f.a)(["\n  font-size: 20px;\n"]))),w=n(0),P=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,r=e.positivePercentage;return Object(w.jsxs)("div",{children:[Object(w.jsxs)(v,{children:["Good:"," ",Object(w.jsx)(m,{children:Object(w.jsx)(k,{children:t})})]}),Object(w.jsxs)(v,{children:["Neutral:"," ",Object(w.jsx)(m,{children:Object(w.jsx)(k,{children:n})})]}),Object(w.jsxs)(v,{children:["Bad:"," ",Object(w.jsx)(m,{children:Object(w.jsx)(k,{children:c})})]}),Object(w.jsxs)(v,{children:["Total: ",Object(w.jsx)(m,{children:a})]}),Object(w.jsxs)(v,{children:["Positive feedback: ",Object(w.jsxs)(m,{children:[r,"%"]})]})]})},z=g.a.button(i||(i=Object(f.a)(["\n  padding: 10px;\n  margin-left: 40px;\n  background-color: white;\n  border-radius: 15%;\n  border: 1px solid grey;\n\n  font-size: 20px;\n  color: black;\n  font-weight: 600;\n  text-transform: capitalize;\n\n  &:active {\n    background-color: blue;\n  }\n"]))),F=function(e){var t=e.options,n=e.onLeaveFeedback;return t.map((function(e){return Object(w.jsx)(z,{type:"button",onClick:function(){return n(e)},children:e},e)}))},y=g.a.h2(o||(o=Object(f.a)(["\n  margin: 25px;\n\n  font-size: 36px;\n  font-weight: bold;\n"]))),I=function(e){var t=e.title,n=e.children;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(y,{children:t}),Object(w.jsx)("div",{children:n})]})},S=g.a.p(s||(s=Object(f.a)(["\n  padding: 25px;\n\n  font-size: 32px;\n"]))),T=function(e){var t=e.message;return Object(w.jsx)(S,{children:t})},B=function(e){Object(O.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(h.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.handleIncrement=function(t){e.setState((function(e){return Object(u.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){var t=e.state;return t.good+t.bad+t.neutral},e.countPositiveFeedbackPercentage=function(){var t=e.state,n=t.good,c=n+t.neutral+t.bad;return Math.round(100*n/c)},e}return Object(x.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad;return Object(w.jsxs)("div",{children:[Object(w.jsx)(I,{title:"Please leave feedback",children:Object(w.jsx)(F,{options:["good","neutral","bad"],onLeaveFeedback:this.handleIncrement})}),t||n||c>0?Object(w.jsx)(I,{title:"Statistic",children:Object(w.jsx)(P,{good:t,neutral:n,bad:c,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})}):Object(w.jsx)(T,{message:"No feedback given"})]})}}]),n}(d.Component),C=B;l.a.render(Object(w.jsx)(b.a.StrictMode,{children:Object(w.jsx)(C,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.209780c0.chunk.js.map