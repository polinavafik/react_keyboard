(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var s=n(3),c=n.n(s),a=n(4),r=n(5),i=n(7),o=n(6),d=n(1),l=n.n(d),h=(n(12),n(0)),u=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(a.a)(this,n);for(var s=arguments.length,c=new Array(s),r=0;r<s;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={pressedKey:""},e.handleKeyUp=function(t){e.setState({pressedKey:t.key})},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.handleKeyUp)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.handleKeyUp)}},{key:"render",value:function(){var e=this.state.pressedKey;return Object(h.jsx)("section",{className:"hero is-fullheight",children:Object(h.jsx)("div",{className:"hero-body has-text-centered",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:" box notification is-link",children:Object(h.jsx)("p",{children:e?"The last pressed key is [".concat(e,"]"):"Nothing was pressed yet"})})})})})}}]),n}(l.a.Component);n(14);c.a.render(Object(h.jsx)(u,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.32298104.chunk.js.map