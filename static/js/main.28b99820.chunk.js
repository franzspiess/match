(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a.p+"static/media/info2.8d4aff01.svg"},42:function(e,t,a){e.exports=a.p+"static/media/ball4.9f543099.png"},43:function(e,t,a){e.exports=a.p+"static/media/chat3.91b10fb5.svg"},44:function(e,t,a){e.exports=a(93)},49:function(e,t,a){},85:function(e,t){},91:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(39),r=a.n(c),i=(a(49),a(12)),l=a.n(i),o=a(24),m=a(1),h=a(2),u=a(4),p=a(3),d=a(5),f=a(6),g=a(41),v=a.n(g),E=a(42),b=a.n(E),N=a(43),y=a.n(N),k={first:"Rafael",last:"Nadal",skill:"4",age:32,img:"https://res.cloudinary.com/pinchepanchopincho/image/upload/v1547042159/userpics/nadal2.jpg"},w=function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e={backgroundImage:"url(".concat(k.img,")")};return s.a.createElement("div",{className:"navbar"},s.a.createElement(f.a,{to:"profile"},s.a.createElement("div",{className:"navbutton button profilpic",style:e,alt:"user"})),s.a.createElement(f.a,{to:"/"},s.a.createElement("img",{className:"navbutton navmatch",src:b.a,alt:"matching"})),s.a.createElement(f.a,{to:"mymatches"},s.a.createElement("img",{className:"navbutton",src:y.a,alt:"chat"})))}}]),t}(n.Component),S=a(25),j=a(11),O=a.n(j),C=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={show:!1},a.click=function(){a.state.show?a.setState({show:!1}):a.setState({show:!0})},a.theEnd=function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"logo"},s.a.createElement("span",{className:"mylogo"},"MATCH"),s.a.createElement("span",{className:"noplayers"},"No Players Near You")))},a}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.potentials,n=t.yes,c=t.no,r=a.map(function(t){var a=Array(Number(t.skill)).fill("\ud83c\udfbe").map(function(e){return s.a.createElement("img",{src:"https://res.cloudinary.com/pinchepanchopincho/image/upload/v1547497115/styles/ball4.png",className:"skillimg",alt:"ball"})}),r={display:"flex",flexDirection:"column",justifyContent:"flex-end",backgroundImage:"url(".concat(t.img,")"),backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",alignSelf:"center",width:"84%",height:"92%",marginTop:"2vh"};return s.a.createElement(S.a,{style:r,key:t._id,onSwipeRight:n,onDoubleTap:n,onSwipeLeft:c},e.state.show?s.a.createElement("div",{className:"thedescription"},s.a.createElement("div",{className:"sub-description"},t.description),s.a.createElement("div",{className:"skillArr"},s.a.createElement("span",{className:"theskill1"},"Skill Level:"),s.a.createElement("span",{className:"theskill2"},"  ",a))):null,s.a.createElement("div",{className:"userinfo"},s.a.createElement("div",{className:"username"},t.first,", ",t.age),s.a.createElement("div",{className:"descriptiondiv"},s.a.createElement("img",{className:"userdescription description-button",src:O.a,onClick:e.click,alt:"img"}))))});return a?s.a.createElement("div",{className:"usercontainer"},s.a.createElement(S.b,{className:"wrapper",addEndCard:this.theEnd},r)):s.a.createElement("div",null,"User not found!")}}]),t}(n.Component),A=function(e){var t=e.yes,a=e.no;return s.a.createElement("div",{className:"decision-container"},s.a.createElement("span",{className:"decide no",onClick:a}),s.a.createElement("span",{className:"decide yes",onClick:t}))},x=function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.yes,a=e.no,n=e.newMatch,c=e.currentPotential,r=e.toggleNew;if(n&&c){var i={backgroundImage:"url(".concat(c.img,")"),backgroundSize:"cover",backgroundPosition:"center",height:"30vh",width:"30vh",borderRadius:"100%",marginBottom:"3vh"};return s.a.createElement("div",{className:"newmatch-box"},s.a.createElement("div",{className:"newmatch-data"},s.a.createElement("div",{className:"newmatch-notify"},"You've got a new"),s.a.createElement("div",{className:"newmatch-logo"},"MATCH"),s.a.createElement("div",{className:"newmatch-pic",style:i}),s.a.createElement("div",{className:"newmatch-info"},c.first,", ",c.age)),s.a.createElement("div",{className:"newmatch-buttons"},s.a.createElement(f.a,{to:"mymatches",onClick:r},s.a.createElement("div",{className:"newmatch-btn"},"SEND MESSAGE")),s.a.createElement("div",{className:"newmatch-btn",onClick:r},"KEEP SWIPING")))}return!this.newMatch&&this.props.potentials?s.a.createElement("div",{className:"matchbox"},s.a.createElement(C,{potentials:this.props.potentials,yes:t,no:a}),s.a.createElement(A,{yes:t,no:a})):null}}]),t}(n.Component),P=a(7),U=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={first:a.props.myUser.first,last:a.props.myUser.last,age:a.props.myUser.age,skill:a.props.myUser.skill,sport:a.props.myUser.sport,distance:a.props.myUser.distance/1e3},a}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e,t=this;return localStorage.getItem("token")?s.a.createElement("div",{className:"profilebox"},s.a.createElement("div",{className:"profile sport"},s.a.createElement("span",{className:"title"},"Sport:"),s.a.createElement("select",(e={className:"value sport-input",name:"carlist",form:"carform"},Object(P.a)(e,"name","sport"),Object(P.a)(e,"onChange",function(e){return t.setState({sport:e.target.value})}),e),s.a.createElement("option",{value:"tennis"},"Tennis"),s.a.createElement("option",{value:"tabletennis"},"Table-Tennis"),s.a.createElement("option",{value:"badminton"},"Badminton"),s.a.createElement("option",{value:"squash"},"Squash"))),s.a.createElement("div",{className:"profile first"},s.a.createElement("span",{className:"title"},"First Name:"),s.a.createElement("input",{className:"value first-input",placeholder:this.state.first,onChange:function(e){return t.setState({first:e.target.value})}})),s.a.createElement("div",{className:"profile last"},s.a.createElement("span",{className:"title"},"Last Name:"),s.a.createElement("input",{className:"value last-input",placeholder:this.state.last,onChange:function(e){return t.setState({last:e.target.value})}})),s.a.createElement("div",{className:"profile age"},s.a.createElement("span",{className:"title"},"Age:"),s.a.createElement("input",{className:"value age-input",placeholder:this.state.age,onChange:function(e){return t.setState({age:e.target.value})}})),s.a.createElement("div",{className:"profile skill"},s.a.createElement("span",{className:"title"},"Skill:"),s.a.createElement("div",{className:"skilldiv"},s.a.createElement("span",{className:"skilltitle"},this.state.skill," /5"),s.a.createElement("input",{type:"range",className:"value skill-input ranger",min:"1",max:"5",defaultValue:this.state.skill,onChange:function(e){return t.setState({skill:e.target.value})}}))),s.a.createElement("div",{className:"profile distance"},s.a.createElement("span",{className:"title"},"Distance:"),s.a.createElement("div",{className:"rangediv"},s.a.createElement("span",{className:"rangetitle"},this.state.distance," km"),s.a.createElement("input",{type:"range",className:"value distance-input ranger",min:"1",max:"50",placeholder:this.state.distance,defaultValue:this.state.distance,onChange:function(e){return t.setState({distance:e.target.value})}}))),s.a.createElement("button",{className:"profile-button",onClick:function(e){return t.props.updateUser(t.state)}},"Change"),s.a.createElement(f.a,{to:"/",className:"logout-button",onClick:this.props.logout},"LogOut")):s.a.createElement(f.b,{to:"/"})}}]),t}(n.Component),M=function(e){var t=e.matches,a=t.map(function(e){if(!e.messages.length)return s.a.createElement(f.a,{to:"chatview/".concat(e.idid),state:{user:e},key:e.idid},s.a.createElement("img",{className:"chatpic",src:e.img,alt:"matchimg"}))});return t&&a?s.a.createElement("div",{className:"matched"},a):null},I=function(e){var t=e.matches.map(function(e){if(e.messages.length)return s.a.createElement(f.a,{to:"chatview/".concat(e.idid),state:{user:e},key:e.idid},s.a.createElement("div",{className:"chatpreview"},s.a.createElement("img",{className:"chatpic",src:e.img,alt:"matchpic"}),s.a.createElement("div",{className:"msgheader"},s.a.createElement("div",{className:"msgpreview msgname"},e.first),s.a.createElement("div",{className:"msgpreview"},e.messages[0].content))))});return s.a.createElement("div",{className:"chatoverview"},t)},T=function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchAndSet()}},{key:"render",value:function(){var e=this.props.matches;return this.props?s.a.createElement("div",{className:"chatview"},s.a.createElement(M,{matches:e}),s.a.createElement(I,{matches:e})):null}}]),t}(n.Component),D=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(s)))).state={show:!1,showPic:!1},a.click=function(){a.state.show?a.setState({show:!1}):a.setState({show:!0,showPic:!1})},a.clickPic=function(){a.state.showPic?a.setState({showPic:!1}):a.setState({showPic:!0,show:!1})},a}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.user.idid,t=this.props.matches.find(function(t){return t.idid===e}),a=t.messages,n=[],c=Array(Number(t.skill)).fill("\ud83c\udfbe").map(function(e){return s.a.createElement("img",{src:"https://res.cloudinary.com/pinchepanchopincho/image/upload/v1547497115/styles/ball4.png",className:"skillimg",alt:"ball"})});return a.length&&(n=a.map(function(e,a){var n;return n=e.author===t.idid?"received":"sent",s.a.createElement("div",{className:"message ".concat(n),key:a},e.content)})),n&&n.length?s.a.createElement("div",{className:"message-container"},s.a.createElement("div",{className:"chatpartner"},s.a.createElement("div",{className:"sub-partner"},s.a.createElement("img",{className:"chatpic inchatpic",src:t.img,alt:"matchpic"}),s.a.createElement("div",{className:"partnername"},t.first,", ",t.age)),s.a.createElement("img",{className:"chatdescription",src:O.a,onClick:this.click,alt:"info"})),this.state.show?s.a.createElement("div",{className:"description-box-chat",key:"b +".concat(t.idid)},t.description):s.a.createElement("div",{className:"the-message-list"},n)):s.a.createElement("div",{className:"message-container"},s.a.createElement("div",{className:"chatpartner"},s.a.createElement("div",{className:"sub-partner"},s.a.createElement("img",{className:"chatpic inchatpic",src:t.img,alt:"matchpic",onClick:this.clickPic}),s.a.createElement("div",{className:"partnername"},t.first,", ",t.age)),s.a.createElement("img",{className:"chatdescription",src:O.a,onClick:this.click,alt:"info"})),this.state.show?s.a.createElement("div",{className:"description-box-chat"},t.description,s.a.createElement("div",{className:"skillArr chatskill"},s.a.createElement("span",{className:"theskill1"},"Skill Level:"),s.a.createElement("span",{className:"theskill2"},"  ",c))):null)}}]),t}(n.Component),J=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(s)))).state={msg:""},a}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=this.props.post,a=this.props.user;return s.a.createElement("div",{className:"inputbox"},s.a.createElement("input",{type:"text",className:"sendmsg",placeholder:"Type your message",onChange:function(t){return e.setState({msg:t.target.value})},value:this.state.msg}),s.a.createElement("button",{className:"sendbtn",onClick:function(n){t(e.state.msg,a),e.setState({msg:""})}},"SEND"))}}]),t}(n.Component),L=function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.post,t=this.props.matches,a=this.props.location.state.user;return s.a.createElement("div",{className:"chatbox"},s.a.createElement(D,{user:a,matches:t}),s.a.createElement(J,{post:e,user:a}))}}]),t}(n.Component),B=(n.Component,n.Component,a(91),"https://cors-anywhere.herokuapp.com/https://private-0756c-match11.apiary-mock.com"),W=v()(B),R=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(s)))).state={loading:!1,located:[],matches:[],potentials:[],myUser:{},newMatch:!1},a.toggleNew=function(){a.setState({newMatch:!1})},a.success=function(e){var t=e.coords,n=t.latitude,s=t.longitude;a.setState({located:[s,n]},function(){return console.log("location",a.state.located)})},a.create=function(e){var t=e;navigator.geolocation.getCurrentPosition(a.success),t.located=a.state.located,fetch("".concat(B,"/create"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(){var e=Object(o.a)(l.a.mark(function e(t){var n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,401!==t.status){e.next=5;break}alert("User already exists"),e.next=19;break;case 5:if(401!==t.status){e.next=9;break}alert("Wrong password."),e.next=19;break;case 9:if(201!==t.status){e.next=18;break}return e.next=12,t.json();case 12:n=e.sent,localStorage.setItem("token",n.token),localStorage.setItem("userID",n.idid),a.setState({myUser:n}),e.next=19;break;case 18:alert("Unknown error");case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(0),console.log(e.t0);case 24:case"end":return e.stop()}},e,this,[[0,21]])}));return function(t){return e.apply(this,arguments)}}()).then(a.fetchAndSetMatches).then(a.fetchAndSetPotentials)},a.logout=function(){localStorage.removeItem("token"),localStorage.removeItem("userID"),a.setState({})},a.fetchAndSetPotentials=function(){fetch("".concat(B,"/potentials/7"),{headers:{"Access-Control-Allow-Credentials":!0}}).then(function(e){return e.json()}).then(function(e){var t=e[0];a.setState({currentPotential:t,potentials:e}),a.setState({loading:!1})}).catch(function(e){return console.log(e)})},a.updateUser=function(e){var t=a.state.myUser;e.first.length&&(t.first=e.first),e.last.length&&(t.last=e.last),Number(e.age)>=14&&Number(e.age)<=100&&(t.age=Number(e.age)),Number(e.age)>=1&&Number(e.age)<=5&&(t.last=Number(e.last)),t.sport=e.sport,fetch("".concat(B,"/myuser/").concat(t.idid),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(e){return console.log(e)}).then(a.fetchAndSetUser).then(a.fetchAndSetPotentials)},a.fetchAndSetUser=function(){fetch("".concat(B,"/myuser/7"),{headers:{"Access-Control-Allow-Credentials":!0}}).then(function(e){return e.json()}).then(function(e){return a.setState({myUser:e})}).catch(function(e){return console.log(e)})},a.fetchAndSetMatches=function(){fetch("".concat(B,"/matches/7"),{headers:{"Access-Control-Allow-Credentials":!0}}).then(function(e){return e.json()}).then(function(e){a.state.matches.length&&e.length>a.state.matches.length&&a.setState({newMatch:!0}),a.setState({matches:e})})},a.showPosition=function(e){return e.coords},a}return Object(d.a)(t,e),Object(h.a)(t,[{key:"login",value:function(e){var t=this;fetch("".concat(B,"/login"),{method:"get",headers:new Headers({Authorization:"Basic "+btoa("".concat(e.email,":").concat(e.password)),"Access-Control-Allow-Credentials":!0,"Content-Type":"application/x-www-form-urlencoded"})}).then(function(){var e=Object(o.a)(l.a.mark(function e(a){var n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(404!==a.status){e.next=4;break}alert("User not found"),e.next=15;break;case 4:if(401!==a.status){e.next=8;break}alert("Wrong password."),e.next=15;break;case 8:if(201!==a.status){e.next=15;break}return e.next=11,a.json();case 11:n=e.sent,t.setState({myUser:n}),localStorage.setItem("token",n.token),localStorage.setItem("userID",n.idid);case 15:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()).then(this.fetchAndSetMatches).then(this.fetchAndSetPotentials)}},{key:"postMsgToServer",value:function(e,t){W.emit("sendmsg",e);var a={msg:e,id:t.idid,chatID:t.chatID};fetch("".concat(B,"/msg/").concat(this.state.myUser.idid),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then(this.fetchAndSetMatches).catch(function(e){return console.log(e)})}},{key:"matchCurrentPotential",value:function(){var e=this.state.potentials,t=e.shift();this.setState({potentials:e,currentPotential:t}),fetch("".concat(B,"/setmatch/").concat(this.state.myUser.idid),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.state.currentPotential)}).then(this.fetchAndSetMatches).catch(function(e){return console.log(e)})}},{key:"declineCurrentPotential",value:function(){var e=this.state.potentials,t=e.shift();this.setState({potentials:e,currentPotential:t}),fetch("".concat(B,"/setdecline/").concat(this.state.myUser.idid),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.state.currentPotential)}).then(this.fetchAndSetMatches).catch(function(e){return console.log(e)})}},{key:"componentDidMount",value:function(){this.fetchAndSetUser(),this.fetchAndSetMatches(),this.fetchAndSetPotentials()}},{key:"render",value:function(){return this.state.loading?s.a.createElement("div",{className:"loading"},"LOADING"):s.a.createElement("div",{className:"main-container"},s.a.createElement(w,null),s.a.createElement(f.c,{basepath:"/match"},s.a.createElement(U,{path:"profile",myUser:this.state.myUser,updateUser:this.updateUser,logout:this.logout}),s.a.createElement(x,{path:"/",yes:this.matchCurrentPotential.bind(this),no:this.declineCurrentPotential.bind(this),potentials:this.state.potentials,newMatch:this.state.newMatch,toggleNew:this.toggleNew,currentPotential:this.state.currentPotential}),s.a.createElement(T,{path:"mymatches",matches:this.state.matches,myUser:this.state.myUser,fetchAndSet:this.fetchAndSetMatches}),s.a.createElement(L,{path:"mymatches/chatview/:userId",post:this.postMsgToServer.bind(this),matches:this.state.matches})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[44,2,1]]]);
//# sourceMappingURL=main.28b99820.chunk.js.map