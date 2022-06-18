(function(){"use strict";var t={290:function(t,e,n){var o=n(144),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("NavBar"),n("div",{staticClass:"cuerpo"},[n("div",{staticClass:"contenido"},[n("div",{staticClass:"jugador"},[n("p",{staticClass:"titulo"},[t._v("JUGADOR 1")]),n("b-img",{staticClass:"imagen",attrs:{src:"https://www.kindpng.com/picc/m/212-2122689_rock-paper-scissors-random-rock-paper-scissors-png.png",id:"imagen"}}),n("div",{staticClass:"contenedor-botones"},[n("b-button-group",{staticClass:"botones"},t._l(t.acciones,(function(e){return n("b-button",{key:e,on:{click:function(n){t.mostrarImagen(e),t.resultadoComputadora()}}},[t._v(t._s(e.nombre))])})),1)],1)],1),n("div",{staticClass:"computadora"},[n("p",{staticClass:"titulo"},[t._v("COMPUTADORA")]),n("b-img",{staticClass:"imagen",attrs:{src:"https://www.kindpng.com/picc/m/212-2122689_rock-paper-scissors-random-rock-paper-scissors-png.png",id:"imagenCPU"}})],1)]),0!==t.accionUsuario&&0!==t.accionCPU?n("p",{staticClass:"resultado",attrs:{id:"result"},domProps:{textContent:t._s(t.determinarGanador())}}):t._e(),n("b-container",{staticClass:"tabla"},[n("b-row",{staticClass:"titulos"},[n("b-col",[t._v("Victorias")]),n("b-col",[t._v("Derrotas")]),n("b-col",[t._v("Empates")])],1),n("b-row",{staticClass:"resultados"},[n("b-col",{domProps:{textContent:t._s(Math.trunc(t.victorias/100))}}),n("b-col",{domProps:{textContent:t._s(Math.trunc(t.derrotas/100))}}),n("b-col",{domProps:{textContent:t._s(Math.trunc(t.empates/100))}})],1)],1)],1)],1)},s=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-navbar",{staticClass:"nav",attrs:{variant:"faded",type:"light"}},[n("img",{staticClass:"logo",attrs:{src:"https://cdn.shopify.com/s/files/1/0603/7130/4638/t/2/assets/logo_c.png?v=150900189943828018881645114369",alt:"logo"}})])],1)},a=[],c={name:"NavBar",props:{msg:String}},u=c,l=n(1),p=(0,l.Z)(u,i,a,!1,null,"25958068",null),d=p.exports,m={data(){return{acciones:[{id:1,nombre:"piedra"},{id:2,nombre:"papel"},{id:3,nombre:"tijeras"}],accionUsuario:null,accionCPU:null,victorias:0,derrotas:0,empates:0}},name:"App",components:{NavBar:d},methods:{mostrarImagen(t){"piedra"===t.nombre&&document.getElementById("imagen").setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTreo2pk8ccBK5Sr68nN_zHMSMYy4EMmuqQmjO5RPu2zXPZIMqUXtzw7SYQ-RRHfrmvJ3U&usqp=CAU"),"papel"===t.nombre&&document.getElementById("imagen").setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV99ddM7Uk0kbCyCX0qdz6ivTfl2R3mZLGv_F36YK6nV3DxPENFECO-a_HHThDGltkZ5Q&usqp=CAU"),"tijeras"===t.nombre&&document.getElementById("imagen").setAttribute("src","https://www.kindpng.com/picc/m/502-5025794_rock-paper-scissors-clipart-hd-png-download.png"),this.accionUsuario=t},resultadoComputadora(){var t=~~(Math.random()*this.acciones.length),e=this.acciones[t];"piedra"===e.nombre&&document.getElementById("imagenCPU").setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTreo2pk8ccBK5Sr68nN_zHMSMYy4EMmuqQmjO5RPu2zXPZIMqUXtzw7SYQ-RRHfrmvJ3U&usqp=CAU"),"papel"===e.nombre&&document.getElementById("imagenCPU").setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV99ddM7Uk0kbCyCX0qdz6ivTfl2R3mZLGv_F36YK6nV3DxPENFECO-a_HHThDGltkZ5Q&usqp=CAU"),"tijeras"===e.nombre&&document.getElementById("imagenCPU").setAttribute("src","https://www.kindpng.com/picc/m/502-5025794_rock-paper-scissors-clipart-hd-png-download.png"),this.accionCPU=e},determinarGanador(){return null!==this.accionUsuario&&"piedra"===this.accionUsuario.nombre&&"tijeras"===this.accionCPU.nombre||null!==this.accionUsuario&&"papel"===this.accionUsuario.nombre&&"piedra"===this.accionCPU.nombre||null!==this.accionUsuario&&"tijeras"===this.accionUsuario.nombre&&"papel"===this.accionCPU.nombre?(this.victorias++,document.getElementById("result").setAttribute("class","resultado ganador"),"HAS GANADO!!"):null!==this.accionUsuario&&"piedra"===this.accionUsuario.nombre&&"papel"===this.accionCPU.nombre||null!==this.accionUsuario&&"papel"===this.accionUsuario.nombre&&"tijeras"===this.accionCPU.nombre||null!==this.accionUsuario&&"tijeras"===this.accionUsuario.nombre&&"piedra"===this.accionCPU.nombre?(this.derrotas++,document.getElementById("result").setAttribute("class","resultado perdedor"),"HAS PERDIDO"):null!==this.accionUsuario&&this.accionUsuario.nombre===this.accionCPU.nombre?(document.getElementById("result").setAttribute("class","resultado empatado"),this.empates++,"EMPATE"):void 0}}},b=m,g=(0,l.Z)(b,r,s,!1,null,null,null),h=g.exports,f=n(32);n(44);o["default"].use(f.ZPm),o["default"].config.productionTip=!1,new o["default"]({render:t=>t(h)}).$mount("#app")}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var s=e[o]={exports:{}};return t[o](s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,s){if(!o){var i=1/0;for(l=0;l<t.length;l++){o=t[l][0],r=t[l][1],s=t[l][2];for(var a=!0,c=0;c<o.length;c++)(!1&s||i>=s)&&Object.keys(n.O).every((function(t){return n.O[t](o[c])}))?o.splice(c--,1):(a=!1,s<i&&(i=s));if(a){t.splice(l--,1);var u=r();void 0!==u&&(e=u)}}return e}s=s||0;for(var l=t.length;l>0&&t[l-1][2]>s;l--)t[l]=t[l-1];t[l]=[o,r,s]}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,s,i=o[0],a=o[1],c=o[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(c)var l=c(n)}for(e&&e(o);u<i.length;u++)s=i[u],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(l)},o=self["webpackChunkcachipun_vue"]=self["webpackChunkcachipun_vue"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(290)}));o=n.O(o)})();
//# sourceMappingURL=app.090fcce2.js.map