(this.webpackJsonpdistribuidorariki=this.webpackJsonpdistribuidorariki||[]).push([[0],{89:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(20),s=a.n(n),r=a(11),i=a(2),l=a(6),o=a.n(l),d=a(3),j=a(4),b=a(27),m=a(22),u=(a(46),a(23)),h=(a(47),a(0)),x=Object(c.createContext)(),O=function(e){var t=JSON.parse(localStorage.getItem("carro"));t||(t=[]);var a=JSON.parse(localStorage.getItem("total"));a||(a=0);var n=JSON.parse(localStorage.getItem("unidades"));n||(n=0);var s=Object(c.useState)(t),r=Object(i.a)(s,2),l=r[0],o=r[1],d=Object(c.useState)(t),j=Object(i.a)(d,2),b=j[0],O=j[1],p=Object(c.useState)(n),g=Object(i.a)(p,2),v=g[0],f=g[1],N=Object(c.useState)(a),w=Object(i.a)(N,2),y=w[0],C=w[1];Object(c.useEffect)((function(){t?(localStorage.setItem("carro",JSON.stringify(l)),localStorage.setItem("total",JSON.stringify(y)),localStorage.setItem("unidades",JSON.stringify(v))):(localStorage.setItem("carro",JSON.stringify([])),localStorage.setItem("total",JSON.stringify([])),localStorage.setItem("unidades",JSON.stringify([]))),0===l.length&&C(0)}),[l,t,y]);var S=function(e){return u.b.info(e,{position:u.b.POSITION.BOTTOM_CENTER,autoClose:5e3})},k=function(){o([]),f(0),C(0)},z=function(e){return l.filter((function(t){return t.id===e}))};return Object(h.jsxs)(x.Provider,{value:{carro:l,setCarro:o,addItem:function(e,t,a,c,n,s){if(1===z(e).length){var r=l.filter((function(t){return t.id===e})),i=l.filter((function(t){return t.id!==e}));a+r[0].quantity>s?S("No hay suficiente stock"):(o([].concat(Object(m.a)(i),[{id:e,title:t,quantity:a+r[0].quantity,precio:c.replace(",","."),pictureUrl:n,total:c.replace(",",".")*(a+r[0].quantity)}])),f(v-r[0].quantity+(a+r[0].quantity)),C(y-r[0].precio*r[0].quantity+c.replace(",",".")*(a+r[0].quantity)),S("\u2705 Producto Agregado \ud83d\ude01"))}else o([].concat(Object(m.a)(l),[{id:e,title:t,quantity:a,precio:c.replace(",","."),pictureUrl:n,total:c.replace(",",".")*a}])),O([].concat(Object(m.a)(b),[{id:e,title:t,quantity:a,precio:c.replace(",","."),total:c.replace(",",".")*a}])),f(v+a),C(y+c.replace(",",".")*a),S("\u2705 Producto Agregado \ud83d\ude01")},removeItem:function(e,t){y<0&&k();var a=l.filter((function(t){return t.id===e}));f(v-a[0].quantity),C(y-a[0].precio*a[0].quantity);var c=l.filter((function(t){return t.id!==e}));o(c),console.log("Este es el carro ",l),S("Producto Eliminado \ud83d\ude14")},isInCart:z,clear:k,unidadesCarro:v,totalCarro:y,notify:S,setUnidadesCarro:f,setTotalCarro:C,carroFinal:b,setCarroFinal:O},children:[e.children,Object(h.jsx)(u.a,{})]})};var p=function(){var e=Object(c.useContext)(x),t=e.unidadesCarro,a=e.totalCarro;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"".concat(t>0?"mostrar":"ocultar"),children:Object(h.jsx)("div",{className:"cart-float",children:Object(h.jsxs)(d.b,{to:"/cart",className:"nav-link",children:[Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-bag pb-1",viewBox:"0 0 16 16",children:Object(h.jsx)("path",{d:"M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"})})," $",a,Object(h.jsx)("span",{className:"badge badge-primary",children:t})]})})})})},g=a(39),v=a.n(g).a.create({baseURL:"http://66.97.46.222/api/"}),f=a.p+"static/media/whatsapp.908d52a4.svg";var N=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),l=Object(i.a)(s,2),j=l[0],b=l[1],m=Object(c.useState)(!1),u=Object(i.a)(m,2),x=u[0],O=u[1];Object(c.useEffect)((function(){var e=function(){var e=Object(r.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/categories").then((function(e){var t=e.data;n(t),console.log(t)})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var g=function(){O(!x)};return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("nav",{className:"navbar navbar-expand-md navbar-dark fixed-top bg-dark",children:Object(h.jsxs)("div",{className:"container-fluid",children:[Object(h.jsx)(d.b,{to:"/",className:"navbar-brand border-right text-dark",children:"Distribuidora Riky"}),Object(h.jsx)("button",{onClick:g,className:"navbar-toggler collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(h.jsx)("span",{children:Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"36",height:"36",fill:"currentColor",class:"bi bi-list",viewBox:"0 0 16 16",children:Object(h.jsx)("path",{fillRule:"evenodd",d:"M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"})})})}),Object(h.jsxs)("div",{className:!1===x?"navbar-collapse collapse":"navbar-collapse collapse show",id:"navbarCollapse",children:[Object(h.jsxs)("ul",{className:!1===x?"navbar-nav me-auto mb-2 mb-md-0 d-flex":"navbar-nav me-auto mb-2 mb-md-0 d-flex trans",children:[Object(h.jsx)("li",{className:"nav-item","data-toggle":"collapse","data-target":".navbar-collapse.show",children:Object(h.jsx)(d.b,{onClick:g,to:"/",className:"nav-link",children:"Home"})}),Object(h.jsxs)("li",{className:"nav-item dropdown",children:[Object(h.jsx)("a",{className:"nav-link dropdown-toggle",href:"#",id:"dropdown07","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Categor\xedas"}),Object(h.jsx)("ul",{className:"dropdown-menu","aria-labelledby":"dropdown07",children:a.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(d.b,{to:"/category/".concat(e.id),className:"dropdown-item",children:e.name})})}))})]}),Object(h.jsx)("li",{className:"nav-item","data-toggle":"collapse","data-target":".navbar-collapse.show",children:Object(h.jsx)(d.b,{onClick:g,to:"/cart",className:"nav-link",children:"Carrito"})})]}),Object(h.jsxs)("div",{className:!1===x?"d-flex":"d-flex trans",children:[Object(h.jsx)("input",{className:"form-control me-2",type:"search",onChange:function(e){b(e.target.value)},placeholder:"Buscar","aria-label":"Search",value:j}),j.length<3?Object(h.jsx)("button",{onClick:g,className:"btn",type:"submit",children:Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-search",viewBox:"0 0 16 16",children:Object(h.jsx)("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"})})}):Object(h.jsx)(d.b,{to:"/search/".concat(j),children:Object(h.jsx)("button",{onClick:g,className:"btn",type:"submit",children:Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-search",viewBox:"0 0 16 16",children:Object(h.jsx)("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"})})})})]})]}),Object(h.jsx)(p,{}),Object(h.jsx)("div",{className:"whatsapp",children:Object(h.jsx)("a",{href:"https://api.whatsapp.com/send?phone=5491134020429&text=%Probando",children:Object(h.jsx)("img",{src:f})})})]})})})},w=a(40),y=a.n(w);var C=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),a=t[0],n=t[1],s=Object(j.f)(),l=Object(c.useState)(""),d=Object(i.a)(l,2),m=d[0],u=d[1];return Object(c.useEffect)((function(){u(s.pathname)}),[s]),Object(c.useEffect)((function(){var e=function(){var e=Object(r.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/sliders").then((function(e){var t=e.data;n(t),console.log(t)})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("header",{children:[Object(h.jsx)(N,{}),-1!==m.indexOf("/cart")||-1!==m.indexOf("/checkout")||-1!==m.indexOf("/item")||-1!==m.indexOf("/pedido")?"":Object(h.jsx)(y.a,Object(b.a)(Object(b.a)({},{className:"center",infinite:!0,slidesToShow:1,speed:500,autoplay:!0,dots:!0,arrows:!1}),{},{children:a.map((function(e){return Object(h.jsx)("div",{children:null===e.link?Object(h.jsx)("img",{className:"img-fluid",src:"http://66.97.46.222/images/slides/".concat(e.image)}):Object(h.jsx)("a",{href:e.link,children:Object(h.jsx)("img",{className:"img-fluid",src:"http://66.97.46.222/images/slides/".concat(e.image)})})})}))}))]})})};var S=function(){return Object(h.jsx)("footer",{className:"footer",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("p",{className:"text-center",children:"Todos los Derechos Reservados"})})})};var k=function(e){e.stock;var t=e.initial,a=e.onAdd,n=(e.enCarro,Object(c.useState)(t)),s=Object(i.a)(n,2),r=s[0],l=s[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"item-count mx-auto",children:[Object(h.jsx)("button",{className:"btn btn-dark left",onClick:function(){r>t&&l(r-1)},children:"-"}),Object(h.jsx)("span",{children:r}),Object(h.jsx)("button",{className:"btn btn-dark right",onClick:function(){l(r+1)},children:"+"})]}),Object(h.jsx)("button",{className:"btn btn-dark add",onClick:function(){a(r),l(1)},children:"Agregar al Carrito"})]})};var z=function(e){var t=e.id,a=e.title,n=e.stock,s=e.description,r=e.price,i=e.pictureUrl,l=Object(c.useContext)(x),o=l.addItem,d=l.isInCart,j=function(e){o(t,a,e,r,i,n)};return Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-xs-12 col-sm-6 p-0",children:Object(h.jsx)("img",{src:"http://66.97.46.222/images/".concat(i),className:"img-fluid animate__animated animate__fadeInLeft",alt:s})}),Object(h.jsxs)("div",{className:"col-xs-12 col-sm-6 p-5 text-center mt-5",children:[Object(h.jsx)("h3",{children:a}),Object(h.jsx)("h5",{children:s}),Object(h.jsxs)("h3",{className:"mt-2 text-left",children:[Object(h.jsx)("span",{className:"text-danger",children:Object(h.jsxs)("b",{children:["$",r,".-"]})}),Object(h.jsx)("br",{}),"pesos argentinos"]}),Object(h.jsx)("div",{className:"my-5 text-center",children:d(t).length>0?Object(h.jsxs)("div",{children:[Object(h.jsxs)("p",{className:"text-danger",children:[" Ya tienes ",d(t)[0].quantity," en el carrito"]}),n-d(t)[0].quantity===0?"":Object(h.jsx)(k,{initial:1,onAdd:j,enCarro:!0})]}):Object(h.jsx)(k,{stock:n,initial:1,enCarro:!1,onAdd:j})})]})]})};var I=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(!0),l=Object(i.a)(s,2),d=l[0],b=l[1],m=Object(j.g)().id;return Object(c.useEffect)((function(){var e=function(){var e=Object(r.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/products/".concat(m)).then((function(e){var t=e.data;n(t),b(!1),console.log(t)})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[m]),Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row",children:d?Object(h.jsx)("div",{className:"text-center mt-5",children:Object(h.jsx)("div",{className:"spinner-border",role:"status"})}):Object(h.jsx)(z,{id:a.id,title:a.name,description:a.description,price:a.price,pictureUrl:a.image},a.id)})})})};var E=function(e){var t=e.id,a=e.title,n=e.description,s=e.price,r=e.off,i=e.pictureUrl,l=Object(c.useContext)(x),o=l.addItem,j=l.isInCart,b=function(e){o(t,a,e,0==r||null==r||""==r?s:r,i)};return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"col-xs-12 col-sm-6 col-md-3 p-1 mb-3 pb-3 text-center",children:Object(h.jsxs)("div",{className:"shadow m-3 p-1 py-3 border contenedor-oferta",children:[0==r||null==r||""==r?"":Object(h.jsx)("div",{className:"oferta shadow",children:"OFERTA"}),Object(h.jsx)(d.b,{to:"/item/"+t,children:Object(h.jsx)("img",{src:"http://66.97.46.222/images/".concat(i),className:"img-fluid img-item p-2 animate__animated animate__fadeIn",style:{objectFit:"cover"},alt:n})}),Object(h.jsx)("h5",{className:"card-title text-center my-0 py-0 pt-1",children:Object(h.jsx)(d.b,{to:"/item/"+t,className:"product-title",children:a.length>30?Object(h.jsxs)(h.Fragment,{children:[a.substring(0,30),"..."]}):a})}),0==r||null==r||""==r?Object(h.jsx)("h3",{className:"card-text text-center mt-2 product-price",children:Object(h.jsxs)("b",{children:["$",s,".-"]})}):Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("h3",{className:"card-text text-center mt-2 product-price",children:[" ",Object(h.jsxs)("span",{style:{textDecoration:"line-through"},children:["$",s]}),Object(h.jsxs)("b",{children:[" $",r,".-"]})]})}),j(t).length>0?Object(h.jsxs)("div",{children:[0===j(t)[0].quantity?"":Object(h.jsx)(k,{initial:1,onAdd:b,enCarro:!0}),Object(h.jsxs)("p",{className:"text-dark pt-2 text-xs",children:[" Tienes ",j(t)[0].quantity," en el carrito"]})]}):Object(h.jsx)(k,{initial:1,enCarro:!1,onAdd:b})]})})})};var _=function(e){var t=e.listado,a=e.loader;return Object(j.g)().id,Object(h.jsxs)(h.Fragment,{children:[a?Object(h.jsx)("div",{className:"text-center mt-5",children:Object(h.jsx)("div",{className:"spinner-border",role:"status"})}):"",t.length>0?t.map((function(e){return Object(h.jsx)(E,{id:e.id,title:e.name,description:e.description,price:e.sale,off:e.off,pictureUrl:e.image},e.id)})):Object(h.jsx)("p",{className:"text-center",children:"No hay productos en esta categor\xeda."})]})};var V=function(e){var t=e.greeting,a=e.data,n=e.loader,s=Object(j.g)().id,l=Object(c.useState)([]),d=Object(i.a)(l,2),b=d[0],m=d[1],u=Object(c.useState)(""),x=Object(i.a)(u,2),O=x[0],p=x[1];return Object(c.useEffect)((function(){if(s){var e=function(){var e=Object(r.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/category/".concat(s)).then((function(e){var t=e.data;m(t.products),p(t.category[0].name),console.log(t.category[0].name)})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}else m(a)}),[a,s]),Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"container mb-5",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-12 mt-5 pb-3",children:Object(h.jsxs)("p",{className:"titulo-pagina",style:{margin:"0.5em",paddingLeft:0,listStyle:"none",color:"#a9a9a9"},children:[Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-caret-right-fill",viewBox:"0 0 16 16",children:Object(h.jsx)("path",{d:"M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"})}),s?O:t]})}),Object(h.jsx)(_,{listado:b,loader:n})]})})})};var q=function(e){var t=e.id,a=e.title,n=e.price,s=e.quantity,r=e.pictureUrl,i=Object(c.useContext)(x).removeItem;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"col-sm-1"}),Object(h.jsx)("div",{className:"col-6 col-sm-4 my-3 text-center delete-padre",children:Object(h.jsx)(d.b,{to:"/item/"+t,children:Object(h.jsx)("img",{src:"http://66.97.46.222/images/".concat(r),className:"img-fluid img-item animate__animated animate__fadeIn",alt:a})})}),Object(h.jsx)("div",{className:"col-sm-2 mob"}),Object(h.jsxs)("div",{className:"col-6 col-sm-4 my-3 text-center delete-padre texto-cart",children:[Object(h.jsx)("h5",{className:"card-title text-center my-0 py-0 pt-2",children:Object(h.jsx)(d.b,{to:"/item/"+t,className:"product-title",children:a})}),Object(h.jsxs)("h5",{className:"text-center mt-1",children:[s," x ",Object(h.jsxs)("b",{children:["$",n,".-"]})]}),Object(h.jsxs)("h5",{className:"text-center text-black mt-1",children:[Object(h.jsx)("span",{className:"text-muted",children:"Total:"})," ",Object(h.jsxs)("b",{children:["$",s*n,".-"]})]}),Object(h.jsx)("button",{className:"btn btn-dark btn-sm delete",onClick:function(){i(t)},children:Object(h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-trash",viewBox:"0 0 16 16",children:[Object(h.jsx)("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),Object(h.jsx)("path",{"fill-rule":"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"})]})})]}),Object(h.jsx)("div",{className:"col-sm-1"})]})};var F=function(e){var t=e.greeting,a=Object(c.useContext)(x),n=a.totalCarro,s=a.carro,r=a.removeItem,i=a.unidadesCarro,l=a.clear;return console.log(s),Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"col-12 my-5",children:[Object(h.jsxs)("p",{className:"titulo-pagina",style:{margin:"0.5em",paddingLeft:0,listStyle:"none",color:"#a9a9a9"},children:[Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-caret-right-fill",viewBox:"0 0 16 16",children:Object(h.jsx)("path",{d:"M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"})}),Object(h.jsx)("span",{className:"px-2",children:t}),i>0?Object(h.jsx)("button",{onClick:function(){l()},className:"vaciar btn btn-dark mb-2",children:"Vaciar"}):""]}),0!==n?Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"row justify-content-around",children:[s.map((function(e){return Object(h.jsx)(q,{id:e.id,price:e.precio,quantity:e.quantity,pictureUrl:e.pictureUrl,title:e.title,removeItem:r},e.id)})),Object(h.jsx)("hr",{}),Object(h.jsxs)("h3",{className:"text-center",children:["TOTAL: $",n,".-"]}),Object(h.jsx)(d.b,{className:"btn-cart",to:"/checkout",children:Object(h.jsx)("button",{className:"btn btn-dark mx-4",children:"Finalizar Compra"})})]})}):Object(h.jsxs)("div",{className:"text-center",children:[Object(h.jsx)("h1",{className:"text-center pt-3",children:" Tu carrito est\xe1 vac\xedo"}),Object(h.jsx)("h3",{className:"text-danger text-center",children:"\xbfQu\xe9 esper\xe1s para llenarlo?"}),Object(h.jsx)(d.b,{to:"/",children:Object(h.jsx)("button",{className:"btn btn-dark mt-3",children:"Quiero empezar a comprar \ud83d\ude04"})})]})]})})})})};var T=function(e){var t=e.quantity,a=e.pictureUrl,c=e.title;return Object(h.jsxs)("div",{className:"col-3 col-sm-4 col-md-4 pb-5",children:[Object(h.jsx)("img",{src:"http://66.97.46.222/images/".concat(a),className:"img-fluid img-item animate__animated animate__fadeIn",alt:"imagen"}),Object(h.jsx)("p",{className:"text-center pt-2 pb-0 m-0",children:c}),Object(h.jsxs)("p",{className:"text-center p-0 m-0",children:[t," ",t>1?"unidades":"unidad"," "]})]})};var A=function(e){var t=e.comprobarEmail,a=e.email,c=e.setEmail,n=e.loader,s=(e.setEmailValidate,e.emailValidate,e.msj);return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("form",{onSubmit:t,children:[Object(h.jsx)("div",{className:"form-group mb-3",children:Object(h.jsx)("p",{className:"text-danger",children:"Antes de avanzar con el pedido, debemos comprobar si sos cliente, ingres\xe1 tu mail a continuaci\xf3n."})}),Object(h.jsxs)("div",{className:"form-group pt-3 pb-2",children:[Object(h.jsx)("input",{onChange:function(e){return c(e.target.value)},className:"form-control",type:"email",placeholder:"E-mail",value:a}),Object(h.jsx)("p",{className:"pt-3 text-center",style:{color:"red"},children:s})]}),Object(h.jsxs)("center",{children:[n?Object(h.jsxs)("div",{className:"text-center my-3",children:[Object(h.jsx)("p",{className:"animate__animated animate__backInLeft",children:"Estamos comprobando tu email... \ud83d\ude1c"}),Object(h.jsx)("div",{className:"spinner-border",role:"status"})]}):"",Object(h.jsx)(d.b,{to:"/cart",children:Object(h.jsx)("button",{className:"btn btn-danger m-1",children:"Carrito"})}),Object(h.jsx)("button",{className:"btn btn-danger m-1 finalizar-compra",children:"Comprobar Email"})]})]})})};var M=function(e){var t=e.setIdOrden,a=e.setNombreComprador,n=Object(c.useState)(""),s=Object(i.a)(n,2),r=s[0],l=(s[1],Object(c.useState)("")),o=Object(i.a)(l,2),j=o[0],b=o[1],m=Object(c.useState)([]),u=Object(i.a)(m,2),O=u[0],p=u[1],g=Object(c.useState)(!1),f=Object(i.a)(g,2),N=f[0],w=f[1],y=Object(c.useState)(!1),C=Object(i.a)(y,2),S=C[0],k=C[1],z=Object(c.useState)(""),I=Object(i.a)(z,2),E=I[0],_=I[1],V=Object(c.useState)(!1),q=Object(i.a)(V,2),F=q[0],T=q[1],M=Object(c.useContext)(x),U=M.totalCarro,L=(M.setCarro,M.carro),H=(M.carroFinal,M.setCarroFinal,M.setUnidadesCarro,M.setTotalCarro,M.notify),R=M.clear;return Object(c.useEffect)((function(){console.log(L),S&&1===O.active&&T(!0)}),[S]),Object(h.jsx)("div",{className:"my-3",children:S?Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),w(!0),a(r),v.post("/pedidos",{cliente_id:O.id,subtotal:U,descuento:"0",total:U,items:L}).then((function(e){setTimeout((function(){console.log(e),w(!1),t(!0),R()}),3e3)})).catch((function(e){console.log(e)}))},children:[Object(h.jsxs)("h3",{className:"center pt-3",children:["\xa1Hola ",O.name,"! \ud83d\udc4b\ud83c\udffc"]}),F?Object(h.jsx)("p",{className:"text-muted",children:"Ya estamos listos para que finalices tu pedido."}):Object(h.jsx)("p",{style:{color:"red"},children:"Lo sentimos, pero tu pedido no puede ser procesado, ponte en contacto con nosotros."}),F?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"form-group mb-3 pt-4",children:Object(h.jsx)("input",{className:"form-control",type:"text",placeholder:"Nombre",value:"".concat(O.name," ").concat(O.last_name),readOnly:!0})}),Object(h.jsx)("div",{className:"form-group mb-3",children:Object(h.jsx)("input",{onChange:function(e){return b(e.target.value)},className:"form-control",type:"text",placeholder:"Email",value:j,readOnly:!0})})]}):"",Object(h.jsxs)("center",{children:[N?Object(h.jsxs)("div",{className:"text-center my-3",children:[Object(h.jsx)("p",{className:"animate__animated animate__backInLeft",children:"Estamos finalizando tu pedido \ud83d\ude1c"}),Object(h.jsx)("div",{className:"spinner-border",role:"status"})]}):"",Object(h.jsx)(d.b,{to:"/cart",children:Object(h.jsx)("button",{className:"btn btn-danger m-1",children:"Carrito"})}),F?Object(h.jsx)("button",{className:"btn btn-danger m-1 finalizar-compra",children:"Finalizar Compra"}):""]})]}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"alert alert-danger",role:"alert",children:[":: RECORD\xc1 QUE SI NO EST\xc1S REGISTRADO NO PODR\xc1S AVANZAR",Object(h.jsx)("br",{}),Object(h.jsx)("p",{className:"pt-3 text-muted",children:"Si quer\xe9s realizar un pedido y a\xfan no sos cliente, contactate con nosotros al siguiente tel\xe9fono 1134020429 o escribinos por Whatsapp haciendo click aqu\xed."})]}),Object(h.jsx)(A,{comprobarEmail:function(e){e.preventDefault(),""!==j?(w(!0),v.post("/check",{email:j}).then((function(e){console.log(e.data.length),p(e.data[0]),1===e.data.length?k(!0):_("Lo sentimos pero tu correo no se encuentra asociado a un cliente."),w(!1)})).catch((function(e){console.log(e)}))):H("Debes completar tu E-mail")},setEmail:b,msj:E,email:j,loader:N,emailValidate:S,setEmailValidate:k})]})})};var U=function(e){var t=e.greeting,a=Object(c.useContext)(x),n=a.totalCarro,s=a.carro,r=Object(c.useState)(null),l=Object(i.a)(r,2),o=l[0],j=l[1],b=Object(c.useState)(""),m=Object(i.a)(b,2),u=m[0],O=m[1];return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"col-12 my-5",children:[Object(h.jsxs)("p",{className:"titulo-pagina",style:{margin:"0.5em",paddingLeft:0,listStyle:"none",color:"#a9a9a9"},children:[Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-caret-right-fill",viewBox:"0 0 16 16",children:Object(h.jsx)("path",{d:"M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"})}),t]}),null===o?0!==n?Object(h.jsx)("div",{className:"container-fluid my-5",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-xs-12 col-sm-6",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row",children:s.map((function(e){return Object(h.jsx)(T,{id:e.id,price:e.precio,quantity:e.quantity,pictureUrl:e.pictureUrl,title:e.title},e.id)}))})})}),Object(h.jsxs)("div",{className:"col-xs-12 col-sm-6",children:[Object(h.jsxs)("h1",{className:"text-left",children:["TOTAL: $",n,".-"]}),Object(h.jsx)(M,{setIdOrden:j,setNombreComprador:O})]})]})}):Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row mt-5",children:Object(h.jsxs)("div",{className:"text-center",children:[Object(h.jsx)("h1",{className:"text-center pt-5",children:" Tu carrito est\xe1 vac\xedo"}),Object(h.jsx)("h3",{className:"text-danger text-center",children:"\xbfQu\xe9 esper\xe1s para llenarlo?"}),Object(h.jsx)(d.b,{to:"/",children:Object(h.jsx)("button",{className:"btn btn-danger mt-3",children:"Quiero empezar a comprar \ud83d\ude04"})})]})})}):Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"animate__animated animate__backInLeft",children:[Object(h.jsxs)("h1",{className:"text-center text-success pt-5",children:["\xa1Gracias por tu compra ",u,"!"]}),Object(h.jsx)("h3",{className:"text-center text-muted pb-3",children:"Nos vemos pronto \ud83d\ude09"}),Object(h.jsx)("h1",{className:"text-center",children:Object(h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"128",height:"128",fill:"currentColor",className:"bi bi-bag-check",viewBox:"0 0 16 16",children:[Object(h.jsx)("path",{"fill-rule":"evenodd",d:"M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"}),Object(h.jsx)("path",{d:"M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"})]})}),Object(h.jsx)("center",{children:Object(h.jsx)(d.b,{to:"/",children:Object(h.jsx)("button",{className:"btn btn-dark add",children:"Volver al Inicio"})})})]})})})]})})})})})};var L=Object(j.h)((function(e){var t=e.history;return Object(c.useEffect)((function(){var e=t.listen((function(){window.scrollTo(0,0)}));return function(){e()}}),[]),null}));var H=function(e){var t=e.loader,a=Object(j.g)().s,n=Object(c.useState)([]),s=Object(i.a)(n,2),l=s[0],d=s[1];return Object(c.useEffect)((function(){var e=function(){var e=Object(r.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/search?s=".concat(a)).then((function(e){var t=e.data;console.log(t),d(t)})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[a]),Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(V,{greeting:"Resultados para ".concat(a),data:l,loader:t})})},R=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(!0),l=Object(i.a)(s,2),b=l[0],m=l[1];return Object(c.useEffect)((function(){var e=function(){var e=Object(r.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/news").then((function(e){var t=e.data;n(t),m(!1),console.log(t)})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(h.jsx)(O,{children:Object(h.jsxs)(d.a,{children:[Object(h.jsx)(C,{}),Object(h.jsx)(L,{}),Object(h.jsxs)(j.c,{children:[Object(h.jsx)(j.a,{exact:!0,path:"/",children:Object(h.jsx)(V,{greeting:"Novedades",data:a,loader:b})}),Object(h.jsx)(j.a,{exact:!0,path:"/category/:id",children:Object(h.jsx)(V,{greeting:"Listado de Productos",data:a,loader:b})}),Object(h.jsx)(j.a,{exact:!0,path:"/item/:id",children:Object(h.jsx)(I,{greeting:"Detalle de Producto",data:a})}),Object(h.jsx)(j.a,{exact:!0,path:"/cart",children:Object(h.jsx)(F,{greeting:"Cesta de Compras"})}),Object(h.jsx)(j.a,{exact:!0,path:"/checkout",children:Object(h.jsx)(U,{greeting:"Finalizando tu Compra"})}),Object(h.jsx)(j.a,{exact:!0,path:"/search/:s",children:Object(h.jsx)(H,{greeting:"Finalizando tu Compra",loader:b})})]}),Object(h.jsx)(S,{})]})})};a(89);s.a.render(Object(h.jsx)(R,{}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.966508cf.chunk.js.map