(this.webpackJsonpauctioneer=this.webpackJsonpauctioneer||[]).push([[0],{60:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(24),a=n(10),s=n(71),i=n(42),o=(n(51),n(61),n(62),i.a.initializeApp({apiKey:"AIzaSyB3s6QjYWR6EL45XSK7ANP-D_1I-DZ9eYg",authDomain:"taxis-e44d6.firebaseapp.com",projectId:"taxis-e44d6",storageBucket:"taxis-e44d6.appspot.com",messagingSenderId:"603667662446",appId:"1:603667662446:web:0014b763a2a4acca92487f"})),l=(i.a.firestore.FieldValue.serverTimestamp,o.firestore()),u=o.storage(),j=o.auth(),d=n(2),b=Object(c.createContext)(),O=function(e){var t=e.children,n=Object(c.useState)(null),r=Object(a.a)(n,2),s=r[0],i=r[1],o=Object(c.useState)(!0),u=Object(a.a)(o,2),O=u[0],x=u[1],h=Object(c.useState)(""),m=Object(a.a)(h,2),f=m[0],p=m[1];return Object(c.useEffect)((function(){return j.onAuthStateChanged((function(e){i(e),x(!1)}))}),[]),Object(c.useEffect)((function(){var e=setTimeout((function(){return p("")}),5e3);return function(){return clearTimeout(e)}}),[f]),Object(d.jsx)(b.Provider,{value:{currentUser:s,register:function(e,t){return j.createUserWithEmailAndPassword(e,t)},login:function(e,t){return j.signInWithEmailAndPassword(e+"@gmail.com",t)},logout:function(){return j.signOut()},bidAuction:function(e){return l.collection("auctions").doc(e).update({completed:!0})},endAuction:function(e){return l.collection("auctions").doc(e).delete()},globalMsg:f},children:!O&&t})},x=n(14),h=n.n(x),m=n(21),f=n(69),p=n(66),g=n(46),v=n(70),y=n(67),w=n(44),C=n.n(w),N=function(e){return new Promise((function(t){C.a.imageFileResizer(e,210,280,"JPEG",80,0,(function(e){t(e)}),"base64")}))},S=Object(c.useState)("no-gps"),k=Object(a.a)(S,2),L=k[0],I=k[1],E=Object(c.useState)("no-gps"),R=Object(a.a)(E,2),A=R[0],P=R[1];console.log(A),console.log(L),navigator.geolocation?navigator.geolocation.getCurrentPosition((function(e){console.log("Latitude: ",e.coords.latitude),I(e.coords.latitude),console.log("Longitude: ",e.coords.longitude),P(e.coords.longitude)}),(function(e){switch(e.code){case e.PERMISSION_DENIED:console.log("User denied the request for Geolocation.");break;case e.POSITION_UNAVAILABLE:console.log("Location information is unavailable.");break;case e.TIMEOUT:console.log("The request to get user location timed out.");break;case e.UNKNOWN_ERROR:console.log("An unknown error occurred.")}})):console.log("Geolocation is not supported by this browser.");var D=function(e){var t=e.setAuction,n=Object(c.useState)(!1),r=Object(a.a)(n,2),i=r[0],o=r[1],l=Object(c.useState)(""),u=Object(a.a)(l,2),j=u[0],O=u[1],x=Object(c.useRef)(),w=Object(c.useRef)(),C=Object(c.useRef)(),S=Object(c.useRef)(),k=Object(c.useContext)(b).currentUser,I=function(){return o(!1)},E=["image/png","image/jpeg","image/jpg"],R=function(){var e=Object(m.a)(h.a.mark((function e(t){var n,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.files[0],e.next=3,N(n);case 3:c=e.sent,fetch(c).then((function(e){return e.blob()})).then((function(e){var t=new File([e],Date.now()+".jpeg",{type:"image/jpeg"});F(t)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=Object(c.useState)(),D=Object(a.a)(P,2),U=D[0],F=D[1],G=function(){var e=Object(m.a)(h.a.mark((function e(n){var c,r,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),O(""),E.includes(C.current.files[0].type)){e.next=4;break}return e.abrupt("return",O("Please use a valid image"));case 4:console.log("imagen:",C.current.files[0]),c=new Date,r=c.setHours(c.getHours()),a={email:k.email,title:x.current.value,description:w.current.value,duration:r,itemImage:U,latitude:L,longitude:A,categorie:S.current.value,completed:!1},t(a),I();case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"col d-flex justify-content-center my-3 ",children:Object(d.jsx)("div",{onClick:function(){return o(!0)},className:"btn btn-success mx-5 w-100",children:"Guardar Viaje"})}),Object(d.jsx)(f.a,{centered:!0,show:i,onHide:I,style:{width:"96%",marginLeft:"1%"},children:Object(d.jsxs)("form",{onSubmit:G,style:{backgroundColor:"rgb(222,222,222)"},children:[Object(d.jsxs)(f.a.Body,{children:[j&&Object(d.jsx)(s.a,{variant:"danger",children:j}),Object(d.jsx)(p.a,{children:Object(d.jsx)(g.a,{className:"border mb-4 btn bg-primary mx-2 p-2 text-center text-white",children:k.email.slice(0,-10)})}),Object(d.jsx)(p.a,{children:Object(d.jsx)(g.a,{className:"mb-4",children:Object(d.jsxs)(v.a.Group,{children:[Object(d.jsx)(v.a.Label,{children:"Unidad"}),Object(d.jsx)(v.a.Control,{type:"text",required:!0,ref:x})]})})}),Object(d.jsx)(p.a,{children:Object(d.jsxs)(g.a,{className:"mb-4",children:[Object(d.jsx)(v.a.Label,{children:"Cliente"}),Object(d.jsxs)(v.a.Control,{as:"select",multiple:!1,ref:S,children:[Object(d.jsx)("option",{value:"oxxo",children:"OXXO"}),Object(d.jsx)("option",{value:"otro",children:"Otro"}),Object(d.jsx)("option",{value:"pago en efectivo",children:"Pago en Efectivo"})]})]})}),Object(d.jsx)(p.a,{children:Object(d.jsx)(g.a,{children:Object(d.jsxs)(v.a.Group,{children:[Object(d.jsx)(v.a.Label,{children:"Comentarios"}),Object(d.jsx)(v.a.Control,{as:"textarea",placeholder:"comentarios...",style:{height:"80px",resize:"none"},required:!0,ref:w})]})})}),Object(d.jsx)(p.a,{children:Object(d.jsxs)(g.a,{children:[Object(d.jsx)(v.a.Label,{}),Object(d.jsx)(v.a.Group,{children:Object(d.jsx)(v.a.File,{label:"Cargar Foto",custom:!0,ref:C,required:!0,onChange:R})})]})})]}),Object(d.jsxs)(f.a.Footer,{children:[Object(d.jsx)(y.a,{variant:"secondary",onClick:I,children:"Cancelar"}),Object(d.jsx)(y.a,{variant:"primary",type:"submit",children:"Guardar"})]})]})})]})},U=n(28),F=function(e){var t=Object(c.useState)([]),n=Object(a.a)(t,2),r=n[0],s=n[1];return Object(c.useEffect)((function(){var t=l.collection(e).onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(U.a)(Object(U.a)({},e.data()),{},{id:e.id}))})),s(t)}));return function(){return t()}}),[e]),{docs:r}},G=function(e){var t,n,r=e.item,a=Object(c.useContext)(b),s=a.currentUser,i=a.bidAuction;F("auctions").docs.map((function(e){e.id===r.id&&(t=e.duration),e.id===r.id&&(n=e.completed)}));var o=new Date(t).toLocaleTimeString("es-CL"),l=new Date(t).toLocaleDateString("es-CL",{weekday:"short",year:"numeric",month:"short",day:"numeric"});return Object(d.jsx)("div",{className:"col mb-4",children:Object(d.jsxs)("div",{className:"card shadow-sm",children:[Object(d.jsx)("div",{style:{height:"180px",backgroundImage:"url(".concat(r.imgUrl,")"),backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center"},className:"w-100 mt-4"}),Object(d.jsxs)("div",{className:"card-body p-4",children:[Object(d.jsxs)("p",{className:"h4",children:[Object(d.jsx)("span",{className:"text-secondary",children:"Kl: "}),s.email.slice(0,-10)]}),Object(d.jsx)("div",{className:"d-flex jsutify-content-between align-item-center",children:Object(d.jsxs)("h5",{children:[Object(d.jsx)("span",{className:"text-secondary",children:"Cliente: "})," ",r.categorie]})}),Object(d.jsx)("div",{children:Object(d.jsxs)("p",{children:[l,", ",o]})}),Object(d.jsx)("p",{className:"card-text",children:r.description}),Object(d.jsx)("div",{className:"d-flex justify-content-between align-item-center",children:s&&Object(d.jsx)("button",{onClick:function(){return i(r.id)},className:n?"btn btn-primary w-100":"btn btn-danger",children:n?"Completado":" Sin Completar"})})]})]})})},T=n(68),q=function(e){var t=Object(c.useState)(0),n=Object(a.a)(t,2),r=n[0],s=n[1],i=Object(c.useState)(null),o=Object(a.a)(i,2),j=o[0],d=o[1];return Object(c.useState)((function(){var t=u.ref(e.itemImage.name),n=l.collection("auctions");t.put(e.itemImage).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;s(t)}),(function(e){console.log(e)}),Object(m.a)(h.a.mark((function c(){var r;return h.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,t.getDownloadURL();case 2:return r=c.sent,delete e.itemImage,c.next=6,n.add(Object(U.a)(Object(U.a)({},e),{},{imgUrl:r}));case 6:d(!0);case 7:case"end":return c.stop()}}),c)}))))}),[e]),{progress:r,isCompleted:j}},B=function(e){var t=e.auction,n=e.setAuction,r=q(t),a=r.progress,s=r.isCompleted;return Object(c.useEffect)((function(){s&&n(null)}),[s,n]),Object(d.jsx)(T.a.div,{style:{height:"5px",background:"black"},initial:{width:0},animate:{width:"".concat(a,"%")}})},H=function(){var e,t=Object(c.useState)(null),n=Object(a.a)(t,2),r=n[0],i=n[1],o=Object(c.useContext)(b),l=o.currentUser,u=o.globalMsg,j=F("auctions").docs;return e=!!l&&l.email?j.filter((function(e){return e.email===l.email})).sort((function(e,t){return t.duration-e.duration})):[],Object(d.jsxs)("div",{className:"",children:[r&&Object(d.jsx)(B,{auction:r,setAuction:i}),Object(d.jsx)("div",{style:{zIndex:"9999999"},className:"text-center w-50 position-fixed top-10 start-50 translate-middle",children:u&&Object(d.jsx)(s.a,{variant:"danger",children:u})}),l&&Object(d.jsx)(D,{setAuction:i}),e&&Object(d.jsx)("div",{className:"row row-cols-1 row-cols-md-3 row-cols-lg-4 p-5 g-3 border mt-1 ",children:e.map((function(e,t){return Object(d.jsx)(G,{item:e},t)}))})]})},z=n.p+"static/media/canal10.24a72002.png",K=function(){var e=Object(c.useState)(!1),t=Object(a.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(""),o=Object(a.a)(i,2),l=o[0],u=o[1],j=Object(c.useRef)(),O=Object(c.useRef)(),x=Object(c.useContext)(b).login,p=function(){return r(!1)},g=function(){var e=Object(m.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),u(""),e.prev=2,e.next=5,x(j.current.value,O.current.value);case 5:p(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),u("Invalid login");case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{onClick:function(){return r(!0)},className:"btn btn-outline-secondary mx-2",children:"Entrar"}),Object(d.jsx)(f.a,{centered:!0,show:n,onHide:p,children:Object(d.jsxs)("form",{onSubmit:g,children:[Object(d.jsx)(f.a.Header,{children:Object(d.jsx)(f.a.Title,{children:"Entrar"})}),Object(d.jsxs)(f.a.Body,{children:[l&&Object(d.jsx)(s.a,{variant:"danger",children:l}),Object(d.jsxs)(v.a.Group,{children:[Object(d.jsx)(v.a.Label,{children:"KL "}),Object(d.jsx)(v.a.Control,{type:"text",required:!0,ref:j,placeholder:"escribe tu KL"})]}),Object(d.jsxs)(v.a.Group,{className:"d-none",children:[Object(d.jsx)(v.a.Label,{children:"Password"}),Object(d.jsx)(v.a.Control,{type:"text",ref:O,value:"123456"})]})]}),Object(d.jsxs)(f.a.Footer,{children:[Object(d.jsx)(y.a,{variant:"secondary",onClick:p,children:"Cancelar"}),Object(d.jsx)(y.a,{variant:"primary",type:"submit",children:"Entrar"})]})]})})]})},_=function(){var e=Object(c.useState)(!1),t=Object(a.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(""),o=Object(a.a)(i,2),l=o[0],u=o[1],j=Object(c.useRef)(),O=Object(c.useRef)(),x=Object(c.useRef)(),p=Object(c.useContext)(b).register,g=function(){return r(!1)},w=function(){var e=Object(m.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),u(""),O.current.value===x.current.value){e.next=4;break}return e.abrupt("return",u("Passwords does not match"));case 4:return e.prev=4,e.next=7,p(j.current.value,O.current.value);case 7:g(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),u(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{onClick:function(){return r(!0)},className:"btn btn-outline-secondary mx-2 d-none",children:"Registro"}),Object(d.jsx)(f.a,{centered:!0,show:n,onHide:g,children:Object(d.jsxs)("form",{onSubmit:w,children:[Object(d.jsx)(f.a.Header,{children:Object(d.jsx)(f.a.Title,{children:"Registro"})}),Object(d.jsxs)(f.a.Body,{children:[l&&Object(d.jsx)(s.a,{variant:"danger",children:l}),Object(d.jsxs)(v.a.Group,{children:[Object(d.jsx)(v.a.Label,{children:"Email"}),Object(d.jsx)(v.a.Control,{type:"email",required:!0,ref:j})]}),Object(d.jsxs)(v.a.Group,{children:[Object(d.jsx)(v.a.Label,{children:"Password"}),Object(d.jsx)(v.a.Control,{type:"password",required:!0,ref:O})]}),Object(d.jsxs)(v.a.Group,{children:[Object(d.jsx)(v.a.Label,{children:"Confirmar Password"}),Object(d.jsx)(v.a.Control,{type:"password",required:!0,ref:x})]})]}),Object(d.jsxs)(f.a.Footer,{children:[Object(d.jsx)(y.a,{variant:"secondary",onClick:g,children:"Cancelar"}),Object(d.jsx)(y.a,{variant:"primary",type:"submit",children:"Registro"})]})]})})]})},M=function(){var e=Object(c.useContext)(b),t=e.currentUser,n=e.logout;return Object(d.jsx)("nav",{className:"container navbar navbar-light ",children:Object(d.jsxs)("div",{className:"container d-flex flex-column",children:[Object(d.jsx)("div",{className:"navbar-brand mb-4",children:Object(d.jsx)("img",{src:z,alt:"logo",height:"50"})}),Object(d.jsx)("div",{className:"d-flex",children:Object(d.jsx)("div",{className:"col mb-4",children:t?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"btn btn-secondary mx-2 disabled px-4",children:t.email.slice(0,-10)}),Object(d.jsx)("div",{onClick:function(){return n()},className:"btn btn-outline-secondary mx-2",children:"SALIR"})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(K,{}),Object(d.jsx)(_,{})]})})})]})})},W=function(){return Object(d.jsxs)(O,{children:[Object(d.jsx)(M,{}),Object(d.jsx)(H,{})]})};n(59);Object(r.render)(Object(d.jsx)(W,{}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.b47c01dd.chunk.js.map