(this.webpackJsonpconfidence_monitor=this.webpackJsonpconfidence_monitor||[]).push([[0],{39:function(e,t,a){e.exports=a.p+"static/media/Loading.9117d7e1.svg"},41:function(e,t,a){e.exports=a(87)},46:function(e,t,a){},83:function(e,t){},86:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(36),c=a.n(s),i=(a(46),a(40)),o=a(2),l=a(3),u=a(4),m=a(5),p=a(37),h=a.n(p),d=a(10),f=a.n(d),E=(a(51),a(38)),v=a.n(E),g=a(39),k=a.n(g),b=(a(86),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"root",style:this.props.flash?{backgroundColor:"red"}:{backgroundColor:"black"}},r.a.createElement("div",{className:"date"},r.a.createElement("h1",null,r.a.createElement("strong",null,this.props.date[3])),r.a.createElement("h1",null,"".concat(this.props.date[0],", ").concat(this.props.date[1]," ").concat(this.props.date[2]))),r.a.createElement("div",{className:"lyrics"}),r.a.createElement("div",{className:"timersWrapper"},r.a.createElement("div",{className:"timer"},r.a.createElement("h2",null,"\u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c \u0432\u0440\u0435\u043c\u0435\u043d\u0438: "),this.props.Timer),r.a.createElement("div",{className:"capture",style:this.props.timeIsUp?{color:"red"}:{}},r.a.createElement("h2",null,"\u0421\u043b\u0443\u0436\u0435\u043d\u0438\u0435 \u0434\u043b\u0438\u0442\u0441\u044f: "),this.props.Capture),r.a.createElement("div",null)))}}]),a}(n.Component)),y=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"root",style:this.props.flash?{backgroundColor:"red"}:{backgroundColor:"black"}},r.a.createElement("div",{className:"date"},r.a.createElement("h1",null,r.a.createElement("strong",null,this.props.date[3])),r.a.createElement("h1",null,"".concat(this.props.date[0],", ").concat(this.props.date[1]," ").concat(this.props.date[2]))),r.a.createElement("div",{className:"lyrics"},r.a.createElement("div",{className:"timerBig"},r.a.createElement("h2",null,"\u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c \u0432\u0440\u0435\u043c\u0435\u043d\u0438: "),this.props.Timer)),r.a.createElement("div",null,r.a.createElement("div",{className:"capture",style:this.props.timeIsUp?{color:"red"}:{}},r.a.createElement("h2",null,"\u0421\u043b\u0443\u0436\u0435\u043d\u0438\u0435 \u0434\u043b\u0438\u0442\u0441\u044f: "),this.props.Capture),r.a.createElement("div",null)))}}]),a}(n.Component),C=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={date:"",timer:{minutes:"00",seconds:"00"},capture:{hours:"00",minutes:"00"},flash:!1,connected:!1,timeIsUp:!1,bigTimeLayout:!0},e}return Object(l.a)(a,[{key:"getDate",value:function(){var e=this;setInterval((function(){var t=f()().locale("uk").format("dddd D MMM HH:mm");e.setState({date:t.toUpperCase().split(" ")})}),5e3)}},{key:"componentDidMount",value:function(){var e=this;this.state.connected||(this.socket=v()("https://fierce-sierra-99883.herokuapp.com/timer",{transports:["websocket"]}),this.socket.on("SUCCESS",(function(){e.getDate(),e.setState({connected:!0})})),this.socket.on("connect_error",(function(){e.setState({connected:!1})})),this.socket.on("disconnect",(function(){e.setState({connected:!1})})),this.socket.on("TIMER_DATA",(function(t){t.minutes<0?e.setState({flash:!e.state.flash}):e.setState({flash:!1}),e.setState({timer:t})})),this.socket.on("CAPTURE_DATA",(function(t){e.setState({capture:t})})),this.socket.on("LAYOUT",(function(){e.setState({bigTimeLayout:!e.state.bigTimeLayout})})))}},{key:"generateTimer",value:function(){return r.a.createElement("h1",null,this.state.timer.minutes,":",this.state.timer.seconds)}},{key:"generateCapture",value:function(){return r.a.createElement("h1",null,this.state.capture.hours,":",this.state.capture.minutes)}},{key:"render",value:function(){return this.state.connected?r.a.createElement(h.a,{duration:2e3},this.state.bigTimeLayout?r.a.createElement(y,{flash:this.state.flash,date:this.state.date,Timer:this.generateTimer(),Capture:this.generateCapture(),timeIsUp:this.state.timeIsUp}):r.a.createElement(b,{flash:this.state.flash,date:this.state.date,Timer:this.generateTimer(),Capture:this.generateCapture(),timeIsUp:this.state.timeIsUp})):r.a.createElement("div",{className:"root",style:{display:"grid",placeItems:"center"}},r.a.createElement("h1",{style:{color:"white"}},"Waiting for connection"),r.a.createElement("img",{alt:"Connecting",src:k.a}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=f()().locale("uk").format("dddd D MMM HH:mm");return Object(i.a)({},t,{date:a.split(" ")})}}]),a}(n.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.61045216.chunk.js.map