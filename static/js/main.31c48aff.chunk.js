(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(3),o=n.n(s),i=n(4),c=n(5),l=n(7),u=n(6),m=n(8);n(15);var v=function(e){var t="square pointer bg-white b--light-gray f4 tc fl ";return t+=e.isWinner?"bw2":"ba",r.a.createElement("button",{className:t,onClick:e.onClick},e.value)};var f=function(e){var t=function(t,n){var a=e.winnerIndexes&&e.winnerIndexes.includes(t);return r.a.createElement(v,{location:n,isWinner:a,key:t,value:e.squares[t],onClick:function(){return e.onClick(t)}})};return r.a.createElement("div",{className:"board mr5"},function(){for(var e=[],n=0,a=0;a<3;a++){for(var s=[],o=0;o<3;o++)s.push(t(n,[o+1,a+1])),n++;e.push(r.a.createElement("div",{className:"board-row",key:a},s))}return e}())};var h=function(e){var t=e.status,n=e.moves;return r.a.createElement("div",{className:"board-info"},r.a.createElement("div",{className:"status mb3 fw5 f3"},t),r.a.createElement("ul",{className:"game-info list"},n))},b=n(1);var d=function(e){var t=e.moveLocation,n=e.moveNumber,a=e.isLast,s=e.onClick,o=e.description;if(t){var i=t,c=Object(b.a)(i,2),l=c[0],u=c[1];t="(col #".concat(l,", row #").concat(u,")")}var m="move pointer grow bg-white ba b--light-gray f5 tc pa1";return a&&(m+=" fw6"),r.a.createElement("li",{className:"mb2",key:n},r.a.createElement("button",{className:m,onClick:function(){return s(n)}},o," ",t))};function w(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var a=Object(b.a)(t[n],3),r=a[0],s=a[1],o=a[2];if(e[r]&&e[r]===e[s]&&e[r]===e[o])return{winner:e[r],winnerIndexes:[r,s,o]}}return null}n(16);var N=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleClick=function(e,t){var a=n.state.history.slice(0,n.state.stepNumber+1),r=a[a.length-1].squares.slice();w(r)||r[e]||(r[e]=n.state.isXNext?"X":"0",n.setState({history:a.concat([{squares:r,moveLocation:t}]),isXNext:!n.state.isXNext,stepNumber:a.length}))},n.goTo=function(e){n.setState({history:n.state.history.slice(0,e+1),stepNumber:e,isXNext:e%2===0})},n.state={history:[{squares:Array(9).fill(null),moveLocation:null}],isXNext:!0,stepNumber:0},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e,t,n=this,a=this.state.history,s=a[this.state.stepNumber],o=w(s.squares),i=o&&o.winner,c=a.map(function(e,t,a){var s=t?"Go to move #"+t:"Game start",o=t===a.length-1;return r.a.createElement(d,{moveLocation:e.moveLocation,isLast:o,key:t,moveNumber:t,description:s,onClick:n.goTo})});return i?(e="Winner is "+i,t=o.winnerIndexes):e=9===this.state.stepNumber?"It'a draw!":"Next player: ".concat(this.state.isXNext?"X":"0"),r.a.createElement("div",{className:"game avenir flex mt5 ml5"},r.a.createElement(f,{winnerIndexes:t,squares:s.squares,onClick:this.handleClick}),r.a.createElement(h,{status:e,moves:c}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.31c48aff.chunk.js.map