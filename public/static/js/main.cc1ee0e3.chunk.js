(this.webpackJsonpconfidence_monitor=this.webpackJsonpconfidence_monitor||[]).push([[0],{37:function(e,t,a){e.exports=a(79)},42:function(e,t,a){},44:function(e,t,a){},76:function(e,t){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(34),c=a.n(r),i=(a(42),a(36)),o=a(2),l=a(3),u=a(4),m=a(5),h=a(6),p=a.n(h),d=(a(43),a(44),a(35)),f=a.n(d),v=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"root",style:this.props.flash?{backgroundColor:"red"}:{backgroundColor:"black"}},s.a.createElement("div",{className:"date"},s.a.createElement("h1",null,s.a.createElement("strong",null,this.props.date[3])),s.a.createElement("h1",null,"".concat(this.props.date[0],", ").concat(this.props.date[1]," ").concat(this.props.date[2]))),s.a.createElement("div",{className:"lyrics"}),s.a.createElement("div",{className:"timersWrapper"},s.a.createElement("div",{className:"timer"},s.a.createElement("h2",null,"\u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c \u0432\u0440\u0435\u043c\u0435\u043d\u0438: "),this.props.Timer),s.a.createElement("div",{className:"capture",style:this.props.timeIsUp?{color:"red"}:{}},s.a.createElement("h2",null,"\u0421\u043b\u0443\u0436\u0435\u043d\u0438\u0435 \u0434\u043b\u0438\u0442\u0441\u044f: "),this.props.Capture),s.a.createElement("div",null)))}}]),a}(n.Component),E=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"root",style:this.props.flash?{backgroundColor:"red"}:{backgroundColor:"black"}},s.a.createElement("div",{className:"date"},s.a.createElement("h1",null,s.a.createElement("strong",null,this.props.date[3])),s.a.createElement("h1",null,"".concat(this.props.date[0],", ").concat(this.props.date[1]," ").concat(this.props.date[2]))),s.a.createElement("div",{className:"lyrics"},s.a.createElement("div",{className:"timerBig"},s.a.createElement("h2",null,"\u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c \u0432\u0440\u0435\u043c\u0435\u043d\u0438: "),this.props.Timer)),s.a.createElement("div",null,s.a.createElement("div",{className:"capture",style:this.props.timeIsUp?{color:"red"}:{}},s.a.createElement("h2",null,"\u0421\u043b\u0443\u0436\u0435\u043d\u0438\u0435 \u0434\u043b\u0438\u0442\u0441\u044f: "),this.props.Capture),s.a.createElement("div",null)))}}]),a}(n.Component);p.a.locale("uk");var k=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={date:"",timer:{minutes:"00",seconds:"00"},capture:{hours:"00",minutes:"00"},flash:!1,connected:!1,timeIsUp:!1,bigTimeLayout:!0},e}return Object(l.a)(a,[{key:"getDate",value:function(){var e=this;setInterval((function(){var t=p()().locale("uk").format("dddd D MMM HH:mm");e.setState({date:t.toUpperCase().split(" ")})}),5e3)}},{key:"componentDidMount",value:function(){var e=this;this.state.connected||(this.socket=f()("/timer",{transports:["websocket"]}),this.socket.on("SUCCESS",(function(){e.getDate(),e.setState({connected:!0})})),this.socket.on("connect_error",(function(){e.setState({connected:!1})})),this.socket.on("disconnect",(function(){e.setState({connected:!1})})),this.socket.on("TIMER_DATA",(function(t){t.minutes<0?e.setState({flash:!e.state.flash}):e.setState({flash:!1}),e.setState({timer:t})})),this.socket.on("CAPTURE_DATA",(function(t){e.setState({capture:t})})),this.socket.on("LAYOUT",(function(){e.setState({bigTimeLayout:!e.state.bigTimeLayout})})))}},{key:"generateTimer",value:function(){return s.a.createElement("h1",null,this.state.timer.minutes,":",this.state.timer.seconds)}},{key:"generateCapture",value:function(){return s.a.createElement("h1",null,this.state.capture.hours,":",this.state.capture.minutes)}},{key:"render",value:function(){return this.state.connected?this.state.bigTimeLayout?s.a.createElement(E,{flash:this.state.flash,date:this.state.date,Timer:this.generateTimer(),Capture:this.generateCapture(),timeIsUp:this.state.timeIsUp}):s.a.createElement(v,{flash:this.state.flash,date:this.state.date,Timer:this.generateTimer(),Capture:this.generateCapture(),timeIsUp:this.state.timeIsUp}):s.a.createElement("div",{className:"root"},s.a.createElement("h1",{style:{color:"white"}},"Waiting"))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=p()().locale("uk").format("dddd D MMM HH:mm");return Object(i.a)({},t,{date:a.split(" ")})}}]),a}(n.Component);c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(k,null)),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.cc1ee0e3.chunk.js.map