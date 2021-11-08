(this["webpackJsonppomodoro-timer"]=this["webpackJsonppomodoro-timer"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),i=n(5),c=n.n(i),r=(n(10),n(2)),o=n(3);var l=n(0);var u=function(e){var t,n=e.isTimerRunning,a=e.handleStop,s=e.session,i=e.playPause;return Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"col",children:Object(l.jsxs)("div",{className:"btn-group btn-group-lg mb-2",role:"group","aria-label":"Timer controls",children:[Object(l.jsx)("button",{type:"button",className:"btn btn-primary","data-testid":"play-pause",title:"Start or pause timer",onClick:i,children:Object(l.jsx)("span",{className:(t={oi:!0,"oi-media-play":!n,"oi-media-pause":n},Object.entries(t).reduce((function(e,t){var n=Object(r.a)(t,2),a=n[0],s=n[1];return e.concat(s?a:void 0)}),[]).filter((function(e){return void 0!==e})).join(" "))})}),Object(l.jsx)("button",{type:"button",className:"btn btn-secondary","data-testid":"stop",title:"Stop the session",onClick:a,disabled:!s,children:Object(l.jsx)("span",{className:"oi oi-media-stop"})})]})})})};function d(e){var t=Math.floor(e).toString().padStart(2,"0");return"".concat(t,":00")}function b(e){var t=Math.floor(e%3600/60).toString().padStart(2,"0"),n=Math.round(e%60).toString().padStart(2,"0");return"".concat(t,":").concat(n)}var j=function(e){var t=e.session,n=e.focusDuration,a=e.breakDuration,s=e.isTimerRunning;return t&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"row mb-2",children:Object(l.jsxs)("div",{className:"col",children:[Object(l.jsxs)("h2",{"data-testid":"session-title",children:[null===t||void 0===t?void 0:t.label," for"," ","Focusing"===(null===t||void 0===t?void 0:t.label)?d(n):d(a)," ","minutes"]}),Object(l.jsxs)("p",{className:"lead","data-testid":"session-sub-title",children:[b(null===t||void 0===t?void 0:t.timeRemaining)," remaining"]}),!s&&Object(l.jsx)("h2",{children:"PAUSED"})]})}),Object(l.jsx)("div",{className:"row mb-2",children:Object(l.jsx)("div",{className:"col",children:Object(l.jsx)("div",{className:"progress",style:{height:"20px"},children:Object(l.jsx)("div",{className:"progress-bar",role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":100-100*t.timeRemaining/("Focusing"===t.label?60*n:60*a),style:{width:"".concat(100-100*t.timeRemaining/("Focusing"===t.label?60*n:60*a),"%")}})})})})]})};var m=function(e){var t=e.session,n=e.focusDuration,a=e.breakDuration,s=e.handleFocusDecrease,i=e.handleFocusIncrease,c=e.handleBreakDecrease,r=e.handleBreakIncrease;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col",children:Object(l.jsxs)("div",{className:"input-group input-group-lg mb-2",children:[Object(l.jsxs)("span",{className:"input-group-text","data-testid":"duration-focus",children:["Focus Duration: ",d(n)]}),Object(l.jsxs)("div",{className:"input-group-append",children:[Object(l.jsx)("button",{type:"button",className:"btn btn-secondary","data-testid":"decrease-focus",onClick:s,disabled:t||5===n,children:Object(l.jsx)("span",{className:"oi oi-minus"})}),Object(l.jsx)("button",{type:"button",className:"btn btn-secondary","data-testid":"increase-focus",onClick:i,disabled:t||60===n,children:Object(l.jsx)("span",{className:"oi oi-plus"})})]})]})}),Object(l.jsx)("div",{className:"col",children:Object(l.jsx)("div",{className:"float-right",children:Object(l.jsxs)("div",{className:"input-group input-group-lg mb-2",children:[Object(l.jsxs)("span",{className:"input-group-text","data-testid":"duration-break",children:["Break Duration: ",d(a)]}),Object(l.jsxs)("div",{className:"input-group-append",children:[Object(l.jsx)("button",{type:"button",className:"btn btn-secondary","data-testid":"decrease-break",onClick:c,disabled:t||1===a,children:Object(l.jsx)("span",{className:"oi oi-minus"})}),Object(l.jsx)("button",{type:"button",className:"btn btn-secondary","data-testid":"increase-break",onClick:r,disabled:t||15===a,children:Object(l.jsx)("span",{className:"oi oi-plus"})})]})]})})})]})})};function p(e){var t=Math.max(0,e.timeRemaining-1);return Object(o.a)(Object(o.a)({},e),{},{timeRemaining:t})}var h=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],s=t[1],i=Object(a.useState)(null),c=Object(r.a)(i,2),o=c[0],d=c[1],b=Object(a.useState)(25),h=Object(r.a)(b,2),O=h[0],x=h[1],v=Object(a.useState)(5),f=Object(r.a)(v,2),g=f[0],N=f[1];return function(e,t){var n=Object(a.useRef)();Object(a.useEffect)((function(){n.current=e}),[e]),Object(a.useEffect)((function(){if(null!==t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){return 0===o.timeRemaining?(new Audio("https://bigsoundbank.com/UPLOAD/mp3/1482.mp3").play(),d(function(e,t){return function(n){return"Focusing"===n.label?{label:"On Break",timeRemaining:60*t}:{label:"Focusing",timeRemaining:60*e}}}(O,g))):d(p)}),n?1e3:null),Object(l.jsxs)("div",{className:"Pomodoro",children:[Object(l.jsx)(m,{session:o,focusDuration:O,breakDuration:g,handleFocusDecrease:function(){return x(Math.min(5,O-5))},handleFocusIncrease:function(){return x(Math.max(60,O+5))},handleBreakDecrease:function(){return N(Math.min(1,g-1))},handleBreakIncrease:function(){return N(Math.max(15,g+1))}}),Object(l.jsx)(u,{isTimerRunning:n,handleStop:function(){x(25),N(5),s(!1),d(null)},session:o,playPause:function(){s((function(e){var t=!e;return t&&d((function(e){return null===e?{label:"Focusing",timeRemaining:60*O}:e})),t}))}}),Object(l.jsx)(j,{session:o,focusDuration:O,breakDuration:g,isTimerRunning:n})]})};var O=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("header",{className:"App-header container",children:Object(l.jsx)("h1",{children:"Pomodoro Timer"})}),Object(l.jsx)("div",{className:"container",children:Object(l.jsx)(h,{})})]})};c.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.360793c0.chunk.js.map